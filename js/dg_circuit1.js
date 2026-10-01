/* ===== circuit diagrams, part 1 (c01 - c10) ===== */
(function () {
  const { T, L, AR, P, R, C, DOT, WIRE, comp, GND } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const cap = (x, y, r, sign) => `<circle cx="${x}" cy="${y}" r="${r}" class="w ${sign === '+' ? 'hot fr' : sign === '−' ? 'cold fb' : 'fm'}"/>` + (sign ? T(x, y + 5, sign, { c: 'lb' }) : '');

  /* ---- c01 ---- */
  def('coulomb', () => {
    let s = '';
    s += cap(110, 60, 20, '+') + cap(370, 60, 20, '−') + AR(134, 60, 210, 60, 'r') + AR(346, 60, 270, 60, 'r') + T(240, 52, 'attract', { c: 'vl' });
    s += T(172, 48, 'F', { c: 'lb' }) + T(308, 48, 'F', { c: 'lb' });
    s += AR(110, 100, 370, 100, 'b', true) + T(240, 118, 'r', { c: 'lb' });
    s += cap(110, 180, 20, '+') + cap(370, 180, 20, '+') + AR(86, 180, 20, 180, 'r') + AR(394, 180, 460, 180, 'r') + T(240, 172, 'repel', { c: 'vl' });
    s += T(240, 226, 'F = k q₁ q₂ / r²      k = 8.99×10⁹ N·m²/C²', { c: 'lb' });
    return svg(480, 246, s, 'Like charges repel, opposite charges attract. Force falls with the square of the distance.');
  });
  def('fieldlines', () => {
    let s = '';
    const radial = (cx, cy, out) => { let q = ''; for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6, c = Math.cos(a), sn = Math.sin(a); q += out ? AR(cx + 22 * c, cy + 22 * sn, cx + 56 * c, cy + 56 * sn, 'o') : AR(cx + 56 * c, cy + 56 * sn, cx + 22 * c, cy + 22 * sn, 'o'); } return q; };
    s += radial(70, 86, true) + cap(70, 86, 14, '+') + T(70, 168, 'positive: field points out', { c: 'vl' });
    s += radial(240, 86, false) + cap(240, 86, 14, '−') + T(240, 168, 'negative: field points in', { c: 'vl' });
    s += cap(370, 86, 12, '+') + cap(440, 86, 12, '−') + T(405, 168, 'dipole', { c: 'vl' });
    [[-46, -24], [-28, -14]].forEach(() => { });
    [30, 50, 66].forEach(h => { s += P(`M372 ${86 - 12}C 385 ${86 - h - 12} 425 ${86 - h - 12} 438 ${86 - 12}`, 's-o', 'marker-end="url(#ao)"'); s += P(`M372 ${86 + 12}C 385 ${86 + h + 12} 425 ${86 + h + 12} 438 ${86 + 12}`, 's-o', 'marker-end="url(#ao)"'); });
    s += AR(386, 86, 424, 86, 'o');
    s += T(240, 196, 'Field lines start on +, end on −, never cross. Closer lines = stronger field.', { c: 'vl', sz: 12 });
    return svg(480, 206, s, 'Electric field lines of a positive charge, a negative charge and a dipole.');
  });
  def('induction-charge', () => {
    let s = '';
    const step = (x, label, extra, ground) => { let q = `<circle cx="${x}" cy="90" r="34" class="w fm"/>`; q += T(x, 150, label, { c: 'vl', sz: 12 }); return q + extra; };
    const dots = (x, left, right) => { let q = ''; left.forEach((sg, i) => { q += T(x - 22, 78 + i * 14, sg, { c: sg === '+' ? 'hc' : 'cc' }); }); right.forEach((sg, i) => { q += T(x + 22, 78 + i * 14, sg, { c: sg === '+' ? 'hc' : 'cc' }); }); return q; };
    const rod = x => `<rect x="${x - 70}" y="76" width="30" height="28" rx="6" class="w fr"/>` + T(x - 55, 95, '+ +', { c: 'hc' });
    s += step(90, '1. Rod near', rod(90) + dots(90, ['−', '−', '−'], ['+', '+', '+']));
    s += step(240, '2. Ground far side', rod(240) + dots(240, ['−', '−', '−'], []) + P('M274 90H310V116', 'w') + GND(310, 116));
    s += step(390, '3. Remove ground, rod', dots(390, ['−', '−', '−'], ['−', '−', '−']).replace(/hc/g, 'cc'));
    return svg(480, 170, s, 'Charging by induction: the sphere ends up with the opposite charge of the rod.');
  });
  def('shell-field', () => {
    let s = `<circle cx="120" cy="110" r="56" class="w fm" style="stroke-width:5"/><circle cx="120" cy="110" r="50" class="w" style="stroke:none"/>`;
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; s += T(120 + 64 * Math.cos(a), 113 + 64 * Math.sin(a), '+', { c: 'hc', sz: 11 }); s += AR(120 + 84 * Math.cos(a), 110 + 84 * Math.sin(a), 120 + 104 * Math.cos(a), 110 + 104 * Math.sin(a), 'o'); }
    s += T(120, 106, 'E = 0', { c: 'lb' }) + T(120, 122, 'inside', { c: 'vl' });
    const g = DG.graph({ w: 250, h: 210, ml: 34, mr: 6, mt: 14, mb: 34, x: [0, 3], y: [0, 3], xl: 'r', yl: 'E', xt: [[1, 'R']], yt: [], draw: (sx, sy) => `<path d="M${f(sx(0))} ${f(sy(0))}H${f(sx(1))}" class="w o thick"/><path d="M${f(sx(1))} ${f(sy(0))}V${f(sy(2.4))}" class="w o thick" stroke-dasharray="3 3"/>` + DG.curve(r => 2.4 / (r * r), sx, sy, 1, 3, 60) + T(sx(0.5), sy(0) - 8, 'zero inside', { c: 'vl', sz: 11 }) + T(sx(2), sy(1.6), '∝ 1/r²', { c: 'lb' }) });
    const inner = g.replace(/^<figure[^>]*><svg[^>]*>/, '').replace(/<\/svg>.*$/, '').replace(/<defs>.*?<\/defs>/, '');
    s += `<g transform="translate(230 0)">${inner}</g>`;
    return svg(480, 220, s, 'Charge on a conductor sits on its surface. Inside, E is zero. Outside it looks like a point charge.');
  });

  /* ---- c02 ---- */
  def('capplates', () => {
    let s = `<rect x="150" y="60" width="180" height="10" class="w fr"/><rect x="150" y="150" width="180" height="10" class="w fb"/>`;
    for (let i = 0; i < 6; i++) { const x = 168 + i * 28; s += T(x, 57, '+', { c: 'hc' }) + T(x, 176, '−', { c: 'cc' }) + AR(x, 76, x, 146, 'o'); }
    s += AR(120, 65, 120, 155, 'b', true) + T(102, 114, 'd', { c: 'lb' }) + T(240, 40, 'area A', { c: 'lb' }) + T(372, 114, 'E = V/d', { c: 'lb', a: 'start' });
    s += P('M150 65H60V95', 'w') + comp('V', 60, 95, 60, 125, '', '', { nopol: 0 }) + P('M60 125V155H150', 'w');
    s += T(240, 206, 'C = ε A / d     Q = C V     U = ½ C V²', { c: 'lb' });
    return svg(480, 222, s, 'Parallel-plate capacitor: bigger plates or a smaller gap store more charge per volt.');
  });
  def('rc-circuit', () => {
    let s = WIRE([60, 60], [140, 60]) + comp('SW', 140, 60, 220, 60, 'S', '') + WIRE([220, 60], [240, 60]) + comp('R', 240, 60, 360, 60, 'R', '') + WIRE([360, 60], [420, 60], [420, 95]) + comp('C', 420, 95, 420, 135, 'C', '') + WIRE([420, 135], [420, 170], [60, 170], [60, 130]) + comp('V', 60, 130, 60, 60, 'V', '', { nopol: 0 });
    s = s.replace(/<path class="w" d="M60 130L[^"]*"\/>/, '');
    s += AR(300, 40, 340, 40, 'o') + T(320, 30, 'I(t)', { c: 'lb' }) + DOT(60, 60) + DOT(420, 170);
    s += T(240, 206, 'τ = R C', { c: 'lb' });
    return svg(480, 220, s, 'RC charging circuit: close the switch and the capacitor charges through R.');
  });
  def('rc-curves', () => {
    const tau = 1;
    return DG.graph({ w: 480, h: 260, x: [0, 5.4], y: [0, 1.1], xl: 'time (in τ)', yl: 'V_C / V_s', xt: [[0, '0'], [1, 'τ'], [2, '2τ'], [3, '3τ'], [4, '4τ'], [5, '5τ']], yt: [[0.368, '37%'], [0.632, '63%'], [1, '100%']],
      draw: (sx, sy) => DG.curve(t => 1 - Math.exp(-t), sx, sy, 0, 5.4, 70, 'o') + DG.curve(t => Math.exp(-t), sx, sy, 0, 5.4, 70, 'b') +
        `<circle cx="${f(sx(1))}" cy="${f(sy(0.632))}" r="4" class="dot"/><circle cx="${f(sx(1))}" cy="${f(sy(0.368))}" r="4" class="dot"/>` + T(sx(2.6), sy(0.8), 'charging: 1 − e^(−t/τ)', { c: 'lb', a: 'start' }) + T(sx(2.0), sy(0.22), 'discharging: e^(−t/τ)', { c: 'lb', a: 'start' }),
      cap: 'After one time constant a charging capacitor is at 63 %, a discharging one at 37 %. After 5τ it is essentially done.' });
  });
  def('capcombo', () => {
    let s = '';
    s += T(120, 22, 'Series: 1/C = 1/C₁ + 1/C₂', { c: 'lb' }) + WIRE([30, 90], [70, 90]) + comp('C', 70, 90, 130, 90, 'C₁', '') + comp('C', 130, 90, 190, 90, 'C₂', '') + WIRE([190, 90], [210, 90]) + T(120, 150, 'same charge Q', { c: 'vl' }) + T(120, 168, 'smaller than either', { c: 'vl' });
    s += T(360, 22, 'Parallel: C = C₁ + C₂', { c: 'lb' }) + WIRE([280, 105], [310, 105], [310, 70]) + WIRE([310, 105], [310, 140]) + comp('C', 310, 70, 410, 70, 'C₁', '') + comp('C', 310, 140, 410, 140, 'C₂', '') + WIRE([410, 70], [440, 70], [440, 140], [410, 140]) + WIRE([440, 105], [460, 105]) + T(360, 184, 'same voltage V', { c: 'vl' }) + T(360, 202, 'plate areas add', { c: 'vl' });
    return svg(480, 212, s, 'Capacitors combine the opposite way from resistors.');
  });

  /* ---- c03 ---- */
  def('water', () => {
    let s = T(120, 18, 'Water', { c: 'lb' }) + T(360, 18, 'Electricity', { c: 'lb' });
    s += `<rect x="40" y="40" width="160" height="110" rx="18" class="w" /><rect x="100" y="34" width="40" height="22" class="w fb"/><text x="120" y="50" class="t" text-anchor="middle" style="font-size:11px">pump</text>`;
    s += `<rect x="88" y="138" width="64" height="22" class="w fo"/><text x="120" y="153" class="t" text-anchor="middle" style="font-size:11px">narrow</text>` + AR(60, 100, 60, 70, 'b') + AR(180, 70, 180, 100, 'b');
    s += WIRE([280, 50], [440, 50], [440, 150], [280, 150], [280, 50]);
    s = s.replace(/<polyline points="280,50 440,50 440,150 280,150 280,50" class="w"\/>/, '');
    s += WIRE([280, 75], [280, 50], [340, 50]) + comp('V', 340, 50, 380, 50, '', '', { nopol: 1 }) + WIRE([380, 50], [440, 50], [440, 75]) + comp('R', 440, 75, 440, 125, '', '') + WIRE([440, 125], [440, 150], [280, 150], [280, 75]);
    s += T(120, 184, 'pressure', { c: 'lb' }) + T(120, 200, 'flow rate', { c: 'lb' }) + T(120, 216, 'narrow pipe', { c: 'lb' }) + T(360, 184, 'voltage V', { c: 'lb' }) + T(360, 200, 'current I', { c: 'lb' }) + T(360, 216, 'resistance R', { c: 'lb' });
    return svg(480, 228, s, 'The water analogy: voltage pushes, resistance narrows the pipe, current is the flow.');
  });
  def('ohm-tri', () => {
    let s = `<path d="M240 18L350 190H130Z" class="w fo"/><path d="M185 104H295M240 104V190" class="w"/>`;
    s += T(240, 82, 'V', { c: 'lb', sz: 28 }) + T(188, 160, 'I', { c: 'lb', sz: 28 }) + T(292, 160, 'R', { c: 'lb', sz: 28 });
    s += T(80, 92, 'V = I × R', { c: 'lb' }) + T(80, 122, 'I = V / R', { c: 'lb' }) + T(400, 92, 'R = V / I', { c: 'lb' }) + T(400, 122, 'P = V × I', { c: 'lb' });
    s += T(240, 214, 'Cover the quantity you want; what is left is the formula.', { c: 'vl' });
    return svg(480, 226, s, 'Ohm’s law triangle.');
  });
  def('ohm-line', () => DG.graph({ w: 480, h: 250, x: [0, 10], y: [0, 10], xl: 'Voltage V (volts)', yl: 'Current I (mA)', xt: [0, 2, 4, 6, 8, 10], yt: [0, 2, 4, 6, 8, 10],
    draw: (sx, sy) => `<path d="M${sx(0)} ${sy(0)}L${sx(10)} ${sy(10)}" class="w o thick"/><path d="M${sx(0)} ${sy(0)}L${sx(10)} ${sy(4)}" class="w b thick"/><path d="M${sx(0)} ${sy(0)}C${sx(3)} ${sy(1)} ${sx(6)} ${sy(2.2)} ${sx(10)} ${sy(8)}" class="w s-r thick" stroke-dasharray="6 4"/>` + T(sx(7.2), sy(8.8), 'small R (steep)', { c: 'lb', a: 'start' }) + T(sx(6), sy(2.2), 'large R (shallow)', { c: 'lb', a: 'start' }) + T(sx(1.2), sy(5.6), 'bulb: not ohmic', { c: 'lb', a: 'start' }),
    cap: 'For an ohmic resistor, I is proportional to V and the slope is 1/R. A lamp filament or LED is not a straight line.' }));
  def('wire-res', () => {
    let s = '';
    const wire = (y, len, h, t1, t2) => `<rect x="60" y="${y}" width="${len}" height="${h}" rx="3" class="w fo"/>` + AR(60, y + h + 14, 60 + len, y + h + 14, 'b', true) + T(60 + len / 2, y + h + 30, 'L', { c: 'lb' }) + T(70 + len + 26, y + h / 2 + 4, t1, { c: 'lb', a: 'start' }) + T(70 + len + 26, y + h / 2 + 20, t2, { c: 'vl', a: 'start' });
    s += wire(14, 130, 20, 'R', 'the reference wire') + wire(86, 260, 20, '2R', 'twice as long') + wire(158, 130, 40, 'R / 2', 'twice the cross-section');
    s = s.replace(/<text[^>]*>L<\/text>/g, '');
    return svg(480, 236, s + T(240, 230, 'R = ρ L / A', { c: 'lb' }), 'Resistance grows with length and shrinks with cross-section area.');
  });

  /* ---- c04 ---- */
  const COL = { black: '#111', brown: '#7b4a1e', red: '#dc2626', orange: '#f97316', yellow: '#facc15', green: '#16a34a', blue: '#2563eb', violet: '#7c3aed', gray: '#9ca3af', white: '#f8fafc', gold: '#c9a227', silver: '#c0c0c0' };
  DG.COL = COL;
  const resistor = (x, y, bands, lab, sub) => {
    let s = `<path d="M${x - 70} ${y}H${x - 44}M${x + 44} ${y}H${x + 70}" class="w"/><rect x="${x - 44}" y="${y - 16}" width="88" height="32" rx="14" fill="#e6cfa6" stroke="currentColor" stroke-width="2"/>`;
    const n = bands.length, xs = n === 4 ? [-28, -14, 2, 30] : [-30, -18, -6, 6, 30];
    bands.forEach((c, i) => { s += `<rect x="${x + xs[i] - 3}" y="${y - 16}" width="7" height="32" fill="${COL[c]}" stroke="currentColor" stroke-width=".5"/>`; });
    return s + T(x, y + 36, lab, { c: 'lb' }) + (sub ? T(x, y + 52, sub, { c: 'vl', sz: 12 }) : '');
  };
  def('colorcode', () => {
    let s = resistor(120, 46, ['yellow', 'violet', 'red', 'gold'], '4.7 kΩ ± 5 %', 'yellow · violet · red · gold') + resistor(360, 46, ['brown', 'black', 'black', 'red', 'brown'], '10 kΩ ± 1 %', '5-band: 1 · 0 · 0 · ×100 · ±1 %');
    const names = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
    names.forEach((n, i) => { const x = 30 + i * 43; s += `<circle cx="${x + 10}" cy="138" r="14" fill="${COL[n]}" stroke="currentColor" stroke-width="1.5"/>` + T(x + 10, 170, String(i), { c: 'lb' }) + T(x + 10, 184, n, { c: 'vl', sz: 9 }); });
    s += T(240, 112, 'digits: 0 to 9', { c: 'vl' }) + T(240, 210, '1st digit · 2nd digit · multiplier (number of zeros) · tolerance (gold 5 %, silver 10 %)', { c: 'vl', sz: 11 });
    return svg(480, 222, s, 'Read from the end nearest a band, not from the gold or silver band.');
  });

  /* ---- c05 ---- */
  def('series-demo', () => {
    let s = WIRE([50, 50], [120, 50]) + comp('R', 120, 50, 200, 50, 'R₁', '100 Ω') + comp('R', 200, 50, 280, 50, 'R₂', '200 Ω') + comp('R', 280, 50, 360, 50, 'R₃', '300 Ω') + WIRE([360, 50], [430, 50], [430, 170], [50, 170], [50, 135]) + comp('V', 50, 135, 50, 85, '12 V', '', { side: 'l' });
    s = s.replace(/<path class="w" d="M50 135L[^"]*"\/>/, '');
    s += WIRE([50, 85], [50, 50]);
    s += AR(130, 34, 170, 34, 'o') + T(150, 24, 'I = 20 mA', { c: 'lb' }) + T(160, 84, '2 V', { c: 'cc' }) + T(240, 84, '4 V', { c: 'cc' }) + T(320, 84, '6 V', { c: 'cc' });
    s += T(240, 200, 'Same current everywhere. Voltages add up to 12 V. R_total = 600 Ω.', { c: 'vl', sz: 12 });
    return svg(480, 210, s, 'Series: one path, one current, voltage drops in proportion to R.');
  });
  def('parallel-demo', () => {
    let s = WIRE([50, 40], [150, 40], [150, 40]);
    s += WIRE([50, 40], [420, 40]) + WIRE([50, 170], [420, 170]) + WIRE([50, 40], [50, 70]) + comp('V', 50, 70, 50, 140, '12 V', '', { side: 'l' }) + WIRE([50, 140], [50, 170]);
    [[150, 'R₁', '100 Ω', '120 mA'], [260, 'R₂', '200 Ω', '60 mA'], [370, 'R₃', '300 Ω', '40 mA']].forEach(([x, a, b, c]) => { s += WIRE([x, 40], [x, 75]) + comp('R', x, 75, x, 135, a, b, { side: 'r' }) + WIRE([x, 135], [x, 170]) + DOT(x, 40) + DOT(x, 170) + T(x - 6, 62, c, { c: 'cc', a: 'end', sz: 11 }); });
    s += T(240, 204, 'Same voltage across each branch. Currents add: 220 mA. R_total = 54.5 Ω (smaller than any branch).', { c: 'vl', sz: 12 });
    return svg(480, 214, s, 'Parallel: each branch sees the full source voltage.');
  });
  def('divider', () => {
    let s = WIRE([40, 40], [120, 40]) + T(40, 30, 'Vin', { c: 'lb', a: 'start' }) + comp('R', 120, 40, 120, 130, '', '', { side: 'x' });
    s = '';
    s += T(60, 34, 'V_in', { c: 'lb' }) + WIRE([90, 40], [200, 40]) + comp('R', 200, 40, 200, 110, 'R₁', '', { side: 'r' }) + WIRE([200, 110], [200, 122]) + DOT(200, 122) + WIRE([200, 122], [330, 122]) + T(352, 126, 'V_out', { c: 'lb', a: 'start' });
    s += WIRE([200, 122], [200, 135]) + comp('R', 200, 135, 200, 205, 'R₂', '', { side: 'r' }) + WIRE([200, 205], [200, 222]) + GND(200, 222);
    s += T(40, 120, 'V_out = V_in × R₂ / (R₁ + R₂)', { c: 'lb', a: 'start' }).replace('x="40"', 'x="250"').replace('y="120"', 'y="180"');
    return svg(480, 252, s.replace(/<text[^>]*>V_out = V_in[^<]*<\/text>/, '') + T(380, 175, 'V_out = V_in', { c: 'lb' }) + T(380, 195, '× R₂ / (R₁ + R₂)', { c: 'lb' }), 'Voltage divider: the output is the fraction of V_in across the lower resistor.');
  });
  def('currdiv', () => {
    let s = T(40, 20, 'I_total', { c: 'lb', a: 'start' }) + AR(40, 30, 40, 70, 'o') + WIRE([40, 70], [40, 90], [150, 90]) + DOT(150, 90) + WIRE([150, 90], [150, 60], [210, 60]) + comp('R', 210, 60, 330, 60, 'R₁', '', {}) + WIRE([330, 60], [390, 60], [390, 160]) + WIRE([150, 90], [150, 160], [210, 160]) + comp('R', 210, 160, 330, 160, 'R₂', '', { side: 'd' }) + WIRE([330, 160], [390, 160]) + WIRE([390, 160], [390, 190], [40, 190], [40, 90]);
    s += AR(240, 40, 290, 40, 'o') + T(265, 32, 'I₁', { c: 'lb' }) + AR(240, 140, 290, 140, 'o') + T(265, 132, 'I₂', { c: 'lb' });
    s += T(250, 122, 'I₁ = I_total × R₂ / (R₁ + R₂)', { c: 'vl', sz: 12 }) + T(250, 232, 'More current takes the smaller resistor.', { c: 'vl', sz: 12 });
    return svg(480, 244, s, 'Current divider: the smaller resistance carries the larger share.');
  });
  def('combo', () => {
    let s = '';
    s += WIRE([20, 70], [60, 70]) + comp('R', 60, 70, 140, 70, 'R₁ 10', '', {}) + WIRE([140, 70], [160, 70], [160, 40]) + WIRE([160, 70], [160, 100]) + comp('R', 160, 40, 240, 40, 'R₂ 30', '', {}) + comp('R', 160, 100, 240, 100, 'R₃ 60', '', { side: 'd' }) + WIRE([240, 40], [260, 40], [260, 100], [240, 100]) + WIRE([260, 70], [280, 70]);
    s += AR(292, 70, 320, 70, 'o');
    s += WIRE([330, 70], [345, 70]) + comp('R', 345, 70, 405, 70, '10', '', {}) + comp('R', 405, 70, 465, 70, '20', '', {});
    s = s.replace(/<text[^>]*>R₁ 10<\/text>/, T(100, 46, 'R₁ = 10 Ω', { c: 'lb', sz: 11 })).replace(/<text[^>]*>R₂ 30<\/text>/, T(200, 14, 'R₂ = 30 Ω', { c: 'lb', sz: 11 })).replace(/<text[^>]*>R₃ 60<\/text>/, T(200, 146, 'R₃ = 60 Ω', { c: 'lb', sz: 11 }));
    s += T(200, 180, '30 ‖ 60 = 20 Ω', { c: 'cc' }) + T(400, 100, 'R_total = 10 + 20 = 30 Ω', { c: 'cc', sz: 12 });
    s += T(240, 212, 'Collapse parallel groups first, then add series parts.', { c: 'vl', sz: 12 });
    return svg(480, 224, s, 'Combination circuit: reduce step by step.');
  });
  def('ladder', () => {
    let s = WIRE([30, 60], [80, 60]) + comp('R', 80, 60, 150, 60, 'R', '', {}) + DOT(160, 60) + WIRE([150, 60], [240, 60]) + comp('R', 240, 60, 310, 60, 'R', '', {}) + WIRE([310, 60], [330, 60]) + DOT(240, 60);
    s = WIRE([30, 60], [70, 60]) + comp('R', 70, 60, 140, 60, 'R', '', {}) + WIRE([140, 60], [170, 60]) + DOT(170, 60) + comp('R', 170, 60, 170, 140, '2R', '', { side: 'r' }) + WIRE([170, 60], [220, 60]) + comp('R', 220, 60, 290, 60, 'R', '', {}) + WIRE([290, 60], [320, 60]) + DOT(320, 60) + comp('R', 320, 60, 320, 140, '2R', '', { side: 'r' }) + WIRE([320, 60], [390, 60], [390, 140]) + comp('R', 390, 140, 390, 140.1, '', '', {});
    s = WIRE([30, 60], [70, 60]) + comp('R', 70, 60, 140, 60, 'R', '', {}) + WIRE([140, 60], [170, 60]) + DOT(170, 60) + comp('R', 170, 60, 170, 140, '2R', '', { side: 'r' }) + WIRE([170, 140], [170, 180], [30, 180]) + WIRE([170, 60], [220, 60]) + comp('R', 220, 60, 290, 60, 'R', '', {}) + WIRE([290, 60], [320, 60]) + DOT(320, 60) + comp('R', 320, 60, 320, 140, '2R', '', { side: 'r' }) + WIRE([320, 140], [320, 180], [170, 180]) + WIRE([320, 60], [400, 60]) + T(430, 64, 'and so on', { c: 'vl', sz: 12 });
    s += T(240, 210, 'Start at the far end and collapse one rung at a time toward the source.', { c: 'vl', sz: 12 });
    return svg(480, 222, s, 'Resistor ladder.');
  });

  /* ---- c06 ---- */
  def('battery-model', () => {
    let s = `<rect x="80" y="30" width="170" height="90" rx="10" class="w" stroke-dasharray="5 4"/>` + T(165, 22, 'real battery', { c: 'vl', sz: 12 });
    s += WIRE([80, 75], [95, 75]) + comp('V', 95, 75, 145, 75, 'ε', '', { nopol: 1 }).replace(/<text[^>]*>\+<\/text>/g, '') + comp('R', 145, 75, 220, 75, 'r', '', {}) + WIRE([220, 75], [250, 75], [250, 75]);
    s = `<rect x="70" y="36" width="190" height="84" rx="10" class="w" stroke-dasharray="5 4"/>` + T(165, 28, 'real battery', { c: 'vl', sz: 12 });
    s += WIRE([30, 160], [30, 78]) + WIRE([30, 78], [90, 78]) + comp('V', 90, 78, 130, 78, 'ε', '', {}).replace(/<text[^>]*>ε<\/text>/, T(110, 50, 'ε', { c: 'lb' })) + comp('R', 130, 78, 210, 78, 'r', 'internal', {}) + WIRE([210, 78], [290, 78], [290, 110]) + comp('R', 290, 110, 290, 150, '', '', { side: 'x' });
    s += WIRE([210, 78], [330, 78], [330, 105]) + comp('R', 330, 105, 330, 155, 'R', 'load', { side: 'r' }) + WIRE([330, 155], [330, 180], [30, 180], [30, 78]);
    s = s.replace(/<path class="w" d="M290 110[^>]*>/, '');
    s += T(380, 40, 'V_t = ε − I r', { c: 'lb', a: 'start' }).replace('x="380"', 'x="350"').replace('y="40"', 'y="70"') + T(165, 210, 'Terminal voltage sags as more current is drawn.', { c: 'vl', sz: 12 });
    return svg(480, 224, s.replace(/WIRE/g, ''), 'A real battery is an ideal source ε in series with a small internal resistance r.');
  });
  def('vt-line', () => DG.graph({ w: 480, h: 250, x: [0, 10], y: [0, 10], xl: 'Current drawn I', yl: 'Terminal voltage V_t', xt: [], yt: [],
    draw: (sx, sy) => `<path d="M${sx(0)} ${sy(9)}L${sx(9)} ${sy(0.4)}" class="w o thick"/>` + T(sx(0.3), sy(9.8), 'ε (open circuit)', { c: 'lb', a: 'start' }) + T(sx(6), sy(6.2), 'slope = −r', { c: 'lb', a: 'start' }) + T(sx(9), sy(1.3), 'short-circuit', { c: 'vl', a: 'end' }) + T(sx(9), sy(0.85), 'I = ε / r', { c: 'vl', a: 'end' }),
    cap: 'A larger internal resistance makes the line steeper.' }));
  def('maxpower', () => DG.graph({ w: 480, h: 250, x: [0, 5], y: [0, 1.15], xl: 'Load resistance R_L (in units of r)', yl: 'Power in load', xt: [[0, '0'], [1, 'r'], [2, '2r'], [3, '3r'], [4, '4r'], [5, '5r']], yt: [],
    draw: (sx, sy) => DG.curve(x => 4 * x / Math.pow(1 + x, 2), sx, sy, 0.001, 5, 90, 'o') + `<circle cx="${f(sx(1))}" cy="${f(sy(1))}" r="5" class="dot"/>` + T(sx(1.2), sy(1.08), 'maximum at R_L = r (50 % efficient)', { c: 'lb', a: 'start' }),
    cap: 'Maximum power transfer: match the load to the source resistance.' }));
  def('cells', () => {
    let s = T(120, 20, 'Series: voltages add', { c: 'lb' }) + WIRE([30, 75], [50, 75]) + comp('V', 50, 75, 90, 75, '1.5 V', '', {}) + comp('V', 90, 75, 130, 75, '1.5 V', '', { nopol: 1 }) + comp('V', 130, 75, 170, 75, '1.5 V', '', { nopol: 1 }) + WIRE([170, 75], [210, 75]);
    s = T(120, 20, 'Series: voltages add', { c: 'lb' }) + WIRE([20, 75], [70, 75]) + comp('V2', 70, 75, 130, 75, '', '', { nopol: 1 }) + comp('V', 130, 75, 170, 75, '', '', { nopol: 1 }) + WIRE([170, 75], [210, 75]) + T(120, 118, '3 cells × 1.5 V = 4.5 V', { c: 'vl' }) + T(120, 136, 'capacity stays the same', { c: 'vl' });
    s += T(360, 20, 'Parallel: capacity adds', { c: 'lb' }) + WIRE([280, 75], [310, 75], [310, 48]) + WIRE([310, 75], [310, 102]) + comp('V', 310, 48, 410, 48, '', '', { nopol: 1 }) + comp('V', 310, 102, 410, 102, '', '', { nopol: 1 }) + WIRE([410, 48], [440, 48], [440, 102], [410, 102]) + WIRE([440, 75], [465, 75]) + T(360, 140, 'voltage stays 1.5 V', { c: 'vl' }) + T(360, 158, 'lasts twice as long', { c: 'vl' });
    return svg(480, 172, s, 'Cells in series add voltage; cells in parallel add capacity.');
  });

  /* ---- c07 ---- */
  def('kcl', () => {
    let s = DOT(240, 100, '') + AR(80, 40, 228, 92, 'o') + AR(80, 160, 228, 108, 'o') + AR(252, 92, 400, 40, 'o') + AR(252, 108, 400, 160, 'o') + T(120, 34, 'I₁ = 5 A', { c: 'lb' }) + T(120, 184, 'I₂ = 3 A', { c: 'lb' }) + T(372, 34, 'I₃ = 6 A', { c: 'lb' }) + T(372, 184, 'I₄ = ?', { c: 'lb' });
    s += T(240, 130, 'node', { c: 'vl' }) + T(240, 214, 'In = Out:  5 + 3 = 6 + I₄  ⇒  I₄ = 2 A', { c: 'lb' });
    return svg(480, 228, s, 'Kirchhoff’s current law: charge does not pile up at a node.');
  });
  def('kvl', () => {
    let s = WIRE([80, 50], [160, 50]) + comp('R', 160, 50, 240, 50, 'R₁', '4 V', {}) + comp('R', 240, 50, 320, 50, 'R₂', '5 V', {}) + WIRE([320, 50], [380, 50], [380, 150], [80, 150], [80, 115]) + comp('V', 80, 115, 80, 85, '', '', { nopol: 0 });
    s = s.replace(/<path class="w" d="M80 115L[^"]*"\/>/, '');
    s = WIRE([80, 50], [130, 50]) + comp('R', 130, 50, 210, 50, 'R₁', '4 V', {}) + comp('R', 210, 50, 290, 50, 'R₂', '5 V', {}) + WIRE([290, 50], [380, 50], [380, 160], [80, 160], [80, 130]) + comp('V', 80, 130, 80, 80, '12 V', '', { side: 'l' }) + WIRE([80, 80], [80, 50]);
    s = s.replace(/<path class="w" d="M80 130L[^"]*"\/>/, '');
    s += comp('R', 380, 70, 380, 140, 'R₃', '3 V', { side: 'r' }).replace(/<path[^>]*M380 70[^>]*>/, '');
    s += P('M150 100 A 40 40 0 1 1 315 105', 's-o', 'marker-end="url(#ao)"').replace('M150 100 A 40 40 0 1 1 315 105', 'M140 118C140 98 260 98 340 118') ;
    s += T(230, 130, '12 − 4 − 5 − 3 = 0', { c: 'lb' }) + T(230, 206, 'Go around any loop: rises equal drops.', { c: 'vl', sz: 12 });
    return svg(480, 222, s, 'Kirchhoff’s voltage law around one loop.');
  });
  def('nodal', () => {
    let s = WIRE([40, 40], [120, 40]) + comp('R', 120, 40, 200, 40, 'R₁', '', {}) + DOT(210, 40) + WIRE([200, 40], [300, 40]) + comp('R', 300, 40, 380, 40, 'R₃', '', {}) + DOT(300, 40) + WIRE([380, 40], [440, 40]) + T(210, 26, 'V₁', { c: 'cc' }) + T(300, 26, 'V₂', { c: 'cc' });
    s = WIRE([40, 40], [100, 40]) + comp('V', 100, 40, 130, 40, '', '', { nopol: 1 });
    s = '';
    s += WIRE([50, 40], [110, 40]) + comp('R', 110, 40, 190, 40, 'R₁', '', {}) + WIRE([190, 40], [260, 40]) + DOT(215, 40) + DOT(260, 40);
    s = WIRE([40, 120], [40, 40], [100, 40]) + comp('R', 100, 40, 180, 40, 'R₁', '', {}) + WIRE([180, 40], [200, 40]) + DOT(200, 40) + WIRE([200, 40], [300, 40]) + comp('R', 300, 40, 380, 40, 'R₃', '', {}) + DOT(300, 40) + WIRE([380, 40], [440, 40], [440, 120]);
    s = WIRE([40, 140], [40, 40], [90, 40]) + comp('R', 90, 40, 170, 40, 'R₁', '', {}) + WIRE([170, 40], [210, 40]) + DOT(210, 40) + WIRE([210, 40], [270, 40]) + comp('R', 270, 40, 350, 40, 'R₃', '', {}) + WIRE([350, 40], [410, 40]) + DOT(410, 40) + T(210, 26, 'V₁', { c: 'cc' }) + T(410, 26, 'V₂', { c: 'cc' });
    s += WIRE([210, 40], [210, 75]) + comp('R', 210, 75, 210, 125, 'R₂', '', { side: 'r' }) + WIRE([210, 125], [210, 160]) + WIRE([410, 40], [410, 75]) + comp('R', 410, 75, 410, 125, 'R₄', '', { side: 'r' }) + WIRE([410, 125], [410, 160]) + WIRE([40, 140], [40, 160], [410, 160]) + GND(210, 160);
    s += T(40, 26, '+', { c: 'vl' }) + T(240, 204, 'Write KCL at each unknown node; solve for V₁ and V₂.', { c: 'vl', sz: 12 });
    return svg(480, 222, s, 'Nodal analysis: pick a ground, label node voltages, apply KCL.');
  });
  def('mesh', () => {
    let s = WIRE([60, 50], [240, 50]) + WIRE([240, 50], [420, 50], [420, 160], [240, 160], [60, 160], [60, 50]);
    s = WIRE([60, 50], [150, 50]) + comp('R', 150, 50, 230, 50, 'R₁', '', {}) + WIRE([230, 50], [240, 50]) + WIRE([240, 50], [310, 50]) + comp('R', 310, 50, 380, 50, 'R₃', '', {}).replace(/M\d+ 50/, 'M310 50') + WIRE([380, 50], [420, 50], [420, 160], [240, 160], [60, 160], [60, 125]) + comp('V', 60, 125, 60, 85, '', '', { nopol: 0 }) + WIRE([60, 85], [60, 50]);
    s = WIRE([60, 50], [120, 50]) + comp('R', 120, 50, 200, 50, 'R₁', '', {}) + WIRE([200, 50], [240, 50]) + WIRE([240, 50], [300, 50]) + comp('R', 300, 50, 380, 50, 'R₃', '', {}) + WIRE([380, 50], [420, 50], [420, 160], [240, 160], [60, 160], [60, 130]) + comp('V', 60, 130, 60, 80, 'V', '', { side: 'l' }) + WIRE([60, 80], [60, 50]) + WIRE([240, 50], [240, 80]) + comp('R', 240, 80, 240, 130, 'R₂', '', { side: 'r' }) + WIRE([240, 130], [240, 160]);
    s = s.replace(/<path class="w" d="M60 130L[^"]*"\/>/, '');
    s += P('M110 112a30 30 0 1 1 1 0', 's-o', 'marker-end="url(#ao)"').replace('M110 112a30 30 0 1 1 1 0', 'M130 88A28 28 0 1 1 131 88') + T(150, 110, 'I₁', { c: 'lb' }) + P('M330 88A28 28 0 1 1 331 88', 's-o', 'marker-end="url(#ao)"') + T(345, 110, 'I₂', { c: 'lb' });
    s += T(240, 204, 'Write KVL around each loop. Shared R₂ sees I₁ − I₂.', { c: 'vl', sz: 12 });
    return svg(480, 218, s, 'Mesh analysis: one loop current per window.');
  });

  /* ===== cleaner rewrites using loop()/rails() ===== */
  const { loop, rails } = DG.lib;
  def('rc-circuit', () => svg(480, 210, loop(70, 50, 410, 150, { t: [['SW', 'S', ''], ['R', 'R', '']], r: [['C', 'C', '']], l: [['V', 'V', '', { flip: true, side: 'l' }]] }) + AR(270, 30, 320, 30, 'o') + T(295, 22, 'I', { c: 'lb' }) + T(240, 105, 'τ = R C', { c: 'lb' }) + T(240, 196, 'Close the switch: current flows, the capacitor charges.', { c: 'vl', sz: 12 }), 'RC charging circuit.'));
  def('series-demo', () => svg(480, 230, loop(70, 60, 410, 170, { t: [['R', 'R₁', '100 Ω'], ['R', 'R₂', '200 Ω'], ['R', 'R₃', '300 Ω']], l: [['V', '12 V', '', { flip: true, side: 'l' }]] }) + AR(120, 40, 170, 40, 'o') + T(145, 32, 'I', { c: 'lb' }) + T(240, 120, 'I = 12 V / 600 Ω = 20 mA (same everywhere)', { c: 'vl', sz: 12 }) + T(240, 146, 'drops: 2 V + 4 V + 6 V = 12 V', { c: 'vl', sz: 12 }) + T(240, 216, 'R_total = R₁ + R₂ + R₃ = 600 Ω', { c: 'lb' }), 'Series: one path, one current; voltage drops in proportion to R.'));
  def('parallel-demo', () => svg(480, 236, rails(60, 420, 50, 170, [[60, 'V', '12 V', '', { side: 'l', flip: true }], [170, 'R', 'R₁', '100 Ω'], [280, 'R', 'R₂', '200 Ω'], [390, 'R', 'R₃', '300 Ω']]) + T(170, 36, '120 mA', { c: 'cc', sz: 11 }) + T(280, 36, '60 mA', { c: 'cc', sz: 11 }) + T(390, 36, '40 mA', { c: 'cc', sz: 11 }) + T(240, 204, 'Every branch has 12 V. Currents add: 220 mA. R_total = 54.5 Ω.', { c: 'vl', sz: 12 }) + T(240, 224, '1/R = 1/100 + 1/200 + 1/300', { c: 'lb', sz: 12 }), 'Parallel: each branch sees the full source voltage.'));
  def('divider', () => svg(480, 250, `<line x1="120" y1="36" x2="200" y2="36" class="w"/>` + T(108, 40, 'V_in', { c: 'lb', a: 'end' }) + `<line x1="200" y1="36" x2="200" y2="52" class="w"/>` + comp('R', 200, 52, 200, 100, 'R₁', '', { side: 'r' }) + `<line x1="200" y1="100" x2="200" y2="124" class="w"/>` + DOT(200, 124) + `<line x1="200" y1="124" x2="300" y2="124" class="w"/>` + T(312, 128, 'V_out', { c: 'lb', a: 'start' }) + `<line x1="200" y1="124" x2="200" y2="148" class="w"/>` + comp('R', 200, 148, 200, 196, 'R₂', '', { side: 'r' }) + `<line x1="200" y1="196" x2="200" y2="210" class="w"/>` + GND(200, 210) + T(400, 100, 'V_out = V_in', { c: 'lb' }) + T(400, 120, '× R₂ / (R₁ + R₂)', { c: 'lb' }) + T(400, 160, 'e.g. 9 V, 10 k over 20 k', { c: 'vl', sz: 12 }) + T(400, 178, '⇒ V_out = 6 V', { c: 'vl', sz: 12 }), 'Voltage divider: the output is the share of V_in across the lower resistor.'));
  def('currdiv', () => svg(480, 230, `<line x1="40" y1="110" x2="110" y2="110" class="w"/>` + AR(40, 70, 40, 100, 'o') + T(56, 88, 'I_total', { c: 'lb', a: 'start' }) + `<line x1="40" y1="40" x2="40" y2="110" class="w" style="display:none"/>` + rails(110, 380, 50, 170, [[180, 'R', 'R₁', '', {}], [320, 'R', 'R₂', '', {}]]) + `<line x1="110" y1="50" x2="110" y2="170" class="w"/><line x1="40" y1="50" x2="110" y2="50" class="w"/>` + AR(40, 50, 40, 80, 'o') + AR(225, 70, 225, 100, 'o') + T(238, 88, 'I₁', { c: 'lb', a: 'start' }) + AR(365, 70, 365, 100, 'o') + T(378, 88, 'I₂', { c: 'lb', a: 'start' }) + T(260, 206, 'I₁ = I_total × R₂ / (R₁ + R₂)  —  the smaller R takes more current', { c: 'vl', sz: 12 }), 'Current divider.'));
  def('combo', () => svg(480, 210, `<line x1="20" y1="80" x2="50" y2="80" class="w"/>` + comp('R', 50, 80, 130, 80, 'R₁', '10 Ω', {}) + `<line x1="130" y1="80" x2="160" y2="80" class="w"/>` + rails(160, 240, 50, 110, [[180, 'R', '', '', {}], [220, 'R', '', '', {}]]).replace(/class="w"\/><line x1="240"/, 'class="w"/><line x1="240"') + T(180, 30, 'R₂ 30 Ω', { c: 'lb', sz: 11 }) + T(222, 130, 'R₃ 60 Ω', { c: 'lb', sz: 11 }) + AR(262, 80, 290, 80, 'o') + comp('R', 310, 80, 380, 80, '10 Ω', '', {}) + comp('R', 380, 80, 450, 80, '20 Ω', '', {}) + T(240, 180, '30 ‖ 60 = 20 Ω   ⇒   R_total = 10 + 20 = 30 Ω', { c: 'lb', sz: 12 }), 'Collapse parallel groups first, then add the series parts.'));
  def('kvl', () => svg(480, 230, loop(80, 60, 400, 170, { t: [['R', 'R₁', '4 V'], ['R', 'R₂', '5 V']], r: [['R', 'R₃', '3 V']], l: [['V', '12 V', '', { flip: true, side: 'l' }]] }) + P('M150 140C170 112 310 112 330 140', 's-o', 'marker-end="url(#ao)"') + T(240, 100, '12 − 4 − 5 − 3 = 0', { c: 'lb' }) + T(240, 214, 'Around any closed loop: voltage rises equal voltage drops.', { c: 'vl', sz: 12 }), 'Kirchhoff’s voltage law.'));
  def('nodal', () => svg(480, 230, `<line x1="60" y1="60" x2="60" y2="170" class="w"/><line x1="60" y1="60" x2="110" y2="60" class="w"/>` + comp('R', 110, 60, 190, 60, 'R₁', '', {}) + `<line x1="190" y1="60" x2="220" y2="60" class="w"/>` + DOT(220, 60) + `<line x1="220" y1="60" x2="280" y2="60" class="w"/>` + comp('R', 280, 60, 360, 60, 'R₃', '', {}) + `<line x1="360" y1="60" x2="400" y2="60" class="w"/>` + DOT(400, 60) + T(220, 92, 'V₁', { c: 'cc' }) + T(400, 92, 'V₂', { c: 'cc' }) + `<line x1="220" y1="60" x2="220" y2="76" class="w"/>` + comp('R', 220, 76, 220, 126, 'R₂', '', { side: 'r' }) + `<line x1="220" y1="126" x2="220" y2="170" class="w"/><line x1="400" y1="60" x2="400" y2="76" class="w"/>` + comp('R', 400, 76, 400, 126, 'R₄', '', { side: 'r' }) + `<line x1="400" y1="126" x2="400" y2="170" class="w"/><line x1="60" y1="170" x2="400" y2="170" class="w"/>` + comp('I', 60, 60, 60, 60.01, '', '', {}).slice(0, 0) + GND(220, 170) + T(240, 214, 'Ground one node. KCL at V₁ and V₂ gives two equations.', { c: 'vl', sz: 12 }), 'Nodal analysis.'));
  def('mesh', () => svg(480, 230, loop(70, 60, 410, 170, { t: [['R', 'R₁', ''], ['R', 'R₃', '']], l: [['V', 'V', '', { flip: true, side: 'l' }]] }) + rails(240, 240, 60, 170, [[240, 'R', 'R₂', '', {}]]) + P('M130 96A26 26 0 1 1 158 96', 's-o', 'marker-end="url(#ao)"') + T(145, 130, 'I₁', { c: 'lb' }) + P('M322 96A26 26 0 1 1 350 96', 's-o', 'marker-end="url(#ao)"') + T(336, 130, 'I₂', { c: 'lb' }) + T(240, 214, 'One KVL per window. The shared R₂ carries I₁ − I₂.', { c: 'vl', sz: 12 }), 'Mesh analysis.'));
  def('battery-model', () => svg(480, 230, `<rect x="60" y="38" width="190" height="64" rx="10" class="w" stroke-dasharray="5 4"/>` + T(155, 30, 'real battery', { c: 'vl', sz: 12 }) + loop(40, 70, 400, 170, { t: [['V', 'ε', '', { flip: true, side: 'u' }], ['R', 'r', '', {}]], r: [['R', 'R', 'load', {}]] }).replace(/<line[^>]*x1="40"[^>]*y2="70"[^>]*\/>/, '') + T(300, 120, 'V_t = ε − I r', { c: 'lb' }) + T(240, 214, 'Terminal voltage sags as the battery supplies more current.', { c: 'vl', sz: 12 }), 'A real battery is an ideal source ε in series with a small internal resistance r.'));

  /* ===== polish pass 2 ===== */
  def('rc-circuit', () => svg(480, 210, loop(70, 60, 410, 160, { t: [['SW', 'S', ''], ['R', 'R', '']], r: [['C', 'C', '']], l: [['V', 'V', '', { flip: true, side: 'l' }]] }) + AR(150, 88, 200, 88, 'o') + T(175, 80, 'I', { c: 'lb' }) + T(240, 122, 'τ = R C', { c: 'lb' }) + T(240, 198, 'Close the switch: current flows and the capacitor charges.', { c: 'vl', sz: 12 }), 'RC charging circuit.'));
  def('series-demo', () => svg(480, 230, loop(70, 70, 410, 170, { t: [['R', 'R₁', '100 Ω'], ['R', 'R₂', '200 Ω'], ['R', 'R₃', '300 Ω']], l: [['V', '12 V', '', { flip: true, side: 'l' }]] }) + AR(130, 30, 180, 30, 'o') + T(155, 22, 'I', { c: 'lb' }) + T(240, 128, 'I = 12 V / 600 Ω = 20 mA, the same everywhere', { c: 'vl', sz: 12 }) + T(240, 148, 'drops: 2 V + 4 V + 6 V = 12 V', { c: 'vl', sz: 12 }) + T(240, 214, 'R_total = R₁ + R₂ + R₃ = 600 Ω', { c: 'lb' }), 'Series: one path, one current; voltage drops in proportion to R.'));
  def('divider', () => svg(480, 250, `<line x1="120" y1="36" x2="200" y2="36" class="w"/>` + T(108, 40, 'V_in', { c: 'lb', a: 'end' }) + `<line x1="200" y1="36" x2="200" y2="52" class="w"/>` + comp('R', 200, 52, 200, 100, 'R₁', '', { side: 'r' }) + `<line x1="200" y1="100" x2="200" y2="124" class="w"/>` + DOT(200, 124) + `<line x1="200" y1="124" x2="290" y2="124" class="w"/>` + T(300, 128, 'V_out', { c: 'lb', a: 'start' }) + `<line x1="200" y1="124" x2="200" y2="148" class="w"/>` + comp('R', 200, 148, 200, 196, 'R₂', '', { side: 'r' }) + `<line x1="200" y1="196" x2="200" y2="210" class="w"/>` + GND(200, 210) + T(400, 184, 'V_out = V_in × R₂ / (R₁ + R₂)', { c: 'lb', sz: 12 }) + T(400, 204, '9 V across 10 k and 20 k gives 6 V', { c: 'vl', sz: 11 }), 'Voltage divider: the output is the share of V_in across the lower resistor.'));
  def('currdiv', () => svg(480, 230, rails(70, 410, 50, 170, [[70, 'I', 'I_total', '', { side: 'l' }], [220, 'R', 'R₁', '', {}], [350, 'R', 'R₂', '', {}]]) + AR(238, 80, 238, 110, 'o') + T(250, 100, 'I₁', { c: 'lb', a: 'start' }) + AR(368, 80, 368, 110, 'o') + T(380, 100, 'I₂', { c: 'lb', a: 'start' }) + T(240, 210, 'I₁ = I_total × R₂ / (R₁ + R₂). The smaller R takes more current.', { c: 'vl', sz: 12 }), 'Current divider.'));
  def('combo', () => svg(480, 210, `<line x1="20" y1="80" x2="50" y2="80" class="w"/>` + comp('R', 50, 80, 130, 80, 'R₁', '10 Ω', {}) + `<line x1="130" y1="80" x2="170" y2="80" class="w"/>` + rails(170, 290, 40, 120, [[205, 'R', 'R₂', '30 Ω', {}], [255, 'R', 'R₃', '60 Ω', {}]], { ends: true }) + `<line x1="290" y1="80" x2="310" y2="80" class="w"/>` + AR(318, 80, 338, 80, 'o') + comp('R', 350, 80, 410, 80, '10 Ω', '', { side: 'u' }) + `<line x1="410" y1="80" x2="420" y2="80" class="w"/>` + comp('R', 420, 80, 476, 80, '', '', {}).slice(0, 0) + T(240, 172, '30 ‖ 60 = 20 Ω,  so  R_total = 10 + 20 = 30 Ω', { c: 'lb', sz: 12 }), 'Collapse parallel groups first, then add the series parts.'));
  def('kvl', () => svg(480, 230, loop(80, 60, 400, 170, { t: [['R', 'R₁', '4 V'], ['R', 'R₂', '5 V']], r: [['R', 'R₃', '3 V']], l: [['V', '12 V', '', { flip: true, side: 'l' }]] }) + P('M150 152C170 124 310 124 330 152', 's-o', 'marker-end="url(#ao)"') + T(240, 112, '12 − 4 − 5 − 3 = 0', { c: 'lb' }) + T(240, 214, 'Around any closed loop: voltage rises equal voltage drops.', { c: 'vl', sz: 12 }), 'Kirchhoff’s voltage law.'));
  def('nodal', () => svg(480, 230, `<line x1="60" y1="60" x2="60" y2="170" class="w"/><line x1="60" y1="60" x2="110" y2="60" class="w"/>` + comp('R', 110, 60, 190, 60, 'R₁', '', {}) + `<line x1="190" y1="60" x2="220" y2="60" class="w"/>` + DOT(220, 60) + `<line x1="220" y1="60" x2="280" y2="60" class="w"/>` + comp('R', 280, 60, 360, 60, 'R₃', '', {}) + `<line x1="360" y1="60" x2="400" y2="60" class="w"/>` + DOT(400, 60) + T(222, 34, 'V₁', { c: 'oc' }) + T(402, 34, 'V₂', { c: 'oc' }) + `<line x1="220" y1="60" x2="220" y2="76" class="w"/>` + comp('R', 220, 76, 220, 126, 'R₂', '', { side: 'r' }) + `<line x1="220" y1="126" x2="220" y2="170" class="w"/><line x1="400" y1="60" x2="400" y2="76" class="w"/>` + comp('R', 400, 76, 400, 126, 'R₄', '', { side: 'r' }) + `<line x1="400" y1="126" x2="400" y2="170" class="w"/><line x1="60" y1="170" x2="400" y2="170" class="w"/>` + GND(220, 170) + T(240, 214, 'Ground one node. KCL at V₁ and at V₂ gives two equations.', { c: 'vl', sz: 12 }), 'Nodal analysis.'));
  def('mesh', () => svg(480, 230, loop(70, 60, 410, 170, { t: [['R', 'R₁', ''], ['R', 'R₃', '']], l: [['V', 'V', '', { flip: true, side: 'l' }]] }) + rails(240, 240, 60, 170, [[240, 'R', 'R₂', '', {}]]) + P('M170 100A24 24 0 1 1 172 100', 's-o', 'marker-end="url(#ao)"') + T(170, 138, 'I₁', { c: 'lb' }) + P('M322 100A24 24 0 1 1 324 100', 's-o', 'marker-end="url(#ao)"') + T(322, 138, 'I₂', { c: 'lb' }) + T(240, 210, 'One KVL per window. The shared R₂ carries I₁ − I₂.', { c: 'vl', sz: 12 }), 'Mesh analysis.'));
  def('battery-model', () => svg(480, 230, `<rect x="44" y="34" width="236" height="150" rx="12" class="w" stroke-dasharray="5 4"/>` + T(162, 28, 'real battery', { c: 'vl', sz: 12 }) + comp('V', 80, 70, 80, 170, 'ε', '', { side: 'l' }) + `<line x1="80" y1="70" x2="110" y2="70" class="w"/>` + comp('R', 110, 70, 190, 70, 'r', 'internal', {}) + `<line x1="190" y1="70" x2="410" y2="70" class="w"/><line x1="410" y1="70" x2="410" y2="92" class="w"/>` + comp('R', 410, 92, 410, 148, 'R', 'load', { side: 'r' }) + `<line x1="410" y1="148" x2="410" y2="170" class="w"/><line x1="80" y1="170" x2="410" y2="170" class="w"/>` + T(250, 130, 'V_t = ε − I r', { c: 'lb' }) + T(240, 214, 'Terminal voltage sags as the battery supplies more current.', { c: 'vl', sz: 12 }), 'A real battery is an ideal source ε in series with a small internal resistance r.'));

  /* ===== polish pass 3 ===== */
  const { ARC } = DG.lib;
  def('combo', () => svg(480, 210, `<line x1="20" y1="80" x2="50" y2="80" class="w"/>` + comp('R', 50, 80, 130, 80, 'R₁', '10 Ω', {}) + `<line x1="130" y1="80" x2="170" y2="80" class="w"/>` + rails(170, 320, 40, 120, [[210, 'R', 'R₂', '30 Ω', { side: 'l' }], [280, 'R', 'R₃', '60 Ω', { side: 'r' }]], { ends: true }) + `<line x1="320" y1="80" x2="336" y2="80" class="w"/>` + AR(342, 80, 372, 80, 'o') + T(430, 84, '= 10 + 20', { c: 'lb', a: 'middle' }) + T(240, 172, '30 ‖ 60 = 20 Ω,  so  R_total = 10 + 20 = 30 Ω', { c: 'lb', sz: 12 }), 'Collapse parallel groups first, then add the series parts.'));
  def('mesh', () => svg(480, 230, loop(70, 60, 410, 170, { t: [['R', 'R₁', ''], ['R', 'R₃', '']], l: [['V', 'V', '', { flip: true, side: 'l' }]] }) + rails(240, 240, 60, 170, [[240, 'R', 'R₂', '', {}]]) + ARC(155, 118, 24) + T(155, 122, 'I₁', { c: 'lb' }) + ARC(325, 118, 24) + T(325, 122, 'I₂', { c: 'lb' }) + T(240, 210, 'One KVL per window. The shared R₂ carries I₁ − I₂.', { c: 'vl', sz: 12 }), 'Mesh analysis.'));
  def('battery-model', () => svg(480, 230, `<rect x="44" y="26" width="236" height="160" rx="12" class="w" stroke-dasharray="5 4"/>` + T(162, 18, 'real battery', { c: 'vl', sz: 12 }) + comp('V', 80, 70, 80, 170, 'ε', '', { side: 'r' }) + `<line x1="80" y1="70" x2="110" y2="70" class="w"/>` + comp('R', 110, 70, 190, 70, 'r', 'internal', {}) + `<line x1="190" y1="70" x2="410" y2="70" class="w"/><line x1="410" y1="70" x2="410" y2="92" class="w"/>` + comp('R', 410, 92, 410, 148, 'R', 'load', { side: 'l' }) + `<line x1="410" y1="148" x2="410" y2="170" class="w"/><line x1="80" y1="170" x2="410" y2="170" class="w"/>` + T(345, 130, 'V_t = ε − I r', { c: 'lb', sz: 12 }) + T(240, 212, 'Terminal voltage sags as the battery supplies more current.', { c: 'vl', sz: 12 }), 'A real battery is an ideal source ε in series with a small internal resistance r.'));

  /* ===== polish pass 4 ===== */
  const LOOP = DG.lib.loop;
  def('currdiv', () => svg(480, 240, rails(70, 410, 50, 170, [[70, 'I', 'I_total', '', { side: 'l' }], [230, 'R', 'R₁', '', { side: 'l' }], [350, 'R', 'R₂', '', { side: 'l' }]]) + AR(262, 90, 262, 124, 'o') + T(276, 112, 'I₁', { c: 'lb', a: 'start' }) + AR(382, 90, 382, 124, 'o') + T(396, 112, 'I₂', { c: 'lb', a: 'start' }) + T(240, 204, 'I₁ = I_total × R₂ / (R₁ + R₂)', { c: 'lb', sz: 12 }) + T(240, 224, 'The smaller R takes more current.', { c: 'vl', sz: 12 }), 'Current divider.'));
  def('combo', () => svg(480, 210, `<line x1="20" y1="80" x2="50" y2="80" class="w"/>` + comp('R', 50, 80, 130, 80, 'R₁', '10 Ω', {}) + `<line x1="130" y1="80" x2="170" y2="80" class="w"/>` + rails(170, 320, 50, 110, [[210, 'R', 'R₂', '30 Ω', { side: 'l' }], [280, 'R', 'R₃', '60 Ω', { side: 'r' }]], { ends: true }) + `<line x1="320" y1="80" x2="340" y2="80" class="w"/>` + T(240, 172, '30 ‖ 60 = 20 Ω,  so  R_total = 10 + 20 = 30 Ω', { c: 'lb', sz: 12 }), 'Collapse parallel groups first, then add the series parts.'));
  def('battery-model', () => svg(480, 240, `<rect x="44" y="26" width="236" height="160" rx="12" class="w" stroke-dasharray="5 4"/>` + T(162, 18, 'real battery', { c: 'vl', sz: 12 }) + comp('V', 80, 70, 80, 170, 'ε', '', { side: 'r' }) + `<line x1="80" y1="70" x2="110" y2="70" class="w"/>` + comp('R', 110, 70, 190, 70, 'r', 'internal', {}) + `<line x1="190" y1="70" x2="410" y2="70" class="w"/><line x1="410" y1="70" x2="410" y2="92" class="w"/>` + comp('R', 410, 92, 410, 148, 'R', 'load', { side: 'r' }) + `<line x1="410" y1="148" x2="410" y2="170" class="w"/><line x1="80" y1="170" x2="410" y2="170" class="w"/>` + T(345, 120, 'V_t = ε − I r', { c: 'lb', sz: 12, a: 'end' }) + T(240, 222, 'Terminal voltage sags as the battery supplies more current.', { c: 'vl', sz: 12 }), 'A real battery is an ideal source ε in series with a small internal resistance r.'));
  def('kvl', () => svg(480, 250, LOOP(80, 60, 400, 170, { t: [['R', 'R₁', '4 V'], ['R', 'R₂', '5 V']], r: [['R', 'R₃', '3 V']], l: [['V', '12 V', '', { flip: true, side: 'l' }]] }) + ARC(240, 150, 30) + T(240, 118, '12 − 4 − 5 − 3 = 0', { c: 'lb' }) + T(240, 232, 'Around any closed loop: voltage rises equal voltage drops.', { c: 'vl', sz: 12 }), 'Kirchhoff’s voltage law.'));
  def('vt-line', () => DG.graph({ w: 480, h: 250, x: [0, 10], y: [0, 10], xl: 'Current drawn I', yl: 'Terminal voltage V_t', xt: [], yt: [],
    draw: (sx, sy) => `<path d="M${sx(0)} ${sy(9)}L${sx(9)} ${sy(0.4)}" class="w o thick"/>` + T(sx(0.3), sy(9.9), 'ε (open circuit)', { c: 'lb', a: 'start' }) + T(sx(5), sy(6.6), 'slope = −r', { c: 'lb', a: 'start' }) + T(sx(8.9), sy(2.6), 'short circuit: I = ε / r', { c: 'vl', a: 'end' }),
    cap: 'A larger internal resistance makes the line steeper.' }));
})();
