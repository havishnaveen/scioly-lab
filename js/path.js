/* ============ Learn: Duolingo-style path + list, status filters, test-out ============ */
(function () {
  const A = window.App, S = A.S, esc = A.esc, Q = A.Q || {}, EV = DATA.events;
  const go = h => { location.hash = h; };
  const status = l => { const d = (S.les[l.id] || {}); if (d.done) return 'done'; const st = A.lessonStats(l.id); return (st.n > 0 || d.seen) ? 'prog' : 'todo'; };
  const LOW = id => id === 'c11';
  S.learnView = S.learnView || 'path'; S.learnFilter = S.learnFilter || 'all';
  const OFF = [0, 44, 76, 44, 0, -44, -76, -44];

  /* ---------- test out ---------- */
  A.testOutSet = id => {
    const qs = DATA.questions.filter(q => q.t === id && q.type !== 'ms');
    const hard = A.shuffle(qs.filter(q => q.d >= 3)), mid = A.shuffle(qs.filter(q => q.d === 2));
    return hard.concat(mid).slice(0, 10);
  };
  A.routeFirst(/^\/testout\/(\w+)$/, id => {
    const l = A.lesson(id); if (!l) return go('#/learn'); const qs = A.testOutSet(id);
    if (qs.length < 4) { A.render(`<h1>Test out of ${esc(l.t)}</h1><p class="muted">This lesson has too few questions to test out of. Read it, then mark it done.</p><a class="btn pri" href="#/lesson/${id}">Open lesson</a>`); return; }
    A.Q.exam({ title: `Test out: ${l.t}`, qs, limit: 0, key: 'tout:' + id, idk: true,
      blurb: `${qs.length} questions. Score <b>80% or more</b> and the lesson is marked complete. Miss it and nothing is lost: you will see exactly what to study.`,
      onFinish: res => {
        const pct = res.score / res.total, pass = pct >= 0.8;
        if (pass) { const e = S.les[id] || (S.les[id] = {}); e.done = true; e.testedOut = true; e.doneAt = Date.now(); A.markDay && A.markDay(); A.save(true); }
        return `<div class="card ${pass ? 'startcard' : ''}"><h2 style="margin-top:0">${pass ? 'Passed. Lesson complete.' : 'Not yet.'} ${res.score}/${res.total} (${Math.round(pct * 100)}%)</h2>
        <p>${pass ? 'This lesson is marked done and counts toward your readiness.' : 'You need 80% to skip. Read the lesson, especially the “Go deeper” section, then try again. Wrong answers are saved to your Misses list.'}</p>
        <div class="row"><a class="btn pri" href="#/learn/${l.ev}">Back to the path</a><a class="btn" href="#/lesson/${id}">Open lesson</a>${pass ? '' : `<a class="btn" href="#/testout/${id}">Try again</a>`}</div></div>`;
      } });
  });
  /* add a test-out button on every lesson page */
  A.routeFirst(/^\/lesson\/(\w+)$/, id => {
    A.views.lesson(id); const l = A.lesson(id); if (!l) return;
    const e = S.les[id] || (S.les[id] = {}); if (!e.seen) { e.seen = 1; A.save(); }
    const row = document.querySelector('#main .lesson .row.noprint'); if (!row) return;
    const b = document.createElement('a'); b.className = 'btn sm'; b.href = '#/testout/' + id; b.textContent = e.done ? 'Re-test' : 'Test out of this lesson'; b.style.marginLeft = '8px'; row.appendChild(b);
  });

  /* ---------- Learn page ---------- */
  function node(l, i, nxt) {
    const s = status(l), sc = A.lessonScore(l.id), off = OFF[i % OFF.length];
    const cls = ['pn', s, nxt === l ? 'next' : '', LOW(l.id) ? 'low' : '', (S.les[l.id] || {}).testedOut ? 'tout' : ''].join(' ');
    const inner = s === 'done' ? A.ic('check') : `<span>${l.id.slice(1)}</span>`;
    return `<div class="prow" style="--x:${off}px;top:${13 + i * 112}px"><button class="${cls}" data-id="${l.id}" style="--p:${Math.round(sc * 100)}" aria-label="${esc(l.t)}"><i>${inner}</i></button>
      ${nxt === l ? '<span class="pbub">START</span>' : ''}<span class="plab">${esc(l.t.replace(/\s*[:(].*$/, '').slice(0, 34))}</span></div>`;
  }
  function pathSvg(n) { // dashed connector through node centres
    const H = 112, cx = 200; let d = '';
    for (let i = 0; i < n; i++) { const x = cx + OFF[i % OFF.length], y = 48 + i * H; if (i === 0) d += `M${x} ${y}`; else { const px = cx + OFF[(i - 1) % OFF.length], py = 48 + (i - 1) * H; d += `C${px} ${py + 60} ${x} ${y - 60} ${x} ${y}`; } }
    return `<svg class="pline" viewBox="0 0 400 ${48 + (n - 1) * H + 48}" preserveAspectRatio="xMidYMin meet"><path d="${d}"/></svg>`;
  }
  function sheet(l) {
    const s = status(l), st = A.lessonStats(l.id), sc = A.lessonScore(l.id);
    const old = document.getElementById('psheet'); if (old) old.remove();
    const d = document.createElement('div'); d.id = 'psheet'; d.className = 'psheet';
    d.innerHTML = `<div class="psh-bg"></div><div class="psh-c"><div class="row"><span class="badge">${l.id}</span>${A.tierBadge(l.tier)}${LOW(l.id) ? '<span class="badge">Lowest priority</span>' : ''}<span class="sp"></span><button class="btn sm" id="psx">Close</button></div>
      <h3 style="margin:10px 0 4px">${esc(l.t)}</h3><div class="muted small">${A.stars(l.yield)} test yield · about ${l.min} min · ${s === 'done' ? ((S.les[l.id] || {}).testedOut ? 'Tested out' : 'Done') : s === 'prog' ? 'In progress' : 'Not started'}${st.n ? ' · ' + Math.round((st.pct || 0) * 100) + '% on ' + st.n + ' questions' : ''}</div>
      <div style="margin:10px 0">${A.bar(sc, l.ev === 'thermo' ? 'th' : '')}</div>
      <div class="row"><a class="btn pri" href="#/lesson/${l.id}">${s === 'todo' ? 'Start lesson' : 'Open lesson'}</a><a class="btn" href="#/testout/${l.id}">${s === 'done' ? 'Re-test' : 'Test out'}</a><a class="btn" href="#/practice/${l.id}">Practice</a></div></div>`;
    document.body.appendChild(d); const close = () => d.remove(); d.querySelector('.psh-bg').onclick = close; d.querySelector('#psx').onclick = close; d.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }
  A.routeFirst(/^\/learn\/(circuit|thermo)$/, ev => {
    if (S.ev !== ev) { S.ev = ev; A.save(); document.documentElement.dataset.ev = ev; }
    const groups = A.learnGroups(ev), all = groups.flatMap(g => g.ls), nxt = A.nextLesson(ev);
    const cnt = { done: 0, prog: 0, todo: 0 }; all.forEach(l => cnt[status(l)]++);
    const left = all.filter(l => status(l) !== 'done'), mins = left.reduce((a, l) => a + l.min, 0);
    A.render(`<div class="hub-h"><h1 style="margin:0">Learn</h1><span class="muted">${EV[ev].name}</span></div>
    <div class="card flat lsum"><div><b>${cnt.done}</b> of ${all.length} done · <b>${cnt.prog}</b> in progress · <b>${cnt.todo}</b> to do · about <b>${Math.round(mins / 60)} h</b> left</div>${A.bar(cnt.done / all.length, ev === 'thermo' ? 'th' : '')}</div>
    <div class="row noprint" style="gap:14px;margin:14px 0 6px;flex-wrap:wrap"><div class="seg" id="vseg" style="margin:0"><button data-v="path">Path</button><button data-v="list">List</button></div>
      <div class="seg" id="fseg" style="margin:0"><button data-f="all">All</button><button data-f="todo">To do (${cnt.todo + cnt.prog})</button><button data-f="done">Done (${cnt.done})</button></div></div>
    ${ev === 'thermo' ? '<p class="small muted">2027 device and scoring details are UNVERIFIED; check the Rules page.</p>' : ''}<div id="lhost"></div>`);
    const draw = () => {
      A.$$('#vseg button').forEach(b => b.classList.toggle('on', b.dataset.v === S.learnView)); A.$$('#fseg button').forEach(b => b.classList.toggle('on', b.dataset.f === S.learnFilter));
      const keep = l => S.learnFilter === 'all' || (S.learnFilter === 'done' ? status(l) === 'done' : status(l) !== 'done');
      const host = A.$('#lhost');
      host.innerHTML = groups.map((g, gi) => {
        const ls = g.ls.filter(keep); if (!ls.length) return '';
        const gd = g.ls.filter(l => status(l) === 'done').length, full = gd === g.ls.length;
        const head = `<div class="pg-h"><span class="lg-n">${gi + 1}</span><div style="flex:1;min-width:0"><h2>${esc(g.name)}</h2><div class="muted small">${esc(g.blurb)}</div></div><b class="pg-c">${gd}/${g.ls.length}</b></div>`;
        if (S.learnView === 'list') return `<section class="lgroup">${head}${ls.map(l => { const s = status(l), sc = A.lessonScore(l.id); return `<div class="lrow" data-go="#/lesson/${l.id}" style="cursor:pointer"><span class="n">${l.id}</span><div style="flex:1;min-width:0"><b>${esc(l.t)}</b> ${nxt === l ? '<span class="badge b-next">Up next</span>' : ''}<div class="row small muted" style="gap:10px;margin-top:4px">${A.tierBadge(l.tier)}<span>${s === 'done' ? ((S.les[l.id] || {}).testedOut ? 'Tested out' : 'Done') : s === 'prog' ? 'In progress' : 'To do'}</span><span>~${l.min} min</span></div></div><div style="width:80px">${A.bar(sc, ev === 'thermo' ? 'th' : '')}</div><button class="btn sm" data-go="#/testout/${l.id}" style="margin-left:8px">Test out</button></div>`; }).join('')}</section>`;
        const body = `<div class="ppath" style="height:${48 + (ls.length - 1) * 112 + 70}px">${pathSvg(ls.length)}${ls.map((l, i) => node(l, i, nxt)).join('')}</div>`;
        return `<details class="pgroup" ${full && S.learnFilter === 'all' ? '' : 'open'}><summary>${head}</summary>${body}</details>`;
      }).join('') || '<div class="card">Nothing here. Try the All filter.</div>';
      A.$$('.pn', host).forEach(b => b.onclick = () => sheet(A.lesson(b.dataset.id)));
      A.$$('[data-go]', host).forEach(b => b.onclick = e => { e.stopPropagation(); go(b.dataset.go); });
    };
    A.$$('#vseg button').forEach(b => b.onclick = () => { S.learnView = b.dataset.v; A.save(); draw(); });
    A.$$('#fseg button').forEach(b => b.onclick = () => { S.learnFilter = b.dataset.f; A.save(); draw(); });
    draw();
    const nb = A.$('.pn.next'); if (nb && S.learnView === 'path') setTimeout(() => nb.scrollIntoView({ block: 'center', behavior: 'smooth' }), 120);
  });
})();
