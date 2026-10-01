/* ============ SHELL v2: SVG icons, event switch, guided Learn/Practice/Refresh structure ============ */
(function () {
  const A = window.App, S = A.S, esc = A.esc, EV = DATA.events;
  S.ev = S.ev === 'thermo' ? 'thermo' : 'circuit';
  if (S.themeV !== 2) { S.theme = 'light'; S.themeV = 2; A.save(); } A.applyTheme();
  const SHORT = { circuit: 'Circuit', thermo: 'Thermo' };

  /* ---------- SVG icon set (stroke icons, currentColor) ---------- */
  const P = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    flame: '<path d="M12 22c4 0 7-2.8 7-7 0-3-2-5-3-7-1 2-2 3-3.5 3 0-3-1-6-3.5-8 0 4-4 6-4 12 0 4.2 3 7 7 7z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    xcircle: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
    cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 012 2v12"/>',
    wrench: '<path d="M21 6.5a5 5 0 01-7 5L5.5 20a2 2 0 01-3-3L11 8.5a5 5 0 015-7l-3.5 3.5 1.5 3 3 1.5z"/>',
    calc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 12h2M12 12h2M8 16h2M12 16h2"/>',
    scroll: '<path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M8 20a3 3 0 01-3-3M9 9h6M9 13h6"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 12h6M9 16h4"/>',
    book: '<path d="M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4zM20 4h-6a3 3 0 00-3 3v13a2 2 0 012-2h7z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1020 14.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z"/>',
    magnet: '<path d="M5 3v9a7 7 0 0014 0V3h-4v9a3 3 0 01-6 0V3z"/><path d="M5 7h4M15 7h4"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    thermo: '<path d="M10 14V5a2 2 0 014 0v9a4 4 0 11-4 0z"/>',
    timer: '<circle cx="12" cy="14" r="7"/><path d="M12 14v-3M9 3h6M12 3v4"/>',
    brick: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 12h18M9 4v8M15 12v8"/>',
    bell: '<path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4"/>',
    burst: '<path d="M12 2l2 5 5-2-2 5 5 2-5 2 2 5-5-2-2 5-2-5-5 2 2-5-5-2 5-2-2-5 5 2z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
    checkc: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
    cross: '<path d="M6 6l12 12M18 6L6 18"/>',
    warn: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
    alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/>',
    star: '<path fill="currentColor" d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    star0: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    pen: '<path d="M4 20l1-4L16 5l3 3L8 19z"/>',
    flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3"/>',
    puzzle: '<path d="M4 4h6v2a2 2 0 104 0V4h6v6h-2a2 2 0 100 4h2v6H4z"/>',
    trophy: '<path d="M7 4h10v5a5 5 0 01-10 0zM7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4M12 14v4M8 21h8M10 18h4"/>',
    hand: '<path d="M8 12V5a1.5 1.5 0 013 0v6M11 11V3.5a1.5 1.5 0 013 0V11M14 11V5a1.5 1.5 0 013 0v8c0 4-2 7-6 7s-5-2-7-5l-1-2a1.5 1.5 0 012-2l2 2"/>',
    palette: '<path d="M12 3a9 9 0 100 18c1.5 0 2-1 1.5-2-.6-1.2.2-2.5 1.5-2.5H17a4 4 0 004-4 9 9 0 00-9-9z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.5" r="1"/><circle cx="16" cy="11" r="1"/>',
    plug: '<path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0zM12 17v4"/>',
    chart: '<path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7"/>',
    repeat: '<path d="M4 12a8 8 0 0114-5l2 2M20 4v5h-5M20 12a8 8 0 01-14 5l-2-2M4 20v-5h5"/>',
    sigma: '<path d="M18 5H6l6 7-6 7h12"/>',
    printer: '<path d="M7 9V3h10v6M6 18H4v-7h16v7h-2M7 14h10v7H7z"/>',
    dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="15" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="9" cy="15" r="1"/>',
    dot: '<circle cx="12" cy="12" r="5" fill="currentColor"/>',
    dot0: '<circle cx="12" cy="12" r="5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chev: '<path d="M9 6l6 6-6 6"/>',
    learn: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',
    practice: '<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M13 8l3 3"/>',
    refresh: '<path d="M4 12a8 8 0 0114-5l2 2M20 4v5h-5M20 12a8 8 0 01-14 5l-2-2M4 20v-5h5"/>',
    down: '<path d="M12 4v12M6 11l6 6 6-6M5 20h14"/>',
    up: '<path d="M12 20V8M6 13l6-6 6 6M5 4h14"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.5M4 12h.5M4 18h.5"/>'
  };
  A.ic = (n, cls) => `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.dot}</svg>`;
  EV.circuit.icon = A.ic('bolt'); EV.thermo.icon = A.ic('flame');

  /* ---------- emoji / dingbat sweeper: turns any leftover glyph into an SVG ---------- */
  const MAP = {
    '🏠': 'home', '🧭': 'compass', '🗓': 'calendar', '📅': 'calendar', '⚡': 'bolt', '🔥': 'flame', '🎯': 'target', '📝': 'doc', '❌': 'xcircle', '🃏': 'cards',
    '🔧': 'wrench', '🧮': 'calc', '📜': 'scroll', '📋': 'clipboard', '📒': 'book', '⚙': 'gear', '🌙': 'moon', '☀': 'sun', '💡': 'bulb', '🧲': 'magnet',
    '🦺': 'shield', '🌡': 'thermo', '⏱': 'timer', '🧱': 'brick', '🔔': 'bell', '💥': 'burst', '✓': 'check', '✔': 'check', '✗': 'cross', '✘': 'cross',
    '⚠': 'warn', '★': 'star', '☆': 'star0', '⚑': 'flag', '⏸': 'pause', '✍': 'pen', '🔬': 'flask', '🧩': 'puzzle', '🎉': 'trophy', '🏆': 'trophy',
    '🙋': 'hand', '🚨': 'alert', '🎨': 'palette', '🔌': 'plug', '📈': 'chart', '🔁': 'repeat', '♨': 'flame', '🔣': 'sigma', '🖨': 'printer', '🎲': 'dice',
    '✅': 'checkc', '⬇': 'down', '⬆': 'up', '🔼': 'up', '●': 'dot', '○': 'dot0'
  };
  const RE_G = new RegExp('(' + Object.keys(MAP).join('|') + ')️?|️', 'gu');
  const RE_T = new RegExp('(' + Object.keys(MAP).join('|') + ')|️', 'u');
  const SKIP = /^(SCRIPT|STYLE|TEXTAREA|TITLE|OPTION)$/;
  const tpl = document.createElement('template');
  function sweep(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => { const p = n.parentNode; if (!p || SKIP.test(p.nodeName)) return NodeFilter.FILTER_REJECT; return RE_T.test(n.data) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } });
    const list = []; while (w.nextNode()) list.push(w.currentNode);
    list.forEach(n => {
      const t = n.data, frag = document.createDocumentFragment(); let last = 0, m; RE_G.lastIndex = 0;
      while ((m = RE_G.exec(t))) {
        if (m.index > last) frag.appendChild(document.createTextNode(t.slice(last, m.index)));
        if (m[1] && MAP[m[1]]) { tpl.innerHTML = A.ic(MAP[m[1]]); frag.appendChild(tpl.content); }
        last = m.index + m[0].length;
      }
      if (last < t.length) frag.appendChild(document.createTextNode(t.slice(last)));
      n.parentNode.replaceChild(frag, n);
    });
    if (A.typeset) A.typeset(root);
    root.querySelectorAll('option').forEach(o => { o.textContent = o.textContent.replace(RE_G, '').trim(); });
    root.querySelectorAll('[title],[placeholder],[aria-label]').forEach(e => ['title', 'placeholder', 'aria-label'].forEach(a => { const v = e.getAttribute(a); if (v && RE_T.test(v)) e.setAttribute(a, v.replace(RE_G, '').trim()); }));
  }
  let pend = false; const obs = new MutationObserver(() => { if (pend) return; pend = true; requestAnimationFrame(() => { pend = false; obs.disconnect(); try { sweep(document.body); } catch (e) { console.error(e); } obs.observe(document.body, { childList: true, subtree: true, characterData: true }); }); });
  A.sweep = () => { obs.disconnect(); sweep(document.body); obs.observe(document.body, { childList: true, subtree: true, characterData: true }); };

  /* ---------- helpers ---------- */
  const qById = (() => { let m = null; return id => { if (!m) { m = new Map(DATA.questions.map(q => [q.id, q])); } return m.get(id); }; })();
  /* ---------- learning path: topics in recommended order ---------- */
  const GROUPS = {
    circuit: [
      ['Orientation', 'How the event works and how to prepare.', ['c26']],
      ['Electricity basics', 'Charge, current, voltage, resistance, power, capacitors.', ['c01', 'c03', 'c04', 'c06', 'c02']],
      ['DC circuit analysis', 'Series and parallel, Kirchhoff, Thevenin, reading circuit diagrams.', ['c05', 'c07', 'c08', 'c09', 'c16']],
      ['Solving circuits (make it second nature)', 'A fixed routine, then nodal, mesh, superposition, Thevenin and speed drills.', ['c33', 'c34', 'c35', 'c36']],
      ['AC and household power', 'Alternating current, wiring and shock hazards.', ['c10']],
      ['Electromagnetism, motors and generators', 'Electromagnets, induction, transformers, motors and generators. High priority.', ['c12', 'c13', 'c14', 'c29', 'c30', 'c31', 'c32', 'c24']],
      ['Magnets (lowest priority)', 'Permanent-magnet basics and right-hand rules; not on the current event list.', ['c11']],
      ['Devices and electronics', 'Relays, switches, LEDs, diodes, transistors, op-amps, logic.', ['c15', 'c18', 'c19', 'c20', 'c21']],
      ['Measuring and hands-on', 'Meters, breadboards, troubleshooting and real test tasks.', ['c22', 'c25', 'c23', 'c28']],
      ['History and real-test gaps', 'Scientists to know, plus concepts recent tests asked.', ['c17', 'c27']]
    ],
    thermo: [
      ['Orientation', 'The 2027 written-test map and how to prepare.', ['t23', 't21']],
      ['Temperature and heat', 'Scales, units, specific heat, phases and latent heat.', ['t01', 't02', 't03', 't04']],
      ['Heat transfer', 'Conduction, convection, radiation, blackbodies and cooling.', ['t05', 't06', 't07', 't08']],
      ['Laws and processes', 'Thermodynamic laws, gases, entropy, enthalpy, engines.', ['t09', 't10', 't11', 't12', 't13', 't14']],
      ['Applications', 'Expansion, refrigeration, buildings and weather.', ['t20']],
      ['Device and lab', 'Building the device, data, graphs, scoring and safety.', ['t16', 't17', 't18', 't19']],
      ['History and advanced', 'Scientists and dates, plus statistical mechanics.', ['t15', 't22']]
    ]
  };
  A.learnGroups = ev => { const seen = new Set(); const g = GROUPS[ev].map(([name, blurb, ids]) => ({ name, blurb, ls: ids.map(id => A.lesson(id)).filter(Boolean) })); g.forEach(x => x.ls.forEach(l => seen.add(l.id))); const rest = DATA.lessons.filter(l => l.ev === ev && !seen.has(l.id)); if (rest.length) g.push({ name: 'More', blurb: '', ls: rest }); return g; };
  A.learnOrder = ev => A.learnGroups(ev).flatMap(g => g.ls);
  const lessonsOf = ev => DATA.lessons.filter(l => l.ev === ev);
  const started = id => A.lessonStats(id).n > 0 || (S.les[id] || {}).done;
  A.nextLesson = ev => { const ls = A.learnOrder(ev).filter(l => !(S.les[l.id] || {}).done); return ls.find(l => l.tier !== 'xtra' && l.tier !== 'adv') || ls[0] || null; };
  const wrongFor = ev => Object.keys(S.wrong).map(qById).filter(q => q && (A.lesson(q.t) || {}).ev === ev);
  const dueFor = ev => A.dueCards(ev).length;
  const hasDiag = ev => S.diag.some(d => d.ev && d.ev[ev]);
  const go = h => { if (location.hash === h) A.dispatch(); else location.hash = h; };

  /* ---------- which event does this page belong to? (keeps the switch honest) ---------- */
  function evFromHash(h) {
    let m;
    if ((m = h.match(/^\/(?:lesson|practice)\/(\w+)$/))) { const l = A.lesson(m[1]); return l && l.ev; }
    if ((m = h.match(/^\/learn\/(circuit|thermo)$/))) return m[1];
    if ((m = h.match(/^\/mock\/(circuit|thermo)/))) return m[1];
    if ((m = h.match(/^\/drill\/([\w-]+)$/))) { if (/^mix-(circuit|thermo)$/.test(m[1])) return m[1].slice(4); const g = DATA.gens.find(x => x.id === m[1]); return g && g.ev; }
    if ((m = h.match(/^\/lab\/(\w+)$/))) return m[1] === 'th' ? 'thermo' : ['bench', 'bb', 'led', 'em', 'safe'].includes(m[1]) ? 'circuit' : null;
    if ((m = h.match(/^\/tools\/(\w+)$/))) return ['cooling', 'score', 'heating'].includes(m[1]) ? 'thermo' : ['color', 'solver', 'rc', 'logic'].includes(m[1]) ? 'circuit' : null;
    return null;
  }

  /* ---------- top bar: the event switch ---------- */
  function drawTop() {
    document.documentElement.dataset.ev = S.ev;
    A.$('#evswitch').innerHTML = ['circuit', 'thermo'].map(e => `<button type="button" data-ev="${e}" class="${S.ev === e ? 'on' : ''}" aria-pressed="${S.ev === e}">${A.ic(e === 'circuit' ? 'bolt' : 'flame')}<span class="lbl-l">${EV[e].name}</span><span class="lbl-s">${SHORT[e]}</span></button>`).join('');
    const r = A.readiness(S.ev); A.$('#evprog').innerHTML = `<span>${SHORT[S.ev]} readiness <b style="color:var(--text)">${A.pct(r)}</b></span>${A.bar(r, S.ev === 'thermo' ? 'th' : '')}`;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('#evswitch button'); if (!b) return;
    const ev = b.dataset.ev; if (ev === S.ev) return;
    S.ev = ev; A.save();
    const h = (location.hash || '#/').slice(1) || '/';
    if (/^\/(lesson|practice)\/\w+$|^\/learn\//.test(h)) go('#/learn/' + ev);
    else if (/^\/lab\//.test(h)) go('#/lab');
    else if (/^\/tools\//.test(h)) go('#/tools');
    else if (/^\/drill\//.test(h)) go('#/drill');
    else if (/^\/mock\//.test(h)) go('#/mock');
    else A.dispatch();
  });

  /* ---------- sidebar ---------- */
  A.buildNav = () => {
    const h = (location.hash || '#/').slice(1) || '/';
    const e2 = evFromHash(h); if (e2 && e2 !== S.ev) { S.ev = e2; A.save(); }
    const ev = S.ev; drawTop();
    const in_ = re => re.test(h);
    const cur = {
      home: h === '/',
      learn: in_(/^\/(learn|lesson)(\/|$)/),
      practice: in_(/^\/(practice|drill|mock|lab|tools)(\/|$)/),
      refresh: in_(/^\/(refresh|cards|wrong|timeline|binder)(\/|$)/)
    };
    const wr = wrongFor(ev).length, due = dueFor(ev);
    const big = (href, ic, label, sub, on, badge) => `<a href="#${href}" class="${on ? 'active' : ''}"><span class="ic">${A.ic(ic)}</span><span style="flex:1">${label}<small>${sub}</small></span>${badge ? `<span class="badge">${badge}</span>` : ''}</a>`;
    const small = (href, ic, label, on) => `<a href="#${href}" class="${on ? 'active' : ''}"><span class="ic">${A.ic(ic)}</span>${label}</a>`;
    const refOpen = in_(/^\/(syllabus|diag|diagrun|diagself|rules|binder|timeline|settings)(\/|$)/);
    A.$('#nav').innerHTML = `<div class="main">` +
      big('/', 'home', 'Start here', 'Your next steps', cur.home) +
      big('/learn/' + ev, 'learn', 'Learn', lessonsOf(ev).length + ' lessons', cur.learn) +
      big('/practice', 'practice', 'Practice', 'Questions, drills, mocks, hands-on', cur.practice) +
      big('/refresh', 'refresh', 'Refresh', 'Flashcards, misses, history', cur.refresh, (due + wr) || '') + `</div>` +
      `<details class="ref" ${refOpen ? 'open' : ''}><summary>${A.ic('chev')} Reference</summary>` +
      small('/diag', 'compass', 'Diagnostic', in_(/^\/diag/)) + small('/syllabus', 'calendar', '30-day plan', in_(/^\/syllabus/)) + small('/rules', 'clipboard', 'Rules audit', in_(/^\/rules/)) +
      small('/binder', 'book', 'Binder & formula sheets', in_(/^\/binder/)) + small('/timeline', 'scroll', 'History timeline', in_(/^\/timeline/)) + small('/settings', 'gear', 'Settings & data', in_(/^\/settings/)) + `</details>`;
    A.$('#sideft').innerHTML = `Streak <b>${A.streak()} day${A.streak() === 1 ? '' : 's'}</b> · ${SHORT.circuit} ${A.pct(A.readiness('circuit'))} · ${SHORT.thermo} ${A.pct(A.readiness('thermo'))}` + (A.memOnly() ? '<br><span style="color:var(--warn)">Progress not being saved (storage blocked)</span>' : '');
  };

  /* ---------- Start here: a guided loop ---------- */
  const tile = (href, ic, title, desc, extra) => `<div class="card tile"><a class="tlk" href="#${href}"><span>${A.ic(ic, 'big')}</span><b>${title}</b><span class="d">${desc}</span></a>${extra || ''}</div>`;
  A.routeFirst(/^\/?$/, () => {
    const ev = S.ev, other = ev === 'circuit' ? 'thermo' : 'circuit', name = EV[ev].name;
    const ls = lessonsOf(ev), done = ls.filter(l => (S.les[l.id] || {}).done).length, r = A.readiness(ev);
    const tdays = S.tdate ? Math.ceil((new Date(S.tdate) - new Date(A.today())) / 86400000) : null;
    const dgn = hasDiag(ev), any = done > 0 || ls.some(l => A.lessonStats(l.id).n > 0);
    const nxt = A.nextLesson(ev);
    const weak = A.weakTopics(ev, 8).filter(w => started(w.l.id) && w.s < 0.75)[0];
    const last = S.diag.filter(d => d.ev && d.ev[ev]).slice(-1)[0];
    // Practice pick
    let pr;
    if (weak) pr = { href: '/practice/' + weak.l.id, t: 'Practice: ' + weak.l.t, d: `Your weakest started topic (${A.pct(weak.s)}). Answer it until it sticks.`, b: 'Start practice' };
    else if (nxt && started(nxt.id)) pr = { href: '/practice/' + nxt.id, t: 'Practice: ' + nxt.t, d: 'Check what you just studied.', b: 'Start practice' };
    else pr = { href: '/drill/mix-' + ev, t: `Quick ${SHORT[ev]} drill`, d: 'Fresh numbers every time, with a worked solution after each problem.', b: 'Start drill' };
    // Refresh pick
    const due = dueFor(ev), wr = wrongFor(ev).length, nw = A.newCards(ev).length;
    let rf;
    if (due) rf = { href: '/cards', t: `${due} flashcard${due === 1 ? '' : 's'} due`, d: 'Short spaced-repetition session. Cards you know come back less often.', b: 'Review cards' };
    else if (wr) rf = { href: '/wrong', t: `${wr} question${wr === 1 ? '' : 's'} in your miss bank`, d: 'Answer each correctly twice in a row and it leaves the bank.', b: 'Clear the bank' };
    else if (nw) rf = { href: '/cards', t: 'Learn 20 new cards', d: 'Formulas, constants and key facts as quick flashcards.', b: 'Start cards' };
    else rf = { href: '/timeline/quiz', t: 'History quiz', d: 'Who did what and when. The cheapest points on the test.', b: 'Quiz me' };

    const start = !dgn && !any ? `<div class="card startcard"><div class="tag" style="font-weight:800;letter-spacing:.1em;font-size:.72rem;text-transform:uppercase;color:var(--dim)">First, find your starting point</div>
      <h2 style="margin:.3em 0">Take the ${SHORT[ev]} diagnostic</h2><p class="muted" style="margin-top:0">About 30 minutes. It tells you your level and which topics are blind spots, so the rest of the site points at the right things. Press “I’ve never seen this” when a topic is new to you.</p>
      <div class="row"><a class="btn pri" href="#/diagrun/quick-${ev}">Start quick diagnostic</a><a class="btn" href="#/diagrun/full-${ev}">Full diagnostic (longer, more exact)</a><a class="btn ghost" href="#/learn/${ev}">Skip, go to lesson 1</a></div></div>` : '';

    const keys = A.BLIND.filter(b => b[0] === ev);
    const d = S.syl.start ? Math.floor((new Date(A.today()) - new Date(S.syl.start)) / 86400000) + 1 : 0, day = DATA.syllabus.find(x => x.day === Math.min(30, d));

    A.render(`<div class="hub-h"><h1 style="margin:0">${name}</h1><span class="muted">${done}/${ls.length} lessons done · readiness ${A.pct(r)}${tdays != null && tdays >= 0 ? ` · <b style="color:var(--text)">${tdays} days to your tournament</b>` : ''}</span></div>
    ${last ? `<p class="muted" style="margin:6px 0 0">Level from your diagnostic: <b style="color:var(--text)">L${last.ev[ev].level} ${esc(A.Q.LEVELS[last.ev[ev].level].name)}</b> · ${A.pct(last.ev[ev].pct)}. <a href="#/diag">Retake</a></p>` : ''}
    ${start}
    <h2 style="margin-top:22px">Today’s loop</h2><p class="muted" style="margin-top:0">Do these three in order. Reading is for learning; practice and refresh are what make it stay.</p>
    <div class="stepgrid">
      <div class="card step"><div class="tag">${A.ic('learn')} Step 1 · Learn</div><h3>${nxt ? esc(nxt.t) : 'All lessons read'}</h3><p>${nxt ? `${nxt.id.toUpperCase()} · about ${nxt.min} minutes. Ends with a quick self-check.` : 'Go back over your weakest topics in the lesson list.'}</p><div class="row"><a class="btn pri" href="#/${nxt ? 'lesson/' + nxt.id : 'learn/' + ev}">${done ? 'Continue' : 'Start lesson 1'}</a><a class="btn ghost" href="#/learn/${ev}">All lessons</a></div></div>
      <div class="card step"><div class="tag">${A.ic('practice')} Step 2 · Practice</div><h3>${esc(pr.t)}</h3><p>${esc(pr.d)}</p><div class="row"><a class="btn pri" href="#${pr.href}">${pr.b}</a><a class="btn ghost" href="#/practice">All practice</a></div></div>
      <div class="card step"><div class="tag">${A.ic('refresh')} Step 3 · Refresh</div><h3>${esc(rf.t)}</h3><p>${esc(rf.d)}</p><div class="row"><a class="btn pri" href="#${rf.href}">${rf.b}</a><a class="btn ghost" href="#/refresh">All refresh</a></div></div>
    </div>
    <details class="more" id="morebox"><summary>${A.ic('chev')} More: weak topics, 30-day plan, key topics</summary>
      <div class="seg" id="seg" role="tablist"><button type="button" class="on" data-p="weak">Weak topics</button><button type="button" data-p="plan">30-day plan</button><button type="button" data-p="key">Key topics</button></div>
      <div class="panel" data-p="weak">${A.weakTopics(ev, 6).map(w => `<a class="lrow" href="#/lesson/${w.l.id}"><span class="n">${w.l.id}</span><span style="flex:1"><b>${esc(w.l.t)}</b></span><span style="width:90px">${A.bar(w.s, ev === 'thermo' ? 'th' : '')}</span></a>`).join('') || '<p class="muted">Answer some questions and this fills in.</p>'}</div>
      <div class="panel" data-p="plan" hidden><h3 style="margin-top:0">${d ? `Day ${Math.min(d, 30)} of 30` : 'A month, day by day'}</h3>${day && d >= 1 ? `<p class="muted">${esc(day.focus)}</p>` : `<p class="muted">An optional schedule that covers both events in 30 days. The loop above works without it.</p>`}<a class="btn" href="#/syllabus">${d ? 'Open today’s tasks' : 'See the plan'}</a></div>
      <div class="panel" data-p="key" hidden><p class="muted" style="margin-top:0">Every one of these has appeared on real tests. The tag shows how well you have proven it.</p>${keys.map(b => `<a class="lrow" href="#/lesson/${b[2]}"><span style="flex:1"><b>${esc(b[1])}</b></span>${A.chip(b[2])}</a>`).join('')}</div>
    </details>
    <p class="subtle">Also studying ${EV[other].name}? <a href="#" id="swother">Switch to ${EV[other].name}</a> (${A.pct(A.readiness(other))} ready). Reference material: <a href="#/rules">rules audit</a>, <a href="#/binder">binder sheets</a>, <a href="#/timeline">timeline</a>, <a href="#/settings">settings</a>.</p>`);
    A.$$('#seg button').forEach(b => b.onclick = () => { A.$$('#seg button').forEach(x => x.classList.toggle('on', x === b)); A.$$('#morebox .panel').forEach(pn => { pn.hidden = pn.dataset.p !== b.dataset.p; }); });
    A.$('#swother').onclick = e => { e.preventDefault(); A.$(`#evswitch button[data-ev="${other}"]`).click(); };
  });

  /* ---------- Learn: grouped by topic ---------- */
  A.routeFirst(/^\/learn\/(circuit|thermo)$/, ev => {
    const groups = A.learnGroups(ev), all = groups.flatMap(g => g.ls), mins = all.reduce((a, l) => a + l.min, 0), doneN = all.filter(l => (S.les[l.id] || {}).done).length;
    const nxt = A.nextLesson(ev); let tier = 'all';
    A.render(`<div class="hub-h"><h1 style="margin:0">Learn</h1><span class="muted">${EV[ev].name}</span></div>
    <p class="muted">${all.length} lessons in a recommended order, grouped by topic. About ${Math.round(mins / 60)} hours in total. ${doneN} done.${ev === 'thermo' ? ' <span class="badge b-unv">2027 device rules not yet verified</span>' : ''}</p>
    <div class="row noprint" id="tf" style="margin:18px 0 6px"><span class="chip badge on" data-t="all">All</span>${Object.entries(DATA.tiers).map(([k, v]) => `<span class="chip badge ${v.cls}" data-t="${k}" title="${esc(v.desc)}">${v.label}</span>`).join('')}</div><div id="ll"></div>`);
    const draw = () => {
      A.$('#ll').innerHTML = groups.map((g, gi) => {
        const ls = g.ls.filter(l => tier === 'all' || l.tier === tier); if (!ls.length) return '';
        const gd = g.ls.filter(l => (S.les[l.id] || {}).done).length, gm = g.ls.reduce((a, l) => a + l.min, 0);
        return `<section class="lgroup"><div class="lg-h"><span class="lg-n">${gi + 1}</span><div style="flex:1;min-width:0"><h2>${esc(g.name)}</h2><div class="muted small">${esc(g.blurb)}</div></div><div class="lg-m"><b>${gd}/${g.ls.length}</b> done<br><span class="muted small">${Math.round(gm / 60 * 10) / 10} h</span></div></div>
        ${ls.map(l => { const sc = A.lessonScore(l.id), d = (S.les[l.id] || {}).done; return `<a class="lrow" href="#/lesson/${l.id}"><span class="n">${l.id}</span><div style="flex:1;min-width:0"><b>${esc(l.t)}</b> ${nxt === l ? '<span class="badge b-next">Up next</span>' : ''}<div class="row small muted" style="gap:10px;margin-top:4px">${A.tierBadge(l.tier)}<span>${A.stars(l.yield)} yield</span><span>~${l.min} min</span></div></div><div style="width:80px">${A.bar(sc, ev === 'thermo' ? 'th' : '')}</div><span class="done" style="width:1.4em">${d ? '✓' : ''}</span></a>`; }).join('')}</section>`;
      }).join('');
    };
    A.$$('#tf .chip').forEach(c => c.onclick = () => { tier = c.dataset.t; A.$$('#tf .chip').forEach(x => x.classList.toggle('on', x === c)); draw(); }); draw();
  });

  /* ---------- Learn (bare route) ---------- */
  A.routeFirst(/^\/learn$/, () => go('#/learn/' + S.ev));

  /* ---------- Practice hub: paper test + hands-on ---------- */
  const LABTABS = { circuit: [['bench', 'wrench', 'Multimeter bench', 'Read and set up a virtual meter.'], ['bb', 'brick', 'Breadboard', 'Wire it correctly. Find the fault.'], ['led', 'bulb', 'LED lab', 'Pick resistors, check worst cases.'], ['em', 'magnet', 'Electromagnet', 'Turns, current and strength.'], ['proc', 'timer', 'Tasks & stopwatch', 'Timed build and measure tasks.'], ['safe', 'shield', 'Safety quiz', 'Rules that cost points if you miss them.']], thermo: [['th', 'thermo', 'Thermo bench', 'Thermometers, heating and cooling data.'], ['proc', 'timer', 'Tasks & stopwatch', 'Timed build and measure tasks.']] };
  A.routeFirst(/^\/practice$/, () => {
    const ev = S.ev, ls = lessonsOf(ev), paper = ls.filter(l => l.tier !== 'hw'), hands = ls.filter(l => l.tier === 'hw');
    const row = l => { const s = A.lessonScore(l.id), n = DATA.questions.filter(q => q.t === l.id).length; return `<a class="lrow" style="margin:0" href="#/practice/${l.id}"><span class="n">${l.id}</span><span style="flex:1"><b>${esc(l.t)}</b><span class="small muted"> · ${n} questions</span></span><span style="width:70px">${A.bar(s, ev === 'thermo' ? 'th' : '')}</span></a>`; };
    A.render(`<div class="hub-h"><h1 style="margin:0">Practice</h1><span class="muted">${EV[ev].name}</span></div>
    <p class="muted">Two parts, like the real event. Every miss goes into your miss bank and comes back until you get it right.</p>
    <h2 class="hub-h">${A.ic('doc')} Paper test <span class="muted small" style="font-weight:400">the written exam</span></h2>
    <div class="grid g3">
      ${tile('/drill/mix-' + ev, 'target', 'Quick drill', 'Endless randomised problems with a worked solution after each one.', `<span class="subtle"><a href="#/drill">All drills by topic</a></span>`)}
      ${tile('/mock/' + ev, 'doc', 'Timed mock exam', '25 questions, 30 minutes, no feedback until you submit.', `<span class="subtle"><a href="#/mock/${ev}-full">Full (50)</a> · <a href="#/mock/${ev}-hard">Hard mode</a> · <a href="#/mock">More</a></span>`)}
      ${tile('/diagrun/quick-' + ev, 'compass', 'Quick self-check', 'A 30-question diagnostic. Good for seeing progress.')}
    </div>
    <details class="more"><summary>${A.ic('chev')} Question sets by topic (${paper.length})</summary>${A.learnGroups(ev).map(g => { const gl = g.ls.filter(l => l.tier !== 'hw'); return gl.length ? `<h3 style="margin:26px 0 12px">${esc(g.name)}</h3><div class="grid g2w">${gl.map(row).join('')}</div>` : ''; }).join('')}</details>
    <h2 class="hub-h" style="margin-top:30px">${A.ic('wrench')} Hands-on <span class="muted small" style="font-weight:400">build, measure, troubleshoot</span></h2>
    <p class="muted" style="margin-top:0">${ev === 'thermo' ? 'Thermodynamics has a built device and real measurements.' : 'Part of the Circuit Lab score is done with real parts.'} Virtual benches drill the procedures until they are automatic.</p>
    <div class="grid g3">${LABTABS[ev].map(t => tile('/lab/' + t[0], t[1], t[2], t[3])).join('')}${tile('/tools', 'calc', 'Tools & calculators', 'Solvers and converters to check your work.')}</div>
    ${hands.length ? `<details class="more"><summary>${A.ic('chev')} Hands-on lessons and questions (${hands.length})</summary><div class="grid g2w" style="padding:10px 0 20px">${hands.map(l => `<div class="lrow" style="margin:0;flex-wrap:wrap"><span class="n">${l.id}</span><span style="flex:1;min-width:200px"><b>${esc(l.t)}</b></span><span class="row" style="flex:none"><a class="btn sm" href="#/lesson/${l.id}">Lesson</a><a class="btn sm" href="#/practice/${l.id}">Questions</a></span></div>`).join('')}</div></details>` : ''}`);
  });

  /* ---------- Refresh hub ---------- */
  A.routeFirst(/^\/refresh$/, () => {
    const ev = S.ev, due = dueFor(ev), wr = wrongFor(ev).length, nw = A.newCards(ev).length, known = DATA.cards.filter(c => c.ev === ev && S.cards[c.id] && S.cards[c.id].box >= 3).length, tot = DATA.cards.filter(c => c.ev === ev).length;
    A.render(`<div class="hub-h"><h1 style="margin:0">Refresh</h1><span class="muted">${EV[ev].name}</span></div>
    <p class="muted">Short sessions that keep what you have learned from fading. Five to fifteen minutes a day is enough.</p>
    <div class="grid g3">
      ${tile('/cards', 'cards', 'Flashcards', `${due} due now · ${nw} new · ${known}/${tot} mastered`, A.bar(tot ? known / tot : 0, ev === 'thermo' ? 'th' : ''))}
      ${tile('/wrong', 'xcircle', 'Miss bank', wr ? `${wr} question${wr === 1 ? '' : 's'} you got wrong. Get each right twice in a row.` : 'Nothing missed yet. Good.')}
      ${tile('/timeline/quiz', 'scroll', 'History quiz', 'Scientists, dates and discoveries for ' + SHORT[ev] + '.', `<span class="subtle"><a href="#/timeline">Browse the timeline</a></span>`)}
      ${tile('/binder', 'book', 'Binder & formula sheets', 'Print-ready sheets to build your notes binder.')}
    </div>`);
  });

  /* ---------- diagram gallery (QA) ---------- */
  A.routeFirst(/^\/dgtest(?:\/([\w,-]+))?$/, pre => { if (pre === 'undefined') pre = ''; const ids = Object.keys(DG.reg).filter(i => !pre || pre.split(",").some(p => i.startsWith(p))); A.render('<h1>Diagrams (' + ids.length + ')</h1><div class="grid g2w">' + ids.map(i => '<div><code>' + i + '</code>' + DG.make(i) + '</div>').join('') + '</div>'); });
  /* ---------- boot ---------- */
  document.addEventListener('DOMContentLoaded', () => { drawTop(); A.sweep(); });
})();
