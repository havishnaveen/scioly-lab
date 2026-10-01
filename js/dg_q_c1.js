/* ===== hard-question figures (E1), ids qf-c1-* ===== */
(function () {
  const { T, L, AR, P, R, C, DOT, WIRE, comp, GND } = DG.lib, def = DG.def, svg = DG.svg;
  const W = WIRE, lb = (x, y, s, o) => T(x, y, s, Object.assign({ c: 'lb' }, o || {}));
  const open = (x, y) => `<circle cx="${x}" cy="${y}" r="3.6" class="w" style="fill:var(--bg,#fff)"/>`;
  const rc = (x1, y1, x2, y2, lab, o) => comp('R', x1, y1, x2, y2, lab, '', o);
  const bat = (x, y1, y2, lab, side) => comp('V', x, y1, x, y2, lab, '', { side: side || 'l' });
  /* gates ------------------------------------------------------------ */
  const nand = (x, yc, bubble) => `<path class="w" d="M${x} ${yc - 22}h20a22 22 0 0 1 0 44h-20z"/>` + (bubble === false ? '' : `<circle cx="${x + 46}" cy="${yc}" r="4" class="w"/>`);
  const orG = (x, yc) => `<path class="w" d="M${x} ${yc - 22}h12q28 0 38 22q-10 22 -38 22h-12q14 -22 0 -44z"/>`;
  const notG = (x, yc) => `<path class="w" d="M${x} ${yc - 16}v32l30 -16z"/><circle cx="${x + 34}" cy="${yc}" r="4" class="w"/>`;

  /* ---------- Test 3 replicas ---------- */
  def('qf-c1-t3-dist', () => {
    let s = '';
    const y = 90;
    s += `<circle cx="50" cy="${y}" r="14" class="w fr"/>` + lb(50, y + 5, '+') + `<circle cx="262" cy="${y}" r="10" class="w fb"/>` + lb(262, y + 5, '−') + `<circle cx="378" cy="${y}" r="14" class="w fr"/>` + lb(378, y + 5, '+');
    s += AR(66, y - 34, 246, y - 34, 'b', true) + lb(156, y - 42, '53 μm') + AR(278, y - 34, 362, y - 34, 'b', true) + lb(320, y - 42, '29 μm');
    s += T(50, y + 38, 'proton', { c: 'vl' }) + T(262, y + 38, 'electron', { c: 'vl' }) + T(378, y + 38, 'proton', { c: 'vl' });
    return svg(480, 150, s, 'Electron between two protons on the same line (not to scale).');
  });
  def('qf-c1-t3-q16', () => {
    let s = bat(70, 50, 190, '12 V') + W([70, 50], [110, 50]) + rc(110, 50, 230, 50, '8 Ω') + W([230, 50], [360, 50]);
    s += rc(290, 50, 290, 190, '3 Ω') + rc(360, 50, 360, 190, '5 Ω') + W([360, 190], [250, 190]) + rc(250, 190, 110, 190, '6 Ω', { side: 'd' }) + W([110, 190], [70, 190]);
    s += DOT(290, 50) + DOT(290, 190) + DOT(360, 50) + DOT(360, 190);
    s += lb(276, 44, 'E', { a: 'end' }) + lb(276, 206, 'F', { a: 'end' }) + lb(374, 44, 'G', { a: 'start' }) + lb(374, 206, 'H', { a: 'start' });
    return svg(480, 230, s, 'Series–parallel circuit. Points E, F, G, H are labelled.');
  });
  def('qf-c1-t3-rc', () => {
    let s = bat(70, 50, 170, 'V_b = 5.00 V') + W([70, 50], [150, 50]) + open(150, 50) + W([150, 110], [150, 170]) + open(150, 110);
    s += `<path class="w thick" d="M210 80L153 52"/>` + open(210, 80);
    s += lb(150, 38, 'a') + lb(136, 116, 'b', { a: 'end' });
    s += rc(210, 80, 340, 80, 'R = 47 kΩ') + W([340, 80], [390, 80]) + comp('C', 390, 80, 390, 170, 'C = 1000 μF', '', { side: 'r' });
    s += W([70, 170], [390, 170]) + DOT(150, 170);
    return svg(480, 200, s, 'Switch connects the RC branch to the battery (a) or to ground (b).');
  });
  def('qf-c1-t3-dep', () => {
    let s = W([80, 50], [80, 96]) + `<circle cx="80" cy="110" r="14" class="w"/>` + lb(80, 106, '+', { sz: 11 }) + lb(80, 122, '−', { sz: 11 }) + W([80, 124], [80, 170]) + lb(54, 114, 'v', { a: 'end' });
    s += rc(80, 50, 300, 50, 'R') + lb(150, 40, '+', { sz: 11 }) + lb(230, 40, '−', { sz: 11 }) + lb(190, 76, 'v_x');
    s += W([300, 50], [300, 88]) + `<path class="w" d="M300 88L322 110L300 132L278 110Z"/>` + lb(300, 105, '+', { sz: 10 }) + lb(300, 126, '−', { sz: 10 }) + W([300, 132], [300, 170]) + W([80, 170], [300, 170]);
    s += lb(336, 114, 'a·v_x', { a: 'start' }) + AR(410, 40, 330, 92, 'r') + T(420, 34, 'this element?', { c: 'vl', a: 'start', sz: 11 });
    return svg(480, 190, s, 'Loop with an independent source v, a resistor R (voltage v_x across it) and a diamond-shaped source.');
  });
  def('qf-c1-t3-q27', () => {
    let s = bat(70, 50, 190, '5 V') + rc(70, 50, 180, 50, 'R₁ 4 Ω') + rc(180, 50, 300, 50, 'R₄ 10 Ω');
    s += rc(180, 50, 180, 120, 'R₂ 4 Ω') + rc(180, 120, 180, 190, 'R₃ 8 Ω') + rc(300, 50, 300, 190, 'R₅ 4 Ω');
    s += W([300, 50], [390, 50]) + rc(390, 50, 390, 120, 'R₆ 2 Ω') + rc(390, 120, 390, 190, 'R₇ 2 Ω') + W([70, 190], [390, 190]);
    s += DOT(180, 50) + DOT(300, 50) + DOT(300, 190) + DOT(180, 190);
    return svg(480, 214, s, 'Resistor network powered by a 5 V battery.');
  });
  def('qf-c1-t3-nand', () => {
    let s = '';
    s += nand(140, 110) + nand(250, 50) + nand(250, 170) + nand(360, 110);
    s += W([30, 40], [250, 40]) + DOT(100, 40) + W([100, 40], [100, 100], [140, 100]);
    s += W([30, 180], [250, 180]) + DOT(100, 180) + W([100, 180], [100, 120], [140, 120]);
    s += W([190, 110], [215, 110]) + DOT(215, 110) + W([215, 110], [215, 60], [250, 60]) + W([215, 110], [215, 160], [250, 160]);
    s += W([300, 50], [330, 50], [330, 100], [360, 100]) + W([300, 170], [330, 170], [330, 120], [360, 120]);
    s += W([410, 110], [450, 110]) + lb(462, 114, 'Q', { a: 'start' }) + lb(20, 44, 'A', { a: 'end' }) + lb(20, 184, 'B', { a: 'end' });
    return svg(480, 214, s, 'Four NAND gates.');
  });
  /* generic two-source ladder: V1 - R1 - node - R2 - V2, R3 from node to bottom */
  const twoSrc = (V1, R1, R2, V2, R3, o) => {
    o = o || {};
    let s = bat(70, 50, 190, V1) + rc(70, 50, 240, 50, R1) + rc(240, 50, 410, 50, R2) + comp('V', 410, 50, 410, 190, V2, '', { side: 'r' }) + rc(240, 50, 240, 190, R3, { side: o.r3side || 'r' });
    s += W([70, 190], [410, 190]) + DOT(240, 50) + DOT(240, 190);
    if (o.AB) s += lb(228, 44, 'A', { a: 'end' }) + lb(228, 210, 'B', { a: 'end' });
    return s;
  };
  def('qf-c1-t3-thev', () => svg(480, 230, twoSrc('10 V', 'R₁ 10 Ω', 'R₂ 20 Ω', '20 V', 'R₃ 40 Ω (load)', { AB: 1 }), 'Two sources feed the load R₃ connected between A and B. Both + terminals are at the top.'));
  const bridge = (id, o) => def(id, () => {
    const top = [250, 30], l = [130, 115], r = [370, 115], bt = [250, 200];
    let s = bat(70, 30, 200, o.V, 'l') + W([70, 30], top) + W([70, 200], bt);
    s += rc(top[0], top[1], l[0], l[1], '') + rc(top[0], top[1], r[0], r[1], '') + rc(l[0], l[1], bt[0], bt[1], '') + rc(r[0], r[1], bt[0], bt[1], '');
    s += lb(178, 58, o.R1, { a: 'end' }) + lb(322, 58, o.R3, { a: 'start' }) + lb(178, 184, o.R2, { a: 'end' }) + lb(322, 184, o.Rx, { a: 'start' });
    s += DOT(l[0], l[1]) + DOT(r[0], r[1]) + DOT(top[0], top[1]) + DOT(bt[0], bt[1]);
    if (o.mid) s += rc(l[0], l[1], r[0], r[1], '') + lb(250, 102, o.mid, { sz: 12 });
    else if (o.meter) s += comp(o.meter, l[0], l[1], r[0], r[1], '', '', {}) + lb(250, 96, o.ml || '', { sz: 12 }) + lb(l[0] - 12, l[1] - 8, '+', { sz: 11, a: 'end' }) + lb(r[0] + 12, r[1] - 8, o.noneg ? '' : '−', { sz: 11, a: 'start' });
    else if (o.open) s += open(l[0], l[1]) + open(r[0], r[1]) + lb(l[0] - 10, l[1] + 4, o.open[0], { a: 'end' }) + lb(r[0] + 10, r[1] + 4, o.open[1], { a: 'start' });
    return svg(480, 238, s, o.cap || 'Bridge circuit.');
  });
  bridge('qf-c1-t3-bridge', { V: '10 V', R1: 'R₁ 1.50 kΩ', R3: 'R₃ 907 Ω', R2: 'R₂ 808 Ω', Rx: 'R_x 174 Ω', meter: 'VM', ml: 'V_out', cap: 'Bridge with a voltmeter V_out between the left and right mid-points (+ on the left).' });
  bridge('qf-c1-t3-br5', { V: '10 V', R1: 'R₁ 12 Ω', R3: 'R₂ 18 Ω', R2: 'R₄ 18 Ω', Rx: 'R₅ 12 Ω', mid: 'R₃ 6 Ω', cap: 'Bridge with a middle resistor R₃.' });

  def('qf-c1-t3-opamp', () => {
    let s = `<path class="w" d="M200 50V150L320 100Z"/>` + lb(212, 76, '+', { sz: 13, a: 'start' }) + lb(212, 136, '−', { sz: 13, a: 'start' });
    s += W([90, 70], [200, 70]) + open(90, 70) + lb(90, 56, '+5 V') + W([320, 100], [420, 100]) + open(420, 100) + lb(430, 104, 'V_out', { a: 'start' });
    s += W([200, 130], [150, 130], [150, 185]) + DOT(150, 130) + W([150, 185], [150, 185]);
    s += rc(150, 185, 370, 185, 'R_f 570 Ω') + W([370, 185], [370, 100]) + DOT(370, 100);
    s += rc(150, 185, 150, 255, 'R_g 220 Ω') + GND(150, 255) + DOT(150, 185);
    return svg(480, 290, s, 'Ideal op-amp with feedback.');
  });
  def('qf-c1-t3-cap', () => {
    let s = open(40, 100) + lb(30, 104, 'a', { a: 'end' }) + W([40, 100], [100, 100]) + W([100, 70], [100, 130]) + W([180, 70], [180, 130]);
    s += comp('C', 100, 70, 180, 70, '5 μF', '') + comp('C', 100, 130, 180, 130, '5 μF', '', { side: 'd' }) + DOT(100, 100) + DOT(180, 100) + W([180, 100], [390, 100]);
    s += comp('C', 280, 100, 280, 150, '2 μF', '', { side: 'l' }) + comp('C', 280, 150, 280, 200, '6 μF', '', { side: 'l' }) + comp('C', 280, 200, 280, 250, '3 μF', '', { side: 'l' }) + DOT(280, 100) + DOT(280, 250);
    s += W([390, 100], [390, 140]) + W([350, 140], [430, 140]) + comp('C', 350, 140, 350, 190, '3 μF', '', { side: 'l' }) + comp('C', 430, 140, 430, 190, '3 μF', '', { side: 'r' }) + W([350, 190], [430, 190]) + DOT(390, 140) + DOT(390, 190);
    s += comp('C', 390, 190, 390, 250, '6 μF', '', { side: 'r' }) + W([40, 250], [390, 250]) + open(40, 250) + lb(30, 254, 'b', { a: 'end' });
    return svg(480, 280, s, 'Capacitor network between terminals a and b.');
  });
  def('qf-c1-t3-ladder', () => {
    let s = open(40, 60) + lb(30, 64, 'A', { a: 'end' }) + open(40, 170) + lb(30, 174, 'D', { a: 'end' });
    s += W([40, 60], [60, 60]) + rc(60, 60, 150, 60, '10 Ω') + rc(150, 60, 240, 60, '10 Ω') + rc(240, 60, 330, 60, '10 Ω') + W([330, 60], [360, 60]);
    [150, 240, 330].forEach(x => { s += rc(x, 60, x, 170, '10 Ω', { side: 'r' }) + DOT(x, 60) + DOT(x, 170); });
    s += W([40, 170], [360, 170]) + `<path class="w" d="M366 60H440M366 170H440" stroke-dasharray="6 5"/>` + T(425, 118, '. . . forever', { c: 'vl' });
    return svg(480, 200, s, 'Infinite ladder: every resistor is 10 Ω. The pattern repeats without end.');
  });
  /* cube */
  const cube = (id, A, B, cap, col) => def(id, () => {
    const v = { '000': [110, 220], '100': [270, 220], '110': [270, 100], '010': [110, 100] };
    const P3 = (x, y, z) => { const b = v[x + '' + y + '0'] || [0, 0]; return [b[0] + z * 70, b[1] - z * 55]; };
    const pts = {}; for (let x = 0; x < 2; x++) for (let y = 0; y < 2; y++) for (let z = 0; z < 2; z++) pts[x + '' + y + '' + z] = P3(x, y, z);
    let s = '';
    const edges = []; for (const k in pts) for (let i = 0; i < 3; i++) { if (k[i] === '0') { const k2 = k.slice(0, i) + '1' + k.slice(i + 1); edges.push([k, k2]); } }
    edges.forEach(([a, b]) => { const p = pts[a], q = pts[b]; s += comp('R', p[0], p[1], q[0], q[1], '', '', {}); });
    for (const k in pts) s += DOT(pts[k][0], pts[k][1]);
    const pa = pts[A], pb = pts[B];
    s += lb(pa[0] - 14, pa[1] + 18, 'A', { a: 'end' }) + (pb[1] < 120 ? lb(pb[0] + 14, pb[1] - 10, 'B', { a: 'start' }) : lb(pb[0] + 14, pb[1] + 22, 'B', { a: 'start' }));
    return svg(480, 260, s, cap);
  });
  cube('qf-c1-t3-cube', '000', '111', 'Cube of twelve identical 1 Ω resistors, one on every edge. Current enters at A and leaves at B.');
  cube('qf-c1-h-cube-adj', '000', '100', 'Cube of twelve identical 12 Ω resistors, one on every edge. Current enters at A and leaves at B, the two ends of one edge.');
  def('qf-c1-t3-proton', () => {
    let s = `<circle cx="90" cy="100" r="14" class="w fr"/>` + lb(90, 105, '+') + AR(106, 100, 180, 100, '') + lb(146, 88, 'v');
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += T(230 + i * 44, 70 + j * 32, '×', { c: 'lb', sz: 18 });
    s += lb(330, 40, 'uniform magnetic field, into the page', { sz: 12 });
    return svg(480, 190, s, 'A proton (+) enters a region of uniform B (× = into the page) moving to the right. “Up” means toward the top of the figure.');
  });
  def('qf-c1-t3-logic', () => {
    let s = notG(130, 50) + `<path class="w" d="M130 34v32l30 -16z" style="display:none"/>`;
    s += W([50, 50], [130, 50]) + W([164, 50], [210, 50], [210, 100], [240, 100]);
    s += `<path class="w" d="M130 120h20a22 22 0 0 1 0 44h-20z" style="display:none"/>`;
    s += `<path class="w" d="M130 120h16a20 20 0 0 1 0 40h-16z"/>` + W([50, 130], [130, 130]) + W([50, 150], [130, 150]) + W([166, 140], [200, 140], [200, 120], [240, 120]);
    s += orG(240, 110) + W([278, 110], [330, 110]);
    s += lb(40, 54, 'A', { a: 'end' }) + lb(40, 134, 'B', { a: 'end' }) + lb(40, 154, 'C', { a: 'end' }) + lb(342, 114, 'X', { a: 'start' });
    return svg(480, 190, s, 'NOT, AND and OR gates.');
  });

  /* ---------- additional hard figures ---------- */
  def('qf-c1-h-unkR', () => {
    let s = bat(60, 50, 190, '24 V') + rc(60, 50, 170, 50, 'R₁ 6 Ω') + W([170, 50], [330, 50]) + rc(240, 50, 240, 190, 'R_x = ?', { side: 'l' }) + rc(330, 50, 330, 190, '12 Ω') + W([330, 190], [240, 190]) + rc(240, 190, 60, 190, '4 Ω', { side: 'd' }) + DOT(240, 50) + DOT(240, 190);
    return svg(480, 230, s, 'Source, R₁, a parallel pair with unknown R_x, and a 4 Ω resistor.');
  });
  def('qf-c1-h-r2r', () => {
    let s = bat(60, 50, 190, '24 V') + W([60, 50], [140, 50]) + rc(140, 50, 240, 50, 'R 1 kΩ') + rc(240, 50, 340, 50, 'R 1 kΩ') + W([340, 50], [420, 50]);
    [[140, 'N₁'], [240, 'N₂'], [340, 'N₃'], [420, '']].forEach(([x, n]) => { s += rc(x, 50, x, 190, '2 kΩ', { side: 'r' }) + DOT(x, 50) + DOT(x, 190) + (n ? lb(x - 10, 40, n, { a: 'end', sz: 12 }) : ''); });
    s += W([420, 190], [60, 190]);
    return svg(480, 230, s, 'Ladder network. Nodes N₁, N₂, N₃ are labelled.');
  });
  def('qf-c1-h-tetra', () => {
    const a = [240, 30], b = [90, 185], c = [390, 185], d = [240, 125];
    let s = rc(...a, ...b, '', {}) + rc(...b, ...c, '', {}) + rc(...c, ...a, '', {}) + rc(...d, ...a, '', {}) + rc(...d, ...b, '', {}) + rc(...d, ...c, '', {});
    [a, b, c, d].forEach(p => s += DOT(...p));
    s += lb(a[0] + 14, a[1] - 4, 'X', { a: 'start' }) + lb(b[0] - 14, b[1] + 6, 'Y', { a: 'end' }) + lb(c[0] + 14, c[1] + 6, 'Z', { a: 'start' }) + lb(d[0] + 12, d[1] - 10, 'W', { a: 'start' });
    return svg(480, 230, s, 'Six identical 12 Ω resistors joining four nodes X, Y, Z, W (every pair of nodes is connected by one resistor).');
  });
  def('qf-c1-h-nodal3', () => {
    let s = bat(60, 50, 190, '12 V') + rc(60, 50, 150, 50, '2 Ω') + rc(150, 50, 250, 50, '3 Ω') + rc(250, 50, 350, 50, '6 Ω');
    s += rc(150, 50, 150, 190, '6 Ω', { side: 'r' }) + rc(250, 50, 250, 190, '6 Ω', { side: 'r' }) + rc(350, 50, 350, 190, '3 Ω', { side: 'r' });
    s += W([350, 50], [425, 50]) + comp('I', 425, 190, 425, 50, '1 A', '', { side: 'r' }) + W([60, 190], [425, 190]);
    [150, 250, 350].forEach((x, i) => s += DOT(x, 50) + lb(x, 36, ['N₁', 'N₂', 'N₃'][i], { sz: 12 }));
    return svg(480, 220, s, 'Three-node network. The 1 A current source pushes current up into node N₃.');
  });
  def('qf-c1-h-super', () => {
    let s = bat(60, 50, 190, '12 V') + rc(60, 50, 200, 50, 'R₁ 3 Ω') + W([200, 50], [330, 50]) + rc(260, 50, 260, 190, 'R₂ 6 Ω', { side: 'l' }) + comp('I', 330, 190, 330, 50, '3 A', '', { side: 'r' }) + W([60, 190], [330, 190]) + DOT(260, 50) + DOT(260, 190);
    s += lb(248, 40, 'X', { a: 'end' });
    return svg(480, 230, s, 'A battery and a current source feeding node X (the 3 A source pushes current up into X).');
  });
  bridge('qf-c1-h-thevbr', { V: '12 V', R1: 'R₁ 6 Ω', R3: 'R₃ 4 Ω', R2: 'R₂ 3 Ω', Rx: 'R₄ 8 Ω', open: ['P', 'Q'], cap: 'Bridge with terminals P (left mid-point) and Q (right mid-point). The load will be connected between P and Q.' });
  def('qf-c1-h-rc2', () => {
    let s = bat(60, 50, 190, '12 V') + comp('SW', 60, 50, 170, 50, 'S', '') + rc(170, 50, 270, 50, '6 kΩ') + W([270, 50], [350, 50]) + rc(310, 50, 310, 190, '3 kΩ', { side: 'l' }) + W([350, 50], [350, 50]);
    s = s.replace('', '');
    s += comp('C', 380, 50, 380, 190, '100 μF', '', { side: 'r' }) + W([310, 50], [380, 50]) + W([60, 190], [380, 190]) + DOT(310, 50) + DOT(310, 190);
    return svg(480, 230, s, 'Switch S connects the source to an RC network. The capacitor starts uncharged.');
  });
  def('qf-c1-h-share', () => {
    let s = comp('C', 90, 60, 90, 180, 'C₁ 6 μF', '', { side: 'r' }) + W([90, 60], [150, 60]) + comp('SW', 150, 60, 250, 60, 'S', '') + W([250, 60], [360, 60]) + comp('C', 360, 60, 360, 180, 'C₂ 3 μF', '', { side: 'r' }) + W([90, 180], [360, 180]);
    s += lb(240, 216, 'C₁ is charged to 12 V;  C₂ is uncharged;  switch open', { sz: 12 });
    return svg(480, 230, s, 'Two capacitors joined by a switch.');
  });
  def('qf-c1-h-seriescap', () => svg(480, 230, DG.lib.loop(80, 50, 400, 170, { l: [['V', '', '30 V', { side: 'l' }]], t: [['C', 'C₁ 2 μF', '']], b: [['C', 'C₂ 3 μF', '']] }), 'Two capacitors in series across a 30 V battery.'));
  /* op-amp symbol */
  const oa = (tx, ty, sw) => { /* sw: true => + input on top */
    let s = `<path class="w" d="M${tx} ${ty}V${ty + 80}L${tx + 90} ${ty + 40}Z"/>`;
    s += lb(tx + 11, ty + 25, sw ? '+' : '−', { sz: 13, a: 'start' }) + lb(tx + 11, ty + 66, sw ? '−' : '+', { sz: 13, a: 'start' });
    return s;
  };
  def('qf-c1-h-oacasc', () => {
    let s = open(20, 90) + lb(22, 76, 'V_in = 0.3 V', { a: 'start' }).replace('x="22"', 'x="14"');
    s += rc(20, 90, 120, 90, '10 kΩ') + W([120, 90], [140, 90]) + oa(140, 70, false) + DOT(120, 90);
    s += W([120, 90], [120, 40]) + rc(120, 40, 260, 40, 'R_f 50 kΩ') + W([260, 40], [260, 110]) + DOT(260, 110) + W([230, 110], [260, 110]);
    s += W([140, 130], [120, 130], [120, 150]) + GND(120, 150);
    s += W([260, 110], [290, 110], [290, 70], [290, 70]);
    s = s.replace('', '');
    /* stage 2: + input on top, fed from stage 1 output */
    s += W([260, 110], [272, 110], [272, 90], [300, 90]) + oa(300, 70, true).replace(/d="M300 70V150L390 110Z"/, 'd="M300 70V150L390 110Z"');
    return svg(480, 290, s, 'Two op-amp stages in cascade (stage 2 input is stage 1 output).');
  });
  /* rebuild cascade cleanly (override) */
  def('qf-c1-h-oacasc', () => {
    let s = open(20, 90) + lb(14, 72, 'V_in = 0.3 V', { a: 'start' });
    s += rc(20, 90, 120, 90, '10 kΩ', { side: 'd' }) + W([120, 90], [140, 90]) + oa(140, 70, false) + DOT(120, 90);
    s += W([120, 90], [120, 40]) + rc(120, 40, 250, 40, 'R_f 50 kΩ') + W([250, 40], [250, 110]) + DOT(250, 110);
    s += W([140, 130], [120, 130], [120, 150]) + GND(120, 150);
    s += W([230, 110], [310, 110]);
    /* stage 2: + input on top gets stage-1 output */
    s += W([250, 110], [270, 110], [270, 90], [300, 90]);
    s += `<path class="w" d="M300 70V150L390 110Z"/>` + lb(311, 95, '+', { sz: 13, a: 'start' }) + lb(311, 136, '−', { sz: 13, a: 'start' });
    s = s.replace(W([230, 110], [310, 110]), '');
    s += W([300, 130], [275, 130], [275, 200]) + DOT(275, 130) + rc(275, 200, 410, 200, 'R_f 30 kΩ') + W([410, 200], [410, 110]) + DOT(410, 110);
    s += rc(275, 200, 275, 270, '10 kΩ', { side: 'l' }) + GND(275, 270) + DOT(275, 200) + W([390, 110], [450, 110]) + open(450, 110) + lb(440, 96, 'V_out', { a: 'end' });
    return svg(480, 305, s, 'Stage 1 (left) feeds stage 2 (right).');
  });
  def('qf-c1-h-oasum', () => {
    let s = open(20, 60) + lb(14, 40, '+2.0 V', { a: 'start' }) + rc(20, 60, 110, 60, '10 kΩ', { side: 'd' }) + open(20, 140) + lb(14, 120, '+1.0 V', { a: 'start' }) + rc(20, 140, 110, 140, '20 kΩ', { side: 'd' });
    s += W([110, 60], [110, 140]) + DOT(110, 100) + W([110, 100], [150, 100], [150, 85], [200, 85]) + DOT(150, 100);
    s += `<path class="w" d="M200 65V145L290 105Z"/>` + lb(211, 90, '−', { sz: 13, a: 'start' }) + lb(211, 131, '+', { sz: 13, a: 'start' }) + W([200, 125], [180, 125], [180, 150]) + GND(180, 150);
    s += W([150, 85], [150, 30]) + rc(150, 30, 330, 30, 'R_f 40 kΩ') + W([330, 30], [330, 105]) + W([290, 105], [400, 105]) + DOT(330, 105) + open(400, 105) + lb(410, 109, 'V_out', { a: 'start' });
    s += lb(440, 180, 'supply ±9 V', { a: 'end', sz: 12 });
    return svg(480, 200, s, 'Summing amplifier powered from ±9 V rails.');
  });
  def('qf-c1-h-clip', () => {
    let s = comp('AC', 70, 50, 70, 190, 'V_in', '10 V peak', { side: 'l' }).replace(/ /, ' ') + rc(70, 50, 200, 50, '1 kΩ') + W([200, 50], [330, 50]) + DOT(250, 50);
    s += comp('D', 250, 50, 250, 120, 'D', '', { side: 'r' }) + comp('V', 250, 120, 250, 190, '3 V', '', { side: 'l' }) + W([70, 190], [330, 190]);
    s += open(330, 50) + open(330, 190) + lb(344, 124, 'V_out', { a: 'start' }) + AR(336, 62, 336, 180, 'b', true);
    return svg(480, 230, s, 'Diode clipper; diode drop 0.7 V, output unloaded. The 3 V battery’s + terminal is at the top.');
  });
  def('qf-c1-h-bjt', () => {
    let s = lb(300, 18, '+12 V') + comp('R', 300, 30, 300, 110, 'Relay coil 240 Ω', '', { side: 'r' });
    s += `<path class="w" d="M270 130V170M270 142L300 122V110M270 158L300 178V200" /><path class="w" d="M300 178L290 172M300 178L292 168" />`;
    s += W([200, 150], [270, 150]) + rc(90, 150, 200, 150, 'R_B = ?', { side: 'u' }) + open(90, 150) + lb(90, 176, 'V_in = 5 V', { a: 'start' }) + W([300, 200], [300, 225]) + GND(300, 225);
    s += lb(250, 112, 'NPN', { sz: 12, a: 'end' });
    return svg(480, 262, s, 'NPN transistor used as a low-side switch for a relay coil.');
  });
  def('qf-c1-h-led', () => {
    let s = bat(60, 50, 190, '12 V') + W([60, 50], [150, 50]);
    [150, 250, 350].forEach((x, i) => {
      s += W([x, 50], [x, 50]) + rc(x, 50, x, 100, 'R = ?', { side: 'r' });
      s += comp('LED', x, 100, x, 130, '', '') + comp('LED', x, 130, x, 160, '', '') + comp('LED', x, 160, x, 190, '', '') + DOT(x, 50) + DOT(x, 190);
    });
    s += W([150, 50], [350, 50]) + W([60, 190], [350, 190]);
    return svg(480, 228, s, 'Nine white LEDs in three identical strings. Each LED drops 3.2 V at its rated 20 mA.');
  });
  def('qf-c1-h-logic3', () => {
    let s = nand(140, 50) + orG(140, 140) + `<path class="w" d="M290 70h16a24 24 0 0 1 0 48h-16z"/>`;
    s += W([30, 40], [140, 40]) + W([30, 60], [140, 60]) + W([30, 130], [140, 130]) + W([30, 150], [140, 150]);
    s += lb(24, 44, 'A', { a: 'end' }) + lb(24, 64, 'B', { a: 'end' }) + lb(24, 134, 'B', { a: 'end' }) + lb(24, 154, 'C', { a: 'end' });
    s += W([190, 50], [240, 50], [240, 84], [290, 84]) + W([178, 140], [240, 140], [240, 104], [290, 104]) + W([330, 94], [400, 94]) + lb(412, 98, 'Y', { a: 'start' });
    s += lb(166, 26, 'NAND', { sz: 11 }) + lb(158, 178, 'OR', { sz: 11 }) + lb(308, 64, 'AND', { sz: 11 });
    return svg(480, 200, s, 'Three gates. B is connected to both the NAND gate and the OR gate.');
  });
  def('qf-c1-h-loadv', () => {
    let s = bat(70, 40, 190, '12 V') + W([70, 40], [250, 40]) + rc(250, 40, 250, 115, '500 kΩ', { side: 'l' }) + rc(250, 115, 250, 190, '500 kΩ', { side: 'l' }) + W([250, 115], [360, 115]) + DOT(250, 115);
    s += comp('VM', 360, 115, 360, 190, 'Meter: 1 MΩ', 'input resistance', { side: 'r' }) + W([70, 190], [360, 190]);
    return svg(480, 230, s, 'A voltmeter measures the voltage across the lower resistor of a divider.');
  });
  def('qf-c1-h-amm', () => {
    let s = DG.lib.loop(80, 50, 380, 170, { l: [['V', '', '5 V', { side: 'l' }]], t: [['R', 'R 50 Ω', '']], r: [['A', 'Ammeter', 'R_m = 10 Ω', { side: 'r' }]] });
    return svg(480, 210, s, 'An ammeter with 10 Ω internal resistance is inserted in series.');
  });
  def('qf-c1-h-2bulb', () => {
    let s = bat(60, 50, 190, '120 V') + comp('LAMP', 60, 50, 290, 50, '60 W / 120 V rated', '') + W([290, 50], [390, 50]) + comp('LAMP', 390, 50, 390, 190, '100 W / 120 V rated', '', { side: 'l' }) + W([390, 190], [60, 190]);
    return svg(480, 230, s, 'Two lamps, each rated for 120 V, connected in series across a 120 V supply.');
  });
  def('qf-c1-h-3bulb', () => {
    let s = bat(60, 50, 190, 'V', 'l') + comp('LAMP', 60, 50, 280, 50, 'A', '') + W([280, 50], [360, 50]) + comp('LAMP', 330, 50, 330, 190, 'B', '', { side: 'l' }).replace('', '');
    s = bat(60, 50, 190, 'V', 'l') + comp('LAMP', 60, 50, 210, 50, 'A', '') + W([210, 50], [330, 50]) + comp('LAMP', 250, 50, 250, 190, 'B', '', { side: 'l' }) + comp('LAMP', 330, 50, 330, 110, 'C', '', { side: 'r' }) + comp('SW', 330, 110, 330, 190, 'S', '', { side: 'r' }) + W([330, 190], [250, 190]) + W([250, 190], [60, 190]) + DOT(250, 50) + DOT(250, 190);
    return svg(480, 230, s, 'Three identical lamps (resistance R each) and a switch S in series with C.');
  });
  def('qf-c1-h-3ser', () => {
    let s = bat(60, 50, 190, 'V', 'l') + comp('LAMP', 60, 50, 170, 50, 'A', '') + comp('LAMP', 170, 50, 280, 50, 'B', '') + W([280, 50], [350, 50]) + comp('LAMP', 350, 50, 350, 190, 'C', '', { side: 'r' });
    s += W([410, 50], [410, 190]) + W([350, 50], [410, 50]) + W([350, 190], [410, 190]) + comp('SW', 410, 50, 410, 190, 'S', '', { side: 'r' });
    s = bat(60, 50, 190, 'V', 'l') + comp('LAMP', 60, 50, 170, 50, 'A', '') + comp('LAMP', 170, 50, 280, 50, 'B', '') + W([280, 50], [330, 50]) + comp('LAMP', 330, 50, 330, 190, 'C', '', { side: 'l' }) + W([330, 50], [400, 50]) + comp('SW', 400, 50, 400, 190, 'S', '', { side: 'r' }) + W([400, 190], [60, 190]) + DOT(330, 50) + DOT(330, 190);
    return svg(480, 230, s, 'Three identical lamps in series. Closing S shorts out lamp C.');
  });
  def('qf-c1-h-mesh', () => svg(480, 230, twoSrc('18 V', 'R₁ 3 Ω', 'R₃ 2 Ω', '6 V', 'R₂ 6 Ω'), 'Two-source circuit. Both + terminals are at the top.'));
  def('qf-c1-h-ccvs', () => {
    let s = bat(80, 50, 170, '12 V') + rc(80, 50, 200, 50, '4 Ω') + rc(200, 50, 320, 50, '2 Ω');
    s += W([320, 50], [320, 88]) + `<path class="w" d="M320 88L342 110L320 132L298 110Z"/>` + lb(320, 105, '+', { sz: 10 }) + lb(320, 126, '−', { sz: 10 }) + W([320, 132], [320, 170]) + W([80, 170], [320, 170]);
    s += lb(356, 106, '(3 Ω) · I', { a: 'start' }) + AR(200, 92, 260, 92, 'o') + lb(230, 86, 'I');
    return svg(480, 200, s, 'Series loop with a current-controlled voltage source; I is the loop current, clockwise.');
  });
  bridge('qf-c1-h-wheat', { V: '24 V', R1: 'R₁ 120 Ω', R3: 'R₃ 200 Ω', R2: 'R₂ 180 Ω', Rx: 'R_x = ?', meter: 'G', ml: 'galvanometer', noneg: 1, cap: 'Wheatstone bridge; the galvanometer G reads zero when balanced.' });
  const divLoad = (id, V, r1, r2, rl, cap) => def(id, () => {
    let s = bat(70, 40, 190, V) + W([70, 40], [250, 40]) + rc(250, 40, 250, 115, r1, { side: 'l' }) + rc(250, 115, 250, 190, r2, { side: 'l' }) + W([250, 115], [360, 115]) + DOT(250, 115);
    s += comp('BOX', 360, 115, 360, 190, rl, '', { side: 'r' }) + W([70, 190], [360, 190]);
    return svg(480, 230, s, cap);
  });
  divLoad('qf-c1-h-divdes', '12 V', 'R₁ = ?', 'R₂ 500 Ω', 'Load: 5 V, 10 mA', 'Voltage divider feeding a load that needs 5 V at 10 mA.');
  divLoad('qf-c1-h-pot', '10 V', 'upper 5 kΩ', 'lower 5 kΩ', 'Load 10 kΩ', 'A 10 kΩ potentiometer set at mid-travel. The wiper (middle node) feeds a 10 kΩ load.');
  def('qf-c1-h-zener', () => {
    let s = bat(70, 40, 190, '12 V') + rc(70, 40, 230, 40, 'R 220 Ω') + W([230, 40], [360, 40]) + comp('Z', 290, 190, 290, 40, '5.6 V Zener', '', { side: 'l' }) + comp('BOX', 360, 40, 360, 190, 'Load', '', { side: 'r' }) + W([70, 190], [360, 190]) + DOT(290, 40) + DOT(290, 190);
    return svg(480, 230, s, 'Zener shunt regulator (Zener cathode toward the positive rail).');
  });
})();
