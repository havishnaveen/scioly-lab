/* ===== circuit diagrams, part 3: motors & solving circuits (c29 - c36) ===== */
(function () {
  const { T, AR, P, DOT, WIRE, comp, GND, loop } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;

  def('m-equiv', () => svg(480, 240,
    loop(80, 60, 400, 170, { t: [['R', 'R_a', 'armature'], ['V', 'E = kω', 'back-emf', { side: 'u' }]], l: [['V', 'V', 'supply', { flip: true, side: 'l' }]] }) +
    AR(140, 22, 200, 22, 'o') + T(170, 14, 'I', { c: 'lb' }) +
    T(240, 122, 'V = I R_a + E', { c: 'lb' }) + T(240, 146, 'I = (V − E) / R_a', { c: 'vl', sz: 12 }) +
    T(240, 224, 'The spinning armature generates a voltage E that opposes the supply.', { c: 'vl', sz: 12 }),
    'DC motor equivalent circuit: supply V, armature resistance R_a, and a back-emf E proportional to speed.'));

  def('m-speedtorque', () => DG.graph({
    w: 480, h: 270, x: [0, 10], y: [0, 10], xt: [[0, '0'], [5, 'τ_stall/2'], [10, 'τ_stall']], yt: [[0, '0'], [5, ''], [10, '']], xl: 'torque τ (and current I)', yl: 'speed ω',
    draw: (sx, sy) => `<line x1="${f(sx(0))}" y1="${f(sy(9))}" x2="${f(sx(10))}" y2="${f(sy(0))}" class="w o thick"/>` + T(sx(1), sy(9.6), 'no-load speed ω₀ = V / k', { c: 'oc', a: 'start', sz: 12 }) + T(sx(10), sy(0) - 10, 'stall', { c: 'lb', a: 'end' }) +
      DOT(sx(5), sy(4.5)) + T(sx(5.3), sy(5.4), 'half speed, half torque:', { c: 'vl', a: 'start', sz: 11 }) + T(sx(5.3), sy(4.6), 'maximum mechanical power', { c: 'vl', a: 'start', sz: 11 }),
    cap: 'Speed falls in a straight line as torque (current) rises. Torque is zero at no load and maximum at stall.'
  }));

  def('m-power', () => DG.graph({
    w: 480, h: 270, x: [0, 10], y: [0, 10], xt: [[0, '0'], [5, 'I_stall/2'], [10, 'I_stall']], yt: [], xl: 'current I', yl: 'power / efficiency',
    draw: (sx, sy) => DG.curve(x => 10 - (x - 5) * (x - 5) * 0.4, sx, sy, 0, 10, 60, 'o') +
      DG.curve(x => 9 * (1 - x / 10), sx, sy, 0, 10, 40, 'b') +
      T(sx(5), sy(10.8), 'P_mech peak', { c: 'oc', sz: 12 }) + T(sx(8.6), sy(2.6), 'efficiency', { c: 'lb', sz: 12 }) + T(sx(1.2), sy(8.6), 'η highest at low I', { c: 'lb', a: 'start', sz: 12 }),
    cap: 'P_mech = E·I peaks at half the stall current, but efficiency (P_mech / P_in = E / V) keeps falling as current rises.'
  }));

  def('m-hbridge', () => svg(480, 250,
    `<line x1="120" y1="30" x2="360" y2="30" class="w"/><line x1="120" y1="220" x2="360" y2="220" class="w"/>` +
    T(240, 20, '+V', { c: 'lb' }) + GND(240, 220).replace(/<path/, '<path') +
    comp('SW', 120, 30, 120, 100, '', '', {}).replace(/./, m => m) + T(96, 80, 'S₁', { c: 'lb' }) + `<line x1="120" y1="100" x2="120" y2="130" class="w"/>` + comp('SW', 120, 130, 120, 200, '', '', {}) + T(96, 180, 'S₃', { c: 'lb' }) +
    comp('SW', 360, 30, 360, 100, '', '', {}) + T(388, 80, 'S₂', { c: 'lb' }) + `<line x1="360" y1="100" x2="360" y2="130" class="w"/>` + comp('SW', 360, 130, 360, 200, '', '', {}) + T(388, 180, 'S₄', { c: 'lb' }) +
    `<line x1="120" y1="115" x2="205" y2="115" class="w"/><line x1="275" y1="115" x2="360" y2="115" class="w"/><circle cx="240" cy="115" r="30" class="w fm"/>` + T(240, 122, 'M', { c: 'lb', sz: 20 }) + DOT(120, 115) + DOT(360, 115) +
    T(240, 166, 'S₁ + S₄ closed: forward', { c: 'vl', sz: 12 }) + T(240, 183, 'S₂ + S₃ closed: reverse', { c: 'vl', sz: 12 }) + T(240, 210, 'never S₁ + S₃ together (short)', { c: 'oc', sz: 11 }),
    'H-bridge: four switches let one supply drive a motor in either direction.'));

  def('m-pwm', () => DG.graph({
    w: 480, h: 240, x: [0, 12], y: [0, 7], xt: [[0, '0'], [4, 'T'], [8, '2T'], [12, '3T']], yt: [[0, '0'], [5, 'V']], xl: 'time', yl: 'motor voltage',
    draw: (sx, sy) => { let pth = ''; for (let k = 0; k < 3; k++) { const a = k * 4, b = a + 2.4; pth += `M${f(sx(a))} ${f(sy(0))}V${f(sy(5))}H${f(sx(b))}V${f(sy(0))}H${f(sx(a + 4))}`; } return `<path d="${pth}" class="w b thick"/>` + `<line x1="${f(sx(0))}" y1="${f(sy(3))}" x2="${f(sx(12))}" y2="${f(sy(3))}" class="w o" stroke-dasharray="6 4"/>` + T(sx(12), sy(3.6), 'average = 0.6 V', { c: 'oc', a: 'end', sz: 12 }) + T(sx(1.2), sy(6.1), 'on 60%: duty cycle D = 0.6', { c: 'vl', sz: 11.5 }); },
    cap: 'PWM: switch the supply on and off quickly; the motor responds to the average voltage, V_avg = D × V.'
  }));

  def('m-types', () => {
    const box = (x, y, title, lines, body) => `<rect x="${x}" y="${y}" width="212" height="104" rx="10" class="w fm"/>` + T(x + 106, y + 18, title, { c: 'lb', sz: 13 }) + body + T(x + 106, y + 96, lines, { c: 'vl', sz: 10.5 });
    const arm = (x, y) => `<circle cx="${x}" cy="${y}" r="15" class="w"/>` + T(x, y + 5, 'M', { c: 'lb' });
    const coil = (x, y, w) => `<path class="w" d="M${x} ${y}q${w / 8} -12 ${w / 4} 0q${w / 8} -12 ${w / 4} 0q${w / 8} -12 ${w / 4} 0q${w / 8} -12 ${w / 4} 0"/>`;
    return svg(480, 260,
      box(10, 10, 'Series', 'high starting torque; races if unloaded', `<line x1="30" y1="60" x2="60" y2="60" class="w"/>` + coil(60, 60, 60) + `<line x1="120" y1="60" x2="138" y2="60" class="w"/>` + arm(153, 60) + `<line x1="168" y1="60" x2="190" y2="60" class="w"/>`) +
      box(258, 10, 'Shunt', 'steady speed under load', `<line x1="278" y1="60" x2="300" y2="60" class="w"/>` + arm(400, 70) + coil(310, 50, 60).replace('q', 'q') + `<line x1="368" y1="50" x2="400" y2="50" class="w"/><line x1="400" y1="50" x2="400" y2="55" class="w"/>`) +
      box(10, 130, 'Compound', 'series + shunt: a compromise', `<line x1="30" y1="178" x2="45" y2="178" class="w"/>` + coil(45, 178, 44) + arm(128, 178) + `<path class="w" d="M89 178H113M143 178H170"/><path class="w" d="M60 160h80" stroke-dasharray="4 3"/>`) +
      box(258, 130, 'Permanent magnet', 'small, simple; speed ∝ voltage', `<rect x="290" y="160" width="26" height="36" class="w fr"/><rect x="394" y="160" width="26" height="36" class="w fb"/>` + T(303, 183, 'N', { c: 'lb' }) + T(407, 183, 'S', { c: 'lb' }) + arm(355, 178)),
      'Four DC-motor families differ in how the field is produced and connected to the armature.');
  });

  def('m-gears', () => svg(480, 210,
    `<circle cx="140" cy="95" r="40" class="w fo"/><circle cx="140" cy="95" r="4" class="dot"/>` + T(120, 158, 'motor gear: 10 teeth', { c: 'lb', sz: 12 }) +
    `<circle cx="250" cy="95" r="70" class="w fb"/><circle cx="250" cy="95" r="4" class="dot"/>` + T(250, 192, 'output gear: 70 teeth', { c: 'lb', sz: 12 }) +
    T(410, 70, 'ratio 7 : 1', { c: 'lb', sz: 14 }) + T(410, 92, 'output speed ÷ 7', { c: 'vl', sz: 12 }) + T(410, 110, 'output torque × 7', { c: 'vl', sz: 12 }) + T(410, 128, 'power unchanged', { c: 'vl', sz: 11 }),
    'A gear train trades speed for torque; ideal gears keep power the same.'));

  def('m-proton', () => svg(480, 250,
    [...Array(6)].map((_, i) => [...Array(4)].map((_, j) => T(60 + i * 72, 40 + j * 62, '×', { c: 'vl', sz: 16 })).join('')).join('') +
    `<circle cx="240" cy="125" r="70" class="w o thick" fill="none"/><circle cx="310" cy="125" r="7" class="w fr"/>` + T(310, 129, '+', { c: 'lb', sz: 11 }) +
    AR(304, 125, 304, 86, 'b') + T(330, 95, 'v', { c: 'lb', a: 'start' }) + AR(302, 130, 268, 130, 'r') + T(284, 148, 'F', { c: 'hc' }) + T(225, 129, 'r = mv / qB', { c: 'lb', sz: 12 }) +
    T(430, 236, 'B into the page', { c: 'vl', sz: 11.5, a: 'end' }),
    'A charge moving perpendicular to B travels in a circle: the magnetic force points to the center and does no work.'));

  def('sup', () => {
    const mini = (x, label, sub) => `<rect x="${x}" y="10" width="140" height="120" rx="8" class="w fm"/>` + T(x + 70, 28, label, { c: 'lb', sz: 12 }) + T(x + 70, 122, sub, { c: 'vl', sz: 10.5 });
    return svg(480, 200,
      mini(10, 'both sources', 'true answer') + T(158, 75, '=', { c: 'lb', sz: 22 }) +
      mini(172, 'V alone', 'current source open') + T(320, 75, '+', { c: 'lb', sz: 22 }) + mini(334, 'I alone', 'voltage source shorted') +
      `<text class="t" x="80" y="80" text-anchor="middle" style="font-weight:700">V, I</text><text class="t" x="242" y="80" text-anchor="middle" style="font-weight:700">V → wire</text>`.replace('V → wire', 'V on, I off') +
      `<text class="t" x="404" y="80" text-anchor="middle" style="font-weight:700">V off, I on</text>` +
      T(240, 170, 'Kill a voltage source = replace with a wire.  Kill a current source = remove it (open).', { c: 'vl', sz: 12 }) + T(240, 188, 'Add the partial answers with their signs.', { c: 'vl', sz: 12 }),
      'Superposition: solve with one independent source at a time, then add.');
  });

  def('solve-steps', () => svg(480, 230,
    [['1', 'Redraw, label nodes'], ['2', 'Pick unknowns'], ['3', 'Write KCL / KVL'], ['4', 'Solve'], ['5', 'Check power balance'], ['6', 'Units, signs, sanity']].map((t, i) => `<rect x="${20 + (i % 3) * 152}" y="${20 + Math.floor(i / 3) * 90}" width="140" height="70" rx="10" class="w ${i === 4 ? 'fo' : 'fm'}"/>` + T(90 + (i % 3) * 152, 48 + Math.floor(i / 3) * 90, 'Step ' + t[0], { c: 'vl', sz: 11 }) + T(90 + (i % 3) * 152, 68 + Math.floor(i / 3) * 90, t[1], { c: 'lb', sz: 11 })).join('') +
    T(240, 214, 'Power delivered by sources = power absorbed by resistors. It catches nearly every slip.', { c: 'vl', sz: 11.5 }),
    'The solving routine: the same six steps every time.'));

  /* ---- c22-c28 ---- */
  def('bb-layout', () => {
    let g = '';
    for (let r = 0; r < 5; r++) for (let c = 0; c < 10; c++) g += `<circle cx="${110 + c * 26}" cy="${84 + r * 18}" r="3" class="dot"/>`;
    for (let c = 0; c < 10; c++) for (let r = 0; r < 5; r++) g += '';
    let s = `<rect x="60" y="20" width="350" height="190" rx="10" class="w fm"/>`;
    s += `<line x1="76" y1="36" x2="394" y2="36" class="w hot"/><line x1="76" y1="52" x2="394" y2="52" class="w cold"/>` + T(50, 40, '+', { c: 'hc' }) + T(50, 56, '−', { c: 'cc' }) + T(240, 16, 'power rails run the long way', { c: 'vl', sz: 11 });
    s += `<line x1="76" y1="168" x2="394" y2="168" class="w hot"/><line x1="76" y1="184" x2="394" y2="184" class="w cold"/>`;
    for (let c = 0; c < 10; c++) s += `<line x1="${110 + c * 26}" y1="80" x2="${110 + c * 26}" y2="${84 + 4 * 18 + 4}" class="w o" stroke-opacity=".0"/>`;
    s += g + `<rect x="100" y="116" width="270" height="10" class="w" style="stroke-dasharray:0" fill="var(--panel)" stroke="none"/>`;
    s += [0, 1, 2, 3, 4].map(r => '').join('');
    for (let c = 0; c < 10; c++) s += `<path d="M${110 + c * 26} 78V${84 + 4 * 18 + 6}" class="w b" stroke-opacity=".25" style="stroke-width:10"/>`;
    s += T(240, 226, 'Holes in the same column (a–e) are joined; the centre gap separates the two halves.', { c: 'vl', sz: 11.5 });
    return svg(480, 240, s, 'Breadboard layout: columns of five are connected; power rails run along the edges.');
  });

  def('meter-hookup', () => svg(480, 250,
    loop(40, 70, 210, 170, { t: [['R', 'R', ''], ['A', '', '']], l: [['V', '', '', { flip: true, side: 'l' }]] }) + T(125, 30, 'Ammeter: in SERIES', { c: 'lb' }) + T(125, 200, 'cut the wire, insert the meter', { c: 'vl', sz: 11.5 }) +
    loop(270, 70, 440, 170, { t: [['R', 'R', '']], l: [['V', '', '', { flip: true, side: 'l' }]], r: [] }) + `<line x1="440" y1="70" x2="440" y2="98" class="w"/><circle cx="440" cy="120" r="16" class="w"/>` + T(440, 125, 'V', { c: 'lb' }) + `<line x1="440" y1="136" x2="440" y2="170" class="w"/>` + T(355, 30, 'Voltmeter: in PARALLEL', { c: 'lb' }) + T(355, 200, 'touch across the part', { c: 'vl', sz: 11.5 }) +
    T(240, 240, 'Ohmmeter: power OFF and the part isolated.', { c: 'oc', sz: 12 }),
    'How to connect meters: current in series, voltage in parallel.'));

  def('meter-load', () => svg(480, 250,
    loop(60, 60, 260, 170, { t: [['R', 'R₁ 10 kΩ', '']], r: [['R', 'R₂ 10 kΩ', '', { side: 'l' }]], l: [['V', '10 V', '', { flip: true, side: 'l' }]] }) +
    `<line x1="260" y1="115" x2="340" y2="115" class="w"/><circle cx="360" cy="115" r="18" class="w"/>` + T(360, 120, 'V', { c: 'lb' }) + `<line x1="360" y1="133" x2="360" y2="170" class="w"/><line x1="260" y1="170" x2="360" y2="170" class="w"/>` +
    T(360, 88, 'R_m = 10 kΩ', { c: 'vl', sz: 11.5 }) + T(240, 212, 'True V across R₂ = 5.00 V.  The meter puts 10 k in parallel: R₂ ‖ R_m = 5 k,', { c: 'lb', sz: 11.5 }) + T(240, 230, 'so it reads 10 × 5/(10+5) = 3.33 V.  A real meter changes what it measures.', { c: 'lb', sz: 11.5 }),
    'Meter loading: a voltmeter of finite resistance disturbs a high-resistance circuit.'));

  def('rl-curve', () => DG.graph({
    w: 480, h: 260, x: [0, 5.5], y: [0, 1.1], xt: [[0, '0'], [1, 'τ'], [2, '2τ'], [3, '3τ'], [4, '4τ'], [5, '5τ']], yt: [[0.632, '63%'], [1, '100%']], xl: 'time (τ = L / R)', yl: 'I / I_max',
    draw: (sx, sy) => DG.curve(x => 1 - Math.exp(-x), sx, sy, 0, 5.5, 80, 'o') + DG.curve(x => Math.exp(-x), sx, sy, 0, 5.5, 80, 'b') + DOT(sx(1), sy(0.632)) +
      T(sx(3.4), sy(0.86), 'current rises: 1 − e^(−t/τ)', { c: 'oc', a: 'start', sz: 12 }) + T(sx(2.0), sy(0.22), 'decays: e^(−t/τ)', { c: 'lb', a: 'start', sz: 12 }),
    cap: 'An inductor opposes changes in current: I cannot jump. At t = 0 it acts like an open circuit, at steady state like a wire.'
  }));

  def('fault-tree', () => svg(480, 250,
    `<rect x="150" y="14" width="180" height="40" rx="10" class="w fo"/>` + T(240, 38, 'Symptom observed', { c: 'lb' }) +
    `<path d="M210 54L110 100M270 54L370 100" class="w"/>` +
    `<rect x="30" y="100" width="170" height="60" rx="10" class="w fb"/>` + T(115, 124, 'No current (I = 0)', { c: 'lb', sz: 12 }) + T(115, 142, 'OPEN: break in the path', { c: 'vl', sz: 11 }) +
    `<rect x="280" y="100" width="170" height="60" rx="10" class="w fr"/>` + T(365, 124, 'Too much current', { c: 'lb', sz: 12 }) + T(365, 142, 'SHORT: path around a part', { c: 'vl', sz: 11 }) +
    T(115, 186, 'Open: the full supply voltage appears', { c: 'vl', sz: 11 }) + T(115, 202, 'across the break.', { c: 'vl', sz: 11 }) + T(365, 186, 'Short: ~0 V across the shorted part,', { c: 'vl', sz: 11 }) + T(365, 202, 'and the rest see more voltage.', { c: 'vl', sz: 11 }) +
    T(240, 238, 'Method: measure voltages along the loop; find where they stop making sense.', { c: 'lb', sz: 10.5 }),
    'Troubleshooting: classify the fault as open or short, then locate it with voltage readings.'));

  def('time-plan', () => {
    const seg = [['Skim & easy points', 0, 0.18, 'fm'], ['Calculation items', 0.18, 0.66, 'fb'], ['Hard puzzles', 0.66, 0.88, 'fo'], ['Check', 0.88, 1, 'fg']];
    let s = seg.map(([t, a, b, c]) => `<rect x="${30 + a * 420}" y="60" width="${(b - a) * 420}" height="50" class="w ${c}"/>` + T(30 + (a + b) / 2 * 420, 90, t.split(' ')[0], { c: 'lb', sz: 10 })).join('');
    s += T(240, 30, 'One pass through the test', { c: 'lb' }) + T(30, 130, 'start', { c: 'vl', a: 'start', sz: 11 }) + T(450, 130, 'time up', { c: 'vl', a: 'end', sz: 11 }) +
      T(240, 160, 'Answer sure points first; flag anything over ~90 seconds and come back.', { c: 'vl', sz: 12 }) + T(240, 180, 'Write units on every answer. Never leave a multiple-choice item blank.', { c: 'vl', sz: 12 });
    return svg(480, 200, s, 'A time plan: bank the sure points, then the calculations, then the puzzles, and keep a few minutes to check.');
  });
})();
