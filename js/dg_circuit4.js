/* ===== circuit diagrams, part 4 (c17 - c28): history, LED, semiconductors, op-amps, logic, hands-on, strategy ===== */
(function () {
  const { T, L, AR, P, R, C, DOT, WIRE, comp, GND, loop, rails, ARC } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const box = (x, y, w, h, txt, c, sz) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" class="w ${c || 'fm'}"/>` + T(x + w / 2, y + h / 2 + 4, txt, { c: 'lb', sz: sz || 12 });
  const ln = (x1, y1, x2, y2, c) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="w ${c || ''}"/>`;
  const dsh = (x1, y1, x2, y2, c) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="w ${c || ''}" stroke-dasharray="5 4"/>`;
  const tt = (x, y, s, o) => T(x, y, s, Object.assign({ c: 'vl', sz: 11.5 }, o || {}));
  const V = (x, y, h, lab, val, o) => comp('V', x, y, x, y + h, lab, val, o || { side: 'l' }); /* + plate on top */

  /* ================= c17 history ================= */
  def('b4-timeline7', () => {
    const X = y => 30 + (y - 1780) / 115 * 420;
    const it = [[1785, 'Coulomb', 'C', 'u1'], [1800, 'Volta', 'V', 'd'], [1820, 'Ampère', 'A', 'u1'], [1827, 'Ohm', 'Ω', 'd'], [1831, 'Faraday', 'F', 'u2'], [1845, 'Kirchhoff', 'laws', 'd2'], [1888, 'Tesla', 'T', 'u1']];
    let s = ln(20, 110, 462, 110);
    it.forEach(([yr, nm, u, pos]) => {
      const x = X(yr);
      if (pos === 'd' || pos === 'd2') { const b = pos === 'd' ? 138 : 162; s += ln(x, 110, x, b) + T(x, b + 16, nm, { c: 'lb' }) + tt(x, b + 31, yr + ' · ' + u); }
      else { const top = pos === 'u1' ? 78 : 44; s += ln(x, 110, x, top) + T(x, top - 18, nm, { c: 'lb' }) + tt(x, top - 4, yr + ' · ' + u); }
      s += DOT(x, 110, 'o');
    });
    return svg(480, 206, s, 'The seven required figures in date order (Tesla: 1887–91, about 1888). Mnemonic: 1785, 1800, 20, 27, 31, 45, 88.');
  });
  def('b4-hist-units', () => {
    const it = [['Volta', 'volt (V)'], ['Coulomb', 'coulomb (C)'], ['Ampère', 'ampere (A)'], ['Ohm', 'ohm (Ω)'], ['Faraday', 'farad (F)'], ['Tesla', 'tesla (T)'], ['Kirchhoff', 'circuit laws']];
    let s = '';
    it.forEach(([n, u], i) => { const x = i % 2 ? 250 : 10, y = 8 + Math.floor(i / 2) * 46; s += `<rect x="${x}" y="${y}" width="220" height="36" rx="7" class="w fm"/>` + T(x + 12, y + 23, n, { c: 'lb', a: 'start' }) + AR(x + 86, y + 18, x + 106, y + 18, 'o') + T(x + 114, y + 23, u, { a: 'start', sz: 12 }); });
    s += tt(240, 204, 'Ampère, Volta, Ohm, Coulomb, Faraday, Tesla all gave their names to units', {});
    return svg(480, 216, s, 'Match each required scientist to the thing named after them. Tesla’s unit is magnetic flux density; Faraday’s is capacitance.');
  });
  def('b4-hist-ext', () => {
    const it = [['Thales', '~600 BC', 'amber'], ['Gilbert', '1600', 'Earth = magnet'], ['Franklin', '1752', 'lightning rod'], ['Ørsted', '1820', 'compass deflects'], ['Maxwell', '1861–65', 'EM equations'], ['Edison/Swan', '1879', 'light bulb'], ['Thomson', '1897', 'electron'], ['Bardeen et al.', '1947', 'transistor'], ['Kilby/Noyce', '1958–59', 'IC chip']];
    let s = ln(20, 100, 462, 100);
    it.forEach(([n, y, d], i) => { const x = 30 + i * 52.5, up = i % 2 === 0; s += DOT(x, 100, 'o') + ln(x, 100, x, up ? 78 : 122); s += T(x, up ? 38 : 142, n, { c: 'lb', sz: 11 }) + tt(x, up ? 52 : 156, y, { sz: 10.5 }) + tt(x, up ? 66 : 170, d, { sz: 10.5 }); });
    s += tt(240, 196, 'not to scale: milestones are spaced evenly, not by date', { sz: 10.5 });
    return svg(480, 206, s, 'Extended roster milestones that show up on invitational and state tests, from amber to the integrated circuit.');
  });

  /* ================= c18 LED ================= */
  def('b4-led-polarity', () => {
    let s = `<path class="w fr" d="M64 92V62a26 26 0 0 1 52 0V92Z"/><rect x="58" y="92" width="64" height="7" rx="2" class="w fm"/>`;
    s += `<path class="w hot thick" d="M116 70V92"/>`;
    s += ln(78, 99, 78, 158) + ln(102, 99, 102, 128);
    s += T(68, 150, 'anode +', { c: 'hc', a: 'end' }) + tt(68, 165, 'longer leg', { a: 'end' });
    s += T(112, 122, 'cathode −', { c: 'cc', a: 'start' }) + tt(112, 137, 'shorter leg', { a: 'start' });
    s += AR(165, 74, 122, 88, '') + T(170, 72, 'flat side', { a: 'start', sz: 12 }) + tt(170, 87, 'of the rim', { a: 'start' });
    s += comp('LED', 280, 100, 420, 100, 'LED', '', { side: 'd' });
    s += T(268, 90, 'A', { c: 'hc', a: 'end' }) + tt(268, 106, 'anode +', { a: 'end', sz: 10.5 }) + T(432, 90, 'K', { c: 'cc', a: 'start' }) + tt(432, 106, 'cathode −', { a: 'start', sz: 10.5 });
    s += tt(350, 150, 'triangle points from anode to cathode', {}) + tt(350, 166, 'reverse bias: no light, max only ≈ 5 V', {});
    return svg(480, 182, s, 'LED polarity: long leg is the anode (+); the short leg and the flat side of the plastic rim mark the cathode (−).');
  });
  def('b4-led-circuit', () => {
    let s = loop(100, 56, 360, 156, { t: [['R', 'R', '470 Ω']], r: [['LED', 'red LED', 'V_f = 2.0 V', { side: 'r' }]], l: [['V', '9 V', '', { flip: true, side: 'l' }]] });
    s += AR(130, 40, 185, 40, 'r') + T(158, 30, 'I ≈ 15 mA', { c: 'hc', sz: 12 });
    s += tt(230, 124, 'V_R = 9 − 2.0 = 7.0 V', { c: 'vl' });
    s += T(240, 192, 'R = (V_supply − V_f) / I_f = 7 / 0.015 ≈ 467 Ω → use 470 Ω', { c: 'lb', sz: 12 });
    s += tt(240, 210, 'P_R = 0.015² × 470 = 0.106 W (a ¼ W resistor is fine)', {});
    return svg(480, 224, s, 'The series resistor takes whatever voltage the LED does not: the supply minus V_f sets the current.');
  });
  def('b4-led-iv', () => DG.graph({
    w: 480, h: 250, x: [0, 3.5], y: [0, 40], xt: [0, 1, 2, 3], yt: [0, 10, 20, 30, 40], xl: 'voltage across LED (V)', yl: 'current (mA)',
    cap: 'An LED is non-ohmic: almost no current below V_f, then a tiny extra voltage brings a huge current. That is why it needs a series resistor.',
    draw: (sx, sy) => {
      const Vx = 2 + 0.08 * Math.log(38 / 15);
      let s = `<rect x="${f(sx(1.8))}" y="${f(sy(0) - 10)}" width="${f(sx(3.3) - sx(1.8))}" height="10" class="w fo" style="stroke:none"/>`;
      s += tt(sx(2.2), sy(0) - 16, 'V_f range by colour 1.8 – 3.3 V', { a: 'start', sz: 10.5 });
      s += DG.curve(v => 15 * Math.exp((v - 2) / 0.08), sx, sy, 0, Vx, 100, 'o');
      s += DOT(sx(2), sy(15), 'o') + T(sx(2) - 12, sy(15) - 2, 'V_f ≈ 2.0 V', { a: 'end', c: 'oc', sz: 12 }) + tt(sx(2) - 12, sy(15) + 13, '15 mA (example red LED)', { a: 'end', sz: 10.5 });
      s += tt(sx(0.9), sy(4) - 18, 'below V_f:', { sz: 11 }) + tt(sx(0.9), sy(4) - 4, 'almost no current', { sz: 11 });
      s += AR(sx(0.9) + 40, sy(4) + 6, sx(1.7), sy(0.5), '');
      return s;
    }
  }));
  def('b4-led-series', () => {
    let s = loop(60, 56, 420, 116, { t: [['R', '', '330 Ω'], ['LED', '', '', { side: 'd' }], ['LED', '', '', { side: 'd' }]], l: [['V', '9 V', '', { flip: true, side: 'l' }]] });
    s += tt(240, 128, '', {});
    s += AR(100, 40, 150, 40, 'r') + T(125, 30, 'same I', { c: 'hc', sz: 12 });
    s += T(240, 162, 'R = (9 − 2 × 2.0) / 0.015 = 5 / 0.015 ≈ 330 Ω', { c: 'lb', sz: 12 });
    s += tt(240, 180, 'supply must exceed the sum of the V_f values', {}) + tt(240, 196, 'same current ⇒ same brightness', {});
    return svg(480, 208, s, 'Two red LEDs (2.0 V each) in series share one resistor and the same current, so they are equally bright.');
  });
  def('b4-led-parallel', () => {
    let s = ln(60, 40, 300, 40) + ln(60, 40, 60, 40) + V(60, 40, 110, '9 V', '', { side: 'l' }) + ln(60, 150, 300, 150);
    [150, 270].forEach((x, i) => {
      s += ln(x, 40, x, 50) + comp('R', x, 50, x, 100, 'R', '', { side: 'r' }) + comp('LED', x, 100, x, 150, 'LED', '', { side: 'l' }) + DOT(x, 40) + DOT(x, 150);
    });
    s += ln(60, 150, 60, 150);
    s += T(390, 70, 'each LED gets', { c: 'lb', sz: 12 }) + T(390, 86, 'its own resistor', { c: 'lb', sz: 12 });
    s += tt(390, 112, 'V_f differs between LEDs:', { sz: 11 }) + tt(390, 127, 'one shared resistor lets the', { sz: 11 }) + tt(390, 142, 'lower-V_f LED hog current', { sz: 11 });
    return svg(480, 180, s, 'In parallel, give every LED its own resistor; sharing one resistor gives unequal brightness.');
  });

  /* ================= c19 PN junction, diodes, transistors ================= */
  def('b4-pn-junction', () => {
    const panel = (oy, dl, dr, flip, title, note) => {
      let s = T(240, oy + 14, title, { c: 'lb' });
      s += `<rect x="60" y="${oy + 26}" width="${dl - 60}" height="48" class="w fr"/><rect x="${dr}" y="${oy + 26}" width="${420 - dr}" height="48" class="w fb"/><rect x="${dl}" y="${oy + 26}" width="${dr - dl}" height="48" class="w fm" stroke-dasharray="4 3"/>`;
      s += T(90, oy + 44, 'P', { c: 'hc', sz: 15 }) + T(390, oy + 44, 'N', { c: 'cc', sz: 15 });
      for (let x = 78; x < dl - 14; x += 22) s += T(x, oy + 65, '+', { sz: 13 });
      for (let x = 402; x > dr + 14; x -= 22) s += T(x, oy + 65, '−', { sz: 13 });
      const m = (dl + dr) / 2; s += T(dl + 7, oy + 56, '−', { sz: 11 }) + T(dr - 7, oy + 56, '+', { sz: 11 });
      if (dr - dl > 40) s += T(m, oy + 50, 'depletion', { c: 'vl', sz: 10.5 }) + T(m, oy + 62, 'region', { c: 'vl', sz: 10.5 });
      s += ln(130, oy + 74, 130, oy + 100) + ln(350, oy + 74, 350, oy + 100);
      s += flip ? comp('V', 350, oy + 100, 130, oy + 100, '', '', {}) : comp('V', 130, oy + 100, 350, oy + 100, '', '', {});
      s += tt(240, oy + 130, note, {});
      return s;
    };
    let s = panel(0, 222, 258, false, 'Forward bias: + to P (anode), − to N (cathode)', 'external V cancels the barrier; once V > ≈ 0.7 V current flows');
    s += panel(152, 186, 294, true, 'Reverse bias: + to N, − to P', 'barrier grows, depletion widens: only tiny leakage (nA–μA)');
    s += tt(240, 304, '+ holes (P majority)    − electrons (N majority)    depletion edges: immobile ions', { sz: 11 });
    return svg(480, 316, s, 'Forward bias shrinks the depletion region and lets current flow; reverse bias widens it and blocks current.');
  });
  def('b4-diode-iv', () => DG.graph({
    w: 480, h: 250, x: [-6, 1.2], y: [-14, 40], xt: [[0, '0'], [0.7, '≈ 0.7 V'], [-5, '−V_BR']], yt: [], xl: 'voltage across diode', yl: 'current', mb: 50,
    cap: 'Silicon diode: a knee near 0.7 V forward, tiny leakage in reverse, and a sharp breakdown (avalanche or Zener) at large reverse voltage.',
    draw: (sx, sy) => {
      let s = ln(sx(-6), sy(0), sx(1.2), sy(0)) + ln(sx(0), sy(-14), sx(0), sy(40)) + DG.curve(v => 5 * Math.exp((v - 0.7) / 0.06), sx, sy, 0.3, 0.7 + 0.06 * Math.log(38 / 5), 60, 'o');
      s += `<path class="w o thick" d="M${f(sx(-5))} ${f(sy(-0.6))}L${f(sx(0.3))} ${f(sy(0))}"/><path class="w o thick" d="M${f(sx(-5))} ${f(sy(-0.6))}L${f(sx(-5.25))} ${f(sy(-12))}"/>`;
      s += dsh(sx(0.7), sy(0), sx(0.7), sy(6), 'grn');
      s += T(sx(0.55), sy(24), 'forward:', { a: 'end', c: 'oc', sz: 12 }) + tt(sx(0.55), sy(24) + 14, 'on above ≈ 0.7 V', { a: 'end' });
      s += tt(sx(-2.4), sy(0) - 22, 'reverse: leakage only', {}) + tt(sx(-2.4), sy(0) - 9, '(not to scale)', { sz: 10.5 });
      s += T(sx(-4.85), sy(-7), 'breakdown', { a: 'start', c: 'hc', sz: 12 }) + tt(sx(-4.85), sy(-7) + 14, '(Zener: V_Z)', { a: 'start', sz: 10.5 });
      return s;
    }
  }));
  def('b4-knee-bars', () => {
    const rows = [['Silicon', 0.6, 0.7, 'o'], ['Germanium', 0.2, 0.3, 'b'], ['Schottky', 0.15, 0.45, 'g'], ['LED (colour)', 1.8, 3.3, 'r']];
    const X = v => 120 + v / 3.5 * 330; let s = '';
    [0, 1, 2, 3].forEach(v => { s += `<line x1="${X(v)}" y1="14" x2="${X(v)}" y2="164" class="gr"/>` + tt(X(v), 182, v + ' V', { sz: 11 }); });
    s += ln(120, 14, 120, 164) ;
    rows.forEach(([n, a, b, c], i) => { const y = 24 + i * 36; s += T(112, y + 14, n, { a: 'end', c: 'lb', sz: 12 }) + `<rect x="${f(X(a))}" y="${y}" width="${f(X(b) - X(a))}" height="22" rx="4" class="w f${c}" style="stroke-width:2"/>` + tt(X(b) + 6, y + 15, a + ' – ' + b + ' V', { a: 'start', sz: 10.5 }); });
    return svg(480, 196, s, 'Forward turn-on (knee) voltage of common diodes: silicon 0.6–0.7 V, germanium 0.2–0.3 V, Schottky 0.15–0.45 V, LEDs 1.8–3.3 V.');
  });
  def('b4-zener-reg', () => {
    let s = V(50, 50, 100, 'V_in', '', { side: 'l' }) + ln(50, 50, 120, 50) + comp('R', 120, 50, 200, 50, 'R_s', '', {}) + ln(200, 50, 360, 50) + ln(50, 150, 360, 150);
    s += comp('Z', 270, 150, 270, 50, 'Zener', 'V_Z', { side: 'l' }) + comp('R', 360, 50, 360, 150, 'R_L', '', { side: 'r' }) + DOT(270, 50) + DOT(270, 150) + DOT(360, 50) + DOT(360, 150);
    s += AR(215, 38, 245, 38, 'r') + T(230, 28, 'I', { c: 'hc', sz: 12 });
    s += T(440, 94, 'V_out', { c: 'lb', sz: 12 }) + T(440, 110, '≈ V_Z', { c: 'lb', sz: 12 });
    s += T(240, 192, 'R_s = (V_in − V_Z) / (I_Z + I_L)', { c: 'lb', sz: 12.5 }) + tt(240, 210, 'Zener in parallel with the load, conducting in reverse', {});
    return svg(480, 222, s, 'Zener regulator: the series resistor drops the excess voltage while the reverse-conducting Zener holds the load near V_Z.');
  });
  def('b4-diode-assume', () => {
    const pan = (x0, rev, title, n1, n2) => {
      let s = T(x0 + 82, 16, title, { c: 'lb', sz: 12.5 });
      s += loop(x0, 50, x0 + 164, 128, { t: [['R', '', '1 kΩ']], r: [['D', '', rev ? '9 V' : '0.7 V', { side: 'l', flip: rev }]], l: [['V', '9 V', '', { flip: true, side: 'l' }]] });
      s += tt(x0 + 82, 172, n1, { sz: 11.5 }) + tt(x0 + 82, 188, n2, { sz: 11.5 });
      return s;
    };
    let s = pan(46, false, 'Forward: assume ON', 'I = (9 − 0.7)/1000 = 8.3 mA', 'V_R = 8.3 V') + pan(290, true, 'Reversed: assume OFF', 'I ≈ 0, V_R = 0', 'diode takes the full 9 V');
    s += AR(76, 40, 110, 40, 'r') + T(93, 32, '8.3 mA', { c: 'hc', sz: 11 }) + T(336, 32, '≈ 0 A', { c: 'hc', sz: 11 });
    return svg(480, 204, s, 'Assume-and-check: a conducting silicon diode drops about 0.7 V; a reversed diode is an open circuit that takes the whole supply.');
  });
  const wave = (x0, y0, w, a, cyc, fn, c) => { const p = []; for (let i = 0; i <= 120; i++) { const t = i / 120; p.push(f(x0 + t * w) + ',' + f(y0 - a * fn(t * cyc * 2 * Math.PI))); } return `<polyline points="${p.join(' ')}" class="w ${c || 'o'} thick"/>`; };
  const wax = (x0, y0, w, a, lab) => ln(x0, y0, x0 + w, y0) + ln(x0, y0 - a - 8, x0, y0 + a + 8) + tt(x0 + 4, y0 - a - 12, lab, { a: 'start', sz: 11 });
  def('b4-halfwave', () => {
    let s = loop(30, 50, 170, 140, { t: [['D', 'D', '']], r: [['R', 'R_load', '', { side: 'l' }]], l: [['AC', '', '', { side: 'l' }]] });
    s += wax(225, 70, 240, 26, 'input') + wave(225, 70, 240, 26, 2, Math.sin, 'b');
    s += wax(225, 160, 240, 26, 'output') + wave(225, 160, 240, 26, 2, x => Math.max(0, Math.sin(x) - 0.12));
    s += tt(345, 210, 'peak = V_p − 0.7 V, positive half-cycles only', { sz: 11 });
    return svg(480, 220, s, 'Half-wave rectifier: one series diode passes only the positive half-cycles; the output peak is V_p − 0.7 V.');
  });
  def('b4-bridge', () => {
    let s = comp('D', 100, 100, 150, 50, '', '', {}) + comp('D', 200, 100, 150, 50, '', '', {}) + comp('D', 150, 150, 100, 100, '', '', {}) + comp('D', 150, 150, 200, 100, '', '', {});
    s += comp('AC', 100, 100, 200, 100, '', '', {}) + DOT(100, 100) + DOT(200, 100) + DOT(150, 50) + DOT(150, 150);
    s += WIRE([150, 50], [240, 50]) + comp('R', 240, 50, 240, 150, 'R', '', { side: 'r' }) + WIRE([240, 150], [150, 150]);
    s += T(140, 40, 'D1', { c: 'vl', a: 'end', sz: 11 }) + T(162, 40, 'D2', { c: 'vl', a: 'start', sz: 11 }) + T(138, 168, 'D3', { c: 'vl', a: 'end', sz: 11 }) + T(162, 168, 'D4', { c: 'vl', a: 'start', sz: 11 });
    s += T(262, 40, '+', { c: 'lb' }) + T(262, 166, '−', { c: 'lb' });
    s += wax(290, 54, 180, 22, 'input') + wave(290, 54, 180, 22, 2, Math.sin, 'b');
    s += wax(290, 138, 180, 22, 'output') + wave(290, 138, 180, 22, 2, x => Math.max(0, Math.abs(Math.sin(x)) - 0.1));
    s += tt(380, 184, 'two diodes conduct at a time:', { sz: 10.5 }) + tt(380, 198, 'peak V_p − 1.4 V, ripple at 2f', { sz: 10.5 });
    return svg(480, 206, s, 'Full-wave bridge: D1 and D4 conduct on one half-cycle, D2 and D3 on the other, so both halves reach the load the same way.');
  });
  /* transistor symbol helpers */
  const npn = (cx, cy, pnp) => {
    let s = `<circle cx="${cx + 4}" cy="${cy}" r="28" class="w"/>` + ln(cx - 52, cy, cx - 6, cy) + ln(cx - 6, cy - 16, cx - 6, cy + 16);
    if (!pnp) { s += ln(cx - 6, cy - 8, cx + 14, cy - 24) + ln(cx + 14, cy - 24, cx + 14, cy - 56) + `<path class="w" d="M${cx - 6} ${cy + 8}L${cx + 14} ${cy + 24}" marker-end="url(#ar)"/>` + ln(cx + 14, cy + 24, cx + 14, cy + 56); }
    else { s += ln(cx - 6, cy + 8, cx + 14, cy + 24) + ln(cx + 14, cy + 24, cx + 14, cy + 56) + `<path class="w" d="M${cx + 14} ${cy - 24}L${cx - 6} ${cy - 8}" marker-end="url(#ar)"/>` + ln(cx + 14, cy - 24, cx + 14, cy - 56); }
    return s;
  };
  def('b4-bjt-symbols', () => {
    let s = '';
    /* NPN */
    s += npn(70, 90, false);
    s += AR(18, 80, 40, 80, 'r') + T(14, 72, 'I_B', { c: 'hc', a: 'start', sz: 11.5 });
    s += AR(84, 34, 84, 58, 'r') + T(76, 38, 'I_C', { c: 'hc', a: 'end', sz: 11.5 }) + AR(84, 126, 84, 150, 'r') + T(76, 142, 'I_E', { c: 'hc', a: 'end', sz: 11.5 });
    s += T(84, 24, 'C', { c: 'lb' }) + T(84, 162, 'E', { c: 'lb' }) + T(10, 108, 'B', { c: 'lb', a: 'start' });
    s += T(80, 184, 'NPN', { c: 'lb' }) + tt(80, 200, 'arrow points out', { sz: 10.5 }) + tt(80, 214, 'I_E = I_B + I_C', { sz: 10.5 });
    /* PNP */
    s += npn(240, 90, true);
    s += AR(198, 80, 176, 80, 'r') + T(180, 72, 'I_B', { c: 'hc', a: 'start', sz: 11.5 });
    s += AR(254, 34, 254, 58, 'r') + T(246, 38, 'I_E', { c: 'hc', a: 'end', sz: 11.5 }) + AR(254, 126, 254, 150, 'r') + T(246, 142, 'I_C', { c: 'hc', a: 'end', sz: 11.5 });
    s += T(254, 24, 'E', { c: 'lb' }) + T(254, 162, 'C', { c: 'lb' }) + T(176, 108, 'B', { c: 'lb', a: 'start' });
    s += T(250, 184, 'PNP', { c: 'lb' }) + tt(250, 200, 'arrow points in', { sz: 10.5 }) + tt(250, 214, 'emitter at top (+)', { sz: 10.5 });
    /* N-MOSFET */
    const cx = 410, cy = 90;
    s += ln(cx - 48, cy, cx - 10, cy) + ln(cx - 10, cy - 16, cx - 10, cy + 16);
    [[-18, -10], [-4, 4], [10, 18]].forEach(([a, b]) => s += ln(cx - 2, cy + a, cx - 2, cy + b));
    s += ln(cx - 2, cy - 14, cx + 16, cy - 14) + ln(cx + 16, cy - 14, cx + 16, cy - 56) + ln(cx - 2, cy + 14, cx + 16, cy + 14) + ln(cx + 16, cy + 14, cx + 16, cy + 56) + `<path class="w" d="M${cx + 16} ${cy}L${cx - 2} ${cy}" marker-end="url(#ar)"/>` + ln(cx + 16, cy, cx + 16, cy + 14);
    s += T(cx + 16, 24, 'D', { c: 'lb' }) + T(cx + 16, 162, 'S', { c: 'lb' }) + T(cx - 50, cy + 8, 'G', { c: 'lb', a: 'end' });
    s += T(cx - 14, 184, 'N-MOSFET', { c: 'lb' }) + tt(cx - 14, 200, 'on when V_GS > V_th', { sz: 10.5 }) + tt(cx - 14, 214, 'gate current ≈ 0', { sz: 10.5 });
    return svg(480, 226, s, 'BJT currents: I_E = I_B + I_C, with I_C = β·I_B in the active region. A MOSFET is voltage-controlled and draws almost no gate current.');
  });
  def('b4-bjt-switch', () => {
    let s = npn(300, 150, false);
    s += ln(314, 94, 314, 76) + comp('L', 314, 24, 314, 76, 'relay coil', '120 mA', { side: 'l' }) + ln(314, 24, 380, 24) + WIRE([314, 94], [380, 94]) + comp('D', 380, 94, 380, 24, '', '', {}) + DOT(314, 94);
    s += T(347, 14, '+12 V', { c: 'lb', sz: 12 }) + T(396, 62, 'flyback', { a: 'start', sz: 11.5, c: 'lb' }) + T(396, 76, 'diode', { a: 'start', sz: 11.5, c: 'lb' });
    s += GND(314, 206);
    s += ln(314, 206, 314, 206) + comp('R', 130, 150, 248, 150, 'R_B', '330 Ω', { side: 'u' });
    s += DOT(118, 150) + T(108, 154, '5 V logic pin', { a: 'end', sz: 11.5 }) + ln(118, 150, 130, 150);
    s += AR(254, 140, 282, 140, 'r') + T(268, 128, 'I_B', { c: 'hc', sz: 11.5 });
    s += T(240, 240, 'I_B ≥ I_C/10 = 0.12/10 = 12 mA (forced gain 10, transistor driven into saturation)', { c: 'vl', sz: 11.5 }) + T(240, 258, 'R_B = (5 − 0.7)/0.012 ≈ 360 Ω → use 330 Ω (≈ 13 mA)', { c: 'lb', sz: 12 });
    return svg(480, 272, s, 'Transistor as a switch: a small base current turns on a larger collector current. The flyback diode across the coil absorbs the turn-off spike.');
  });

  /* ================= c20 op-amps ================= */
  const tri = (x, y, w, h, extra) => `<path class="w fm" d="M${x} ${y - h / 2}V${y + h / 2}L${x + w} ${y}Z"/>`;
  def('b4-opamp-symbol', () => {
    let s = tri(150, 100, 140, 120) + ln(90, 70, 150, 70) + ln(90, 130, 150, 130) + ln(290, 100, 360, 100) + ln(220, 70, 220, 34) + ln(220, 130, 220, 166);
    s += T(162, 75, '−', { c: 'lb', a: 'start', sz: 15 }) + T(162, 135, '+', { c: 'lb', a: 'start', sz: 15 });
    s += T(84, 66, 'inverting (V₋)', { a: 'end', sz: 11.5 }) + T(84, 134, 'non-inverting (V₊)', { a: 'end', sz: 11.5 });
    s += T(366, 104, 'V_out', { a: 'start', c: 'lb' }) + T(226, 26, '+V_s', { c: 'lb', a: 'start' }) + T(226, 178, '−V_s', { c: 'lb', a: 'start' });
    s += T(240, 204, 'V_out = A_ol (V₊ − V₋),   A_ol ≈ 100 000 +', { c: 'lb', sz: 12.5 });
    s += tt(240, 224, 'With negative feedback: V₊ ≈ V₋ (virtual short), inputs draw no current,', { sz: 11 }) + tt(240, 239, 'and the output cannot exceed the supply rails.', { sz: 11 });
    return svg(480, 252, s, 'Op-amp symbol: a high-gain difference amplifier powered from ±V_s. The golden rules hold when negative feedback is present.');
  });
  def('b4-opamp-inv', () => {
    let s = tri(220, 114, 110, 100) + ln(330, 114, 420, 114) + T(232, 89, '−', { c: 'lb', a: 'start', sz: 14 }) + T(232, 149, '+', { c: 'lb', a: 'start', sz: 14 });
    s += WIRE([370, 114], [370, 44], [190, 44]) + DOT(370, 114) + T(424, 118, 'V_out', { a: 'start', c: 'lb' });
    s += comp('R', 190, 44, 370, 44, 'R_f', '47 kΩ', {}) + ln(190, 44, 190, 84) + ln(190, 84, 220, 84) + DOT(190, 84);
    s += DOT(46, 84) + T(40, 88, 'V_in', { a: 'end', c: 'lb' }) + comp('R', 46, 84, 190, 84, 'R_in', '10 kΩ', { side: 'd' });
    s += ln(220, 144, 196, 144) + GND(196, 144);
    s += T(240, 204, 'gain = −R_f / R_in = −47k / 10k = −4.7', { c: 'lb', sz: 12.5 }) + tt(240, 222, 'V_in = +0.5 V → V_out = −4.7 × 0.5 = −2.35 V', { sz: 11.5 }) + tt(240, 238, 'the (−) node is a virtual ground: the same current flows through R_in and R_f', { sz: 11 });
    return svg(480, 250, s, 'Inverting amplifier: the feedback holds the − input at 0 V, so V_in/R_in flows through R_f and V_out = −I·R_f.');
  });
  def('b4-opamp-noninv', () => {
    let s = tri(220, 114, 110, 100) + ln(330, 114, 420, 114) + T(232, 89, '−', { c: 'lb', a: 'start', sz: 14 }) + T(232, 149, '+', { c: 'lb', a: 'start', sz: 14 });
    s += WIRE([370, 114], [370, 44], [190, 44]) + DOT(370, 114) + T(424, 118, 'V_out', { a: 'start', c: 'lb' });
    s += comp('R', 190, 44, 370, 44, 'R_f', '90 kΩ', {}) + ln(190, 44, 190, 84) + ln(190, 84, 220, 84) + DOT(190, 84);
    s += comp('R', 190, 84, 70, 84, 'R_g', '10 kΩ', { side: 'd' }) + ln(70, 84, 60, 84) + GND(60, 84);
    s += DOT(46, 144) + T(40, 148, 'V_in', { a: 'end', c: 'lb' }) + ln(46, 144, 220, 144);
    s += T(240, 204, 'gain = 1 + R_f / R_g = 1 + 90k / 10k = 10', { c: 'lb', sz: 12.5 }) + tt(240, 222, 'V_in = 0.3 V → V_out = 3.0 V', { sz: 11.5 }) + tt(240, 238, 'V₋ = V_out · R_g/(R_g + R_f) = V_in  (feedback forces V₋ = V₊)', { sz: 11 });
    return svg(480, 250, s, 'Non-inverting amplifier: the divider R_f, R_g feeds back a fraction of V_out, and the output rises until that fraction equals V_in.');
  });
  def('b4-opamp-buf-comp', () => {
    let s = T(120, 16, 'Voltage follower (buffer)', { c: 'lb', sz: 12.5 }) + tri(90, 90, 90, 80) + ln(180, 90, 222, 90) + T(100, 74, '−', { c: 'lb', a: 'start', sz: 13 }) + T(100, 112, '+', { c: 'lb', a: 'start', sz: 13 });
    s += WIRE([205, 90], [205, 36], [70, 36], [70, 70], [90, 70]) + DOT(205, 90) + ln(30, 110, 90, 110) + DOT(30, 110) + T(24, 114, 'V_in', { a: 'end', sz: 11.5, c: 'lb' }) + T(226, 94, 'V_out', { a: 'start', sz: 11.5, c: 'lb' });
    s += T(120, 158, 'gain = +1', { c: 'lb', sz: 12 }) + tt(120, 174, 'V_out = V_in: high input', { sz: 11 }) + tt(120, 188, 'resistance, low output', { sz: 11 }) + tt(120, 202, 'resistance (isolator)', { sz: 11 });
    s += T(360, 16, 'Comparator (no feedback)', { c: 'lb', sz: 12.5 }) + tri(330, 90, 90, 80) + ln(290, 70, 330, 70) + ln(290, 110, 330, 110) + ln(420, 90, 462, 90);
    s += T(340, 74, '−', { c: 'lb', a: 'start', sz: 13 }) + T(340, 112, '+', { c: 'lb', a: 'start', sz: 13 }) + T(284, 74, 'V₋', { a: 'end', sz: 11.5, c: 'lb' }) + T(284, 114, 'V₊', { a: 'end', sz: 11.5, c: 'lb' }) + T(466, 94, 'out', { a: 'start', sz: 11.5, c: 'lb' });
    s += T(360, 158, 'V₊ > V₋ → +V_sat', { c: 'lb', sz: 12 }) + T(360, 176, 'V₊ < V₋ → −V_sat', { c: 'lb', sz: 12 }) + tt(360, 194, 'output flips when V₊ crosses V₋', { sz: 11 });
    return svg(480, 214, s, 'Follower: output tied to the − input copies the input. Comparator: with no feedback the output slams to one rail or the other.');
  });
  def('b4-opamp-transfer', () => DG.graph({
    w: 480, h: 270, x: [-1, 1], y: [-7, 7], xt: [-1, -0.5, 0.5, 1], yt: [-5, 5], xl: 'V_in (V)', yl: 'V_out (V)', mb: 44,
    cap: 'Non-inverting amplifier with gain 10 on ±5 V supplies: the output follows 10 × V_in until it hits the rail, then clips (0.8 V in would be 8 V, but it stops at about +5 V).',
    draw: (sx, sy) => {
      let s = ln(sx(-1), sy(0), sx(1), sy(0), 'ax') + ln(sx(0), sy(-7), sx(0), sy(7), 'ax');
      s += `<polyline points="${f(sx(-1))},${f(sy(-5))} ${f(sx(-0.5))},${f(sy(-5))} ${f(sx(0.5))},${f(sy(5))} ${f(sx(1))},${f(sy(5))}" class="w o thick"/>`;
      s += DOT(sx(0.3), sy(3), 'o') + tt(sx(0.3) + 8, sy(3) + 14, '0.3 V → 3.0 V', { a: 'start', sz: 11 });
      s += DOT(sx(0.8), sy(5), 'o') + T(sx(0.8), sy(5) - 10, 'clips ≈ +5 V', { c: 'hc', sz: 11.5 });
      s += tt(sx(-0.45), sy(2.2), 'slope = 10', { a: 'end', sz: 11 }) + tt(sx(-0.6), sy(-5.8), 'saturation at −rail', { sz: 11 });
      return s;
    }
  }));
  def('b4-opamp-pinout', () => {
    let s = `<rect x="200" y="40" width="100" height="144" rx="4" class="w fm"/><path class="w" d="M235 40a15 15 0 0 0 30 0"/>`;
    const Lb = ['offset null', 'inverting (−) input', 'non-inverting (+) input', 'V− (negative supply)'], Rb = ['NC', 'V+ (positive supply)', 'output', 'offset null'];
    for (let j = 0; j < 4; j++) {
      const y = 70 + j * 34;
      s += ln(180, y, 200, y) + T(206, y + 4, j + 1, { a: 'start', c: 'oc' }) + T(172, y + 4, Lb[j], { a: 'end', sz: 11.5 });
      s += ln(300, y, 320, y) + T(294, y + 4, 8 - j, { a: 'end', c: 'oc' }) + T(328, y + 4, Rb[j], { a: 'start', sz: 11.5 });
    }
    s += tt(250, 34, 'notch = pin 1 side', { sz: 10.5 }) + tt(250, 204, 'count counterclockwise from the notch', { sz: 11 });
    return svg(480, 214, s, '8-pin DIP op-amp (e.g. 741): pin 2 is −, pin 3 is +, pin 6 is the output, pin 7 is V+, pin 4 is V−.');
  });

  /* ================= c21 logic ================= */
  def('b4-binary', () => {
    const bits = [0, 0, 0, 0, 1, 0, 1, 1], pv = [128, 64, 32, 16, 8, 4, 2, 1]; let s = '';
    pv.forEach((v, i) => { const x = 48 + i * 48, on = bits[i]; s += `<rect x="${x}" y="30" width="44" height="34" rx="5" class="w ${on ? 'fo' : 'fm'}"/>` + T(x + 22, 52, v, { c: 'lb' }) + `<rect x="${x}" y="72" width="44" height="34" rx="5" class="w ${on ? 'fo' : 'fm'}"/>` + T(x + 22, 96, bits[i], { c: on ? 'oc' : 'vl', sz: 16 }); });
    s += T(24, 52, 'place', { a: 'middle', c: 'vl', sz: 10.5 }) + T(24, 96, 'bit', { c: 'vl', sz: 10.5 });
    s += T(240, 132, '1011₂ = 8 + 2 + 1 = 11₁₀', { c: 'lb', sz: 13 }) + tt(240, 154, 'hex digits: 0–9, A–F (A = 10 … F = 15);  0xFF = 255', {}) + T(240, 16, 'binary place values (highlighted: the 1 bits)', { c: 'vl', sz: 11.5 });
    return svg(480, 166, s, 'Each binary place doubles: 128, 64, 32, 16, 8, 4, 2, 1. Add the place values where the bit is 1.');
  });
  def('b4-logic-levels', () => {
    const Y = v => 176 - v * 30; let s = '';
    s += `<rect x="190" y="${Y(5)}" width="100" height="${Y(2) - Y(5)}" class="w fo"/><rect x="190" y="${Y(2)}" width="100" height="${Y(0.8) - Y(2)}" class="w fm" stroke-dasharray="4 3"/><rect x="190" y="${Y(0.8)}" width="100" height="${Y(0) - Y(0.8)}" class="w fb"/>`;
    s += T(240, Y(3.5) + 4, 'HIGH (1)', { c: 'oc', sz: 14 }) + T(240, Y(1.4) + 4, 'undefined', { c: 'vl', sz: 11.5 }) + T(240, Y(0.4) + 4, 'LOW (0)', { c: 'cc', sz: 12 });
    [[0, '0 V'], [0.8, '0.8 V'], [2, '2.0 V'], [5, '5 V (V_cc)']].forEach(([v, t]) => s += ln(184, Y(v), 190, Y(v)) + T(180, Y(v) + 4, t, { a: 'end', sz: 11.5 }));
    s += T(305, Y(3.5) + 4, 'HIGH ≥ 2.0 V', { a: 'start', sz: 12 }) + T(305, Y(0.4) + 4, 'LOW ≤ 0.8 V', { a: 'start', sz: 12 });
    s += T(240, 14, 'TTL (5 V) input thresholds', { c: 'lb', sz: 12 });
    s += tt(395, Y(2.6), '74HC CMOS:', { sz: 11 }) + tt(395, Y(2.6) + 14, 'works 2–6 V', { sz: 11 });
    return svg(480, 196, s, 'Digital logic uses two voltage bands. In 5 V TTL a LOW input is ≤ 0.8 V and a HIGH input is ≥ 2.0 V; in between is undefined.');
  });
  /* gate symbols at origin (x,y): inputs at y-9 / y+9 (x-18), body x..x+34, output to x+52 */
  const gate = (k, x, y) => {
    const bub = (bx) => `<circle cx="${bx}" cy="${y}" r="3.6" class="w" style="fill:var(--bg,transparent)"/>`;
    let s = '';
    const AND = `M${x} ${y - 18}H${x + 16}A18 18 0 0 1 ${x + 16} ${y + 18}H${x}Z`;
    const OR = `M${x} ${y - 18}Q${x + 20} ${y - 18} ${x + 36} ${y}Q${x + 20} ${y + 18} ${x} ${y + 18}Q${x + 10} ${y} ${x} ${y - 18}Z`;
    if (k === 'NOT') { s += `<path class="w fm" d="M${x} ${y - 15}L${x + 28} ${y}L${x} ${y + 15}Z"/>` + bub(x + 31.6) + ln(x - 18, y, x, y) + ln(x + 35.2, y, x + 52, y); return s; }
    const isA = k === 'AND' || k === 'NAND', inv = k === 'NAND' || k === 'NOR';
    s += `<path class="w fm" d="${isA ? AND : OR}"/>`;
    if (k === 'XOR') s += `<path class="w" d="M${x - 6} ${y - 18}Q${x + 4} ${y} ${x - 6} ${y + 18}"/>`;
    const ox = isA ? x + 34 : x + 36, xi = k === 'XOR' ? x - 6 : x;
    s += ln(x - 18, y - 9, x + (isA ? 0 : 6), y - 9) + ln(x - 18, y + 9, x + (isA ? 0 : 6), y + 9);
    if (inv) s += bub(ox + 3.6) + ln(ox + 7.2, y, x + 56, y); else s += ln(ox, y, x + 52, y);
    return s;
  };
  const truth = (cx, y0, rows, two) => {
    let s = ''; const cols = two ? [cx - 30, cx, cx + 34] : [cx - 14, cx + 20];
    (two ? ['A', 'B', 'Y'] : ['A', 'Y']).forEach((h, i) => s += T(cols[i], y0, h, { c: i === cols.length - 1 ? 'oc' : 'lb', sz: 12 }));
    s += ln(cx - 46, y0 + 6, cx + 50, y0 + 6).replace('class="w "', 'class="gr"');
    rows.forEach((r, j) => r.forEach((v, i) => s += T(cols[i], y0 + 22 + j * 15, v, { c: i === cols.length - 1 ? 'oc' : '', sz: 12 })));
    return s;
  };
  const T4 = [[0, 0], [0, 1], [1, 0], [1, 1]];
  const tab2 = fn => T4.map(([a, b]) => [a, b, fn(a, b) ? 1 : 0]);
  const panel3 = (defs) => { let s = ''; defs.forEach(([k, nm, rows, two], i) => { const cx = 80 + i * 160; s += T(cx, 16, nm, { c: 'lb', sz: 13 }) + gate(k, cx - 26, 56) + truth(cx, 106, rows, two); }); return s; };
  def('b4-gates-a', () => svg(480, 196, panel3([['AND', 'AND', tab2((a, b) => a && b), true], ['OR', 'OR', tab2((a, b) => a || b), true], ['NOT', 'NOT', [[0, 1], [1, 0]], false]]), 'AND is 1 only when both inputs are 1; OR is 1 when either is; NOT flips its input. A bubble means inversion.'));
  def('b4-gates-b', () => svg(480, 196, panel3([['NAND', 'NAND', tab2((a, b) => !(a && b)), true], ['NOR', 'NOR', tab2((a, b) => !(a || b)), true], ['XOR', 'XOR', tab2((a, b) => a !== b), true]]), 'NAND, NOR and XOR. NAND and NOR are universal: any logic can be built from NANDs only. XOR is 1 when the inputs differ.'));
  def('b4-switch-logic', () => {
    let s = T(120, 16, 'Series switches = AND', { c: 'lb', sz: 12.5 }) + loop(30, 50, 210, 130, { t: [['SW', 'A', ''], ['SW', 'B', '']], r: [['LAMP', '', '', { side: 'l' }]], l: [['V', '', '', { flip: true, side: 'l' }]] });
    s += tt(120, 164, 'lamp ON only if both are closed', { sz: 11.5 });
    s += T(360, 16, 'Parallel switches = OR', { c: 'lb', sz: 12.5 });
    s += V(260, 50, 80, '', '', { side: 'l' }) + ln(260, 50, 420, 50) + ln(260, 130, 290, 130) + comp('LAMP', 290, 130, 330, 130, '', '', {}) + ln(330, 130, 420, 130);
    [350, 420].forEach((x, i) => { s += comp('SW', x, 50, x, 130, i ? 'B' : 'A', '', { side: 'l' }); });
    s += DOT(350, 50) + DOT(350, 130);
    s += tt(350, 164, 'lamp ON if either is closed', { sz: 11.5 });
    s += tt(240, 190, 'a relay with an NC contact = NOT', { sz: 11.5 });
    return svg(480, 202, s, 'Switch logic: two switches in series act as AND, two in parallel act as OR.');
  });
  def('b4-transistor-inv', () => {
    let s = npn(250, 150, false) + ln(264, 94, 264, 80) + comp('R', 264, 30, 264, 80, 'pull-up R', '', { side: 'r' }) + T(264, 18, 'V_cc', { c: 'lb' }) + ln(264, 94, 340, 94) + DOT(264, 94) + T(346, 98, 'Y (output)', { a: 'start', c: 'lb' }) + GND(264, 206);
    s += DOT(56, 150) + T(50, 154, 'A', { a: 'end', c: 'lb' }) + ln(56, 150, 80, 150) + comp('R', 80, 150, 198, 150, 'R_B', '', { side: 'd' });
    s += T(240, 242, 'A HIGH → transistor ON → Y pulled LOW', { c: 'lb', sz: 12 }) + tt(240, 260, 'A LOW → transistor OFF → pull-up makes Y HIGH', { sz: 11.5 });
    return svg(480, 274, s, 'Transistor inverter (NOT gate): the NPN switch pulls the output to ground when the input is high.');
  });
  def('b4-halfadder', () => {
    let s = gate('XOR', 200, 50) + gate('AND', 200, 130);
    s += ln(20, 41, 182, 41) + ln(100, 41, 100, 121) + ln(100, 121, 182, 121) + DOT(100, 41) + T(14, 45, 'A', { a: 'end', c: 'lb' });
    s += ln(20, 59, 182, 59) + ln(140, 59, 140, 139) + ln(140, 139, 182, 139) + DOT(140, 59) + T(14, 63, 'B', { a: 'end', c: 'lb' });
    s += T(262, 54, 'Sum', { a: 'start', c: 'lb', sz: 12 }) + tt(262, 69, 'A⊕B', { a: 'start' }) + T(262, 134, 'Carry', { a: 'start', c: 'lb', sz: 12 }) + tt(262, 149, 'A·B', { a: 'start' });
    const cs = [346, 372, 410, 452];
    ['A', 'B', 'Sum', 'Carry'].forEach((h, i) => s += T(cs[i], 40, h, { c: 'lb', sz: 12 }));
    [[0, 0, 0, 0], [0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 0, 1]].forEach((r, j) => r.forEach((v, i) => s += T(cs[i], 62 + j * 18, v, { c: i > 1 ? 'oc' : '', sz: 12.5 })));
    s += ln(326, 46, 474, 46).replace('class="w "', 'class="gr"');
    return svg(480, 182, s, 'Half-adder: an XOR gate gives the sum bit and an AND gate gives the carry. Note 1 + 1 gives sum 0, carry 1.');
  });
  def('b4-logic-ic', () => {
    let s = `<rect x="190" y="56" width="100" height="148" rx="4" class="w fm"/><path class="w" d="M225 56a15 15 0 0 0 30 0"/>`;
    for (let i = 0; i < 7; i++) { const y = 70 + i * 20; s += ln(175, y, 190, y) + ln(290, y, 305, y); }
    s += T(196, 74, '1', { a: 'start', c: 'oc', sz: 11 }) + T(196, 194, '7', { a: 'start', c: 'oc', sz: 11 }) + T(284, 74, '14', { a: 'end', c: 'oc', sz: 11 }) + T(284, 194, '8', { a: 'end', c: 'oc', sz: 11 });
    s += T(240, 134, '74xx', { c: 'lb', sz: 14 }) + tt(240, 150, '14-pin DIP', { sz: 10.5 });
    /* vcc / gnd */
    s += ln(305, 70, 350, 70) + T(356, 74, 'V_cc (+5 V)', { a: 'start', c: 'lb', sz: 11.5 }) + ln(175, 190, 150, 190) + T(144, 194, 'GND', { a: 'end', c: 'lb', sz: 11.5 });
    /* input with pull-up and switch */
    s += ln(110, 84, 110, 90) + comp('R', 110, 34, 110, 84, '10 kΩ', 'pull-up', { side: 'l' }) + T(110, 24, '+5 V', { c: 'lb', sz: 11.5 }) + DOT(110, 90) + ln(110, 90, 175, 90) + comp('SW', 110, 96, 110, 166, 'switch', '', { side: 'l' }) + ln(110, 90, 110, 96) + GND(110, 166);
    s += T(146, 84, 'input', { sz: 11 });
    /* output LED */
    s += ln(305, 110, 340, 110) + comp('R', 340, 110, 420, 110, '330 Ω', '', { side: 'u' }) + ln(420, 110, 450, 110) + comp('LED', 450, 110, 450, 170, '', '', { side: 'l' }) + GND(450, 170) + T(318, 104, 'out', { sz: 11 });
    s += tt(240, 234, 'unused inputs must be tied HIGH or LOW (floating inputs act randomly)', { sz: 11 }) + tt(240, 250, 'pull-up keeps the input HIGH until the switch pulls it LOW', { sz: 11 });
    return svg(480, 262, s, 'Logic ICs: pin 14 is V_cc and pin 7 is GND on a 14-pin DIP; use a pull-up or pull-down on switch inputs and a 330 Ω resistor with the output LED.');
  });
})();
