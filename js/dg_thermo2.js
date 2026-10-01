/* ===== thermodynamics diagrams, part 2 (t13 - t23), id prefix tz- ===== */
(function () {
  const { T, L, AR, P, R, C, DOT } = DG.lib, def = DG.def, svg = DG.svg, f = DG.f;
  const ln = L;
  /* multi-line text, lines = array */
  const tl = (x, y, lines, o, lh) => lines.map((s, i) => T(x, y + i * (lh || 15), s, o)).join('');
  /* rounded box with centred multi-line text */
  const box = (x, y, w, h, lines, cls, o) => { o = o || {}; const n = lines.length, lh = o.lh || 15, y0 = y + h / 2 - (n - 1) * lh / 2 + 4; return R(x, y, w, h, cls || 'fm', o.r == null ? 8 : o.r) + tl(x + w / 2, y0, lines, { c: o.c == null ? 'lb' : o.c, sz: o.sz || 12 }, lh); };
  /* block arrows (axis-aligned): shaft width w, head 2w wide; dir from (x1,y1) to (x2,y2) */
  const barrow = (x1, y1, x2, y2, w, cls) => {
    const hw = w * 1.0 + 6, hl = Math.min(w + 8, 18); let pts;
    if (Math.abs(x1 - x2) < 0.01) { const d = y2 > y1 ? 1 : -1, yb = y2 - d * hl; pts = [[x1 - w / 2, y1], [x1 + w / 2, y1], [x1 + w / 2, yb], [x1 + hw, yb], [x1, y2], [x1 - hw, yb], [x1 - w / 2, yb]]; }
    else { const d = x2 > x1 ? 1 : -1, xb = x2 - d * hl; pts = [[x1, y1 - w / 2], [xb, y1 - w / 2], [xb, y1 - hw], [x2, y1], [xb, y1 + hw], [xb, y1 + w / 2], [x1, y1 + w / 2]]; }
    return `<polygon points="${pts.map(p => f(p[0]) + ',' + f(p[1])).join(' ')}" class="w ${cls}"/>`;
  };
  const dash = 'stroke-dasharray="5 4"';
  /* pie wedge */
  const wedge = (cx, cy, r, a0, a1, cls) => { const p = a => [f(cx + r * Math.sin(a)), f(cy - r * Math.cos(a))]; const [x0, y0] = p(a0), [x1, y1] = p(a1); return `<path d="M${cx} ${cy}L${x0} ${y0}A${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1} ${y1}Z" class="w ${cls}"/>`; };
  /* short arrow on a curve: fn(x), direction a->b */
  const carrow = (fn, a, b, sx, sy, c) => { const m = (a + b) / 2, d = (b - a) * 0.03; return AR(sx(m - d), sy(fn(m - d)), sx(m + d), sy(fn(m + d)), c); };
  const bk = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" style="fill:var(--bg);stroke:none"/>`;

  /* =============== t13 Enthalpy =============== */
  def('tz-enthalpy', () => {
    let s = '';
    const panel = (x0, hot) => {
      const yR = hot ? 70 : 150, yP = hot ? 150 : 70, col = hot ? 'hot' : 'cold';
      let o = `<path class="w ax" d="M${x0 + 12} 34V184"/>` + T(x0 + 12, 26, 'H', { c: 'lb' });
      o += ln(x0 + 40, yR, x0 + 100, yR, 'b') + ln(x0 + 130, yP, x0 + 190, yP, 'b');
      o += T(x0 + 70, yR - 8, 'reactants', { sz: 11.5 }) + T(x0 + 160, yP + (hot ? 16 : -8), 'products', { sz: 11.5 });
      o += ln(x0 + 100, yR, x0 + 130, yR, 'cold', dash) + ln(x0 + 100, yP, x0 + 130, yP, 'cold', dash);
      o += AR(x0 + 115, yR, x0 + 115, yP, hot ? 'r' : 'b');
      o += T(x0 + 124, (yR + yP) / 2 + 4, hot ? 'ΔH < 0' : 'ΔH > 0', { c: hot ? 'hc' : 'cc', a: 'start' });
      return o;
    };
    s += panel(14, true) + panel(254, false);
    s += T(115, 206, 'Exothermic: releases heat', { c: 'hc' }) + T(355, 206, 'Endothermic: absorbs heat', { c: 'cc' });
    s += tl(115, 224, ['combustion, freezing,', 'condensation, CaCl₂ dissolving'], { c: 'vl', sz: 11 }, 14);
    s += tl(355, 224, ['melting, evaporation, photosynthesis,', 'NH₄NO₃ dissolving (cold packs)'], { c: 'vl', sz: 11 }, 14);
    return svg(480, 262, s, 'At constant pressure ΔH = Q: exothermic reactions end at lower enthalpy (heat out), endothermic ones at higher enthalpy (heat in).');
  });

  def('tz-hess', () => {
    let s = '', y0 = 56, k = 0.22, Y = v => y0 - v * k;
    s += ln(30, Y(0), 140, Y(0), 'b') + T(85, Y(0) - 18, 'elements', { c: 'lb', sz: 12 }) + T(85, Y(0) - 5, 'ΔH_f° = 0', { c: 'vl', sz: 11 });
    s += ln(180, Y(-74.8), 290, Y(-74.8), 'b') + T(235, Y(-74.8) - 18, 'CH₄ + 2O₂', { c: 'lb', sz: 12 }) + T(235, Y(-74.8) - 5, '−74.8 kJ/mol', { c: 'vl', sz: 11 });
    s += ln(60, Y(-965.1), 290, Y(-965.1), 'b') + T(175, Y(-965.1) + 18, 'CO₂ + 2H₂O(l)', { c: 'lb', sz: 12 }) + T(175, Y(-965.1) + 33, '−393.5 + 2(−285.8) = −965.1 kJ/mol', { c: 'vl', sz: 11 });
    s += AR(80, Y(0), 80, Y(-965.1) - 1, 'b');
    s += tl(92, 150, ['Σ ΔH_f°(products)', '= −965.1'], { a: 'start', sz: 11, c: 'vl' }, 14);
    s += AR(260, Y(-74.8), 260, Y(-965.1) - 1, 'r');
    s += tl(270, 130, ['ΔH_rxn', '= −965.1 − (−74.8)', '= −890.3 kJ/mol'], { a: 'start', sz: 12, c: 'hc' }, 16);
    s += tl(380, 70, ['Hess’s law:', 'ΔH is a state', 'function, so any', 'path gives the', 'same total.'], { sz: 11.5, c: 'vl' }, 15);
    s += AR(120, Y(0), 185, Y(-74.8) - 2, 'g');
    return svg(480, 300, s, 'Energy ladder for CH₄ + 2O₂ → CO₂ + 2H₂O(l): ΔH_rxn = Σ ΔH_f°(products) − Σ ΔH_f°(reactants) = −890.3 kJ/mol.');
  });

  def('tz-gibbs-t', () => DG.graph({
    w: 480, h: 290, x: [250, 300], y: [-800, 800], xt: [250, 260, 270, 280, 290, 300], yt: [[-800, '−800'], [-400, '−400'], [0, '0'], [400, '400'], [800, '800']],
    xl: 'T (K)', yl: 'ΔG (J/mol)', mb: 48,
    draw: (sx, sy) => {
      let s = ln(sx(250), sy(0), sx(300), sy(0), '', 'style="stroke-width:1.5"');
      s += DG.curve(t => 6010 - 22 * t, sx, sy, 250, 300, 2, 'o');
      s += DOT(sx(273.2), sy(0), 'o');
      s += T(sx(273.2), sy(0) - 14, '273 K = 0 °C', { c: 'lb', sz: 11.5 });
      s += tl(sx(262), sy(520) - 22, ['ΔG > 0', 'freezing wins'], { c: 'cc', sz: 11.5 }, 14);
      s += tl(sx(288), sy(-480) + 2, ['ΔG < 0', 'melting is spontaneous'], { c: 'hc', sz: 11.5 }, 14);
      s += T(sx(300) - 4, sy(800) + 10, 'ΔG = ΔH − TΔS', { a: 'end', c: 'lb' });
      s += T(sx(300) - 4, sy(800) + 26, 'ΔH = +6010 J/mol, ΔS = +22.0 J/mol·K', { a: 'end', c: 'vl', sz: 11 });
      return s;
    },
    cap: 'Ice melting: ΔG = 6010 − 22.0·T crosses zero at T = ΔH/ΔS ≈ 273 K; above it melting is spontaneous, below it freezing is.'
  }));

  def('tz-gibbs-quad', () => {
    let s = '';
    const cell = (x, y, dH, dS, res, fn, cls) => {
      let o = R(x, y, 210, 120, 'fm', 6) + T(x + 105, y + 16, `ΔH ${dH}   ΔS ${dS}`, { c: 'lb', sz: 12 });
      const gx = x + 30, gy = y + 100, gw = 160, gh = 62;
      o += `<path class="w ax" d="M${gx} ${gy - gh - 2}V${gy}H${gx + gw}" style="stroke-width:1.3"/>` + T(gx - 4, gy - gh + 8, 'ΔG', { a: 'end', sz: 10.5, c: 'tk' }) + T(gx + gw, gy + 12, 'T', { a: 'end', sz: 10.5, c: 'tk' });
      o += ln(gx, gy - gh / 2, gx + gw, gy - gh / 2, '', 'style="stroke-width:1;stroke-dasharray:3 3;opacity:.6"');
      o += `<line x1="${gx}" y1="${f(gy - gh / 2 - fn(0) * gh / 2)}" x2="${gx + gw}" y2="${f(gy - gh / 2 - fn(1) * gh / 2)}" class="w thick ${cls}"/>`;
      o += T(x + 105, y + 34, res, { sz: 11, c: 'vl' });
      return o;
    };
    s += cell(15, 10, '−', '+', 'always spontaneous', u => -0.35 - 0.5 * u, 'hot');
    s += cell(255, 10, '+', '−', 'never spontaneous', u => 0.35 + 0.5 * u, 'cold');
    s += cell(15, 140, '−', '−', 'spontaneous only at low T', u => -0.8 + 1.5 * u, 'o');
    s += cell(255, 140, '+', '+', 'spontaneous only at high T', u => 0.8 - 1.5 * u, 'grn');
    return svg(480, 270, s, 'ΔG = ΔH − TΔS: the signs of ΔH and ΔS decide whether a process is spontaneous at all, only at low T, or only at high T.');
  });

  /* =============== t14 Heat engines =============== */
  def('tz-heat-engine', () => {
    let s = '';
    s += R(150, 10, 180, 44, 'fr hot', 8) + T(240, 30, 'Hot reservoir', { c: 'hc' }) + T(240, 46, 'T_h', { c: 'hc', sz: 12 });
    s += barrow(215, 54, 215, 110, 22, 'fr hot') + T(207, 82, 'Q_h = 1000 J', { a: 'end', c: 'hc', sz: 12 });
    s += C(240, 140, 34, 'fm') + T(240, 138, 'Heat', { c: 'lb' }) + T(240, 153, 'engine', { c: 'lb' });
    s += barrow(274, 140, 380, 140, 10, 'fo o') + T(380, 124, 'W = 300 J', { a: 'end', c: 'oc', sz: 12 }) + T(384, 144, 'work out', { a: 'start', sz: 11, c: 'vl' });
    s += barrow(240, 174, 240, 226, 15, 'fb cold') + T(252, 200, 'Q_c = 700 J', { a: 'start', c: 'cc', sz: 12 });
    s += R(150, 230, 180, 44, 'fb cold', 8) + T(240, 250, 'Cold reservoir', { c: 'cc' }) + T(240, 266, 'T_c', { c: 'cc', sz: 12 });
    s += tl(20, 100, ['Q_h = W + Q_c', 'η = W/Q_h', '   = 1 − Q_c/Q_h', '   = 30 %'], { a: 'start', sz: 12, c: 'lb' }, 18);
    s += tl(380, 210, ['Second law:', 'Q_c can never', 'be zero'], { a: 'start', sz: 11, c: 'vl' }, 14);
    return svg(480, 290, s, 'A heat engine takes Q_h from a hot reservoir, turns part into work W, and must reject Q_c to a cold one, so η < 1.');
  });

  const nR = 1, Th = 600, Tc = 300, gm = 5 / 3;
  const VB = 2, PB = nR * Th / VB, kB = PB * Math.pow(VB, gm), VC = Math.pow(kB / Tc, 1 / (gm - 1)), PC = Tc / VC, VD = Math.pow(Th / Tc, 1 / (gm - 1)), PD = Tc / VD;
  def('tz-carnot-pv', () => DG.graph({
    w: 480, h: 470, x: [0, 6.5], y: [0, 660], xt: [], yt: [], mb: 160, xl: 'V', yl: 'P',
    draw: (sx, sy) => {
      const iso = (T0) => v => T0 / v, adi = (P0, V0) => v => P0 * Math.pow(V0 / v, gm);
      const fAB = iso(Th), fBC = adi(PB, VB), fCD = iso(Tc), fDA = adi(Th, 1);
      const pts = []; const add = (fn, a, b, n) => { for (let i = 0; i <= n; i++) { const v = a + (b - a) * i / n; pts.push(f(sx(v)) + ',' + f(sy(fn(v)))); } };
      add(fAB, 1, VB, 20); add(fBC, VB, VC, 30); add(fCD, VC, VD, 30); add(fDA, VD, 1, 20);
      let s = `<polygon points="${pts.join(' ')}" class="w fo" style="stroke:none"/>`;
      s += DG.curve(fAB, sx, sy, 1, VB, 30, 'hot') + DG.curve(fBC, sx, sy, VB, VC, 40, 'o') + DG.curve(fCD, sx, sy, VC, VD, 40, 'cold') + DG.curve(fDA, sx, sy, VD, 1, 30, 'grn');
      s += carrow(fAB, 1, VB, sx, sy, 'r') + carrow(fBC, VB, VC, sx, sy, 'o') + carrow(fCD, VC, VD, sx, sy, 'b') + carrow(fDA, VD, 1, sx, sy, 'g');
      s += [['A', 1, Th, -14, -6], ['B', VB, PB, 12, -8], ['C', VC, PC, 4, -12], ['D', VD, PD, -6, 20]].map(([n, v, p, dx, dy]) => DOT(sx(v), sy(p)) + T(sx(v) + dx, sy(p) + dy, n, { c: 'lb', sz: 14 })).join('');
      s += T(sx(1.6), sy(Th / 1.6) - 26, 'T_h', { c: 'hc', sz: 12 }) + T(sx(4.3), sy(Tc / 4.3) - 22, 'T_c', { c: 'cc', sz: 12 });
      s += T(sx(1.75), sy(325) + 6, 'W', { c: 'oc', sz: 18 });
      const by = 338, c1 = 24, c2 = 250;
      s += tl(c1, by, ['1  A → B  isothermal expansion', '    at T_h: absorbs Q_h, ΔU = 0'], { a: 'start', sz: 11, c: 'hc' }, 14);
      s += tl(c2, by, ['2  B → C  adiabatic expansion', '    Q = 0, cools from T_h to T_c'], { a: 'start', sz: 11, c: 'oc' }, 14);
      s += tl(c1, by + 44, ['3  C → D  isothermal compression', '    at T_c: rejects Q_c'], { a: 'start', sz: 11, c: 'cc' }, 14);
      s += tl(c2, by + 44, ['4  D → A  adiabatic compression', '    Q = 0, heats from T_c to T_h'], { a: 'start', sz: 11, c: 'grn' }, 14);
      s += T(240, by + 96, 'η = 1 − T_c/T_h,  Q_c/Q_h = T_c/T_h,  W = Q_h − Q_c = enclosed area', { sz: 11.5, c: 'lb' });
      return s;
    },
    cap: 'Carnot cycle on a PV diagram (schematic): two isotherms and two adiabats; run clockwise, the enclosed area is the net work.'
  }));

  def('tz-carnot-ts', () => {
    const x0 = 80, x1 = 360, xa = 130, xb = 300, yT = 50, yH = 110, yC = 170, y0 = 230;
    let s = `<path class="w ax" d="M${x0} 30V${y0}H${x1 + 40}"/>` + T(x0 - 6, 40, 'T', { a: 'end', c: 'lb' }) + T(x1 + 40, y0 + 18, 'S', { a: 'end', c: 'lb' });
    s += R(xa, yH, xb - xa, yC - yH, 'fo', 0) + R(xa, yC, xb - xa, y0 - yC, 'fb', 0);
    s += R(xa, yH, xb - xa, y0 - yH, '', 0).replace('class="w "', 'class="w thick" style="stroke-linejoin:miter"');
    s += ln(xa, yC, xb, yC, 'grn', 'style="stroke-width:2"');
    s += ln(x0, yH, xa, yH, '', 'style="stroke-dasharray:3 3;stroke-width:1.2"') + ln(x0, yC, xa, yC, '', 'style="stroke-dasharray:3 3;stroke-width:1.2"');
    s += T(x0 - 6, yH + 4, 'T_h', { a: 'end', c: 'hc' }) + T(x0 - 6, yC + 4, 'T_c', { a: 'end', c: 'cc' });
    s += T(xa, y0 + 16, 'S₁', { c: 'lb' }) + T(xb, y0 + 16, 'S₂', { c: 'lb' });
    s += T((xa + xb) / 2, yH + 34, 'W = (T_h − T_c)ΔS', { c: 'oc', sz: 12 }) + T((xa + xb) / 2, yC + 40, 'Q_c = T_c ΔS', { c: 'cc', sz: 12 });
    s += T((xa + xb) / 2, yH - 8, 'Q_h = T_h ΔS  (area under top edge)', { c: 'hc', sz: 11.5 });
    s += AR(xa + 50, yH, xa + 100, yH, 'r') + AR(xb, yH + 20, xb, yH + 40, 'o').replace('y1="130"', 'y1="130"');
    s += AR(xb - 40, yC + 0.1, xb - 90, yC + 0.1, 'b') + AR(xa, yC - 20, xa, yC - 40, 'g');
    s += T(xb + 10, yH + 4, 'A → B', { a: 'start', sz: 11, c: 'hc' }) + T(xb + 10, (yH + yC) / 2 + 4, 'B → C', { a: 'start', sz: 11, c: 'oc' });
    s += T(xb + 10, yC + 4, 'C → D', { a: 'start', sz: 11, c: 'cc' });
    s += T(xa - 14, (yH + yC) / 2 + 4, 'D → A', { a: 'end', sz: 11, c: 'grn' });
    return svg(480, 268, s, 'Carnot cycle on a T–S diagram is a rectangle: isotherms are horizontal, adiabats (ΔS = 0) vertical, so η = W/Q_h = 1 − T_c/T_h.');
  });

  def('tz-fridge-hp', () => {
    let s = '';
    s += R(20, 10, 210, 40, 'fr hot', 8) + T(125, 28, 'Hot side (kitchen / house)', { c: 'hc', sz: 12 }) + T(125, 43, 'T_h', { c: 'hc', sz: 12 });
    s += R(20, 240, 210, 40, 'fb cold', 8) + T(125, 258, 'Cold side (inside / outdoors)', { c: 'cc', sz: 12 }) + T(125, 273, 'T_c', { c: 'cc', sz: 12 });
    s += barrow(125, 130, 125, 52, 26, 'fr hot') + T(118, 92, 'Q_h = 4', { a: 'end', c: 'hc' });
    s += C(125, 160, 34, 'fm') + T(125, 158, 'Heat', { c: 'lb' }) + T(125, 173, 'pump', { c: 'lb' });
    s += barrow(125, 238, 125, 192, 19, 'fb cold') + T(118, 222, 'Q_c = 3', { a: 'end', c: 'cc' });
    s += barrow(20, 160, 89, 160, 7, 'fo o').replace(/points="/, 'points="') + T(58, 146, 'W = 1', { c: 'oc' });
    s += tl(20, 192, ['(example units)'], { a: 'start', sz: 10.5, c: 'vl' });
    s += R(255, 10, 210, 270, 'fm', 8);
    s += tl(265, 34, ['Energy balance', 'Q_h = Q_c + W'], { a: 'start', c: 'lb' }, 16);
    s += tl(265, 82, ['Refrigerator', 'COP_R = Q_c/W', '  ≤ T_c/(T_h − T_c)', 'example: 3/1 = 3'], { a: 'start', c: 'cc', sz: 12 }, 16);
    s += tl(265, 168, ['Heat pump', 'COP_HP = Q_h/W', '  ≤ T_h/(T_h − T_c)', 'example: 4/1 = 4'], { a: 'start', c: 'hc', sz: 12 }, 16);
    s += T(360, 258, 'COP_HP = COP_R + 1', { c: 'lb', sz: 12 });
    return svg(480, 290, s, 'Run backward, the cycle pumps Q_c uphill with work W and dumps Q_h = Q_c + W; COP = what you want ÷ work paid, and can exceed 1.');
  });

  def('tz-vapor', () => {
    let s = '';
    const xl = 90, xr = 390, yt = 70, yb = 220;
    s += `<polyline points="${xl},${yt} ${xr},${yt} ${xr},${yb} ${xl},${yb} ${xl},${yt}" class="w"/>`;
    /* condenser (top, hot) */
    s += bk(180, yt - 14, 120, 28) + R(180, yt - 14, 120, 28, 'fr hot', 6) + T(240, yt + 4, 'Condenser', { c: 'hc', sz: 12 });
    /* evaporator (bottom, cold) */
    s += bk(180, yb - 14, 120, 28) + R(180, yb - 14, 120, 28, 'fb cold', 6) + T(240, yb + 4, 'Evaporator', { c: 'cc', sz: 12 });
    /* compressor (right) */
    s += `<circle cx="${xr}" cy="145" r="28" style="fill:var(--bg)"/>` + C(xr, 145, 28, 'fo o') + T(xr, 143, 'Comp-', { sz: 11, c: 'lb' }) + T(xr, 156, 'ressor', { sz: 11, c: 'lb' });
    /* expansion valve (left) */
    s += `<polygon points="${xl - 14},${120} ${xl + 14},${120} ${xl - 14},${170} ${xl + 14},${170}" style="fill:var(--bg);stroke:none"/>` + `<polygon points="${xl - 14},${120} ${xl + 14},${120} ${xl - 14},${170} ${xl + 14},${170}" class="w fm"/>` + T(xl - 20, 141, 'Expansion', { a: 'end', sz: 11, c: 'lb' }) + T(xl - 20, 155, 'valve', { a: 'end', sz: 11, c: 'lb' });
    /* flow arrows */
    s += AR(xr, 117, xr, 100, '') + AR(330, yt, 300, yt, '') + AR(xl, 100, xl, 118, '') + AR(xl, 172, xl, 190, '') + AR(300, yb, 330, yb, '') + AR(xr, 190, xr, 174, '');
    /* heat arrows */
    s += AR(240, yt - 16, 240, yt - 46, 'r') + T(252, yt - 30, 'Q_h out (to room / outside)', { a: 'start', c: 'hc', sz: 11.5 });
    s += AR(240, yb + 46, 240, yb + 16, 'b') + T(252, yb + 36, 'Q_c in (from inside)', { a: 'start', c: 'cc', sz: 11.5 });
    s += AR(450, 145, 424, 145, 'o') + T(440, 130, 'W in', { c: 'oc', sz: 12 });
    /* state labels */
    s += T(xr + 40, yt + 52, '2  hot, high-P vapor', { a: 'end', sz: 10.5, c: 'vl' });
    s += T(xl - 40, yt + 26, '3  high-P liquid', { a: 'start', sz: 10.5, c: 'vl' });
    s += T(xl - 40, yb - 24, '4  cold liquid + vapor', { a: 'start', sz: 10.5, c: 'vl' });
    s += T(xr + 40, yb - 50, '1  cold, low-P vapor', { a: 'end', sz: 10.5, c: 'vl' });
    s += T(240, 282, 'Throttling at the valve: enthalpy stays constant (isenthalpic, Joule–Thomson).', { sz: 11, c: 'vl' });
    return svg(480, 292, s, 'Vapor-compression cycle: compressor → condenser (Q_h out) → expansion valve → evaporator (Q_c in) → back to the compressor.');
  });

  def('tz-otto-pv', () => {
    const r = 8, g = 1.4, V2 = 1, V1 = r, P1 = 1, P2 = P1 * Math.pow(r, g), P3 = 40, P4 = P3 / Math.pow(r, g);
    return DG.graph({
      w: 480, h: 380, x: [0, 9], y: [0, 46], xt: [], yt: [], xl: 'V', yl: 'P', mb: 120,
      draw: (sx, sy) => {
        const c1 = v => P1 * Math.pow(V1 / v, g), c3 = v => P3 * Math.pow(V2 / v, g);
        const pts = []; for (let i = 0; i <= 30; i++) { const v = V1 + (V2 - V1) * i / 30; pts.push(f(sx(v)) + ',' + f(sy(c1(v)))); } pts.push(f(sx(V2)) + ',' + f(sy(P3)));
        for (let i = 0; i <= 30; i++) { const v = V2 + (V1 - V2) * i / 30; pts.push(f(sx(v)) + ',' + f(sy(c3(v)))); }
        let s = `<polygon points="${pts.join(' ')}" class="w fo" style="stroke:none"/>`;
        s += DG.curve(c1, sx, sy, V2, V1, 40, 'b') + ln(sx(V2), sy(P2), sx(V2), sy(P3), 'hot', 'style="stroke-width:3"') + DG.curve(c3, sx, sy, V2, V1, 40, 'hot') + ln(sx(V1), sy(P4), sx(V1), sy(P1), 'b', 'style="stroke-width:3"');
        s += carrow(c1, V1, V2, sx, sy, 'b') + carrow(c3, V2, V1, sx, sy, 'r');
        s += DOT(sx(V1), sy(P1)) + T(sx(V1) + 12, sy(P1) - 8, '1', { c: 'lb', sz: 14 }) + DOT(sx(V2), sy(P2)) + T(sx(V2) - 12, sy(P2) + 4, '2', { c: 'lb', sz: 14 }) + DOT(sx(V2), sy(P3)) + T(sx(V2) - 12, sy(P3) + 4, '3', { c: 'lb', sz: 14 }) + DOT(sx(V1), sy(P4)) + T(sx(V1) + 12, sy(P4) - 10, '4', { c: 'lb', sz: 14 });
        s += T(sx(V2), sy(0) + 14, 'V₂', { c: 'tk', sz: 11 }) + T(sx(V1) - 6, sy(0) + 14, 'V₁', { c: 'tk', sz: 11 });
        s += tl(sx(3.4), sy(40) + 4, ['2 → 3 isochoric heating: Q_in', '(spark ignites fuel)'], { a: 'start', sz: 11, c: 'hc' }, 13);
        s += tl(sx(3.4), sy(28), ['3 → 4 adiabatic expansion (power stroke)'], { a: 'start', sz: 11, c: 'hc' }, 13);
        s += tl(sx(3.6), sy(12), ['1 → 2 adiabatic compression'], { a: 'start', sz: 11, c: 'cc' }, 13);
        s += tl(sx(8.9), sy(3) - 26, ['4 → 1 isochoric cooling: Q_out'], { a: 'end', sz: 11, c: 'cc' }, 13);
        s += tl(240, 282, ['Otto cycle, compression ratio r = V₁/V₂ (drawn r = 8, γ = 1.4)', 'η = 1 − 1/r^(γ−1) = 1 − 8^(−0.4) ≈ 56 %   (ideal; real engines ≈ 25–35 %)'], { sz: 11.5, c: 'lb' }, 16);
        return s;
      },
      cap: 'Otto cycle (gasoline engine): two adiabats joined by two isochores; a higher compression ratio raises the ideal efficiency.'
    });
  });

  /* =============== t15 History =============== */
  def('tz-hist-timeline', () => {
    const E = [['1760', 'Black', 'latent & specific heat'], ['1765', 'Watt', 'separate condenser'], ['1783', 'Lavoisier', 'caloric theory, oxygen'], ['1798', 'Rumford', 'cannon boring: friction → heat'], ['1824', 'Carnot', 'Carnot cycle (“father of thermodynamics”)'], ['1842', 'Mayer', 'mechanical equivalent of heat'], ['1843', 'Joule', 'paddle wheel, 4.18 J/cal'], ['1848', 'Kelvin', 'absolute temperature scale'], ['1850', 'Clausius', 'second law; names entropy in 1865'], ['1860', 'Maxwell', 'molecular speed distribution'], ['1876', 'Gibbs', 'free energy, phase rule'], ['1877', 'Boltzmann', 'S = k ln W, statistical mechanics'], ['1900', 'Planck', 'blackbody law, E = hf'], ['1906', 'Nernst', 'third law (heat theorem)']];
    const x = 120, y0 = 34, dy = 29; let s = ln(x, y0 - 14, x, y0 + (E.length - 1) * dy + 14, 'o', 'style="stroke-width:3"');
    E.forEach((e, i) => {
      const y = y0 + i * dy, early = i < 4;
      s += DOT(x, y, early ? 'o' : '') + T(x - 12, y + 4, e[0], { a: 'end', c: 'lb', sz: 13 }) + T(x + 12, y + 4, e[1], { a: 'start', c: early ? 'oc' : 'lb', sz: 13 }) + T(x + 100, y + 4, e[2], { a: 'start', c: 'vl', sz: 11.5 });
    });
    return svg(480, y0 + (E.length - 1) * dy + 28, s, 'Order to memorize: Black → Watt → Lavoisier → Rumford → Carnot → Mayer/Joule → Kelvin → Clausius → Maxwell → Gibbs → Boltzmann → Planck → Nernst (spacing not to scale).');
  });

  def('tz-caloric-kinetic', () => {
    let s = R(20, 20, 190, 130, 'fo', 8) + tl(115, 42, ['Caloric theory'], { c: 'oc', sz: 13.5 }) + tl(115, 64, ['Lavoisier, 1783–89:', 'heat is a weightless', 'fluid (“caloric”) that', 'flows from hot to cold'], { sz: 11.5, c: 'vl' }, 15);
    s += R(270, 20, 190, 130, 'fg', 8) + tl(365, 42, ['Kinetic / mechanical'], { c: 'grn', sz: 13.5 }).replace('class="t "', 'class="t oc"') + tl(365, 64, ['heat is motion of', 'particles; work can', 'make unlimited heat', 'without any fluid'], { sz: 11.5, c: 'vl' }, 15);
    s += AR(268, 92, 214, 92, 'g') + T(240, 68, 'replaced', { sz: 10, c: 'vl' }) + T(240, 79, 'by', { sz: 10, c: 'vl' });
    s += R(20, 172, 440, 100, 'fm', 8) + T(240, 192, 'Evidence against caloric', { c: 'lb' });
    s += tl(40, 212, ['1798  Rumford: cannon boring gave endless heat', '1799  Davy: rubbing two ice blocks melts them', '1842  Mayer: mechanical equivalent of heat', '1843–50  Joule: paddle wheel, ≈ 4.18 J/cal'], { a: 'start', sz: 11.5, c: 'lb' }, 16);
    s += T(240, 294, 'Carnot (1824) used caloric theory yet reached the right answer.', { sz: 11.5, c: 'vl' });
    return svg(480, 308, s, 'The caloric-to-kinetic story is a favourite test theme: Lavoisier’s fluid was displaced by the experiments of Rumford, Davy, Mayer and Joule.');
  });

  /* =============== t16 Insulation device (2018/2019 verified; 2027 UNVERIFIED) =============== */
  def('tz-insul-section', () => {
    const k = 18, X0 = 105, Y0 = 30, W = 15 * k, H = 15 * k;
    let s = R(X0, Y0, W, H, 'fm', 2);
    const cx = X0 + W / 2, bx0 = cx - 65, bx1 = cx + 65, byT = Y0 + 36, byB = Y0 + 216;
    /* cavity */
    s += `<rect x="${bx0}" y="${Y0 + 36}" width="130" height="${H - 36 - 54}" class="w" style="fill:var(--bg,transparent)"/>`;
    /* foil layers (wall + base) */
    s += ln(X0 + 27, Y0, X0 + 27, Y0 + H, 'o', 'style="stroke-width:2.5"') + ln(X0 + W - 27, Y0, X0 + W - 27, Y0 + H, 'o', 'style="stroke-width:2.5"');
    s += ln(X0, Y0 + H - 27, X0 + W, Y0 + H - 27, 'o', 'style="stroke-width:2.5"');
    s += '';
    /* spacer under beaker */
    s += R(cx - 30, byB, 60, 10, 'fo', 2);
    /* beaker */
    s += `<path d="M${cx - 63} ${byT} V${byB} H${cx + 63} V${byT}" class="w" style="stroke-width:2.2"/>`;
    s += R(cx - 63, byB - 55, 126, 55, 'fb', 0).replace('class="w fb"', 'class="w fb" style="stroke:none"');
    /* lid hole */
    s += `<rect x="${cx - 13.5}" y="${Y0 - 1}" width="27" height="38" class="w" style="stroke:none;fill:var(--bg,#fff)"/>` + ln(cx - 13.5, Y0, cx - 13.5, Y0 + 36) + ln(cx + 13.5, Y0, cx + 13.5, Y0 + 36);
    /* probe */
    s += ln(cx, Y0 - 24, cx, byB - 28, 'hot', 'style="stroke-width:3"') + DOT(cx, byB - 28, 'hot');
    s += T(cx + 12, Y0 - 18, 'probe / thermometer', { a: 'start', sz: 11, c: 'hc' });
    /* labels left */
    const lab = (x, y, tx, ex, ey, a) => T(x, y, tx, { a: a || 'end', sz: 11 }) + ln(a === 'start' ? x - 4 : x + 4, y - 4, ex, ey, '', 'style="stroke-width:1;opacity:.7"');
    s += lab(98, Y0 + 56, 'light foam next to glass', X0 + 10, Y0 + 70);
    s += lab(98, Y0 + 130, 'foil shield + air gap', X0 + 30, Y0 + 130);
    s += lab(98, Y0 + 185, '250 mL beaker', bx0 + 2, Y0 + 185);
    s += lab(98, Y0 + 247, 'low-k spacer', cx - 26, byB + 6);
    s += lab(98, Y0 + 15, 'hole Ø 1.5 cm', cx - 13.5, Y0 + 10);
    const rx = X0 + W + 8;
    s += lab(rx, Y0 + 56, 'outer insulation', X0 + W - 12, Y0 + 70, 'start');
    s += lab(rx, Y0 + 200, 'water 75–125 mL', cx + 50, byB - 25, 'start');
    s += lab(rx, Y0 + 256, 'thick base foam', X0 + W - 20, Y0 + 256, 'start');
    /* dimension lines */
    s += ln(X0, Y0 + H + 14, X0 + W, Y0 + H + 14, '', 'style="stroke-width:1.2"') + T(cx, Y0 + H + 30, 'whole device ≤ 15 cm cube (Div C)', { sz: 11.5, c: 'lb' });
    s += tl(rx, Y0 + 92, ['≈ 3.5–4 cm', 'per side'], { a: 'start', sz: 11, c: 'oc' }, 13);
    return svg(480, 352, s, 'Insulated-beaker device from the 2018/2019 rules (to scale, 1 cm = 18 px): probe hole 1.5 cm, beaker top under 2.5 cm below the hole. 2027 device task: UNVERIFIED.');
  });

  def('tz-insul-loss', () => {
    const x0 = 120, k = 5.4; const X = v => x0 + v * k; let s = '';
    s += `<path class="w ax" d="M${x0} 18V170H${X(60)}"/>`;
    [0, 10, 20, 30, 40, 50, 60].forEach(v => { s += ln(X(v), 18, X(v), 170, 'gr') + T(X(v), 186, v, { c: 'tk' }); });
    s = s.replace(/class="w gr"/g, 'class="gr"');
    [['Top opening', 40, 50, 'hot'], ['Sides', 25, 35, 'o'], ['Bottom contact', 10, 20, 'b']].forEach(([n, a, b, c], i) => { const y = 30 + i * 44; s += T(x0 - 8, y + 18, n, { a: 'end', c: 'lb', sz: 12 }) + `<rect x="${X(a)}" y="${y}" width="${X(b) - X(a)}" height="26" rx="4" class="w f${c === 'hot' ? 'r' : c === 'o' ? 'o' : 'b'} ${c}"/>` + T((X(a) + X(b)) / 2, y + 18, a + '–' + b + ' %', { c: 'lb', sz: 12 }); });
    s += T((x0 + X(60)) / 2, 206, '% of heat lost (poorly covered design)', { c: 'lb', sz: 12 });
    s += T(240, 226, 'Remainder = heat that warms the insulation itself.', { c: 'vl', sz: 11 });
    return svg(480, 236, s, 'Where a poorly covered beaker loses heat: the open top dominates, so kill the top first, then the sides, then the bottom contact.');
  });

  def('tz-insul-k', () => {
    const x0 = 150, w = 300, lg = v => x0 + (Math.log10(v) + 2) / 1 * w; /* 0.01..0.1 */
    let s = `<path class="w ax" d="M${x0} 14V${14 + 8 * 28 + 6}H${x0 + w + 6}"/>`;
    [[0.01, '0.01'], [0.02, '0.02'], [0.05, '0.05'], [0.1, '0.1']].forEach(([v, t]) => { s += `<line x1="${f(lg(v))}" y1="14" x2="${f(lg(v))}" y2="${14 + 8 * 28 + 6}" class="gr"/>` + T(lg(v), 14 + 8 * 28 + 22, t, { c: 'tk' }); });
    const M = [['Silica aerogel', 0.015, 0.02, 'g'], ['Polyurethane / polyiso', 0.022, 0.028, 'g'], ['XPS / EPS foam', 0.029, 0.04, 'g'], ['Fiberglass / mineral wool', 0.033, 0.045, 'x'], ['Wool, cotton, cellulose', 0.035, 0.045, 'o'], ['Cork, balsa', 0.04, 0.06, 'o'], ['Loose fill (perlite…)', 0.05, 0.08, 'o'], ['Cardboard', 0.05, 0.07, 'o']];
    M.forEach(([n, a, b, c], i) => { const y = 20 + i * 28; s += T(x0 - 8, y + 16, n, { a: 'end', sz: 11.5, c: 'lb' }) + `<rect x="${f(lg(a))}" y="${y}" width="${f(lg(b) - lg(a))}" height="20" rx="4" class="w ${c === 'g' ? 'fg grn' : c === 'x' ? 'fr hot' : 'fo o'}"${c === 'x' ? ' style="stroke-dasharray:4 3"' : ''}/>`; });
    s += T(lg(0.045) + 8, 20 + 3 * 28 + 15, 'prohibited in 2018', { a: 'start', sz: 10.5, c: 'hc' });
    s += T(x0 + w / 2, 14 + 8 * 28 + 42, 'thermal conductivity k (W/m·K), log scale: lower is better', { c: 'lb', sz: 12 });
    s += T(x0 + w / 2, 14 + 8 * 28 + 60, 'Wet insulation is ruined: water has k = 0.6 (far off this chart).', { c: 'vl', sz: 11 });
    return svg(480, 14 + 8 * 28 + 72, s, 'Typical k ranges from the lesson: aerogel and polyurethane are best; keep everything dry, and check the current rules before using fiberglass.');
  });

  def('tz-insul-cool', () => DG.graph({
    w: 480, h: 290, x: [0, 25], y: [20, 72], xt: [0, 5, 10, 15, 20, 25], yt: [[20, '20'], [30, '30'], [40, '40'], [50, '50'], [60, '60'], [70, '70']],
    xl: 't (min)', yl: 'T (°C)', mb: 48,
    draw: (sx, sy) => {
      const Tr = 22, T0 = 70, cool = K => t => Tr + (T0 - Tr) * Math.exp(-K * t);
      let s = ln(sx(0), sy(Tr), sx(25), sy(Tr), '', 'style="stroke-width:1.3;stroke-dasharray:5 4"') + T(sx(12), sy(Tr) - 6, 'room 22 °C', { a: 'middle', sz: 11, c: 'vl' });
      s += DG.curve(cool(0.035), sx, sy, 0, 25, 50, 'cold') + DG.curve(cool(0.008), sx, sy, 0, 25, 50, 'o');
      s += DOT(sx(25), sy(cool(0.035)(25)), 'cold') + DOT(sx(25), sy(cool(0.008)(25)), 'o');
      s += T(sx(25) - 6, sy(cool(0.035)(25)) - 10, '≈ 42 °C', { a: 'end', sz: 11.5, c: 'cc' }) + T(sx(25) - 6, sy(cool(0.008)(25)) - 10, '≈ 61 °C', { a: 'end', sz: 11.5, c: 'oc' });
      s += T(sx(3), sy(46), 'bare beaker, K = 0.035 min⁻¹', { a: 'start', sz: 11.5, c: 'cc' }) + T(sx(2), sy(66) - 10, 'good build, K ≈ 0.008 min⁻¹', { a: 'start', sz: 11.5, c: 'oc' });
      s += T(sx(25), sy(72) + 12, 'T = T_r + (T₀ − T_r)e^(−Kt),  T₀ = 70 °C', { a: 'end', sz: 11, c: 'vl' });
      return s;
    },
    cap: 'Lesson example: a bare 100 mL beaker falls from 70 to ≈ 42 °C in 25 min; a good build (K ≈ 0.006–0.012) stays far warmer. Illustrative only, so your measurements decide.'
  }));

  /* =============== t17 Heat collection (2027 details UNVERIFIED) =============== */
  def('tz-collector-section', () => {
    let s = '';
    s += R(110, 150, 300, 120, 'fm', 4) + `<rect x="130" y="148" width="260" height="102" class="w" style="fill:var(--bg,transparent)"/>`;
    s += ln(130, 150, 390, 150, 'b', 'style="stroke-width:3.5"');
    s += `<rect x="136" y="200" width="248" height="9" class="dot"/>` + R(136, 209, 248, 34, 'fb', 3);
    s += T(260, 231, 'water (stores Q = m·c·ΔT)', { sz: 11.5, c: 'lb' });
    [110, 170, 230].forEach(x => { s += AR(x - 60, 60, x, 144, 'o'); });
    s += T(20, 40, 'sunlight / lamp', { a: 'start', sz: 11.5, c: 'oc' });
    s += AR(262, 144, 292, 100, 'o').replace('class="w s-o"', 'class="w s-o" style="stroke-dasharray:4 3;opacity:.75"') + T(298, 96, 'part reflected', { a: 'start', sz: 10.5, c: 'vl' });
    s += AR(330, 196, 330, 168, 'r') + ln(316, 160, 344, 160, 'hot', 'style="stroke-width:3"');
    s += tl(340, 172, ['IR re-emission', 'blocked by glass'], { a: 'start', sz: 10.5, c: 'hc' }, 12);
    s += tl(140, 172, ['air gap: less', 'convection'], { a: 'start', sz: 10.5, c: 'vl' }, 12);
    s += AR(350, 144, 350, 116, 'r') + T(358, 126, 'U_top: cover loses heat', { a: 'start', sz: 10.5, c: 'hc' });
    s += AR(108, 210, 82, 210, 'r') + T(76, 214, 'U_edge', { a: 'end', sz: 10.5, c: 'hc' });
    s += AR(260, 272, 260, 296, 'r') + T(268, 290, 'U_bottom', { a: 'start', sz: 10.5, c: 'hc' });
    s += T(260, 264, 'insulated back and edges', { sz: 10.5, c: 'vl' });
    s += T(140, 196, 'black absorber (α ≈ 0.95)', { a: 'start', sz: 10.5, c: 'lb' });
    return svg(480, 306, s, 'Generic box collector: glazing passes sunlight but traps long-wave IR, a black absorber heats the water, and back and edges are insulated. The 2027 device specs are UNVERIFIED.');
  });

  def('tz-collector-budget', () => {
    const x0 = 150, k = 26; let s = '';
    const rows = [['Incident  G·A', 10, 0, 'o', '10 W'], ['After glazing  (τ = 0.9)', 9, 0, 'o', '9.0 W'], ['Absorbed  (α = 0.85)', 7.65, 0, 'o', '≈ 7.7 W'], ['Lost to surroundings', 2.3, 5.4, 'r', '30 % ≈ 2.3 W'], ['Stored in water', 5.4, 0, 'b', '≈ 5.4 W']];
    rows.forEach(([n, v, off, c, t], i) => { const y = 14 + i * 40; s += T(x0 - 8, y + 18, n, { a: 'end', sz: 11.5, c: 'lb' }) + `<rect x="${x0 + off * k}" y="${y}" width="${v * k}" height="26" rx="4" class="w ${c === 'r' ? 'fr hot' : c === 'b' ? 'fb cold' : 'fo o'}"/>` + T(x0 + (off + v) * k + 8, y + 18, t, { a: 'start', sz: 12, c: c === 'r' ? 'hc' : c === 'b' ? 'cc' : 'oc' }); });
    s += tl(240, 228, ['Example: 10 cm × 10 cm absorber, 1000 W/m²: G·A = 10 W.', 'Warming 50 g of water by 10 K needs 2092 J → 2092 ÷ 5.4 ≈ 390 s', '(ideal, no losses: 2092 ÷ 7.7 ≈ 272 s)'], { sz: 11, c: 'vl' }, 15);
    return svg(480, 280, s, 'Energy bookkeeping for any collector: absorbed power minus losses is what heats the water. Numbers are the lesson’s illustrative estimate, not 2027 rules (UNVERIFIED).');
  });

  def('tz-prep-plan', () => {
    let s = '';
    const B = [['1', 'Get the 2027 rules', 'free PDF (soinc.org form); device specs, scoring UNVERIFIED'], ['2', 'Master the written test', 'about 45 % of the score historically; independent of the device'], ['3', 'Build two prototypes', 'box collector (absorber, glazing, insulated box) + best retainer'], ['4', 'Practice data and predictions', 'data collection, curve fitting, Newton’s law predictions']];
    B.forEach(([n, h, d], i) => { const y = 10 + i * 66; s += R(20, y, 440, 54, 'fm', 8) + C(46, y + 27, 15, 'fo o') + T(46, y + 32, n, { c: 'lb', sz: 14 }) + T(72, y + 23, h, { a: 'start', c: 'lb', sz: 13 }) + T(72, y + 41, d, { a: 'start', c: 'vl', sz: 11 }); if (i < 3) s += AR(240, y + 54, 240, y + 66, ''); });
    return svg(480, 280, s, 'While the 2027 device rules are unconfirmed: get the rules, lock in the written test, prototype both device types, and practise predictions.');
  });

  /* =============== t18 Scoring (2019 formulas) =============== */
  def('tz-score-pie', () => {
    const parts = [['Written test', 45, 'fo o', 'TS = 45 × (your test ÷ best test)'], ['Charts', 10, 'fg grn', 'CS = 0–10 (rubric)'], ['Heat score', 20, 'fr hot', 'HS = 20 × (lowest k ÷ your k)'], ['Prediction', 25, 'fb cold', 'PS = 25 − 2.5·|error in °C|']];
    let s = '', a = 0; const cx = 120, cy = 120, r = 95;
    parts.forEach(([n, v, c, fm], i) => { const a1 = a + v / 100 * 2 * Math.PI, am = (a + a1) / 2; s += wedge(cx, cy, r, a, a1, c); s += T(cx + r * 0.62 * Math.sin(am), cy - r * 0.62 * Math.cos(am) + 5, v, { c: 'lb', sz: 16 }); a = a1; });
    parts.forEach(([n, v, c, fm], i) => { const y = 50 + i * 52; s += R(250, y - 14, 14, 14, c, 3) + T(272, y - 2, n + '  (' + v + ')', { a: 'start', c: 'lb', sz: 13 }) + T(272, y + 15, fm, { a: 'start', c: 'vl', sz: 11.5 }); });
    s += T(240, 252, 'Total (2019, Div C) = TS + CS + HS + PS = 100', { c: 'lb', sz: 12 });
    return svg(480, 268, s, 'The 2019 score pie: the written test and the prediction together are 70 of 100 points. Expect different 2027 scoring (UNVERIFIED).');
  });

  def('tz-chart-rubric', () => {
    const I = [['Data range', 2, 'spans a listed variable range'], ['Data points', 2, '≥ 10 per series'], ['Labeling', 2, 'title, team name, axis labels + units'], ['Multiple representations', 2, '0.5 each, max 2'], ['Visual documentation', 2, 'labeled device picture or diagram']];
    let s = ''; const x0 = 20, w = 88;
    I.forEach(([n, p, d], i) => { const x = x0 + i * w; s += `<rect x="${x}" y="22" width="${w - 4}" height="36" rx="4" class="w ${['fo o', 'fg grn', 'fb cold', 'fr hot', 'fo o'][i]}"/>` + T(x + (w - 4) / 2, 46, p + ' pts', { c: 'lb', sz: 13 }); });
    I.forEach(([n, p, d], i) => { const x = x0 + i * w + (w - 4) / 2; s += tl(x, 76, n === 'Multiple representations' ? ['Multiple', 'representations'] : n === 'Visual documentation' ? ['Visual', 'documentation'] : n.split(' '), { c: 'lb', sz: 10 }, 13); });
    I.forEach(([n, p, d], i) => { const x = x0 + i * w + (w - 4) / 2; const parts = d.length > 18 ? d.replace(/(.{1,15})(\s|$)/g, '$1|').split('|').filter(Boolean) : [d]; s += tl(x, 114, parts, { c: 'vl', sz: 10.5 }, 12); });
    s += T(240, 18, 'Chart score CS = 10 points', { c: 'lb', sz: 12 }).replace('y="18"', 'y="14"');
    s += ln(20, 176, 460, 176, '', 'style="stroke-width:1;opacity:.5"');
    s += tl(240, 196, ['Maximum 4 plots are scored.  Suggested set:', '1  T vs time for 75, 100, 125 mL   2  ln(T − T_room) vs t', '3  K vs water volume   4  final T vs start T or prediction table', 'plus a labeled photo or diagram'], { sz: 11, c: 'vl' }, 15);
    return svg(480, 262, s, '2019 chart rubric: five items worth 2 points each; four plots maximum are accepted.');
  });

  def('tz-hs-curve', () => DG.graph({
    w: 480, h: 280, x: [1, 4], y: [0, 22], xt: [1, 1.5, 2, 2.5, 3, 3.5, 4], yt: [0, 5, 10, 15, 20], mb: 50,
    xl: 'your k ÷ best k in the field', yl: 'Heat score HS',
    draw: (sx, sy) => {
      let s = DG.curve(x => 20 / x, sx, sy, 1, 4, 60, 'o');
      [[1, 20, 'best team: 20', 10, 16, 'start'], [1.215, 16.46, 'Team A ≈ 16.5', 12, -10, 'start'], [2, 10, 'k twice the best → 10', 12, -12, 'start']].forEach(([x, y, t, dx, dy, a]) => { s += DOT(sx(x), sy(y), 'o') + T(sx(x) + dx, sy(y) + dy, t, { a, sz: 11.5, c: 'lb' }); });
      
      s += T(sx(4) - 4, sy(22) + 14, 'HS = 20 × (k_lowest ÷ k_team)', { a: 'end', sz: 12, c: 'lb' });
      return s;
    },
    cap: 'Heat score falls as your cooling constant k rises above the field’s best (2019 formula): Team A (k = 0.00729 vs 0.00600) gets 16.5.'
  }));

  def('tz-ps-line', () => DG.graph({
    w: 480, h: 280, x: [0, 12], y: [0, 27], xt: [0, 2, 4, 6, 8, 10, 12], yt: [0, 5, 10, 15, 20, 25], mb: 50,
    xl: '|predicted T_f − actual T_f|  (°C)', yl: 'Prediction score PS',
    draw: (sx, sy) => {
      let s = DG.curve(x => Math.max(0, 25 - 2.5 * x), sx, sy, 0, 12, 120, 'cold');
      [[1, 22.5, '±1 °C → 22.5', 10, -8], [4, 15, '±4 °C → 15', 10, -8], [6, 10, '±6 °C → 10', 10, -8], [10, 0, '±10 °C → 0', -4, -12]].forEach(([x, y, t, dx, dy]) => { s += DOT(sx(x), sy(y), 'cold') + T(sx(x) + dx, sy(y) + dy, t, { a: x === 10 ? 'end' : 'start', sz: 11.5, c: 'lb' }); });
      s += T(sx(12) - 4, sy(27) + 12, 'PS = 25 − 2.5·|error|  (min 0)', { a: 'end', sz: 12, c: 'lb' });
      return s;
    },
    cap: 'Every °C of prediction error costs 2.5 points, so a ±1 °C prediction earns 22.5 of 25 and anything ≥ 10 °C off earns nothing.'
  }));

  /* =============== t19 Lab skills =============== */
  def('tz-safety-numbers', () => {
    let s = '';
    s += T(120, 18, 'Time to severe scald (adult skin)', { c: 'lb', sz: 12 });
    s += `<path class="w ax" d="M60 30V150H200"/>`;
    s += `<rect x="75" y="${150 - 5 * 18}" width="44" height="${5 * 18}" rx="3" class="w fo o"/>` + `<rect x="135" y="${150 - 2 * 18}" width="44" height="${1 * 18}" rx="3" class="w fr hot"/>` + ln(157, 150 - 2 * 18, 157, 150 - 1 * 18, 'hot', 'style="stroke-width:0"');
    s += `<rect x="135" y="${150 - 2 * 18}" width="44" height="36" rx="3" class="w fr hot"/>`;
    s += T(97, 150 - 5 * 18 - 6, '≈ 5 s', { c: 'lb', sz: 12 }) + T(157, 150 - 2 * 18 - 6, '1–2 s', { c: 'lb', sz: 12 });
    s += T(97, 168, '60 °C', { c: 'tk' }) + T(157, 168, '70 °C', { c: 'tk' }) + T(54, 100, 'seconds', { c: 'tk', rot: -90, a: 'middle' }).replace('x="54"', 'x="42"');
    s += T(360, 18, 'Glass ΔT limit (thermal shock)', { c: 'lb', sz: 12 });
    s += `<path class="w ax" d="M290 30V150H450"/>`;
    const k = 0.72; s += `<rect x="305" y="${150 - 60 * k}" width="44" height="${20 * k}" rx="3" class="w fo o" style="opacity:1"/>` + `<rect x="305" y="${150 - 40 * k}" width="44" height="${40 * k}" rx="3" class="w fo o"/>` + `<rect x="375" y="${150 - 170 * k}" width="44" height="${10 * k}" rx="3" class="w fb cold"/>` + `<rect x="375" y="${150 - 160 * k}" width="44" height="${160 * k}" rx="3" class="w fb cold"/>`;
    s += T(327, 150 - 60 * k - 6, '40–60 K', { c: 'lb', sz: 12 }) + T(397, 150 - 170 * k - 6, '160–170 K', { c: 'lb', sz: 12 });
    s += T(327, 168, 'soda-lime', { c: 'tk' }) + T(397, 168, 'borosilicate', { c: 'tk' }) + T(277, 100, 'K', { c: 'tk', rot: -90 });
    s += T(240, 196, 'Steam burns are worse: it releases L_v = 2.26 MJ/kg on the skin as it condenses.', { sz: 11.5, c: 'vl' });
    s += T(240, 214, 'Never pour boiling water into a cold or chilled beaker.', { sz: 11.5, c: 'vl' });
    return svg(480, 228, s, 'Numbers behind the safety rules: hot water scalds in seconds, and ordinary glass tolerates far smaller temperature jumps than borosilicate.');
  });

  def('tz-therm-reading', () => {
    let s = '';
    /* left: parallax */
    const cx = 170, yL = 110;
    s += T(110, 16, 'Read at eye level (parallax)', { c: 'lb', sz: 12 });
    s += R(cx - 4, 34, 8, 150, 'fm', 4) + R(cx - 4, yL, 8, 184 - yL, 'fr hot', 0).replace('class="w fr hot"', 'class="w fr hot" style="stroke:none"');
    s += ln(cx + 16, 34, cx + 16, 184, '', 'style="stroke-width:1.2"');
    for (let i = 0; i <= 10; i++) { const y = 184 - i * 15; s += ln(cx + 16, y, cx + 16 + (i % 5 === 0 ? 12 : 7), y, '', 'style="stroke-width:1.2"'); }
    s += T(cx + 34, yL + 4, '60', { a: 'start', sz: 10.5, c: 'tk' });
    const eye = (x, y, c, lab, la, dx) => ln(x, y, cx + 16, yL, c, 'style="stroke-width:1.5;stroke-dasharray:4 3"') + `<circle cx="${x}" cy="${y}" r="7" class="w"/><circle cx="${x + 2}" cy="${y}" r="2.2" class="dot"/>` + T(x + dx, y + (y < yL ? -10 : 20), lab, { a: la, sz: 10.5, c: c === 'grn' ? 'grn' : 'hc' }).replace('class="t grn"', 'class="t oc"');
    s += eye(30, 40, 'hot', 'above: reads off', 'start', -14) + eye(30, yL, 'grn', 'level: correct', 'start', -14) + eye(30, 180, 'hot', 'below: reads off', 'start', -14);
    s += T(cx + 34, 26, 'scale', { a: 'start', sz: 10, c: 'tk' });
    s += T(118, 204, 'only at eye level does the sight line', { sz: 10.5, c: 'vl' }) + T(118, 217, 'meet liquid top and mark together', { sz: 10.5, c: 'vl' });
    /* right: meniscus */
    s += T(375, 16, 'Meniscus', { c: 'lb', sz: 12 });
    const m = (x, concave, lab, hint) => {
      let o = `<path d="M${x - 24} 60V150H${x + 24}V60" class="w"/>`;
      const top = concave ? `M${x - 24} 96Q${x} 118 ${x + 24} 96` : `M${x - 24} 106Q${x} 84 ${x + 24} 106`;
      o += `<path d="${top}V150H${x - 24}Z" class="w fb" style="stroke:none"/>` + `<path d="${top}" class="w b"/>`;
      o += concave ? AR(x + 46, 118, x + 26, 114, 'g') + T(x + 50, 122, '', {}) : AR(x + 46, 84, x + 28, 92, 'g');
      o += T(x, 172, lab, { c: 'lb', sz: 11.5 }) + T(x, 187, hint, { sz: 10.5, c: 'vl' });
      return o;
    };
    s += m(338, true, 'concave', 'read the bottom of the curve') + m(434, false, 'convex (Hg)', 'read the top of the dome');
    return svg(480, 228, s, 'Keep your eye level with the liquid surface to avoid parallax; for a curved surface read the bottom of a concave meniscus and the top of a convex one (mercury).');
  });

  def('tz-therm-immersion', () => {
    let s = '';
    const pan = (cx, ok, lab, sub, variant) => {
      let o = `<path d="M${cx - 50} 50V160H${cx + 50}V50" class="w"/>` + `<rect x="${cx - 50}" y="90" width="100" height="70" class="w fb" style="stroke:none"/>` + ln(cx - 50, 90, cx + 50, 90, 'b', 'style="stroke-width:1.5"');
      let px = cx, tipY = 125;
      if (variant === 'bottom') { tipY = 158; } else if (variant === 'wall') { px = cx + 47; tipY = 120; } else if (variant === 'high') { tipY = 82; }
      o += ln(px, 24, px, tipY, 'hot', 'style="stroke-width:4"') + DOT(px, tipY, 'hot');
      o += T(cx, 188, lab, { c: ok ? 'lb' : 'hc', sz: 12 }) + tl(cx, 204, sub, { sz: 10.5, c: 'vl' }, 12);
      return o;
    };
    s += pan(80, true, 'Correct', ['tip in the middle of the', 'water, not touching glass'], 'mid');
    s += pan(240, false, 'Wrong: on the bottom', ['reads the glass, not the', 'water (or the hot plate)'], 'bottom');
    s += pan(400, false, 'Wrong: not immersed', ['sensing portion must be', 'fully under the surface'], 'high');
    return svg(480, 230, s, 'Fully immerse the sensing portion, keep it off the walls and bottom, let the reading settle, and keep thin leads from conducting heat out.');
  });

  /* =============== t20 Thermal properties & applications =============== */
  def('tz-bimetal', () => {
    let s = '';
    /* cold */
    s += R(28, 70, 12, 70, 'fm', 2) + R(40, 88, 170, 10, 'fm', 0) + R(40, 98, 170, 10, 'fo o', 0).replace('class="w fo o"', 'class="w fo o" style="fill:rgba(249,115,22,.4)"');
    s += T(125, 66, 'cold: straight', { c: 'cc', sz: 12 }) + T(125, 130, 'clamped at the left', { sz: 10.5, c: 'vl' });
    /* hot */
    const x0 = 270, yc = 98, Rm = 120, th = 1.15, cy = yc - Rm;
    const arc = r => { const ex = x0 + r * Math.sin(th), ey = cy + r * Math.cos(th); return `M${x0} ${f(cy + r)}A${r} ${r} 0 0 0 ${f(ex)} ${f(ey)}`; };
    s += R(258, 70, 12, 70, 'fm', 2) + `<path d="${arc(Rm - 5)}" class="w" style="stroke-width:10;stroke-linecap:butt;opacity:.45"/>` + `<path d="${arc(Rm + 5)}" class="w" style="stroke-width:10;stroke-linecap:butt;stroke:rgba(249,115,22,.75)"/>`;
    s += T(360, 158, 'hot: bends toward', { c: 'hc', sz: 12 }) + T(360, 173, 'the low-α metal', { c: 'hc', sz: 12 });
    s += tl(56, 170, ['steel  α = 12×10⁻⁶ /K  (top, expands less)', 'aluminium  α = 23×10⁻⁶ /K  (bottom, expands more)'], { a: 'start', sz: 11, c: 'vl' }, 15);
    s += AR(440, 120, 440, 80, 'r').replace(/.*/, '');
    s += tl(240, 222, ['Both strips get longer, but aluminium gains more (ΔL = αL₀ΔT),', 'so it ends up on the outside of the curve: used in thermostats.'], { sz: 11.5, c: 'lb' }, 16);
    return svg(480, 252, s, 'A bimetallic strip bends when heated because the metal with the larger α lengthens more and sits on the outer side of the curve.');
  });

  def('tz-expansion-bars', () => {
    const M = [['Aluminium', 23, 2.3], ['Copper', 17, 1.7], ['Steel', 12, 1.2], ['Glass', 9, 0.9], ['Pyrex', 3.3, 0.33]];
    const x0 = 120, k = 100; let s = `<path class="w ax" d="M${x0} 14V${14 + 5 * 34}"/>`;
    M.forEach(([n, a, d], i) => { const y = 18 + i * 34; s += T(x0 - 8, y + 12, n, { a: 'end', c: 'lb', sz: 12 }) + T(x0 - 8, y + 25, 'α = ' + a + '×10⁻⁶', { a: 'end', sz: 10, c: 'vl' }) + `<rect x="${x0}" y="${y}" width="${d * k}" height="22" rx="4" class="w ${i === 4 ? 'fb cold' : 'fo o'}"/>` + T(x0 + d * k + 8, y + 16, d + ' mm', { a: 'start', c: 'lb', sz: 12 }); });
    s += T(x0 + 160, 14 + 5 * 34 + 20, 'ΔL for a 1 m bar heated by 100 K  (ΔL = α L₀ ΔT)', { c: 'lb', sz: 12 });
    s += T(x0 + 160, 14 + 5 * 34 + 38, 'Rail example: 100 m steel, ΔT = 40 K → 4.8 cm; stress E·α·ΔT = 96 MPa if held fixed.', { sz: 10.5, c: 'vl' }).replace(/x="280"/, 'x="240"');
    return svg(480, 14 + 5 * 34 + 52, s, 'Same bar length and temperature rise, very different growth: Pyrex’s small α is why it resists thermal shock.');
  });

  def('tz-building-loss', () => {
    let s = '';
    s += ln(20, 250, 460, 250, '', 'style="stroke-width:2.5"');
    s += R(140, 140, 200, 110, 'fm', 0) + `<polygon points="120,140 240,70 360,140" class="w fm"/>`;
    s += ln(150, 134, 330, 134, 'o', 'style="stroke-width:2;stroke-dasharray:4 3"') + T(240, 126, 'attic insulation', { sz: 10.5, c: 'oc' });
    s += R(165, 170, 40, 40, 'fb', 2) + ln(185, 170, 185, 210, 'b', 'style="stroke-width:1.2"') + R(290, 190, 30, 60, 'fo o', 2);
    s += T(240, 195, 'warm inside', { sz: 12, c: 'hc' }) + T(240, 237, '', {});
    /* arrows */
    s += AR(240, 92, 240, 40, 'r') + tl(248, 30, ['roof / attic: R-38 to R-60'], { a: 'start', sz: 11, c: 'hc' });
    s += AR(142, 160, 100, 160, 'r') + T(96, 150, 'walls: Q = AΔT/R', { a: 'end', sz: 11, c: 'hc' });
    s += AR(165, 190, 120, 190, 'r') + tl(116, 196, ['windows:', 'double/triple', 'low-e, argon'], { a: 'end', sz: 10.5, c: 'hc' }, 12).replace(/y="196"/, 'y="208"');
    s += P('M328 240q18 -6 30 0t30 0', 'hot', 'style="stroke-width:2.5"') + AR(380, 240, 420, 240, 'r') + tl(352, 262, ['infiltration: air leaks often', 'exceed conduction losses'], { a: 'start', sz: 10.5, c: 'hc' }, 12);
    s += AR(240, 252, 240, 282, 'r') + T(250, 284, 'floor / slab', { a: 'start', sz: 11, c: 'hc' });
    return svg(480, 300, s, 'Where a house loses heat: roof, walls, windows, floor and, often most of all, air leaking through gaps.');
  });

  def('tz-sea-breeze', () => {
    let s = R(20, 210, 220, 50, 'fb', 0).replace('rx="0"', 'rx="0"') + R(240, 210, 220, 50, 'fo o', 0).replace('class="w fo o"', 'class="w fo o" style="fill:rgba(180,120,60,.25)"');
    s += T(130, 240, 'sea (cool, high c)', { c: 'cc', sz: 12 }) + T(350, 240, 'land (heats fast, lower c)', { c: 'oc', sz: 12 });
    s += C(420, 40, 16, 'fo o') + T(420, 72, 'sun', { sz: 10.5, c: 'vl' }) + AR(390, 70, 360, 190, 'o').replace('class="w s-o"', 'class="w s-o" style="stroke-dasharray:4 3"');
    s += AR(60, 196, 290, 196, 'b') + tl(150, 186, ['sea breeze: cool air flows inland'], { sz: 11, c: 'cc' });
    s += AR(330, 196, 330, 96, 'r') + tl(340, 150, ['warm air', 'rises over land'], { a: 'start', sz: 11, c: 'hc' }, 13);
    s += AR(330, 82, 120, 82, '') + T(225, 72, 'return flow aloft', { sz: 11, c: 'vl' });
    s += AR(100, 90, 100, 190, 'b') + tl(108, 140, ['cool air sinks', 'over the sea'], { a: 'start', sz: 11, c: 'cc' }, 13);
    s += T(240, 24, 'Daytime convection cell', { c: 'lb', sz: 13 });
    return svg(480, 276, s, 'By day the land heats faster than the sea, so its air rises and cooler sea air slides in underneath: a sea breeze.');
  });

  def('tz-lapse', () => {
    let s = `<path class="w ax" d="M70 20V240"/>` + T(70, 12, 'altitude', { sz: 11, c: 'tk' });
    [[0, 'T₀', 0], [1, 'T₀ − 9.8 K', 1], [2, 'T₀ − 19.6 K', 2]].forEach(([km, t]) => { const y = 220 - km * 90; s += ln(64, y, 76, y) + T(58, y + 4, km + ' km', { a: 'end', sz: 11, c: 'tk' }) + `<circle cx="${160}" cy="${y}" r="${16 + km * 6}" class="w fb"/>` + T(160, y + 4, 'air', { sz: 10.5, c: 'vl' }) + T(200 + km * 8, y + 4, t, { a: 'start', c: km ? 'cc' : 'lb', sz: 12 }); if (km < 2) s += AR(160, y - 18 - km * 6, 160, y - 72, 'r'); });
    s += `<path d="M330 50q-20 0 -20 -14q0 -16 22 -14q8 -14 30 -6q24 -4 26 14q18 4 10 20z" class="w fm" transform="translate(40 0)"/>` + tl(412, 82, ['cloud:', 'condensation', 'releases L_v'], { sz: 10.5, c: 'hc' }, 12).replace(/x="412"/g, 'x="404"');
    s += T(260, 226, 'dry rising air cools', { sz: 11.5, c: 'vl' }).replace('y="226"', 'y="228"') + T(260, 242, '≈ 9.8 K per km (adiabatic)', { sz: 11.5, c: 'lb' });
    return svg(480, 256, s, 'Rising air expands and cools adiabatically by about 9.8 K per km (dry); once it is cool enough for a cloud, condensation releases latent heat.');
  });

  /* =============== t21 / t23 test maps =============== */
  def('tz-test-map', () => {
    const A = [['Temperature, scales, units, heat definitions', 't01 t02', 'conversions, unit conversion, heat vs temperature'], ['Phases and latent heat', 't04', 'heating-curve totals, mixing ice/water, phase diagrams'], ['Heat transfer and thermal properties', 't03 t05 t06 t20', 'Q = mcΔT, calorimetry, Fourier, R-values, radiation'], ['Laws and processes', 't09 t10 t11 t14', 'first-law signs, PV diagrams, Carnot, COP, gas laws'], ['Div C extras: exitance, entropy, enthalpy', 't07 t12 t13', 'M = εσT⁴, Wien, ΔS, Hess’s law, ΔG'], ['History', 't15', 'who-did-what, dates, units, caloric vs kinetic'], ['Device and data (event skill)', 't08 t16 t17 t18', 'prediction, scoring, materials, calibration']];
    let s = '';
    A.forEach(([n, l, q], i) => { const y = 8 + i * 44; s += R(14, y, 452, 38, 'fm', 6) + `<rect x="14" y="${y}" width="6" height="38" rx="3" class="w ${['fo o', 'fg grn', 'fb cold', 'fr hot', 'fo o', 'fg grn', 'fb cold'][i]}"/>` + T(30, y + 16, n, { a: 'start', c: 'lb', sz: 12 }) + T(30, y + 31, q, { a: 'start', c: 'vl', sz: 10.5 }) + T(456, y + 16, l, { a: 'end', c: 'oc', sz: 11.5 }); });
    return svg(480, 322, s, 'The written-test map: seven areas, each tied to the lessons that cover it (2027 rules: 3 questions per area; plan for more).');
  });

  def('tz-event-timeline', () => {
    let s = ''; const x0 = 100;
    const segs = [[0, 60, 'Setup', 'fo o'], [60, 60, 'Predict T_f', 'fg grn'], [120, 190, '', 'fm'], [310, 60, 'Final T', 'fr hot']];
    s += T(56, 54, 'Partner A', { c: 'lb', sz: 12 }) + T(56, 69, 'device + data', { sz: 10.5, c: 'vl' }) + T(56, 124, 'Partner B', { c: 'lb', sz: 12 }) + T(56, 139, 'written test', { sz: 10.5, c: 'vl' });
    [[0, 60, 'Setup ≈ 5 min', 'fo o', 'Setup'], [60, 60, 'Predict', 'fg grn', 'Predict']].forEach(([a, w, t, c]) => { });
    const A = [[0, 62, ['Setup', '≈ 5 min'], 'fo o'], [62, 58, ['Predict', 'T_f'], 'fg grn'], [120, 190, ['Clock running:', 'log T every minute'], 'fb cold'], [310, 62, ['Read', 'final T!'], 'fr hot']];
    const B = [[0, 62, ['Help', 'setup'], 'fo o'], [62, 58, ['Predict', 'T_f'], 'fg grn'], [120, 190, ['Written test', '(faster calculator)'], 'fm'], [310, 62, ['Watch', 'the clock'], 'fr hot']];
    A.forEach(([a, w, t, c]) => { s += `<rect x="${x0 + a}" y="34" width="${w - 3}" height="48" rx="5" class="w ${c}"/>` + tl(x0 + a + (w - 3) / 2, 54, t, { c: 'lb', sz: 11 }, 14); });
    B.forEach(([a, w, t, c]) => { s += `<rect x="${x0 + a}" y="104" width="${w - 3}" height="48" rx="5" class="w ${c}"/>` + tl(x0 + a + (w - 3) / 2, 124, t, { c: 'lb', sz: 11 }, 14); });
    s += ln(x0, 178, x0 + 372, 178, '', 'style="stroke-width:1.5"') + T(x0, 196, 'start', { a: 'start', c: 'tk' }) + T(x0 + 372, 196, 'end of cooling time', { a: 'end', c: 'tk' });
    s += T(240, 18, 'The test runs concurrently with device testing', { c: 'lb', sz: 12 });
    s += T(240, 222, 'One partner must always watch the clock so the final temperature is read on time.', { sz: 11, c: 'vl' });
    return svg(480, 236, s, 'A two-person plan: set up and predict together, then one partner tracks the device while the other works the written test.');
  });

  def('tz-binder', () => {
    let s = '';
    s += R(40, 12, 290, 248, 'fm', 8);
    [44, 110, 176, 232].forEach(y => { s += `<circle cx="40" cy="${y}" r="9" class="w"/>`; });
    s += T(190, 38, 'Front of the binder', { c: 'lb', sz: 13 });
    s += tl(62, 64, ['• 8 scientists: who → what', '• phase-diagram sketch', '• unit-conversion list', '• Carnot and ideal-gas formulas', '• constants, c / L / k / ε / α tables', '• PV process table, first-law signs', '• Hess / Gibbs logic, radiation laws', '• history timeline (units named for people)', '• device plots, prediction table'], { a: 'start', sz: 11, c: 'lb' }, 20);
    const tabs = ['1 Systems, temp, units', '2 Phases, gas law', '3 Heat transfer', '4 Laws, processes', '5 History', '6 Radiation, 3rd law', '7 Entropy, enthalpy'];
    tabs.forEach((t, i) => { const y = 20 + i * 34; s += `<path d="M330 ${y}h110a6 6 0 0 1 6 6v20a6 6 0 0 1 -6 6h-110z" class="w ${['fo o', 'fg grn', 'fb cold', 'fr hot', 'fo o', 'fg grn', 'fb cold'][i]}"/>` + T(338, y + 20, t, { a: 'start', sz: 10.5, c: 'lb' }); });
    s += T(240, 282, 'hole-punched, secured in a 3-ring binder; sheets may be pulled out', { sz: 11, c: 'vl' });
    return svg(480, 296, s, 'Binder layout: the most-asked items at the front and tabbed dividers named after the seven subject areas.');
  });

  /* =============== t22 Statistical mechanics =============== */
  def('tz-boltzmann', () => DG.graph({
    w: 480, h: 290, x: [0, 5], y: [0, 1.08], xt: [0, 1, 2, 3, 4, 5], yt: [0, 0.5, 1], mb: 50,
    xl: 'energy E of a microstate  (units of ε)', yl: 'relative probability e^(−E/k_BT)',
    draw: (sx, sy) => {
      let s = DG.curve(E => Math.exp(-E / 1), sx, sy, 0, 5, 60, 'cold') + DG.curve(E => Math.exp(-E / 3), sx, sy, 0, 5, 60, 'hot');
      [1, 2, 3].forEach(E => { s += DOT(sx(E), sy(Math.exp(-E / 1)), 'cold') + DOT(sx(E), sy(Math.exp(-E / 3)), 'hot'); });
      s += T(sx(1.0), sy(Math.exp(-1)) - 14, 'k_BT = ε (cold)', { a: 'start', sz: 11.5, c: 'cc' }) + T(sx(3.0), sy(Math.exp(-1)) + 4, 'k_BT = 3ε (hot)', { a: 'start', sz: 11.5, c: 'hc' });
      s += T(sx(5) - 4, sy(1.08) + 14, 'P(E) ∝ e^(−E/k_BT)', { a: 'end', sz: 12, c: 'lb' });
      s += tl(sx(5) - 4, sy(0.2) - 4, ['higher T: high-energy states', 'become far more populated'], { a: 'end', sz: 10.5, c: 'vl' }, 12);
      return s;
    },
    cap: 'Boltzmann factor: every state is less likely the higher its energy, but raising T flattens the curve so excited states fill up.'
  }));

  def('tz-equipartition', () => {
    const x0 = 120, k = 90; let s = '';
    const seg = (x, w, t, c) => `<rect x="${x0 + x * k}" y="0" width="${w * k - 3}" height="0"/>`;
    const rows = [['Monatomic gas', [[1.5, '3 trans', 'fo o']], '3R/2'], ['Diatomic gas', [[1.5, '3 trans', 'fo o'], [1, '2 rot', 'fg grn'], [1, '2 vib (> ~1000 K)', 'fr hot']], '5R/2, then 7R/2'], ['Solid', [[1.5, '3 KE', 'fo o'], [1.5, '3 PE', 'fb cold']], '3R (Dulong–Petit)']];
    rows.forEach(([n, parts, tot], i) => { const y = 22 + i * 58; s += T(x0 - 8, y + 26, n, { a: 'end', c: 'lb', sz: 12 }); let a = 0; parts.forEach(([v, t, c]) => { s += `<rect x="${x0 + a * k}" y="${y}" width="${v * k - 2}" height="38" rx="4" class="w ${c}"/>` + T(x0 + (a + v / 2) * k - 1, y + 24, t, { c: 'lb', sz: v < 1.2 ? 10 : 11 }); a += v; }); s += T(x0 + a * k + 6, y + 24, 'C_v = ' + tot, { a: 'start', sz: 11.5, c: 'vl' }).replace(/x="(\d+)"/, (m, g) => `x="${Math.min(+g, 0) || g}"`); });
    s += T(240, 214, 'each quadratic degree of freedom carries ½k_BT (½R per mole of C_v)', { c: 'lb', sz: 11.5 });
    s += T(240, 232, 'quantum freeze-out: modes with spacing > k_BT drop out at low T', { sz: 11, c: 'vl' });
    return svg(480, 246, s, 'Equipartition counts degrees of freedom: C_v/R = (number of quadratic terms) ÷ 2, valid once the temperature is high enough to excite them.');
  });

  def('tz-potentials', () => {
    const Pn = [['Internal energy U', 'U', 'natural: S, V', 'dU = T dS − P dV', 'isolated, adiabatic (S, V fixed)', 'fo o'], ['Enthalpy H', 'U + PV', 'natural: S, P', 'dH = T dS + V dP', 'constant S, P', 'fg grn'], ['Helmholtz F', 'U − TS', 'natural: T, V', 'dF = −S dT − P dV', 'constant T, V', 'fb cold'], ['Gibbs G', 'H − TS', 'natural: T, P', 'dG = −S dT + V dP', 'constant T, P (chemistry)', 'fr hot']];
    let s = '';
    Pn.forEach(([n, d, nv, dd, cond, c], i) => { const x = 10 + (i % 2) * 240, y = 10 + Math.floor(i / 2) * 118; s += R(x, y, 226, 106, 'fm', 8) + `<rect x="${x}" y="${y}" width="226" height="6" rx="3" class="w ${c}"/>` + T(x + 113, y + 28, n, { c: 'lb', sz: 13 }) + T(x + 113, y + 46, d === 'U' ? 'the energy itself' : 'defined as ' + d, { sz: 11, c: 'vl' }) + T(x + 113, y + 62, nv, { sz: 11, c: 'vl' }) + T(x + 113, y + 80, dd, { sz: 12, c: 'lb' }) + T(x + 113, y + 97, 'minimum: ' + cond, { sz: 10, c: 'vl' }); });
    return svg(480, 246, s, 'Each potential is the right “energy” for a different set of fixed variables; Gibbs G is the one for chemistry at constant T and P.');
  });

  /* =============== t23 2027 map =============== */
  def('tz-area-wheel', () => {
    const N = ['Systems, zeroth law, temperature, heat units', 'Phases, phase diagrams, latent heat, ideal gas', 'Heat transfer, conductivity, heat capacity', 'Laws and processes (Carnot, adiabatic…)', 'History: Kelvin, Black, Joule, Carnot, Planck, Clausius, Boltzmann, Maxwell', 'Radiant exitance, blackbody, Stefan–Boltzmann, 3rd law', 'Entropy and enthalpy'];
    const cls = ['fg grn', 'fg grn', 'fg grn', 'fg grn', 'fg grn', 'fb cold', 'fr hot'];
    let s = '', cx = 120, cy = 130, r = 100;
    for (let i = 0; i < 7; i++) { const a0 = i * 2 * Math.PI / 7, a1 = (i + 1) * 2 * Math.PI / 7, am = (a0 + a1) / 2; s += wedge(cx, cy, r, a0, a1, cls[i]); s += T(cx + r * 0.72 * Math.sin(am), cy - r * 0.72 * Math.cos(am) + 6, i + 1, { c: 'lb', sz: 18 }); }
    s += C(cx, cy, 30, 'fm') + T(cx, cy - 2, '3 Q', { c: 'lb', sz: 14 }) + T(cx, cy + 13, 'each', { sz: 11, c: 'vl' });
    const wr = (t, w) => { const words = t.split(' '), out = []; let cur = ''; words.forEach(x => { if ((cur + ' ' + x).trim().length > w) { out.push(cur); cur = x; } else cur = (cur + ' ' + x).trim(); }); out.push(cur); return out; };
    let y = 22;
    N.forEach((n, i) => { const lines = wr(n, 40); s += C(254, y + 4, 8, cls[i]) + T(254, y + 8, i + 1, { sz: 10, c: 'lb' }) + tl(270, y + 8, lines, { a: 'start', sz: 11, c: i > 4 ? (i === 5 ? 'cc' : 'hc') : 'lb' }, 13); y += 13 * lines.length + 14; });
    s += tl(270, y + 4, ['Green: all tiers.  Blue and red: State/Nat only', '(area 7 also Division C only).'], { a: 'start', sz: 10.5, c: 'vl' }, 13);
    return svg(480, 268, s, 'The 2027 written test: three questions from each of seven subject areas. Areas 1–5 are at every tier; 6–7 appear at State/Nationals only.');
  });

  def('tz-test-composition', () => {
    const k = 20, x0 = 30; let s = '';
    const row = (y, n, lab, hist) => { for (let i = 0; i < n; i++) { const c = i === 4 && hist ? 'fo o' : i < 5 ? 'fg grn' : i === 5 ? 'fb cold' : 'fr hot'; s += `<rect x="${x0 + i * 3 * k}" y="${y}" width="${3 * k - 2}" height="34" rx="4" class="w ${c}"/>` + T(x0 + i * 3 * k + 3 * k / 2 - 1, y + 22, i + 1, { c: 'lb', sz: 13 }); } s += T(x0, y - 8, lab, { a: 'start', c: 'lb', sz: 12 }); };
    row(36, 5, 'Regional / invitational: 5 areas × 3 = 15 questions', true);
    row(110, 7, 'Division C State / Nationals: 7 areas × 3 = 21 questions', true);
    s += T(x0 + 4.5 * 3 * k - 1, 92, 'History: 3 of 15 = 20 % of the test', { sz: 11.5, c: 'oc' }).replace(/x="[\d.]+"/, `x="${x0 + 4.5 * 3 * k - 1 - 60}"`);
    s += T(240, 176, 'Segment numbers are the subject areas 1–7; every area is worth the same 3 questions.', { sz: 11, c: 'vl' });
    return svg(480, 192, s, 'A flat test: no area can be skipped, and history alone is about one fifth of a regional test.');
  });

  def('tz-notes-rules', () => {
    let s = '';
    s += R(14, 10, 220, 190, 'fg grn', 8) + T(124, 32, 'Allowed', { c: 'grn', sz: 14 }).replace('class="t grn"', 'class="t oc"');
    s += tl(26, 58, ['• hole-punched pages secured', '  in a 3-ring binder (any size)', '• sheets may be removed', '  from the binder', '• two Class III calculators', '• tabbed dividers'], { a: 'start', sz: 11.5, c: 'lb' }, 20);
    s += R(246, 10, 220, 190, 'fr hot', 8) + T(356, 32, 'Not binder notes', { c: 'hc', sz: 14 });
    s += tl(258, 58, ['• loose or stapled papers', '• sheet protectors without', '  holes', '• index cards carried loose', '• anything not punched and', '  secured in the binder'], { a: 'start', sz: 11.5, c: 'lb' }, 20);
    s += T(240, 224, 'Same rules for Division B and C (2027, verified).', { sz: 11, c: 'vl' });
    return svg(480, 238, s, 'Notes and calculators: punch everything, file it in a 3-ring binder, and bring two Class III calculators.');
  });

  def('tz-phase-diagram', () => {
    let s = `<path class="w ax" d="M60 20V230H440"/>` + T(56, 14, 'P', { a: 'end', c: 'lb' }) + T(440, 248, 'T', { a: 'end', c: 'lb' });
    s += P('M190 170L172 30', 'b', 'style="stroke-width:2.5"') + P('M190 170Q300 160 400 50', 'hot', 'style="stroke-width:2.5"') + P('M190 170Q150 195 70 225', 'grn', 'style="stroke-width:2.5"');
    s += DOT(190, 170) + DOT(400, 50);
    s += T(112, 100, 'SOLID', { c: 'lb', sz: 14 }) + T(262, 90, 'LIQUID', { c: 'lb', sz: 14 }) + T(330, 200, 'GAS', { c: 'lb', sz: 14 });
    s += tl(200, 196, ['triple point', '0.01 °C, 611.7 Pa'], { a: 'start', sz: 11, c: 'lb' }, 13).replace(/x="200"/g, 'x="196"').replace('y="196"', 'y="214"');
    s += tl(408, 48, ['critical point', '374 °C, 22.06 MPa'], { a: 'start', sz: 11, c: 'lb' }, 13).replace(/x="408"/g, 'x="350"').replace('y="48"', 'y="22"');
    s += T(74, 60, 'melting line leans left:', { a: 'start', sz: 10, c: 'vl' }).replace('x="74"', 'x="190"').replace('y="60"', 'y="52"');
    s += T(190, 64, 'for water, pressure lowers the melting point', { a: 'start', sz: 10, c: 'vl' }).replace('y="64"', 'y="64"');
    s += T(92, 214, 'sublimation', { a: 'start', sz: 10.5, c: 'grn' }).replace('class="t grn"', 'class="t oc"') + T(300, 140, 'boiling', { a: 'start', sz: 10.5, c: 'hc' }).replace('x="300"', 'x="290"').replace('y="140"', 'y="146"');
    return svg(480, 256, s, 'P–T phase diagram of water (schematic, not to scale): three equilibrium lines meet at the triple point, and the liquid–gas line ends at the critical point.');
  });

  def('tz-who8', () => {
    const W = [['Kelvin', 'absolute scale (1848);', 'Kelvin–Planck statement'], ['Black', 'latent and specific heat (1761);', 'heat vs temperature'], ['Joule', 'mechanical equivalent of heat:', 'paddle wheel, ≈ 4.18 J/cal'], ['Carnot', 'Carnot cycle, 1824;', '“father of thermodynamics”'], ['Planck', 'blackbody law, E = hν (1900);', 'named k_B'], ['Clausius', 'coined entropy (1865);', 'Clausius statement'], ['Boltzmann', 'S = k ln W;', 'statistical mechanics'], ['Maxwell', 'speed distribution (1860);', 'Maxwell’s demon (1867)']];
    let s = '';
    W.forEach(([n, a, b], i) => { const x = 10 + (i % 2) * 238, y = 8 + Math.floor(i / 2) * 58; s += R(x, y, 228, 50, 'fm', 6) + `<rect x="${x}" y="${y}" width="5" height="50" rx="2.5" class="w ${['fo o', 'fg grn', 'fb cold', 'fr hot'][Math.floor(i / 2)]}"/>` + T(x + 14, y + 18, n, { a: 'start', c: 'lb', sz: 13 }) + T(x + 14, y + 33, a, { a: 'start', c: 'vl', sz: 10.5 }) + T(x + 14, y + 45, b, { a: 'start', c: 'vl', sz: 10.5 }); });
    return svg(480, 246, s, 'The eight required scientists as “who → what” flashcards (Black 1761; Carnot 1824; Clausius 1865; Planck 1900).');
  });
})();
