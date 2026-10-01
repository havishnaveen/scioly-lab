/* E2 figures: prefix qf-c2- */
(function () {
  const { T, L, AR, P, R, DOT, comp } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const X = (x, y) => T(x, y + 4, '×', { c: 'lb' });

  def('qf-c2-rail', () => {
    let s = L(60, 50, 430, 50) + L(60, 170, 430, 170);
    s += L(80, 50, 80, 88) + comp('R', 80, 88, 80, 132, 'R', '0.50 Ω', { side: 'l' }) + L(80, 132, 80, 170);
    s += DOT(80, 50) + DOT(80, 170);
    for (let x = 120; x <= 420; x += 40) for (const y of [74, 92, 128, 146]) s += X(x, y);
    s += L(300, 50, 300, 170, 'o thick');
    s += AR(318, 117, 398, 117, 'r') + T(358, 107, 'v = 5.0 m/s', { c: 'lb' });
    s += T(300, 40, 'rod, length L = 0.40 m', { c: 'lb' });
    s += T(260, 198, 'B = 0.30 T, uniform, into the page (×)', { c: 'lb' });
    return svg(480, 212, s, 'A rod slides on frictionless rails joined by a resistor. Rails and rod have negligible resistance.');
  });

  def('qf-c2-lenz', () => {
    let s = R(70, 85, 70, 40, 'w') + R(140, 85, 70, 40, 'w');
    s += T(105, 111, 'S', { c: 'lb' }) + T(175, 111, 'N', { c: 'lb' });
    s += AR(100, 70, 190, 70, 'r') + T(145, 60, 'moving toward ring', { c: 'lb' });
    s += `<ellipse cx="310" cy="105" rx="16" ry="56" class="w"/>`;
    s += T(310, 185, 'conducting ring', { c: 'lb' });
    s += T(105, 160, 'Observer stands on this side,', { c: 'lb' }) + T(105, 178, 'looking at the ring', { c: 'lb' });
    s += `<circle cx="36" cy="105" r="8" class="w"/><circle cx="33" cy="103" r="1.6" class="dot"/><circle cx="40" cy="103" r="1.6" class="dot"/>`;
    return svg(480, 200, s, 'A bar magnet moves toward a closed conducting ring, N pole first.');
  });

  def('qf-c2-line', () => {
    let s = '';
    const box = (x, w, l1, l2) => R(x, 60, w, 70, 'w') + T(x + w / 2, 92, l1, { c: 'lb' }) + (l2 ? T(x + w / 2, 110, l2, { c: 'vl' }) : '');
    s += box(8, 62, 'Plant', '') + T(39, 150, '500 kW', { c: 'vl' }) + T(39, 166, 'at 5.0 kV', { c: 'vl' });
    s += box(98, 70, 'Step-up', '1 : 10');
    s += box(290, 86, 'Step-down', 'ideal');
    s += box(406, 66, 'Load', '');
    s += L(70, 75, 98, 75) + L(70, 115, 98, 115);
    s += L(168, 75, 194, 75) + comp('R', 194, 75, 274, 75, 'R_line', '4.0 Ω total', { side: 'u' }) + L(274, 75, 290, 75);
    s += L(168, 115, 290, 115);
    s += L(376, 75, 406, 75) + L(376, 115, 406, 115);
    s += T(240, 186, 'line resistance 4.0 Ω is the total of both wires', { c: 'vl' });
    return svg(480, 200, s, 'Transmission system. The line resistance is shown as one lumped resistor.');
  });

  def('qf-c2-phi', () => {
    return DG.graph({ w: 440, h: 250, x: [0, 6], y: [-0.06, 0.1], xt: [0, 1, 2, 3, 4, 5, 6], yt: [[-0.04, '−0.04'], [0, '0'], [0.04, '0.04'], [0.08, '0.08']], xl: 't (s)', yl: 'Φ (Wb)',
      draw: (sx, sy) => `<polyline points="${[[0, 0], [2, 0.08], [4, 0.08], [5, -0.04], [6, -0.04]].map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ')}" class="w o thick" style="fill:none"/>`,
      cap: 'Flux through a 25-turn coil versus time.' });
  });

  def('qf-c2-selector', () => {
    let s = R(150, 38, 280, 8, 'w') + R(150, 172, 280, 8, 'w');
    s += T(290, 30, '+  plate at 600 V', { c: 'lb' }) + T(290, 204, '−  plate at 0 V', { c: 'lb' });
    for (let x = 180; x <= 400; x += 44) for (const y of [68, 88, 132, 152]) s += X(x, y);
    s += AR(30, 110, 450, 110, 'r') + T(70, 132, 'charged particle', { c: 'vl' });
    s += AR(450, 54, 450, 98, 'b') + T(466, 80, 'E', { c: 'lb' });
    s += AR(130, 46, 130, 172, 'b', true) + T(122, 84, 'd = 2.0 cm', { c: 'lb', a: 'end' });
    s += T(240, 226, 'B = 0.020 T into the page (×), uniform between the plates', { c: 'lb' });
    return svg(480, 238, s, 'Crossed uniform electric and magnetic fields between two parallel plates.');
  });

  def('qf-c2-speedtorque', () => {
    return DG.graph({ w: 440, h: 260, x: [0, 10], y: [0, 110], xt: [0, 2, 4, 6, 8, 10], yt: [0, 50, 100], xl: 'torque (arbitrary units)', yl: 'speed (% of 100)',
      draw: (sx, sy) => {
        const a = []; for (let x = 1.05; x <= 10; x += 0.15) { a.push(f(sx(x)) + ',' + f(sy(Math.min(108, 100 * 1.2 / (x + 0.2))))); }
        const b = [[0, 100], [10, 62]].map(p => f(sx(p[0])) + ',' + f(sy(p[1]))).join(' ');
        return `<polyline points="${a.join(' ')}" class="w o thick" style="fill:none"/><polyline points="${b}" class="w b thick" style="fill:none"/>` + T(sx(1.8), sy(75), 'A', { c: 'lb' }) + T(sx(7), sy(88), 'B', { c: 'lb' });
      }, cap: 'Speed versus torque for two different DC motors.' });
  });
})();
