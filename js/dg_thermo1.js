/* ===== thermodynamics diagrams, part 1 (t01 - t12) ===== */
(function () {
  const { T, L, AR, P, R, C, DOT, WIRE, comp, rails } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const DASH = 'stroke-dasharray="4 4"';
  const dl = (x1, y1, x2, y2, cls) => L(x1, y1, x2, y2, cls || '', DASH);
  const dot = (x, y, r) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r || 4}" class="dot"/>`;
  const lg = v => Math.log10(v);
  const sup = n => String(n).replace(/-/g, '⁻').replace(/[0-9]/g, d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[d]);
  const dimH = (x1, x2, y, lab, dy) => AR(x1, y, x2, y, '', true) + T((x1 + x2) / 2, y + (dy == null ? 16 : dy), lab, { c: 'lb' });
  /* horizontal bar rows: rows=[[label,value,cls,valueText]], scale px per unit */
  const hbars = (rows, x0, y0, pitch, h, scale, lx, inside) => rows.map(([lab, v, cls, vt], i) => {
    const y = y0 + i * pitch, w = Math.max(v * scale, 2), xe = x0 + w, inn = inside && xe > inside;
    return T(lx, y + h / 2 + 4, lab, { a: 'end', sz: 12 }) + `<rect x="${x0}" y="${y}" width="${f(w)}" height="${h}" rx="3" class="w ${cls}"/>` + (inn ? T(xe - 6, y + h / 2 + 4, vt, { a: 'end', c: 'lb', sz: 12 }) : T(xe + 6, y + h / 2 + 4, vt, { a: 'start', c: 'lb', sz: 12 }));
  }).join('');

  /* ================= t01 ================= */
  def('th-scales', () => {
    const y0 = 280, k = (280 - 44) / 373.15, yy = K => y0 - K * k;
    const cols = [[130, '°C', [-273.15, 0, 100], '°C'], [260, '°F', [-459.67, 32, 212], '°F'], [390, 'K', [0, 273.15, 373.15], ' K']];
    const fixed = [[0, 'absolute zero'], [273.15, 'ice point'], [373.15, 'steam point']];
    let s = '';
    fixed.forEach(([K, name]) => { const y = yy(K); s += dl(84, y, 474, y, 'gr') + T(6, y - 5, name, { a: 'start', c: 'vl', sz: 11 }); });
    cols.forEach(([x, hd, vals, u]) => {
      s += T(x, 18, hd === 'K' ? 'kelvin' : hd === '°C' ? 'Celsius' : 'Fahrenheit', { c: 'lb' });
      s += `<rect x="${x - 7}" y="36" width="14" height="${y0 - 36 + 4}" rx="7" class="w fm"/><circle cx="${x}" cy="${y0 + 10}" r="11" class="w fr"/><rect x="${x - 3}" y="${yy(373.15)}" width="6" height="${f(y0 + 8 - yy(373.15))}" class="w fr" style="stroke:none"/>`;
      vals.forEach((v, i) => { const y = yy(fixed[i][0]); s += L(x - 12, y, x + 12, y, 'hot') + T(x + 16, y - 5, (v < 0 ? '−' + Math.abs(v) : v) + (hd === 'K' ? ' K' : ' ' + hd), { a: 'start', c: 'lb', sz: 12 }); });
    });
    s += T(240, 322, 'same thermometer, three scales: 100 °C = 180 °F = 100 K of span', { c: 'vl', sz: 12 });
    return svg(480, 332, s, 'Three scales on one thermometer: the fixed points line up, and only kelvin starts at absolute zero (0 K = −273.15 °C = −459.67 °F).');
  });
  def('th-tconv', () => {
    let s = '';
    [[45, '°F'], [240, '°C'], [435, 'K']].forEach(([x, n]) => { s += `<rect x="${x - 35}" y="28" width="70" height="50" rx="8" class="w fo"/>` + T(x, 59, n, { c: 'lb', sz: 18 }); });
    s += AR(82, 38, 203, 38, 'o') + T(142, 30, '(°F − 32) ÷ 1.8', { c: 'vl', sz: 11 }) + AR(203, 68, 82, 68, 'o') + T(142, 88, '× 1.8 + 32', { c: 'vl', sz: 11 });
    s += AR(277, 38, 398, 38, 'o') + T(337, 30, '+ 273.15', { c: 'vl', sz: 11 }) + AR(398, 68, 277, 68, 'o') + T(337, 88, '− 273.15', { c: 'vl', sz: 11 });
    const ex = ['72 °F → 22.2 °C → 295.4 K', '350 K → 76.85 °C → 170.3 °F', '98.6 °F = 37.0 °C = 310.15 K', '77 K = −196 °C = −321 °F'];
    ex.forEach((t, i) => { s += T(240, 124 + i * 20, t, { c: 'lb', sz: 13 }); });
    s += T(240, 222, '−40 °C = −40 °F     ·     a change of 10 °C = 10 K = 18 °F', { c: 'vl', sz: 12 });
    return svg(480, 236, s, 'Convert through °C: an offset for kelvin, a factor of 1.8 plus 32 for Fahrenheit. Differences need no offset.');
  });
  def('th-absgraph', () => DG.graph({
    w: 480, h: 270, x: [-300, 100], y: [0, 1.15], xl: 'temperature (°C)', yl: 'V at constant P  (or P at constant V)', xt: [[-273.15, '−273.15'], [-200, '−200'], [-100, '−100'], [0, '0'], [100, '100']], yt: [],
    draw: (sx, sy) => {
      let s = '';
      [[1, 'gas A'], [0.72, 'gas B'], [0.45, 'gas C']].forEach(([a, n]) => {
        const v = t => a * (t + 273.15) / 373.15;
        s += `<line x1="${f(sx(-273.15))}" y1="${f(sy(0))}" x2="${f(sx(-20))}" y2="${f(sy(v(-20)))}" class="w o" ${DASH}/><line x1="${f(sx(-20))}" y1="${f(sy(v(-20)))}" x2="${f(sx(100))}" y2="${f(sy(v(100)))}" class="w o thick"/>` + T(sx(100) - 4, sy(v(100)) - 7, n, { a: 'end', c: 'lb', sz: 12 });
      });
      s += dot(sx(-273.15), sy(0), 5) + T(sx(-292), sy(0.98), 'absolute zero', { a: 'start', c: 'lb' }) + T(sx(-292), sy(0.98) + 15, 'V → 0 for every gas', { a: 'start', c: 'vl', sz: 12 }) + `<line x1="${f(sx(-273.15))}" y1="${f(sy(0.98) + 22)}" x2="${f(sx(-273.15))}" y2="${f(sy(0) - 7)}" class="w gr" ${DASH}/>`;
      s += T(sx(-100), sy(0.92), 'measured (solid)', { c: 'vl', sz: 11 }) + T(sx(-150), sy(0.12) + 0, '', {});
      s += T(sx(-200), sy(0.56), 'extrapolated (dashed)', { c: 'vl', sz: 11, rot: 0 });
      return s;
    }, cap: 'Extrapolate the straight V–T (or P–T) lines of any gas to zero and they all meet at −273.15 °C. That is how Kelvin’s absolute zero was found.'
  }));

  /* ================= t02 ================= */
  def('th-heat-temp', () => {
    let s = '';
    s += `<path d="M40 40V120Q40 130 50 130H80Q90 130 90 120V40" class="w"/><rect x="41" y="56" width="48" height="73" rx="4" class="w fr" style="stroke:none"/>`;
    s += `<path d="M150 50V132Q150 146 164 146H290Q304 146 304 132V50" class="w"/><rect x="151" y="66" width="152" height="79" rx="4" class="w fo" style="stroke:none"/>`;
    s += T(65, 28, 'small cup', { c: 'lb', sz: 12 }) + T(227, 28, 'big tub', { c: 'lb', sz: 12 }) + T(65, 162, 'higher T', { c: 'hc', sz: 12 }) + T(227, 162, 'lower T, but more thermal energy', { c: 'oc', sz: 12 });
    s += T(65, 100, 'T', { c: 'lb' }) + T(227, 110, 'T', { c: 'lb' });
    /* flow */
    s += `<rect x="350" y="40" width="100" height="44" rx="6" class="w fr"/><rect x="350" y="132" width="100" height="44" rx="6" class="w fb"/>` + T(400, 67, 'hot body', { c: 'lb', sz: 12 }) + T(400, 159, 'cold body', { c: 'lb', sz: 12 }) + AR(400, 88, 400, 128, 'r') + T(412, 112, 'Q', { a: 'start', c: 'lb' });
    s += T(400, 198, 'heat flows hot → cold', { c: 'vl', sz: 12 });
    return svg(480, 212, s, 'Temperature is an average; thermal energy is a total. Heat is the energy that flows because of a temperature difference.');
  });
  def('th-units-log', () => {
    const rows = [['erg', 1e-7, 'fm', '10⁻⁷ J'], ['joule (J)', 1, 'fo o', '1 J'], ['foot-pound', 1.356, 'fm', '1.356 J'], ['calorie (cal)', 4.184, 'fo o', '4.184 J'], ['BTU', 1055, 'fm', '≈ 1055 J'], ['Calorie (Cal)', 4184, 'fo o', '4184 J'], ['kilowatt-hour', 3.6e6, 'fm', '3.6×10⁶ J'], ['therm', 1.055e8, 'fm', '1.055×10⁸ J']];
    const x0 = 122, sc = 330 / 17, xe = v => x0 + (lg(v) + 8) * sc; let s = '';
    for (let d = -8; d <= 9; d += 1) if ((d + 8) % 3 === 0 || d === 9) s += `<line x1="${f(x0 + (d + 8) * sc)}" y1="14" x2="${f(x0 + (d + 8) * sc)}" y2="${14 + rows.length * 26}" class="gr"/>` + T(x0 + (d + 8) * sc, 14 + rows.length * 26 + 14, '10' + sup(d), { c: 'tk' });
    rows.forEach(([lab, v, cls, vt], i) => { const y = 18 + i * 26, w = Math.max(xe(v) - x0, 3), inn = xe(v) > 350; s += T(x0 - 8, y + 15, lab, { a: 'end', sz: 12 }) + `<rect x="${x0}" y="${y}" width="${f(w)}" height="18" rx="3" class="w ${cls}"/>` + (inn ? T(xe(v) - 6, y + 14, vt, { a: 'end', c: 'lb', sz: 12 }) : T(xe(v) + 6, y + 14, vt, { a: 'start', c: 'lb', sz: 12 })); });
    s += T(x0 + 165, 18 + rows.length * 26 + 32, 'energy in joules (log scale)', { c: 'vl', sz: 12 });
    return svg(480, 268, s, 'Energy units span 15 orders of magnitude: 1 Cal = 1000 cal = 4184 J, 1 BTU ≈ 1055 J, 1 kWh = 3.6×10⁶ J.');
  });
  def('th-joule', () => {
    let s = L(64, 50, 240, 50) + L(240, 50, 416, 50) + `<circle cx="64" cy="50" r="7" class="w fm"/><circle cx="416" cy="50" r="7" class="w fm"/><circle cx="240" cy="50" r="10" class="w fo"/>`;
    [64, 416].forEach(x => {
      s += L(x, 57, x, 70) + `<rect x="${x - 20}" y="70" width="40" height="32" rx="3" class="w fm"/>` + T(x, 91, 'M', { c: 'lb' }) + `<rect x="${x - 20}" y="150" width="40" height="32" rx="3" class="w fm" ${DASH}/>`;
    });
    s += AR(28, 72, 28, 152, 'o') + T(20, 116, 'h', { c: 'lb', a: 'end' }) + AR(452, 72, 452, 152, 'o') + T(460, 116, 'h', { c: 'lb', a: 'start' });
    s += L(240, 60, 240, 205) + `<rect x="170" y="115" width="140" height="115" rx="6" class="w"/><rect x="171" y="132" width="138" height="97" class="w fb" style="stroke:none"/>`;
    [170, 196].forEach(y => { s += `<rect x="212" y="${y}" width="56" height="6" rx="2" class="w fo"/>`; });
    s += `<rect x="288" y="98" width="6" height="92" rx="3" class="w fm"/><circle cx="291" cy="196" r="8" class="w fr"/>` + T(304, 112, 'ΔT', { c: 'lb', a: 'start' });
    s += AR(192, 150, 226, 150, 'o', true);
    s += T(240, 247, 'insulated tank: water of mass m', { c: 'vl', sz: 12 });
    s += T(240, 272, 'n · M g h = m c ΔT', { c: 'lb', sz: 15 }) + T(240, 294, '10 kg × 9.8 m/s² × 2 m × 20 drops = 3920 J → 1 kg of water warms 0.94 °C', { c: 'vl', sz: 12 });
    return svg(480, 304, s, 'Joule’s paddle wheel: falling weights turn the paddles, the water warms, and mechanical work converts to heat at a fixed rate (≈ 4.18 J per calorie).');
  });

  /* ================= t03 ================= */
  def('th-spec-bars', () => {
    const rows = [['water (liquid)', 4.184, 'fb b', '4.184'], ['ethanol', 2.44, 'fb b', '2.44'], ['ice (−10 °C)', 2.09, 'fb b', '2.09'], ['steam (100 °C)', 2.01, 'fb b', '2.01'], ['aluminum', 0.897, 'fo o', '0.897'], ['glass', 0.84, 'fm', '0.84'], ['iron / steel', 0.449, 'fo o', '0.449'], ['copper', 0.385, 'fo o', '0.385'], ['silver', 0.235, 'fo o', '0.235'], ['mercury', 0.140, 'fo o', '0.140'], ['lead / gold', 0.129, 'fo o', '0.129']];
    let s = hbars(rows, 122, 16, 24, 17, 76, 114, 0);
    [0, 1, 2, 3, 4].forEach(v => { const x = 122 + v * 76; s += `<line x1="${x}" y1="10" x2="${x}" y2="${16 + rows.length * 24}" class="gr"/>` + T(x, 16 + rows.length * 24 + 14, String(v), { c: 'tk' }); });
    s += T(300, 16 + rows.length * 24 + 34, 'specific heat c (J/g·K)', { c: 'vl', sz: 12 }) + T(430, 100, 'Q = m c ΔT', { c: 'lb', sz: 14 }) + T(430, 120, 'water stores', { c: 'vl', sz: 11 }) + T(430, 134, '4.6× more per', { c: 'vl', sz: 11 }) + T(430, 148, 'gram than iron?', { c: 'vl', sz: 11 });
    s = s.replace(/<text[^>]*>water stores<\/text>|<text[^>]*>4\.6× more per<\/text>|<text[^>]*>gram than iron\?<\/text>/g, '');
    return svg(480, 318, s, 'Water’s specific heat (4.184 J/g·K) is about 4.6× that of aluminium’s 0.897 and ~9× iron’s 0.449: metals heat and cool quickly, water resists change.');
  });
  def('th-mix', () => {
    const X = t => 40 + t * 4; let s = '';
    s += `<rect x="40" y="108" width="400" height="6" rx="2" class="w fm"/>`;
    [[20, 'fb', '250 g', 'cold'], [80, 'fr', '150 g', 'hot']].forEach(([t, c, m]) => { s += `<rect x="${X(t) - 26}" y="66" width="52" height="42" rx="4" class="w ${c}"/>` + T(X(t), 92, m, { c: 'lb', sz: 12 }) + T(X(t), 134, t + ' °C', { c: t < 50 ? 'cc' : 'hc', sz: 12 }); });
    s += `<path d="M${X(42.5)} 116L${X(42.5) - 11} 136L${X(42.5) + 11} 136Z" class="w fo"/>` + T(X(42.5), 154, 'T_f = 42.5 °C', { c: 'lb', sz: 12 });
    s += AR(X(42.5) - 2, 172, X(20), 172, 'b') + AR(X(42.5) + 2, 172, X(80), 172, 'r') + T((X(42.5) + X(20)) / 2, 190, '22.5 K', { c: 'cc', sz: 12 }) + T((X(42.5) + X(80)) / 2, 190, '37.5 K', { c: 'hc', sz: 12 });
    s += T(240, 18, 'balance point of (mass × temperature)', { c: 'vl', sz: 12 }) + T(240, 40, '250 g × 22.5 K = 150 g × 37.5 K', { c: 'lb' });
    s += T(240, 224, 'T_f = (150×80 + 250×20) / 400 = 42.5 °C', { c: 'lb', sz: 14 });
    return svg(480, 240, s, 'Mixing the same liquid: the final temperature is the mass-weighted average, like the balance point of a seesaw.');
  });
  def('th-calorimeter', () => {
    let s = '';
    s += `<rect x="160" y="100" width="160" height="132" rx="6" class="w fm"/><rect x="172" y="100" width="136" height="120" class="w"/><rect x="173" y="132" width="134" height="87" class="w fb" style="stroke:none"/>`;
    s += `<rect x="154" y="88" width="172" height="12" rx="3" class="w fm"/>`;
    s += L(198, 62, 198, 196) + `<circle cx="198" cy="202" r="7" class="w fr"/>` + L(276, 62, 276, 196) + `<path d="M276 196h-14M276 196h14" class="w thick"/><path d="M262 76a14 14 0 0 1 28 0" class="w s-o" marker-end="url(#ao)"/>`;
    s += `<rect x="216" y="192" width="40" height="22" rx="3" class="w fr"/>`;
    s += T(132, 66, 'thermometer', { a: 'end', sz: 12 }) + L(136, 62, 194, 62, 'gr') + T(132, 94, 'lid', { a: 'end', sz: 12 }) + L(136, 92, 152, 92, 'gr') + T(132, 164, 'water', { a: 'end', sz: 12 }) + T(132, 179, 'm_w, T_w', { a: 'end', sz: 11, c: 'vl' }) + L(136, 162, 186, 162, 'gr') + T(132, 226, 'insulating cup', { a: 'end', sz: 12 }) + L(136, 224, 162, 224, 'gr');
    s += T(344, 66, 'stirrer', { a: 'start', sz: 12 }) + L(296, 62, 340, 62, 'gr') + T(344, 210, 'hot metal', { a: 'start', sz: 12 }) + T(344, 225, 'm_m, c_m, T_m', { a: 'start', sz: 11, c: 'vl' }) + L(258, 206, 340, 206, 'gr');
    s += T(240, 266, 'heat lost by hot = heat gained by cold', { c: 'vl', sz: 12 }) + T(240, 288, 'm_m c_m (T_m − T_f) = (m_w c_w + C_cal)(T_f − T_w)', { c: 'lb', sz: 13 });
    return svg(480, 298, s, 'A coffee-cup calorimeter: the insulated cup keeps the heat inside, so what the hot metal loses the water (and cup) gains.');
  });

  /* ================= t04 ================= */
  def('th-phase-changes', () => {
    let s = '';
    [[65, 'SOLID', 'fb'], [240, 'LIQUID', 'fo'], [415, 'GAS', 'fr']].forEach(([x, n, c]) => { s += `<rect x="${x - 45}" y="90" width="90" height="42" rx="8" class="w ${c}"/>` + T(x, 116, n, { c: 'lb' }); });
    s += AR(112, 100, 192, 100, 'r') + T(152, 88, 'melting', { sz: 12, c: 'lb' }) + T(152, 94 - 0, '', {}) + AR(192, 122, 112, 122, 'b') + T(152, 146, 'freezing', { sz: 12, c: 'lb' }) + T(152, 160, 'releases L_f', { sz: 11, c: 'cc' });
    s += AR(287, 100, 367, 100, 'r') + T(327, 88, 'vaporization', { sz: 12, c: 'lb' }) + AR(367, 122, 287, 122, 'b') + T(327, 146, 'condensation', { sz: 12, c: 'lb' }) + T(327, 160, 'releases L_v', { sz: 11, c: 'cc' });
    s += T(152, 73, 'absorbs L_f', { sz: 11, c: 'hc' }) + T(327, 73, 'absorbs L_v', { sz: 11, c: 'hc' });
    s = s.replace(/<text[^>]*><\/text>/g, '');
    s += P('M65 86C65 26 415 26 415 86', 's-r', 'marker-end="url(#ar2)"') + T(240, 30, 'sublimation: absorbs heat', { sz: 12, c: 'hc' });
    s += P('M415 136C415 196 65 196 65 136', 's-b', 'marker-end="url(#ab)"') + T(240, 204, 'deposition: releases heat', { sz: 12, c: 'cc' });
    s += T(240, 232, 'during every change the temperature stays constant: Q = m L', { c: 'vl', sz: 12 });
    return svg(480, 242, s, 'Going right (more freedom) absorbs latent heat; going left releases it.');
  });
  def('th-heating-curve', () => {
    const pts = [[0, -20], [4.18, 0], [37.58, 0], [79.42, 100], [305.02, 100], [309.04, 120]];
    return DG.graph({
      w: 480, h: 300, ml: 52, mt: 14, x: [0, 320], y: [-32, 132], xl: 'heat added Q (kJ), 100 g of ice from −20 °C', yl: 'temperature (°C)', xt: [0, 50, 100, 150, 200, 250, 300], yt: [[-20, '−20'], [0, '0'], [100, '100'], [120, '120']],
      draw: (sx, sy) => {
        let s = `<polyline points="${pts.map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w o thick"/>`;
        pts.forEach(p => { s += dot(sx(p[0]), sy(p[1]), 3); });
        s += T(sx(7), sy(-26), '① ice warms: Q = mcΔT = 4.18 kJ', { a: 'start', sz: 11 }) + T(sx(7), sy(-9), '② melts at 0 °C: Q = mL_f = 33.4 kJ', { a: 'start', sz: 11, c: 'lb' });
        s += T(sx(88), sy(48), '③ water warms', { a: 'start', sz: 11 }) + T(sx(88), sy(38), '', {}) + T(sx(88), sy(30), 'Q = mcΔT = 41.8 kJ', { a: 'start', sz: 11 });
        s += T(sx(192), sy(106), '④ boils at 100 °C: Q = mL_v = 225.6 kJ (73 %)', { sz: 11, c: 'lb' }) + T(sx(319), sy(128), '⑤ steam 4.02 kJ', { a: 'end', sz: 11 });
        s += T(sx(318), sy(62), 'total = 309 kJ', { a: 'end', c: 'lb', sz: 12 });
        return s.replace(/<text[^>]*><\/text>/g, '');
      }, cap: 'Heating 100 g of ice at −20 °C to steam at 120 °C takes 309 kJ; the flat parts are phase changes where Q = mL, and boiling alone is 73 % of the total.'
    });
  });
  def('th-phase-diagram', () => {
    let s = `<path class="w ax" d="M60 244V18M60 244H462"/>` + T(60, 12, 'P', { c: 'lb', a: 'middle' }) + T(462, 262, 'T', { c: 'lb' });
    s += P('M62 238Q140 216 200 170', 'thick') + P('M200 170Q330 140 400 62', 'o thick') + P('M200 170L220 28', 'thick') + P('M200 170L182 28', 'b thick', DASH);
    s += dot(200, 170, 5) + dot(400, 62, 5);
    s += T(112, 100, 'SOLID', { c: 'lb', sz: 15 }) + T(300, 70, 'LIQUID', { c: 'lb', sz: 15 }) + T(410, 212, 'GAS', { c: 'lb', sz: 15 });
    s += T(206, 192, 'triple point', { a: 'start', c: 'oc' }) + T(206, 207, 'water: 0.01 °C, 611.7 Pa', { a: 'start', sz: 11, c: 'vl' });
    s += T(430, 98, 'critical point', { c: 'oc' }) + L(404, 67, 424, 86, 'gr') + T(432, 38, 'supercritical fluid', { sz: 11, c: 'vl' });
    s += T(226, 124, 'melting', { a: 'start', sz: 11, c: 'vl' }) + T(150, 232, 'sublimation', { a: 'start', sz: 11, c: 'vl' }) + T(262, 160, '', {});
    s += T(72, 272, 'solid line: most substances   ·   dashed blue: water (leans left)', { a: 'start', sz: 11, c: 'vl' });
    s = s.replace(/<text[^>]*><\/text>/g, '');
    return svg(480, 282, s, 'Phase diagram: the three phases meet at the triple point, and the boiling curve ends at the critical point, beyond which liquid and gas are indistinguishable.');
  });

  /* ================= t05 ================= */
  def('th-slab', () => {
    let s = `<rect x="40" y="56" width="80" height="110" rx="4" class="w fr"/><rect x="340" y="56" width="80" height="110" rx="4" class="w fb"/><rect x="130" y="56" width="200" height="110" class="w fo"/>`;
    s += T(80, 44, 'T_hot', { c: 'hc' }) + T(380, 44, 'T_cold', { c: 'cc' }) + T(230, 44, 'slab: conductivity k, face area A', { sz: 12, c: 'vl' });
    [82, 111, 140].forEach(y => { s += AR(146, y, 314, y, 'r'); });
    s += L(130, 60, 330, 162, 'o', DASH) + T(300, 100, '', {}) + T(280, 80, '', {});
    s += dimH(130, 330, 188, 'L') + T(230, 188 + 38 - 0, '', {});
    s += T(80, 112, 'hot', { c: 'lb', sz: 12 }) + T(380, 112, 'cold', { c: 'lb', sz: 12 });
    s += T(240, 236, 'P = Q/t = k A (T_hot − T_cold) / L', { c: 'lb', sz: 15 }) + T(240, 258, '∝ A     ∝ ΔT     ∝ 1/L     (double L → half the loss)', { c: 'vl', sz: 12 });
    s = s.replace(/<text[^>]*><\/text>/g, '');
    return svg(480, 268, s, 'Fourier’s law: heat flows through a slab in proportion to its area, the temperature difference and the conductivity, and inversely to its thickness.');
  });
  def('th-k-bars', () => {
    const rows = [['silver', 429, 429, 'fo o', '429'], ['copper', 401, 401, 'fo o', '401'], ['aluminum', 237, 237, 'fo o', '237'], ['steel', 45, 55, 'fo o', '≈ 45–55'], ['stainless steel', 15, 15, 'fo o', '≈ 15'], ['ice', 2.2, 2.2, 'fm', '2.2'], ['concrete', 1.0, 1.7, 'fm', '1.0–1.7'], ['window glass', 0.8, 1.0, 'fm', '0.8–1.0'], ['still water', 0.6, 0.6, 'fm', '0.60'], ['wood (pine)', 0.12, 0.17, 'fm', '0.12–0.17'], ['cardboard', 0.05, 0.07, 'fb b', '0.05–0.07'], ['polystyrene (EPS)', 0.033, 0.040, 'fb b', '0.033–0.040'], ['still air', 0.026, 0.026, 'fb b', '0.026'], ['polyurethane foam', 0.022, 0.028, 'fb b', '0.022–0.028'], ['aerogel', 0.013, 0.020, 'fb b', '0.013–0.020']];
    const x0 = 140, sc = 62, X = v => x0 + (lg(v) + 2) * sc; let s = '';
    for (let d = -2; d <= 3; d++) s += `<line x1="${X(Math.pow(10, d))}" y1="8" x2="${X(Math.pow(10, d))}" y2="${12 + rows.length * 19}" class="gr"/>` + T(X(Math.pow(10, d)), 12 + rows.length * 19 + 14, d === -2 ? '0.01' : d === -1 ? '0.1' : String(Math.pow(10, d)), { c: 'tk' });
    rows.forEach(([n, a, b, cls, vt], i) => { const y = 12 + i * 19, xe = X(Math.sqrt(a * b)); s += T(x0 - 8, y + 12, n, { a: 'end', sz: 12 }) + `<rect x="${x0}" y="${y}" width="${f(xe - x0)}" height="14" rx="3" class="w ${cls}"/>` + T(xe + 6, y + 12, vt, { a: 'start', c: 'lb', sz: 11 }); });
    s += T(x0 + 150, 12 + rows.length * 19 + 34, 'thermal conductivity k (W/m·K), log scale', { c: 'vl', sz: 12 });
    return svg(480, 12 + rows.length * 19 + 44, s, 'Conductivity spans four orders of magnitude: metals conduct ~10⁴ times better than foams and still air, which is why foams and trapped air insulate.');
  });
  def('th-layers', () => {
    const y0 = 110, ky = 4, Y = d => y0 - d * ky; let s = '';
    s += `<rect x="100" y="116" width="144" height="68" class="w fo"/><rect x="244" y="116" width="60" height="68" class="w fb"/>`;
    s += `<polyline points="100,${Y(20)} 244,${f(Y(12.8))} 304,${Y(0)}" class="w hot thick"/>` + dot(100, Y(20), 4) + dot(244, Y(12.8), 4) + dot(304, Y(0), 4) + dl(100, Y(0), 304, Y(0), 'gr');
    s += T(92, Y(20) + 4, '+20 K', { a: 'end', c: 'hc', sz: 12 }) + T(244, Y(12.8) - 10, '+12.8 K', { c: 'lb', sz: 12 }) + T(312, Y(0) + 4, '0 K (outside)', { a: 'start', sz: 11, c: 'vl' });
    s += T(200, Y(20) - 4, 'ΔT across wood = 7.2 K', { sz: 11, c: 'vl' }) + T(294, 72, 'ΔT across EPS', { a: 'start', sz: 11, c: 'vl' }) + T(294, 86, '= 12.8 K', { a: 'start', sz: 11, c: 'vl' });
    s += T(172, 136, 'wood, 12 cm', { c: 'lb', sz: 12 }) + T(172, 152, 'k = 0.15 W/m·K', { sz: 11 }) + T(172, 168, 'R = 0.80 m²K/W', { sz: 11, c: 'lb' });
    s += T(274, 136, 'EPS', { c: 'lb', sz: 12 }) + T(274, 152, '5 cm', { sz: 11 }) + T(274, 168, 'R 1.43', { sz: 11, c: 'lb' });
    s += T(92, 154, 'inside', { a: 'end', sz: 12 }) + T(312, 154, 'outside', { a: 'start', sz: 12 });
    s += T(240, 214, 'R_total = 0.80 + 1.43 = 2.23 m²K/W', { c: 'lb', sz: 13 }) + T(240, 234, 'P = A ΔT / R = 10 × 20 / 2.23 = 89.7 W', { c: 'lb', sz: 13 }) + T(240, 252, 'series layers: R adds, and ΔT splits in proportion to R', { sz: 11, c: 'vl' });
    return svg(480, 262, s, 'Layers in series: resistances add and the temperature drop is largest across the best insulator, so EPS takes 12.8 K of the 20 K.');
  });

  /* ================= t06 ================= */
  def('th-four-mech', () => {
    let s = `<path d="M170 92V212H310V92" class="w"/><rect x="172" y="122" width="136" height="88" class="w fr" style="stroke:none"/><path d="M172 122h136" class="w b"/>`;
    [206, 240, 274].forEach(x => { s += P(`M${x} 112q-6 -9 0 -18t0 -18`, 's-o', 'marker-end="url(#ao)"'); });
    s += T(240, 50, 'evaporation', { c: 'lb' }) + T(240, 66, 'hottest molecules leave, carrying L_v', { sz: 11, c: 'vl' });
    s += AR(166, 172, 106, 172, 'r') + T(102, 166, 'conduction', { a: 'end', c: 'lb', sz: 12 }) + T(102, 181, 'through wall', { a: 'end', sz: 11, c: 'vl' });
    s += P('M314 150q8 -8 16 0t16 0t16 0', 's-r', 'marker-end="url(#ar2)"') + P('M314 186q8 -8 16 0t16 0t16 0', 's-r', 'marker-end="url(#ar2)"') + T(376, 166, 'radiation', { a: 'start', c: 'lb', sz: 12 }) + T(376, 181, 'IR, ∝ T⁴', { a: 'start', sz: 11, c: 'vl' });
    s += AR(194, 194, 194, 140, 'r') + AR(286, 136, 286, 192, 'b');
    s += T(240, 168, 'convection', { sz: 11, c: 'lb' });
    s += T(240, 238, 'P_cond = kAΔT/L     P_conv = hAΔT', { sz: 12, c: 'vl' }) + T(240, 256, 'P_rad = εσA(T⁴ − T_env⁴)     evaporation: Q = mL_v', { sz: 12, c: 'vl' });
    return svg(480, 268, s, 'A hot liquid loses heat four ways at once: through the wall, by convection currents, as infrared radiation, and by evaporation from the surface.');
  });
  def('th-conv-cell', () => {
    let s = `<rect x="110" y="68" width="260" height="150" rx="6" class="w"/><rect x="111" y="90" width="258" height="127" class="w fb" style="stroke:none"/>`;
    s += AR(240, 196, 240, 112, 'r') + P('M234 104Q200 82 172 106', 's-r', 'marker-end="url(#ar2)"') + P('M246 104Q280 82 308 106', 's-r', 'marker-end="url(#ar2)"');
    s += AR(166, 118, 166, 184, 'b') + AR(314, 118, 314, 184, 'b') + P('M172 198Q204 214 234 202', 's-b', 'marker-end="url(#ab)"') + P('M308 198Q276 214 246 202', 's-b', 'marker-end="url(#ab)"');
    s += `<path d="M222 222q4 -12 10 -2q4 -16 8 -2q4 -16 8 0q6 -8 10 4z" class="w fo o"/>` + T(240, 252, 'heat source', { sz: 12, c: 'vl' });
    s += T(240, 44, 'hot water expands, is less dense, rises', { sz: 12, c: 'hc' }) + T(104, 136, 'cool water', { a: 'end', sz: 12, c: 'cc' }) + T(104, 151, 'sinks at the edge', { a: 'end', sz: 11, c: 'vl' });
    s += T(376, 136, 'same on', { a: 'start', sz: 12, c: 'vl' }) + T(376, 151, 'the other side', { a: 'start', sz: 11, c: 'vl' });
    s += T(240, 278, 'P = h A (T_surface − T_fluid)', { c: 'lb', sz: 13 });
    return svg(480, 290, s, 'Natural convection in a heated pot: hot fluid rises in the middle, spreads out, cools, and sinks along the edges.');
  });
  def('th-rad-emis', () => {
    const rows = [['human skin', 0.98], ['water', 0.96], ['matte black', 0.95], ['white paint (IR)', 0.9], ['oxidized steel', 0.8], ['aluminum foil', 0.04], ['polished silver', 0.02]];
    let s = T(240, 14, 'emissivity ε (1 = perfect blackbody)', { c: 'vl', sz: 12 });
    s += hbars(rows.map(([n, v]) => [n, v, v > 0.5 ? 'fr' : 'fb b', String(v)]), 132, 26, 20, 14, 280, 124, 0);
    s += `<line x1="132" y1="22" x2="132" y2="${26 + rows.length * 20}" class="w"/>`;
    s += T(240, 204, 'net radiation: black cylinder 0.020 m² at 350 K, surroundings 295 K', { sz: 12, c: 'vl' }) + T(240, 220, 'P = εσA (T⁴ − T_env⁴)', { c: 'lb', sz: 13 });
    s += hbars([['ε = 0.95', 8.0, 'fr', '8.0 W'], ['ε = 0.05 (foil)', 0.42, 'fb b', '0.42 W']], 132, 232, 22, 15, 35, 124, 0);
    return svg(480, 280, s, 'Radiation depends on surface finish: shiny foil (ε ≈ 0.05) cuts the radiated power from 8.0 W to 0.42 W, but only if it faces an air gap.');
  });
  def('th-loss-paths', () => {
    const yt = 52, yb = 150; let s = rails(80, 440, yt, yb, [[150, 'R', '', ''], [230, 'R', '', ''], [310, 'R', '', ''], [390, 'R', '', '']], { ends: true });
    [[150, 'G_wall', 'conduction'], [230, 'G_top', 'convection'], [310, 'G_rad', 'radiation'], [390, 'G_evap', 'evaporation']].forEach(([x, g, n]) => { s += T(x, yb + 20, g, { c: 'lb', sz: 12 }) + T(x, yb + 35, n, { sz: 11, c: 'vl' }); });
    s += T(74, 106, 'T_water', { a: 'end', c: 'hc', sz: 13 }) + T(446, 106, 'T_room', { a: 'start', c: 'cc', sz: 13 }) + AR(250, 26, 330, 26, 'r') + T(290, 14, 'P (total heat loss)', { sz: 12, c: 'vl' });
    s += T(240, 214, 'P = ΔT (G_wall + G_top + G_rad + G_evap)', { c: 'lb', sz: 14 }) + T(240, 234, 'largest G dominates: fix it first      K = ΣG / C  →  Newton’s cooling', { sz: 12, c: 'vl' });
    return svg(480, 246, s, 'Heat escapes along parallel paths, like current through parallel resistors: add the conductances, and improve the biggest one first.');
  });

  /* ================= t07 ================= */
  def('th-radiometry', () => {
    let s = `<rect x="70" y="56" width="20" height="100" rx="3" class="w fr"/><rect x="390" y="56" width="20" height="100" rx="3" class="w fb"/>`;
    [72, 106, 140].forEach(y => { s += P(`M96 ${y}q8 -8 16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0t16 0`, 's-o', 'marker-end="url(#ao)"'); });
    s += T(240, 44, 'radiant flux Φ (total power, W)', { c: 'lb', sz: 12 }) + T(80, 174, 'M leaves', { c: 'hc', sz: 12 }) + T(80, 189, 'the surface', { sz: 11, c: 'vl' }) + T(400, 174, 'E arrives', { c: 'cc', sz: 12 }) + T(400, 189, 'on the surface', { sz: 11, c: 'vl' });
    [['Φ: flux, W', 'I: intensity, W/sr', 'L: radiance, W/m²·sr'], ['M: exitance (out), W/m²', 'E: irradiance (in), W/m²', 'M_λ: per wavelength, W/m³']].forEach((c, j) => c.forEach((t, i) => { s += T(j ? 255 : 20, 222 + i * 18, t, { a: 'start', sz: 12, c: i === 0 && j ? 'lb' : '' }); }));
    return svg(480, 280, s, 'Radiometry words: exitance M is power leaving a surface per unit area, irradiance E is power arriving per unit area.');
  });
  def('th-sb-curve', () => DG.graph({
    w: 480, h: 270, x: [0, 650], y: [0, 8.6], xl: 'temperature T (K)', yl: 'exitance M (kW/m²)', xt: [0, 100, 200, 300, 400, 500, 600], yt: [0, 2, 4, 6, 8],
    draw: (sx, sy) => {
      const M = t => 5.670374e-8 * Math.pow(t, 4) / 1000;
      let s = DG.curve(M, sx, sy, 0, 610, 90, 'o');
      s += dot(sx(300), sy(M(300)), 5) + dot(sx(600), sy(M(600)), 5);
      s += T(sx(300), sy(M(300)) - 12, '300 K: 459 W/m²', { sz: 12, c: 'lb', a: 'middle' }) + T(sx(600) - 10, sy(M(600)) + 4, '600 K: 7.35 kW/m²', { sz: 12, c: 'lb', a: 'end' });
      s += T(sx(20), sy(7.6), 'M = σT⁴', { a: 'start', c: 'lb', sz: 14 }) + T(sx(20), sy(6.3), 'double T → ×16', { a: 'start', sz: 12, c: 'vl' });
      return s;
    }, cap: 'Stefan–Boltzmann: a blackbody’s exitance grows as T⁴, so going from 300 K to 600 K multiplies the radiated power by 16.'
  }));
  def('th-planck', () => {
    const h = 6.62607015e-34, c = 2.99792458e8, k = 1.380649e-23;
    const M = (lam, T0) => { const l = lam * 1e-9, x = h * c / (l * k * T0); return 2 * Math.PI * h * c * c / (Math.pow(l, 5) * (Math.exp(x) - 1)) * 1e-9 / 1e4; };
    const Ts = [[3000, 'cold'], [4000, 'grn'], [5000, 'o'], [5772, 'hot']];
    const pk = M(2.898e-3 / 5772 * 1e9, 5772), ym = pk * 1.1;
    return DG.graph({
      w: 480, h: 290, mt: 28, x: [0, 2500], y: [0, ym], xl: 'wavelength λ (nm)', yl: 'spectral exitance M_λ (10⁴ W/m²·nm)', xt: [0, 500, 1000, 1500, 2000, 2500],
      yt: [0, 2, 4, 6, 8, 10, 12].filter(v => v < ym).map(v => [v, String(v)]),
      draw: (sx, sy) => {
        let s = `<rect x="${f(sx(380))}" y="28" width="${f(sx(750) - sx(380))}" height="${f(sy(0) - 28)}" class="w fg" style="stroke:none"/>` + T(sx(565), 20, 'visible', { sz: 11, c: 'vl' });
        const leg = [];
        Ts.forEach(([t, cl]) => {
          let pts = []; for (let l = 60; l <= 2500; l += 20) pts.push(f(sx(l)) + ',' + f(sy(M(l, t))));
          s += `<polyline points="${pts.join(' ')}" class="w ${cl} thick"/>`; const lm = 2.898e-3 / t * 1e9; s += dot(sx(lm), sy(M(lm, t)), 3.5);
          leg.push([t, cl, lm]);
        });
        let pk2 = []; for (let t = 2700; t <= 6100; t += 100) { const lm = 2.898e-3 / t * 1e9; pk2.push(f(sx(lm)) + ',' + f(sy(M(lm, t)))); }
        s += `<polyline points="${pk2.join(' ')}" class="w" ${DASH} style="stroke-width:1.2"/>`;
        leg.slice().reverse().forEach(([t, cl, lm], i) => { const y = 50 + i * 17; s += `<line x1="${f(sx(1300))}" y1="${y - 4}" x2="${f(sx(1300)) + 22}" y2="${y - 4}" class="w ${cl} thick"/>` + T(sx(1300) + 28, y, t + ' K: λ_max = ' + Math.round(lm) + ' nm', { a: 'start', sz: 12 }); });
        s += T(sx(1300), 122, 'dashed: Wien peaks, λ_max = b/T', { a: 'start', sz: 11, c: 'vl' });
        return s;
      }, cap: 'Planck curves: hotter bodies radiate far more, and the peak slides to shorter wavelengths (Wien). The Sun’s 502 nm peak sits in the visible band; 3000 K peaks in the infrared.'
    });
  });

  /* ================= t08 ================= */
  def('th-cooling-curve', () => DG.graph({
    w: 480, h: 290, x: [0, 200], y: [15, 82], xl: 'time t (min)', yl: 'temperature (°C)', xt: [0, 25, 50, [83.3, '83'], 100, 150, 200], yt: [[22, '22'], [40, '40'], [60, '60'], [75, '75']],
    draw: (sx, sy) => {
      const Tt = K => t => 22 + 53 * Math.exp(-K * t);
      let s = `<line x1="${f(sx(0))}" y1="${f(sy(22))}" x2="${f(sx(200))}" y2="${f(sy(22))}" class="w" ${DASH}/>` + T(sx(104), sy(22) - 6, 'T_r = 22 °C (room)', { a: 'start', sz: 11, c: 'vl' });
      s += DG.curve(Tt(0.006), sx, sy, 0, 200, 80, 'b') + DG.curve(Tt(0.012), sx, sy, 0, 200, 80, 'o');
      s += dot(sx(25), sy(Tt(0.012)(25)), 4.5) + dot(sx(1 / 0.012), sy(Tt(0.012)(1 / 0.012)), 4.5) + dot(0, 0, 0).replace(/<circle[^>]*>/, '');
      s += `<line x1="${f(sx(25))}" y1="${f(sy(Tt(0.012)(25)))}" x2="${f(sx(25))}" y2="${f(sy(15))}" class="w gr" ${DASH}/><line x1="${f(sx(1 / 0.012))}" y1="${f(sy(41.5))}" x2="${f(sx(1 / 0.012))}" y2="${f(sy(15))}" class="w gr" ${DASH}/>`;
      s += T(sx(3), sy(34), 't = 25 min: T = 61.3 °C', { a: 'start', sz: 12 }) + T(sx(3), sy(28.5), 't = τ = 83 min: T = 41.5 °C', { a: 'start', sz: 12 });
      s += `<line x1="${f(sx(86))}" y1="${f(sy(76))}" x2="${f(sx(86)) + 22}" y2="${f(sy(76))}" class="w o thick"/>` + T(sx(86) + 28, sy(76) + 4, 'K = 0.012 min⁻¹', { a: 'start', sz: 12 });
      s += `<line x1="${f(sx(86))}" y1="${f(sy(70))}" x2="${f(sx(86)) + 22}" y2="${f(sy(70))}" class="w b thick"/>` + T(sx(86) + 28, sy(70) + 4, 'K = 0.006 (better insulation)', { a: 'start', sz: 12 });
      return s;
    }, cap: 'T = T_r + (T₀ − T_r)e^(−Kt): the excess temperature decays exponentially toward room temperature, and halving K (better insulation) stretches the curve.'
  }));
  def('th-cooling-ln', () => DG.graph({
    w: 480, h: 270, ml: 72, x: [0, 60], y: [2.8, 4.1], xl: 'time t (min)', yl: 'ln(T − T_r)', xt: [0, 10, 20, 30, 40, 50, 60], yt: [[3.0, '3.0'], [3.4, '3.4'], [3.611, 'ln 37'], [3.892, 'ln 49']],
    draw: (sx, sy) => {
      const y = t => 3.892 - 0.01405 * t;
      let s = `<line x1="${f(sx(0))}" y1="${f(sy(y(0)))}" x2="${f(sx(60))}" y2="${f(sy(y(60)))}" class="w o thick"/>`;
      s += dot(sx(0), sy(3.892), 4.5) + dot(sx(20), sy(3.611), 4.5);
      s += `<line x1="${f(sx(0))}" y1="${f(sy(3.892))}" x2="${f(sx(20))}" y2="${f(sy(3.892))}" class="w" ${DASH}/><line x1="${f(sx(20))}" y1="${f(sy(3.892))}" x2="${f(sx(20))}" y2="${f(sy(3.611))}" class="w" ${DASH}/>`;
      s += T(sx(10), sy(3.892) - 7, 'Δt = 20 min', { sz: 11, c: 'vl' }) + T(sx(20) + 6, sy(3.75) + 4, 'Δy = −0.281', { a: 'start', sz: 11, c: 'vl' });
      s += T(sx(26), sy(4.02), 'slope = −0.281 / 20', { a: 'start', c: 'lb', sz: 13 }) + T(sx(26), sy(3.96) + 14, '= −0.01405 min⁻¹ = −K', { a: 'start', c: 'lb', sz: 13 });
      return s;
    }, cap: 'Linearise the data: a straight line of ln(T − T_r) against time means Newton’s law holds, and its slope is −K (here K = 0.01405 min⁻¹).'
  }));
  def('th-predict-flow', () => {
    const st = [['Measure', 'T_r = 22.0 °C,  T₀ = 75.0 °C,  t = 25 min,  water volume'], ['Look up K', 'interpolate your graph/table for that volume:  K = 0.0120 min⁻¹'], ['Exponent', 'e^(−K t) = e^(−0.300) = 0.7408'], ['Predict', 'T_f = T_r + (T₀ − T_r) e^(−Kt) = 22 + 53 × 0.7408 = 61.3 °C'], ['Record', 'write the prediction down before the final reading']];
    let s = ''; st.forEach(([a, b], i) => { const y = 10 + i * 50; s += `<rect x="20" y="${y}" width="440" height="38" rx="8" class="w ${i === 3 ? 'fo o' : 'fm'}"/><circle cx="44" cy="${y + 19}" r="11" class="w fo"/>` + T(44, y + 24, String(i + 1), { c: 'lb', sz: 12 }) + T(68, y + 16, a, { a: 'start', c: 'lb', sz: 12 }) + T(68, y + 31, b, { a: 'start', sz: 11, c: 'vl' }); if (i < 4) s += AR(240, y + 38, 240, y + 50, 'o'); });
    return svg(480, 262, s, 'Prediction routine for the event: measure, look up K, compute the exponential, record before you read the final temperature.');
  });

  /* ================= t09 ================= */
  def('th-zeroth', () => {
    let s = '';
    [[60, 'A'], [240, 'C'], [420, 'B']].forEach(([x, n]) => { s += `<rect x="${x - (n === 'C' ? 50 : 40)}" y="30" width="${n === 'C' ? 100 : 80}" height="52" rx="8" class="w ${n === 'C' ? 'fo' : 'fm'}"/>` + T(x, n === 'C' ? 52 : 62, n, { c: 'lb', sz: 18 }); });
    s += T(240, 72, 'thermometer', { sz: 11, c: 'vl' });
    s += AR(104, 56, 186, 56, '', true) + AR(376, 56, 294, 56, '', true) + T(145, 46, 'T equal', { sz: 11, c: 'vl' }) + T(335, 46, 'T equal', { sz: 11, c: 'vl' });
    s += P('M60 90C60 150 420 150 420 90', 's-o', 'marker-end="url(#ao)" marker-start="url(#ao)"') + T(240, 148, 'so A and B are in thermal equilibrium too', { c: 'lb', sz: 13 });
    return svg(480, 168, s, 'Zeroth law: if A and B each match a third body C, they match each other, which is why a thermometer works.');
  });
  def('th-first-law', () => {
    let s = `<path d="M180 70V172H300V70" class="w"/><rect x="181" y="92" width="118" height="80" class="w fo" style="stroke:none"/><rect x="181" y="82" width="118" height="10" rx="2" class="w fm"/>` + L(240, 82, 240, 56) + AR(240, 52, 240, 16, 'o');
    s += AR(66, 150, 176, 150, 'r') + T(118, 138, 'Q = +500 J', { c: 'hc', sz: 12 }) + T(118, 168, 'heat added', { sz: 11, c: 'vl' });
    s += T(252, 28, 'W = 200 J', { a: 'start', c: 'oc', sz: 12 }) + T(252, 43, 'work by gas', { a: 'start', sz: 11, c: 'vl' });
    s += T(240, 130, 'ΔU = +300 J', { c: 'lb', sz: 13 }) + T(240, 149, 'T rises', { sz: 11, c: 'vl' });
    s += T(320, 96, 'ΔU = Q − W', { a: 'start', c: 'lb', sz: 15 }) + T(320, 116, 'Q: heat added to system', { a: 'start', sz: 11 }) + T(320, 132, 'W: work done by system', { a: 'start', sz: 11 }) + T(320, 152, '500 − 200 = +300 J', { a: 'start', sz: 12, c: 'lb' });
    s += T(240, 204, 'compressed: W = −150 J, Q = −100 J → ΔU = −100 − (−150) = +50 J', { sz: 12, c: 'vl' });
    return svg(480, 216, s, 'First law: the energy added as heat minus the work the gas does on its surroundings is the change in internal energy.');
  });
  def('th-engine-2nd', () => {
    let s = `<rect x="160" y="10" width="160" height="40" rx="6" class="w fr"/><rect x="160" y="196" width="160" height="40" rx="6" class="w fb"/>` + T(240, 36, 'hot reservoir T_h', { c: 'lb', sz: 12 }) + T(240, 222, 'cold reservoir T_c', { c: 'lb', sz: 12 });
    s += `<circle cx="240" cy="123" r="34" class="w fo"/>` + T(240, 128, 'engine', { c: 'lb', sz: 13 });
    s += AR(240, 52, 240, 86, 'r') + T(252, 72, 'Q_h', { a: 'start', c: 'hc' }) + AR(240, 160, 240, 194, 'b') + T(252, 182, 'Q_c', { a: 'start', c: 'cc' }) + AR(276, 123, 350, 123, 'o') + T(356, 120, 'W = Q_h − Q_c', { a: 'start', c: 'lb', sz: 12 });
    s += T(146, 104, 'Kelvin–Planck:', { a: 'end', c: 'lb', sz: 12 }) + T(146, 120, 'some heat must go', { a: 'end', sz: 11, c: 'vl' }) + T(146, 134, 'to the cold side,', { a: 'end', sz: 11, c: 'vl' }) + T(146, 148, 'so Q_c > 0', { a: 'end', sz: 11, c: 'vl' });
    s += T(240, 258, 'Clausius: heat never flows from cold to hot by itself', { sz: 12, c: 'vl' });
    return svg(480, 270, s, 'Second law: a heat engine turns only part of Q_h into work and must dump the rest, Q_c, into a colder reservoir.');
  });
  def('th-four-laws', () => {
    const rows = [['0', 'Zeroth: temperature exists', 'same T as a third body ⇒ same T as each other'], ['1', 'First: you can’t win', 'ΔU = Q − W; energy is conserved'], ['2', 'Second: you can’t break even', 'ΔS(universe) ≥ 0; heat flows hot → cold; no 100 % engine'], ['3', 'Third: you can’t quit the game', '0 K is unreachable; S → 0 for a perfect crystal']];
    let s = ''; rows.forEach(([n, a, b], i) => { const y = 8 + i * 58; s += `<rect x="12" y="${y}" width="456" height="48" rx="8" class="w fm"/><circle cx="42" cy="${y + 24}" r="16" class="w fo o"/>` + T(42, y + 30, n, { c: 'lb', sz: 17 }) + T(74, y + 21, a, { a: 'start', c: 'lb', sz: 14 }) + T(74, y + 38, b, { a: 'start', sz: 12, c: 'vl' }); });
    return svg(480, 246, s, 'The four laws in one line each.');
  });

  /* ================= t10 ================= */
  def('th-system-types', () => {
    let s = T(150, 16, 'matter', { c: 'cc', sz: 12 }) + T(330, 16, 'energy (heat, work)', { c: 'hc', sz: 12 });
    [[80, 'Open', ['boiling pot,', 'turbine'], 'M E'], [240, 'Closed', ['sealed can on a stove,', 'piston-cylinder'], 'E'], [400, 'Isolated', ['ideal thermos,', 'the universe'], '']].forEach(([x, n, ex, fl]) => {
      s += `<rect x="${x - 38}" y="44" width="76" height="66" rx="6" class="w ${n === 'Isolated' ? 'fm' : 'fo'}" ${n === 'Open' ? DASH : ''} ${n === 'Isolated' ? 'style="stroke-width:5"' : ''}/>`;
      if (fl.includes('M')) s += AR(x - 74, 62, x - 42, 62, 'b') + AR(x + 42, 62, x + 74, 62, 'b');
      if (fl.includes('E')) s += AR(x - 74, 94, x - 42, 94, 'r') + AR(x + 42, 94, x + 74, 94, 'r');
      s += T(x, 76, n === 'Isolated' ? '✕' : 'system', { sz: 11, c: 'vl' });
      s += T(x, 138, n, { c: 'lb', sz: 14 }) + T(x, 156, ex[0], { sz: 11, c: 'vl' }) + T(x, 170, ex[1], { sz: 11, c: 'vl' });
    });
    s = s.replace(/<text[^>]*>✕<\/text>/, T(400, 82, 'nothing', { sz: 11, c: 'vl' }) + T(400, 96, 'crosses', { sz: 11, c: 'vl' }));
    return svg(480, 184, s, 'Open systems exchange matter and energy, closed systems only energy, isolated systems neither.');
  });
  def('th-path-fn', () => DG.graph({
    w: 480, h: 280, x: [0, 4], y: [0, 4], xl: 'volume V', yl: 'pressure P', xt: [[1, 'V₁'], [3, 'V₂']], yt: [[1, 'P_low'], [3, 'P_high']],
    draw: (sx, sy) => {
      let s = `<polyline points="${f(sx(1))},${f(sy(3))} ${f(sx(1))},${f(sy(1))} ${f(sx(3))},${f(sy(1))}" class="w b thick"/><polyline points="${f(sx(1))},${f(sy(3))} ${f(sx(3))},${f(sy(3))} ${f(sx(3))},${f(sy(1))}" class="w hot thick"/><line x1="${f(sx(1))}" y1="${f(sy(3))}" x2="${f(sx(3))}" y2="${f(sy(1))}" class="w o thick"/>`;
      s += dot(sx(1), sy(3), 5) + dot(sx(3), sy(1), 5) + T(sx(1) - 10, sy(3) - 8, 'A', { a: 'end', c: 'lb', sz: 14 }) + T(sx(3) + 10, sy(1) + 18, 'B', { a: 'start', c: 'lb', sz: 14 });
      s += T(sx(1.5), sy(1) + 18 + 0, 'W = P_low ΔV', { a: 'start', sz: 12, c: 'cc' }) + T(sx(3.12), sy(2), 'W = P_high ΔV', { a: 'start', sz: 12, c: 'hc' }).replace('sx', '');
      s += T(sx(1.9), sy(2.35), 'in between', { a: 'start', sz: 11, c: 'vl' }) + T(sx(3.12), sy(3), 'same ΔU for all paths', { a: 'start', sz: 11, c: 'lb' });
      return s;
    }, cap: 'A and B fix P, V, T and U (state functions), but the work, and so the heat, depends on the path taken: Q and W are path functions.'
  }));
  def('th-pv-processes', () => DG.graph({
    w: 480, h: 280, x: [0, 3], y: [0, 2.9], xl: 'volume V / V₁', yl: 'pressure P / P₁', xt: [0, 1, 2, 3], yt: [0, 1, 2],
    draw: (sx, sy) => {
      let s = DG.curve(v => 1 / v, sx, sy, 0.42, 2.6, 60, 'o') + DG.curve(v => Math.pow(v, -1.4), sx, sy, 0.5, 2.6, 60, 'cold') + `<line x1="${f(sx(0.42))}" y1="${f(sy(1))}" x2="${f(sx(2.6))}" y2="${f(sy(1))}" class="w grn thick"/><line x1="${f(sx(1))}" y1="${f(sy(0.3))}" x2="${f(sx(1))}" y2="${f(sy(2.4))}" class="w hot thick"/>`;
      s += dot(sx(1), sy(1), 5) + T(sx(1) + 9, sy(1) - 8, 'A', { a: 'start', c: 'lb' });
      s += T(sx(2.64), sy(1) + 4, 'isobar', { a: 'start', sz: 11, c: 'lb' }) + T(sx(2.64), sy(0.385) - 4, 'isotherm', { a: 'start', sz: 11, c: 'lb' }) + T(sx(2.64), sy(0.262) + 12, 'adiabat', { a: 'start', sz: 11, c: 'lb' }) + T(sx(1), sy(2.4) - 8, 'isochore', { sz: 11, c: 'lb' });
      return s;
    }, cap: 'From one state: isobar P = const, isochore V = const, isotherm PV = const, adiabat PV^γ = const (steeper, since γ > 1 and the expanding gas also cools).'
  }));
  def('th-pv-work', () => DG.graph({
    w: 480, h: 290, x: [0, 25], y: [0, 300], xl: 'volume V (L)', yl: 'pressure P (kPa)', xt: [0, 5, 10, 15, 20, 25], yt: [0, 100, 200, 300],
    draw: (sx, sy) => {
      const iso = v => 2494.2 / v, ad = v => 249.42 * Math.pow(10 / v, 1.4);
      let pts = []; for (let i = 0; i <= 50; i++) { const v = 10 + i * 0.2; pts.push(f(sx(v)) + ',' + f(sy(iso(v)))); }
      let s = `<polygon points="${f(sx(10))},${f(sy(0))} ${pts.join(' ')} ${f(sx(20))},${f(sy(0))}" class="w fo" style="stroke:none"/>`;
      s += DG.curve(iso, sx, sy, 5, 25, 80, 'o') + DG.curve(ad, sx, sy, 10, 20, 50, 'cold');
      s += dot(sx(10), sy(iso(10)), 4.5) + dot(sx(20), sy(iso(20)), 4.5) + dot(sx(20), sy(ad(20)), 4.5);
      s += T(sx(10) - 8, sy(iso(10)) - 6, '1: 249 kPa', { a: 'end', sz: 12, c: 'lb' }) + T(sx(20) + 4, sy(iso(20)) - 10, '2: 125 kPa', { a: 'start', sz: 12, c: 'lb' });
      s += T(sx(15), sy(45), 'W = area = 1729 J', { c: 'lb', sz: 13 }) + T(sx(20.6), sy(ad(20)) + 14, 'adiabatic: less work', { a: 'start', sz: 11, c: 'cc' }) + T(sx(24.8), sy(190), 'isothermal', { a: 'end', sz: 11, c: 'oc' }) + T(sx(24.8), sy(174), '300 K', { a: 'end', sz: 11, c: 'oc' });
      return s;
    }, cap: 'Work is the area under the curve: 1.00 mol at 300 K expanding isothermally from 10 L to 20 L does W = nRT ln 2 = 1729 J (= Q); an adiabat between the same volumes does less.'
  }));

  /* ================= t11 ================= */
  def('th-gaslaws3', () => {
    const W = 140, H = 110; let s = '';
    const panels = [[16, 'Boyle', 'P ∝ 1/V', 'T constant', 'V', 'P', u => 0.3 / u, 0.3], [170, 'Charles', 'V ∝ T', 'P constant', 'T', 'V', u => u, 0], [324, 'Gay-Lussac', 'P ∝ T', 'V constant', 'T', 'P', u => u, 0]];
    panels.forEach(([x, nm, law, cst, xl, yl, fn, u0]) => {
      const ox = x + 26, oy = 176, X = u => ox + u * 100, Y = v => oy - v * 110;
      s += T(x + 70, 22, nm, { c: 'lb', sz: 14 }) + T(x + 70, 40, law, { sz: 12, c: 'oc' }) + `<path class="w ax" d="M${ox} 56V${oy}H${ox + 112}"/>` + T(ox + 112, oy + 16, xl, { c: 'lb', sz: 12 }) + T(ox - 10, 60, yl, { c: 'lb', sz: 12, a: 'end' });
      let pts = []; const a = nm === 'Boyle' ? 0.3 : 0; for (let i = 0; i <= 60; i++) { const u = (nm === 'Boyle' ? 0.3 : 0) + (1 - (nm === 'Boyle' ? 0.3 : 0)) * i / 60; pts.push(f(X(u)) + ',' + f(Y(fn(u)))); }
      s += `<polyline points="${pts.join(' ')}" class="w o thick"/>`;
      const ua = nm === 'Boyle' ? 0.45 : 0.45, ub = nm === 'Boyle' ? 0.8 : 0.85;
      s += dot(X(ua), Y(fn(ua)), 4) + dot(X(ub), Y(fn(ub)), 4);
      if (nm !== 'Boyle') s += dot(ox, oy, 4) + T(ox + 4, oy + 16, '0 K', { a: 'start', sz: 11, c: 'vl' });
      s += T(x + 70, oy + 38, cst, { sz: 12, c: 'vl' });
    });
    s += T(240, 244, 'combined: PV = nRT      (T in kelvin, P absolute)', { c: 'lb', sz: 14 });
    return svg(480, 256, s, 'Each empirical gas law is one slice of PV = nRT: hold one variable fixed and the other two make a hyperbola or a line through absolute zero.');
  });
  def('th-mb', () => {
    const kB = 1.380649e-23, NA = 6.02214076e23, Tk = 300;
    const fmb = (M, v) => { const m = M / NA; return 4 * Math.PI * Math.pow(m / (2 * Math.PI * kB * Tk), 1.5) * v * v * Math.exp(-m * v * v / (2 * kB * Tk)); };
    const M2 = 0.028, MH = 0.002016, pk = fmb(M2, Math.sqrt(2 * kB * Tk / (M2 / NA)));
    return DG.graph({
      w: 480, h: 280, x: [0, 4000], y: [0, pk * 1.15], xl: 'molecular speed v (m/s)', yl: 'fraction of molecules per (m/s)', xt: [0, 1000, 2000, 3000, 4000], yt: [],
      draw: (sx, sy) => {
        let s = DG.curve(v => fmb(M2, v), sx, sy, 0, 4000, 160, 'o') + DG.curve(v => fmb(MH, v), sx, sy, 0, 4000, 160, 'cold');
        [422, 476, 517].forEach(v => { s += `<line x1="${f(sx(v))}" y1="${f(sy(0))}" x2="${f(sx(v))}" y2="${f(sy(pk * 1.06))}" class="w" style="stroke-width:1" ${DASH}/>`; });
        s += `<line x1="${f(sx(1934))}" y1="${f(sy(0))}" x2="${f(sx(1934))}" y2="${f(sy(pk * 0.5))}" class="w b" ${DASH}/>`;
        s += `<line x1="${f(sx(800))}" y1="${f(sy(pk * 1.02)) - 4}" x2="${f(sx(800)) + 20}" y2="${f(sy(pk * 1.02)) - 4}" class="w o thick"/>` + T(sx(800) + 26, sy(pk * 1.02), 'N₂, 300 K', { a: 'start', sz: 12, c: 'lb' }) + T(sx(800) + 26, sy(pk * 0.92), 'v_p 422 < ⟨v⟩ 476 < v_rms 517 m/s', { a: 'start', sz: 11, c: 'vl' });
        s += `<line x1="${f(sx(2050))}" y1="${f(sy(pk * 0.5)) - 4}" x2="${f(sx(2050)) + 20}" y2="${f(sy(pk * 0.5)) - 4}" class="w cold thick"/>` + T(sx(2050) + 26, sy(pk * 0.5), 'H₂, 300 K', { a: 'start', sz: 12, c: 'lb' }) + T(sx(2050) + 26, sy(pk * 0.41), 'v_rms 1934 m/s', { a: 'start', sz: 11, c: 'vl' });
        return s;
      }, cap: 'Maxwell–Boltzmann speeds at 300 K: same mean kinetic energy, so light H₂ molecules are far faster (v_rms 1934 m/s) than N₂ (517 m/s), and the ratio v_p : ⟨v⟩ : v_rms is 1 : 1.128 : 1.225.'
    });
  });
  def('th-kinetic-box', () => {
    let s = `<rect x="20" y="30" width="200" height="160" rx="4" class="w fm"/>`;
    const mols = [[50, 60, 20, 10], [100, 50, -12, 16], [160, 70, 18, -12], [70, 120, -16, -10], [130, 110, 14, 14], [185, 150, -18, 6], [60, 165, 12, -14], [110, 165, -10, -16]];
    mols.forEach(([x, y, dx, dy]) => { s += `<circle cx="${x}" cy="${y}" r="6" class="w fo"/>` + AR(x, y, x + dx, y + dy, 'o'); });
    s += AR(200, 100, 222, 100, 'r').replace('222', '222') + T(120, 210, 'molecules bounce off the wall: pressure', { sz: 11, c: 'vl' });
    s = s.replace(/<line[^>]*x1="200" y1="100"[^>]*\/>/, '');
    const tx = 248; ['Random, elastic motion', 'Pressure = wall collisions', '⟨KE⟩ = (3/2) k_B T', '= 6.21×10⁻²¹ J at 300 K', 'same ⟨KE⟩ for every gas', 'v_rms = √(3RT/M)', 'N₂ 517 m/s     H₂ 1934 m/s'].forEach((t, i) => { s += T(tx, 50 + i * 24, t, { a: 'start', sz: 13, c: i === 2 || i === 5 ? 'lb' : '' }); });
    return svg(480, 224, s, 'Kinetic theory: temperature measures mean molecular kinetic energy, independent of the molecule’s mass; lighter molecules just move faster.');
  });

  /* ================= t12 ================= */
  def('th-entropy-flow', () => {
    let s = `<rect x="30" y="40" width="120" height="60" rx="8" class="w fr"/><rect x="330" y="40" width="120" height="60" rx="8" class="w fb"/>` + T(90, 66, 'hot reservoir', { c: 'lb', sz: 12 }) + T(90, 86, 'T_h = 400 K', { c: 'hc', sz: 13 }) + T(390, 66, 'cold reservoir', { c: 'lb', sz: 12 }) + T(390, 86, 'T_c = 300 K', { c: 'cc', sz: 13 });
    s += AR(154, 70, 326, 70, 'r') + T(240, 58, 'Q = 1000 J', { c: 'lb' });
    s += T(90, 124, 'ΔS = −1000 / 400', { sz: 12 }) + T(90, 142, '= −2.50 J/K', { c: 'cc', sz: 13 }) + T(390, 124, 'ΔS = +1000 / 300', { sz: 12 }) + T(390, 142, '= +3.33 J/K', { c: 'hc', sz: 13 });
    s += T(240, 184, 'ΔS_universe = −2.50 + 3.33 = +0.83 J/K > 0', { c: 'lb', sz: 14 }) + T(240, 204, 'spontaneous: the flow the other way would give ΔS < 0', { sz: 12, c: 'vl' });
    return svg(480, 214, s, 'Heat flowing hot to cold removes less entropy from the hot side than it adds to the cold side, so the universe’s entropy rises.');
  });
  def('th-entropy-s0', () => {
    const rows = [['diamond', 2.4, 'fb b', '2.4'], ['graphite', 5.7, 'fb b', '5.7'], ['ice', 41, 'fb b', '≈ 41'], ['liquid water', 69.9, 'fo o', '69.9'], ['steam', 188.8, 'fr', '188.8']];
    let s = T(240, 14, 'standard molar entropy S° at 298 K (J/mol·K)', { c: 'vl', sz: 12 }) + hbars(rows, 110, 26, 30, 20, 1.75, 102, 300);
    [0, 50, 100, 150, 200].forEach(v => { s += `<line x1="${110 + v * 1.75}" y1="22" x2="${110 + v * 1.75}" y2="${26 + rows.length * 30}" class="gr"/>` + T(110 + v * 1.75, 26 + rows.length * 30 + 14, String(v), { c: 'tk' }); });
    s += T(240, 224, 'solid < liquid ≪ gas: more freedom, more microstates', { c: 'lb', sz: 13 });
    return svg(480, 236, s, 'Entropy rises with disorder and freedom: rigid crystals have the least, water vapour the most.');
  });
  def('th-microstates', () => {
    const Ws = [1, 4, 6, 4, 1]; let s = T(240, 16, '4 molecules, left or right half of a box', { c: 'vl', sz: 12 });
    Ws.forEach((w, i) => {
      const x = 60 + i * 90, nl = 4 - i, bh = w * 14, by = 124 - bh;
      s += `<rect x="${x - 26}" y="${by}" width="52" height="${bh}" rx="3" class="w fo o"/>` + T(x, by - 6, 'W = ' + w, { c: 'lb', sz: 12 });
      s += `<rect x="${x - 34}" y="134" width="68" height="36" rx="3" class="w fm"/>` + L(x, 134, x, 170);
      for (let j = 0; j < 4; j++) { const left = j < nl, k = left ? j : j - nl, cx = left ? x - 25 + (k % 2) * 14 : x + 11 + (k % 2) * 14, cy = 146 + Math.floor(k / 2) * 14; s += `<circle cx="${cx}" cy="${cy}" r="4.5" class="dot"/>`; }
      s += T(x, 188, 'S = k ln ' + w, { sz: 11, c: 'vl' }) + T(x, 204, ['1/16', '4/16', '6/16', '4/16', '1/16'][i], { sz: 11, c: 'vl' });
    });
    s += T(240, 232, 'W = 2⁴ = 16 arrangements in all;  S = k_B ln W', { c: 'lb', sz: 13 }) + T(240, 250, 'mixed is most likely; all on one side is 1 in 16 (N molecules: 1 in 2ᴺ)', { sz: 12, c: 'vl' });
    return svg(480, 262, s, 'Counting microstates: the evenly mixed state can occur in 6 ways, the ordered ones in 1, so mixing is what happens.');
  });
})();
