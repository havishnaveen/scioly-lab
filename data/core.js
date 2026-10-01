/* ============ GLOBAL DATA NAMESPACE + HELPERS ============ */
window.DATA = {
  lessons: [], questions: [], gens: [], cards: [], timeline: [], syllabus: [], rules: {},
  events: {
    circuit: { name: 'Circuit Lab', short: 'Circuit', color: 'var(--circ)', cls: 'b-circ', icon: '⚡' },
    thermo:  { name: 'Thermodynamics', short: 'Thermo', color: 'var(--therm)', cls: 'b-th', icon: '🔥' }
  },
  tiers: {
    core: { label: 'CORE · all tiers', cls: 'b-core', desc: 'Named on the official written-test topic list. Fair game at every level (regionals included).' },
    sn:   { label: 'STATE/NAT', cls: 'b-sn', desc: 'Officially restricted to States/Nationals in the 2026 manual — but invitationals and some regionals routinely ignore this. Learn it anyway.' },
    hw:   { label: 'HANDS-ON', cls: 'b-hw', desc: 'Practical lab skills: breadboards, multimeters, building, measuring, safety.' },
    hist: { label: 'HISTORY', cls: 'b-hist', desc: 'Named scientists, discoveries, dates. Cheap points if memorized.' },
    adv:  { label: 'SEPARATOR', cls: 'b-adv', desc: 'Advanced analysis / math that separates top teams from the pack.' },
    xtra: { label: 'BEYOND RULES', cls: 'b-xtra', desc: 'Not on the official list (or listed as excluded) but appears in SciOly practice material / invitational tests. Insurance against blind spots.' }
  }
};
const _evOf = t => (t[0] === 'c' ? 'circuit' : 'thermo');
/* Lesson: {id,t(title),tier,yield(1-3),min,off(official topic label),formulas:[],html} */
function L(o) { o.ev = _evOf(o.id); DATA.lessons.push(o); }
/* Question helpers. opts: {f:1 tryout-filter, dg:1 diagnostic, tier:'sn'} */
function _q(type, t, d, q, extra, o) {
  o = o || {};
  const tl = () => DATA.lessons.find(l => l.id === t);
  DATA.questions.push(Object.assign({ id: 'q' + (DATA.questions.length + 1), type, t, ev: _evOf(t), d, q, f: !!o.f, dg: !!o.dg, tier: o.tier || null, fig: o.fig || null }, extra));
}
function MC(t, d, q, ch, ans, exp, o) { _q('mc', t, d, q, { ch, ans, exp }, o); }
function MS(t, d, q, ch, ans, exp, o) { _q('ms', t, d, q, { ch, ans, exp }, o); }
function TF(t, d, q, ans, exp, o) { _q('tf', t, d, q, { ans, exp }, o); }
function NUM(t, d, q, ans, unit, exp, o) { o = o || {}; _q('num', t, d, q, { ans, unit: unit || '', exp, tol: o.tol || 0.02 }, o); }
/* Generator: fn(rnd) -> {q, ans, unit, exp, (ch, for mc)} */
function G(id, t, d, title, fn, o) { o = o || {}; DATA.gens.push({ id, t, ev: _evOf(t), d, title, fn, f: !!o.f, tier: o.tier || null }); }
/* Flashcards: C(ev, deck, front, back) */
function C(ev, deck, front, back) { DATA.cards.push({ id: 'k' + (DATA.cards.length + 1), ev, deck, front, back }); }
/* Timeline: T(ev, year, who, what) */
function T(ev, year, who, what) { DATA.timeline.push({ ev, year, who, what }); }

/* small SVG helpers for lessons */
window.SVG = {
  wrap: (w, h, inner) => `<svg class="dia" viewBox="0 0 ${w} ${h}" width="${w}" role="img">${inner}</svg>`,
  res: (x, y, label) => `<path class="w" d="M${x} ${y} h8 l4 -9 l8 18 l8 -18 l8 18 l8 -18 l4 9 h8"/><text x="${x + 10}" y="${y - 14}">${label || ''}</text>`,
  bat: (x, y, label) => `<path class="w" d="M${x} ${y - 14} v28 M${x + 10} ${y - 8} v16"/><text x="${x - 8}" y="${y + 30}">${label || ''}</text>`
};
