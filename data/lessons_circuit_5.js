/* ===== CIRCUIT LAB — Part 5: hands-on lab skills, meters, inductors, troubleshooting, test strategy ===== */

L({id:'c22', t:'Hands-On Lab: Breadboards, Multimeters & Standard Tasks', tier:'hw', yield:3, min:80, off:'Hands-on: breadboards & multimeters',
formulas:[
 ['Measure V','Meter in PARALLEL (across) the element; leads: red → VΩ jack, black → COM'],
 ['Measure I','Meter in SERIES (break the circuit); red → mA or 10 A jack; never across a source'],
 ['Measure R','Circuit POWER OFF, component isolated; meter supplies its own test current'],
 ['Continuity','Beeps when R < ~30–50 Ω; circuit must be unpowered'],
 ['Mystery R (V only)','R_x = R_known·(V_s − V_k)/V_k  (series with a known R across a known V_s)'],
 ['Power supplied','P = V_s × I_total (ammeter) or V_s²/R_total']],
html:`
<div class="box unv"><b>Rules text (2026)</b>“Participants must understand <b>the operation of breadboards and multimeters and how to use them</b>.” Sample tasks: (1) determine a <b>mystery resistor using only voltage measurements</b>; (2) <b>calculate the power supplied to a circuit</b>; (3) wire <b>two LEDs equally bright</b>; (4) <b>build an electromagnet</b> from wire, bolt, battery; (5) <b>read a USB-charger label</b> and compute charge time. “At least one” hands-on task; hands-on is <b>25–50 %</b> of the score. Supervisors supply the equipment, but teams <i>may</i> bring a personal multimeter at the supervisor’s discretion — practise on the standard cheap meter.</div>
<h2>1. The solderless breadboard</h2>
<svg class="dia" viewBox="0 0 560 210" width="560"><rect x="10" y="10" width="540" height="190" rx="8" fill="none" stroke="currentColor"/>
<text x="20" y="27" style="fill:var(--bad)">+ rail (all holes in this row connected)</text><path d="M20 34 H540" stroke="var(--bad)" stroke-width="3"/>
<text x="20" y="54" style="fill:var(--info)">− rail</text><path d="M20 60 H540" stroke="var(--info)" stroke-width="3"/>
<g stroke="var(--circ)" stroke-width="3"><path d="M120 85 V125 M160 85 V125 M200 85 V125 M240 85 V125 M280 85 V125"/><path d="M120 150 V190 M160 150 V190 M200 150 V190 M240 150 V190 M280 150 V190"/></g>
<text x="330" y="108">↑ columns a–e are connected (5 holes)</text><text x="330" y="132" style="fill:var(--dim)">center gap (DIP chips straddle it) ↔ not connected</text><text x="330" y="176">↓ columns f–j are connected (5 holes)</text><text x="20" y="210" style="fill:var(--warn)"></text></svg>
<ul><li><b>Terminal strips</b> (numbered columns, rows lettered a–e and f–j): the <b>5 holes in each half-column are connected</b> (metal clip underneath). The <b>center trench is not connected</b> — DIP ICs straddle it so each pin has its own column.</li>
<li><b>Power rails</b> (two long strips along the edges, marked + red / − blue): each runs the full length — <b>BUT on many full-size boards the rail is broken in the middle</b> (two half-length rails). <b>Check continuity</b> before assuming.</li>
<li>Use <b>solid-core 22 AWG</b> jumpers; cut/strip ~6 mm. Components' leads go straight in; don't force thick wires (&gt;0.8 mm).</li>
<li>Connect to supply via rails: red +, black −; build from a clean layout; <b>power off while wiring</b>.</li>
<li>Limits: ~1 A per contact recommended; high-frequency poor; max voltage depends (most rated ≤ 36 V).</li></ul>
<h2>2. The digital multimeter (DMM)</h2>
<table><tr><th>Jack / setting</th><th>What it does</th></tr>
<tr><td><b>COM</b> (black)</td><td>always here</td></tr><tr><td><b>VΩ</b> (red)</td><td>voltage, resistance, continuity, diode, frequency</td></tr>
<tr><td><b>mA (200–400 mA, fused)</b></td><td>small current (fuse ≈ 0.2–0.5 A)</td></tr><tr><td><b>10 A (or 20 A)</b></td><td>large current (HRC fuse ≈ 10 A; brief only)</td></tr>
<tr><td>V ⎓ (or V with straight line) / V ~</td><td>DC volts / AC volts (rms)</td></tr><tr><td>Ω</td><td>resistance; meter supplies test current</td></tr>
<tr><td>•))) continuity, ▶| diode test, hFE, capacitance, °C, Hz</td><td>extra functions</td></tr></table>
<div class="box key"><b>The 3 measurement rules</b>
<ol><li><b>Voltage:</b> leads <b>across</b> (in <b>parallel</b> with) the component. Red on the more positive side reads positive; reversed just shows “−” (harmless). Non-destructive.</li>
<li><b>Current:</b> the meter must be <b>in series</b> — open the circuit and insert the meter so all the current flows through it (ammeter ≈ 0 Ω). <b>Switch probes to the mA/10 A jack AND dial to A.</b> Start on the high range. <b>Connecting an ammeter across a source = short circuit → blown fuse (or worse).</b></li>
<li><b>Resistance:</b> <b>power off</b> and isolate the resistor (at least one lead out of the circuit) — otherwise parallel paths give wrong readings and you can damage the meter. Don't touch both probe tips with your fingers (you'd measure ~1 MΩ skin).</li></ol></div>
<ul><li><b>Autoranging</b> vs <b>manual range</b>: “OL” (overload) = value exceeds range. Choose the smallest range above the expected value for max resolution; the display digits = <b>significant figures</b> to report.</li>
<li><b>Accuracy</b> like ±(0.5 % + 2 digits). <b>Input impedance</b> of DMM voltmeter ≈ 10 MΩ (see next lesson for loading effects).</li>
<li><b>Safety:</b> leave the dial on V/OFF after use (never in A); CAT ratings (CAT II/III/IV) for mains; inspect leads; <b>don't measure mains with fuse-less meters</b>; never measure resistance/continuity on a live circuit; when measuring mains, keep one hand behind.</li></ul>
<h2>3. The standard hands-on tasks (practise each!)</h2>
<div class="box hw"><b>Task A — Mystery resistor using only voltage measurements</b>
<ol><li>Build a <b>series loop</b>: source V_s, known resistor R_k, unknown R_x.</li><li>Measure V_s and V_k (across the known). Then V_x = V_s − V_k (or measure directly).</li><li>Series → same current: I = V_k/R_k; <b>R_x = V_x/I = R_k·V_x/V_k</b>.</li><li>Choose R_k the same order of magnitude as R_x (big R_k ⇒ most V drops on it, poor precision). Mind meter loading if R ≥ 100 kΩ.</li><li>Report with correct sig figs and compare with the color code (tolerance!).</li></ol>
Example: V_s = 9.02 V, V_k (1.00 kΩ) = 3.01 V → V_x = 6.01 V → R_x = 1000×6.01/3.01 = <b>2.00 kΩ</b>.</div>
<div class="box hw"><b>Task B — Power supplied to a circuit</b>Measure supply voltage <b>with the circuit connected (loaded)</b> and the current through the supply (ammeter in series in the supply lead): P = V·I. If you only have a voltmeter: measure V_s and each R (or use known R): P = V_s²/R_total. Watch units (mA!) and report W or mW.</div>
<div class="box hw"><b>Task C — Two LEDs equally bright</b>Series: one resistor sized for the target current (R = (V_s − 2V_f)/I). Or parallel with one resistor <i>per LED</i>. Check polarity (long leg +). Verify with voltage across each LED’s resistor (same ⇒ same current).</div>
<div class="box hw"><b>Task D — Electromagnet</b>See the electromagnet lesson: wind neat turns, battery + switch, test with pins, find N pole with compass, measure coil R &amp; I, predict effect of more turns.</div>
<div class="box hw"><b>Task E — USB charger label</b>Read “INPUT: 100–240 V~ 50/60 Hz 0.5 A; OUTPUT: 5.0 V⎓ 2.4 A (12 W), 9 V⎓ 1.67 A (15 W)”. Questions: max output power? input power at full load (P_in = P_out/η)? Time to charge E_bat (Wh) = capacity × V / P (× 1/η)? Which symbol means DC? (⎓). Is this an AC→DC converter? (yes: rectifier + switch-mode).</div>
<div class="box hw"><b>Other tasks seen at tournaments</b>Identify components by appearance/markings (resistor, LED, diode, electrolytic cap, NPN/PNP, potentiometer, relay, buzzer, switch, fuse, thermistor, LDR, transformer, motor); measure a voltage-divider output &amp; compare with calculation; find an open/short in a mystery circuit (troubleshooting); measure RC time with a stopwatch/LED fade; diode-test mode; build a logic gate with transistors; wire a relay circuit; use a potentiometer to set a voltage; read a resistor network on a board and compute R_eq; measure series/parallel R_eq; measure V at several nodes and deduce a missing component value; calibrate a sensor (thermistor/LDR divider) — record V vs quantity and fit a line.</div>
<h2>4. Recording data like a pro</h2>
<ul><li>Write <b>value, unit, and range/uncertainty</b> (e.g., 3.01 ± 0.01 V). Use prefixes (mV, kΩ). Always state measurement <i>conditions</i> (loaded/unloaded).</li><li>Compare with theoretical: % error = |meas − theory|/theory × 100 %. Explain differences: tolerance, meter loading, battery droop, contact resistance.</li><li>Tabulate and sketch the schematic you built — graders award points for “measurements, calculations, and data analysis.”</li></ul>
<div class="box warn"><b>Common mistakes that cost points</b>Current measured in parallel; probes left in the A jack then used for V; measuring R on a live circuit; forgetting the breadboard's split rail; LED backwards; two rows of different strips assumed connected; over-gripping the probes (body R); misreading mA as A; not zeroing/continuity-checking wires; reporting too many digits.</div>
<p>Practice with the <a href="#/tools/solver">solver</a> and the <a href="#/lab">Hands-On Lab trainer</a> (multimeter connection drills, breadboard connectivity drills).</p>`});

L({id:'c23', t:'Non-Ideal Meters, Measurement Error, Uncertainty & Sensor Calibration', tier:'adv', yield:2, min:40, off:'Hands-on / separator',
formulas:[
 ['Voltmeter loading','R_eff = R_circuit ∥ R_meter;  V_read = V_true × R_meter/(R_meter + R_th)'],
 ['Ammeter burden','I_read = V_th/(R_th + R_ammeter)'],
 ['% error','|measured − accepted|/accepted × 100 %'],
 ['Percent difference','|A − B|/((A + B)/2) × 100 %'],
 ['Two-point calibration','y = m·x + b, m = (y₂ − y₁)/(x₂ − x₁)'],
 ['Sig figs ×÷','result has the fewest sig figs of any input']],
html:`
<h2>1. Real meters are not ideal</h2>
<p><b>Ideal voltmeter</b> = infinite resistance; <b>ideal ammeter</b> = zero resistance. A digital multimeter's voltmeter is ≈ <b>10 MΩ</b>; its ammeter has a <b>burden</b> (shunt + fuse) of 0.1–10 Ω depending on range; analog meters: “20 kΩ/V” sensitivity (so on the 10 V range R = 200 kΩ).</p>
<div class="box ex"><b>Voltmeter loading</b>A 1 MΩ/1 MΩ divider from 10 V should give 5.00 V. The DMM (10 MΩ) in parallel with the lower 1 MΩ: R = 1||10 = 0.909 MΩ → V = 10×0.909/(1 + 0.909) = <b>4.76 V</b> (−4.8 %). With 100 kΩ/100 kΩ the error is only 0.5 %. <i>Rule: loading error ≈ R_source/R_meter.</i></div>
<div class="box ex"><b>Ammeter burden</b>A 5 V source with 10 Ω load should push 0.500 A. A meter with 0.5 Ω burden: I = 5/10.5 = <b>0.476 A</b> (−4.8 %). Low-resistance circuits are sensitive to ammeter burden.</div>
<h2>2. Types of measurement error</h2>
<ul><li><b>Systematic</b>: offset, calibration error, meter loading, tolerance → same direction, can be corrected.</li><li><b>Random</b>: noise, contact jitter, reading fluctuation → reduce by averaging.</li><li><b>Gross/human</b>: wrong range/jack, misread, wrong units.</li><li><b>Resolution</b>: last digit ±1; <b>precision ≠ accuracy</b> (precision = repeatability, accuracy = closeness to true).</li></ul>
<p><b>Uncertainty propagation</b> (basic): for sums, add absolute uncertainties; for products/quotients, add relative (%) uncertainties — e.g., P = V×I with V ±1 %, I ±2 % → P ±3 % (worst case). Resistor tolerance (±5 %) contributes to the result of any divider/gain.</p>
<h2>3. Sensors and calibration</h2>
<p>Many circuits convert a physical quantity to a voltage via a divider with a sensor resistance: <b>thermistor</b> (NTC: R = R₀·exp[B(1/T − 1/T₀)], T in K), <b>LDR</b> (R ↓ with light), <b>strain gauge</b> (R ∝ strain; Wheatstone bridge), <b>Hall sensor</b>, <b>potentiometer</b> (position), <b>piezo</b>. <b>Calibration</b> = measure the output for known inputs and build a <b>calibration curve</b>:</p>
<ol><li>Choose ≥ 2 (better 5+) reference points (e.g., ice water 0 °C, boiling 100 °C, room).</li><li>Record V_out at each; plot y vs x; fit a line (or curve).</li><li>Use the fit to convert future readings; report range of validity and uncertainty. Two-point calibration fixes offset &amp; gain.</li></ol>
<div class="box ex"><b>Example</b>Divider: 5 V, 10 kΩ fixed, 10 kΩ NTC (at 25 °C). V_out = 5×R_NTC/(10k + R_NTC) = 2.5 V at 25 °C; as it warms, R_NTC falls → V_out falls. Turn the readings into temperature with the curve.</div>
<div class="box filter"><b>Tryout-filter</b>“A 500 kΩ/500 kΩ divider on 10 V is read with a 10 MΩ meter across the lower resistor. What shows?” → 500k∥10M = 476 kΩ → V = 10×476/(500+476) = <b>4.88 V</b> (−2.4 %). “To measure small currents accurately you want an ammeter with…” → the smallest possible resistance.</div>`});

L({id:'c24', t:'Inductors, RL Circuits & Energy in Magnetic Fields (conceptual)', tier:'xtra', yield:1, min:30, off:'Excluded for calculations (“inductance”) — concepts only',
formulas:[
 ['Inductance','ε = −L·ΔI/Δt;  L = NΦ/I  (henry, H)'],
 ['Solenoid L','L = μ₀μ_rN²A/ℓ'],
 ['Energy','U = ½LI²'],
 ['RL time constant','τ = L/R;  I(t) = (V/R)(1 − e^(−t/τ))'],
 ['Series / parallel','L_series = ΣL;  1/L_par = Σ1/L  (no mutual coupling)']],
html:`
<div class="box unv"><b>Rules note</b>The 2026 manual lists <b>“inductance”</b> (and AC circuit theory, frequency analysis, calculus) as <b>excluded</b> topics. However, SciOly’s own practice slides (#2) cover inductors, and questions about <i>why a relay needs a flyback diode, what a choke does, or why a transformer works</i> require the concept. Learn <b>concepts</b>; don't grind derivations.</div>
<h2>1. Inductor</h2>
<p>A coil that stores energy in its <b>magnetic field</b>. It opposes <i>changes in current</i> (Lenz): <code>V = L·dI/dt</code>. <b>DC steady state → a plain wire (short)</b>; at the instant of switch-on it acts like an <b>open</b> (current can't jump). Unit: <b>henry (H)</b> (Joseph Henry). Energy <code>½LI²</code>.</p>
<h2>2. RL circuit (DC)</h2>
<p>Closing a switch to V through R and L: current rises with <b>τ = L/R</b> to V/R (63 % in one τ) — the mirror of RC (where V_C rises). Opening the switch → collapsing field → high voltage spike (<b>inductive kick</b>) → sparks at contacts, relay driver damage → <b>flyback diode</b>.</p>
<table><tr><th></th><th>Capacitor</th><th>Inductor</th></tr>
<tr><td>Stores energy in</td><td>electric field</td><td>magnetic field</td></tr>
<tr><td>Cannot change instantly</td><td>voltage</td><td>current</td></tr>
<tr><td>DC steady state</td><td>open circuit</td><td>short circuit</td></tr>
<tr><td>t = 0 (initially uncharged/zero-current)</td><td>short</td><td>open</td></tr>
<tr><td>Time constant</td><td>RC</td><td>L/R</td></tr></table>
<p><b>Applications:</b> chokes (block AC, pass DC), filters, transformers, relays/solenoids, ignition coils, switching regulators, inductive sensors/metal detectors, wireless charging.</p>`});

L({id:'c25', t:'Troubleshooting & Fault-Finding (Open, Short, Wrong Wiring)', tier:'hw', yield:2, min:35, off:'Practice slides #11; hands-on',
formulas:[
 ['Open element','I = 0 through it, full voltage drop across it (V_open = V_available)'],
 ['Short','V = 0 across it, current bypasses / increases elsewhere'],
 ['Half-split','Check the middle of the signal chain; eliminate half the circuit each test']],
html:`
<h2>1. Symptoms → faults</h2>
<table><tr><th>Fault</th><th>What you measure</th></tr>
<tr><td><b>Open circuit</b> (broken wire, blown fuse, loose breadboard wire, burned resistor, dead switch)</td><td>Zero current; <b>full source voltage across the open gap</b>; all other series elements show 0 V drop.</td></tr>
<tr><td><b>Short circuit</b> (stray wire, solder bridge, bad capacitor, leads touching)</td><td>0 V across the shorted element; unusually high current; rest of circuit sees more voltage; fuse blows, battery gets hot.</td></tr>
<tr><td><b>High-resistance contact</b> (corroded, oxidized, loose)</td><td>Unexpected voltage drop across a “wire”; intermittent; heating.</td></tr>
<tr><td><b>Wrong value</b> (color-code misread)</td><td>Voltages/currents differ from design by the ratio of R.</td></tr>
<tr><td><b>Reversed polarity</b> (LED, diode, electrolytic, battery)</td><td>Device OFF or hot; meter reads negative.</td></tr>
<tr><td><b>Breadboard error</b> (wrong row, gap, split rail)</td><td>Component not connected — use continuity test on the strip.</td></tr>
<tr><td><b>Dead source</b> (battery depleted)</td><td>Voltage sags under load; measure loaded.</td></tr></table>
<h2>2. The method</h2>
<ol><li><b>Observe</b> the symptom (which parts work?). <b>Check the obvious</b>: power on, switch, battery, meter on the right mode.</li><li><b>Measure supply voltage</b> at the circuit (loaded).</li><li><b>Half-split</b>: measure node voltages along the path and compare with expected values (from your schematic/calculation). The first place the voltage is “wrong” localizes the fault.</li><li>Confirm with <b>continuity/resistance</b> tests <b>with power off</b>.</li><li>Fix one thing at a time; retest. <b>Record</b> what you found.</li></ol>
<div class="box ex"><b>Example</b>A series string: 9 V battery → R1 → R2 → LED → ground. LED dark. Measure across R1: 0 V; across R2: 0 V; across LED: 0 V; battery: 9 V. All parts show 0 → there's an <b>open between the battery and R1</b> (no current flows). If instead R2 showed 9 V and R1/LED showed 0 V → R2 is the open element.</div>
<div class="box filter"><b>Tryout-filter</b>“In a series circuit, voltmeter across one resistor reads the full supply; the lamp is off. What is wrong?” → that resistor is <b>open</b>. “Two bulbs in parallel; one is out; the other is normal” → the dead bulb is open (bulb burnt), branch failure. “Two bulbs in series and <i>both</i> are dark” → an open <i>anywhere</i> in the loop (or a dead supply).</div>`});

L({id:'c26', t:'Circuit Lab Test Strategy, Notes Binder & Time Management', tier:'core', yield:2, min:30, off:'Event parameters',
formulas:[
 ['Score split','Written 50–75 % · Hands-on 25–50 % (per official rules)'],
 ['Materials allowed','Notes/resources on paper, any size (binders, tabs, lamination OK); writing utensils; <b>two Class III calculators</b>']],
html:`
<h2>1. Event parameters (2026 official)</h2>
<ul><li><b>Notes:</b> “a collection of notes and resources, written/printed on paper, of any size containing information in any form and from any source.” Binders, notebooks, folders, sheet protectors, lamination, tabs, labels all <b>allowed</b>. <b>Use it!</b></li><li><b>Calculators:</b> two <b>Class III</b> calculators, for any part of the event. (Check the manual's calculator-class definitions, Section 3, for exactly what your model allows.)</li><li><b>Units:</b> metric with appropriate significant figures unless told otherwise.</li><li><b>Structure:</b> Part I written (electricity &amp; magnetism); Part II hands-on, “at least one task.” Scoring: “points for correct answers, measurements, calculations, and data analysis.”</li><li><b>Tiebreakers:</b> pre-selected task(s)/question(s), often marked on the test.</li></ul>
<h2>2. What to put in the binder (tabbed)</h2>
<ol><li><b>Formula sheet</b> (use the Binder page in this site — auto-compiled from every lesson).</li><li><b>Constants &amp; prefixes</b> (k, e, μ₀, ε₀, prefix table, unit conversions).</li><li><b>Color code</b> chart with tolerance; capacitor codes; SMD codes; E12/E24 lists.</li><li><b>Symbols</b> page (schematic symbols, component pictures, pinouts: 2N3904, 741, 555, LED).</li><li><b>Laws &amp; methods</b>: Ohm, KVL/KCL, dividers, Thevenin/Norton, bridge, Δ–Y with worked examples.</li><li><b>Magnetism</b>: three right-hand rules, transformer ratios, motor/generator, flux/Faraday/Lenz.</li><li><b>Devices</b>: switches (SPST/SPDT/DPDT), relay wiring, fuse/breaker/GFCI facts, op-amp formulas, BJT rules, LED resistor formula.</li><li><b>Safety thresholds</b> (1 mA, 10 mA, 100 mA) and AC/DC hazards; household wiring colors &amp; GFCI.</li><li><b>History timeline</b> (Volta → Tesla + extras) — one page, dates and units.</li><li><b>Hands-on procedures</b> (meter jacks, V/I/R rules, mystery resistor method, LED brightness, electromagnet build, USB charger calc, troubleshooting flow).</li><li><b>Worked examples</b> of each problem type (copy from your practice errors).</li></ol>
<div class="box key"><b>Time plan (typical 50-min event)</b>Split the pair: one partner takes the hands-on at the start while the other starts the written test; swap. First pass through the written test: do sure points (history, symbols, definitions, plug-and-chug); second pass: math; last: hard multi-step problems. Never leave blanks — guess on multiple choice. Show the formula, substitution, and <b>units</b> for partial credit.</div>
<div class="box filter"><b>The “blindside” checklist</b>Before the tournament confirm you can answer at least 3 questions on <i>each</i>: transistors (NPN/PNP/switch), relays (NO/NC/COM/flyback), transformers (ratio, step up/down, losses), switches (SPDT/DPDT), fuses/breakers/GFCI, op-amps, LEDs/diodes, electromagnets/right-hand rules, AC household hazards, safety thresholds, history of each of the seven required scientists, multimeter usage, breadboard internals, capacitor RC, Coulomb’s law, and the USB-charger calculation.</div>`});
