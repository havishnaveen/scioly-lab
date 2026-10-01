/* ============ MAIN VIEWS ============ */
(function () {
  const A = window.App, S = A.S, esc = A.esc;
  const EV = DATA.events;

  /* ---------- Dashboard ---------- */
  const BLIND = [
    ['circuit', 'Transistors (BJT/MOSFET)', 'c19'], ['circuit', 'Relays', 'c15'], ['circuit', 'Transformers', 'c13'], ['circuit', 'Switches, fuses, breakers, GFCI', 'c15'], ['circuit', 'Op-amps', 'c20'], ['circuit', 'LEDs & diodes', 'c18'],
    ['circuit', 'Multimeter & breadboard', 'c22'], ['circuit', 'Real-test hands-on tasks', 'c28'], ['circuit', 'Real-test gap concepts', 'c27'], ['circuit', 'Electromagnets & magnetism', 'c12'], ['circuit', 'AC, household wiring & safety', 'c10'], ['circuit', 'Motors & generators', 'c14'], ['circuit', 'Capacitors & RC', 'c02'], ['circuit', 'History (Volta→Tesla)', 'c17'],
    ['thermo', 'Specific heat & calorimetry', 't03'], ['thermo', 'Heat transfer (cond/conv/rad)', 't05'], ['thermo', 'Newton cooling & prediction', 't08'], ['thermo', 'Laws of thermodynamics', 't09'], ['thermo', 'Entropy / enthalpy (Div C)', 't12'],
    ['thermo', 'Carnot / heat engines', 't14'], ['thermo', 'Insulation device & scoring', 't16'], ['thermo', 'Heat-collection device (2027)', 't17'], ['thermo', 'Lab skills & safety', 't19'], ['thermo', 'History of thermodynamics', 't15'], ['thermo', '2027 written-test map (verified)', 't23']
  ];
  A.BLIND = BLIND;
  const chip = id => { const s = A.lessonScore(id), st = A.lessonStats(id); const col = st.n === 0 && !(S.les[id] || {}).done ? 'var(--faint)' : s >= .6 ? 'var(--ok)' : s >= .3 ? 'var(--warn)' : 'var(--bad)'; const txt = st.n === 0 && !(S.les[id] || {}).done ? 'not started' : A.pct(s); return `<span class="badge" style="color:${col};border-color:${col}">${txt}</span>`; };
  A.chip = chip;
  const sylDay = () => { if (!S.syl.start) return 0; const d = Math.floor((new Date(A.today()) - new Date(S.syl.start)) / 86400000) + 1; return d; };
  A.views.dash = () => {
    const rc = A.readiness('circuit'), rt = A.readiness('thermo'), done = Object.values(S.les).filter(l => l.done).length, nq = Object.values(S.q).reduce((a, r) => a + r.n, 0) + Object.values(S.gen).reduce((a, r) => a + r.n, 0);
    const last = S.diag[S.diag.length - 1]; const d = sylDay(); const day = DATA.syllabus.find(x => x.day === Math.min(30, d));
    const tdays = S.tdate ? Math.ceil((new Date(S.tdate) - new Date(A.today())) / 86400000) : null;
    A.render(`<div class="hero"><h1 style="margin-bottom:6px">Circuit Lab <span style="color:var(--circ)">⚡</span> + Thermodynamics <span style="color:var(--therm)">🔥</span></h1><p class="muted" style="margin:0 0 14px">Division C · every topic, lesson, drill, hands-on skill and history fact — with no blind spots.${tdays != null && tdays >= 0 ? ` <b style="color:var(--circ)">${tdays} days to your tournament.</b>` : ''}</p>
      <div class="row"><a class="btn pri" href="#/diag">${last ? '🧭 Re-take diagnostic' : '🧭 Start with the diagnostic'}</a><a class="btn" href="#/syllabus">🗓️ 30-day plan</a><a class="btn" href="#/drill/mix-all">🎯 Quick drill</a><a class="btn" href="#/mock">📝 Mock exam</a><a class="btn" href="#/lab">🔧 Hands-on lab</a></div></div>
    <div class="grid g4" style="margin-top:14px">
      <div class="card kpi"><span>⚡ Circuit readiness</span><b style="color:var(--circ)">${A.pct(rc)}</b>${A.bar(rc)}</div>
      <div class="card kpi"><span>🔥 Thermo readiness</span><b style="color:var(--therm)">${A.pct(rt)}</b>${A.bar(rt, 'th')}</div>
      <div class="card kpi"><span>Lessons done</span><b>${done}/${DATA.lessons.length}</b>${A.bar(done / DATA.lessons.length)}</div>
      <div class="card kpi"><span>Streak · Qs answered</span><b>${A.streak()}d · ${nq}</b><span>${A.dueCards().length} flashcards due · ${Object.keys(S.wrong).length} in wrong bank</span></div>
    </div>
    <div class="grid g2">
      <div class="card"><h3 style="margin-top:0">📅 ${d ? `Today — Day ${Math.min(d, 30)} of 30` : '30-day plan'}</h3>${day && d >= 1 ? `<p class="muted">${esc(day.focus)}</p>${day.tasks.map((t, i) => { const k = 'd' + day.day + 't' + i; return `<label class="task" style="flex-direction:row;color:var(--text)"><input type="checkbox" data-k="${k}" ${S.syl.done[k] ? 'checked' : ''}> <span><a href="${t.link}">${esc(t.txt)}</a></span></label>`; }).join('')}` : `<p>Set your start date and get a day-by-day schedule that covers both events in 30 days.</p><button class="btn pri" id="startplan">Start the plan today</button>`}</div>
      <div class="card"><h3 style="margin-top:0">🧭 Your level</h3>${last ? ['circuit', 'thermo'].filter(e => last.ev[e]).map(e => `<div class="row" style="margin:6px 0"><b style="width:130px">${EV[e].icon} ${EV[e].short}</b><span class="lvl" style="font-size:1.6rem">L${last.ev[e].level}</span><span>${A.Q.LEVELS[last.ev[e].level].name} · ${A.pct(last.ev[e].pct)}</span></div>`).join('') + `<p class="small muted">From your ${esc(last.scope)} diagnostic on ${last.date}.</p>` : '<p>No diagnostic yet. It takes ~1 hour and tells you exactly where your blind spots are — and gives your level from <b>Brand new</b> to <b>Elite</b>.</p>'}<a class="btn sm" href="#/diag">Open diagnostic</a></div>
    </div>
    <div class="card"><h3 style="margin-top:0">🚨 The “blindside” checklist — topics you can’t afford to miss</h3><p class="small muted">Every one of these has shown up on real Div C tests. Green = you’ve proven it. Grey = you haven’t even started.</p><div class="grid g3">${BLIND.map(b => `<a class="lrow" style="margin:0" href="#/lesson/${b[2]}"><span>${EV[b[0]].icon}</span><span style="flex:1">${esc(b[1])}</span>${chip(b[2])}</a>`).join('')}</div></div>
    <div class="grid g2">${['circuit', 'thermo'].map(e => `<div class="card"><h3 style="margin-top:0">${EV[e].icon} Weakest ${EV[e].short} topics</h3>${A.weakTopics(e, 5).map(w => `<div class="row" style="margin:5px 0"><a href="#/lesson/${w.l.id}" style="flex:1">${w.l.id} ${esc(w.l.t.length > 52 ? w.l.t.slice(0, 50) + '…' : w.l.t)}</a><span style="width:90px">${A.bar(w.s, e === 'thermo' ? 'th' : '')}</span></div>`).join('')}</div>`).join('')}</div>`);
    const sp = A.$('#startplan'); if (sp) sp.onclick = () => { S.syl.start = A.today(); A.save(); A.views.dash(); };
    A.$$('input[data-k]').forEach(i => i.onchange = () => { S.syl.done[i.dataset.k] = i.checked; A.save(); });
  };
  A.route(/^\/?$/, A.views.dash);

  /* ---------- Learn index ---------- */
  A.views.learn = ev => {
    const ls = DATA.lessons.filter(l => l.ev === ev); const mins = ls.reduce((a, l) => a + l.min, 0);
    let tier = 'all';
    A.render(`<h1>${EV[ev].icon} ${EV[ev].name}</h1><p class="muted">${ls.length} lessons · ≈ ${Math.round(mins / 60)} hours of reading · every lesson ends with a self-check quiz and links to drills.${ev === 'thermo' ? ' <span class="badge b-unv">2027 device rules UNVERIFIED — see lessons t16–t18 and the Rules page</span>' : ''}</p>
    <div class="row noprint" id="tf"><span class="chip badge on" data-t="all">All</span>${Object.entries(DATA.tiers).map(([k, v]) => `<span class="chip badge ${v.cls}" data-t="${k}" title="${esc(v.desc)}">${v.label}</span>`).join('')}</div><div id="ll"></div>`);
    const draw = () => { A.$('#ll').innerHTML = ls.filter(l => tier === 'all' || l.tier === tier).map(l => { const s = A.lessonScore(l.id), d = (S.les[l.id] || {}).done; return `<a class="lrow" href="#/lesson/${l.id}"><span class="n">${l.id}</span><div style="flex:1"><b>${esc(l.t)}</b> ${A.nextLesson && A.nextLesson(ev) === l ? '<span class="badge b-next">Up next</span>' : ''}<div class="row small muted" style="gap:8px;margin-top:2px">${A.tierBadge(l.tier)}<span>${A.stars(l.yield)} yield</span><span>~${l.min} min</span></div></div><div style="width:90px">${A.bar(s, ev === 'thermo' ? 'th' : '')}</div><span class="${d ? 'done' : 'muted'}" style="width:1.5em">${d ? '✓' : ''}</span></a>`; }).join(''); };
    A.$$('#tf .chip').forEach(c => c.onclick = () => { tier = c.dataset.t; A.$$('#tf .chip').forEach(x => x.classList.toggle('on', x === c)); draw(); }); draw();
  };
  A.route(/^\/learn\/(circuit|thermo)$/, A.views.learn);

  /* ---------- Lesson ---------- */
  A.views.lesson = id => {
    const l = A.lesson(id); if (!l) return A.render('<div class="card"><h2>No such lesson</h2></div>');
    const all = A.learnOrder ? A.learnOrder(l.ev) : DATA.lessons.filter(x => x.ev === l.ev), i = all.indexOf(l), prev = all[i - 1], next = all[i + 1];
    const qs = DATA.questions.filter(q => q.t === id); const mini = [1, 2, 3].flatMap(d => A.shuffle(qs.filter(q => q.d === d)).slice(0, 2)).slice(0, 6); const done = (S.les[id] || {}).done;
    const gs = DATA.gens.filter(g => g.t === id);
    A.render(`<div class="lesson ${l.ev === 'thermo' ? 'th-l' : ''}"><div class="row noprint"><a href="#/learn/${l.ev}">← ${EV[l.ev].name}</a><span class="sp"></span>${prev ? `<a class="btn sm" href="#/lesson/${prev.id}">← ${prev.id}</a>` : ''}${next ? `<a class="btn sm" href="#/lesson/${next.id}">${next.id} →</a>` : ''}</div>
    <h1 style="margin-top:12px">${esc(l.t)}</h1><div class="row small" style="gap:8px">${A.evBadge(l.ev)} ${A.tierBadge(l.tier)}<span class="muted">${A.stars(l.yield)} test yield · ~${l.min} min · ${esc(l.off || '')}</span></div>
    ${(l.formulas || []).length ? `<div class="card flat"><b>Key formulas</b><div class="tablewrap"><table>${l.formulas.map(f => `<tr><td style="width:30%"><b>${esc(f[0])}</b></td><td><span class="fml">${A.fml(f[1])}</span></td></tr>`).join('')}</table></div></div>` : ''}
    <div>${A.lessonHtml(l)}</div>${(DATA.chal && DATA.chal[l.id]) ? `<div class="deeper"><h2>Go deeper: rigor, derivations and puzzles</h2>${DATA.chal[l.id]}</div>` : ''}</div>
    <hr><h2>✅ Check yourself</h2><p class="muted">${qs.length} questions exist for this lesson (${qs.filter(q => q.f).length} tryout-filter). Here are ${mini.length} to start:</p><div id="mini"></div>
    <div class="row noprint" style="margin-top:12px"><a class="btn pri" href="#/practice/${id}">Do all ${qs.length} questions</a>${gs.map(g => `<a class="btn" href="#/drill/${g.id}">🎯 ${esc(g.title)}</a>`).join('')}<span class="sp"></span><button class="btn ${done ? '' : 'ok'}" id="mark">${done ? '✓ Completed (click to undo)' : 'Mark lesson complete'}</button></div>${next ? `<div class="card flat noprint" style="margin-top:16px"><span class="muted small">Next lesson</span><div class="row"><b style="flex:1">${esc(next.t)}</b><a class="btn pri" href="#/lesson/${next.id}">Continue →</a></div></div>` : ''}`);
    Q_inline(A.$('#mini'), mini);
    A.$('#mark').onclick = () => { S.les[id] = S.les[id] || {}; S.les[id].done = !S.les[id].done; A.markDay(); A.save(); A.views.lesson(id); A.buildNav(); };
  };
  const Q_inline = (host, qs) => A.Q.inlineSet(host, qs);
  A.route(/^\/lesson\/(\w+)$/, A.views.lesson);

  /* ---------- Flashcards ---------- */
  A.views.cards = () => {
    const decks = {}; DATA.cards.filter(c => c.ev === S.ev).forEach(c => { const k = c.ev + '|' + c.deck; decks[k] = (decks[k] || 0) + 1; });
    const EVS = S.ev; A.render(`<h1>Flashcards <span class="muted small">${EV[EVS].name} · ${DATA.cards.filter(c => c.ev === EVS).length} cards · spaced repetition</span></h1><p class="muted">Rate each card <b>Again / Good / Easy</b>. Cards you know come back in days; cards you miss return in a minute. ${A.dueCards(EVS).length} due now · ${A.newCards(EVS).length} new.</p>
    <div class="row"><button class="btn pri" id="sdue">Study due + 20 new</button></div>
    <h3>Decks</h3><div class="grid g3">${Object.entries(decks).map(([k, n]) => { const [ev, dk] = k.split('|'); const cs = DATA.cards.filter(c => c.ev === ev && c.deck === dk); const known = cs.filter(c => S.cards[c.id] && S.cards[c.id].box >= 3).length; return `<div class="card" style="margin:0"><b>${EV[ev].icon} ${esc(dk)}</b><div class="small muted">${n} cards · ${known} mastered</div>${A.bar(known / n)}<div class="row" style="margin-top:8px"><button class="btn sm" data-d="${esc(k)}" data-m="all">Study all</button></div></div>`; }).join('')}</div><div id="study"></div>`);
    const go = list => study(list);
    const pick = ev => { const due = A.dueCards(ev), nw = A.shuffle(A.newCards(ev)).slice(0, 20); return A.shuffle(due.concat(nw)); };
    A.$('#sdue').onclick = () => go(pick(S.ev));
    A.$$('button[data-d]').forEach(b => b.onclick = () => { const [ev, dk] = b.dataset.d.split('|'); go(A.shuffle(DATA.cards.filter(c => c.ev === ev && c.deck === dk))); });
  };
  function study(list) {
    const host = A.$('#study'); if (!list.length) { host.innerHTML = '<div class="card"><h3>🎉 Nothing due right now.</h3><p>Come back later, or study a whole deck.</p></div>'; return; }
    let i = 0, flipped = false, stats = { again: 0, good: 0, easy: 0 }; const queue = list.slice();
    const draw = () => {
      if (!queue.length) { host.innerHTML = `<div class="card hero"><h2 style="margin-top:0">Session complete</h2><p>Again ${stats.again} · Good ${stats.good} · Easy ${stats.easy}</p><a class="btn pri" href="#/cards" onclick="setTimeout(()=>App.views.cards(),0)">Back</a></div>`; A.buildNav(); return; }
      const c = queue[0]; host.innerHTML = `<div class="muted small" style="margin-top:14px">${queue.length} left · ${EV[c.ev].icon} ${esc(c.deck)}</div><div class="card flash" id="fl">${flipped ? `<div><div class="small muted">${esc(c.front)}</div><div style="margin-top:12px;color:var(--circ)">${esc(c.back)}</div></div>` : `<div>${esc(c.front)}<small>click or press Space to flip</small></div>`}</div>
      <div class="row" style="justify-content:center;${flipped ? '' : 'visibility:hidden'}"><button class="btn" style="background:var(--bad);color:#fff" data-g="0">Again (1)</button><button class="btn pri" data-g="1">Good (2)</button><button class="btn ok" data-g="2">Easy (3)</button></div>`;
      A.$('#fl').onclick = () => { flipped = !flipped; draw(); };
      A.$$('button[data-g]').forEach(b => b.onclick = () => rate(+b.dataset.g));
    };
    const rate = g => { if (!flipped) return; const c = queue.shift(); A.rateCard(c.id, g); stats[['again', 'good', 'easy'][g]]++; if (g === 0) queue.push(c); flipped = false; draw(); A.buildNav(); };
    const key = e => { if (!A.$('#study') || !A.$('#fl')) { document.removeEventListener('keydown', key); return; } if (/INPUT|TEXTAREA/.test(e.target.tagName)) return; if (e.code === 'Space') { e.preventDefault(); flipped = !flipped; draw(); } else if (flipped && '123'.includes(e.key)) rate(+e.key - 1); };
    document.addEventListener('keydown', key); A.onLeave(() => document.removeEventListener('keydown', key)); draw(); host.scrollIntoView({ behavior: 'smooth' });
  }
  A.route(/^\/cards$/, A.views.cards);

  /* ---------- Timeline ---------- */
  A.views.timeline = () => {
    let ev = S.ev, text = '';
    A.render(`<h1>📜 History timeline</h1><p class="muted">${DATA.timeline.length} entries. History questions are the cheapest points on both tests — and each event’s rules name history as a required area. Switch to <b>Quiz</b> to drill who did what.</p>
    <div class="row noprint"><span class="chip badge ${ev === 'all' ? 'on' : ''}" data-e="all">All</span><span class="chip badge b-circ ${ev === 'circuit' ? 'on' : ''}" data-e="circuit">⚡ Circuit</span><span class="chip badge b-th ${ev === 'thermo' ? 'on' : ''}" data-e="thermo">🔥 Thermo</span><input type="text" id="tq" placeholder="search name, year, topic…" style="flex:1;min-width:180px"><a class="btn pri" href="#/timeline/quiz">🎲 Quiz me</a></div><div class="tl" id="tl"></div>`);
    const draw = () => { A.$('#tl').innerHTML = DATA.timeline.filter(t => (ev === 'all' || t.ev === ev) && (t.year + t.who + t.what).toLowerCase().includes(text)).sort((a, b) => parseYear(a.year) - parseYear(b.year)).map(t => `<div class="it ${t.ev === 'thermo' ? 't' : ''}"><span class="yr">${esc(t.year)}</span> · <b>${esc(t.who)}</b><div class="muted">${esc(t.what)}</div></div>`).join(''); };
    A.$$('.chip').forEach(c => c.onclick = () => { ev = c.dataset.e; A.$$('.chip').forEach(x => x.classList.toggle('on', x === c)); draw(); }); A.$('#tq').oninput = e => { text = e.target.value.toLowerCase(); draw(); }; draw();
  };
  const parseYear = y => { const m = String(y).match(/(\d{3,4})/); let v = m ? +m[1] : 0; if (/BC/.test(y)) v = -v; if (/1st c/.test(y)) v = 50; return v; };
  A.views.tlquiz = () => {
    let n = 0, c = 0; const tl = DATA.timeline;
    A.render(`<a href="#/timeline">← timeline</a><h1>🎲 History quiz</h1><div class="row"><select id="qe"><option value="all">Both events</option><option value="circuit">Circuit</option><option value="thermo">Thermo</option></select><select id="qm"><option value="who">Mode: who?</option><option value="when">Mode: when?</option></select><span class="sp"></span><b id="sc">0/0</b></div><div id="qq"></div>`);
    const nextQ = () => {
      const ev = A.$('#qe').value, mode = A.$('#qm').value; const pool = tl.filter(t => ev === 'all' || t.ev === ev); const t = A.rand.pick(pool); const key = mode === 'who' ? 'who' : 'year';
      const opts = A.shuffle([t].concat(A.shuffle(pool.filter(x => x[key] !== t[key])).slice(0, 3))); const dedup = []; opts.forEach(o => { if (!dedup.find(d => d[key] === o[key])) dedup.push(o); });
      const q = { id: 'tlq' + Math.random(), type: 'mc', t: t.ev === 'circuit' ? 'c17' : 't15', ev: t.ev, d: 1, q: mode === 'who' ? `Who / what is linked to this (${t.year})?\n“${t.what}”` : `When? ${t.who}: “${t.what}”`, ch: dedup.map(o => o[key]), ans: dedup.findIndex(o => o[key] === t[key]), exp: `${t.year} — ${t.who}: ${t.what}` };
      A.Q.mount(A.$('#qq'), q, { mode: 'instant', onResult: (r, ok) => { n++; if (ok) c++; A.$('#sc').textContent = c + '/' + n; A.markDay(); A.save(); const b = document.createElement('button'); b.className = 'btn pri'; b.textContent = 'Next →'; b.onclick = nextQ; A.$('#qq').appendChild(b); b.focus(); } });
    };
    A.$('#qe').onchange = A.$('#qm').onchange = nextQ; nextQ();
  };
  A.route(/^\/timeline$/, A.views.timeline); A.route(/^\/timeline\/quiz$/, A.views.tlquiz);

  /* ---------- Syllabus ---------- */
  A.views.syllabus = () => {
    const d = sylDay(); const total = DATA.syllabus.reduce((a, x) => a + x.tasks.length, 0), doneN = Object.values(S.syl.done).filter(Boolean).length;
    const KIND = { L: ['LEARN', 'b-core'], P: ['PRACTICE', 'b-adv'], H: ['HANDS-ON', 'b-hw'], R: ['REVIEW', 'b-hist'], M: ['MOCK / TEST', 'b-xtra'], F: ['TRYOUT-FILTER', 'b-filter'], B: ['PLUG-N-CHUG', 'b-sn'] };
    A.render(`<h1>🗓️ 30-day dual-event plan</h1><p class="muted">Built so that <b>circuits</b> (you know some) and <b>thermodynamics</b> (from scratch) both reach test-ready in a month at ≈ 2–2½ hours/day. <span class="badge b-filter">TRYOUT-FILTER</span> tasks are the multi-step, separator problems (the questions that decide who makes the top team); <span class="badge b-sn">PLUG-N-CHUG</span> tasks are the baseline points every competitor must bank.</p>
    <div class="card"><div class="row"><label>Start date<input type="date" id="sd" value="${S.syl.start || ''}"></label><button class="btn" id="st">Start today</button><span class="sp"></span><div style="min-width:260px"><b>${doneN}/${total}</b> tasks done${A.bar(doneN / total)}</div></div>${d ? `<p class="muted">Today is <b>day ${d > 30 ? 'after the plan (' + d + ')' : d}</b>.</p>` : ''}<div class="row small">${Object.values(KIND).map(k => `<span class="badge ${k[1]}">${k[0]}</span>`).join('')}</div></div>
    ${[1, 2, 3, 4].map(w => `<h2>Week ${w} — ${['Foundations', 'Devices, magnetism & heat transfer', 'Advanced + hands-on + history', 'Gap-filling, speed & polish'][w - 1]}</h2>${DATA.syllabus.filter(x => x.week === w).map(day => `<div class="day ${d === day.day ? 'today' : ''}"><div class="row"><h4 style="margin:0">Day ${day.day} — ${esc(day.focus)}</h4><span class="sp"></span><span class="muted small">~${day.mins} min</span></div>${day.tasks.map((t, i) => { const k = 'd' + day.day + 't' + i; const kk = KIND[t.kind] || KIND.L; return `<label class="task ${S.syl.done[k] ? 'done' : ''}" style="flex-direction:row;color:var(--text)"><input type="checkbox" data-k="${k}" ${S.syl.done[k] ? 'checked' : ''}> <span><span class="badge ${kk[1]}" style="font-size:.65rem">${kk[0]}</span> <a href="${t.link}">${esc(t.txt)}</a></span></label>`; }).join('')}</div>`).join('')}`).join('')}
    <div class="box key"><b>Rules of the plan</b>1) Do the lesson → the mini-quiz → practice set → drills, in that order. 2) Never skip the wrong-answer bank. 3) Every 7th day is a checkpoint — treat it like the real test. 4) If you fall behind, drop the PLUG-N-CHUG drills first, never the HANDS-ON items or the TRYOUT-FILTER tasks. 5) Buy a cheap multimeter + breadboard + parts by Day 8.</div>`);
    A.$('#sd').onchange = e => { S.syl.start = e.target.value || null; A.save(); A.views.syllabus(); }; A.$('#st').onclick = () => { S.syl.start = A.today(); A.save(); A.views.syllabus(); };
    A.$$('input[data-k]').forEach(i => i.onchange = () => { S.syl.done[i.dataset.k] = i.checked; i.closest('.task').classList.toggle('done', i.checked); A.save(); });
  };
  A.route(/^\/syllabus$/, A.views.syllabus);

  /* ---------- Rules ---------- */
  const MATRIX = {
    circuit: [['Foundational theory', ['c01', 'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c09', 'c10', 'c11', 'c16', 'c27']], ['Separator math', ['c07', 'c08', 'c23', 'c24', 'c27']], ['Hardware & control', ['c12', 'c13', 'c14', 'c15', 'c18', 'c19', 'c20', 'c21']], ['Hands-on & safety', ['c12', 'c22', 'c25', 'c26', 'c28']], ['History', ['c17']]],
    thermo: [['Foundational theory', ['t01', 't02', 't03', 't04', 't05', 't06', 't09', 't10', 't11', 't20', 't23']], ['Separator math', ['t07', 't08', 't12', 't13', 't14', 't22']], ['Hardware & control (devices)', ['t16', 't17']], ['Hands-on & safety', ['t16', 't18', 't19', 't21', 't23']], ['History (8 named scientists)', ['t15', 't23']]]
  };
  A.views.rules = () => {
    const R = DATA.rules;
    A.render(`<h1>📋 Rules audit & topic matrix</h1><p class="muted">${esc(R.intro)}</p>
    <div class="box unv"><b>⚠ The one thing I could NOT verify: 2027 Thermodynamics device rules</b>The official page indicates the device now <b>collects</b> heat (it used to <i>insulate</i> a beaker of hot water). The real 2027 rules PDF is behind an email form, so specs, materials, size, scoring and written-test scope for 2027 are <b>unknown</b> here. Lessons t16–t18 teach the last verified rules (2018/2019) as physics training, and t17 teaches heat-collection principles. <b>Get the PDF and paste it below.</b></div>
    <div class="card"><h3 style="margin-top:0">How to get the 2027 rules</h3><ol>${R.howToGet2027.map(s => `<li>${esc(s)}</li>`).join('')}</ol><label>${esc(R.pasteCta)}<textarea id="p27" rows="8" placeholder="Paste the Thermodynamics rules (device parameters, scoring, written topics, allowed notes)…">${esc(S.rules27)}</textarea></label><div class="row small muted"><span>Saved automatically in this browser and added to your Binder page.</span></div></div>
    <h2>Audit: verified vs unverified</h2><div class="tablewrap"><table><tr><th>Event</th><th>Item</th><th>Status</th><th>Details</th><th>Source</th></tr>${R.audit.map(a => `<tr><td>${EV[a.ev].icon}</td><td><b>${esc(a.item)}</b></td><td><span class="badge ${a.st === 'ver' ? 'b-ver' : 'b-unv'}">${a.st === 'ver' ? 'VERIFIED' : 'UNVERIFIED'}</span></td><td>${esc(a.detail)}</td><td class="small muted">${esc(a.src)}</td></tr>`).join('')}</table></div>
    <h2>Topic matrix — everything in this course</h2><p class="muted">Five categories per event. Every cell links to its lesson.</p>
    ${['circuit', 'thermo'].map(e => `<div class="card"><h3 style="margin-top:0">${EV[e].icon} ${EV[e].name}</h3><div class="tablewrap"><table>${MATRIX[e].map(m => `<tr><th style="width:190px">${m[0]}</th><td>${m[1].map(id => { const l = A.lesson(id); return `<a class="lrow" style="display:inline-flex;margin:3px;padding:5px 10px" href="#/lesson/${id}">${id} ${esc(l.t.length > 46 ? l.t.slice(0, 44) + '…' : l.t)} ${A.tierBadge(l.tier)}</a>`; }).join('')}</td></tr>`).join('')}</table></div></div>`).join('')}
    <h2>Hands-on specs</h2><div class="grid g2">${R.handsOn.map(h => `<div class="card" style="margin:0"><b>${esc(h[0])}</b><p>${esc(h[1])}</p></div>`).join('')}</div>
    <h2>Sources</h2><ul>${R.sources.map(s => `<li><a href="${s[1]}" target="_blank" rel="noopener">${esc(s[0])}</a></li>`).join('')}</ul><p class="small muted">Always verify with your coach / tournament director. Rules audit last updated ${R.updated}.</p>`);
    A.$('#p27').oninput = e => { S.rules27 = e.target.value; A.save(); };
  };
  A.route(/^\/rules$/, A.views.rules);

  /* ---------- Binder ---------- */
  const REF = {
    consts: [['Elementary charge e', '1.602×10⁻¹⁹ C'], ['Coulomb constant k', '8.99×10⁹ N·m²/C²'], ['ε₀', '8.854×10⁻¹² F/m'], ['μ₀', '4π×10⁻⁷ T·m/A'], ['Speed of light c', '3.00×10⁸ m/s'], ['Electron mass', '9.11×10⁻³¹ kg'], ['Boltzmann k_B', '1.381×10⁻²³ J/K'], ['Avogadro N_A', '6.022×10²³ /mol'], ['Gas constant R', '8.314 J/mol·K = 0.08206 L·atm/mol·K'], ['Stefan–Boltzmann σ', '5.670×10⁻⁸ W/m²K⁴'], ['Wien b', '2.898×10⁻³ m·K'], ['Water: c / L_f / L_v', '4184 J/kg·K / 3.34×10⁵ / 2.26×10⁶ J/kg'], ['Ice / steam c', '2090 / 2010 J/kg·K'], ['1 atm', '101.325 kPa = 760 mmHg'], ['0 °C', '273.15 K'], ['Earth B field', '≈ 50 μT']],
    prefix: 'T 10¹² · G 10⁹ · M 10⁶ · k 10³ · h 10² · da 10 · d 10⁻¹ · c 10⁻² · m 10⁻³ · μ 10⁻⁶ · n 10⁻⁹ · p 10⁻¹²',
    k: [['Copper', '401'], ['Aluminum', '237'], ['Iron/steel', '50–80'], ['Glass', '0.8–1.0'], ['Water', '0.6'], ['Brick/concrete', '0.7–1.0'], ['Wood', '0.12–0.17'], ['Polystyrene foam', '0.03–0.04'], ['Polyurethane foam', '0.022–0.028'], ['Aerogel', '0.015–0.02'], ['Still air', '0.026']]
  };
  A.views.binder = () => {
    let show = S.ev || 'circuit';
    const page = () => {
      const evs = show === 'both' ? ['circuit', 'thermo'] : [show];
      A.render(`<div class="noprint"><h1>📒 Binder & formula sheets</h1><p class="muted">Both events allow notes (check your tournament’s rules: size, pages, binder or sheet). This page compiles every formula from every lesson plus constants, conversions, history and your own notes. Print it (Ctrl/Cmd+P → “Save as PDF” for a file) and <b>cut it down to what you actually use.</b></p><div class="row" style="gap:12px"><div class="seg" id="shseg"><button data-v="circuit" class="${show === 'circuit' ? 'on' : ''}">Circuit Lab</button><button data-v="thermo" class="${show === 'thermo' ? 'on' : ''}">Thermodynamics</button></div><button class="btn pri" onclick="window.print()">Print this tab</button></div></div>
      <div class="card"><h2 style="margin-top:0">Constants, prefixes & materials</h2><div class="tablewrap"><table>${REF.consts.map(c => `<tr><td>${c[0]}</td><td>${c[1]}</td></tr>`).join('')}</table></div><p><b>SI prefixes:</b> ${REF.prefix}</p><p><b>Thermal conductivity k (W/m·K):</b> ${REF.k.map(k => k.join(' ')).join(' · ')}</p></div>
      ${evs.includes('circuit') ? `<div class="card"><h2 style="margin-top:0">Resistor color code</h2><p>0 black · 1 brown · 2 red · 3 orange · 4 yellow · 5 green · 6 blue · 7 violet · 8 gray · 9 white · gold ×0.1 / ±5 % · silver ×0.01 / ±10 % · none ±20 % · tolerance colors: brown 1 %, red 2 %, green 0.5 %, blue 0.25 %, violet 0.1 %.</p></div>` : ''}
      ${evs.map(e => `<h2>${EV[e].icon} ${EV[e].name} — all formulas</h2>${DATA.lessons.filter(l => l.ev === e && (l.formulas || []).length).map(l => `<div class="card flat" style="break-inside:avoid"><b>${l.id} · ${esc(l.t)}</b><table>${l.formulas.map(f => `<tr><td style="width:28%">${esc(f[0])}</td><td><span class="fml">${A.fml(f[1])}</span></td></tr>`).join('')}</table></div>`).join('')}`).join('')}
      <h2>History timeline</h2>${evs.map(e => `<h3>${EV[e].icon} ${EV[e].short}</h3><div class="tablewrap"><table>${DATA.timeline.filter(t => t.ev === e).map(t => `<tr><td style="width:110px">${esc(t.year)}</td><td style="width:230px"><b>${esc(t.who)}</b></td><td>${esc(t.what)}</td></tr>`).join('')}</table></div>`).join('')}
      ${S.rules27 ? `<div class="card"><h2 style="margin-top:0">2027 Thermodynamics rules (your paste)</h2><pre style="white-space:pre-wrap">${esc(S.rules27)}</pre></div>` : ''}
      <div class="card noprint"><h2 style="margin-top:0">✍️ My notes (saved)</h2><p class="small muted">Mistakes, mnemonics, worked examples. Appears in the printout.</p>${evs.map(e => `<h4>${EV[e].name}</h4><textarea rows="8" data-n="${e}">${esc(S.notes[e])}</textarea>`).join('')}</div>
      ${evs.map(e => S.notes[e] ? `<div class="card print-only"><h3>${EV[e].name} notes</h3><pre style="white-space:pre-wrap">${esc(S.notes[e])}</pre></div>` : '').join('')}`);
      A.$$('#shseg button').forEach(b => b.onclick = () => { show = b.dataset.v; page(); });
      A.$$('textarea[data-n]').forEach(t => t.oninput = () => { S.notes[t.dataset.n] = t.value; A.save(); });
    };
    page();
  };
  A.route(/^\/binder$/, A.views.binder);

  /* ---------- Settings ---------- */
  A.views.settings = () => {
    A.render(`<h1>⚙️ Settings & data</h1><div class="grid g2"><div class="card"><h3 style="margin-top:0">Appearance & goal</h3><div class="row"><button class="btn" id="th">${S.theme === 'light' ? '🌙 Switch to dark' : '☀️ Switch to light'}</button></div><label style="margin-top:10px">Tournament date (shows a countdown)<input type="date" id="td" value="${S.tdate || ''}"></label></div>
    <div class="card"><h3 style="margin-top:0">Your data (stored in this browser)</h3>${A.memOnly() ? '<div class="box warn"><b>Storage blocked</b>Progress cannot be saved in this browser session. Use Export regularly.</div>' : ''}<div class="row"><button class="btn" id="ex">⬇ Export backup (.json)</button><label class="btn" style="cursor:pointer">⬆ Import<input type="file" id="im" accept=".json" style="display:none"></label><button class="btn" style="background:var(--bad);color:#fff" id="rs">Reset everything</button></div><p class="small muted">Progress lives in localStorage for this address (e.g. <code>localhost:8000</code>). A different port or opening the file directly creates a separate record — export/import moves it.</p></div></div>
    <div class="card"><h3 style="margin-top:0">About this site</h3><p class="small muted">${DATA.lessons.length} lessons · ${DATA.questions.length} questions · ${DATA.gens.length} drill generators · ${DATA.cards.length} flashcards · ${DATA.timeline.length} timeline entries. Verified vs unverified information is labelled on the Rules page; always confirm details with your official manual and coach.</p></div>`);
    A.$('#th').onclick = () => { S.theme = S.theme === 'light' ? 'dark' : 'light'; A.save(); A.applyTheme(); A.views.settings(); };
    A.$('#td').onchange = e => { S.tdate = e.target.value || null; A.save(); };
    A.$('#ex').onclick = () => { const b = new Blob([A.exportData()], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'scioly-progress-' + A.today() + '.json'; a.click(); };
    A.$('#im').onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { try { A.importData(t); A.toast('Imported'); A.dispatch(); } catch (x) { A.toast('Invalid file'); } }); };
    A.$('#rs').onclick = () => { if (confirm('Erase ALL progress, notes and settings?')) { A.reset(); A.dispatch(); } };
  };
  A.route(/^\/settings$/, A.views.settings);
})();

/* ---- diagram injection: DATA.dgmap[lessonId] = [[h2Index, diagramId], ...] (h2Index 0-based; diagram goes right after that heading's following paragraph) ---- */
(function () {
  const A = window.App; DATA.dgmap = DATA.dgmap || {};
  A.lessonHtml = l => {
    const m = DATA.dgmap[l.id]; if (!m || !window.DG) return l.html;
    let i = -1, out = '', last = 0; const re = /<h2[^>]*>[\s\S]*?<\/h2>/g; let x;
    const by = {}; m.forEach(([h, id]) => { (by[h] = by[h] || []).push(id); });
    while ((x = re.exec(l.html))) {
      i++; const end = x.index + x[0].length; if (!by[i]) continue;
      out += l.html.slice(last, end) + by[i].map(id => { try { return DG.reg[id] ? DG.make(id) : ''; } catch (e) { return ''; } }).join(''); last = end;
    }
    return out + l.html.slice(last);
  };
})();
