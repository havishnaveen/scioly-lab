/* ===== CIRCUIT LAB — Part 6: gaps found in REAL 2026 invitational tests (BullSO, Wichita Heights, GullSO) ===== */

L({id:'c27', t:'Real-Test Gap-Filler: Fields, Forces, Devices & Concepts the 2026 Invitationals Asked', tier:'core', yield:3, min:60, off:'Topics from practice tests (BullSO / Wichita Heights / GullSO 2026)',
formulas:[
 ['E inside a conductor (static)','E = 0 (charge sits on the surface); E = 0 inside a hollow conductor’s cavity'],
 ['Insulating sphere (uniform ρ)','inside: E ∝ r · outside: E = kQ/r²'],
 ['Surface charge density','σ = Q/A  (C/m²) · field near a conducting surface E = σ/ε₀'],
 ['Wire resistance','R = ρL/A  (L×3, A×½ ⇒ R×6)'],
 ['Long straight wire','B = μ₀I/(2πr) = 2×10⁻⁷·I/r   (1 T = 10⁴ gauss)'],
 ['Solenoid','B = μ₀·n·I  (n = turns per metre; independent of coil diameter)'],
 ['Induced E from changing B (inside solenoid, radius r)','E·2πr = −πr²·dB/dt ⇒ |E| = (r/2)|dB/dt|'],
 ['Magnetic force on charge','F = qvB·sinθ  (zero if at rest or v ∥ B; does NO work)'],
 ['RMS','sine: V_rms = V_p/√2 · square wave (±V): V_rms = V · DC-equivalent of 100 V-peak sine = 70.7 V'],
 ['Capacitor energy','U = ½CV² = ½QV (stored in the electric field between the plates)']],
html:`
<div class="box key"><b>Where this lesson comes from</b>I read three real 2026 Division C Circuit Lab tests (BullSO, Wichita Heights, GullSO — each with an answer key). Everything in them that my earlier lessons did not cover in enough depth is collected here. Read it as a checklist: if a heading surprises you, you had a blind spot.</div>

<h2>1. Electric fields of conductors and insulators</h2>
<ul>
<li><b>Inside a conductor in electrostatic equilibrium E = 0</b> and all excess charge sits on the surface. So for a <b>solid conducting sphere</b>, the field at r &lt; R is <b>zero</b>.</li>
<li>A <b>hollow conducting tube / cavity</b> also has E = 0 inside (this is why a Faraday cage or a car body shields you from lightning and why coax cable shields work).</li>
<li>A <b>solid insulating sphere with uniform volume charge</b>: inside, the enclosed charge grows as r³ while the area grows as r², so <b>E ∝ r</b> (linear increase); outside, E = kQ/r² like a point charge at the centre.</li>
<li><b>Any</b> spherically symmetric charge Q, outside the sphere: E = kQ/r² (distance from the <i>centre</i>). Point charge field: E = kQ/r², falls as 1/r².</li>
<li><b>Surface charge density</b> σ = Q/A. 1.0 μC on a 1 mm² (= 10⁻⁶ m²) plate ⇒ σ = <b>1 C/m²</b> (watch the mm² → m² conversion!).</li>
<li>Between parallel plates the field is uniform and points <b>from the + plate to the − plate</b> in straight lines; E = V/d = σ/ε₀.</li>
<li><b>Ground</b> is the reference: its potential is defined as <b>0 V</b>.</li>
</ul>
<div class="box ex"><b>Worked example</b>Field 0.70 m from a +1.0 nC point charge: E = kQ/r² = 8.99×10⁹ × 1×10⁻⁹ / 0.49 = <b>18.3 N/C</b>. Electron in a 30 N/C field: F = qE = 1.6×10⁻¹⁹ × 30 = <b>4.8×10⁻¹⁸ N</b> (opposite to E because q &lt; 0).</div>

<h2>2. Field lines and equipotentials</h2>
<ul><li>Field lines start on + and end on −; they show the <b>direction of the force on a + test charge</b>; they never cross; closer together ⇒ stronger field.</li>
<li><b>Equipotential lines/surfaces are always perpendicular to field lines</b>. For a point charge they are concentric circles/spheres.</li>
<li><b>No work is done moving a charge along an equipotential</b> (W = qΔV = 0).</li>
<li>Four equal-magnitude charges (two +, two −) at the corners of a square: the potential at the centre is <b>0</b> (each + term cancels a − term — potential is a scalar), but the <i>field</i> at the centre is generally not zero (it is a vector sum).</li></ul>

<h2>3. Magnetic forces — the subtleties</h2>
<ul>
<li>F = qv×B. A <b>stationary</b> charge feels <b>no</b> magnetic force. A charge moving <b>parallel</b> to B feels no force either.</li>
<li>The force is <b>perpendicular to v</b>, so the magnetic force <b>does zero work</b> (speed and kinetic energy unchanged); a charge moving ⟂ to B travels in a circle of radius r = mv/(qB). “1 C at 1 m/s ⟂ 1 T: work = 0.”</li>
<li>Direction: F = q(v×B). RHR for positive charges (fingers along v, curl toward B, thumb = F); <b>reverse</b> for electrons. Example: B points in −x and an electron is pushed in +y ⇒ v×B must point in −y ⇒ v = +z, <b>out of the page</b>. Work it with the cross product, not by memory.</li>
<li><b>Long straight wire:</b> B = μ₀I/(2πr) = 2×10⁻⁷I/r (tesla, SI). 6 mm from 2 A: 6.7×10⁻⁵ T = 0.67 gauss. Direction by RHR: thumb along I, fingers curl = B. <b>Parallel currents in the same direction attract; opposite directions repel.</b> Fields from several wires add as <i>vectors</i> (superposition) — out of page from one, into page from another.</li>
<li><b>Solenoid:</b> B = μ₀nI with n = turns per <i>metre</i> (500 turns/cm = 50 000 /m). Changing the <b>core material</b>, the <b>turns per length</b> or the <b>current</b> changes B; changing coil diameter (for an infinitely long solenoid) or the wire’s resistance (at a fixed current) does <b>not</b>. 3 A at 500 turns/cm: B = 4π×10⁻⁷ × 50 000 × 3 = <b>0.188 T</b>.</li>
<li><b>Scale of magnetic fields:</b> Earth ≈ 25–65 μT (≈ 50 μT = 0.5 G) · fridge magnet ≈ 5 mT · MRI 1.5–3 T · 1 T = 10⁴ gauss.</li>
<li><b>Paramagnetism</b> comes from <b>unpaired electrons</b> (weakly attracted); diamagnetism (all materials, weak repulsion); ferromagnetism (domains; iron, nickel, cobalt). Magnetic field lines run <b>N → S outside</b> a magnet and S → N inside (closed loops).</li>
<li>A <b>magnetic monopole</b> has never been observed (theoretically allowed, practically treated as “cannot exist” in these tests); magnetic dipoles/quadrupoles exist.</li>
</ul>

<h2>4. Induction — the tricky cases</h2>
<ul><li>EMF needs <b>changing flux</b> (Φ = B·A·cosθ). In a <b>uniform, unchanging field</b>: a loop that just translates (swings, oscillates up/down) without changing its area, angle or the field through it has <b>no</b> emf; a loop that <b>rotates</b> (θ changes) <b>does</b> have an emf.</li>
<li>A <b>changing B</b> creates a circulating <b>electric field</b> even where there is no wire: inside a solenoid of radius R, at r &lt; R, <b>|E| = (r/2)|dB/dt|</b>. If I increases at 2 A/s with n = 50 000 /m: dB/dt = μ₀n(dI/dt) = 0.126 T/s; at r = 0.1 m, E = 6.3×10⁻³ V/m; a +0.5 C charge feels F = qE = <b>3.15 mN</b>. With <b>constant</b> I (static B) the same stationary charge feels <b>no</b> force. Direction: Lenz — the induced E circulates to oppose the increase (clockwise when B points out of the page and increases).</li>
<li><b>Transformers</b> change V and I (and effective resistance seen), but <b>not power</b> (ideal) and <b>not frequency</b>. N_s/N_p = V_s/V_p. They only work on AC.</li></ul>

<h2>5. AC, DC and conversion devices</h2>
<ul><li><b>Inverter</b>: DC → AC. <b>Rectifier</b>: AC → DC. <b>Transformer</b>: AC ↔ AC (different V/I). <b>Converter/regulator</b>: DC ↔ DC.</li>
<li><b>Batteries output DC only.</b></li>
<li>RMS: a sine wave’s V_rms = V_p/√2 (120 V peak → 85 V). A <b>square wave alternating between +120 V and −120 V has V_rms = 120 V</b> (the square of ±120 is always 120²). The DC voltage giving the same power as a <b>100 V-peak</b> sine is 100/√2 = 70.7 V — <b>always check whether “100 V” means peak or RMS</b> (US mains: 120 V RMS ≈ 170 V peak).</li>
<li><b>Skin effect</b>: at high frequency AC current crowds near the conductor surface ⇒ higher effective resistance. <b>Hall effect</b>: a transverse voltage appears across a current-carrying conductor in a perpendicular magnetic field (used in magnetic/current sensors). <b>Proximity effect</b>: currents in neighbouring conductors distort each other’s distribution.</li>
<li><b>DC generators</b>: commutator dynamo and the <b>Faraday disk</b> give DC; magnetos, alternators, induction generators give AC (unless rectified).</li>
<li><b>Why birds on a power line are safe</b>: both feet are at the same potential — no potential difference, so no current through the bird.</li></ul>

<h2>6. Components, “ideal” models and classification</h2>
<ul><li><b>Ideal ammeter: 0 Ω. Ideal voltmeter: ∞. Ideal switch: open = ∞ Ω, closed = 0 Ω. Ideal voltage source: 0 Ω internal; ideal current source: ∞.</b></li>
<li><b>Passive</b> components don’t add energy and need no power supply (resistor, capacitor, inductor). <b>Active</b> = can amplify/control (transistor, op-amp). On the BullSO test “NOT passive” meant <b>transistor and diode</b> (diodes are nonlinear semiconductors); some textbooks list diodes as passive — know both conventions.</li>
<li><b>Switches:</b> SPST (1 pole, 1 throw: on/off), SPDT (1 input, 2 outputs), DPST (two SPSTs ganged), DPDT (two SPDTs ganged; used for reversing motors). A <b>“three-way switch”</b> is an SPDT pair wired so <b>two switches control one lamp</b> from two places (“three-way” = three terminals each); four-way adds a DPDT in the middle for 3+ locations.</li>
<li><b>Rheostat</b> = manually variable resistor (2 terminals used); <b>potentiometer</b> = 3-terminal adjustable divider; <b>photoresistor</b> (LDR), <b>thermistor</b>. <b>Fuse</b>: one-time — never resets (replace it); <b>circuit breaker</b> resets (and can interrupt faults); PTC “resettable fuse” recovers in seconds–minutes; <b>GFCI</b> = <b>G</b>round <b>F</b>ault <b>C</b>ircuit <b>I</b>nterrupter.</li>
<li><b>Superconductors</b>: zero resistance below T<sub>c</sub>; a current induced in a closed superconducting loop circulates essentially forever (persistent current), so a superconducting electromagnet can sustain its field without power.</li>
<li><b>Unit equivalents:</b> 1 A = 1 C/s = 1 V/Ω = 1 W/V = 1 J/(V·s).</li></ul>

<h2>7. Capacitor circuits (what the real tests do)</h2>
<ul><li>C ↑ with <b>plate area ↑</b>, <b>separation ↓</b>, <b>permittivity ↑</b> (dielectric). Plate thickness/conductivity do not matter. Energy is stored in the <b>electric field</b> (as potential energy).</li>
<li>Q = CV: a capacitor holding 804 C at 12 V has C = 67 F. Series caps share the <b>same Q</b>; parallel caps share the <b>same V</b>.</li>
<li><b>Charge sharing</b>: C₁ = 10 μF charged to 5 V (Q = 50 μC) is connected to C₂ = 4 μF in series with C₃ = 6 μF (series combo = 2.4 μF): total charge is conserved, so V_a = Q/(C₁ + 2.4 μF) = 50/12.4 = 4.03 V; Q₁ = 40.3 μC, Q₂ = Q₃ = 2.4 μF × 4.03 V = 9.7 μC; V_b = Q₃/C₃ = 1.62 V. The “extra charge” on C₂, C₃ is charge <i>separation</i> on the middle plates — net charge of an isolated section stays zero.</li>
<li><b>RC numbers</b>: R = 2 kΩ, C = 10 μF, V = 12 V → τ = 20 ms; initial current 6 mA; after one τ the current is 37 % of initial and the capacitor holds 63 % of its final charge (76 μC of 120 μC). At t = 0 of an RC charge circuit, <b>no charge crosses the dielectric</b> (ideal), but the <i>circuit</i> current is V/R (e.g. 12 V / 600 Ω = 20 mA).</li></ul>

<h2>8. Circuit-analysis techniques that appear on the big tests</h2>
<ul><li><b>Equal parallel resistors:</b> n resistors of m Ω in parallel = <b>m/n</b> Ω. Adding a resistor in parallel always lowers R_eq; the <b>larger</b> the added resistor, the <b>smaller</b> the change (∞ Ω = open circuit = no change).</li>
<li><b>Nodal analysis:</b> KCL at each non-reference node. A voltage source between two non-reference nodes forms a <b>supernode</b>. <b>Mesh analysis:</b> KVL per loop; a current source shared between meshes forms a <b>supermesh</b>.</li>
<li><b>Superposition</b>: turn off all but one source (voltage source → short, current source → open), solve, add the partial results (valid for linear circuits; not for power).</li>
<li><b>Thévenin/Norton:</b> R_th = R_N; V_th = open-circuit voltage; I_N = short-circuit current = V_th/R_th. Remove the load, find V_oc (or replace it with a short for I_N), turn off sources for R_th.</li>
<li><b>Wheatstone bridge</b>: balanced when R₁/R₂ = R₃/R_x; then the bridge (middle) resistor has <b>0 V and 0 A</b>. The Wye–Delta equivalence can be derived by requiring equal resistance between each pair of terminals (this is what the GullSO “superposition with current sources” question did).</li></ul>
<div class="box filter"><b>Tryout-filter reminder</b>On GullSO the three tiebreakers were a two-source resistor network with Thévenin/Norton equivalents about one load, a Thévenin/Norton problem containing a current source (draw both equivalent circuits), and a magnetic-field vector sum from two long wires plus the force on an electron. Practice these by hand and verify with the <a href="#/tools/solver">circuit solver</a>.</div>

<h2>9. Safety questions in the real tests</h2>
<ul><li>Body-current effects: muscle clenching (can’t let go), nerve interference, burns, heart fibrillation; threshold numbers are in lesson c10.</li>
<li>Protecting users of metal-cased appliances: <b>grounded three-prong plug</b>, <b>double insulation</b>, keeping the hot wire from touching the case, <b>GFCI</b>. Polarized plugs mainly make sure switches/fuses are on the hot side — the weakest protection against case shock.</li>
<li><b>Fuse vs breaker</b>: a breaker can be reset, a fuse cannot; both protect against over-current; breakers/GFCIs also handle fault interruption.</li></ul>

<h2>10. The seven required scientists — the exact facts tests used</h2>
<table><tr><th>Scientist</th><th>Facts that appeared on 2026 tests</th></tr>
<tr><td><b>Ampère</b></td><td>“Newton of electricity” (Maxwell’s phrase) · coined/invented the <b>solenoid</b> · Ampère’s law; SI unit of current</td></tr>
<tr><td><b>Coulomb</b></td><td>Force law F = kq₁q₂/r² (torsion balance); unit of charge</td></tr>
<tr><td><b>Faraday</b></td><td>Electromagnetic induction law · <b>coined “electrode”</b> (also ion, anode, cathode) · unit of capacitance (farad)</td></tr>
<tr><td><b>Kirchhoff</b></td><td>Circuit laws · showed that electric signals in an ideal wire travel at the <b>speed of light</b></td></tr>
<tr><td><b>Ohm</b></td><td>V = IR — an alternative to the discredited <b>Barlow’s law</b></td></tr>
<tr><td><b>Tesla</b></td><td>SI unit of magnetic flux density · AC/induction motor patents <b>licensed by Westinghouse</b> · <b>first remote-controlled boat</b> (1898)</td></tr>
<tr><td><b>Volta</b></td><td><b>Voltaic pile</b> (first battery), invented during his feud with Galvani over “animal electricity”</td></tr></table>
`});

L({id:'c28', t:'Real-Test Hands-On Tasks: Mystery Resistor, LED Datasheet, Loaded Divider & Equivalent-Resistance Builds', tier:'hw', yield:3, min:75, off:'Part II hands-on (BullSO lab + GullSO tasks 49–51)',
formulas:[
 ['Mystery R from voltages (divider)','R_x = R_known·(V_s − V_k)/V_k   (V_k measured across the known resistor)'],
 ['Percent error','|actual − predicted|/actual × 100 %'],
 ['LED resistor','R = (V_s − V_f)/I_F;  I_min = (V_s,min − V_f,max)/R;  I_max = (V_s,max − V_f,typ)/R'],
 ['Loaded divider','V_out = V_in·(R₂‖R_L)/(R₁ + R₂‖R_L);  R₂‖R_L = R₂R_L/(R₂+R_L)'],
 ['Power in resistor','P = V²/R = I²R  (compare to rating, e.g. ⅛ W = 0.125 W)'],
 ['5-band code','digit digit digit multiplier tolerance (brown = ±1 %)']],
html:`
<div class="box key"><b>Why this lesson exists</b>Real 2026 hands-on sections were not “wire it like the picture.” They asked you to <b>design</b>, <b>build</b>, <b>measure</b>, <b>calculate</b> and <b>justify</b> (sources of error!). Grading rewards: a working circuit (checked off by the supervisor), a labelled schematic, all measurements with units and significant figures, calculations shown, and a reasoned discussion. Practise these four task types end-to-end with a real breadboard.</div>

<h2>Task 1 — Build a target equivalent resistance (BullSO)</h2>
<p>Given resistors 2×100 Ω, 1×200 Ω, 4×50 Ω, build exactly <b>133.33 Ω</b> with at least two resistors in parallel and at least one in series with a combination. Points: labelled sketch (values labelled, parallel + series used, battery/complete circuit), step-by-step intermediate equivalents (≥ 3 calculations + final), explanation, and supervisor sign-off.</p>
<div class="box ex"><b>Worked solutions</b>• 100 Ω in series with (300 Ω‖50 Ω‖150 Ω): 1/R = 1/300 + 1/50 + 1/150 = 0.00333 + 0.02 + 0.00667 = 0.03 ⇒ 33.33 Ω; total = 133.33 Ω (the 300 Ω is 100 + 200 in series; the 150 Ω is 100 + 50 in series).<br>• Or 200 Ω ‖ 400 Ω = 133.33 Ω.<br>Method: write the target as a fraction (133.33 = 400/3) and look for “one-third” structures: three equal branches in parallel give ⅓ of one branch; 200 ‖ 400 = (200·400)/600 = 133.3.</div>

<h2>Task 2 — Find a mystery resistor using ONLY voltage measurements (GullSO 49)</h2>
<ol><li>Build a <b>voltage divider</b>: known resistor R_k in series with the unknown R_x across the battery (3 V pack). Choose R_k of the <b>same order of magnitude</b> as you expect R_x (here the kit had 22, 47, 220, 4.7 k, 10 k Ω; a 47 Ω or 22 Ω gives voltages that are neither tiny nor near the full supply → best precision).</li>
<li>Measure <b>V_s</b> (across the series pair, <i>while it is connected</i> — the battery sags under load) and <b>V_k</b> across the known resistor.</li>
<li>Current I = V_k/R_k; R_x = (V_s − V_k)/I = R_k(V_s − V_k)/V_k. Example: R_k = 47 Ω, V_s = 3.00 V, V_k = 1.37 V ⇒ R_x = 47 × 1.63/1.37 = <b>55.9 Ω</b> (actual 56 Ω ⇒ error 0.2 %).</li>
<li>Use correct sig figs (3 s.f. voltages ⇒ 3 s.f. answer). Note that the “known” resistor has a tolerance (±1 % for brown 5th band) — list it as an error source.</li>
<li>Write-up: why that circuit, what you measured (label on schematic), calculation, percent error = |actual − predicted|/actual × 100, <b>sources of error</b> (meter resolution, resistor tolerance, battery sag, contact resistance, meter loading R_in ≈ 10 MΩ), <b>improvements</b> (more digits, average several readings, choose R_k ≈ R_x, fresh battery, use 4-wire/other range).</li></ol>

<h2>Task 3 — LED from a datasheet (GullSO 50)</h2>
<p>Data read from the sheet: <b>max continuous current 50 mA</b> (derated to 30 mA at 70 °C ambient), <b>V_f typical 2.1 V (max 2.6 V) at I_F = 20 mA, 25 °C</b>.</p>
<ol><li>Never connect an LED directly to a 3 V pack: with no current limiter the current is set only by the tiny dynamic resistance ⇒ over-current ⇒ shortened life or burnout.</li>
<li>Circuit: battery — <b>resistor in series</b> — LED. The LED’s V_f is nearly fixed, so the resistor takes the rest of the voltage.</li>
<li>For 20 mA: R = (3 − 2.1)/0.020 = <b>45 Ω</b> → nearest in kit <b>47 Ω</b>.</li>
<li>Battery isn’t ideal (2.9–3.2 V) and V_f varies (typ 2.1 V, max 2.6 V): I_max = (3.2 − 2.1)/47 = <b>23 mA</b>; I_min = (2.9 − 2.6)/47 = <b>6.4 mA</b>.</li>
<li>“Twice as bright” ≈ twice the current (brightness ∝ I): 37.5 mA → R = 0.9/0.0375 = 24 Ω (use 22 Ω). Not OK above 70 °C ambient because the derated maximum there is 30 mA. Measure the actual current with the meter <b>in series</b> and compare with the prediction (explain mismatch: tolerance, V_f drift, battery).</li></ol>

<h2>Task 4 — Design a loaded voltage divider (GullSO 51)</h2>
<p>Spec: V_in = 3.00 V; unloaded V_out = 1.25 V; V_out ≥ 1.20 V with a 220 Ω load.</p>
<ol><li>Unloaded: V_out = V_in·R₂/(R₁ + R₂) ⇒ R₂/(R₁+R₂) = 1.25/3 = 0.4167 ⇒ <b>R₂ : R₁ = 5 : 7</b>.</li>
<li>Loaded: R₂ is replaced by R₂‖R_L, which is <b>smaller</b> than R₂ ⇒ V_out drops. To keep the drop small make R₂ (and R₁) <b>much smaller than R_L</b> (rule of thumb R₂ ≤ R_L/10, here the spec needs about R₂ ≤ 16 Ω).</li>
<li>Ideal choice: R₁ = 22 Ω, R₂ = 15.7 Ω. Check: 15.7‖220 = 14.65 Ω ⇒ V_out = 3 × 14.65/(22 + 14.65) = 1.199 V ✓.</li>
<li>With the kit (22, 47, 220, 4.7 k, 10 k): R₁ = 22 Ω, R₂ = 22 Ω‖56 Ω ≈ 15.8 Ω (if you have a 56 Ω) — or whichever parallel combination approximates 15.7 Ω.</li>
<li>Measure V_in, unloaded V_out, loaded V_out, and the voltage across every resistor; <b>KVL check</b>: V₁ + V₂ ≈ V_in. Power: P = V²/R for each; compare with ⅛ W (0.125 W). A 22 Ω resistor with 1.8 V across it dissipates 0.147 W &gt; ⅛ W — would be over rating!</li>
<li>Discuss: tolerance, battery variation, meter loading, contact resistance.</li></ol>
<div class="box filter"><b>Trade-off you must be able to state</b>Low-value dividers are “stiff” (output barely moves when loaded) but waste power and drain the battery; high-value dividers save power but sag badly under load. Design value ≈ R_L/10.</div>

<h2>Reading and recording like a pro</h2>
<ul><li><b>Significant figures</b>: multiplication/division ⇒ fewest s.f. of the inputs; addition/subtraction ⇒ fewest decimal places. Report meter readings to the meter’s displayed digits.</li>
<li><b>Colour codes in the 5-band kit</b>: Red-Red-Black-Gold-Brown = 22.0 Ω ±1 % · Yellow-Violet-Black-Gold-Brown = 47.0 Ω · Red-Red-Black-Black-Brown = 220 Ω · Yellow-Violet-Black-Brown-Brown = 4.70 kΩ · Brown-Black-Black-Red-Brown = 10.0 kΩ. A <b>4-band Red-Yellow-Black-Gold = 24 Ω ±5 %</b> (black multiplier ×1).</li>
<li>Do <b>not</b> remove tape from the mystery resistor; do not damage components; get the supervisor to <b>check off</b> builds <i>when asked</i> (points are tied to the sign-off).</li>
<li>Keep your time: these tasks are long; split the pair — one builds while the other writes/calculates.</li></ul>
`});
