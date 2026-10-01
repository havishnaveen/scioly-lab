/* ============ progress safety: mirrors, rolling snapshots, peak copy, IndexedDB, auto-recovery, file + code backup ============ */
(function () {
  const A = window.App, S = A.S, KEY = 'sciolab_v1';
  const K_MIR = 'sciolab_v1_mirror', K_PEAK = 'sciolab_v1_peak', K_SNAP = 'sciolab_v1_snaps', K_META = 'sciolab_v1_meta';
  const ls = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } } };
  const score = o => { try { return Object.keys(o.q || {}).length + 6 * Object.values(o.les || {}).filter(x => x && x.done).length + Object.keys(o.cards || {}).length * .5 + (o.diag || []).length * 10 + (o.mocks || []).length * 10 + Object.keys(o.days || {}).length * 2 + ((o.notes && (o.notes.circuit || '').length + (o.notes.thermo || '').length) > 20 ? 5 : 0); } catch (e) { return 0; } };
  A.progressScore = score;
  const parse = t => { try { const o = JSON.parse(t); return o && typeof o === 'object' ? o : null; } catch (e) { return null; } };
  const meta = () => parse(ls.get(K_META)) || {};
  const setMeta = m => ls.set(K_META, JSON.stringify(m));
  const snaps = () => parse(ls.get(K_SNAP)) || [];
  /* ---- IndexedDB mirror ---- */
  let idb = null;
  const idbOpen = () => new Promise(res => { try { const r = indexedDB.open('sciolab', 1); r.onupgradeneeded = () => r.result.createObjectStore('kv'); r.onsuccess = () => res(r.result); r.onerror = () => res(null); } catch (e) { res(null); } });
  const idbPut = (k, v) => { if (!idb) return; try { idb.transaction('kv', 'readwrite').objectStore('kv').put(v, k); } catch (e) { } };
  const idbGet = k => new Promise(res => { if (!idb) return res(null); try { const r = idb.transaction('kv').objectStore('kv').get(k); r.onsuccess = () => res(r.result || null); r.onerror = () => res(null); } catch (e) { res(null); } });
  /* ---- candidates for recovery ---- */
  const candidates = () => {
    const c = [];
    const add = (name, txt, ts) => { const o = typeof txt === 'string' ? parse(txt) : txt; if (o) c.push({ name, o, sc: score(o), ts: ts || 0 }); };
    add('Mirror copy', ls.get(K_MIR)); add('Best-ever copy', ls.get(K_PEAK), meta().peakTs);
    snaps().forEach(s => add('Snapshot ' + new Date(s.ts).toLocaleString(), s.d, s.ts));
    return c;
  };
  const restore = o => { Object.keys(S).forEach(k => delete S[k]); Object.assign(S, A.blank ? A.blank() : {}, o); A.save(true); };
  A.safeCandidates = candidates; A.safeRestore = restore;
  /* ---- save wrapper ---- */
  const orig = A.save; let lastSnap = 0, lastIdb = 0, pend = null;
  A.save = function (force) {
    orig();
    const txt = JSON.stringify(S), sc = score(S), m = meta(), now = Date.now();
    ls.set(K_MIR, txt);
    if (sc >= (m.peak || 0)) { ls.set(K_PEAK, txt); m.peak = sc; m.peakTs = now; setMeta(m); }
    if (now - lastSnap > 5 * 60 * 1000 || force === true) { // rolling snapshots, keep 12; never snapshot a near-empty state over good ones
      lastSnap = now; let l = snaps(); if (sc > 0) { l.push({ ts: now, sc, d: txt }); while (l.length > 12) l.shift(); if (!ls.set(K_SNAP, JSON.stringify(l))) { l = l.slice(-4); ls.set(K_SNAP, JSON.stringify(l)); } }
    }
    if (now - lastIdb > 3000) { lastIdb = now; idbPut('latest', txt); if (sc >= (m.peak || 0)) idbPut('peak', txt); } else { clearTimeout(pend); pend = setTimeout(() => idbPut('latest', JSON.stringify(S)), 3000); }
    m.saved = now; setMeta(m); chip();
  };
  /* ---- recovery on load ---- */
  (function recover() {
    const cur = score(S), c = candidates().sort((a, b) => b.sc - a.sc);
    if (c.length && cur < Math.max(3, c[0].sc * 0.35)) { restore(c[0].o); A.recovered = c[0]; setTimeout(() => A.toast && A.toast('Progress restored from ' + c[0].name, 5000), 600); }
    idbOpen().then(d => { idb = d; if (!d) return; idbGet('peak').then(t => { const o = t && parse(t); if (o && score(o) > score(S) * 2.5 + 5) { restore(o); A.toast && A.toast('Progress restored from secure copy', 5000); setTimeout(() => A.dispatch && A.dispatch(), 50); } idbPut('latest', JSON.stringify(S)); }); });
    if (navigator.storage && navigator.storage.persist) { try { navigator.storage.persist(); } catch (e) { } }
  })();
  /* ---- file / code backup ---- */
  A.downloadBackup = () => { const b = new Blob([A.exportData()], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'scioly-progress-' + A.today() + '.json'; document.body.appendChild(a); a.click(); a.remove(); const m = meta(); m.exported = Date.now(); setMeta(m); chip(); };
  A.backupCode = () => btoa(unescape(encodeURIComponent(A.exportData())));
  A.restoreCode = t => { const o = parse(decodeURIComponent(escape(atob(t.trim())))); if (!o) throw new Error('bad'); restore(o); };
  /* ---- status chip in top bar ---- */
  function chip() {
    const el = document.getElementById('savechip'); if (!el) return; const m = meta(), sc = score(S);
    const days = m.exported ? Math.floor((Date.now() - m.exported) / 864e5) : null;
    const stale = sc > 15 && (days === null || days >= 3);
    el.className = 'savechip' + (stale ? ' warn' : ''); el.title = stale ? 'Download a backup file so your progress is safe even if this browser clears its data' : 'Progress is saved automatically and mirrored';
    el.innerHTML = stale ? 'Back up now' : 'Saved';
  }
  A.chip2 = chip;
  document.addEventListener('click', e => { if (e.target.closest && e.target.closest('#savechip')) { if (e.target.closest('#savechip').classList.contains('warn')) A.downloadBackup(); else location.hash = '#/settings'; } });
  window.addEventListener('beforeunload', () => { try { orig(); ls.set(K_MIR, JSON.stringify(S)); } catch (e) { } });
  document.addEventListener('visibilitychange', () => { if (document.hidden) A.save(true); });
  /* ---- Settings UI ---- */
  A.routeFirst(/^\/settings$/, () => {
    const old = A.views.settings; old();
    const c = candidates().sort((a, b) => b.ts - a.ts), m = meta();
    const html = `<div class="card" id="safecard"><h3 style="margin-top:0">Progress safety</h3>
    <p class="small muted">Your progress is saved on every answer in four places in this browser (main copy, mirror, 12 rolling snapshots, a best-ever copy, plus a database copy). If anything goes wrong it restores itself. Browsers can still erase site data (clearing history, private windows), so <b>download a backup file now and then</b>: that file is the real safety net.</p>
    <div class="row"><button class="btn pri" id="sf-dl">Download backup file</button><button class="btn" id="sf-code">Copy backup code</button><button class="btn" id="sf-paste">Restore from code</button></div>
    <p class="small muted" style="margin-top:10px">Last file backup: ${m.exported ? new Date(m.exported).toLocaleString() : 'never'} · Progress points: ${Math.round(score(S))}</p>
    <h4>Restore points</h4><div class="tablewrap"><table>${c.length ? c.map((x, i) => `<tr><td>${A.esc(x.name)}</td><td>${Math.round(x.sc)} pts</td><td><button class="btn sm" data-r="${i}">Restore</button></td></tr>`).join('') : '<tr><td>No snapshots yet; they appear as you work.</td></tr>'}</table></div></div>`;
    A.$('#main').insertAdjacentHTML('beforeend', html);
    A.$('#sf-dl').onclick = A.downloadBackup;
    A.$('#sf-code').onclick = () => { const t = A.backupCode(); (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => A.toast('Backup code copied. Paste it into a note or message to yourself.'), () => { prompt('Copy this backup code:', t); }); };
    A.$('#sf-paste').onclick = () => { const t = prompt('Paste your backup code'); if (!t) return; try { A.restoreCode(t); A.toast('Restored'); A.dispatch(); } catch (e) { A.toast('That code did not work'); } };
    A.$$('#safecard button[data-r]').forEach(b => b.onclick = () => { if (confirm('Replace current progress with this restore point? (Your current state is kept as a snapshot first.)')) { A.save(true); restore(c[+b.dataset.r].o); A.toast('Restored'); A.dispatch(); } });
  });
  A.save(true);
})();
