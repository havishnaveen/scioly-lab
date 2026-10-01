/* G4: Go-deeper challenge blocks for thermodynamics lessons t01-t12 */
(function(){ DATA.chal = DATA.chal || {};
DATA.chal['t01'] = `
<h3>Why it works</h3>
<p>Every temperature scale is an <b>affine map</b> of every other: X = a + b·T. Two fixed points (ice 0, steam 100 in Celsius) fix both a and b. That one fact explains all the conversion formulas, and it tells you what survives a change of scale and what does not.</p>
<ul>
<li><b>Differences scale, points shift.</b> ΔX = b·ΔT, so differences need only the factor (1 K = 1 °C = 1.8 °F) and never the offset (32 or 273.15).</li>
<li><b>Averages survive.</b> A weighted average of temperatures is the same physical state in any scale, because a + b·(average of T) equals the average of (a + b·T). So you may mix in °F and convert only the answer.</li>
<li><b>Ratios do not survive.</b> "Twice as hot" only means something when zero means zero energy per molecule, i.e. kelvin. 40 °C is 313.15/293.15 = 1.07 times as hot as 20 °C, not 2.</li>
</ul>
<p><b>Why kelvin is physical.</b> For an ideal gas the average translational kinetic energy per molecule is (3/2)k_BT, which is proportional to T with no offset. Gas pressure at fixed volume is also proportional to T (P = NkT/V). Extrapolating P to zero gives the zero of the scale. Every law that contains a ratio or a power of T (Carnot efficiency, T⁴ radiation, Q/T entropy) therefore needs kelvin.</p>
<table>
<tr><th>Change</th><th>Effect</th></tr>
<tr><td>Add 10 K to T = 300 K</td><td>P/P_0 (constant V gas) rises 3.3%</td></tr>
<tr><td>Add 10 K to T = 30 K</td><td>P/P_0 rises 33%</td></tr>
<tr><td>Celsius reading doubles, 20 → 40 °C</td><td>absolute T rises only 6.8%</td></tr>
<tr><td>Celsius reading goes 0 → 10</td><td>Fahrenheit goes 32 → 50, a change of 18 °F</td></tr>
</table>
<p><b>Units check.</b> T(°F) = 1.8·T(°C) + 32: the factor 1.8 has units °F/°C, the offset has units °F. Adding 32 to a difference is a units error in the same way as adding 32 m to a speed.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Two-point calibration.</b> Any linear instrument (a bad thermometer, a thermistor table) is fixed by two known readings: true = (reading − r_ice)/(r_steam − r_ice) × 100. Example: a thermometer that reads 2 at the ice point and 98 at the steam point.</li>
<li><b>Set two scales equal.</b> "When does X = Y?" is one linear equation; solve it, then check both lines really cross (parallel lines never do). Example: 1.8C + 32 = C gives C = −40.</li>
<li><b>Averages in any scale.</b> Mix equal masses of 50 °F and 80 °F water: the answer is 65 °F, no conversion of inputs required.</li>
<li><b>Differences first.</b> If a problem states a change (rise of 15 °C), convert the change by the factor only, then convert any absolute value once at the end.</li>
<li><b>Sanity anchors.</b> 0 °C = 273 K, 20 °C = 68 °F = 293 K, 37 °C = 98.6 °F = 310 K, 100 °C = 212 °F. If an answer is far from the anchors you expect, recheck.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A faulty liquid-in-glass thermometer reads 2.0 °C in melting ice and 98.0 °C in steam at 1 atm. Its scale is uniform. It reads 30.0 °C in a beaker of water. What is the true temperature?</div><details class="sol"><summary></summary><div><b>Key insight:</b> two-point linear calibration. The span 2 → 98 (96 divisions) represents 100 true degrees. True = (30 − 2)/96 × 100 = 29.2 °C. Sanity: the reading is above the ice point by 28 of 96 divisions, a bit less than a third of the way, so about 29 °C.</div></details>
<div class="prob"><span class="lv">Core</span>A room warms from 20 °C to 35 °C. Give the change in kelvin, in °F, and the percent change in absolute temperature.</div><details class="sol"><summary></summary><div>Differences need only the factor: ΔT = 15 K = 27 °F. Absolute values: 308.15 K/293.15 K = 1.0512, so absolute temperature rose by only 5.1% even though the Celsius number rose by 75%. Sanity: 15 out of roughly 293 is about 5%.</div></details>
<div class="prob"><span class="lv">Hard</span>At what temperature do the kelvin and Fahrenheit scales give the same number? Give the value in °C, too.</div><details class="sol"><summary></summary><div>Write both in Celsius: K = C + 273.15 and F = 1.8C + 32. Set equal: 0.8C = 241.15, so C = 301.44 °C, and the common number is 574.59 (574.59 K = 574.59 °F). Check: 1.8 × 301.4375 + 32 = 574.5875, and 301.4375 + 273.15 = 574.5875. The lines have different slopes so exactly one crossing exists.</div></details>
<div class="prob"><span class="lv">Hard</span>A constant-volume gas thermometer reads 80.0 kPa at the triple point of water (273.16 K) and 101.3 kPa when its bulb is in an unknown bath. What is the bath temperature (assume ideal-gas behavior)?</div><details class="sol"><summary></summary><div><b>Key insight:</b> at constant V and n, T is proportional to P, so T/273.16 K = P/P_tp. T = 273.16 × 101.3/80.0 = 345.9 K = 72.7 °C. Sanity: the pressure is 27% higher, so the absolute temperature is 27% higher, about 346 K. Using °C in the ratio would give a nonsense answer.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Mix 1 kg of water at 10 °C, 2 kg at 80 °F and 3 kg at 300 K, with no heat loss and no phase change. What is the final temperature in kelvin? (Take c as constant.)</div><details class="sol"><summary></summary><div><b>Key insight:</b> a weighted average commutes with any affine scale, so convert each input to kelvin and average by mass: 10 °C = 283.15 K; 80 °F = 299.82 K; 300 K. T = (1 × 283.15 + 2 × 299.82 + 3 × 300)/6 = 297.13 K (about 24.0 °C). Sanity: the result lies between the extremes 283 and 300 and is pulled toward the heavy 300 K sample.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Is there a temperature at which the Fahrenheit number equals the square of the Celsius number? Find all real solutions of F = C² and say whether each is physically possible.</div><details class="sol"><summary></summary><div>Solve C² = 1.8C + 32, so C² − 1.8C − 32 = 0, C = (1.8 ± √(3.24 + 128))/2 = 6.63 or −4.83. For C = 6.63 °C, F = 43.93 (6.628² = 43.93, matches 1.8 × 6.628 + 32 = 43.93). For C = −4.83 °C, F = 23.3 and C² = 23.3, also valid (it is above 0 K). Both are physical; the lesson is that "equal number" questions are just equations between two linear functions.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Converting a difference with the offset.</b> A 10 °C rise is 18 °F, not 50 °F. The 32 only belongs to readings.</li>
<li><b>"Twice as hot".</b> Doubling a Celsius number does not double the physical temperature; only doubling kelvin does.</li>
<li><b>Gas-law data in Celsius.</b> P/T ratios using °C are wrong even though they look plausible at 20 °C and 40 °C.</li>
<li><b>Converting before averaging.</b> Not wrong, but wasteful. Averaging first and converting once removes arithmetic slips.</li>
<li><b>Writing "degrees kelvin".</b> The unit is kelvin (K), with no degree sign. Rankine is the absolute Fahrenheit scale, not kelvin.</li>
<li><b>Two scales meeting at −40.</b> True only for °C and °F; the K/°F crossing is at 574.59.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why "40 °C is not twice as hot as 20 °C", and why the same 10-degree rise needs the 32 in a reading but not in a difference.</p>
`;
DATA.chal['t02'] = `
<h3>Why it works</h3>
<p>All heat units are the same dimension, energy: [J] = [N·m] = [kg·m²·s⁻²]. A calorie, BTU or kWh is just a different ruler for joules, so every "unit conversion" is multiplication by a known factor, and every "how much" problem reduces to energy bookkeeping: energy in = energy out + energy stored.</p>
<p><b>Joule's experiment as a conservation law.</b> A mass M falling a height h loses Mgh of gravitational energy. If it ends as heat in water of mass m, then Mgh = mcΔT. The equivalent of 1 cal = 4.184 J follows from a measurable ΔT of a fraction of a kelvin. The scale is tiny: to warm water by 1 K you must drop it through h = cΔT/g = 4184/9.81 = 427 m. That explains why heat was thought a separate substance for so long.</p>
<table>
<tr><th>Double this</th><th>Effect on heating time of water (fixed heater)</th></tr>
<tr><td>Mass of water</td><td>×2 (Q ∝ m)</td></tr>
<tr><td>Temperature rise wanted</td><td>×2 (Q ∝ ΔT)</td></tr>
<tr><td>Heater power</td><td>×1/2 (t = Q/P)</td></tr>
<tr><td>Efficiency</td><td>×1/2 (t = Q/(ηP))</td></tr>
</table>
<p><b>Units check.</b> P·t: W·s = J. m·c·ΔT: kg·(J/kg·K)·K = J. m·g·h: kg·(m/s²)·m = J. Every route ends in joules, so a power must be multiplied by a time before it can be equated to a heat.</p>
<p><b>Limiting case.</b> As efficiency η → 0 the time diverges; as η → 1 it reaches the ideal minimum t = mcΔT/P. No real heater beats that bound, so an answer shorter than the ideal time signals an error.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Convert to joules first.</b> Put every quantity (Cal, BTU, kWh, eV) into J before combining. Example: 250 Cal = 250 × 4184 J = 1.05 MJ.</li>
<li><b>Round numbers for estimates.</b> c_water ≈ 4200 J/kg·K, 1 kWh ≈ 3.6 MJ, 1 Cal ≈ 4.2 kJ, g ≈ 10. Example: a 2000 Cal diet is 8.4 MJ per day; 8.4 MJ / 86 400 s ≈ 97 W, about a bright light bulb.</li>
<li><b>Energy ladders.</b> Compare what an energy could do in different forms: lift, heat, speed. Example: 1 Cal lifts 70 kg by about 6 m but warms 1 kg water by 1 K.</li>
<li><b>Absurdity test.</b> If an idealized result is huge (a room warming by 60 K), identify the ignored heat capacity (walls, furniture) that would fix it.</li>
<li><b>Dimensional guard.</b> Watch for kW vs W, h vs s, Cal vs cal, before any arithmetic.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A 1500 W kettle, 85% efficient, heats 1.0 kg of water from 20 °C to 100 °C. How long does it take?</div><details class="sol"><summary></summary><div>Q = mcΔT = 1.0 × 4184 × 80 = 3.347 × 10⁵ J. Useful power = 0.85 × 1500 = 1275 W, so t = 3.347 × 10⁵/1275 = 262.5 s, about 4.4 min. Sanity: the ideal time at 100% is 223 s; a bit longer with losses.</div></details>
<div class="prob"><span class="lv">Core</span>A 250 Cal snack bar. If all of its energy were converted to gravitational potential energy, how high could a 70 kg person be lifted? (g = 9.81 m/s².)</div><details class="sol"><summary></summary><div>Energy = 250 × 4184 = 1.046 × 10⁶ J. h = E/(mg) = 1.046 × 10⁶/(70 × 9.81) = 1523 m. The trap is 250 cal instead of 250 Cal, which gives a thousand times less. (Muscles are only about 25% efficient, so real climbing gets you roughly a quarter of that height.)</div></details>
<div class="prob"><span class="lv">Hard</span>Niagara Falls drops about 51 m. If all the kinetic energy turned into heat in the water at the bottom, by how much would the water warm? What height would give 1.0 K?</div><details class="sol"><summary></summary><div><b>Key insight:</b> mass cancels: gh = cΔT. ΔT = 9.81 × 51/4184 = 0.12 K. For 1.0 K: h = 4184/9.81 = 427 m. Sanity: mass m appears in both sides of mgh = mcΔT, so the result is independent of how much water falls.</div></details>
<div class="prob"><span class="lv">Hard</span>A lead bullet (c = 129 J/kg·K) at 25 °C strikes a steel plate at 200 m/s and stops. If all its kinetic energy heats the bullet, what is the temperature rise, and does the bullet reach its melting point of 327.5 °C?</div><details class="sol"><summary></summary><div>KE per kg = v²/2 = 20 000 J/kg; ΔT = v²/(2c) = 40 000/(2 × 129) = 155 K, final 180 °C. Melting needs ΔT = 302.5 K, so no melting at 200 m/s (you would need v ≈ 279 m/s just to reach the melting point). Sanity: the mass cancels, so the answer depends only on v and c.</div></details>
<div class="prob"><span class="lv">Puzzle</span>30 people each give off about 100 W. They sit 2 hours in a sealed, perfectly insulated room 10 m × 10 m × 3 m containing 360 kg of air (c = 1005 J/kg·K). Compute the air temperature rise, then explain why the real answer is far smaller.</div><details class="sol"><summary></summary><div>Energy = 30 × 100 W × 7200 s = 2.16 × 10⁷ J. ΔT = 2.16 × 10⁷/(360 × 1005) = 59.7 K. Absurd, because the walls, floor, furniture and the people themselves have heat capacities hundreds of times that of the air (concrete: 0.88 kJ/kg·K times tonnes), and ventilation and wall losses also remove heat. <b>Key insight:</b> air has a tiny heat capacity compared with the solids around it, so the room's thermal mass is dominated by the structure.</div></details>
<div class="prob"><span class="lv">Puzzle</span>An air conditioner removes 12 000 BTU/h (1 BTU = 1055.06 J) and has a coefficient of performance (heat removed per electrical energy) of 3.5. It runs 8 h. Electricity costs $0.15/kWh. What is the cost?</div><details class="sol"><summary></summary><div>Heat removed = 12 000 × 8 = 96 000 BTU = 96 000 × 1055.06 = 1.013 × 10⁸ J = 28.14 kWh. Electrical energy = 28.14/3.5 = 8.04 kWh, cost = $1.21. Trap: billing the 28 kWh of heat at the electrical rate gives $4.22, which ignores the COP. Sanity: 12 000 BTU/h is about 3.5 kW of heat, so 1 kW of electrical input at COP 3.5, times 8 h = 8 kWh.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>cal vs Cal.</b> A food Calorie is 1000 cal = 4184 J. Mixing them is a factor of 1000.</li>
<li><b>Power vs energy.</b> kW is power, kWh is energy; a 1500 W kettle does not "use 1500 W of energy".</li>
<li><b>Forgetting efficiency.</b> Real heaters deliver less than their rating to the water, so times are longer, not shorter.</li>
<li><b>Mixing units inside one formula.</b> Using c in cal/g·K with m in kg gives errors by 1000; keep the pair consistent.</li>
<li><b>"Heat is contained in an object."</b> It is energy in transit; the stored quantity is internal energy.</li>
<li><b>BTU vs kWh.</b> 1 kWh = 3412 BTU; dropping this factor changes a cost by thousands.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a waterfall barely warms the water it falls into, and what that tells you about how big a joule of heat really is.</p>
`;
DATA.chal['t03'] = `
<h3>Why it works</h3>
<p>Calorimetry is <b>energy conservation in a closed box</b>: ΣQ = 0, with each Q = m·c·ΔT signed by its own ΔT. Solving ΣQ = 0 for the final temperature gives a <b>weighted average</b>:</p>
<p><code>T_f = (C_1T_1 + C_2T_2)/(C_1 + C_2)</code>, where C = mc is each body's heat capacity.</p>
<p>This has a lever picture: T_f divides the interval from T_1 to T_2 in the inverse ratio of the heat capacities, (T_f − T_1)/(T_2 − T_f) = C_2/C_1. The body with the <i>larger</i> heat capacity moves <i>less</i>. Three checks follow at once.</p>
<ul>
<li>T_f lies between T_1 and T_2 (a weighted average cannot leave the range).</li>
<li>If C_2 ≫ C_1, then T_f → T_2 (the big body is a reservoir).</li>
<li>If C_1 = C_2, T_f is the simple mean.</li>
</ul>
<table>
<tr><th>Change</th><th>Effect on T_f (when water is C_2 and sample is C_1)</th></tr>
<tr><td>Double the water mass</td><td>T_f moves toward the water's start: the gap T_f − T_water falls from ΔT/2 to ΔT/3 when C_1 = C_2 at first, and can never pass T_water</td></tr>
<tr><td>Double c of the sample</td><td>same as doubling the sample mass</td></tr>
<tr><td>Halve ΔT_initial</td><td>every temperature change halves (linearity)</td></tr>
<tr><td>Add a calorimeter C_cal</td><td>same as adding C_cal/c_w grams of water</td></tr>
</table>
<p><b>Units check.</b> m·c·ΔT: kg·(J/kg·K)·K = J. Specific heat is J/kg·K (or J/g·K, cal/g·°C); heat capacity C is J/K. The relation C_p − C_v = R holds per mole: J/mol·K.</p>
<p><b>Why c differs.</b> In a solid at room temperature each atom stores about 3k_BT (Dulong–Petit, 3R ≈ 25 J/mol·K), so heavy atoms give a small c per kilogram: c ≈ 25/M(g/mol) J/g·K. Copper: 25/63.5 = 0.39 (measured 0.385). Water's large c (4.18) comes from rotational and hydrogen-bond modes that store energy.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Lever / weighted-mean picture.</b> Sketch T_1 and T_2 on a line and put T_f closer to the larger heat capacity. Example: 200 g Cu (77 J/K) into 500 g water (2092 J/K) ends at 29.9 °C, just 10 K above the water's start.</li>
<li><b>Bounding.</b> Before computing, bound T_f between the two starts. Any value outside is an arithmetic or sign error.</li>
<li><b>Excess-temperature ratios.</b> For a repeated dip, each cycle multiplies the gap (T_body − T_water) by a fixed ratio. Example: gaps 12.5, 7.5, 4.5, 2.7 (ratio 0.6).</li>
<li><b>Water-equivalent.</b> Fold the calorimeter into the water: m_eq = C_cal/4.184 g. Example: C_cal = 40 J/K is 9.6 g of water.</li>
<li><b>Dulong–Petit sanity.</b> If a metal's c is unknown, estimate M = 25/c and see whether it matches a real element.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A 200 g copper block (c = 0.385 J/g·K) at 300 °C is dropped into 500 g of water (c = 4.184) at 20 °C in an ideal calorimeter. Find the final temperature.</div><details class="sol"><summary></summary><div>C_Cu = 77.0 J/K, C_w = 2092 J/K. T_f = (77 × 300 + 2092 × 20)/(77 + 2092) = (23 100 + 41 840)/2169 = 29.94 °C. Sanity: water's heat capacity is 27 times larger, so T_f sits 27 times closer to 20 than to 300: (29.94 − 20)/(300 − 29.94) = 0.0368 ≈ 77/2092.</div></details>
<div class="prob"><span class="lv">Core</span>A 150 g metal sample at 100 °C is dropped into 200 g of water at 20.0 °C in a calorimeter whose heat capacity is 40 J/K. The final temperature is 25.0 °C. Find the specific heat of the metal and name the likely metal.</div><details class="sol"><summary></summary><div>Heat gained: (200 × 4.184 + 40) × 5.0 = 4384 J. Heat lost: 150 × c × 75 = 11 250c. c = 0.390 J/g·K, matching copper (0.385). Sanity: dropping the calorimeter term would give c = 0.372, a 5% error that would point toward the wrong material.</div></details>
<div class="prob"><span class="lv">Hard</span>A 200 g metal block (c = 0.50 J/g·K) at 200 °C is dipped into a 100 g bath of water at 20 °C, withdrawn when equilibrium is reached, then dipped into a second 100 g bath at 20 °C. Find both equilibrium temperatures. Compare with dropping the block once into 200 g of water.</div><details class="sol"><summary></summary><div>C_block = 100 J/K, C_bath = 418.4 J/K. First: (100 × 200 + 418.4 × 20)/518.4 = 54.72 °C. Second: (100 × 54.72 + 418.4 × 20)/518.4 = 26.70 °C. One dip into 200 g (836.8 J/K): (20 000 + 16 736)/936.8 = 39.21 °C. <b>Key insight:</b> splitting the cold reservoir into two baths, each at the starting temperature, pulls the block much lower (26.7 vs 39.2 °C), because each bath is fresh and cold.</div></details>
<div class="prob"><span class="lv">Hard</span>2.00 mol of N_2 (treat as a diatomic ideal gas, C_v = (5/2)R) is heated from 300 K to 400 K at constant pressure. Find Q, ΔU and the work done by the gas.</div><details class="sol"><summary></summary><div>C_p = (7/2)R. Q = n·C_pΔT = 2 × 3.5 × 8.314 × 100 = 5820 J. ΔU = n·C_vΔT = 2 × 2.5 × 8.314 × 100 = 4157 J. W = nRΔT = 1663 J, and Q = ΔU + W = 4157 + 1663 = 5820 ✓. The extra 1663 J beyond the constant-volume heat is the work of expanding against the pressure (Mayer relation C_p − C_v = R).</div></details>
<div class="prob"><span class="lv">Puzzle</span>A large bucket of cold water sits at temperature T_0. A hot metal ball is dipped in, withdrawn when equilibrium is reached, and the dip is repeated with identical balls at the same starting temperature T_b. The first dip raises the water by 5 °C and the second by a further 3 °C. By how much does the water rise in the third dip? (No heat loss to the surroundings.)</div><details class="sol"><summary></summary><div><b>Key insight:</b> every dip shrinks the gap (T_b − T_water) by the same factor. Let x = C_ball/C_water and D = T_b − T_0. Dip 1: x(D − 5) = 5. Dip 2: x(D − 8) = 3. Subtract: 5 − 3x = 3, so x = 2/3 and D = 12.5. The gap to the ball after each dip: 12.5, 7.5, 4.5, 2.7, a ratio of 0.6 = 1/(1 + x) each time. Third dip: 12.5 − 2.7 = 9.8, so the water rises by 9.8 − 8 = 1.8 °C. Sanity: the rises 5, 3, 1.8 also have ratio 0.6.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Equal masses of water (c = 4.184) and an oil (c = 2.0) are mixed. In scenario A the water starts at 80 °C and the oil at 20 °C; in B the oil starts at 80 °C and the water at 20 °C. Find both final temperatures. Is T_f(A) + T_f(B) special?</div><details class="sol"><summary></summary><div>A: (4.184 × 80 + 2.0 × 20)/6.184 = 60.6 °C. B: (4.184 × 20 + 2.0 × 80)/6.184 = 39.4 °C. Sum = 100.0 °C = 80 + 20. <b>Key insight:</b> T_f(A) = 20 + 60 × 4.184/6.184 and T_f(B) = 20 + 60 × 2.0/6.184; the two weights add to 1, so the sum is always T_hot + T_cold. Sanity: the stuff with the larger c always "wins" toward its own temperature.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Sign errors in ΣQ = 0.</b> Write every Q as m·c·(T_f − T_initial); the hot body then has a negative Q automatically. Do not mix "lost" and "gained" with absolute values unless you keep track.</li>
<li><b>Forgetting the calorimeter.</b> Its C_cal is a real heat sink; ignoring it makes c come out too low or T_f too high.</li>
<li><b>Mixing g and kg.</b> c = 0.385 J/g·K with a mass in kg gives a factor of 1000 error.</li>
<li><b>"Hotter means more heat".</b> A small hot block holds less energy than a big warm bath; compare C·ΔT, not T.</li>
<li><b>Using C_v for heating at constant P.</b> The extra R per mole becomes expansion work.</li>
<li><b>Final temperature outside the range.</b> Always check T_f is between the initial temperatures.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why the final temperature of a mixture is a weighted average, and why the thing with the bigger heat capacity changes least.</p>
`;
DATA.chal['t04'] = `
<h3>Why it works</h3>
<p>A heating curve is a bookkeeping table of energy in. Along a slope the heat supplies kinetic energy (Q = mcΔT); on a plateau it supplies potential energy of bonds (Q = mL) and the temperature does not move. The end-state of any mixing problem with a phase change is decided by <b>comparing two numbers</b>: the energy available and the energy needed for the next phase step. You never guess the final phase; you test it.</p>
<p><b>The ice-water test.</b> When ice at T_i ≤ 0 meets warm water, compute (a) the heat the water gives up if it cools all the way to 0 °C, Q_avail = m_w·c_w·(T_w − 0), and (b) the heat needed to bring the ice to 0 °C and melt it all, Q_need = m_ice·c_ice·|T_i| + m_ice·L_f. If Q_avail > Q_need everything ends above 0 °C; if Q_avail < Q_need the end state is at 0 °C with leftover ice; equality gives exactly 0 °C with no ice.</p>
<table>
<tr><th>Energy step (water)</th><th>Per gram</th><th>Ratio to heating 1 K</th></tr>
<tr><td>Warm ice 1 K</td><td>2.09 J</td><td>0.5</td></tr>
<tr><td>Warm water 1 K</td><td>4.184 J</td><td>1</td></tr>
<tr><td>Melt</td><td>334 J</td><td>80 K of warming</td></tr>
<tr><td>Boil</td><td>2256 J</td><td>539 K of warming</td></tr>
</table>
<p><b>Why L_v ≫ L_f.</b> Melting only loosens bonds so molecules can slide; vaporization separates them completely and also does work pushing back the atmosphere (PΔV ≈ 170 J/g of the 2256). Hence L_v/L_f ≈ 6.75.</p>
<p><b>Units check.</b> Q = mL: kg·(J/kg) = J. There is no ΔT in a latent-heat term. On a constant-power heating curve, plateau duration is t = mL/P, so plateau lengths are in the ratio of the L values.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Available vs needed.</b> Decide the end phase by comparing energies before writing the equation. Example: 400 g of ice at −20 °C vs 300 g of water at 80 °C.</li>
<li><b>Equivalent-kelvin trick.</b> Convert latent heat to "degrees of water warming": 334/4.184 = 80 K. Example: 1 g of ice at 0 °C cools 1 g of water from 80 °C to 0 °C and is just melted (334/4.184 = 79.8, about 80 K).</li>
<li><b>Time-ratio reading of a graph.</b> At constant power, segment times are proportional to energies, so one measured segment calibrates the others. Example: ice warming 2.0 min means melting 16.0 min.</li>
<li><b>Condensation bonus.</b> Steam delivers L_v plus the cooling of its condensate, so use both terms. Example: 1 g of steam melts 8.0 g of ice.</li>
<li><b>Bound with extreme cases.</b> If even the full energy of condensation is too small, steam stays steam; the plateau at 100 °C would persist.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>50 g of ice at 0 °C is added to 200 g of water at 40 °C in an insulated container. Find the final state.</div><details class="sol"><summary></summary><div>Available (cool water to 0): 200 × 4.184 × 40 = 33 472 J. Needed to melt all ice: 50 × 334 = 16 700 J. Available exceeds needed, so all ice melts and the final temperature exceeds 0 °C. Balance: 33 472 − 16 700 = 250 × 4.184 × T_f, so T_f = 16 772/1046 = 16.03 °C. Sanity: the water's own energy of 33 kJ goes roughly half into melting.</div></details>
<div class="prob"><span class="lv">Core</span>How much heat is needed to take 10 g of ice at −10 °C to steam at 100 °C? (c_ice = 2.09, c_water = 4.184 J/g·K, L_f = 334 J/g, L_v = 2256 J/g.)</div><details class="sol"><summary></summary><div>Warm ice: 10 × 2.09 × 10 = 209 J. Melt: 3340 J. Warm water: 10 × 4.184 × 100 = 4184 J. Boil: 22 560 J. Total = 30 293 J. Boiling is 74% of the total. Sanity: the answer is dominated by the last step; if your total is near 7–8 kJ you forgot L_v.</div></details>
<div class="prob"><span class="lv">Hard</span>400 g of ice at −20 °C is placed in 300 g of water at 80 °C in an insulated container. What is the final state (temperature and masses of ice and water)?</div><details class="sol"><summary></summary><div>Water cooling to 0 °C supplies 300 × 4.184 × 80 = 100 416 J. Warming the ice to 0 °C costs 400 × 2.09 × 20 = 16 720 J, leaving 83 696 J for melting. Melting all ice would need 133 600 J, more than is left. So the end state is 0 °C with ice and water coexisting. Mass melted = 83 696/334 = 250.6 g. Final: 149.4 g ice and 550.6 g water at 0 °C. <b>Key insight:</b> test the boundary case (T_f = 0) first. Sanity: mass is conserved (149.4 + 550.6 = 700 g).</div></details>
<div class="prob"><span class="lv">Hard</span>10 g of steam at 100 °C is bubbled into 200 g of water at 20 °C in an insulated cup with negligible heat capacity. Find the final temperature.</div><details class="sol"><summary></summary><div>Steam condenses: 10 × 2256 = 22 560 J, then the condensate cools to T_f: 10 × 4.184 × (100 − T_f). The cold water gains 200 × 4.184 × (T_f − 20). Balance: 22 560 + 4184 − 41.84T_f = 836.8T_f − 16 736, so T_f = 43 480/878.64 = 49.49 °C. Check that steam had enough energy to condense fully: yes, since T_f is below 100 °C. Sanity: 10 g of steam (5% of the mass) raised 200 g of water by 29 K.</div></details>
<div class="prob"><span class="lv">Puzzle</span>A heater of constant power warms a block of ice starting at −20 °C (no heat loss). The temperature reaches 0 °C after 2.0 min. After how many minutes from the start does the water begin to boil, and how long is the boiling plateau until all is steam? (c_ice = 2.09, c_w = 4.184, L_f = 334, L_v = 2256, all per gram.)</div><details class="sol"><summary></summary><div><b>Key insight:</b> time ∝ energy per gram. Warming ice 20 K costs 41.8 J/g for 2.0 min, so the rate is 20.9 J/g per minute. Melting: 334/20.9 = 15.98 min. Warming water 100 K: 418.4/20.9 = 20.02 min. Boiling begins at 2.0 + 15.98 + 20.02 = 38.0 min. Boiling plateau: 2256/20.9 = 107.9 min, nearly three times the whole earlier time. Sanity: the ratio of the boiling plateau to the melting plateau is 2256/334 = 6.75 (107.9/15.98).</div></details>
<div class="prob"><span class="lv">Puzzle</span>How many grams of ice at 0 °C can 1.00 g of steam at 100 °C melt, if everything ends as liquid water at 0 °C?</div><details class="sol"><summary></summary><div>The steam gives up L_v = 2256 J plus the cooling of its condensate from 100 to 0 °C: 418.4 J, total 2674.4 J. Mass melted = 2674.4/334 = 8.01 g. The trap is 2256/334 = 6.75 g, forgetting the 418 J of cooling. Sanity: 1 g of boiling water alone melts 1.25 g of ice, which is 418.4/334.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Assuming all the ice melts.</b> Always compare Q_avail and Q_need; the mixture may finish at exactly 0 °C with ice left.</li>
<li><b>Forgetting warming the ice first.</b> Ice below 0 °C costs c_ice·ΔT before it can melt.</li>
<li><b>Using L with a ΔT.</b> No temperature change enters a phase-change term.</li>
<li><b>Dropping the condensate cooling.</b> Steam delivers L_v and also heat as the water cools from 100 °C.</li>
<li><b>Treating "ice-water" like ice.</b> 0 °C water has zero melting ability; only ice at 0 °C carries the 334 J/g.</li>
<li><b>Expecting T to rise on a plateau.</b> Energy goes into bonds, not kinetic energy; the thermometer stays flat.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why 1 g of steam scalds more than 1 g of boiling water, and how to decide if ice in a drink melts completely.</p>
`;
DATA.chal['t05'] = `
<h3>Why it works</h3>
<p>Fourier's law P = kAΔT/L is what you get from three proportionalities that each have a one-line reason. Take a slab of area A and thickness L with faces at T_1 and T_2.</p>
<ul>
<li><b>P ∝ A:</b> two identical slabs side by side carry twice the heat (parallel paths).</li>
<li><b>P ∝ 1/L:</b> two identical slabs stacked carry the same heat through each, but the total temperature drop is shared between them, so each sees ΔT/2. Double thickness means half the gradient, half the flow.</li>
<li><b>P ∝ ΔT:</b> conduction is linear (for small gradients), so two equal drops in series give the same flow as one of double size.</li>
</ul>
<p>Write P = ΔT/R_th with R_th = L/(kA). This is Ohm's law with ΔT ↔ V, P ↔ I. Layers in series add their R; paths side by side add their conductances G = 1/R. Everything you know about resistor networks carries over, including voltage-divider logic: <b>the temperature drop across a layer is proportional to its R</b>.</p>
<table>
<tr><th>Change</th><th>Effect on P</th></tr>
<tr><td>Double thickness L</td><td>×1/2</td></tr>
<tr><td>Double area A</td><td>×2</td></tr>
<tr><td>Double A and L together</td><td>unchanged</td></tr>
<tr><td>Replace k = 0.12 (wood) by 0.04 (foam)</td><td>×1/3</td></tr>
<tr><td>Double ΔT</td><td>×2</td></tr>
</table>
<p><b>Units check.</b> k·A·ΔT/L: (W/m·K)·m²·K/m = W. Layer R = L/k has units m²K/W (per area); R_th = L/(kA) has K/W. US R-values are in ft²·°F·h/BTU: US R = 5.678 × SI R.</p>
<p><b>Cylinders.</b> In a pipe the area grows with radius, so the flux falls as 1/r while the total flow per length stays constant: P/ℓ = 2πk·ΔT/ln(r_2/r_1). The logarithm comes from adding infinitely many thin shells, R = ∫dr/(2πkrℓ).</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Circuit translation.</b> Draw the thermal network as resistors. Example: wall plus foam is two resistors in series with a voltage-divider on temperatures.</li>
<li><b>Where is the gradient?</b> The big temperature drop sits across the poorest conductor. Example: a rod, copper half and steel half, ends at 100 and 0 °C: the junction is at 89.9 °C, so most of the drop is across the steel.</li>
<li><b>Parallel paths: the best conductor wins.</b> Add conductances, not R. Example: a steel bolt with 1% of the area passes most of the heat.</li>
<li><b>Scaling instead of computing.</b> Compare to a known case by ratios. Example: growing ice obeys h² ∝ t, so doubling thickness takes four times as long.</li>
<li><b>Energy balance at a moving front.</b> Heat through the layer equals latent heat released at the front: ρL·dh/dt = kΔT/h.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A wall has an inner layer of brick, 10 cm thick, k = 0.8 W/m·K, then 8 cm of fiberglass, k = 0.04. Area 12 m², inside 20 °C, outside −5 °C. Find the heat flow and the temperature at the brick/fiberglass interface. (Ignore surface films.)</div><details class="sol"><summary></summary><div>R_brick = 0.10/0.8 = 0.125, R_glass = 0.08/0.04 = 2.0, R_total = 2.125 m²K/W. P = AΔT/R = 12 × 25/2.125 = 141.2 W. The drop across the brick is 25 × 0.125/2.125 = 1.47 K, so the interface is at 20 − 1.47 = 18.5 °C. Sanity: nearly all of the 25 K falls across the fiberglass, which carries 94% of the total R.</div></details>
<div class="prob"><span class="lv">Core</span>A copper rod of length 0.50 m and cross-section 2.0 cm² has one end in boiling water (100 °C) and the other in ice (0 °C), with the sides insulated. Find the heat flow, and how fast ice melts at the cold end (L_f = 334 J/g).</div><details class="sol"><summary></summary><div>P = kAΔT/L = 401 × 2.0 × 10⁻⁴ × 100/0.50 = 16.0 W. Melting rate = 16.04/334 = 0.048 g/s, about 2.9 g per minute. Sanity: A = 2 cm² = 2 × 10⁻⁴ m², not 2 × 10⁻² (a common slip).</div></details>
<div class="prob"><span class="lv">Hard</span>A 10.0 m² wall is 10 cm of foam (k = 0.040 W/m·K), but 1% of its area (0.10 m²) is a steel path (k = 50 W/m·K) straight through. Compare the heat flow with the ideal foam-only wall and find the fraction carried by steel.</div><details class="sol"><summary></summary><div>Conductances (G = kA/L): foam part 0.040 × 9.9/0.10 = 3.96 W/K, steel 50 × 0.10/0.10 = 50 W/K. Ideal wall: 0.040 × 10/0.10 = 4.00 W/K. Actual: 53.96 W/K, which is 13.5 times larger. Steel carries 50/53.96 = 92.7% of the heat. <b>Key insight:</b> in parallel, conductances add, so a small area of a 1250-times-better conductor overwhelms everything else. That is why "thermal bridges" (nails, studs, bolts) ruin insulation.</div></details>
<div class="prob"><span class="lv">Hard</span>A steam pipe of outer radius 1.0 cm at 80 °C runs 10 m through air at 20 °C. It is wrapped with insulation (k = 0.040 W/m·K) out to radius 3.0 cm. Ignoring surface films, find the heat loss. What would it be for outer radius 6.0 cm?</div><details class="sol"><summary></summary><div>P = 2πkℓΔT/ln(r_2/r_1) = 2π × 0.040 × 10 × 60/ln 3 = 150.8/1.0986 = 137.3 W. For 6 cm: ln 6 = 1.792, P = 84.2 W. Doubling the outer radius (more than doubling insulation thickness, from 2 to 5 cm) reduces the loss by only 39%. <b>Key insight:</b> the log means each extra layer is worth less, because it sits at a larger radius with more area.</div></details>
<div class="prob"><span class="lv">Puzzle</span>A bare wire of radius 1.0 mm sheds heat to air with h = 10 W/m²K. You coat it in plastic (k = 0.20 W/m·K) to an outer radius of 2.0 cm. Compare the heat loss per unit length for the same surface-to-air temperature difference across the whole system (wire hotter than air by ΔT). Which loses more, and why?</div><details class="sol"><summary></summary><div>Resistance per unit length: bare = 1/(2πr_0h) = 15.92 m·K/W. Coated = ln(20)/(2π × 0.20) + 1/(2π × 0.02 × 10) = 2.384 + 0.796 = 3.18 m·K/W. The coated wire loses 5.0 times <i>more</i> heat. <b>Key insight:</b> the critical radius r_c = k/h = 0.20/10 = 2.0 cm. Below r_c, adding insulation increases the outer surface area faster than it adds conduction resistance, so heat loss goes up. Insulation helps only beyond r_c (electrical insulation on thin wires is a real example).</div></details>
<div class="prob"><span class="lv">Puzzle</span>A lake surface at −10 °C freezes from the top; the water beneath stays at 0 °C. Model the ice as a slab of thickness h with the top at −10 °C, conductivity k = 2.2 W/m·K, density 917 kg/m³, L_f = 334 kJ/kg. Find h after 1 day, the time to reach 30 cm, and how the time scales with h.</div><details class="sol"><summary></summary><div>Heat conducted through the ice freezes new ice at the bottom: ρL·dh/dt = kΔT/h, so h dh = (kΔT/ρL)dt and h² = 2kΔT·t/(ρL). The coefficient is 2 × 2.2 × 10/(917 × 334 000) = 1.437 × 10⁻⁷ m²/s. After 1 day h = √(1.437 × 10⁻⁷ × 86 400) = 11.1 cm. To reach 30 cm: t = 0.09/1.437 × 10⁻⁷ = 6.3 × 10⁵ s = 7.3 days. <b>Key insight:</b> t ∝ h², so doubling the thickness takes four times as long: 15 cm takes 1.8 days, 30 cm takes 7.3 days. Sanity: growth slows because the growing ice insulates the water below.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Adding conductances when they are in series</b> (or adding R for parallel paths). Series layers: add R. Side-by-side paths: add G.</li>
<li><b>Unit slips in area.</b> 2 cm² is 2 × 10⁻⁴ m². Thickness in cm must become m.</li>
<li><b>"Metal feels colder so it is colder."</b> All objects at room temperature are at the same T; metal conducts heat from the hand faster.</li>
<li><b>US R vs SI R.</b> R-19 is 3.35 m²K/W, not 19; do not add US and SI values.</li>
<li><b>"More insulation always helps."</b> On small cylinders and wires below the critical radius it can increase loss.</li>
<li><b>Assuming temperature drops evenly.</b> It drops in proportion to R, so an air gap or a foam layer takes nearly all of it.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a steel bolt through a foam wall leaks more than the whole foam, using the idea of parallel paths.</p>
`;
DATA.chal['t06'] = `
<h3>Why it works</h3>
<p>A hot object loses heat through several channels at once: conduction, convection, radiation and evaporation. Each is a <b>conductance</b> G (W per kelvin of temperature difference), and parallel conductances add: P = ΔT·(G_cond + G_conv + G_rad + G_evap). Convection is P = hAΔT directly. Radiation is not linear, but for a small ΔT it can be linearized, which is what lets radiation join the same sum.</p>
<p><b>Linearizing radiation.</b> P_net = εσA(T⁴ − T_s⁴). Factor T⁴ − T_s⁴ = (T − T_s)(T + T_s)(T² + T_s²). If T ≈ T_s ≈ T_m this is ΔT × 4T_m³. So h_rad ≈ 4εσT_m³. At T_m = 300 K: 4 × 5.67 × 10⁻⁸ × 2.7 × 10⁷ = 6.1 W/m²K, the same order as still-air convection (2–10). This is why radiation is never negligible near room temperature.</p>
<table>
<tr><th>Change</th><th>Effect</th></tr>
<tr><td>Absolute T of a radiator doubles</td><td>emitted power ×16</td></tr>
<tr><td>Emissivity 0.95 → 0.05 (foil)</td><td>radiation ×1/19</td></tr>
<tr><td>Radius r of a sphere doubles</td><td>P_loss ×4, heat capacity ×8, cooling time ×2</td></tr>
<tr><td>Wind raises h from 5 to 25</td><td>convective loss ×5</td></tr>
</table>
<p><b>Scaling of cooling time.</b> For a sphere losing heat through its surface, P ∝ r² but stored heat ∝ r³, so the time constant is τ = C/G = ρc(4/3 πr³)/(h4πr²) = ρcr/(3h), proportional to r. Small things cool fast, large things slowly.</p>
<p><b>Units check.</b> hAΔT: (W/m²K)·m²·K = W. σ: W/m²K⁴, so σT⁴ is W/m². Evaporation: ṁL_v = (kg/s)(J/kg) = W.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Sum the conductances, then attack the biggest.</b> Example: G_wall 0.5, G_top 1.2, G_rad 0.6, G_evap 1.5 W/K: evaporation and the top opening are about 70% of the loss.</li>
<li><b>Evaporation as a coolant.</b> 1 g at 2.26 kJ/g equals the warming of 100 g of water by 5.4 K. Example: a 1 g evaporation loss from a hot cup ≈ 5 °C.</li>
<li><b>Geometric-factor counting.</b> Count which faces absorb and which emit. Example: a flat plate absorbing sunlight on one face and radiating from two has T = (S/2σ)^(1/4); a sphere has (S/4σ)^(1/4).</li>
<li><b>Scale ratios.</b> Write P ∝ r² and C ∝ r³ to get time ∝ r without any numbers.</li>
<li><b>Linearize for small ΔT.</b> Replace T⁴ differences by h_rad ≈ 4εσT_m³ and add it to h_conv.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A cup holds water at 100 °C. Exactly 1.0 g evaporates (L_v = 2256 J/g) and the cooling comes from the remaining 99 g of water. By how much does the water cool?</div><details class="sol"><summary></summary><div>The heat removed is 2256 J. ΔT = 2256/(99 × 4.184) = 5.4 K. Sanity: 1% of the water's mass evaporating cools the rest by about 5%-of-100 ≈ 5 K, consistent with L_v/c = 539 K divided by 100.</div></details>
<div class="prob"><span class="lv">Core</span>A person of skin area 1.5 m², emissivity 0.97 and skin temperature 306 K stands in a room whose walls are at 293 K. Find the net radiated power.</div><details class="sol"><summary></summary><div>P_net = εσA(T⁴ − T_s⁴) = 0.97 × 5.67 × 10⁻⁸ × 1.5 × (306⁴ − 293⁴). 306⁴ = 8.768 × 10⁹, 293⁴ = 7.370 × 10⁹, difference 1.398 × 10⁹. P = 8.25 × 10⁻⁸ × 1.398 × 10⁹ = 115 W, about the resting metabolic rate (~100 W). Sanity: not 8.25 × 10⁻⁸ × 306⁴ = 723 W; the surroundings radiate back.</div></details>
<div class="prob"><span class="lv">Hard</span>A black (ε = 1) surface at 350 K sits in surroundings at 295 K, with natural convection h = 5 W/m²K. Compute the exact radiative heat-transfer coefficient, compare with the linear estimate 4σT_m³ using the mean temperature, and find what fraction of the loss is radiative.</div><details class="sol"><summary></summary><div>Exact: h_rad = σ(350⁴ − 295⁴)/55 = 7.66 W/m²K. Linear estimate with T_m = 322.5 K: 4 × 5.67 × 10⁻⁸ × 322.5³ = 7.61 W/m²K, a 0.7% difference. Radiation fraction = 7.66/(7.66 + 5) = 60.5%. <b>Key insight:</b> radiation gives about as much loss as natural convection even for a modest 55 K difference, so low-emissivity surfaces matter.</div></details>
<div class="prob"><span class="lv">Hard</span>A cup of water (0.25 kg, C = 1046 J/K) at 80 °C in a room at 20 °C loses heat through conductances: walls 0.5, open top convection 1.2, radiation 0.6 and evaporation 1.5 W/K (effective). A lid cuts the top and evaporation terms by 80% each. Find the cooling constant K and the time to fall from 80 °C to 50 °C before and after the lid.</div><details class="sol"><summary></summary><div>Before: G = 3.8 W/K, K = 3.8/1046 = 3.63 × 10⁻³ s⁻¹ = 0.218 min⁻¹; t = ln(60/30)/K = 3.18 min. After: G = 0.5 + 0.24 + 0.6 + 0.30 = 1.64 W/K, K = 0.094 min⁻¹, t = 7.37 min. The lid reduced the total conductance by 57% and made the drop 2.3 times slower. <b>Key insight:</b> fix the biggest conductances first; the 0.6 radiation and 0.5 wall terms now dominate and set the next design target.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Two solid iron balls (ρ = 7870 kg/m³, c = 449 J/kg·K) of radius 1.0 cm and 10 cm are heated and then cool in still air with convective h = 10 W/m²K (ignore radiation). Find the time constant of each and the ratio.</div><details class="sol"><summary></summary><div>τ = ρcr/(3h). For r = 0.10 m: 7870 × 449 × 0.10/30 = 11 779 s = 3.3 h. For r = 0.010 m: 1178 s = 19.6 min. Ratio = 10, exactly the ratio of the radii. <b>Key insight:</b> surface ∝ r², stored energy ∝ r³, so τ ∝ r. Check the lumped model: Biot number hr/k = 10 × 0.1/50 = 0.02 ≪ 1, so uniform temperature is fine.</div></details>
<div class="prob"><span class="lv">Puzzle</span>A thin black plate in space faces the Sun (S = 1361 W/m²), so only one face is lit. The plate radiates equally from both faces. Find its equilibrium temperature. Compare with the same plate if its back face is perfectly insulated, and with a black sphere.</div><details class="sol"><summary></summary><div>Absorbed = S·A; emitted from two faces = 2σAT⁴, so T = (S/2σ)^(1/4) = 331 K. With an insulated back, emission is σAT⁴, so T = (S/σ)^(1/4) = 393.6 K. For a sphere, absorbed S·πr² versus emitted σT⁴·4πr², giving T = (S/4σ)^(1/4) = 278.3 K. <b>Key insight:</b> the temperatures differ only by area factors 1, 2, 4 under a fourth root; 2^(1/4) = 1.189, 4^(1/4) = 1.414.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Celsius in T⁴.</b> Always use kelvin; 70 °C is 343 K, not 70.</li>
<li><b>Forgetting the surroundings radiate.</b> Use T⁴ − T_s⁴, not T⁴.</li>
<li><b>Shiny foil pressed against the hot surface.</b> It conducts; foil helps radiation only across an air gap or vacuum.</li>
<li><b>Ignoring the top opening.</b> A small hole or an uncovered surface typically dominates conduction through foam walls.</li>
<li><b>Evaporation is "minor."</b> At 100 °C, 1 g of evaporation equals about 5 K of cooling for 100 g of water.</li>
<li><b>Convection exists in vacuum.</b> It needs a fluid; in vacuum only radiation remains.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a covered cup stays hot longer than an open one even with identical walls, and which of the four loss channels the lid blocks.</p>
`;
DATA.chal['t07'] = `
<h3>Why it works</h3>
<p><b>Dimensional analysis gives σ.</b> A blackbody's exitance can depend only on T, and on the constants of the physics involved: k_B (J/K), h (J·s) and c (m/s). Suppose M is k_B to the power a, times h to the power b, times c to the power d, times T to the power e. Watts per m² is kg·s⁻³. Matching kelvin gives e = a; matching mass, length and time then forces M ∝ k_B⁴T⁴/(h³c²). Check: (J/K)⁴·K⁴/(J·s)³/(m/s)² = J/(s·m²) = W/m² ✓. The exact constant is 2π⁵/15 ≈ 40.8, giving σ = 5.670 × 10⁻⁸ W/m²K⁴. You can see in the formula that σ contains h, so radiation is quantum mechanics, not classical physics.</p>
<p><b>Wien's law as scaling.</b> The spectrum depends on wavelength and T only through the combination λT (since the exponent is hc/λk_BT). So when T doubles, the whole curve is the same shape at half the wavelength, and λ_max·T = b = 2.898 × 10⁻³ m·K.</p>
<p><b>Planetary balance.</b> A planet of radius R intercepts sunlight over its disk πR² and radiates from its whole sphere 4πR². Setting S(1 − a)πR² = 4πR²σT⁴ gives T = (S(1 − a)/4σ)^(1/4). The radius cancels; the factor 4 is the ratio of surface to cross-section.</p>
<table>
<tr><th>Change</th><th>Exitance M = σT⁴</th><th>Peak λ</th></tr>
<tr><td>T × 2</td><td>×16</td><td>×1/2</td></tr>
<tr><td>T × 1.01</td><td>+4.1%</td><td>−1%</td></tr>
<tr><td>T × 2^(1/4) = 1.189</td><td>×2</td><td>×0.84</td></tr>
<tr><td>Radius × 3 (same T)</td><td>same M, but total L × 9</td><td>same</td></tr>
</table>
<p><b>Units check.</b> Exitance (W/m²) is power leaving per area; irradiance is power arriving per area; both have the same units but opposite direction, and only exitance uses σT⁴ for a blackbody.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Fourth-root arithmetic.</b> A 10% rise in T is a 46% rise in M (1.1⁴ = 1.464); a factor 2 in M is 19% in T. Example: a star twice as hot has 16 times the exitance per unit area.</li>
<li><b>Area × exitance.</b> Luminosity L = 4πR²σT⁴ splits into a size part and a temperature part. Example: a star with 3 times the radius and twice the temperature is 9 × 16 = 144 times as bright.</li>
<li><b>Two temperatures from one spectrum.</b> Wien gives T from the color, and luminosity then gives R. Example: a peak at 725 nm gives 3997 K.</li>
<li><b>Count absorbing and emitting areas.</b> Disk vs sphere for planets; one face vs two for plates.</li>
<li><b>Layer models.</b> A layer that absorbs all IR and emits equally up and down raises the surface below it by 2^(1/4) relative to no layer.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>Model human skin at 37 °C as a blackbody. Find its peak wavelength and radiant exitance.</div><details class="sol"><summary></summary><div>T = 310.15 K. λ_max = 2.898 × 10⁻³/310.15 = 9.34 μm (thermal infrared, which is why thermal cameras work at 8–14 μm). M = σT⁴ = 5.67 × 10⁻⁸ × 310.15⁴ = 525 W/m². Sanity: the room radiates back at about 420 W/m² (293 K), so the net is about 100 W/m².</div></details>
<div class="prob"><span class="lv">Core</span>Star A has twice the surface temperature and three times the radius of star B. Compare luminosities and peak wavelengths.</div><details class="sol"><summary></summary><div>L ∝ R²T⁴ = 9 × 16 = 144 times as luminous. Peak wavelength ∝ 1/T, so A's peak is half of B's. Sanity: luminosity depends on the fourth power of T, so temperature dominates over size even though the radius factor sounds big.</div></details>
<div class="prob"><span class="lv">Hard</span>Mars receives S = 590 W/m² from the Sun and has albedo 0.25. Find its effective (no-greenhouse) temperature. Compare with Earth (S = 1361 W/m², a = 0.30).</div><details class="sol"><summary></summary><div>T = [S(1 − a)/(4σ)]^(1/4). Mars: 590 × 0.75/(4 × 5.67 × 10⁻⁸) = 1.951 × 10⁹, fourth root = 210 K. Earth: 1361 × 0.70/(2.268 × 10⁻⁷) = 4.2 × 10⁹, fourth root = 254.6 K. Note that "S = 590" is the mean at Mars's distance (1361/2.3). Sanity: the ratio of distances² is 2.3 but temperature only drops by the fourth root: 2.3^(1/4) = 1.23, and 254.6/1.23 × (0.75/0.70)^(1/4) ≈ 210 K.</div></details>
<div class="prob"><span class="lv">Hard</span>A star's spectrum peaks at 725 nm and its luminosity is 100 times the Sun's (the Sun: T = 5772 K). Find its temperature and its radius in solar radii.</div><details class="sol"><summary></summary><div>T = b/λ = 2.898 × 10⁻³/725 × 10⁻⁹ = 3997 K. L = 4πR²σT⁴ gives R/R_sun = √(L/L_sun) × (T_sun/T)² = 10 × (5772/3997)² = 10 × 2.085 = 20.9. <b>Key insight:</b> a cool star must be big to be bright. Sanity: a cooler red-giant color and a radius of about 21 R_sun is typical of a giant.</div></details>
<div class="prob"><span class="lv">Puzzle</span>The Sun's spectrum per unit <i>wavelength</i> peaks near 502 nm. Its spectrum per unit <i>frequency f</i> peaks at f_max = 5.879 × 10¹⁰ Hz/K × T. Find the wavelength c/f_max for T = 5772 K and explain why it is not 502 nm.</div><details class="sol"><summary></summary><div>f_max = 5.879 × 10¹⁰ × 5772 = 3.39 × 10¹⁴ Hz, so c/f_max = 884 nm (near-infrared), versus 502 nm. <b>Key insight:</b> the peak of a density depends on the variable you take it per. Since λ = c/f, dλ = −c df/f², so a fixed interval in f maps to intervals of different width in λ; the peak of M_f is at a different spot than the peak of M_{λ}. Both are correct; the lesson is to state which one Wien's law refers to (the standard b = 2.898 × 10⁻³ m·K is per wavelength).</div></details>
<div class="prob"><span class="lv">Puzzle</span>Earth without an atmosphere has T_e = 254.6 K. Add one thin layer that is transparent to sunlight but absorbs all infrared and re-emits equally up and down. Find the surface temperature. Why is this higher than the real 288 K?</div><details class="sol"><summary></summary><div>Balance at the top: the layer must emit what Earth absorbs, σT_L⁴ = σT_e⁴ (upward), so T_L = T_e. Balance at the surface: it receives sunlight plus the layer's downward emission, so σT_s⁴ = absorbed + σT_L⁴ = 2σT_e⁴, giving T_s = 2^(1/4) × 254.6 = 302.8 K. Real Earth is cooler (288 K) because the atmosphere is not one opaque layer: convection and evaporation carry heat upward, and some IR escapes through the atmospheric window. Sanity: the answer exceeds T_e; with N such layers stacked the surface would reach (N + 1)^(1/4) T_e.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Celsius in σT⁴ or Wien.</b> Both need kelvin.</li>
<li><b>Mixing exitance and irradiance.</b> Exitance leaves; irradiance arrives; the planet balance uses both with different areas (disk and sphere).</li>
<li><b>Forgetting the 4.</b> T = (S(1 − a)/σ)^(1/4) without the 4 gives a value 41% too high.</li>
<li><b>Using a real-surface formula for a blackbody.</b> Real M = εσT⁴ with ε < 1; shiny surfaces emit less.</li>
<li><b>"Red is hotter than blue."</b> Hotter objects shift to shorter wavelengths: blue stars are hotter.</li>
<li><b>Planck vs Rayleigh–Jeans.</b> Only Planck's law avoids the ultraviolet catastrophe; classical T/λ⁴ diverges.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why doubling an object's absolute temperature makes it radiate 16 times as much, and why hotter things glow bluer.</p>
`;
DATA.chal['t08'] = `
<h3>Why it works</h3>
<p>Newton's law of cooling is a <b>first-order linear ODE</b> with a one-line derivation. A lumped body has heat capacity C and loses power G·(T − T_r). Energy balance: C·dT/dt = −G(T − T_r). Let θ = T − T_r (the excess); then dθ/dt = −Kθ with K = G/C, so θ = θ_0·e^(−Kt). The excess decays by the <b>same factor in every equal time interval</b>: that is what exponential means, and it is why you should think in half-lives or time constants instead of degrees per minute.</p>
<ul>
<li>Time constant τ = 1/K (excess falls to 36.8%), half-life t_half = 0.693/K.</li>
<li>After n half-lives the excess is θ_0/2ⁿ; after 3τ it is 5%; after 5τ under 1%.</li>
<li>The body never reaches T_r in finite time and never undershoots it.</li>
</ul>
<p><b>Linearizing.</b> ln θ = ln θ_0 − Kt, a straight line; its slope is −K. A semi-log plot turns the curve into a line and lets you read K from two well-separated points.</p>
<table>
<tr><th>Change</th><th>Effect</th></tr>
<tr><td>Double the water mass (same G)</td><td>C ×2, so K ×1/2, half-life ×2</td></tr>
<tr><td>Halve G (better insulation)</td><td>K ×1/2</td></tr>
<tr><td>Double the starting excess</td><td>all later excesses ×2; K unchanged</td></tr>
<tr><td>Room temperature changes by 1 K</td><td>the asymptote shifts by 1 K, not the shape</td></tr>
</table>
<p><b>Steady-state link.</b> A heater of power P holding the body at excess θ_ss gives G = P/θ_ss. Its <i>approach</i> to θ_ss is also exponential with the same K, since the equation is C·dθ/dt = P − Gθ.</p>
<p><b>Units check.</b> K has units 1/time (min⁻¹), so K·t is dimensionless as an exponent. G/C: (W/K)/(J/K) = 1/s.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Half-life counting.</b> Excess halves in equal times, so you can do many problems with no logarithms. Example: half-life 15 min, excess 60, after 1 h: 60/16 = 3.75.</li>
<li><b>Work with the excess θ, never T.</b> Every formula is linear in θ. Example: mixing liquids and then cooling is a weighted average of θ values.</li>
<li><b>Two readings give K.</b> K = ln(θ_1/θ_2)/Δt. Example: 70 → 50 excess in 10 min means K = 0.0336 min⁻¹.</li>
<li><b>Time scales with ln of a ratio.</b> To reach a target, t = ln(θ_0/θ)/K. A target 1% above room takes ln(100) = 4.6 time constants.</li>
<li><b>Linearity and superposition.</b> Because the ODE is linear, you can add solutions (a sudden addition of cold milk is a step in θ).</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A cup of water at 90 °C in a 20 °C room is at 70 °C after 10 minutes. Find K and the time to reach 40 °C (from the start).</div><details class="sol"><summary></summary><div>Excess goes 70 → 50 in 10 min: K = ln(70/50)/10 = 0.03365 min⁻¹. Time to reach 40 °C (excess 20): t = ln(70/20)/K = 1.2528/0.03365 = 37.2 min. Sanity: the excess has to fall by a factor 3.5, more than one half-life (20.6 min) and less than two (41.2 min).</div></details>
<div class="prob"><span class="lv">Core</span>A drink at 85 °C in a 25 °C room has an excess half-life of 15 minutes. What is its temperature after 1 hour?</div><details class="sol"><summary></summary><div>One hour is 4 half-lives: excess 60/2⁴ = 3.75 K, so T = 28.75 °C. Sanity: the drink is 3.75 K above room, not at room; it never quite arrives.</div></details>
<div class="prob"><span class="lv">Hard</span>Coffee at 90 °C (200 g) is in a 20 °C room with K = 0.040 min⁻¹. You want to add 20 g of milk at 5 °C (same specific heat). For the hottest drink after 10 minutes, should you add the milk now or at minute 10? Compute both.</div><details class="sol"><summary></summary><div>Excesses: coffee 70, milk 5 − 20 = −15. Add now: mixed excess = (200 × 70 − 20 × 15)/220 = 62.27, then cooling for 10 min (e^(−0.4) = 0.6703): 41.74, so T = 61.74 °C. Wait then add: coffee excess 70 × 0.6703 = 46.92; mix: (200 × 46.92 − 300)/220 = 41.29, T = 61.29 °C. <b>Key insight:</b> adding milk early is better by 0.45 K, because the cold milk's "deficit" also decays if it is added early, whereas added late it takes away a fixed −300 K·g at the end. Adding milk early also lowers the excess while losses are fastest.</div></details>
<div class="prob"><span class="lv">Hard</span>A cup cools from 80 °C to 60 °C in 10 minutes in a 20 °C room. How long does it take to go from 60 °C to 40 °C? Compare with a linear (constant cooling rate) guess.</div><details class="sol"><summary></summary><div>K = ln(60/40)/10 = 0.04055 min⁻¹. From excess 40 to 20: t = ln 2/K = 17.1 min. A linear guess of 2 K/min would give 10 min, wrong by 71%. <b>Key insight:</b> cooling slows as θ shrinks; equal temperature drops need longer and longer times.</div></details>
<div class="prob"><span class="lv">Puzzle</span>A 10 W heater holds 200 g of water (C = 836.8 J/K) steadily at 10 K above room temperature. The heater is switched off. How long until the excess is 5 K?</div><details class="sol"><summary></summary><div><b>Key insight:</b> the steady state gives G: G = P/θ_ss = 10/10 = 1.0 W/K. Then K = G/C = 1.195 × 10⁻³ s⁻¹ and t = ln 2/K = 580 s = 9.7 min. Sanity: a 5 K drop from 10 K is exactly one half-life; the time constant is 837 s = 13.9 min, and 0.693 × 13.9 = 9.7 min.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Cup A has 100 g of water at 80 °C; cup B has 200 g at 60 °C. Room is 20 °C. Both cups have the same heat-loss conductance G, so K_A = 2K_B, and K_B = 0.010 min⁻¹. Do the two curves ever cross? If so, when and at what temperature?</div><details class="sol"><summary></summary><div>A: θ = 60e^(−2K_Bt); B: θ = 40e^(−K_Bt). Crossing when 60e^(−2K_Bt) = 40e^(−K_Bt), so e^(−K_Bt) = 2/3. t = ln(1.5)/0.010 = 40.5 min, and θ = 40 × 2/3 = 26.7 K, so T = 46.7 °C. <b>Key insight:</b> a hotter but lighter cup has a larger K, so its excess falls as the square of the decay factor of B's excess; it drops below the cooler, heavier cup. After that B is hotter, which is why a big pot stays warm longer even if it started cooler.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Using T instead of the excess T − T_r</b> in the exponential; the decay is of the excess only.</li>
<li><b>Constant-rate thinking.</b> "It lost 20 °C in 10 min so the next 20 °C takes 10 min" is false; it takes longer.</li>
<li><b>Assuming it can go below room.</b> Pure Newton cooling never undershoots (evaporative cooling can make real water go below the dry-bulb temperature).</li>
<li><b>Mixing time units.</b> K in min⁻¹ with t in seconds gives exponents off by 60.</li>
<li><b>Applying the law at large ΔT.</b> Radiation and evaporation grow faster than linear, so K drifts; fit over a limited range.</li>
<li><b>Thinking bigger K is better insulation.</b> A larger K means faster cooling.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a cooling drink loses heat fastest at the start, and what a half-life of the temperature excess means.</p>
`;
DATA.chal['t09'] = `
<h3>Why it works</h3>
<p>The first law is a conservation law with a sign convention: ΔU = Q − W (Q added to the gas, W done <i>by</i> the gas). Because U is a <b>state function</b>, ΔU around a closed loop is 0, so Q_net = W_net for any cycle. That single line lets you find a missing step in a cycle without knowing the gas.</p>
<p><b>The second law, derived from one statement.</b> Suppose an engine took heat Q_h at T_h, rejected Q_c at T_c and had a greater efficiency than a reversible (Carnot) engine. Run the Carnot engine backward as a refrigerator, driven by the work the better engine produces. The combination would move net heat from cold to hot with no outside work, which violates Clausius's statement. So η ≤ 1 − T_c/T_h for every engine between two reservoirs. The entropy form is equivalent: the universe gains Q_c/T_c − Q_h/T_h ≥ 0, which is the same inequality.</p>
<table>
<tr><th>Change (engine between T_h and T_c)</th><th>Effect on Carnot limit η = 1 − T_c/T_h</th></tr>
<tr><td>Raise T_h from 500 to 1000 K (T_c = 300 K)</td><td>40% → 70%</td></tr>
<tr><td>Lower T_c from 300 to 150 K (T_h = 600 K)</td><td>50% → 75%</td></tr>
<tr><td>Both temperatures doubled</td><td>unchanged: only the ratio matters</td></tr>
</table>
<p><b>Limiting cases.</b> T_c → T_h gives η → 0 (no temperature difference, no work); T_c → 0 would give η → 1, but the third law says T_c = 0 is unattainable.</p>
<p><b>Units check.</b> Q, W and ΔU are all in joules. Efficiency and COP are dimensionless, and temperatures in them must be kelvin because only the ratio T_c/T_h matters physically.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Energy ledger per step.</b> For every leg write ΔU = Q − W and check the cycle sums to zero. Example: a three-step loop where one Q is missing.</li>
<li><b>Bound before building.</b> Compare a claimed efficiency with 1 − T_c/T_h. Example: an engine claiming 67% between 600 K and 300 K is impossible.</li>
<li><b>Entropy audit.</b> ΔS_universe = −Q_h/T_h + Q_c/T_c must be ≥ 0. Example: the same engine gives −2.0 + 1.33 = −0.67 J/K, negative, so it is impossible.</li>
<li><b>Minimum work for a refrigerator.</b> Use the Carnot COP: W_min = Q_c(T_h − T_c)/T_c. Example: freezing 1 kg of water in a warm kitchen.</li>
<li><b>Sign-convention check.</b> State whether W is by or on the gas before using the formula.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>(a) A gas absorbs 400 J of heat and does 150 J of work on its surroundings. Find ΔU. (b) In a different process the gas releases 300 J of heat while 500 J of work is done on it. Find ΔU.</div><details class="sol"><summary></summary><div>(a) ΔU = Q − W = 400 − 150 = +250 J. (b) Q = −300 J, W (by gas) = −500 J, so ΔU = −300 − (−500) = +200 J. Sanity: in (b) work on the gas adds 500 J and releasing heat removes 300 J, net +200 J. Sign of W is the whole problem.</div></details>
<div class="prob"><span class="lv">Core</span>An inventor claims an engine that takes 1200 J from a 600 K reservoir and rejects 400 J to a 300 K reservoir each cycle, delivering 800 J. Is it possible? Check with efficiency and with entropy.</div><details class="sol"><summary></summary><div>η = 800/1200 = 66.7%. Carnot limit: 1 − 300/600 = 50%. Claim exceeds the limit, so it is impossible. Entropy check: ΔS_universe = −1200/600 + 400/300 = −2.00 + 1.33 = −0.67 J/K < 0, violating the second law. Both tests agree (they are the same law).</div></details>
<div class="prob"><span class="lv">Hard</span>A heat pump keeps a house at 295 K when the outside is 275 K and must deliver 6.0 kW of heating. What is its best possible COP and the minimum electrical power?</div><details class="sol"><summary></summary><div><b>Key insight:</b> the heating COP is Q_h/W, and for a reversible pump COP = T_h/(T_h − T_c) = 295/20 = 14.75. W_min = 6000/14.75 = 407 W. A resistive heater would need 6000 W. Sanity: the pump only moves heat across a 20 K gap, not generating it; real pumps get COP 3–5 because of irreversibilities.</div></details>
<div class="prob"><span class="lv">Hard</span>A gas goes through a cycle of three steps. Step 1: Q = +600 J, W = +250 J (by gas). Step 2: Q = −400 J, W = −100 J. Step 3: W = −50 J, and the gas returns to its initial state. Find Q_3, the ΔU of each step and the net work.</div><details class="sol"><summary></summary><div>ΔU_1 = 600 − 250 = +350 J. ΔU_2 = −400 − (−100) = −300 J. Cycle: ΔU_1 + ΔU_2 + ΔU_3 = 0, so ΔU_3 = −50 J, and Q_3 = ΔU_3 + W_3 = −50 − 50 = −100 J. Net Q = 600 − 400 − 100 = 100 J, net W = 250 − 100 − 50 = 100 J. They agree, as a cycle requires. <b>Key insight:</b> U is a state function, so the ΔU values add to zero regardless of the path.</div></details>
<div class="prob"><span class="lv">Puzzle</span>A 150 W refrigerator (electrical input) runs for 1 hour inside a perfectly insulated, sealed 48 kg-air room with its door closed and its back in the room. Does the room get colder or warmer, and by how much (air c = 1005 J/kg·K, ignoring walls)?</div><details class="sol"><summary></summary><div><b>Key insight:</b> take the room plus fridge as the system. Nothing crosses the boundary except the electrical work, 150 × 3600 = 540 kJ, which ends up as heat. So the room warms: ΔT = 540 000/(48 × 1005) = 11.2 K. The fridge moves heat from inside to outside but the compressor work adds more at the back. Sanity: the first law on the whole system allows only a rise. A fridge cools the inside, not a closed room.</div></details>
<div class="prob"><span class="lv">Puzzle</span>The kitchen is at 25 °C (298.15 K). What is the minimum work needed to freeze 1.00 kg of water that is already at 0 °C (L_f = 334 kJ/kg)?</div><details class="sol"><summary></summary><div>Heat to extract from the water: Q_c = 334 kJ at T_c = 273.15 K. A reversible refrigerator needs W_min = Q_c(T_h − T_c)/T_c = 334 000 × 25/273.15 = 30.6 kJ, and it dumps 364.6 kJ in the kitchen. <b>Key insight:</b> the entropy decrease of the water (−Q_c/T_c = −1223 J/K) must be offset by an increase in the kitchen, Q_h/T_h ≥ 1223 J/K, which forces Q_h ≥ 364.6 kJ. Sanity: COP = 273.15/25 = 10.9, and 334/10.9 = 30.6 kJ.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Sign of W.</b> Physics texts use W by the gas (ΔU = Q − W); chemistry texts use W on the gas (ΔU = Q + W). Identify it first.</li>
<li><b>Heat as a state function.</b> Q and W are path-dependent; only ΔU (and S, H, T, P, V) are state functions.</li>
<li><b>Celsius in the Carnot formula.</b> Using 27 °C and 327 °C gives 92% instead of the correct 50%.</li>
<li><b>"100% efficient if no friction."</b> Even a frictionless reversible engine must reject heat (Kelvin–Planck).</li>
<li><b>Fridge with open door cools the room.</b> It warms it by the electrical input.</li>
<li><b>Confusing ΔU = 0 with Q = 0.</b> An isothermal ideal-gas process has ΔU = 0 but Q = W ≠ 0.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why no engine can turn all its heat into work, and how the same law limits how well a fridge or heat pump can work.</p>
`;
DATA.chal['t10'] = `
<h3>Why it works</h3>
<p>Every process on a PV diagram is the first law with a particular constraint. Work is W = ∫P dV, the area under the path, positive when the volume grows. For an ideal gas U depends only on T: ΔU = n·C_vΔT, whatever the path. So for any process, Q = ΔU + W where only W depends on the path.</p>
<ul>
<li><b>Isothermal:</b> P = nRT/V, so W = nRT ln(V_2/V_1). The logarithm is the area under a hyperbola.</li>
<li><b>Adiabatic (Q = 0):</b> n·C_v dT = −P dV = −(nRT/V)dV, so (C_v/R) dT/T = −dV/V, which integrates to TV^(R/C_v) = const, that is TV^(γ−1) = const because γ − 1 = R/C_v.</li>
<li><b>Isobaric:</b> W = PΔV = nRΔT, a fixed fraction R/C_p of the heat, which is why C_p = C_v + R.</li>
</ul>
<p><b>Why adiabats are steeper than isotherms.</b> At the same point the isotherm has slope dP/dV = −P/V. On the adiabat, PV^{γ} = const gives −γP/V. Since γ > 1 the adiabat falls faster: an expanding gas that cannot receive heat also cools, so its pressure drops twice over.</p>
<table>
<tr><th>Change (ideal gas, expansion ×2)</th><th>Final P/P_0</th><th>W/(nR·T_0)</th></tr>
<tr><td>Isothermal</td><td>0.500</td><td>0.693</td></tr>
<tr><td>Adiabatic, γ = 5/3</td><td>0.315</td><td>0.555</td></tr>
<tr><td>Isobaric (heated)</td><td>1.000</td><td>1.000 (T doubles, W = nRΔT)</td></tr>
</table>
<p><b>Units check.</b> P·V: Pa·m³ = N·m = J. A list of "L·atm" becomes joules with 101.3 J per L·atm. Enclosed cycle area is a work in joules when P is in Pa and V in m³.</p>
<p><b>Cycle reading.</b> Clockwise loops on a PV diagram have positive net work (engine); counter-clockwise loops are refrigerators. Net W = Q_net because ΔU = 0 around a loop.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Area counting.</b> Rectangles and triangles in a PV diagram need geometry only. Example: a rectangular loop's work is ΔP·ΔV.</li>
<li><b>Temperature ∝ PV.</b> Read temperatures from the corner products of P·V; the hottest point is the largest PV corner. Example: corners with PV of 1000, 3000, 9000, 3000 units.</li>
<li><b>Nice exponents.</b> Pick numbers that make the power clean: 8^(2/3) = 4, 32^(1/5) = 2. Example: a monatomic gas compressed to 1/8 volume has T × 4.</li>
<li><b>Energy ladder for ideal gas.</b> U is fixed by T alone, so any two processes between the same T endpoints have the same ΔU.</li>
<li><b>Compare to the isotherm.</b> For any expansion, placing the path above or below the isotherm tells you the sign of Q.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>1.00 mol of a monatomic ideal gas is heated at constant pressure from 300 K to 600 K. Find Q, ΔU and W.</div><details class="sol"><summary></summary><div>C_p = (5/2)R. Q = n·C_pΔT = 2.5 × 8.314 × 300 = 6236 J. ΔU = n·C_vΔT = 1.5 × 8.314 × 300 = 3741 J. W = nRΔT = 8.314 × 300 = 2494 J. Check: 3741 + 2494 = 6235. Sanity: for a monatomic gas, 60% of the isobaric heat goes into U and 40% into work.</div></details>
<div class="prob"><span class="lv">Core</span>2.00 mol of ideal gas at 300 K expands isothermally from 5.0 L to 15.0 L. Find W and Q.</div><details class="sol"><summary></summary><div>W = nRT ln(V_2/V_1) = 2 × 8.314 × 300 × ln 3 = 4988 × 1.0986 = 5480 J. ΔU = 0 for an ideal gas at constant T, so Q = W = +5480 J absorbed from the reservoir. Sanity: a volume ratio of 3 gives ln 3 ≈ 1.1, so W is about 1.1 nRT.</div></details>
<div class="prob"><span class="lv">Hard</span>1.00 mol of a monatomic ideal gas (γ = 5/3) at 300 K is compressed adiabatically and reversibly to 1/8 of its volume. Find the final temperature and the work done <i>on</i> the gas.</div><details class="sol"><summary></summary><div>TV^(γ−1) = const: T_2 = 300 × 8^(2/3) = 300 × 4 = 1200 K. Work on the gas = ΔU = n·C_vΔT = 1.5 × 8.314 × 900 = 11 224 J. Pressure: P_2/P_1 = 8^(5/3) = 32. Sanity: an isothermal compression to 1/8 would take only nRT ln 8 = 5187 J; adiabatic compression costs more work because the gas heats and pushes back harder.</div></details>
<div class="prob"><span class="lv">Hard</span>A diatomic ideal gas (C_v = 5R/2) goes around a rectangle on a PV diagram: A (100 kPa, 10 L) → B (300 kPa, 10 L) → C (300 kPa, 30 L) → D (100 kPa, 30 L) → A. Find the net work, the heat input and the efficiency. Compare with the Carnot limit for the extreme temperatures.</div><details class="sol"><summary></summary><div>Net work = area = (300 − 100) kPa × (30 − 10) L = 200 × 10³ × 0.020 = 4000 J (clockwise, an engine). Heat enters in A→B (isochoric heating) and B→C (isobaric expansion). Q_AB = n·C_vΔT = (5/2)ΔPV = 2.5 × 200 × 10³ × 0.010 = 5000 J. Q_BC = n·C_pΔT = (7/2)PΔV = 3.5 × 300 × 10³ × 0.020 = 21 000 J. Q_in = 26 000 J, η = 4000/26 000 = 15.4%. T ∝ PV: T_C/T_A = (300 × 30)/(100 × 10) = 9, so the Carnot limit is 1 − 1/9 = 88.9%. <b>Key insight:</b> the loop uses the temperature extremes but spends most of its heat raising the temperature along the way, so it is far below Carnot.</div></details>
<div class="prob"><span class="lv">Puzzle</span>A monatomic ideal gas expands to twice its volume from the same state (P_0, T_0) in two ways: isothermally, and adiabatically. Compare final pressures and work done, in units of nR·T_0.</div><details class="sol"><summary></summary><div>Isothermal: P = P_0/2 = 0.500P_0, W = nR·T_0 ln 2 = 0.693nR·T_0. Adiabatic: P = P_0/2^(5/3) = 0.315P_0 and W = n·C_v(T_0 − T_f) = 1.5nR·T_0(1 − 2^(−2/3)) = 0.555nR·T_0. <b>Key insight:</b> the adiabat lies below the isotherm, so it encloses less area under it. The isothermal gas draws heat (0.693nR·T_0) from a reservoir to keep pressure higher; the adiabatic gas pays for its work from its own internal energy and cools to 0.63T_0.</div></details>
<div class="prob"><span class="lv">Puzzle</span>1 mol of monatomic ideal gas is at 400 K and 400 kPa in a thermally insulated cylinder with a piston. The external pressure suddenly drops to 100 kPa, and the gas expands irreversibly until it reaches mechanical equilibrium with the outside. Find its final temperature, and compare with a reversible adiabatic expansion to 100 kPa.</div><details class="sol"><summary></summary><div>Irreversible: the gas does work against the constant P_ext = 100 kPa. Energy: n·C_v(T_2 − T_1) = −P_ext(V_2 − V_1), with V_2 = nRT_2/P_ext and V_1 = nRT_1/P_1. So 1.5(T_2 − T_1) = −T_2 + T_1/4, giving 2.5T_2 = 1.75T_1 and T_2 = 0.7T_1 = 280 K. Reversible adiabatic: T_2 = T_1 (P_2/P_1)^(2/5) = 400 × 0.25^0.4 = 229.7 K. <b>Key insight:</b> the irreversible expansion extracts less work (1497 J against 2123 J per mole), so it cools less. A sudden release wastes some of the available work as internal motion (heat).</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Using Q = n·C_vΔT for an isobaric process.</b> At constant pressure heat goes to both U and W; use C_p.</li>
<li><b>ΔU = 0 means Q = 0.</b> Only for adiabatic ideal gas is Q = 0; isothermal has ΔU = 0 but Q = W.</li>
<li><b>Applying PV^{γ} = const to an irreversible expansion.</b> It needs a quasi-static (reversible) path.</li>
<li><b>Celsius in PV = nRT.</b> Use kelvin, and use consistent pairs (Pa, m³, 8.314 J/mol·K).</li>
<li><b>Direction of loops.</b> A clockwise loop gives positive net work; counter-clockwise needs work input.</li>
<li><b>Free expansion does no work.</b> Expansion into vacuum gives W = 0, Q = 0, ΔU = 0 for an ideal gas (T unchanged), unlike a reversible adiabatic expansion.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why an adiabat on a PV diagram is steeper than an isotherm, and how the area inside a loop gives the work of an engine.</p>
`;
DATA.chal['t11'] = `
<h3>Why it works</h3>
<p><b>Pressure from collisions.</b> Take N molecules of mass m in a cube of side L, each with speed component v_x along x. One molecule hits a given wall every 2L/v_x and transfers 2m·v_x each time, so the average force is m v_x²/L. Summing over molecules and using ⟨v_x²⟩ = ⟨v²⟩/3 (no preferred direction) gives P·L² = N m⟨v²⟩/(3L), that is <code>PV = (1/3)N m⟨v²⟩ = (2/3)N⟨KE⟩</code>. Compare with PV = N·k_B·T and you read off ⟨KE⟩ = (3/2)k_BT: temperature <i>is</i> mean kinetic energy, and v_rms = √(3k_BT/m) = √(3RT/M).</p>
<ul>
<li>At a given T all gases have the same ⟨KE⟩; lighter molecules are faster, v ∝ 1/√M.</li>
<li>Pressure at fixed V and N is proportional to T because each collision is harder and more frequent.</li>
<li>Equal P, V and T contain equal N (Avogadro) because PV/T = N·k_B does not know the molecule's mass.</li>
</ul>
<table>
<tr><th>Change (ideal gas)</th><th>Effect</th></tr>
<tr><td>Double T at constant V</td><td>P ×2, v_rms ×√2 = 1.41</td></tr>
<tr><td>Halve V at constant T</td><td>P ×2 (Boyle)</td></tr>
<tr><td>Quadruple T</td><td>v_rms ×2</td></tr>
<tr><td>Replace H_2 (2 g/mol) by O_2 (32 g/mol) at the same T</td><td>v_rms ÷ 4</td></tr>
</table>
<p><b>Units check.</b> √(3RT/M): √((J/mol·K)·K/(kg/mol)) = √(J/kg) = √(m²/s²) = m/s ✓ (use M in kg/mol!). PV = nRT with R = 8.314 J/mol·K needs Pa and m³; with L and atm use R = 0.08206 L·atm/mol·K.</p>
<p><b>Limiting cases.</b> At high pressure or low temperature molecular size and attractions matter, and the van der Waals correction (P + an²/V²)(V − nb) = nRT replaces the ideal law; as n/V → 0 it reduces to PV = nRT.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Ratios instead of R.</b> Work with P_1V_1/T_1 = P_2V_2/T_2 and never need R. Example: a rigid can heated from 298 to 373 K has P × 1.25.</li>
<li><b>Absolute pressure and temperature.</b> Convert gauge to absolute (add 1 atm) and °C to K first. Example: a tire at 32 psi gauge is 46.7 psi absolute.</li>
<li><b>Order-of-magnitude counting.</b> Use 24.5 L/mol at room conditions, 6 × 10²³/mol, atmosphere mass ≈ 5 × 10¹⁸ kg. Example: one breath (0.5 L) ≈ 10²² molecules.</li>
<li><b>Thermal speed rule of thumb.</b> v_rms ≈ 500 m/s for air at room temperature, and ∝ √(T/M). Example: H_2 is 4 times faster than O_2.</li>
<li><b>Tail arguments.</b> Escape speed is compared to the tail of the Maxwell distribution, not its mean.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A car tire is at 32.0 psi gauge at 20 °C. After driving it is at 50 °C. Assuming constant volume and no leak, find the new gauge pressure. (1 atm = 14.696 psi.)</div><details class="sol"><summary></summary><div>Absolute P_1 = 32.0 + 14.696 = 46.70 psi. P_2 = 46.70 × 323.15/293.15 = 51.47 psi. Gauge = 51.47 − 14.70 = 36.8 psi. Trap: scaling the gauge pressure directly (32 × 1.102 = 35.3) gives the wrong answer, and using °C gives 32 × 50/20 = 80 psi.</div></details>
<div class="prob"><span class="lv">Core</span>Find v_rms of O_2 (M = 0.0320 kg/mol) at 300 K, and of H_2 (M = 0.002016 kg/mol). What is their ratio?</div><details class="sol"><summary></summary><div>O_2: √(3 × 8.314 × 300/0.0320) = 484 m/s. H_2: √(3 × 8.314 × 300/0.002016) = 1927 m/s. Ratio 3.98 ≈ √(M_O2/M_H2) = √15.9. Sanity: equal mean kinetic energies mean the lighter molecule is faster by the square root of the mass ratio.</div></details>
<div class="prob"><span class="lv">Hard</span>Earth's escape speed is 11.2 km/s. At what temperature would helium atoms (M = 4.003 g/mol) have v_rms equal to that? Yet helium does escape from the upper atmosphere (exosphere about 1000 K). Why?</div><details class="sol"><summary></summary><div>T = Mv²/(3R) = 0.004003 × (11 200)²/(3 × 8.314) = 20 100 K. At 1000 K, v_rms of He is about 2.5 km/s, about a quarter of escape speed. <b>Key insight:</b> escape is decided by the high-speed tail of the Maxwell–Boltzmann distribution (a small fraction of atoms have speeds several times v_rms, and in the thin exosphere they leave without colliding). The tail fraction falls like e^(−mv²/2kT), so over billions of years light He and H_2 are lost while heavy N_2 and O_2 are kept.</div></details>
<div class="prob"><span class="lv">Hard</span>A bubble of volume 1.00 cm³ forms at a depth of 20.0 m in 4 °C water. It rises to the surface, where the water is 20 °C and pressure is 1 atm = 101 325 Pa. Find its volume at the surface. (ρ = 1000 kg/m³, g = 9.81 m/s².)</div><details class="sol"><summary></summary><div>P_1 = 101 325 + 1000 × 9.81 × 20 = 297 525 Pa. V_2 = V_1 (P_1/P_2)(T_2/T_1) = 1.00 × (297 525/101 325) × (293.15/277.15) = 2.936 × 1.0577 = 3.11 cm³. Sanity: the pressure ratio (about 2.9) dominates; the temperature only adds 6%. Divers must exhale while rising because this expansion would rupture lungs.</div></details>
<div class="prob"><span class="lv">Puzzle</span>A 2.0 L flask of gas at 3.0 atm and 300 K is connected to a 3.0 L flask at 1.0 atm and 400 K. The two are allowed to mix and the whole system is brought to 350 K. Find the final pressure.</div><details class="sol"><summary></summary><div><b>Key insight:</b> moles are conserved, not pressure or volume. n_1 = PV/RT = 3 × 2/(0.08206 × 300) = 0.2437 mol; n_2 = 1 × 3/(0.08206 × 400) = 0.0914 mol; total 0.3351 mol. In V = 5.0 L at 350 K: P = nRT/V = 0.3351 × 0.08206 × 350/5.0 = 1.925 atm. Sanity: the final pressure is neither the sum nor the mean of the initial pressures; only the mole count carries over.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Estimate the number of air molecules in one breath (0.50 L at 24.5 L/mol) and in the whole atmosphere (mass = P_atm × 4πR_E²/g, R_E = 6.371 × 10⁶ m, mean molar mass 0.029 kg/mol). If the last breath of a person long ago spread evenly through the atmosphere, how many of those molecules are expected in your next breath?</div><details class="sol"><summary></summary><div>Breath: 0.50/24.5 = 0.0204 mol = 1.23 × 10²² molecules. Atmosphere mass: 1.013 × 10⁵ × 4π(6.371 × 10⁶)²/9.81 = 5.27 × 10¹⁸ kg, which is 1.82 × 10²⁰ mol = 1.09 × 10⁴⁴ molecules. Fraction of the atmosphere in a breath: 1.23 × 10²²/1.09 × 10⁴⁴ = 1.1 × 10⁻²². Expected number in your breath: 1.23 × 10²² × 1.1 × 10⁻²² ≈ 1.4. <b>Key insight:</b> the two counts are each huge, but their product over the atmosphere is order 1. (The assumption of complete mixing is the weak point.)</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Gauge vs absolute pressure.</b> Gas laws use absolute pressure; add 1 atm to gauge readings.</li>
<li><b>Celsius in gas-law ratios.</b> The law P ∝ T needs kelvin; 20 → 50 °C is a 10% change, not 150%.</li>
<li><b>R mismatch.</b> 8.314 goes with SI (Pa, m³); 0.08206 goes with L·atm.</li>
<li><b>Mass in grams in v_rms.</b> M must be in kg/mol for m/s.</li>
<li><b>"Heavier gases have more KE."</b> At equal temperature, all ideal gases have the same average translational KE; only speed differs.</li>
<li><b>Averaging speeds.</b> v_rms ≠ mean speed ≠ most probable speed (ratios 1.225 : 1.128 : 1).</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why heating a sealed can raises its pressure, and why light gases such as hydrogen and helium leak away from Earth but heavy ones do not.</p>
`;
DATA.chal['t12'] = `
<h3>Why it works</h3>
<p><b>Why heat flowing hot-to-cold creates entropy.</b> Move heat Q from a reservoir at T_h to one at T_c. The hot one loses Q/T_h of entropy, the cold one gains Q/T_c. Net ΔS = Q(1/T_c − 1/T_h) = Q(T_h − T_c)/(T_h·T_c) &gt; 0. The reverse (cold-to-hot on its own) would give ΔS &lt; 0, which is how the second law forbids it. The effect is largest when the gap is large relative to the temperatures; as T_h → T_c, ΔS → 0 and the process becomes reversible.</p>
<p><b>Why ln T appears.</b> Heating a mass m slowly from T_1 to T_2 passes through many reservoirs, each adding δQ = mc dT at its own T: ΔS = ∫mc dT/T = mc ln(T_2/T_1). The log means entropy changes are the same for equal <i>ratios</i> of T, not equal differences.</p>
<p><b>Counting (Boltzmann).</b> S = k_B ln W. Doubling the volume available to each of N independent molecules multiplies W by 2ᴺ, so ΔS = N·k_B ln 2 = nR ln 2 (and the thermodynamic route ΔS = nR ln(V_2/V_1) gives the same). The agreement of the thermodynamic and counting routes is the point: entropy is a count of possibilities, expressed in J/K through k_B.</p>
<table>
<tr><th>Change</th><th>Effect on ΔS</th></tr>
<tr><td>Same Q, cold reservoir at half the T</td><td>Q/T_c doubles</td></tr>
<tr><td>Heat 1 kg water 300 → 330 K vs 330 → 363 K (same ratio)</td><td>equal entropy changes (ln 1.1 each)</td></tr>
<tr><td>Double the gas volume (ideal gas, any path)</td><td>ΔS = nR ln 2 = 5.76 J/K per mol</td></tr>
<tr><td>Melt double the ice</td><td>ΔS ×2 (extensive)</td></tr>
</table>
<p><b>Units check.</b> Q/T: J/K. mc ln(T_2/T_1): (J/K)·(dimensionless). Only ratios inside logs, so T can be in any absolute unit but must be absolute.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Replace an irreversible process by a reversible path.</b> ΔS is a state function, so pick any reversible route between the same endpoints. Example: free expansion of a gas is computed as a reversible isothermal expansion.</li>
<li><b>Reservoir accounting.</b> For a reservoir, ΔS = ±Q/T with no logs because T is fixed. Example: the kitchen absorbing 365 kJ at 298 K.</li>
<li><b>AM-GM inequality.</b> (T_1 + T_2)/2 ≥ √(T_1T_2) proves that two equal blocks in contact generate entropy: ΔS = C ln[T_f²/(T_1T_2)] ≥ 0.</li>
<li><b>Maximum work from a finite body.</b> Run a reversible engine until the bodies reach the same temperature √(T_1T_2), not the mean.</li>
<li><b>Probability counting.</b> Use ln W with combinations. Example: W(50 heads of 100) = C(100, 50) = 1.01 × 10²⁹.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>500 J flows by conduction from a reservoir at 500 K to one at 300 K. Find the entropy change of each and of the universe.</div><details class="sol"><summary></summary><div>Hot: −500/500 = −1.000 J/K. Cold: +500/300 = +1.667 J/K. Universe: +0.667 J/K &gt; 0, consistent with a spontaneous process. Sanity: the cold side gains more because the same energy is added at a lower temperature.</div></details>
<div class="prob"><span class="lv">Core</span>200 g of ice at 0 °C melts and the water is then warmed to 20 °C. Find the entropy change of the water (L_f = 334 J/g, c = 4.184 J/g·K).</div><details class="sol"><summary></summary><div>Melting: 200 × 334/273.15 = 244.6 J/K. Warming: 200 × 4.184 × ln(293.15/273.15) = 836.8 × 0.07067 = 59.1 J/K. Total 303.7 J/K. Sanity: melting dominates because 334 J/g is huge and it happens at low T.</div></details>
<div class="prob"><span class="lv">Hard</span>Two 500 g samples of water, one at 80 °C and one at 20 °C, are placed in thermal contact in an isolated container. Find the final temperature and the total entropy change.</div><details class="sol"><summary></summary><div>T_f = 50 °C = 323.15 K. ΔS = mc[ln(323.15/353.15) + ln(323.15/293.15)] = 2092 × (−0.08866 + 0.09742) = +18.1 J/K &gt; 0 (mc = 500 × 4.184 = 2092 J/K). <b>Key insight:</b> the cold sample gains more entropy than the hot one loses because it sits at lower T. Sanity: the two terms nearly cancel, so the net is small, but it is positive because ln is concave.</div></details>
<div class="prob"><span class="lv">Hard</span>1.00 mol of ideal gas expands freely (into vacuum, in an insulated container) to three times its volume. Find ΔS of the gas and of the universe, and the "lost work" at a surrounding temperature of 300 K.</div><details class="sol"><summary></summary><div>The free expansion has Q = 0 and W = 0, so T is unchanged (ideal gas). <b>Key insight:</b> entropy is a state function, so use a reversible isothermal path: ΔS = nR ln 3 = 8.314 × 1.0986 = 9.13 J/K. No heat leaves the surroundings, so ΔS_universe = +9.13 J/K. Lost work: W_lost = T_0ΔS_universe = 300 × 9.13 = 2740 J, the work that a reversible isothermal expansion at 300 K could have delivered. Sanity: this equals nRT ln 3.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Flip 100 fair coins. (a) How many microstates give exactly 50 heads, and what is S/k_B for this macrostate? (b) What is the probability that all N molecules of a gas are found in the left half of a box, for N = 100 and for N = 1 mole?</div><details class="sol"><summary></summary><div>(a) W = C(100, 50) = 1.009 × 10²⁹, so S/k_B = ln W = 66.8. The all-heads state has W = 1, S = 0. The probability of exactly 50 heads is W/2¹⁰⁰ = 0.0796, about 8%. (b) Each molecule is in the left half with probability 1/2, so P = 2^(−N). For N = 100: 7.9 × 10⁻³¹. For N = 6 × 10²³: 2^(−6×10²³) = 10^(−1.8×10²³), which no one will ever see. <b>Key insight:</b> the second law is statistical: the "forbidden" states are merely absurdly improbable, and the improbability explodes with N.</div></details>
<div class="prob"><span class="lv">Puzzle</span>Two identical blocks of heat capacity C = 1000 J/K (constant) are at 400 K and 300 K. (a) Put them in contact: find the final T and ΔS. (b) Instead, run a reversible engine between them until they are at the same temperature. Find the final temperature and the maximum work.</div><details class="sol"><summary></summary><div>(a) T_f = 350 K. ΔS = C ln(350²/(400 × 300)) = 1000 × ln(1.0208) = 20.6 J/K &gt; 0. (b) A reversible process has ΔS = 0: C ln(T_f/400) + C ln(T_f/300) = 0, so T_f = √(400 × 300) = 346.4 K. The work is the drop in total heat energy: W = C(400 + 300 − 2 × 346.41) = 1000 × 7.18 = 7180 J, which equals C(√400 − √300)². <b>Key insight:</b> setting total entropy change to zero fixes T_f. The irreversible contact wastes that 7.18 kJ of possible work. Sanity: T_f = 346.4 K is below the arithmetic mean 350 K, since extracting work removes energy.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Celsius in Q/T or ln(T_2/T_1).</b> Always kelvin; ratios of Celsius values are meaningless.</li>
<li><b>Using Q/T for a heating process.</b> That formula is for constant T; heating needs mc ln(T_2/T_1).</li>
<li><b>Using the real (irreversible) heat in ΔS.</b> ΔS = Q_rev/T; in free expansion Q = 0 but ΔS &gt; 0.</li>
<li><b>"Entropy of a system cannot decrease."</b> It can (freezing, life, a fridge) if the surroundings gain more.</li>
<li><b>"Entropy equals disorder."</b> A helpful picture but imperfect; count accessible microstates and the energy spread.</li>
<li><b>Reversible means ΔS = 0 for the system.</b> It means ΔS_universe = 0; the system's own ΔS may be nonzero.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why heat flowing from hot to cold always increases the total entropy, and why it would be absurdly improbable for a gas to gather itself into half a box.</p>
`;
})();
