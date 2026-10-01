/* ============ TOOLS & CALCULATORS ============ */
(function () {
  const A = window.App, S = A.S, esc = A.esc, sf = A.sf;
  const T = A.tools;
  const SI = { p: 1e-12, n: 1e-9, u: 1e-6, 'μ': 1e-6, 'µ': 1e-6, m: 1e-3, k: 1e3, K: 1e3, M: 1e6, meg: 1e6, G: 1e9 };
  A.parseSI = s => {
    s = String(s).trim().replace(/−/g, '-').replace(/,/g, '');
    const m = s.match(/^([-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)\s*(meg|[pnuµμmkKMG])?/i); if (!m) return NaN;
    let v = parseFloat(m[1]); const suf = m[2]; if (suf) { const k = suf === 'meg' || suf === 'MEG' ? 'meg' : (SI[suf] ? suf : suf.toLowerCase()); v *= SI[k] || 1; } return v;
  };
  const num = v => { const x = A.parseSI(v); return x; };
  const fmt = (x, u) => { if (!isFinite(x)) return '—'; const a = Math.abs(x); let s; if (a === 0) s = '0'; else if (a >= 1e6 || a < 1e-3) s = x.toExponential(4); else s = String(sf(x, 6)); return s + (u ? ' ' + u : ''); };
  A.fmt = fmt;
  const eng = (x, u) => { if (!isFinite(x)) return '—'; const a = Math.abs(x); const t = [[1e9, 'G'], [1e6, 'M'], [1e3, 'k'], [1, ''], [1e-3, 'm'], [1e-6, 'μ'], [1e-9, 'n'], [1e-12, 'p']]; if (a < 1e-12) return '0 ' + u; for (const [f, p] of t) if (a >= f) return sf(x / f, 4) + ' ' + p + u; return x.toExponential(2) + ' ' + u; };
  A.eng = eng;

  /* ---------- list page ---------- */
  const meta = [
    ['color', '🎨', 'Resistor color-code trainer', 'Decode / encode 4-, 5-band resistors with speed scoring.'],
    ['solver', '🔌', 'DC circuit solver', 'Type a netlist; get every node voltage, branch current and power (nodal analysis). Check your KVL/KCL homework.'],
    ['rc', '📈', 'RC charge/discharge simulator', 'Plot v_C(t), find τ and any time value.'],
    ['cooling', '🌡️', 'Newton cooling lab', 'Paste T-vs-t data → fit K, graph, predict final T, time to reach a target.'],
    ['score', '🏆', 'Thermo score calculator (2019 rules)', 'Test + chart + heat + prediction scoring.'],
    ['calc', '🧮', 'Formula calculators (40+)', 'Ohm, dividers, transformers, LED, Carnot, gas laws, conduction, radiation…'],
    ['convert', '🔁', 'Unit & temperature converters', '°C/°F/K/°R, J/cal/BTU/kWh, pressure, power…'],
    ['heating', '♨️', 'Heating-curve calculator', 'Ice → water → steam energy by stage, with plot.'],
    ['logic', '🔣', 'Logic truth-table builder', 'Expressions with AND/OR/NOT/XOR/NAND/NOR.']
  ];
  const TEV = { color: 'circuit', solver: 'circuit', rc: 'circuit', logic: 'circuit', cooling: 'thermo', score: 'thermo', heating: 'thermo' };
  A.views.tools = () => A.render(`<a href="#/practice">← Practice</a><h1>Tools & calculators · ${DATA.events[S.ev].short}</h1><p class="muted">Use these to check your hand work — never as a substitute for learning the method (you get two calculators and a binder at the event, not a laptop).</p><div class="grid g3">${meta.filter(m => !TEV[m[0]] || TEV[m[0]] === S.ev).map(m => `<a class="card lrow" style="display:block;margin:0" href="#/tools/${m[0]}"><div style="font-size:1.8rem">${m[1]}</div><b>${m[2]}</b><div class="small muted">${m[3]}</div></a>`).join('')}</div>
  <div class="card"><a class="btn pri" href="#/lab">Hands-On Lab</a></div>`);
  A.views.tool = name => {
    const m = meta.find(x => x[0] === name); if (!m || !T[name]) return A.render('<p>Unknown tool</p>');
    A.render(`<a href="#/tools">← tools</a><h1>${m[1]} ${m[2]}</h1><p class="muted">${m[3]}</p><div id="tool"></div>`); T[name](A.$('#tool'));
  };
  A.route(/^\/tools$/, A.views.tools); A.route(/^\/tools\/(\w+)$/, A.views.tool);

  /* ============ 1. COLOR CODE ============ */
  const COL = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
  const HEX = { black: '#111', brown: '#7b4a1e', red: '#e11d1d', orange: '#f97316', yellow: '#facc15', green: '#16a34a', blue: '#2563eb', violet: '#8b5cf6', gray: '#9ca3af', white: '#f8fafc', gold: '#d4af37', silver: '#c0c0c0' };
  const TOL = { brown: '±1%', red: '±2%', green: '±0.5%', blue: '±0.25%', violet: '±0.1%', gray: '±0.05%', gold: '±5%', silver: '±10%' };
  const MULT = c => c === 'gold' ? 0.1 : c === 'silver' ? 0.01 : Math.pow(10, COL.indexOf(c));
  const RES = (bands) => `<svg viewBox="0 0 300 70" width="300" class="dia" style="background:transparent;border:none"><line x1="0" y1="35" x2="300" y2="35" stroke="#9ca3af" stroke-width="4"/><rect x="50" y="10" width="200" height="50" rx="22" fill="#d9b98a"/>${bands.map((c, i) => `<rect x="${72 + i * 34}" y="10" width="14" height="50" fill="${HEX[c]}" stroke="#0004"/>`).join('')}</svg>`;
  const fmtR = o => o >= 1e6 ? sf(o / 1e6, 4) + ' MΩ' : o >= 1e3 ? sf(o / 1e3, 4) + ' kΩ' : sf(o, 4) + ' Ω';
  T.color = host => {
    let cur, n = 0, c = 0, t0, times = [];
    host.innerHTML = `<div class="card"><div class="row"><select id="cmode"><option value="dec">Mode: read bands → value</option><option value="enc">Mode: value → bands</option></select><select id="cb"><option value="4">4-band</option><option value="5">5-band</option></select><span class="sp"></span><span class="muted small" id="cst"></span></div><div id="cq" class="center"></div></div>
    <div class="card"><h3 style="margin-top:0">Decoder</h3><div class="row" id="dec"></div><div class="cres" id="dres"></div></div>
    <div class="card"><h3 style="margin-top:0">Chart</h3><div class="tablewrap"><table><tr><th>Color</th><th>Digit</th><th>Multiplier</th><th>Tolerance</th></tr>${COL.map((k, i) => `<tr><td><span class="res" style="width:22px;background:${HEX[k]}"></span> ${k}</td><td>${i}</td><td>×10<sup>${i}</sup></td><td>${TOL[k] || '—'}</td></tr>`).join('')}<tr><td><span class="res" style="width:22px;background:${HEX.gold}"></span> gold</td><td>–</td><td>×0.1</td><td>±5%</td></tr><tr><td><span class="res" style="width:22px;background:${HEX.silver}"></span> silver</td><td>–</td><td>×0.01</td><td>±10%</td></tr></table></div><p class="small muted">Mnemonic: <b>B</b>ad <b>B</b>eer <b>R</b>ots <b>O</b>ur <b>Y</b>oung <b>G</b>uts <b>B</b>ut <b>V</b>odka <b>G</b>oes <b>W</b>ell (skip it if it offends — make your own!)</p></div>`;
    const sel = (id, opts) => `<select id="${id}">${opts.map(o => `<option>${o}</option>`).join('')}</select>`;
    const gen = () => {
      const nb = +A.$('#cb', host).value, sig = nb - 2; let digs = []; for (let i = 0; i < sig; i++) digs.push(A.rand.int(i ? 0 : 1, 9));
      const mult = A.rand.pick(COL.slice(0, 7).concat(['gold', 'silver'])); const tol = A.rand.pick(nb === 4 ? ['gold', 'silver', 'brown', 'red'] : ['brown', 'red', 'green', 'blue', 'violet']);
      const val = parseInt(digs.join('')) * MULT(mult);
      cur = { bands: digs.map(d => COL[d]).concat([mult, tol]), val: Math.round(val * 1000) / 1000, nb }; t0 = Date.now(); draw();
    };
    const draw = () => {
      const q = A.$('#cq', host), mode = A.$('#cmode', host).value;
      if (mode === 'dec') { q.innerHTML = RES(cur.bands) + `<div class="row" style="justify-content:center"><input type="text" id="ca" placeholder="value e.g. 4.7k, 220, 1M" style="width:200px"><button class="btn pri" id="cg">Check</button><button class="btn ghost" id="cs">Skip</button></div><div id="cf" class="cres"></div>`; A.$('#ca', host).focus(); A.$('#cg', host).onclick = checkDec; A.$('#ca', host).onkeydown = e => { if (e.key === 'Enter') checkDec(); }; }
      else { q.innerHTML = `<div style="font-size:1.6rem;margin:8px"><b>${fmtR(cur.val)}</b> ${TOL[cur.bands[cur.bands.length - 1]]}</div><div class="row" style="justify-content:center">${cur.bands.map((b, i) => sel('eb' + i, i < cur.nb - 2 ? COL : i === cur.nb - 2 ? COL.concat(['gold', 'silver']) : Object.keys(TOL))).join('')}<button class="btn pri" id="cg">Check</button><button class="btn ghost" id="cs">Skip</button></div><div id="cfv" style="height:60px"></div><div id="cf" class="cres"></div>`; const upd = () => { A.$('#cfv', host).innerHTML = RES(cur.bands.map((_, i) => A.$('#eb' + i, host).value)); }; cur.bands.forEach((_, i) => A.$('#eb' + i, host).onchange = upd); upd(); A.$('#cg', host).onclick = checkEnc; }
      A.$('#cs', host).onclick = gen;
    };
    const done = ok => { n++; if (ok) { c++; times.push((Date.now() - t0) / 1000); } A.$('#cst', host).textContent = `${c}/${n} correct · avg ${times.length ? sf(times.reduce((a, b) => a + b) / times.length, 2) : '–'} s`; S.tlBest = S.tlBest; A.markDay(); A.save(); setTimeout(gen, ok ? 500 : 2200); };
    const checkDec = () => { const x = num(A.$('#ca', host).value); const ok = Math.abs(x - cur.val) <= cur.val * 0.001; A.$('#cf', host).textContent = ok ? '✓ ' + fmtR(cur.val) + ' ' + TOL[cur.bands[cur.bands.length - 1]] : '✗ It was ' + fmtR(cur.val) + ' ' + TOL[cur.bands[cur.bands.length - 1]] + '  (' + cur.bands.join('-') + ')'; A.$('#cf', host).style.color = ok ? 'var(--ok)' : 'var(--bad)'; done(ok); };
    const checkEnc = () => { const g = cur.bands.map((_, i) => A.$('#eb' + i, host).value); const ok = g.join() === cur.bands.join(); A.$('#cf', host).textContent = ok ? '✓' : '✗ It was ' + cur.bands.join('-'); A.$('#cf', host).style.color = ok ? 'var(--ok)' : 'var(--bad)'; done(ok); };
    A.$('#cmode', host).onchange = A.$('#cb', host).onchange = gen;
    // decoder
    const d = A.$('#dec', host); d.innerHTML = ['Band 1', 'Band 2', 'Multiplier', 'Tolerance'].map((l, i) => `<label>${l}${sel('d' + i, i < 2 ? COL : i === 2 ? COL.concat(['gold', 'silver']) : Object.keys(TOL))}</label>`).join('') + `<button class="btn" id="dsw">Use 5-band</button>`;
    const dd = () => { const v = [0, 1, 2, 3].map(i => A.$('#d' + i, host).value); const val = (COL.indexOf(v[0]) * 10 + COL.indexOf(v[1])) * MULT(v[2]); A.$('#dres', host).textContent = fmtR(val) + ' ' + TOL[v[3]]; }; [0, 1, 2, 3].forEach(i => A.$('#d' + i, host).onchange = dd); dd(); A.$('#dsw', host).style.display = 'none';
    gen();
  };

  /* ============ 2. DC SOLVER ============ */
  T.solver = host => {
    const presets = {
      'Voltage divider': 'V1 in 0 12\nR1 in out 1k\nR2 out 0 2k',
      'Series-parallel': 'V1 1 0 10\nR1 1 2 100\nR2 2 0 220\nR3 2 0 330\nR4 2 3 47\nR5 3 0 100',
      'Wheatstone bridge': 'V1 a 0 10\nR1 a b 100\nR2 a c 200\nR3 b 0 300\nR4 c 0 600\nR5 b c 1k',
      'Two sources (superposition)': 'V1 1 0 12\nV2 3 0 5\nR1 1 2 100\nR2 2 0 200\nR3 2 3 150',
      'Current source': 'I1 0 1 0.01\nR1 1 0 330\nR2 1 2 470\nR3 2 0 1k',
      'Battery with internal R': 'V1 b 0 9\nRint b 1 1.5\nRL 1 0 12'
    };
    host.innerHTML = `<div class="grid g2"><div class="card"><div class="row"><select id="pre"><option value="">— load example —</option>${Object.keys(presets).map(k => `<option>${k}</option>`).join('')}</select><button class="btn pri" id="go">Solve</button></div><textarea id="net" rows="12" spellcheck="false">${presets['Voltage divider']}</textarea><p class="small muted">Format: <code>R name n1 n2 value</code> · <code>V name n+ n- value</code> (first letter decides type) · <code>I name n_from n_to value</code> (current flows from n_from through the source to n_to). Node <code>0</code> (or gnd) is ground. Suffixes: p n u m k M G. Capacitors = open, inductors = short at DC (use <code>C…</code> / <code>L…</code>). Lines starting with # are comments.</p></div><div class="card"><div id="out" class="small"></div></div></div>`;
    A.$('#pre', host).onchange = e => { if (e.target.value) { A.$('#net', host).value = presets[e.target.value]; solve(); } };
    function solve() {
      const out = A.$('#out', host); try { out.innerHTML = run(A.$('#net', host).value); } catch (e) { out.innerHTML = `<div class="box warn"><b>Error</b>${esc(e.message)}</div>`; }
    }
    function run(text) {
      const els = []; text.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#')).forEach(l => {
        const p = l.split(/\s+/); if (p.length < 4) throw new Error('Bad line: ' + l); const t = p[0][0].toUpperCase(); let v = p.length > 4 ? p[4] : p[3]; const n1 = p[1], n2 = p[2];
        if (!'RVILC'.includes(t)) throw new Error('Unknown element: ' + p[0]);
        const val = t === 'C' || t === 'L' ? 0 : num(p[3]); if (t !== 'C' && t !== 'L' && isNaN(val)) throw new Error('Bad value on: ' + l);
        els.push({ t, name: p[0], a: n1, b: n2, v: val });
      });
      const isG = n => n === '0' || n.toLowerCase() === 'gnd';
      const nodes = []; els.forEach(e => [e.a, e.b].forEach(n => { if (!isG(n) && !nodes.includes(n)) nodes.push(n); }));
      const vs = els.filter(e => e.t === 'V' || e.t === 'L'); const N = nodes.length, M = vs.length, D = N + M;
      if (!N) throw new Error('No nodes'); if (!els.some(e => isG(e.a) || isG(e.b))) throw new Error('Connect something to ground node 0');
      const ix = n => isG(n) ? -1 : nodes.indexOf(n);
      const m = Array.from({ length: D }, () => new Array(D + 1).fill(0));
      els.forEach(e => { const i = ix(e.a), j = ix(e.b);
        if (e.t === 'R') { if (e.v === 0) throw new Error(e.name + ' has 0 Ω — use a wire/0 V source'); const g = 1 / e.v; if (i >= 0) m[i][i] += g; if (j >= 0) m[j][j] += g; if (i >= 0 && j >= 0) { m[i][j] -= g; m[j][i] -= g; } }
        else if (e.t === 'I') { if (i >= 0) m[i][D] -= e.v; if (j >= 0) m[j][D] += e.v; } });
      vs.forEach((e, k) => { const i = ix(e.a), j = ix(e.b), r = N + k; if (i >= 0) { m[i][r] += 1; m[r][i] += 1; } if (j >= 0) { m[j][r] -= 1; m[r][j] -= 1; } m[r][D] = e.t === 'V' ? e.v : 0; });
      // gaussian elimination
      for (let c = 0; c < D; c++) { let p = c; for (let r = c + 1; r < D; r++) if (Math.abs(m[r][c]) > Math.abs(m[p][c])) p = r; if (Math.abs(m[p][c]) < 1e-14) throw new Error('Circuit has no unique solution (floating node, voltage-source loop, or open current source).'); [m[c], m[p]] = [m[p], m[c]]; for (let r = 0; r < D; r++) if (r !== c) { const f = m[r][c] / m[c][c]; if (f) for (let k = c; k <= D; k++) m[r][k] -= f * m[c][k]; } }
      const x = m.map((r, i) => r[D] / r[i]); const V = n => isG(n) ? 0 : x[ix(n)];
      let rows = '', psum = 0, pdel = 0;
      els.forEach(e => {
        if (e.t === 'C') { rows += `<tr><td>${e.name}</td><td>open (DC)</td><td>0</td><td>0</td></tr>`; return; }
        let I, P, vd = V(e.a) - V(e.b);
        if (e.t === 'R') { I = vd / e.v; P = vd * I; psum += P; }
        else if (e.t === 'V' || e.t === 'L') { I = x[N + vs.indexOf(e)]; P = vd * I; if (e.t === 'V') pdel += -P; }
        else { I = e.v; P = vd * I; pdel += -P; }
        rows += `<tr><td>${e.name}</td><td>${eng(vd, 'V')}</td><td>${eng(I, 'A')}</td><td>${eng(P, 'W')}${e.t === 'V' || e.t === 'I' ? (P < 0 ? ' (delivers)' : ' (absorbs)') : ''}</td></tr>`;
      });
      return `<h3 style="margin-top:0">Node voltages</h3><table><tr><th>Node</th><th>Voltage</th></tr>${nodes.map(n => `<tr><td>${esc(n)}</td><td>${eng(V(n), 'V')}</td></tr>`).join('')}</table><h3>Elements</h3><table><tr><th>Element</th><th>V(a)−V(b)</th><th>Current a→b</th><th>Power</th></tr>${rows}</table><p class="muted">Power dissipated in resistors: ${eng(psum, 'W')} · delivered by sources: ${eng(pdel, 'W')} (should match). Sign: negative power = element delivers energy.</p>`;
    }
    A.$('#go', host).onclick = solve; solve();
  };

  /* ============ 3. RC SIM ============ */
  T.rc = host => {
    host.innerHTML = `<div class="grid g2"><div class="card"><div class="row"><label>R (Ω)<input type="text" id="R" value="10k"></label><label>C (F)<input type="text" id="C" value="100u"></label><label>V<sub>s</sub> (V)<input type="text" id="Vs" value="9"></label><label>Mode<select id="md"><option value="c">Charging</option><option value="d">Discharging (from V<sub>s</sub>)</option></select></label></div><label style="margin-top:10px">Time t: <b id="tv"></b><input type="range" id="ts" min="0" max="500" value="100" style="width:100%"></label><div class="cres" id="rr"></div></div><div class="card"><canvas id="cv" width="560" height="330"></canvas></div></div>
    <div class="card"><b>Key facts:</b> τ = RC · after 1τ: 63.2 % (charging) or 36.8 % (discharging) · after 5τ: &gt; 99 % · v_C = V<sub>s</sub>(1−e<sup>−t/τ</sup>) charging, V<sub>s</sub>e<sup>−t/τ</sup> discharging · i = (V<sub>s</sub>/R)e<sup>−t/τ</sup> · energy stored = ½CV².</div>`;
    const q = id => A.$('#' + id, host);
    const draw = () => {
      const R = num(q('R').value), C = num(q('C').value), Vs = num(q('Vs').value); if (!(R > 0 && C > 0)) return; const tau = R * C, tmax = 5 * tau, charging = q('md').value === 'c';
      const t = q('ts').value / 500 * tmax; q('tv').textContent = eng(t, 's') + ' (' + sf(t / tau, 3) + ' τ)';
      const vc = tt => charging ? Vs * (1 - Math.exp(-tt / tau)) : Vs * Math.exp(-tt / tau);
      const cv = q('cv'), g = cv.getContext('2d'), W = cv.width, H = cv.height, P = 44;
      const cs = getComputedStyle(document.body), fg = cs.getPropertyValue('--text') || '#ddd', dim = cs.getPropertyValue('--dim') || '#999', acc = cs.getPropertyValue('--circ') || '#fb0', c2 = cs.getPropertyValue('--circ2') || '#2dd';
      g.clearRect(0, 0, W, H); g.font = '12px monospace'; g.strokeStyle = dim; g.fillStyle = dim; g.lineWidth = 1;
      g.beginPath(); g.moveTo(P, 10); g.lineTo(P, H - P); g.lineTo(W - 10, H - P); g.stroke();
      const X = tt => P + (tt / tmax) * (W - P - 20), Y = v => (H - P) - (v / Vs) * (H - P - 20);
      for (let k = 0; k <= 5; k++) { g.fillText(k + 'τ', X(k * tau) - 8, H - P + 16); g.beginPath(); g.moveTo(X(k * tau), H - P); g.lineTo(X(k * tau), H - P + 4); g.stroke(); }
      g.fillText(sf(Vs, 3) + ' V', 4, Y(Vs) + 4); g.fillText('0', 28, H - P + 4);
      g.setLineDash([4, 4]); g.beginPath(); g.moveTo(P, Y(Vs * (charging ? .632 : .368))); g.lineTo(X(tau), Y(Vs * (charging ? .632 : .368))); g.lineTo(X(tau), H - P); g.stroke(); g.setLineDash([]);
      g.strokeStyle = acc.trim() || '#fb0'; g.lineWidth = 2.5; g.beginPath(); for (let i = 0; i <= 200; i++) { const tt = i / 200 * tmax; i ? g.lineTo(X(tt), Y(vc(tt))) : g.moveTo(X(tt), Y(vc(tt))); } g.stroke();
      g.fillStyle = c2.trim() || '#2dd'; g.beginPath(); g.arc(X(t), Y(vc(t)), 6, 0, 7); g.fill();
      const i = (charging ? 1 : 1) * Vs / R * Math.exp(-t / tau);
      q('rr').textContent = `τ = RC = ${eng(tau, 's')}\nv_C(t) = ${eng(vc(t), 'V')}  (${A.pct(vc(t) / Vs)} of V_s)\ni(t) = ${eng(i, 'A')}\nEnergy stored ½CV² = ${eng(0.5 * C * vc(t) ** 2, 'J')}\nTime to 99 %: ${eng(4.605 * tau, 's')} (4.6τ)`;
    };
    ['R', 'C', 'Vs', 'md', 'ts'].forEach(i => q(i).oninput = draw); draw();
  };

  /* ============ 4. COOLING LAB ============ */
  T.cooling = host => {
    const sample = '0, 70.0\n2, 67.2\n4, 64.5\n6, 62.1\n8, 59.8\n10, 57.4\n12, 55.3\n14, 53.6\n16, 51.6\n18, 49.9\n20, 48.5\n22, 46.8\n24, 45.5\n26, 44.0\n28, 42.8\n30, 41.4';
    host.innerHTML = `<div class="grid g2"><div class="card"><label>Data (time in min, temperature in °C — one pair per line)<textarea id="dat" rows="11">${sample}</textarea></label><div class="row" style="margin-top:8px"><label>Room T<sub>r</sub> (°C)<input type="number" id="tr" value="22" step="0.1"></label><label>Predict at t (min)<input type="number" id="tp" value="25"></label><label>Target T (°C)<input type="number" id="tg" value="50"></label></div><div class="row" style="margin-top:8px"><button class="btn pri" id="fit">Fit &amp; predict</button><button class="btn ghost" id="smp">Reload sample</button></div></div><div class="card"><canvas id="cv" width="560" height="320"></canvas><div class="cres" id="res"></div></div></div>
    <div class="card"><h3 style="margin-top:0">Two-point K (quick)</h3><div class="row"><label>T₀<input type="number" id="a0" value="70"></label><label>T<sub>f</sub><input type="number" id="a1" value="62"></label><label>T<sub>r</sub><input type="number" id="a2" value="22"></label><label>t (min)<input type="number" id="a3" value="25"></label><span class="cres" id="a4"></span></div></div>
    <div class="box key"><b>Method</b>T(t) = T<sub>r</sub> + (T₀ − T<sub>r</sub>)e<sup>−Kt</sup>. Take ln(T − T<sub>r</sub>) vs t: a straight line with slope −K. Lower K = better insulator. Noise note: readings near T<sub>r</sub> amplify error — fit with data while T − T<sub>r</sub> is comfortably large (&gt; 5 °C).</div>`;
    const q = id => A.$('#' + id, host);
    const run = () => {
      const pts = q('dat').value.split('\n').map(l => l.split(/[,\s;\t]+/).map(Number)).filter(p => p.length >= 2 && p.every(isFinite)); const Tr = +q('tr').value;
      const use = pts.filter(p => p[1] - Tr > 0.5); if (use.length < 3) { q('res').textContent = 'Need ≥ 3 points with T > T_r.'; return; }
      const xs = use.map(p => p[0]), ys = use.map(p => Math.log(p[1] - Tr)), n = use.length, mx = xs.reduce((a, b) => a + b) / n, my = ys.reduce((a, b) => a + b) / n;
      let sxx = 0, sxy = 0, syy = 0; xs.forEach((x, i) => { sxx += (x - mx) ** 2; sxy += (x - mx) * (ys[i] - my); syy += (ys[i] - my) ** 2; });
      const slope = sxy / sxx, K = -slope, b = my - slope * mx, r2 = sxy * sxy / (sxx * syy); const T0 = Tr + Math.exp(b); const f = t => Tr + Math.exp(b - K * t);
      const tp = +q('tp').value, tg = +q('tg').value; const ttg = (Math.log(Math.exp(b)) - Math.log(tg - Tr)) / K;
      q('res').textContent = `K = ${sf(K, 4)} min⁻¹  (τ = ${sf(1 / K, 4)} min, half-life ${sf(Math.LN2 / K, 3)} min)\nR² (linearised) = ${sf(r2, 5)}\nFitted T₀ = ${sf(T0, 4)} °C\nPredicted T(${tp} min) = ${sf(f(tp), 4)} °C\nTime to reach ${tg} °C = ${isFinite(ttg) && tg > Tr ? sf(ttg, 4) + ' min' : 'never (≤ T_r)'}\nRMS residual = ${sf(Math.sqrt(pts.reduce((s, p) => s + (p[1] - f(p[0])) ** 2, 0) / pts.length), 3)} °C`;
      const cv = q('cv'), g = cv.getContext('2d'), W = cv.width, H = cv.height, P = 44; g.clearRect(0, 0, W, H); const cs = getComputedStyle(document.body); const dim = cs.getPropertyValue('--dim'), th = cs.getPropertyValue('--therm'), c2 = cs.getPropertyValue('--circ2');
      const tmax = Math.max(tp, ...xs) * 1.05, Tmax = Math.max(T0, ...pts.map(p => p[1])) + 2, Tmin = Math.min(Tr, ...pts.map(p => p[1]), f(tmax)) - 2;
      const X = t => P + t / tmax * (W - P - 16), Y = T => (H - P) - (T - Tmin) / (Tmax - Tmin) * (H - P - 16);
      g.strokeStyle = dim; g.fillStyle = dim; g.font = '12px monospace'; g.beginPath(); g.moveTo(P, 8); g.lineTo(P, H - P); g.lineTo(W - 8, H - P); g.stroke();
      for (let i = 0; i <= 5; i++) { const t = tmax * i / 5, T = Tmin + (Tmax - Tmin) * i / 5; g.fillText(sf(t, 3), X(t) - 8, H - P + 15); g.fillText(sf(T, 3), 6, Y(T) + 4); }
      g.fillText('t (min)', W - 60, H - 8); g.fillText('T (°C)', 6, 12);
      g.setLineDash([3, 4]); g.beginPath(); g.moveTo(P, Y(Tr)); g.lineTo(W - 8, Y(Tr)); g.stroke(); g.setLineDash([]); g.fillText('T_r', W - 28, Y(Tr) - 4);
      g.strokeStyle = th.trim(); g.lineWidth = 2; g.beginPath(); for (let i = 0; i <= 120; i++) { const t = tmax * i / 120; i ? g.lineTo(X(t), Y(f(t))) : g.moveTo(X(t), Y(f(t))); } g.stroke();
      g.fillStyle = c2.trim(); pts.forEach(p => { g.beginPath(); g.arc(X(p[0]), Y(p[1]), 3.5, 0, 7); g.fill(); });
      g.strokeStyle = '#34d399'; g.strokeRect(X(tp) - 5, Y(f(tp)) - 5, 10, 10);
    };
    const two = () => { const T0 = +q('a0').value, Tf = +q('a1').value, Tr = +q('a2').value, t = +q('a3').value; const K = Math.log((T0 - Tr) / (Tf - Tr)) / t; q('a4').textContent = `K = ${sf(K, 4)} min⁻¹`; };
    q('fit').onclick = run; q('smp').onclick = () => { q('dat').value = sample; run(); }; ['a0', 'a1', 'a2', 'a3'].forEach(i => q(i).oninput = two); ['tr', 'tp', 'tg'].forEach(i => q(i).oninput = run); run(); two();
  };

  /* ============ 5. SCORE CALC ============ */
  T.score = host => {
    host.innerHTML = `<div class="box unv"><b>Rules status</b>These are the <b>2019 Division C</b> formulas (verified from NMT 2019 workshop slides). The 2027 rubric is UNVERIFIED — get the 2027 PDF (see <a href="#/rules">Rules</a>) and compare.</div><div class="grid g2"><div class="card"><div class="grid g2"><label>Your test points<input type="number" id="a" value="60"></label><label>Highest team test points<input type="number" id="b" value="80"></label><label>Chart score (0–10)<input type="number" id="c" value="8"></label><label>Your k (min⁻¹)<input type="number" id="k" value="0.0073" step="0.0001"></label><label>Lowest k in field<input type="number" id="kl" value="0.006" step="0.0001"></label><label>Predicted T<sub>f</sub> (°C)<input type="number" id="p" value="63.5" step="0.1"></label><label>Actual T<sub>f</sub> (°C)<input type="number" id="ac" value="62.0" step="0.1"></label><label>Penalty<select id="pen"><option value="0">None</option><option value="1">Competition violation (PS×0.9, k×1.1)</option><option value="2">Construction violation / missed impound (PS×0.7, k×1.4)</option><option value="3">Unsafe / non-conforming (PS=0, HS=0)</option></select></label></div></div><div class="card"><div class="cres" id="o"></div></div></div><div class="card"><h3 style="margin-top:0">Score sensitivity: what is 1 °C of prediction error worth?</h3><p>2.5 points. The heat score at k = 0.0073 vs best 0.0060 is 16.4; improving k by 10 % (0.00657) adds ≈ 1.5 points. So an extra careful prediction (±1 °C) is usually cheaper than a better device.</p></div>`;
    const run = () => { const v = id => +A.$('#' + id, host).value; let k = v('k'), pen = A.$('#pen', host).value, m = 1; const TS = 45 * v('a') / v('b'), CS = v('c'); if (pen === '1') k *= 1.1; if (pen === '2') k *= 1.4; let HS = 20 * v('kl') / k, PS = Math.max(0, 25 - 2.5 * Math.abs(v('p') - v('ac'))); if (pen === '1') PS *= .9; if (pen === '2') PS *= .7; if (pen === '3') { PS = 0; HS = 0; } HS = Math.min(20, HS); A.$('#o', host).textContent = `TS = 45 × ${v('a')}/${v('b')} = ${sf(TS, 4)}\nCS = ${CS}\nHS = 20 × ${v('kl')}/k = ${sf(HS, 4)}\nPS = 25 − 2.5×|${v('p')}−${v('ac')}| = ${sf(PS, 4)}\n\nTOTAL = ${sf(TS + CS + HS + PS, 4)} / 100`; };
    A.$$('input,select', host).forEach(e => e.oninput = run); run();
  };

  /* ============ 6. FORMULA CALCULATORS ============ */
  const K0 = 8.99e9, MU0 = 4e-7 * Math.PI, SIG = 5.670374e-8, R_GAS = 8.314462;
  const list = s => String(s).split(/[,\s]+/).filter(Boolean).map(num);
  const CALCS = [
    { ev: 'circuit', n: 'Ohm’s law + power (from V and R)', in: [['V', 'Voltage V', '12'], ['R', 'Resistance R (Ω)', '470']], f: v => `I = V/R = ${eng(v.V / v.R, 'A')}\nP = V²/R = ${eng(v.V ** 2 / v.R, 'W')}` },
    { ev: 'circuit', n: 'Ohm’s law (from I and R)', in: [['I', 'Current I (A)', '0.02'], ['R', 'R (Ω)', '220']], f: v => `V = IR = ${eng(v.I * v.R, 'V')}\nP = I²R = ${eng(v.I ** 2 * v.R, 'W')}` },
    { ev: 'circuit', n: 'Series resistors (list)', in: [['L', 'Values (comma/space sep.)', '100, 220, 330']], f: v => { const a = list(v.L); return `R_total = ${eng(a.reduce((x, y) => x + y, 0), 'Ω')}`; } },
    { ev: 'circuit', n: 'Parallel resistors (list)', in: [['L', 'Values', '100, 220, 330']], f: v => { const a = list(v.L); return `R_total = ${eng(1 / a.reduce((x, y) => x + 1 / y, 0), 'Ω')}`; } },
    { ev: 'circuit', n: 'Voltage divider', in: [['V', 'Vin', '12'], ['R1', 'R1 (top)', '1k'], ['R2', 'R2 (bottom)', '2k']], f: v => `Vout = Vin·R2/(R1+R2) = ${eng(v.V * v.R2 / (v.R1 + v.R2), 'V')}\nI = ${eng(v.V / (v.R1 + v.R2), 'A')}` },
    { ev: 'circuit', n: 'Current divider (2 branches)', in: [['I', 'Itotal (A)', '1'], ['R1', 'R1', '100'], ['R2', 'R2', '300']], f: v => `I1 = I·R2/(R1+R2) = ${eng(v.I * v.R2 / (v.R1 + v.R2), 'A')}\nI2 = ${eng(v.I * v.R1 / (v.R1 + v.R2), 'A')}` },
    { ev: 'circuit', n: 'LED series resistor', in: [['V', 'Supply V', '5'], ['Vf', 'LED Vf', '2.0'], ['I', 'LED current (A)', '0.015']], f: v => { const R = (v.V - v.Vf) / v.I; const E = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82]; let best = Infinity, bv; for (let d = 0; d < 6; d++) E.forEach(e => { const x = e * 10 ** d; if (x >= R && x < best) { best = x; bv = x; } }); return `R = (Vs−Vf)/I = ${eng(R, 'Ω')}\nNext E12 value up: ${eng(bv, 'Ω')} → I = ${eng((v.V - v.Vf) / bv, 'A')}\nResistor power = ${eng(v.I * v.I * R, 'W')}`; } },
    { ev: 'circuit', n: 'Capacitors: series & parallel', in: [['L', 'Capacitances (F)', '10u, 22u, 47u']], f: v => { const a = list(v.L); return `Parallel = ${eng(a.reduce((x, y) => x + y, 0), 'F')}\nSeries = ${eng(1 / a.reduce((x, y) => x + 1 / y, 0), 'F')}`; } },
    { ev: 'circuit', n: 'Capacitor charge & energy', in: [['C', 'C (F)', '100u'], ['V', 'V', '12']], f: v => `Q = CV = ${eng(v.C * v.V, 'C')}\nE = ½CV² = ${eng(0.5 * v.C * v.V ** 2, 'J')}` },
    { ev: 'circuit', n: 'RC time constant', in: [['R', 'R (Ω)', '10k'], ['C', 'C (F)', '100u']], f: v => `τ = RC = ${eng(v.R * v.C, 's')}\n63 % at ${eng(v.R * v.C, 's')} · 95 % at 3τ = ${eng(3 * v.R * v.C, 's')} · 99 % at 5τ = ${eng(5 * v.R * v.C, 's')}` },
    { ev: 'circuit', n: 'Coulomb’s law', in: [['q1', 'q₁ (C)', '3u'], ['q2', 'q₂ (C)', '-5u'], ['r', 'r (m)', '0.3']], f: v => `F = k|q₁q₂|/r² = ${eng(K0 * Math.abs(v.q1 * v.q2) / v.r ** 2, 'N')} (${v.q1 * v.q2 < 0 ? 'attractive' : 'repulsive'})\nE from q₁ at r = ${eng(K0 * Math.abs(v.q1) / v.r ** 2, 'V/m')}` },
    { ev: 'circuit', n: 'Transformer (ideal + efficiency)', in: [['Vp', 'Vp (V)', '120'], ['Np', 'Np (turns)', '500'], ['Ns', 'Ns (turns)', '50'], ['Is', 'Load current Is (A)', '2'], ['eff', 'Efficiency (0–1)', '1']], f: v => { const Vs = v.Vp * v.Ns / v.Np; const Ps = Vs * v.Is; const Pp = Ps / v.eff; return `Vs = Vp·Ns/Np = ${eng(Vs, 'V')} (${Vs > v.Vp ? 'step-UP' : 'step-DOWN'})\nP_out = ${eng(Ps, 'W')}\nP_in = ${eng(Pp, 'W')} → Ip = ${eng(Pp / v.Vp, 'A')}\nTurns ratio Np:Ns = ${sf(v.Np / v.Ns, 4)}:1`; } },
    { ev: 'circuit', n: 'AC waveform (peak / RMS / f / T)', in: [['Vp', 'Peak voltage Vp', '170'], ['f', 'Frequency f (Hz)', '60']], f: v => `V_rms = Vp/√2 = ${eng(v.Vp / Math.SQRT2, 'V')}\nV_pp = ${eng(2 * v.Vp, 'V')}\nT = 1/f = ${eng(1 / v.f, 's')}\nω = 2πf = ${eng(2 * Math.PI * v.f, 'rad/s')}\nAverage of rectified = 2Vp/π = ${eng(2 * v.Vp / Math.PI, 'V')}` },
    { ev: 'circuit', n: 'Solenoid / electromagnet field', in: [['N', 'Turns N', '100'], ['I', 'Current (A)', '1'], ['L', 'Length (m)', '0.05'], ['mu', 'Core μr (air=1, iron ≈ 200–5000)', '1']], f: v => `B = μ₀μr·N·I/L = ${eng(MU0 * v.mu * v.N * v.I / v.L, 'T')}\nAmpere-turns NI = ${v.N * v.I}` },
    { ev: 'circuit', n: 'Faraday EMF', in: [['N', 'Turns', '200'], ['dPhi', 'Flux change ΔΦ (Wb)', '0.002'], ['dt', 'Δt (s)', '0.1']], f: v => `|EMF| = N·ΔΦ/Δt = ${eng(v.N * v.dPhi / v.dt, 'V')}` },
    { ev: 'circuit', n: 'Force on wire in field (F = BIL)', in: [['B', 'B (T)', '0.5'], ['I', 'I (A)', '4'], ['L', 'L (m)', '0.2']], f: v => `F = BIL = ${eng(v.B * v.I * v.L, 'N')}` },
    { ev: 'circuit', n: 'Wire resistance', in: [['rho', 'ρ (Ω·m; Cu = 1.68e-8)', '1.68e-8'], ['L', 'Length (m)', '10'], ['d', 'Diameter (m)', '0.001']], f: v => { const A_ = Math.PI * (v.d / 2) ** 2; return `R = ρL/A = ${eng(v.rho * v.L / A_, 'Ω')}`; } },
    { ev: 'circuit', n: 'Energy cost & battery life', in: [['P', 'Power (W)', '1500'], ['h', 'Hours', '3'], ['rate', '$/kWh', '0.15'], ['cap', 'Battery capacity (mAh)', '2000'], ['I', 'Load current (mA)', '50']], f: v => `Energy = ${sf(v.P * v.h / 1000, 4)} kWh → cost $${sf(v.P * v.h / 1000 * v.rate, 4)}\nBattery runtime ≈ capacity/load = ${sf(v.cap / v.I, 4)} h (ideal)` },
    { ev: 'circuit', n: 'BJT switch base resistor', in: [['Ic', 'Load current Ic (A)', '0.1'], ['beta', 'Forced β (≈10 for saturation)', '10'], ['V', 'Drive V', '5']], f: v => { const Ib = v.Ic / v.beta; return `Ib = Ic/β = ${eng(Ib, 'A')}\nRb = (Vdrive − 0.7)/Ib = ${eng((v.V - 0.7) / Ib, 'Ω')}`; } },
    { ev: 'circuit', n: 'Op-amp gain', in: [['Rf', 'Rf (Ω)', '100k'], ['Rin', 'Rin / R1 (Ω)', '10k'], ['Vin', 'Vin (V)', '0.5']], f: v => `Inverting: Av = −Rf/Rin = ${sf(-v.Rf / v.Rin, 4)} → Vout = ${eng(-v.Rf / v.Rin * v.Vin, 'V')}\nNon-inverting: Av = 1 + Rf/R1 = ${sf(1 + v.Rf / v.Rin, 4)} → Vout = ${eng((1 + v.Rf / v.Rin) * v.Vin, 'V')}\n(Output saturates near the supply rails.)` },
    { ev: 'circuit', n: 'Wheatstone bridge balance', in: [['R1', 'R1', '100'], ['R2', 'R2', '200'], ['R3', 'R3', '300']], f: v => `Balanced when R1/R2 = R3/Rx → Rx = R2·R3/R1 = ${eng(v.R2 * v.R3 / v.R1, 'Ω')}` },
    { ev: 'circuit', n: 'Battery with internal resistance', in: [['E', 'EMF (V)', '9'], ['r', 'r internal (Ω)', '1.5'], ['RL', 'Load (Ω)', '12']], f: v => { const I = v.E / (v.r + v.RL); return `I = E/(r+R) = ${eng(I, 'A')}\nTerminal V = ${eng(I * v.RL, 'V')}\nPower in load = ${eng(I * I * v.RL, 'W')}\nEfficiency = ${A.pct(v.RL / (v.r + v.RL))}\nMax power transfer at R_L = r = ${eng(v.r, 'Ω')}` } },
    { ev: 'circuit', n: 'Thévenin of a divider (Vs, R1, R2)', in: [['V', 'Vs', '12'], ['R1', 'R1', '1k'], ['R2', 'R2 (load tap)', '2k']], f: v => `Vth = Vs·R2/(R1+R2) = ${eng(v.V * v.R2 / (v.R1 + v.R2), 'V')}\nRth = R1‖R2 = ${eng(v.R1 * v.R2 / (v.R1 + v.R2), 'Ω')}` },
    { ev: 'thermo', n: 'Heat: Q = mcΔT', in: [['m', 'mass (kg)', '0.5'], ['c', 'c (J/kg·K; water 4184)', '4184'], ['T1', 'T initial (°C)', '20'], ['T2', 'T final (°C)', '80']], f: v => `Q = ${eng(v.m * v.c * (v.T2 - v.T1), 'J')} = ${sf(v.m * v.c * (v.T2 - v.T1) / 4184, 5)} kcal = ${sf(v.m * v.c * (v.T2 - v.T1) / 3.6e6, 5)} kWh` },
    { ev: 'thermo', n: 'Calorimetry: mixing two bodies', in: [['m1', 'm₁ (kg)', '0.2'], ['c1', 'c₁ (J/kg·K)', '4184'], ['T1', 'T₁ (°C)', '20'], ['m2', 'm₂ (kg)', '0.1'], ['c2', 'c₂ (J/kg·K; Cu 385)', '385'], ['T2', 'T₂ (°C)', '100']], f: v => `Tf = (m₁c₁T₁ + m₂c₂T₂)/(m₁c₁ + m₂c₂) = ${sf((v.m1 * v.c1 * v.T1 + v.m2 * v.c2 * v.T2) / (v.m1 * v.c1 + v.m2 * v.c2), 5)} °C` },
    { ev: 'thermo', n: 'Latent heat', in: [['m', 'mass (kg)', '0.1'], ['L', 'L (J/kg; ice fusion 3.34e5, vapor 2.26e6)', '3.34e5']], f: v => `Q = mL = ${eng(v.m * v.L, 'J')}` },
    { ev: 'thermo', n: 'Conduction through a slab', in: [['k', 'k (W/m·K)', '0.04'], ['A', 'Area (m²)', '1'], ['dT', 'ΔT (K)', '20'], ['L', 'Thickness (m)', '0.1']], f: v => `P = kAΔT/L = ${eng(v.k * v.A * v.dT / v.L, 'W')}\nR-value (SI) L/k = ${sf(v.L / v.k, 4)} m²·K/W\nR-value (US) ≈ ${sf(v.L / v.k * 5.678, 4)} ft²·°F·h/BTU` },
    { ev: 'thermo', n: 'Series layers (R-values)', in: [['L', 'List of R (m²K/W)', '0.1, 2.5, 0.05'], ['A', 'Area (m²)', '10'], ['dT', 'ΔT', '25']], f: v => { const R = list(v.L).reduce((a, b) => a + b, 0); return `R_total = ${sf(R, 4)}\nU = 1/R = ${sf(1 / R, 4)} W/m²K\nP = A·ΔT/R = ${eng(v.A * v.dT / R, 'W')}`; } },
    { ev: 'thermo', n: 'Convection loss (Q = hAΔT)', in: [['h', 'h (W/m²K)', '10'], ['A', 'A (m²)', '2'], ['dT', 'ΔT (K)', '15']], f: v => `P = hAΔT = ${eng(v.h * v.A * v.dT, 'W')}` },
    { ev: 'thermo', n: 'Stefan–Boltzmann radiation', in: [['e', 'emissivity', '0.9'], ['A', 'Area (m²)', '1'], ['T', 'T surface (K)', '400'], ['Ts', 'T surroundings (K)', '300']], f: v => `Exitance M = εσT⁴ = ${eng(v.e * SIG * v.T ** 4, 'W/m²')}\nNet P = εσA(T⁴−Ts⁴) = ${eng(v.e * SIG * v.A * (v.T ** 4 - v.Ts ** 4), 'W')}` },
    { ev: 'thermo', n: 'Wien’s law', in: [['T', 'T (K)', '5800']], f: v => `λ_max = 2.898×10⁻³/T = ${eng(2.898e-3 / v.T, 'm')} (${sf(2.898e-3 / v.T * 1e9, 4)} nm)` },
    { ev: 'thermo', n: 'Newton cooling (given K)', in: [['T0', 'T₀', '70'], ['Tr', 'T_room', '22'], ['K', 'K (1/min)', '0.03'], ['t', 't (min)', '25']], f: v => `T(t) = Tr + (T₀−Tr)e^(−Kt) = ${sf(v.Tr + (v.T0 - v.Tr) * Math.exp(-v.K * v.t), 5)} °C` },
    { ev: 'thermo', n: 'Carnot engine & refrigerator', in: [['Th', 'T_hot (K)', '600'], ['Tc', 'T_cold (K)', '300']], f: v => `η_Carnot = 1 − Tc/Th = ${A.pct(1 - v.Tc / v.Th)}\nCOP (refrigerator) = Tc/(Th−Tc) = ${sf(v.Tc / (v.Th - v.Tc), 4)}\nCOP (heat pump) = Th/(Th−Tc) = ${sf(v.Th / (v.Th - v.Tc), 4)}` },
    { ev: 'thermo', n: 'Heat engine energy balance', in: [['Qh', 'Q_hot in (J)', '1000'], ['eta', 'Efficiency (0–1)', '0.3']], f: v => `W = ηQh = ${eng(v.eta * v.Qh, 'J')}\nQc = Qh − W = ${eng(v.Qh * (1 - v.eta), 'J')}` },
    { ev: 'thermo', n: 'Ideal gas: solve for P', in: [['n', 'n (mol)', '1'], ['T', 'T (K)', '300'], ['V', 'V (m³)', '0.0224']], f: v => `P = nRT/V = ${eng(v.n * R_GAS * v.T / v.V, 'Pa')} = ${sf(v.n * R_GAS * v.T / v.V / 101325, 5)} atm` },
    { ev: 'thermo', n: 'Combined gas law (find P₂)', in: [['P1', 'P₁', '100'], ['V1', 'V₁', '2'], ['T1', 'T₁ (K)', '300'], ['V2', 'V₂', '1'], ['T2', 'T₂ (K)', '450']], f: v => `P₂ = P₁V₁T₂/(T₁V₂) = ${sf(v.P1 * v.V1 * v.T2 / (v.T1 * v.V2), 5)} (same unit as P₁)` },
    { ev: 'thermo', n: 'Isothermal work', in: [['n', 'n (mol)', '1'], ['T', 'T (K)', '300'], ['V1', 'V₁', '1'], ['V2', 'V₂', '2']], f: v => `W = nRT ln(V₂/V₁) = ${eng(v.n * R_GAS * v.T * Math.log(v.V2 / v.V1), 'J')} (ΔU = 0, Q = W)` },
    { ev: 'thermo', n: 'Adiabatic process', in: [['P1', 'P₁', '100'], ['V1', 'V₁', '2'], ['V2', 'V₂', '1'], ['g', 'γ (mono 1.667, diatomic 1.4)', '1.4']], f: v => `P₂ = P₁(V₁/V₂)^γ = ${sf(v.P1 * (v.V1 / v.V2) ** v.g, 5)}\nT₂/T₁ = (V₁/V₂)^(γ−1) = ${sf((v.V1 / v.V2) ** (v.g - 1), 5)}` },
    { ev: 'thermo', n: 'Entropy change', in: [['m', 'mass (kg)', '1'], ['c', 'c (J/kg·K)', '4184'], ['T1', 'T₁ (K)', '300'], ['T2', 'T₂ (K)', '350'], ['Q', 'Q at const T (J)', '334000'], ['Tc', 'T of transfer (K)', '273.15']], f: v => `Heating: ΔS = mc ln(T₂/T₁) = ${eng(v.m * v.c * Math.log(v.T2 / v.T1), 'J/K')}\nIsothermal transfer: ΔS = Q/T = ${eng(v.Q / v.Tc, 'J/K')}` },
    { ev: 'thermo', n: 'Gibbs free energy', in: [['H', 'ΔH (J)', '-92000'], ['T', 'T (K)', '298'], ['S', 'ΔS (J/K)', '-199']], f: v => { const G_ = v.H - v.T * v.S; return `ΔG = ΔH − TΔS = ${eng(G_, 'J')}\n${G_ < 0 ? 'Spontaneous (ΔG < 0)' : 'Non-spontaneous (ΔG > 0)'}\nCrossover T = ΔH/ΔS = ${sf(v.H / v.S, 5)} K`; } },
    { ev: 'thermo', n: 'Thermal expansion', in: [['a', 'α (1/K; steel 1.2e-5)', '1.2e-5'], ['L', 'L₀ (m)', '10'], ['dT', 'ΔT (K)', '40']], f: v => `ΔL = αL₀ΔT = ${eng(v.a * v.L * v.dT, 'm')}\nVolumetric β ≈ 3α = ${sf(3 * v.a, 4)} /K` },
    { ev: 'thermo', n: 'Kinetic theory (monatomic)', in: [['T', 'T (K)', '300'], ['M', 'Molar mass (kg/mol)', '0.004']], f: v => `⟨KE⟩ = 3/2 kT = ${eng(1.5 * 1.380649e-23 * v.T, 'J')}\nU (per mol) = 3/2 RT = ${eng(1.5 * R_GAS * v.T, 'J/mol')}\nv_rms = √(3RT/M) = ${eng(Math.sqrt(3 * R_GAS * v.T / v.M), 'm/s')}` },
    { ev: 'thermo', n: 'Power ↔ energy ↔ time (heater)', in: [['P', 'Heater power (W)', '1000'], ['m', 'water mass (kg)', '1'], ['dT', 'ΔT (K)', '80'], ['eff', 'Efficiency (0–1)', '0.85']], f: v => `Energy = ${eng(v.m * 4184 * v.dT, 'J')}\nTime = E/(ηP) = ${eng(v.m * 4184 * v.dT / (v.eff * v.P), 's')} (${sf(v.m * 4184 * v.dT / (v.eff * v.P) / 60, 4)} min)` }
  ];
  T.calc = host => {
    host.innerHTML = `<div class="row"><select id="cf"><option value="">All</option><option value="circuit">⚡ Circuit</option><option value="thermo">🔥 Thermo</option></select><input type="text" id="cs" placeholder="filter…" style="flex:1"></div><div class="grid g2" id="cl"></div>`;
    const draw = () => {
      const f = A.$('#cf', host).value, s = A.$('#cs', host).value.toLowerCase();
      A.$('#cl', host).innerHTML = CALCS.map((c, i) => ({ c, i })).filter(o => (!f || o.c.ev === f) && o.c.n.toLowerCase().includes(s)).map(o => `<div class="card" style="margin:0" data-i="${o.i}"><b>${o.c.ev === 'circuit' ? '⚡' : '🔥'} ${esc(o.c.n)}</b><div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(120px,1fr));margin-top:8px">${o.c.in.map(x => `<label>${esc(x[1])}<input type="text" data-k="${x[0]}" value="${esc(x[2])}" style="width:100%"></label>`).join('')}</div><div class="cres"></div></div>`).join('');
      A.$$('#cl .card', host).forEach(card => { const c = CALCS[+card.dataset.i]; const run = () => { const v = {}; card.querySelectorAll('input').forEach(i => v[i.dataset.k] = (c.in.find(x => x[0] === i.dataset.k)[1].startsWith('Values') || c.in.find(x => x[0] === i.dataset.k)[1].startsWith('List') || c.in.find(x => x[0] === i.dataset.k)[1].startsWith('Capacitances')) ? i.value : num(i.value)); try { card.querySelector('.cres').textContent = c.f(v); } catch (e) { card.querySelector('.cres').textContent = 'check inputs'; } }; card.oninput = run; run(); });
    };
    A.$('#cf', host).onchange = A.$('#cs', host).oninput = draw; draw();
  };

  /* ============ 7. CONVERTERS ============ */
  const UNITS = {
    Energy: { base: 'J', u: { J: 1, kJ: 1e3, 'cal (thermochem)': 4.184, 'kcal / Cal': 4184, BTU: 1055.06, Wh: 3600, kWh: 3.6e6, eV: 1.602176634e-19, 'ft·lbf': 1.35582, erg: 1e-7, therm: 1.05506e8 } },
    Power: { base: 'W', u: { W: 1, kW: 1e3, 'hp (mech)': 745.7, 'BTU/h': 0.293071, 'cal/s': 4.184, 'kcal/h': 1.16222, 'ft·lbf/s': 1.35582 } },
    Pressure: { base: 'Pa', u: { Pa: 1, kPa: 1e3, bar: 1e5, atm: 101325, 'mmHg / torr': 133.322, psi: 6894.76, 'inHg': 3386.39 } },
    Length: { base: 'm', u: { m: 1, cm: .01, mm: .001, km: 1000, in: .0254, ft: .3048, yd: .9144, mile: 1609.344 } },
    Mass: { base: 'kg', u: { kg: 1, g: .001, mg: 1e-6, lb: .45359237, oz: .0283495 } },
    Volume: { base: 'L', u: { L: 1, mL: .001, 'm³': 1000, 'cm³': .001, 'gal (US)': 3.78541, 'fl oz': .0295735, 'ft³': 28.3168 } },
    'Specific heat': { base: 'J/kg·K', u: { 'J/kg·K': 1, 'kJ/kg·K': 1e3, 'cal/g·°C': 4184, 'BTU/lb·°F': 4186.8 } },
    'Conductivity (k)': { base: 'W/m·K', u: { 'W/m·K': 1, 'BTU·in/h·ft²·°F': 0.144228, 'BTU/h·ft·°F': 1.73073 } },
    'Charge / capacity': { base: 'C', u: { C: 1, mC: 1e-3, μC: 1e-6, nC: 1e-9, mAh: 3.6, Ah: 3600, e: 1.602176634e-19 } }
  };
  T.convert = host => {
    host.innerHTML = `<div class="grid g2"><div class="card"><h3 style="margin-top:0">🌡️ Temperature</h3><div class="row"><label>Value<input type="number" id="tv" value="25" step="any"></label><label>Unit<select id="tu"><option>°C</option><option>°F</option><option>K</option><option>°R</option></select></label></div><div class="cres" id="to"></div></div><div class="card"><h3 style="margin-top:0">Quantity</h3><div class="row"><select id="qk">${Object.keys(UNITS).map(k => `<option>${k}</option>`).join('')}</select><label>Value<input type="number" id="qv" value="1" step="any"></label><label>From<select id="qu"></select></label></div><div class="cres" id="qo" style="font-size:.98rem"></div></div></div>
    <div class="card"><b>Fast facts:</b> 1 cal = 4.184 J · 1 Cal (food) = 1 kcal = 4184 J · 1 BTU = 1055 J = 252 cal · 1 kWh = 3.6 MJ · 1 hp = 746 W · 1 atm = 101.325 kPa = 760 mmHg · ΔT of 1 K = 1 °C = 1.8 °F · absolute zero = −273.15 °C = −459.67 °F.</div>`;
    const q = id => A.$('#' + id, host);
    const tdo = () => { const v = +q('tv').value, u = q('tu').value; let C = u === '°C' ? v : u === '°F' ? (v - 32) * 5 / 9 : u === 'K' ? v - 273.15 : (v - 491.67) * 5 / 9; q('to').textContent = `${sf(C, 6)} °C\n${sf(C * 9 / 5 + 32, 6)} °F\n${sf(C + 273.15, 6)} K\n${sf((C + 273.15) * 9 / 5, 6)} °R${C < -273.15 ? '\n⚠ below absolute zero' : ''}`; };
    const qdo = () => { const k = UNITS[q('qk').value], v = +q('qv').value, from = q('qu').value; const base = v * k.u[from]; q('qo').textContent = Object.entries(k.u).map(([n, f]) => `${sf(base / f, 6)} ${n}`).join('\n'); };
    const fillU = () => { q('qu').innerHTML = Object.keys(UNITS[q('qk').value].u).map(u => `<option>${u}</option>`).join(''); qdo(); };
    ['tv', 'tu'].forEach(i => q(i).oninput = tdo); q('qk').onchange = fillU; ['qv', 'qu'].forEach(i => q(i).oninput = qdo); tdo(); fillU();
  };

  /* ============ 8. HEATING CURVE ============ */
  T.heating = host => {
    host.innerHTML = `<div class="grid g2"><div class="card"><div class="row"><label>Mass (g)<input type="number" id="m" value="100"></label><label>Start T (°C)<input type="number" id="a" value="-20"></label><label>End T (°C)<input type="number" id="b" value="120"></label></div><p class="small muted">Water constants: c<sub>ice</sub> 2.09 J/g·K · L<sub>f</sub> 334 J/g · c<sub>water</sub> 4.184 · L<sub>v</sub> 2256 J/g · c<sub>steam</sub> 2.01 (at 1 atm).</p><div id="tb"></div></div><div class="card"><canvas id="cv" width="560" height="320"></canvas></div></div>`;
    const q = id => A.$('#' + id, host);
    const run = () => {
      const m = +q('m').value, a = +q('a').value, b = +q('b').value, up = b >= a; const segs = []; let T = a, Q = 0; const pts = [[0, a]];
      const step = (name, dQ, Tn) => { Q += dQ; segs.push([name, dQ]); T = Tn; pts.push([Q, Tn]); };
      const lo = Math.min(a, b), hi = Math.max(a, b), sgn = up ? 1 : -1;
      const parts = [['Ice warming', -1e9, 0, 2.09, 'ice'], ['Melting at 0 °C', 0, 0, 334, 'mf'], ['Water warming', 0, 100, 4.184, 'w'], ['Boiling at 100 °C', 100, 100, 2256, 'mv'], ['Steam warming', 100, 1e9, 2.01, 's']];
      const order = up ? parts : parts.slice().reverse(); T = a;
      order.forEach(p => {
        if (p[4] === 'mf' || p[4] === 'mv') { const pt = p[1]; const inside = (up ? (a <= pt && b >= pt) : (a >= pt && b <= pt)); if (inside && !(up && a === pt && false)) { const dq = sgn * m * p[3]; step(p[0].replace('Melting', up ? 'Melting' : 'Freezing').replace('Boiling', up ? 'Boiling' : 'Condensing'), dq, pt); } }
        else { const lo_ = p[1], hi_ = p[2]; const s = Math.max(Math.min(a, b), lo_), e = Math.min(Math.max(a, b), hi_); if (e > s) { const from = up ? s : e, to = up ? e : s; step(p[0], m * p[3] * (to - from), to); } }
      });
      q('tb').innerHTML = `<table><tr><th>Stage</th><th>Energy</th></tr>${segs.map(s => `<tr><td>${s[0]}</td><td>${sf(s[1], 5)} J</td></tr>`).join('')}<tr><th>TOTAL</th><th>${sf(Q, 6)} J = ${sf(Q / 4.184, 5)} cal = ${sf(Q / 1000, 5)} kJ</th></tr></table>`;
      const cv = q('cv'), g = cv.getContext('2d'), W = cv.width, H = cv.height, P = 50; g.clearRect(0, 0, W, H); const cs = getComputedStyle(document.body); g.strokeStyle = cs.getPropertyValue('--dim'); g.fillStyle = cs.getPropertyValue('--dim'); g.font = '12px monospace';
      const qs = pts.map(p => p[0]), Qmin = Math.min(...qs), Qmax = Math.max(...qs) || 1, Ts = pts.map(p => p[1]), Tmin = Math.min(...Ts) - 5, Tmax = Math.max(...Ts) + 5;
      const X = v => P + (v - Qmin) / ((Qmax - Qmin) || 1) * (W - P - 16), Y = v => (H - 30) - (v - Tmin) / (Tmax - Tmin || 1) * (H - 50);
      g.beginPath(); g.moveTo(P, 10); g.lineTo(P, H - 30); g.lineTo(W - 10, H - 30); g.stroke(); g.fillText('Q (J)', W - 50, H - 10); g.fillText('T °C', 6, 14); [0, 100].forEach(t => { if (t > Tmin && t < Tmax) { g.setLineDash([3, 4]); g.beginPath(); g.moveTo(P, Y(t)); g.lineTo(W - 10, Y(t)); g.stroke(); g.setLineDash([]); g.fillText(t, 22, Y(t) + 4); } });
      g.strokeStyle = cs.getPropertyValue('--therm'); g.lineWidth = 3; g.beginPath(); pts.forEach((p, i) => i ? g.lineTo(X(p[0]), Y(p[1])) : g.moveTo(X(p[0]), Y(p[1]))); g.stroke();
    };
    A.$$('input', host).forEach(i => i.oninput = run); run();
  };

  /* ============ 9. LOGIC ============ */
  T.logic = host => {
    host.innerHTML = `<div class="card"><label>Boolean expression (variables A B C D; operators AND OR NOT XOR NAND NOR XNOR, or & | ! ^ ~ +, parentheses)<input type="text" id="ex" value="(A AND B) OR (NOT C)" style="width:100%"></label><div class="row" style="margin-top:8px"><button class="btn pri" id="go">Build truth table</button><span class="muted small">Try: A XOR B · NOT (A AND B) · (A NAND B) NAND C · A AND (B OR C)</span></div><div id="out"></div></div>
    <div class="card"><h3 style="margin-top:0">Gate reference</h3><div class="tablewrap"><table><tr><th>Gate</th><th>Output is 1 when…</th><th>Symbol note</th></tr><tr><td>AND</td><td>all inputs are 1</td><td>D-shape</td></tr><tr><td>OR</td><td>any input is 1</td><td>curved shield</td></tr><tr><td>NOT</td><td>input is 0</td><td>triangle + bubble</td></tr><tr><td>NAND</td><td>not all inputs are 1 (universal gate)</td><td>AND + bubble</td></tr><tr><td>NOR</td><td>all inputs are 0 (universal gate)</td><td>OR + bubble</td></tr><tr><td>XOR</td><td>inputs differ (odd number of 1s)</td><td>OR with extra curve</td></tr><tr><td>XNOR</td><td>inputs equal</td><td>XOR + bubble</td></tr></table></div>De Morgan: NOT(A·B) = ¬A + ¬B · NOT(A+B) = ¬A·¬B.</div>`;
    const go = () => {
      const src = A.$('#ex', host).value; const out = A.$('#out', host);
      try {
        const tok = src.replace(/\bXNOR\b/gi, ' @ ').replace(/\bNAND\b/gi, ' $ ').replace(/\bNOR\b/gi, ' # ').replace(/\bAND\b/gi, ' & ').replace(/\bXOR\b/gi, ' ^ ').replace(/\bOR\b/gi, ' | ').replace(/\bNOT\b/gi, ' ! ').replace(/\+/g, ' | ').replace(/[·*]/g, ' & ').replace(/~/g, ' ! ');
        const vars = Array.from(new Set((src.match(/\b[A-D]\b/g) || []))).sort(); if (!vars.length) throw new Error('Use variables A–D');
        // tokenize → recursive descent
        const t = tok.match(/[A-D]|[&|^!$#@()01]/g) || []; if (t.join('').length !== tok.replace(/\s+/g, '').length) throw new Error('Unrecognised characters');
        let p = 0; const peek = () => t[p], next = () => t[p++];
        const prim = env => { const x = next(); if (x === '!') return !prim(env); if (x === '(') { const v = or(env); if (next() !== ')') throw new Error('Missing )'); return v; } if (x === '0') return false; if (x === '1') return true; if (/[A-D]/.test(x)) return env[x]; throw new Error('Unexpected ' + (x || 'end')); };
        const and = env => { let v = prim(env); while (peek() === '&' || peek() === '$') { const o = next(), r = prim(env); v = o === '&' ? v && r : !(v && r); } return v; };
        const xor = env => { let v = and(env); while (peek() === '^' || peek() === '@') { const o = next(), r = and(env); v = o === '^' ? v !== r : v === r; } return v; };
        const or = env => { let v = xor(env); while (peek() === '|' || peek() === '#') { const o = next(), r = xor(env); v = o === '|' ? v || r : !(v || r); } return v; };
        const rows = []; for (let i = 0; i < 1 << vars.length; i++) { const env = {}; vars.forEach((v, k) => env[v] = !!((i >> (vars.length - 1 - k)) & 1)); p = 0; const r = or(env); if (p !== t.length) throw new Error('Unexpected ' + t[p]); rows.push([env, r]); }
        const mins = rows.map((r, i) => r[1] ? i : null).filter(x => x != null);
        out.innerHTML = `<div class="tablewrap"><table><tr>${vars.map(v => `<th>${v}</th>`).join('')}<th>Out</th></tr>${rows.map(([e, r]) => `<tr>${vars.map(v => `<td>${+e[v]}</td>`).join('')}<td style="color:${r ? 'var(--ok)' : 'var(--dim)'}"><b>${+r}</b></td></tr>`).join('')}</table></div><p>Minterms Σm(${mins.join(', ')}) · ${mins.length}/${rows.length} rows true${mins.length === rows.length ? ' (tautology)' : mins.length === 0 ? ' (contradiction)' : ''}</p>`;
      } catch (e) { out.innerHTML = `<div class="box warn"><b>Error</b>${esc(e.message)}</div>`; }
    };
    A.$('#go', host).onclick = go; A.$('#ex', host).onkeydown = e => { if (e.key === 'Enter') go(); }; go();
  };
})();
