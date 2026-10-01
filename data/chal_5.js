(function(){ DATA.chal = DATA.chal || {};
DATA.chal['t13'] = `
<h3>Why it works</h3>
<p><b>Enthalpy is just the first law with the bookkeeping moved.</b> At constant pressure the gas does work P·ΔV on the atmosphere, so ΔU = Q − PΔV. Rearrange: Q_p = ΔU + PΔV = Δ(U + PV) = ΔH. Nothing new is added; H is U with the "room-making" work folded in. That is why ΔH = Q_p exactly, and why for solids and liquids (ΔV tiny) ΔH ≈ ΔU, while for gases ΔH − ΔU = Δn_g·R·T (each mole of gas made or destroyed is worth RT ≈ 2.48 kJ at 298 K).</p>
<p><b>Hess's law is "state function" in disguise.</b> H depends only on the state, so going around any closed loop of reactions returns you to zero net ΔH. That is the whole trick behind ΔH_rxn = Σ ΔH_f°(products) − Σ ΔH_f°(reactants): route every reaction through the elements, which are the common "sea level" (ΔH_f° = 0). Bond-energy estimates are the same idea with atoms as sea level: break every bond (pay), form every new bond (refund).</p>
<p><b>Gibbs energy is the second law wearing chemistry clothes.</b> For a reaction at fixed T and P the surroundings receive heat −ΔH, so ΔS_surr = −ΔH/T. The total is ΔS_univ = ΔS_sys − ΔH/T. Multiply by −T: −TΔS_univ = ΔH − TΔS_sys = ΔG. So ΔG < 0 is literally "the entropy of the universe goes up". Nothing mystical: ΔG is (minus T) times the universe's entropy change, and the crossover T = ΔH/ΔS is where the two contributions tie.</p>
<p><b>Limiting cases.</b> Low T: the ΔH term dominates, so only exothermic reactions go. High T: the TΔS term dominates, so only entropy-increasing reactions go (melting, boiling, decomposition). Hence the four-sign table; you never need to memorize it, just ask "which term wins at the extreme?"</p>
<p><b>Units check.</b> ΔH in J/mol; TΔS = K × J/(mol·K) = J/mol. ✓. ΔG° = −RT ln K: R·T = 8.314 × 298 = 2.48 kJ/mol, so "each factor of 10 in K costs RT ln 10 = 5.71 kJ/mol at 25 °C" (verified: 5.708 kJ). That single number lets you turn ΔG° into a K estimate in your head: −5.7 kJ → K ≈ 10, −11.4 kJ → K ≈ 100.</p>
<table>
<tr><th>What if we...</th><th>ΔH_rxn</th><th>Crossover T = ΔH/ΔS</th><th>ΔG at fixed T</th></tr>
<tr><td>double the amounts</td><td>×2</td><td>unchanged</td><td>×2 (extensive)</td></tr>
<tr><td>reverse the reaction</td><td>sign flips</td><td>unchanged</td><td>sign flips</td></tr>
<tr><td>double ΔS only</td><td>unchanged</td><td>halves</td><td>TΔS term doubles</td></tr>
<tr><td>write products as gas instead of liquid</td><td>ΔH rises by ΔH_vap</td><td>shifts (ΔS also rises)</td><td>depends</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Sea-level trick.</b> Always send the reaction through the elements. Example: ΔH_f(CO) cannot be measured directly (burning C never stops cleanly at CO) but C + O₂ → CO₂ (−393.5) minus CO + ½O₂ → CO₂ (−283.0) gives −110.5 kJ/mol.</li>
<li><b>Sign sanity before arithmetic.</b> Is the product set "more bound" (gases → solids, bonds formed)? Then expect ΔH < 0 and ΔS < 0. A sign mismatch after your arithmetic means an error, not a surprise.</li>
<li><b>Per-gram, per-mole, per-reaction.</b> Convert last, only once. Fuels are compared per kg or per gram; Hess gives per mole of reaction as written.</li>
<li><b>Bound it, then compute.</b> A spontaneous endothermic process must have ΔS_sys > ΔH/T. That is an instant inequality, no table needed.</li>
<li><b>Coffee-cup bookkeeping.</b> q_rxn = −q_solution. The solution's mass is the total mass (all the liquid), and ΔH per mole uses moles of the limiting reagent.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>Using ΔH_f° values (kJ/mol): C₂H₅OH(l) −277.7, CO₂(g) −393.5, H₂O(l) −285.8, find ΔH for C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l), and the heat released per gram of ethanol (M = 46.07 g/mol).</div>
<details class="sol"><summary></summary><div>Products: 2(−393.5) + 3(−285.8) = −787.0 − 857.4 = −1644.4. Reactants: −277.7 + 0 (O₂ is an element). ΔH = −1644.4 − (−277.7) = <b>−1366.7 kJ/mol</b>. Per gram: 1366.7/46.07 = <b>29.7 kJ/g</b>. Key insight: O₂ in its standard state contributes zero. Sanity check: fat gives 37 kJ/g and carbohydrate 17 kJ/g; ethanol at ≈ 30 kJ/g sits between them, which is right for a partly oxidized fuel.</div></details>

<div class="prob"><span class="lv">Core</span>A cold pack dissolves 5.00 g of NH₄NO₃ (M = 80.04 g/mol; take ΔH_dissolution = +25.7 kJ/mol) in 100 g of water. Treat the solution as 105 g with c = 4.18 J/g·K and ignore the calorimeter. By how much does the temperature fall?</div>
<details class="sol"><summary></summary><div>n = 5.00/80.04 = 0.06247 mol. Heat absorbed from the solution = 0.06247 × 25 700 = 1605 J. ΔT = q/(mc) = 1605/(105 × 4.18) = <b>3.65 K drop</b>. Key insight: endothermic means the heat comes out of the water, so the water cools. Sanity check: a real pack uses much more salt per gram of water, which is why it feels truly cold.</div></details>

<div class="prob"><span class="lv">Hard</span>For N₂ + 3H₂ → 2NH₃ take ΔH = −92 kJ and ΔS = −199 J/K (per reaction as written). (a) Above what temperature does the reaction stop being spontaneous under standard conditions? (b) Find ΔG and the equilibrium constant K at 298.15 K.</div>
<details class="sol"><summary></summary><div>(a) Both terms negative means "spontaneous only at low T". Crossover: T = ΔH/ΔS = (−92 000)/(−199) = <b>462 K</b> (189 °C). (b) ΔG = ΔH − TΔS = −92 000 − 298.15(−199) = −92 000 + 59 334 = <b>−32.7 kJ</b>. ln K = 32 668/(8.314 × 298.15) = 13.18, so K ≈ <b>5 × 10⁵</b>. Check with the "5.7 kJ per decade" rule: 32.7/5.71 = 5.7 decades → 10^5.7 ≈ 5 × 10⁵ ✓. Insight: thermodynamics says low T favours ammonia, kinetics says low T is too slow, which is the industrial compromise.</div></details>

<div class="prob"><span class="lv">Hard</span>A bomb calorimeter (constant volume) measures q_v = −1364.2 kJ for burning 1 mol of liquid ethanol at 298.15 K to CO₂(g) and H₂O(l). What is ΔH for the reaction, and why is it more negative than ΔU?</div>
<details class="sol"><summary></summary><div>q_v = ΔU = −1364.2 kJ. Gas moles: products 2 (CO₂), reactants 3 (O₂); Δn_g = 2 − 3 = −1. ΔH = ΔU + Δn_g·R·T = −1364.2 + (−1)(8.314 × 298.15)/1000 = −1364.2 − 2.48 = <b>−1366.7 kJ</b> (matches the Hess answer above). It is more negative because the contracting gas lets the atmosphere do +|PΔV| on the system, which at constant pressure shows up as extra heat released. Trap: adding +2.48 instead of −2.48 (sign of Δn_g).</div></details>

<div class="prob"><span class="lv">Puzzle</span>NH₄NO₃ dissolving in water is spontaneous at 298.15 K even though ΔH = +25.7 kJ/mol. (a) What is the smallest possible ΔS_sys (J/mol·K)? (b) What entropy change does the surroundings suffer for that dissolution, at the boundary case?</div>
<details class="sol"><summary></summary><div>Spontaneous means ΔG = ΔH − TΔS < 0, so ΔS > ΔH/T = 25 700/298.15 = <b>86.2 J/mol·K</b>. At the boundary, ΔS_surr = −ΔH/T = <b>−86.2 J/mol·K</b> (the surroundings lose entropy as they lose heat), and the system's gain exactly cancels it (ΔS_univ = 0). Insight: endothermic spontaneity is entirely an entropy payment, and the bill is computable from ΔH and T alone.</div></details>

<div class="prob"><span class="lv">Puzzle</span>A hydrogen fuel cell at 298 K has ΔH = −285.8 kJ and ΔG = −237.1 kJ per mole of H₂ burned to liquid water. The maximum electrical work at constant T, P is −ΔG. (a) What is the maximum fuel-cell efficiency relative to ΔH? (b) A Carnot engine burning the same fuel at a 2000 K flame rejecting to 300 K has what ceiling? Which is "better", and why is the comparison not as tidy as it looks?</div>
<details class="sol"><summary></summary><div>(a) 237.1/285.8 = <b>83.0 %</b>. (b) 1 − 300/2000 = <b>85 %</b>. The numbers look equal but mean different things: the cell's ceiling comes from TΔS (the entropy exported as heat, here about 48.7 kJ), so it is set at ambient T and does not need a hot stage. A real engine also loses the flame's irreversible burning, combustion-gas friction and finite-rate heat transfer, and lands nearer 40 %. Fuel cells are not "Carnot-limited" (the lesson on applications says so), but they are limited by ΔG. Key idea: ΔG is the maximum non-expansion work; −TΔS is the unavoidable heat tax.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Products minus reactants, never reversed.</b> Reversing gives the wrong sign while every number "looks" fine.</li>
<li><b>Forgetting stoichiometric coefficients</b> in the sum: H₂O appears with a 2 or 3 in front.</li>
<li><b>Elements are zero only in their standard state.</b> H₂O(g) is not zero, O₂(g) and C(graphite) are. Liquid versus gas water differs by 44 kJ/mol (−285.8 vs −241.8).</li>
<li><b>Spontaneous does not mean fast</b> and ΔG < 0 says nothing about rate (diamond to graphite, hydrogen and oxygen at room temperature).</li>
<li><b>kJ versus J in TΔS.</b> ΔH is in kJ and ΔS in J/K; 298 × 199 = 59 300 J, not 59.3 kJ left untouched next to 92.</li>
<li><b>Kelvin in ΔG and the crossover T.</b> Using 25 °C in TΔS is the classic slip.</li>
<li><b>Calorimeter sign.</b> Solution warms up means the reaction released heat, so ΔH is negative.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why ΔG = ΔH − TΔS is really just "the universe's entropy must go up" and why hot temperatures favour messier products.</p>
`;
DATA.chal['t14'] = `
<h3>Why it works</h3>
<p><b>Why there must be a cold reservoir.</b> A cycle returns the gas to its starting state, so ΔU = 0 over one loop and the first law gives W = Q_h − Q_c. The second law (Kelvin–Planck) forbids Q_c = 0. The efficiency η = W/Q_h = 1 − Q_c/Q_h is therefore always below 1 for a real cycle.</p>
<p><b>Why the Carnot efficiency is 1 − T_c/T_h (the derivation).</b> For an ideal gas, the isothermal step A→B at T_h absorbs Q_h = nRT_h ln(V_B/V_A), and the isothermal step C→D at T_c rejects Q_c = nRT_c ln(V_C/V_D). The adiabats obey T·V^(γ−1) = constant, so T_h V_B<sup>γ−1</sup> = T_c V_C<sup>γ−1</sup> and T_h V_A<sup>γ−1</sup> = T_c V_D<sup>γ−1</sup>. Dividing: V_B/V_A = V_C/V_D. The logarithms cancel, leaving <b>Q_c/Q_h = T_c/T_h</b>. Equivalent, more powerful statement: Q_h/T_h = Q_c/T_c, i.e. the entropy taken in at the hot side equals the entropy dumped at the cold side, so ΔS_cycle = 0 for a reversible cycle.</p>
<p><b>Why no engine beats it (proof by contradiction, in words).</b> Suppose engine X beat a reversible Carnot engine C between the same reservoirs. Run C backwards as a refrigerator using X's work. The pair would move net heat from cold to hot with no work input, violating the Clausius statement. So all reversible engines share the Carnot efficiency (Carnot's theorem: only T_h and T_c matter, not the gas).</p>
<p><b>Limiting cases.</b> T_c → T_h gives η → 0: no temperature difference, no work. T_c → 0 K would give 100 % (never reached, third law). Raising T_h by ΔT raises η by ΔT·T_c/T_h², lowering T_c by the same ΔT raises η by ΔT/T_h, which is bigger when T_h > T_c. So <b>at the same effort, cooling the cold side helps more than heating the hot side</b> (for the same number of kelvin).</p>
<p><b>Units check.</b> η and COP are ratios of energies (dimensionless); T_c/T_h is a ratio so any absolute scale works, but only kelvin or rankine. COP_HP = T_h/(T_h − T_c) = COP_R + 1 because Q_h = Q_c + W.</p>
<table>
<tr><th>Double ...</th><th>Effect on Carnot η (T_h = 600 K, T_c = 300 K, η = 50 %)</th></tr>
<tr><td>T_h to 1200 K</td><td>η = 75 %</td></tr>
<tr><td>T_c to 600 K (equal to T_h)</td><td>η = 0</td></tr>
<tr><td>both (1200, 600)</td><td>η = 50 % (only the ratio matters)</td></tr>
<tr><td>Q_h (same temps)</td><td>W doubles, η unchanged</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Entropy audit for "impossible engine" claims.</b> Compute ΔS_universe = Q_c/T_c − Q_h/T_h (reservoir entropies only). Negative means impossible, zero means reversible, positive means possible but wasteful. No need to recall which inequality applies.</li>
<li><b>Energy ledger first.</b> Write Q_h = W + Q_c before anything. Heat pumps and fridges: heat delivered to the hot side always equals the input heat plus the work.</li>
<li><b>Area means work.</b> On a PV diagram the loop area is net W; the direction (clockwise = engine) tells the sign. Count grid squares, then convert units (1 L·atm = 101.3 J).</li>
<li><b>Chain and cascade.</b> Carnot engines in series with a shared intermediate temperature: Q is proportional to T at each stage, so work splits in proportion to temperature drops.</li>
<li><b>Kelvin always.</b> Convert every temperature before forming ratios; do it on the first line.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A power plant produces 600 MW of electricity at 40 % efficiency. (a) How much waste heat goes to the river? (b) If the river may warm only 10 K, what water flow (kg/s) is needed? Use c = 4184 J/kg·K.</div>
<details class="sol"><summary></summary><div>η = W/Q_h, so Q_h = 600/0.40 = 1500 MW and Q_c = 1500 − 600 = <b>900 MW</b>. Flow = Q_c/(cΔT) = 900 × 10⁶/(4184 × 10) = <b>2.15 × 10⁴ kg/s</b> (about 21 tonnes every second). Sanity check: that is about 21 m³/s, a modest river, which is why power plants sit on big rivers or use cooling towers.</div></details>

<div class="prob"><span class="lv">Core</span>An ideal (Carnot) heat pump heats a house at 293 K from outdoor air at 273 K. (a) Find its COP. (b) A real unit reaches 40 % of that COP; how much electrical power does it use to deliver 9 kW of heat?</div>
<details class="sol"><summary></summary><div>COP_HP = T_h/(T_h − T_c) = 293/20 = <b>14.65</b>. Real: 0.40 × 14.65 = 5.86. Electrical power = Q_h/COP = 9/5.86 = <b>1.54 kW</b>. Insight: the result scales with 1/(T_h − T_c); a mild day (small lift) gives a big COP. Trap: using Celsius, 20/20 = 1, would suggest no benefit at all.</div></details>

<div class="prob"><span class="lv">Hard</span>Three inventors each claim an engine running between 600 K and 300 K. Each absorbs 1000 J at 600 K and rejects (A) 500 J, (B) 700 J, (C) 400 J at 300 K. Classify each as reversible, possible but irreversible, or impossible using entropy.</div>
<details class="sol"><summary></summary><div>ΔS_univ = Q_c/T_c − Q_h/T_h = Q_c/300 − 1000/600. (A): 1.667 − 1.667 = <b>0</b>, reversible, W = 500 J, η = 50 % = η_Carnot. (B): 2.333 − 1.667 = <b>+0.667 J/K</b>, possible but irreversible (η = 30 %). (C): 1.333 − 1.667 = <b>−0.333 J/K</b>, impossible (η = 60 % exceeds the Carnot 50 %). Insight: the entropy test and the efficiency test agree because 1 − Q_c/Q_h > 1 − T_c/T_h is the same inequality as ΔS_univ < 0.</div></details>

<div class="prob"><span class="lv">Hard</span>An ideal Otto cycle has compression ratio r = 9 and γ = 1.4. (a) Find the efficiency. (b) If intake air is at 300 K, what is the temperature after compression? (c) What compression ratio would be needed for 60 %?</div>
<details class="sol"><summary></summary><div>(a) η = 1 − r^(1−γ) = 1 − 9^(−0.4) = 1 − 0.4152 = <b>58.5 %</b>. (b) Adiabatic: T₂ = T₁ r^(γ−1) = 300 × 9^0.4 = <b>722 K</b> (449 °C). (c) r^(−0.4) = 0.4, so r = 0.4^(−2.5) = <b>9.88</b>. Insight: the cycle's efficiency is set by the compression ratio only, and diminishing returns set in (raising r by 10 % buys about 1.5 points). Also note the 58.5 % is far above a real 25–35 % gasoline engine, because this is an air-standard ideal.</div></details>

<div class="prob"><span class="lv">Puzzle</span>Two Carnot engines run in series: engine 1 between 900 K and T_m, engine 2 between T_m and 300 K, using exactly the heat engine 1 rejects. (a) For what T_m do both deliver equal work? (b) For what T_m do both have equal efficiency? (c) What is the overall efficiency in each case?</div>
<details class="sol"><summary></summary><div>Since Q is proportional to T in a reversible stage, the heat flows are Q₁ : Q₂ : Q₃ = 900 : T_m : 300. (a) W₁ = W₂ gives 900 − T_m = T_m − 300, so T_m = <b>600 K</b>. (b) 1 − T_m/900 = 1 − 300/T_m gives T_m² = 900 × 300, so T_m = √270 000 = <b>519.6 K</b> (the geometric mean). (c) Either way the combination is one Carnot engine between 900 K and 300 K: η = <b>66.7 %</b>. Key insight: series Carnot stages cost nothing; the overall efficiency depends only on the outer temperatures.</div></details>

<div class="prob"><span class="lv">Puzzle</span>A Carnot engine (600 K source, 300 K sink) absorbs 1000 J per cycle and drives an ideal Carnot refrigerator whose interior is 250 K and whose exhaust is at 300 K. How much heat does the refrigerator remove from its interior, and how much total heat is dumped into the 300 K environment? Verify with entropy.</div>
<details class="sol"><summary></summary><div>Engine: W = 1000(1 − 300/600) = 500 J; it rejects 500 J at 300 K. Fridge: COP = 250/(300 − 250) = 5, so Q_c = 5 × 500 = <b>2500 J</b> from the cold space; it dumps 2500 + 500 = 3000 J at 300 K. Total heat to the environment: 500 + 3000 = <b>3500 J</b>. Energy check: 1000 in + 2500 in = 3500 out ✓. Entropy check: environment gains 3500/300 = 11.667 J/K; the 600 K source loses 1000/600 = 1.667; the cold space loses 2500/250 = 10.0; net = 0 ✓ (everything reversible). Insight: "heat from a flame to cool a box" is perfectly legal if the flame is hot enough.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Celsius in η_C.</b> (100 − 20)/100 = 80 % is wrong; use 373 K and 293 K, giving 21 %.</li>
<li><b>COP is not an efficiency.</b> A fridge or heat pump can have COP > 1 without violating anything, since it moves heat rather than converting energy.</li>
<li><b>Cycle entropy.</b> "The engine's entropy must rise" confuses the working fluid (ΔS = 0 per cycle) with the universe (ΔS ≥ 0).</li>
<li><b>Open the fridge door.</b> The room warms, because work is added as heat; the total heat dumped at the back exceeds the heat removed.</li>
<li><b>Efficiency from W/Q_c.</b> The denominator is the heat input Q_h.</li>
<li><b>Otto's r^(γ−1) versus r<sup>γ</sup>.</b> Mixing the exponent with the adiabatic PV<sup>γ</sup> relation is common; for T–V it is γ − 1.</li>
<li><b>Carnot cycle arrow.</b> Two adiabats and two isotherms; the heat exchange is only in the isotherms.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a perfect engine must throw away heat, and why that limit depends only on two temperatures.</p>
`;
DATA.chal['t15'] = `
<h3>Why it works</h3>
<p>The history questions become easy once you see that the story has a <b>logic</b>: each act is a question the previous act could not answer. Memorize the chain of questions and the names hang on it.</p>
<p><b>Act 1 (1600s to 1780s): what is hot, and can it do work?</b> Galileo's thermoscope (c. 1593) showed temperature could be seen but not measured. Robert Boyle (1662) found P ∝ 1/V at constant T; Guillaume Amontons (1699) tied pressure to temperature and dreamed of a temperature where pressure would vanish, an early hint of absolute zero. Thermometry matured with Daniel Fahrenheit (mercury thermometer 1714, scale 1724) and Anders Celsius (1742, originally with 0 at boiling and 100 at freezing; the order was flipped soon afterwards). Meanwhile the practical question arrived first: Thomas Savery (1698) and Thomas Newcomen (1712) built steam pumps for mines. Then Joseph Black (c. 1760 to 1765) did the first real thermal science: he separated <i>quantity of heat</i> from <i>temperature</i>, discovered latent heat and specific heat, and so explained why boiling absorbs heat with no temperature rise. James Watt, who worked in the Glasgow environment where Black taught, added a separate condenser to Newcomen's engine (idea 1765, patent 1769), so the cylinder could stay hot. The unit of power is his name.</p>
<p><b>Act 2 (1780s to 1820s): is heat a substance?</b> Antoine Lavoisier (1780s) made chemistry quantitative, conserved mass, named oxygen, and listed <i>caloric</i>, an indestructible weightless fluid of heat, among the elements. Caloric explained calorimetry beautifully, so it survived. But Benjamin Thompson, Count Rumford (1798), watching cannon being bored in Munich, saw heat produced without limit from friction: a finite fluid cannot do that. Humphry Davy (c. 1799) melted ice by rubbing. Nothing flows out of a cannon forever, so heat looked like <i>motion</i>. Gas laws were sharpened at the same time: Jacques Charles (1787, unpublished), Dalton (partial pressures, 1801), Joseph Gay-Lussac (1802), Amedeo Avogadro (1811), and Dulong and Petit (1819), who found that molar heat capacities of metals are close to 3R. Joseph Fourier (1822) gave heat flow its own mathematics, the conduction law, without any theory of what heat is.</p>
<p><b>Act 3 (1824 to 1865): the two laws.</b> Sadi Carnot (1824), reasoning from water wheels and still using caloric, proved that the maximum efficiency of an engine depends only on the two temperatures. Émile Clapeyron (1834) drew the cycle on a P–V diagram. Then the idea that heat and work are interchangeable arrived from several directions at once: Julius Robert von Mayer (1842, using the difference between the two specific heats of a gas), James Prescott Joule (1843 to 1850, patient measurements including the paddle wheel, about 4.18 J per calorie), and Hermann von Helmholtz (1847), who stated conservation of energy in general form. This is the <b>first law</b>. The tension was that Carnot's theorem seemed to need heat to be conserved, while Joule showed it was not. William Thomson (later Lord Kelvin) proposed the absolute scale (1848) and, with Rudolf Clausius (1850) and William Rankine, reconciled the two: heat is converted into work, but a cold reservoir is still required. That is the <b>second law</b>. Clausius coined the word <i>entropy</i> in 1865 (from a Greek word for transformation) and summed up: the energy of the universe is constant, its entropy tends to a maximum.</p>
<p><b>Act 4 (1860 to 1910): why is entropy what it is?</b> James Clerk Maxwell (1860) gave the distribution of molecular speeds, and in 1867 imagined the demon that sorts fast and slow molecules. Ludwig Boltzmann (1872 H-theorem, 1877 statistical definition) showed that entropy counts microstates, S = k ln W, the equation on his tombstone. Johannes van der Waals (1873) gave real gases an equation; J. Willard Gibbs (1876 to 1878) made chemistry thermodynamic and built the free energy and the phase rule. Radiation joined in: Gustav Kirchhoff (1859, blackbody), Josef Stefan (1879, T⁴ empirically), Boltzmann (1884, derived it), Wilhelm Wien (1893, displacement law). Their failure to fit the whole spectrum led Max Planck (1900) to quantize energy, E = hf, and fix values of h and k. Albert Einstein (1905 Brownian motion, 1907 quantum specific heats) explained why Dulong and Petit fail at low T. Walther Nernst (1906) stated the heat theorem that became the <b>third law</b>; James Dewar (vacuum flask 1892, liquid hydrogen 1898) and Heike Kamerlingh Onnes (liquid helium 1908) pushed to ever lower temperatures. The zeroth law was named last, by Ralph Fowler around 1930, because it was logically first. Later chapters: Lars Onsager and Ilya Prigogine won Nobel prizes (1968, 1977) for non-equilibrium thermodynamics, and in 2019 the kelvin was redefined by fixing k_B = 1.380649 × 10⁻²³ J/K exactly.</p>
<p><b>Why it works as a memory device.</b> Every name answers "what problem was stuck?" Black: heat is not temperature. Rumford/Joule: heat is not a fluid. Carnot/Clausius/Kelvin: why engines need a cold side. Boltzmann: why entropy rises. Planck: why radiation is not continuous. Gibbs: which reactions go. The 2027 list of eight (Kelvin, Black, Joule, Carnot, Planck, Clausius, Boltzmann, Maxwell) maps onto the act numbers 3, 1, 3, 3, 4, 3, 4, 4 in that order.</p>

<h3>Tools of thought</h3>
<ul>
<li><b>Question-chain recall.</b> Recall the question an invention answered, then the name. "Why does boiling take heat with no temperature rise?" gives Black, latent heat.</li>
<li><b>Units are eponym clues.</b> joule (energy), watt (power), kelvin (temperature), plus Celsius, Fahrenheit, Rankine scales. A question about "who is honored by the SI unit of energy" is free points.</li>
<li><b>Sort by phase of the law.</b> First law: Mayer, Joule, Helmholtz. Second: Carnot (seed), Clausius and Kelvin (statements), Boltzmann (meaning). Third: Nernst, Planck. Zeroth: Fowler (named, c. 1930).</li>
<li><b>Anchor dates in decades.</b> Carnot 1824, Joule 1840s, Clausius 1850 and 1865, Boltzmann 1877, Planck 1900. If an answer says 1900 for Clausius it is impossible: he died in 1888.</li>
<li><b>Sanity arithmetic.</b> History questions often embed a number (4.18 J/cal, 3R, T⁴). Do the quick physics to see which era's claim is consistent.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>Joule's honeymoon-waterfall anecdote: if all the kinetic energy of water falling 100 m became heat, by how much would the water warm, and what fall height gives 1 K? (c = 4184 J/kg·K, g = 9.81 m/s².)</div>
<details class="sol"><summary></summary><div>Per kilogram: gh = 9.81 × 100 = 981 J. ΔT = 981/4184 = <b>0.234 K</b>. For 1 K: h = cΔT/g = 4184/9.81 = <b>427 m</b>. Insight: mass cancels, which is why only the fall height matters. Sanity check: the effect is a fraction of a degree, which is why the measurement was so hard and why Joule needed thermometers accurate to about a hundredth of a degree. Real waterfalls lose some energy to spray and evaporation, so the actual rise is smaller.</div></details>

<div class="prob"><span class="lv">Core</span>A paddle-wheel device: a 20 kg weight falls 1.5 m, 25 times in a row, turning paddles in 1.0 kg of water (assume no losses). What is the temperature rise, and what is it in calories if you use 1 cal = 4.184 J?</div>
<details class="sol"><summary></summary><div>Work = 25 × 20 × 9.81 × 1.5 = 7358 J. ΔT = 7358/(1.0 × 4184) = <b>1.76 K</b>. Heat = 7358/4.184 = 1759 cal = 1.76 kcal, consistent with "1 kcal per kg per K". Insight: this is the logic of Joule's mechanical equivalent, the ratio of work spent to heat produced, J = 4.184 J/cal.</div></details>

<div class="prob"><span class="lv">Hard</span>Dulong and Petit (1819): the molar heat capacity of a solid element is about 3R = 24.9 J/mol·K. A metal has specific heat 0.235 J/g·K. Estimate its molar mass and compare with silver (107.9 g/mol). Then do the same for aluminum (0.897 J/g·K; actual 27.0 g/mol).</div>
<details class="sol"><summary></summary><div>M ≈ 3R/c = 24.94/0.235 = <b>106 g/mol</b>, within 2 % of silver. Aluminum: 24.94/0.897 = <b>27.8 g/mol</b>, 3 % high. Key insight: a measurement of c gives a rough atomic mass, which is how the law was used in the 19th century to fix atomic weights. The law fails for light, hard elements at room temperature (for example diamond), which Einstein's 1907 quantum model explains: vibrational modes with spacing larger than kT are frozen out.</div></details>

<div class="prob"><span class="lv">Hard</span>Mayer's 1842 idea: the gap between C_p and C_v is the work a gas does pushing the atmosphere. For air, c_p = 0.240 cal/g·K and c_v = 0.1714 cal/g·K, while pushing against a constant pressure shows C_p − C_v = R/M = 8.314/28.97 = 0.2870 J/g·K. Find the mechanical equivalent of heat, and explain why his 1842 number differed from today's.</div>
<details class="sol"><summary></summary><div>Heat difference = 0.240 − 0.1714 = 0.0686 cal/g·K. The same difference in mechanical terms is 0.2870 J/g·K. J = 0.2870/0.0686 = <b>4.18 J per calorie</b>. Mayer's published value was noticeably lower because the gas heat-capacity data of the 1840s, especially c_v, were poor; a small error in a small difference (0.0686) is amplified. Insight: differences of nearly equal large numbers are the fragile step.</div></details>

<div class="prob"><span class="lv">Hard</span>Why did engineers push steam pressure higher after Watt (Trevithick's high-pressure engine, 1800)? Compute the Carnot ceiling for a boiler at 100 °C (1 atm) versus about 180 °C (saturated steam near 10 bar), both rejecting heat at 30 °C.</div>
<details class="sol"><summary></summary><div>T_h = 373.15 K: η = 1 − 303.15/373.15 = <b>18.8 %</b>. T_h = 453.15 K: η = 1 − 303.15/453.15 = <b>33.1 %</b>. Raising the pressure raises the boiling temperature, and Carnot says efficiency grows with T_h. Insight: low-pressure engines were capped below 19 % even if perfect; real ones ran far below the cap, on the order of a percent for the earliest. High pressure was a thermodynamic, not just a power, improvement.</div></details>

<div class="prob"><span class="lv">Puzzle</span>Show that the Clausius statement (heat never flows by itself from cold to hot) and the Kelvin–Planck statement (no cyclic engine turns heat from one reservoir entirely into work) are equivalent. Do it by numbers: assume a forbidden device D moves 600 J from a 300 K body to a 600 K body with no work, and pair it with an ordinary engine taking 1000 J from 600 K and rejecting 600 J at 300 K.</div>
<details class="sol"><summary></summary><div>Engine: Q_h = 1000 J, Q_c = 600 J, W = 400 J (η = 40 % < 50 %, legal). D: takes 600 J from the 300 K body and puts 600 J into the 600 K body. Net for the 300 K body: +600 (engine rejects) − 600 (D removes) = <b>0</b>. Net for the 600 K body: −1000 + 600 = <b>−400 J</b>. So the pair, running a whole cycle, takes 400 J from a single reservoir and delivers 400 J of work: a Kelvin–Planck violation. Entropy check on D alone: ΔS = 600/600 − 600/300 = −1 J/K, negative, confirming it is forbidden. Insight: the two statements are the same law in two costumes; break one and you get the other.</div></details>

<div class="prob"><span class="lv">Puzzle</span>The eight required scientists lived: Black 1728 to 1799, Carnot 1796 to 1832, Joule 1818 to 1889, Clausius 1822 to 1888, Kelvin 1824 to 1907, Maxwell 1831 to 1879, Boltzmann 1844 to 1906, Planck 1858 to 1947. (a) Which were alive in 1848, when Kelvin proposed the absolute scale? (b) Which were alive in 1900? (c) Of the 28 pairs, how many pairs had no overlap at all in life (count calendar years), and which person accounts for most of them?</div>
<details class="sol"><summary></summary><div>(a) Joule, Clausius, Kelvin, Maxwell and Boltzmann (five; Black and Carnot were dead, Planck not yet born). (b) Kelvin, Boltzmann and Planck. (c) <b>8 pairs</b>: Black never overlapped with Joule, Clausius, Kelvin, Maxwell, Boltzmann or Planck (six pairs), and Carnot never overlapped with Boltzmann or Planck (two more). Black accounts for six. Insight: the history spans three "generations"; the chain Black → Carnot → (Joule, Clausius, Kelvin) → (Maxwell, Boltzmann) → Planck is a relay, not a committee. (Check: Joule–Clausius, Joule–Kelvin, Clausius–Kelvin and Kelvin–Boltzmann overlapped 60+ years, the four longest overlaps.)</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Carnot believed in caloric</b> and was still right about the maximum efficiency; "right theorem, wrong theory of heat" is a classic question.</li>
<li><b>Kelvin did not name entropy</b>; Clausius did (1865). Boltzmann explained it (1877); Planck named k_B and wrote S = k ln W in its modern form.</li>
<li><b>Joule did not discover the first law alone</b>: Mayer (1842) and Helmholtz (1847) are co-stars; Joule supplied the precise experiments.</li>
<li><b>Watt did not invent the steam engine</b>; Savery and Newcomen came first. Watt made it efficient with the separate condenser.</li>
<li><b>Fahrenheit and Celsius</b>: Celsius's first scale was upside down (0 at boiling); the order was reversed soon afterwards.</li>
<li><b>Planck versus Boltzmann.</b> Boltzmann: counting states and the T⁴ derivation (1884); Planck: quantum of energy and the blackbody law (1900).</li>
<li><b>Zeroth law is newest by name and oldest by logic.</b></li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: how the ideas "heat is a fluid" and "heat is motion" fought, and which experiments (Rumford, Joule) settled it.</p>
`;
DATA.chal['t16'] = `
<div class="box unv"><b>Status.</b> The numbers below use the verified 2018/2019 "insulate hot water in a beaker" task. The 2027 device is described on the official page only as one "designed to collect heat", and its details are UNVERIFIED on this site. Treat everything here as physics training that transfers, not as 2027 rules.</div>

<h3>Why it works</h3>
<p><b>Newton's law from energy bookkeeping.</b> Water of heat capacity C loses heat to the room at a rate G·(T − T_r), where G (W/K) is the total conductance of every leak path. Then C·dT/dt = −G(T − T_r), so T − T_r decays exponentially with K = G/C. That is the formula the site uses: T_f = T_r + (T₀ − T_r)e^(−Kt). Units: G/C = (W/K)/(J/K) = 1/s. ✓. For 100 mL of water, C = 418 J/K, so a device with G = 0.18 W/K has K = 0.18/418 = 4.3 × 10⁻⁴ s⁻¹ = 0.026 min⁻¹.</p>
<p><b>Leak paths add in parallel.</b> Top opening, sides and bottom are separate routes to the room, so conductances add: G = G_top + G_side + G_bottom. Within one route, layers are in series, so resistances add. The two rules (parallel adds G, series adds R) decide every design question.</p>
<p><b>Why "kill the top first".</b> Suppose the leaks are G_top = 0.10, G_side = 0.06, G_bottom = 0.02 W/K (total 0.18). Doubling the side insulation removes only 0.03 W/K (a 17 % drop in K); halving the top leak removes 0.05 (a 28 % drop). The benefit of improving a path is bounded by its share of the total, an Amdahl-type limit. Once the top is under control, the sides become the next biggest share.</p>
<p><b>Why the cooling curve is a straight line in ln.</b> ln(T − T_r) = ln(T₀ − T_r) − Kt. Two accurate points give K, three or more give a check on the model. Convection and evaporation make K drift at high T, so real data bend slightly; prediction tables should be built from your own data.</p>
<p><b>Cylindrical walls are not slabs.</b> Heat flowing radially through a shell from radius r₁ to r₂ in length L carries P = 2πkLΔT/ln(r₂/r₁). The same heat crosses every cylinder, but the area grows with r, so inner layers do most of the insulating work (the gradient is steepest there). Doubling thickness from 2 cm to 4 cm around a 3.5 cm radius does not halve the leak, because ln grows slowly: the return diminishes.</p>
<p><b>Thermal mass cuts both ways.</b> Anything touching the glass must warm up using the water's heat. Energy stolen = m·c·ΔT of that layer. Light, low-c foam is better than dense wood or metal.</p>
<table>
<tr><th>Double ...</th><th>Effect on K (other things fixed)</th></tr>
<tr><td>wall thickness (slab)</td><td>side conductance halves (only that part of K)</td></tr>
<tr><td>water volume (C doubles)</td><td>K falls toward half (plus a small area increase)</td></tr>
<tr><td>hole area</td><td>G_top about doubles</td></tr>
<tr><td>room-to-water temperature difference</td><td>K unchanged to first order; the heat loss rate doubles</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Parallel paths: fix the biggest leak first.</b> Rank paths by conductance, not by how easy they are to improve.</li>
<li><b>Logs turn exponentials into lines.</b> Two readings and ln give K; three readings test the model.</li>
<li><b>Round-number heat accounting.</b> 100 g of water is 418 J/K, so 1 J is 0.0024 K. A 10 g foam layer warming by 35 K steals 455 J, about 1.1 K of water temperature.</li>
<li><b>Sensitivity instead of perfection.</b> If K has 5 % error, T_f error = (T_f − T_r)·Kt·0.05. For K t = 0.25, T_f − T_r = 37, this is about 0.5 K.</li>
<li><b>Latent-heat shortcut.</b> Evaporating 1 g costs about 2.3 kJ, about 5.5 K of cooling for 100 g. Hence every evaporation path (an open hole) is expensive.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A device has K = 0.010 min⁻¹. Water starts at 70 °C in a 22 °C room. What is the temperature after 25 min? What is the temperature after 25 min if K = 0.035 min⁻¹ (the bare beaker)?</div>
<details class="sol"><summary></summary><div>T_f = 22 + 48e^(−0.25) = 22 + 48(0.7788) = <b>59.4 °C</b>. Bare: 22 + 48e^(−0.875) = 22 + 48(0.4169) = <b>42.0 °C</b>. Key insight: multiply the decay exponent K·t, which is dimensionless. Sanity check: a bare beaker matching the site's ≈ 42 °C figure shows the model reproduces the data.</div></details>

<div class="prob"><span class="lv">Core</span>A wall is 3.0 cm of EPS (k = 0.035 W/m·K) plus 0.5 cm of cardboard (k = 0.06). Find the total thermal resistance per m² and the heat flux for a 48 K difference.</div>
<details class="sol"><summary></summary><div>Layers in series: R = L/k summed = 0.030/0.035 + 0.005/0.060 = 0.857 + 0.083 = <b>0.940 m²·K/W</b>. Flux q = ΔT/R = 48/0.940 = <b>51 W/m²</b>. Insight: the thin cardboard contributes less than 9 % of the resistance, so it is structural, not insulating. Sanity check: R in m²K/W, flux in W/m² ✓.</div></details>

<div class="prob"><span class="lv">Hard</span>A 10 cm tall cylindrical region of insulation (k = 0.030 W/m·K) surrounds a beaker of outer radius 3.5 cm and is bounded by radius 7.5 cm (half the 15 cm cube). The beaker wall is at 70 °C and the outer surface at 22 °C. Find the radial heat flow, and compare with the slab estimate that uses the mean area.</div>
<details class="sol"><summary></summary><div>P = 2πkLΔT/ln(r₂/r₁) = 2π(0.030)(0.10)(48)/ln(7.5/3.5) = 0.905/0.762 = <b>1.19 W</b>. Slab estimate: A_mean = 2π(5.5 cm)(10 cm) = 0.0346 m², thickness 0.04 m: P = 0.030 × 0.0346 × 48/0.04 = 1.24 W, within 5 %. Insight: for thin walls (r₂/r₁ near 1) the flat approximation is fine, which justifies slab formulas in back-of-envelope design. Note this 1.2 W is only the side wall; it is an order of magnitude below the bare-beaker loss, which shows how much the device helps.</div></details>

<div class="prob"><span class="lv">Hard</span>The inner lining of a device is 10 g of EPS foam (c ≈ 1300 J/kg·K). It warms from 22 °C to an average 57 °C while the 100 mL of water loses that heat. By how much does this alone lower the water temperature? Would a 10 g wood lining (c ≈ 1700 J/kg·K) be worse?</div>
<details class="sol"><summary></summary><div>Energy stolen = 0.010 × 1300 × 35 = <b>455 J</b>. Water: C = 418 J/K, so ΔT = 455/418 = <b>1.09 K</b>. Wood: 0.010 × 1700 × 35 = 595 J, 1.42 K, about 30 % worse, and real wood is denser so a same-thickness layer has far more mass. Insight: in a 25-minute test the drop due to a dense inner layer can be as big as the prediction error penalty (2.5 points per K in the 2019 rules), so use light foam next to the beaker.</div></details>

<div class="prob"><span class="lv">Puzzle</span>The water loses 2.0 K of temperature to evaporation through the top hole. Take L ≈ 2300 J/g and treat the water as 100 g at 4.184 J/g·K. What mass of water evaporated, and what percent of the sample?</div>
<details class="sol"><summary></summary><div>Let m_e evaporate. The remaining (100 − m_e) g cools by 2 K: (100 − m_e)(4.184)(2) = 2300 m_e. So 836.8 = m_e (2300 + 8.37), m_e = <b>0.36 g</b>, i.e. 0.36 % of the water. Insight: a third of a gram, about a drop, costs 2 K, so the evaporation path is worth sealing even though the water loss is invisible. Scoring consequence under 2019 rules: 2 K of unexpected cooling costs about 5 prediction points if not modelled.</div></details>

<div class="prob"><span class="lv">Puzzle</span>Leaks in parallel: G_top = 0.10, G_side = 0.06, G_bottom = 0.02 W/K; C = 418 J/K. Compare K (min⁻¹) and the 25-min final temperature (70 °C start, 22 °C room) for (i) the base design, (ii) sides insulated twice as well, (iii) top leak halved. Which gives the larger gain and by what percent of K?</div>
<details class="sol"><summary></summary><div>Base: G = 0.18, K = 0.18/418 × 60 = 0.0258 min⁻¹, T_f = 22 + 48e^(−0.645) = <b>47.2 °C</b>. (ii) G_side = 0.03, G = 0.15, K = 0.0215, T_f = <b>50.0 °C</b>; K falls 17 %. (iii) G_top = 0.05, G = 0.13, K = 0.0186, T_f = <b>52.1 °C</b>; K falls 28 %. Halving the top wins even though sides look like the "obvious" insulation target. Key insight: improvement is proportional to the conductance you remove, which is (old − new) of that path, not to your effort.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Thicker is not always better.</b> Beyond the cube limit or with a leaky top, extra side thickness adds almost nothing.</li>
<li><b>Metal fasteners and foil tape strips</b> are thermal bridges; one screw can carry more heat than a square centimetre of foam.</li>
<li><b>Hot-melt glue softens near 70 °C</b> and can fail during the test; the water is exactly in that range.</li>
<li><b>Comparing temperatures, not K.</b> A device tested with a higher T₀ or colder room shows a bigger absolute drop even with the same K.</li>
<li><b>Ignoring the control beaker.</b> Without it you cannot separate the device effect from a draft or a room temperature change.</li>
<li><b>Convection gaps.</b> An air gap wider than about 1 cm starts to carry heat; fill it or break it with foil.</li>
<li><b>Applying 2018/2019 numbers to 2027.</b> The 2027 device is described as "collect heat"; check the actual rules before building.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why the leak with the biggest conductance decides how fast hot water cools, and why a foam lining's own mass matters.</p>
`;
DATA.chal['t17'] = `
<div class="box unv"><b>Status.</b> UNVERIFIED for 2027. The official page only says teams build a device "designed to collect heat". The heat source, size limits, measurements and scoring are not known on this site. Every number below is an illustrative assumption stated inside the problem, so the physics transfers to whatever the real rules turn out to be.</div>

<h3>Why it works</h3>
<p><b>Net gain = absorbed − lost.</b> For a collector of area A and heat capacity C at temperature T: C·dT/dt = P_abs − U_L·A·(T − T_a), where P_abs = (τα)·G·A is the absorbed power (glazing transmittance τ, absorptivity α, irradiance G) and U_L·A is the total loss conductance (W/K). Units: W = W, and U_L in W/m²K times m² times K is W ✓.</p>
<p><b>Two numbers describe the whole device.</b> Setting dT/dt = 0 gives the stagnation temperature T_stag = T_a + P_abs/(U_L·A) = T_a + (τα)G/U_L: the hottest it can ever get. The time constant is τ_c = C/(U_L·A): how fast it gets there. The solution is an exponential approach: T(t) = T_stag − (T_stag − T₀)e^(−t/τ_c). Note that A cancels out of T_stag; a bigger absorber does not raise the hottest temperature, it only speeds things up.</p>
<p><b>Limiting cases.</b> If losses are negligible (T − T_a ≪ T_stag − T_a) then ΔT ≈ P_abs·t/C: straight-line heating. If you wait forever you reach T_stag no matter how big or small the mass. Hence "more mass" changes speed and stored energy, not the final temperature.</p>
<p><b>Why glazing and a black surface work together.</b> Black paint has α ≈ 0.95 for light. A hot black surface also <i>emits</i> infrared with ε ≈ 0.95, and glass blocks that long-wave radiation and stops the air from carrying heat away, raising T_stag (the greenhouse effect). A selective surface raises α/ε.</p>
<p><b>The radiation wall.</b> Without glazing or convection a flat plate facing sunlight-like G = 1000 W/m² balances at αG = εσT⁴, so T = (αG/(εσ))^(1/4). For α = ε that is 364 K (91 °C). If α/ε = 10 (a selective surface) it is 648 K. The fourth root is why improving α/ε by a factor 10 raises T by only 1.78 times: radiation strongly limits temperature.</p>
<table>
<tr><th>Change</th><th>T_stag − T_a</th><th>Time constant</th><th>Initial heating rate</th></tr>
<tr><td>double irradiance G (reflector)</td><td>×2</td><td>same</td><td>×2</td></tr>
<tr><td>halve losses U_L</td><td>×2</td><td>×2</td><td>same</td></tr>
<tr><td>double water mass</td><td>same</td><td>×2</td><td>÷2</td></tr>
<tr><td>double absorber area A (same mass, same U_L per m²)</td><td>same</td><td>÷2 (U_L·A doubles)</td><td>×2</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Ask what is being scored.</b> A final temperature rewards small mass; stored energy rewards large mass; speed rewards large P_abs. The same device is optimal for only one of them.</li>
<li><b>Ratios beat absolutes.</b> Compare T_stag − T_a (set by τα/U_L only). You can rank designs without knowing the lamp.</li>
<li><b>Linear regime shortcut.</b> Use t ≈ mcΔT/P for small ΔT, then add a correction factor 1/(1 − ΔT/ΔT_stag) roughly.</li>
<li><b>Cosine law.</b> Irradiance on a tilted surface is G cos θ: the power is the area projected onto the beam.</li>
<li><b>Bound before building.</b> Energy cannot exceed P_abs·t, whatever the design. If a claimed result beats it, the measurement is wrong.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A collector has τ = 0.85, α = 0.90, U_L = 8 W/m²K, under G = 1000 W/m², ambient 22 °C. Find the stagnation temperature.</div>
<details class="sol"><summary></summary><div>(τα) = 0.765. T_stag − T_a = 0.765 × 1000/8 = 95.6 K. T_stag = <b>117.6 °C</b>. Key insight: A cancels, so the size of the absorber is irrelevant to the maximum. Sanity check: a hot-box under real sun does reach over 100 °C when well insulated, so the order of magnitude is right.</div></details>

<div class="prob"><span class="lv">Core</span>A 10 cm × 10 cm absorber with τα = 0.765 under 1000 W/m² heats 50 g of water by 10 K. Ignoring losses, how long does it take?</div>
<details class="sol"><summary></summary><div>P_abs = 0.765 × 1000 × 0.0100 = 7.65 W. Energy = 0.050 × 4184 × 10 = 2092 J. t = 2092/7.65 = <b>273 s</b> (about 4.6 min). Insight: this is the lower bound on time, since losses only add to it. Sanity check: it matches the site's sample estimate (about 272 s for 7.7 W).</div></details>

<div class="prob"><span class="lv">Hard</span>Use the same collector (P_abs = 7.65 W, U_L·A = 8 × 0.0100 = 0.080 W/K, T_a = 22 °C) to heat 200 g of water from 22 °C to 37 °C (15 K rise). Find the time constant, the loss-free time and the real time.</div>
<details class="sol"><summary></summary><div>C = 0.200 × 4184 = 836.8 J/K. τ_c = C/(U_L A) = 836.8/0.080 = <b>10 460 s</b> (2.9 h). ΔT_stag = 7.65/0.080 = 95.6 K. Loss-free: t = 836.8 × 15/7.65 = <b>1641 s</b>. Real: t = −τ_c ln(1 − 15/95.6) = 10 460 × 0.1706 = <b>1785 s</b> (29.7 min), only 9 % longer. Insight: as long as the target rise is small compared with ΔT_stag, losses are a small correction (15/95.6 = 16 %). A low loss coefficient matters most for high target temperatures.</div></details>

<div class="prob"><span class="lv">Hard</span>The same 7.65 W (no losses) heats 50 g, 100 g and 200 g of water for 300 s. Compare the final temperature rises and the stored energy. If the score were "largest ΔT" which mass do you choose? If "most energy stored"?</div>
<details class="sol"><summary></summary><div>Energy in 300 s is 7.65 × 300 = <b>2295 J</b> for all three. ΔT = 2295/(m × 4.184): 50 g → <b>11.0 K</b>; 100 g → 5.5 K; 200 g → <b>2.74 K</b>. "Largest ΔT": the smallest mass you can measure reliably (but thermometer and container thermal mass now matter). "Most stored energy": with no losses the energy is the same; with losses the <i>colder</i> system (bigger mass, lower T) loses less, so a larger mass stores a bit more. Insight: the scoring quantity picks the optimum; do the math both ways before building.</div></details>

<div class="prob"><span class="lv">Puzzle</span>A bare flat black plate (α = ε = 0.95) in vacuum faces a lamp with G = 1000 W/m², nothing else to radiate to. (a) Find its equilibrium temperature. (b) Repeat for a selective surface with α = 0.95 and ε = 0.095. (c) By what factor did the temperature change, and why is it not 10?</div>
<details class="sol"><summary></summary><div>Balance αG = εσT⁴. (a) α/ε = 1: T = (1000/5.67 × 10⁻⁸)^(1/4) = <b>364 K</b> (91 °C). (b) α/ε = 10: T = 364 × 10^(1/4) = <b>648 K</b> (375 °C). (c) Factor 10^(1/4) = <b>1.78</b>, because emission grows as T⁴ so a tenfold drop in emissivity is repaid by only 78 % more temperature. Insight: fourth-power laws compress huge changes in power into modest changes in T. In a real box with air there is also convection; this is the upper bound.</div></details>

<div class="prob"><span class="lv">Puzzle</span>A flat collector plate is tilted so the lamp beam makes a 40° angle with the plate's normal. What fraction of the normal-incidence power arrives? By how much (in K) does T_stag − T_a fall if at normal incidence it is 95.6 K?</div>
<details class="sol"><summary></summary><div>Projected-area argument: power ∝ cos θ = cos 40° = <b>0.766</b>. T_stag − T_a ∝ G, so it falls to 0.766 × 95.6 = 73.2 K, a drop of <b>22.4 K</b>. Insight: a mere 40° misalignment costs 23 %; align the plate to the source. Trap: using sin 40° = 0.643.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Assuming the source is the sun.</b> A lamp, hot object or other source changes G, the wavelength (hence α) and the geometry.</li>
<li><b>Thinking bigger area raises the maximum temperature.</b> It does not; A cancels in T_stag and only speeds heating.</li>
<li><b>Black is not always best.</b> A surface that absorbs well also emits well unless it is selective.</li>
<li><b>Ignoring the thermometer.</b> A probe touching the absorber reads the plate, not the fluid; both lag.</li>
<li><b>Mixing units.</b> U_L in W/m²K needs A in m²; absorber in cm² gives answers 10⁴ times off.</li>
<li><b>Heat capacity of the box.</b> The device's own mass is also heated and must be included in C.</li>
<li><b>Treating these numbers as rules.</b> Nothing above is a 2027 specification.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a heat collector has a maximum temperature it cannot exceed, and what sets it.</p>
`;
DATA.chal['t18'] = `
<div class="box unv"><b>Status.</b> Formulas come from the 2019 (and 2018) Division C materials the lesson cites. The 2027 scoring is UNVERIFIED on this site. Use the problems as training in how such scores are optimized, not as the 2027 rubric.</div>

<h3>Why it works</h3>
<p><b>Score the score.</b> In the 2019 scheme the total is 100 = TS (45) + CS (10) + HS (20) + PS (25). A rational team asks two questions about each component: what is the <i>marginal point per unit effort</i>, and what is the <i>ceiling</i>? PS has a ceiling of 25 and loses 2.5 points per °C of error; HS = 20·k_best/k is a ratio, so it rewards proportional improvements; TS = 45·(your points)/(best points) is relative to the field's best team; CS is capped at 10 and mostly rule-following.</p>
<p><b>Why the heat score is a ratio.</b> k is a rate, and rates compound: each improvement that removes a fraction f of k multiplies HS by 1/(1 − f). Cutting k by 10 % multiplies HS by 1.11, so if HS is already 16, that is +1.8 points; halving k doubles HS (until you become the best: HS cannot exceed 20 if the best team is you). The ratio shape means early improvements (reducing a huge k) gain the most.</p>
<p><b>Why the prediction score is a tent function.</b> PS = 25 − 2.5|e| is linear in the error magnitude. For linear absolute-value loss, the best single guess is the <b>median</b> of your belief about T_f, not the mean. (If the loss were squared error the mean would win.) Also, the floor at 0 (beyond 10 °C error) makes very bad guesses equivalent, which matters only for extreme uncertainty.</p>
<p><b>Why the cooling constant k is found from a logarithm.</b> From Newton's law, T − T_r = (T₀ − T_r)e^(−kt), so k = (1/t)ln[(T₀ − T_r)/(T_f − T_r)]. Units: 1/time. ln is applied to a ratio of temperatures so the unit of temperature cancels and kelvin versus Celsius does not matter for differences. Errors: δk ≈ δT/[t(T − T_r)], so a reading error is amplified by the small size of T − T_r late in the run.</p>
<table>
<tr><th>What if ...</th><th>Effect</th></tr>
<tr><td>prediction error doubles from 2 K to 4 K</td><td>PS drops 5 points (two more °C × 2.5)</td></tr>
<tr><td>your k is twice the best</td><td>HS = 10 (half of 20)</td></tr>
<tr><td>best team's test score is 80 and yours 40</td><td>TS = 22.5</td></tr>
<tr><td>construction violation</td><td>PS × 0.7 and k × 1.4 (HS ÷ 1.4)</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Marginal analysis.</b> Convert every improvement to "points gained per hour of work". Reducing your typical prediction error by 1 K earns 2.5 points; a 10 % device improvement at HS = 16 earns only 1.8.</li>
<li><b>Linearize.</b> Plot ln(T − T_r) against t: straight lines make K readable and errors visible.</li>
<li><b>Bias correction beats model refinement.</b> If your model over-predicts by 1 K on average, subtracting 1 K gains 2.5 points at once.</li>
<li><b>Median for absolute-value scoring.</b> When the score is linear in |error|, pick the median of your uncertainty distribution.</li>
<li><b>Relative scores are relative.</b> TS and HS depend on the best team in the room; you control only your own numerator.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A team starts at T₀ = 68.0 °C, ends at T_f = 60.0 °C after t = 25 min in a room at T_r = 21.0 °C. Find k (per minute). If the lowest k in the field is 0.0055 min⁻¹, what is this team's HS?</div>
<details class="sol"><summary></summary><div>k = (1/25) ln(47.0/39.0) = (1/25)(0.1866) = <b>0.00746 min⁻¹</b>. HS = 20 × 0.0055/0.00746 = <b>14.7</b>. Key insight: differences from room temperature, never raw temperatures, go in the logarithm. Sanity check: k is slightly above 0.0055, so HS should be a bit below 20 ✓.</div></details>

<div class="prob"><span class="lv">Core</span>A team predicts T_f = 61.2 °C and measures 59.6 °C. (a) Find PS. (b) With a team test score of 62 when the best team scored 80, find TS.</div>
<details class="sol"><summary></summary><div>(a) |e| = 1.6, PS = 25 − 2.5(1.6) = <b>21.0</b>. (b) TS = 45 × 62/80 = <b>34.9</b>. Insight: the test is scored relative to the top team, so a 62 is worth 77.5 % of 45, not 62 % of 45.</div></details>

<div class="prob"><span class="lv">Hard</span>Your HS is currently 16. You can (i) improve the device so k falls by 10 %, or (ii) improve your prediction model so typical error falls by 1 K. Which gains more points, and how many °C of prediction error equals option (i)?</div>
<details class="sol"><summary></summary><div>(i) HS ∝ 1/k, so k × 0.9 gives HS × 1/0.9: 16 → 17.78, a gain of <b>1.78 points</b>. (ii) 1 K of error is worth <b>2.5 points</b>. So (ii) wins, and (i) equals 1.78/2.5 = <b>0.71 K</b> of prediction error. Insight: a modest prediction improvement beats a 10 % device improvement. Note also that the device gain is capped (the best team is at 20) while the prediction gain continues until error is zero.</div></details>

<div class="prob"><span class="lv">Hard</span>A team's k is 0.0060 min⁻¹ against a field best of 0.0055, and its prediction error is 1.6 K (PS = 21). A construction violation is assessed: PS × 0.7 and k × 1.4. Compute HS + PS before and after.</div>
<details class="sol"><summary></summary><div>Before: HS = 20 × 0.0055/0.0060 = 18.33; total = 18.33 + 21.0 = <b>39.3</b>. After: k = 0.0084, HS = 20 × 0.0055/0.0084 = 13.10; PS = 0.7 × 21 = 14.7; total = <b>27.8</b>. Loss = <b>11.5 points</b>, about 29 %. Insight: a construction violation hits both components, so a rule check (size, materials, prohibited items) is worth more than another hour of tuning.</div></details>

<div class="prob"><span class="lv">Puzzle</span>True parameters: T₀ = 70 °C, T_r = 22 °C, k = 0.0100 min⁻¹. You only measure the first 10 min and read 65.43 °C (true) but your thermometer is 0.3 K low, so you record 65.13 °C. Estimate k from that reading, predict T at 25 min, and find the prediction error. Why is the error larger than 0.3 K?</div>
<details class="sol"><summary></summary><div>True T(10) = 22 + 48e^(−0.1) = 65.43 °C. Recorded 65.13 °C gives T − T_r = 43.13, so k_est = (1/10) ln(48/43.13) = <b>0.01070 min⁻¹</b> (7 % too high). Predicted T(25) = 22 + 48e^(−0.2675) = 58.74 °C versus true 59.38 °C: error <b>−0.64 K</b>, i.e. about 1.6 points lost. The error is larger than 0.3 K because a short baseline converts a small reading error into a larger error in k, and that error grows with the extrapolation time (error in exponent = δk × t). Insight: measure long, extrapolate short, and calibrate your thermometer.</div></details>

<div class="prob"><span class="lv">Puzzle</span>You believe the final temperature is 60 °C with probability 0.6, 63 °C with 0.2 and 70 °C with 0.2. With PS = 25 − 2.5|error|, compare the expected PS for guesses of 60, 62, 63 and the mean of your belief (63.4). Which is best and why?</div>
<details class="sol"><summary></summary><div>Expected |error|: guess 60: 0.6(0) + 0.2(3) + 0.2(10) = 2.6; guess 62: 0.6(2) + 0.2(1) + 0.2(8) = 3.0; guess 63: 0.6(3) + 0 + 0.2(7) = 3.2; guess 63.4: 0.6(3.4) + 0.2(0.4) + 0.2(6.6) = 3.44. Expected PS = 25 − 2.5 × that: <b>18.5</b>, 17.5, 17.0 and <b>16.4</b>. The median of the belief (60 °C, since 60 % of the probability sits at or below it) is best. Insight: for absolute-error scoring the optimal guess is the median; the mean is pulled by the unlikely high outcome and loses about 2 points here.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Using raw temperatures in the k formula</b> instead of (T − T_r): k then changes with the room.</li>
<li><b>Reading HS the wrong way.</b> Lower k is better; HS = 20 × lowest k ÷ yours, so a larger k lowers HS.</li>
<li><b>Applying penalties to the wrong thing.</b> Construction violation multiplies PS by 0.7 and k by 1.4 (2019); a competition violation is PS × 0.9 and k × 1.1.</li>
<li><b>Assuming the prediction is minor.</b> At 2.5 points per K it is worth more than the device gain for most teams.</li>
<li><b>Fitting k from too few points.</b> Two noisy readings extrapolate poorly; use at least 10 points as the chart rubric also requires.</li>
<li><b>Treating 2019 numbers as 2027 rules.</b> The 2027 scoring is unverified here.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why the prediction is worth so many points and why guessing the "middle" value (median) of what you expect is the smart move.</p>
`;
DATA.chal['t19'] = `
<h3>Why it works</h3>
<p><b>Safety is an energy-rate problem.</b> A burn depends on how much energy crosses the skin per second, not on temperature alone. Hot water delivers energy as it cools: q = mcΔT. Steam delivers that plus the latent heat as it condenses: q = mL + mcΔT, and L = 2.26 MJ/kg is about 540 times the energy per kelvin of water (4184 J/kg·K × 1 K). So 1 g of steam at 100 °C landing on skin that cools it to 37 °C gives 2260 + 4.184 × 63 = 2524 J, while 1 g of boiling water gives only 264 J: <b>9.6 times as much</b>.</p>
<p><b>Measurement is a calibration problem.</b> A thermometer's reading is a line: reading = a + b × (true). Two fixed points (ice water 0 °C and boiling water near 100 °C, corrected for altitude) determine both a and b. If the ice point reads 1.0 and the boiling point reads 99.0, true = (reading − 1.0) × 100/98. A single-point check fixes only an offset. The boiling point falls about 1 °C per 300 m of elevation (T_b ≈ 100 − 0.0034h), so check weather and site before using boiling as a fixed point.</p>
<p><b>Thermal shock is stress = E·α·ΔT.</b> A temperature difference across glass wants to expand or shrink one part relative to another. If it is prevented, the stress is roughly σ = E·α·ΔT. Glass cracks at roughly the same stress whatever its type, so the safe ΔT limit scales as 1/(E·α). Borosilicate glass has α ≈ 3.3 × 10⁻⁶ /K versus about 9 × 10⁻⁶ for soda-lime glass, which accounts for their tolerance limits of roughly 160 K and 40 to 60 K. Check (assuming E = 63 GPa and 72 GPa): 63 × 10⁹ × 3.3 × 10⁻⁶ × 160 = 33 MPa; 72 × 10⁹ × 9 × 10⁻⁶ × 50 = 32 MPa. The two match: same failure stress, different α.</p>
<p><b>Sensors have time constants.</b> A thermocouple or thermometer obeys the same first-order law as the cooling water: T_reading(t) = T_true − (T_true − T₀)e^(−t/τ). To reach within δ of the true value, wait t = τ ln(ΔT₀/δ). The <i>lag</i> while the true temperature is falling at rate r is τ·r.</p>
<p><b>Limiting cases and sensitivities.</b> A sensor with τ → 0 is ideal; a large τ makes every reading stale. Offsets that affect all readings the same way cancel in differences (T − T_r) but not in absolute predictions.</p>
<table>
<tr><th>What if ...</th><th>Effect</th></tr>
<tr><td>thermocouple τ doubles (5 s to 10 s)</td><td>settling time to 0.1 K doubles (31 s to 62 s)</td></tr>
<tr><td>ΔT between glass and water doubles</td><td>thermal stress doubles</td></tr>
<tr><td>steam instead of boiling water</td><td>heat delivered up to about 10 times</td></tr>
<tr><td>altitude 2000 m</td><td>boiling point about 93 °C, not 100</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Two-point calibration.</b> Fit a line through two known points; use it for every reading.</li>
<li><b>Energy-rate comparison.</b> Compare hazards by energy delivered (q = mL + mcΔT), not by temperature.</li>
<li><b>Scaling for safe limits.</b> If failure needs stress σ, limit ΔT ∝ 1/(Eα): compare materials with the product Eα.</li>
<li><b>Settling rule.</b> Wait at least 5τ for a first-order sensor (error below 1 %); 7τ for under 0.1 %.</li>
<li><b>Common-mode cancellation.</b> A shared offset disappears in differences like T − T_r. Note which quantities use differences.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>Compare the heat delivered to skin by 1.0 g of steam at 100 °C and by 1.0 g of water at 100 °C, each cooling to 37 °C. (L_v = 2260 J/g, c = 4.184 J/g·K.)</div>
<details class="sol"><summary></summary><div>Water: 4.184 × 63 = <b>264 J</b>. Steam: 2260 + 264 = <b>2524 J</b>. Ratio = 9.6. Insight: the latent heat is about nine times the sensible heat dropped over 63 K; condensation dominates. Sanity check: 2260/4.184 = 540 K equivalent, consistent with the "540 kcal per kg" folklore.</div></details>

<div class="prob"><span class="lv">Core</span>A thermometer reads 1.0 °C in a well-stirred ice bath and 99.0 °C in boiling water at sea level. (a) What is the true temperature when it reads 60.0 °C? (b) At a site 2000 m up, what reading should boiling water give for a perfect thermometer, using T_b ≈ 100 − 0.0034h?</div>
<details class="sol"><summary></summary><div>(a) True = (60.0 − 1.0) × 100/98.0 = <b>60.2 °C</b>. (b) T_b = 100 − 0.0034 × 2000 = <b>93.2 °C</b>. Insight: the scale error is proportional (2 %), so it grows with temperature, unlike an offset. Trap: calibrating boiling at 100 °C at altitude "creates" a 6.8 K error.</div></details>

<div class="prob"><span class="lv">Hard</span>A borosilicate beaker (α = 3.3 × 10⁻⁶ /K, E = 63 GPa) tolerates ΔT = 160 K; soda-lime (α = 9 × 10⁻⁶ /K, E = 72 GPa) tolerates about 50 K. Assuming both fail at the same stress, what ratio of tolerances does E·α predict, and what stress is implied?</div>
<details class="sol"><summary></summary><div>Ratio = (Eα)_soda/(Eα)_boro = (72 × 9)/(63 × 3.3) = 648/207.9 = <b>3.12</b>. Starting from soda-lime at 50 K, borosilicate should tolerate 156 K, close to the stated 160 K. Stress: 63 × 10⁹ × 3.3 × 10⁻⁶ × 160 = <b>33 MPa</b>; the soda-lime value is 32 MPa. Insight: both glasses break at about the same stress, so ΔT_limit is inversely proportional to Eα. Practical consequence: never pour boiling water into a cold ordinary glass.</div></details>

<div class="prob"><span class="lv">Hard</span>A thermocouple with time constant τ = 5 s starts at 22 °C in room air and is dropped into 70 °C water. (a) How long until it reads within 0.1 K of the true value? (b) Later the water cools at 0.4 K/min. By how much does the reading lag?</div>
<details class="sol"><summary></summary><div>(a) Error = 48e^(−t/τ) = 0.1, so t = 5 ln(480) = <b>30.9 s</b>. (b) Lag = τ × rate = 5 s × (0.4/60 K/s) = <b>0.033 K</b>. Insight: the probe must settle for about half a minute before the first reading counts, but once settled, lag during slow cooling is negligible. Sanity check: 0.033 K is far below the 0.5 K scale of calibration errors.</div></details>

<div class="prob"><span class="lv">Hard</span>How many grams of steam at 100 °C must be bubbled into 200 g of water at 20 °C to bring it to 60 °C? (Steam condenses and then cools to 60 °C. L = 2260 J/g, c = 4.184 J/g·K.)</div>
<details class="sol"><summary></summary><div>Heat gained by water = 200 × 4.184 × 40 = 33 472 J. Heat given by each gram of steam = 2260 + 4.184 × 40 = 2427 J. m = 33 472/2427 = <b>13.8 g</b> (7 % of the water mass added). Insight: each gram of steam gives up its latent heat and then the sensible heat from 100 to 60 °C, and the condensate ends up in the mixture (the heat balance does not need its mass beyond this). Sanity check: if only sensible heat were available it would need 200 × 40/(100 − 60) = 200 g of boiling water, about 15 times as much.</div></details>

<div class="prob"><span class="lv">Puzzle</span>In a cooling run the room is 22.0 °C, the water starts at 70.0 °C and finishes at 60.0 °C after 25 min. Suppose your water probe reads 0.5 K high at both times but the room thermometer is correct. (a) Find k from the true data and from the recorded data. (b) By how much does k change, and what happens to k if the room thermometer shared the same +0.5 K error?</div>
<details class="sol"><summary></summary><div>True: k = (1/25) ln(48/38) = <b>0.009345 min⁻¹</b>. Recorded (70.5, 60.5): k = (1/25) ln(48.5/38.5) = <b>0.009236 min⁻¹</b>, a change of <b>−1.2 %</b>. If the room thermometer has the same +0.5 K error, all differences are unchanged and k is <b>identical</b> (common-mode cancellation). Insight: a shared offset cancels in k, but the direct T_f reading is still 0.5 K high, costing 1.25 points in a 2.5-point-per-K prediction score if your prediction was unbiased. Use one thermometer for both water and room, or calibrate them together.</div></details>

<div class="prob"><span class="lv">Puzzle</span>The lesson says time to a severe scald "falls exponentially with temperature: about 5 s at 60 °C and 1 to 2 s at 70 °C". Suppose it falls by a factor 4 for every 10 K above 60 °C (an assumption that fits the lesson's range). Predict the time at 50 °C and at 80 °C, and find the temperature where the time is 0.1 s.</div>
<details class="sol"><summary></summary><div>t(T) = 5 × 4^(−(T − 60)/10) s. At 50 °C: 5 × 4 = <b>20 s</b>. At 80 °C: 5/16 = <b>0.31 s</b>. For 0.1 s: 4^(−x) = 0.02, x = ln 50/ln 4 = 2.82, so T = 60 + 28.2 = <b>88 °C</b>. Insight: a few degrees changes reaction time severalfold, which is why a cup that is merely "hot" (50 °C) gives you time to react but 80 °C does not. Treat the factor of 4 as an illustration, not a medical rule.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>"Boiling water equals steam."</b> Same temperature, about 10 times the energy delivered because of latent heat.</li>
<li><b>Boiling point at 100 °C everywhere.</b> Altitude and weather shift it by several degrees.</li>
<li><b>Offset versus scale error.</b> One fixed point fixes only offset; two fixed points are needed for slope.</li>
<li><b>Probe touching the glass or lead conduction.</b> The probe reads the wall or leaks heat out the wire.</li>
<li><b>Reading before settling.</b> Less than about 5τ gives a stale value.</li>
<li><b>Cracking glass.</b> Borosilicate is more forgiving but not immune; cold and hot glass still crack if ΔT exceeds the limit.</li>
<li><b>Dust and adhesives.</b> Wear a mask for aerogel and foam dust; some spray adhesives dissolve EPS.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why steam burns worse than boiling water of the same temperature and why a two-point calibration beats a one-point check.</p>
`;
DATA.chal['t20'] = `
<h3>Why it works</h3>
<p><b>Expansion from atomic asymmetry.</b> Atoms sit in a potential well that is steeper on the compressed side than on the stretched side. Heat makes them vibrate with larger amplitude, and because the well is lopsided the <i>average</i> spacing grows. A perfectly symmetric (harmonic) well would give zero expansion, which is why α is a signature of anharmonicity, and why materials with stiffer bonds (higher melting point) usually expand less.</p>
<p><b>Why ΔL = α·L₀·ΔT, and why area and volume follow.</b> Every tiny length in the body grows by the same fraction α·ΔT, so <i>every</i> dimension (including the diameter of a hole) scales by (1 + αΔT). Areas scale by (1 + αΔT)² ≈ 1 + 2αΔT and volumes by (1 + αΔT)³ ≈ 1 + 3αΔT, so ΔA = 2αA₀ΔT and β = 3α for an isotropic solid. Units: α in 1/K times ΔT in K is dimensionless, so ΔL has the units of L₀ ✓.</p>
<p><b>The hole rule by scaling.</b> Heat a plate with a hole: think of the hole as a disc of the same material that is removed. The disc would expand, so the hole expands by the same factor. No gap "closes"; the metal around it grows outward.</p>
<p><b>Thermal stress.</b> If expansion is blocked the material is compressed back by the strain α·ΔT, so stress σ = E·α·ΔT. Units: Pa × (1/K) × K = Pa ✓. For steel, E = 200 GPa, α = 12 × 10⁻⁶: each kelvin of blocked expansion gives 2.4 MPa, so 40 K gives 96 MPa. With a partial gap g the blocked strain is (αΔT·L₀ − g)/L₀.</p>
<p><b>Bimetal bending (beam theory).</b> Two bonded layers of equal thickness and equal stiffness, total thickness h, with mismatch Δα, bend into a circular arc with curvature κ = 3ΔαΔT/(2h). The scaling is the useful part: κ ∝ ΔαΔT/h (units 1/m: Δα·ΔT is dimensionless, h is in m ✓), so thinner strips and larger mismatches bend more.</p>
<p><b>Limiting cases.</b> Zero mismatch means no bending (why matched-α fillings stay put in teeth, and why steel rebar and concrete, both about 10 to 12 × 10⁻⁶ /K, coexist). A very stiff constraint turns strain into stress; a free body simply changes size.</p>
<table>
<tr><th>Double ...</th><th>Effect</th></tr>
<tr><td>length L₀</td><td>ΔL doubles</td></tr>
<tr><td>temperature change</td><td>ΔL, stress, curvature all double</td></tr>
<tr><td>bimetal thickness</td><td>curvature halves</td></tr>
<tr><td>gap in a clamped bar</td><td>blocked strain (and stress) drops</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Fractions, not lengths.</b> Write every expansion as a fractional change α·ΔT (for steel about 1.2 × 10⁻⁵ per K: 0.012 %) and multiply afterwards.</li>
<li><b>Scale everything the same.</b> Any dimension, including hole diameters and gaps inside an object, grows by the same factor.</li>
<li><b>Free versus blocked.</b> Decide first: if the object is free, compute ΔL; if blocked, compute strain then stress via E.</li>
<li><b>Equal-difference trick.</b> Two rods keep a constant length difference at all temperatures if L₁α₁ = L₂α₂.</li>
<li><b>Small-number linearization.</b> For small αΔT use 1 + αΔT; for square roots use ½; e.g., pendulum period ∝ √L gives ½αΔT.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A 2.00 m aluminum rod (α = 23 × 10⁻⁶ /K) is heated from 25 °C to 125 °C. By how much does it lengthen?</div>
<details class="sol"><summary></summary><div>ΔL = αL₀ΔT = 23 × 10⁻⁶ × 2.00 × 100 = 4.6 × 10⁻³ m = <b>4.6 mm</b>. Sanity check: a fractional change of 23 × 10⁻⁶ × 100 = 0.23 % of 2 m is a few millimetres, reasonable.</div></details>

<div class="prob"><span class="lv">Core</span>A steel washer (α = 12 × 10⁻⁶ /K) has a 2.000 cm hole at 20 °C. It is heated to 220 °C. What is the hole diameter?</div>
<details class="sol"><summary></summary><div>The hole expands like the material: Δd = α d ΔT = 12 × 10⁻⁶ × 2.000 × 200 = 0.0048 cm. New diameter = <b>2.0048 cm</b>. Insight: the hole <i>gets larger</i>. This is why a metal lid loosens on a jar under hot water (the lid expands more than glass) and why a shrink fit is made by heating the outer part.</div></details>

<div class="prob"><span class="lv">Hard</span>A steel-rod pendulum clock keeps correct time at 20 °C. The rod (α = 12 × 10⁻⁶ /K) warms by 10 K. The period is T = 2π√(L/g). How many seconds per day does the clock lose?</div>
<details class="sol"><summary></summary><div>L grows by the fraction αΔT = 1.2 × 10⁻⁴. T ∝ √L, so the period grows by half of that: 6 × 10⁻⁵. Each swing is longer, so the clock runs slow: 86 400 s × 6 × 10⁻⁵ = <b>5.2 s per day</b>. Key insight: the square root halves the fractional change. Sanity check: this is why precision clocks use low-α alloys (Invar) or compensated pendulums.</div></details>

<div class="prob"><span class="lv">Hard</span>A mercury thermometer has a bulb volume of 0.100 cm³ and a capillary bore of diameter 0.100 mm. Mercury has β = 182 × 10⁻⁶ /K and the glass has α = 9 × 10⁻⁶ /K. By how far does the thread rise when the temperature goes up 50 K?</div>
<details class="sol"><summary></summary><div>The glass bulb also grows, so the apparent expansion uses β_glass = 3α = 27 × 10⁻⁶. β_apparent = 182 − 27 = 155 × 10⁻⁶ /K. ΔV = 0.100 × 155 × 10⁻⁶ × 50 = 7.75 × 10⁻⁴ cm³. Bore area = π(0.005 cm)² = 7.85 × 10⁻⁵ cm². Rise = 7.75 × 10⁻⁴/7.85 × 10⁻⁵ = <b>9.9 cm</b>. Insight: a small, thin bore magnifies a tiny volume change into a visible length. Trap: forgetting the bulb's expansion overstates the rise by 17 %.</div></details>

<div class="prob"><span class="lv">Hard</span>A steel bar (L = 1.000 m, α = 12 × 10⁻⁶ /K, E = 200 GPa) is placed with a 0.50 mm gap to a rigid wall at one end, and the other end rests against a rigid wall. It is heated 60 K. What is the stress? What gap would give zero stress?</div>
<details class="sol"><summary></summary><div>Free expansion = 12 × 10⁻⁶ × 1.000 × 60 = 0.72 mm. The gap absorbs 0.50 mm, so 0.22 mm is blocked: strain = 0.22 × 10⁻³ (per 1 m). Stress = Eε = 200 × 10⁹ × 0.22 × 10⁻³ = <b>44 MPa</b> (compressive). Zero stress needs a gap of <b>0.72 mm</b>. Insight: only the excess over the gap is stress-producing, which is why bridges and rails have expansion joints sized for the full temperature range, plus margin.</div></details>

<div class="prob"><span class="lv">Puzzle</span>A steel rod (α = 12 × 10⁻⁶ /K) of length 38 cm and a brass rod (α = 19 × 10⁻⁶ /K) are heated and cooled together, and you want the <i>difference</i> in their lengths to be the same at all temperatures. What must the brass length be, and what is that difference?</div>
<details class="sol"><summary></summary><div>Expansions must match: α_steel L_steel ΔT = α_brass L_brass ΔT, so L_brass = L_steel α_steel/α_brass = 38 × 12/19 = <b>24 cm</b> (check: 12 × 38 = 456 and 19 × 24 = 456 ✓). The difference is <b>14 cm</b> at all temperatures. Insight: equal <i>absolute</i> expansions need unequal lengths; the requirement is αL equal, not α or L equal. Used in compensated designs such as older pendulums and gauges.</div></details>

<div class="prob"><span class="lv">Puzzle</span>A bimetallic strip of steel (α = 12 × 10⁻⁶) and aluminum (α = 23 × 10⁻⁶), equal thickness, total thickness h = 2.0 mm, is straight at 20 °C. Use κ = 3ΔαΔT/(2h) to find its radius of curvature at 120 °C, and the deflection of the free end of a 10 cm strip clamped at the other end (small arcs: deflection ≈ L²/2R). Which metal is on the outside of the bend?</div>
<details class="sol"><summary></summary><div>Δα = 11 × 10⁻⁶, ΔT = 100 K: κ = 3 × 11 × 10⁻⁶ × 100/(2 × 0.0020) = 0.825 m⁻¹, so R = <b>1.21 m</b>. Tip deflection = L²κ/2 = 0.010 × 0.825/2 = 4.1 × 10⁻³ m = <b>4.1 mm</b>. The aluminum expands more, so it lies on the <b>outside</b> (convex side) and the steel on the inside. Insight: a small mismatch becomes a visible motion, the basis of thermostats and old circuit breakers. Units check: Δα ΔT is dimensionless, divided by metres gives 1/m ✓.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Hole shrinks when heated.</b> False; it grows with the same fractional change as the metal.</li>
<li><b>Area expansion = α.</b> It is 2α; volume is 3α.</li>
<li><b>Liquid in a glass tube.</b> Use the apparent expansion β_liquid − β_glass.</li>
<li><b>Stress without a constraint.</b> A free body expands without stress; stress needs blocking.</li>
<li><b>Mixing units of ΔT.</b> ΔT in °C or K is the same number; do not convert the difference by adding 273.</li>
<li><b>Water below 4 °C contracts on heating.</b> Its density peaks at about 3.98 °C; expansion rules fail there.</li>
<li><b>Clock direction.</b> Heat lengthens a pendulum; longer period means a slow clock.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a hole in a heated metal plate gets bigger, and why blocking the expansion makes a huge force.</p>
`;
DATA.chal['t21'] = `
<h3>Why it works</h3>
<p><b>The 2027 test is flat by design.</b> The rules give 3 questions from each subject area. Areas 1 to 5 are tested at every level (15 questions at a regional); areas 6 (radiant exitance, blackbody, Stefan–Boltzmann, third law) and 7 (entropy and enthalpy, Division C) are State/National only, giving 7 × 3 = 21 questions for Division C at State. When every area has the same weight, expected score is (roughly) the <b>average</b> of your five or seven area scores, so the cheapest marginal gain is always in your weakest area, because the gap to a full score is biggest there. A lopsided study plan (brilliant at Carnot, blank on history) leaves points on the table that no amount of extra Carnot work can recover.</p>
<p><b>Why history is the best per-minute investment.</b> History is 3 of 15 questions at regionals (20 %) and the facts are discrete: who, what, when. A fact learned once is retrievable in seconds on test day, while a calculation costs minutes. Points per minute of <i>study</i> and of <i>test time</i> are both highest for the eight named scientists.</p>
<p><b>Why the binder is an index, not a textbook.</b> The test is time-limited and shared with running the device, so the question you need to answer is "where is the formula, and in which units?" Good binders minimize retrieval time: tabs named after the seven areas, one page per area with the top formulas, one conversion sheet. The rules allow any notes in a hole-punched 3-ring binder, and sheets may be removed, so a partner can take the page they need.</p>
<p><b>Why two calculators and two partners need a protocol.</b> With two Class III calculators and two people, the work can be parallelized: one person does the calculation-heavy questions, the other handles history and definitions, then swap. Shared ordering (easy first, hard last, flag and return) prevents both partners burning time on the same hard item.</p>
<p><b>Units are the test's hidden currency.</b> Many wrong answers come from conversion slips, not physics. The conversions to know cold: 1 cal = 4.184 J, 1 Cal = 1 kcal = 4184 J, 1 BTU = 1055 J ≈ 252 cal, 1 kWh = 3.6 MJ, 1 therm = 100 000 BTU.</p>
<table>
<tr><th>What if ...</th><th>Consequence</th></tr>
<tr><td>you skip areas 6 and 7 entirely (at State)</td><td>6 of 21 questions (28.6 %) are starting at zero</td></tr>
<tr><td>you raise your weakest area from 50 % to 80 %</td><td>+0.9 points on 3 questions, more than polishing a 90 % area to 100 % (+0.3)</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Marginal gain in the weakest area.</b> Flat weights mean the derivative of score is equal everywhere; the room to grow is not.</li>
<li><b>Triage by time.</b> Answer recall and unit questions first; they are fast and certain. Flag long calculations and return.</li>
<li><b>Dimension first, number second.</b> Before multiplying, write the units; wrong units reveal wrong formulas.</li>
<li><b>Estimate then compute.</b> Round to one significant figure to predict the answer, then compute and compare: a factor of 10 or 1000 error is caught immediately.</li>
<li><b>Index your binder by question type</b> (heating curve, PV cycle, Carnot, radiation, Hess), not by lesson number.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>Under the 2027 structure (3 questions per area), how many questions are on the test for (a) a regional (areas 1 to 5), and (b) Division C State (all 7 areas)? What percentage is history in each, and what fraction of the State test comes from the State/Nat-only areas?</div>
<details class="sol"><summary></summary><div>(a) 5 × 3 = <b>15</b>. (b) 7 × 3 = <b>21</b>. History is 3 of each: 3/15 = <b>20 %</b> and 3/21 = <b>14.3 %</b>. State/Nat-only areas (6 and 7) are 6 of 21 = <b>28.6 %</b>. Insight: at State, more than a quarter of the test comes from the two "Division C extras", so skipping them is expensive.</div></details>

<div class="prob"><span class="lv">Core</span>Convert: (a) 1 kWh to kcal; (b) 1 BTU to cal; (c) an air-conditioning "ton" of 12 000 BTU/h to kW.</div>
<details class="sol"><summary></summary><div>(a) 3.6 × 10⁶ J/4184 J/kcal = <b>860 kcal</b>. (b) 1055 J/4.184 = <b>252 cal</b>. (c) 12 000 × 1055 J/3600 s = 3517 W = <b>3.52 kW</b>. Sanity check: the ton of cooling is about the power of a large electric heater, plausible for a room unit.</div></details>

<div class="prob"><span class="lv">Hard</span>How much heat turns 50 g of ice at −20 °C into water at 100 °C? Use c_ice = 2090 J/kg·K, L_f = 334 kJ/kg, c_water = 4184 J/kg·K. Give the answer in kJ and in BTU.</div>
<details class="sol"><summary></summary><div>Three segments. Warming ice: 0.050 × 2090 × 20 = 2090 J. Melting: 0.050 × 334 000 = 16 700 J. Warming water: 0.050 × 4184 × 100 = 20 920 J. Total = <b>39.7 kJ</b> = 39 710/1055 = <b>37.6 BTU</b>. Insight: melting is 42 % of the total although it takes no temperature change: latent heat is the biggest single step. Trap: skipping the melting term, or using the wrong temperature span for the ice stage.</div></details>

<div class="prob"><span class="lv">Hard</span>A 1-ton air conditioner (3.52 kW of cooling) has a COP of 3. What electrical power does it draw, and how much electricity does it use in 8 hours of running?</div>
<details class="sol"><summary></summary><div>Power = Q_c/COP = 3.517/3 = <b>1.17 kW</b>. Energy = 1.172 × 8 = <b>9.4 kWh</b>. Insight: COP > 1 means the machine moves more heat than it consumes. Sanity check: 9.4 kWh is about 34 MJ, enough to heat about 100 L of water by 80 K.</div></details>

<div class="prob"><span class="lv">Puzzle</span>At what Celsius temperature does the Fahrenheit reading equal twice the Celsius reading? At what temperature does the Kelvin reading equal the Fahrenheit reading numerically?</div>
<details class="sol"><summary></summary><div>First: 1.8C + 32 = 2C, so 0.2C = 32, C = <b>160 °C</b> (320 °F). Second: K = C + 273.15 and F = 1.8C + 32; set equal: C + 273.15 = 1.8C + 32, 0.8C = 241.15, C = 301.4 °C, which gives <b>574.6 K = 574.6 °F</b>. Check: 1.8 × 301.44 + 32 = 574.59 ✓. Insight: each is a two-line linear equation; the famous −40 (°C = °F) comes from the same method (C = 1.8C + 32).</div></details>

<div class="prob"><span class="lv">Puzzle</span>A therm is 100 000 BTU. Express one therm in kWh and in food Calories (kcal). Then state in one line which is the largest unit of energy: therm, kWh, Cal, BTU?</div>
<details class="sol"><summary></summary><div>1 therm = 100 000 × 1055 = 1.055 × 10⁸ J. In kWh: 1.055 × 10⁸/3.6 × 10⁶ = <b>29.3 kWh</b>. In kcal: 1.055 × 10⁸/4184 = <b>25 200 Cal</b>. Order from large to small: therm (1.06 × 10⁸ J) > kWh (3.6 × 10⁶ J) > Cal (4184 J) > BTU (1055 J). Insight: a typical 2000 Cal diet is about one-twelfth of a therm a day.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Assuming a single area dominates.</b> The rules list 3 questions per area; study flatly.</li>
<li><b>Calorie versus calorie.</b> Cal (capital) = kcal = 4184 J; cal = 4.184 J. A factor 1000.</li>
<li><b>Sheets not punched or protected.</b> Notes must be hole-punched and secured in a 3-ring binder.</li>
<li><b>BTU vs BTU/h.</b> Energy versus power; a "ton" of AC is a power.</li>
<li><b>Using old scoring.</b> 2019 had radiant exitance, entropy and enthalpy for all of Division C; in the 2027 rules they are State/National only.</li>
<li><b>Fahrenheit or Celsius in ratios</b> (efficiency, radiation, gas laws): use kelvin.</li>
<li><b>Spending all the time on one hard question</b> while easy recall questions sit unanswered.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why a test with equal weight in every area rewards fixing your weakest topic first, and why history is a good bargain.</p>
`;
DATA.chal['t22'] = `
<h3>Why it works</h3>
<p><b>Everything is counting.</b> Microscopically, an isolated system is equally likely to be found in any of its W accessible microstates. The entropy S = k_B ln W is the logarithm of that count. The logarithm is the only choice that makes entropy <i>additive</i>: two independent systems have W = W₁W₂, so ln W = ln W₁ + ln W₂. The constant k_B converts the count into J/K. Units: k_B in J/K times a pure number ✓.</p>
<p><b>The Boltzmann factor from the same idea.</b> Put a small system in contact with a huge reservoir. When the small system is in a state of energy E, the reservoir has less energy, and its count of microstates W_R(E_tot − E) falls off roughly as e<sup>−E/(k_B T)</sup>, because dS_R/dE = 1/T. So the probability of the state is proportional to e<sup>−E/(k_B T)</sup>. Consequences: populations fall off exponentially with energy, the scale being k_B T (about 0.0259 eV at 300 K), which explains evaporation, Arrhenius rates and the Maxwell speed distribution.</p>
<p><b>Why entropy rises (the combinatorial view).</b> A gas that fills a box twice as large has 2 times as many position states per molecule, so N molecules have 2^N times as many states: ΔS = N k_B ln 2. For a mole, R ln 2 = 5.76 J/K. The reverse, all the molecules spontaneously gathering in one half, is not forbidden by any law of motion; it is just improbable: 2^(−N). For N = 100 that is 8 × 10⁻³¹, for a mole it is 10^(−1.8 × 10²³). The second law is a statement about overwhelming numbers.</p>
<p><b>Equipartition and freeze-out.</b> Each quadratic term in the energy (a velocity component, a rotation, a spring's potential energy) gets ½k_B T on average. A monatomic gas has 3 (C_v = 3R/2), a diatomic at room temperature has 5 (translation and two rotations: 5R/2), a solid has 6 (3R, Dulong–Petit). If the spacing between quantum levels of a mode is much bigger than k_B T, the mode is barely excited: "frozen out". Hence the vibrational modes of N₂ do not show up at 300 K, and heat capacities of solids fall at low T.</p>
<p><b>Potentials as different bookkeeping.</b> From dU = TdS − PdV, changing variables gives H = U + PV (natural variables S, P), F = U − TS (T, V) and G = H − TS (T, P). The mixed second derivatives of any smooth potential are equal, giving the Maxwell relations, for example (∂S/∂V)_T = (∂P/∂T)_V. Check with an ideal gas: P = Nk_B T/V so (∂P/∂T)_V = Nk_B/V; integrating (∂S/∂V)_T gives ΔS = Nk_B ln(V₂/V₁), the same as counting states ✓.</p>
<table>
<tr><th>What if ...</th><th>Effect</th></tr>
<tr><td>T doubles (two-level, gap ΔE)</td><td>excited/ground ratio goes from e^(−x) to e^(−x/2), a large increase if x is big</td></tr>
<tr><td>volume of a gas doubles</td><td>W multiplies by 2^N; ΔS = Nk_B ln 2</td></tr>
<tr><td>N doubles at fixed ln W per particle</td><td>S doubles (extensive)</td></tr>
<tr><td>activation energy is doubled</td><td>rate ratio goes as the square of the old ratio at fixed T</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Ratio of populations.</b> N₂/N₁ = (g₂/g₁) e<sup>−ΔE/(k_B T)</sup>; you never need Z for two levels.</li>
<li><b>Use k_B T as the ruler.</b> Compare every energy to 0.0259 eV (300 K) or 2.49 kJ/mol; if ΔE ≫ k_B T the upper state is nearly empty.</li>
<li><b>Count, then take the log.</b> Combinatorics first (C(N, n)), then ln using Stirling when N is large.</li>
<li><b>Equipartition bookkeeping.</b> Count the quadratic terms; energy = (number) × ½k_B T per particle.</li>
<li><b>Derivative checks for Maxwell relations.</b> Test a relation on the ideal gas before trusting it.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>A two-level system has levels 0 and 0.050 eV, with no degeneracy. At 300 K (k_B T = 0.02585 eV) find the ratio of upper to lower populations and the fraction in the upper level.</div>
<details class="sol"><summary></summary><div>Ratio = e^(−0.050/0.02585) = e^(−1.934) = <b>0.145</b>. Fraction upper = 0.145/(1 + 0.145) = <b>0.126</b> (12.6 %). Insight: a gap of about 2 k_B T leaves about one-eighth of the population excited (12.6 %). Sanity check: doubling the temperature to 600 K gives e^(−0.967) = 0.38, a large change, which shows how sensitive excited populations are.</div></details>

<div class="prob"><span class="lv">Core</span>100 fair coins are tossed. How many microstates have exactly 50 heads, and what is the entropy k_B ln W of that macrostate?</div>
<details class="sol"><summary></summary><div>W = C(100, 50) = <b>1.01 × 10²⁹</b>. ln W = 66.78. S = 1.381 × 10⁻²³ × 66.78 = <b>9.2 × 10⁻²² J/K</b>. Insight: even 100 coins have a count of 10²⁹; the fraction of all 2¹⁰⁰ outcomes that give exactly 50 heads is only 8 %, but nearly all outcomes are close to 50. Stirling check: ln C(100, 50) ≈ 100 ln 2 − ½ ln(50π) = 69.3 − 2.53 = 66.8 ✓.</div></details>

<div class="prob"><span class="lv">Hard</span>One mole of ideal gas expands freely into a vacuum to twice its volume. (a) Find ΔS_gas. (b) Find the probability that all 100 molecules of a tiny sample would be found in the left half. (c) Why can the same ΔS be computed from a reversible isothermal path?</div>
<details class="sol"><summary></summary><div>(a) W multiplies by 2^N: ΔS = Nk_B ln 2 = R ln 2 = 8.314 × 0.6931 = <b>5.76 J/K</b>. (b) (1/2)¹⁰⁰ = <b>7.9 × 10⁻³¹</b>. (c) S is a state function, so ΔS depends only on the endpoints; for a reversible isothermal expansion, Q_rev = nRT ln 2 and ΔS = Q_rev/T = R ln 2 for one mole ✓. The free expansion itself has Q = 0 and ΔS_surr = 0, so ΔS_universe = +5.76 J/K: irreversible. Insight: entropy is a count; heat is just one way to realize the same change.</div></details>

<div class="prob"><span class="lv">Hard</span>For N₂ at 300 K (m = 28 × 1.6605 × 10⁻²⁷ kg) find (a) the rms speed from ½mv² = (3/2)k_B T, and (b) the energy needed to warm 1 mol by 10 K at constant volume, using equipartition for a diatomic at room temperature.</div>
<details class="sol"><summary></summary><div>(a) v_rms = √(3k_B T/m) = √(3 × 1.381 × 10⁻²³ × 300/4.649 × 10⁻²⁶) = <b>517 m/s</b>. (b) 5 quadratic terms: C_v = 5R/2 = 20.79 J/mol·K, so Q = 20.79 × 10 = <b>208 J</b>. Insight: the rms speed is about 1.5 times the speed of sound in air (about 340 m/s), which is why sound travels at a speed comparable to the molecules' typical speed. Trap: using 7R/2 (vibration is frozen at 300 K).</div></details>

<div class="prob"><span class="lv">Puzzle</span>A reaction rate doubles when the temperature rises from 25 °C to 35 °C. If the Arrhenius law k ∝ e<sup>−E_a/(RT)</sup> holds, find E_a.</div>
<details class="sol"><summary></summary><div>ln 2 = (E_a/R)(1/T₁ − 1/T₂) with T₁ = 298.15 K, T₂ = 308.15 K: (1/T₁ − 1/T₂) = 1.0885 × 10⁻⁴ K⁻¹. E_a = 8.314 × 0.6931/1.0885 × 10⁻⁴ = <b>52.9 kJ/mol</b>. Check: E_a/RT = 52 900/2479 = 21.3, so a 3.4 % rise in T (10/298) multiplies the exponent by 21.3 × 0.0336 = 0.72, e^0.72 ≈ 2 ✓. Insight: "rate doubles per 10 K" is just a typical E_a of about 50 kJ/mol. Remember the Boltzmann factor is the probability of having energy ≥ E_a.</div></details>

<div class="prob"><span class="lv">Puzzle</span>In a two-level system with gap ΔE = 0.050 eV, population inversion means the upper level holds twice as many particles as the lower. (a) At what temperature does a Boltzmann factor give that ratio? (b) As T → +∞, what happens to the ratio upper/lower? (c) What does (a) mean?</div>
<details class="sol"><summary></summary><div>(a) N₂/N₁ = e<sup>−ΔE/(k_B T)</sup> = 2 requires −ΔE/k_B T = ln 2, T = −ΔE/(k_B ln 2) = −0.050/(8.617 × 10⁻⁵ × 0.6931) = <b>−837 K</b>. (b) As T → +∞ the exponent → 0 so the ratio → <b>1</b> (equal populations; it can never exceed 1 at positive T). (c) A negative absolute temperature is not colder than 0 K: it describes a system with more population in high-energy states than the maximum-entropy state, and it is <b>hotter than any positive temperature</b> (heat flows from it to any normal system). Insight: temperature is defined by 1/T = dS/dE, which goes negative when adding energy lowers the entropy.</div></details>

<div class="prob"><span class="lv">Puzzle</span>Use the Maxwell relation (∂S/∂V)_T = (∂P/∂T)_V and P = Nk_B T/V to find ΔS for an ideal gas expanding isothermally from V₁ to V₂, then compare with the counting argument.</div>
<details class="sol"><summary></summary><div>(∂P/∂T)_V = Nk_B/V. Integrate over volume at fixed T: ΔS = ∫ Nk_B dV/V = <b>Nk_B ln(V₂/V₁)</b>. Counting: each molecule has V₂/V₁ times as many position states, so W multiplies by (V₂/V₁)^N and ΔS = k_B ln[(V₂/V₁)^N] = Nk_B ln(V₂/V₁) ✓. For V₂ = 2V₁ and one mole this is 5.76 J/K. Insight: thermodynamic derivatives and microstate counting are two routes to the same number, a good consistency check.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Using k_B when R is wanted (or the reverse).</b> k_B is per molecule, R per mole: R = N_A k_B.</li>
<li><b>Forgetting the degeneracy factor.</b> Populations need g: N₂/N₁ = (g₂/g₁)e<sup>−ΔE/(k_B T)</sup>.</li>
<li><b>Celsius in the Boltzmann factor.</b> Always kelvin.</li>
<li><b>Vibration counts at 300 K.</b> It does not for N₂ (frozen out), so C_v = 5R/2, not 7R/2.</li>
<li><b>"Entropy = disorder" as a definition.</b> Entropy counts accessible microstates; "disorder" is only an analogy and can mislead.</li>
<li><b>Free expansion has Q = 0 but ΔS > 0.</b> Entropy change is found along a reversible path, not from the actual Q.</li>
<li><b>Negative temperature means colder.</b> It is hotter than +∞.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: why gases spread out (a counting argument) and why the Boltzmann factor says hot systems populate high energies more.</p>
`;
DATA.chal['t23'] = `
<h3>Why it works</h3>
<p><b>The eight scientists are not eight facts; they are one connected machine.</b> Each result constrains the others, so you can rebuild a forgotten fact from the ones you remember. The links:</p>
<ul>
<li><b>Black → Joule.</b> Black separated heat (quantity) from temperature and measured specific and latent heats. Joule then showed that mechanical work turns into exactly that calorimetric heat (about 4.18 J per calorie). Put them together and "work in = heat out" is measurable.</li>
<li><b>Carnot → Kelvin and Clausius.</b> Carnot found the maximum efficiency depends only on the two temperatures. Kelvin used that to define a temperature scale independent of any material (1848), and Clausius extracted from it a new state function, entropy (named 1865), which is how a cycle's reversibility is tested: ΔS = Q_rev/T.</li>
<li><b>Maxwell → Boltzmann.</b> Maxwell's speed distribution (1860) and Boltzmann's statistical view (S = k ln W, 1877) turn the second law into a statement about counting.</li>
<li><b>Boltzmann → Planck.</b> Boltzmann showed that radiation obeys a T⁴ law; Planck (1900) found the spectrum behind it, using quanta E = hf.</li>
</ul>
<p><b>A numerical proof that the pieces fit.</b> Planck's law, once integrated over all wavelengths, gives Stefan–Boltzmann's constant σ = 2π⁵k_B⁴/(15h³c²). With h = 6.626 × 10⁻³⁴ J·s, k_B = 1.381 × 10⁻²³ J/K and c = 2.998 × 10⁸ m/s this evaluates to 5.670 × 10⁻⁸ W/m²K⁴, exactly the measured σ. The same constants give Wien's displacement constant b = hc/(4.965 k_B) = 2.898 × 10⁻³ m·K. So σ and b are not new constants; both are fixed by h and k_B (and c). This is why the State/Nat area 6 (exitance, blackbody, Stefan–Boltzmann, Wien, third law) hangs together.</p>
<p><b>Why radiant exitance is T⁴.</b> M = εσT⁴ has dimensions W/m². Doubling the kelvin temperature multiplies the exitance by 16, and because it is a <i>kelvin</i> law, a change from 300 K to 600 K (about 27 °C to 327 °C) gives 16×, whereas one from 27 °C to 54 °C (300 K to 327 K) gives only (327/300)⁴ = 1.41×. Wien's λ_max ∝ 1/T: doubling T halves the peak wavelength.</p>
<p><b>The logic of the third law.</b> Entropy differences are what thermodynamics measures. The third law (Nernst, refined by Planck) says the entropy of a perfect crystal goes to zero at 0 K, and that 0 K cannot be reached in a finite number of steps. The second statement is the practical one: each cooling step removes a fraction of what is left (proportional to T), so the remaining temperature only approaches zero asymptotically.</p>
<table>
<tr><th>What if ...</th><th>Effect</th></tr>
<tr><td>T doubles (blackbody)</td><td>M × 16; λ_max ÷ 2</td></tr>
<tr><td>emissivity ε halves</td><td>M ÷ 2</td></tr>
<tr><td>area doubles</td><td>total radiated power × 2 (M is per area)</td></tr>
<tr><td>two bodies at 300 K and 600 K exchange heat</td><td>net flux ∝ T_h⁴ − T_c⁴ (not the difference of T)</td></tr>
</table>

<h3>Tools of thought</h3>
<ul>
<li><b>Name-to-equation pairs.</b> Clausius: ΔS = Q_rev/T. Boltzmann: S = k ln W. Planck: E = hf. Carnot: η = 1 − T_c/T_h. Maxwell: speed distribution. Joule: W to heat. Black: q = mcΔT and q = mL. Kelvin: absolute scale.</li>
<li><b>Scaling exponents.</b> T⁴ (exitance), 1/T (Wien), 1/r² (irradiance from a source). Do the ratio first, then the constants.</li>
<li><b>Kelvin everywhere for radiation.</b> Never a Celsius value inside T⁴.</li>
<li><b>Sanity anchors.</b> Room temperature (300 K) black surface: 459 W/m²; Sun (5800 K): peak at 500 nm; Earth at 255 K without greenhouse.</li>
<li><b>Energy per photon versus k_B T.</b> At the Wien peak, hf_peak = 4.97 k_B T regardless of T, a way to link Planck and Boltzmann in one line.</li>
</ul>

<h3>Challenge problems</h3>
<div class="prob"><span class="lv">Core</span>Use Wien's law (λ_max T = 2.898 × 10⁻³ m·K) to find the peak wavelength for a 5800 K star and for a 300 K room-temperature object.</div>
<details class="sol"><summary></summary><div>5800 K: λ = 2.898 × 10⁻³/5800 = 5.0 × 10⁻⁷ m = <b>500 nm</b> (green, in the visible). 300 K: 2.898 × 10⁻³/300 = 9.66 × 10⁻⁶ m = <b>9.7 μm</b> (infrared). Insight: hotter means bluer; ratio of temperatures 5800/300 = 19.3 equals the inverse ratio of wavelengths ✓. Sanity check: people are seen by thermal cameras in the 8 to 14 μm band, consistent.</div></details>

<div class="prob"><span class="lv">Core</span>A black surface (ε = 1) at 300 K has exitance σT⁴ = 459 W/m². What is its exitance at 600 K, and what factor is that?</div>
<details class="sol"><summary></summary><div>Factor = (600/300)⁴ = 16. M = 16 × 459 = <b>7349 W/m²</b> (check: 5.67 × 10⁻⁸ × 600⁴ = 7349 ✓). Trap: treating 27 and 327 (the Celsius values) as temperatures gives (327/27)⁴ ≈ 21 500 instead of 16.</div></details>

<div class="prob"><span class="lv">Hard</span>The Sun has radius 6.957 × 10⁸ m and surface temperature 5772 K (treat it as a blackbody). (a) Find its luminosity. (b) At Earth's distance 1.496 × 10¹¹ m, what irradiance (W/m²) reaches a surface facing the Sun?</div>
<details class="sol"><summary></summary><div>(a) L = 4πR²σT⁴ = 4π(6.957 × 10⁸)² × 5.670 × 10⁻⁸ × 5772⁴ = <b>3.83 × 10²⁶ W</b>. (b) S = L/(4πd²) = 3.83 × 10²⁶/(4π × (1.496 × 10¹¹)²) = <b>1361 W/m²</b>, the solar constant. Insight: the same power spreads over a sphere 215 times larger in radius, so intensity falls by 215² = 46 000. Sanity check: 1361 W/m² agrees with measurements, confirming the blackbody approximation.</div></details>

<div class="prob"><span class="lv">Hard</span>Earth absorbs a fraction 1 − a = 0.70 of the 1361 W/m² and radiates as a blackbody from its whole surface. Find the equilibrium temperature without an atmosphere's greenhouse effect, and explain the factor 4.</div>
<details class="sol"><summary></summary><div>Absorbed power = S(1 − a)πR² (the disc facing the Sun). Emitted = σT⁴ × 4πR² (the whole sphere). Setting equal: T⁴ = S(1 − a)/(4σ), T = (1361 × 0.70/(4 × 5.670 × 10⁻⁸))^(1/4) = <b>254.6 K</b> (−18.6 °C). The factor 4 is the ratio of the sphere's area to its shadow disc. The real mean surface temperature is about 288 K; the gap is the greenhouse effect. Insight: a dimensional or geometry factor (area ratio) does the work, not a new law.</div></details>

<div class="prob"><span class="lv">Puzzle</span>At a blackbody's Wien peak, compute the photon energy hc/λ_max at T = 300 K (λ_max = 9.66 μm) in eV, and compare it with k_B T = 0.02585 eV. Does the ratio depend on T?</div>
<details class="sol"><summary></summary><div>hc = 1.2398 × 10⁻⁶ eV·m. E = 1.2398 × 10⁻⁶/9.66 × 10⁻⁶ = <b>0.128 eV</b>. Ratio = 0.1283/0.02585 = <b>4.96</b>. It does not depend on T: λ_max = b/T means hc/λ_max = (hc/b)T, so the ratio to k_B T is the constant hc/(bk_B) = 4.965. Insight: Wien's law is a statement that the peak photon energy scales with k_B T, which links Planck's h, Boltzmann's k and Wien's displacement law.</div></details>

<div class="prob"><span class="lv">Puzzle</span>A 1500 W kettle (120 V) heats 1.0 kg of water from 20 °C to 100 °C, then boils off 100 g. (a) Find its current and resistance. (b) How long does the heating take (no losses)? (c) How long for the boiling off (L_v = 2.26 MJ/kg)? Relate the two to Black and Joule.</div>
<details class="sol"><summary></summary><div>(a) I = P/V = 1500/120 = <b>12.5 A</b>; R = V²/P = 14 400/1500 = <b>9.6 Ω</b>. (b) Heat = 1.0 × 4184 × 80 = 334.7 kJ; t = 334 720/1500 = <b>223 s</b>. (c) Heat = 0.100 × 2.26 × 10⁶ = 226 kJ; t = 226 000/1500 = <b>151 s</b>. Joule heating (P = I²R, Joule's 1840 law) converts electrical work to heat; Black's two heats (specific and latent) tell you how much heat each step needs. Insight: boiling off just 10 % of the water takes 68 % as long as heating all of it from 20 °C to 100 °C, because latent heat is large. Real kettles lose some heat, so times are lower bounds.</div></details>

<h3>Trap list</h3>
<ul>
<li><b>Mixing up the named laws.</b> Stefan–Boltzmann: T⁴; Wien: 1/T; Kirchhoff: emission equals absorption for each wavelength in equilibrium.</li>
<li><b>Attributing the statements.</b> Clausius: heat does not flow cold to hot spontaneously. Kelvin–Planck: no cyclic engine converts heat from one reservoir entirely into work.</li>
<li><b>Planck versus Boltzmann on S = k ln W.</b> Boltzmann's counting idea; Planck named k_B and wrote the modern form.</li>
<li><b>Carnot used caloric theory.</b> A correct result from a wrong theory of heat.</li>
<li><b>Black versus Joule.</b> Black: latent and specific heat, heat versus temperature. Joule: mechanical equivalent of heat.</li>
<li><b>Applying areas 6 and 7 at a regional.</b> In 2027 they are State/National only, and area 7 is Division C only.</li>
<li><b>Celsius in T⁴ or in ratios.</b> Use kelvin.</li>
</ul>

<h3>Teach-back</h3>
<p>Explain to a friend in 3 sentences: how Black, Joule, Carnot, Clausius, Boltzmann and Planck each added one brick to one wall (heat, work, limits, entropy, counting, quanta).</p>
`;
})();
