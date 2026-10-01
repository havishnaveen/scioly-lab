/* Go deeper blocks, group G2: c12 c13 c14 c29 c30 c31 c32 c15 c16 c17 c11 */
(function(){
DATA.chal = DATA.chal || {};
function P(lv,q,s){return '<div class="prob"><span class="lv">'+lv+'</span>'+q+'</div><details class="sol"><summary></summary><div>'+s+'</div></details>';}

/* ---------------- c12 ---------------- */
DATA.chal['c12'] = `
<h3>Why it works</h3>
<p><b>Ampère's law in one line.</b> Go once around a path that threads the coil: the sum of B·(path length) equals μ₀ × (current enclosed). For a long solenoid the field is essentially all inside, so B·L = μ₀·N·I and B = μ₀NI/L. The quantity <b>N·I (ampere-turns)</b> is the "magnetising push"; L is the path it has to push along. That is why the real knobs are N·I and the path length, not N or I alone.</p>
<p><b>Magnetic circuit = Ohm's law.</b> For a core loop: B = μ₀·N·I / (l_iron/μ_r + l_gap). Treat N·I like a battery, each length divided by its permeability like a resistor. Iron with μ_r = 1000 makes 1 m of iron "look like" 1 mm of air. So a 1 mm air gap can cost as much as 1 m of iron. This is the single most important idea for predicting what happens when a load does not touch the core.</p>
<p><b>Units check.</b> μ₀ is in T·m/A, so μ₀·(N·I)/L gives T·m/A × A / m = T. Pull force F = B²A/(2μ₀): T²·m² / (T·m/A) = T·A·m = (N/(A·m))·A·m = N ✓.</p>
<p><b>Sensitivity table</b> (below saturation, air gap fixed):</p>
<table><tr><th>Change</th><th>B</th><th>Pull force</th><th>Coil heat (same V)</th></tr>
<tr><td>double I</td><td>×2</td><td>×4</td><td>×4 (I²R)</td></tr>
<tr><td>double N, same length and current</td><td>×2</td><td>×4</td><td>(R doubles or more)</td></tr>
<tr><td>double L, same N and I</td><td>×1/2</td><td>×1/4</td><td>same</td></tr>
<tr><td>swap air core for μ_r = 500 (unsaturated)</td><td>×500</td><td>×250000</td><td>same</td></tr></table>
<p>The last row is wildly optimistic: real iron saturates near 1.6–2 T, which is why the bottom line of any "how strong can it get" question is saturation or heating, never the formula.</p>
<h3>Tools of thought</h3>
<ul>
<li><b>Hold something constant and ask what is really free.</b> "Double the wire" questions hide whether you hold V, I, or power fixed. Write the constraint first, then B. Example: fixed battery + longer wire means R up, I down.</li>
<li><b>Ampere-turns as currency.</b> Compare two coils by N·I only; length and core come second. Example: 200 turns at 1 A beats 50 turns at 3 A (200 vs 150).</li>
<li><b>Bottleneck (series reluctance) thinking.</b> In a magnetic circuit the highest "resistance" piece dominates. Example: 0.3 m of iron (μ_r = 1000) acts like 0.3 mm of air, so a 1 mm gap is the main villain.</li>
<li><b>Fixed-budget scaling.</b> If the power P or the winding space is fixed, see what cancels. Example in Problem 6: the number of turns drops out entirely.</li>
<li><b>Energy for spikes.</b> A coil stores ½LI². Interrupt the current quickly and V = L·ΔI/Δt is large.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A solenoid has 400 turns on a 0.25 m long air former and carries 2.0 A. Find B inside. What current gives the same B if the turns are doubled but the length is also doubled?',
'B = μ₀NI/L = 4π×10⁻⁷ × 400 × 2 / 0.25 = <b>4.02 mT</b>. Key insight: only n = N/L matters. Doubling both N and L leaves n unchanged, so the <b>same 2.0 A</b> gives the same B. Sanity: 4 mT is about 80 times Earth\'s field, plausible for an air coil.')}
${P('Core','Looking at the left end of a solenoid (from outside, toward the coil), the current circulates clockwise. Is that end a north or a south pole? What happens to the pole if you look at the other end?',
'Right-hand rule #2: curl fingers along the current, thumb gives the north end. Clockwise as seen from the left end means the thumb points <i>away</i> from the viewer, into the coil, toward the far end. So the far (right) end is N and the near (left) end is <b>S</b>. Seen from the right end, the same current appears <b>counter-clockwise</b>: anticlockwise = the viewer faces the N pole. Memory aid: counter-clockwise = N, clockwise = S, as seen from the end you are looking at.')}
${P('Hard','A horseshoe electromagnet has two flat pole faces, each 2.0 cm² in contact with an iron keeper (no gap). The field in the core is 1.2 T. Estimate the lifting force, the mass it can lift (g = 9.8), and what happens to the force if the current is doubled while the core is already at this flux density.',
'Force per face = B²A/(2μ₀) = 1.44 × 2×10⁻⁴ / (2 × 4π×10⁻⁷) = 114.6 N. Two faces give <b>229 N</b>, about <b>23.4 kg</b>. Doubling the current when iron is near saturation gives far less than the ×4 that F ∝ B² would suggest, because B barely rises (maybe 1.2 → 1.6 T gives ×1.8). Key insight: the ideal ×4 only holds in the linear region. Units: T²·m²/(T·m/A) = N ✓.')}
${P('Hard','An iron ring (mean length 0.30 m, μ_r = 1000) carries a coil with N·I = 500 A-turns and has a 1.0 mm saw-cut gap. Find B in the gap. Then find B if the gap is closed (and comment).',
'B = μ₀·NI / (l_iron/μ_r + g) = 4π×10⁻⁷ × 500 / (0.30/1000 + 0.001) = 6.283×10⁻⁴ / 1.3×10⁻³ = <b>0.483 T</b>. Gap closed: 6.283×10⁻⁴ / 3×10⁻⁴ = 2.09 T, which is above saturation for ordinary iron, so the real value is about 1.6–2 T and the formula overestimates. Key insight: the 1 mm air gap is 77% of the total "reluctance" although it is 0.3% of the length; the gap cuts B by a factor 4.3.')}
${P('Hard','A 6.0 V ideal source feeds a solenoid wound as a single tight layer of 0.50 mm diameter copper wire (resistivity 1.7×10⁻⁸ Ω·m, turns touching). The wire is 10 m long. Find the current, the field inside (air core) and the heating power. Then repeat for 20 m of the same wire and explain the surprise.',
'Wire area = π(0.25 mm)² = 1.96×10⁻⁷ m². R = ρℓ/A = 1.7×10⁻⁸ × 10 / 1.96×10⁻⁷ = 0.866 Ω. I = 6/0.866 = 6.93 A. A single tight layer has n = 1/(wire diameter) = 2000 turns/m no matter how many turns. B = μ₀nI = 4π×10⁻⁷ × 2000 × 6.93 = <b>17.4 mT</b>. P = V²/R = <b>41.6 W</b> (very hot). With 20 m: R = 1.73 Ω, I = 3.46 A, B = <b>8.7 mT</b>, P = 20.8 W. Surprise: <b>more wire gives a weaker field</b>, because in one layer n is fixed by the wire thickness while I falls as 1/length. Key insight: hold V fixed and let R grow; adding turns needs extra layers (more length per turn) to pay off.')}
${P('Puzzle','A coil must fit a winding window of cross-section S_w = 4.0 cm² with copper fill factor f = 0.60 and mean turn length 0.10 m. You can dissipate P = 20 W in the copper. Does choosing 100 turns or 1000 turns change the ampere-turns you can reach? Compute N·I (ρ = 1.7×10⁻⁸ Ω·m).',
'Wire area a = f·S_w/N, length = N·l, so R = ρ·N·l/a = ρ·N²·l/(f·S_w). Fixed power: I = √(P/R) ∝ 1/N, so <b>N·I is independent of N</b>: N·I = √(P·f·S_w/(ρ·l)) = √(20 × 0.6 × 4×10⁻⁴ / (1.7×10⁻⁸ × 0.1)) = <b>1680 A-turns</b>. Check with N = 100: a = 2.4×10⁻⁶ m², R = 0.0708 Ω, I = 16.8 A, N·I = 1680 ✓. Consequence: choose N to match the supply voltage you have, not to "get more field". Key insight: at fixed copper and fixed power, turns are free.')}
${P('Puzzle','A battery (6.0 V, internal resistance 1.0 Ω) drives a coil whose winding resistance is 0.050 Ω per turn. The ampere-turns N·I rise with N but saturate. What is the maximum possible N·I as N→∞, and how many turns give 90% of it?',
'N·I = N·6/(1 + 0.05N). As N→∞ this tends to 6/0.05 = <b>120 A-turns</b> (the source voltage divided by the resistance per turn). 90% = 108: 6N = 108(1 + 0.05N) = 108 + 5.4N, so 0.6N = 108, <b>N = 180</b>. Check: 6×180/(1+9) = 108 ✓. Key insight: once the coil resistance dominates the battery\'s internal resistance, extra turns add no extra ampere-turns, only heat.')}
${P('Hard','An iron-cored coil has N = 1000, cross-section 2.0 cm², length 0.10 m, and μ_r = 500 (unsaturated), carrying 1.0 A. The current is cut to zero in 1.0 ms with no protection. Estimate the inductance, the stored energy and the average voltage across the switch. Why does a flyback diode help?',
'L = μ₀μ_r N²A/ℓ = 4π×10⁻⁷ × 500 × 10⁶ × 2×10⁻⁴ / 0.10 = <b>1.26 H</b>. E = ½LI² = <b>0.63 J</b>. V ≈ L·ΔI/Δt = 1.26 × 1/10⁻³ ≈ <b>1260 V</b> (a spark across the contacts). A reverse-biased diode across the coil gives the current a path, clamping the spike to about 0.7 V while the current decays with time constant L/R. Key insight: energy, not current, is conserved: the ½LI² has to go somewhere (heat in the diode and coil instead of in an arc).')}
<h3>Trap list</h3>
<ul>
<li><b>"More turns = stronger"</b> without checking what is held constant: with a fixed battery R grows too, and with a single layer of fixed wire thickness the field can even fall.</li>
<li><b>Forgetting the gap.</b> A load that does not touch the core (paper, paint, rust) can halve the force or worse.</li>
<li><b>B ∝ I forever.</b> Saturation and heating cap everything; quote the cap when asked "how strong can it get".</li>
<li><b>Coil diameter</b> does not appear in B = μ₀nI for a long solenoid. Flux does depend on it (Φ = BA).</li>
<li><b>Polarity from direction of winding.</b> Reversing the battery OR the winding direction swaps the poles; doing both restores them.</li>
<li><b>Soft vs hard iron:</b> a soft-iron core demagnetises when current stops; hard steel retains magnetism.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a 1 mm gap matters more than a long iron path, and why ampere-turns (not turns alone) set the strength.</p>
`;

/* ---------------- c13 ---------------- */
DATA.chal['c13'] = `
<h3>Why it works</h3>
<p><b>Motional EMF and Faraday are one idea.</b> A rod of length L moving at v across a field B sweeps area at rate dA/dt = L·v. Flux through the circuit changes at rate B·L·v, and the EMF is exactly that: ε = BLv = B·dA/dt. Faraday's law ε = −N·dΦ/dt is the general statement: it does not care whether the flux changes because the field changes, the area changes, or the angle changes.</p>
<p><b>Lenz's minus sign is energy conservation.</b> If the induced current <i>helped</i> the change, pushing a magnet toward a coil would speed up the magnet and produce free electrical energy without limit. So the induced current must oppose the change. Consequently every induced EMF costs mechanical work: pulling a rod at v against the magnetic force F = B²L²v/R takes power F·v = B²L²v²/R = ε²/R, exactly the heat in the circuit. <b>Energy accounting always closes.</b></p>
<p><b>Ideal transformer.</b> The same changing flux Φ(t) threads every turn, so each turn has the same EMF dΦ/dt. Then V_p/N_p = V_s/N_s = dΦ/dt (voltage per turn is the same everywhere). No power is lost in the ideal case, so V_pI_p = V_sI_s and currents go inversely. Reflected load: R_in = V_p/I_p = (N_p/N_s)V_s / ((N_s/N_p)I_s) = (N_p/N_s)²·R_L.</p>
<p><b>What sets the core flux.</b> With V = N·dΦ/dt and a sine voltage, V_rms = (2π/√2)·f·N·Φ_max ≈ 4.44·f·N·Φ_max. So Φ_max = V/(4.44 f N). The flux is set by the voltage per turn and the frequency, not by the load.</p>
<p><b>Units.</b> Wb = V·s, so dΦ/dt is in volts. Transformer ratios are dimensionless; R_in = (turns ratio)²·R keeps ohms.</p>
<table><tr><th>Change (ideal transformer, fixed load R_L)</th><th>V_s</th><th>I_s</th><th>I_p</th><th>Power</th></tr>
<tr><td>double N_s</td><td>×2</td><td>×2</td><td>×4</td><td>×4</td></tr>
<tr><td>double V_p</td><td>×2</td><td>×2</td><td>×2</td><td>×4</td></tr>
<tr><td>halve R_L</td><td>same</td><td>×2</td><td>×2</td><td>×2</td></tr>
<tr><td>double frequency (ideal)</td><td>same</td><td>same</td><td>same</td><td>same</td></tr></table>
<h3>Tools of thought</h3>
<ul>
<li><b>Voltage per turn.</b> One number (V/N) applies to every winding. Example: 120 V over 400 turns = 0.3 V per turn, so a 12 V winding needs 40 turns.</li>
<li><b>Energy first, then force.</b> For moving rods and magnets, compute power = force × speed and check it equals I²R. Example: one line verifies whichever half you trust less.</li>
<li><b>Lenz as "refuse the change".</b> Ask what the flux is doing (growing/shrinking, which way), then the loop makes a field that fights it. Example: flux up-and-growing means induced field points down.</li>
<li><b>Scaling for grids.</b> Loss ∝ I² ∝ 1/V² for fixed delivered power. Example: ×20 voltage gives ×1/400 loss.</li>
<li><b>Extremes.</b> Open secondary: only a small magnetising current; shorted secondary: huge current. Example: this shows why the primary current tracks the load.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A 120-turn coil of area 25 cm² sits with its axis along a field that is flipped from +0.80 T to −0.80 T in 0.040 s. Find the average EMF. What does a student who uses ΔB = 0 (because "the field has the same size") get?',
'Flux goes from +0.80×0.0025 = +2.0 mWb to −2.0 mWb, so ΔΦ = 4.0 mWb. |ε| = 120 × 0.004 / 0.040 = <b>12 V</b>. The trap: ΔB is 1.6 T, not 0; flux is a signed quantity. Sanity: 12 V from a hand-sized coil flipping in 40 ms is plausible.')}
${P('Core','A step-down transformer is fed 2400 V and must deliver 600 W at 120 V to a resistive load. Find the turns ratio, both currents, the load resistance, and the resistance the source "sees".',
'Ratio N_p/N_s = 2400/120 = <b>20</b>. I_s = 600/120 = 5 A, I_p = 600/2400 = <b>0.25 A</b> (= 5/20 ✓). R_L = 120/5 = 24 Ω. R_in = 20² × 24 = <b>9600 Ω</b>, confirmed by V_p²/P = 2400²/600 = 9600 ✓. Key insight: the source sees a load 400 times larger than the real one.')}
${P('Core','A bar magnet is dropped, N pole first and pointing down, through a horizontal metal ring (seen from above). Give the current direction as the magnet approaches and as it leaves out of the bottom. Is the magnet\'s acceleration above or below g in each stage?',
'Approaching: downward flux through the ring is increasing, so the ring makes an upward field: <b>counter-clockwise</b> seen from above (this ring-top face acts as an N pole and repels the N pole). Leaving: downward flux is decreasing, so the ring tries to keep it: downward induced field, <b>clockwise</b> from above (top face S, attracting the magnet back). In both stages the force on the magnet is upward, so the acceleration is <b>below g</b>. Key insight: the current reverses as the magnet passes, but the braking does not.')}
${P('Hard','A 50 MW generator output must travel through lines with total resistance 10 Ω. Compare sending it at 25 kV and at 500 kV: current, line loss, and percentage lost. What goes wrong with "P = V²/R = (500 kV)²/10 Ω"?',
'25 kV: I = 50×10⁶/25×10³ = 2000 A, loss = I²R = 4×10⁶×10 = 40 MW (<b>80%</b>; the 20 kV drop nearly eats the 25 kV). 500 kV: I = 100 A, loss = 10⁴×10 = 100 kW (<b>0.2%</b>). Step-up by 20 cuts the loss by 20² = 400. The wrong formula uses the whole line voltage as if it all fell across the lines: that gives 25 GW, absurd. The loss uses the <i>drop along the line</i> (I·R = 1 kV), not the supply voltage. Key insight: same power, lower current.')}
${P('Hard','A transformer delivers 12 V at 5.0 A from a 120 V primary. At full load its copper loss is 1.5 W and its iron (core) loss is 1.0 W (iron loss stays fixed, copper loss scales as load² ). Find (a) the primary current at full load, (b) efficiency at full load, (c) efficiency at half load, (d) the load fraction and efficiency at which efficiency peaks.',
'P_out = 60 W. (a) P_in = 60 + 2.5 = 62.5 W, I_p = 62.5/120 = <b>0.521 A</b>. (b) η = 60/62.5 = <b>96.0%</b>. (c) half load: P_out = 30 W, copper = 1.5/4 = 0.375 W, iron 1.0 W, η = 30/31.375 = <b>95.6%</b>. (d) Peak when variable loss = fixed loss: 1.5x² = 1.0 so x = 0.8165; P_out = 49.0 W, total loss 2.0 W, η = 49.0/51.0 = <b>96.1%</b>. Key insight: maximum efficiency is where the copper and iron losses are equal, and it is below full load.')}
${P('Puzzle','A rod of mass 50 g and length 0.40 m slides without friction on long horizontal rails joined at one end (total circuit resistance 0.50 Ω) in a vertical field of 0.60 T. It is given a push to 5.0 m/s and released. Find how far it slides before stopping and the heat produced. Is that "how far" finite?',
'Force F = B²L²v/R opposes motion, so m·dv/dt = −(B²L²/R)·v. Write v = dx/dt: m·dv = −(B²L²/R)·dx, so the total distance is x = m·R·v₀/(B²L²) = 0.05×0.5×5/(0.36×0.16) = <b>2.17 m</b>. (The time constant is m·R/(B²L²) = 0.434 s, and v decays exponentially, never quite reaching zero but the distance converges.) Heat = ½mv₀² = 0.5×0.05×25 = <b>0.625 J</b>. Key insight: force ∝ v makes the stopping distance linear in v₀, found by integrating over x instead of t.')}
${P('Puzzle','You have 2.0 m of thin wire and will make N identical circular turns of it to use as a pick-up coil in a field that changes at 0.50 T/s (axis along the field). Which N gives the largest EMF? Compare N = 1 with N = 4.',
'Each turn has circumference C = 2/N, so its area is A = C²/(4π) = 1/(πN²). The EMF is N·A·dB/dt = (1/(πN))·0.5. So ε ∝ <b>1/N</b>: N = 1 gives 0.159 V, N = 4 gives 0.0398 V. Insight: area falls as N², turn count rises only as N, so <b>one big loop beats many small ones for fixed wire</b> (the coil resistance is set by the total wire length, so it is the same for every N). Sanity: 1 turn of radius 0.318 m has area 0.318 m²; 0.318 × 0.5 = 0.159 V ✓.')}
${P('Puzzle','A 60 Hz transformer has a 1000-turn primary and a 5.0 cm² core; it runs from 120 V rms. Find the peak core flux and peak flux density. Then the same transformer is plugged into a 120 V, 50 Hz supply. What changes and why does it matter?',
'V_peak = 120√2 = 169.7 V. Φ_max = V_peak/(ω N) = 169.7/(377 × 1000) = <b>0.450 mWb</b>, so B_max = 0.450×10⁻³/5×10⁻⁴ = <b>0.90 T</b>. At 50 Hz, Φ_max = 169.7/(314 × 1000) = 0.540 mWb, B = <b>1.08 T</b>, which is 20% higher. The core moves toward saturation, magnetising current climbs sharply, and the transformer runs hot. Key insight: flux ∝ V/(f·N); that is why a 50 Hz transformer is fine on 60 Hz but not the other way around at full voltage.')}
<h3>Trap list</h3>
<ul>
<li><b>Steady DC on a transformer:</b> no changing flux, no secondary voltage; the primary may overheat because only its small winding resistance limits the current.</li>
<li><b>Step-up means "more power".</b> It gives more voltage and less current; power is conserved (ideal) or reduced (real).</li>
<li><b>Current ratio upside down.</b> I_s/I_p = N_p/N_s. Check with power: the side with higher voltage has lower current.</li>
<li><b>Flux is signed.</b> Flipping a field changes flux by twice its size, not zero.</li>
<li><b>Lenz: "opposes the field"</b> is false; it opposes the <i>change</i> in flux. When flux is falling, the induced field points the same way.</li>
<li><b>P = V²/R on the transmission line</b> uses the wrong voltage. Use I²R with I from P/V.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why the grid transmits at very high voltage, and why a transformer will not work on a battery.</p>
`;

/* ---------------- c14 ---------------- */
DATA.chal['c14'] = `
<h3>Why it works</h3>
<p><b>Derive ε = NBAω.</b> A rectangular coil, sides of length L (parallel to the axis) and width w, spins at ω. Each active side moves at speed v = ω·(w/2) through the field, so each produces B·L·v = B·L·ω·w/2. The two sides add around the loop: ε = B·L·w·ω = B·A·ω per turn, so N·B·A·ω for N turns. Its time-dependence is sinusoidal because only the component of v perpendicular to B counts: ε = NBAω·sin(ωt), where ωt is the angle between the coil normal and B.</p>
<p><b>Flux and EMF are a quarter-cycle apart.</b> Φ = BA·cos(ωt) is maximum when the coil face is square to the field, but ε = −dΦ/dt is maximum when the flux is <i>zero</i> (coil plane parallel to B, sides cutting across the field at full speed). Expect this to appear as a puzzle.</p>
<p><b>Motor and generator are the same device.</b> Power balance in a motor: electrical in = V·I = ε_back·I + I²R. The term ε_back·I is the mechanical power, which equals τ·ω. So ε_back·I = τ·ω with ε_back = k·ω gives τ = k·I. That is why the torque constant (N·m/A) and the voltage constant (V·s/rad) are the same number in SI. The units check: V·s = J/A = N·m/A ✓.</p>
<p><b>Why a commutator?</b> A coil in a field feels torque τ = NBIA·sinθ. Without reversal the torque changes sign every half-turn and the coil just oscillates. The split-ring commutator flips the current at θ = 0, π, so the torque is |sinθ|, always one-way. Average of |sinθ| over a half-turn is 2/π ≈ 0.64.</p>
<table><tr><th>Generator change</th><th>Open-circuit V</th><th>Frequency</th><th>Power into a fixed resistor</th><th>Torque needed (no coil resistance)</th></tr>
<tr><td>double speed</td><td>×2</td><td>×2</td><td>×4</td><td>×2</td></tr>
<tr><td>double B</td><td>×2</td><td>same</td><td>×4</td><td>×4</td></tr>
<tr><td>double N</td><td>×2</td><td>same</td><td>×4</td><td>×4</td></tr></table>
<h3>Tools of thought</h3>
<ul>
<li><b>Energy balance first.</b> Mechanical in = electrical out + losses. Example: torque × ω must equal ε·I for a generator.</li>
<li><b>Symmetry between motor and generator.</b> Measure the open-circuit voltage at a known speed and you know the motor constant. Example: 9 V at 3000 rpm gives k = 0.0286 V·s/rad.</li>
<li><b>Average of a rectified sine is 2/π of the peak.</b> Example: commutated peak 78.5 V averages 50.0 V.</li>
<li><b>Count poles from speed.</b> n = 120f/poles. Example: 90 rpm at 60 Hz means 80 poles (big hydro machines are slow, so they need many poles).</li>
<li><b>Load raises the torque you feel.</b> Lenz: more current means more braking. Example: halving the load resistance raises the torque at fixed speed.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A 50-turn coil of area 0.020 m² spins at 3000 rpm in a uniform 0.25 T field. Find the frequency, peak EMF and RMS EMF.',
'ω = 3000 × 2π/60 = 314.2 rad/s, f = 50 Hz. ε_max = NBAω = 50 × 0.25 × 0.020 × 314.2 = <b>78.5 V</b>. ε_rms = 78.5/√2 = <b>55.5 V</b>. Sanity: peak/rms = 1.414 ✓; the unit is T·m²/s = Wb/s = V ✓.')}
${P('Core','A 24 V motor has armature resistance 3.0 Ω. (a) Stall current. (b) At steady speed its back-EMF is 18 V; find current, input power, heat and mechanical power and efficiency.',
'(a) I = 24/3 = <b>8 A</b>. (b) I = (24 − 18)/3 = <b>2 A</b>; P_in = 48 W; heat = 2² × 3 = 12 W; P_mech = ε·I = 36 W; η = 36/48 = <b>75%</b> (= ε/V). Check: 36 + 12 = 48 ✓.')}
${P('Core','A hydroelectric generator delivers 60 Hz and turns at 90 rpm. How many magnetic poles does it have? What would be the speed of a 2-pole machine on the same grid?',
'n = 120f/p so p = 120 × 60/90 = <b>80 poles</b>. A 2-pole machine: 120 × 60/2 = <b>3600 rpm</b> (steam turbines). Key insight: one electrical cycle per pole pair per revolution, so slow rotors need many poles.')}
${P('Hard','The coil of Problem 1 is connected to a split-ring commutator so the output is |ε| (pulsating DC). Find the average output voltage. Why is the average not the peak divided by √2?',
'Average of |sin| over a half-cycle = 2/π = 0.6366, so V_avg = 78.54 × 0.6366 = <b>50.0 V</b>. The RMS is 55.5 V, which is larger: RMS squares first, so big values count more. Average is for charging a battery (charge delivered); RMS is for heating. Key insight: different averages answer different questions.')}
${P('Hard','A generator has EMF 12 V and coil resistance 2 Ω. It supplies a 10 Ω load while turning at 100 rad/s. Find the current, terminal voltage, load power, coil heat, mechanical power and the torque needed. Then find the mechanical power if the load is changed to 5 Ω.',
'I = 12/(2 + 10) = <b>1.00 A</b>; terminal voltage = 12 − 1×2 = <b>10 V</b>; P_load = 10 W; coil heat = 2 W; P_mech = ε·I = <b>12 W</b> = 10 + 2 ✓; torque = P/ω = 12/100 = <b>0.12 N·m</b> (= k·I with k = 0.12 V·s/rad). With 5 Ω: I = 12/7 = 1.714 A, P_mech = 12 × 1.714 = <b>20.6 W</b>; torque rises to 0.206 N·m. Key insight: a loaded generator is harder to turn, exactly as Lenz demands. With the load removed, the torque (ignoring friction) goes to zero.')}
${P('Hard','A small motor, used as a generator, gives 9.0 V open circuit when the shaft is turned at 3000 rpm. Its winding resistance is 1.5 Ω. If it is now run as a motor from 6.0 V with no friction, find the no-load speed (rpm) and the stall torque.',
'k = ε/ω = 9.0/(3000 × 2π/60) = 9.0/314.2 = <b>0.0286 V·s/rad</b> (also = 0.0286 N·m/A). No-load: ω₀ = V/k = 6/0.0286 = 209.4 rad/s = <b>2000 rpm</b> (simply 6/9 of 3000 rpm: speed is proportional to voltage). Stall: I = 6/1.5 = 4 A, τ = kI = <b>0.115 N·m</b>. Key insight: the generator test measures the motor constant without ever stalling it.')}
${P('Puzzle','A generator feeds a 10 Ω resistor and has negligible coil resistance. Its rms output is 40 V at some speed. The speed is doubled. Compare the load power, the mechanical power, and the torque you must apply.',
'Before: P = 40²/10 = 160 W. After: V = 80 V, P = 6400/10 = <b>640 W</b> (×4). Mechanical power must equal electrical power: ×4. Since P = τω and ω doubled, the torque doubles (<b>×2</b>). Key insight: power ∝ ω², torque ∝ ω for a resistive load. Frequency also doubles, which is irrelevant for a pure resistor.')}
${P('Puzzle','A simple one-coil motor has N = 100, B = 0.40 T, A = 3.0 cm² and I = 2.0 A. (a) Find the peak torque. (b) With a commutator, what is the average torque? (c) At which coil angle does the coil fail to self-start, and how do real motors fix that?',
'(a) τ_max = NBIA = 100 × 0.40 × 2.0 × 3×10⁻⁴ = <b>0.024 N·m</b> (note 3.0 cm² = 3×10⁻⁴ m²). (b) With a commutator, τ = τ_max·|sinθ| has average (2/π)τ_max = <b>0.0153 N·m</b>. (c) At θ = 0 (coil plane perpendicular to B, sinθ = 0) the torque is zero: a dead spot. Real motors use <b>several coils</b> at different angles (3 or more commutator segments) so some coil always has torque, and the torque ripple is small.')}
<h3>Trap list</h3>
<ul>
<li><b>Flux maximum is not EMF maximum.</b> The EMF peaks when the flux is zero (coil plane along B).</li>
<li><b>Peak vs RMS vs average.</b> A multimeter on AC reads RMS (0.707 of peak); a rectified average is 0.637 of peak.</li>
<li><b>Generator output always goes through the load.</b> The terminal voltage is ε − IR_coil, less than the EMF when loaded.</li>
<li><b>Power is conserved, not created.</b> "More electrical output" must come with more torque, never free.</li>
<li><b>Poles and rpm:</b> n = 120f/p; using 60f/p gives half the answer for a 2-pole machine.</li>
<li><b>Units of area:</b> cm² to m² is ×10⁻⁴, not ×10⁻².</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a motor and a generator are the same machine, and why a spinning motor draws less current than a stalled one.</p>
`;

/* ---------------- c29 ---------------- */
DATA.chal['c29'] = `
<h3>Why it works</h3>
<p><b>One energy equation explains the whole motor.</b> Multiply V = ε + I·R by I: V·I = ε·I + I²·R. Electrical power in = (mechanical power out) + (heat). So P_mech = ε·I, and since P_mech = τ·ω and ε = k_e·ω, we get τ = k_e·I: <b>the torque constant and the voltage constant are the same number</b> (k_t = k_e in SI). Units: V·s = (J/C)·s = J/A = N·m/A ✓. In practice, datasheets use mixed units (mN·m/A and rpm/V), so converting is a classic puzzle: k (V·s/rad) = 60/(2π × speed-constant in rpm/V).</p>
<p><b>Eliminating I gives the speed–torque line.</b> I = τ/k, so V = kω + τR/k and ω = V/k − (R/k²)·τ. It is a straight line from the no-load speed ω₀ = V/k (τ = 0) to the stall torque τ_s = kV/R (ω = 0). Every quantity you need sits on this line, and two numbers (ω₀ and τ_s at a known V) fix k and R.</p>
<p><b>Ratios beat resistances.</b> I/I_stall = 1 − ε/V = 1 − ω/ω₀. You can answer many problems without knowing R or k: if the current is 25% of stall current, the speed is 75% of the no-load speed and the efficiency (ε/V) is 75%.</p>
<p><b>Max power at half speed.</b> P = ε(V−ε)/R is a parabola in ε with peak at ε = V/2: P_max = V²/(4R), efficiency only 50%. Because the parabola is symmetric, any power below the peak occurs at two speeds, one fast and efficient, one slow and wasteful.</p>
<table><tr><th>Change</th><th>ω₀ (no-load)</th><th>Stall torque</th><th>Stall current</th></tr>
<tr><td>double V</td><td>×2</td><td>×2</td><td>×2</td></tr>
<tr><td>double R_a</td><td>same</td><td>×1/2</td><td>×1/2</td></tr>
<tr><td>double k (stronger magnet or more turns)</td><td>×1/2</td><td>×2</td><td>same</td></tr></table>
<h3>Tools of thought</h3>
<ul>
<li><b>Use the ratio I/I_stall = 1 − ω/ω₀.</b> Example: a motor drawing 0.3 A running and 4 A stalled is at 92.5% of its no-load speed.</li>
<li><b>Two-point fit.</b> Two measurements (no-load speed, stall) give k and R. Example: ω₀ = 500 rad/s at 12 V gives k = 0.024.</li>
<li><b>Constant torque load means constant current</b> whatever the voltage (I = τ/k). Example: series resistors do not lower the current; they lower the speed.</li>
<li><b>Parabola symmetry.</b> Power ε(V−ε)/R has equal values at ε and V−ε. Example: 16 W occurs at 4 V and 8 V for a 12 V, 2 Ω motor.</li>
<li><b>Energy ledger.</b> Write electrical in, heat, friction, useful mechanical out; they must sum. Example: η_useful ≠ ε/V if friction exists.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A 12 V motor draws 8 A when its shaft is held (stalled) and 2 A at steady speed. Find R_a, the back-EMF, heat, mechanical power and efficiency at steady speed.',
'R_a = 12/8 = <b>1.5 Ω</b>. ε = 12 − 2×1.5 = <b>9 V</b>. Heat = 2² × 1.5 = 6 W. P_in = 24 W. P_mech = 9×2 = <b>18 W</b> (24 − 6 ✓). η = 18/24 = <b>75%</b> = ε/V. Sanity: current at speed is 25% of stall, speed is 75% of no-load.')}
${P('Core','A 12 V motor spins at 500 rad/s unloaded and has a stall torque of 0.060 N·m at 12 V. Find k, R_a, the stall current, and the speed, current and efficiency when it drives a load torque of 0.020 N·m.',
'k = V/ω₀ = 12/500 = <b>0.024 V·s/rad</b>. τ_s = kV/R so R = kV/τ_s = 0.024×12/0.060 = <b>4.8 Ω</b>; I_stall = 2.5 A. Load 0.020 N·m: I = τ/k = 0.833 A, ε = 12 − 0.833×4.8 = 8.0 V, ω = 8/0.024 = <b>333 rad/s</b> (the line: 500 × (1 − 0.02/0.06) = 333 ✓). η = 8/12 = <b>66.7%</b>; P_mech = 0.02 × 333 = 6.67 W. Key insight: two points define the whole motor.')}
${P('Hard','A 12 V, 2.0 Ω motor is being loaded. (a) Find the maximum mechanical power. (b) At what two back-EMFs is the mechanical power 16 W, and which is better to run at?',
'(a) P_max = V²/(4R) = 144/8 = <b>18 W</b> at ε = 6 V, η = 50%. (b) ε(12 − ε)/2 = 16 gives ε² − 12ε + 32 = 0, so ε = <b>4 V or 8 V</b>. Efficiencies ε/V = 33% and 67%. Choose 8 V: same 16 W output, far less waste (at ε = 4 V: I = 4 A, P_in = 48 W, heat = 32 W; at ε = 8 V: I = 2 A, P_in = 24 W, heat = 8 W). Key insight: P(ε) is a parabola symmetric about V/2.')}
${P('Hard','A 12 V motor with R_a = 2.0 Ω draws 0.30 A with no load (shaft free) because of friction and iron losses. With a load it draws 3.0 A. Find (a) the useful shaft power, treating the no-load current as the loss current, and (b) the useful efficiency. Compare with ε/V.',
'At 3.0 A: ε = 12 − 3×2 = 6 V. Gross electro-mechanical power ε·I = 18 W. The 0.30 A no-load current is the current needed just to overcome friction (torque k·I₀), so useful current = 3.0 − 0.30 = 2.7 A and useful power = ε·(I − I₀) = 6 × 2.7 = <b>16.2 W</b>. η = 16.2/(12×3) = <b>45%</b>, while ε/V = 50% ignores friction. Key insight: ε/V is an upper bound (the copper-loss-only efficiency).')}
${P('Puzzle','A 12 V motor (R_a = 2.0 Ω, k = 0.020 V·s/rad) drives a constant-torque load of 0.040 N·m. Compare two ways to run it at the same speed: a series resistor, or an ideal PWM controller (inductance smooths the current). First find the speed at 12 V; then with a 2 Ω series resistor; then the efficiency of each method at that reduced speed.',
'Constant torque gives constant current: I = τ/k = 0.040/0.020 = <b>2.0 A</b> in every case. Direct 12 V: ε = 12 − 2×2 = 8 V, ω = 400 rad/s. With 2 Ω in series: ε = 12 − 2×(2+2) = 4 V, ω = <b>200 rad/s</b>; P_in = 24 W, P_mech = 0.04×200 = 8 W, η = <b>33%</b>. PWM at the same speed needs an average voltage of ε + IR = 4 + 4 = 8 V (67% duty). Average input power = 8 V × 2 A = 16 W, so η = 8/16 = <b>50%</b>. Key insight: the resistor wastes 16 W; PWM only wastes the copper loss. Note the current is the same, so torque, not voltage, sets current.')}
${P('Puzzle','A motor (k = 0.020 V·s/rad, R_a = 2.0 Ω) turns a fan whose load torque is τ = 6.67×10⁻⁷·ω² (N·m). At 12 V it settles at 300 rad/s. What speed does it reach at 6 V? Is it 150 rad/s?',
'Steady state: V = kω + (τ/k)R = 0.02ω + 6.67×10⁻⁵ ω². At 12 V, ω = 300 (check: 6 + 6 = 12 ✓). At 6 V: 6.67×10⁻⁵ω² + 0.02ω − 6 = 0, so ω = <b>185 rad/s</b> = 0.62 of the 12 V speed, not 0.5. Reason: at lower speed the fan needs less torque, so less current, so less IR drop; the speed falls less than the voltage. Key insight: "speed ∝ V" only holds when the load current is fixed or tiny.')}
${P('Puzzle','A motor (k = 0.020 V·s/rad, R_a = 2.0 Ω) lifts a weight through a drum so the load torque is 0.060 N·m. On 12 V it lifts steadily. The load is then lowered, so gravity now drives the shaft with the same 0.060 N·m while still connected to 12 V. Find the steady speed, current, and the flows of power. Where does the extra energy go?',
'Lifting: I = 0.06/0.02 = 3 A, ε = 12 − 6 = 6 V, ω = 300 rad/s (P_mech = 18 W). Lowering: the current reverses, I = −3 A, ε = 12 − (−3)(2) = <b>18 V</b>, ω = 18/0.02 = <b>900 rad/s</b> (faster than the no-load speed of 600). Power: gravity gives 0.06 × 900 = 54 W to the shaft; the coil loses I²R = 18 W; the remaining 36 W is <b>returned to the supply</b> (12 V × 3 A; regenerative braking). Key insight: the current sign flips and the motor becomes a generator whenever the load drives it above ω₀.')}
${P('Hard','A motor runs at 6000 rpm unloaded on 12 V. With a load it draws 25% of its stall current. (a) Find its speed. (b) What supply voltage gives 3000 rpm at the same load (same current)?',
'(a) I/I_stall = 1 − ω/ω₀ gives ω = 0.75 × 6000 = <b>4500 rpm</b>. (b) 3000 rpm needs ε = 6 V (half the no-load speed at 12 V). The IR drop is still 25% of 12 V = 3 V, so V = 6 + 3 = <b>9 V</b>, not 6 V. Key insight: to lower the speed under constant torque subtract only ε, not the drop.')}
<h3>Trap list</h3>
<ul>
<li><b>Current is not proportional to speed.</b> Current falls as speed rises; torque and current go together.</li>
<li><b>"Half the voltage, half the speed"</b> only at constant current or no load. With a load, compute ε = V − IR first.</li>
<li><b>Efficiency ≠ 50% always.</b> 50% is at maximum power; light loads are more efficient.</li>
<li><b>Stall is not safe.</b> I = V/R with no mechanical output, all heat.</li>
<li><b>Mixing rpm and rad/s</b> in k_e: 1000 rpm = 104.7 rad/s, and 1 V·s/rad equals 0.1047 V per rpm. Convert explicitly, never by memory.</li>
<li><b>Ignoring friction.</b> Useful power is ε·(I − I₀), not ε·I.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a motor draws huge current when it starts but little when spinning freely, and why a motor can turn into a generator.</p>
`;

/* ---------------- c30 ---------------- */
DATA.chal['c30'] = `
<h3>Why it works</h3>
<p><b>All DC motors obey ε = K·φ·ω and τ = K·φ·I_a</b> (φ = field flux per pole). The four DC types differ only in <i>where the field flux comes from</i>:</p>
<table><tr><th>Type</th><th>Field</th><th>Flux φ</th><th>Behaviour</th></tr>
<tr><td>Permanent-magnet</td><td>magnets</td><td>constant</td><td>Torque ∝ I, speed falls linearly with load; reverses with supply polarity; simple speed control by voltage or PWM.</td></tr>
<tr><td>Shunt-wound</td><td>field coil in <i>parallel</i> with armature</td><td>about constant (set by V)</td><td>Nearly constant speed from no load to full load; weakening the field (extra series rheostat) <i>raises</i> speed; an open field circuit can cause runaway.</td></tr>
<tr><td>Series-wound</td><td>field coil in <i>series</i> with armature</td><td>∝ I (until saturation)</td><td>τ ∝ I² so very high starting torque; speed rises sharply as load falls (never run unloaded); runs on AC or DC (universal motor).</td></tr>
<tr><td>Compound</td><td>both shunt and series field coils</td><td>shunt part constant + series part ∝ I</td><td>Cumulative compound (fields aid): strong start torque like series, but the shunt field prevents runaway; speed falls more with load than a shunt motor.</td></tr></table>
<p><b>Why the series motor runs away.</b> ε = K·I·ω and ε ≈ V, so ω ≈ V/(K·I). As the load shrinks, I shrinks, and ω grows without bound until friction or windage stops it. Why it still works on AC: reversing the supply reverses <i>both</i> the field and the armature current, so τ ∝ I² never changes sign. The same reason means <b>reversing the supply on a series (or shunt) motor does not reverse it</b>; you must swap the armature leads alone (or the field alone). A permanent-magnet motor does reverse with the supply.</p>
<p><b>PWM and power.</b> A resistor driven by a square wave has average power (1/T)∫v²/R dt = D·V²/R, not (D·V)²/R. Because v² is averaged, not v. Motor speed follows the <i>average voltage</i> D·V (the inductance averages the current).</p>
<p><b>Gears.</b> Ideal gears conserve power: τ_in·ω_in = τ_out·ω_out, so a reduction N multiplies torque by N and divides speed by N. With efficiency η: τ_out = η·N·τ_in.</p>
<p><b>Induction slip.</b> The stator's rotating field turns at n_s = 120f/p. If the rotor went exactly at n_s, it would see no changing flux, no induced current and no torque. So it lags by slip s = (n_s − n)/n_s, the rotor currents have frequency s·f, and torque needs s > 0. Driven above n_s, s is negative and the machine is a generator.</p>
<h3>Tools of thought</h3>
<ul>
<li><b>Ask "where does the flux come from?"</b> Everything about the four DC types follows from one sentence about φ.</li>
<li><b>Treat a switch as a function of time.</b> Averages of v and v² differ. Example: D = 35%, 24 V, 6 Ω: P = 33.6 W.</li>
<li><b>Enumerate states, then prune illegal ones.</b> H-bridge: 16 switch states, remove shoot-through, classify the rest.</li>
<li><b>Ratios through gear trains.</b> Only the first and last gears matter for the ratio; idlers only change direction.</li>
<li><b>Units of step, turn and lead.</b> Stepper: resolution = lead per rev / (steps × microsteps).</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A 6-pole induction motor is on 50 Hz and runs at 4% slip. Find the synchronous speed and the rotor speed. What is the rotor current frequency?',
'n_s = 120 × 50/6 = <b>1000 rpm</b>. n = 1000 × (1 − 0.04) = <b>960 rpm</b>. Rotor frequency = s·f = 0.04 × 50 = <b>2 Hz</b> (the rotor sees the field sliding past slowly). Sanity: n < n_s so it can produce torque.')}
${P('Core','A 24 V supply is PWM-switched at 35% duty into a 6.0 Ω heating element. Find the average voltage and the average power. Why is (average voltage)²/R wrong?',
'V_avg = 0.35 × 24 = <b>8.4 V</b>. Power: during the on-time the element dissipates 24²/6 = 96 W, and it is on 35% of the time, so P = 0.35 × 96 = <b>33.6 W</b>. The wrong formula gives 8.4²/6 = 11.8 W. Power is a square of the instantaneous voltage, so averaging first loses the peaks. Key insight: for a resistor use the duty cycle on V²/R; for a motor, the smoothed average voltage sets speed.')}
${P('Core','A gearbox has 15:1 reduction and 80% efficiency. The motor runs at 6000 rpm and produces 0.020 N·m. Find the output speed, torque, output power and the mass it can lift on a 2.0 cm radius drum (g = 9.8).',
'Output speed = 6000/15 = <b>400 rpm</b>. Torque = 0.020 × 15 × 0.80 = <b>0.24 N·m</b>. Output power: ω_out = 41.9 rad/s, P = 0.24 × 41.9 = 10.05 W (input 12.57 W ✓ 80%). Force = τ/r = 0.24/0.02 = 12 N, so mass = 12/9.8 = <b>1.22 kg</b>. Key insight: speed and torque trade one-for-one; friction only shows up as the 0.80.')}
${P('Hard','A series-wound motor on 120 V has total resistance (armature + field) 1.0 Ω and a constant K = 0.050 H (so ε = K·I·ω and τ = K·I²). Find speed and torque at I = 2 A, 10 A and 20 A. What do these values say about safety when the load is removed?',
'ε = 120 − I·1. I = 2: ε = 118, ω = ε/(K·I) = 118/0.1 = <b>1180 rad/s</b> (11 270 rpm), τ = 0.050×4 = 0.2 N·m. I = 10: ε = 110, ω = 110/0.5 = <b>220 rad/s</b>, τ = 5 N·m. I = 20: ε = 100, ω = 100/1.0 = <b>100 rad/s</b>, τ = 20 N·m. Doubling the current from 10 A to 20 A quadruples the torque while the speed falls to under half. As the load goes to zero, I → 0 and ω → ∞ (runaway, limited only by friction and windage, so the armature can fly apart). Ideal stall torque would be 0.05 × 120² = 720 N·m; in reality the iron saturates, so it is much lower. Key insight: a series motor must never run without a load.')}
${P('Hard','A shunt motor on 120 V has a field circuit of 120 Ω (constant field current) and an armature resistance of 0.50 Ω. At no load the armature current is small; at full load it is 40 A. Estimate the percentage speed drop from no-load to full load, and the field-circuit power. What happens if the field circuit opens?',
'Field current = 120/120 = 1.0 A, field power = 120 W. Flux is constant, so speed ∝ ε. No load: ε ≈ 120 V. Full load: ε = 120 − 40×0.5 = 100 V. Speed drop = <b>16.7%</b> (good speed regulation compared with a series motor). If the field opens, φ collapses to the small residual value and to keep ε ≈ V the speed must soar (ω = ε/(Kφ)) while the armature current surges because ε falls: dangerous runaway.')}
${P('Hard','A 4-pole induction motor on 60 Hz runs at 1764 rpm. Find slip and rotor current frequency. If the load increases and the speed falls to 1728 rpm, what is the new slip? If the machine is driven by a turbine at 1850 rpm, what is the slip and what does the machine do?',
'n_s = 120 × 60/4 = 1800 rpm. Slip = (1800 − 1764)/1800 = <b>2.0%</b>; f_rotor = 0.02×60 = <b>1.2 Hz</b>. At 1728: s = 72/1800 = <b>4.0%</b> (more slip, more rotor current, more torque: the motor self-balances). At 1850: s = −50/1800 = <b>−2.8%</b>: the rotor outruns the field and delivers power to the grid, so the machine is a <b>generator</b>.')}
${P('Puzzle','An H-bridge has four switches: S1 (top-left), S2 (top-right), S3 (bottom-left), S4 (bottom-right). The motor is between the left and right midpoints. Of the 16 on/off patterns, how many are safe (no direct short from supply to ground through one side)? Classify the safe ones as forward, reverse, brake or coast.',
'Unsafe ("shoot-through") patterns have S1 and S3 both on (left side) or S2 and S4 both on (right side). Each side has 3 safe patterns (off-off, top only, bottom only), so there are 3 × 3 = <b>9 safe patterns</b>. Drive: S1+S4 only (forward) and S2+S3 only (reverse): <b>2</b>. Brake (motor terminals tied to the same rail): S1+S2 only, or S3+S4 only: <b>2</b>. Coast (at least one terminal floating): <b>5</b> (all off; any single switch on). Total 2 + 2 + 5 = 9 ✓. Key insight: with a DPDT you only ever get the two drive states; an H-bridge adds brake and coast.')}
${P('Puzzle','A leadscrew has an 8.0 mm lead (travel per revolution) and is turned by a 200-step/rev stepper with 1/16 microstepping. Find the linear resolution per microstep and the speed if the controller sends 4000 microsteps per second.',
'Microsteps per rev = 200 × 16 = 3200. Resolution = 8.0 mm/3200 = <b>2.5 μm</b> (step angle 0.1125°). 4000 microsteps/s = 1.25 rev/s, so speed = 1.25 × 8 = <b>10 mm/s</b>. Key insight: microstepping divides the lead, but does not make the position more accurate than the torque ripple allows.')}
<h3>Trap list</h3>
<ul>
<li><b>Reversing a series/shunt motor by swapping the supply.</b> It does nothing; both field and armature reverse. Only PM motors reverse.</li>
<li><b>Shunt vs series:</b> shunt = field coil in <i>parallel</i> (constant speed), series = in series with armature (big torque, runaway at no load).</li>
<li><b>Weakening the field of a shunt motor slows it.</b> False: it speeds it up (ε = Kφω).</li>
<li><b>Averaging v² as (avg v)².</b> PWM heating power is D·V²/R.</li>
<li><b>Slip is a fraction, not rpm.</b> And an induction motor can never run at synchronous speed and still produce torque.</li>
<li><b>Gear ratio direction.</b> Reduction lowers speed and raises torque; idlers do not change the ratio but reverse the rotation.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a series-wound motor is dangerous with no load, and why an induction motor must always spin slightly slower than the field.</p>
`;

/* ---------------- c31 ---------------- */
DATA.chal['c31'] = `
<h3>Why it works</h3>
<p><b>A motor is fully described by three measurements</b> you can take with a multimeter, a stopwatch and a clamp. <b>(1) Armature resistance R</b> from a <i>low-voltage</i> stall test (R = V/I, using only a few volts and a short time so nothing overheats; repeat at several shaft positions, because brush contact changes R slightly). <b>(2) Speed constant k</b> from a free run: ε = V − I₀·R = k·ω. <b>(3) Friction</b> from the no-load current I₀: friction torque = k·I₀. With these three numbers, every workbook question reduces to V = ε + I·R, τ = k·I, P_mech = ε·I.</p>
<p><b>The ledger method.</b> Any multi-step problem closes with a ledger of watts: electrical in = heat in the armature + friction/iron loss + useful mechanical out (+ energy returned to the supply if the machine is regenerating). If your ledger does not add up, a number is wrong; if an efficiency is above 100%, you have double counted or used the wrong current.</p>
<p><b>Heat versus time.</b> A stalled motor dissipates V²/R into a small mass of copper. The adiabatic rate of temperature rise is P/(m·c): with 72 W in 30 g of copper (c = 385 J/kg·K) that is 6.2 K/s, so the winding reaches insulation-damage temperature within a few seconds. This is the quantitative reason why a stall is fatal and why motors have thermal protection.</p>
<p><b>Unit conversions.</b> 1 rpm = 2π/60 = 0.1047 rad/s. 1 V·s/rad = 1 N·m/A. 1 kWh = 3.6 MJ. 1 mAh at 6 V = 6 mWh = 21.6 J.</p>
<table><tr><th>Datasheet item</th><th>What it gives</th></tr>
<tr><td>Terminal resistance R</td><td>stall current V/R</td></tr>
<tr><td>Torque constant k_t (N·m/A)</td><td>ε_back constant k_e (V·s/rad), the same number in SI</td></tr>
<tr><td>No-load current I₀</td><td>friction torque k·I₀</td></tr>
<tr><td>Stall torque</td><td>k·V/R</td></tr></table>
<h3>Tools of thought</h3>
<ul>
<li><b>Write the ledger in watts.</b> Example: a motor drawing 36 W with 9 W of copper heat and 9.8 W of useful lifting has 17.2 W of friction and gearing loss.</li>
<li><b>Identify the constraint.</b> Constant torque gives constant current; constant voltage gives a speed–torque line; constant power gives τ·ω. Example: two motors in series on the same torque share the same current.</li>
<li><b>Extremes first.</b> Stall and no-load bracket the answer. Example: any running current must lie between I₀ and V/R.</li>
<li><b>Compare with the maximum.</b> Is the efficiency below ε/V? Is the current below V/R? Example: a stated 90% efficiency with ε/V = 75% is impossible.</li>
<li><b>Convert once, at the start.</b> Put everything in SI (rad/s, N·m, V, A) and only convert the final answer.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A 12 V lifting motor (armature resistance 1.0 Ω) draws 3.0 A and raises a 2.5 kg load at a steady 0.40 m/s (g = 9.8). Find the useful efficiency and account for every watt.',
'P_in = 12 × 3 = 36 W. P_useful = mgv = 2.5 × 9.8 × 0.4 = <b>9.8 W</b>, so η = 9.8/36 = <b>27%</b>. Ledger: armature heat I²R = 9 W; gross electromechanical power ε·I = (12 − 3)×3 = 27 W; so 27 − 9.8 = <b>17.2 W</b> is lost in friction, gears and iron. Check: 9 + 17.2 + 9.8 = 36 ✓. Key insight: ε/V = 75% is an upper bound; the gearbox and friction take most of the rest.')}
${P('Core','A fan motor draws 1.2 A from a 6.0 V pack rated 2000 mAh. How long will it run, and how much energy does the pack hold?',
'Time = 2.0 Ah/1.2 A = <b>1.67 h</b> (100 min). Energy = 6 V × 2.0 Ah = <b>12 Wh</b> = 12 × 3600 = 43.2 kJ. Check power: 6 × 1.2 = 7.2 W, 12 Wh/7.2 W = 1.67 h ✓. (Real packs deliver less at high currents.)')}
${P('Hard','A motor rated for 12 V is tested: stalled at 3.0 V it draws 1.2 A; free-running at 12 V it draws 0.40 A at 3600 rpm. Find R, k, the stall torque at 12 V, and at a load current of 2.0 A the speed (rpm), mechanical power and efficiency.',
'R = 3.0/1.2 = <b>2.5 Ω</b>. Free run: ε = 12 − 0.40 × 2.5 = 11 V; ω = 3600 × 2π/60 = 377 rad/s; k = 11/377 = <b>0.0292 V·s/rad</b>. Stall torque at 12 V = k·V/R = 0.0292 × 4.8 = <b>0.140 N·m</b>. At 2.0 A: ε = 12 − 5 = 7 V, ω = 7/0.0292 = 240 rad/s = <b>2290 rpm</b>; P_mech = ε·I = 14 W; η = 14/24 = <b>58%</b> (ε/V = 58%). Sanity: 2290 rpm lies between 0 and the free-run speed.')}
${P('Hard','Two identical motors (R = 2.0 Ω, k = 0.020 V·s/rad) each drive a load torque of 0.030 N·m. They are run from a 12 V battery either in parallel or in series. Find the speed of each motor, the battery current and the battery power for each wiring. By what factor does the speed change, and is it the naive 1/2?',
'Each motor needs I = τ/k = 1.5 A either way. <b>Parallel:</b> each sees 12 V, ε = 12 − 1.5×2 = 9 V, ω = 450 rad/s; battery current 3.0 A, power 36 W. <b>Series:</b> each sees 6 V (by symmetry), ε = 6 − 3 = 3 V, ω = <b>150 rad/s</b>; battery current 1.5 A, power 18 W. The speed falls to <b>1/3</b>, not 1/2, because the IR drop (3 V) is a bigger fraction of 6 V than of 12 V. Key insight: at fixed torque the current is fixed, so the copper drop is fixed; it is subtracted from the terminal voltage.')}
${P('Hard','A 12 V motor of resistance 2.0 Ω is stalled on a bench. Its windings contain 30 g of copper (c = 385 J/kg·K). Ignoring heat loss, how fast does the copper warm, and how long to rise by 100 K?',
'P = V²/R = 144/2 = 72 W. dT/dt = P/(m·c) = 72/(0.030 × 385) = <b>6.2 K/s</b>. Time for 100 K: 100/6.2 = <b>16 s</b> (the resistance also rises with temperature, lowering the current a little, but the conclusion holds). Key insight: a stall heats like a 72 W hot-plate on 30 g of copper.')}
${P('Hard','A bicycle dynamo reads 10 V open-circuit at 600 rpm and has coil resistance 2.0 Ω. The wheel now drives it at 1200 rpm into an 18 Ω lamp. Find the current, lamp power, coil heat, mechanical input power and the torque at the dynamo shaft.',
'k = 10/(600×2π/60) = 10/62.8 = 0.159 V·s/rad. At 1200 rpm ω = 125.7 rad/s, ε = 20 V. I = 20/(18 + 2) = <b>1.0 A</b>. Lamp power = 1² × 18 = <b>18 W</b>; coil heat = 2 W; mechanical input = ε·I = <b>20 W</b> ✓. Torque = k·I = 0.159 N·m (= 20/125.7 ✓). Key insight: the terminal voltage is 18 V, not the 20 V EMF.')}
${P('Puzzle','A motor datasheet lists a torque constant of 25 mN·m/A. What is the voltage constant in V/rpm and in rpm/V? At 12 V (ignore resistance drops and friction), what is the no-load speed? If a colleague says "same number, different units", are they right?',
'k_t = 0.025 N·m/A, and in SI k_e = k_t = 0.025 V·s/rad. Convert: 1 rad/s = 9.549 rpm, so k_e = 0.025 V per (9.549 rpm) = <b>2.62 mV/rpm</b> = <b>382 rpm/V</b>. No-load speed at 12 V = 12 × 382 = <b>4584 rpm</b> (= 12/0.025 = 480 rad/s ✓). Yes: same number in SI, because V·s = J/A = N·m/A; the apparent difference is only rad/s versus rpm. Key insight: the unit algebra proves k_e = k_t even before using energy conservation.')}
${P('Puzzle','A 100 kg bike plus rider brakes from 8.0 m/s to rest. A regenerative motor recovers 60% of the kinetic energy into a 100 Wh battery. How much energy is recovered, and by what fraction does the battery charge rise? How many such stops to charge it by 1%?',
'KE = ½ × 100 × 8² = 3200 J. Recovered = 0.60 × 3200 = <b>1920 J</b>. Battery = 100 Wh = 360 kJ, so the rise is 1920/360 000 = <b>0.53%</b>. A 1% gain is 3600 J, which needs 3600/1920 = 1.9, about <b>2 stops</b>. Key insight: each stop returns well under 1% of a large battery; regeneration only recovers a fraction of energy that was spent accelerating in the first place, so it is not free energy.')}
<h3>Trap list</h3>
<ul>
<li><b>Using ε·I as useful power</b> when friction or gears exist.</li>
<li><b>Measuring R with the motor running.</b> Only a stall gives V/R; a running motor has back-EMF.</li>
<li><b>Energy vs power</b>: Wh and kWh are energy; W is power. 6 V × 2 Ah = 12 Wh, not 12 W.</li>
<li><b>Series motors share current, not voltage</b> (only identical ones share voltage equally) and run slower than "half".</li>
<li><b>Mixing rpm with rad/s</b> when computing k; convert first.</li>
<li><b>Forgetting the copper resistance rises with heat</b>, so a hot motor draws less stall current than a cold one.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: how you would find a mystery motor's resistance and speed constant with only a battery and a meter.</p>
`;

/* ---------------- c32 ---------------- */
DATA.chal['c32'] = `
<h3>Why it works</h3>
<p><b>Units tie every formula together.</b> T = N/(A·m) (from F = BIL) = V·s/m² (from ε = BLv: V = T·m·m/s) = Wb/m². So the three formulas F = BIL, ε = BLv and ε = −dΦ/dt are the same physics in three outfits, and dimensional analysis reproduces them: [B·L·v] = T·m²/s = Wb/s = V ✓.</p>
<p><b>The puzzle "magnetic force does no work."</b> F = qv×B is perpendicular to v, so a single charge gains no energy. Yet a motor does work. Resolution: a wire moving at velocity u in the field carries charges with both drift velocity (along the wire) and u (across the field). The magnetic force component along the wire drives the EMF (BLu) and the component against u is the force on the wire (BIL). The two powers are equal and opposite: F·u = (BIL)·u = (BLu)·I = ε·I. The <b>field only transfers energy between the mechanical and electrical sides; the work is done by whatever pushes the rod</b> and is delivered to the circuit. That single sentence resolves every rod-on-rails problem.</p>
<p><b>Field of a current, scaling.</b> A long straight wire has no length scale except r, so B ∝ I/r (Ampère: B·2πr = μ₀I). Two antiparallel currents produce fields that <i>add</i> between the wires and cancel far away; parallel currents cancel on the midline and attract each other (force per length μ₀I₁I₂/(2πd)).</p>
<p><b>Circular motion and its invariants.</b> Setting qvB = mv²/r gives r = mv/(qB) and the angular frequency ω = qB/m, independent of speed and radius. This is why the cyclotron works: the particle takes the same time per half-turn however fast it is. Radius for a particle accelerated through V from rest: r = √(2mV/q)/B, so r ∝ √(m/q).</p>
<table><tr><th>Change</th><th>B (wire at fixed r)</th><th>Force on a fixed wire</th><th>Radius of a charged particle</th></tr>
<tr><td>double current I</td><td>×2</td><td>×2</td><td>—</td></tr>
<tr><td>double distance r</td><td>×1/2</td><td>×1/2</td><td>—</td></tr>
<tr><td>double speed v</td><td>—</td><td>—</td><td>×2</td></tr>
<tr><td>double B</td><td>—</td><td>×2</td><td>×1/2</td></tr></table>
<h3>Tools of thought</h3>
<ul>
<li><b>Energy cross-check for rod problems.</b> Compute F·v and I²R independently. Example: a rod at 4 m/s in a 0.3 T field: 0.18 W each way.</li>
<li><b>Superposition and symmetry.</b> Two equal currents: fields cancel on the midline if parallel, add if antiparallel.</li>
<li><b>Ratios, not numbers.</b> r ∝ √(m/q) (same V, same B): an alpha particle (q = 2e, m ≈ 4 m_p) has r = √2 × r_proton.</li>
<li><b>Geometry of flux.</b> Φ = BA·cosθ with θ from the <i>normal</i>. Example: a plane at 30° to the field has θ = 60°.</li>
<li><b>Mean speed trick.</b> For a rotating rod, average the speed along it: v_avg = ωr/2, so ε = B·r·(ωr/2) = ½Bωr².</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','Two long parallel wires, 4.0 cm apart, carry 20 A in opposite directions. Find the force per metre and whether they attract or repel. What changes if the currents are in the same direction?',
'F/L = μ₀I₁I₂/(2πd) = 2×10⁻⁷ × 20 × 20/0.04 = <b>2.0×10⁻³ N/m</b>. Opposite currents <b>repel</b>; same-direction currents attract with the same magnitude. (Rule: parallel currents attract; antiparallel currents repel.)')}
${P('Core','Two long wires are 10 cm apart and each carries 10 A. Find the field at the midpoint for (a) opposite currents, (b) equal currents in the same direction.',
'Each wire is 5 cm away: B₁ = 2×10⁻⁷ × 10/0.05 = 4.0×10⁻⁵ T = 40 μT. (a) Opposite currents: on the plane between them the fields point the same way and add: <b>80 μT</b>. (b) Same direction: the fields point opposite ways and cancel: <b>0</b>. Key insight: use the right-hand rule on each wire separately, then add vectors.')}
${P('Hard','A proton is accelerated from rest through 2000 V and enters a perpendicular field of 0.050 T. Find its speed and path radius. By what factor is the radius larger for an alpha particle (q = 2e, m ≈ 4m_p) accelerated through the same 2000 V?',
'qV = ½mv² gives v = √(2qV/m) = √(2 × 1.602×10⁻¹⁹ × 2000/1.673×10⁻²⁷) = <b>6.2×10⁵ m/s</b>. r = mv/(qB) = 1.673×10⁻²⁷ × 6.19×10⁵/(1.602×10⁻¹⁹ × 0.05) = <b>0.129 m</b>. Alpha: r ∝ √(m/q), m/q is 2× that of a proton, so r is <b>√2 ≈ 1.41 times larger</b> (0.18 m). Key insight: same voltage gives the same kinetic energy per unit charge; the ratio m/q does the rest.')}
${P('Hard','A cyclotron has B = 1.5 T for protons. Find the orbital frequency, and the kinetic energy (non-relativistic estimate) when the orbit radius is 0.50 m. Does the frequency depend on the radius?',
'ω = qB/m, f = qB/(2πm) = 1.602×10⁻¹⁹ × 1.5/(2π × 1.673×10⁻²⁷) = <b>22.9 MHz</b>, independent of radius and speed. v = qBr/m = 7.18×10⁷ m/s (0.24c). KE = ½mv² = 4.3×10⁻¹² J = <b>27 MeV</b> (relativity adds a few percent: at 0.24c, γ = 1.03). Key insight: a constant-frequency electric field can keep pushing the particle in step with its orbit.')}
${P('Hard','A conducting rod (length 0.50 m, negligible resistance) slides on horizontal frictionless rails joined at one end by a 0.40 Ω resistor, in a vertical field B = 0.80 T. A string over a pulley connects the rod to a hanging 0.20 kg mass (g = 9.8). Find the terminal speed, the current, and show that mgv = I²R.',
'At terminal speed the magnetic force balances the pull: BIL = mg, so I = mg/(BL) = 0.2×9.8/(0.8×0.5) = <b>4.9 A</b>. ε = IR = 1.96 V = BLv, so v = 1.96/(0.80 × 0.50) = <b>4.9 m/s</b> (equivalently v = mgR/(B²L²)). Power: mgv = 1.96 × 4.9 = 9.60 W; I²R = 24.0 × 0.4 = 9.60 W ✓. Key insight: all the gravitational power goes to heat; no kinetic energy is stored at steady speed.')}
${P('Puzzle','A square loop of side 0.10 m, mass 50 g, resistance 0.050 Ω moves at 2.0 m/s into a large region of uniform 0.50 T field (perpendicular). Find the EMF, current and force while entering. Because the force is proportional to v, how much does the speed drop while the loop enters fully (assume the field region is wider than the loop)? What happens while it is completely inside, and what is the speed and total heat after it leaves?',
'Entering: ε = B·s·v = 0.5 × 0.1 × 2 = 0.10 V, I = 2.0 A, F = BIs = <b>0.10 N</b> opposing motion. Since F = B²s²v/R and v = dx/dt, m·dv = −(B²s²/R)·dx, so the speed drop while entering a distance s is Δv = B²s³/(mR) = 0.25 × 0.001/(0.05 × 0.05) = <b>0.10 m/s</b> (from 2.0 to 1.9 m/s). Completely inside: flux is constant, no EMF, no current, no force; it coasts at 1.9 m/s. Leaving: the trailing side is in the field, same braking: another 0.10 m/s, final speed <b>1.8 m/s</b>. Heat = ½m(2.0² − 1.8²) = 0.025 × 0.76 = <b>0.019 J</b>. Key insight: the loop feels force only while the flux through it is changing.')}
${P('Puzzle','A copper disc of radius 0.10 m spins at 3000 rpm in a uniform 0.50 T field along its axis. A brush at the rim and one at the axle are connected to a voltmeter. Find the EMF. Then derive the formula.',
'ω = 3000 × 2π/60 = 314 rad/s. ε = ½Bωr² = 0.5 × 0.5 × 314 × 0.01 = <b>0.785 V</b>. Derivation: consider a radial strip of length r. Its speed rises linearly from 0 at the axle to ωr at the rim, so the average speed is ωr/2. The motional EMF is B·L·v_avg = B·r·(ωr/2) = ½Bωr². Another view: the strip sweeps area (½r²ω) per second, and ε = B·dA/dt ✓. Key insight: averaging the speed turns a varying-velocity rod into a constant-velocity one. (This is Faraday\'s 1831 homopolar disc.)')}
${P('Hard','A flat circular coil with 20 turns and radius 5.0 cm lies in a north–south vertical plane with a compass at its centre (tangent galvanometer). Earth\'s horizontal field is 40 μT. What current deflects the needle by 30°? What is the field at the centre per ampere?',
'The coil field at the centre is B_c = μ₀NI/(2R) (per turn B = μ₀I/2R), perpendicular to Earth\'s horizontal field. The needle points along the resultant, so tan θ = B_c/B_E, hence B_c = 40 μT × tan30° = 23.1 μT. Field per ampere = 4π×10⁻⁷ × 20/(2 × 0.05) = 2.51×10⁻⁴ T/A. Current = 23.1×10⁻⁶/2.51×10⁻⁴ = <b>0.092 A</b>. Key insight: a compass compares two fields by vector addition; tan θ = B_c/B_E.')}
<h3>Trap list</h3>
<ul>
<li><b>Direction confusion for electrons.</b> Conventional current goes opposite to electron flow; F = qv×B flips for negative charges.</li>
<li><b>"Magnetic force does work on a motor."</b> It does none on individual charges; it mediates the transfer between the mechanical and electrical sides.</li>
<li><b>θ from the plane instead of from the normal</b> in Φ = BA·cosθ; plane at 30° means θ = 60°.</li>
<li><b>Cancellation vs addition:</b> parallel currents cancel B between them, antiparallel add; yet parallel currents <i>attract</i>.</li>
<li><b>Radius formula with wrong mass or charge</b> (alpha: 4m_p, 2e).</li>
<li><b>Force exists only while flux changes</b> for a loop entering/leaving a field; inside uniform B there is no braking.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why you have to push harder to move a wire through a magnetic field when it is connected to a load, and where the pushing energy goes.</p>
`;

/* ---------------- c15 ---------------- */
DATA.chal['c15'] = `
<h3>Why it works</h3>
<p><b>Every protective device answers one question: what signal says "danger", and how fast must I react?</b></p>
<p><b>Fuse: heat is the signal, and I²t is the currency.</b> A fuse element is a thin strip. In a short pulse there is no time for heat to escape, so the energy dumped is ∫I²R dt, and the strip melts once that reaches a fixed threshold. Hence the rating "I²t" (A²s): a 10× overload melts it about 100× faster. A slow-blow fuse has a large thermal mass (or a spring/solder design) so it absorbs a brief motor-start surge that a fast-blow fuse would not survive.</p>
<p><b>Wire ampacity (why the breaker must be ≤ wire rating).</b> The wire makes heat I²R per metre and loses it from its surface. Resistance falls as 1/d² (d = diameter) while surface per metre grows as d, so the heating-limited current scales roughly as d^1.5: thicker wire carries more, but not proportionally to area. A breaker rating above the wire's ampacity lets the wire get hot enough to damage insulation before the breaker acts.</p>
<p><b>GFCI = Faraday's law in a ring.</b> Hot and neutral both pass through the core of a differential current transformer, in opposite directions. The fluxes cancel while I_hot = I_neutral. Any leakage to ground (through a person) makes I_hot − I_neutral ≠ 0, which produces flux in the core and a signal in a sense winding; above about 4–6 mA the relay trips, in tens of milliseconds. It cannot detect a shock from touching both hot and neutral, because then the same current goes out and returns.</p>
<p><b>Relay and flyback.</b> A relay coil is an inductor: V = −L·di/dt. If a transistor interrupts 60 mA in 10 μs in a 0.5 H coil, the coil "tries" for 3000 V (the transistor avalanches first). A diode gives the current a safe path: it decays as I₀·e^(−Rt/L), time constant L/R.</p>
<table><tr><th>Quantity</th><th>If you double…</th><th>Effect</th></tr>
<tr><td>overload current (same fuse)</td><td>current ×2</td><td>time to blow ÷ 4 (I²t fixed)</td></tr>
<tr><td>wire diameter</td><td>d ×2</td><td>ampacity ≈ ×2.8 (d^1.5), R per metre ÷ 4</td></tr>
<tr><td>relay coil inductance</td><td>L ×2</td><td>spike ×2, decay time ×2 with the diode</td></tr>
<tr><td>leakage current</td><td>×2</td><td>trips sooner; threshold is fixed at 4–6 mA</td></tr></table>
<h3>Tools of thought</h3>
<ul>
<li><b>Load arithmetic.</b> Add watts, divide by volts, compare with 80% of breaker. Example: two 1500 W heaters on 120 V = 25 A.</li>
<li><b>Current difference as a detector.</b> GFCI looks at I_hot − I_neutral, not at current itself. Example: 8.000 A out, 7.993 A back means 7 mA leaked.</li>
<li><b>Energy thinking for spikes.</b> Energy ½LI² must go somewhere; give it a diode rather than an arc.</li>
<li><b>Switch logic.</b> Series = AND, parallel = OR; a 3-way pair = XOR. Example: flipping any one 3-way or 4-way switch always toggles the lamp.</li>
<li><b>Overdrive margin.</b> A transistor switch must be saturated: supply about 5× the minimum base current. Example: I_B(min) = I_C/β.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A 20 A breaker serves a circuit (12 AWG) on which a heater will run for many hours. Using the 80% continuous-load rule, how many watts of continuous load can it carry on 120 V?',
'Continuous limit = 0.80 × 20 = 16 A. P = 16 × 120 = <b>1920 W</b>. Check: a 1500 W heater (12.5 A) fits; two do not (25 A). Key insight: the breaker rating is not the load limit; 80% is.')}
${P('Core','A hair dryer\'s hot lead carries 8.000 A and the neutral returns 7.993 A. The GFCI threshold is 5 mA. Does it trip? Where does the missing current go? Would it trip if a person touched hot and neutral together?',
'Difference = 8.000 − 7.993 = 0.007 A = <b>7 mA &gt; 5 mA</b>, so <b>it trips</b> (in roughly 25 ms). The missing 7 mA flows through some other path to ground, possibly through a person. If a person touches both hot and neutral, all the current still returns via the neutral side of the device: the difference is ~0, so the <b>GFCI does not trip</b> (only an overcurrent breaker can help, and only at breaker-level current).')}
${P('Hard','A 5 V relay has a 70 Ω coil and is driven by an NPN transistor (β = 100) from a 3.3 V logic pin with a base resistor (V_BE = 0.7 V). Find the coil current, the minimum base current, a base resistor giving about 5× overdrive, and the nearest standard value (E12: 470, 560, 680, 820 Ω) with its actual base current.',
'Coil current = 5/70 = <b>71.4 mA</b>. Minimum I_B = I_C/β = 0.714 mA. Overdrive 5×: I_B = 3.57 mA. R_B = (3.3 − 0.7)/3.57 mA = <b>728 Ω</b>. Standard value: <b>680 Ω</b> (E12) gives I_B = 2.6/680 = 3.8 mA (5.3× overdrive, transistor saturated). A flyback diode must be across the coil. Key insight: design the base for saturation, because β varies widely.')}
${P('Hard','A motor draws 6 A running, but 20 A for 0.15 s at start-up. A fast-blow fuse is rated at an I²t melting value of 40 A²s and a slow-blow fuse at 120 A²s. Which survives one start? What if the motor is started twice in quick succession (heat from the first start has not dissipated)?',
'Start-up dose = 20² × 0.15 = <b>60 A²s</b>. The fast-blow (40 A²s) blows on the first start. The slow-blow (120 A²s) survives one start (50% used). Two quick starts give 120 A²s, which reaches the threshold exactly, so the slow-blow is <b>at its limit</b>: repeated quick starts will blow it. Steady running at 6 A is harmless to either (the fuse should be rated a bit above 6 A for normal operation). Key insight: I²t adds up across repeated surges.')}
${P('Hard','A 30 m extension cord uses 14 AWG copper (8.3 mΩ per metre per conductor at room temperature). A tool draws 12 A. Find the round-trip resistance, the voltage lost, the heat produced in the cord and the voltage at the tool if the outlet gives 120 V.',
'Round trip = 60 m of conductor, R = 60 × 0.0083 = <b>0.50 Ω</b>. Voltage lost = 12 × 0.50 = <b>6.0 V</b>. Heat in cord = I²R = 144 × 0.50 = <b>72 W</b> (spread over 30 m, about 2.4 W per metre: warm). Tool gets about 114 V (5%). Key insight: long thin cords waste power and give low voltage; a cord heating is why very long cords must be uncoiled.')}
${P('Puzzle','A hallway lamp is controlled by two SPDT "3-way" switches plus a third position-crossing DPDT "4-way" switch in between. Of the 8 combinations of the three switch positions, how many turn the lamp on? What happens to the lamp when any one switch is flipped?',
'The lamp state is the XOR (odd-parity function) of the three switch positions: on for <b>4 of the 8</b> combinations. Flipping any single switch changes the parity, so the lamp <b>always toggles</b>, which is exactly what you want from any switch location. Key insight: a 4-way switch is a DPDT wired "crossover" (swapping two lines); each extra 4-way adds another XOR.')}
${P('Puzzle','A 12 V relay coil has R = 200 Ω and L = 0.5 H and is switched off by a transistor. Find the coil current before switching, the stored energy, the spike the coil attempts if the current is cut in 10 μs (no diode), and the decay time constant if a flyback diode is fitted. Why might a diode slow the relay\'s release?',
'I = 12/200 = <b>60 mA</b>. E = ½LI² = ½ × 0.5 × 0.06² = <b>0.9 mJ</b>. Spike ≈ L·ΔI/Δt = 0.5 × 0.06/10⁻⁵ = <b>3000 V</b> (in reality the transistor breaks down or a spark jumps). With the diode: τ = L/R = 0.5/200 = <b>2.5 ms</b>; the current decays exponentially through the diode. The coil keeps holding the armature for a few ms, so the release is slower: a diode-protected relay releases later. A Zener in series with the diode speeds the release while still clamping the spike. Key insight: energy (0.9 mJ) is small, but the voltage it can reach is huge if it has nowhere to go.')}
<h3>Trap list</h3>
<ul>
<li><b>Replacing a blown fuse with a bigger one</b> "so it stops blowing": the wire is now the weakest link.</li>
<li><b>"GFCI protects against any shock."</b> It does not protect against touching hot and neutral together, or against overload.</li>
<li><b>Load equal to breaker rating.</b> Continuous loads should stay ≤ 80%.</li>
<li><b>Fuse in parallel with the load.</b> A fuse goes in series with the thing it protects, on the hot side.</li>
<li><b>Relay contacts rated for AC used on DC.</b> DC arcs persist; the DC rating is lower.</li>
<li><b>Pole and throw swapped:</b> pole = independent circuits switched; throw = positions per pole.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: how a GFCI knows when current is leaking without measuring how big the current is.</p>
`;

/* ---------------- c16 ---------------- */
DATA.chal['c16'] = `
<h3>Why it works</h3>
<p><b>A schematic is a graph, not a picture.</b> Only <i>which terminals connect to which</i> matters. Two pieces of wire joined by a dot, or a long loop of wire, are the same electrical node: same potential, no voltage between them. Redrawing a circuit (straightening wires, sliding components around without breaking connections) never changes the answer. This is why "which resistors are in parallel?" has a crisp test: <b>both ends of each resistor land on the same pair of nodes</b>.</p>
<p><b>Ground is a bookkeeping choice.</b> Every voltage measured is a difference between two nodes. Declaring any one node to be 0 V shifts all node voltages by the same constant and changes <i>no</i> branch voltage or current. So "a 12 V supply, ground at the bottom" and "ground in the middle, ±6 V" describe the same circuit.</p>
<p><b>Meters as ideal circuit elements.</b> An ideal ammeter has zero resistance, so it must be in series (a short in parallel!). An ideal voltmeter has infinite resistance, so it must be in parallel (in series, it blocks the current). Real meters deviate: a 10 MΩ voltmeter placed in series in a 100 Ω circuit reads almost the full supply voltage while the current is near zero.</p>
<p><b>LED current limiting and sensitivity.</b> An LED's voltage is nearly fixed (V_f ≈ 2 V red, 3 V+ blue/white) but its current rises steeply, so a series resistor R = (V_s − V_f)/I_f sets the current. Since V_f is uncertain by about ±0.2 V, the relative error in current is ΔV_f/(V_s − V_f): at 5 V supply and V_f = 2 V it is 0.2/3 ≈ 7%; at 12 V it is 0.2/10 = 2%. A higher supply voltage gives a more predictable current.</p>
<table><tr><th>Question</th><th>Test</th></tr>
<tr><td>Are A and B in series?</td><td>they share exactly one node and no other element attaches to it</td></tr>
<tr><td>Are A and B in parallel?</td><td>their two ends are the same two nodes</td></tr>
<tr><td>Is a crossing a connection?</td><td>only if there is a dot (or the drawing shows a junction)</td></tr>
<tr><td>Does moving ground change currents?</td><td>no; it only relabels node voltages</td></tr></table>
<h3>Tools of thought</h3>
<ul>
<li><b>Label nodes first.</b> Colour each wire-connected region; any two resistors on the same two colours are parallel.</li>
<li><b>Shift the reference.</b> Move ground to simplify arithmetic. Example: put ground at the middle of a divider to get ± values.</li>
<li><b>Balance test for bridges.</b> If R₁/R₂ = R₃/R₄ the middle element carries no current and can be removed or shorted.</li>
<li><b>Black box by two measurements.</b> Open-circuit voltage and short-circuit current give the Thévenin/Norton pair.</li>
<li><b>Designing with sensitivity.</b> Check how much a tolerance in V_f or R changes I before choosing the supply.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','A white LED (V_f ≈ 3.2 V) must carry about 20 mA from a 12 V supply. Compute the ideal resistor, choose the nearest E12 value (390, 470, 560 Ω), and find the actual current and the power dissipated in the resistor.',
'R = (12 − 3.2)/0.020 = <b>440 Ω</b>. Nearest E12 value is 470 Ω (bigger is safer). I = 8.8/470 = <b>18.7 mA</b>. P_R = I²R = 0.0187² × 470 = <b>0.165 W</b>, so a ¼ W resistor is fine. Key insight: round the resistor <i>up</i>; the LED then runs slightly dim instead of overloaded.')}
${P('Core','Three resistors (1 kΩ, 2 kΩ, 3 kΩ) are in series across a 12 V battery. Find each node voltage if ground is placed at (a) the battery bottom, (b) the junction between the 2 kΩ and 3 kΩ resistors. Does the current change?',
'I = 12/6 kΩ = 2 mA. Drops: 2 V, 4 V, 6 V. (a) Top 12 V, after 1 kΩ: 10 V, after 2 kΩ: 6 V, bottom 0 V. (b) Shift everything down by 6 V: +6 V, +4 V, 0 V, −6 V. The <b>current is still 2 mA</b> in every resistor. Key insight: only differences between nodes are physical.')}
${P('Hard','A 12 V battery has four resistors arranged so that: R₁ = 100 Ω goes from node A to node B, R₂ = 100 Ω from node B to node C, R₃ = 50 Ω from A to C, and R₄ = 200 Ω from A to C. The battery is across A and C. Which resistors are in parallel? Find the total resistance and battery current.',
'R₃ and R₄ both connect A to C: parallel. R₁ and R₂ are in series (B has only those two attached) giving 200 Ω between A and C, which is also parallel with R₃ and R₄. Total = 1/(1/200 + 1/50 + 1/200) = 1/0.03 = <b>33.3 Ω</b>. Battery current = 12/33.3 = <b>0.36 A</b>. Key insight: collapse the series chain first, then see a three-way parallel.')}
${P('Hard','A bridge has a 10 V source. The left branch is R₁ = 100 Ω (top) and R₂ = 200 Ω (bottom); the right branch is R₃ = 150 Ω (top) and R₄ = 300 Ω (bottom). A detector resistor connects the two midpoints. Show the bridge is balanced, find the detector current and the total resistance seen by the source.',
'Balanced if R₁/R₂ = R₃/R₄: 100/200 = 0.5 and 150/300 = 0.5 ✓. Both midpoints are at the same voltage: 10 × 200/300 = 6.67 V. So the <b>detector current is 0</b>, whatever its resistance. Total resistance: left branch 300 Ω in parallel with right branch 450 Ω = 300 × 450/750 = <b>180 Ω</b>; source current = 10/180 = 55.6 mA. Key insight: with zero current in the detector, it can be removed.')}
${P('Puzzle','A sealed two-terminal box contains a battery and resistors. You measure 12.0 V with a high-impedance meter, and 3.00 A with an ammeter across the terminals. Find the simplest equivalent circuit. What voltage, current and power appear if a 6.0 Ω load is connected? Which load extracts the most power, and how much?',
'Open-circuit V_th = 12 V; short-circuit current I_N = 3 A, so R_th = 12/3 = <b>4.0 Ω</b>. Equivalent: 12 V in series with 4 Ω (or 3 A in parallel with 4 Ω). With 6 Ω: I = 12/(4 + 6) = 1.2 A, V = 7.2 V, P = 7.2 × 1.2 = <b>8.64 W</b>. Max power is delivered to a load equal to R_th = 4 Ω: P = V²/(4R) = 144/16 = <b>9.0 W</b>. Key insight: two meter readings reveal everything a terminal measurement can.')}
${P('Puzzle','Two students check a 12 V supply with a 100 Ω resistor. Student A connects a 10 MΩ voltmeter <i>in series</i> with the resistor and reads the meter. Student B connects the ammeter (nearly 0 Ω) <i>in parallel</i> across a 6 V battery of 0.1 Ω internal resistance. What do they see or cause?',
'A: the loop is 12 V, 100 Ω and 10 MΩ: I = 12/(10⁷ + 100) = 1.2 μA. The voltmeter drops 12 × 10⁷/(10⁷+100) = <b>11.9999 V</b>, essentially the full supply, and the resistor shows 0.12 mV, so the meter reads "supply voltage" but the circuit is effectively open. B: the ammeter shorts the battery; with, say, 0.1 Ω internal and 0 Ω meter, I = 6/0.1 = <b>60 A</b>, which blows the meter fuse (and can overheat the battery). Key insight: a voltmeter in series nearly opens the circuit; an ammeter in parallel nearly shorts it.')}
<h3>Trap list</h3>
<ul>
<li><b>Crossing wires without a dot</b> are not connected; a dot means connected (but check the drawing convention).</li>
<li><b>Battery symbol:</b> the long line is positive; reversing it reverses LEDs and electrolytics.</li>
<li><b>Polarised parts</b> (LED, electrolytic capacitor, diode): current into the anode; wrong way = no light or damage.</li>
<li><b>Breadboard:</b> power rails may be split in the middle, and each five-hole strip is one node; a wire in the wrong row is an invisible mistake.</li>
<li><b>Ground moves voltages, not currents.</b> A negative node voltage is not a problem.</li>
<li><b>Bridge balance uses ratios</b> (R₁/R₂ = R₃/R₄), not equal values, and the arrangement of which resistor is on top matters.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: how to tell whether two resistors in a schematic are in series or parallel, and why moving the ground symbol does not change the current.</p>
`;

/* ---------------- c17 ---------------- */
DATA.chal['c17'] = `
<h3>Why it works</h3>
<p><b>The history of electricity is a chain of "what would make this measurable?"</b> Each step needed the previous one, and that is the easiest way to remember the dates.</p>
<ul>
<li><b>Static charge could only be demonstrated</b> (amber, Gilbert, Guericke, Gray, du Fay, Franklin) until Coulomb (1785) made it a quantitative force law.</li>
<li><b>No steady current, no circuits.</b> Only after Volta's pile (1800) produced a continuous current could anyone study conductors. Ohm (1827) then needed a <i>steady</i> source to find V = IR; Kirchhoff (1845) generalised it to networks.</li>
<li><b>A steady current unlocked magnetism's link to electricity:</b> Ørsted (1820) saw a compass move, and within months Ampère had the force law between currents.</li>
<li><b>The converse followed:</b> if current makes magnetism, can magnetism make current? Faraday and Henry (early 1830s) found yes, but only when the field <i>changes</i>. That gave the generator, transformer and induction motor.</li>
<li><b>Unification:</b> Maxwell (1861–65) put it all into field equations and found that a changing E makes B and vice versa; the wave speed comes out as the speed of light. Hertz (1887–88) made the waves.</li>
</ul>
<p><b>Units are the fossil record.</b> Named units freeze the story: coulomb, volt, ampere, ohm, farad, henry, weber, tesla, gauss, hertz, siemens, joule, watt, kelvin. Their dimensional relationships let you check a formula: Wb = V·s, T = Wb/m², H = V·s/A = Ω·s, F = C/V, S = 1/Ω.</p>
<table><tr><th>If you double…</th><th>Then…</th></tr>
<tr><td>the charge on one of two point charges</td><td>Coulomb force ×2</td></tr>
<tr><td>the distance between them</td><td>force ÷4</td></tr>
<tr><td>the current in a long straight wire</td><td>B at fixed r ×2</td></tr>
<tr><td>the rate of change of flux</td><td>induced EMF ×2</td></tr></table>
<h3>Timeline: 40 names, only well-established facts</h3>
<ul>
<li><b>Thales of Miletus (c. 600 BC)</b>: traditionally credited with noticing that rubbed amber (Greek <i>elektron</i>) attracts light objects.</li>
<li><b>William Gilbert (1600)</b>: <i>De Magnete</i>: Earth behaves like a giant magnet; separated electric from magnetic effects.</li>
<li><b>Otto von Guericke (1660s)</b>: built an early electrostatic machine.</li>
<li><b>Stephen Gray (1729)</b>: showed that some materials conduct charge and others do not (conductors vs insulators).</li>
<li><b>Charles du Fay (1733)</b>: two kinds of electrification (vitreous and resinous).</li>
<li><b>Ewald von Kleist and Pieter van Musschenbroek (1745–46)</b>: independently invented the Leyden jar, the first capacitor.</li>
<li><b>Benjamin Franklin (1752)</b>: lightning experiments and the lightning rod; introduced positive/negative and the idea of charge conservation.</li>
<li><b>Charles-Augustin de Coulomb (1785)</b>: inverse-square law for charges, measured with a torsion balance.</li>
<li><b>Luigi Galvani (1780s–91)</b>: twitching frog legs; "animal electricity".</li>
<li><b>Alessandro Volta (1800)</b>: the voltaic pile, the first continuous battery; he argued the effect came from the metals, not from animal tissue.</li>
<li><b>Hans Christian Ørsted (1820)</b>: a current deflects a compass needle.</li>
<li><b>André-Marie Ampère (1820 onward)</b>: parallel currents attract, antiparallel repel; founder of electrodynamics.</li>
<li><b>Jean-Baptiste Biot and Félix Savart (1820)</b>: law for the field of a current element.</li>
<li><b>Thomas Seebeck (1821)</b>: thermoelectric effect (thermocouple).</li>
<li><b>Michael Faraday (1821)</b>: first electromagnetic rotation (simple motor); <b>(1831)</b>: electromagnetic induction; later electrolysis laws and the concept of field lines.</li>
<li><b>William Sturgeon (1824–25)</b>: first electromagnet.</li>
<li><b>Georg Simon Ohm (1827)</b>: V = IR; he used a steady thermoelectric source because early batteries drifted.</li>
<li><b>Joseph Henry (early 1830s)</b>: strong electromagnets, self-inductance, independent discovery of induction; unit: henry.</li>
<li><b>Hippolyte Pixii (1832)</b>: first hand-cranked generator (with a commutator).</li>
<li><b>Carl Friedrich Gauss and Wilhelm Weber (1832–33)</b>: absolute magnetic/electrical units; a telegraph in Göttingen (1833); units gauss and weber.</li>
<li><b>Heinrich Lenz (1834)</b>: rule for the direction of induced currents.</li>
<li><b>Samuel Morse (1837–44)</b>: practical telegraph; 1844 Washington–Baltimore message.</li>
<li><b>James Prescott Joule (1840–43)</b>: heating by current (I²R); mechanical equivalent of heat.</li>
<li><b>Gustav Kirchhoff (1845)</b>: current and voltage laws, while still a student.</li>
<li><b>James Clerk Maxwell (1861–65)</b>: electromagnetic theory; light is an electromagnetic wave.</li>
<li><b>Alexander Graham Bell (1876)</b>: telephone patent.</li>
<li><b>Thomas Edison and Joseph Swan (1878–79)</b>: practical incandescent lamps; Edison's Pearl Street Station opened in 1882.</li>
<li><b>Heinrich Hertz (1887–88)</b>: produced and detected radio waves; unit: hertz.</li>
<li><b>Nikola Tesla (1887–88)</b>: polyphase AC induction motor and the rotating magnetic field; <b>George Westinghouse</b> backed AC; Niagara Falls power (1895).</li>
<li><b>J. J. Thomson (1897)</b>: the electron. <b>Robert Millikan (1909)</b>: its charge by the oil-drop experiment.</li>
<li><b>Heike Kamerlingh Onnes (1911)</b>: superconductivity in mercury at about 4 K.</li>
<li><b>John Bardeen, Walter Brattain, William Shockley (1947–48)</b>: the transistor.</li>
</ul>
<h3>Tools of thought</h3>
<ul>
<li><b>Ask "what had to exist first?"</b> Ohm (1827) needs Volta (1800); Faraday's induction (1831) needs Ørsted and Ampère (1820). Example: if a question asks "who could have built the first generator?", the answer must come after 1831.</li>
<li><b>Match by unit algebra.</b> Example: henry = V·s/A, weber = V·s, so L·di/dt has units of volts.</li>
<li><b>Name vs discovery.</b> The unit is named for a person, but the formula may have a different discoverer (for example the Wheatstone bridge was devised by Christie).</li>
<li><b>Quantisation hunting.</b> Find the smallest common unit behind a list of measured values (Millikan): take the greatest common divisor.</li>
<li><b>Scaling laws as a fingerprint.</b> 1/r² for Coulomb, 1/r for a long wire's B; recognising the law tells you the discoverer's domain.</li>
</ul>
<h3>Challenge problems</h3>
${P('Core','An inductor of 2.0 H has its current ramped at 3.0 A/s. The flux through a coil changes uniformly by 0.25 Wb in 2.0 s. A field of 0.40 T passes through 0.050 m². Compute the voltage across the inductor, the EMF from the flux change, and the flux in the third case, and check each unit in volts and seconds. Name the scientist behind each unit.',
'Joseph Henry (henry): V = L·di/dt = 2.0 × 3.0 = <b>6.0 V</b> (H·A/s = V). Faraday/Weber (weber): ε = ΔΦ/Δt = 0.25/2.0 = <b>0.125 V</b> (Wb/s = V). Tesla: Φ = BA = 0.40 × 0.050 = <b>0.020 Wb</b> = 0.020 V·s. Key insight: weber = V·s, so dΦ/dt is a voltage, and henry = V·s/A.')}
${P('Core','Millikan measures the charges on several oil drops and finds (in units of 10⁻¹⁹ C): 3.20, 4.80, 8.00 and 11.2. What is the largest elementary charge consistent with the data? What if he had only measured drops with 6.4 and 9.6?',
'Write the values in units of 0.1×10⁻¹⁹: 32, 48, 80, 112. Their greatest common divisor is 16, so the unit charge is <b>1.6×10⁻¹⁹ C</b>; the drops carry 2, 3, 5, 7 elementary charges. With only 6.4 and 9.6 (ratio 2:3) the GCD is 3.2×10⁻¹⁹ C, which would wrongly suggest e = 3.2×10⁻¹⁹ C: a data set of just two or three large values can hide the true unit. Key insight: quantisation appears as integer ratios, and you need drops with small, varied charges (like 3.20 and 4.80 together with others) to pin down the unit.')}
${P('Hard','Coulomb showed how to halve a charge by touching a charged metal sphere to an identical uncharged one. Spheres A and B each carry charge q. A neutral identical sphere C is touched first to A, then to B, and removed. What is the force between A and B now, compared with the original force at the same separation?',
'Touch C to A: A and C each have q/2. Touch C (q/2) to B (q): they share (q/2 + q)/2 = 3q/4 each. Final: A = q/2, B = 3q/4. Force ∝ product: (q/2)(3q/4) = 3q²/8, so the force is <b>3/8 of the original</b> (repulsive, same sign). Check: total charge conserved: q/2 + 3q/4 + 3q/4 = 2q ✓. Key insight: conservation of charge plus symmetry on contact (identical conductors share equally).')}
${P('Hard','Before 2019 the ampere was defined as the current which, in two long parallel wires 1 m apart in vacuum, produces a force of 2×10⁻⁷ N per metre. Show that this fixes μ₀ = 4π×10⁻⁷ T·m/A. Then find the force per metre for two wires carrying 10 A each, 5.0 mm apart.',
'F/L = μ₀I₁I₂/(2πd). Put I₁ = I₂ = 1 A, d = 1 m: 2×10⁻⁷ = μ₀/(2π), so μ₀ = <b>4π×10⁻⁷</b> (the factor 4π was chosen so that this "2×10⁻⁷" came out neat). For 10 A and 5 mm: F/L = 2×10⁻⁷ × 100/0.005 = <b>4.0×10⁻³ N/m</b> (attractive if currents are in the same direction). Since the 2019 SI redefinition fixes the elementary charge instead, μ₀ equals 4π×10⁻⁷ only to within a tiny experimental uncertainty. Key insight: Ampère\'s force law defined the unit, and its form fixes μ₀.')}
${P('Puzzle','Joule showed that mechanical work converts to heat. If a waterfall is 100 m high and all the kinetic energy becomes heat in the water at the bottom, how much warmer is it? (c_water = 4186 J/kg·K, g = 9.8). What height gives a 1 K rise?',
'Per kg: energy gh = 9.8 × 100 = 980 J; ΔT = 980/4186 = <b>0.23 K</b>. For 1 K you need h = cΔT/g = 4186/9.8 = <b>427 m</b> (independent of mass). Key insight: energy per kilogram cancels the mass; the same arithmetic says 1 kcal of heat equals about 427 kgf·m of work, which is the form in which Joule\'s mechanical equivalent of heat was often quoted.')}
${P('Puzzle','Tesla\'s rotating field: two coils placed at right angles carry currents in phase quadrature, producing fields B₁ = B₀cos(ωt) along x and B₂ = B₀sin(ωt) along y. Show the resultant has constant magnitude and find its rotation. For three coils 120° apart carrying currents 120° apart in phase (each coil producing a peak B₀), the resultant has magnitude 1.5B₀: verify and state the rotation speed for a 4-pole, 60 Hz machine.',
'Two-phase: |B| = B₀√(cos² + sin²) = <b>B₀ constant</b>, pointing at angle ωt: it rotates at ω (one turn per electrical cycle for a 2-pole machine). Three-phase: summing the three sinusoidal components (I checked numerically at several times) gives a rotating vector of constant magnitude <b>1.5 B₀</b>, at angle ωt. For 4 poles at 60 Hz: n_s = 120 × 60/4 = <b>1800 rpm</b>. Swapping two phase connections reverses the rotation, hence reverses the motor. Key insight: alternating currents in spatially offset coils make a <i>rotating</i> field without any moving part, which is what the induction motor rides on.')}
<h3>Trap list</h3>
<ul>
<li><b>Giving the unit a wrong discoverer.</b> Tesla for magnetic flux density, not flux (weber); Weber for flux.</li>
<li><b>Ørsted vs Ampère vs Faraday.</b> Ørsted: current makes a field (1820); Ampère: force between currents; Faraday/Henry: a changing field makes a current (1831).</li>
<li><b>Ohm's law predates induction by four years:</b> 1827 vs 1831; do not date it after the generator.</li>
<li><b>Edison vs Tesla/Westinghouse:</b> Edison championed DC; AC won for long-distance power because of transformers.</li>
<li><b>Volta vs Galvani:</b> Galvani believed in animal electricity; Volta showed the metals matter and built the pile.</li>
<li><b>Coulomb's law is 1/r²; a long wire's field is 1/r.</b> Do not swap them.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why Ohm's law could not have been discovered before Volta's battery, and why Faraday's discovery made the power grid possible.</p>
`;

/* ---------------- c11 ---------------- */
DATA.chal['c11'] = `
<h3>Why it works</h3>
<p><b>Magnets have no free poles, so the first term is a dipole.</b> A charge makes a 1/r² field; a north and a south pole a small distance apart almost cancel, leaving a field that falls as 1/r³ far away (on the axis: B ∝ 1/r³). Double the distance and the field drops to 1/8. The force on a wire, F = BIL, and on a charge, F = qvB, are perpendicular to B, which is why magnetic forces bend paths but do no work on a charge. Units: T = N/(A·m).</p>
<h3>Tools of thought</h3>
<ul>
<li><b>Power-law scaling.</b> Use B ∝ 1/r³ for a small magnet, 1/r for a long wire. Example: 8 mT at 5 cm becomes 1 mT at 10 cm.</li>
<li><b>Angle to the normal.</b> Φ = BA·cosθ with θ from the normal of the loop, not the plane.</li>
</ul>
<h3>Challenge problems</h3>
${P('Hard','A small bar magnet gives 8.0 mT on its axis 5.0 cm from its centre. Use the dipole law B ∝ 1/r³ to find B at 10 cm, and the distance at which it drops to Earth\'s field (50 μT).',
'At 10 cm (double the distance): B = 8.0/8 = <b>1.0 mT</b>. For 50 μT: (r/5 cm)³ = 8.0 mT/0.050 mT = 160, so r = 5 × 160^(1/3) = 5 × 5.43 = <b>27 cm</b>. Key insight: a strong magnet\'s influence dies out quickly, since 1/r³ beats 1/r². Sanity: 27 cm is about 5.4 times the starting distance, and 5.4³ ≈ 160 ✓.')}
${P('Core','A 0.020 m² loop sits in a uniform 0.30 T field. Its <i>plane</i> makes a 30° angle with the field. Find the flux. What is the flux if the plane is parallel to B?',
'The angle between B and the loop\'s <i>normal</i> is 90° − 30° = 60°. Φ = BA·cos60° = 0.30 × 0.020 × 0.5 = <b>3.0×10⁻³ Wb</b>. Plane parallel to B means θ = 90°, so <b>Φ = 0</b>. Key insight: the normal, not the plane, defines θ.')}
${P('Puzzle','A 0.50 m wire carrying 2.0 A is pushed sideways at 3.0 m/s through a perpendicular 0.40 T field (current along the wire, motion perpendicular to the wire and the field). Find the magnetic force, the mechanical power needed to move it at constant speed, and the EMF induced by the motion. Reconcile this with the statement "magnetic forces do no work".',
'F = BIL = 0.40 × 2.0 × 0.50 = <b>0.40 N</b>. Mechanical power = Fv = 0.40 × 3.0 = <b>1.2 W</b>. Motional EMF = BLv = 0.40 × 0.50 × 3.0 = <b>0.60 V</b>; electrical power against it = ε·I = 0.60 × 2.0 = <b>1.2 W</b> ✓. The magnetic force on each moving charge is perpendicular to its total velocity, so it does no net work; it redirects energy between the agent pushing the wire and the source driving the current. Key insight: the forces that push and the EMF that opposes are two views of one thing.')}
<h3>Trap list</h3>
<ul>
<li><b>Flux from the plane angle</b> instead of the normal angle.</li>
<li><b>Dipole field 1/r² or 1/r</b> mix-ups: small magnet 1/r³; long wire 1/r.</li>
<li><b>"Magnetic force does work"</b> on a single charge: it does not.</li>
</ul>
<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why cutting a magnet never gives you a lone north pole, and why magnetic fields can bend a charge without speeding it up.</p>
`;
})();
