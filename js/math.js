/* ============ math typesetter: sub/superscripts, mini-LaTeX, stacked fractions (no external libs) ============ */
(function () {
  const A = window.App;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const GREEK = { alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', varepsilon: 'ε', theta: 'θ', lambda: 'λ', mu: 'μ', pi: 'π', rho: 'ρ', sigma: 'σ', tau: 'τ', phi: 'φ', varphi: 'φ', omega: 'ω', Delta: 'Δ', Omega: 'Ω', Phi: 'Φ', Sigma: 'Σ', Theta: 'Θ', Gamma: 'Γ', eta: 'η', kappa: 'κ', nu: 'ν', chi: 'χ', psi: 'ψ', xi: 'ξ', zeta: 'ζ' };
  const SYM = { cdot: '·', times: '×', approx: '≈', le: '≤', leq: '≤', ge: '≥', geq: '≥', pm: '±', infty: '∞', propto: '∝', rightarrow: '→', to: '→', leftarrow: '←', Rightarrow: '⇒', neq: '≠', ne: '≠', degree: '°', circ: '°', partial: '∂', nabla: '∇', sum: 'Σ', int: '∫', ldots: '…', cdots: '⋯', div: '÷', perp: '⟂', parallel: '∥', quad: ' ', ',': ' ', ';': ' ', ' ': ' ', '%': '%', '{': '{', '}': '}', '\\': ' ', 'hbar': 'ħ', 'ell': 'ℓ', 'vec': '' };
  /* --- mini LaTeX -> HTML --- */
  function parse(s) {
    let i = 0;
    function group() { // parse {...} or single token
      if (s[i] === '{') { i++; const r = seq('}'); i++; return r; }
      if (s[i] === '\\') { return cmd(); }
      const c = s[i++]; return esc(c || '');
    }
    function cmd() {
      i++; let n = '';
      if (/[a-zA-Z]/.test(s[i])) { while (/[a-zA-Z]/.test(s[i] || '')) n += s[i++]; } else { n = s[i++]; }
      if (n === 'frac' || n === 'dfrac') { const a = group(), b = group(); return `<span class="tfr"><span class="tn">${a}</span><span class="td">${b}</span></span>`; }
      if (n === 'sqrt') { const a = group(); return `<span class="tsq">√<span class="tsr">${a}</span></span>`; }
      if (n === 'text' || n === 'mathrm' || n === 'mathbf' || n === 'textbf' || n === 'operatorname') { const a = group(); return `<span class="trm">${a}</span>`; }
      if (n === 'left' || n === 'right') { return s[i] === '.' ? (i++, '') : ''; }
      if (n === 'overline' || n === 'bar') { const a = group(); return `<span class="tov">${a}</span>`; }
      if (n === 'hat') { const a = group(); return `<span class="tht">${a}̂</span>`; }
      if (n === 'vec') { const a = group(); return `<span class="tvc">${a}</span>`; }
      if (GREEK[n]) return GREEK[n];
      if (n in SYM) return SYM[n];
      if (/^(sin|cos|tan|ln|log|exp|lim|max|min)$/.test(n)) return `<span class="trm">${n}</span>`;
      return esc(n);
    }
    function seq(end) {
      let out = '';
      while (i < s.length && s[i] !== end) {
        const c = s[i];
        if (c === '\\') out += cmd();
        else if (c === '^') { i++; out += `<sup>${group()}</sup>`; }
        else if (c === '_') { i++; out += `<sub>${group()}</sub>`; }
        else if (c === '{') { i++; out += seq('}'); i++; }
        else { out += /[0-9.]/.test(c) ? c : (/[A-Za-z]/.test(c) ? `<i>${c}</i>` : esc(c)); i++; }
      }
      return out;
    }
    return seq(null);
  }
  A.tex = (src, block) => `<span class="tx${block ? ' tb' : ''}">${parse(src)}</span>`;

  /* --- plain text patterns --- */
  const SUBRE = /(?<![A-Za-z_])((?:Δ|δ)?[A-Za-zεΩμρτσωλφθηκ])_(\{[^}]{1,14}\}|[a-z0-9]+(?![a-z0-9])|[A-Z]+[0-9]*(?![A-Za-z0-9])|[0-9]+)/g;
  const SUPRE = /(?<=[A-Za-z0-9)εΩ])\^(\{[^}]{1,14}\}|\([^)]{1,16}\)|[-−+]?[0-9]+(?:\.[0-9]+)?|[A-Za-z](?![A-Za-z]))/g;
  const TEXRE = /\\\((.+?)\\\)|\$\$(.+?)\$\$|\\\[(.+?)\\\]/g;
  const unbrace = t => t[0] === '{' || t[0] === '(' ? t.slice(1, -1) : t;
  const hasMath = s => s.indexOf('_') >= 0 || s.indexOf('^') >= 0 || s.indexOf('\\(') >= 0 || s.indexOf('$$') >= 0 || s.indexOf('\\[') >= 0;
  function toHTML(t) {
    let h = esc(t);
    h = h.replace(/\\\((.+?)\\\)|\$\$(.+?)\$\$|\\\[(.+?)\\\]/g, (m, a, b, c) => A.tex(a || b || c, !a));
    h = h.replace(SUBRE, (m, b, s) => `${b}<sub>${unbrace(s)}</sub>`);
    h = h.replace(SUPRE, (m, p) => `<sup>${unbrace(p).replace(/-/g, '−')}</sup>`);
    return h;
  }
  /* stacked fractions for formula contexts: a/b where both sides are tight tokens */
  const TOK = '(?:\\([^()]+\\)|[A-Za-zΔεΩμρτσωλφθ0-9₀-₉²³⁴⁻·.]+(?:<sub>[^<]*</sub>|<sup>[^<]*</sup>)*)';
  const FRE = new RegExp('((?:' + TOK + ')+)\\/((?:' + TOK + ')+)', 'g');
  A.fracify = html => html.replace(FRE, (m, n, d) => {
    if (/^(and|or|the|to|per)$/i.test(n) || /^\d+\/\d+$/.test(m) && false) return m;
    const strip = x => (x[0] === '(' && x[x.length - 1] === ')' && x.indexOf('(', 1) < 0) ? x.slice(1, -1) : x;
    return `<span class="tfr"><span class="tn">${strip(n)}</span><span class="td">${strip(d)}</span></span>`;
  });
  /* full formula string -> HTML (subs, sups, fractions, dots) */
  A.fml = t => { let h = toHTML(t).replace(/ · /g, ' · '); return A.fracify(h); };

  /* --- DOM pass --- */
  const SKIP = /^(SCRIPT|STYLE|TEXTAREA|TITLE|OPTION|INPUT|NOSCRIPT)$/;
  const NS = 'http://www.w3.org/2000/svg';
  A.typeset = function (root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => { const p = n.parentNode; if (!p || SKIP.test(p.nodeName) || (p.closest && p.closest('.tx,[data-raw]'))) return NodeFilter.FILTER_REJECT; return hasMath(n.data) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } });
    const list = []; while (w.nextNode()) list.push(w.currentNode);
    list.forEach(n => {
      const p = n.parentNode;
      if (p.namespaceURI === NS) { // SVG text: tspans
        const t = n.data; let last = 0, m; const frag = document.createDocumentFragment(); SUBRE.lastIndex = 0; let any = false;
        const mk = (txt, dy, small) => { const ts = document.createElementNS(NS, 'tspan'); ts.textContent = txt; if (dy) ts.setAttribute('dy', dy); if (small) ts.setAttribute('font-size', '75%'); return ts; };
        while ((m = SUBRE.exec(t))) { any = true; if (m.index > last) frag.appendChild(document.createTextNode(t.slice(last, m.index))); frag.appendChild(document.createTextNode(m[1])); frag.appendChild(mk(unbrace(m[2]), 3, true)); const r = mk('​', -3, false); frag.appendChild(r); last = m.index + m[0].length; }
        if (!any) return; if (last < t.length) frag.appendChild(document.createTextNode(t.slice(last))); p.replaceChild(frag, n); return;
      }
      const tpl = document.createElement('template'); let h = toHTML(n.data);
      if (p.closest && p.closest('.eq,.fml')) h = A.fracify(h);
      if (h === esc(n.data)) return; tpl.innerHTML = h; p.replaceChild(tpl.content, n);
    });
  };
})();
