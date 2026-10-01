/* ===== CIRCUIT LAB — Part 7: MOTORS, ELECTROMAGNETISM WORKBOOK, SOLVING CIRCUITS (second nature) ===== */

L({id:'c29', t:'Motors I: DC Motor Physics, Back-EMF, Torque & Efficiency', tier:'core', yield:3, min:60, off:'Topic 5 (motors & generators)',
formulas:[
 ['Motor model','Supply V = ε_back + I·R_a   (R_a = armature resistance)'],
 ['Back-EMF','ε_back = k_e·ω   (k_e in V·s/rad; ω = 2π·rpm/60)'],
 ['Torque','τ = k_t·I   (k_t = k_e in SI units)'],
 ['Stall (ω = 0)','I_stall = V/R_a;  τ_stall = k_t·V/R_a  (max torque, max current)'],
 ['No-load (ideal)','ω₀ = V/k_e;  I ≈ 0'],
 ['Mechanical power','P_mech = τ·ω = ε_back·I'],
 ['Losses','P_heat = I²R_a;  P_in = V·I = P_mech + P_heat'],
 ['Efficiency','η = P_mech/P_in = ε_back/V'],
 ['Max power','at ω = ω₀/2 (ε = V/2): P_max = V²/(4R_a), but η = 50 %'],
 ['Speed–torque line','ω = ω₀ − (R_a/k_e²)·τ  (straight line, falling)']],
html:`
<div class="box unv"><b>Why this lesson</b>Motors and generators are under the official “electromagnetism / motors” area and WILL appear, both as concepts (commutator, back-EMF) and as numbers (stall current, efficiency, speed under load). Master the single motor equation below and every question becomes a two-line calculation.</div>
<h2>1. The one equation</h2>
<p>A spinning motor is also a generator. Its turning armature produces a voltage ε_back that <b>opposes</b> the supply (Lenz). The armature is just a resistor R_a in series with that back-EMF:</p>
<div class="eq">V = ε_back + I·R_a    ⇒    I = (V − ε_back)/R_a</div>
<div class="box key"><b>Three facts follow</b>(1) Faster spin → bigger ε_back → <b>less</b> current. (2) Current sets torque (τ = k_t·I), so a fast, unloaded motor makes little torque. (3) A <b>stalled</b> motor has ε_back = 0, so I = V/R_a, the biggest current and biggest torque, and it overheats.</div>
<h2>2. Speed–torque–current triangle</h2>
<table><tr><th>Condition</th><th>ω</th><th>ε_back</th><th>I</th><th>τ</th></tr>
<tr><td>Stall (start-up / jammed)</td><td>0</td><td>0</td><td>V/R_a (max)</td><td>max</td></tr>
<tr><td>Heavy load</td><td>low</td><td>small</td><td>high</td><td>high</td></tr>
<tr><td>Half of no-load speed</td><td>ω₀/2</td><td>V/2</td><td>V/(2R_a)</td><td>τ_stall/2 (max power)</td></tr>
<tr><td>Light load</td><td>near ω₀</td><td>≈ V</td><td>small</td><td>small (max efficiency here)</td></tr>
<tr><td>Ideal no-load</td><td>ω₀</td><td>V</td><td>≈ 0</td><td>0</td></tr></table>
<p><b>Load up → motor slows → ε_back falls → current rises → torque rises</b> until torque balances the load. This self-regulation is why a motor draws more current when you hold its shaft.</p>
<h2>3. Worked example A — ideal motor</h2>
<div class="box ex"><b>12 V, R_a = 2 Ω, k_e = k_t = 0.0175 V·s/rad.</b><br>
Stall: I = 12/2 = <b>6 A</b>, τ = 0.0175×6 = <b>0.105 N·m</b>.<br>
No-load speed: ω₀ = 12/0.0175 = 686 rad/s = <b>6550 rpm</b>.<br>
Load torque 0.04 N·m: I = 0.04/0.0175 = 2.29 A; ε = 12 − 2.29×2 = 7.43 V; ω = 7.43/0.0175 = 424 rad/s = <b>4050 rpm</b>.<br>
P_in = 12×2.29 = 27.4 W; P_mech = 0.04×424 = 17.0 W; heat = 2.29²×2 = 10.4 W; η = 17.0/27.4 = <b>62 %</b> (= ε/V = 7.43/12 ✓).</div>
<h2>4. Worked example B — only the multimeter numbers</h2>
<div class="box ex">Running motor: supply 6.0 V, current 0.50 A. Shaft held (stall): 2.4 A. Find R_a, ε_back and efficiency.<br>
R_a = V/I_stall = 6.0/2.4 = <b>2.5 Ω</b>. ε_back = 6.0 − 0.50×2.5 = <b>4.75 V</b>. η = 4.75/6.0 = <b>79 %</b> (ignoring friction losses, which count as part of "mechanical").</div>
<h2>5. Reading the speed from back-EMF</h2>
<p>Speed ∝ ε_back. If ε_back drops from 9 V to 6 V the motor runs at 2/3 of its speed. Speed also ∝ supply voltage when the load is light: halve V, halve the speed.</p>
<div class="box hw"><b>Hands-on checks</b>Measure supply V and I with the shaft free, then pinched by hand (briefly!). Current rises when loaded. Swap the battery leads: direction reverses. Spin the shaft by hand with an LED across the terminals: it lights (generator action).</div>
<div class="box filter"><b>Common test questions</b>“When is motor current largest?” → at start / stall. “What limits the current in a running motor?” → back-EMF plus R_a. “A motor is jammed; why does it burn out?” → I = V/R_a, all of it heat. “Which is bigger, P_in or P_out?” → P_in (η &lt; 1).</div>`});

L({id:'c30', t:'Motors II: Motor Types, Control (PWM, H-bridge), Gears, Generators & Building', tier:'core', yield:3, min:55, off:'Topic 5 (motors & generators)',
formulas:[
 ['PWM average','V_avg = V_supply × duty cycle'],
 ['Gear ratio (ideal)','ω_out = ω_in/N;  τ_out = N·τ_in  (N = driven/driver teeth)'],
 ['Sync speed (AC)','n_s = 120·f/poles (rpm)'],
 ['Induction slip','s = (n_s − n)/n_s;  rotor speed n = n_s(1 − s)'],
 ['Stepper','step angle = 360°/steps per rev (200 steps → 1.8°)'],
 ['Generator EMF','ε_max = N·B·A·ω;  ε_rms = ε_max/√2'],
 ['Motor as generator','Open-circuit voltage ∝ speed: ε = k_e·ω'],
 ['Reverse direction','reverse V polarity (DC) or swap two phases (3-phase AC)']],
html:`
<h2>1. Motor families</h2>
<table><tr><th>Type</th><th>How it works</th><th>Key facts to remember</th></tr>
<tr><td>Brushed DC (permanent magnet)</td><td>commutator + brushes flip coil current each half turn</td><td>cheap; speed ∝ V; reverses with V; brushes wear, spark</td></tr>
<tr><td>Brushless DC (BLDC)</td><td>magnets on rotor; electronics switch the stator coils</td><td>no brushes, efficient, long life; needs a controller (drones, fans, hard drives)</td></tr>
<tr><td>Universal (series-wound)</td><td>field coil in series with armature</td><td>runs on AC or DC; very high speed; drills, blenders, vacuums</td></tr>
<tr><td>AC induction (Tesla, 1888)</td><td>rotating stator field induces current in rotor; rotor always lags ("slip")</td><td>no brushes, rugged; industrial work-horse; speed slightly below sync</td></tr>
<tr><td>Synchronous</td><td>rotor locks to the rotating field</td><td>speed exactly 120f/poles; clocks, turntables</td></tr>
<tr><td>Stepper</td><td>coils energised in sequence; rotor moves one step each pulse</td><td>open-loop position control (3D printers); 200 steps/rev = 1.8°</td></tr>
<tr><td>Servo</td><td>motor + gears + position sensor + feedback</td><td>holds an angle; hobby servo uses PWM pulse of 1–2 ms every 20 ms</td></tr>
<tr><td>Homopolar (Faraday 1831)</td><td>current radially through a disc/wire in an axial B field</td><td>simplest motor: battery + magnet + screw + wire</td></tr></table>
<h2>2. Speed and direction control</h2>
<ul><li><b>Voltage control:</b> speed ∝ V (light load). A resistor in series wastes power as heat.</li><li><b>PWM:</b> switch the supply on and off fast. Average voltage = duty × V. 25 % duty on 12 V ≈ 3 V. Efficient because the switch is either fully on or fully off.</li><li><b>H-bridge:</b> four switches (or a DPDT switch) that connect the motor either way round: forward, reverse, brake (both bottom switches closed), coast (all open).</li><li><b>Flyback diode</b> across the motor (reverse-biased): absorbs the inductive spike when the current is interrupted, protecting the transistor/relay.</li></ul>
<div class="box key"><b>DPDT reversing switch</b>Cross-wire the two poles: in one position the motor sees +/−; flipped, it sees −/+. This is the standard hands-on way to reverse a DC motor.</div>
<h2>3. Gears (ideal)</h2>
<p>Gears trade speed for torque. A 5:1 reduction divides speed by 5 and multiplies torque by 5 (power stays equal, minus friction). Motor 3000 rpm, 0.1 N·m → output 600 rpm, 0.5 N·m. Direction reverses with each meshing pair.</p>
<h2>4. AC motors: synchronous speed and slip</h2>
<div class="box ex"><b>Example</b>4-pole motor on 60 Hz: n_s = 120×60/4 = <b>1800 rpm</b>. An induction motor at 1710 rpm has slip = (1800 − 1710)/1800 = <b>5 %</b>. A 2-pole synchronous motor on 60 Hz turns exactly 3600 rpm.</div>
<h2>5. Generators and alternators</h2>
<p>A motor run backward. Spin a coil in a magnet: ε = N·B·A·ω·sin(ωt). <b>Slip rings</b> give AC (alternator); a <b>commutator</b> gives pulsating DC (dynamo). Example: N = 100, B = 0.2 T, A = 0.01 m², 60 Hz (ω = 377 rad/s): ε_max = 100×0.2×0.01×377 = <b>75.4 V</b>, ε_rms = <b>53.3 V</b>. Double the speed: double the voltage <i>and</i> the frequency. Loading a generator makes it harder to turn (Lenz).</p>
<h2>6. Build and test (hands-on)</h2>
<ul><li><b>Simple homopolar motor:</b> AA cell, a neodymium magnet stuck on the negative end, a bare copper wire bent into a loop touching the positive end and the magnet. It spins. Reverse the magnet, it reverses.</li><li><b>Speed check:</b> add a second battery in series: faster. Add a load: slower, hotter, more current.</li><li><b>Efficiency check:</b> efficiency = mechanical out/electrical in. Measure V×I for the input, compute mechanical power from lifting a weight: P = m·g·h/t.</li></ul>
<div class="box filter"><b>Common test questions</b>“What does the commutator do?” → reverses coil current every half turn. “How do you reverse a DC motor?” → reverse polarity. “How do you slow it efficiently?” → PWM. “Why add a diode across a motor?” → flyback protection. “Which motor keeps exact speed?” → synchronous. “What is slip?” → fractional speed lag of an induction rotor.</div>`});

L({id:'c31', t:'Motors & Generators: Worked Problem Workbook', tier:'adv', yield:3, min:50, off:'Topic 5 practice',
formulas:[
 ['Motor','V = ε + I R;  τ = k I;  ε = k ω;  P_mech = ε I;  η = ε/V'],
 ['Energy in a lift','P_mech = m g v (constant speed)'],
 ['Generator','ε_max = N B A ω;  ε_rms = 0.707 ε_max'],
 ['Electrical energy','E = P·t;  kWh = kW × h']],
html:`
<div class="box unv"><b>How to use</b>Cover the solution, solve on paper, then check. Every problem follows: (1) write what is known, (2) pick the equation, (3) units, (4) sanity check (is efficiency &lt; 100 %? is current &lt; V/R?).</div>
<h2>Problems with full solutions</h2>
<div class="box ex"><b>P1 (stall).</b> A 9 V toy motor has R_a = 1.5 Ω. Stall current and power dissipated if jammed?<br>I = 9/1.5 = <b>6 A</b>; P = I²R = 36×1.5 = <b>54 W</b> (all heat). It overheats fast.</div>
<div class="box ex"><b>P2 (back-EMF).</b> A 24 V motor, R_a = 4 Ω, draws 1.5 A at steady speed. Back-EMF and efficiency?<br>ε = 24 − 1.5×4 = <b>18 V</b>; η = 18/24 = <b>75 %</b>; P_mech = 18×1.5 = 27 W.</div>
<div class="box ex"><b>P3 (speed ratio).</b> Same motor: loaded until the current is 3.0 A. New speed as a fraction of the old?<br>ε = 24 − 3×4 = 12 V. Speed ∝ ε, so 12/18 = <b>2/3</b> of the original.</div>
<div class="box ex"><b>P4 (max power).</b> For P1's motor, at what back-EMF is the mechanical power greatest, and how much?<br>ε = V/2 = 4.5 V. I = (9 − 4.5)/1.5 = 3 A. P_max = 4.5×3 = <b>13.5 W</b> = V²/(4R) = 81/6 ✓; efficiency <b>50 %</b>.</div>
<div class="box ex"><b>P5 (lifting).</b> A motor lifts a 2.0 kg mass 1.5 m in 3.0 s at constant speed from a 6 V supply drawing 2.0 A. Efficiency? (g = 9.8)<br>P_mech = mgh/t = 2×9.8×1.5/3 = 9.8 W. P_in = 6×2 = 12 W. η = <b>82 %</b>.</div>
<div class="box ex"><b>P6 (gears).</b> Motor 4000 rpm, 0.05 N·m drives a 20:1 reduction. Output speed and torque (ideal)?<br>200 rpm; 0.05×20 = <b>1.0 N·m</b>.</div>
<div class="box ex"><b>P7 (PWM).</b> 12 V supply, 40 % duty cycle, motor resistance 4 Ω treated as a resistor. Average power?<br>Approximation for a resistive load: P = duty × V²/R = 0.4×144/4 = <b>14.4 W</b>. (Average voltage = 4.8 V; don't compute V_avg²/R, that gives 5.8 W. Power is not linear in voltage.)</div>
<div class="box ex"><b>P8 (generator).</b> A 200-turn coil, area 0.005 m², in a 0.3 T field spins at 1800 rpm. Peak and RMS voltage?<br>ω = 2π×30 = 188.5 rad/s. ε_max = 200×0.3×0.005×188.5 = <b>56.5 V</b>; rms = <b>40.0 V</b>; f = 30 Hz.</div>
<div class="box ex"><b>P9 (energy cost).</b> A 600 W motor runs 5 h a day for 30 days at $0.15/kWh.<br>0.6 kW × 150 h = 90 kWh → <b>$13.50</b>.</div>
<div class="box ex"><b>P10 (reasoning).</b> A running motor draws 0.3 A. Stalled, it draws 4 A. Is the running back-EMF closer to V or to 0?<br>ε = V(1 − 0.3/4) = 0.925 V. <b>Close to V</b>: the motor is lightly loaded and efficient.</div>
<h2>Quick rules that save time</h2>
<ul><li>I/I_stall = 1 − ε/V = 1 − ω/ω₀. Use this ratio to skip resistances.</li><li>Efficiency = ε/V for an ideal motor; it climbs as the load gets lighter.</li><li>Power is <b>not</b> linear in duty cycle average voltage for a resistor.</li></ul>`});

L({id:'c32', t:'Electromagnetism Workbook: Fields, Forces, Induction, Lenz & Transformers', tier:'adv', yield:3, min:60, off:'Topic 5 practice',
formulas:[
 ['Wire B','B = μ₀I/(2πr);  μ₀ = 4π×10⁻⁷ T·m/A'],
 ['Solenoid B','B = μ₀nI  (n = turns per metre)'],
 ['Force on wire','F = B·I·L·sinθ'],
 ['Force on charge','F = q·v·B·sinθ;  circular path r = m·v/(qB)'],
 ['Flux','Φ = B·A·cosθ  (weber, Wb)'],
 ['Faraday','ε = −N·ΔΦ/Δt;  motional ε = B·L·v'],
 ['Transformer','V_s/V_p = N_s/N_p;  I_s/I_p = N_p/N_s;  P_in ≈ P_out'],
 ['Lenz','induced current opposes the CHANGE in flux']],
html:`
<div class="box unv"><b>Priority</b>Electromagnetism (currents making fields, fields pushing currents, changing flux making voltage) is on the event. This workbook drills it with numbers and directions. Pure permanent-magnet trivia (c11 sections 1, 6) is lowest priority.</div>
<h2>A. Directions (right-hand rules)</h2>
<ul><li><b>Wire:</b> thumb along I, fingers curl the way B circles.</li><li><b>Coil / solenoid:</b> fingers curl along the current, thumb points to the N end.</li><li><b>Force on current or charge:</b> fingers along v (or I), curl toward B, thumb gives F (for a positive charge; reverse for electron).</li><li><b>Lenz:</b> if flux through a loop is increasing, the induced current makes a field pointing the other way; if decreasing, the induced field points the same way.</li></ul>
<h2>B. Worked problems</h2>
<div class="box ex"><b>E1.</b> B at 2 cm from a long wire carrying 10 A?<br>B = 2×10⁻⁷×10/0.02 = <b>1.0×10⁻⁴ T (100 μT)</b> (about twice Earth's field).</div>
<div class="box ex"><b>E2.</b> Solenoid, 2000 turns/m, 0.5 A, iron-free?<br>B = 4π×10⁻⁷×2000×0.5 = <b>1.26×10⁻³ T</b>. Iron core of μ_r = 500 multiplies it to 0.63 T.</div>
<div class="box ex"><b>E3.</b> A 0.30 m wire carries 5 A at 30° to a 0.4 T field. Force?<br>F = 0.4×5×0.3×sin30° = <b>0.30 N</b>.</div>
<div class="box ex"><b>E4.</b> A proton (1.67×10⁻²⁷ kg) enters a 0.1 T field at 2×10⁶ m/s ⟂ B. Force and radius?<br>F = 1.6×10⁻¹⁹×2×10⁶×0.1 = <b>3.2×10⁻¹⁴ N</b>; r = mv/(qB) = <b>0.21 m</b>. Speed is unchanged (force ⟂ v does no work).</div>
<div class="box ex"><b>E5.</b> Loop 0.10 × 0.20 m in B = 0.5 T, normal at 60° to B. Flux?<br>Φ = 0.5×0.02×cos60° = <b>5.0×10⁻³ Wb</b>.</div>
<div class="box ex"><b>E6.</b> 50-turn coil, flux falls from 4 mWb to 0 in 0.2 s. EMF?<br>ε = 50×0.004/0.2 = <b>1.0 V</b>.</div>
<div class="box ex"><b>E7.</b> A rod 0.5 m long slides at 4 m/s on rails in a 0.3 T field (⟂). EMF? With a 2 Ω circuit, current and force needed to keep moving?<br>ε = BLv = 0.3×0.5×4 = <b>0.6 V</b>; I = 0.3 A; F = BIL = 0.3×0.3×0.5 = <b>0.045 N</b>. Check energy: Fv = 0.18 W = I²R = 0.09×2 = 0.18 W ✓.</div>
<div class="box ex"><b>E8 (transformer).</b> 120 V, N_p = 200, N_s = 50, 10 Ω load.<br>V_s = 30 V; I_s = 3 A; P = 90 W; I_p = 0.75 A. It is a <b>step-down</b>.</div>
<div class="box ex"><b>E9 (Lenz).</b> The N pole of a bar magnet moves toward a coil. Which face of the coil facing the magnet becomes what?<br>Flux into the coil increases → coil opposes it → its near face becomes <b>N</b> (repels). Pull the magnet away → near face becomes S (attracts). The coil always resists the motion; that is why generators need effort.</div>
<div class="box ex"><b>E10 (power lines).</b> 100 kW sent through lines of 2 Ω total. At 1 kV vs 10 kV?<br>1 kV: I = 100 A, loss = 10⁴×2 = 20 kW (20 %). 10 kV: I = 10 A, loss = 200 W (0.2 %).</div>
<h2>C. Conceptual traps</h2>
<ul><li>A steady current through a coil next to a second coil induces nothing. Only <b>changing</b> flux induces EMF. DC cannot drive a transformer.</li><li>Transformers change V and I, not power or frequency.</li><li>Magnetic force does no work on a charge; it only bends the path.</li><li>B from a solenoid depends on n and I, not coil diameter.</li><li>Doubling the speed of a generator doubles its voltage and frequency.</li></ul>`});

L({id:'c33', t:'Solving Circuits I: The Method, Series–Parallel Reduction & Shortcuts', tier:'core', yield:3, min:60, off:'Topics 1–3 (circuit analysis)',
formulas:[
 ['Series','R = R₁+R₂+…;  same I;  V divides ∝ R'],
 ['Parallel','1/R = Σ1/R_i;  same V;  I divides ∝ 1/R'],
 ['Two parallel','R = R₁R₂/(R₁+R₂)'],
 ['n equal in parallel','R/n'],
 ['Divider','V_out = V·R₂/(R₁+R₂);  I₁ = I·R₂/(R₁+R₂)'],
 ['Ohm + power','V = IR;  P = VI = I²R = V²/R'],
 ['Infinite ladder (R series, R shunt)','R_eq = R(1+√5)/2 ≈ 1.618R'],
 ['Cube, edge R','opposite corners 5R/6; face diagonal 3R/4; adjacent 7R/12']],
html:`
<div class="box unv"><b>Goal: second nature</b>You want to look at a circuit and know what to do within 10 seconds. Follow this routine EVERY time until it is automatic. Then the tests stop feeling hard.</div>
<h2>1. The 6-step routine</h2>
<ol><li><b>Redraw</b> if it is messy. Put the source on the left, ground at the bottom.</li><li><b>Label</b> every node (same-wire points are one node) and every resistor.</li><li><b>Collapse</b> from the far end toward the source: parallel pairs first, then series.</li><li><b>Solve</b> the total: I_total = V/R_total.</li><li><b>Expand back</b>: use dividers (or V = IR) to find each branch.</li><li><b>Check</b>: KCL at a node, KVL around a loop, total power supplied = total power dissipated.</li></ol>
<div class="box key"><b>How to tell series from parallel</b>Series: the SAME current must pass through both (nothing branches between). Parallel: both connect to the SAME two nodes. If you cannot tell, trace a wire: change colour pencil each time you pass a node.</div>
<h2>2. Worked example 1</h2>
<div class="box ex">12 V source, R₁ = 4 Ω in series with (R₂ = 6 Ω ∥ R₃ = 12 Ω).<br>6∥12 = 72/18 = 4 Ω. R_total = 4 + 4 = 8 Ω. I = 12/8 = 1.5 A.<br>V across R₁ = 6 V; V across the parallel pair = 6 V. I₂ = 6/6 = 1 A, I₃ = 6/12 = 0.5 A (sum 1.5 ✓).<br>Power: 12×1.5 = 18 W = 1.5²×4 + 6²/6 + 6²/12 = 9 + 6 + 3 ✓.</div>
<h2>3. Shortcuts worth memorising</h2>
<ul><li><b>Equal resistors:</b> series = nR, parallel = R/n.</li><li><b>Two unequal in parallel:</b> the result is always smaller than the smaller one; if one is 10× the other, R ≈ the small one.</li><li><b>Ratios:</b> R₁ = 2R₂ in parallel → R = (2/3)R₂. 3:1 → 0.75R₂.</li><li><b>Short circuit:</b> a wire across a resistor removes it (no current through it).</li><li><b>Open circuit:</b> a resistor connected at only one end carries no current; ignore it.</li><li><b>Dead-end branch:</b> remove it.</li><li><b>Divider by inspection:</b> the biggest resistor gets the biggest share of the voltage, but the smallest gets the biggest share of the current.</li><li><b>Balanced bridge:</b> if R₁/R₃ = R₂/R₄ the middle resistor carries 0 A; delete it.</li></ul>
<h2>4. Symmetry tricks</h2>
<p>Points at the same potential can be joined (or separated) without changing anything. Cube of 1 Ω edges: between opposite corners R = 5/6 Ω by symmetry (three groups of equipotential nodes). Infinite ladder: call the unknown R_eq, note that adding one more section changes nothing: R_eq = R + R·R_eq/(R + R_eq). Solve: R_eq² − R·R_eq − R² = 0 → 1.618R.</p>
<h2>5. Worked example 2 (nested)</h2>
<div class="box ex">R₁ = 2 Ω in series with [R₂ = 6 Ω ∥ (R₃ = 1 Ω + R₄ = 2 Ω)] connected to 12 V.<br>R₃+R₄ = 3 Ω; 6∥3 = 2 Ω; R_total = 4 Ω; I = 3 A.<br>V(parallel) = 3×2 = 6 V. I₂ = 1 A, I through R₃,R₄ = 2 A. V(R₃) = 2 V, V(R₄) = 4 V (6 ✓).</div>
<h2>6. Ammeters, voltmeters, batteries</h2>
<ul><li>Ideal ammeter = 0 Ω (a wire). Ideal voltmeter = ∞ Ω (removed). Replace them this way to solve, then read the value.</li><li>Real battery: V_terminal = ε − I·r. Treat r as a resistor in series and solve normally.</li><li>Current source: its current is fixed; its voltage is whatever it must be.</li></ul>
<div class="box filter"><b>Drill protocol</b>Do 5 series–parallel reductions a day (use the Drill page, topic c33), timing yourself. Target: under 60 s each with no mistakes. Always finish with a check.</div>`});

L({id:'c34', t:'Solving Circuits II: Nodal Analysis (KCL), Step by Step', tier:'adv', yield:3, min:55, off:'Circuit analysis methods',
formulas:[
 ['KCL at a node','Σ currents leaving = 0:  Σ (V_node − V_neighbour)/R = 0'],
 ['Current source','enters the KCL equation directly (into node = −, out = +, in "leaving" form)'],
 ['Supernode','a voltage source between two non-ground nodes: combine them and add V_a − V_b = V_s'],
 ['Ground','pick the node with the most connections (often the source − terminal) as 0 V'],
 ['Count','unknowns = nodes − 1 (− voltage sources touching ground)']],
html:`
<div class="box unv"><b>When to use it</b>Series–parallel collapse fails when there is a bridge, several sources, or you need an internal voltage. Nodal analysis always works: it is bookkeeping, not cleverness.</div>
<h2>1. The recipe</h2>
<ol><li>Choose ground (0 V).</li><li>Name the unknown node voltages (A, B, …). A node tied to ground through a voltage source is already known.</li><li>For each unknown node write: <code>Σ (V_node − V_other)/R = 0</code> with the node's OWN voltage first in every term. Each resistor touching the node gives one term.</li><li>Multiply through by a common denominator to clear fractions.</li><li>Solve the linear equations (substitution or add/subtract).</li><li>Find currents with I = ΔV/R. Check KCL at a node you did not use.</li></ol>
<h2>2. Example 1 (one unknown)</h2>
<div class="box ex">12 V source — 2 Ω — node A. From A: 6 Ω to ground, and (1 Ω + 2 Ω in series) to ground.<br>Equation at A: (A − 12)/2 + A/6 + A/3 = 0. Multiply by 6: 3A − 36 + A + 2A = 0 → A = 6 V. (Matches the collapse method: 6 ∥ 3 = 2 Ω, equal to 2 Ω, so A = half of 12.)</div>
<h2>3. Example 2 (two unknowns, ladder)</h2>
<div class="box ex">12 V — R₁ = 2 Ω — A; A — 6 Ω — ground; A — R₃ = 1 Ω — B; B — R₄ = 2 Ω — ground.<br>A: (A−12)/2 + A/6 + (A−B)/1 = 0. B: (B−A)/1 + B/2 = 0 → B = (2/3)A.<br>Sub: 3(A−12) + A + 6A − 6B = 0 → 10A − 36 − 4A = 0 → <b>A = 6 V, B = 4 V</b>.<br>Currents: I(R₁) = 3 A, I(6 Ω) = 1 A, I(R₃) = 2 A = I(R₄) ✓ (KCL at A: 3 = 1 + 2).</div>
<h2>4. Example 3 (with a current source)</h2>
<div class="box ex">12 V — 3 Ω — A; A — 6 Ω — ground; A — 2 Ω — B; B — 4 Ω — ground; a 3 A current source pushes current INTO B.<br>A: (A−12)/3 + A/6 + (A−B)/2 = 0 → 6A − 3B = 24 → 2A − B = 8.<br>B: (B−A)/2 + B/4 = 3 (source current enters, so leaving currents total 3 in the "=" form) → 3B − 2A = 12.<br>From 2A − B = 8, B = 2A − 8. Substitute: 3(2A − 8) − 2A = 12 → 4A = 36 → <b>A = 9 V, B = 10 V</b>.<br>Check A: −1 + 1.5 − 0.5 = 0 ✓.</div>
<h2>5. Supernode</h2>
<p>If a voltage source sits <i>between</i> two non-ground nodes, you do not know the current through it. Treat the two nodes as one "supernode": write KCL for the pair together (sum of resistor currents leaving both = 0) and add <code>V_a − V_b = V_source</code>.</p>
<h2>6. Sanity checks</h2>
<ul><li>Node voltages must lie between the supply rails (unless there are current sources).</li><li>A node between two equal resistors to the same two rails sits halfway.</li><li>Current flows from higher to lower node voltage through a resistor.</li></ul>
<div class="box filter"><b>Tryout-filter</b>“Write the nodal equation for node B” → Σ(V_B − neighbour)/R = injected current. “How many independent equations?” → nodes − 1.</div>`});

L({id:'c35', t:'Solving Circuits III: Mesh, Superposition, Source Transformation, Thévenin & Max Power', tier:'adv', yield:3, min:70, off:'Circuit analysis methods',
formulas:[
 ['Mesh (KVL)','Σ V_rises = Σ I·R around each loop; shared R carries (I₁ − I₂)'],
 ['Superposition','turn off all but one source (V → short, I → open); add the results'],
 ['Source transform','V_s in series with R ⇄ I_N = V_s/R in parallel with R'],
 ['Thévenin','V_th = open-circuit voltage;  R_th = resistance seen with sources off'],
 ['Norton','I_N = V_th/R_th;  R_N = R_th'],
 ['Load current','I_L = V_th/(R_th + R_L)'],
 ['Max power transfer','R_L = R_th;  P_max = V_th²/(4R_th);  η = 50 %']],
html:`
<h2>1. Mesh analysis (KVL)</h2>
<p>Assign a clockwise current to each window. Around each: sum of source rises = sum of I·R drops, with shared resistors seeing the <b>difference</b> of the two mesh currents.</p>
<div class="box ex"><b>Example.</b> 10 V source with R₁ = 1 Ω in mesh 1; R₂ = 2 Ω shared; R₃ = 6 Ω in mesh 2.<br>Mesh 1: 10 = 1·I₁ + 2(I₁ − I₂) → 3I₁ − 2I₂ = 10.<br>Mesh 2: 0 = 2(I₂ − I₁) + 6I₂ → 8I₂ = 2I₁ → I₁ = 4I₂.<br>12I₂ − 2I₂ = 10 → <b>I₂ = 1 A, I₁ = 4 A</b>. Shared R₂ carries 3 A. Checks: V(R₂) = 6 V = V(R₃) ✓; 4 + 6 = 10 ✓.</div>
<p>Mesh is best when sources are voltage sources and there are few windows. Nodal is best with many parallel branches or current sources.</p>
<h2>2. Superposition</h2>
<p>For a <b>linear</b> circuit, the effect of several sources is the sum of each alone. Kill the others: voltage source → replaced by a <b>wire</b>; current source → <b>open</b>. Never use it for power (P is not linear).</p>
<div class="box ex">12 V through 4 Ω and 6 V through 12 Ω both feed node A, which has 6 Ω to ground.<br>12 V alone: A = 12×(12∥6 = 4)/(4 + 4) = 6 V. 6 V alone: A = 6×(4∥6 = 2.4)/(12 + 2.4) = 1 V. Total <b>A = 7 V</b> (nodal check: (A−12)/4 + (A−6)/12 + A/6 = 0 → 6A = 42 ✓).</div>
<h2>3. Source transformation</h2>
<p>A voltage source with a series resistor is equivalent to a current source I = V/R with the same resistor in parallel, and vice versa. Use it to merge parallel sources: 12 V + 4 Ω ⇄ 3 A ∥ 4 Ω. Two 3 A sources in parallel add; parallel resistors combine; then transform back.</p>
<h2>4. Thévenin / Norton: the 4-step routine</h2>
<ol><li>Remove the load, mark terminals a and b.</li><li>V_th: find the open-circuit voltage a–b (divider or nodal).</li><li>R_th: turn sources off (V → wire, I → open) and find the resistance between a and b.</li><li>Redraw V_th — R_th — load and use I = V_th/(R_th + R_L).</li></ol>
<div class="box ex">12 V — 4 Ω — a; 12 Ω from a to b (and b to the − terminal). Load 6 Ω between a and b.<br>V_th = 12×12/16 = <b>9 V</b>. R_th = 4∥12 = <b>3 Ω</b>. I_L = 9/(3 + 6) = <b>1 A</b>; V_L = <b>6 V</b>. Power in load 6 W.</div>
<h2>5. Maximum power transfer</h2>
<p>A source with R_th delivers most power to a load when R_L = R_th. In the example above: R_L = 3 Ω, I = 1.5 A, P_max = 9²/(4×3) = <b>6.75 W</b> (vs 6 W at 6 Ω). Efficiency at that point is only 50 % (half the power is lost in R_th). Power lines and batteries are designed for high efficiency, not maximum power.</p>
<h2>6. Choosing a method</h2>
<table><tr><th>Situation</th><th>Use</th></tr>
<tr><td>Plain series/parallel, one source</td><td>collapse + dividers</td></tr>
<tr><td>Bridge, several nodes</td><td>nodal (or Δ–Y)</td></tr>
<tr><td>Several voltage sources, few loops</td><td>mesh</td></tr>
<tr><td>Several sources, want each one's effect</td><td>superposition</td></tr>
<tr><td>Many different loads on one network</td><td>Thévenin</td></tr>
<tr><td>Parallel sources to merge</td><td>source transform</td></tr></table>`});

L({id:'c36', t:'Solving Circuits IV: Speed, Sanity Checks & the Second-Nature Drill Plan', tier:'adv', yield:3, min:45, off:'Circuit analysis fluency',
formulas:[
 ['Sanity: KCL','currents in = currents out at every node'],
 ['Sanity: KVL','voltage rises = drops around every loop'],
 ['Sanity: power','P_supplied = ΣP_dissipated'],
 ['RC time constant','τ = RC;  V(t) = V(1 − e^(−t/τ));  5τ ≈ done'],
 ['Steady-state DC','capacitor = open; inductor = wire'],
 ['LED resistor','R = (V_s − V_f)/I'],
 ['Wire R','R = ρL/A']],
html:`
<h2>1. Why it feels hard, and the fix</h2>
<p>Circuit problems feel hard because people try to see the answer at once. The fix is a fixed routine (c33) so the brain only handles one small step at a time. Speed comes from repetition of the routine, not from skipping it.</p>
<h2>2. Fast patterns you should recognise instantly</h2>
<table><tr><th>Pattern</th><th>Instant result</th></tr>
<tr><td>Two equal resistors R in parallel</td><td>R/2</td></tr>
<tr><td>R and 2R in parallel</td><td>2R/3</td></tr>
<tr><td>R and 3R in parallel</td><td>3R/4</td></tr>
<tr><td>R ∥ R ∥ R</td><td>R/3</td></tr>
<tr><td>Equal divider (two equal R in series)</td><td>half the voltage</td></tr>
<tr><td>Short across a resistor</td><td>resistor carries 0 A</td></tr>
<tr><td>Wire around the whole load</td><td>source shorted: huge current</td></tr>
<tr><td>Balanced bridge</td><td>middle branch 0 A</td></tr>
<tr><td>Capacitor, DC steady state</td><td>open circuit</td></tr>
<tr><td>Inductor, DC steady state</td><td>short</td></tr>
<tr><td>Capacitor at t = 0 (uncharged)</td><td>short</td></tr>
<tr><td>Ammeter / voltmeter</td><td>wire / open</td></tr></table>
<h2>3. The 30-second estimate</h2>
<p>Before calculating, estimate: Is R_total bigger or smaller than the largest branch? (Series: bigger. Parallel: smaller than the smallest.) Is the answer &lt; V/R_min? An answer outside those bounds is wrong. Catching that takes 5 s and saves the whole question.</p>
<h2>4. Steady-state circuits with capacitors</h2>
<div class="box ex">12 V — 4 Ω — node — 8 Ω to ground, and a 100 μF capacitor from the node to ground. At steady state: capacitor is open, so node = 12×8/12 = <b>8 V</b> and the capacitor holds 8 V, Q = CV = 800 μC, energy ½CV² = 3.2 mJ. Time constant uses R_th seen by the capacitor: 4∥8 = 2.67 Ω → τ = 267 μs.</div>
<h2>5. Timed drill plan (daily)</h2>
<ul><li><b>Week 1:</b> 5 series–parallel reductions/day (c33). Target &lt; 60 s each.</li><li><b>Week 2:</b> 3 nodal + 3 mesh/day (c34, c35). Always check with KCL.</li><li><b>Week 3:</b> 2 Thévenin + 2 superposition + 2 max-power/day.</li><li><b>Week 4:</b> mixed timed sets (Drill page, circuit, mixed). Redo every wrong answer the next day.</li></ul>
<div class="box key"><b>Error log</b>Write the cause of every mistake in one word: <i>arithmetic</i>, <i>sign</i>, <i>series/parallel</i>, <i>units</i>, <i>method</i>. After a week, fix the most common one first.</div>
<h2>6. Common mistakes</h2>
<ul><li>Forgetting that R_total of parallel &lt; smallest.</li><li>Using V across the whole network for a single resistor.</li><li>Sign errors in KVL: choose a direction and stick to it; a negative answer just means the current goes the other way.</li><li>Mixing mA, kΩ and V: convert to base units (or use mA with kΩ).</li><li>Adding parallel resistor values directly.</li><li>Using superposition on power.</li></ul>`});
