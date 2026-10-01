/* ===== THERMODYNAMICS — Part 2: radiation/exitance, Newton cooling, laws, processes, gases, entropy, enthalpy ===== */

L({id:'t07', t:'Radiant Exitance, Blackbody Radiation & Planck/Wien/Stefan–Boltzmann', tier:'sn', yield:3, min:55, off:'2027 VERIFIED: State/Nat only — radiant exitance, blackbody radiation, Stefan–Boltzmann (2019 listed it for Div C)',
formulas:[
 ['Radiant exitance (blackbody)','M = σT⁴  (W/m²);  real surface M = εσT⁴'],
 ['Stefan–Boltzmann constant','σ = 5.670×10⁻⁸ W m⁻² K⁻⁴ = 2π⁵k_B⁴/(15h³c²)'],
 ['Wien displacement','λ_max·T = b = 2.898×10⁻³ m·K'],
 ['Planck’s law','M_λ = (2πhc²/λ⁵)·1/(e^(hc/λk_BT) − 1);  h = 6.626×10⁻³⁴ J·s'],
 ['Luminosity','L = 4πR²σT⁴'],
 ['Inverse-square (irradiance)','E = L/(4πd²)'],
 ['Planetary equilibrium T','T = [S(1 − a)/(4σ)]^(1/4)'],
 ['Net exchange','P = εσA(T⁴ − T_env⁴)']],
html:`
<div class="box unv"><b>Rules flag</b>The 2019 Division C Thermodynamics rules (the last published version I could read) list <b>“radiant exitance, entropy, enthalpy”</b> as <b>Division C-only</b> written-test content. Check your 2027 rules — but assume this stays.</div>
<h2>1. Radiometry vocabulary (Division C loves these definitions)</h2>
<table><tr><th>Quantity</th><th>Symbol</th><th>Meaning</th><th>Unit</th></tr>
<tr><td><b>Radiant flux (power)</b></td><td>Φ</td><td>total EM power emitted/received</td><td>W</td></tr>
<tr><td><b>Radiant exitance</b></td><td>M</td><td>power <i>leaving</i> a surface per unit area</td><td>W/m²</td></tr>
<tr><td><b>Irradiance</b></td><td>E</td><td>power <i>incident on</i> a surface per unit area</td><td>W/m²</td></tr>
<tr><td>Radiant intensity</td><td>I</td><td>power per unit solid angle</td><td>W/sr</td></tr>
<tr><td>Radiance</td><td>L</td><td>power per unit area per unit solid angle</td><td>W/m²·sr</td></tr>
<tr><td>Spectral exitance</td><td>M_λ</td><td>exitance per unit wavelength</td><td>W/m³ (W/m²·nm)</td></tr></table>
<h2>2. Blackbody radiation</h2>
<p>A <b>blackbody</b> absorbs all incident radiation and emits the maximum possible thermal radiation at each wavelength (idealized by a cavity with a small hole). Its spectrum depends <b>only on temperature</b>. <b>Kirchhoff’s law of thermal radiation (Gustav Kirchhoff, 1859–60):</b> at thermal equilibrium, emissivity = absorptivity at each wavelength.</p>
<div class="eq">Stefan–Boltzmann:  M = σ T⁴      (Josef Stefan, 1879 experimentally; Ludwig Boltzmann, 1884 theory)\nWien displacement:  λ_max = b/T     (Wilhelm Wien, 1893)\nPlanck’s law:  M_λ = 2πhc² / [λ⁵ (e^(hc/λkT) − 1)]    (Max Planck, 1900 → <b>quantum theory</b>)</div>
<div class="box ex"><b>Worked examples</b>• Blackbody at 300 K: M = 5.67×10⁻⁸ × 300⁴ = <b>459 W/m²</b>; at 600 K: 7.35 kW/m² (16×).<br>• Sun: T ≈ 5772 K → λ_max = 2.898×10⁻³/5772 = <b>502 nm</b> (green–blue, visible); M = 6.3×10⁷ W/m².<br>• Human skin T ≈ 306 K → λ_max = 9.5 μm (thermal infrared; thermal cameras 8–14 μm).<br>• Tungsten bulb 2800 K → λ_max = 1.03 μm: peak in near-IR; only ≈ 5–10 % visible (lamp efficiency!).<br>• Luminosity of the Sun: L = 4π(6.957×10⁸)²(5.67×10⁻⁸)(5772)⁴ ≈ <b>3.83×10²⁶ W</b>.</div>
<h2>3. The Planck curve</h2>
<svg class="dia" viewBox="0 0 460 200" width="460"><path class="w" d="M40 170 H440 M40 170 V15"/>
<path class="w hot" d="M40 168 C 80 100 110 30 140 28 C 180 28 230 120 440 165"/><path class="w" d="M40 168 C 110 140 160 85 200 85 C 260 90 330 140 440 166" stroke="var(--circ)"/><path class="w cold" d="M40 168 C 160 158 260 120 320 120 C 380 125 420 150 440 166"/>
<text x="150" y="22" style="fill:var(--therm)">hot (peak at short λ)</text><text x="200" y="76" style="fill:var(--circ)">warmer</text><text x="280" y="116" style="fill:var(--circ2)">cooler (peak at long λ)</text><text x="360" y="188">λ →</text><text x="6" y="16">M_λ</text></svg>
<p>Hotter ⇒ higher curve everywhere (∝T⁴ for the area) and peak shifts to <b>shorter</b> wavelengths (Wien). The classical <b>Rayleigh–Jeans</b> law (∝ T/λ⁴) diverges at short λ (“<b>ultraviolet catastrophe</b>”); Planck fixed it by assuming energy comes in quanta E = hf — the birth of quantum mechanics.</p>
<h2>4. Applications &amp; planet-scale calculations</h2>
<ul><li><b>Net radiative heat loss</b> of a hot object to its surroundings: P = εσA(T⁴ − T_env⁴) (note: surroundings radiate back!).</li>
<li><b>Planet equilibrium temperature:</b> absorbed = emitted ⇒ S(1 − a)πR² = 4πR²σT⁴ ⇒ T = [S(1 − a)/4σ]^¼. Earth: S = 1361 W/m², albedo a = 0.30 ⇒ T ≈ <b>255 K (−18 °C)</b>; actual mean 288 K; the extra <b>≈ 33 K</b> is the <b>greenhouse effect</b> (CO₂, H₂O, CH₄ absorb IR and re-emit downward).</li>
<li>Color temperature: candle ≈ 1850 K, incandescent 2700 K, noon sun ≈ 5500–6500 K; stars: red dwarf 3000 K, Sun 5772 K, Sirius ≈ 9900 K.</li>
<li>Thermal cameras, pyrometers (need correct ε!), radiative cooling, spacecraft radiators, solar collectors (selective coatings: high solar absorptivity, low IR emissivity), Dewar flask silvering.</li></ul>
<div class="box filter"><b>Tryout-filter</b>• A blackbody’s temperature rises from 300 K to 600 K. By what factor does the radiant exitance change? → ×16. • “Wavelength of peak emission for T = 3000 K?” → 966 nm. • “Which is higher: emissivity of polished silver or soot?” → soot (~0.95 vs 0.02). • “Exitance vs irradiance?” → out vs in. • “Is a good reflector a poor emitter?” → yes.</div>`});

L({id:'t08', t:'Newton’s Law of Cooling, Cooling Curves & Temperature Prediction', tier:'adv', yield:3, min:80, off:'Event skill: prediction score + graphs (verified 2019 scoring uses k-value)',
formulas:[
 ['Differential form','dT/dt = −K·(T − T_r)'],
 ['Solution','T(t) = T_r + (T₀ − T_r)·e^(−K·t)'],
 ['Cooling constant from 2 points','K = (1/t)·ln[(T₀ − T_r)/(T_f − T_r)]'],
 ['Prediction','T_f = T_r + (T₀ − T_r)·e^(−K·t)'],
 ['Time to a target T','t = (1/K)·ln[(T₀ − T_r)/(T − T_r)]'],
 ['Time constant / half-life','τ = 1/K;  t½ = ln2/K = 0.693/K  (of the excess ΔT)'],
 ['K from physics','K = G_total/C_total  (W/K ÷ J/K);  lower K = better insulation'],
 ['Linearization','ln(T − T_r) = ln(T₀ − T_r) − K·t  → straight line, slope −K']],
html:`
<div class="box unv"><b>Verified vs unverified</b>The 2019 Division C Thermodynamics scoring (NMT event workshop material) used <b>Newton’s law of cooling</b> to compute each team’s <b>k-value</b> (cooling constant) and a <b>Heat Score HS = 20 × (lowest k ÷ team’s k)</b>. The 2027 device task has changed, so treat the <i>model</i> here as the tool you need and confirm the exact scoring in your 2027 rules.</div>
<h2>1. The model</h2>
<p><b>Isaac Newton</b> (published anonymously 1701): the rate of cooling of a body is proportional to the temperature difference with its surroundings. For a lumped body (uniform T) with heat capacity C losing power P = G(T − T_r):</p>
<div class="eq">C·dT/dt = −G·(T − T_r)   ⇒   dT/dt = −K (T − T_r),   K = G/C\n⇒  T(t) = T_r + (T₀ − T_r)·e^(−K t)</div>
<ul><li>The <i>excess</i> temperature (T − T_r) decays <b>exponentially</b> toward the room temperature T_r. It never undershoots.</li><li>K (units 1/min or 1/s) is the “cooling constant”: <b>smaller K = better insulation</b>. τ = 1/K = time for excess to fall to 36.8 %. Half-life of excess: 0.693/K.</li><li>Rate of cooling is fastest at the start (big ΔT) and slows down.</li></ul>
<div class="box ex"><b>Worked example A — predict</b>T₀ = 75.0 °C, T_r = 22.0 °C, K = 0.0120 min⁻¹, t = 25 min: T_f = 22 + 53 e^(−0.300) = 22 + 53×0.7408 = <b>61.3 °C</b>.<br><b>Worked example B — find K</b>T₀ = 70.0, T_f = 58.0 after 20 min, T_r = 21.0: K = (1/20) ln(49.0/37.0) = 0.05×0.2811 = <b>0.01405 min⁻¹</b>. Predict another run starting at 80.0 °C: T_f = 21 + 59 e^(−0.281) = <b>65.6 °C</b>.<br><b>Worked example C — time to reach 50 °C</b>T₀ = 80, T_r = 20, K = 0.02: t = (1/0.02) ln(60/30) = 50×0.693 = <b>34.7 min</b>.</div>
<h2>2. Finding K from a cooling curve (your “4 plots”)</h2>
<ol><li>Collect (t, T) data every minute (≥10 points) plus room temperature T_r.</li><li>Compute y = ln(T − T_r). Plot y vs t: should be a straight line. <b>Slope = −K.</b></li><li>Use least-squares regression (spreadsheet: <code>=SLOPE(y_range, t_range)</code>, <code>=INTERCEPT</code>, <code>=RSQ</code>). Or use T₀ and T_f with the two-point formula.</li><li>Check residuals; drop the first 1–2 minutes if the device’s own thermal mass is still warming (“transient”).</li><li>Repeat for <b>different starting temperatures and water volumes</b> — K often depends on volume (C ↑ ⇒ K ↓).</li></ol>
<div class="box key"><b>How K depends on the variables</b>K = G/C. With the water volume V: C = ρcV + C_device. Bigger volume ⇒ larger C ⇒ smaller K (cools more slowly <i>in fractional terms</i>), even though G may also grow (more wetted area). Fit K(V) (e.g., linear in 1/V or simply a table) so you can interpolate for 75, 100, 125 mL …</div>
<h2>3. Making the prediction at the tournament</h2>
<ol><li>The supervisor tells you the <b>water volume</b> and <b>initial temperature</b> (or you measure it) and the <b>cooling time</b> — also measure <b>room temperature</b>.</li><li>Look up/interpolate your K for that volume (and if needed T₀) from your graphs/tables.</li><li>Compute T_f = T_r + (T₀ − T_r)e^(−Kt).</li><li>If ice-water adjustments are permitted, compute the mixed starting T first (energy balance, see the phase lesson) and recompute.</li><li>Record the prediction <b>before</b> the final reading. A +/− 1 °C mistake can cost several points (2019: PS = 25 − 2.5|pred − final|).</li></ol>
<div class="box warn"><b>When Newton’s law fails</b>• Large ΔT: radiation ∝ T⁴ and evaporation grow faster than linear ⇒ K <i>larger</i> at high T (curve bends: apparent K drifts down as it cools). • Device thermal mass: early phase is faster (heat soaking into walls) ⇒ <b>two time constants</b>: T − T_r ≈ A e^(−K₁t) + B e^(−K₂t). • Ambient changes (drafts, HVAC, sunlight). • Thermometer lag/placement. Mitigation: calibrate at the same T₀ and V the event uses, run 3–5 replicates, average K, use the event’s actual T_r.</div>
<h2>4. Spreadsheet recipe</h2>
<div class="eq">A: t (min)   B: T (°C)   C: =LN(B2 - $F$1)    where F1 = room temp\nK = -SLOPE(C2:C31, A2:A31)\nPredicted T(t) = $F$1 + (B$2 - $F$1)*EXP(-K*A2)\nRSQ(C2:C31, A2:A31) ≥ 0.99 means a clean exponential</div>
<p>Use the <a href="#/tools/cooling">Cooling Lab</a> tool on this site: paste your data, fit K, and get predictions and score estimates.</p>
<div class="box filter"><b>Tryout-filter</b>• “After how many time constants is the excess temperature 5 % of the original?” → 3 (e⁻³ = 0.0498). • “Double the insulation thickness (halve G) — what happens to K and to T after a fixed time?” → K halves; T_f is higher. • “Which gives a lower final temperature: higher or lower K?” → higher K. • “Can the water go below room temperature (without evaporation)?” → no.</div>`});

L({id:'t09', t:'The Laws of Thermodynamics (Zeroth, First, Second, Third)', tier:'core', yield:3, min:60, off:'Written: thermodynamic laws & processes',
formulas:[
 ['Zeroth law','If A ~ C and B ~ C are in thermal equilibrium, then A ~ B (defines temperature)'],
 ['First law','ΔU = Q − W_by  (chemistry convention: ΔU = Q + W_on)'],
 ['Differential','dU = δQ − δW = T dS − P dV'],
 ['Second law (Clausius)','Heat cannot spontaneously flow from cold to hot'],
 ['Second law (Kelvin–Planck)','No cyclic device can convert heat entirely into work (no 100 % engine)'],
 ['Second law (entropy)','ΔS_universe ≥ 0'],
 ['Third law','S → 0 (or constant) as T → 0; 0 K unattainable in finite steps'],
 ['Efficiency limit','η ≤ η_Carnot = 1 − T_c/T_h']],
html:`
<h2>0. Zeroth Law (named last, c. 1931, by Ralph Fowler)</h2>
<p>If two systems are each in <b>thermal equilibrium</b> with a third, they are in equilibrium with each other. This makes <b>temperature</b> a well-defined property and justifies thermometers.</p>
<h2>1. First Law — conservation of energy</h2>
<div class="eq">ΔU = Q − W      Q = heat added <b>to</b> the system, W = work done <b>by</b> the system\n(Chemistry texts: ΔU = Q + W with W = work done <b>on</b> the system — check the sign convention in the question!)</div>
<p>Energy can be transferred as heat or work and converted between forms but never created or destroyed. <b>U</b> is a state function; Q and W depend on the path. Developed by <b>Mayer (1842), Joule (1843–50), Helmholtz (1847), Clausius (1850)</b>. A <b>perpetual-motion machine of the first kind</b> (output &gt; input energy) is impossible.</p>
<table><tr><th>Process</th><th>ΔU</th><th>Q</th><th>W (by system)</th></tr>
<tr><td>Isochoric (V const.)</td><td>nC_vΔT</td><td>= ΔU</td><td>0</td></tr>
<tr><td>Isobaric (P const.)</td><td>nC_vΔT</td><td>nC_pΔT</td><td>PΔV = nRΔT</td></tr>
<tr><td>Isothermal (T const.; ideal gas)</td><td>0</td><td>= W</td><td>nRT ln(V₂/V₁)</td></tr>
<tr><td>Adiabatic (Q = 0)</td><td>−W</td><td>0</td><td>(P₁V₁ − P₂V₂)/(γ − 1) = −ΔU</td></tr>
<tr><td>Cyclic (returns to start)</td><td>0</td><td>= W (net)</td><td>area enclosed on PV diagram</td></tr>
<tr><td>Free expansion (vacuum, ideal gas)</td><td>0</td><td>0</td><td>0</td></tr></table>
<div class="box ex"><b>Worked example</b>A gas absorbs 500 J of heat and expands, doing 200 J of work on the piston: ΔU = 500 − 200 = <b>+300 J</b> (temperature rises). If a gas is compressed, work done <i>on</i> it 150 J while releasing 100 J of heat: ΔU = Q − W = −100 − (−150) = +50 J.</div>
<h2>2. Second Law — the arrow of time</h2>
<ul><li><b>Clausius statement (1850):</b> heat does not flow <i>spontaneously</i> from a colder to a hotter body. (Refrigerators need work input.)</li><li><b>Kelvin–Planck statement:</b> no heat engine operating in a cycle can convert all absorbed heat to work; some must be rejected to a cold reservoir. <b>No 100 % efficient engine</b>.</li><li><b>Entropy statement:</b> the entropy of an isolated system never decreases; ΔS_universe ≥ 0, with equality only for reversible processes.</li><li><b>Carnot’s theorem:</b> no engine between two reservoirs is more efficient than a reversible (Carnot) engine; all reversible engines between the same reservoirs have the same efficiency.</li><li>Implies <b>irreversibility</b>: friction, free expansion, heat flow across a finite ΔT, mixing, etc. A <b>perpetual-motion machine of the second kind</b> is impossible.</li></ul>
<h2>3. Third Law</h2>
<p><b>Nernst (1906–12)</b> heat theorem; <b>Planck</b> version: entropy of a perfect crystal is zero at 0 K. Corollary: <b>absolute zero cannot be reached</b> in a finite number of steps. Heat capacities vanish as T → 0.</p>
<div class="box key"><b>One-line summary for memorization</b>0th: <i>temperature exists</i>. 1st: <i>you can't win (energy conserved)</i>. 2nd: <i>you can't break even (entropy rises)</i>. 3rd: <i>you can't get out of the game (0 K unreachable)</i>.</div>
<div class="box filter"><b>Tryout-filter</b>Sign-convention traps; “isolated vs closed vs open” system definitions; “Which law explains why a hot coffee cools?” (2nd); “Which law defines temperature?” (0th); “Which statement is equivalent to ‘entropy of the universe increases’?” Also “ΔU for isothermal ideal gas = 0” but <b>real gases</b> or phase changes are different. “Heat death of the universe” → maximum entropy.</div>`});

L({id:'t10', t:'Systems, State Functions & Thermodynamic Processes (PV Diagrams)', tier:'core', yield:3, min:70, off:'Written: thermodynamic processes (isothermal, adiabatic, …)',
formulas:[
 ['Work (quasi-static)','W = ∫P dV = area under the PV curve'],
 ['Isobaric','W = P·ΔV'],
 ['Isothermal (ideal gas)','W = nRT·ln(V₂/V₁) = nRT·ln(P₁/P₂)'],
 ['Adiabatic (reversible, ideal)','PV^γ = const;  TV^(γ−1) = const;  T^γ/P^(γ−1) = const'],
 ['Adiabatic work','W = (P₁V₁ − P₂V₂)/(γ − 1) = nC_v(T₁ − T₂)'],
 ['Polytropic','PVⁿ = const (n=0 isobaric, 1 isothermal, γ adiabatic, ∞ isochoric)'],
 ['Cyclic','ΔU = 0 ⇒ W_net = Q_net']],
html:`
<h2>1. Systems and boundaries</h2>
<table><tr><th>System</th><th>Matter crosses?</th><th>Energy (heat/work) crosses?</th><th>Example</th></tr>
<tr><td><b>Open</b></td><td>yes</td><td>yes</td><td>boiling pot without a lid, turbine, car radiator</td></tr>
<tr><td><b>Closed</b></td><td>no</td><td>yes</td><td>sealed can on a stove, gas in a piston-cylinder</td></tr>
<tr><td><b>Isolated</b></td><td>no</td><td>no</td><td>ideal thermos, the universe</td></tr></table>
<p>Boundary types: <b>diathermic</b> (lets heat pass) vs <b>adiabatic</b> (no heat transfer — insulated); rigid vs movable; permeable vs impermeable. <b>Surroundings</b> = everything outside; <b>reservoir</b> = surroundings so large that its T doesn't change.</p>
<h2>2. Properties and state functions</h2>
<ul><li><b>Intensive</b> (independent of size): T, P, density, specific heat. <b>Extensive</b> (∝ size): m, V, U, H, S, C.</li><li><b>State functions</b> (depend only on current equilibrium state, not path): <b>P, V, T, U, H, S, G</b>. <b>Path functions</b>: <b>Q and W</b>.</li><li>Equation of state: ideal gas <code>PV = nRT</code>. <b>Reversible</b> (quasi-static, no dissipation) vs <b>irreversible</b> (finite gradients, friction).</li></ul>
<h2>3. The processes</h2>
<table><tr><th>Name</th><th>Constant</th><th>Relation</th><th>W (by gas)</th><th>Q</th></tr>
<tr><td><b>Isobaric</b></td><td>P</td><td>V/T = const (Charles)</td><td>PΔV</td><td>nC_pΔT</td></tr>
<tr><td><b>Isochoric</b> (isometric/isovolumetric)</td><td>V</td><td>P/T = const (Gay-Lussac)</td><td>0</td><td>nC_vΔT</td></tr>
<tr><td><b>Isothermal</b></td><td>T</td><td>PV = const (Boyle)</td><td>nRT ln(V₂/V₁)</td><td>= W</td></tr>
<tr><td><b>Adiabatic</b></td><td>Q = 0</td><td>PV^γ = const</td><td>−ΔU = nC_v(T₁ − T₂)</td><td>0</td></tr>
<tr><td><b>Isentropic</b></td><td>S (reversible adiabatic)</td><td>same as adiabatic</td><td></td><td>0</td></tr>
<tr><td><b>Isenthalpic</b></td><td>H</td><td>throttling (Joule–Thomson)</td><td></td><td></td></tr></table>
<svg class="dia" viewBox="0 0 440 240" width="440"><path class="w" d="M50 210 H410 M50 210 V20"/><text x="8" y="18">P</text><text x="412" y="224">V</text>
<path class="w hot" d="M80 50 C150 90 230 120 380 160"/><text x="330" y="150" style="fill:var(--therm)">isotherm (PV = const)</text>
<path class="w cold" d="M80 80 C120 140 180 175 380 195"/><text x="230" y="192" style="fill:var(--circ2)">adiabat (steeper)</text>
<path class="w" d="M80 40 H360" stroke="var(--circ)"/><text x="260" y="34" style="fill:var(--circ)">isobar</text><path class="w" d="M200 210 V30" stroke="var(--ok)"/><text x="206" y="60" style="fill:var(--ok)">isochore</text></svg>
<div class="box key"><b>Reading PV diagrams</b>• Area under the curve = work (right-moving = expansion, W &gt; 0). • A closed loop’s area = net work per cycle; <b>clockwise = engine</b> (net W &gt; 0), counter-clockwise = refrigerator/heat pump. • Adiabats are steeper than isotherms (γ &gt; 1) because expanding gas also cools.</div>
<div class="box ex"><b>Worked examples</b>• Isothermal: 1.00 mol ideal gas at 300 K expands from 10 L to 20 L: W = 8.314×300×ln2 = <b>1729 J</b> = Q (ΔU = 0).<br>• Isobaric: 2 mol heated from 300 K to 400 K at constant P: W = nRΔT = 1663 J.<br>• Adiabatic: air (γ = 1.4) at 300 K, 1 atm compressed to 1/10 the volume: T₂ = 300×10^0.4 = <b>753 K</b> (diesel ignition!), P₂ = 25.1 atm.<br>• Cycle: rectangle in PV: W = (P_high − P_low)(V₂ − V₁).</div>
<div class="box filter"><b>Tryout-filter</b>• “Is heat a state function?” → no. • “Which process has W = 0?” → isochoric (or free expansion). • “What is ΔU for one full cycle?” → 0. • “In an isothermal expansion of an ideal gas, where does the work energy come from?” → heat absorbed from the reservoir. • “Compare work for isothermal vs adiabatic expansion from the same V₁ to V₂” → isothermal does more work.</div>`});

L({id:'t11', t:'Gas Laws, Ideal Gas & Kinetic Theory of Heat', tier:'core', yield:3, min:70, off:'Written: gas laws; kinetic vs caloric theory',
formulas:[
 ['Boyle','P₁V₁ = P₂V₂ (T, n const)'],
 ['Charles','V₁/T₁ = V₂/T₂ (P, n const)'],
 ['Gay-Lussac (Amontons)','P₁/T₁ = P₂/T₂ (V, n const)'],
 ['Avogadro','V/n = const (P, T const); 22.414 L/mol at STP (0 °C, 1 atm)'],
 ['Combined','P₁V₁/T₁ = P₂V₂/T₂'],
 ['Ideal gas','PV = nRT = N·k_B·T;  R = 8.314 J/mol·K = 0.08206 L·atm/mol·K'],
 ['Dalton','P_total = ΣP_i (partial pressures)'],
 ['Kinetic theory','P = (1/3)ρ⟨v²⟩;  ⟨KE⟩ = (3/2)k_BT;  v_rms = √(3RT/M) = √(3k_BT/m)'],
 ['Constants','k_B = 1.381×10⁻²³ J/K; N_A = 6.022×10²³/mol; R = N_A·k_B'],
 ['Pressure units','1 atm = 101 325 Pa = 760 mmHg (torr) = 14.696 psi = 1.01325 bar']],
html:`
<h2>1. The empirical gas laws (T must be in kelvin!)</h2>
<table><tr><th>Law</th><th>Statement</th><th>Who / when</th></tr>
<tr><td><b>Boyle’s law</b></td><td>P ∝ 1/V at constant T: PV = const</td><td>Robert Boyle, 1662 (Hooke assisted; Mariotte 1676 independent)</td></tr>
<tr><td><b>Charles’s law</b></td><td>V ∝ T at constant P</td><td>Jacques Charles ~1787 (unpublished); <b>Gay-Lussac</b> published 1802</td></tr>
<tr><td><b>Gay-Lussac’s law</b> (pressure law; Amontons’ law)</td><td>P ∝ T at constant V</td><td>Guillaume Amontons 1699; Joseph Gay-Lussac ~1802</td></tr>
<tr><td><b>Avogadro’s law</b></td><td>equal volumes of gases at equal T, P contain equal numbers of molecules</td><td>Amedeo Avogadro, 1811</td></tr>
<tr><td><b>Combined / Ideal gas law</b></td><td>PV = nRT</td><td>Clapeyron 1834</td></tr>
<tr><td><b>Dalton’s law</b></td><td>total P = sum of partial pressures</td><td>John Dalton, 1801</td></tr>
<tr><td><b>Graham’s law</b></td><td>effusion rate ∝ 1/√M</td><td>Thomas Graham, 1848</td></tr></table>
<div class="box ex"><b>Worked examples</b>• A balloon 2.0 L at 20 °C is moved to −10 °C (isobaric): V₂ = 2.0×(263.15/293.15) = <b>1.80 L</b>.<br>• A rigid can at 25 °C and 1.00 atm is heated to 100 °C: P₂ = 1.00×373.15/298.15 = <b>1.25 atm</b>.<br>• 0.50 mol at 300 K, 2.0 L: P = nRT/V = 0.5×0.08206×300/2.0 = <b>6.15 atm</b>.<br>• Molar volume at STP (0 °C, 1 atm) = <b>22.4 L</b>; at 25 °C, 1 atm = 24.5 L.</div>
<div class="box warn"><b>Pitfalls</b>Using °C in a gas law; using gauge pressure (absolute = gauge + 1 atm); mixing R values (8.314 J/mol·K with L·atm); forgetting that <b>absolute zero</b> arises by extrapolating V–T or P–T data to zero.</div>
<h2>2. Kinetic theory of gases</h2>
<p>A gas is a huge number of tiny molecules in constant, random, elastic motion; pressure arises from wall collisions; <b>temperature is proportional to mean KE</b>: <code>⟨KE⟩ = (3/2)k_BT</code> — depends only on T, not on mass. Heavier molecules are slower at a given T: <code>v_rms = √(3RT/M)</code>.</p>
<div class="box ex"><b>Example</b>N₂ (M = 0.028 kg/mol) at 300 K: v_rms = √(3×8.314×300/0.028) = <b>517 m/s</b>; H₂ at 300 K: 1934 m/s (why H₂ escapes Earth's gravity over geological time). ⟨KE⟩ = 1.5×1.381×10⁻²³×300 = 6.21×10⁻²¹ J.</div>
<ul><li><b>Maxwell–Boltzmann distribution</b> (Maxwell 1860; Boltzmann 1868–77): speeds spread; most probable v_p = √(2k_BT/m), mean ⟨v⟩ = √(8k_BT/πm), v_rms = √(3k_BT/m) (ratio 1 : 1.128 : 1.225).</li><li>Mean free path, equipartition (½k_BT per degree of freedom), Brownian motion (Einstein 1905).</li></ul>
<h2>3. Real gases</h2>
<p>Ideal gas assumes no molecular volume and no forces. <b>Van der Waals equation (1873):</b> (P + a n²/V²)(V − nb) = nRT. Deviations at high P / low T (near condensation). Compressibility factor Z = PV/nRT. Joule–Thomson cooling on expansion (refrigerators, liquefaction).</p>
<h2>4. Theories of heat — caloric vs kinetic</h2>
<table><tr><th>Caloric theory (Lavoisier, ~1780s–1820s)</th><th>Kinetic (mechanical) theory</th></tr>
<tr><td>Heat is a weightless, self-repelling conserved <b>fluid</b> (“caloric”) that flows from hot to cold.</td><td>Heat is the <b>energy of random molecular motion</b>; temperature measures average KE.</td></tr>
<tr><td>Explained conduction, calorimetry, Carnot’s original analysis (he used caloric).</td><td>Supported by <b>Rumford’s cannon boring (1798)</b>, Davy’s ice-rubbing (1799), <b>Joule’s paddle wheel (1843–50)</b>, Maxwell–Boltzmann statistics.</td></tr>
<tr><td><b>Failed</b>: unlimited heat from friction; can't be conserved.</td><td><b>Valid modern theory.</b></td></tr></table>
<div class="box filter"><b>Tryout-filter</b>• “Double the absolute temperature at constant volume: pressure?” → doubles. • “If T rises from 27 °C to 327 °C (300 K → 600 K), by what factor does v_rms change?” → √2. • “Which gas molecule has higher average KE at 300 K: He or Xe?” → same. • “Which theory says heat is a fluid?” → caloric (obsolete).</div>`});

L({id:'t12', t:'Entropy, Disorder & the Second Law (Division C)', tier:'sn', yield:3, min:60, off:'2027 VERIFIED: Division C State/Nat only — entropy',
formulas:[
 ['Definition (Clausius)','dS = δQ_rev/T;  ΔS = Q_rev/T (isothermal)'],
 ['Heating at constant c','ΔS = m·c·ln(T₂/T₁)'],
 ['Phase change','ΔS = m·L/T_phase (melting: L_f/T_m; boiling: L_v/T_b)'],
 ['Ideal gas','ΔS = nC_v ln(T₂/T₁) + nR ln(V₂/V₁)'],
 ['Statistical (Boltzmann)','S = k_B·ln W  (W = number of microstates)'],
 ['Second law','ΔS_universe = ΔS_sys + ΔS_surr ≥ 0'],
 ['Reservoir','ΔS_res = −Q/T_res (when system absorbs Q from it)'],
 ['Units','J/K (per mole: J/mol·K)']],
html:`
<h2>1. What entropy is</h2>
<p><b>Entropy (S)</b> is a state function measuring how much energy is <b>unavailable to do work</b> / how <b>dispersed</b> energy is / how many microscopic arrangements (microstates) correspond to the macroscopic state. <b>Rudolf Clausius coined “entropy” (1865)</b> from Greek <i>tropē</i> (transformation); <b>Boltzmann (1877)</b> gave <code>S = k ln W</code> (engraved on his tombstone); <b>Gibbs</b> generalized it (S = −k Σp ln p). Shannon’s information entropy has the same form.</p>
<div class="box key"><b>Clausius definition</b><div class="eq">ΔS = Q_rev / T     (units J/K; T in kelvin; Q_rev = heat in a <i>reversible</i> path between the same states)</div>
Heat absorbed at <b>low</b> T raises S more than at high T. Hot → cold heat flow raises the universe’s entropy: Q/T_c − Q/T_h &gt; 0.</div>
<h2>2. Computing entropy changes</h2>
<div class="box ex"><b>Example 1 — heat flow</b>1000 J flows from a 400 K reservoir to a 300 K reservoir: ΔS = −1000/400 + 1000/300 = −2.50 + 3.33 = <b>+0.83 J/K</b> (&gt; 0 ✓ spontaneous).<br><b>Example 2 — melting</b>100 g ice melts at 273.15 K: ΔS = 100×334/273.15 = <b>+122 J/K</b>.<br><b>Example 3 — heating water</b>500 g, 20 °C → 80 °C: ΔS = 500×4.184×ln(353.15/293.15) = 2092×0.1862 = <b>+389.6 J/K</b>.<br><b>Example 4 — boiling</b>100 g at 373.15 K: ΔS = 100×2256/373.15 = +604.6 J/K (≈ 109 J/mol·K — <b>Trouton’s rule</b>: ΔS_vap ≈ 85–88 J/mol·K for most liquids; water is 109 due to H-bonding).<br><b>Example 5 — ideal gas free expansion</b>n = 1 mol, V doubles (Q = 0): ΔS = R ln2 = <b>5.76 J/K</b> (irreversible, entropy of universe rises).</div>
<h2>3. The second law in entropy language</h2>
<ul><li>Isolated system: ΔS ≥ 0 (= for reversible). The universe’s entropy increases → arrow of time, heat death (maximum entropy), “<b>Loschmidt paradox</b>”.</li><li>A system’s entropy <i>can</i> decrease (freezing water, a refrigerator, life) only if the surroundings’ entropy increases by more.</li><li><b>Order vs disorder</b> is an (imperfect) metaphor: more microstates accessible = higher S. Entropy increases with T, with volume, with number of particles, and in the order solid &lt; liquid ≪ gas.</li><li><b>Maxwell’s demon</b> (1867): a hypothetical being sorting fast/slow molecules would violate the second law — resolved by information theory (Landauer, Bennett).</li><li><b>Reversible</b> processes have ΔS_universe = 0; irreversibility generates entropy (friction, mixing, heat flow over finite ΔT, unrestrained expansion).</li></ul>
<h2>4. Microstates (Boltzmann)</h2>
<div class="eq">S = k_B ln W\nFor N coins: W = 2ᴺ → S = N k_B ln 2.  Doubling the volume for N gas molecules → W×2ᴺ → ΔS = N k_B ln 2 = nR ln 2.</div>
<p>Third-law: absolute entropies are tabulated (S° at 298 K: liquid water 69.9 J/mol·K; ice ≈ 41; steam ≈ 188.8; diamond 2.4; graphite 5.7).</p>
<div class="box filter"><b>Tryout-filter</b>• “ΔS universe for a reversible process?” → 0. • “Which has more entropy: 1 mol water at 25 °C or 1 mol water vapor at 25 °C?” → vapor. • “Sign of ΔS for gas condensing?” → negative for the system. • “Heat Q flows from T_h to T_c: sign of ΔS?” → positive. • “Who coined entropy?” → Clausius (1865). • “What is S = k ln W called?” → Boltzmann’s entropy formula.</div>`});
