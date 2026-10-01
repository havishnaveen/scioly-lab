/* ===== CIRCUIT LAB — Part 2: KVL/KCL, network theorems, DC, AC & safety ===== */

L({id:'c07', t:'Kirchhoff’s Laws & Circuit Analysis (KVL, KCL, Mesh, Nodal)', tier:'core', yield:3, min:70, off:'Topic 8',
formulas:[
 ['KCL','Σ I_in = Σ I_out at any node (charge conservation)'],
 ['KVL','Σ V around any closed loop = 0 (energy conservation)'],
 ['Sign convention (passive)','Current enters the + end of a resistor → V drop = +IR in the direction of travel when going with current'],
 ['Nodal analysis','Σ (V_node − V_neighbor)/R = injected current, per unnamed node'],
 ['Mesh analysis','Σ R·I (loop) − Σ R·I (shared) = Σ EMF of loop']],
html:`
<h2>1. Kirchhoff’s Current Law (KCL) — 1845, Gustav Kirchhoff</h2>
<p>At any node (junction), the algebraic sum of currents is zero: <b>current in = current out</b>. Charge can't pile up at a junction. Works for <i>any</i> circuit element types.</p>
<h2>2. Kirchhoff’s Voltage Law (KVL)</h2>
<p>Around any closed loop the algebraic sum of voltage rises and drops is zero. Energy gained from sources = energy lost in loads. Sign convention: choose a loop direction (CW or CCW). Crossing a source from − to + is a <b>rise</b> (+ε); crossing a resistor <b>along</b> the assumed current direction is a <b>drop</b> (−IR).</p>
<div class="box key"><b>Step-by-step branch-current method</b>
<ol><li>Label every branch current with an assumed direction (wrong guesses just give negative answers).</li><li>Write KCL at (#nodes − 1) independent nodes.</li><li>Write KVL around enough loops so that (#equations = #unknown currents).</li><li>Solve the linear system (substitution, determinants/Cramer's rule, or matrix calculator).</li><li><b>Check</b> power balance or a KVL loop you didn't use.</li></ol></div>
<div class="box ex"><b>Worked example (2-loop)</b>Left branch: 12 V battery + 4 Ω; middle branch: 6 Ω to the bottom rail; right branch: 6 V battery + 3 Ω (all three meet at one top node). Nodal is fastest: unknown top-node voltage V, reference = bottom rail. KCL: (12−V)/4 + (6−V)/3 = V/6 → multiply by 12: 3(12−V) + 4(6−V) = 2V → 36 + 24 = 9V → <b>V = 6.67 V</b>. Branch currents: (12−6.67)/4 = 1.33 A; (6−6.67)/3 = −0.22 A (flows the other way); 6.67/6 = 1.11 A. KCL check: 1.33 − 0.22 = 1.11 ✓.</div>

<h2>3. Nodal analysis (voltage method) — usually fastest</h2>
<ol><li>Pick a <b>reference node</b> (ground, 0 V) — usually the node with the most connections.</li><li>Label other node voltages V₁, V₂…</li><li>At each non-reference node write KCL as Σ(V_node − V_neighbor)/R = 0 (+ source currents).</li><li>Solve. A voltage source between two non-reference nodes forms a <b>supernode</b> (write KCL around both together + constraint V_a − V_b = E).</li></ol>
<h2>4. Mesh analysis (current method)</h2>
<ol><li>Draw mesh currents (all CW) in each independent window.</li><li>For each mesh: (sum of all R in the mesh)·I_mesh − (shared R)·I_neighbor = (sum of EMFs helping CW).</li><li>A current source on the edge of a single mesh fixes that mesh current; shared current sources form a <b>supermesh</b>.</li></ol>
<div class="box filter"><b>Separator skill</b>Choose the smaller system: <b>#nodes−1 − #voltage-sources</b> equations for nodal, <b>#windows − #current-sources</b> for mesh. Many tryouts give a 3-loop circuit and want a single current — if you pick the right method you finish in 2 minutes. Always back-check with power balance.</div>
<h2>5. Superposition</h2>
<p>In a <b>linear</b> circuit, the response (I or V) equals the sum of responses due to <b>each independent source acting alone</b>. Turn off the others: replace voltage sources by <b>shorts</b> and current sources by <b>opens</b> (keep internal resistances). Does <b>not</b> work directly for power (P = I²R isn't linear) — sum the currents, then compute power.</p>
<div class="box warn"><b>Pitfalls</b>Losing a minus sign in a loop; mixing up “loop current” vs “branch current” in shared resistors; turning off dependent sources in superposition (you must <i>keep</i> dependent sources active); assuming a battery is always delivering power — it can be <b>charged</b> (current into +).</div>
<div class="box hw"><b>Hands-on link</b>To verify KVL: measure each voltage drop in a series loop with the voltmeter and add them. To verify KCL, open the circuit at each branch and insert the ammeter <i>in series</i> — the branch currents must sum to the total. Differences reveal meter loading or bad readings.</div>`});

L({id:'c08', t:'Thevenin, Norton, Wheatstone Bridge, Δ–Y & Dependent Sources', tier:'adv', yield:2, min:70, off:'Topic 8+ (separator)',
formulas:[
 ['Thevenin','V_th = open-circuit voltage at the terminals;  R_th = equivalent R with independent sources off (or V_th/I_sc)'],
 ['Norton','I_N = short-circuit current;  R_N = R_th;  V_th = I_N·R_N'],
 ['Max power transfer','R_L = R_th;  P_max = V_th²/(4R_th)'],
 ['Wheatstone balance','R₁/R₂ = R₃/R_x  → R_x = R₂R₃/R₁  (galvanometer reads 0)'],
 ['Δ → Y','R_a = R_AB·R_AC/(R_AB+R_BC+R_CA)  (each Y leg = product of adjacent Δ legs / sum)'],
 ['Y → Δ','R_AB = (R_aR_b + R_bR_c + R_cR_a)/R_c  (sum of pair products / opposite leg)'],
 ['Delta equal legs','R_Y = R_Δ/3']],
html:`
<h2>1. Thevenin’s theorem (<span class="muted">Léon Charles Thévenin, 1883</span>)</h2>
<p>Any linear two-terminal network can be replaced by an <b>ideal voltage source V_th in series with a resistor R_th</b>.</p>
<div class="box key"><b>Procedure</b><ol><li>Remove the load (the part you want current/voltage for). Mark terminals a–b.</li><li><b>V_th</b> = open-circuit voltage a–b (use divider/KVL).</li><li><b>R_th</b> = resistance looking into a–b with all independent sources <b>zeroed</b> (V-sources → short, I-sources → open).</li><li>Reattach the load: I_L = V_th/(R_th + R_L).</li></ol></div>
<div class="box ex"><b>Worked example</b>18 V source, 6 Ω in series, then 3 Ω to ground across terminals a–b (i.e., V_th is across the 3 Ω). V_th = 18 × 3/(6+3) = <b>6 V</b>. R_th = 6∥3 = <b>2 Ω</b>. A 4 Ω load gets I = 6/(2+4) = 1 A. Max power would be at R_L = 2 Ω: P = 6²/(4×2) = 4.5 W.</div>
<h2>2. Norton’s theorem (<span class="muted">Edward Lawry Norton, Bell Labs, 1926</span>)</h2>
<p>Equivalent = <b>ideal current source I_N in parallel with R_N</b>. I_N is the short-circuit current; R_N = R_th. Conversions: V_th = I_N R_N. Source transformation (a voltage source + series R ↔ current source + parallel R) lets you simplify step by step.</p>
<h2>3. Maximum power transfer</h2>
<p>R_L = R_th gives P_max = V_th²/(4R_th); at that point efficiency = 50 %. For R_L = 0 or ∞, P_L = 0.</p>
<h2>4. Wheatstone bridge (<span class="muted">Charles Wheatstone popularised it in 1843; invented by Samuel Hunter Christie, 1833</span>)</h2>
<svg class="dia" viewBox="0 0 320 210" width="320"><path class="w" d="M160 20 L60 105 L160 190 L260 105 Z"/><circle cx="160" cy="20" r="4" fill="currentColor"/><circle cx="160" cy="190" r="4" fill="currentColor"/>
<path class="w" d="M60 105 H110 M210 105 H260"/><rect x="110" y="95" width="100" height="20" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="146" y="110">G</text>
<text x="92" y="52">R1</text><text x="220" y="52">R3</text><text x="92" y="162">R2</text><text x="216" y="162">Rx</text><text x="168" y="16">+V</text><text x="168" y="206">0</text></svg>
<p>Four resistors in a diamond, source across the top/bottom nodes, detector (galvanometer/voltmeter) across the middle. <b>Balanced</b> when detector current is zero: R₁/R₂ = R₃/R_x (ratio arms equal). Then R_x = R₂R₃/R₁. Unbalanced: V_out = V_s[R₂/(R₁+R₂) − R_x/(R₃+R_x)]. Used with strain gauges, thermistors, RTDs (sensor bridges), and precise resistance measurement (null method — independent of source voltage and meter accuracy).</p>
<h2>5. Δ–Y (pi–tee) transformation</h2>
<p>Needed when a bridge is unbalanced and can't be reduced by series/parallel. Δ (triangle) ↔ Y (star): for <b>equal legs</b>: R_Y = R_Δ/3. General Δ→Y: each Y resistor = (product of the two adjacent Δ resistors)/(sum of all three Δ). Y→Δ: each Δ resistor = (sum of pairwise products)/(Y resistor <b>opposite</b>).</p>
<h2>6. Dependent (controlled) sources & special notation</h2>
<ul><li><b>Dependent sources</b> (diamond symbol): VCVS, VCCS, CCVS, CCCS — models for transistors and op-amps. Never turn them off in Thevenin/superposition (for R_th with dependent sources: apply a test source and compute v/i).</li><li><b>Ground symbol &amp; node voltage notation:</b> “+12 V” arrows mean that node is at 12 V relative to ground; two batteries with a common center ground = ±12 V dual supply; a resistor “to ground” is to the 0 V node.</li><li><b>Multiple sources notation</b> (SciOly practice slide 9): supplies drawn as arrows with a value instead of a battery; you must mentally complete the return path to ground.</li></ul>
<div class="box filter"><b>Separator questions</b>• “Find the current in the bridge detector resistor when the bridge is unbalanced” → Thevenin across the detector.<br>• “Reduce this circuit to a single Norton source” → source transforms.<br>• “Non-ideal voltmeter (10 MΩ) across a 1 MΩ/1 MΩ divider reads what?” → (see the meters lesson) ≈ 0.476 V_s instead of 0.5 V_s.</div>
<p>Use the <a href="#/tools/solver">DC Circuit Solver</a> to check answers by netlist.</p>`});

L({id:'c09', t:'DC Circuits: Characteristics, Sources, Uses & Hazards', tier:'core', yield:2, min:35, off:'Topic 2',
formulas:[
 ['Body current effects (ac 60 Hz)','1 mA perceptible · 5–10 mA painful/“let-go” threshold ≈ 10 mA · 30 mA+ breathing paralysis · 75–250 mA ventricular fibrillation · >1–2 A cardiac arrest/burns'],
 ['Body resistance','Dry skin ≈ 100 kΩ–1 MΩ; wet skin ≈ 1 kΩ; internal ≈ 300–1000 Ω'],
 ['Fault current','I = V/R_body → 120 V / 1 kΩ = 120 mA (lethal)']],
html:`
<h2>1. What DC is</h2>
<p><b>Direct current</b>: charge flows in <b>one direction</b> only; voltage polarity is constant (can be steady or pulsing but never reversing). Symbol: “⎓” or “DC”. <b>Sources:</b> batteries, solar (photovoltaic) cells, fuel cells, DC generators/dynamos, thermocouples (tiny mV), rectified AC (power supplies, wall adapters, USB chargers), thermoelectric (Peltier), piezo (brief).</p>
<h2>2. Uses</h2>
<p>Electronics and computers (all chips run on DC), phones &amp; laptops, cars (12 V), LED lighting, electroplating and electrolysis (Faraday’s laws), electric vehicles, high-voltage DC (HVDC) transmission for very long lines, telecom (−48 V), small motors, relays/solenoids, charging.</p>
<div class="box hist"><b>The War of the Currents (1880s–90s)</b>Thomas Edison championed DC (Pearl Street Station, NYC, 1882); George Westinghouse with Nikola Tesla championed AC (polyphase induction motor patents, Niagara Falls 1895–96). AC won for long-distance transmission because <b>transformers</b> can step voltage up (low I, low I²R loss) and down. DC is now returning as HVDC.</div>
<h2>3. DC Hazards</h2>
<ul>
<li><b>Electric shock:</b> it's the <b>current through the body</b> that hurts (path matters: hand-to-hand crosses the heart). DC tends to cause a single muscle contraction (“throws” you off), whereas AC at 50–60 Hz can cause tetany (you can't let go) and fibrillation at lower current. DC is <i>not</i> safe at high voltage.</li>
<li><b>Burns:</b> resistive (I²R) heating; arc burns; battery short-circuit → wires, rings, watches become heating elements (a wrench across a car battery can weld).</li>
<li><b>Batteries:</b> hydrogen gas from lead-acid charging can explode; Li-ion thermal runaway; acid/alkali leaks.</li>
<li><b>Capacitors:</b> stored charge remains after power off (camera flash, old CRT, power supply) — discharge through a resistor.</li>
<li><b>Overcurrent fires:</b> wire too thin for the current → fuses/breakers/PTC protect.</li>
<li><b>Polarity errors:</b> reversed electrolytics, LEDs, ICs can be destroyed.</li></ul>
<div class="box key"><b>Safety rules that show up on the test</b>• Treat all circuits as live; one-hand rule when probing; remove jewelry.<br>• De-energize before changing the circuit; power down before re-wiring a breadboard.<br>• Never measure current with probes in the voltage jacks; never put an ammeter across a source.<br>• Use a <b>fuse or breaker</b> rated for the wire, not the load.<br>• Insulate, eye protection (batteries can vent; wire ends fly when cut).<br>• Know the <b>let-go</b> current ≈ 10 mA and lethal range ≈ 100 mA.</div>
<div class="box ex"><b>Example</b>A 12 V car battery can deliver 500 A briefly (r ≈ 24 mΩ). Through skin (≈ 100 kΩ dry) 12 V gives 0.12 mA — harmless — but a ring that bridges the terminals (R ≈ 5 mΩ) draws hundreds of amps → severe burn. <i>Voltage</i> doesn't injure; <i>current paths</i> do.</div>`});

L({id:'c10', t:'AC Circuits: Characteristics, Sources, Uses, Hazards & Household Wiring', tier:'core', yield:3, min:55, off:'Topic 3',
formulas:[
 ['Sinusoid','v(t) = V_p·sin(2πft + φ)'],
 ['Period / frequency','T = 1/f;  ω = 2πf'],
 ['RMS (sine)','V_rms = V_p/√2 = 0.707 V_p;  V_p = 1.414 V_rms;  V_pp = 2V_p'],
 ['Average power (resistor)','P = V_rms·I_rms = I_rms²R'],
 ['US mains','120 V rms (≈170 V peak, 340 V pp), 60 Hz; split-phase 240 V'],
 ['EU mains','230 V rms, 50 Hz'],
 ['Power (reactive, basic)','P = VI cos φ;  pf = cos φ;  S = VI (VA);  Q = VI sin φ (VAR)']],
html:`
<h2>1. AC basics</h2>
<p><b>Alternating current</b>: charge carriers oscillate back and forth; the voltage polarity reverses periodically. Symbol “~”. The standard waveform is a <b>sine wave</b> (others: square, triangle, sawtooth). Parameters:</p>
<table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Amplitude / peak V_p</td><td>maximum instantaneous value</td></tr><tr><td>Peak-to-peak V_pp</td><td>2V_p</td></tr>
<tr><td>Period T / Frequency f</td><td>T = 1/f; f in hertz (Hz). US = 60 Hz (T = 16.7 ms); Europe/most = 50 Hz</td></tr>
<tr><td>RMS (“effective”) value</td><td>The DC value that delivers the same heating: V_rms = V_p/√2 ≈ 0.707V_p</td></tr>
<tr><td>Phase φ</td><td>time/angle offset between waveforms</td></tr></table>
<div class="box ex"><b>Example</b>US outlet: V_rms = 120 V → V_p = 120×1.414 = <b>169.7 V</b>, V_pp = <b>339 V</b>. A meter set to V~ reads <i>rms</i>. A 1500 W heater draws I = 1500/120 = 12.5 A (needs a 15 A/20 A circuit).</div>
<div class="box warn"><b>Careful</b>The rules <b>exclude “AC circuit theory, frequency analysis”</b> — you won't need phasors, impedance (X_L, X_C), resonance, or filters on the test. But <b>AC characteristics, sources, uses, hazards, and common household AC components are explicitly required</b>. Don't over-study phasors; do master rms/peak and household wiring.</div>
<h2>2. Sources and uses</h2>
<p><b>Sources:</b> alternators/AC generators (Faraday induction: rotating coil in a magnetic field — coal/gas/nuclear/hydro/wind turbines), inverters (DC→AC), function generators. <b>Uses:</b> power grid (long-distance via transformers: generation ~11–25 kV → 115–765 kV transmission → 4–35 kV distribution → 120/240 V), household appliances, induction motors, lighting, induction heating/cooking, wireless power/transformers.</p>
<div class="box hist"><b>History</b>Faraday (1831) induction → Pixii (1832) first hand-cranked generator → Tesla (1888) polyphase induction motor and AC system; Westinghouse commercialized; Steinmetz (1893) complex-number method for AC theory (phasors); <b>Hertz</b> (hertz unit) proved EM waves (1887).</div>
<h2>3. Household wiring (US)</h2>
<ul>
<li><b>Hot</b> (black, red, blue; carries 120 V rms relative to neutral) · <b>Neutral</b> (white; return path; bonded to ground at the service panel) · <b>Ground</b> (bare copper or green; safety path to earth, carries current only in a fault).</li>
<li><b>Outlets:</b> NEMA 5-15 (15 A, two flat slots + round ground); 5-20 (20 A has a T-shaped neutral slot). The <b>narrow</b> slot is hot, the <b>wide</b> slot neutral (polarized plug). <b>Ground pin</b> connects the metal case to earth so a short to the case trips the breaker instead of shocking you.</li>
<li><b>Split-phase 240 V:</b> two 120 V hots 180° apart; large loads (range, dryer, A/C, EV charger) use 240 V with less current for the same power.</li>
<li><b>Branch circuits:</b> lighting 15 A (14 AWG), outlets 15–20 A (12 AWG for 20 A), each outlet in <b>parallel</b>. Extension cord gauge must fit current &amp; length.</li>
<li><b>Switches:</b> must break the <b>hot</b> leg. <b>Three-way</b> (two SPDT switches in a “staircase” arrangement, two travelers) controls a light from two places; four-way adds a DPDT reversing switch in the middle.</li>
<li><b>Protection:</b> fuses, circuit breakers (thermal-magnetic), <b>GFCI</b> (ground-fault), <b>AFCI</b> (arc-fault) — see the control-devices lesson.</li>
<li><b>Plug types/voltages worldwide:</b> 120 V/60 Hz (USA, Canada, Japan 100 V/50-60 Hz), 230 V/50 Hz (Europe, India, UK, Australia 230 V). Adapters ≠ converters/transformers!</li></ul>
<h2>4. AC hazards</h2>
<ul><li><b>Shock:</b> 50–60 Hz is especially dangerous to the heart — ventricular fibrillation can occur at ~75–100 mA through the chest; <b>let-go threshold ≈ 10 mA</b> (tetany of muscles). Current depends on V / body R; wet conditions cut R to ~1 kΩ → 120 mA at 120 V.</li>
<li><b>Electrocution paths:</b> hand-to-hand, hand-to-foot worst. Ground faults through a person (“floating neutral”).</li>
<li><b>Arc flash / arc blast</b> in panels, fire from loose connections (high-R joint heating), overloaded extension cords/power strips, damaged insulation.</li>
<li><b>High-voltage lines:</b> never approach; step potential near a downed line; ladders and kites.</li>
<li><b>Induced voltages</b> near big lines; capacitors in AC equipment can hold charge.</li>
<li><b>Lightning</b> surges → surge protectors (MOVs).</li></ul>
<div class="box filter"><b>Tryout-filter</b>“A sine wave has peak 311 V. What does a meter on V~ read?” → 311/√2 = <b>220 V</b>. “What is the frequency if T = 20 ms?” → 50 Hz. “Why are fuses in the <i>hot</i> side?” → so the appliance is de-energized when the fuse opens.</div>`});
