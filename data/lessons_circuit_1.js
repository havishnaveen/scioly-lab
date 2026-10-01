/* ===== CIRCUIT LAB — Part 1: charge, capacitors, V/I/R/P, color code, series/parallel, sources ===== */

L({id:'c01', t:'Electric Charge, Fields, Static Electricity & Coulomb’s Law', tier:'core', yield:3, min:40, off:'Topic 1',
formulas:[
 ['Coulomb’s Law','F = k·q₁·q₂ / r²   (k = 8.99×10⁹ N·m²/C² = 1/(4πε₀), ε₀ = 8.85×10⁻¹² F/m)'],
 ['Electric field','E = F/q = kQ/r²  (point charge);  E = V/d (uniform field between plates)'],
 ['Electric potential','V = kQ/r;   ΔU = qΔV'],
 ['Charge quantum','e = 1.602×10⁻¹⁹ C;  1 C ≈ 6.24×10¹⁸ electrons'],
 ['Current (defn.)','I = ΔQ/Δt  (1 A = 1 C/s)']],
html:`
<h2>1. What is charge?</h2>
<p>Charge is a fundamental property of matter. There are two kinds — <b>positive</b> (protons) and <b>negative</b> (electrons) — named by <b>Benjamin Franklin</b>. Like charges repel, opposite charges attract. Charge is <b>conserved</b> (never created or destroyed, only moved) and <b>quantized</b> (comes in integer multiples of <code>e = 1.602×10⁻¹⁹ C</code>). The SI unit is the <b>coulomb (C)</b>; one coulomb is the charge of ≈ 6.24×10¹⁸ electrons.</p>
<table><tr><th>Particle</th><th>Charge</th><th>Mass</th></tr>
<tr><td>Electron</td><td>−1.602×10⁻¹⁹ C</td><td>9.11×10⁻³¹ kg</td></tr>
<tr><td>Proton</td><td>+1.602×10⁻¹⁹ C</td><td>1.673×10⁻²⁷ kg</td></tr>
<tr><td>Neutron</td><td>0</td><td>1.675×10⁻²⁷ kg</td></tr></table>

<h2>2. Conductors, insulators, semiconductors</h2>
<ul>
<li><b>Conductors</b> (metals, graphite, salt water, human body): outer electrons are free to move. Silver &gt; copper &gt; gold &gt; aluminum in conductivity.</li>
<li><b>Insulators</b> (rubber, glass, dry air, plastic, dry wood): charges are bound and can't flow freely.</li>
<li><b>Semiconductors</b> (silicon, germanium): in between; conductivity controlled by doping/temperature → diodes, transistors.</li>
<li><b>Superconductors</b>: zero resistance below a critical temperature.</li></ul>

<h2>3. Three ways to charge an object</h2>
<table><tr><th>Method</th><th>How</th><th>Result</th></tr>
<tr><td>Friction (triboelectric)</td><td>Rub two materials; electrons transfer</td><td>Opposite charges on the two objects</td></tr>
<tr><td>Conduction (contact)</td><td>Touch a charged object to a neutral one</td><td>Same sign of charge as the charger</td></tr>
<tr><td>Induction</td><td>Bring charged object near (no contact), ground the far side, remove ground, then remove charger</td><td><b>Opposite</b> sign to the charger</td></tr></table>
<div class="box key"><b>Triboelectric series (typical)</b>Most positive → most negative: rabbit fur, glass, human hair, nylon, wool, silk, paper, cotton, (neutral), wood, amber, hard rubber, nickel/copper, polyester, styrene (styrofoam), saran wrap, polyethylene, PVC, silicon, Teflon. <b>Glass rubbed with silk → glass +, silk −.  Rubber/PVC rubbed with fur/wool → rubber/PVC −, fur +.</b></div>
<p><b>Polarization</b>: a neutral insulator near a charged object shifts its charge slightly (no net transfer) — why a charged balloon sticks to a wall. A <b>gold-leaf electroscope</b> detects charge: leaves repel when charged. Charging by contact gives the electroscope the same sign; by induction the opposite sign.</p>

<h2>4. Coulomb’s Law (<span class="muted">Charles-Augustin de Coulomb, 1785</span>)</h2>
<div class="eq">F = k q₁ q₂ / r²        k = 8.99×10⁹ N·m²/C²</div>
<p>Force is along the line joining the charges; <b>inverse-square</b>: double the distance → ¼ the force; double one charge → double the force. Sign: positive F = repulsion, negative F = attraction. Forces from several charges add as <b>vectors</b> (superposition).</p>
<div class="box ex"><b>Worked example</b>Two charges, +3.0 μC and −5.0 μC, are 0.30 m apart. F = (8.99×10⁹)(3×10⁻⁶)(5×10⁻⁶)/(0.30)² = <b>1.5 N</b>, attractive.</div>
<div class="box filter"><b>Tryout-filter trap</b>Units! μC = 10⁻⁶ C, nC = 10⁻⁹ C, pC = 10⁻¹². Forgetting to convert is the #1 lost point. Also: “how does F change if <i>both</i> charges double AND distance halves?” → ×4 ×4 = <b>×16</b>.</div>

<h2>5. Electric field & potential</h2>
<p>The electric field at a point is the force per unit <i>positive</i> test charge: <code>E = F/q</code> (units N/C = V/m). Field lines leave + and enter −; they never cross; closer lines = stronger field. Field inside a conductor in equilibrium is zero (<b>Faraday cage</b>); charge sits on the outer surface and concentrates at sharp points (why lightning rods are pointed, and why corona discharge occurs at points).</p>
<div class="eq">Uniform field between parallel plates:  E = V/d\nPoint charge:  E = kQ/r²,   V = kQ/r\nWork to move charge:  W = qΔV\nElectron-volt:  1 eV = 1.602×10⁻¹⁹ J</div>
<p><b>Voltage</b> (potential difference) = energy per unit charge: 1 V = 1 J/C. Equipotential surfaces are perpendicular to field lines.</p>

<h2>6. Sources and hazards of static electricity</h2>
<ul>
<li><b>Sources:</b> friction (walking on carpet, clothes in a dryer, conveyor belts, flowing liquids in pipes), induction, Van de Graaff generators (<i>Robert Van de Graaff, 1929</i>), lightning (cloud charge separation — ~10⁸–10⁹ V, 10⁴–10⁵ A).</li>
<li><b>Hazards:</b> sparks igniting flammable vapors (fuel pumps, grain/flour dust, oxygen-rich areas); <b>ESD</b> (electrostatic discharge) destroying MOSFETs/ICs — you can't feel a discharge below ~3 kV, but chips die at &lt;100 V; shock/startle; lightning.</li>
<li><b>Controls:</b> grounding, bonding, humidity (moist air bleeds charge), antistatic wrist straps / mats / bags, ionizers, lightning rods (<i>Franklin</i>, 1750s), anti-static additives, fuel-hose grounding.</li>
<li><b>Uses:</b> electrostatic precipitators (smokestack scrubbers), photocopiers/laser printers (toner), spray painting, inkjet, air filters, capacitors.</li></ul>
<div class="box hist"><b>History</b>Thales of Miletus (~600 BC): amber (Gk. <i>elektron</i>) attracts feathers · William Gilbert (1600) coins “electricus” · Franklin: +/− names, kite experiment (1752) · <b>Coulomb 1785</b> inverse-square law (torsion balance) · Leyden jar (1745) first capacitor.</div>`});

L({id:'c02', t:'Capacitance, Capacitors & RC Circuits (DC)', tier:'core', yield:3, min:50, off:'Topic 1',
formulas:[
 ['Capacitance','C = Q/V  (1 F = 1 C/V)'],
 ['Parallel-plate','C = ε₀·ε_r·A/d   (ε₀ = 8.85×10⁻¹² F/m)'],
 ['Capacitors in parallel','C_eq = C₁ + C₂ + …'],
 ['Capacitors in series','1/C_eq = 1/C₁ + 1/C₂ + …  (two caps: C₁C₂/(C₁+C₂))'],
 ['Energy stored','U = ½CV² = ½QV = Q²/2C'],
 ['Time constant','τ = R·C  (s)'],
 ['Charging','v_C(t) = V_s(1 − e^(−t/RC));  i(t) = (V_s/R)e^(−t/RC)'],
 ['Discharging','v_C(t) = V₀·e^(−t/RC)'],
 ['Rule of thumb','1τ → 63.2 %,  2τ → 86.5 %,  3τ → 95.0 %,  4τ → 98.2 %,  5τ → 99.3 %']],
html:`
<h2>1. What a capacitor is</h2>
<p>Two conductors (plates) separated by an insulator (<b>dielectric</b>). Charge +Q on one plate and −Q on the other stores energy in the electric field. <code>C = Q/V</code>, unit <b>farad (F)</b> (after Faraday). Real values: pF, nF, μF, mF; a 1 F “supercapacitor” is huge.</p>
<div class="eq">Parallel plates:  C = ε₀ ε_r A / d\n→ bigger area ↑C · smaller gap ↑C · higher dielectric constant ↑C</div>
<p>Dielectrics: air ε_r≈1, paper ≈3, glass ≈5–10, ceramic (high-k) 10–10 000. Inserting a dielectric <b>raises</b> C and lets the capacitor hold more charge at a given voltage.</p>

<h2>2. Combining capacitors (opposite of resistors!)</h2>
<div class="eq">Parallel:  C_eq = C₁ + C₂ + C₃            (plate areas add)\nSeries:    1/C_eq = 1/C₁ + 1/C₂ + 1/C₃    (plate gaps add)</div>
<p>Series capacitors carry the <b>same charge</b> Q; voltage divides <b>inversely</b> to C (the smaller C gets the larger voltage). Parallel capacitors share the <b>same voltage</b>; charge divides in proportion to C.</p>

<h2>3. Energy</h2>
<div class="eq">U = ½ C V²        (J)\nA 100 μF cap at 12 V: U = 0.5 × 100×10⁻⁶ × 144 = 7.2 mJ</div>
<p>Energy is stored in the <i>field</i>, not dissipated — unlike a resistor, a capacitor returns the energy. A flash tube, defibrillator, and camera flash use this.</p>

<h2>4. DC behavior</h2>
<ul>
<li><b>At t = 0</b> (uncharged cap, switch just closed): the capacitor acts like a <b>short circuit</b> (wire).</li>
<li><b>At t → ∞</b> (fully charged): the capacitor is an <b>open circuit</b> — no DC current flows through it. “Capacitors block DC, pass AC.”</li>
<li>The voltage across a capacitor <b>cannot change instantaneously</b> (current can).</li></ul>

<h2>5. RC charging & discharging</h2>
<svg class="dia" viewBox="0 0 520 190" width="520"><text x="10" y="18">v_C / V_s</text><path class="w" d="M50 160 H500 M50 160 V25"/>
<path class="w cold" d="M50 160 C 100 60, 180 38, 480 30"/><path class="w hot" d="M50 30 C 100 130, 180 152, 480 158"/>
<path d="M50 62 H124 V160" stroke="currentColor" stroke-dasharray="4 4" fill="none" opacity=".5"/><text x="128" y="172">τ (63%)</text>
<text x="360" y="22" style="fill:var(--circ2)">charging 1−e^(−t/τ)</text><text x="330" y="150" style="fill:var(--therm)">discharging e^(−t/τ)</text></svg>
<div class="eq">τ = R·C        (R in Ω, C in F → τ in seconds)\nAfter 1τ: 63.2 % charged (or 36.8 % remaining)\nAfter 5τ: “fully” charged (99.3 %)</div>
<div class="box ex"><b>Worked example</b>R = 10 kΩ, C = 47 μF, V_s = 9 V. τ = 10 000 × 47×10⁻⁶ = <b>0.47 s</b>. At t = 1 s: v = 9(1 − e^(−1/0.47)) = 9(1 − 0.119) = <b>7.93 V</b>. Time to reach 6 V: 6 = 9(1−e^(−t/τ)) → e^(−t/τ) = 1/3 → t = τ ln 3 = <b>0.516 s</b>.</div>
<div class="box filter"><b>Tryout-filter</b>“How long until the capacitor reaches X % of the supply?”  t = −τ·ln(1 − fraction). Memorize: ln 2 = 0.693, ln 3 = 1.099, ln 10 = 2.303. Also: the <b>half-time</b> to 50 % is 0.693τ.</div>
<div class="box hw"><b>Hands-on</b>Polarized electrolytic capacitors have a stripe marking the <b>negative</b> lead (and a shorter leg). Wrong polarity or exceeding the voltage rating can make them vent/pop. Always <b>discharge</b> big capacitors through a resistor before handling. 3-digit ceramic codes: “104” = 10×10⁴ pF = 100 nF = 0.1 μF; “473” = 47 nF.</div>
<p><b>Types:</b> ceramic (small, non-polar), film, electrolytic (large, <b>polarized</b>), tantalum (polarized, small), supercapacitor (farads), variable (tuning).</p>
<div class="box warn"><b>Pitfall</b>Don't say a capacitor “conducts” in DC steady state. It charges (transient), then blocks. And capacitors in <i>series</i> combine like resistors in <i>parallel</i>.</div>`});

L({id:'c03', t:'Current, Voltage, Resistance, Power, Energy & Ohm’s Law', tier:'core', yield:3, min:55, off:'Topic 4',
formulas:[
 ['Ohm’s law','V = I·R  (I = V/R, R = V/I)'],
 ['Power','P = V·I = I²R = V²/R  (W)'],
 ['Energy','E = P·t  (J, W·s);  1 kWh = 3.6×10⁶ J'],
 ['Resistance of a wire','R = ρL/A   (Cu: ρ = 1.68×10⁻⁸ Ω·m)'],
 ['Conductance','G = 1/R  (siemens, S)'],
 ['Temp. coefficient','R = R₀[1 + α(T − T₀)]'],
 ['Drift velocity','I = n·q·A·v_d']],
html:`
<h2>1. The four big quantities</h2>
<table><tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>Meaning</th></tr>
<tr><td>Charge</td><td>Q</td><td>coulomb (C)</td><td>amount of electric charge</td></tr>
<tr><td>Current</td><td>I</td><td>ampere (A = C/s)</td><td>rate of charge flow past a point</td></tr>
<tr><td>Voltage (EMF, potential difference)</td><td>V</td><td>volt (V = J/C)</td><td>energy per unit charge; the “push”</td></tr>
<tr><td>Resistance</td><td>R</td><td>ohm (Ω = V/A)</td><td>opposition to current</td></tr>
<tr><td>Power</td><td>P</td><td>watt (W = J/s)</td><td>rate of energy transfer</td></tr>
<tr><td>Energy</td><td>E (or W)</td><td>joule (J)</td><td>capacity to do work</td></tr>
<tr><td>Conductance</td><td>G</td><td>siemens (S = 1/Ω)</td><td>ease of current flow</td></tr></table>
<div class="box key"><b>Conventional current vs. electron flow</b>Franklin guessed that positive charge moves. <b>Conventional current</b> flows + → − (outside the source). Electrons actually drift − → +. Circuit math doesn't care, but arrows on diagrams follow conventional current. Electrons drift only ~mm/s; the <i>field</i> propagates near light speed. Voltage is always measured <i>between two points</i>; “voltage at a point” means relative to a reference (ground).</div>
<p><b>Water analogy:</b> voltage ↔ pressure, current ↔ flow rate, resistance ↔ pipe narrowness, battery ↔ pump, capacitor ↔ elastic tank, diode ↔ check valve.</p>

<h2>2. Ohm’s law (<span class="muted">Georg Ohm, 1827</span>)</h2>
<div class="eq">V = I × R      I = V / R      R = V / I</div>
<p>Valid for “ohmic” conductors (constant R, e.g., metal at constant temperature). <b>Non-ohmic</b> devices (diodes, LEDs, bulbs, thermistors) have non-linear I–V curves — a bulb’s filament R rises a lot when hot (cold R ≈ 1/10 of hot R).</p>

<h2>3. Power and energy</h2>
<div class="eq">P = V·I = I²R = V²/R        E = P·t\nkWh (utility unit) = 1000 W × 3600 s = 3.6 MJ\nCost = kWh × rate</div>
<div class="box ex"><b>Worked example</b>A 60 W bulb on 120 V: I = 0.5 A, R = 240 Ω (hot). Runs 5 h/day for 30 days: 60 W×150 h = 9 kWh → at $0.15/kWh = <b>$1.35</b>. A 10 Ω resistor carrying 0.3 A dissipates I²R = <b>0.9 W</b> — a ¼-W resistor would burn up; use ≥ 2 W (a 2× margin).</div>
<p><b>Power ratings:</b> resistors are rated by power (⅛ W, ¼ W, ½ W, 1 W, 2 W…). Always make sure P = I²R &lt; rating.</p>

<h2>4. Resistance of a conductor</h2>
<div class="eq">R = ρ L / A        (ρ = resistivity, Ω·m)</div>
<p>Longer wire → more R; thicker wire (bigger A) → less R. Doubling diameter → area ×4 → R ÷4. Resistivity (20 °C): silver 1.59×10⁻⁸, copper 1.68×10⁻⁸, gold 2.44×10⁻⁸, aluminum 2.82×10⁻⁸, tungsten 5.6×10⁻⁸, iron 9.7×10⁻⁸, nichrome 1.1×10⁻⁶, carbon ~3.5×10⁻⁵. Metals: R <b>increases</b> with temperature (positive α); semiconductors/carbon/NTC thermistors: R <b>decreases</b>.</p>
<p><b>AWG wire gauge:</b> smaller AWG number = thicker wire. AWG 10 ≈ 30 A, AWG 12 ≈ 20 A, AWG 14 ≈ 15 A (household branch circuits); AWG 22–24 for breadboard/hookup wire (~1–3 A).</p>

<h2>5. Units, prefixes, significant figures (asked on EVERY test)</h2>
<table><tr><th>Prefix</th><th>Symbol</th><th>×</th><th>Prefix</th><th>Symbol</th><th>×</th></tr>
<tr><td>tera</td><td>T</td><td>10¹²</td><td>milli</td><td>m</td><td>10⁻³</td></tr><tr><td>giga</td><td>G</td><td>10⁹</td><td>micro</td><td>μ</td><td>10⁻⁶</td></tr>
<tr><td>mega</td><td>M</td><td>10⁶</td><td>nano</td><td>n</td><td>10⁻⁹</td></tr><tr><td>kilo</td><td>k</td><td>10³</td><td>pico</td><td>p</td><td>10⁻¹²</td></tr></table>
<p>Base SI units: meter, kilogram, second, <b>ampere</b>, kelvin, mole, candela. Volt, ohm, watt, joule, coulomb, farad, henry, tesla, weber, siemens are <i>derived</i>. <b>Answer in metric with appropriate significant figures</b> (“unless otherwise requested” — it's in the rules!). Sig-fig rule for ×/÷: keep the fewest sig figs of the inputs; for +/−: fewest decimal places.</p>
<div class="box filter"><b>Tryout-filter</b>“Resistor A has twice the length and twice the diameter of resistor B (same material). What is R_A/R_B?” → L×2 gives ×2, area ×4 gives ÷4 → <b>0.5</b>. And: “Power if V doubles across fixed R?” → ×4.</div>`});

L({id:'c04', t:'Resistor Color Code, Tolerance, E-Series & Component Marking', tier:'hw', yield:3, min:30, off:'Topic 7 / Hands-on',
formulas:[
 ['4-band','(digit₁ digit₂) × multiplier ± tolerance'],
 ['5-band','(digit₁ digit₂ digit₃) × multiplier ± tolerance'],
 ['Colors','0 Black · 1 Brown · 2 Red · 3 Orange · 4 Yellow · 5 Green · 6 Blue · 7 Violet · 8 Gray · 9 White'],
 ['Multiplier extras','Gold ×0.1 · Silver ×0.01'],
 ['Tolerance','Brown ±1% · Red ±2% · Green ±0.5% · Blue ±0.25% · Violet ±0.1% · Gray ±0.05% · Gold ±5% · Silver ±10% · none ±20%']],
html:`
<h2>1. The color code</h2>
<table><tr><th>Color</th><th>Digit</th><th>Multiplier</th><th>Tolerance</th></tr>
<tr><td>Black</td><td>0</td><td>×1</td><td>—</td></tr><tr><td>Brown</td><td>1</td><td>×10</td><td>±1 %</td></tr><tr><td>Red</td><td>2</td><td>×100</td><td>±2 %</td></tr>
<tr><td>Orange</td><td>3</td><td>×1 k</td><td>—</td></tr><tr><td>Yellow</td><td>4</td><td>×10 k</td><td>—</td></tr><tr><td>Green</td><td>5</td><td>×100 k</td><td>±0.5 %</td></tr>
<tr><td>Blue</td><td>6</td><td>×1 M</td><td>±0.25 %</td></tr><tr><td>Violet</td><td>7</td><td>×10 M</td><td>±0.1 %</td></tr><tr><td>Gray</td><td>8</td><td>×100 M</td><td>±0.05 %</td></tr>
<tr><td>White</td><td>9</td><td>×1 G</td><td>—</td></tr><tr><td>Gold</td><td>—</td><td>×0.1</td><td>±5 %</td></tr><tr><td>Silver</td><td>—</td><td>×0.01</td><td>±10 %</td></tr></table>
<p><b>Mnemonic:</b> Black-Brown-Red-Orange-Yellow-Green-Blue-Violet-Gray-White = 0-9. Make up a sentence you'll never forget, e.g. <i>"Bright Brown Rabbits Often Yell, Getting Big Vocal Gains, Wow!"</i> (or the classic <i>"Big Boys Race Our Young Girls But Violet Generally Wins"</i>).</p>
<div class="box key"><b>How to read</b>Put the <b>tolerance band (gold/silver, or the band set apart by a larger gap) on the RIGHT</b>. 4-band: two digits + multiplier + tolerance. 5-band (precision): <b>three</b> digits + multiplier + tolerance. 6-band adds a temperature coefficient (ppm/°C). If there's no tolerance band, it's ±20 %.</div>
<div class="box ex"><b>Examples</b><br>Yellow–Violet–Red–Gold = 4 7 ×100 = <b>4.7 kΩ ±5 %</b> (range 4465–4935 Ω).<br>Brown–Black–Black–Red–Brown (5-band) = 1 0 0 ×100 = <b>10 kΩ ±1 %</b>.<br>Orange–Orange–Gold–Silver = 33 ×0.1 = <b>3.3 Ω ±10 %</b>.<br>Green–Blue–Black–Gold = 56 ×1 = <b>56 Ω</b> (black multiplier = ×1).</div>

<h2>2. Tolerance windows</h2>
<p>A resistor marked R ± t% is guaranteed to be between R(1−t) and R(1+t). Test questions love “Is this 4.65 kΩ measured value in tolerance for a 4.7 kΩ ±5 % resistor?” (yes). <b>Gold = 5 %</b> is the most common; <b>E12</b> series (±10 %) has 12 values per decade, <b>E24</b> (±5 %) has 24 values per decade, <b>E96</b> (±1 %) has 96.</p>
<div class="eq">E12 base values: 10 12 15 18 22 27 33 39 47 56 68 82  (×10ⁿ)\nE24 adds: 11 13 16 20 24 30 36 43 51 62 75 91</div>

<h2>3. Other component markings</h2>
<ul>
<li><b>SMD resistors:</b> 3-digit code: “103” = 10×10³ = 10 kΩ; “472” = 4.7 kΩ; “R47”/“0R47” = 0.47 Ω; 4-digit “1002” = 10.0 kΩ; “000” = 0 Ω jumper.</li>
<li><b>Ceramic/film capacitors:</b> “104” = 100 nF; “222” = 2.2 nF; “33” = 33 pF. Letter after = tolerance (J=±5 %, K=±10 %, M=±20 %).</li>
<li><b>Diodes:</b> stripe/band marks the <b>cathode</b> (“bar” in the symbol). LED: long leg = anode (+), flat edge of case = cathode.</li>
<li><b>Electrolytics:</b> stripe = negative; shorter lead negative.</li>
<li><b>Potentiometers:</b> “B10K” = linear 10 kΩ; “A” = audio/log taper.</li>
<li><b>Transistors (TO-92):</b> 2N3904 NPN (flat face toward you, pins E-B-C left→right), 2N3906 PNP. Check datasheet — pinouts vary!</li></ul>
<div class="box hw"><b>Hands-on drill</b>The SciOly “2019 Circuit/Bread Board Resistors” sheet is an official resource: expect a <i>mystery resistor</i> task where you both decode the bands <b>and</b> verify with the multimeter (ohms mode, resistor removed from circuit, don't touch both leads with your fingers). Report measured value and whether it's within tolerance.</div>
<div class="box warn"><b>Pitfalls</b>Reading backwards (check which end has gold/silver); confusing red (2) with orange (3) under poor lighting; forgetting the multiplier is an <i>exponent</i> (orange = ×10³, not ×3); mixing up 4- vs 5-band.</div>
<p>Use the <a href="#/tools/color">Resistor Color Code Trainer</a> until you can decode 20 in a row under 60 s.</p>`});

L({id:'c05', t:'Series, Parallel, Combination Circuits & Dividers', tier:'core', yield:3, min:60, off:'Topics 4 & 7',
formulas:[
 ['Series R','R_eq = R₁ + R₂ + … + Rₙ;  same I'],
 ['Parallel R','1/R_eq = 1/R₁ + 1/R₂ + …;  two: R₁R₂/(R₁+R₂);  same V'],
 ['n equal R in parallel','R/n'],
 ['Voltage divider','V_out = V_in·R₂/(R₁+R₂)'],
 ['Current divider (2 branches)','I₁ = I_total·R₂/(R₁+R₂)'],
 ['Conductance','G_par = G₁ + G₂ + …']],
html:`
<h2>1. Series circuits</h2>
<svg class="dia" viewBox="0 0 440 120" width="440"><path class="w" d="M40 60 v-30 h80"/>${SVG.res(120,30,'R1')}<path class="w" d="M208 30 h50"/>${SVG.res(258,30,'R2')}<path class="w" d="M346 30 h40 v60 h-346 v-20"/>${SVG.bat(40,62,'Vs')}</svg>
<ul><li><b>Same current</b> everywhere (one path).</li><li>Voltages add: V_s = V₁ + V₂ + … (KVL).</li><li><code>R_eq = R₁ + R₂ + …</code> — always <b>larger</b> than any single R.</li><li>If one element opens, the whole circuit stops (old Christmas lights).</li></ul>

<h2>2. Parallel circuits</h2>
<ul><li><b>Same voltage</b> across every branch.</li><li>Currents add: I_total = I₁ + I₂ + … (KCL).</li><li><code>1/R_eq = 1/R₁ + 1/R₂ + …</code> — always <b>smaller</b> than the smallest branch.</li><li>Two resistors: <code>R_eq = R₁R₂/(R₁+R₂)</code> (“product over sum”). N identical: <code>R/N</code>.</li><li>Household wiring is parallel: each appliance gets full voltage and works independently.</li></ul>
<div class="box ex"><b>Worked example</b>10 Ω ∥ 15 Ω ∥ 30 Ω: 1/R = 0.1+0.0667+0.0333 = 0.2 → <b>R = 5 Ω</b>.<br>Mixed: 6 Ω in series with (12 Ω ∥ 4 Ω): 12∥4 = 3 Ω → R_eq = <b>9 Ω</b>. On 18 V: I_tot = 2 A; V across the parallel part = 2×3 = 6 V; I(12Ω) = 0.5 A, I(4Ω) = 1.5 A.</div>

<h2>3. Method for combination circuits</h2>
<ol><li>Find the pair that is <i>clearly</i> series or parallel and collapse it.</li><li>Redraw; repeat until one R_eq remains.</li><li>Compute I_total = V/R_eq.</li><li><b>Work backward</b>: expand each step, using the same-I (series) or same-V (parallel) rule to get each element's V and I.</li><li>Check: Σ P_dissipated = P_supplied.</li></ol>
<div class="box key"><b>Shorted &amp; open elements</b>A wire across a resistor (<b>short</b>) removes it: V = 0, all current bypasses. An <b>open</b> branch carries zero current. Wires connecting two nodes are the <i>same node</i> — redraw to see that resistors are parallel even if the picture looks weird.</div>

<h2>4. Voltage divider</h2>
<div class="eq">V_out = V_in × R₂ / (R₁ + R₂)        (R₂ = resistor V_out is measured across)</div>
<p>Valid <b>only if nothing (a load) is drawing current from the output</b>. A load R_L in parallel with R₂ changes the output — compute R₂∥R_L first. Used in: sensor circuits (thermistor/LDR), potentiometers, setting bias points, level shifting, and <b>measuring an unknown resistor using only voltage measurements</b> (see hands-on).</p>
<h2>5. Current divider</h2>
<div class="eq">I₁ = I_total × R₂/(R₁+R₂)      I₂ = I_total × R₁/(R₁+R₂)\n(the <i>smaller</i> resistor gets the <i>larger</i> share)</div>
<h2>6. Ladders &amp; symmetry</h2>
<p>Ladder (R-2R) networks: collapse from the far end. Symmetry: points that are symmetric about the source share the same potential → they can be shorted together or their connecting resistor removed without changing currents (cube, bridge problems). Infinite ladder: R_eq satisfies R_eq = R₁ + (R₂ ∥ R_eq) → solve the quadratic.</p>
<div class="box filter"><b>Tryout-filter</b>“Which bulb gets brighter/dimmer when a switch is closed/bulb removed?” Bulbs in series: removing one <i>kills</i> the rest; adding a parallel branch <i>doesn't change</i> existing branches (same V) but raises source current. Adding a bulb in <i>series</i> increases R_total → <b>every</b> bulb dims. Brightness ∝ P = I²R.</div>
<div class="box hw"><b>Hands-on</b>“Hook up two LEDs so they're equally bright”: best design = <b>each LED gets its own series resistor, the two branches in parallel</b> (sharing one resistor between parallel LEDs is unreliable since real LEDs have different V_f; series-connected LEDs share exactly the same current, so they're equally bright, provided the supply exceeds the sum of their V_f plus headroom). See the LED lesson.</div>`});

L({id:'c06', t:'Batteries, Sources, Internal Resistance & Charging', tier:'core', yield:2, min:40, off:'Topics 2, 4, 7',
formulas:[
 ['Terminal voltage','V_t = ε − I·r_int'],
 ['Short-circuit current','I_sc = ε / r_int'],
 ['Cells in series','ε_tot = Σε;  r_tot = Σr'],
 ['Identical cells in parallel','ε same;  r_tot = r/n;  capacity adds'],
 ['Battery energy','E (Wh) = V × Ah;  E(J) = Wh × 3600'],
 ['Run time','t (h) ≈ capacity (Ah) / load current (A)'],
 ['Max power transfer','R_L = r_int → P_max = ε²/(4r)']],
html:`
<h2>1. EMF vs terminal voltage</h2>
<p>A real source = ideal voltage source (EMF ε) <b>in series with an internal resistance r</b>. When current I flows, the terminal voltage drops: <code>V_t = ε − I·r</code>. Open-circuit V = ε. Short-circuit current = ε/r (limited by r — and dangerous for car batteries, lithium cells!). A “dead” battery often still reads ≈1.5 V open-circuit but has huge r — its voltage collapses under load. <b>Lesson: measure batteries under load.</b></p>
<div class="box ex"><b>Worked example</b>ε = 9.0 V, r = 2.0 Ω, load 16 Ω: I = 9/18 = 0.50 A; V_t = 9 − 0.5×2 = <b>8.0 V</b> (= 0.5×16 ✓). Power wasted inside = I²r = 0.5 W.</div>
<h2>2. Combining cells</h2>
<ul><li><b>Series</b> (+ to −): voltages add, capacity (Ah) stays the same. 4 × 1.5 V AA = 6 V.</li><li><b>Parallel</b> (+ to +): voltage stays, capacity adds, internal r drops. Only parallel <i>identical</i> cells (otherwise they fight/charge each other).</li><li>Series-parallel “packs” (e.g., 3S2P) used for laptops/e-bikes.</li><li>Reversed cell in series = subtracts.</li></ul>
<h2>3. Battery types & facts</h2>
<table><tr><th>Type</th><th>Nominal V</th><th>Notes</th></tr>
<tr><td>Alkaline AA/AAA/C/D</td><td>1.5</td><td>Primary (non-rechargeable); all sizes 1.5 V; bigger = more mAh</td></tr>
<tr><td>Zinc-carbon</td><td>1.5</td><td>Cheap, old</td></tr>
<tr><td>NiMH / NiCd</td><td>1.2</td><td>Rechargeable AA; NiCd memory effect</td></tr>
<tr><td>Lithium coin CR2032</td><td>3.0</td><td>Primary, ~225 mAh</td></tr>
<tr><td>Li-ion / Li-poly</td><td>3.6–3.7 (4.2 full, ~3.0 empty)</td><td>Phones/laptops; fire risk if punctured or overcharged</td></tr>
<tr><td>Lead-acid</td><td>2.0 per cell (12 V = 6 cells)</td><td>Cars; 2.1 V/cell full; sulfuric acid</td></tr>
<tr><td>9 V “transistor”</td><td>9</td><td>6 small cells in series</td></tr>
<tr><td>Lemon/potato (zinc + copper electrodes)</td><td>≈0.9 V each, very high r</td><td>Acid electrolyte; current only microamps — series cells needed to light an LED</td></tr></table>
<p><b>Voltaic pile (Alessandro Volta, 1800)</b> = first chemical battery (zinc + copper discs with brine-soaked cloth). <b>Galvani</b> (1780s) “animal electricity” (frog legs) inspired it.</p>
<h2>4. Capacity, runtime and charging</h2>
<div class="eq">Capacity: mAh or Ah;  Energy (Wh) = V × Ah\n2000 mAh at 3.7 V = 7.4 Wh\nRuntime ≈ capacity / current  (ideal; real packs lose 10–30 %)</div>
<div class="box hw"><b>Official sample task (USB charger)</b>“Given a USB charger, read the label and provide details of the various output power levels it can provide and calculate how long it would take to charge a specific battery.” Label example: <code>OUTPUT: 5V⎓3A / 9V⎓2A / 12V⎓1.5A</code> → P = 15 W / 18 W / 18 W. Charging a 3000 mAh, 3.7 V battery (11.1 Wh) at 5 V/2 A (10 W) at 85 % efficiency: t = 11.1/(10×0.85) = <b>1.3 h</b>. Read “INPUT” too (100–240 V~, 50/60 Hz, 0.5 A — AC input!). “⎓” means DC, “~” means AC. Mind “C-rate”: 1C = charge in 1 h.</div>
<h2>5. Maximum power transfer</h2>
<p>A source delivers maximum power to a load when <b>R_load = r_internal</b> (Thevenin/source R); efficiency is then only 50 %. For power lines you want low R_line instead (high efficiency) → transmit at high V, low I (why transformers exist).</p>
<div class="box warn"><b>Safety</b>Never short a battery; never mix old/new cells; never charge primary cells; Li-ion: no puncture, no over-discharge; don't charge in an unattended place. Hot battery = stop.</div>`});
