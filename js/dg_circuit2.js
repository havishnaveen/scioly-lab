/* ===== circuit diagrams, part 2 (c08 - c16) ===== */
(function () {
  const { T, L, AR, P, R, C, DOT, WIRE, comp, GND, loop, rails, ARC } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const box = (x, y, w, h, txt, c) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" class="w ${c || 'fm'}"/>` + T(x + w / 2, y + h / 2 + 4, txt, { c: 'lb', sz: 12 });
  const ln = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="w"/>`;
  const cp = (type, x1, y1, x2, y2, o) => comp(type, x1, y1, x2, y2, '', '', Object.assign({ nopol: true }, o || {}));

  /* ---- c08 ---- */
  def('thevenin', () => {
    let s = R(20, 40, 100, 90, 'fm') + T(70, 82, 'any linear', { c: 'lb', sz: 12 }) + T(70, 98, 'network', { c: 'lb', sz: 12 });
    s += ln(120, 60, 160, 60) + ln(120, 110, 160, 110) + DOT(160, 60) + DOT(160, 110) + T(172, 64, 'a', { c: 'lb' }) + T(172, 114, 'b', { c: 'lb' });
    s += AR(198, 85, 250, 85, 'o') + T(224, 72, 'equivalent', { c: 'vl', sz: 11 });
    s += cp('V', 320, 60, 320, 110) + T(304, 62, '+', { c: 'lb' }) + T(304, 112, '−', { c: 'lb' }) + T(296, 90, 'V_th', { c: 'lb', a: 'end' });
    s += ln(320, 60, 340, 60) + comp('R', 340, 60, 420, 60, 'R_th', '', {}) + ln(420, 60, 450, 60) + DOT(450, 60) + ln(320, 110, 450, 110) + DOT(450, 110) + T(462, 64, 'a', { c: 'lb' }) + T(462, 114, 'b', { c: 'lb' });
    s += T(240, 158, 'V_th = open-circuit voltage measured at a–b', { c: 'vl', sz: 11.5 }) + T(240, 176, 'R_th = resistance seen at a–b with all sources turned off', { c: 'vl', sz: 11.5 });
    return svg(480, 190, s, 'Thévenin’s theorem: any linear network looks like one voltage source and one series resistor from the outside.');
  });
  def('norton', () => {
    let s = comp('I', 70, 130, 70, 70, '', '', {}) + T(48, 104, 'I_N', { c: 'lb', a: 'end' }) + rails(70, 240, 70, 130, [[170, 'R', 'R_N', '', { side: 'r' }]]) + ln(240, 70, 280, 70) + DOT(280, 70) + ln(240, 130, 280, 130) + DOT(280, 130) + T(294, 74, 'a', { c: 'lb' }) + T(294, 134, 'b', { c: 'lb' });
    s += T(240, 176, 'I_N = short-circuit current at a–b        R_N = R_th', { c: 'vl', sz: 11.5 }) + T(240, 194, 'I_N = V_th / R_th', { c: 'lb', sz: 12 });
    return svg(480, 206, s, 'Norton’s theorem: one current source in parallel with one resistor. It is the Thévenin source converted.');
  });
  def('wheatstone', () => {
    const a = [240, 40], l = [140, 120], r = [340, 120], b = [240, 200];
    let s = cp('R', a[0], a[1], l[0], l[1]) + cp('R', a[0], a[1], r[0], r[1]) + cp('R', l[0], l[1], b[0], b[1]) + cp('R', r[0], r[1], b[0], b[1]);
    s += T(176, 62, 'R₁', { c: 'lb', a: 'end' }) + T(304, 62, 'R₂', { c: 'lb', a: 'start' }) + T(176, 184, 'R₃', { c: 'lb', a: 'end' }) + T(304, 184, 'R₄', { c: 'lb', a: 'start' });
    s += comp('A', l[0], l[1], r[0], r[1], '', '', {}) + T(240, 92, 'meter', { c: 'vl', sz: 11 }) + DOT(l[0], l[1]) + DOT(r[0], r[1]) + DOT(a[0], a[1]) + DOT(b[0], b[1]);
    s += ln(240, 40, 240, 16) + T(254, 24, '+', { c: 'lb' }) + ln(240, 200, 240, 224) + T(254, 226, '−', { c: 'lb' });
    s += T(418, 100, 'Balanced when', { c: 'vl', sz: 12 }) + T(418, 120, 'R₁/R₃ = R₂/R₄', { c: 'lb', sz: 12 }) + T(418, 140, 'meter reads 0', { c: 'vl', sz: 12 });
    return svg(480, 236, s, 'Wheatstone bridge: when the ratios match, no current flows through the middle branch.');
  });
  def('deltawye', () => {
    let s = '';
    s += T(130, 18, 'Delta (Δ)', { c: 'lb' }) + P('M130 40L70 140H190Z', 'w') + T(130, 34, '1', { c: 'oc' }) + T(56, 150, '2', { c: 'oc' }) + T(204, 150, '3', { c: 'oc' }) + T(92, 82, 'R₁₂', { c: 'lb', sz: 11 }) + T(168, 82, 'R₁₃', { c: 'lb', sz: 11 }) + T(130, 158, 'R₂₃', { c: 'lb', sz: 11 });
    s += T(350, 18, 'Wye (Y)', { c: 'lb' }) + ln(350, 90, 350, 44) + ln(350, 90, 306, 136) + ln(350, 90, 394, 136) + DOT(350, 90) + T(350, 36, '1', { c: 'oc' }) + T(294, 146, '2', { c: 'oc' }) + T(406, 146, '3', { c: 'oc' }) + T(372, 66, 'R₁', { c: 'lb', sz: 11 }) + T(314, 110, 'R₂', { c: 'lb', sz: 11 }) + T(390, 110, 'R₃', { c: 'lb', sz: 11 });
    s += T(240, 190, 'Y from Δ:  R₁ = R₁₂R₁₃ / (R₁₂ + R₁₃ + R₂₃)', { c: 'vl', sz: 11.5 }) + T(240, 208, '(product of the two resistors touching node 1 ÷ sum of all three)', { c: 'vl', sz: 11.5 });
    s += T(240, 226, 'Equal Δ of R becomes Y of R/3.', { c: 'lb', sz: 11.5 });
    return svg(480, 238, s, 'Δ–Y conversion for bridges that are not series/parallel.');
  });

  /* ---- c09 / c10 ---- */
  def('dcflow', () => {
    let s = loop(110, 50, 370, 160, { r: [['R', 'R', '', { side: 'r' }]], l: [['V', 'battery', '', { flip: true, side: 'l' }]] });
    s += AR(150, 72, 310, 72, 'r') + T(230, 92, 'conventional current (+ to −)', { c: 'hc', sz: 11.5 });
    s += AR(150, 138, 310, 138, 'b') + T(230, 124, 'electron flow (− to +)', { c: 'cc', sz: 11.5 });
    s += T(240, 196, 'Electrons drift the opposite way from the arrow convention.', { c: 'vl', sz: 11.5 }) + T(240, 214, 'Tests use the + to − convention.', { c: 'vl', sz: 11.5 });
    return svg(480, 226, s, 'Direct current flows one way around the loop.');
  });
  def('acdc', () => {
    const g = (x, title, draw) => `<g transform="translate(${x} 0)"><path class="w ax" d="M10 100H150M10 20V180"/>${T(80, 14, title, { c: 'lb' })}${draw}</g>`;
    let s = g(0, 'DC', `<path class="w o thick" d="M10 50H150"/>` + T(80, 172, 'steady', { c: 'vl' }));
    s += g(160, 'AC sine', `<path class="w o thick" d="M10 100 C 30 20, 50 20, 80 100 S 130 180, 150 100"/>` + T(80, 172, 'alternates', { c: 'vl' }));
    s += g(320, 'Square', `<path class="w o thick" d="M10 50H55V150H105V50H150"/>` + T(80, 172, 'RMS = peak', { c: 'vl' }));
    return svg(480, 190, s, 'Direct current holds one value. Alternating current swings positive and negative.');
  });

  def('sine', () => DG.graph({ w: 480, h: 260, mr: 130, x: [0, 2], y: [-1.3, 1.3], xl: 'time', yl: 'voltage', xt: [[0, '0'], [0.5, 'T/4'], [1, 'T/2'], [1.5, '3T/4'], [2, 'T']], yt: [],
    draw: (sx, sy) => {
      const xe = sx(2), tx = xe + 26;
      return DG.curve(t => Math.sin(Math.PI * t), sx, sy, 0, 2, 100, 'o') + `<line x1="${sx(0)}" y1="${sy(0)}" x2="${xe}" y2="${sy(0)}" class="w"/>`
        + `<line x1="${sx(0)}" y1="${sy(1)}" x2="${xe + 12}" y2="${sy(1)}" class="w hot" stroke-dasharray="5 4"/>`
        + `<line x1="${sx(0)}" y1="${sy(-1)}" x2="${xe + 12}" y2="${sy(-1)}" class="w grn" stroke-dasharray="5 4"/>`
        + `<line x1="${sx(0)}" y1="${sy(0.707)}" x2="${xe + 12}" y2="${sy(0.707)}" class="w b" stroke-dasharray="5 4"/>`
        + AR(xe + 12, sy(-1), xe + 12, sy(1), 'g', true)
        + T(tx, sy(1) + 4, 'V_peak', { c: 'hc', a: 'start' }) + T(tx, sy(0.707) + 4, 'V_rms', { c: 'cc', a: 'start' }) + T(tx, sy(0.707) + 18, '= 0.707 V_peak', { c: 'cc', a: 'start', sz: 11.5 })
        + T(tx, sy(-0.2), 'V_pp', { c: 'oc', a: 'start' }) + T(tx, sy(-0.2) + 14, '= 2 V_peak', { c: 'oc', a: 'start', sz: 11.5 });
    },
    cap: 'One full cycle takes the period T. Frequency f = 1/T. In the US, household AC is 60 Hz with about 120 V RMS (170 V peak).' }));
  def('household', () => {
    let s = T(70, 24, '120 V AC source', { c: 'lb' }) + comp('AC', 70, 140, 70, 50, '', '', {}) + ln(70, 50, 200, 50);
    s += comp('FUSE', 200, 50, 260, 50, 'breaker', '', { side: 'u' }) + ln(260, 50, 380, 50) + T(330, 40, 'hot (black)', { c: 'hc', sz: 11.5 });
    s += comp('LAMP', 380, 50, 380, 140, '', '', {}) + T(358, 99, 'load', { c: 'lb', a: 'end' }) + ln(380, 140, 70, 140) + T(225, 160, 'neutral (white) returns the current', { c: 'vl', sz: 11.5 });
    s += `<rect x="358" y="78" width="44" height="44" rx="6" class="w" style="stroke-dasharray:4 3;opacity:.55"/>` + T(408, 92, 'metal case', { c: 'vl', sz: 10.5, a: 'start' });
    s += `<path d="M402 100H440V186H250" class="w grn" stroke-dasharray="5 4"/>` + T(470, 206, 'ground wire (green / bare)', { c: 'grn', sz: 11, a: 'end' }).replace('class="t grn"', 'class="t" style="fill:#15803d"') + GND(250, 186);
    return svg(480, 226, s, 'Household wiring: hot carries current to the load, neutral returns it, ground only carries fault current.');
  });

  /* ---- c11 ---- */
  def('barmagnet', () => {
    const A = (d) => P(d, 's-o', 'marker-end="url(#ao)"');
    let s = `<rect x="140" y="76" width="100" height="58" class="w fr"/><rect x="240" y="76" width="100" height="58" class="w fb"/>` + T(190, 111, 'N', { c: 'lb', sz: 17 }) + T(290, 111, 'S', { c: 'lb', sz: 17 });
    s += A('M185 76C185 40 295 40 295 76') + A('M155 76C145 -8 335 -8 325 76') + A('M185 134C185 170 295 170 295 134') + A('M155 134C145 218 335 218 325 134');
    s += AR(332, 92, 148, 92, 'o') + AR(332, 124, 148, 124, 'o');
    s += T(240, 226, 'Outside the magnet lines run N → S; inside they run S → N, closing each loop.', { c: 'vl', sz: 11.5 });
    return svg(480, 238, s, 'Field lines of a bar magnet form closed loops.');
  });
  def('wireB', () => {
    let s = T(240, 16, 'B circles the wire: right thumb along I, fingers curl along B', { c: 'vl', sz: 11.5 });
    const pane = (cx, out, lab) => {
      let q = `<circle cx="${cx}" cy="108" r="12" class="w fm"/>` + (out ? `<circle cx="${cx}" cy="108" r="3.4" class="dot"/>` : `<path d="M${cx - 5} 103L${cx + 5} 113M${cx + 5} 103L${cx - 5} 113" class="w"/>`);
      [28, 50, 72].forEach(r => {
        q += `<circle cx="${cx}" cy="108" r="${r}" class="w s-o" style="opacity:.8"/>`;
        const d = out ? -1 : 1, x = cx, y = 108 - r;   /* top of circle: ccw moves left, cw moves right */
        q += `<path d="M${x - d * 7} ${y - 4.5}L${x} ${y}L${x - d * 7} ${y + 4.5}" class="w s-o"/>`;
      });
      return q + T(cx, 204, lab, { c: 'lb', sz: 12 });
    };
    s += pane(120, true, 'current out of the page (•)') + pane(360, false, 'current into the page (×)');
    return svg(480, 216, s, 'Right-hand rule for the field around a straight wire: B = μ₀I / 2πr.');
  });
  def('solenoid', () => {
    let s = `<rect x="148" y="76" width="184" height="48" rx="4" class="w" style="stroke-dasharray:3 4;opacity:.45"/>`;
    [88, 100, 112].forEach(y => { s += AR(150, y, 334, y, 'b'); });
    for (let i = 0; i < 8; i++) s += `<ellipse cx="${163 + i * 22}" cy="100" rx="7" ry="28" class="w o" style="stroke-width:2.5"/>`;
    s += P('M338 92C430 80 430 22 240 22S50 80 142 92', 's-b', 'marker-end="url(#ab)"') + P('M338 108C430 120 430 178 240 178S50 120 142 108', 's-b', 'marker-end="url(#ab)"');
    s += T(116, 106, 'S', { c: 'lb', sz: 15 }) + T(364, 106, 'N', { c: 'lb', sz: 15 });
    s += T(240, 204, 'B = μ₀ n I inside. Curl the fingers along the current; the thumb points to N.', { c: 'vl', sz: 11.5 });
    return svg(480, 214, s, 'A solenoid’s field looks like a bar magnet’s: inside S → N, returning around the outside.');
  });
  def('lorentz', () => {
    let s = '';
    for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++) if (!(i === 2 && j === 1)) s += `<path d="M${40 + i * 36} ${40 + j * 40}l8 8m0 -8l-8 8" class="w" style="opacity:.35"/>`;
    s += `<circle cx="120" cy="100" r="13" class="w fr"/>` + T(120, 105, '+', { c: 'lb' }) + AR(136, 100, 230, 100, 'b') + T(232, 92, 'v', { c: 'cc', a: 'start', sz: 15 }) + AR(120, 84, 120, 28, 'r') + T(132, 34, 'F', { c: 'hc', a: 'start', sz: 15 });
    s += T(280, 62, 'B into the page (×)', { c: 'vl', a: 'start', sz: 12 }) + T(290, 120, 'F = q v × B', { c: 'lb', a: 'start' }) + T(290, 142, 'F ⟂ v and F ⟂ B', { c: 'vl', a: 'start', sz: 12 }) + T(290, 160, 'no work; speed unchanged', { c: 'vl', a: 'start', sz: 12 });
    return svg(480, 190, s, 'Force on a moving positive charge: velocity right, field into the page, force up.');
  });
  def('wireforce', () => {
    let s = `<rect x="70" y="50" width="70" height="100" class="w fr"/><rect x="340" y="50" width="70" height="100" class="w fb"/>` + T(105, 108, 'N', { c: 'lb', sz: 18 }) + T(375, 108, 'S', { c: 'lb', sz: 18 });
    [80, 100, 120].forEach(y => { s += AR(146, y, 334, y, 'b'); });
    s += `<circle cx="240" cy="100" r="11" class="w fm"/><circle cx="240" cy="100" r="3" class="dot"/>` + AR(240, 86, 240, 40, 'r') + T(254, 44, 'F', { c: 'hc', a: 'start', sz: 15 }) + T(240, 142, 'I out of the page', { c: 'vl', sz: 11 }) + T(240, 172, 'B points from N to S', { c: 'cc' }) + T(240, 194, 'F = B I L sin θ     (current out, B right ⇒ force up)', { c: 'lb', sz: 12 });
    return svg(480, 206, s, 'A current-carrying wire in a magnetic field feels a force. This is how motors work.');
  });
  def('flux', () => {
    const cx = 240, cy = 110, th = 40 * Math.PI / 180, nx = Math.cos(th), ny = -Math.sin(th), dx = Math.sin(th), dy = Math.cos(th);
    let s = '';
    [24, 44, 158, 200].forEach(y => { s += AR(50, y, 410, y, 'b'); });
    s += T(424, 28, 'B', { c: 'cc', sz: 15 });
    s += `<line x1="${cx}" y1="${cy}" x2="${cx + 120}" y2="${cy}" class="w" stroke-dasharray="4 4" style="opacity:.6"/>`;
    s += `<line x1="${f(cx - 70 * dx)}" y1="${f(cy - 70 * dy)}" x2="${f(cx + 70 * dx)}" y2="${f(cy + 70 * dy)}" class="w o" style="stroke-width:6"/>`;
    s += AR(cx, cy, cx + 80 * nx, cy + 80 * ny, 'g') + T(cx + 80 * nx + 8, cy + 80 * ny - 2, 'normal', { c: 'grn', a: 'start', sz: 12 });
    s += P(`M${cx + 44} ${cy}A44 44 0 0 0 ${f(cx + 44 * nx)} ${f(cy + 44 * ny)}`, 's-o') + T(cx + 58, cy - 12, 'θ', { c: 'oc', sz: 15 });
    s += T(cx + 70 * dx + 12, cy + 70 * dy + 12, 'loop, edge-on', { c: 'vl', a: 'start', sz: 11.5 });
    s += T(240, 226, 'Φ = B A cos θ  (weber). Turn the loop, or change B or A, to change Φ.', { c: 'lb', sz: 12 });
    return svg(480, 238, s, 'Magnetic flux is the field component through the loop: maximum when the loop faces the field (θ = 0), zero when edge-on (θ = 90°).');
  });

  /* ---- c12 / c13 / c14 ---- */
  def('electromagnet', () => {
    let s = `<rect x="168" y="92" width="152" height="26" rx="5" class="w fm" style="stroke-width:3"/>`;
    for (let i = 0; i < 8; i++) s += `<path d="M${180 + i * 16} 128L${190 + i * 16} 82" class="w o" style="stroke-width:3"/>`;
    s += T(140, 110, 'S', { c: 'lb', sz: 16 }) + T(348, 110, 'N', { c: 'lb', sz: 16 }) + T(244, 148, 'iron core', { c: 'vl', sz: 11.5 });
    s += ln(302, 82, 302, 44) + ln(302, 44, 90, 44) + cp('V', 90, 44, 90, 154) + T(74, 48, '+', { c: 'lb' }) + T(74, 160, '−', { c: 'lb' }) + ln(90, 154, 180, 154) + ln(180, 154, 180, 128);
    s += T(76, 104, '9 V', { c: 'lb', a: 'end', sz: 12 });
    s += AR(196, 44, 232, 44, 'o') + T(240, 190, 'Strength grows with more turns, more current, and an iron core.', { c: 'vl', sz: 11.5 });
    return svg(480, 204, s, 'An electromagnet: current in a coil around an iron core. By the right-hand rule the field leaves the end on the right (N).');
  });
  def('em-strength', () => DG.graph({ w: 480, h: 230, x: [0, 10], y: [0, 10], xl: 'turns N (or current I)', yl: 'field strength', xt: [0, 2, 4, 6, 8, 10], yt: [],
    draw: (sx, sy) => `<path d="M${sx(0)} ${sy(0)}L${sx(10)} ${sy(9)}" class="w o thick"/><path d="M${sx(0)} ${sy(0)}L${sx(10)} ${sy(3)}" class="w b thick"/>` + T(sx(2.4), sy(7.3), 'with iron core', { c: 'oc', a: 'start' }) + T(sx(6), sy(0.9), 'air core', { c: 'cc', a: 'start' }) + T(sx(0.4), sy(9.4), 'B = μ N I / L', { c: 'lb', a: 'start' }), cap: 'A core with high permeability multiplies the field.' }));
  def('faraday', () => {
    let s = `<rect x="40" y="82" width="64" height="36" class="w fb"/><rect x="104" y="82" width="64" height="36" class="w fr"/>` + T(72, 106, 'S', { c: 'lb' }) + T(136, 106, 'N', { c: 'lb' }) + AR(60, 62, 150, 62, 'r') + T(105, 50, 'magnet moves in', { c: 'hc', sz: 11.5 });
    for (let i = 0; i < 6; i++) s += `<ellipse cx="${266 + i * 14}" cy="100" rx="8" ry="34" class="w o"/>`;
    s += ln(266, 134, 266, 166) + comp('G', 266, 166, 336, 166, '', '', {}) + ln(336, 166, 336, 134);
    s += T(301, 200, 'galvanometer', { c: 'vl', sz: 11.5 }) + T(362, 104, 'coil', { c: 'vl', sz: 11.5, a: 'start' });
    s += T(240, 222, 'ε = −N ΔΦ/Δt: the induced current opposes the change (Lenz).', { c: 'lb', sz: 12 }) + T(240, 240, 'Hold the magnet still and the current stops.', { c: 'vl', sz: 11.5 });
    return svg(480, 252, s, 'Moving a magnet through a coil induces a current. Stop moving and the current stops.');
  });
  def('transformer', () => {
    let s = `<rect x="170" y="50" width="148" height="120" class="w fm" style="stroke-width:3"/><rect x="198" y="78" width="92" height="64" class="w" style="fill:var(--bg);stroke-width:3"/>`;
    [80, 100, 120, 140].forEach(y => { s += `<path d="M160 ${y}Q184 ${y + 13} 208 ${y}" class="w o" style="stroke-width:3"/>`; });
    for (let i = 0; i < 8; i++) { const y = 70 + i * 10; s += `<path d="M280 ${y}Q304 ${y + 8} 328 ${y}" class="w b" style="stroke-width:3"/>`; }
    s += ln(60, 80, 160, 80) + ln(60, 140, 160, 140) + comp('AC', 60, 140, 60, 80, '', '', {}) + T(38, 114, 'V_p', { c: 'lb', a: 'end' });
    s += ln(328, 70, 400, 70) + ln(328, 140, 400, 140) + comp('R', 400, 70, 400, 140, '', '', {}) + T(424, 108, 'load', { c: 'lb', a: 'start' });
    s += T(184, 40, 'N_p', { c: 'oc' }) + T(304, 40, 'N_s', { c: 'cc' }) + T(244, 114, 'flux Φ', { c: 'vl', sz: 11.5 });
    s += T(240, 198, 'V_s / V_p = N_s / N_p        I_s / I_p = N_p / N_s', { c: 'lb', sz: 12 }) + T(240, 218, 'Only AC works. Power in ≈ power out; frequency does not change.', { c: 'vl', sz: 11.5 });
    return svg(480, 228, s, 'An ideal transformer trades voltage for current. More secondary turns means higher voltage and lower current.');
  });
  def('grid', () => {
    let s = box(8, 64, 84, 48, 'Plant') + T(50, 132, '25 kV', { c: 'vl', sz: 11.5 }) + AR(94, 88, 112, 88, 'o');
    s += box(114, 64, 84, 48, 'Step-up') + T(156, 132, '25 → 345 kV', { c: 'vl', sz: 11.5 });
    s += AR(200, 88, 298, 88, 'o') + T(249, 74, 'high V, low I', { c: 'hc', sz: 11.5 }) + T(249, 108, '345 kV line', { c: 'vl', sz: 11.5 });
    s += box(300, 64, 84, 48, 'Step-down') + T(342, 132, '→ 7.2 kV', { c: 'vl', sz: 11.5 }) + AR(386, 88, 404, 88, 'o');
    s += `<path d="M410 92l30 -28 30 28v24h-60z" class="w fo"/>` + T(440, 132, 'homes, 120 V', { c: 'vl', sz: 11.5 });
    s += T(240, 176, 'P = I²R loss in the wires. Raising V lowers I and saves energy.', { c: 'lb', sz: 12 }) + T(240, 196, 'Example: 100 kW at 1 kV needs 100 A. At 100 kV it needs only 1 A.', { c: 'vl', sz: 11.5 });
    return svg(480, 208, s, 'Why the grid transmits at high voltage.');
  });
  def('dcmotor', () => {
    const cx = 150, cy = 112;
    let s = `<rect x="10" y="50" width="56" height="124" class="w fr"/><rect x="234" y="50" width="56" height="124" class="w fb"/>` + T(38, 116, 'N', { c: 'lb', sz: 18 }) + T(262, 116, 'S', { c: 'lb', sz: 18 });
    s += AR(72, 58, 228, 58, 'b') + AR(72, 166, 228, 166, 'b') + AR(72, cy, 98, cy, 'b') + AR(202, cy, 228, cy, 'b') + T(cx, 46, 'B  (N → S)', { c: 'cc', sz: 12 });
    s += `<line x1="${cx - 32}" y1="${cy}" x2="${cx + 32}" y2="${cy}" class="w o" style="stroke-width:5"/>` + `<circle cx="${cx - 32}" cy="${cy}" r="9" class="w fm"/><circle cx="${cx - 32}" cy="${cy}" r="2.8" class="dot"/><circle cx="${cx + 32}" cy="${cy}" r="9" class="w fm"/><path d="M${cx + 28} ${cy - 4}l8 8m0 -8l-8 8" class="w"/><circle cx="${cx}" cy="${cy}" r="3" class="dot"/>`;
    s += AR(cx - 32, cy - 14, cx - 32, cy - 44, 'r') + T(cx - 42, cy - 28, 'F', { c: 'hc', a: 'end', sz: 14 }) + AR(cx + 32, cy + 14, cx + 32, cy + 44, 'r') + T(cx + 42, cy + 34, 'F', { c: 'hc', a: 'start', sz: 14 });
    s += T(cx - 32, cy + 28, 'I out', { c: 'vl', sz: 10.5 }) + T(cx + 32, cy - 20, 'I in', { c: 'vl', sz: 10.5 });
    s += T(cx, 196, 'coil side view: turns clockwise', { c: 'oc', sz: 11.5 });
    /* commutator */
    const kx = 392, ky = 100, r = 24, pt = a => `${f(kx + r * Math.cos(a * Math.PI / 180))} ${f(ky + r * Math.sin(a * Math.PI / 180))}`;
    s += T(kx, 58, 'split-ring commutator', { c: 'lb', sz: 11.5 }) + `<path d="M${pt(98)}A${r} ${r} 0 0 1 ${pt(262)}" class="w o" style="stroke-width:7"/><path d="M${pt(278)}A${r} ${r} 0 0 1 ${pt(82)}" class="w b" style="stroke-width:7"/>`;
    s += `<rect x="348" y="94" width="18" height="12" class="w fm"/><rect x="418" y="94" width="18" height="12" class="w fm"/>` + T(352, 124, 'brush', { c: 'vl', sz: 11 }) + T(432, 124, 'brush', { c: 'vl', sz: 11 });
    s += ln(348, 100, 334, 100) + ln(334, 100, 334, 168) + ln(436, 100, 450, 100) + ln(450, 100, 450, 168) + comp('V', 334, 168, 450, 168, '', '', {}) + T(392, 204, 'battery', { c: 'vl', sz: 11.5 });
    s += T(240, 232, 'The commutator reverses the coil current every half turn, so the torque keeps one direction.', { c: 'vl', sz: 11 });
    return svg(480, 244, s, 'DC motor: the magnetic force pushes one side of the loop up and the other down, turning it; the commutator keeps it turning.');
  });
  def('generator', () => {
    const cx = 160;
    let s = `<rect x="10" y="40" width="44" height="96" class="w fr"/><rect x="266" y="40" width="44" height="96" class="w fb"/>` + T(32, 92, 'N', { c: 'lb', sz: 16 }) + T(288, 92, 'S', { c: 'lb', sz: 16 });
    s += AR(58, 70, 122, 70, 'b') + AR(198, 70, 262, 70, 'b') + AR(58, 104, 122, 104, 'b') + AR(198, 104, 262, 104, 'b');
    s += ln(cx, 34, cx, 158) + `<rect x="${cx - 32}" y="56" width="64" height="62" class="w o thick" style="fill:none"/>`;
    s += P(`M${cx - 30} 44A30 9 0 0 1 ${cx + 30} 44`, 's-o', 'marker-end="url(#ao)"') + T(cx, 20, 'turned by a crank', { c: 'oc', sz: 11.5 });
    s += `<rect x="${cx - 10}" y="132" width="20" height="6" rx="2" class="w fm"/><rect x="${cx - 10}" y="146" width="20" height="6" rx="2" class="w fm"/>`;
    s += ln(cx - 10, 135, 96, 135) + ln(96, 135, 96, 192) + comp('LAMP', 96, 192, 224, 192, '', '', {}) + ln(224, 192, 224, 149) + ln(224, 149, cx + 10, 149);
    s += T(236, 152, 'slip rings', { c: 'vl', sz: 11, a: 'start' }) + T(236, 166, 'and brushes', { c: 'vl', sz: 11, a: 'start' }) + T(cx, 222, 'lamp (load)', { c: 'vl', sz: 11.5 });
    /* output wave */
    let pts = []; for (let i = 0; i <= 60; i++) { const x = 346 + i * 2, y = 92 - 38 * Math.sin(i / 60 * Math.PI * 4); pts.push(f(x) + ',' + f(y)); }
    s += `<path class="w ax" d="M346 30V152M340 92H474"/><polyline points="${pts.join(' ')}" class="w o thick"/>` + T(410, 22, 'output voltage', { c: 'lb', sz: 12 }) + T(440, 166, 'time', { c: 'vl', sz: 11 });
    s += T(240, 250, 'A spinning loop changes its flux, so it induces an AC emf.', { c: 'vl', sz: 11.5 });
    return svg(480, 262, s, 'AC generator: mechanical energy in, electrical energy out. One turn of the loop gives one full cycle.');
  });
  def('energy-flow', () => {
    let s = box(20, 60, 110, 50, 'Electrical');
    s += AR(132, 85, 168, 85, 'o') + box(170, 60, 110, 50, 'Motor', 'fo') + AR(282, 85, 318, 85, 'o') + box(320, 60, 110, 50, 'Mechanical');
    s += AR(225, 112, 225, 146, 'r') + T(225, 164, 'heat (wire + friction)', { c: 'hc', sz: 11.5 });
    s += box(20, 180, 110, 40, 'Mechanical').replace('Mechanical', 'Mechanical') + AR(132, 200, 168, 200, 'o') + box(170, 180, 110, 40, 'Generator', 'fo') + AR(282, 200, 318, 200, 'o') + box(320, 180, 110, 40, 'Electrical');
    return svg(480, 236, s, 'A motor and a generator are the same machine run in opposite directions.');
  });

  def('switches', () => {
    const sp = (x0, name, poles, throws) => {
      let q = T(x0 + 45, 28, name, { c: 'lb' });
      for (let p = 0; p < poles; p++) {
        const y = 78 + p * 60;
        q += ln(x0, y, x0 + 20, y) + `<circle cx="${x0 + 20}" cy="${y}" r="3" class="dot"/>`;
        const ts = throws === 2 ? [y - 16, y + 16] : [y - 16];
        ts.forEach(ty => { q += `<circle cx="${x0 + 70}" cy="${ty}" r="3" class="dot"/>` + ln(x0 + 70, ty, x0 + 90, ty); });
        q += ln(x0 + 20, y, throws === 2 ? x0 + 70 : x0 + 58, y - 16);
      }
      if (poles === 2) q += `<path d="M${x0 + 45} 70V130" class="w" stroke-dasharray="3 3"/>`;
      return q;
    };
    let s = sp(6, 'SPST', 1, 1) + sp(122, 'SPDT', 1, 2) + sp(238, 'DPST', 2, 1) + sp(354, 'DPDT', 2, 2);
    s += T(240, 176, 'pole = a separate circuit switched together', { c: 'vl', sz: 11.5 }) + T(240, 194, 'throw = a position each pole can connect to', { c: 'vl', sz: 11.5 });
    return svg(480, 208, s, 'Switch types: the letters count poles (circuits) and throws (contact positions); the dashed line shows poles that move together.');
  });
  def('relay', () => {
    let s = T(100, 16, 'control side (low power)', { c: 'vl', sz: 11.5 }) + T(370, 16, 'load side (high power)', { c: 'vl', sz: 11.5 });
    s += loop(30, 66, 170, 176, { t: [['SW', 'switch', '']], l: [['V', '5 V', '', { flip: true, side: 'l' }]], r: [['L', 'coil', '', { side: 'l' }]] });
    s += loop(300, 66, 450, 176, { t: [['V', '12 V', '']], r: [['M', 'load', '', { side: 'r' }]], l: [['SW', 'armature', '', { side: 'r' }]] });
    s += AR(268, 121, 190, 121, 'o') + T(229, 108, 'magnetic pull', { c: 'oc', sz: 11 });
    s += T(240, 210, 'A small current in the coil closes a switch that carries a big current.', { c: 'vl', sz: 11.5 });
    return svg(480, 222, s, 'A relay is an electrically controlled switch: the energised coil pulls the armature and closes the load circuit.');
  });
  def('gfci', () => {
    let s = T(50, 22, 'source', { c: 'vl', sz: 11.5 }) + T(240, 22, 'GFCI sensor', { c: 'lb', sz: 12 }) + T(420, 22, 'load', { c: 'vl', sz: 11.5 });
    s += `<ellipse cx="240" cy="105" rx="22" ry="62" class="w fo"/>`;
    s += comp('AC', 50, 150, 50, 60, '', '', {}) + ln(50, 60, 420, 60) + ln(50, 150, 420, 150) + comp('M', 420, 60, 420, 150, '', '', {});
    s += AR(100, 60, 150, 60, 'o') + T(125, 50, 'I_hot', { c: 'lb', sz: 11 }) + AR(150, 150, 100, 150, 'o') + T(125, 170, 'I_neutral', { c: 'lb', sz: 11 });
    s += T(240, 196, 'If I_hot ≠ I_neutral by about 5 mA, current is leaking (maybe through a person).', { c: 'vl', sz: 11 }) + T(240, 214, 'The GFCI opens the circuit within milliseconds.', { c: 'vl', sz: 11 });
    return svg(480, 226, s, 'A GFCI compares the current out on the hot wire with the current back on the neutral.');
  });
  def('symbols', () => {
    const it = [['R', 'resistor'], ['C', 'capacitor'], ['L', 'inductor'], ['V', 'battery'], ['AC', 'AC source'], ['I', 'current source'], ['SW', 'switch (open)'], ['LAMP', 'lamp'], ['LED', 'LED'], ['D', 'diode'], ['Z', 'zener diode'], ['FUSE', 'fuse'], ['M', 'motor'], ['A', 'ammeter'], ['VM', 'voltmeter'], ['POT', 'rheostat / pot']];
    let s = '';
    it.forEach(([t, n], i) => { const cx = 62 + (i % 4) * 119, cy = 40 + Math.floor(i / 4) * 76; s += `<g transform="translate(${cx} ${cy})">${DG.SYM[t][1]()}</g>` + T(cx, cy + 40, n, { c: 'vl', sz: 11 }); });
    s += GND(62, 334) + T(62, 380, 'ground', { c: 'vl', sz: 11 });
    return svg(480, 392, s, 'Common schematic symbols.');
  });
  def('nodes', () => {
    let s = loop(70, 60, 410, 160, { t: [['R', 'R₁', ''], ['R', 'R₂', '']], l: [['V', '9 V', '', { flip: true, side: 'l' }]], r: [['LAMP', 'lamp', '']] });
    s += `<circle cx="70" cy="60" r="10" class="w fo"/>` + T(70, 64, 'A', { c: 'lb', sz: 11 }) + `<circle cx="410" cy="60" r="10" class="w fo"/>` + T(410, 64, 'B', { c: 'lb', sz: 11 }) + `<circle cx="240" cy="160" r="10" class="w fo"/>` + T(240, 164, 'C', { c: 'lb', sz: 11 }) + T(240, 106, 'A wire joins points into one node (same voltage).', { c: 'vl', sz: 11.5 }) + T(240, 124, 'A part sits between two nodes.', { c: 'vl', sz: 11.5 });
    return svg(480, 190, s, 'Reading a schematic as nodes and parts.');
  });
})();
