# SciOly Lab: notes for AI agents
Static vanilla-JS site, no build step. Open index.html (or `python3 -m http.server`). Deployed by GitHub Pages on every push to main.
Rules:
- Never delete or reorder existing questions. Question ids are positional (q<N> = load order) and saved progress depends on them. Append new question files at the end of the question list in index.html (before data/patches.js); fix wording in data/patches.js.
- If content is missing, add it; do not remove extra content.
- Script order in index.html matters (data, then js).
- Diagrams: DG.def(id, fn) in js/dg_*.js, placed in lessons via data/dgmap_*.js. Preview at #/dgtest/<prefix>.
- Saved progress lives in localStorage key `sciolab_v1` (see js/safe.js). Do not change its shape without migration.
- Keep 2027 thermodynamics device/scoring details marked UNVERIFIED until confirmed.
