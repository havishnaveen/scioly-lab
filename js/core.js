/* ============ APP CORE: store, router, nav, helpers ============ */
(function () {
  const A = (window.App = { views: {}, tools: {} });
  A.$ = (s, r) => (r || document).querySelector(s);
  A.$$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  A.esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  A.sf = (x, n) => Number(Number(x).toPrecision(n || 4));
  A.rand = { int: (a, b) => a + Math.floor(Math.random() * (b - a + 1)), pick: arr => arr[Math.floor(Math.random() * arr.length)], float: (a, b, d) => Number((a + Math.random() * (b - a)).toFixed(d == null ? 2 : d)) };
  A.shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  A.today = () => new Date().toISOString().slice(0, 10);

  /* ---------- store ---------- */
  const KEY = 'sciolab_v1';
  const blank = () => ({ q: {}, wrong: {}, les: {}, cards: {}, diag: [], mocks: [], syl: { start: null, done: {} }, notes: { circuit: '', thermo: '' }, rules27: '', theme: 'light', ev: 'circuit', gen: {}, sess: {}, days: {}, bind: { checks: {} }, tlBest: 0 });
  A.blank = blank; let S;
  let memOnly = false;
  try { S = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { S = null; memOnly = true; }
  S = Object.assign(blank(), S || {});
  A.S = S;
  A.save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { memOnly = true; } };
  A.memOnly = () => memOnly;
  A.exportData = () => JSON.stringify(S, null, 1);
  A.importData = txt => { const o = JSON.parse(txt); Object.keys(S).forEach(k => delete S[k]); Object.assign(S, blank(), o); A.save(); };
  A.reset = () => { Object.keys(S).forEach(k => delete S[k]); Object.assign(S, blank()); A.save(); };
  A.markDay = () => { S.days[A.today()] = (S.days[A.today()] || 0) + 1; };
  A.streak = () => { let n = 0; const d = new Date(); if (!S.days[A.today()]) d.setDate(d.getDate() - 1); while (S.days[d.toISOString().slice(0, 10)]) { n++; d.setDate(d.getDate() - 1); } return n; };

  /* ---------- progress helpers ---------- */
  A.lesson = id => DATA.lessons.find(l => l.id === id);
  A.recordQ = (q, correct) => {
    const id = q.id; const r = S.q[id] || (S.q[id] = { n: 0, c: 0 });
    r.n++; if (correct) r.c++; r.last = correct ? 1 : 0; r.t = Date.now();
    if (!String(id).startsWith('g:')) { if (correct) { r.streakOk = (r.streakOk || 0) + 1; if (r.streakOk >= 2) delete S.wrong[id]; } else { S.wrong[id] = 1; r.streakOk = 0; } }
    else { const g = S.gen[q.gid] || (S.gen[q.gid] = { n: 0, c: 0 }); g.n++; if (correct) g.c++; }
    A.markDay(); A.save();
  };
  // accuracy for a lesson from static questions + generator practice
  A.lessonStats = id => {
    let n = 0, c = 0;
    DATA.questions.forEach(q => { if (q.t === id && S.q[q.id]) { n += S.q[q.id].n; c += S.q[q.id].c; } });
    DATA.gens.forEach(g => { if (g.t === id && S.gen[g.id]) { n += S.gen[g.id].n; c += S.gen[g.id].c; } });
    return { n, c, pct: n ? c / n : null };
  };
  A.lessonScore = id => { // 0..1 mastery
    const st = A.lessonStats(id), l = S.les[id] || {};
    const cover = Math.min(1, st.n / 6);
    return (l.done ? 0.3 : 0) + 0.7 * cover * (st.pct || 0);
  };
  A.readiness = ev => {
    const ls = DATA.lessons.filter(l => l.ev === ev); let w = 0, s = 0;
    ls.forEach(l => { w += l.yield; s += l.yield * A.lessonScore(l.id); });
    return w ? s / w : 0;
  };
  A.weakTopics = (ev, k) => DATA.lessons.filter(l => !ev || l.ev === ev)
    .map(l => ({ l, s: A.lessonScore(l.id), st: A.lessonStats(l.id) }))
    .sort((a, b) => (a.s - b.s) || (b.l.yield - a.l.yield)).slice(0, k || 5);

  /* ---------- UI helpers ---------- */
  A.toast = (msg, ms) => { const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), ms || 2400); };
  A.badge = (txt, cls) => `<span class="badge ${cls || ''}">${txt}</span>`;
  A.tierBadge = t => { const x = DATA.tiers[t]; return x ? `<span class="badge ${x.cls}" title="${A.esc(x.desc)}">${x.label}</span>` : ''; };
  A.evBadge = ev => `<span class="badge ${DATA.events[ev].cls}">${DATA.events[ev].icon} ${DATA.events[ev].short}</span>`;
  A.stars = n => '★'.repeat(n) + '☆'.repeat(3 - n);
  A.pct = x => Math.round(100 * x) + '%';
  A.bar = (x, cls) => `<div class="bar ${cls || ''}"><i style="width:${Math.round(100 * Math.max(0, Math.min(1, x)))}%"></i></div>`;
  A.render = html => { const m = A.$('#main'); m.innerHTML = html; window.scrollTo(0, 0); return m; };
  A.fmtTime = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  A.cleanups = [];
  A.onLeave = fn => A.cleanups.push(fn);

  /* ---------- router ---------- */
  const routes = [];
  A.route = (re, fn) => routes.push([re, fn]);
  A.go = h => { location.hash = h; };
  A.routeFirst = (re, fn) => routes.unshift([re, fn]);
  function dispatch() {
    A.cleanups.splice(0).forEach(f => { try { f(); } catch (e) {} });
    const h = (location.hash || '#/').slice(1) || '/';
    let hit = false;
    for (const [re, fn] of routes) {
      const m = h.match(re);
      if (m) { hit = true; try { fn.apply(null, m.slice(1).map(decodeURIComponent)); } catch (e) { console.error(e); A.render(`<div class="card"><h2>Something went wrong</h2><pre>${A.esc(e.stack || e)}</pre></div>`); } break; }
    }
    if (!hit) A.render('<div class="card"><h2>Page not found</h2><a href="#/">← Dashboard</a></div>');
    A.buildNav(); A.$('#side').classList.remove('open');
  }
  A.dispatch = dispatch;
  window.addEventListener('hashchange', dispatch);

  /* ---------- nav ---------- */
  A.buildNav = () => {
    const cur = (location.hash || '#/').slice(1) || '/';
    const item = (href, ic, label, extra) => `<a href="#${href}" class="${cur === href || (href !== '/' && cur.startsWith(href + '/')) ? 'active' : ''}"><span class="ic">${ic}</span>${label}${extra || ''}</a>`;
    const due = A.dueCards().length;
    A.$('#nav').innerHTML =
      item('/', '🏠', 'Dashboard') + item('/diag', '🧭', 'Diagnostic') + item('/syllabus', '🗓️', '30-Day Plan') +
      '<div class="sec">Learn</div>' + item('/learn/circuit', '⚡', 'Circuit Lab lessons') + item('/learn/thermo', '🔥', 'Thermodynamics lessons') +
      '<div class="sec">Practice</div>' + item('/drill', '🎯', 'Drills (infinite)') + item('/mock', '📝', 'Mock exams') + item('/wrong', '❌', 'Wrong-answer bank', Object.keys(S.wrong).length ? `<span class="badge" style="margin-left:auto">${Object.keys(S.wrong).length}</span>` : '') +
      item('/cards', '🃏', 'Flashcards', due ? `<span class="badge" style="margin-left:auto">${due}</span>` : '') +
      '<div class="sec">Hands-on & tools</div>' + item('/lab', '🔧', 'Hands-On Lab') + item('/tools', '🧮', 'Tools & calculators') +
      '<div class="sec">Reference</div>' + item('/timeline', '📜', 'History timeline') + item('/rules', '📋', 'Rules audit') + item('/binder', '📒', 'Binder / formula sheets') + item('/settings', '⚙️', 'Settings & data');
    A.$('#sideft').innerHTML = `Streak: <b>${A.streak()} day${A.streak() === 1 ? '' : 's'}</b> · Circuit ${A.pct(A.readiness('circuit'))} · Thermo ${A.pct(A.readiness('thermo'))}` + (memOnly ? '<br><span style="color:var(--warn)">Progress not being saved (storage blocked)</span>' : '');
  };

  /* ---------- flashcard scheduling (needed by nav) ---------- */
  const IV = [0, 1, 2, 4, 8, 16, 32];
  A.dueCards = ev => DATA.cards.filter(c => (!ev || c.ev === ev) && S.cards[c.id] && S.cards[c.id].due <= Date.now());
  A.newCards = ev => DATA.cards.filter(c => (!ev || c.ev === ev) && !S.cards[c.id]);
  A.rateCard = (id, grade) => { // grade 0 again,1 good,2 easy
    const c = S.cards[id] || { box: 0 };
    c.box = grade === 0 ? 1 : Math.min(6, c.box + (grade === 2 ? 2 : 1));
    c.due = Date.now() + IV[c.box] * 86400000 * (grade === 0 ? 0 : 1) + (grade === 0 ? 60000 : 0);
    S.cards[id] = c; A.markDay(); A.save();
  };

  /* ---------- search ---------- */
  A.strip = h => h.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ');
  let idx = null;
  A.search = q => {
    if (!idx) idx = DATA.lessons.map(l => ({ l, text: (l.t + ' ' + (l.formulas || []).map(f => f.join(' ')).join(' ') + ' ' + A.strip(l.html)).toLowerCase(), title: l.t.toLowerCase() }));
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean); if (!terms.length) return [];
    return idx.map(o => {
      let s = 0; for (const t of terms) { if (!o.text.includes(t)) return null; s += (o.title.includes(t) ? 20 : 0) + Math.min(10, o.text.split(t).length - 1); }
      return { l: o.l, s, snip: (() => { const i = o.text.indexOf(terms[0]); return i < 0 ? '' : '…' + o.text.slice(Math.max(0, i - 50), i + 90).trim() + '…'; })() };
    }).filter(Boolean).sort((a, b) => b.s - a.s).slice(0, 25);
  };
  A.views.search = q => {
    const res = A.search(q);
    const cards = DATA.cards.filter(c => (c.front + ' ' + c.back).toLowerCase().includes(q.toLowerCase())).slice(0, 12);
    A.render(`<h1>Search: “${A.esc(q)}”</h1>` + (res.length ? res.map(r => `<a class="lrow" href="#/lesson/${r.l.id}"><span class="n">${r.l.id}</span><div><b>${A.esc(r.l.t)}</b><div class="small muted">${A.esc(r.snip)}</div></div></a>`).join('') : '<p class="muted">No lesson matches.</p>') +
      (cards.length ? '<h3>Flashcards</h3>' + cards.map(c => `<div class="card flat"><b>${A.esc(c.front)}</b><div class="muted">${A.esc(c.back)}</div></div>`).join('') : ''));
  };
  A.route(/^\/search\/(.+)$/, A.views.search);
  document.addEventListener('DOMContentLoaded', () => {
    const s = A.$('#search');
    s.addEventListener('keydown', e => { if (e.key === 'Enter' && s.value.trim()) { location.hash = '#/search/' + encodeURIComponent(s.value.trim()); } });
    document.addEventListener('keydown', e => { if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName)) { e.preventDefault(); s.focus(); } });
  });
  A.applyTheme = () => document.documentElement.setAttribute('data-theme', S.theme || 'light');
})();
