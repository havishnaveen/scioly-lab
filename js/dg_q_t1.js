/* ===== HARD thermodynamics question figures (E3), prefix qf-t1- ===== */
(function () {
  const { T, L, AR, P, R, C, DOT } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const DASH = 'stroke-dasharray="4 4"';
  const dl = (x1, y1, x2, y2) => L(x1, y1, x2, y2, 'gr', DASH);
  const dot = (x, y, r) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r || 4}" class="dot"/>`;

  /* heating curve read from a graph: 0.200 kg sample, Q on x axis */
  def('qf-t1-heatcurve', () => {
    const pts = [[0, 20], [12, 80], [52, 80], [76, 120]];
    return DG.graph({
      w: 480, h: 290, ml: 56, x: [0, 80], y: [0, 135], xl: 'heat added Q (kJ)', yl: 'temperature (°C)',
      xt: [0, 12, 52, 76], yt: [20, 80, 120],
      draw: (sx, sy) => {
        let s = `<polyline points="${pts.map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w o thick"/>`;
        pts.forEach(p => { s += dot(sx(p[0]), sy(p[1]), 3.5); });
        s += T(sx(32), sy(92), 'flat segment', { sz: 12, c: 'vl' });
        s += T(sx(6), sy(72), 'S', { c: 'lb' }) + T(sx(66), sy(92), 'Z', { c: 'lb' });
        s += T(sx(78), sy(8), 'sample: m = 0.200 kg, heated by a steady source', { a: 'end', sz: 11, c: 'vl' });
        return s;
      }, cap: 'Heating curve of a 0.200 kg pure sample (initially solid, 20 °C). Segments: S = solid warming, flat = phase change, Z = liquid warming.'
    });
  });

  /* two cooling curves that cross */
  def('qf-t1-coolcross', () => DG.graph({
    w: 480, h: 290, ml: 56, x: [0, 60], y: [10, 100], xl: 'time t (min)', yl: 'temperature (°C)',
    xt: [0, 10, 20, 30, 40, 50, 60], yt: [20, 40, 60, 80, 100],
    draw: (sx, sy) => {
      let s = dl(sx(0), sy(20), sx(60), sy(20)) + T(sx(1), sy(20) + 14, 'room 20 °C', { a: 'start', sz: 11, c: 'vl' });
      s += DG.curve(t => 20 + 70 * Math.exp(-0.05 * t), sx, sy, 0, 60, 90, 'hot');
      s += DG.curve(t => 20 + 40 * Math.exp(-0.02 * t), sx, sy, 0, 60, 90, 'b');
      s += T(sx(3), sy(92), 'cup A: starts 90 °C, K = 0.050 min⁻¹', { a: 'start', sz: 12, c: 'hc' });
      s += T(sx(30), sy(76), 'cup B: starts 60 °C, K = 0.020 min⁻¹', { a: 'start', sz: 12, c: 'cc' });
      return s;
    }, cap: 'Two cups in the same 20 °C room, each obeying Newton’s law of cooling with its own cooling constant K.'
  }));

  /* P-T phase diagram (log P), fusion line exaggerated */
  def('qf-t1-phase', () => {
    const x0 = 70, x1 = 450, yT = 20, yB = 250;
    const X = t => x0 + (t + 40) / 160 * (x1 - x0), Y = lp => yB - (lp - 1) / 8 * (yB - yT);
    let s = `<path class="w ax" d="M${x0} ${yT - 4}V${yB}H${x1 + 4}"/>`;
    [-40, -20, 0, 20, 40, 60, 80, 100, 120].forEach(t => { s += L(X(t), yB, X(t), yB + 4, '') + T(X(t), yB + 17, t, { c: 'tk' }); });
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(lp => { s += L(x0 - 4, Y(lp), x0, Y(lp), '') + T(x0 - 8, Y(lp) + 4, '10' + '⁰¹²³⁴⁵⁶⁷⁸⁹'[lp], { c: 'tk', a: 'end' }); });
    s += T((x0 + x1) / 2, yB + 34, 'temperature (°C)', { c: 'lb' }) + T(14, (yT + yB) / 2, 'pressure (Pa, log scale)', { c: 'lb', rot: -90 });
    const vp = [[-40, 12.8], [-30, 38], [-20, 103], [-10, 260], [0.01, 611.657]], lq = [[0.01, 611.657], [20, 2339], [40, 7384], [60, 19946], [80, 47390], [100, 101325], [120, 198500]];
    const pl = a => a.map(p => f(X(p[0])) + ',' + f(Y(Math.log10(p[1])))).join(' ');
    s += `<polyline points="${pl(vp)}" class="w thick"/><polyline points="${pl(lq)}" class="w o thick"/>`;
    s += `<line x1="${f(X(0.01))}" y1="${f(Y(Math.log10(611.657)))}" x2="${f(X(-14))}" y2="${f(Y(9))}" class="w b thick"/>`;
    s += dot(X(0.01), Y(Math.log10(611.657)), 5) + T(X(0.01) + 10, Y(Math.log10(611.657)) + 16, 'triple point 0.01 °C, 611.657 Pa', { a: 'start', sz: 11, c: 'oc' });
    s += T(X(-28), Y(6.3), 'SOLID', { c: 'lb', sz: 15 }) + T(X(40), Y(6.2), 'LIQUID', { c: 'lb', sz: 15 }) + T(X(75), Y(1.6), 'GAS', { c: 'lb', sz: 15 });
    const pts = [['A', -20, 500], ['B', 40, 3000], ['C', -5, 1000], ['D', 100, 101325]];
    pts.forEach(([n, t, p]) => { s += dot(X(t), Y(Math.log10(p)), 4.5) + T(X(t) + 9, Y(Math.log10(p)) - 7, n, { c: 'lb', a: 'start' }); });
    s += T(x1 - 4, yT + 6, 'fusion-line slope exaggerated;', { a: 'end', sz: 10, c: 'vl' }) + T(x1 - 4, yT + 19, 'only the geometry matters', { a: 'end', sz: 10, c: 'vl' });
    return svg(480, 290, s, 'Pressure–temperature phase diagram of water (logarithmic pressure). Points A, B, C, D are four states of a sample; A (−20 °C, 500 Pa), B (40 °C, 3000 Pa), C (−5 °C, 1000 Pa), D (100 °C, 101 325 Pa).');
  });

  /* series wall */
  def('qf-t1-wall', () => {
    const L1 = [['gypsum', '1.25 cm', 'k = 0.17', 70], ['fibreglass batt', '9.0 cm', 'k = 0.040', 140], ['wood siding', '2.0 cm', 'k = 0.14', 70]];
    let s = '', x = 70;
    L1.forEach(([n, th, k, w], i) => {
      s += `<rect x="${x}" y="50" width="${w}" height="120" class="w ${['fm', 'fo', 'fb'][i]}"/>`;
      s += T(x + w / 2, 112, th, { sz: 11, c: 'lb' }) + T(x + w / 2, 128, k, { sz: 10, c: 'vl' });
      s += T(x + w / 2, i === 1 ? 38 : (i === 0 ? 38 : 38), n, { sz: 11 });
      x += w;
    });
        s += T(60, 100, '22 °C', { a: 'end', c: 'hc', sz: 14 }) + T(60, 118, 'indoor', { a: 'end', sz: 11, c: 'vl' }) + T(x + 10, 100, '−8 °C', { a: 'start', c: 'cc', sz: 14 }) + T(x + 10, 118, 'outdoor', { a: 'start', sz: 11, c: 'vl' });
    s += AR(76, 195, x - 6, 195, 'r') + T((76 + x) / 2, 214, 'steady heat flow, wall area 12 m²', { sz: 12 });
    s += T(240, 240, 'k in W/(m·K); films and air gaps neglected', { sz: 11, c: 'vl' });
    return svg(480, 252, s, 'Three-layer wall at steady state: indoor air side at 22 °C, outdoor side at −8 °C.');
  });

  /* parallel window + wall */
  def('qf-t1-wallpar', () => {
    let s = `<rect x="90" y="30" width="250" height="150" class="w fm"/>`;
    s += `<rect x="220" y="60" width="110" height="90" class="w fb"/>`;
    s += T(155, 96, 'insulated wall', { sz: 12, c: 'lb' }) + T(155, 112, 'area 8.0 m²', { sz: 11 }) + T(155, 128, 'R = 3.0 m²K/W', { sz: 10, c: 'vl' });
    s += T(275, 96, 'window', { sz: 12, c: 'lb' }) + T(275, 112, '2.0 m²', { sz: 11 }) + T(275, 128, 'R = 0.35 m²K/W', { sz: 10, c: 'vl' });
    s += T(80, 110, '20 °C', { a: 'end', c: 'hc', sz: 14 }) + T(350, 110, '−5 °C', { a: 'start', c: 'cc', sz: 14 });
    s += T(210, 200, 'front view: one 10 m² wall, two parallel heat paths', { sz: 12, c: 'vl' });
    return svg(480, 214, s, 'Wall with a window. Both regions see the same 25 K temperature difference.');
  });

  /* thermal resistance network */
  def('qf-t1-thermalnet', () => {
    const R_ = (x, y, w, lab, val) => `<rect x="${x}" y="${y - 12}" width="${w}" height="24" class="w fo"/>` + T(x + w / 2, y + 4, lab, { sz: 12, c: 'lb' }) + T(x + w / 2, y - 18, val, { sz: 11, c: 'vl' });
    let s = L(60, 110, 120, 110, '') + R_(120, 110, 60, 'R₁', '0.50 K/W') + L(180, 110, 230, 110, '');
    s += L(230, 70, 230, 150, '') + L(230, 70, 270, 70, '') + R_(270, 70, 60, 'R₂', '2.0 K/W') + L(330, 70, 370, 70, '') + L(230, 150, 270, 150, '') + R_(270, 150, 60, 'R₃', '3.0 K/W') + L(330, 150, 370, 150, '') + L(370, 70, 370, 150, '');
    s += L(370, 110, 410, 110, '') + R_(410, 110, 50, 'R₄', '0.30 K/W');
    s = s.replace('R₄', 'R₄');
    s += dot(230, 110) + dot(370, 110);
    s += T(56, 96, '80 °C', { a: 'end', c: 'hc', sz: 14 }) + T(224, 102, 'N', { a: 'end', sz: 12, c: 'lb' });
    s += T(240, 196, 'hot reservoir 80 °C → (R₁) → node N → (R₂ ∥ R₃) → (R₄) → cold reservoir 20 °C', { sz: 11, c: 'vl' });
    s += T(470, 138, '20 °C', { a: 'end', c: 'cc', sz: 14 });
    return svg(480, 210, s, 'Heat flows from a hot body to a cold body through four thermal resistances (R_th = L/kA, in K/W); R₂ and R₃ are two parallel paths.');
  });

  /* T vs x through three layers */
  def('qf-t1-txprofile', () => DG.graph({
    w: 480, h: 280, ml: 56, x: [0, 8], y: [0, 110], xl: 'position x through the wall (cm)', yl: 'temperature (°C)',
    xt: [0, 2, 6, 8], yt: [0, 70, 80, 100],
    draw: (sx, sy) => {
      const pts = [[0, 100], [2, 80], [6, 70], [8, 0]];
      let s = dl(sx(2), sy(0), sx(2), sy(110)) + dl(sx(6), sy(0), sx(6), sy(110));
      s += `<polyline points="${pts.map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w o thick"/>`;
      pts.forEach(p => { s += dot(sx(p[0]), sy(p[1]), 3.5); });
      s += T(sx(1), sy(106), 'layer A', { sz: 12, c: 'lb' }) + T(sx(4), sy(106), 'layer B', { sz: 12, c: 'lb' }) + T(sx(7), sy(106), 'layer C', { sz: 12, c: 'lb' });
      return s;
    }, cap: 'Steady-state temperature profile through three layers of equal cross-section stacked in series (same heat flux through all).'
  }));

  /* pipe with cylindrical insulation */
  def('qf-t1-cyl', () => {
    let s = `<circle cx="150" cy="120" r="84" class="w fb"/><circle cx="150" cy="120" r="28" class="w fr"/>`;
    s += AR(150, 120, 150 + 28, 120, '', false) + T(178, 136, 'r₁', { sz: 12, c: 'lb' });
    s += L(150, 120, 150 + 59, 120 - 59, '') + T(198, 82, 'r₂', { sz: 12, c: 'lb' });
    s += T(150, 168, 'foam', { sz: 12 }) + T(150, 184, 'k = 0.040 W/(m·K)', { sz: 10, c: 'vl' });
    s += T(262, 62, 'r₁ = 1.0 cm', { a: 'start', sz: 12 }) + T(262, 82, 'r₂ = 3.0 cm', { a: 'start', sz: 12 });
    s += T(262, 116, 'pipe outer surface: 80 °C', { a: 'start', sz: 12, c: 'hc' }) + T(262, 136, 'foam outer surface: 20 °C', { a: 'start', sz: 12, c: 'cc' });
    s += T(262, 166, 'length 1.0 m, steady state,', { a: 'start', sz: 11, c: 'vl' }) + T(262, 182, 'radial flow only', { a: 'start', sz: 11, c: 'vl' });
    return svg(480, 222, s, 'Cross-section of a hot pipe wrapped in cylindrical foam insulation.');
  });

  /* selective absorber: emissivity vs wavelength step */
  def('qf-t1-selective', () => DG.graph({
    w: 480, h: 270, ml: 56, x: [0, 20], y: [0, 1.1], xl: 'wavelength λ (μm)', yl: 'absorptivity = emissivity',
    xt: [0, 2, 3, 5, 10, 15, 20], yt: [[0.05, '0.05'], [0.5, '0.5'], [0.95, '0.95']],
    draw: (sx, sy) => {
      let s = `<polyline points="${sx(0)},${sy(0.95)} ${sx(3)},${sy(0.95)} ${sx(3)},${sy(0.05)} ${sx(20)},${sy(0.05)}" class="w o thick"/>`;
      s += dl(sx(3), sy(0), sx(3), sy(1.1));
      s += T(sx(0.2), sy(1.04), 'sunlight band', { sz: 11, c: 'vl', a: 'start' }) + T(sx(11), sy(1.04), 'thermal infrared of a warm plate', { sz: 11, c: 'vl' });
      return s;
    }, cap: 'Spectral absorptivity (= emissivity, Kirchhoff) of a selective coating: 0.95 for λ below 3 μm, 0.05 above it.'
  }));

  /* PV triangle cycle */
  def('qf-t1-pv', () => DG.graph({
    w: 480, h: 290, ml: 60, x: [0, 8], y: [0, 400], xl: 'volume V (L)', yl: 'pressure P (kPa)',
    xt: [0, 2, 4, 6, 8], yt: [0, 100, 200, 300, 400],
    draw: (sx, sy) => {
      const A = [2, 100], B = [2, 300], Cc = [6, 100];
      let s = `<polygon points="${sx(2)},${sy(100)} ${sx(2)},${sy(300)} ${sx(6)},${sy(100)}" class="w o thick" style="fill:rgba(249,115,22,.10)"/>`;
      s += AR(sx(2), sy(180), sx(2), sy(230), 'o') + AR(sx(3.8), sy(200), sx(4.3), sy(175), 'o') + AR(sx(4.2), sy(100), sx(3.3), sy(100), 'o');
      [['A', A, -12, 18], ['B', B, -12, -8], ['C', Cc, 8, 18]].forEach(([n, p, dx, dy]) => { s += dot(sx(p[0]), sy(p[1]), 4.5) + T(sx(p[0]) + dx, sy(p[1]) + dy, n, { c: 'lb' }); });
      s += T(sx(7.9), sy(380), 'ideal gas, n fixed', { a: 'end', sz: 11, c: 'vl' });
      return s;
    }, cap: 'A cyclic process A → B → C → A of a fixed amount of ideal gas (A → B is vertical, B → C a straight line, C → A horizontal).'
  }));
})();
