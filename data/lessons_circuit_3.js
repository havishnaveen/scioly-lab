/* ===== CIRCUIT LAB — Part 3: magnetism, electromagnets, transformers, motors/generators, control devices, diagrams ===== */

L({id:'c11', t:'Magnetism: Poles, Fields, Flux, Right-Hand Rules & Forces', tier:'core', yield:3, min:55, off:'Topic 5',
formulas:[
 ['Field of long straight wire','B = μ₀I/(2πr)   (μ₀ = 4π×10⁻⁷ T·m/A)'],
 ['Field at center of a loop','B = μ₀I/(2R);   N turns: μ₀NI/(2R)'],
 ['Solenoid','B = μ₀nI = μ₀NI/L   (n = turns per meter); with core: B = μ₀μ_r nI'],
 ['Force on a wire','F = B·I·L·sinθ'],
 ['Force on a moving charge','F = q·v·B·sinθ'],
 ['Magnetic flux','Φ = B·A·cosθ  (weber, Wb = T·m²)'],
 ['Units','1 T = 1 Wb/m² = 1 N/(A·m);  1 gauss = 10⁻⁴ T'],
 ['Earth’s field','≈ 25–65 μT (0.25–0.65 G)']],
html:`<div class="box unv"><b>Priority: permanent-magnet magnetism is lowest priority.</b> Electromagnetism (c12, c13, c14, c29–c32) is on the event. Learn sections 3–5 here (right-hand rules, force, flux); skim sections 1 and 6.</div>

<h2>1. Magnetic poles and fields</h2>
<p>Every magnet has a <b>north</b> and <b>south</b> pole; <b>like poles repel, unlike attract</b>; poles can't be isolated (cut a magnet → two smaller magnets; no magnetic monopoles found). Field lines exit N and enter S <b>outside</b> the magnet (closed loops continue inside S→N). A compass needle's N-seeking end points to Earth's <b>geographic</b> north — which is a magnetic <b>south</b> pole! (Earth's field: declination differs from true north.) Field lines never cross; denser = stronger.</p>
<table><tr><th>Material type</th><th>Behavior</th><th>Examples</th></tr>
<tr><td>Ferromagnetic</td><td>strongly attracted, can be permanent magnets, Curie temp.</td><td>iron, nickel, cobalt, gadolinium, steel, alnico</td></tr>
<tr><td>Paramagnetic</td><td>weakly attracted</td><td>aluminum, platinum, oxygen</td></tr>
<tr><td>Diamagnetic</td><td>weakly repelled</td><td>copper, gold, water, bismuth, graphite</td></tr></table>
<p><b>Domains:</b> tiny aligned regions in ferromagnets; magnetizing aligns them. Heat above the <b>Curie temperature</b> (iron 770 °C), hammering, or AC demagnetizing randomizes them. <b>Permanent magnet types:</b> alnico, ferrite/ceramic, samarium-cobalt, <b>neodymium (NdFeB)</b> — strongest; pinch/crush/swallow hazards.</p>

<h2>2. Oersted’s discovery (1820)</h2>
<p><b>Hans Christian Ørsted</b> noticed a current-carrying wire deflects a compass needle: electricity produces magnetism. Within weeks <b>André-Marie Ampère</b> showed parallel currents attract (same direction) / repel (opposite), gave the force law between wires, and founded electrodynamics. <b>Faraday</b> (1831) found the converse: changing magnetic flux produces voltage.</p>

<h2>3. Right-hand rules (memorize ALL three)</h2>
<div class="box key">
<b>RHR #1 — Straight wire:</b> thumb = direction of conventional current; fingers curl in the direction of B (circles around the wire).<br>
<b>RHR #2 — Coil/solenoid/electromagnet:</b> curl fingers in the direction of current around the loops; thumb points to the <b>north</b> pole of the coil (direction of B inside).<br>
<b>RHR #3 — Force (motor rule):</b> fingers = B direction, thumb = current (or v for +charge), <b>palm pushes</b> = force direction. Equivalent: <b>F = I L × B</b> (cross product). For negative charges (electrons) reverse the force or use the left hand with electron flow.</div>
<div class="box warn"><b>Conventional vs electron flow</b>If a test gives electron-flow current, flip the hand (use the left hand) or flip the current direction — otherwise you'll reverse every answer.</div>

<h2>4. Force on a current-carrying wire & charges</h2>
<div class="eq">F = B I L sinθ        (max when wire ⟂ field; zero if parallel)\nF = q v B sinθ         (force ⟂ velocity → circular motion, radius r = mv/(qB))</div>
<div class="box ex"><b>Worked example</b>A 0.20 m wire carries 5.0 A perpendicular to a 0.30 T field: F = 0.30×5.0×0.20 = <b>0.30 N</b>. Two parallel wires, 1 A each, 1 m apart: F/L = μ₀I₁I₂/(2πd) = 2×10⁻⁷ N/m → <b>the definition of the ampere</b> (pre-2019). Since the 2019 SI redefinition, the ampere is defined by fixing e = 1.602176634×10⁻¹⁹ C.</div>
<h2>5. Flux</h2>
<p>Φ = B A cosθ (θ between B and the normal to the area). Unit: weber (Wb) — after <b>Wilhelm Weber</b>; tesla after <b>Nikola Tesla</b>; gauss after <b>Carl Friedrich Gauss</b>; henry after <b>Joseph Henry</b> (inductance unit). Changing flux is the heart of transformers, generators and eddy-current brakes.</p>
<h2>6. Tools</h2>
<p>Compass, <b>iron filings</b> (show field pattern), hall-effect sensor / gaussmeter, reed switch (closes near a magnet), magnetic shielding (μ-metal), Helmholtz coils (uniform field), maglev trains, MRI (1.5–3 T superconducting), speakers (voice coil), hard-drive heads, cyclotrons, mass spectrometers, cathode-ray tubes.</p>
<div class="box filter"><b>Tryout-filter</b>• Two parallel wires, currents in the <i>same</i> direction → <b>attract</b>.<br>• Break a bar magnet → two complete magnets.<br>• Flux through a loop whose plane is <i>parallel</i> to B = 0.<br>• A charge moving <i>parallel</i> to B feels no force.<br>• Magnetic force does <b>no work</b> (⟂ to v).</div>`});

L({id:'c12', t:'Electromagnets, Solenoids & Building One (Hands-On)', tier:'hw', yield:3, min:45, off:'Topic 5 / Hands-on',
formulas:[
 ['Solenoid B','B = μ₀μ_r·N·I/L'],
 ['Strength ∝','N (turns) × I (current) × μ_r (core) ÷ L (length); more turns or more current = stronger'],
 ['Coil resistance','R = ρ·(turn length × N)/A_wire'],
 ['Coil heat','P = I²R — limit current or coil overheats/battery drains'],
 ['Pull-force (approx.)','F ≈ (B²A)/(2μ₀)  (per pole face)']],
html:`
<h2>1. How an electromagnet works</h2>
<p>A coil (solenoid) of insulated wire wound around a <b>ferromagnetic core</b> (soft iron, a steel bolt/nail). Current produces a field (RHR #2); the core's domains align and multiply it (μ_r of soft iron ≈ 200–5000+). Turn the current off and a <b>soft</b> iron core loses most magnetism (low retentivity); <b>hard</b> steel retains some (can become a permanent magnet).</p>
<div class="eq">B ≈ μ₀ μ_r N I / L\n→ double N → double B;  double I → double B;  double L (same N) → half B</div>
<p>Direction: curl right-hand fingers with current; thumb = north end. Reverse the battery → poles swap.</p>
<h2>2. Building an electromagnet (official sample task)</h2>
<p>“Construct an electromagnet using some wire, a bolt and battery.” Test might then ask: <i>How many paperclips/washers can it lift? Which pole is at the head? How does strength change with turns/current?</i></p>
<div class="box hw"><b>Build checklist</b>
<ol><li>Strip ~1–2 cm of insulation at both wire ends (enamel needs sanding/scraping; plastic jacket by strippers).</li><li>Wind <b>tight, neat, single-direction layers</b> over the bolt (leave 10 cm leads). More turns ≈ more strength, but more R → less current from a battery with internal resistance → diminishing returns!</li><li>Connect to battery; <b>limit time</b> on (coil gets hot; battery drains; short circuit risk).</li><li>Test with pins/paperclips; use a compass to find the N pole (RHR check).</li><li>Measure the coil's R with the multimeter (ohms) and the current with an ammeter — <i>in series</i>!</li></ol></div>
<h2>3. What limits strength?</h2>
<ul><li><b>Saturation</b> of the core (~1.6–2 T for iron): beyond this, more current gives no more field.</li><li>Heating (I²R), battery internal resistance (current droops), wire gauge (thicker = lower R but fewer turns fit).</li><li><b>Air gap</b> (big loss in magnetic circuit — keep the load touching the core).</li><li>Core material/shape (a closed horseshoe/“E”-core beats a straight rod).</li></ul>
<div class="box ex"><b>Worked example</b>100 turns on a 5 cm bolt, 1.5 A: n = 100/0.05 = 2000 t/m; B(air) = 4π×10⁻⁷×2000×1.5 = 3.8 mT; with μ_r ≈ 500 core ≈ up to 1.9 T (saturates) — the core multiplies the field hundreds of times.</div>
<h2>4. Uses</h2>
<p>Relays, doorbells/buzzers, solenoid valves &amp; door locks, circuit breakers (magnetic trip), junkyard cranes, MRI, maglev, speakers/headphones, hard-drive actuators, particle accelerators, electric motors/generators, magnetic separators, loudspeakers, transformers' cores.</p>
<div class="box filter"><b>Tryout-filter</b>“Doubling the wire length while keeping the same battery and the same number of turns per cm…” → more turns (N ↑) but R ↑ too; I = V/R falls, so B=μ₀nI may change little. Think through what is held constant.</div>`});

L({id:'c13', t:'Transformers, Induction (Faraday/Lenz) & Power Transmission', tier:'core', yield:3, min:55, off:'Topic 5',
formulas:[
 ['Faraday’s law','ε = −N·ΔΦ/Δt'],
 ['Motional EMF','ε = B·L·v'],
 ['Ideal transformer','V_s/V_p = N_s/N_p'],
 ['Current ratio','I_s/I_p = N_p/N_s'],
 ['Power (ideal)','V_pI_p = V_sI_s'],
 ['Impedance reflection','R_in = (N_p/N_s)² R_load'],
 ['Efficiency','η = P_out/P_in × 100 %'],
 ['Line loss','P_loss = I²R_line'],
 ['Step-up / step-down','N_s > N_p ⇒ V↑ I↓ (step-up);  N_s < N_p ⇒ V↓ I↑ (step-down)']],
html:`
<h2>1. Electromagnetic induction (Faraday, 1831; Henry independently)</h2>
<p><b>Michael Faraday</b> discovered that a <b>changing</b> magnetic flux through a loop induces an EMF: <code>ε = −N ΔΦ/Δt</code>. No change → no EMF. Ways to change flux: move a magnet in/out, change the field (AC), rotate the loop, change loop area/orientation. <b>Joseph Henry</b> (US) found self-induction and built strong electromagnets (1830s).</p>
<p><b>Lenz’s law (Heinrich Lenz, 1834):</b> the induced current flows in the direction that <b>opposes the change</b> in flux that caused it (the minus sign; conservation of energy). Push a N-pole into a coil → the coil's end facing it becomes N (repels). Basis of <b>eddy-current brakes</b> and induction cooktops.</p>
<div class="box ex"><b>Example</b>A 200-turn coil sees flux change from 0.050 Wb to 0.010 Wb in 0.20 s: |ε| = 200×0.04/0.2 = <b>40 V</b>.</div>
<h2>2. The transformer</h2>
<p>Two coils (<b>primary</b> and <b>secondary</b>) wound on a shared <b>laminated iron core</b>. AC in the primary makes changing flux in the core, which induces EMF in the secondary. <b>Works only with AC (or changing DC) — a steady DC source gives a one-time pulse then nothing (and can burn out the primary: only the winding R limits current).</b></p>
<div class="eq">V_s / V_p = N_s / N_p        (voltage ∝ turns)\nI_s / I_p = N_p / N_s        (current ∝ 1/turns)\nP_out = P_in   (ideal):  V_p I_p = V_s I_s</div>
<div class="box ex"><b>Worked example</b>Step-down from 120 V to 12 V with 500 primary turns → N_s = 50. Load draws 2 A at 12 V (24 W) → I_p = 24/120 = <b>0.2 A</b> (ideal). If 92 % efficient: P_in = 26.1 W, I_p = 0.217 A.</div>
<table><tr><th>Type</th><th>N_s vs N_p</th><th>Effect</th></tr><tr><td>Step-up</td><td>N_s &gt; N_p</td><td>V ↑, I ↓</td></tr><tr><td>Step-down</td><td>N_s &lt; N_p</td><td>V ↓, I ↑</td></tr><tr><td>Isolation</td><td>1:1</td><td>galvanic isolation (safety)</td></tr><tr><td>Autotransformer</td><td>tapped single winding</td><td>variable/cheaper, no isolation (Variac)</td></tr><tr><td>Center-tapped</td><td>secondary split</td><td>±V supplies, full-wave rectifier</td></tr></table>
<h2>3. Losses &amp; real transformers</h2>
<ul><li><b>Copper loss</b> (I²R in windings), <b>core (iron) losses</b>: eddy currents (reduced by <b>laminating</b> the core) and hysteresis; flux leakage; audible hum (magnetostriction). Efficiency typically 90–99 %.</li><li>The transformer also <b>reflects</b> loads: R_in = (N_p/N_s)²R_L. Used for matching.</li><li>Soft iron/silicon steel/ferrite cores; <b>toroidal</b> = low leakage; wall “bricks” are (older) linear transformers or modern switch-mode supplies.</li><li>Three-phase transformers exist but <b>3-phase power is excluded</b>.</li></ul>
<h2>4. Why the grid uses high voltage</h2>
<div class="eq">P = V·I → for the same power, raising V cuts I\nLine loss = I²R_line\nStep-up 10× → current ÷10 → loss ÷100</div>
<p>Power plant → <b>step-up</b> (to 115–765 kV) → transmission lines → <b>step-down</b> substation (to ~12 kV) → pole transformer (to 240/120 V) → house. <b>Wall-wart</b> = small step-down + rectifier.</p>
<div class="box filter"><b>Tryout-filter</b>• “A transformer has 1000 primary turns and 100 secondary turns; 120 V in, 5 A out. Primary current?” → V_s = 12 V, P = 60 W, I_p = <b>0.5 A</b>.<br>• “What happens if you connect the primary to a 12 V battery?” → steady DC makes no changing flux, no induced V on the secondary; only a brief pulse when switching; a large DC current may overheat the primary. <b>Transformers don't work with steady DC.</b><br>• “Why are cores laminated?” → reduce eddy currents.</div>
<div class="box hist"><b>History</b>Faraday 1831 induction ring (first transformer). Gaulard &amp; Gibbs (1882), Zipernowsky–Bláthy–Déri (1885) practical closed-core transformers; William Stanley (Westinghouse, 1886) first commercial AC system. Tesla coil (1891) is a resonant air-core transformer.</div>`});

L({id:'c14', t:'Motors, Generators & Electromechanical Energy Conversion', tier:'core', yield:2, min:45, off:'Topic 5',
formulas:[
 ['Back EMF','ε_back = V − I_armature·R_armature'],
 ['Motor torque','τ = N·B·I·A·sinθ'],
 ['Generator output (loop)','ε = N·B·A·ω·sin(ωt);  ε_max = NBAω'],
 ['Mechanical power','P_mech = τ·ω;  ω = 2πf = 2π(rpm/60)'],
 ['Efficiency','η = P_out/P_in'],
 ['Sync speed (AC)','n_s (rpm) = 120 f / poles']],
html:`
<h2>1. The DC motor</h2>
<p>A current-carrying <b>armature</b> (rotor coil) sits in a magnetic field (permanent magnets or field windings, the <b>stator</b>). Force F = BIL on opposite sides of the loop makes torque (RHR #3). A <b>commutator</b> (split ring) plus <b>brushes</b> reverse the current every half turn so the torque keeps the same sense; without it the coil would oscillate. Speed ∝ voltage; torque ∝ current.</p>
<div class="box key"><b>Back EMF (counter EMF)</b>As the armature spins, it <i>acts like a generator</i> and produces an EMF opposing the supply (Lenz!). Net current I = (V − ε_back)/R. At start-up (ε_back = 0) current is huge — <b>inrush current</b>; a stalled motor draws I = V/R and <b>burns out</b>. Loaded motors slow, ε_back falls, current rises.</div>
<div class="box ex"><b>Worked example</b>12 V motor, R_arm = 2 Ω. Stalled: I = 12/2 = 6 A. Running with ε_back = 9 V: I = 3/2 = 1.5 A; electrical power in = 18 W; heat = I²R = 4.5 W; mechanical ≈ 13.5 W (75 %).</div>
<table><tr><th>Motor type</th><th>Key facts</th></tr>
<tr><td>Brushed DC (permanent magnet)</td><td>simple, cheap, toys/cars</td></tr><tr><td>Brushless DC (BLDC)</td><td>electronic commutation, drones/fans, efficient</td></tr>
<tr><td>Universal motor</td><td>runs on AC or DC (series-wound) — drills, vacuum cleaners</td></tr>
<tr><td>AC induction motor</td><td>Tesla 1888: rotating field induces rotor current; no brushes; most industrial motors</td></tr>
<tr><td>Synchronous motor</td><td>rotor locks to field; speed = 120f/poles</td></tr>
<tr><td>Stepper / servo</td><td>precise position control</td></tr>
<tr><td>Homopolar / Faraday disc</td><td>Faraday 1831, disc in B field</td></tr></table>
<h2>2. The generator (dynamo / alternator)</h2>
<p>The motor run backward: mechanical rotation of a coil in a magnetic field changes flux → EMF (Faraday). <b>Alternator</b>: slip rings → <b>AC sine</b>. <b>Dynamo</b>: commutator → pulsating DC. Output ∝ N, B, A, and ω. Car alternator: 3-phase output rectified by diodes to charge the 12 V battery. Power plants: steam/hydro/wind turbines spin huge alternators at 3600 or 1800 rpm for 60 Hz.</p>
<div class="eq">ε(t) = N B A ω sin(ωt)      → frequency of the output = rotation frequency (per pole pair)</div>
<div class="box hw"><b>Hands-on</b>Demonstration: two motors coupled — spin one by hand and it lights an LED (the motor becomes a generator). Rotate a magnet through a coil attached to a voltmeter: reversal of motion flips polarity (Lenz). Measure motor current at stall vs running.</div>
<h2>3. Energy conversion summary</h2>
<ul><li>Motor: electrical → mechanical. Generator: mechanical → electrical. Transformer: electrical → electrical (via magnetic field).</li><li>Speakers: electrical → sound (voice coil in a magnet); microphones (dynamic) reverse it.</li><li>Solenoid: electrical → linear motion. Buzzer/bell: self-interrupting electromagnet.</li></ul>
<div class="box filter"><b>Tryout-filter</b>“Why does a motor draw the most current right when it starts?” → no back-EMF. “What happens if you reverse the battery on a brushed DC motor?” → reverses direction. “What does the commutator do?” → reverses coil current each half-turn.</div>`});

L({id:'c15', t:'Electrical Control & Protection Devices: Switches, Relays, Fuses, Breakers, GFCI', tier:'core', yield:3, min:60, off:'Topic 6',
formulas:[
 ['Fuse I²t','A fuse opens when the thermal energy ∫I²dt exceeds its rating (fast-blow opens quicker than slow-blow)'],
 ['Relay coil','I_coil = V_supply/R_coil; contacts rated separately (e.g., 10 A @ 250 VAC / 30 VDC)'],
 ['Flyback diode','Place a diode reverse-biased across the coil to clamp the inductive spike (V = −L di/dt)'],
 ['GFCI trip','Trips when |I_hot − I_neutral| ≥ 4–6 mA (Class A) within ~25 ms'],
 ['Breaker sizing','Breaker rating ≤ wire ampacity: 14 AWG–15 A, 12 AWG–20 A, 10 AWG–30 A, 8 AWG–40 A'],
 ['Continuous load','Load ≤ 80 % of breaker rating for loads running ≥ 3 h']],
html:`
<div class="box unv"><b>Why this lesson matters</b>The official rules list <b>“electrical control devices including switches, relays, fuses, ground fault circuit interrupters, and breakers”</b> as a guaranteed written-test topic at <b>all</b> levels. A full section of questions can come from this. Learn every device below.</div>
<h2>1. Switches</h2>
<p>Terminology: <b>Pole</b> = number of separate circuits the switch controls; <b>Throw</b> = number of positions/output paths per pole. <b>Normally open (NO)</b> contact closes when actuated; <b>normally closed (NC)</b> opens when actuated.</p>
<table><tr><th>Type</th><th>Meaning</th><th>Use</th></tr>
<tr><td>SPST</td><td>Single pole, single throw</td><td>on/off (light switch)</td></tr><tr><td>SPDT</td><td>Single pole, double throw (common + NO + NC)</td><td>choose between two circuits; 3-way lighting</td></tr>
<tr><td>DPST</td><td>Double pole, single throw (two ganged SPST)</td><td>switch both hot and neutral (240 V)</td></tr>
<tr><td>DPDT</td><td>Double pole, double throw (6 terminals)</td><td>reverse motor direction; 4-way</td></tr>
<tr><td>Pushbutton NO/NC (momentary)</td><td>spring-return</td><td>doorbell, keyboard, reset (NC)</td></tr>
<tr><td>Toggle, slide, rocker, rotary (multi-position), DIP, reed, tilt, mercury*, limit, pressure, float</td><td>—</td><td>(*mercury is banned/hazardous)</td></tr></table>
<p><b>Series switches = AND; parallel switches = OR</b> (basic logic). Switch <b>bounce</b>: contacts chatter a few ms — cured with debounce (RC or software).</p>
<h2>2. Relays</h2>
<svg class="dia" viewBox="0 0 400 200" width="400"><rect x="40" y="40" width="130" height="60" rx="8" class="w"/><path class="w" d="M55 70 q8-14 16 0 q8-14 16 0 q8-14 16 0 q8-14 16 0"/><text x="64" y="32">COIL (control side)</text><path class="w" d="M180 40 v30 M180 100 v-30" opacity="0"/>
<path class="w" d="M250 70 L310 55" /><circle cx="250" cy="70" r="3" fill="currentColor"/><circle cx="310" cy="55" r="3" fill="currentColor"/><circle cx="310" cy="95" r="3" fill="currentColor"/><path class="w" d="M310 55 h40 M310 95 h40 M250 70 h-30 v40"/><text x="256" y="115">COM</text><text x="322" y="48">NO</text><text x="322" y="114">NC</text><text x="220" y="150">contacts (load side — isolated from coil)</text><path stroke="currentColor" stroke-dasharray="3 3" fill="none" d="M170 70 H245"/></svg>
<p>A <b>relay</b> is an <b>electrically operated switch</b>: a small current in an <b>electromagnet coil</b> pulls an armature that moves contacts (COM–NO/NC). The control circuit is <b>electrically isolated</b> from the load circuit — so a 5 V logic signal (or 40 mA coil) can switch 120 V/10 A. Invented in the 1830s–40s (<b>Joseph Henry, 1835</b>; used in Morse/Wheatstone telegraphs).</p>
<ul><li><b>Specs:</b> coil voltage (5/12/24 V DC or 120 V AC), coil resistance (→ coil current), contact rating (A, V_AC/V_DC — DC is harder to break: arcs persist), pole/throw (SPDT, DPDT), pick-up/drop-out voltage.</li>
<li><b>Latching relay</b> holds state without power. <b>Contactor</b> = big relay for motors. <b>Solid-state relay (SSR)</b>: optocoupler + triac/MOSFET, no moving parts, silent, faster, leakage. <b>Reed relay</b>: sealed glass reed switch in a coil. <b>Thermal/overload relay</b> for motors.</li>
<li><b>Flyback (freewheel/snubber) diode:</b> a coil (inductor) opposes changes in current (Lenz), producing a large reverse voltage spike when the drive switch opens (V = −L di/dt). A diode across the coil (cathode to +) clips it and protects the transistor driving it.</li>
<li><b>Driving a relay from a microcontroller:</b> I/O pin → resistor → NPN base (or N-MOSFET gate); relay coil between +V and collector; flyback diode across coil. <i>Never drive a coil directly from a pin.</i></li></ul>
<div class="box ex"><b>Worked example</b>A 12 V relay has a 400 Ω coil: I_coil = 30 mA, P = 0.36 W. Its contacts are rated 10 A @ 120 VAC → can switch a 1 kW heater (8.3 A) but <i>not</i> a 10 A @ 120 VDC load (DC rating is typically lower).</div>
<h2>3. Fuses</h2>
<p>A <b>fuse</b> is a sacrificial thin wire/strip in series: if I exceeds its rating for long enough, it melts and opens the circuit. Rated by <b>current</b>, <b>voltage (max interrupt)</b>, and <b>speed</b> (fast-blow for electronics, slow-blow/time-delay for motors/bulbs with inrush). One-time (replace after blowing). Place in the <b>hot/positive</b> lead. Types: cartridge (glass 5×20 mm, 1¼″), blade (automotive: red 10 A, blue 15 A, yellow 20 A, clear 25 A, green 30 A, tan 5 A), resettable PTC “polyfuse”, thermal fuse, multimeter fuses (HRC ceramic, 10 A/250 V).</p>
<div class="box warn"><b>Never</b> replace a fuse with a higher rating or a penny/foil — the wiring can then overheat and start a fire. Fuse rating ≤ wire ampacity.</div>
<h2>4. Circuit breakers</h2>
<p>A resettable switch that trips on overcurrent: <b>thermal</b> element (bimetallic strip bends when heated → slow trip for overloads) + <b>magnetic</b> element (solenoid trips instantly on short circuits, &gt;~5–10× rating). Standard ratings 15, 20, 30, 40, 50… A. A 240 V breaker is a double-pole. Main breaker protects the whole panel. “Trip curves” B/C/D (IEC) indicate magnetic trip multiples (3–5×, 5–10×, 10–20×).</p>
<h2>5. GFCI and AFCI</h2>
<ul><li><b>GFCI (ground fault circuit interrupter):</b> compares current in the hot and neutral through a differential current transformer. If they differ by ≈ <b>4–6 mA</b> (current leaking through a person/ground), it trips in ~25 ms — protects <b>people</b>. Required in bathrooms, kitchens, outdoors, garages, basements, near water. Has TEST and RESET buttons; test monthly. <b>It does not protect against line-to-line (hot-to-neutral) shock or overloads.</b></li>
<li><b>AFCI (arc fault):</b> detects the signature of arcing in damaged cords/loose connections → prevents <b>fires</b>.</li>
<li><b>RCD/RCBO</b> = the international name for GFCI (30 mA typical).</li>
<li><b>Surge protector (MOV)</b>: shunts voltage spikes.</li></ul>
<h2>6. Other control &amp; sensing devices (SciOly “Specialty devices”)</h2>
<ul><li><b>Potentiometer</b> (3-terminal variable resistor, voltage divider) vs <b>rheostat</b> (2-terminal variable R for current control). <b>Thermistors:</b> NTC (R ↓ as T ↑), PTC. <b>LDR/photoresistor</b> (R ↓ with light), <b>photodiode/phototransistor</b>, <b>Hall sensor</b>, <b>reed switch</b>, <b>thermocouple</b> (mV from two dissimilar metals — Seebeck 1821), <b>strain gauge</b>, <b>piezo</b> (buzzer/element), <b>varistor (MOV)</b>, <b>thermostat/bimetal</b>, <b>timer relay</b> (555 timer), <b>optocoupler</b> (LED + phototransistor — isolation), <b>triac/SCR/thyristor</b> (latching AC/DC power switch; dimmers), <b>solenoid</b>, <b>buzzer</b> (active vs passive), <b>speaker</b>.</li></ul>
<div class="box filter"><b>Tryout-filter</b>• “A 15 A breaker is on a 14 AWG circuit. Can you plug in two 1500 W heaters (120 V)?” → 25 A total ≫ 15 A → trips.<br>• “Why can a low-voltage logic signal safely switch mains with a relay?” → isolation between coil and contacts.<br>• “GFCI trips when…” → hot/neutral imbalance ≥ ~5 mA.<br>• “Fuse in series or parallel with the load?” → <b>series</b>.<br>• “Which is slower to react, fast-blow or slow-blow?” → slow-blow.</div>`});

L({id:'c16', t:'Circuit Diagrams, Symbols & Constructing Circuits', tier:'core', yield:2, min:40, off:'Topic 7',
formulas:[
 ['Node','Any connected set of wires = one node (same potential)'],
 ['Wire crossing','Dot = connected; no dot (or hop) = not connected'],
 ['Ground','Reference node (0 V); chassis/earth are different symbols'],
 ['LED series R','R = (V_s − V_f)/I_f']],
html:`
<h2>1. Reading schematics</h2>
<p>A schematic shows <b>connections</b>, not physical layout. Lines = ideal wires. Junction dot = connected; crossing lines without a dot = <b>not</b> connected (some older drawings show a bump/hop). Every component has a <b>reference designator</b>: R (resistor), C (capacitor), L (inductor), D (diode), LED, Q (transistor), U (IC), SW/S (switch), K (relay), F (fuse), T (transformer), B/BT (battery), M (motor), J (connector), P (plug), TP (test point).</p>
<table><tr><th>Symbol</th><th>Description</th></tr>
<tr><td>⎓|⊢ long line + short line</td><td>Battery/cell: <b>long line = positive</b>, short line = negative</td></tr>
<tr><td>Zig-zag (US) / open rectangle (IEC)</td><td>Resistor</td></tr><tr><td>Zig-zag with arrow</td><td>Variable resistor/rheostat; with 3 terminals = potentiometer</td></tr>
<tr><td>Two parallel lines (straight)</td><td>Capacitor; one curved plate = polarized electrolytic (+ marked)</td></tr>
<tr><td>Coil loops</td><td>Inductor; with parallel lines = iron core; two coils = transformer</td></tr>
<tr><td>Triangle + bar</td><td>Diode (current flows in triangle’s direction, anode→cathode); LED has two arrows out, photodiode arrows in; Zener has bent bar</td></tr>
<tr><td>Circle with X or ⊗</td><td>Lamp/bulb</td></tr><tr><td>Circle with A/V/Ω/G</td><td>Ammeter / voltmeter / ohmmeter / galvanometer</td></tr>
<tr><td>Circle with M/G</td><td>Motor / Generator</td></tr>
<tr><td>Three-bar decreasing ground (⏚)</td><td>Earth ground/0 V reference (chassis and signal ground have their own symbols)</td></tr>
<tr><td>Triangle with output</td><td>Op-amp (+ and − inputs, output)</td></tr>
<tr><td>Transistor: circle with arrow on emitter</td><td>BJT — arrow <b>out</b> = NPN (“Not Pointing iN”), arrow <b>in</b> = PNP (“Points iN Proudly”)</td></tr>
<tr><td>Squiggle (wavy line)</td><td>Fuse (or a filament)</td></tr>
<tr><td>Diamond</td><td>Dependent source</td></tr></table>
<h2>2. Building from a schematic</h2>
<ol><li>Identify nodes; number them. Note the supply polarity.</li><li>Place ICs/transistors/LEDs first, then resistors, then jumpers.</li><li>Use the <b>color convention</b>: red = +V, black/blue = ground, other colors for signals.</li><li>Keep leads short; avoid wires across ICs; verify with a continuity beep before applying power.</li><li>Power on; measure node voltages vs the schematic expected values.</li></ol>
<div class="box hw"><b>Task: “equal-brightness LEDs”</b>Two LEDs, 9 V, resistors available. Option A (series): 9 V − 2×2.0 V = 5 V across R; for 10 mA: R = 500 Ω → 470 Ω. Same current through both → equal brightness (series!). Option B (parallel): each LED with its own 330 Ω → equal if same color. Mixed colors in parallel share badly without individual resistors.</div>
<h2>3. Non-electrical “circuit” symbols in SciOly diagrams</h2>
<p>Water-analogy drawings, Wheatstone bridges drawn as diamonds, ladders, “black box” networks (mystery-box problems: measure V/I at terminals and infer the contents — use Thevenin!). Also <b>PCB/breadboard pictorials</b> (“Fritzing style”) that you must mentally convert to schematic.</p>
<div class="box filter"><b>Tryout-filter</b>• “Which diagram shows the ammeter correct?” → in series. Voltmeter → parallel.<br>• “In this schematic, which resistors are in parallel?” → check that both ends connect to the same two nodes.<br>• “The LED is off: check…” → polarity, resistor value/open, no supply, breadboard split rails.</div>`});
