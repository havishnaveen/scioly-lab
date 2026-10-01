/* ===== THERMODYNAMICS — Part 1: temperature, heat units, specific heat, phases, conduction, convection/radiation ===== */

L({id:'t01', t:'Temperature, Temperature Scales, Conversions & Thermometry', tier:'core', yield:3, min:40, off:'Written: temperature conversions',
formulas:[
 ['°C → K','T(K) = T(°C) + 273.15'],
 ['°C → °F','T(°F) = (9/5)·T(°C) + 32'],
 ['°F → °C','T(°C) = (5/9)·(T(°F) − 32)'],
 ['°F → Rankine','T(°R) = T(°F) + 459.67;  °R = (9/5)K'],
 ['Differences','ΔT(K) = ΔT(°C);  ΔT(°F) = (9/5)ΔT(°C) = ΔT(°R)'],
 ['Fixed points','Water freezes 0 °C = 32 °F = 273.15 K; boils 100 °C = 212 °F = 373.15 K (1 atm); triple point 273.16 K (0.01 °C, 611.657 Pa)'],
 ['Absolute zero','0 K = −273.15 °C = −459.67 °F'],
 ['Same number','−40 °C = −40 °F']],
html:`
<h2>1. What temperature is</h2>
<p><b>Temperature</b> measures the <i>average translational kinetic energy per molecule</i> (for an ideal gas ⟨KE⟩ = (3/2)k_BT). It determines the <b>direction of spontaneous heat flow</b> (hot → cold). It is an <b>intensive</b> property (doesn't depend on amount). <b>Heat</b> is energy in transit <i>because of a temperature difference</i>; <b>internal energy</b> is the total microscopic energy. A cup of boiling water and a bathtub of warm water: the cup has higher T, the tub has more thermal energy.</p>
<h2>2. The scales</h2>
<table><tr><th>Scale</th><th>Inventor / date</th><th>Ice point</th><th>Steam point</th><th>Notes</th></tr>
<tr><td><b>Celsius (°C)</b></td><td>Anders Celsius, 1742 (originally 0 = boiling, 100 = freezing; reversed by Linnaeus/Strömer c. 1744)</td><td>0</td><td>100</td><td>SI-accepted; 100 divisions</td></tr>
<tr><td><b>Fahrenheit (°F)</b></td><td>Daniel Gabriel Fahrenheit, 1724 (mercury thermometer 1714)</td><td>32</td><td>212</td><td>180 divisions between; 0 °F = brine freezing; 96 ≈ body (originally)</td></tr>
<tr><td><b>Kelvin (K)</b></td><td>William Thomson (Lord Kelvin), 1848</td><td>273.15</td><td>373.15</td><td><b>SI base unit</b>; no “degree” symbol; absolute scale; redefined 2019 via k_B = 1.380649×10⁻²³ J/K</td></tr>
<tr><td><b>Rankine (°R)</b></td><td>William Rankine, 1859</td><td>491.67</td><td>671.67</td><td>absolute version of Fahrenheit</td></tr>
<tr><td>Réaumur (°Ré)</td><td>René de Réaumur, 1730</td><td>0</td><td>80</td><td>historical</td></tr>
<tr><td>Newton, Delisle, Rømer</td><td>c. 1700</td><td>—</td><td>—</td><td>historical</td></tr></table>
<div class="box key"><b>Conversion toolkit</b><div class="eq">K = °C + 273.15\n°F = 1.8 × °C + 32\n°C = (°F − 32)/1.8\nK = (°F − 32)/1.8 + 273.15 = (°F + 459.67)/1.8\n°Ré = 0.8 × °C</div>
Temperature <b>differences</b> convert without the offset: a 10 °C change = 10 K = 18 °F.</div>
<div class="box ex"><b>Worked examples</b>72 °F → (72−32)/1.8 = <b>22.2 °C</b> = <b>295.4 K</b>.  350 K → 76.85 °C → 170.3 °F.  Body temperature 98.6 °F = 37.0 °C = 310.15 K.  Liquid nitrogen 77 K = −196 °C = −321 °F.  Surface of the Sun ≈ 5772 K ≈ 5500 °C.  Coldest possible: 0 K = −459.67 °F.  Room 20 °C = 68 °F = 293.15 K.</div>
<div class="box filter"><b>Tryout-filter</b>• Why must <b>absolute</b> temperature (K) be used in gas laws, Carnot efficiency, radiation (T⁴), entropy (Q/T)? Because those formulas involve <i>ratios</i> or proportionality to T.<br>• “At what temperature do °C and °F scales coincide?” → −40.<br>• “Is a temperature <i>increase</i> of 15 °C the same as 15 K?” → yes (and 27 °F).<br>• Celsius used to be defined by water’s fixed points; it is now defined from kelvin (1 °C ≡ 1 K, T_C = T_K − 273.15).</div>
<h2>3. Absolute zero &amp; the third law</h2>
<p>At 0 K, a perfect crystal’s entropy is zero and molecular motion is at its minimum (zero-point motion remains quantum mechanically). Unreachable in a finite number of steps. Record lab temperatures: ~ 38 pK (BEC experiments). <b>Kelvin</b> deduced the value ≈ −273 °C from gas extrapolation (Amontons, Charles, Gay-Lussac, then Kelvin).</p>
<h2>4. Thermometers &amp; temperature measurement</h2>
<table><tr><th>Device</th><th>Principle</th><th>Notes</th></tr>
<tr><td>Liquid-in-glass (mercury, alcohol)</td><td>thermal expansion of liquid in a capillary</td><td>mercury −39 to 357 °C; alcohol to −114 °C; mercury is toxic → banned in many labs</td></tr>
<tr><td>Bimetallic strip / dial</td><td>differential expansion of two metals</td><td>thermostats, oven dials</td></tr>
<tr><td><b>Thermocouple</b></td><td><b>Seebeck effect</b> (1821): two dissimilar metals joined → mV ∝ ΔT between junctions</td><td>wide range; Type K (chromel–alumel, −200 to 1350 °C, ≈ 41 μV/°C); Type J, T, E, N, R, S; needs a reference (cold) junction; used by SciOly supervisors</td></tr>
<tr><td><b>RTD</b> (Pt100)</td><td>metal resistance rises with T (R₀ = 100 Ω at 0 °C; α = 0.00385/°C)</td><td>very accurate, linear</td></tr>
<tr><td><b>Thermistor</b> (NTC)</td><td>semiconductor R falls steeply with T</td><td>sensitive, non-linear (Steinhart–Hart equation)</td></tr>
<tr><td>IR thermometer / pyrometer</td><td>measures emitted thermal radiation (Stefan–Boltzmann, emissivity setting!)</td><td>shiny metal reads wrong (low ε)</td></tr>
<tr><td>Gas thermometer</td><td>P (constant V) ∝ T</td><td>primary standard; basis of Kelvin scale</td></tr>
<tr><td>Digital IC sensors (LM35, TMP36, DS18B20)</td><td>diode V_BE ∝ T</td><td>10 mV/°C (LM35)</td></tr>
<tr><td>Liquid-crystal strips, thermochromic</td><td>color change</td><td>aquarium/fever strips</td></tr></table>
<div class="box hw"><b>Hands-on: thermometer use &amp; calibration</b>• Immerse the sensing tip fully (wrong immersion depth is a common error), keep it off container walls/bottom, wait for equilibrium (30–60 s), read at eye level.<br>• <b>Ice-point calibration:</b> crushed ice + a little water (slush) stirred → 0 °C (±0.1 °C). <b>Boiling point</b> depends on altitude (≈ 100 − 0.0034×(elevation in m) °C — at 1500 m ≈ 95 °C).<br>• Two-point calibration: slope m = 100/(reading_boil − reading_ice), offset from the ice reading. Compare your thermometer to the supervisor’s thermocouple.<br>• Response time matters for <b>cooling curves</b>: a thermometer that's slower than the process lags.</div>
<div class="box hist"><b>History</b>Galileo thermoscope (c. 1593), Santorio (quantified), Florentine Accademia del Cimento sealed alcohol thermometers (1650s), Newton’s scale (1701), Fahrenheit (1714/1724), Réaumur (1730), Celsius (1742), <b>Kelvin absolute scale 1848</b>, Rankine 1859, ITS-90 (International Temperature Scale 1990), 2019 SI redefinition of kelvin.</div>`});

L({id:'t02', t:'Heat, Energy & Units (J, cal, BTU, kWh …)', tier:'core', yield:3, min:40, off:'Written: definitions of heat units',
formulas:[
 ['Calorie (thermochemical)','1 cal = 4.184 J (heat to raise 1 g of water by 1 °C)'],
 ['Nutritional Calorie','1 Cal = 1 kcal = 1000 cal = 4184 J'],
 ['BTU','1 BTU = 1055.06 J ≈ 252 cal (heat to raise 1 lb water by 1 °F)'],
 ['kWh','1 kWh = 3.6×10⁶ J = 3412 BTU'],
 ['Therm','1 therm = 10⁵ BTU = 105.5 MJ'],
 ['erg','1 erg = 10⁻⁷ J'],
 ['electron-volt','1 eV = 1.602×10⁻¹⁹ J'],
 ['Power','1 W = 1 J/s;  1 hp = 745.7 W;  1 BTU/h = 0.2931 W;  1 ton of refrigeration = 12 000 BTU/h = 3.517 kW'],
 ['Mechanical equivalent of heat','J = 4.184 J/cal (Joule 1840s: 4.15 J/cal)']],
html:`
<h2>1. What “heat” is</h2>
<p><b>Heat (Q)</b> is energy transferred between a system and surroundings <b>because of a temperature difference</b>. It is <b>not</b> a property a body “contains” — the stored quantity is <b>internal energy U</b>. Heat and <b>work</b> are two ways of transferring energy (path-dependent “process quantities”); U, T, P, V, S, H are <b>state functions</b>. Heat flows spontaneously hot → cold until <b>thermal equilibrium</b>.</p>
<div class="box key"><b>Vocabulary that gets tested</b>• <b>Heat</b> (energy in transit) vs <b>temperature</b> (average KE) vs <b>thermal/internal energy</b> (total).<br>• <b>Sensible heat</b>: heat that changes T. <b>Latent heat</b>: heat that changes <i>phase</i> at constant T.<br>• <b>Heat capacity</b> C (J/K): heat per degree for a whole object; <b>specific heat</b> c (J/kg·K): per unit mass; <b>molar heat capacity</b> (J/mol·K).<br>• <b>Caloric theory</b> (Lavoisier; obsolete): heat as a weightless fluid “caloric” → replaced by the <b>kinetic theory</b> (heat = molecular motion).</div>
<h2>2. Units</h2>
<table><tr><th>Unit</th><th>Definition</th><th>In joules</th></tr>
<tr><td><b>joule (J)</b> (SI)</td><td>energy of 1 N over 1 m = 1 W·s = 1 kg·m²/s²</td><td>1</td></tr>
<tr><td><b>calorie (cal)</b></td><td>heat to warm 1 g of water 1 °C (around 14.5 °C)</td><td>4.184 (thermochemical); 4.1855 (15 °C); 4.1868 (IT)</td></tr>
<tr><td><b>kilocalorie / Calorie (Cal)</b></td><td>1000 cal; food “calorie” with a capital C</td><td>4184</td></tr>
<tr><td><b>BTU</b> (British Thermal Unit)</td><td>heat to warm 1 lb of water 1 °F</td><td>≈ 1055</td></tr>
<tr><td><b>therm</b></td><td>100 000 BTU (natural gas billing)</td><td>1.055×10⁸</td></tr>
<tr><td><b>kilowatt-hour</b></td><td>energy of 1 kW for 1 h</td><td>3.6×10⁶</td></tr>
<tr><td>foot-pound (ft·lbf)</td><td>work in US units</td><td>1.356</td></tr>
<tr><td>erg</td><td>CGS energy</td><td>10⁻⁷</td></tr>
<tr><td>electron-volt</td><td>atomic scale</td><td>1.602×10⁻¹⁹</td></tr></table>
<div class="box ex"><b>Worked examples</b>1 Cal = 4184 J; a 250 Cal snack = 1.05 MJ = 0.29 kWh. 1 BTU = 252 cal = 1055 J. 3000 BTU/h air conditioner ≈ 879 W of heat. Heating 1 kg of water 1 °C takes 4184 J = 1 Cal = 3.97 BTU.</div>
<div class="box filter"><b>Tryout-filter</b>The “calorie vs Calorie” trap: 1 Cal = <b>1000</b> cal. Also: the joule is the SI unit of <b>both</b> heat and work and energy. A “ton” of refrigeration = 12 000 BTU/h (the heat absorbed to melt a short ton of ice in 24 h, 288 000 BTU ÷ 24).</div>
<h2>3. Mechanical equivalent of heat — James Prescott Joule</h2>
<p>Joule’s paddle-wheel experiment (1843–1850): falling weights turn paddles in an insulated water tank; the temperature rise shows that mechanical work → heat at a fixed exchange rate: <b>≈ 4.18 J per calorie</b>. This established <b>energy conservation</b> (first law) and killed the caloric theory together with Rumford’s cannon boring (1798).</p>
<div class="eq">Water of mass m raised by ΔT by a falling mass M from height h (n drops):  n·M·g·h = m·c·ΔT\nEx: 10 kg falls 2 m, 20 times → 3920 J → warms 1 kg water by 0.94 °C.</div>
<h2>4. Heat transfer rate &amp; power</h2>
<p>Rate of heat flow P = Q/t (W). Electric heaters: Q = Pt = I²Rt (<b>Joule heating</b>, Joule’s first law, 1840/41) — e.g., 500 W heater × 60 s = 30 kJ warms 100 g of water by 72 °C (ideal).</p>`});

L({id:'t03', t:'Heat Capacity, Specific Heat & Calorimetry', tier:'core', yield:3, min:70, off:'Written: heat capacity & specific heat calculations',
formulas:[
 ['Sensible heat','Q = m·c·ΔT = C·ΔT'],
 ['Heat capacity','C = m·c (J/K);  molar: C_m = c·M'],
 ['Calorimetry (no loss)','Σ Q = 0:  m₁c₁(T_f − T₁) + m₂c₂(T_f − T₂) = 0'],
 ['Final temperature (mixing)','T_f = (m₁c₁T₁ + m₂c₂T₂)/(m₁c₁ + m₂c₂)'],
 ['Gases','C_p − C_v = R (per mole);  γ = C_p/C_v;  monatomic C_v = 3/2 R, diatomic 5/2 R'],
 ['Dulong–Petit','C_m ≈ 3R = 24.9 J/mol·K for many solids at room T'],
 ['Water c','4.184 J/g·K = 1 cal/g·°C = 4184 J/kg·K'],
 ['Calorimeter constant','C_cal: calorimeter absorbs C_cal·ΔT']],
html:`
<h2>1. The master equation</h2>
<div class="eq">Q = m c ΔT        (Q in J when c in J/kg·K, m in kg; or cal with c in cal/g·°C, m in g)</div>
<p><b>Specific heat c</b>: energy to raise 1 kg (or 1 g) of the substance by 1 K. <b>Heat capacity C</b> = mc (per whole object). <b>Water has an unusually high c (4.18)</b>, due to hydrogen bonding — oceans moderate climate, coolants, hot water bottles. Metals have low c (heat/cool quickly).</p>
<table><tr><th>Substance</th><th>c (J/g·K)</th><th>Substance</th><th>c (J/g·K)</th></tr>
<tr><td>Water (liquid)</td><td><b>4.184</b></td><td>Aluminum</td><td>0.897</td></tr>
<tr><td>Ice (−10 °C)</td><td>2.09</td><td>Glass</td><td>0.84</td></tr>
<tr><td>Steam (100 °C, 1 atm)</td><td>2.01</td><td>Iron / steel</td><td>0.449</td></tr>
<tr><td>Ethanol</td><td>2.44</td><td>Copper</td><td>0.385</td></tr>
<tr><td>Air (const. P)</td><td>1.005</td><td>Silver</td><td>0.235</td></tr>
<tr><td>Wood</td><td>≈1.7</td><td>Mercury</td><td>0.140</td></tr>
<tr><td>Concrete</td><td>≈0.88</td><td>Lead / gold</td><td>0.129</td></tr>
<tr><td>Olive oil</td><td>≈2.0</td><td>Granite</td><td>0.79</td></tr></table>
<div class="box ex"><b>Worked example 1</b>Heat 250 g of water from 20.0 °C to 85.0 °C: Q = 250 × 4.184 × 65.0 = <b>68 000 J = 68 kJ</b>. Using a 500 W heater at 100 % efficiency: t = 136 s.<br><b>Worked example 2 (mixing)</b>150 g of water at 80 °C poured into 250 g at 20 °C: T_f = (150×80 + 250×20)/400 = <b>42.5 °C</b> (same c cancels).<br><b>Worked example 3 (hot metal)</b>A 200 g copper block at 300 °C dropped into 500 g water at 20 °C (ignoring losses): 200×0.385(300 − T) = 500×4.184(T − 20) → 23100 − 77T = 2092T − 41840 → T = 64940/2169 = <b>29.9 °C</b>.</div>
<h2>2. Calorimetry</h2>
<p>A <b>calorimeter</b> (insulated cup, often Styrofoam “coffee-cup” or a Dewar) isolates the exchange: <b>heat lost by hot = heat gained by cold</b>. Real calorimeters absorb heat too: add <b>C_cal</b> (or a “water equivalent” = C_cal/c_water grams of water). Steps: (1) choose sign convention Σ Q = 0, (2) write each Q, (3) solve for T_f or c, (4) check T_f lies between the start temperatures.</p>
<div class="box key"><b>Finding an unknown specific heat</b>Heat the metal sample to a known T (boiling water 100 °C), drop into calorimeter water of known mass/T, record the final T. c_metal = [m_w c_w + C_cal](T_f − T_w)/[m_m (T_m − T_f)]. <b>Sources of error:</b> heat loss during transfer, evaporation, calorimeter absorption, thermometer lag, incomplete mixing.</div>
<h2>3. Gases &amp; molar heat capacities</h2>
<p>For gases, how you heat matters: at <b>constant volume</b> (all heat raises U): C_v; at <b>constant pressure</b> (some heat does expansion work): C_p &gt; C_v. <code>C_p − C_v = R</code> (Mayer’s relation, <b>Julius Robert von Mayer, 1842</b>). <code>γ = C_p/C_v</code>: monatomic (He, Ar) 1.67; diatomic (N₂, O₂, air) 1.40; polyatomic (CO₂) ≈ 1.3. <b>Equipartition:</b> each quadratic degree of freedom contributes ½k_BT per molecule (½RT per mole): monatomic f = 3 (C_v = 3R/2), diatomic f = 5 at room T (C_v = 5R/2).</p>
<div class="box ex"><b>Example</b>Heat 2.00 mol of He at constant volume from 300 K to 400 K: Q = n(3/2)RΔT = 2×1.5×8.314×100 = <b>2494 J</b>. At constant pressure: Q = n(5/2)RΔT = 4157 J.</div>
<p><b>Dulong–Petit law (1819):</b> molar heat capacity of most solid elements at room T ≈ 3R ≈ 25 J/mol·K → used historically to find atomic masses. Fails at low T (quantum — Einstein 1907, Debye 1912) and for light elements (C, Be, B, Si).</p>
<div class="box filter"><b>Tryout-filter</b>• Two objects, equal mass, same heat input: which warms more? → the one with the lower c. • “A 1 kg iron and 1 kg aluminum at 100 °C are placed on ice; which melts more?” → Al (c is 2× larger). • Heat capacity vs specific heat (extensive vs intensive). • Why are coastal climates milder? → water’s high c and large thermal mass. • “Specific heat of water in BTU/lb·°F?” → 1.00 (by definition).</div>`});

L({id:'t04', t:'Phases of Matter, Phase Changes & Latent Heat', tier:'core', yield:3, min:60, off:'Written: phase transitions, latent heat, phases of matter',
formulas:[
 ['Latent heat','Q = m·L  (L_f fusion, L_v vaporization, L_s sublimation)'],
 ['Water L_f','334 kJ/kg = 79.7 cal/g (≈ 80)'],
 ['Water L_v (100 °C)','2256 kJ/kg = 539 cal/g (≈ 540)'],
 ['Ice → steam, total','Q = m c_ice ΔT + m L_f + m c_w ΔT + m L_v + m c_steam ΔT'],
 ['Clausius–Clapeyron','dP/dT = L/(T·Δv) → ln(P₂/P₁) = −(L_m/R)(1/T₂ − 1/T₁)'],
 ['Triple point of water','273.16 K, 611.657 Pa; critical point 647.1 K, 22.06 MPa'],
 ['Gibbs phase rule','F = C − P + 2']],
html:`
<h2>1. The phases (states) and changes</h2>
<p>Solid (fixed shape/volume; particles vibrate in place), liquid (fixed volume, takes shape), gas (fills container), <b>plasma</b> (ionized gas), plus <b>Bose–Einstein condensate</b>, supercritical fluid, liquid crystals, superfluid, etc. Phase change names:</p>
<table><tr><th>Change</th><th>Name</th><th>Heat?</th></tr>
<tr><td>solid → liquid</td><td><b>melting / fusion</b></td><td>absorbs L_f</td></tr><tr><td>liquid → solid</td><td><b>freezing / solidification</b></td><td>releases L_f</td></tr>
<tr><td>liquid → gas</td><td><b>vaporization</b> (evaporation at surface at any T; <b>boiling</b> throughout at the boiling point)</td><td>absorbs L_v</td></tr>
<tr><td>gas → liquid</td><td><b>condensation</b></td><td>releases L_v</td></tr>
<tr><td>solid → gas</td><td><b>sublimation</b> (dry ice CO₂ at −78.5 °C, iodine, naphthalene)</td><td>absorbs</td></tr>
<tr><td>gas → solid</td><td><b>deposition</b> (frost)</td><td>releases</td></tr>
<tr><td>gas → plasma / plasma → gas</td><td>ionization / recombination</td><td></td></tr></table>
<h2>2. Latent heat</h2>
<div class="eq">Q = m L        (temperature stays constant during the change!)</div>
<p>Energy goes into breaking/forming intermolecular bonds, not into KE. Water’s L_v is huge (≈ 5.4× the energy needed to heat the same water from 0 to 100 °C) → steam burns are worse than boiling water burns; sweating cools; evaporation is a major heat-loss path for hot water in the SciOly device (covering the beaker reduces it!).</p>
<table><tr><th>Substance</th><th>Melting point</th><th>L_f (kJ/kg)</th><th>Boiling point</th><th>L_v (kJ/kg)</th></tr>
<tr><td>Water</td><td>0 °C</td><td><b>334</b></td><td>100 °C</td><td><b>2256</b></td></tr><tr><td>Ethanol</td><td>−114 °C</td><td>108</td><td>78.4 °C</td><td>855</td></tr>
<tr><td>Nitrogen</td><td>−210 °C</td><td>25.7</td><td>−195.8 °C</td><td>199</td></tr><tr><td>Lead</td><td>327.5 °C</td><td>23</td><td>1750 °C</td><td>871</td></tr>
<tr><td>Copper</td><td>1085 °C</td><td>205</td><td>2562 °C</td><td>4730</td></tr><tr><td>Aluminum</td><td>660 °C</td><td>397</td><td>2470 °C</td><td>10 500</td></tr></table>
<div class="box ex"><b>Worked example — heating curve</b>Heat 100 g of ice at −20 °C to steam at 120 °C:<br>1) ice −20→0: 100×2.09×20 = 4180 J<br>2) melt: 100×334 = 33 400 J<br>3) water 0→100: 100×4.184×100 = 41 840 J<br>4) boil: 100×2256 = 225 600 J<br>5) steam 100→120: 100×2.01×20 = 4020 J<br><b>Total = 309 040 J ≈ 309 kJ</b> (note the boiling step is 73 % of it).</div>
<div class="box ex"><b>Ice-water addition (SciOly “ice bonus” physics)</b>Adding 20 g of 0 °C water to 100 g of 70 °C water: T = (100×70 + 20×0)/120 = 58.3 °C. Adding 20 g of <i>ice</i> at 0 °C: 100×4.184×(70 − T) = 20×334 + 20×4.184×T → T = (29288 − 6680)/(418.4 + 83.7) = 45.0 °C — ice cools far more than the same mass of ice water.</div>
<h2>3. Phase diagram (P–T)</h2>
<svg class="dia" viewBox="0 0 440 240" width="440"><path class="w" d="M50 210 H410 M50 210 V20"/><path class="w cold" d="M50 150 C150 149,200 140,230 130"/><path class="w hot" d="M230 130 C300 100,350 60,390 30"/><path class="w" d="M230 130 C215 160,205 190,195 210" stroke="var(--info)"/>
<text x="90" y="100">SOLID</text><text x="290" y="170">GAS</text><text x="200" y="70">LIQUID</text><circle cx="230" cy="130" r="4" fill="var(--circ)"/><text x="238" y="150" style="fill:var(--circ)">triple pt</text><circle cx="392" cy="28" r="4" fill="var(--therm)"/><text x="330" y="26" style="fill:var(--therm)">critical pt</text><text x="20" y="14">P</text><text x="415" y="226">T</text></svg>
<ul><li><b>Triple point</b>: solid, liquid, gas coexist (water: 0.01 °C, 611.7 Pa). <b>Critical point</b>: beyond it liquid and gas are indistinguishable (supercritical fluid). Water’s solid–liquid line <b>slopes backward</b> (negative slope): ice melts under pressure — why ice skates glide (partially true); most substances slope forward.</li>
<li><b>Boiling point</b> depends on pressure: lower at altitude; pressure cooker raises it (121 °C at 2 atm). <b>Melting</b> point depression with solutes (salt on roads: −21 °C eutectic), freezing-point depression and boiling-point elevation (colligative).</li>
<li><b>Humidity &amp; evaporation:</b> evaporation rate rises with T, surface area, air movement; falls with humidity. Dew point; wet-bulb temperature.</li>
<li><b>Supercooling/superheating:</b> liquids can go below freezing/above boiling without nucleation sites (superheated water in a microwave — burns!).</li></ul>
<div class="box filter"><b>Tryout-filter</b>• During melting, T is constant although heat is added — where does the energy go? (potential energy of bonds). • “Which has more stored heat: 1 kg steam at 100 °C or 1 kg water at 100 °C?” → steam by 2256 kJ. • Place the heating-curve steps in order and compute total Q. • “Why does water in a covered beaker stay hot longer?” → less evaporative cooling (L_v!).</div>`});

L({id:'t05', t:'Heat Transfer I — Conduction, Thermal Conductivity & R-Values', tier:'core', yield:3, min:70, off:'Written: heat transfer, thermal conductivity',
formulas:[
 ['Fourier’s law','P = Q/t = k·A·ΔT/L  (W);  flux q = −k·dT/dx'],
 ['Thermal resistance','R_th = L/(kA)  (K/W);  P = ΔT/R_th'],
 ['R-value (per area)','R = L/k  (m²·K/W, SI);  U = 1/R_total  (W/m²K)'],
 ['US R-value','1 (ft²·°F·h/BTU) = 0.1761 m²·K/W ⇒ US R = SI R × 5.678'],
 ['Layers in series','R_total = R₁ + R₂ + …;  same heat flow'],
 ['Layers in parallel (paths)','1/R = 1/R₁ + 1/R₂ … (equivalent: G = Σ kA/L)'],
 ['Thermal diffusivity','α = k/(ρc)  (m²/s)'],
 ['Cylinder wall','P = 2πkℓ(T₁ − T₂)/ln(r₂/r₁)']],
html:`
<div class="box unv"><b>Device-relevant</b>Conduction through the device walls, lid, and thermal bridges is one of the main heat-loss paths you design against. R-values are named in the event's materials references (“thermal resistance of most common materials can be found on Wikipedia, higher R = better insulator”).</div>
<h2>1. Conduction</h2>
<p><b>Conduction</b>: transfer of thermal energy through a material by <b>molecular collisions</b> and (in metals) free-electron diffusion, with <b>no bulk motion</b>. Needs contact; fastest in solids (metals), slower in liquids, slowest in gases (and absent in vacuum).</p>
<div class="eq">P = k A (T_hot − T_cold) / L        (Fourier’s law, <b>Joseph Fourier 1822</b>)\nP: W   k: W/(m·K)   A: m²   L: thickness (m)</div>
<ul><li>Heat flow ∝ area, ∝ ΔT, ∝ 1/thickness. Doubling the thickness halves the loss. Doubling the area doubles it.</li><li><b>k</b> = thermal conductivity (higher = better conductor). <b>Insulators have low k</b>.</li></ul>
<table><tr><th>Material</th><th>k (W/m·K)</th><th>Material</th><th>k (W/m·K)</th></tr>
<tr><td>Silver</td><td>429</td><td>Glass (window)</td><td>≈ 0.8–1.0</td></tr><tr><td>Copper</td><td>401</td><td>Water (still)</td><td>0.60</td></tr>
<tr><td>Aluminum</td><td>237</td><td>Brick</td><td>0.6–1.0</td></tr><tr><td>Steel</td><td>≈ 45–55</td><td>Wood (pine, across grain)</td><td>0.12–0.17</td></tr>
<tr><td>Stainless steel</td><td>≈ 15</td><td>Cardboard / paper</td><td>≈ 0.05–0.07</td></tr>
<tr><td>Ice</td><td>2.2</td><td>Wool / cotton / felt</td><td>≈ 0.035–0.05</td></tr>
<tr><td>Concrete</td><td>1.0–1.7</td><td>Fiberglass batt</td><td>0.035–0.045</td></tr>
<tr><td>Expanded polystyrene (EPS)</td><td>0.033–0.040</td><td>Cork</td><td>≈ 0.04</td></tr>
<tr><td>Polyurethane foam</td><td>0.022–0.028</td><td>Still air (25 °C)</td><td><b>0.026</b></td></tr>
<tr><td>Aerogel</td><td>0.013–0.020</td><td>Vacuum</td><td>≈ 0 (no conduction; radiation only)</td></tr></table>
<div class="box key"><b>Why insulators work: trapped still air</b>Most insulation (foam, fiber, wool, down, bubble wrap) is mostly <b>air trapped in tiny pockets</b> so it can't convect; the solid just holds the pockets. Air itself (k = 0.026) is a great insulator <i>if motionless</i>. Hence “double-pane windows”, “thermos vacuum”, “foam coffee cups”.</div>
<h2>2. Thermal resistance and R-value</h2>
<div class="eq">R_th = L/(kA)   (K/W)      P = ΔT/R_th   (like Ohm’s law: ΔT ↔ V, P ↔ I, R_th ↔ R)\nLayer (per area):  R = L/k  (m²K/W)   → <b>higher R = better insulation</b></div>
<ul><li><b>Layers in series</b> (wall sandwich): R add; ΔT divides in proportion to R. <b>Parallel paths</b> (studs + insulation; a metal bolt through foam): conductances add — the <b>thermal bridge</b> dominates!</li><li>US building R-value units: ft²·°F·h/BTU. <b>R-19</b> fiberglass ≈ 3.35 m²K/W. 1 inch of EPS ≈ R-4 (US) → 0.7 m²K/W. Convert: US R ÷ 5.678 = SI R.</li><li>Air films add small R at surfaces (≈ 0.12 m²K/W).</li></ul>
<div class="box ex"><b>Worked example</b>Wall: 12 cm wood (k=0.15) then 5 cm EPS (k=0.035). R = 0.12/0.15 + 0.05/0.035 = 0.80 + 1.43 = 2.23 m²K/W. For A = 10 m², ΔT = 20 K: P = A·ΔT/R = 10×20/2.23 = <b>89.7 W</b>. Intermediate temperature at the wood/EPS interface (hot side 20 °C above outside): ΔT over wood = 20×0.80/2.23 = 7.2 K.</div>
<div class="box ex"><b>Worked example (beaker-scale)</b>A 250 mL beaker insulated by 2 cm of foam (k = 0.035) with an average area of 0.028 m², ΔT = 40 K: P = 0.035×0.028×40/0.02 = <b>1.96 W</b>. Over 25 min = 2940 J. 100 g water (c = 4.184) would cool 7 K from conduction alone; the open top (evaporation + convection + radiation) typically dominates!</div>
<h2>3. Conduction facts to memorize</h2>
<ul><li><b>Metals feel cold</b> because they conduct heat away from your hand fast, not because they’re colder (all at room T). Wood/foam feel warm.</li><li><b>Wiedemann–Franz law:</b> metals’ k ∝ σT (good electrical conductors are good thermal conductors). Diamond: k ≈ 2000 (phonons) but electrically insulating.</li><li><b>Thermal contact resistance</b>: rough contacting surfaces → gaps → extra R; thermal paste reduces it.</li><li><b>Steady state</b> vs <b>transient</b>: steady state has a constant temperature profile; transient uses diffusivity α (heat equation).</li></ul>
<div class="box filter"><b>Tryout-filter</b>• “If thickness doubles and area doubles, what happens to heat flow?” → unchanged. • “Two layers: which one should go on the hot side for max total R?” → order doesn’t change total R in series (but may change condensation/interface temperatures). • “Why should you never let the insulation be compressed?” → trapped-air volume falls, k ↑. • Double layer with an air gap: a gap helps only if ≲ 1–2 cm (thicker gaps let convection start).</div>`});

L({id:'t06', t:'Heat Transfer II — Convection, Radiation, Evaporation & Combined Losses', tier:'core', yield:3, min:75, off:'Written: heat transfer (convection, radiation)',
formulas:[
 ['Newton’s cooling (convection)','P = h·A·(T_s − T_∞);  h: W/m²K (natural gas 2–25; forced gas 25–250; water 50–20 000)'],
 ['Radiation (emitted)','P = ε·σ·A·T⁴  (T in kelvin, σ = 5.670×10⁻⁸ W/m²K⁴)'],
 ['Net radiation to surroundings','P_net = ε·σ·A·(T⁴ − T_surr⁴)'],
 ['Radiation coefficient','h_rad ≈ 4εσT_m³ (for small ΔT) ≈ 6 W/m²K near room T (ε = 1)'],
 ['Evaporative loss','P_evap = ṁ·L_v = (evap. rate)·L_v'],
 ['Combined','P_total = P_cond + P_conv + P_rad + P_evap'],
 ['Grashof/Rayleigh','natural convection ↑ with ΔT and size; onset in an air gap beyond ≈ 1 cm']],
html:`
<h2>1. The four heat-loss mechanisms</h2>
<table><tr><th>Mechanism</th><th>Needs a medium?</th><th>Physical picture</th><th>Reduce it by…</th></tr>
<tr><td><b>Conduction</b></td><td>yes (solid/fluid at rest)</td><td>collisions</td><td>low-k material, thicker, small area, avoid thermal bridges</td></tr>
<tr><td><b>Convection</b></td><td>yes (fluid)</td><td>bulk fluid motion carries heat; <b>natural</b> (buoyancy) vs <b>forced</b> (fan/wind)</td><td>trap air in tiny cells/small gaps (&lt;1 cm), stop drafts, seal openings, cover the top</td></tr>
<tr><td><b>Radiation</b></td><td><b>no</b> (works in vacuum)</td><td>EM waves (mostly infrared) from every object ∝ T⁴</td><td>low-emissivity shiny foil surfaces, radiant barriers, lower surface T</td></tr>
<tr><td><b>Evaporation</b></td><td>yes</td><td>hottest molecules leave the surface, carrying L_v</td><td>covering the liquid, lids, lowering surface T, humid saturated enclosed air</td></tr></table>
<h2>2. Convection</h2>
<div class="eq">P = h A (T_surface − T_fluid)        (Newton’s law of cooling — the heat-transfer form)</div>
<p>h depends on fluid motion, geometry, and properties: still-air natural convection ≈ 2–10 W/m²K; breeze 10–50; boiling water 2500–25 000. <b>Natural convection</b> arises when hot fluid expands, becomes less dense, and rises (a chimney); trapping air in gaps thinner than about 1 cm suppresses it. <b>Forced</b> = wind chill. <b>Convection currents</b> drive weather, ocean currents (Gulf Stream), boiling, radiators, and mantle flow.</p>
<div class="box key"><b>For the beaker device</b>The <b>hole/opening at the top</b> (probe access) is the biggest leak: hot air/steam escapes, cold air enters. Minimize the hole to the allowed minimum, let the probe nearly fill it, and keep the air inside the device <b>still</b> and saturated with water vapor (humid air reduces evaporation). Cover surfaces of the liquid if allowed (e.g., a low-emissivity lid).</div>
<h2>3. Radiation</h2>
<div class="eq">P_emit = ε σ A T⁴                σ = 5.670×10⁻⁸ W/(m²·K⁴)   (Stefan–Boltzmann)\nP_net = ε σ A (T_object⁴ − T_surroundings⁴)</div>
<ul><li><b>Emissivity ε</b> (0 to 1): ratio to a perfect <b>blackbody</b> (ε = 1). Matte black 0.95; water 0.96; human skin 0.98; oxidized steel 0.8; polished aluminum 0.04–0.05; aluminum foil ≈ 0.03–0.05; polished silver 0.02; white paint 0.9 (in IR!). <b>Good absorbers are good emitters</b> (Kirchhoff): absorptivity α(λ) = ε(λ).</li>
<li>Radiation goes as <b>T⁴</b> → doubling absolute T raises emission 16×. Net loss at modest ΔT near room T ≈ 5–6 W/m²K <i>equivalent</i> — same order as natural convection!</li>
<li><b>Radiant barriers / reflective foil</b> (aluminum foil, “space blankets”, Dewar silvering) cut radiation — but only work if facing an <b>air gap</b>/vacuum (foil pressed against a solid conducts).</li></ul>
<div class="box ex"><b>Worked example</b>A black cylinder surface area 0.020 m² at 350 K in 295 K surroundings (ε = 0.95): P_net = 0.95×5.67×10⁻⁸×0.020×(350⁴ − 295⁴) = 0.95×5.67×10⁻⁸×0.02×(1.5006×10¹⁰ − 7.573×10⁹) = 1.077×10⁻⁹×7.433×10⁹ = <b>8.0 W</b>. With foil (ε = 0.05): <b>0.42 W</b>.</div>
<h2>4. Evaporation &amp; condensation</h2>
<p>Each gram that evaporates removes ≈ 2.26 kJ (from 100 °C) — about 2.4 kJ at 60 °C. Evaporating just <b>1 g</b> from 100 g of hot water drops its T by ≈ 5.6 °C! This is why hot cups with open tops cool quickly even if their sides are foam-insulated. Humid, stagnant air above the liquid slows it. Condensation on cool lid surfaces <i>returns</i> L_v as heat (a steam “greenhouse”); condensate dripping can bridge the insulation.</p>
<div class="box ex"><b>Example</b>100 g of water at 75 °C; 0.8 g evaporates during 20 min: Q = 0.8×2.3 kJ ≈ 1.8 kJ → ΔT = 1.8×1000/(100×4.184) = 4.4 °C of the total cooling.</div>
<h2>5. Combined loss &amp; the thermal circuit</h2>
<p>Real losses occur in <b>parallel</b> paths from hot water to ambient: P = ΔT [G_wall + G_top + G_rad + …] where G are conductances (W/K). The path with the <b>largest conductance</b> dominates; <b>optimize it first</b> (Pareto!). Newton's cooling then emerges from P = K·C·(T − T_room), with a constant K = ΣG/C (the “cooling constant” used in prediction).</p>
<div class="box filter"><b>Tryout-filter</b>• “Shiny vs black pot: which keeps tea hotter?” → shiny (low ε) — but only matters for radiation. • “Which cannot occur in a vacuum?” → conduction, convection. • “Why are thermos flasks silvered, evacuated and narrow-necked?” → kill radiation, conduction/convection, evaporation. • “A black-and-white wall in sun…” → absorption/emission matters in IR vs visible. • Convection currents in a pot of water: hot rises at the center, cool falls at the edge.</div>`});
