/* ===== THERMODYNAMICS — Part 3: enthalpy, engines, history, device design, scoring, safety, applications ===== */

L({id:'t13', t:'Enthalpy, Thermochemistry, Hess’s Law & Gibbs Free Energy (Division C)', tier:'sn', yield:3, min:65, off:'2027 VERIFIED: Division C State/Nat only — enthalpy (with entropy)',
formulas:[
 ['Enthalpy','H = U + PV;  ΔH = ΔU + Δ(PV)'],
 ['At constant P','ΔH = Q_p;  ΔU = Q_v (constant V)'],
 ['Gas reactions','ΔH = ΔU + Δn_g·R·T'],
 ['Hess’s law','ΔH_rxn = Σ ΔH_f°(products) − Σ ΔH_f°(reactants)'],
 ['Bond energies','ΔH ≈ Σ(bonds broken) − Σ(bonds formed)'],
 ['Calorimetry (coffee-cup)','q_rxn = −(m c ΔT + C_cal ΔT)'],
 ['Gibbs free energy','G = H − TS;  ΔG = ΔH − TΔS;  spontaneous if ΔG < 0 (const T, P)'],
 ['Equilibrium','ΔG° = −RT ln K'],
 ['Helmholtz','F = U − TS (constant T, V)']],
html:`
<h2>1. Enthalpy</h2>
<p><b>Enthalpy</b> <code>H = U + PV</code> (coined by <b>Heike Kamerlingh Onnes</b>; Gibbs called it “heat function at constant pressure”) is the natural energy accounting for processes at constant pressure (open to atmosphere): <b>ΔH = Q at constant P</b>. It includes the work needed to “make room” for the system. Extensive state function (kJ or kJ/mol).</p>
<ul><li><b>Exothermic</b> (ΔH &lt; 0): releases heat (combustion, neutralization, freezing, condensation, CaCl₂ dissolving). <b>Endothermic</b> (ΔH &gt; 0): absorbs heat (melting, evaporation, photosynthesis, NH₄NO₃ dissolving — instant cold packs).</li>
<li>Phase-change enthalpies (per mole): water fusion <b>6.01 kJ/mol</b>; vaporization <b>40.7 kJ/mol</b> (at 100 °C); sublimation of ice 51 kJ/mol.</li>
<li>For ideal gases and reactions: ΔH = ΔU + Δn_g R T. For liquids/solids PΔV is tiny, so ΔH ≈ ΔU.</li>
<li><b>Throttling</b> (valve, porous plug): enthalpy stays constant (isenthalpic) — Joule–Thomson; basis of refrigerators, gas liquefaction.</li></ul>
<h2>2. Standard enthalpies &amp; Hess’s law (<span class="muted">Germain Hess, 1840</span>)</h2>
<p>ΔH is a <b>state function</b> — the same for any path, so reactions can be added: <b>Hess’s law</b>. Standard conditions: 1 bar, 298.15 K; <b>ΔH_f°</b> (formation from elements in standard states) of any element in its standard state = 0.</p>
<div class="eq">ΔH_rxn° = Σ n ΔH_f°(products) − Σ m ΔH_f°(reactants)</div>
<table><tr><th>Substance</th><th>ΔH_f° (kJ/mol)</th><th>Substance</th><th>ΔH_f° (kJ/mol)</th></tr>
<tr><td>H₂O(l)</td><td>−285.8</td><td>CO₂(g)</td><td>−393.5</td></tr><tr><td>H₂O(g)</td><td>−241.8</td><td>CH₄(g)</td><td>−74.8</td></tr>
<tr><td>NH₃(g)</td><td>−46.1</td><td>C₂H₅OH(l)</td><td>−277.7</td></tr><tr><td>NaCl(s)</td><td>−411.2</td><td>glucose C₆H₁₂O₆(s)</td><td>−1273</td></tr></table>
<div class="box ex"><b>Worked example</b>CH₄ + 2O₂ → CO₂ + 2H₂O(l): ΔH = [−393.5 + 2(−285.8)] − [−74.8 + 0] = <b>−890.3 kJ/mol</b> (heat of combustion of methane). Burning 16 g (1 mol) CH₄ releases 890 kJ ≈ 212 Cal.<br>Energy content: gasoline ≈ 46 MJ/kg, natural gas 55 MJ/kg, hydrogen 120 MJ/kg, TNT 4.6 MJ/kg, wood 16 MJ/kg, fat 37 kJ/g (9 Cal/g), carbohydrate/protein 17 kJ/g (4 Cal/g).</div>
<h2>3. Calorimetry for ΔH</h2>
<ul><li><b>Coffee-cup calorimeter</b> (constant P): q_rxn = −(m_soln c ΔT + C_cal ΔT) = ΔH (per mole: divide by n).</li><li><b>Bomb calorimeter</b> (constant V): measures ΔU; correct with Δn_gRT.</li><li>Example: 50 mL 1.0 M HCl + 50 mL 1.0 M NaOH (both 22.0 °C) → 28.9 °C. q = 100 g×4.18×6.9 = 2884 J; n = 0.050 mol → ΔH = −57.7 kJ/mol (accepted −55.8).</li></ul>
<h2>4. Gibbs free energy — will it happen?</h2>
<div class="eq">ΔG = ΔH − TΔS        (<b>J. Willard Gibbs</b>, 1876–78)\nΔG &lt; 0 spontaneous · ΔG = 0 equilibrium · ΔG &gt; 0 non-spontaneous</div>
<table><tr><th>ΔH</th><th>ΔS</th><th>Spontaneous?</th></tr><tr><td>−</td><td>+</td><td>always</td></tr><tr><td>+</td><td>−</td><td>never</td></tr><tr><td>−</td><td>−</td><td>only at low T</td></tr><tr><td>+</td><td>+</td><td>only at high T</td></tr></table>
<div class="box ex"><b>Example</b>Ice melting: ΔH = +6010 J/mol, ΔS = +22.0 J/mol·K → crossover T = ΔH/ΔS = 273 K = 0 °C ✓: above 0 °C melting is spontaneous; below, freezing is.</div>
<div class="box filter"><b>Tryout-filter</b>• “Which is larger, ΔH_vap or ΔH_fus for water?” → vap (40.7 vs 6.0). • “Sign of ΔH for condensation?” → negative. • “A hot pack feels hot: endothermic or exothermic?” → exo. • “State function?” → H yes, q and w no. • “ΔH of formation for O₂(g)?” → 0.</div>`});

L({id:'t14', t:'Heat Engines, the Carnot Cycle, Refrigerators & Real Cycles', tier:'core', yield:3, min:75, off:'Written: Carnot cycle, efficiency',
formulas:[
 ['Engine efficiency','η = W/Q_h = 1 − Q_c/Q_h'],
 ['Carnot efficiency','η_C = 1 − T_c/T_h = (T_h − T_c)/T_h  (T in kelvin)'],
 ['Carnot heat ratio','Q_c/Q_h = T_c/T_h'],
 ['Refrigerator COP','COP_R = Q_c/W = T_c/(T_h − T_c) (Carnot max)'],
 ['Heat pump COP','COP_HP = Q_h/W = T_h/(T_h − T_c);  COP_HP = COP_R + 1'],
 ['Otto cycle','η = 1 − 1/r^(γ−1)  (r = compression ratio)'],
 ['Net work (cycle)','W = Q_h − Q_c = area enclosed in PV'],
 ['Entropy of Carnot cycle','Q_h/T_h = Q_c/T_c ⇒ ΔS_cycle = 0']],
html:`
<h2>1. Heat engines</h2>
<p>A <b>heat engine</b> takes heat Q_h from a hot reservoir (T_h), converts part into work W, and <b>must</b> dump the rest Q_c to a cold reservoir (T_c) — required by the second law. Efficiency η = W/Q_h = 1 − Q_c/Q_h &lt; 1.</p>
<div class="box ex"><b>Example</b>Q_h = 1000 J, W = 300 J → η = 30 %, Q_c = 700 J. A power plant burning coal at T_h = 800 K with cooling water at T_c = 300 K: Carnot limit 62.5 %; real ≈ 35–45 %.</div>
<h2>2. The Carnot cycle (<span class="muted">Sadi Carnot, <i>Réflexions sur la puissance motrice du feu</i>, 1824</span>)</h2>
<p>The most efficient possible cycle between two temperatures; fully <b>reversible</b>. Four steps (ideal-gas working substance in a piston):</p>
<svg class="dia" viewBox="0 0 440 250" width="440"><path class="w" d="M50 220 H410 M50 220 V20"/><text x="8" y="18">P</text><text x="412" y="234">V</text>
<path class="w hot" d="M120 50 C170 62 210 80 250 100"/><path class="w" d="M250 100 C290 140 320 165 350 185" stroke="var(--info)"/><path class="w cold" d="M350 185 C300 175 260 162 220 150"/><path class="w" d="M220 150 C180 125 150 90 120 50" stroke="var(--info)"/>
<text x="122" y="42">A</text><text x="254" y="96">B</text><text x="354" y="200">C</text><text x="205" y="168">D</text>
<text x="150" y="64" style="fill:var(--therm)">1 isothermal exp. (T_h)</text><text x="290" y="132" style="fill:var(--info)">2 adiabatic exp.</text><text x="250" y="210" style="fill:var(--circ2)">3 isothermal comp. (T_c)</text><text x="62" y="110" style="fill:var(--info)">4 adiabatic comp.</text></svg>
<ol><li><b>A → B: isothermal expansion at T_h</b> — gas absorbs Q_h from the hot reservoir, does work (ΔU = 0).</li><li><b>B → C: adiabatic expansion</b> — no heat; gas does work and cools from T_h to T_c.</li><li><b>C → D: isothermal compression at T_c</b> — work done on gas; it rejects Q_c to the cold reservoir.</li><li><b>D → A: adiabatic compression</b> — work on gas; heats back to T_h. Cycle closes.</li></ol>
<div class="eq">η_Carnot = 1 − T_c/T_h     (kelvin!)\nQ_c/Q_h = T_c/T_h\nNet work = Q_h − Q_c = area of the loop   ΔU_cycle = 0,  ΔS_cycle = 0</div>
<div class="box key"><b>Consequences</b>• Raise T_h or lower T_c to improve efficiency. • <b>η = 100 % needs T_c = 0 K</b> (impossible: third law). • Efficiency depends <b>only on the two temperatures</b>, not on the working fluid (Carnot's theorem). • Real engines: irreversibility (friction, finite ΔT heat transfer) → η &lt; η_C. • <b>Carnot died of cholera in 1832 aged 36; Clapeyron (1834) rediscovered/graphed his cycle; Kelvin &amp; Clausius built the second law from it.</b></div>
<div class="box ex"><b>Worked examples</b>• Steam engine 500 °C → 30 °C: T_h = 773.15 K, T_c = 303.15 K → η_C = 1 − 0.392 = <b>60.8 %</b>.<br>• An engine absorbs 2000 J at 600 K and rejects heat at 300 K reversibly: W = 2000(1 − 0.5) = 1000 J; Q_c = 1000 J.<br>• “Inventor claims an engine between 400 K and 300 K: takes 1000 J, produces 300 J” → η_C = 25 % → claims 30 % → <b>impossible</b> (violates second law).</div>
<h2>3. Refrigerators, air conditioners &amp; heat pumps</h2>
<p>Run the cycle <b>backward</b>: work W pumps heat Q_c from the cold side to the hot side, dumping Q_h = Q_c + W. Performance is the <b>coefficient of performance</b> (COP), not efficiency — it can be &gt; 1:</p>
<div class="eq">Refrigerator: COP_R = Q_c/W ≤ T_c/(T_h − T_c)\nHeat pump:   COP_HP = Q_h/W ≤ T_h/(T_h − T_c)   = COP_R + 1</div>
<div class="box ex"><b>Example</b>Fridge interior 270 K, kitchen 300 K: COP_max = 270/30 = 9 (real ≈ 2–5). A heat pump heating a house at 293 K from 273 K air: COP_max = 293/20 = 14.7; real 3–4 ⇒ 3–4 kWh of heat per kWh of electricity. The <b>vapor-compression cycle</b>: compressor → condenser (Q_h out) → expansion valve (throttle) → evaporator (Q_c in); refrigerants: CFCs (banned), HFCs, propane, CO₂, ammonia. <b>Kelvin proposed the heat pump in 1852.</b></div>
<h2>4. Real heat-engine cycles</h2>
<table><tr><th>Cycle</th><th>Processes</th><th>Used in</th></tr>
<tr><td><b>Otto</b> (Nikolaus Otto, 1876)</td><td>adiabatic comp. → isochoric heat → adiabatic exp. → isochoric cooling; η = 1 − r^(1−γ)</td><td>gasoline (spark-ignition) engines; r ≈ 8–11 ⇒ η ≈ 56–62 % ideal (real ≈ 25–35 %)</td></tr>
<tr><td><b>Diesel</b> (Rudolf Diesel, 1892/97)</td><td>adiabatic comp. (r 14–25) → isobaric heat → adiabatic exp. → isochoric cooling</td><td>diesel engines; compression-ignition</td></tr>
<tr><td><b>Brayton</b> (Joule)</td><td>adiabatic comp. → isobaric heat → adiabatic exp. → isobaric cooling</td><td>gas turbines, jets</td></tr>
<tr><td><b>Rankine</b> (W. J. M. Rankine)</td><td>pump → boiler → turbine → condenser (water/steam)</td><td>coal/nuclear/solar-thermal power plants</td></tr>
<tr><td><b>Stirling</b> (Rev. Robert Stirling, 1816)</td><td>isothermal exp. → isochoric cool (regenerator) → isothermal comp. → isochoric heat; closed cycle</td><td>external-combustion engines, cryocoolers; theoretically = Carnot with perfect regenerator</td></tr>
<tr><td>Steam engines</td><td>Hero’s aeolipile (1st c. AD) · Papin (1679 digester) · <b>Savery 1698</b> · <b>Newcomen 1712</b> · <b>Watt 1765/1769</b> (separate condenser) · Trevithick high-pressure (1800) · Parsons turbine (1884)</td><td>Industrial Revolution</td></tr></table>
<div class="box filter"><b>Tryout-filter</b>• “Which step of the Carnot cycle rejects heat?” → isothermal compression. • “What is the efficiency of a Carnot engine operating between 500 K and 250 K?” → 50 %. • “Is ΔS of the working fluid zero over a cycle?” → yes (state function). • “If you open the refrigerator door in a closed room, does the room cool?” → no, it warms (W is dissipated as heat).</div>`});

L({id:'t15', t:'History of Thermodynamics: People, Dates & Discoveries', tier:'hist', yield:3, min:55, off:'Written: history of thermodynamics (a required area)',
formulas:[['Order to memorize','Black (1760) → Watt (1765) → Lavoisier (1783) → Rumford (1798) → Carnot (1824) → Joule/Mayer (1840s) → Kelvin (1848) → Clausius (1850/65) → Maxwell (1860) → Boltzmann (1877) → Gibbs (1876) → Planck (1900) → Nernst (1906)']],
html:`
<div class="box unv"><b>Required area</b>“History of thermodynamics” appears in <i>every</i> published Thermodynamics topic list (2018/2019 and the current wiki list) — it’s a <b>guaranteed block of written-test questions</b>. Memorize the table below, then use the flashcard decks and the <a href="#/timeline">timeline</a>.</div>
<h2>1. Essential people (who · when · what)</h2>
<div class="tablewrap"><table><tr><th>Who</th><th>Dates / key year</th><th>Contribution</th><th>Eponym</th></tr>
<tr><td><b>Hero of Alexandria</b></td><td>1st c. AD</td><td>Aeolipile — steam reaction turbine toy</td><td></td></tr>
<tr><td><b>Galileo Galilei</b></td><td>c. 1593</td><td>Thermoscope (early thermometer w/o scale)</td><td></td></tr>
<tr><td><b>Robert Boyle</b></td><td>1662</td><td>P ∝ 1/V at const. T</td><td>Boyle’s law</td></tr>
<tr><td><b>Denis Papin</b></td><td>1679/90</td><td>Steam digester (pressure cooker), piston idea</td><td></td></tr>
<tr><td><b>Guillaume Amontons</b></td><td>1699</td><td>P–T relation; air thermometer; absolute zero idea</td><td>Amontons’ law</td></tr>
<tr><td><b>Thomas Savery / Thomas Newcomen</b></td><td>1698 / 1712</td><td>First steam pumps / atmospheric engine</td><td></td></tr>
<tr><td><b>Isaac Newton</b></td><td>1701</td><td>Law of cooling</td><td>Newton’s law of cooling</td></tr>
<tr><td><b>Daniel Fahrenheit</b></td><td>1714 / 1724</td><td>Mercury thermometer; °F</td><td>°F</td></tr>
<tr><td><b>Anders Celsius</b></td><td>1742</td><td>Centigrade scale (inverted originally)</td><td>°C</td></tr>
<tr><td><b>Joseph Black</b></td><td>1760–65</td><td>Latent heat, specific heat; distinguished heat from temperature</td><td>(calorimetry)</td></tr>
<tr><td><b>James Watt</b></td><td>1765 / 1769 patent</td><td>Separate condenser; rotary steam engine (1781); unit of power</td><td><b>watt</b>, horsepower</td></tr>
<tr><td><b>Antoine Lavoisier</b></td><td>1783–89</td><td>Caloric theory; oxygen; conservation of mass; ice calorimeter with Laplace</td><td></td></tr>
<tr><td><b>Jacques Charles</b></td><td>1787</td><td>V ∝ T (unpublished)</td><td>Charles’s law</td></tr>
<tr><td><b>Benjamin Thompson, Count Rumford</b></td><td>1798</td><td>Cannon-boring: heat from friction → mechanical motion; attacked caloric</td><td></td></tr>
<tr><td><b>Humphry Davy</b></td><td>1799</td><td>Rubbing ice blocks melts them</td><td></td></tr>
<tr><td><b>John Dalton</b></td><td>1801</td><td>Partial pressures</td><td>Dalton’s law</td></tr>
<tr><td><b>Joseph Gay-Lussac</b></td><td>1802 / 1808</td><td>V–T, P–T laws; combining volumes</td><td>Gay-Lussac’s law</td></tr>
<tr><td><b>Amedeo Avogadro</b></td><td>1811</td><td>Equal volumes, equal molecules</td><td>Avogadro’s number</td></tr>
<tr><td><b>Robert Stirling</b></td><td>1816</td><td>Closed hot-air engine</td><td>Stirling engine</td></tr>
<tr><td><b>Dulong &amp; Petit</b></td><td>1819</td><td>Molar heat capacity ≈ 3R</td><td>Dulong–Petit law</td></tr>
<tr><td><b>Joseph Fourier</b></td><td>1822</td><td><i>Analytical Theory of Heat</i>; conduction law</td><td>Fourier’s law</td></tr>
<tr><td><b>Sadi Carnot</b></td><td>1824</td><td><b>Father of thermodynamics</b>; Carnot cycle; maximum efficiency</td><td>Carnot cycle / efficiency</td></tr>
<tr><td><b>Émile Clapeyron</b></td><td>1834</td><td>P–V diagram; ideal gas law; Clausius–Clapeyron</td><td></td></tr>
<tr><td><b>Julius Robert von Mayer</b></td><td>1842</td><td>Mechanical equivalent of heat; C_p − C_v = R; energy conservation</td><td></td></tr>
<tr><td><b>James Prescott Joule</b></td><td>1843–50</td><td>Paddle wheel: mechanical equivalent of heat (4.18 J/cal); Joule heating; Joule–Thomson</td><td><b>joule</b></td></tr>
<tr><td><b>Hermann von Helmholtz</b></td><td>1847</td><td><i>On the Conservation of Force</i>: first law, general</td><td>Helmholtz energy</td></tr>
<tr><td><b>William Thomson, Lord Kelvin</b></td><td>1848 / 1851</td><td>Absolute temperature scale; Kelvin–Planck statement; heat pump (1852)</td><td><b>kelvin</b></td></tr>
<tr><td><b>Rudolf Clausius</b></td><td>1850 / 1865</td><td>Second law (Clausius statement); <b>coined “entropy”</b>; kinetic theory mean free path</td><td>Clausius–Clapeyron</td></tr>
<tr><td><b>William Rankine</b></td><td>1850s</td><td>Steam engine theory (Rankine cycle), Rankine scale 1859; coined “potential energy”</td><td>°R, Rankine cycle</td></tr>
<tr><td><b>James Clerk Maxwell</b></td><td>1859–60</td><td>Distribution of molecular speeds; Maxwell’s demon (1867); Maxwell relations</td><td>Maxwell–Boltzmann</td></tr>
<tr><td><b>Gustav Kirchhoff</b></td><td>1859</td><td>Thermal radiation law; blackbody concept</td><td>Kirchhoff’s law (radiation)</td></tr>
<tr><td><b>Johannes van der Waals</b></td><td>1873</td><td>Real gas equation</td><td>van der Waals</td></tr>
<tr><td><b>Josiah Willard Gibbs</b></td><td>1876–78</td><td>Chemical thermodynamics: free energy, phase rule, statistical ensembles</td><td>Gibbs free energy</td></tr>
<tr><td><b>Ludwig Boltzmann</b></td><td>1872 (H-theorem); 1877</td><td>Statistical mechanics; <b>S = k ln W</b>; Stefan–Boltzmann law (1884)</td><td>Boltzmann constant k_B</td></tr>
<tr><td><b>Josef Stefan</b></td><td>1879</td><td>P ∝ T⁴ (empirical)</td><td>Stefan–Boltzmann</td></tr>
<tr><td><b>James Dewar</b></td><td>1892</td><td>Vacuum flask; liquefied hydrogen (1898)</td><td>Dewar flask</td></tr>
<tr><td><b>Wilhelm Wien</b></td><td>1893</td><td>Displacement law (peak λ ∝ 1/T)</td><td>Wien’s law</td></tr>
<tr><td><b>Max Planck</b></td><td>1900</td><td>Blackbody law with quanta E = hf; statement of 3rd law</td><td>Planck’s constant h</td></tr>
<tr><td><b>Albert Einstein</b></td><td>1905 / 1907</td><td>Brownian motion; specific heat of solids (quantum)</td><td></td></tr>
<tr><td><b>Walther Nernst</b></td><td>1906–12</td><td><b>Third law</b> (heat theorem)</td><td>Nernst</td></tr>
<tr><td><b>Constantin Carathéodory</b></td><td>1909</td><td>Axiomatic thermodynamics</td><td></td></tr>
<tr><td><b>Ralph Fowler</b></td><td>c. 1931</td><td>Named the <b>zeroth law</b></td><td></td></tr>
<tr><td><b>Lars Onsager / Ilya Prigogine</b></td><td>1931 / 1960s–70s</td><td>Non-equilibrium thermodynamics (Nobel 1968/1977)</td><td></td></tr></table></div>
<div class="box hist"><b>Story beats that become questions</b>• <b>Caloric → kinetic</b>: Lavoisier’s fluid vs Rumford/Davy/Joule’s motion. • <b>Carnot used caloric theory yet found the right answer</b>. • <b>Four laws named out of order</b> (0th named last). • <b>Kelvin</b> = absolute scale (1848). • <b>Clausius</b> named entropy (1865), <b>Boltzmann</b> explained it (1877), <b>Planck</b> gave k_B and h. • <b>Watt</b> improved Newcomen’s engine; his name is the power unit. • <b>Joule</b>: honeymoon-waterfall anecdote (measuring water T at top/bottom of a fall); the unit of energy.</div>`});

L({id:'t16', t:'The Insulation Challenge: Device Specs, Materials & Design (Verified through 2019)', tier:'hw', yield:3, min:90, off:'Device: construction parameters (2018/2019 verified; 2027 CHANGED)',
formulas:[
 ['Retention goal','Minimize K = G_total/C_total;  T_f = T_r + (T₀ − T_r)e^(−Kt)'],
 ['Conduction path','P = kAΔT/L (series layers: add R)'],
 ['Top opening','A_hole = π(0.75 cm)² ≈ 1.77 cm² for a 1.5 cm hole (2018 spec)'],
 ['Water thermal mass','C = m·c = 100 g × 4.184 = 418 J/K (per 100 mL)'],
 ['Device thermal mass','C_dev = Σ m·c (warming the insulation steals heat!)']],
html:`
<div class="box unv"><b>STATUS: ⚠️ UNVERIFIED FOR 2027</b><br>The official 2027 Thermodynamics page says teams “construct a device … designed to <b>collect</b> heat” — and a community summary notes the <b>device task changed for 2027</b> vs the 2018/2019 “insulate a beaker of hot water” task. The 2027 rules PDF is only distributed via an email-request form on soinc.org (Div C: <code>soinc.org/form/2027-rules-c</code>), so <b>I could not read the real 2027 device rules</b>. Everything below is the <b>last verified rules set (2018 and 2019 Division C)</b>, from the NMT 2019 workshop slides and the Michigan 2018 overview. Use it as <b>physics training that transfers</b> to any heat-retaining / heat-managing device, then <b>download the 2027 rules and update this site's Rules page</b> (Rules → “Paste your 2027 Thermo rules”).</div>
<h2>1. The classic task (2018–2019 Div C)</h2>
<ul><li><b>Goal:</b> an insulating device that retains the heat of hot water in a <b>250 mL beaker</b> as well as possible during a cooling time.</li>
<li><b>Size:</b> the whole device must fit in a <b>15 cm cube</b> (Div C; 20 cm for Div B). <b>Two identical, unaltered, standard 250 mL beakers</b> (glass or plastic; height ≈ 1.4× diameter): one goes inside the device, the other outside as the uninsulated <b>control</b>.</li>
<li><b>Access for the temperature probe:</b> a hole in the top, <b>diameter 1.5 cm</b>, the beaker top less than <b>2.5 cm</b> below the hole (2018 spec); 2019 language: “may be partially obstructed if a measuring device can enter.”</li>
<li><b>Prohibited:</b> electrical components, chemical reactions/heat sources, energy sources; (2018 list) fiberglass, asbestos, mineral wool. Must support its own weight + the water. Must be <b>easy to assemble/disassemble</b> (inspection after the event).</li>
<li><b>Competition (2019, Div C):</b> hot water <b>75–125 mL (25 mL steps)</b> at about <b>60–75 °C</b> (2018: 60–90 °C, 50–150 mL); cooling time <b>20–30 min</b> (1-min steps; 2018: 20–40 min); prediction of final T; optional ice-water adjustment (2018 bonus); written test during the wait. Impound required; eye protection required.</li></ul>
<h2>2. Physics of where the heat goes</h2>
<p>For a 100 g water sample (C = 418 J/K) at 70 °C in a 22 °C room a bare beaker loses ≈ 8–15 W initially; the goal is to cut that by 3–10×. Typical loss partition for a <i>poorly</i> covered design: ~40–50 % <b>top opening</b> (evaporation + convection + radiation out of the hole), 25–35 % <b>sides</b> (conduction/convection/radiation), 10–20 % <b>bottom</b> contact, remainder = warming the insulation itself.</p>
<div class="box key"><b>The eight design rules</b>
<ol><li><b>Kill the top first.</b> Keep the hole only as big as the probe (1.5 cm); make the probe fit snugly; line the collar with low-k material; the air column between water and hole should be short and still; keep the air above the water <b>humid and stagnant</b> (evaporation: 1 g ≈ 2.3 kJ!).</li>
<li><b>Trap still air.</b> Use foam, fibers, sealed cells. Gaps wider than ≈ 1–1.5 cm allow convection — fill them.</li>
<li><b>Add an IR radiation shield.</b> Aluminum foil / metalized film facing an air gap (low ε ≈ 0.05) — one or two layers inside the insulation.</li>
<li><b>Minimize thermal mass of the device’s inner layers.</b> Heavy/dense materials near the beaker soak up heat: C_dev = mc. Use light foam (EPS, aerogel) next to the glass; the heat that warms the inner wall is lost from the water.</li>
<li><b>Avoid thermal bridges.</b> No metal fasteners, tape strips or supports through the insulation; use small-area, low-k spacers (foam, cork, balsa) under the beaker.</li>
<li><b>Thick, uniform walls.</b> Maximize thickness within the 15 cm cube: the beaker is ≈ 7 cm wide ⇒ up to ≈ 3.5–4 cm of insulation per side and ≈ 3–4 cm under it.</li>
<li><b>Seal the seams.</b> Air leaks are convection bypass. Chamfer/overlap joints; foil tape (check adhesive at 70 °C).</li>
<li><b>Design for inspection.</b> Quick assemble/disassemble; label; photos; no glue on the beaker.</li></ol></div>
<h2>3. Material choices</h2>
<table><tr><th>Material</th><th>k (W/m·K)</th><th>Notes</th></tr>
<tr><td>Silica aerogel blanket</td><td>0.015–0.02</td><td>Best k; expensive; dusty (irritant) — wear mask; compressible</td></tr>
<tr><td>Polyurethane / polyisocyanurate foam</td><td>0.022–0.028</td><td>Foil-faced polyiso boards (insulation boards) — great; cut with a hot wire/knife</td></tr>
<tr><td>Extruded/expanded polystyrene (XPS/EPS)</td><td>0.029–0.040</td><td>Cheap, easy to carve; melts ≈ 100 °C locally, dissolves in some glues/solvents (acetone, some spray adhesives)</td></tr>
<tr><td>Fiberglass / mineral wool</td><td>0.033–0.045</td><td><b>Prohibited in the 2018 rules</b> (check 2027)</td></tr>
<tr><td>Wool felt, cotton batting, cellulose, down</td><td>0.035–0.045</td><td>Good when dry and lofted; <b>moisture ruins them</b> (water k = 0.6)</td></tr>
<tr><td>Cork, balsa</td><td>0.04–0.06</td><td>Good rigid spacers</td></tr>
<tr><td>Loose fill: vermiculite, perlite, sawdust</td><td>0.05–0.08</td><td>Settles; heavy; good gap filler</td></tr>
<tr><td>Bubble wrap, metalized film (emergency blanket), foil</td><td>—</td><td>Reduce radiation; need an air gap</td></tr>
<tr><td>Cardboard, corrugated</td><td>0.05–0.07</td><td>Shell; structure</td></tr>
<tr><td>Vacuum/evacuated panels</td><td>≈ 0.004–0.008</td><td>Likely disallowed / impractical</td></tr></table>
<div class="box ex"><b>Numbers to feel</b>Bare open 250 mL beaker, 100 mL water, 70 → ≈ 42 °C in 25 min in a 22 °C room: K = (1/25)ln(48/20) ≈ <b>0.035 min⁻¹</b>. A good insulated build reaches K ≈ 0.006–0.012 (T_f ≈ 61–66 °C). <i>Illustrative only — your measurements decide.</i> In 2019 scoring, HS = 20×(lowest k ÷ your k): halving your K roughly doubles your HS relative to the field.</div>
<h2>4. Build &amp; test protocol (do this 5+ times)</h2>
<ol><li>Fix variables: water volume (75/100/125 mL), T₀ (hot pot or kettle, same thermometer), room T logged.</li><li>Run the <b>control beaker</b> and the device at the same time (shows ambient effects).</li><li>Log T every minute for 30 min (thermocouple or digital probe). Fit K (see cooling lesson).</li><li>Change <b>one</b> thing per iteration (hole size, foil, gap fill). Keep a build log + photos — it becomes part of your “visual documentation” and notes.</li><li>Stress test: hold the device, pour water, insert/remove beakers 10× quickly. Disassembly test.</li><li>Dry-out: condensation soaks foam — dry or seal between runs.</li></ol>
<div class="box warn"><b>Common failure modes</b>Glue melting at 70–80 °C (hot-melt glue softens ≈ 70 °C; use silicone, foil tape, pins, or pressure fits) · cracked foam lid · insulation too tight against the beaker (heat bridge, can't remove) · beaker rim heat-leak · probe hole bigger than needed · paper/wood soaking steam · oversize device (DQ).</div>`});

L({id:'t17', t:'Heat-Collection Devices (2027 “collect heat” wording) — Principles & Prep Plan', tier:'xtra', yield:2, min:50, off:'⚠️ UNVERIFIED: 2027 device task wording only',
formulas:[
 ['Energy gained','Q = m·c·ΔT (water) over the collection period'],
 ['Collector efficiency','η = Q_useful/(G·A·t) ;  Hottel–Whillier: Q_u = A[F_R(τα)G − F_R·U_L·(T_in − T_a)]'],
 ['Absorbed solar','G_abs = α·τ·G·A (α absorptivity, τ glazing transmittance)'],
 ['Steady-state hot plate','T_stag = T_a + (τα)G/U_L'],
 ['Losses','U_L = U_top + U_bottom + U_edge (W/m²K)'],
 ['Time to heat','t = mcΔT / P_absorbed']],
html:`
<div class="box unv"><b>⚠️ READ THIS FIRST — what I know and what I don't</b><br>• <b>Known (official soinc.org page, 2027 season):</b> “Teams will construct a device prior to the tournament <b>designed to collect heat</b> and complete a written test on thermodynamic concepts.” Thermodynamics is back on the 2027 Division B and C event lists. Practice tests are listed “coming soon.”<br>• <b>Reported by one community summary:</b> the device task <b>changed</b> for 2027 from the old “insulate a 250 mL beaker” design.<br>• <b>NOT known to me:</b> what heat <i>source</i> the collector uses (sun/lamp/hot object/other), what’s measured (temperature rise? energy absorbed? time?), size limits, materials rules, scoring formulas, or ranges. I refuse to invent them. <b>Do this today:</b> request the free 2027 Div C rules PDF (email form on <code>soinc.org/rules-2027</code>, opens since Sept 8, 2026), open the Thermodynamics section, and use the <b>“Paste 2027 rules”</b> box on this site’s Rules page so the site can adapt the syllabus; also check the soinc.org Rules Corrections page and the scioly.org forums for clarifications.</div>
<h2>Physics you can already master (applies to any “collect heat” design)</h2>
<h3>1. Energy bookkeeping</h3>
<p>A collector absorbs incoming energy, then <b>stores</b> some (raising the temperature of a working fluid or mass) and <b>loses</b> the rest back to the surroundings. Net gain = absorbed − losses. Collection is <b>the opposite design problem to insulation in one way</b> (you want energy <i>in</i>) and <b>the same in another</b> (you want losses <i>out</i> kept small once it is hot).</p>
<h3>2. Absorb more</h3>
<ul><li><b>High absorptivity α</b> for the source’s wavelengths: flat black (matte) paint or soot α ≈ 0.95 for sunlight/lamp light; <b>selective surfaces</b> (black chrome, TiNOx, black nickel) absorb well but emit poorly in the IR.</li><li><b>Angle</b>: normal incidence maximizes irradiance (cos θ law). Tilt toward the source.</li><li><b>Concentrate</b>: reflectors/foil/lenses raise irradiance G but see the rules about the source/size.</li><li><b>Glazing</b> (glass/clear film) transmits visible (τ ≈ 0.85–0.92) but blocks long-wave IR re-emission → the <b>greenhouse effect</b>; also suppresses convection over the absorber.</li></ul>
<h3>3. Lose less</h3>
<ul><li>Insulate the back and edges (foam, air gap + foil).</li><li>Double glaze with a ≈ 1 cm air gap (more = convection).</li><li>Reduce the hot surface’s radiation with a low-ε coating (if allowed).</li><li>Keep hot fluid pipes short; avoid thermal bridges.</li></ul>
<h3>4. Store / measure</h3>
<ul><li>Water has the highest useful c (4.18 J/g·K) — <i>more mass ⇒ slower temperature rise but more stored energy</i>. If the score rewards ΔT of a fixed mass vs stored energy vs speed, the optimum mass changes. Do the math both ways.</li><li>Stagnation temperature T_stag = T_a + (τα)G/U_L — the <b>highest</b> temperature without any heat removal. Lowering U_L raises it.</li><li>Thermometer placement (in fluid, not touching the absorber); thermal lag.</li></ul>
<div class="box ex"><b>Sample estimate</b>A 10 cm × 10 cm black absorber under glass in a 1000 W/m² lamp-equivalent: absorbed ≈ 0.85×0.9×1000×0.01 = 7.7 W. Heating 50 g of water by 10 K needs 2092 J → ideal time 272 s; with 30 % losses ≈ 390 s.</div>
<h2>Prep plan while we wait for the rules</h2>
<ol><li><b>Master every written-test lesson</b> in this site (the written test is ≈ 45 % of the score historically and is independent of the device).</li><li>Build <b>two prototypes</b> from the principles above: a <b>box collector</b> (black absorber, glazing, insulated box) and a <b>retainer</b> (your best insulation design). One of them is almost surely relevant.</li><li>Practice <b>data collection, curve fitting and predictions</b> — “temperature-prediction/graph scoring” was always part of this event, and Newton’s law + collector models transfer.</li><li>When you get the rules, tell me (paste them) and I’ll add a <b>verified</b> device lesson + calculators.</li></ol>`});

L({id:'t18', t:'Data, Graphs, Predictions & Scoring Strategy (2018/2019 verified rules)', tier:'hw', yield:3, min:55, off:'Scoring: plot score, prediction score, heat score (2019 formulas)',
formulas:[
 ['2019 Test score','TS = 45 × (team test points ÷ highest team test points)'],
 ['2019 Chart score','CS = 0–10 (see rubric below)'],
 ['2019 Heat score','HS = 20 × (lowest k ÷ team k)'],
 ['2019 Prediction score','PS = 25 − 2.5 × |predicted T_f − actual T_f|  (min 0)'],
 ['Total (2019)','Score = TS + CS + HS + PS = 100'],
 ['Penalties (2019)','competition violation: PS×0.9, k×1.1 · construction violation corrected/missed impound: PS×0.7, k×1.4 · unsafe/non-conforming: PS=0, HS=0'],
 ['Tiebreakers (2019)','1) Test score 2) Prediction score 3) Heat score'],
 ['2018 (Michigan)','Written 45 + Plot 10 + Prediction 25 + Retention 15 + Ice bonus 5 (max 5)']],
html:`
<div class="box unv"><b>Verified through 2019; unverified for 2027</b>Formulas below come from the NMT 2019 teacher workshop slides (Division B/C) and the Michigan 2018 event overview. Expect the 2027 rubric to differ — use this as a model of <i>how these events score</i> (accuracy of prediction, quality of data, performance of device, written test).</div>
<h2>1. The score pie (2019 Division C)</h2>
<table><tr><th>Component</th><th>Points</th><th>How</th></tr>
<tr><td><b>Written test (TS)</b></td><td>45</td><td>scaled to the best team’s test score</td></tr>
<tr><td><b>Charts / plots (CS)</b></td><td>10</td><td>submitted before competition</td></tr>
<tr><td><b>Heat score (HS)</b></td><td>20</td><td>device quality via cooling constant k (lowest k in field gets 20)</td></tr>
<tr><td><b>Prediction score (PS)</b></td><td>25</td><td>2.5 points lost per °C of prediction error</td></tr></table>
<div class="box key"><b>Big lesson</b>The <b>prediction</b> (25) is worth more than the device’s performance (20), and the written test (45) more than both. A mediocre device with a great prediction + a strong test beats a great device with a bad prediction. <b>Predict within ±1 °C</b> → 22.5 pts; ±4 °C → 15; ±10 °C → 0.</div>
<h2>2. Chart score rubric (10 points, 2019)</h2>
<table><tr><th>Item</th><th>Pts</th><th>What graders check</th></tr>
<tr><td>Data range</td><td>2</td><td>data spans at least one of the <b>variable ranges</b> in the event parameters (2019 Div C: water volume 75–125 mL in 25 mL steps; cooling time 20–30 min in 1-min steps)</td></tr>
<tr><td>Number of data points</td><td>2</td><td>at least <b>10 data points</b> per series</td></tr>
<tr><td>Labeling</td><td>2</td><td><b>title, team name, axis labels with units</b></td></tr>
<tr><td>Multiple representations</td><td>0.5 each, max 2</td><td>distinct graphs/tables (not identical)</td></tr>
<tr><td>Visual documentation</td><td>2</td><td>labeled device picture or diagram</td></tr></table>
<p><b>Maximum 4 plots</b> are accepted for scoring (2018 and 2019). <b>Suggested set:</b> (1) T vs time for 75 mL, 100 mL, 125 mL on one axis (3 series, ≥ 10 points each, 20–30 min); (2) ln(T − T_room) vs t (linearized, shows K); (3) K vs water volume with a fitted curve; (4) final temperature vs starting temperature (for a fixed time) or prediction table; plus a labeled photo/diagram. Use one plot/tab per task.</p>
<h2>3. Cooling constant k and the Heat Score (2019)</h2>
<div class="eq">K (or k) = (1/t)·ln[(T₀ − T_r)/(T_f − T_r)]        ← lower is better\nHS = 20 × (k_lowest / k_team)</div>
<div class="box ex"><b>Worked example</b>Team A: T₀ = 70.0, T_f = 62.0, T_r = 22.0, t = 25 → k = (1/25)ln(48/40) = 0.00729. Field best k = 0.00600 → HS = 20×0.00600/0.00729 = <b>16.5</b>. The prediction: you predicted 63.5, actual 62.0 → |error| 1.5 → PS = 25 − 3.75 = <b>21.25</b>.</div>
<h2>4. Predicting T_f</h2>
<p>At the event you know V, T₀, t, room T. Use the K(V) relationship you measured, apply Newton’s law, then <b>adjust</b> for known biases (e.g., if your model over-predicts at T₀ &gt; 75 °C, use a corrected K there). Keep a <b>prediction table</b> in your binder: rows = T₀ (55–80 °C in 1 °C steps) for each V and t; columns = T_f at room T 20/22/24 °C. Interpolate on-site in seconds.</p>
<h2>5. 2018 rules (Michigan overview) — for comparison</h2>
<ul><li>Total 100: written 45, device demo 55: plot 10, prediction 25, heat retention 15, ice bonus 5.</li><li>Heat retention based on internal vs external beaker temperature (ratio/difference) after the cooling period.</li><li><b>Ice water bonus:</b> up to 50 mL in 10 mL steps added to the internal beaker <b>before</b> the test lets you lower the start temperature — a risky strategy (more cooling of the water!) but rewarded with up to 5 points.</li><li>Written topics (“at least five questions from each area”): temperature scales/units; conductivity, capacity, specific heat, latent heat, phases, entropy, enthalpy; laws/processes (Carnot, efficiency, adiabatic, isothermal); history.</li></ul>
<p>Use the <a href="#/tools/score">Thermo Score Calculator</a> and the <a href="#/tools/cooling">Cooling Lab</a>.</p>
<div class="box filter"><b>Tryout-filter</b>• “Team’s k is twice the best k → HS?” → 10. • “Prediction off by 6 °C?” → 25 − 15 = 10. • “Which gets a construction-violation penalty: PS multiplier?” → ×0.7 with k ×1.4. • “Plots maximum?” → 4.</div>`});

L({id:'t19', t:'Lab Skills, Measurement & Safety (Thermodynamics)', tier:'hw', yield:3, min:40, off:'Safety & hands-on skills; eye protection required (2019)',
formulas:[
 ['Scald risk','Adult skin: severe burn in ~5 s at 60 °C, ~1–2 s at 70 °C (time falls exponentially with T)'],
 ['Boiling point vs altitude','T_b ≈ 100 − 0.0034·h(m) °C (≈ −1 °C per 300 m)'],
 ['Thermometer immersion','Fully immerse the sensing portion; don’t touch walls/bottom'],
 ['Glass thermal shock','ΔT limit: borosilicate ≈ 160–170 K; soda-lime ≈ 40–60 K']],
html:`
<div class="box unv"><b>Rules note (2019)</b>Event parameters listed <b>impound</b> and <b>required eye protection</b>. Always check the current rules for safety requirements (goggles, closed-toe shoes, long hair tied back).</div>
<h2>1. Hot water &amp; steam</h2>
<ul><li>Water at 60–90 °C causes serious scalds in seconds. Use tongs/heat-resistant gloves; pour away from the body; work on stable, dry surfaces; never carry open beakers of hot water while running.</li><li><b>Steam burns</b> are worse: releases L_v = 2.26 MJ/kg on your skin.</li><li>Glass beakers: check for cracks/chips; <b>thermal shock</b> — don't pour boiling water into a cold or chilled beaker (borosilicate ΔT ≈ 160 K tolerance; ordinary glass far less).</li><li>Keep cords/electric heaters away from water; use GFCI outlets.</li></ul>
<h2>2. Measuring temperature</h2>
<ol><li>Check calibration: ice-bath (0 °C) and boiling (correct for elevation &amp; weather) — a 0.5 °C error directly shifts predictions.</li><li>Thermocouple: sheath in liquid, tip in the middle, not touching glass; keep the lead from conducting heat out the hole (use a thin lead).</li><li>Let readings settle; note the response time (τ ≈ 1–10 s).</li><li>Room temperature: away from the device, shielded from the sun and vents, at bench height.</li><li>Record: time, T, <b>units</b>, comments (drafts, door opened).</li></ol>
<h2>3. Materials handling</h2>
<ul><li><b>Foam/fibers/aerogel:</b> dust irritates skin/lungs → wear an N95 and gloves when cutting; cut in ventilated area; hot-wire cutting of EPS/XPS can release fumes (ventilate; don't burn polyurethane — toxic).</li><li><b>Adhesives:</b> spray adhesives can dissolve EPS; ventilate; hot glue guns burn (~150–190 °C).</li><li><b>Tools:</b> X-Acto knives and saws — cut away from the body; use cutting mats.</li><li><b>Cryogens &amp; dry ice</b> (if ever used): insulated gloves, ventilation, never sealed containers.</li><li><b>Heat lamps/hot plates</b> (if the device task uses them): heat surfaces stay hot long after off; flammables away; don't touch bulbs; eye protection for UV/IR sources.</li></ul>
<h2>4. Tournament logistics</h2>
<ul><li><b>Impound</b> check-in: device inspected for size (15 cm cube gauge), beaker fit, prohibited materials; fix problems before the event.</li><li>Bring: device, extra beakers? (only if allowed), thermometers/thermocouple (if allowed), <b>3-ring binder with hole-punched pages</b> (required format), <b>two calculators</b> (2019: “standalone calculators of any type”; Circuit Lab says two Class III — check your year), goggles, graphs printed, a written prediction table, pens, tape, spare parts, tools for last-minute fixes, towel.</li><li>Practice the <b>timeline</b>: setup ≈ 5 min, pour, insert, start the clock, record the initial T, predict, write test, read the final T.</li></ul>
<div class="box filter"><b>Tryout-filter</b>Safety Qs: “What PPE is required?” (eye protection). “Why can steam burn worse than boiling water?” (latent heat). “Why not use metal fasteners in an insulated device?” (thermal bridge).</div>`});

L({id:'t20', t:'Thermal Properties & Applications: Expansion, Refrigeration, Buildings, Weather', tier:'core', yield:2, min:60, off:'Written: applications of thermodynamics / heat transfer',
formulas:[
 ['Linear expansion','ΔL = α·L₀·ΔT;  α: steel 12, Al 23, Cu 17, glass 9, Pyrex 3.3 (×10⁻⁶ /K)'],
 ['Area / volume','ΔA = 2αA₀ΔT;  ΔV = βV₀ΔT, β ≈ 3α (solids); water β = 207×10⁻⁶ /K at 20 °C'],
 ['Thermal stress','σ = E·α·ΔT (fully constrained)'],
 ['Wind chill (qualitative)','Forced convection raises h ⇒ faster skin heat loss'],
 ['Human heat balance','Metabolic ≈ 100 W at rest; 60 % loss by radiation+convection, evaporation rest'],
 ['Dew point','T at which saturation vapor pressure = actual vapor pressure'],
 ['Latent-heat applications','Sweat cooling; ice pack; steam heating; refrigerant evaporators']],
html:`
<h2>1. Thermal expansion</h2>
<p>Most materials expand when heated (atoms vibrate with larger amplitude → average spacing grows). <b>Linear</b>: ΔL = αL₀ΔT. Applications/problems: <b>expansion joints</b> in bridges/rails/sidewalks, <b>bimetallic strips</b> (thermostats, old circuit breakers), <b>thermometers</b>, rivets/shrink-fits, gaps in power lines (sag), glassware (Pyrex’s low α resists thermal shock), dental fillings, concrete-steel matching (α ≈ equal).</p>
<div class="box ex"><b>Example</b>A 100 m steel rail (α = 12×10⁻⁶) rises 40 K: ΔL = 12×10⁻⁶×100×40 = <b>0.048 m</b> = 4.8 cm. Fully constrained, stress = E α ΔT = 200 GPa×12×10⁻⁶×40 = 96 MPa.</div>
<p><b>Water anomaly:</b> from 0 to 4 °C water <i>contracts</i> — densest at 3.98 °C; ice is less dense (floats) → lakes freeze from the top, pipes burst.</p>
<h2>2. Refrigeration &amp; air conditioning</h2>
<p>See Carnot/COP lesson. Latent heat of the refrigerant’s evaporation pulls heat from inside; condensation outside dumps it. “Ton” of AC = 12 000 BTU/h. <b>SEER/EER</b> = BTU/h of cooling per W of input.</p>
<h2>3. Buildings &amp; insulation</h2>
<p>Heat loss through walls = A·ΔT/R (see conduction lesson); windows: double/triple glazing with low-e coatings and argon; attic insulation R-38 to R-60; <b>air leakage</b> (infiltration) often exceeds conduction; thermal mass for passive solar; vapor barriers; <b>degree-days</b> for energy estimates.</p>
<h2>4. Human thermoregulation</h2>
<p>Core temperature 37 °C; mechanisms: <b>radiation</b> (~50 %), <b>convection</b> (~25 %), <b>evaporation</b> (sweat; only mechanism above skin temperature), conduction (small). Wind chill: moving air strips the boundary layer → higher h. Hypothermia/hyperthermia. Insulation layers (down, fleece) trap air. <b>Space blanket</b> = low-ε radiation reflector.</p>
<h2>5. Weather &amp; climate</h2>
<ul><li><b>Convection</b> cells, sea breezes (land heats faster — lower c), lapse rate, adiabatic cooling of rising air (≈ 9.8 K/km dry), cloud formation releasing L_v (hurricane fuel).</li><li><b>Humidity</b>, dew point, frost; <b>greenhouse effect</b> (see radiation).</li><li><b>Urban heat island</b>: dark surfaces, less evaporation.</li></ul>
<h2>6. Energy systems</h2>
<p>Power plants (Rankine: coal/gas/nuclear/solar-thermal), geothermal (T_h ≈ 150–300 °C, low η), solar thermal collectors/hot water, thermoelectrics (Seebeck/Peltier), combined-cycle (gas turbine + steam) ≈ 60 %, cogeneration (CHP), internal-combustion engines (Otto/Diesel), fuel cells (electrochemical — not Carnot limited), heat pipes, thermal energy storage (phase-change materials: paraffin, ice, salt hydrates), <b>vacuum flask (Dewar, 1892)</b> — double-walled, evacuated, silvered.</p>
<div class="box filter"><b>Tryout-filter</b>• “Why do metal lids loosen under hot water?” → the metal lid expands more than glass (higher α). • “Which expands more: a hole or the plate?” → the hole expands as if it were the material (hole grows). • “Why does a sea breeze blow by day?” → land has lower c, heats faster, air rises over land, cool sea air flows in.</div>`});

L({id:'t21', t:'Thermodynamics Test Strategy, Binder & Written-Test Map', tier:'core', yield:2, min:30, off:'2027 VERIFIED: 3 Q per area · 3-ring binder notes · two Class III calculators (see t23)',
formulas:[
 ['Binder (2018/2019)','Notes must be in a <b>hole-punched, secured 3-ring binder</b> of any size'],
 ['Calculators','2019: “two standalone calculators of any type” (Circuit Lab 2026 says Class III; confirm your year)'],
 ['Written areas (2019)','History · temperature & conversions · phase transitions/latent heat · heat transfer/thermal conductivity/heat capacity · thermodynamic laws & processes · (Div C) radiant exitance, entropy, enthalpy']],
html:`
<h2>1. The written-test map (assume all of these)</h2>
<table><tr><th>Area</th><th>Lessons</th><th>Typical question types</th></tr>
<tr><td>Temperature, scales, units, heat definitions</td><td>t01, t02</td><td>conversions, unit conversion (BTU, cal, Cal, kWh), definitions of heat vs temperature</td></tr>
<tr><td>Phases &amp; latent heat</td><td>t04</td><td>heating-curve total, mixing ice/water, phase diagram reading</td></tr>
<tr><td>Heat transfer &amp; thermal properties</td><td>t03, t05, t06, t20</td><td>Q = mcΔT, calorimetry, Fourier’s law, R-value stacks, radiation T⁴, convection vs conduction identification</td></tr>
<tr><td>Laws &amp; processes</td><td>t09, t10, t11, t14</td><td>first-law signs, PV diagrams, isothermal/adiabatic/isobaric/isochoric, Carnot, COP, gas laws</td></tr>
<tr><td>Div C extras: radiant exitance, entropy, enthalpy</td><td>t07, t12, t13</td><td>M = εσT⁴, Wien, ΔS calcs, Hess’s law, ΔG</td></tr>
<tr><td>History</td><td>t15</td><td>who-did-what, dates, units, caloric vs kinetic</td></tr>
<tr><td>Device &amp; data (event skill)</td><td>t08, t16, t17, t18</td><td>prediction, scoring, materials, calibration</td></tr></table>
<p><b>Minimum questions per area:</b> varies by year — 2019 rules: “3 from each” area; the 2018 Michigan overview: “at least 5 from each.” Plan for ≥ 5 per area.</p>
<h2>2. Binder contents (print from the Binder page)</h2>
<ol><li>Constants &amp; conversions sheet; temperature formulas; unit table.</li><li>Heat capacity table (c), latent heats, k-values, emissivities, α coefficients.</li><li>Process/PV table and gas laws; first-law sign conventions; Carnot cycle picture with formulas.</li><li>Entropy/enthalpy formulas, Hess’s law table, Gibbs logic table.</li><li>Radiation: Stefan–Boltzmann, Wien, Kirchhoff, exitance/irradiance definitions.</li><li>History timeline (with units named after people).</li><li>Device/plots: K vs V table, prediction table by T₀ and room T, your graphs (extra copies), build diagrams, material data.</li><li>Worked examples of each question type.</li></ol>
<div class="box key"><b>Time plan</b>Hot-water device setup first (≈ 5 min), then the prediction, then the test while the clock runs. The test is given “concurrently with device testing”; don't forget to read the final temperature on time — someone must watch the clock while the other partner works the test.</div>`});

L({id:'t22', t:'Statistical Mechanics & Thermodynamic Potentials (Advanced / Nationals Insurance)', tier:'xtra', yield:1, min:45, off:'Beyond the listed topics — Division C separator',
formulas:[
 ['Boltzmann factor','P(E) ∝ e^(−E/k_BT)'],
 ['Partition function','Z = Σ e^(−E_i/k_BT);  F = −k_BT ln Z;  U = −∂ln Z/∂β'],
 ['Equipartition','⟨E⟩ = ½k_BT per quadratic degree of freedom'],
 ['Entropy','S = k_B ln W = −k_BΣp ln p'],
 ['Fundamental relations','dU = TdS − PdV;  dH = TdS + VdP;  dF = −SdT − PdV;  dG = −SdT + VdP'],
 ['Maxwell relations','(∂T/∂V)_S = −(∂P/∂S)_V;  (∂S/∂V)_T = (∂P/∂T)_V …'],
 ['Clausius–Clapeyron','dP/dT = L/(TΔv)']],
html:`
<div class="box unv"><b>Why include this?</b>This is <b>not</b> in the listed topics, but Division C tests that dip into “entropy, enthalpy” sometimes go to <b>microstates/Boltzmann</b> and to <b>free-energy potentials</b>. It's 45 minutes of insurance.</div>
<h2>1. Microstates and the Boltzmann factor</h2>
<p>At temperature T, the probability of a microstate of energy E is ∝ <code>e^(−E/k_BT)</code>. Hence: population of excited states rises with T; the Maxwell speed distribution; chemical reaction-rate Arrhenius law (<code>k ∝ e^(−E_a/RT)</code>); why evaporation accelerates with T. <b>Partition function Z</b> = Σe^(−E/kT) encodes all thermodynamic properties: U = −∂(ln Z)/∂β, F = −kT ln Z, S = −∂F/∂T.</p>
<h2>2. Equipartition &amp; heat capacities</h2>
<p>At high T each quadratic degree of freedom carries ½kT: monatomic gas (3 translational) C_v = 3R/2; diatomic (3 trans + 2 rot) 5R/2, plus 2 more (vibration) above ≈ 1000 K → 7R/2; solids (3 KE + 3 PE) C_v = 3R (Dulong–Petit). <b>Quantum freeze-out:</b> modes with level spacing &gt; kT don't contribute — heat capacities drop at low T (Einstein 1907, Debye 1912).</p>
<h2>3. Thermodynamic potentials</h2>
<table><tr><th>Potential</th><th>Definition</th><th>Natural variables</th><th>Minimum/decrease at equilibrium when…</th></tr>
<tr><td>Internal energy U</td><td>—</td><td>S, V</td><td>isolated adiabatic (S, V fixed)</td></tr>
<tr><td>Enthalpy H</td><td>U + PV</td><td>S, P</td><td>constant S, P</td></tr>
<tr><td>Helmholtz F</td><td>U − TS</td><td>T, V</td><td>constant T, V</td></tr>
<tr><td>Gibbs G</td><td>H − TS</td><td>T, P</td><td>constant T, P (chemistry!)</td></tr></table>
<p><b>Maxwell relations</b> follow from equality of mixed second derivatives; e.g. (∂S/∂V)_T = (∂P/∂T)_V. <b>Chemical potential μ</b> = (∂G/∂N)_T,P; phase equilibrium when μ equal in both phases.</p>
<h2>4. Conceptual “big ideas” worth a line in your binder</h2>
<ul><li><b>Fluctuations</b> & Brownian motion; <b>detailed balance</b>.</li><li>Black holes have entropy (Bekenstein–Hawking S = k c³A/4Għ); Hawking temperature.</li><li>Bose–Einstein/Fermi–Dirac statistics; BEC (1995, Cornell &amp; Wieman); superfluid He-4 below 2.17 K (lambda point).</li><li>Negative absolute temperature (population inversion) is hotter than ∞.</li></ul>`});
