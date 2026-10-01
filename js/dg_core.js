/* ============ DIAGRAM LIBRARY (core): inline SVG primitives, circuit symbols, graphs ============ */
(function () {
  const DG = (window.DG = { lib: {}, reg: {} });
  const f = n => Math.round(n * 10) / 10;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  DG.esc = esc; DG.f = f;
  const DEFS = `<defs>${[['ar', 'currentColor'], ['ao', '#f97316'], ['ar2', '#dc2626'], ['ab', '#2563eb'], ['ag', '#15803d']].map(([id, c]) => `<marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`).join('')}</defs>`;
  const MK = { '': 'ar', o: 'ao', r: 'ar2', b: 'ab', g: 'ag' };
  /* wrapper */
  DG.svg = (w, h, inner, cap, alt) => `<figure class="dgm"><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(alt || cap || 'diagram')}" xmlns="http://www.w3.org/2000/svg">${DEFS}${inner}</svg>${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`;
  /* basic shapes */
  const T = (x, y, s, o) => { o = o || {}; return `<text x="${f(x)}" y="${f(y)}" class="t ${o.c || ''}" text-anchor="${o.a || 'middle'}"${o.sz ? ` style="font-size:${o.sz}px"` : ''}${o.rot ? ` transform="rotate(${o.rot} ${f(x)} ${f(y)})"` : ''}>${s}</text>`; };
  const L = (x1, y1, x2, y2, c, extra) => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" class="w ${c || ''}" ${extra || ''}/>`;
  const AR = (x1, y1, x2, y2, c, both) => `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" class="w ${c ? 's-' + c : ''}" marker-end="url(#${MK[c || '']})"${both ? ` marker-start="url(#${MK[c || '']})"` : ''}/>`;
  const P = (d, c, extra) => `<path d="${d}" class="w ${c || ''}" ${extra || ''}/>`;
  const R = (x, y, w, h, c, r) => `<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" rx="${r == null ? 4 : r}" class="w ${c || ''}"/>`;
  const C = (x, y, r, c) => `<circle cx="${f(x)}" cy="${f(y)}" r="${r}" class="w ${c || ''}"/>`;
  const DOT = (x, y, c) => `<circle cx="${f(x)}" cy="${f(y)}" r="3.4" class="dot ${c || ''}"/>`;
  const WIRE = (...pts) => `<polyline points="${pts.map(p => f(p[0]) + ',' + f(p[1])).join(' ')}" class="w"/>`;
  Object.assign(DG.lib, { T, L, AR, P, R, C, DOT, WIRE });
  /* ground symbol */
  DG.lib.GND = (x, y) => `<path class="w" d="M${x} ${y}v8M${x - 12} ${y + 8}h24M${x - 7} ${y + 13}h14M${x - 3} ${y + 18}h6"/>`;
  /* two-terminal symbols, drawn along local x axis centred at 0 */
  const S = {
    R: [24, () => `<path class="w" d="M-24 0L-20 -9L-12 9L-4 -9L4 9L12 -9L20 9L24 0"/>`],
    C: [6, () => `<path class="w" d="M-6 -14V14M6 -14V14"/>`],
    L: [24, () => `<path class="w" d="M-24 0a6 6 0 0 1 12 0a6 6 0 0 1 12 0a6 6 0 0 1 12 0a6 6 0 0 1 12 0"/>`],
    V: [6, () => `<path class="w" d="M-6 -15V15" style="stroke-width:3"/><path class="w" d="M6 -8V8" style="stroke-width:3"/>`],
    V2: [14, () => `<path class="w" d="M-14 -15V15M-6 -8V8M6 -15V15M14 -8V8" style="stroke-width:3"/>`],
    AC: [14, () => `<circle r="14" class="w"/><path class="w" d="M-8 0q4 -9 8 0t8 0"/>`],
    I: [14, () => `<circle r="14" class="w"/><path class="w" d="M-8 0H8" marker-end="url(#ar)"/>`],
    SW: [18, () => `<circle cx="-18" r="2.6" class="dot"/><circle cx="18" r="2.6" class="dot"/><path class="w" d="M-18 0L13 -15"/>`],
    SWc: [18, () => `<circle cx="-18" r="2.6" class="dot"/><circle cx="18" r="2.6" class="dot"/><path class="w" d="M-18 0H18"/>`],
    LAMP: [13, () => `<circle r="13" class="w"/><path class="w" d="M-9 -9L9 9M9 -9L-9 9"/>`],
    LED: [10, () => `<path class="w" d="M-9 -11V11L9 0Z"/><path class="w" d="M9 -11V11"/><path class="w s-o" d="M-1 -15l7 -7M4 -11l7 -7" marker-end="url(#ao)"/>`],
    D: [10, () => `<path class="w" d="M-9 -11V11L9 0Z"/><path class="w" d="M9 -11V11"/>`],
    Z: [10, () => `<path class="w" d="M-9 -11V11L9 0Z"/><path class="w" d="M13 -14L9 -11V11L5 14"/>`],
    FUSE: [16, () => `<rect x="-16" y="-6" width="32" height="12" rx="2" class="w"/><path class="w" d="M-16 0H16"/>`],
    M: [14, () => `<circle r="14" class="w"/><text class="t" y="5" text-anchor="middle" style="font-weight:700">M</text>`],
    G: [14, () => `<circle r="14" class="w"/><text class="t" y="5" text-anchor="middle" style="font-weight:700">G</text>`],
    A: [14, () => `<circle r="14" class="w"/><text class="t" y="5" text-anchor="middle" style="font-weight:700">A</text>`],
    VM: [14, () => `<circle r="14" class="w"/><text class="t" y="5" text-anchor="middle" style="font-weight:700">V</text>`],
    OHM: [14, () => `<circle r="14" class="w"/><text class="t" y="5" text-anchor="middle" style="font-weight:700">Ω</text>`],
    POT: [24, () => `<path class="w" d="M-24 0L-20 -9L-12 9L-4 -9L4 9L12 -9L20 9L24 0"/><path class="w s-o" d="M0 -26V-10" marker-end="url(#ao)"/>`],
    TH: [24, () => `<rect x="-24" y="-8" width="48" height="16" rx="2" class="w"/><path class="w" d="M-14 14L14 -14"/>`],
    BOX: [22, () => `<rect x="-22" y="-14" width="44" height="28" rx="4" class="w"/>`],
    RES: [0, () => ``]
  };
  DG.SYM = S;
  /* comp(type, x1,y1, x2,y2, label, value, opts) */
  DG.lib.comp = (type, x1, y1, x2, y2, lab, val, o) => {
    o = o || {}; const [half, draw] = S[type]; const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len, cx = (x1 + x2) / 2, cy = (y1 + y2) / 2;
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;
    let s = `<path class="w" d="M${f(x1)} ${f(y1)}L${f(cx - half * ux)} ${f(cy - half * uy)}M${f(cx + half * ux)} ${f(cy + half * uy)}L${f(x2)} ${f(y2)}"/>`;
    s += `<g transform="translate(${f(cx)} ${f(cy)}) rotate(${f(ang)})"${o.c ? ` class="${o.c}"` : ''}>${draw()}</g>`;
    const horiz = Math.abs(dy) <= Math.abs(dx), side = o.side || (horiz ? 'u' : 'r');
    const off = (type === 'V' || type === 'V2' || type === 'SW' || type === 'POT') ? 30 : 26;
    if (horiz) { if (side === 'd') { if (lab) s += T(cx, cy + off + 6, lab, { c: 'lb' }); if (val) s += T(cx, cy + off + (lab ? 20 : 6), val, { c: 'vl' }); } else { if (lab) s += T(cx, cy - off + 2, lab, { c: 'lb' }); if (val) s += T(cx, cy + 36, val, { c: 'vl' }); } }
    else { const xx = side === 'l' ? cx - off + 4 : cx + off - 4, an = side === 'l' ? 'end' : 'start'; if (lab) s += T(xx, cy - (val ? 1 : -4), lab, { c: 'lb', a: an }); if (val) s += T(xx, cy + (lab ? 14 : 4), val, { c: 'vl', a: an }); }
    if ((type === 'V' || type === 'V2') && !o.nopol) { const px = cx - (half + 11) * ux, py = cy - (half + 11) * uy; const nx = -uy, ny = ux; s += T(px + nx * 13, py + ny * 13 + 4, '+', { c: 'lb' }); s += T(cx + (half + 11) * ux + nx * 13, cy + (half + 11) * uy + ny * 13 + 4, '−', { c: 'lb' }); }
    return s;
  };

  /* rectangular loop with components auto-placed on each side: S = {t:[[type,label,value,opts]], r:[], b:[], l:[]} */
  DG.lib.loop = (x0, y0, x1, y1, S) => {
    const sides = [['t', x0, y0, x1, y0], ['r', x1, y0, x1, y1], ['b', x1, y1, x0, y1], ['l', x0, y1, x0, y0]], SIDE = { t: 'u', r: 'r', b: 'd', l: 'l' };
    let out = '';
    sides.forEach(([k, ax, ay, bx, by]) => {
      const items = (S && S[k]) || [], len = Math.hypot(bx - ax, by - ay), ux = (bx - ax) / len, uy = (by - ay) / len; let cur = [ax, ay];
      items.forEach((it, i) => {
        const [type, lab, val, o] = it, half = DG.SYM[type][0], c = (i + 1) / (items.length + 1), cx = ax + (bx - ax) * c, cy = ay + (by - ay) * c;
        let sx = cx - ux * half, sy = cy - uy * half, ex = cx + ux * half, ey = cy + uy * half; if (o && o.flip) { [sx, sy, ex, ey] = [ex, ey, sx, sy]; }
        out += `<line x1="${f(cur[0])}" y1="${f(cur[1])}" x2="${f(o && o.flip ? ex : sx)}" y2="${f(o && o.flip ? ey : sy)}" class="w"/>`;
        out += DG.lib.comp(type, sx, sy, ex, ey, lab, val, Object.assign({ side: SIDE[k] }, o || {}));
        cur = [o && o.flip ? sx : ex, o && o.flip ? sy : ey];
      });
      out += `<line x1="${f(cur[0])}" y1="${f(cur[1])}" x2="${bx}" y2="${by}" class="w"/>`;
    });
    return out;
  };
  /* parallel branches between a top rail and a bottom rail */
  DG.lib.rails = (xa, xb, yt, yb, br, o) => {
    o = o || {}; let out = `<line x1="${xa}" y1="${yt}" x2="${xb}" y2="${yt}" class="w"/><line x1="${xa}" y1="${yb}" x2="${xb}" y2="${yb}" class="w"/>`;
    br.forEach(([x, type, lab, val, oo]) => { const half = DG.SYM[type][0], cy = (yt + yb) / 2; out += `<line x1="${x}" y1="${yt}" x2="${x}" y2="${cy - half}" class="w"/>` + DG.lib.comp(type, x, cy - half, x, cy + half, lab, val, Object.assign({ side: 'r' }, oo || {})) + `<line x1="${x}" y1="${cy + half}" x2="${x}" y2="${yb}" class="w"/>`; if (x !== xa && x !== xb) out += `<circle cx="${x}" cy="${yt}" r="3.4" class="dot"/><circle cx="${x}" cy="${yb}" r="3.4" class="dot"/>`; });
    if (o.ends) out += `<line x1="${xa}" y1="${yt}" x2="${xa}" y2="${yb}" class="w"/><line x1="${xb}" y1="${yt}" x2="${xb}" y2="${yb}" class="w"/>`;
    return out;
  };
  /* loop-current arc with arrowhead (clockwise by default) */
  DG.lib.ARC = (cx, cy, r, c, ccw) => { const a0 = (-50) * Math.PI / 180, a1 = (-130) * Math.PI / 180, p = (a) => f(cx + r * Math.cos(a)) + ' ' + f(cy + r * Math.sin(a)); return ccw ? `<path d="M${p(a1)} A${r} ${r} 0 1 0 ${p(a0)}" class="w s-${c || 'o'}" marker-end="url(#${MK[c || 'o']})"/>` : `<path d="M${p(a0)} A${r} ${r} 0 1 1 ${p(a1)}" class="w s-${c || 'o'}" marker-end="url(#${MK[c || 'o']})"/>`; };
  /* graph helper: returns {svg, sx, sy} ; opts {w,h,x:[a,b],y:[a,b],xt,yt,xl,yl,grid,draw(sx,sy)} */
  DG.graph = o => {
    const w = o.w || 420, h = o.h || 250, ml = o.ml || 52, mr = o.mr || 16, mt = o.mt || 16, mb = o.mb || 42;
    const [x0, x1] = o.x, [y0, y1] = o.y; const sx = v => ml + (v - x0) / (x1 - x0) * (w - ml - mr), sy = v => h - mb - (v - y0) / (y1 - y0) * (h - mt - mb);
    let s = '';
    (o.xt || []).forEach(t => { const v = Array.isArray(t) ? t[0] : t, lb = Array.isArray(t) ? t[1] : t; s += `<line x1="${f(sx(v))}" y1="${mt}" x2="${f(sx(v))}" y2="${h - mb}" class="gr"/>` + T(sx(v), h - mb + 16, lb, { c: 'tk' }); });
    (o.yt || []).forEach(t => { const v = Array.isArray(t) ? t[0] : t, lb = Array.isArray(t) ? t[1] : t; s += `<line x1="${ml}" y1="${f(sy(v))}" x2="${w - mr}" y2="${f(sy(v))}" class="gr"/>` + T(ml - 6, sy(v) + 4, lb, { c: 'tk', a: 'end' }); });
    s += `<path class="w ax" d="M${ml} ${mt - 4}V${h - mb}H${w - mr + 4}"/>`;
    if (o.xl) s += T((ml + w - mr) / 2, h - 6, o.xl, { c: 'lb' });
    if (o.yl) s += T(14, (mt + h - mb) / 2, o.yl, { c: 'lb', rot: -90 });
    s += o.draw ? o.draw(sx, sy) : '';
    return DG.svg(w, h, s, o.cap, o.alt);
  };
  DG.curve = (fn, sx, sy, a, b, n, c) => { const pts = []; for (let i = 0; i <= (n || 80); i++) { const x = a + (b - a) * i / (n || 80), y = fn(x); if (isFinite(y)) pts.push(f(sx(x)) + ',' + f(sy(y))); } return `<polyline points="${pts.join(' ')}" class="w ${c || 'o'} thick"/>`; };
  /* register: DG.def('id', ()=> svgString) ; DG.make(id) */
  DG.def = (id, fn) => { DG.reg[id] = fn; };
  DG.make = id => { try { return DG.reg[id] ? DG.reg[id]() : ''; } catch (e) { console.error('diagram', id, e); return ''; } };
})();
