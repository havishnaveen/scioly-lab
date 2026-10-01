/* ============ motifs: sparks on Circuit Lab cards, flames on Thermodynamics cards ============ */
(function () {
  const A = window.App;
  let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  function bolt(w, h) { // random zigzag arc from top-left to bottom-right
    const n = 5 + Math.floor(rnd() * 3); let d = `M0 ${h * rnd()}`; let x = 0, y = h * 0.1;
    d = `M${x} ${y}`;
    for (let i = 1; i <= n; i++) { x = w * i / n + (rnd() - .5) * 6; y = h * (.15 + .7 * (i % 2 ? rnd() * .5 : .5 + rnd() * .5)); d += `L${x.toFixed(1)} ${y.toFixed(1)}`; }
    return d;
  }
  const SPARK = (w, h) => { const d = bolt(w, h), d2 = bolt(w * .6, h * .7); return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><path d="${d}"/><path class="core" d="${d}"/><path d="${d2}" transform="translate(${w * .25} ${h * .15})" style="stroke-width:1.4;opacity:.8"/></svg>`; };
  const FLAME = (s) => `<svg width="${s}" height="${s * 1.25}" viewBox="0 0 40 50"><path class="f1" d="M20 2c2 9 12 13 12 26 0 11-6 20-12 20S8 39 8 28c0-6 3-9 5-13 1 4 3 5 4 5 0-7 1-13 3-18z"/><path class="f2" d="M20 14c2 7 9 10 9 20 0 8-4 14-9 14s-9-6-9-14c0-5 2-7 4-10 1 3 2 4 3 4 0-5 1-9 2-14z"/><path class="f3" d="M20 28c1 4 5 6 5 12 0 5-2 8-5 8s-5-3-5-8c0-3 1-4 2-6 1 2 1 2 2 2 0-3 0-5 1-8z"/></svg>`;
  function motif() {
    const ev = document.documentElement.dataset.ev; const main = document.getElementById('main'); if (!main) return;
    if (main.querySelector('.fx')) return; // already decorated this render
    const cands = Array.from(main.querySelectorAll('.card:not(.flat),.startcard,.tile,.step,.kpi')).filter(e => e.offsetWidth > 150 && e.offsetHeight > 70);
    if (!cands.length) return;
    seed = 11 + cands.length * 13 + (location.hash.length * 7);
    const pick = []; const maxN = ev === 'thermo' ? 3 : 4;
    cands.forEach((e, i) => { if (pick.length < maxN && (i === 0 || rnd() < .28)) pick.push(e); });
    pick.forEach((e, i) => {
      e.classList.add('fxh'); const el = document.createElement('span'); el.setAttribute('aria-hidden', 'true');
      if (ev === 'thermo') {
        el.className = 'fx flame'; const s = 26 + Math.floor(rnd() * 12); el.style.cssText = `right:${10 + Math.floor(rnd() * 18)}px;bottom:-2px;--dur:${(1.8 + rnd()).toFixed(1)}s;--dly:${(-rnd() * 2).toFixed(1)}s`; el.innerHTML = FLAME(s);
        if (rnd() < .5) { const e2 = el.cloneNode(true); e2.style.right = (parseInt(el.style.right) + 26) + 'px'; e2.style.transform = 'scale(.7)'; e2.style.setProperty('--dly', '-.7s'); e.appendChild(e2); }
      } else {
        el.className = 'fx spark'; const w = 56 + Math.floor(rnd() * 34), h = 30 + Math.floor(rnd() * 20); const side = rnd() < .5;
        el.style.cssText = `${side ? 'right' : 'left'}:${-8 + Math.floor(rnd() * 26)}px;top:${-12 + Math.floor(rnd() * 14)}px;--dur:${(4 + rnd() * 6).toFixed(1)}s;--dly:${(-rnd() * 8).toFixed(1)}s`; el.innerHTML = SPARK(w, h);
      }
      e.appendChild(el);
    });
  }
  A.motif = motif;
  const obs = new MutationObserver(() => { clearTimeout(obs._t); obs._t = setTimeout(() => { try { motif(); } catch (e) { } }, 160); });
  document.addEventListener('DOMContentLoaded', () => { const m = document.getElementById('main'); if (m) obs.observe(m, { childList: true }); });
})();
