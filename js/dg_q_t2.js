/* ===== HARD thermodynamics question figures (prefix qf-t2-) ===== */
(function () {
  const { T, L, AR, P, R, C, DOT } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const tl = (x, y, lines, o, lh) => lines.map((s, i) => T(x, y + i * (lh || 15), s, o)).join('');
  const dot = (x, y, r) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r || 4.5}" class="dot"/>`;
  const carrow = (fn, a, b, sx, sy, c) => { const m = (a + b) / 2, d = (b - a) * 0.03; return AR(sx(m - d), sy(fn(m - d)), sx(m + d), sy(fn(m + d)), c); };

  /* rectangular cycle: (2L,100) -> (2L,300) -> (5L,300) -> (5L,100) -> back */
  def('qf-t2-pvrect', () => DG.graph({
    w: 480, h: 290, x: [0, 7], y: [0, 400], xl: 'volume V (L)', yl: 'pressure P (kPa)', xt: [0, 1, 2, 3, 4, 5, 6, 7], yt: [0, 100, 200, 300, 400],
    draw: (sx, sy) => {
      const pts = [[2, 100], [2, 300], [5, 300], [5, 100]];
      let s = `<polygon points="${pts.map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w fo" style="stroke:none"/>`;
      s += `<polygon points="${pts.map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w o thick" style="fill:none"/>`;
      s += AR(sx(2), sy(185), sx(2), sy(215), 'o') + AR(sx(3.4), sy(300), sx(3.7), sy(300), 'o') + AR(sx(5), sy(215), sx(5), sy(185), 'o') + AR(sx(3.7), sy(100), sx(3.4), sy(100), 'o');
      [['1', 2, 100, -14, 16], ['2', 2, 300, -14, -6], ['3', 5, 300, 12, -6], ['4', 5, 100, 12, 16]].forEach(([n, v, p, dx, dy]) => { s += dot(sx(v), sy(p)) + T(sx(v) + dx, sy(p) + dy, n, { c: 'lb', sz: 14 }); });
      return s;
    }, cap: 'A monatomic ideal gas is taken around the rectangle 1→2→3→4→1 (arrows). Vertices: 1 (2 L, 100 kPa), 2 (2 L, 300 kPa), 3 (5 L, 300 kPa), 4 (5 L, 100 kPa).'
  }));

  /* isotherm A->B, isochore B->C, adiabat C->A */
  def('qf-t2-pvid', () => DG.graph({
    w: 480, h: 300, x: [0, 5], y: [0, 450], xl: 'volume V (L)', yl: 'pressure P (kPa)', xt: [0, 1, 2, 3, 4, 5], yt: [0, 100, 200, 300, 400],
    draw: (sx, sy) => {
      const fAB = v => 400 / v, fCA = v => 400 * Math.pow(1 / v, 1.4);
      let s = DG.curve(fAB, sx, sy, 1, 4, 50, 'o') + DG.curve(fCA, sx, sy, 1, 4, 50, 'cold');
      s += `<line x1="${f(sx(4))}" y1="${f(sy(100))}" x2="${f(sx(4))}" y2="${f(sy(57.4))}" class="w grn thick"/>`;
      s += carrow(fAB, 1, 4, sx, sy, 'o') + AR(sx(4), sy(92), sx(4), sy(78), 'g') + carrow(fCA, 4, 1, sx, sy, 'b');
      s += dot(sx(1), sy(400)) + T(sx(1) + 10, sy(400) - 6, 'A  (1 L, 400 kPa)', { a: 'start', c: 'lb', sz: 12 });
      s += dot(sx(4), sy(100)) + T(sx(4) + 8, sy(100) - 8, 'B  (4 L, 100 kPa)', { a: 'start', c: 'lb', sz: 12 });
      s += dot(sx(4), sy(57.4)) + T(sx(4) + 8, sy(57.4) + 16, 'C  (4 L, 57.4 kPa)', { a: 'start', c: 'lb', sz: 12 });
      return s;
    }, cap: 'Cycle A→B→C→A. A→B and C→A are smooth curves, B→C is a vertical line. The gas is an ideal gas with γ = 1.40.'
  }));

  /* triangle cycle: A(2,100) -> B(2,400) -> C(8,100) -> A */
  def('qf-t2-pvtri', () => DG.graph({
    w: 480, h: 290, x: [0, 10], y: [0, 500], xl: 'volume V (L)', yl: 'pressure P (kPa)', xt: [0, 2, 4, 6, 8, 10], yt: [0, 100, 200, 300, 400, 500],
    draw: (sx, sy) => {
      const pts = [[2, 100], [2, 400], [8, 100]];
      let s = `<polygon points="${pts.map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w fo" style="stroke:none"/>`;
      s += `<polygon points="${pts.map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w o thick" style="fill:none"/>`;
      s += AR(sx(2), sy(230), sx(2), sy(270), 'o') + AR(sx(4.7), sy(250 + 0), sx(5.3), sy(250 - 50 * 0.6 * 0), 'o').replace(/y2="[^"]*"/, `y2="${f(sy(400 - 50 * 3.3))}"`) + AR(sx(6), sy(100), sx(4), sy(100), 'o');
      [['A', 2, 100, -14, 16], ['B', 2, 400, -14, -6], ['C', 8, 100, 12, 16]].forEach(([n, v, p, dx, dy]) => { s += dot(sx(v), sy(p)) + T(sx(v) + dx, sy(p) + dy, n, { c: 'lb', sz: 14 }); });
      return s;
    }, cap: 'Triangular cycle A→B→C→A for a monatomic ideal gas. A (2 L, 100 kPa), B (2 L, 400 kPa), C (8 L, 100 kPa); B→C is a straight line.'
  }));

  /* two flasks */
  def('qf-t2-flasks', () => {
    let s = '';
    s += R(30, 60, 140, 110, 'fm', 10) + R(250, 60, 210, 110, 'fm', 10);
    s += `<path d="M170 115h80" class="w thick"/>` + `<rect x="200" y="101" width="20" height="28" rx="3" class="w fo"/>` + T(210, 148, 'valve', { c: 'lb', sz: 11 });
    s += tl(100, 100, ['Flask A', '2.0 L', '3.0 atm', '300 K'], { c: 'lb', sz: 13 }, 18);
    s += tl(355, 100, ['Flask B', '6.0 L', '1.0 atm', '400 K'], { c: 'lb', sz: 13 }, 18);
    s += T(240, 205, 'Same ideal gas in both flasks. Valve opened; whole system then held at 350 K.', { c: 'lb', sz: 12 });
    return svg(480, 225, s, 'Two rigid flasks joined by a closed valve.');
  });

  /* claimed engines table */
  def('qf-t2-claims', () => {
    const rows = [['Device', 'T hot', 'T cold', 'Q in', 'W out', 'Q out'], ['A', '600 K', '300 K', '1000 J', '600 J', '400 J'], ['B', '500 K', '400 K', '1000 J', '150 J', '850 J'], ['C', '800 K', '400 K', '2000 J', '1000 J', '1000 J'], ['D', '400 K', '300 K', '800 J', '200 J', '500 J']];
    const xs = [45, 125, 205, 285, 360, 430]; let s = '';
    rows.forEach((r, i) => { const y = 34 + i * 30; if (i === 0) s += R(8, y - 20, 464, 28, 'fo', 4); r.forEach((c, j) => { s += T(xs[j], y, c, { c: i === 0 ? 'lb' : 'vl', sz: 13, a: j === 0 ? 'middle' : 'middle' }); }); s += L(8, y + 9, 472, y + 9, 'gr'); });
    return svg(480, 190, s, 'Inventors\u2019 claims for four cyclic heat engines, per cycle: Q in from the hot reservoir, W out = net work, Q out to the cold reservoir.');
  });

  /* composite wall */
  def('qf-t2-wall', () => {
    let s = '';
    s += R(120, 40, 70, 130, 'fm', 0) + R(190, 40, 160, 130, 'fo', 0) + R(350, 40, 26, 130, 'fm', 0);
    s += T(155, 110, 'brick', { c: 'lb', sz: 13 }) + T(155, 126, '10 cm', { c: 'vl', sz: 12 }) + T(155, 141, 'k = 0.80', { c: 'vl', sz: 11 });
    s += T(270, 105, 'foam', { c: 'lb', sz: 13 }) + T(270, 121, '8 cm', { c: 'vl', sz: 12 }) + T(270, 136, 'k = 0.030', { c: 'vl', sz: 11 });
    s += T(376, 30, 'plasterboard 1.3 cm, k = 0.25', { c: 'lb', sz: 11, a: 'end' });
    s += T(60, 100, 'outside', { c: 'lb', sz: 13 }) + T(60, 118, '−5 °C', { c: 'vl', sz: 13 }) + T(430, 100, 'inside', { c: 'lb', sz: 13 }) + T(430, 118, '20 °C', { c: 'vl', sz: 13 });
    s += AR(395, 70, 105, 70, 'r');
    s += T(250, 228, 'wall area 12 m²; k in W/(m·K); ignore air films', { c: 'lb', sz: 11 });
    return svg(480, 240, s, 'Cross-section of a three-layer wall, steady state.');
  });

  /* bimetal strip (straight, before heating) */
  def('qf-t2-bimetal', () => {
    let s = R(60, 70, 360, 26, 'fo', 2) + R(60, 96, 360, 26, 'fm', 2);
    s += T(240, 88, 'brass   α = 19×10⁻⁶ /K', { c: 'lb', sz: 12 }) + T(240, 114, 'steel   α = 12×10⁻⁶ /K', { c: 'lb', sz: 12 });
    s += T(40, 92, 'clamp', { c: 'lb', sz: 10, rot: -90 }) + R(52, 55, 8, 82, 'fm', 0);
    s += AR(60, 150, 420, 150, '', true) + T(240, 168, 'L = 20 cm each (bonded, 20 °C, straight)', { c: 'vl', sz: 12 });
    return svg(480, 185, s, 'Two bonded metal strips, fixed at the left end, both at 20 °C.');
  });

  /* energy levels */
  def('qf-t2-levels', () => {
    let s = '';
    s += L(120, 160, 360, 160, 'o') + L(120, 70, 360, 70, 'o');
    s += T(240, 175, 'E₁ = 0   (1 state)', { c: 'lb', sz: 12 }) + T(240, 60, 'E₂ = 0.010 eV   (3 states, all with the same energy)', { c: 'lb', sz: 12 });
    [[150, 70], [190, 70], [230, 70]].forEach(p => { s += dot(p[0] + 10, p[1], 3.5); });
    s += AR(400, 160, 400, 72, 'b') + T(430, 120, '0.010 eV', { c: 'vl', sz: 12 });
    return svg(480, 195, s, 'Energy levels of a model system in contact with a reservoir at 300 K.');
  });
})();
