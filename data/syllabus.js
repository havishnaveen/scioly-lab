/* ===== 30-DAY DUAL-EVENT SYLLABUS =====
 D(day, week, focus, [ [text, link, kind] ... ])
 kind: 'L' learn · 'P' practice · 'H' hands-on · 'R' review · 'M' mock · 'F' tryout-filter (hard/separator) · 'B' baseline plug-and-chug
*/
function D(day, week, focus, tasks, mins) { DATA.syllabus.push({ day, week, focus, tasks: tasks.map(([txt, link, kind]) => ({ txt, link, kind: kind || 'L' })), mins: mins || 150 }); }
const LS = id => '#/lesson/' + id, PR = id => '#/practice/' + id;

D(1,1,'Baseline + Ohm’s law + thermo vocabulary',[
 ['Take the FULL diagnostic (be honest — guessing ruins the data)','#/diag','M'],
 ['Read the Rules Audit: what is verified vs unverified','#/rules','R'],
 ['Circuit: Current, Voltage, Resistance, Power & Ohm’s law',LS('c03'),'L'],
 ['Thermo: Temperature scales & conversions',LS('t01'),'L'],
 ['Drill: Ohm’s law & temperature-conversion generators','#/drill','B']]);
D(2,1,'Color code, series/parallel; heat & units',[
['Thermo: 2027 Written-Test Map (VERIFIED areas, scientists, notes)',LS('t23'),'L'],
 ['Circuit: Resistor color code (tool: color trainer — 15 min daily until instant)',LS('c04'),'L'],
 ['Tool: Color-code trainer','#/tools/color','H'],
 ['Circuit: Series/parallel/combination circuits & dividers',LS('c05'),'L'],
 ['Thermo: Heat, energy & units',LS('t02'),'L'],
 ['Practice set for c05 & c04',PR('c05'),'P']]);
D(3,1,'Charge, Coulomb; specific heat & calorimetry',[
 ['Circuit: Charge, fields, Coulomb’s law',LS('c01'),'L'],
 ['Circuit: finish c05 practice (combination circuits are tryout-filter material)',PR('c05'),'F'],
 ['Thermo: Heat capacity, specific heat, calorimetry',LS('t03'),'L'],
 ['Drill: calorimetry generators','#/drill','B'],
 ['Flashcards: formulas decks (both events)','#/cards','R']]);
D(4,1,'Capacitors & RC; phase changes',[
 ['Circuit: Capacitance & RC circuits',LS('c02'),'L'],
 ['Tool: RC simulator — predict τ then check','#/tools/rc','H'],
 ['Thermo: Phases, phase changes, latent heat',LS('t04'),'L'],
 ['Practice: t03 + t04',PR('t04'),'P'],
 ['Heating-curve calculator','#/tools/heating','H']]);
D(5,1,'Batteries & Kirchhoff; conduction',[
 ['Circuit: Batteries, sources, internal resistance',LS('c06'),'L'],
 ['Circuit: Kirchhoff’s laws, mesh/nodal',LS('c07'),'L'],
 ['Tool: DC circuit solver — check hand solutions','#/tools/solver','H'],
 ['Thermo: Conduction, k, R-values',LS('t05'),'L'],
 ['Practice: c07 (filter-level)',PR('c07'),'F']]);
D(6,1,'Symbols & diagrams; convection/radiation',[
 ['Circuit: Diagrams, symbols & constructing circuits',LS('c16'),'L'],
 ['Thermo: Convection, radiation, evaporation, combined losses',LS('t06'),'L'],
 ['Practice: t05 + t06',PR('t06'),'P'],
 ['Wrong-answer bank: redo everything missed so far','#/wrong','R']]);
D(7,1,'WEEK-1 CHECKPOINT',[
 ['Mock exam #1 — Circuit (30 min, timed)','#/mock/circuit','M'],
 ['Mock exam #1 — Thermo (30 min, timed)','#/mock/thermo','M'],
 ['Review every miss; add to binder notes','#/wrong','R'],
 ['Spaced-repetition flashcards (due cards)','#/cards','R']],120);

D(8,2,'DC/AC characteristics; radiation & blackbody',[
 ['Circuit: DC circuits — characteristics, uses, hazards',LS('c09'),'L'],
 ['Circuit: AC circuits, household wiring, hazards',LS('c10'),'L'],
 ['Thermo: Radiant exitance, Planck/Wien/Stefan–Boltzmann',LS('t07'),'L'],
 ['Practice: c10 + t07',PR('c10'),'P']]);
D(9,2,'Magnetism & electromagnets; Newton’s cooling',[
['Circuit: Real-Test Gap-Filler (fields, forces, devices the 2026 invitationals asked)',LS('c27'),'L'],
 ['Circuit: Magnetism, fields, right-hand rules',LS('c11'),'L'],
 ['Circuit: Electromagnets & solenoids — BUILD ONE (nail, wire, battery; count paperclips vs turns)',LS('c12'),'H'],
 ['Thermo: Newton’s law of cooling & prediction',LS('t08'),'L'],
 ['Tool: Cooling lab (K-fit + prediction)','#/tools/cooling','H']]);
D(10,2,'TRANSFORMERS; cooling practice',[
 ['Circuit: Transformers, induction, Faraday/Lenz, transmission — regionals favourite',LS('c13'),'F'],
 ['Practice: c13 (every question)',PR('c13'),'F'],
 ['Thermo: t08 practice — predicting final temperatures',PR('t08'),'F'],
 ['Drill: transformer & cooling generators','#/drill','B']]);
D(11,2,'Motors/generators; laws of thermodynamics',[
 ['Circuit: Motors, generators, energy conversion',LS('c14'),'L'],
 ['Circuit: Control & protection — RELAYS, fuses, breakers, GFCI',LS('c15'),'F'],
 ['Thermo: Laws of thermodynamics (0–3)',LS('t09'),'L'],
 ['Practice: c15 (relay circuits!)',PR('c15'),'F']]);
D(12,2,'Hands-on lab start; systems & PV',[
['Circuit: Real-Test Hands-On Tasks (mystery resistor, LED datasheet, loaded divider)',LS('c28'),'L'],
 ['Circuit: Hands-on lab — breadboard, multimeter, standard tasks',LS('c22'),'H'],
 ['Hands-On Lab trainer: multimeter + breadboard drills','#/lab','H'],
 ['Thermo: Systems, state functions, PV diagrams',LS('t10'),'L'],
 ['Practice: t09 + t10',PR('t10'),'P']]);
D(13,2,'Gas laws; safety',[
 ['Thermo: Gas laws, ideal gas, kinetic theory',LS('t11'),'L'],
 ['Drill: gas-law generators','#/drill','B'],
 ['Hands-On Lab trainer (round 2) — time yourself','#/lab','H'],
 ['Thermo: Lab skills, measurement & safety',LS('t19'),'H'],
 ['Flashcards due','#/cards','R']]);
D(14,2,'WEEK-2 CHECKPOINT',[
 ['Mock exam #2 — Circuit (mixed)','#/mock/circuit','M'],
 ['Mock exam #2 — Thermo (mixed)','#/mock/thermo','M'],
 ['Wrong-answer bank','#/wrong','R'],
 ['Re-take the diagnostic (see your level move)','#/diag','M']],150);

D(15,3,'LEDs; entropy',[
 ['Circuit: LEDs — current limiting & polarity',LS('c18'),'L'],
 ['Thermo: Entropy & the second law',LS('t12'),'L'],
 ['Practice: c18 + t12',PR('c18'),'P'],
 ['Hands-on: wire an LED + resistor on a real breadboard (or the lab trainer)','#/lab','H']]);
D(16,3,'Diodes, TRANSISTORS; enthalpy & Gibbs',[
 ['Circuit: PN junctions, diodes, Zener, rectifiers, BJT/MOSFET',LS('c19'),'F'],
 ['Practice: c19 (transistor as switch/amplifier)',PR('c19'),'F'],
 ['Thermo: Enthalpy, Hess’s law, Gibbs',LS('t13'),'L'],
 ['Drill: transistor & Hess generators','#/drill','B']]);
D(17,3,'OP-AMPS; heat engines',[
 ['Circuit: Op-amps — inverting, non-inverting, summing, comparator',LS('c20'),'F'],
 ['Practice: c20',PR('c20'),'F'],
 ['Circuit: Digital logic basics',LS('c21'),'L'],
 ['Thermo: Heat engines, Carnot, refrigerators',LS('t14'),'L'],
 ['Practice: t14',PR('t14'),'P']]);
D(18,3,'Advanced analysis; the INSULATION device',[
 ['Circuit: Thévenin/Norton/Wheatstone/Δ–Y',LS('c08'),'F'],
 ['Circuit: Non-ideal meters & measurement error',LS('c23'),'L'],
 ['Thermo: Insulation challenge — device specs (verified through 2019)',LS('t16'),'H'],
 ['Tool: Thermo score calculator','#/tools/score','H']]);
D(19,3,'Troubleshooting; history days',[
 ['Circuit: Troubleshooting & fault-finding',LS('c25'),'H'],
 ['Circuit: History of electricity & magnetism',LS('c17'),'L'],
 ['Thermo: History of thermodynamics',LS('t15'),'L'],
 ['Interactive timeline — quiz yourself on who/when','#/timeline','R'],
 ['Flashcards: History decks','#/cards','R']]);
D(20,3,'Heat collection; data/graphs; inductors',[
 ['Thermo: Heat-collection devices — principles (2027 wording UNVERIFIED — see Rules page)',LS('t17'),'L'],
 ['Thermo: Data, graphs, predictions & scoring strategy',LS('t18'),'L'],
 ['Circuit: Inductors & RL (conceptual)',LS('c24'),'L'],
 ['Circuit: Test strategy & notes binder',LS('c26'),'L']]);
D(21,3,'WEEK-3 CHECKPOINT — full-length mocks',[
 ['Full mock — Circuit (50 questions, 50 min)','#/mock/circuit-full','M'],
 ['Full mock — Thermo (50 questions, 50 min)','#/mock/thermo-full','M'],
 ['Wrong-answer bank + weak-topic report','#/wrong','R'],
 ['Check Dashboard weak topics and plan week 4','#/','R']],180);

D(22,4,'Thermo gaps: applications & stat-mech',[
 ['Thermo: Thermal properties & applications',LS('t20'),'L'],
 ['Thermo: Stat mech & potentials (insurance)',LS('t22'),'L'],
 ['Thermo: Test strategy & binder',LS('t21'),'L'],
 ['Practice: t20',PR('t20'),'P']]);
D(23,4,'Weak-topic blitz: Circuit',[
 ['Open Dashboard → “Weakest topics” → redo lessons’ mini-quizzes','#/','R'],
 ['Drill the 5 lowest-accuracy circuit generators','#/drill','B'],
 ['Hands-On Lab trainer (timed)','#/lab','H'],
 ['Reread c13 / c15 / c19 “Tryout-filter” boxes','#/lesson/c13','F']]);
D(24,4,'Weak-topic blitz: Thermo',[
 ['Open Dashboard → “Weakest topics” → redo lessons’ mini-quizzes','#/','R'],
 ['Drill the 5 lowest-accuracy thermo generators','#/drill','B'],
 ['Cooling-lab: fit K for 3 different data sets, then predict','#/tools/cooling','F'],
 ['Reread t08 / t12 / t14 filter boxes','#/lesson/t08','F']]);
D(25,4,'Binder build day',[
 ['Open the Binder page; print formula sheets (Ctrl/Cmd+P)','#/binder','H'],
 ['Add your own mnemonics, worked examples and mistake list to the binder notes','#/binder','H'],
 ['Verify allowed materials in YOUR state’s rules before printing','#/rules','R'],
 ['Flashcards due','#/cards','R']]);
D(26,4,'Speed day',[
 ['Timed 15-min speed round: Circuit generators','#/drill','B'],
 ['Timed 15-min speed round: Thermo generators','#/drill','B'],
 ['Color-code trainer: reach < 3 s per resistor','#/tools/color','H'],
 ['Hands-on lab drill — multimeter settings (voltage/current/resistance/continuity)','#/lab','H']]);
D(27,4,'Hard-mode mock',[
 ['Mock — Circuit hard-only (separator + filter questions)','#/mock/circuit-hard','F'],
 ['Mock — Thermo hard-only','#/mock/thermo-hard','F'],
 ['Wrong-answer bank','#/wrong','R']],170);
D(28,4,'Final full mocks',[
 ['Full mock — Circuit','#/mock/circuit-full','M'],
 ['Full mock — Thermo','#/mock/thermo-full','M'],
 ['Wrong-answer bank','#/wrong','R']],180);
D(29,4,'Final diagnostic & patch',[
 ['Final diagnostic — compare to Day 1','#/diag','M'],
 ['Patch the 3 lowest topics (lesson → practice → drill)','#/','R'],
 ['Re-read Rules page; check your tournament’s rules/differences','#/rules','R']]);
D(30,4,'Tournament-ready',[
 ['Light review: formulas decks + history timeline','#/cards','R'],
 ['Pack checklist: calculator, binder, multimeter, leads, resistors, wire, safety glasses, spare batteries','#/binder','H'],
 ['Sleep. Stop cramming.','#/','R']],60);
