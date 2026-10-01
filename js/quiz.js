/* ============ QUIZ ENGINE, MOCKS, DIAGNOSTIC, DRILLS, WRONG BANK ============ */
(function () {
  const A = window.App, S = A.S, esc = A.esc;
  const Q = (A.Q = {});
  const LET = 'ABCDEFGH';

  /* ---------- answer logic ---------- */
  Q.parseNum = s => {
    if (s == null) return NaN;
    s = String(s).trim().replace(/−/g, '-').replace(/,/g, '').replace(/\s+/g, '');
    s = s.replace(/(?:×|x|\*)10\^?([-+]?\d+)/i, 'e$1');
    const fr = s.match(/^([-+]?\d*\.?\d+)\/(\d*\.?\d+)/); if (fr) return parseFloat(fr[1]) / parseFloat(fr[2]);
    const m = s.match(/^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/i);
    return m ? parseFloat(m[0]) : NaN;
  };
  Q.isCorrect = (q, r) => {
    if (r === 'idk' || r == null || r === '') return false;
    if (q.type === 'mc') return r === q.ans;
    if (q.type === 'tf') return r === q.ans;
    if (q.type === 'ms') { const a = (r || []).slice().sort().join(), b = q.ans.slice().sort().join(); return a === b; }
    const x = Q.parseNum(r); if (isNaN(x)) return false;
    const tol = q.tol || 0.02; return Math.abs(x - q.ans) <= Math.max(Math.abs(q.ans) * tol, 1e-9);
  };
  Q.answerText = q => {
    if (q.type === 'mc') return LET[q.ans] + '. ' + q.ch[q.ans];
    if (q.type === 'ms') return q.ans.slice().sort().map(i => LET[i] + '. ' + q.ch[i]).join(' · ');
    if (q.type === 'tf') return q.ans ? 'True' : 'False';
    return A.sf(q.ans, 6) + (q.unit ? ' ' + q.unit : '');
  };
  A.figHtml = f => { try { if (typeof f === 'function') return f(); if (window.DG && DG.reg[f]) return DG.make(f); return String(f).indexOf('<') >= 0 ? f : ''; } catch (e) { return ''; } };
  Q.fromGen = g => {
    let r; for (let i = 0; i < 30 && !(r && isFinite(r.ans)); i++) r = g.fn(A.rand);
    const q = { id: 'g:' + g.id + ':' + Math.random().toString(36).slice(2, 7), gid: g.id, type: 'num', t: g.t, ev: g.ev, d: g.d, f: g.f, tier: g.tier, q: r.q, fig: r.fig, ans: r.ans, unit: r.unit || '', exp: r.exp, tol: r.tol || 0.02 };
    if (r.ch) { q.type = 'mc'; q.ch = r.ch; }
    return q;
  };

  /* ---------- randomise choice order once per page load (source data is biased toward A/B) ---------- */
  const REF = /\b(above|both|neither|none of|all of|a and b|a & b|b and c|a or b)\b/i;
  DATA.questions.forEach(q => {
    if ((q.type !== 'mc' && q.type !== 'ms') || q.ch.some(c => REF.test(c))) return;
    const order = A.shuffle(q.ch.map((_, i) => i)); const inv = {}; order.forEach((o, n) => inv[o] = n);
    q.ch = order.map(i => q.ch[i]); q.ans = q.type === 'mc' ? inv[q.ans] : q.ans.map(a => inv[a]).sort((x, y) => x - y);
  });

  /* ---------- render one question ---------- */
  // o: {mode:'instant'|'exam'|'review', resp, idk, onChange(resp), onResult(resp, correct), num:'#1'}
  Q.mount = (host, q, o) => {
    o = o || {};
    let resp = o.resp, checked = o.mode === 'review', locked = checked;
    const meta = () => `<div class="qmeta">${o.num ? `<span class="badge">${o.num}</span>` : ''}${A.evBadge(q.ev)}<span class="badge">${q.t && !String(q.t).startsWith('g') ? q.t : ''}</span><span class="badge">${'●'.repeat(Math.min(q.d || 1, 4))}${'○'.repeat(Math.max(0, 3 - (q.d || 1)))}</span>${q.f ? '<span class="badge b-filter">TRYOUT FILTER</span>' : ''}${q.tier ? A.tierBadge(q.tier) : ''}${q.type === 'ms' ? '<span class="badge">select all</span>' : ''}</div>`;
    const feedback = () => {
      if (!checked) return '';
      const ok = Q.isCorrect(q, resp);
      return `<div class="fb ${ok ? 'ok' : 'no'}"><b>${ok ? '✓ Correct' : resp === 'idk' ? '— “Never seen this” (good to know!)' : '✗ Not quite'}</b>${ok ? '' : `<div>Answer: <b>${esc(Q.answerText(q))}</b></div>`}${q.exp ? `<div class="muted" style="margin-top:6px">${esc(q.exp)}</div>` : ''}</div>`;
    };
    const draw = () => {
      let body = '';
      const cls = i => {
        let c = 'opt';
        const sel = q.type === 'ms' ? (resp || []).includes(i) : resp === i;
        if (sel) c += ' sel';
        if (checked) { const isAns = q.type === 'ms' ? q.ans.includes(i) : q.ans === i; if (isAns) c += ' right'; else if (sel) c += ' wrong'; c = c.replace(' sel', ''); }
        return c;
      };
      if (q.type === 'mc' || q.type === 'ms') body = q.ch.map((c, i) => `<div class="${cls(i)}" data-i="${i}"><span class="k">${LET[i]}</span><span>${esc(c)}</span></div>`).join('');
      else if (q.type === 'tf') body = [true, false].map(v => { let c = 'opt'; if (resp === v) c += ' sel'; if (checked) { c = 'opt'; if (q.ans === v) c += ' right'; else if (resp === v) c += ' wrong'; } return `<div class="${c}" data-b="${v}"><span class="k">${v ? 'T' : 'F'}</span><span>${v ? 'True' : 'False'}</span></div>`; }).join('');
      else body = `<div class="row"><input type="text" class="numin" inputmode="decimal" placeholder="your answer (e.g. 1.5, 2e-3, 4.7×10^3)" value="${resp != null && resp !== 'idk' ? esc(resp) : ''}" ${locked ? 'disabled' : ''} style="min-width:230px"><b>${esc(q.unit || '')}</b></div>`;
      const btns = o.mode === 'instant' && !checked ? `<div class="row" style="margin-top:10px"><button class="btn pri chk">Check</button>${o.idk ? '<button class="btn ghost idk">I’ve never seen this</button>' : ''}</div>`
        : (o.mode === 'exam' && o.idk ? `<div class="row" style="margin-top:10px"><button class="btn ghost sm idk">${resp === 'idk' ? '✓ marked: never seen' : 'I’ve never seen this'}</button></div>` : '');
      host.innerHTML = `<div class="q">${meta()}<div class="qt">${esc(q.q).replace(/\n/g, '<br>')}</div>${q.fig ? A.figHtml(q.fig) : ''}${body}${btns}${feedback()}</div>`;
      wire();
    };
    const finish = () => { checked = true; locked = true; draw(); const ok = Q.isCorrect(q, resp); o.onResult && o.onResult(resp, ok); };
    const wire = () => {
      if (locked && o.mode !== 'exam') return;
      host.querySelectorAll('.opt').forEach(el => el.onclick = () => {
        if (locked) return;
        if (q.type === 'mc') resp = +el.dataset.i;
        else if (q.type === 'tf') resp = el.dataset.b === 'true';
        else { const i = +el.dataset.i; const a = Array.isArray(resp) ? resp.slice() : []; const k = a.indexOf(i); k < 0 ? a.push(i) : a.splice(k, 1); resp = a.sort(); }
        o.onChange && o.onChange(resp);
        draw();
      });
      const inp = host.querySelector('.numin');
      if (inp) { inp.oninput = () => { resp = inp.value; o.onChange && o.onChange(resp); }; inp.onkeydown = e => { if (e.key === 'Enter' && o.mode === 'instant' && !locked) { if (inp.value.trim()) finish(); } }; }
      const chk = host.querySelector('.chk'); if (chk) chk.onclick = () => { if (resp == null || resp === '' || (Array.isArray(resp) && !resp.length)) { A.toast('Choose an answer first'); return; } finish(); };
      const idk = host.querySelector('.idk'); if (idk) idk.onclick = () => { resp = 'idk'; o.onChange && o.onChange(resp); if (o.mode === 'instant') finish(); else draw(); };
    };
    draw();
    return { getResp: () => resp };
  };

  /* ---------- exam runner ---------- */
  // opts: {title, qs, limit(sec)|0, key, idk, blurb, onFinish(res)->html, back:'#/...'}
  Q.exam = opts => {
    const qs = opts.qs; const n = qs.length;
    let st = (opts.key && S.sess[opts.key] && S.sess[opts.key].ids && S.sess[opts.key].ids.join() === qs.map(q => q.id).join()) ? S.sess[opts.key] : null;
    if (!st) st = { ids: qs.map(q => q.id), resp: {}, flag: {}, idx: 0, left: opts.limit || 0, el: 0 };
    let timer = null, last = Date.now();
    const persist = () => { if (opts.key) { S.sess[opts.key] = st; A.save(); } };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    A.onLeave(() => { stop(); persist(); });
    const answered = i => { const r = st.resp[qs[i].id]; return r != null && r !== '' && !(Array.isArray(r) && !r.length); };
    function shell() {
      A.render(`<div class="row"><h1 style="margin:0">${esc(opts.title)}</h1><span class="sp"></span>${opts.limit ? `<span class="timer" id="tm"></span>` : ''}</div>
      ${opts.blurb ? `<p class="muted">${opts.blurb}</p>` : ''}
      <div class="card flat"><div class="row"><div class="dots" id="dots"></div><span class="sp"></span><span class="muted small" id="prog"></span></div></div>
      <div id="qhost"></div>
      <div class="row noprint"><button class="btn" id="prev">← Prev</button><button class="btn" id="next">Next →</button><button class="btn ghost" id="flag">⚑ Flag</button><span class="sp"></span><button class="btn pri" id="submit">Submit &amp; grade</button></div>`);
      A.$('#prev').onclick = () => go(st.idx - 1); A.$('#next').onclick = () => go(st.idx + 1);
      A.$('#flag').onclick = () => { st.flag[qs[st.idx].id] = !st.flag[qs[st.idx].id]; persist(); dots(); };
      A.$('#submit').onclick = () => { const un = qs.filter((_, i) => !answered(i)).length; if (!un || confirm(`${un} question(s) unanswered. Submit anyway?`)) submit(); };
      dots(); show();
      if (opts.limit) { tick(); timer = setInterval(tick, 1000); }
    }
    function tick() { const now = Date.now(); const dt = (now - last) / 1000; last = now; st.left -= dt; st.el += dt; const t = A.$('#tm'); if (t) { t.textContent = '⏱ ' + A.fmtTime(st.left); if (st.left < 120) t.style.color = 'var(--bad)'; } if (st.left <= 0) { A.toast('Time’s up — submitting'); submit(); } }
    function dots() { A.$('#dots').innerHTML = qs.map((q, i) => `<i data-i="${i}" class="${i === st.idx ? 'cur' : ''} ${answered(i) ? 'ans' : ''} ${st.flag[q.id] ? 'fl' : ''}" title="Q${i + 1}"></i>`).join(''); A.$$('#dots i').forEach(d => d.onclick = () => go(+d.dataset.i)); A.$('#prog').textContent = `${qs.filter((_, i) => answered(i)).length}/${n} answered`; }
    function show() {
      const q = qs[st.idx];
      Q.mount(A.$('#qhost'), q, { mode: 'exam', resp: st.resp[q.id], idk: opts.idk, num: `Q${st.idx + 1}/${n}`, onChange: r => { st.resp[q.id] = r; persist(); dots(); } });
      A.$('#prev').disabled = st.idx === 0; A.$('#next').disabled = st.idx === n - 1; dots();
    }
    function go(i) { if (i < 0 || i >= n) return; st.idx = i; persist(); show(); }
    function submit() {
      stop();
      const items = qs.map(q => { const r = st.resp[q.id]; const ok = Q.isCorrect(q, r); A.recordQ(q, ok); return { q, resp: r, correct: ok, idk: r === 'idk', answered: r != null && r !== '' }; });
      const res = { items, score: items.filter(i => i.correct).length, total: n, secs: st.el };
      if (opts.key) { delete S.sess[opts.key]; A.save(); }
      const html = opts.onFinish ? opts.onFinish(res) : '';
      A.render(`<h1>${esc(opts.title)} — results</h1>${html}<h2>Review every question</h2><div id="rev"></div>`);
      const rev = A.$('#rev');
      items.forEach((it, i) => { const d = document.createElement('div'); rev.appendChild(d); Q.mount(d, it.q, { mode: 'review', resp: it.resp, num: `Q${i + 1}` }); });
      A.buildNav();
    }
    shell();
  };

  /* ---------- question-set builders ---------- */
  const tierW = q => 1;
  Q.pickQuestions = (ev, n, o) => {
    o = o || {};
    let pool = DATA.questions.filter(q => (ev === 'both' || q.ev === ev) && (!o.hard || q.d >= 3 || q.f) && (!o.lessons || o.lessons.includes(q.t)));
    // prefer questions not yet answered correctly
    pool = A.shuffle(pool).sort((a, b) => ((S.q[a.id] && S.q[a.id].last === 1 ? 1 : 0) - (S.q[b.id] && S.q[b.id].last === 1 ? 1 : 0)));
    const ngen = o.noGen ? 0 : Math.round(n * 0.2);
    const out = pool.slice(0, n - ngen);
    // spread: if short, allow repeats from start
    const gens = A.shuffle(DATA.gens.filter(g => (ev === 'both' || g.ev === ev) && (!o.hard || g.d >= 2 || g.f) && (!o.lessons || o.lessons.includes(g.t))));
    for (let i = 0; i < ngen && gens.length; i++) out.push(Q.fromGen(gens[i % gens.length]));
    return A.shuffle(out);
  };

  /* ---------- MOCK EXAMS ---------- */
  A.views.mockIndex = () => {
    const opt = (id, ttl, desc) => `<a class="lrow" href="#/mock/${id}"><div><b>${ttl}</b><div class="small muted">${desc}</div></div></a>`;
    A.render(`<a href="#/practice">← Practice</a><h1>Mock exams</h1><p class="muted">Timed, no feedback until you submit — like a real written test. Every miss lands in your Wrong-answer bank. ~80 % static questions, ~20 % freshly randomised calculations.</p>
    <h2>${DATA.events[S.ev].name}</h2>${opt(S.ev, 'Quick mock — 25 questions · 30 min', 'Balanced across all topics')}${opt(S.ev + '-full', 'Full mock — 50 questions · 50 min', 'Matches a real event length')}${opt(S.ev + '-hard', 'Hard mode — 20 questions · 30 min', 'Only tryout-filter / difficulty-3 questions')}
    <h2>Mixed & custom</h2>${opt('mixed', 'Mixed — 40 questions · 45 min', 'Both events interleaved')}<div class="card"><h3 style="margin-top:0">Custom mock</h3><div class="grid g3" id="cust"></div><div class="row" style="margin-top:10px"><label>Questions<input type="number" id="cn" value="20" min="5" max="100"></label><button class="btn pri" id="cgo">Build custom mock</button></div></div>
    ${S.mocks.length ? `<h2>History</h2><div class="tablewrap"><table><tr><th>Date</th><th>Exam</th><th>Score</th><th>Time</th></tr>${S.mocks.slice().reverse().slice(0, 20).map(m => `<tr><td>${m.date}</td><td>${esc(m.title)}</td><td>${m.score}/${m.total} (${A.pct(m.score / m.total)})</td><td>${A.fmtTime(m.secs)}</td></tr>`).join('')}</table></div>` : ''}`);
    A.$('#cust').innerHTML = DATA.lessons.filter(l => l.ev === S.ev).map(l => `<label style="flex-direction:row;align-items:center;gap:8px"><input type="checkbox" value="${l.id}"> <span>${l.id} ${esc(l.t.slice(0, 34))}${l.t.length > 34 ? '…' : ''}</span></label>`).join('');
    A.$('#cgo').onclick = () => { const ls = A.$$('#cust input:checked').map(i => i.value); if (!ls.length) return A.toast('Tick at least one topic'); A.views.mock('custom:' + ls.join('+') + ':' + (+A.$('#cn').value || 20)); };
  };
  A.views.mock = kind => {
    let ev = 'both', n = 25, lim = 1800, hard = false, title, lessons = null;
    if (kind.startsWith('custom:')) { const p = kind.split(':'); lessons = p[1].split('+'); n = +p[2]; lim = Math.round(n * 75); title = 'Custom mock (' + n + ' q)'; }
    else { const p = kind.split('-'); ev = p[0] === 'mixed' ? 'both' : p[0]; if (p[0] === 'mixed') { n = 40; lim = 2700; } if (p[1] === 'full') { n = 50; lim = 3000; } if (p[1] === 'hard') { n = 20; hard = true; } title = (ev === 'both' ? 'Mixed' : DATA.events[ev].name) + (p[1] === 'full' ? ' — full mock' : p[1] === 'hard' ? ' — hard mode' : ' — mock') + ` (${n} q)`; }
    const qs = Q.pickQuestions(ev, n, { hard, lessons });
    Q.exam({ title, qs, limit: lim, key: 'mock:' + kind, blurb: `${n} questions · ${Math.round(lim / 60)} minutes · answers are not revealed until you submit.`, onFinish: res => {
      S.mocks.push({ date: A.today(), title, score: res.score, total: res.total, secs: res.secs }); A.save();
      return summaryHtml(res) + `<div class="row noprint"><a class="btn pri" href="#/mock/${kind}" onclick="setTimeout(()=>location.reload(),0)">Retake a fresh one</a><a class="btn" href="#/wrong">Wrong-answer bank</a><a class="btn" href="#/mock">All mocks</a></div>`;
    } });
  };
  function summaryHtml(res) {
    const by = {};
    res.items.forEach(i => { const l = i.q.t; if (String(l).startsWith('g')) return; (by[l] = by[l] || { n: 0, c: 0 }); by[l].n++; if (i.correct) by[l].c++; });
    const rows = Object.entries(by).sort((a, b) => (a[1].c / a[1].n) - (b[1].c / b[1].n)).map(([l, v]) => `<tr><td><a href="#/lesson/${l}">${l}</a> ${esc((A.lesson(l) || {}).t || '')}</td><td>${v.c}/${v.n}</td><td style="width:35%">${A.bar(v.c / v.n)}</td></tr>`).join('');
    return `<div class="card hero"><div class="row"><div class="kpi"><b>${A.pct(res.score / res.total)}</b><span>score ${res.score}/${res.total}</span></div><div class="kpi"><b>${A.fmtTime(res.secs)}</b><span>time used</span></div><div class="kpi"><b>${res.items.filter(i => !i.answered).length}</b><span>blank</span></div></div></div><h3>By topic (weakest first)</h3><div class="tablewrap"><table>${rows}</table></div>`;
  }

  /* ---------- LESSON PRACTICE + MINI-QUIZ ---------- */
  Q.inlineSet = (host, qs, opts) => {
    opts = opts || {};
    host.innerHTML = qs.map((q, i) => `<div data-qi="${i}"></div>`).join('') + `<div id="inlsum" class="card flat" style="display:none"></div>`;
    let done = 0, ok = 0;
    qs.forEach((q, i) => Q.mount(host.querySelector(`[data-qi="${i}"]`), q, { mode: 'instant', num: `#${i + 1}`, onResult: (r, c) => { A.recordQ(q, c); done++; if (c) ok++; if (done === qs.length) { const s = host.querySelector('#inlsum'); s.style.display = ''; s.innerHTML = `<b>Set complete: ${ok}/${qs.length}</b> (${A.pct(ok / qs.length)})`; opts.onDone && opts.onDone(ok, qs.length); A.buildNav(); } } }));
  };
  A.views.practice = id => {
    const l = A.lesson(id); if (!l) return A.render('<p>Unknown lesson</p>');
    const qs = DATA.questions.filter(q => q.t === id).sort((a, b) => a.d - b.d);
    const gs = DATA.gens.filter(g => g.t === id);
    A.render(`<a href="#/lesson/${id}">← ${id}: ${esc(l.t)}</a><h1>Practice — ${esc(l.t)}</h1><p class="muted">${qs.length} questions, easiest first. Each is checked instantly. Wrong answers go to your bank and come back.</p>
      ${gs.length ? `<div class="card flat"><b>Infinite randomised drills for this topic:</b> ${gs.map(g => `<a class="btn sm" href="#/drill/${g.id}">${esc(g.title)}</a>`).join(' ')}</div>` : ''}<div id="set"></div>`);
    Q.inlineSet(A.$('#set'), qs);
  };
  A.route(/^\/practice\/(\w+)$/, A.views.practice);
  A.route(/^\/mock$/, A.views.mockIndex);
  A.route(/^\/mock\/(.+)$/, A.views.mock);

  /* ---------- DRILLS ---------- */
  A.views.drillIndex = () => {
    const block = ev => `<h2>${DATA.events[ev].name} generators</h2><div class="grid g2">${DATA.gens.filter(g => g.ev === ev).map(g => { const s = S.gen[g.id]; return `<a class="lrow" href="#/drill/${g.id}"><span class="n">${g.t}</span><div style="flex:1"><b>${esc(g.title)}</b> ${g.f ? '<span class="badge b-filter">filter</span>' : ''}<div class="small muted">${'●'.repeat(g.d)} ${s ? `${s.c}/${s.n} correct` : 'not tried'}</div></div></a>`; }).join('')}</div>`;
    A.render(`<a href="#/practice">← Practice</a><h1>Infinite drills · ${DATA.events[S.ev].short}</h1><p class="muted">${DATA.gens.filter(g => g.ev === S.ev).length} randomised problem generators — fresh numbers every time, worked solution after each. Plug-and-chug speed is where baseline points live; the “filter” ones are the multi-step problems that separate teams.</p>
    <div class="row"><a class="btn pri" href="#/drill/mix-${S.ev}">Mixed ${DATA.events[S.ev].short} drill</a><a class="btn" href="#/drill/mix-weak">My weakest generators</a><a class="btn" href="#/drill/mix-filter">Filter-level only</a></div>${block(S.ev)}`);
  };
  A.views.drill = gid => {
    let pool;
    if (gid.startsWith('mix-')) { const k = gid.slice(4); pool = DATA.gens.filter(g => k === 'circuit' || k === 'thermo' ? g.ev === k : k === 'filter' ? g.f : true); if (k === 'weak') pool = DATA.gens.slice().sort((a, b) => ((S.gen[a.id] ? S.gen[a.id].c / S.gen[a.id].n : -1)) - ((S.gen[b.id] ? S.gen[b.id].c / S.gen[b.id].n : -1))).slice(0, 12); }
    else pool = DATA.gens.filter(g => g.id === gid);
    if (!pool.length) return A.render('<p>Unknown drill</p>');
    let n = 0, c = 0, streak = 0, best = 0, t0 = Date.now();
    const title = pool.length === 1 ? pool[0].title : 'Mixed drill (' + gid.slice(4) + ')';
    A.render(`<a href="#/drill">← all drills</a><h1>${esc(title)}</h1><div class="row card flat"><div class="kpi"><b id="dn">0</b><span>done</span></div><div class="kpi"><b id="dc">–</b><span>accuracy</span></div><div class="kpi"><b id="ds">0</b><span>streak</span></div><div class="kpi"><b id="dt">–</b><span>avg sec/q</span></div></div><div id="dq"></div><div class="row"><button class="btn pri" id="nx" style="display:none">Next problem →</button></div>`);
    const next = () => {
      const g = A.rand.pick(pool); const q = Q.fromGen(g); A.$('#nx').style.display = 'none'; const tq = Date.now();
      Q.mount(A.$('#dq'), q, { mode: 'instant', num: g.id, onResult: (r, ok) => { A.recordQ(q, ok); n++; if (ok) { c++; streak++; best = Math.max(best, streak); } else streak = 0; A.$('#dn').textContent = n; A.$('#dc').textContent = A.pct(c / n); A.$('#ds').textContent = streak; A.$('#dt').textContent = Math.round((Date.now() - t0) / 1000 / n); A.$('#nx').style.display = ''; A.$('#nx').focus(); A.buildNav(); } });
      const inp = A.$('#dq .numin'); if (inp) inp.focus();
    };
    A.$('#nx').onclick = next; next();
  };
  A.route(/^\/drill$/, A.views.drillIndex);
  A.route(/^\/drill\/([\w-]+)$/, A.views.drill);

  /* ---------- WRONG-ANSWER BANK ---------- */
  A.views.wrong = () => {
    const allQ = Object.keys(S.wrong).map(id => DATA.questions.find(q => q.id === id)).filter(Boolean), qs = allQ.filter(q => (A.lesson(q.t) || {}).ev === S.ev), otherN = allQ.length - qs.length;
    const by = {}; qs.forEach(q => (by[q.t] = by[q.t] || []).push(q));
    A.render(`<a href="#/refresh">← Refresh</a><h1>Wrong-answer bank · ${DATA.events[S.ev].short}</h1><p class="muted">Every question you missed. Answer it correctly <b>twice in a row</b> and it leaves the bank. This is the highest-value study you can do.</p>
    ${qs.length ? `<div class="row"><button class="btn pri" id="wgo">Practice all ${qs.length}</button><button class="btn" id="wrs">Random 10</button></div><h3>By topic</h3>${Object.entries(by).sort((a, b) => b[1].length - a[1].length).map(([t, a]) => `<a class="lrow" href="#/lesson/${t}"><span class="n">${t}</span><b style="flex:1">${esc((A.lesson(t) || {}).t || '')}</b><span class="badge b-xtra">${a.length} missed</span></a>`).join('')}<div id="set"></div>` : `<div class="card"><h3>Empty</h3><p>Nothing missed yet in ${DATA.events[S.ev].name}${otherN ? ` (${otherN} waiting in the other event)` : ''}. Take a <a href="#/mock">mock exam</a> or the <a href="#/diag">diagnostic</a> to find your gaps.</p></div>`}`);
    const go = list => { A.$('#set').innerHTML = ''; Q.inlineSet(A.$('#set'), list); A.$('#set').scrollIntoView(); };
    if (qs.length) { A.$('#wgo').onclick = () => go(A.shuffle(qs)); A.$('#wrs').onclick = () => go(A.shuffle(qs).slice(0, 10)); }
  };
  A.route(/^\/wrong$/, A.views.wrong);

  /* ============ DIAGNOSTIC ============ */
  const LEVELS = [
    { n: 0, name: 'Brand new', cut: 0, tip: 'No prior exposure. That is fine — follow the 30-day plan from Day 1 and do the lessons in order.' },
    { n: 1, name: 'Beginner', cut: 10, tip: 'You know some vocabulary. Focus on fundamentals and plug-and-chug speed first; do every lesson’s mini-quiz.' },
    { n: 2, name: 'Developing', cut: 24, tip: 'Solid basics with holes. Targeted lessons + drills on your weakest topics; start timed mocks weekly.' },
    { n: 3, name: 'Competent', cut: 40, tip: 'Regional-medal range with gaps. Hunt blind spots, do hard-mode mocks, and polish hands-on speed.' },
    { n: 4, name: 'Advanced', cut: 58, tip: 'State-level foundations. Go after separator topics (Thévenin, op-amps, entropy, cooling-curve prediction) and speed.' },
    { n: 5, name: 'Elite', cut: 76, tip: 'Nationals-level knowledge. Maintain with hard-mode mocks, history, and flawless hands-on execution.' }
  ];
  Q.WT = { 1: 1, 2: 2, 3: 3, 4: 6, 5: 10 };
  Q.levelFor = pct => { let L = LEVELS[0]; LEVELS.forEach(l => { if (pct * 100 >= l.cut) L = l; }); return L; };
  Q.LEVELS = LEVELS;

  const SELF = {
    circuit: [
      'I can state Ohm’s law and find V, I or R without help', 'I can read a 4-band resistor color code in under 5 seconds', 'I can find equivalent resistance of series-parallel combinations',
      'I can solve a circuit with KVL and KCL (2 loops)', 'I can explain how a capacitor charges (RC time constant τ = RC)', 'I can use a multimeter to measure V, I and R correctly (and know the jack/range rules)',
      'I can wire a circuit on a breadboard from a schematic', 'I know the right-hand rules and the field of a solenoid', 'I can calculate a transformer’s output (turns ratio, step up/down, power)',
      'I can explain how a relay works and wire one (NO/NC/COM, flyback diode)', 'I can explain fuses vs circuit breakers vs GFCIs', 'I know AC vs DC, RMS, frequency, and household wiring/hazards',
      'I can pick an LED resistor and explain LED polarity', 'I understand diodes and can use an NPN transistor as a switch', 'I can analyze inverting / non-inverting op-amp circuits',
      'I can apply Thévenin/Norton and balance a Wheatstone bridge', 'I can name the main electricity scientists and what they discovered', 'I can troubleshoot a faulty circuit (open/short) methodically',
      'I can build an electromagnet and explain what changes its strength', 'I know the safety thresholds (1 mA / 10 mA / 100 mA) and basic lab safety'],
    thermo: [
      'I can convert between °C, °F and K', 'I know the difference between heat, temperature and internal energy', 'I can do a calorimetry problem (Q = mcΔT, mixing) without help',
      'I can calculate energy for a phase change (latent heat) and build a heating curve', 'I can explain conduction, convection and radiation with formulas', 'I can calculate heat flow through a wall using k, A, ΔT, L and R-values',
      'I can state all four laws of thermodynamics', 'I can use PV diagrams and identify isothermal/adiabatic/isobaric/isochoric processes', 'I can solve ideal-gas and combined gas-law problems',
      'I can calculate Carnot efficiency and COP', 'I understand entropy and the second law', 'I can use Hess’s law and ΔG = ΔH − TΔS', 'I can use Stefan–Boltzmann and Wien’s law',
      'I can fit Newton’s law of cooling to data and predict a temperature', 'I know the history of thermodynamics (Carnot, Joule, Kelvin, Clausius …)', 'I can design an insulated device and explain where the heat escapes',
      'I know how a heat-collection device (absorber, glazing, thermal mass) works', 'I can take accurate temperature data and plot it properly', 'I know thermometer types and thermocouple basics', 'I know lab safety for hot liquids and heat sources']
  };

  A.views.diag = () => {
    const last = S.diag[S.diag.length - 1];
    const resumeKeys = Object.keys(S.sess).filter(k => k.startsWith('diag:'));
    const nd = ev => DATA.questions.filter(q => q.dg && (ev === 'both' || q.ev === ev)).length;
    A.render(`<h1>🧭 Diagnostic — find your level (and your blind spots)</h1>
    <p class="muted">Three ways to measure where you are. The full test is the most accurate: a hard, weighted sample from a pool of ${nd('both')} State-level questions, with an “I’ve never seen this” button so true blind spots are separated from things you half-know.</p>
    ${resumeKeys.length ? `<div class="card" style="border-color:var(--circ)"><b>⏸ Unfinished diagnostic found.</b> ${resumeKeys.map(k => `<a class="btn sm pri" href="#/diagrun/${k.slice(5)}">Resume ${k.slice(5)}</a>`).join(' ')}</div>` : ''}
    <div class="grid g3">
      <div class="card"><h3 style="margin-top:0">🔬 Full diagnostic</h3><p class="small muted">70 questions per event at State/Nationals difficulty: multi-step problems, circuit puzzles, deep history. Every lesson is probed, weighted by test yield. About 75 min per event; you can pause any time.</p><div class="row"><a class="btn pri" href="#/diagrun/full-both">Both events</a><a class="btn" href="#/diagrun/full-circuit">⚡ Circuit</a><a class="btn th" href="#/diagrun/full-thermo">🔥 Thermo</a></div></div>
      <div class="card"><h3 style="margin-top:0">⏱ Quick check</h3><p class="small muted">30 hard questions per event sampled across topics. ~60 min total. Good for re-tests.</p><div class="row"><a class="btn pri" href="#/diagrun/quick-both">Both</a><a class="btn" href="#/diagrun/quick-circuit">⚡</a><a class="btn th" href="#/diagrun/quick-thermo">🔥</a></div></div>
      <div class="card"><h3 style="margin-top:0">🙋 No test — self-estimate</h3><p class="small muted">Tick what you can really do. 2 minutes. Rough placement only (people over-rate themselves — the test is better).</p><div class="row"><a class="btn" href="#/diagself">Start self-assessment</a></div></div>
    </div>
    ${last ? diagHistory() : ''}
    <h2>How levels are assigned</h2><div class="tablewrap"><table><tr><th>Level</th><th>Weighted score</th><th>What it means</th></tr>${LEVELS.map(l => `<tr><td><b>${l.n} · ${l.name}</b></td><td>${l.cut}%+</td><td>${l.tip}</td></tr>`).join('')}</table></div>
    <p class="small muted">Harder questions count more (difficulty 1 = ×1, 2 = ×2, 3 = ×3). “Never seen” and blank answers count as wrong. Tryout-filter questions are reported separately so you can see if you’re ready for the hard part of the test.</p>`);
  };
  function diagHistory() {
    return `<h2>Your history</h2><div class="tablewrap"><table><tr><th>Date</th><th>Test</th><th>Circuit</th><th>Thermo</th></tr>${S.diag.slice().reverse().map(d => `<tr><td>${d.date}</td><td>${esc(d.scope)}</td><td>${d.ev.circuit ? `L${d.ev.circuit.level} · ${A.pct(d.ev.circuit.pct)}` : '—'}</td><td>${d.ev.thermo ? `L${d.ev.thermo.level} · ${A.pct(d.ev.thermo.pct)}` : '—'}</td></tr>`).join('')}</table></div>`;
  }
  Q.diagSet = (scope, ev) => {
    const N = scope === 'quick' ? 30 : scope === 'all' ? 9999 : 70; const out = [];
    (ev === 'both' ? ['circuit', 'thermo'] : [ev]).forEach(e => {
      const pool = A.shuffle(DATA.questions.filter(q => q.dg && q.ev === e)); const byL = {}; pool.forEach(q => (byL[q.t] = byL[q.t] || []).push(q));
      const order = DATA.lessons.filter(l => l.ev === e && byL[l.id]).sort((a, b) => b.yield - a.yield).map(l => l.id);
      const got = []; let k = 0, guard = 0;
      while (got.length < N && order.some(id => byL[id].length) && guard++ < 99999) { const id = order[k++ % order.length]; if (byL[id].length) got.push(byL[id].shift()); }
      out.push(...got);
    });
    // order: by event, then by lesson, easier first within lesson
    return out.sort((a, b) => (a.ev === b.ev ? 0 : a.ev === 'circuit' ? -1 : 1) || a.t.localeCompare(b.t) || a.d - b.d);
  };
  A.views.diagrun = spec => {
    const [scope, ev] = spec.split('-'); const qs = Q.diagSet(scope, ev);
    Q.exam({ title: `Diagnostic — ${scope === 'full' ? 'full' : 'quick'} (${ev})`, qs, limit: 0, idk: true, key: 'diag:' + spec,
      blurb: `${qs.length} questions at State/Nationals difficulty (most need 3+ steps; some are puzzles), grouped by topic. Don’t guess wildly: if you truly haven’t seen it, press <b>“I’ve never seen this”</b> — it tells the plan where your blind spots are. You can leave and resume later. No time limit.`,
      onFinish: res => Q.diagReport(res, scope + ' · ' + ev) });
  };
  A.route(/^\/diag$/, A.views.diag);
  A.route(/^\/diagrun\/([\w-]+)$/, A.views.diagrun);

  Q.diagReport = (res, scopeName) => {
    const out = { date: A.today(), scope: scopeName, ev: {}, lessons: {}, idk: {} };
    let html = '';
    ['circuit', 'thermo'].forEach(ev => {
      const its = res.items.filter(i => i.q.ev === ev); if (!its.length) return;
      let w = 0, s = 0, fn = 0, fc = 0; const tier = {}, les = {};
      its.forEach(i => {
        const wt = Q.WT[i.q.d || 1] || 1; w += wt; if (i.correct) s += wt;
        const L = A.lesson(i.q.t), tr = (L && L.tier) || 'core'; (tier[tr] = tier[tr] || { w: 0, s: 0 }); tier[tr].w += wt; if (i.correct) tier[tr].s += wt;
        (les[i.q.t] = les[i.q.t] || { n: 0, c: 0, idk: 0, w: 0, s: 0 }); les[i.q.t].n++; les[i.q.t].w += wt; if (i.correct) { les[i.q.t].c++; les[i.q.t].s += wt; } if (i.idk) les[i.q.t].idk++;
        if (i.q.f) { fn++; if (i.correct) fc++; }
      });
      const pct = s / w, lv = Q.levelFor(pct);
      out.ev[ev] = { pct, level: lv.n };
      Object.entries(les).forEach(([k, v]) => { out.lessons[k] = v.s / v.w; if (v.idk) out.idk[k] = v.idk; });
      const weak = Object.entries(les).map(([k, v]) => ({ k, p: v.s / v.w, v })).sort((a, b) => a.p - b.p);
      const blind = weak.filter(x => x.v.idk >= Math.max(1, Math.ceil(x.v.n / 2)));
      html += `<div class="card ${ev === 'thermo' ? 'th-l' : ''}"><div class="row"><h2 style="margin:0">${DATA.events[ev].icon} ${DATA.events[ev].name}</h2><span class="sp"></span><div class="right"><div class="lvl">Level ${lv.n}</div><div><b>${lv.name}</b> · ${A.pct(pct)} weighted</div></div></div>
      <p>${lv.tip}</p>
      <div class="grid g3"><div class="kpi"><b>${its.filter(i => i.correct).length}/${its.length}</b><span>raw correct</span></div><div class="kpi"><b>${fn ? fc + '/' + fn : '—'}</b><span>tryout-filter questions</span></div><div class="kpi"><b>${its.filter(i => i.idk).length}</b><span>“never seen”</span></div></div>
      <h3>By topic tier</h3>${Object.entries(tier).map(([t, v]) => `<div class="row" style="margin:4px 0"><span style="width:130px">${A.tierBadge(t)}</span><div style="flex:1">${A.bar(v.s / v.w)}</div><b style="width:48px;text-align:right">${A.pct(v.s / v.w)}</b></div>`).join('')}
      <h3>By lesson (weakest first)</h3>${weak.map(x => `<div class="row" style="margin:4px 0"><a href="#/lesson/${x.k}" style="width:340px;max-width:55%">${x.k} ${esc(((A.lesson(x.k) || {}).t || '').slice(0, 44))}</a><div style="flex:1">${A.bar(x.p, ev === 'thermo' ? 'th' : '')}</div><b style="width:90px;text-align:right">${A.pct(x.p)}${x.v.idk ? ` <span class="badge b-xtra" title="never seen">${x.v.idk}?</span>` : ''}</b></div>`).join('')}
      ${blind.length ? `<div class="box warn"><b>🚨 Blind spots — topics you’d never seen</b><p>${blind.map(x => `<a href="#/lesson/${x.k}">${x.k} ${esc((A.lesson(x.k) || {}).t)}</a>`).join('<br>')}</p></div>` : ''}
      <div class="box key"><b>Do these first</b><ol>${weak.slice(0, 6).map(x => `<li><a href="#/lesson/${x.k}">${esc((A.lesson(x.k) || {}).t)}</a> (${A.pct(x.p)}) — <a href="#/practice/${x.k}">practice</a></li>`).join('')}</ol></div></div>`;
    });
    S.diag.push(out); A.save();
    const prev = S.diag.length > 1 ? S.diag[S.diag.length - 2] : null;
    if (prev) html = `<div class="card flat small muted">Previous run (${prev.date}, ${esc(prev.scope)}): ${['circuit', 'thermo'].filter(e => prev.ev[e]).map(e => `${DATA.events[e].short} L${prev.ev[e].level} (${A.pct(prev.ev[e].pct)})`).join(' · ')}</div>` + html;
    return html + `<div class="row noprint"><a class="btn pri" href="#/syllabus">Open my 30-day plan</a><a class="btn" href="#/wrong">Wrong-answer bank</a><a class="btn" href="#/">Dashboard</a></div>`;
  };

  A.views.diagself = () => {
    A.render(`<h1>🙋 Self-estimate</h1><p class="muted">Tick only what you could do <b>right now, without notes, under time pressure</b>. Be strict — it makes the estimate far more useful.</p>
    ${['circuit', 'thermo'].map(ev => `<div class="card"><h3 style="margin-top:0">${DATA.events[ev].icon} ${DATA.events[ev].name}</h3>${SELF[ev].map((t, i) => `<label class="task" style="flex-direction:row;align-items:flex-start;color:var(--text);font-size:.95rem"><input type="checkbox" data-ev="${ev}"> <span>${esc(t)}</span></label>`).join('')}</div>`).join('')}
    <button class="btn pri" id="sgo">Show my estimate</button><div id="sres"></div>`);
    A.$('#sgo').onclick = () => {
      const out = ['circuit', 'thermo'].map(ev => { const b = A.$$(`input[data-ev="${ev}"]`); const p = b.filter(x => x.checked).length / b.length; const lv = Q.levelFor(p * 0.9); return `<div class="card"><h3 style="margin-top:0">${DATA.events[ev].icon} ${DATA.events[ev].name}</h3><div class="lvl">Level ${lv.n} · ${lv.name}</div><p>${b.filter(x => x.checked).length}/${b.length} skills ticked. ${lv.tip}</p></div>`; }).join('');
      A.$('#sres').innerHTML = out + '<p class="muted">Self-estimates run high. Confirm with the <a href="#/diag">full diagnostic</a>.</p>';
    };
  };
  A.route(/^\/diagself$/, A.views.diagself);
})();
