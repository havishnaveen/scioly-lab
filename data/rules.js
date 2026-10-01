/* ===== RULES AUDIT DATA ===== */
DATA.rules = {
 updated: '2026-09-30',
 intro: 'Everything on this page is labelled VERIFIED (read directly from an official or workshop document) or UNVERIFIED (could not be confirmed). Rules change every year and differ by tournament — your tournament director’s rules and the current official manual ALWAYS win over this site.',
 audit: [
  {ev:'circuit', st:'ver', item:'Event format', detail:'Part I written test (electricity & magnetism) + Part II hands-on, at least one task. Written is 50–75 % of score, hands-on 25–50 %.', src:'Official 2026 Division C manual'},
  {ev:'circuit', st:'ver', item:'Team & materials', detail:'Team of up to 2. Notes/resources on paper of any size (binders, tabs, lamination allowed). Two Class III calculators. Metric units with sensible significant figures.', src:'Official 2026 Division C manual'},
  {ev:'circuit', st:'ver', item:'Topics at all levels', detail:'Charge & Coulomb, capacitance & RC, V/I/R/P & Ohm, color code, series/parallel, batteries & sources, Kirchhoff/mesh/nodal, DC & AC circuits & hazards, magnetism, electromagnets, transformers, motors/generators, switches/relays/fuses/breakers/GFCI, diagrams/symbols, history, hands-on skills.', src:'Official 2026 Division C manual'},
  {ev:'circuit', st:'ver', item:'States/Nationals-only topics', detail:'LEDs, PN junctions (diodes, NPN/PNP transistors), op-amps are officially restricted to States/Nationals in 2026 — but invitationals and some regionals ignore the restriction. This site teaches them anyway.', src:'Official 2026 Division C manual'},
  {ev:'circuit', st:'ver', item:'Excluded for calculations', detail:'Inductance is named as excluded for calculations (concepts only).', src:'Official 2026 Division C manual'},
  {ev:'circuit', st:'ver', item:'Tiebreakers', detail:'Pre-selected questions/tasks, usually marked on the test.', src:'Official 2026 Division C manual'},
  {ev:'thermo', st:'unv', item:'2027 device task', detail:'The official 2027 Thermodynamics page says teams construct a device designed to COLLECT heat; a community summary says this changed from the old “insulate a beaker of hot water” task. The real 2027 rules PDF is distributed via an email request form, so its specifications (size, materials, scoring, time) could not be read.', src:'soinc.org Thermodynamics event page (summary only)'},
  {ev:'thermo', st:'ver', item:'2018/2019 insulation task', detail:'Device in a 15 cm cube holding a 250 mL beaker; hole ≈ 1.5 cm for the probe; hot water 75–125 mL at ≈ 60–75 °C (2019); cooling 20–30 min; predict final temperature; eye protection; impound.', src:'NMT 2019 workshop slides, Michigan 2018 overview'},
  {ev:'thermo', st:'ver', item:'2019 scoring', detail:'Plot score + prediction score + heat-retention score (HS = 20 × lowest k ÷ your k), plus written test. See the Thermo score calculator.', src:'2019 rules workshop material'},
  {ev:'thermo', st:'ver', item:'Div C-only written topics (2019)', detail:'Radiant exitance, entropy, enthalpy.', src:'2019 Division C rules'},
  {ev:'thermo', st:'ver', item:'Written-test areas', detail:'Temperature & scales, heat units, heat capacity/specific heat, heat transfer (conduction, convection, radiation), gas laws, kinetic vs caloric theory, laws of thermodynamics, Carnot/efficiency, applications, history.', src:'2018/2019 rules'},
  {ev:'thermo', st:'ver', item:'2027 written test: 3 questions per subject area', detail:'Areas: (1) thermodynamic systems, zeroth law, definition of temperature, temperature scales & conversions, definitions of heat units; (2) phases of matter, phase transitions, phase diagrams, latent & sensible heat, ideal gas law; (3) heat transfer, thermal conductivity, heat capacity, specific heat; (4) thermodynamic laws & processes (Carnot cycle & efficiency, adiabatic, isothermal), first & second laws; (5) history — Kelvin, Joseph Black, Joule, Carnot, Planck, Clausius, Boltzmann, Maxwell.', src:'2027 Thermodynamics rules text (supplied by student)'},
  {ev:'thermo', st:'ver', item:'2027 State/National-only written topics', detail:'State/Nat: radiant exitance, blackbody radiation, Stefan–Boltzmann law, third law of thermodynamics. Division C State/Nat only: entropy and enthalpy. (In 2019 radiant exitance/entropy/enthalpy were listed for all of Div C — 2027 restricts them.)', src:'2027 Thermodynamics rules text (supplied by student)'},
  {ev:'thermo', st:'ver', item:'2027 notes & calculators (Div B and C)', detail:'Any notes that are hole-punched and secured in a 3-ring binder of any size; sheets may be taken out of the binder. Two Class III calculators.', src:'2027 Thermodynamics rules text (supplied by student)'},
  {ev:'thermo', st:'unv', item:'2027 device specs, scoring formula, test conditions', detail:'Still not seen: device size/materials, what is being collected/measured, time, scoring weights. Use the last verified scoring (2019) only as a model.', src:'—'},
  {ev:'circuit', st:'ver', item:'Real 2026 invitational tests reviewed', detail:'BullSO (Univ. of South Florida), Wichita Heights and GullSO 2026 Circuit Lab tests and keys were read; their topics are in lessons c27–c28 and the question bank. Digital logic is labelled “not a topic in 2026” on the supervisor practice-PowerPoint list (lesson c21 is kept as extra insurance).', src:'Student-supplied tests + answer keys; event resource page screenshot'},
  {ev:'circuit', st:'ver', item:'Supervisor practice-PowerPoint topic list (by week)', detail:'1 Intro/terms/Ohm · 2 Static electricity, conductors, inductors, making measurements · 3 Kitchen batteries, series & parallel · 4 More advanced series/parallel · 5 Magnets, voltage & current dividers · 6 Electric charge, fields, capacitors · 7 Electromagnets & motors · 8 Motors & sample competition · 9 Multiple sources, special notation, resistor marking · 10 KVL/KCL, Wheatstone, Thévenin, Norton · 11 Specialty devices, dependent sources, superposition, troubleshooting · 12 LEDs, diodes, op-amps · 13 RC circuits · 14 PN junctions · 15 Digital logic (*not a topic in 2026).', src:'Circuit Lab event resources page (screenshot)'}
 ],
 howToGet2027: [
  'Go to soinc.org → Events → Thermodynamics (Division C) and open the 2027 rules request form (soinc.org/form/2027-rules-c).',
  'Enter your email; the PDF arrives by email. Also ask your coach — they usually already have it.',
  'Read: device specs, materials banned/allowed, size, test conditions, time, scoring formula, written topics, allowed notes, calculators.',
  'Paste the key lines into the box below so your Dashboard and Binder show them. Then re-read lesson t17.'
 ],
 pasteCta: 'Paste your 2027 Thermodynamics rules text here (saved in this browser only):',
 sources: [
  ['Science Olympiad — Rules & event pages','https://www.soinc.org'],
  ['TryEngineering.org (IEEE) — Circuit Lab resources','https://tryengineering.org'],
  ['PhET Physics Simulations','https://phet.colorado.edu'],
  ['OpenStax — College Physics 2e','https://openstax.org/details/books/college-physics-2e'],
  ['Science Olympiad — 2027 Division C rules request form (Thermodynamics)','https://soinc.org/form/2027-rules-c']
 ],
 handsOn: [
  ['Multimeter','Red lead in VΩ (or mA) jack, black in COM. Voltage in PARALLEL, current in SERIES. Start on the highest range. NEVER measure resistance in a powered circuit.'],
  ['Breadboard','Holes in a numbered column (a–e, f–j) are connected; the center gap isolates the halves; power rails run the length (check for a split in the middle of long rails).'],
  ['Standard tasks','Build a circuit from a schematic; measure V/I/R at named points; identify a mystery resistor; calculate/measure LED brightness; build an electromagnet; USB-charger calculation; troubleshoot a faulty circuit.'],
  ['Safety','Eye protection; no live mains; current (not voltage) does the harm (1 mA perceptible, 10 mA can’t let go, 100 mA ventricular fibrillation); never short a battery; hot glue / hot water burns; hot-wire foam cutters need ventilation.']
 ]
};
