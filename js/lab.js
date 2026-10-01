/* ============ HANDS-ON LAB ============ */
(function () {
  const A = window.App, S = A.S, esc = A.esc, sf = A.sf, eng = A.eng;
  const E12 = [10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
  const tabs = [['bench', '🔧 Multimeter bench'], ['bb', '🧱 Breadboard'], ['led', '💡 LED lab'], ['em', '🧲 Electromagnet'], ['proc', '📋 Tasks & stopwatch'], ['safe', '🦺 Safety'], ['th', '🌡️ Thermo bench']];
  const LEV = { bench: 'circuit', bb: 'circuit', led: 'circuit', em: 'circuit', safe: 'circuit', th: 'thermo' };
  A.views.lab = tab => {
    tab = tab || (S.ev === 'thermo' ? 'th' : 'bench');
    A.render(`<a href="#/practice">← Practice</a><h1>Hands-On Lab · ${DATA.events[S.ev].short}</h1><p class="muted">Part II of Circuit Lab is hands-on, and Thermodynamics has a built device + measurement. Real practice needs real parts — a cheap multimeter, a breadboard, a 9 V battery, resistors, LEDs, wire, a nail and magnet wire (≈ $25) — but these virtual benches drill the procedures until they’re automatic.</p>
    <div class="row noprint" style="margin-bottom:10px">${tabs.filter(t => !LEV[t[0]] || LEV[t[0]] === S.ev).map(t => `<a class="btn ${t[0] === tab ? 'pri' : ''}" href="#/lab/${t[0]}">${t[1]}</a>`).join('')}</div><div id="lab"></div>`);
    const fn = { bench, bb, led, em, proc, safe, th }[tab] || bench; fn(A.$('#lab'));
  };
  A.route(/^\/lab$/, () => A.views.lab()); A.route(/^\/lab\/(\w+)$/, A.views.lab);

  /* ---------- multimeter bench ---------- */
  function bench(host) {
    let ck, task;
    const newCk = () => { const V = A.rand.pick([3, 5, 6, 9, 12]); const R = [0, 1, 2].map(() => A.rand.pick(E12) * A.rand.pick([10, 100, 1000])); ck = { V, R, dial: 'off', red: 'A', blk: 'D', pwr: true, jack: 'VΩ' }; newTask(); draw(); };
    const newTask = () => {
      const k = A.rand.pick(['v', 'v', 'i', 'r']); const i = A.rand.int(0, 2); task = { k, i };
    };
    const tot = () => ck.R[0] + ck.R[1] + ck.R[2];
    const nodeIdx = { A: 0, B: 1, C: 2, D: 3 };
    const meterRead = () => {
      const d = ck.dial, r = nodeIdx[ck.red], b = nodeIdx[ck.blk]; const I = ck.pwr ? ck.V / tot() : 0; const Vn = n => ck.pwr ? ck.V - I * ck.R.slice(0, n).reduce((a, x) => a + x, 0) : 0; const warn = [];
      if (d === 'off') return { txt: '', warn: ['Meter is OFF.'] };
      if (ck.red === ck.blk) { return { txt: d === 'ohm' ? '0.000' : '0.00', warn: ['Both probes on the same node.'] }; }
      if (d === 'dcv') { if (ck.jack !== 'VΩ') warn.push('Red lead is in the mA jack while measuring volts — move it to VΩ (this is how fuses blow / meters get damaged on real benches).'); return { txt: sf(Vn(r) - Vn(b), 4), unit: 'V', warn }; }
      if (d === 'acv') return { txt: '0.00', unit: 'V~', warn: ['Dial is on AC volts; this is a DC (battery) circuit, so it reads ≈ 0. Use DC volts (V⎓).'] };
      if (d === 'ohm') { if (ck.pwr) return { txt: 'ERR', warn: ['NEVER measure resistance in a powered circuit — reading is meaningless and can damage the meter. Switch power OFF (disconnect the battery) first.'] }; const lo = Math.min(r, b), hi = Math.max(r, b); const Rs = ck.R.slice(lo, hi).reduce((a, x) => a + x, 0); return { txt: eng(Rs, 'Ω').replace(' ', ''), unit: '', warn }; }
      if (d === 'cont') { if (ck.pwr) return { txt: 'ERR', warn: ['Continuity test needs the power OFF.'] }; const lo = Math.min(r, b), hi = Math.max(r, b); const Rs = ck.R.slice(lo, hi).reduce((a, x) => a + x, 0); return { txt: Rs < 50 ? '🔔 BEEP' : 'OL', warn: [`Beeps only when R < ~50 Ω (here ${eng(Rs, 'Ω')}).`] }; }
      if (d === 'dci') { // ammeter across nodes: shunt
        if (ck.jack === 'VΩ') return { txt: '0.000', warn: ['Red lead is in the VΩ jack — current is measured through the mA (or 10 A) jack.'] };
        const lo = Math.min(r, b), hi = Math.max(r, b); const across = ck.R.slice(lo, hi).reduce((a, x) => a + x, 0);
        if (!ck.pwr) return { txt: '0.000', unit: 'mA', warn: ['No power → no current.'] };
        if (lo === 0 && hi === 3) return { txt: 'OL', warn: ['💥 You put the ammeter ACROSS THE BATTERY — a dead short! On a real meter this blows the fuse (or worse). Ammeters go IN SERIES (break the circuit and insert the meter).'] };
        const Itot = ck.V / (tot() - across); return { txt: sf(Itot * 1000, 4), unit: 'mA', warn: [`You connected the ammeter in PARALLEL with part of the circuit (shorting ${eng(across, 'Ω')} of resistance). The right way: break the wire and insert the meter IN SERIES. In this all-series circuit the same current flows everywhere: ${sf(ck.V / tot() * 1000, 4)} mA.`] };
      }
      if (d === 'series') return { txt: sf(ck.V / tot() * 1000, 4), unit: 'mA', warn: [] };
      return { txt: '—', warn };
    };
    const draw = () => {
      const R = ck.R;
      const svg = `<svg viewBox="0 0 560 230" class="dia" width="560"><path class="w" d="M60 60 H150 M220 60 H300 M370 60 H450 M510 60 H520 V190 H50 V60 H60" style="stroke:var(--text)"/>
      ${[['R1', 150, 0], ['R2', 300, 1], ['R3', 450, 2]].map(([n, x, i]) => `<rect x="${x - 70 + 0}" y="46" width="70" height="28" rx="4" fill="var(--panel2)" stroke="var(--circ)"/><text x="${x - 60}" y="64">${n}=${eng(R[i], 'Ω')}</text>`).join('')}
      <text x="20" y="124">${ck.V} V</text><path class="w" d="M45 110 h12 M50 122 h2" style="stroke:var(--circ)"/>
      ${[['A', 70], ['B', 215], ['C', 365], ['D', 70]].map(([n, x], i) => `<circle cx="${n === 'D' ? 300 : x}" cy="${n === 'D' ? 190 : 60}" r="6" fill="${ck.red === n ? '#e11d1d' : ck.blk === n ? '#111' : 'var(--circ2)'}" stroke="var(--text)"/><text x="${(n === 'D' ? 300 : x) - 3}" y="${n === 'D' ? 212 : 38}">${n}</text>`).join('')}
      ${ck.pwr ? '' : '<text x="8" y="100" fill="#f87171">battery disconnected</text>'}</svg>`;
      const rd = meterRead();
      host.innerHTML = `<div class="grid g2"><div class="card">${svg}<div class="row"><label>Red probe on<select id="red">${'ABCD'.split('').map(n => `<option ${ck.red === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label><label>Black probe on<select id="blk">${'ABCD'.split('').map(n => `<option ${ck.blk === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label><label>Red lead jack<select id="jack">${['VΩ', 'mA', '10A'].map(n => `<option ${ck.jack === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label><label>Dial<select id="dial">${[['off', 'OFF'], ['dcv', 'V⎓ DC volts'], ['acv', 'V~ AC volts'], ['ohm', 'Ω resistance'], ['cont', '🔔 continuity'], ['dci', 'mA⎓ DC current']].map(o => `<option value="${o[0]}" ${ck.dial === o[0] ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></label><label style="flex-direction:row;align-items:center;gap:6px;color:var(--text)"><input type="checkbox" id="pwr" ${ck.pwr ? 'checked' : ''}> battery connected</label></div></div>
      <div class="card"><div style="background:#b7c7a5;color:#16210f;font-family:var(--mono);border-radius:12px;padding:16px 20px;font-size:2.3rem;min-height:84px;letter-spacing:.06em;box-shadow:inset 0 0 12px #0006">${esc(rd.txt)} <span style="font-size:1.1rem">${esc(rd.unit || '')}</span></div>${rd.warn.map(w => `<div class="box warn" style="margin:8px 0"><b>Note</b>${esc(w)}</div>`).join('')}
      <hr><b>Challenge</b><p id="tq">${task.k === 'v' ? `Measure the voltage across <b>R${task.i + 1}</b> (point probes at its two ends).` : task.k === 'i' ? 'Measure the <b>circuit current</b> (in mA).' : `Measure <b>R${task.i + 1}</b>’s resistance with the meter (in Ω — set up the meter correctly!).`}</p><div class="row"><input type="text" id="ans" placeholder="your reading (number)" style="width:170px"><button class="btn pri" id="chk">Check</button><button class="btn ghost" id="nw">New circuit</button></div><div id="fb" class="cres"></div></div></div>
      <div class="box hw"><b>Multimeter rules</b>VOLTAGE: parallel (across), jack VΩ. CURRENT: series (break the circuit), jack mA/10 A — never across a source. RESISTANCE: power OFF, component isolated, jack VΩ. Start on the highest range (auto-ranging meters do it for you). Return the dial to OFF/V when done. A reading of “OL” means over-limit/open.</div>`;
      ['red', 'blk', 'jack', 'dial'].forEach(id => A.$('#' + id, host).onchange = e => { ck[id === 'blk' ? 'blk' : id] = e.target.value; draw(); });
      A.$('#pwr', host).onchange = e => { ck.pwr = e.target.checked; draw(); };
      A.$('#nw', host).onclick = newCk;
      A.$('#chk', host).onclick = () => {
        const x = A.parseSI(A.$('#ans', host).value); let want, unit; const I = ck.V / tot();
        if (task.k === 'v') { want = I * ck.R[task.i]; unit = 'V'; } else if (task.k === 'i') { want = I * 1000; unit = 'mA'; } else { want = ck.R[task.i]; unit = 'Ω'; }
        const ok = Math.abs(x - want) <= Math.abs(want) * 0.03; A.$('#fb', host).style.color = ok ? 'var(--ok)' : 'var(--bad)';
        A.$('#fb', host).textContent = ok ? '✓ Correct' : `✗ Expected ≈ ${sf(want, 4)} ${unit}. ${task.k === 'v' ? `(V = I·R = ${sf(I * 1000, 4)} mA × ${eng(ck.R[task.i], 'Ω')})` : ''}`; if (ok) { A.markDay(); A.save(); }
      };
    };
    newCk();
  }

  /* ---------- breadboard ---------- */
  function bb(host) {
    const COLS = 20; let q, n = 0, c = 0;
    const gen = () => {
      const kind = A.rand.pick(['same', 'same', 'across', 'rail', 'diffcol', 'rail2']);
      const col = A.rand.int(1, COLS), row = 'abcdefghij'[A.rand.int(0, 9)];
      let h1 = { col, row }, h2, ans, why;
      const half = r => 'abcde'.includes(r) ? 'top' : 'bot';
      if (kind === 'same') { const rs = half(row) === 'top' ? 'abcde' : 'fghij'; const r2 = A.rand.pick(rs.split('').filter(r => r !== row)); h2 = { col, row: r2 }; ans = true; why = `Same column (${col}), same half (${half(row) === 'top' ? 'a–e' : 'f–j'}): the five holes are one metal strip.`; }
      else if (kind === 'across') { const rs = half(row) === 'top' ? 'fghij' : 'abcde'; h2 = { col, row: A.rand.pick(rs.split('')) }; ans = false; why = 'The center channel (DIP gap) separates a–e from f–j. They are NOT connected across the gap.'; }
      else if (kind === 'diffcol') { h2 = { col: col === COLS ? col - 1 : col + A.rand.int(1, Math.min(4, COLS - col)), row: A.rand.pick('abcdefghij'.split('')) }; ans = false; why = 'Different columns are separate strips, so no connection exists unless a wire/component links them.'; }
      else if (kind === 'rail') { const rl = A.rand.pick(['+top', '−top', '+bot', '−bot']); h1 = { rail: rl, col: A.rand.int(1, COLS) }; h2 = { rail: rl, col: A.rand.int(1, COLS) }; ans = true; why = `Both holes are in the same power rail (${rl}); rails run the whole length and are one strip. (Some big boards split the rail in the middle — check!)`; }
      else { const r1 = A.rand.pick(['+top', '−top', '+bot', '−bot']); let r2; do { r2 = A.rand.pick(['+top', '−top', '+bot', '−bot']); } while (r2 === r1); h1 = { rail: r1, col: A.rand.int(1, COLS) }; h2 = { rail: r2, col: A.rand.int(1, COLS) }; ans = false; why = 'Different rails are separate strips (+ and − rails, or top and bottom rails).'; }
      q = { h1, h2, ans, why, kind }; draw();
    };
    const hole = (x, y, fill, big) => `<circle cx="${x}" cy="${y}" r="${big ? 7 : 3.5}" fill="${fill}" ${big ? 'stroke="#fff" stroke-width="2"' : ''}/>`;
    const draw = () => {
      const W = 600, H = 260, x0 = 40, dx = 26; let s = `<svg viewBox="0 0 ${W} ${H}" class="dia" width="${W}"><rect x="10" y="8" width="${W - 20}" height="${H - 16}" rx="8" fill="#e8e3d3"/>`;
      const rails = { '+top': 26, '−top': 42, '+bot': H - 42, '−bot': H - 26 };
      Object.entries(rails).forEach(([k, y]) => { s += `<text x="14" y="${y + 4}" style="fill:${k[0] === '+' ? '#d00' : '#00c'}">${k[0]}</text>`; for (let i = 1; i <= COLS; i++) s += hole(x0 + i * dx - 10, y, '#444'); });
      const rowY = r => { const i = 'abcdefghij'.indexOf(r); return 75 + (i < 5 ? i * 16 : 16 * 5 + 14 + (i - 5) * 16); };
      s += `<rect x="20" y="${75 + 16 * 5 - 2}" width="${W - 40}" height="14" fill="#d3ccb5"/><text x="${W / 2 - 50}" y="${75 + 16 * 5 + 9}" style="fill:#7a735a;font-size:10px">center channel</text>`;
      'abcdefghij'.split('').forEach(r => { s += `<text x="14" y="${rowY(r) + 4}" style="fill:#555;font-size:10px">${r}</text>`; for (let i = 1; i <= COLS; i++) s += hole(x0 + i * dx - 10, rowY(r), '#444'); });
      for (let i = 1; i <= COLS; i += 1) if (i % 5 === 0 || i === 1) s += `<text x="${x0 + i * dx - 14}" y="68" style="fill:#555;font-size:9px">${i}</text>`;
      [q.h1, q.h2].forEach((h, k) => { const x = x0 + h.col * dx - 10, y = h.rail ? rails[h.rail] : rowY(h.row); s += hole(x, y, k ? '#1d4ed8' : '#dc2626', true) + `<text x="${x + 9}" y="${y - 9}" style="fill:${k ? '#1d4ed8' : '#dc2626'};font-weight:700;font-size:13px">${k ? 'B' : 'A'}</text>`; });
      host.innerHTML = `<div class="card"><p>Are holes <b style="color:#dc2626">A</b> and <b style="color:#1d4ed8">B</b> electrically connected (with nothing else plugged in)?</p>${s}</svg><div class="row"><button class="btn ok" data-a="1">Connected</button><button class="btn" style="background:var(--bad);color:#fff" data-a="0">Not connected</button><span class="sp"></span><span class="muted small" id="bs">${c}/${n}</span></div><div id="fb" class="cres"></div></div>
      <div class="box hw"><b>Breadboard anatomy</b>• Columns 1–N: holes a–e are one strip; f–j are another (separated by the center channel, where ICs straddle). • Power rails run horizontally along the edges (red +, blue −). • Place components so their legs are in DIFFERENT strips, or you short them. • A resistor with both legs in the same strip is shorted. • LEDs have polarity: long leg (anode) → + side.</div>`;
      A.$$('button[data-a]', host).forEach(b => b.onclick = () => { const ok = (b.dataset.a === '1') === q.ans; n++; if (ok) c++; A.$('#fb', host).style.color = ok ? 'var(--ok)' : 'var(--bad)'; A.$('#fb', host).textContent = (ok ? '✓ ' : '✗ ') + q.why; A.$('#bs', host).textContent = c + '/' + n; A.markDay(); A.save(); setTimeout(gen, 2600); });
    };
    gen();
  }

  /* ---------- LED lab ---------- */
  function led(host) {
    host.innerHTML = `<div class="grid g2"><div class="card"><div class="row"><label>Supply V<input type="number" id="v" value="9" step="0.5"></label><label>LED color<select id="c"><option value="2.0|#ef4444">Red (Vf≈2.0)</option><option value="2.1|#f59e0b">Yellow/amber (2.1)</option><option value="2.2|#22c55e">Green (2.2)</option><option value="3.2|#60a5fa">Blue (3.2)</option><option value="3.2|#f8fafc">White (3.2)</option></select></label></div><label style="margin-top:10px">Resistor R (Ω): <b id="rv"></b><input type="range" id="r" min="0" max="100" value="55" style="width:100%"></label><div class="cres" id="o"></div></div><div class="card center"><svg viewBox="0 0 300 200" width="300" id="svg"></svg></div></div>
    <div class="box key"><b>LED rules</b>• R = (V<sub>s</sub> − V<sub>f</sub>)/I. Typical indicator LED: I = 10–20 mA (max 20–30 mA). • No resistor ⇒ LED current limited only by the supply → burns out instantly. • Brightness ∝ current (not voltage). • Wrong polarity ⇒ no light (and reverse breakdown around 5 V). • Two LEDs in series add their V<sub>f</sub> (need V<sub>s</sub> &gt; ΣV<sub>f</sub>); LEDs in parallel each need their own resistor.</div>`;
    const run = () => { const v = +A.$('#v', host).value, [vf, col] = A.$('#c', host).value.split('|'), R = Math.round(10 * Math.pow(10, A.$('#r', host).value / 100 * 3.5)); A.$('#rv', host).textContent = eng(R, 'Ω'); const I = Math.max(0, (v - vf) / R) * 1000; const Pr = I * I * R / 1e6; const st = v < +vf ? 'OFF — supply below V_f' : I > 30 ? '💥 BURNED OUT (> 30 mA)' : I > 20 ? '⚠ Over rated current — very bright, short life' : I >= 5 ? '✓ Good brightness' : I >= 1 ? 'Dim' : 'Barely visible';
      A.$('#o', host).textContent = `I = (Vs − Vf)/R = ${sf(I, 3)} mA\nResistor power = ${sf(Pr * 1000, 3)} mW (${Pr > .25 ? 'exceeds ¼ W!' : 'ok for ¼ W'})\n${st}`;
      const glow = I > 30 ? 0 : Math.min(1, I / 20); A.$('#svg', host).innerHTML = `<defs><radialGradient id="gl"><stop offset="0" stop-color="${col}" stop-opacity="${glow}"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></radialGradient></defs><circle cx="210" cy="100" r="${30 + glow * 50}" fill="url(#gl)"/><path d="M185 135 V90 a25 25 0 0 1 50 0 V135 Z" fill="${col}" fill-opacity="${0.25 + glow * .75}" stroke="var(--text)" stroke-width="2"/><path d="M198 135 V185 M222 135 V170" stroke="var(--text)" stroke-width="3"/><text x="170" y="196" style="fill:var(--text)">long leg = +</text><path d="M20 40 H60 M60 40 l5 -10 l10 20 l10 -20 l10 20 l5 -10 H140 V185 H198" fill="none" stroke="var(--text)" stroke-width="2.5"/><text x="20" y="28" style="fill:var(--text)">R</text>${I > 30 ? '<text x="170" y="60" font-size="26">💥</text>' : ''}`; };
    A.$$('input,select', host).forEach(e => e.oninput = run); run();
  }

  /* ---------- electromagnet ---------- */
  function em(host) {
    const log = [];
    host.innerHTML = `<div class="grid g2"><div class="card"><h3 style="margin-top:0">Predictor</h3><div class="row"><label>Turns N<input type="number" id="n" value="50"></label><label>Current I (A)<input type="number" id="i" value="0.5" step="0.1"></label><label>Coil length (cm)<input type="number" id="l" value="3"></label><label>Core<select id="k"><option value="1">Air</option><option value="300">Iron nail (effective μr ≈ 300)</option><option value="100">Steel bolt (≈100)</option><option value="1.0001">Aluminum/plastic (≈1)</option></select></label></div><div class="cres" id="o"></div><hr><b>Quantity that matters:</b> ampere-turns NI and core material. Doubling N <i>or</i> I doubles B. More turns of thin wire also raises R (lower I for a fixed voltage) — the real optimisation.</div>
    <div class="card"><h3 style="margin-top:0">Battery-powered coil</h3><div class="row"><label>Battery V<input type="number" id="vb" value="6"></label><label>Wire: AWG<select id="awg"><option>22 AWG (0.053 Ω/m)</option><option>26 AWG (0.134 Ω/m)</option><option>30 AWG (0.339 Ω/m)</option></select></label><label>Turns<input type="number" id="nb" value="100"></label><label>Turn diameter (cm)<input type="number" id="dd" value="1.5" step="0.1"></label></div><div class="cres" id="o2"></div></div></div>
    <div class="card"><h3 style="margin-top:0">Paperclip test log</h3><p class="small muted">Build it (nail + enamelled wire + battery), then record how many paperclips it lifts for each setup. Patterns: lifts ∝ roughly (NI)² for small fields; saturates for the core.</p><div class="row"><label>Turns<input type="number" id="ln" value="20"></label><label>Battery (V)<input type="number" id="lv" value="1.5" step="0.1"></label><label>Clips lifted<input type="number" id="lc" value="3"></label><button class="btn" id="la">Add</button><button class="btn ghost" id="lclr">Clear</button></div><div id="tbl"></div></div>
    <div class="box hw"><b>Safety while building</b>Coil gets hot at high current (I²R) — short tests only. Never short a battery; don’t use wall power; enamel insulation must be scraped off at the ends; eye protection.</div>`;
    const q = id => A.$('#' + id, host);
    const run = () => { const N = +q('n').value, I = +q('i').value, L = +q('l').value / 100, mu = +q('k').value; const B = 4e-7 * Math.PI * mu * N * I / L; q('o').textContent = `NI = ${N * I} A·turns\nB ≈ μ₀μr·NI/L = ${eng(B, 'T')} (${sf(B * 1e4, 3)} gauss)\nRelative to earth's field (50 μT): ×${sf(B / 5e-5, 3)}`; const rpm = [0.053, 0.134, 0.339][q('awg').selectedIndex]; const len = +q('nb').value * Math.PI * +q('dd').value / 100; const Rw = rpm * len; const Ib = +q('vb').value / Rw; q('o2').textContent = `Wire length ≈ ${sf(len, 3)} m → R ≈ ${sf(Rw, 3)} Ω\nI = V/R = ${sf(Ib, 3)} A (${Ib > 2 ? '⚠ high: battery sag/heating' : 'ok'})\nPower heating wire ≈ ${sf(Ib * Ib * Rw, 3)} W\nNI = ${sf(Ib * +q('nb').value, 3)} A·turns`; };
    const tbl = () => { q('tbl').innerHTML = log.length ? `<table><tr><th>Turns</th><th>V</th><th>Clips</th></tr>${log.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table>` : ''; };
    A.$$('input,select', host).forEach(e => { if (!['ln', 'lv', 'lc'].includes(e.id)) e.oninput = run; }); q('la').onclick = () => { log.push([q('ln').value, q('lv').value, q('lc').value]); tbl(); }; q('lclr').onclick = () => { log.length = 0; tbl(); }; run();
  }

  /* ---------- tasks & stopwatch ---------- */
  function proc(host) {
    const tasks = [
      ['Build a circuit from a schematic', ['Read the schematic; identify every node and label it.', 'Pick the power rails; place ICs/LEDs first, then resistors.', 'Verify resistor values with the meter BEFORE installing (color code, then ohmmeter).', 'Connect battery LAST. Check polarity of LEDs, electrolytic caps, ICs, diodes.', 'Check with voltage probing; compare against your calculated node voltages.']],
      ['Measure V, I, R at named points', ['Voltage: parallel, VΩ jack, DC.', 'Current: break circuit, insert meter in series, mA jack (10 A for big currents).', 'Resistance: power off, isolate the component (lift one leg).', 'Record with units and sig figs; note meter range/uncertainty.', 'Return leads to VΩ and dial to OFF/V.']],
      ['Identify a mystery resistor', ['Read color bands; write expected value & tolerance.', 'Measure with the ohmmeter out of circuit; hold only the leads (fingers add parallel resistance).', 'Compare: within tolerance? Report the nominal E12/E24 value.']],
      ['LED brightness / current', ['Calculate R = (Vs−Vf)/I.', 'Build with the next standard value UP.', 'Measure I in series and V across the LED; compute power.']],
      ['Build an electromagnet', ['Wrap tightly, same direction, leave 10 cm leads; sand ends.', 'Connect battery briefly; count paperclips or measure compass deflection.', 'Change ONE variable at a time (turns, current, core).']],
      ['USB-charger / power calculation', ['Read label: output 5 V, 1–2 A. P = VI.', 'Energy = P·t; battery mAh × V → Wh; time to charge ≈ capacity/(I·efficiency).']],
      ['Troubleshooting', ['Visual check for wrong placement and shorts.', 'Power: is battery/rail voltage present? Probe supply at the circuit.', 'Work from the source toward the load, find where voltage disappears (open) or collapses (short).', 'Power OFF, test continuity of suspected wires/parts.']],
      ['Transformer / relay / switch tasks', ['Identify coil vs contact pins on a relay (coil ≈ 50–400 Ω).', 'COM/NO/NC: measure continuity with coil off, then energized.', 'Switch types (SPST, SPDT, DPDT): test with continuity to map the poles.']]
    ];
    host.innerHTML = `<div class="grid g2"><div class="card"><h3 style="margin-top:0">⏱ Stopwatch</h3><div class="timer" id="sw" style="font-size:2.4rem">0:00.0</div><div class="row"><button class="btn pri" id="st">Start</button><button class="btn" id="lp">Lap</button><button class="btn ghost" id="rs">Reset</button></div><ol id="laps" class="small"></ol><p class="small muted">Practice each task against a clock — a typical hands-on station gives 10–20 minutes for a pair.</p></div><div class="card">${tasks.map(t => `<details><summary>${esc(t[0])}</summary><ol>${t[1].map(s => `<li>${esc(s)}</li>`).join('')}</ol></details>`).join('')}</div></div>`;
    let t0 = 0, run = false, acc = 0, id;
    const fmt = ms => { const s = ms / 1000; return Math.floor(s / 60) + ':' + (s % 60).toFixed(1).padStart(4, '0'); };
    const tick = () => { A.$('#sw', host).textContent = fmt(acc + (run ? Date.now() - t0 : 0)); };
    A.$('#st', host).onclick = e => { if (run) { acc += Date.now() - t0; run = false; e.target.textContent = 'Start'; } else { t0 = Date.now(); run = true; e.target.textContent = 'Stop'; } };
    A.$('#lp', host).onclick = () => { const li = document.createElement('li'); li.textContent = fmt(acc + (run ? Date.now() - t0 : 0)); A.$('#laps', host).appendChild(li); };
    A.$('#rs', host).onclick = () => { acc = 0; run = false; A.$('#st', host).textContent = 'Start'; A.$('#laps', host).innerHTML = ''; tick(); };
    id = setInterval(tick, 100); A.onLeave(() => clearInterval(id));
  }

  /* ---------- safety ---------- */
  function safe(host) {
    const qs = [
      { q: 'You need to measure the current in a circuit powered by a 9 V battery. Where does the ammeter go?', ch: ['Across the battery terminals', 'In series with the circuit (break it and insert the meter)', 'Across the load in parallel', 'It doesn’t matter if the dial is on mA'], a: 1, e: 'Ammeters have almost zero resistance; in parallel they short the source (blown fuse, damaged meter, hot wires).' },
      { q: 'Which is the most dangerous factor for electric shock?', ch: ['Voltage alone', 'Current through the body (path through the heart)', 'Wire color', 'Battery size'], a: 1, e: 'Current does the harm: ≈1 mA perceptible, ≈10 mA can’t let go, ≈100 mA can cause ventricular fibrillation. Voltage drives the current through body resistance.' },
      { q: 'You hear a hiss and see a hot glue gun burn a teammate — first action?', ch: ['Ignore', 'Cool the burn under cool running water and tell the supervisor', 'Apply butter', 'Apply ice directly for 30 min'], a: 1, e: 'Cool running water 10+ min, then report to the event supervisor.' },
      { q: 'Before measuring a resistor’s value in a circuit you should:', ch: ['Leave power on to make sure it is working', 'Switch power off and isolate the resistor (lift one lead)', 'Put the dial on DC volts', 'Use the 10 A jack'], a: 1, e: 'Powered circuits and parallel paths give false readings and can damage the meter.' },
      { q: 'A coil on a relay is switched off suddenly. Why add a diode across it?', ch: ['To make it click louder', 'To absorb the back-EMF voltage spike (flyback diode)', 'To double the current', 'To filter AC'], a: 1, e: 'The collapsing magnetic field induces a large reverse voltage that can destroy the transistor driving the coil.' },
      { q: 'Which eye protection is required for Thermodynamics (hot water/insulation testing) and Circuit Lab hands-on?', ch: ['None', 'Sunglasses', 'Safety glasses / goggles (ANSI Z87.1 type)', 'Face paint'], a: 2, e: 'Both events require eye protection; bring your own and check the rules.' },
      { q: 'A wire in your circuit feels hot and smells. What do you do FIRST?', ch: ['Touch it to check', 'Disconnect power (battery) immediately', 'Add more current', 'Cover it with tape'], a: 1, e: 'Disconnect the source, let it cool; the hot wire indicates a short or overload (I²R heating).' },
      { q: 'Household GFCI outlets trip when…', ch: ['current exceeds 15 A', 'current leaking to ground differs from return current by ≈ 4–6 mA', 'voltage exceeds 240 V', 'the outlet gets warm'], a: 1, e: 'GFCI compares hot and neutral current; a difference ≥ ~5 mA means current is taking another path (maybe through you) and it opens within ~25 ms.' }
    ];
    host.innerHTML = `<div class="grid g2"><div class="card"><h3 style="margin-top:0">Pre-lab checklist</h3>${['Safety glasses on', 'Long hair tied back, closed-toe shoes, no dangling jewelry', 'Workspace dry and uncluttered; no liquids near electronics', 'Meter leads in VΩ and dial on OFF/V before starting', 'Battery connected LAST and removed FIRST', 'Hot items (water, glue gun, soldering iron) identified & handled with care', 'Know the location of the supervisor/first-aid kit', 'Never connect to mains (wall) power unless explicitly allowed'].map((t, i) => `<label class="task" style="flex-direction:row;color:var(--text)"><input type="checkbox" ${S.bind.checks['s' + i] ? 'checked' : ''} data-k="s${i}"> <span>${t}</span></label>`).join('')}</div><div class="card"><h3 style="margin-top:0">Current vs effect (AC, hand-to-hand, 50–60 Hz)</h3><table><tr><th>Current</th><th>Effect</th></tr><tr><td>1 mA</td><td>threshold of perception (tingle)</td></tr><tr><td>5 mA</td><td>maximum “harmless” (GFCI trip level)</td></tr><tr><td>10–20 mA</td><td>can’t let go (muscle lock)</td></tr><tr><td>50 mA</td><td>pain, breathing difficulty</td></tr><tr><td>100–200 mA</td><td>ventricular fibrillation — often fatal</td></tr><tr><td>&gt; 1 A</td><td>severe burns, cardiac arrest</td></tr></table><p class="small muted">Dry skin ≈ 100 kΩ; wet skin ≈ 1 kΩ — so even 12 V can be dangerous wet. Low DC voltages from batteries are safe to touch; high currents are a burn/fire hazard.</p></div></div><h2>Quick safety quiz</h2><div id="sq"></div>`;
    A.$$('input[data-k]', host).forEach(i => i.onchange = () => { S.bind.checks[i.dataset.k] = i.checked; A.save(); });
    const box = A.$('#sq', host); qs.forEach((x, i) => { const d = document.createElement('div'); box.appendChild(d); A.Q.mount(d, { id: 'safe' + i, type: 'mc', t: 'c22', ev: 'circuit', d: 1, q: x.q, ch: x.ch, ans: x.a, exp: x.e }, { mode: 'instant', num: 'S' + (i + 1) }); });
  }

  /* ---------- thermo bench ---------- */
  function th(host) {
    let T0, mode = 0;
    const metals = [['copper', 385], ['aluminum', 900], ['iron', 449], ['lead', 129], ['brass', 380], ['glass', 840]];
    const thermo = t => { const lo = Math.floor(t / 10) * 10 - 10, hi = lo + 50; const H = 230, y = v => 20 + (hi - v) / (hi - lo) * (H - 40); let s = `<svg viewBox="0 0 150 ${H}" width="150" class="dia"><rect x="60" y="14" width="22" height="${H - 34}" rx="11" fill="#fff" stroke="var(--text)" stroke-width="2"/><rect x="66" y="${y(t)}" width="10" height="${H - 34 - y(t) + 14 + 6}" fill="#ef4444"/><circle cx="71" cy="${H - 12}" r="12" fill="#ef4444"/>`; for (let v = lo; v <= hi; v++) { const big = v % 10 === 0, mid = v % 5 === 0; s += `<line x1="${big ? 84 : mid ? 84 : 84}" x2="${big ? 104 : mid ? 98 : 92}" y1="${y(v)}" y2="${y(v)}" stroke="var(--text)"/>`; if (big) s += `<text x="108" y="${y(v) + 4}">${v}</text>`; } return s + '</svg>'; };
    const newT = () => { T0 = Math.round((A.rand.float(5, 95, 1)) * 2) / 2; };
    const draw = () => {
      if (mode === 0) host.innerHTML = `<div class="card"><h3 style="margin-top:0">Read the thermometer</h3><p>Graduations every 1 °C. Read to the nearest 0.5 °C (estimate between marks — half the smallest division is the reading uncertainty).</p><div class="row">${thermo(T0)}<div><input type="text" id="a" placeholder="°C" style="width:120px"> <button class="btn pri" id="c">Check</button> <button class="btn ghost" id="n">New</button><div class="cres" id="f"></div></div></div></div>`;
      host.insertAdjacentHTML('beforeend', `<div class="card" id="cal"></div><div class="box hw"><b>Thermo lab skills</b>• Read at eye level (avoid parallax); wait for stable readings (30–60 s). • Stir before reading; keep the probe off the walls. • Place the probe in the middle of the liquid. • Zero/calibrate with ice water (0 °C) and boiling (≈ 100 °C minus altitude correction). • Thermocouples respond fast (small thermal mass); a thermistor/RTD is more precise. • Record T at fixed intervals, with units and uncertainty.</div>`);
      A.$('#n', host).onclick = () => { newT(); draw(); }; A.$('#c', host).onclick = () => { const x = parseFloat(A.$('#a', host).value); const ok = Math.abs(x - T0) <= 0.5; A.$('#f', host).style.color = ok ? 'var(--ok)' : 'var(--bad)'; A.$('#f', host).textContent = ok ? '✓ ' + T0 + ' °C' : '✗ It was ' + T0 + ' °C'; A.markDay(); A.save(); };
      cal();
    };
    const cal = () => {
      const m = A.rand.pick(metals), mm = A.rand.pick([50, 100, 150, 200]), mw = A.rand.pick([100, 150, 200, 250]), Tm = A.rand.pick([80, 90, 100]), Tw = A.rand.pick([15, 20, 22, 25]); const Tf = (mm * m[1] * Tm + mw * 4184 * Tw) / (mm * m[1] + mw * 4184);
      const d = A.$('#cal', host); d.innerHTML = `<h3 style="margin-top:0">Virtual calorimeter (ideal, no heat loss)</h3><p>A <b>${mm} g</b> block of <b>${m[0]}</b> (c = ${m[1]} J/kg·K) heated to <b>${Tm} °C</b> is dropped into <b>${mw} g</b> of water at <b>${Tw} °C</b>. Predict the final temperature.</p><div class="row"><input type="text" id="p" placeholder="predicted °C" style="width:150px"><button class="btn pri" id="pc">Reveal &amp; score</button><button class="btn ghost" id="pn">New problem</button></div><div class="cres" id="pf"></div>`;
      A.$('#pn', d).onclick = cal; A.$('#pc', d).onclick = () => { const x = parseFloat(A.$('#p', d).value); const err = Math.abs(x - Tf); A.$('#pf', d).style.color = err <= 0.5 ? 'var(--ok)' : 'var(--warn)'; A.$('#pf', d).textContent = `T_f = ${sf(Tf, 4)} °C — your error ${sf(err, 3)} °C → 2019 prediction points = ${sf(Math.max(0, 25 - 2.5 * err), 3)}/25\nQ = m_w c_w (T_f−T_w) = ${sf(mw / 1000 * 4184 * (Tf - Tw), 4)} J`; };
    };
    newT(); draw();
  }
})();
