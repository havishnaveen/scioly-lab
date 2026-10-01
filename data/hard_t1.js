/* ===== HARD thermodynamics questions (E3): t01-t10, figures in js/dg_q_t1.js ===== */
const _h0 = DATA.questions.length;
const _h = { dg: 1 }, _hf = id => ({ dg: 1, fig: id });

/* ---------- t01 Temperature ---------- */
NUM('t01', 4, 'A homemade thermometer reads 2.0 in melting ice and 97.0 in steam at 1 atm (both true fixed points, and the scale is linear). It reads 50.0 in a bath. What is the true temperature of the bath, in °C?', 50.5, '°C',
 'The scale spans 97.0 − 2.0 = 95.0 divisions for 100 °C. True T = (50.0 − 2.0)/95.0 × 100 = 50.5 °C. (The naive answer 50 °C ignores the 2.0 offset AND the 95 vs 100 span.)', { dg: 1, tol: 0.01 });
NUM('t01', 4, 'At what Celsius temperature is the Fahrenheit reading exactly twice the Celsius reading?', 160, '°C',
 '1.8C + 32 = 2C → 0.2C = 32 → C = 160 °C (= 320 °F).', _h);
NUM('t01', 5, 'A puzzle: at what temperature, in kelvin, does the number on the kelvin scale equal the number on the Fahrenheit scale?', 574.6, 'K',
 'Let C be the Celsius value. K = C + 273.15 and F = 1.8C + 32. Setting them equal: 0.8C = 241.15 → C = 301.44 °C, so K = 574.59 K (= 574.59 °F).', { dg: 1, tol: 0.005 });
NUM('t01', 4, 'AMC-style: on a certain day the Fahrenheit reading is exactly three times the Celsius reading. What is the temperature in °C?', 26.7, '°C',
 '1.8C + 32 = 3C → 1.2C = 32 → C = 26.67 °C (= 80 °F, and 80 = 3 × 26.67).', { dg: 1, tol: 0.01 });
MC('t01', 4, 'A sample is at 20 °C. Which temperature is physically "twice as hot", meaning twice the average thermal kinetic energy per molecule?',
 ['40 °C', '586 K (313 °C)', '586 °C', '313 K'], 1,
 'Average translational KE per molecule is (3/2)k_BT, proportional to ABSOLUTE temperature. 20 °C = 293.15 K, so doubling gives 586.3 K = 313.15 °C. Doubling the Celsius number (40 °C) means nothing physically.', _h);
MS('t01', 4, 'Which of these statements are TRUE?',
 ['A temperature CHANGE of 1 K equals a change of 1 °C.', '100 °F is about 373 K.', 'The Celsius and Fahrenheit readings coincide at −40.', 'Absolute zero is −273.15 °F.', 'A rise from 150 °C to 300 °C doubles the average molecular kinetic energy.'], [0, 2],
 'A: true (same size degree). B: false, 100 °F = 37.8 °C = 310.9 K; 373 K is 212 °F. C: true. D: false, −273.15 is in °C; in °F it is −459.67. E: false; in kelvin 423 K → 573 K, only ×1.35.', _h);
NUM('t01', 4, 'A type-K thermocouple produces about 41 μV per °C of difference between its two junctions. The meter electronics hold the reference junction at 25.0 °C and read 10.0 mV. What is the measured temperature (°C)?', 268.9, '°C',
 'The voltage depends on the DIFFERENCE: ΔT = 10 000 μV / 41 μV/°C = 243.9 °C. The measured junction is 25.0 + 243.9 = 268.9 °C. Forgetting the reference junction (reading 243.9 °C) is the classic error.', { dg: 1, tol: 0.01 });
NUM('t01', 3, 'A constant-volume gas thermometer has pressure 80.0 kPa when its bulb is at the triple point of water (273.16 K). The bulb is placed in a hot oil and the pressure is 109.3 kPa. What is the oil temperature in kelvin?', 373.2, 'K',
 'At constant volume P ∝ T, so T = 273.16 × 109.3/80.0 = 373.2 K (100.05 °C).', { dg: 1, tol: 0.01 });
NUM('t01', 3, 'A Pt100 resistance thermometer has R = 100(1 + 0.00385·T) Ω with T in °C. It reads 146.2 Ω. What is T in °C?', 120, '°C',
 '146.2/100 = 1.462 → 0.00385·T = 0.462 → T = 120.0 °C.', { dg: 1, tol: 0.01 });
MC('t01', 3, 'Who proposed the absolute temperature scale in 1848, and which scale has Fahrenheit-size degrees but starts at absolute zero?',
 ['Celsius; Réaumur', 'William Thomson (Lord Kelvin); Rankine', 'Fahrenheit; Kelvin', 'Joule; Delisle'], 1,
 'William Thomson (later Lord Kelvin) proposed the absolute scale in 1848. The Rankine scale (W. J. M. Rankine, 1859) uses Fahrenheit-size degrees starting at absolute zero: 0 °R = −459.67 °F.', _h);

/* ---------- t02 Heat & units ---------- */
NUM('t02', 4, 'In a Joule-type apparatus a 25.0 kg mass falls 1.80 m, is re-raised and dropped again, 40 times in all (g = 9.81 m/s²). All the work stirs 0.500 kg of water through paddles. By how much does the water temperature rise (K)? (c = 4184 J/kg·K)', 8.44, 'K',
 'Work = 40 × 25.0 × 9.81 × 1.80 = 17 658 J. ΔT = W/(mc) = 17 658/(0.500 × 4184) = 8.44 K.', _h);
NUM('t02', 3, 'A 250 Calorie (food "Calorie" = kcal) snack could, in principle, raise the temperature of how many kg of water by 50.0 K? (c = 4184 J/kg·K, 1 Cal = 4184 J)', 5.00, 'kg',
 'E = 250 × 4184 J. m = E/(cΔT) = 250 × 4184/(4184 × 50) = 5.00 kg. (Using 250 cal instead of 250 Cal would be 1000× too small.)', _h);
NUM('t02', 3, 'A "1-ton" air conditioner removes heat at 12 000 BTU/h. Express that in kilowatts (1 BTU = 1055.06 J).', 3.517, 'kW',
 '12 000 × 1055.06 J/3600 s = 3517 W = 3.517 kW.', _h);
NUM('t02', 4, 'A 1.00 kWh electric heater run produces how many thermochemical calories (1 cal = 4.184 J)? Answer in units of 10^5 cal.', 8.60, '×10^5 cal',
 '1 kWh = 3.6 × 10^6 J. cal = 3.6 × 10^6/4.184 = 8.60 × 10^5 cal (= 860 kcal).', _h);
MC('t02', 4, 'Dimensional check: which combination has the dimension of TIME (here ρ = density, c = specific heat, k = thermal conductivity, L = length)?',
 ['k L²/(ρ c)', 'ρ c L²/k', 'ρ c L/k', 'k/(ρ c L²)'], 1,
 '[ρcL²] = J/(m·K); [k] = W/(m·K); ratio = J/W = s. Check: ρc has J/(m³·K), times L² gives J/(m·K). The diffusion time is ~ L²/α with α = k/(ρc), i.e. ρcL²/k. Option A, kL²/(ρc), has units m⁴/s, not seconds.', _h);
MC('t02', 4, 'Joule is credited with a famous result; which statement about his work is correct?',
 ['He measured the heat produced by falling weights turning paddles in water, giving about 4.2 J per calorie.', 'He proved heat is a weightless fluid called caloric.', 'He introduced the Kelvin scale in 1848.', 'He derived σT⁴ for black-body radiation.'], 0,
 'Joule\'s paddle-wheel experiments (1840s) gave the mechanical equivalent of heat ≈ 4.18 J/cal. Caloric theory was what his work helped overturn. The Kelvin scale is Thomson\'s; T⁴ law is Stefan/Boltzmann.', _h);
MC('t02', 3, 'Count Rumford (Benjamin Thompson) observed in 1798 that boring brass cannon barrels produced seemingly unlimited heat. What did he argue?',
 ['Heat is a conserved weightless fluid (caloric) squeezed out of the metal', 'Heat must be a form of motion, because friction could supply heat without any apparent limit', 'The heat came from chemical reactions in the water', 'Heat is identical to temperature'], 1,
 'Rumford (Munich arsenal, 1798) argued that an inexhaustible supply of heat from friction could not come from a finite stock of caloric fluid, so heat is associated with motion. Joule later quantified the equivalence.', _h);
MC('t02', 3, 'Lavoisier listed "caloric" among his chemical elements (Traité élémentaire de chimie, 1789). What was caloric?',
 ['A weightless, self-repelling fluid thought to carry heat', 'The unit of heat equal to 4.184 J', 'A gas given off by burning', 'The latent heat of fusion'], 0,
 'Caloric theory: heat as an imponderable, conserved fluid. Lavoisier and Laplace also built an ice calorimeter (c. 1782–83) that measured heat by the mass of ice melted. Rumford and Joule\'s work replaced caloric by the kinetic view.', _h);
MC('t02', 4, 'Who is credited with stating (1842) the equivalence of heat and work/energy conservation from his work as a physician, independently of Joule?',
 ['Julius Robert von Mayer', 'Sadi Carnot', 'Josef Stefan', 'Gustav Kirchhoff'], 0,
 'Julius Robert von Mayer (1842) gave an early statement of the conservation of energy and the mechanical equivalent of heat; he also has C_p − C_v = R named after him (Mayer\'s relation).', _h);

/* ---------- t03 Specific heat & calorimetry ---------- */
NUM('t03', 4, 'A 150 g metal sample at 100.0 °C is dropped into a calorimeter containing 200 g of water at 20.0 °C. The calorimeter (cup, stirrer) itself has heat capacity 50.0 J/K. The final temperature is 25.0 °C. Find the specific heat of the metal in J/(kg·K). (c_water = 4184)', 394, 'J/(kg·K)',
 'Heat gained by water + cup = (0.200 × 4184 + 50.0) × 5.0 = 886.8 × 5.0 = 4434 J. Heat lost by metal = 0.150 × c × 75.0. c = 4434/11.25 = 394 J/kg·K (near copper).', { dg: 1, tol: 0.02 });
NUM('t03', 4, 'Three liquids/solids are combined in an insulated container (no calorimeter loss): 0.500 kg of water at 20.0 °C, 0.300 kg of ethanol (c = 2440 J/kg·K) at 60.0 °C and a 0.200 kg aluminum block (c = 897 J/kg·K) at 100 °C. Find the final temperature (°C).', 34.5, '°C',
 'T_f = Σ(mcT)/Σ(mc). mc: water 2092, ethanol 732, Al 179.4 (J/K). Σmc = 3003.4. ΣmcT = 41 840 + 43 920 + 17 940 = 103 700. T_f = 34.5 °C.', _h);
NUM('t03', 4, 'A student drops 100 g of copper (c = 385 J/kg·K) at 100 °C into 200 g of water at 20.0 °C in an open, uninsulated cup and measures a final temperature of only 22.4 °C. The cup\'s own heat capacity is negligible. How much heat (J) was lost to the surroundings during the experiment?', 979, 'J',
 'Heat given up by copper = 0.100 × 385 × (100 − 22.4) = 2988 J. Heat absorbed by water = 0.200 × 4184 × 2.4 = 2008 J. Loss = 2988 − 2008 = 979 J. (The ideal no-loss answer would have been 23.5 °C.)', _h);
NUM('t03', 3, 'Two bodies, isolated from everything else, are placed in thermal contact. Body A cools by 30 K while body B warms by 10 K. What is the ratio of their heat capacities C_A/C_B?', 0.333, '',
 'Heat lost by A equals heat gained by B: C_A(30) = C_B(10), so C_A/C_B = 10/30 = 1/3. The body with the SMALLER temperature change has the larger heat capacity.', { dg: 1, tol: 0.01 });
NUM('t03', 4, 'Two metal samples of equal mass, both starting at 100 °C, are dropped one at a time into identical water baths that start at 20 °C. Sample A raises its bath to 28 °C; sample B raises its bath to 25 °C. Find c_A/c_B. (No heat loss.)', 1.667, '',
 'For each: c_m(100 − T_f) = (m_w/m_m) c_w (T_f − 20), so c_m ∝ (T_f − 20)/(100 − T_f). A: 8/72 = 0.1111. B: 5/75 = 0.0667. Ratio = 1.667.', { dg: 1, tol: 0.02 });
NUM('t03', 4, 'An unknown solid element has a measured specific heat of 0.128 J/(g·K). Using the Dulong–Petit law (molar heat capacity ≈ 3R = 24.94 J/(mol·K)), estimate its molar mass in g/mol.', 195, 'g/mol',
 'M = C_m/c = 24.94/0.128 = 194.9 g/mol (platinum-like).', { dg: 1, tol: 0.02 });
NUM('t03', 4, '0.500 mol of diatomic nitrogen (treat as ideal, C_p = (7/2)R, R = 8.314 J/mol·K) is heated at constant pressure by supplying 1500 J. By how many kelvin does it warm?', 103, 'K',
 'Q = nC_pΔT with C_p = 3.5R = 29.10 J/mol·K. ΔT = 1500/(0.500 × 29.10) = 103 K. (Using C_v would give 144 K.)', _h);
NUM('t03', 4, 'To find a calorimeter\'s heat capacity, 100 g of water at 60.0 °C is poured into the calorimeter containing 100 g of water at 20.0 °C; the final temperature is 37.0 °C. Find the calorimeter constant C_cal in J/K. (c = 4184 J/kg·K)', 148, 'J/K',
 'Heat lost by hot water = 0.100 × 4184 × 23.0 = 9623 J. Heat gained by cold water = 0.100 × 4184 × 17.0 = 7113 J. The calorimeter gains the rest: 2510 J over 17.0 K → C_cal = 148 J/K (water equivalent ≈ 35 g).', _h);
NUM('t03', 3, 'You need exactly 300 g of water at 35 °C by combining water at 10 °C and water at 80 °C (negligible container). How many grams of the 80 °C water do you use?', 107, 'g',
 'm_h(80 − 35) = (300 − m_h)(35 − 10) → 45m_h = 7500 − 25m_h → m_h = 107 g.', _h);
MC('t03', 4, 'One kilogram of aluminum and one kilogram of lead, both at 100 °C, are each placed on a separate large block of ice at 0 °C and allowed to cool to 0 °C. Which melts more ice?',
 ['The lead, because it is denser', 'The aluminum, because its specific heat is about 7 times larger', 'Both the same, because the masses and temperatures are equal', 'The lead, because its atoms are heavier'], 1,
 'Heat released = mcΔT. c_Al ≈ 0.897 vs c_Pb ≈ 0.129 J/g·K, so aluminum releases ≈ 7× more heat and melts ≈ 7× more ice. Density does not matter; per kilogram, per degree, c does.', _h);
MS('t03', 4, 'Equal masses of A and B start at the same temperature and receive the same heat from a heater. A ends up hotter than B. Which conclusions are valid?',
 ['c_A < c_B', 'C_A < C_B (heat capacity of the whole sample)', 'A must have a higher melting point', 'Per kelvin of change, B stores more energy per kg'], [0, 1, 3],
 'Q = mcΔT with equal m and Q: larger ΔT means smaller c (and smaller heat capacity C = mc). B stores more energy per kg per K. Nothing is implied about melting points.', _h);

/* ---------- t04 Phases & latent heat ---------- */
NUM('t04', 4, 'Fifty grams of ice at −10.0 °C is dropped into 300 g of water at 20.0 °C in an insulated container. What is the final temperature (°C)? (c_ice = 2090, c_w = 4184 J/kg·K, L_f = 334 kJ/kg)', 5.03, '°C',
 'Water cooled to 0 °C can supply 0.300 × 4184 × 20 = 25 104 J. Warming ice to 0 °C takes 0.050 × 2090 × 10 = 1045 J; melting it all takes 16 700 J. Total 17 745 J < 25 104 J, so ALL ice melts. Remaining 7359 J warms 350 g of water: ΔT = 7359/(0.350 × 4184) = 5.03 °C.', _h);
NUM('t04', 4, 'Two hundred grams of ice at −20 °C is added to 150 g of water at 25 °C in an insulated vessel. How many grams of ICE remain at equilibrium? (c_ice = 2090, c_w = 4184 J/kg·K, L_f = 334 kJ/kg)', 178, 'g',
 'Water cooling to 0 °C releases 0.150 × 4184 × 25 = 15 690 J. Warming all the ice to 0 °C needs 0.200 × 2090 × 20 = 8360 J, leaving 7330 J to melt ice: 7330/334 000 = 21.9 g. So ≈ 178 g of ice remain and the final temperature is 0 °C.', { dg: 1, tol: 0.01 });
MS('t04', 4, 'In which of these insulated mixtures is there still some ICE at equilibrium? (c_ice = 2090, c_w = 4184 J/kg·K, L_f = 334 kJ/kg)',
 ['100 g ice at 0 °C + 100 g water at 20 °C', '50 g ice at 0 °C + 400 g water at 10 °C', '100 g ice at −10 °C + 300 g water at 20 °C', '20 g ice at −5 °C + 200 g water at 15 °C'], [0, 2],
 'Compare heat the water can give (cooling to 0 °C) with heat needed to warm and melt all the ice. A: 8368 J available vs 33 400 J needed: ice left. B: 16 736 J vs 16 700 J: just barely melts all (final ≈ 0.02 °C). C: 25 104 J vs 2090 + 33 400 = 35 490 J: ice left (≈ 31 g). D: 12 552 J vs 209 + 6680 = 6889 J: all melts.', _h);
NUM('t04', 4, 'Ten grams of steam at 100 °C is bubbled into 200 g of water at 20.0 °C in an insulated cup. What is the final temperature (°C)? (L_v = 2256 kJ/kg)', 49.5, '°C',
 '0.010 × 2 256 000 + 0.010 × 4184 × (100 − T) = 0.200 × 4184 × (T − 20). 22 560 + 4184 − 41.84T = 836.8T − 16 736 → 43 480 = 878.6T → T = 49.5 °C.', _h);
NUM('t04', 4, 'How many grams of steam at 100 °C must condense and cool to 40 °C to melt 100 g of ice at 0 °C and warm the melt-water to 40 °C? (L_f = 334 kJ/kg, L_v = 2256 kJ/kg, c = 4184)', 20.0, 'g',
 'Needed: 0.100 × 334 000 + 0.100 × 4184 × 40 = 50 136 J. Each kg of steam gives L_v + c(100 − 40) = 2 256 000 + 251 040 = 2 507 040 J/kg. m = 50 136/2 507 040 = 0.0200 kg = 20.0 g.', { dg: 1, tol: 0.02 });
NUM('t04', 4, '100 g of ice at −20 °C is added to 300 g of liquid water that is already at exactly 0 °C, in an insulated container. How many grams of the water freeze? (c_ice = 2090 J/kg·K, L_f = 334 kJ/kg)', 12.5, 'g',
 'Warming the ice to 0 °C needs 0.100 × 2090 × 20 = 4180 J, which can only come from freezing water: m = 4180/334 000 = 0.0125 kg = 12.5 g. Final temperature is 0 °C with ice and water.', _h);
NUM('t04', 3, 'Compute the total heat (kJ) to turn 50 g of ice at −30 °C into steam at 110 °C. (c_ice = 2090, c_water = 4184, c_steam = 2010 J/kg·K; L_f = 334 kJ/kg; L_v = 2256 kJ/kg)', 154.6, 'kJ',
 '3135 (ice warm) + 16 700 (melt) + 20 920 (water 0→100) + 112 800 (boil) + 1005 (steam 100→110) = 154 560 J ≈ 154.6 kJ.', { dg: 1, tol: 0.01 });
NUM('t04', 4, 'Sweat evaporating from skin carries away about 2256 kJ per kg. Suppose a 70 kg person (average c = 3500 J/kg·K) must lose 245 kJ to cool by 1.0 K through evaporation alone. How many grams of sweat must evaporate?', 109, 'g',
 '70 × 3500 × 1.0 = 245 000 J. Mass = 245 000/2 256 000 = 0.1086 kg ≈ 109 g.', { dg: 1, tol: 0.02 });
MC('t04', 4, 'A glass is filled exactly to the brim with water and a large ice cube floats in it. As the ice melts (room temperature, no evaporation), what happens?',
 ['Water overflows', 'The level drops below the brim', 'The level stays exactly at the brim', 'It depends on the ice temperature'], 2,
 'A floating body displaces its own weight of water. The ice displaces water of mass = its own mass; melted, it becomes exactly that mass of water, which fills exactly the displaced volume. No overflow, no drop.', _h);
MC('t04', 5, 'A lump of lead is frozen inside an ice cube floating in a beaker of water. When the ice melts completely, the lead sinks to the bottom. What happens to the water level in the beaker?',
 ['It rises', 'It falls', 'It stays the same', 'It cannot be determined'], 1,
 'Floating, ice + lead displace water equal to their combined weight. After melting, the melt-water adds its own mass as volume (same as the ice\'s share), but the lead now displaces only its own (small) volume, less than the larger volume displaced when it was supported by the ice. So the level falls.', _h);
MS('t04', 4, 'Which statements are TRUE?',
 ['Condensing steam at 100 °C releases about 2256 kJ per kg without any temperature change.', 'The solid–liquid line on water\'s phase diagram slopes backwards (melting point falls as pressure rises).', 'The triple point of water is at exactly 0 °C.', 'Above the critical point a distinct liquid-gas boundary still exists.'], [0, 1],
 'A and B are true. C is false: the triple point is 0.01 °C (273.16 K) at 611.657 Pa; 0 °C is the ice point at 1 atm. D is false: beyond the critical point liquid and gas are indistinguishable (supercritical fluid).', _h);
MC('t04', 4, 'Point A on the phase diagram is held at constant pressure while the sample is heated slowly to 60 °C. Which phase changes occur?',
 ['Melting, then boiling', 'Only sublimation (solid directly to vapor)', 'Melting only', 'Boiling only'], 1,
 'Point A (500 Pa) is BELOW the triple-point pressure of 611.657 Pa, so a horizontal line to the right at that pressure crosses only the solid-gas (sublimation) boundary: solid → vapor with no liquid phase.', { dg: 1, fig: 'qf-t1-phase' });
MC('t04', 5, 'Sample C starts as solid at −5 °C, 1000 Pa. It is compressed at constant temperature to a very high pressure (follow the boundary as drawn). Which sequence of phases does it go through?',
 ['solid only', 'solid → liquid', 'solid → gas', 'solid → liquid → gas'], 1,
 'Water\'s solid-liquid line leans back toward lower T as P rises, so a vertical path at a fixed temperature just below 0 °C crosses it: ice melts under enough pressure. The path goes up (higher P), away from the vapor region, so the sequence is solid → liquid.', { dg: 1, fig: 'qf-t1-phase' });
NUM('t04', 4, 'The figure shows a heating curve of a pure 0.200 kg sample heated at a steady rate. Read the flat segment and compute the latent heat of the transition in kJ/kg.', 200, 'kJ/kg',
 'The flat segment lasts from Q = 12 kJ to Q = 52 kJ, i.e. 40 kJ absorbed at constant T. L = Q/m = 40/0.200 = 200 kJ/kg.', { dg: 1, fig: 'qf-t1-heatcurve' });
MC('t04', 4, 'Using the heating curve of this 0.200 kg sample, what is the ratio c_liquid/c_solid?',
 ['1/3', '3', '1.67', '0.6'], 1,
 'Solid: ΔT = 60 K for 12 kJ → slope 5.0 K/kJ → c_s = 1/(m × slope) = 1000 J/kg·K. Liquid: ΔT = 40 K for 24 kJ → slope 1.67 K/kJ → c_l = 3000 J/kg·K. The steeper line is the smaller specific heat. Ratio = 3.', { dg: 1, fig: 'qf-t1-heatcurve' });
NUM('t04', 4, 'A steady 50.0 W heater supplies all the heat in the heating curve shown (0.200 kg sample). How many seconds does it take to go from the start to the end of the plotted curve (Q = 0 to the last point)?', 1520, 's',
 'Total heat = 76 kJ = 76 000 J. t = 76 000/50.0 = 1520 s (about 25 min).', { dg: 1, fig: 'qf-t1-heatcurve', tol: 0.01 });
MC('t04', 5, 'Equal masses of ice at −20 °C and liquid water are mixed in an insulated container. Show the minimum temperature of the water (starting temperature) that will melt ALL the ice, to the nearest value:',
 ['20 °C', '50 °C', '90 °C', '100 °C exactly'], 2,
 'Borderline case: final state is all liquid at 0 °C. Ice needs c_ice × 20 + L_f = 2090 × 20 + 334 000 = 375 800 J/kg. Water gives 4184 × T_w J/kg. T_w = 89.8 °C ≈ 90 °C. Much hotter than the intuitive "a bit above 0".', _h);

/* ---------- t05 Conduction ---------- */
NUM('t05', 4, 'For the wall in the figure (steady state, films neglected), what is the heat flow through the 12 m² wall in watts?', 146, 'W',
 'R per m²: gypsum 0.0125/0.17 = 0.0735; fibreglass 0.09/0.040 = 2.250; siding 0.02/0.14 = 0.1429. R_tot = 2.466 m²K/W. q = 30/2.466 = 12.16 W/m². P = 12.16 × 12 = 146 W.', { dg: 1, fig: 'qf-t1-wall' });
NUM('t05', 4, 'In the wall of the figure, what is the temperature (°C) at the interface between the fibreglass batt and the wood siding?', -6.3, '°C',
 'q = 12.16 W/m². Drop through gypsum = 12.16 × 0.0735 = 0.89 K; through fibreglass = 12.16 × 2.25 = 27.4 K. Interface = 22 − 0.89 − 27.4 = −6.3 °C. Almost the whole temperature drop is in the insulation.', { dg: 1, fig: 'qf-t1-wall', tol: 0.03 });
NUM('t05', 4, 'What percentage of the TOTAL conductive heat loss of this wall passes through the window (window 20% of the area)?', 68.2, '%',
 'Window conductance: 2.0 × 25/0.35 = 142.9 W; wall: 8.0 × 25/3.0 = 66.7 W. Total 209.5 W. Fraction = 142.9/209.5 = 68.2 %. A window with 20% of the area loses over two thirds of the heat: parallel paths add, and the leakiest path dominates.', { dg: 1, fig: 'qf-t1-wallpar' });
NUM('t05', 4, 'The thermal network in the figure connects reservoirs at 80 °C and 20 °C. How much power (W) flows through R₃ alone?', 12, 'W',
 'R₂ ∥ R₃ = (2.0 × 3.0)/5.0 = 1.2 K/W. R_total = 0.50 + 1.2 + 0.30 = 2.0 K/W. P = 60/2.0 = 30 W. Drop across the parallel pair = 30 × 1.2 = 36 K. P₃ = 36/3.0 = 12 W (and P₂ = 18 W).', { dg: 1, fig: 'qf-t1-thermalnet' });
MC('t05', 5, 'In the temperature profile shown (three layers of the same cross-section; thicknesses 2, 4 and 2 cm for A, B, C), which layer has the LARGEST thermal conductivity, and what is k_B/k_C?',
 ['Layer A; k_B/k_C = 14', 'Layer B; k_B/k_C = 14', 'Layer C; k_B/k_C = 1/14', 'Layer B; k_B/k_C = 7'], 1,
 'Same heat flux q = k ΔT/L in every layer, so k ∝ L/ΔT. A: 2/20 = 0.10. B: 4/10 = 0.40 (largest). C: 2/70 = 0.0286. k_B/k_C = 0.40/0.0286 = 14. The flattest part of a T-x graph is the best conductor.', { dg: 1, fig: 'qf-t1-txprofile' });
NUM('t05', 4, 'In the profile shown, layer A has k = 0.50 W/(m·K). What is the heat flux through the wall in W/m²?', 500, 'W/m²',
 'Layer A: ΔT = 100 − 80 = 20 K over L = 0.02 m. q = kΔT/L = 0.50 × 20/0.02 = 500 W/m² (the same in layers B and C).', { dg: 1, fig: 'qf-t1-txprofile' });
NUM('t05', 4, 'Find the heat loss per metre of pipe length (W/m) for the foam-insulated pipe in the figure.', 13.7, 'W/m',
 'P/ℓ = 2πk(T₁ − T₂)/ln(r₂/r₁) = 2π × 0.040 × 60/ln 3 = 15.08/1.0986 = 13.7 W/m.', { dg: 1, fig: 'qf-t1-cyl' });
MC('t05', 5, 'A thin bare wire of radius 1 mm is covered with plastic insulation (k = 0.20 W/m·K) to an outer radius of 5 mm, and loses heat to air from its outer surface with h = 10 W/(m²·K). Compared with the bare wire, the insulated wire\'s heat loss at the same surface-to-air conditions is:',
 ['lower, because insulation always reduces loss', 'higher, because r is below the critical radius k/h = 20 mm', 'the same', 'zero'], 1,
 'Adding insulation increases conduction resistance (ln(r₂/r₁)/2πk) but also increases the outer surface area (lowering the convective resistance 1/(2πrh)). The heat loss is maximum at the critical radius r_c = k/h = 0.20/10 = 20 mm; for outer radii below r_c adding insulation raises the loss. (Electrical-wire insulation does double duty.)', _h);
NUM('t05', 4, 'A foam panel (k = 0.035 W/m·K, thickness 0.100 m, area 1.000 m²) has one steel bolt of diameter 1.0 cm (k = 50 W/m·K) running straight through it. By what percentage does the bolt raise the panel\'s heat loss at the same ΔT?', 11.2, '%',
 'Panel conductance ≈ 0.035 × (1 − 7.85 × 10⁻⁵)/0.100 = 0.350 W/K. Bolt: 50 × 7.854 × 10⁻⁵/0.100 = 0.0393 W/K. Increase = 0.0393/0.350 = 11.2%. A bolt with 0.008% of the area adds 11%!', _h);
NUM('t05', 3, 'A US builder specifies R-19 fibreglass (units ft²·°F·h/BTU). What is its thermal resistance in SI units (m²·K/W)? (SI R = US R ÷ 5.678)', 3.35, 'm²·K/W',
 '19/5.678 = 3.35 m²K/W.', { dg: 1, tol: 0.01 });
NUM('t05', 4, 'A copper rod (k = 401 W/m·K, length 0.50 m, cross-section 2.0 cm²) joins boiling water (100 °C) to ice at 0 °C, insulated along its sides. How many grams of ice melt each minute? (L_f = 334 kJ/kg)', 2.88, 'g',
 'P = kAΔT/L = 401 × 2.0 × 10⁻⁴ × 100/0.50 = 16.04 W. Per minute: 962 J → 962/334 000 = 2.88 g.', _h);
NUM('t05', 4, 'A copper rod and a steel rod (same cross-section, both 0.50 m long) are joined end to end. The free copper end is at 100 °C and the free steel end at 0 °C. Take k_Cu = 400 and k_steel = 50 W/(m·K). What is the temperature (°C) at the junction?', 88.9, '°C',
 'Series resistances ∝ L/k: copper 1/400 = 0.0025, steel 1/50 = 0.0200. Copper carries only 0.0025/0.0225 = 11.1% of the 100 K drop, so the junction is at 100 − 11.1 = 88.9 °C. The good conductor is nearly isothermal with its reservoir.', _h);
NUM('t05', 3, 'Two identical rods connect the same hot and cold reservoirs. What is the ratio (heat flow when they are placed in parallel)/(heat flow when they are placed in series)?', 4, '',
 'Parallel: conductance 2G. Series: conductance G/2. Ratio = 2G/(G/2) = 4.', _h);
MC('t05', 5, 'A cubical box of insulated walls is replaced by a geometrically scaled copy with ALL dimensions (including wall thickness) doubled, same materials, conduction through the walls only. The cooling constant K = G/C of its contents (same material) changes by a factor:',
 ['2', '1/2', '1/4', '1/8'], 2,
 'Wall conductance G = kA/L scales as L²/L = L → ×2. Heat capacity C ∝ volume → ×8. K = G/C → ×2/8 = 1/4. Bigger objects cool more slowly in fractional terms.', _h);
MC('t05', 4, 'Why does a metal spoon feel colder than a wooden spoon at the same room temperature?',
 ['The metal is actually colder', 'Metal has a higher thermal conductivity and draws heat from your hand faster', 'Wood has a higher specific heat', 'Wood radiates more heat'], 1,
 'Both are at room temperature; the metal conducts heat away from the skin much faster (and keeps its surface temperature near the contact temperature closer to room temperature), so the skin cools faster and the spoon feels colder.', _h);

/* ---------- t06 Convection & combined ---------- */
NUM('t06', 4, 'A hot object of surface area 0.040 m² at 60 °C (emissivity 0.90) sits in 20 °C air and 20 °C surroundings. Its convection coefficient is 8.0 W/(m²·K). Find the total net heat loss by convection plus radiation (W). (σ = 5.670×10⁻⁸ W/m²K⁴)', 22.9, 'W',
 'Convection: 8.0 × 0.040 × 40 = 12.8 W. Radiation: 0.90 × 5.670×10⁻⁸ × 0.040 × (333.15⁴ − 293.15⁴) = 2.041×10⁻⁹ × 4.934×10⁹ = 10.07 W. Total ≈ 22.9 W (radiation is 44% of it).', _h);
NUM('t06', 4, 'An uncovered mug holds 250 g of hot tea that evaporates at 0.30 g per minute. Taking L_v = 2256 kJ/kg, and ignoring all other losses, how fast does evaporation alone cool the tea in K per minute? (c = 4184 J/kg·K)', 0.647, 'K/min',
 'Heat loss per minute = 0.30 × 10⁻³ × 2.256 × 10⁶ = 676.8 J. ΔT = 676.8/(0.250 × 4184) = 0.647 K per minute. Evaporating a tiny amount of water removes a lot of energy.', { dg: 1, tol: 0.02 });
MC('t06', 4, 'To keep a hot drink warm you wrap it in aluminum foil. Which way is most effective at cutting radiation loss?',
 ['Foil tightly pressed against the cup', 'Foil with a small air gap (or foam spacer) between foil and cup', 'Foil with the shiny side facing in, pressed on the cup', 'Any of these is equally effective'], 1,
 'Low-emissivity foil only blocks radiation if it faces a gap: pressed directly on the wall, heat simply CONDUCTS into the foil and the foil\'s outer face radiates/convects to the room (with low ε, it still helps a bit). A thin air gap (under 1–2 cm to avoid convection) gives the largest benefit.', _h);
MS('t06', 3, 'A vacuum flask (Dewar) has a double glass wall with a silvered inner coating and a stopper. Which heat-loss paths does it mainly suppress?',
 ['Conduction and convection across the wall (by the vacuum)', 'Radiation (by the silvering)', 'Evaporation from the liquid (by the stopper)', 'All conduction through the stopper and neck'], [0, 1, 2],
 'The vacuum removes gas conduction and convection; the silvering has low emissivity; the stopper blocks evaporation/convective exchange. Some conduction via the glass at the neck and the stopper remains, so D is false.', _h);
TF('t06', 4, 'An air gap wider than a couple of centimetres in a double-glazed window does not improve insulation further, because convection currents begin in the gap.', true,
 'Conduction across air would keep falling with width, but beyond about 1–2 cm natural convection sets in and carries heat across, so the benefit saturates. The best gaps are small.', _h);
NUM('t06', 4, 'A small object at 30 °C sits in 20 °C surroundings; ε = 1. Compare exact net radiated flux σ(T⁴ − T_s⁴) per m² with the linearised estimate 4σT_m³ΔT, where T_m = 298.15 K is the mean temperature. The exact flux in W/m² is:', 60.1, 'W/m²',
 'Exact: 5.670×10⁻⁸ × (303.15⁴ − 293.15⁴) = 5.670×10⁻⁸ × (8.4456×10⁹ − 7.3851×10⁹) = 60.1 W/m². Linear: 4 × 5.670×10⁻⁸ × 298.15³ × 10 = 60.1 W/m² (h_rad ≈ 6.0 W/m²K).', { dg: 1, tol: 0.03 });

/* ---------- t07 Radiation ---------- */
MC('t07', 3, 'A blackbody is heated from 27 °C to 327 °C. By what factor does its radiant exitance M = σT⁴ increase?',
 ['12.1', 'about 16', '2', '4'], 1,
 'Use kelvin: 27 °C = 300 K, 327 °C = 600 K. Ratio = (600/300)⁴ = 16 (15.98 with 273.15). Using Celsius numbers (327/27)⁴ would be absurd.', _h);
NUM('t07', 3, 'A hot star\'s spectrum peaks at 350 nm. Using Wien\'s law λ_max T = 2.898×10⁻³ m·K, find its surface temperature in kelvin.', 8280, 'K',
 'T = 2.898×10⁻³/350×10⁻⁹ = 8280 K.', { dg: 1, tol: 0.01 });
NUM('t07', 4, 'Estimate the wavelength (μm) of peak thermal emission of the human body at 37 °C, using Wien\'s law (b = 2.898×10⁻³ m·K).', 9.34, 'μm',
 'T = 310.15 K. λ = 2.898×10⁻³/310.15 = 9.34×10⁻⁶ m = 9.34 μm (thermal infrared; thermal cameras use 8-14 μm).', { dg: 1, tol: 0.01 });
NUM('t07', 4, 'Skin at 34 °C (ε = 0.98, exposed area 1.8 m²) in a room at 20 °C with walls at 20 °C. Find the net radiated power (W). (σ = 5.670×10⁻⁸)', 152, 'W',
 'P = εσA(T⁴ − T_s⁴) = 0.98 × 5.670×10⁻⁸ × 1.8 × (307.15⁴ − 293.15⁴) = 1.000×10⁻⁷ × 1.5154×10⁹ ≈ 152 W. (Real people clothe and do not radiate from all of their area.)', { dg: 1, tol: 0.03 });
NUM('t07', 5, 'An infrared thermometer is set for ε = 0.95 and effectively converts received power P = εσT⁴ (ignoring reflected background) into a temperature. It is pointed at a shiny pan with true emissivity 0.30 at a true temperature of 373.15 K. What temperature (K) does it report?', 280, 'K',
 'It receives P = 0.30σ(373.15)⁴. It solves 0.95σT_r⁴ = 0.30σ(373.15)⁴ → T_r = 373.15 × (0.30/0.95)^{1/4} = 373.15 × 0.7496 = 279.7 K ≈ 6.6 °C. A low-emissivity target reads far too cold.', { dg: 1, tol: 0.02 });
NUM('t07', 4, 'A planet has mean insolation S = 590 W/m² (averaged at the top of its atmosphere facing the Sun) and Bond albedo 0.25. No atmosphere. Its equilibrium temperature in kelvin is: (use T = [S(1 − a)/(4σ)]^{1/4}, σ = 5.670×10⁻⁸)', 210, 'K',
 '590 × 0.75/(4 × 5.670×10⁻⁸) = 1.951×10⁹; fourth root = 210 K.', { dg: 1, tol: 0.01 });
NUM('t07', 4, 'Star A has twice the radius of star B and half its surface temperature. What is the ratio L_A/L_B of their luminosities (L = 4πR²σT⁴)?', 0.25, '',
 'L ∝ R²T⁴ → (2)² × (1/2)⁴ = 4/16 = 0.25.', { dg: 1, tol: 0.01 });
NUM('t07', 5, 'A flat plate in vacuum faces the Sun (irradiance 1000 W/m²) with only its front face exposed (back insulated). Its coating is the selective one in the figure: sunlight lies mostly below 3 μm so it absorbs with α = 0.95, while the plate\'s own thermal emission lies far above 3 μm so it emits with ε = 0.05. Find its steady temperature in kelvin. (σ = 5.670×10⁻⁸)', 761, 'K',
 'Balance per m²: absorbed 0.95 × 1000 = emitted 0.05σT⁴ → T⁴ = 950/(0.05 × 5.670×10⁻⁸) = 3.351×10¹¹ → T = 761 K. A black plate (α = ε = 1) would only reach (1000/σ)^{1/4} = 364 K: same sunlight, 2× the temperature.', { dg: 1, fig: 'qf-t1-selective', tol: 0.02 });
MC('t07', 4, 'Why is the selective coating in the figure ideal for a solar collector rather than an "absorber" coated matte black?',
 ['Black has lower absorptivity at all wavelengths', 'Kirchhoff: absorptivity equals emissivity at each wavelength, so a step coating absorbs sunlight (short λ) while emitting little thermal IR (long λ)', 'Selective coatings reflect sunlight', 'Emissivity does not matter for radiation'], 1,
 'Kirchhoff\'s law (absorptivity = emissivity at each wavelength) lets a coating absorb visible sunlight yet be a poor emitter of the long-wavelength IR a warm plate radiates, so it runs hotter.', { dg: 1, fig: 'qf-t1-selective' });
NUM('t07', 5, 'One-layer greenhouse model: Earth absorbs S(1 − a)/4 = 238 W/m² of sunlight (S = 1361, a = 0.30). A single atmospheric layer is transparent to sunlight and a perfect absorber/emitter of infrared, radiating equally up and down. Find the surface temperature in kelvin. (σ = 5.670×10⁻⁸)', 303, 'K',
 'Top of atmosphere: layer must radiate 238 W/m² upward, so it also radiates 238 downward. Surface must emit 238 (net to layer)+238 back = 476 W/m² total: σT_s⁴ = 476 → T_s = (476/5.670×10⁻⁸)^{1/4} = 303 K (= 2^{1/4} × 255 K). Real Earth: 288 K.', { dg: 1, tol: 0.01 });
NUM('t07', 5, 'Two large parallel black plates are at 400 K and 300 K in vacuum. A thin black shield plate is inserted between them, not touching either. Find the steady temperature of the shield in kelvin.', 360, 'K',
 'In steady state the flux 400→shield equals flux shield→300: σ(400⁴ − T⁴) = σ(T⁴ − 300⁴) → T⁴ = (400⁴ + 300⁴)/2 = 1.685×10¹⁰ → T = 360 K. The net flux is halved by the shield.', { dg: 1, tol: 0.01 });
MC('t07', 4, 'In SI base units, the Stefan–Boltzmann constant σ (W m⁻² K⁻⁴) equals:',
 ['kg s⁻² K⁻⁴', 'kg s⁻³ K⁻⁴', 'kg m s⁻³ K⁻⁴', 'kg m⁻¹ s⁻² K⁻⁴'], 1,
 'W = kg m² s⁻³. W m⁻² = kg s⁻³. So σ has units kg s⁻³ K⁻⁴.', _h);
MC('t07', 4, 'A black-body furnace is raised from 1000 K to 2000 K. Which statement is correct?',
 ['Peak wavelength halves and total exitance rises ×16', 'Peak wavelength doubles and exitance rises ×16', 'Peak wavelength halves and exitance rises ×4', 'Peak wavelength is unchanged, exitance ×16'], 0,
 'Wien: λ_max ∝ 1/T → halves. Stefan–Boltzmann: M ∝ T⁴ → ×16.', _h);

/* ---------- t08 Newton's law of cooling ---------- */
NUM('t08', 4, 'A cup in a 20.0 °C room reads 80.0 °C at t = 0 and 62.0 °C at t = 10 min. Assuming Newton\'s law of cooling, predict its temperature (°C) at t = 25 min.', 44.6, '°C',
 'K = (1/10) ln(60/42) = 0.03567 min⁻¹. T = 20 + 60 e^{−0.03567 × 25} = 20 + 60 × 0.4100 = 44.6 °C.', _h);
NUM('t08', 4, 'A cup starts at 90.0 °C in a 22.0 °C room and is 66.0 °C after 15 min. How long in total (minutes) after the start does it reach 40.0 °C?', 45.8, 'min',
 'K = ln(68/44)/15 = 0.02906 min⁻¹. t = ln(68/18)/K = 1.3291/0.029056 = 45.8 min.', { dg: 1, tol: 0.02 });
NUM('t08', 4, 'A pot of water in a 20 °C room takes 10.0 min to cool from 100 °C to 60 °C. How long (minutes) does it take, starting from 100 °C, to reach 30 °C?', 30, 'min',
 'The excess goes 80 → 40 in 10 min: a half-life of 10 min. To reach 30 °C the excess must be 10 = 80/8: three half-lives = 30 min.', _h);
MC('t08', 5, 'Same pot, same room: starting at 60 °C, how long does it take to fall to 40 °C?',
 ['5 min', '10 min', '20 min', '20 min (linear cooling rate)'], 1,
 'Excess over room: 40 → 20 is again a factor of 2, which takes one half-life = 10 min (same as 100 → 60). Newton cooling is scale-free in the excess; linear-rate thinking would wrongly say 5 min.', _h);
NUM('t08', 4, 'A cup in a 25.0 °C room starts at 95.0 °C and cools with K = 0.040 min⁻¹. When does it reach 30.0 °C (minutes)?', 66.0, 'min',
 't = (1/K) ln(70/5) = 25 × 2.639 = 66.0 min.', { dg: 1, tol: 0.01 });
NUM('t08', 4, 'A cup has thermal conductance to the room G = 2.0 W/K and contents 250 g of water (c = 4184) plus 100 g of ceramic (c = 850 J/kg·K). Find the time constant τ = 1/K in minutes.', 9.43, 'min',
 'C = 0.250 × 4184 + 0.100 × 850 = 1131 J/K. τ = C/G = 565.5 s = 9.43 min.', { dg: 1, tol: 0.01 });
MC('t08', 4, 'Room temperature is 20 °C. Four cups\' temperatures (°C) are sampled every 5 minutes. Which record is consistent with Newton\'s law of cooling?',
 ['80, 60, 46.7, 37.8', '80, 65, 50, 35', '80, 60, 45, 33.8', '80, 62, 50, 42.4'], 0,
 'Newton: the EXCESS over 20 °C must fall by a constant factor. A: excess 60, 40, 26.7, 17.8 → ×(2/3) each step. B: linear drop. C: T itself falls by ×0.75 (excess ratios 0.67, 0.625, 0.55). D: excess ratios 0.70, 0.71, 0.75 not constant.', _h);
NUM('t08', 5, 'The figure shows two cups in the same room. When (minutes after t = 0) do the two cups have exactly the same temperature?', 18.7, 'min',
 'T_A = 20 + 70e^{−0.05t}, T_B = 20 + 40e^{−0.02t}. Equal when 70e^{−0.05t} = 40e^{−0.02t} → e^{−0.03t} = 4/7 → t = ln(7/4)/0.03 = 18.65 min. The hotter cup A has the faster K and overtakes B.', { dg: 1, fig: 'qf-t1-coolcross', tol: 0.02 });
MC('t08', 5, 'In the figure, for t well beyond 60 min which cup is hotter and why?',
 ['A, because it started hotter', 'B, because its smaller K lets its excess decay more slowly', 'They are equal', 'A, because K is larger'], 1,
 'After the crossing (t ≈ 18.7 min) B stays above A because its excess decays more slowly (K = 0.020 vs 0.050). Starting temperature matters only early on.', { dg: 1, fig: 'qf-t1-coolcross' });
MC('t08', 5, 'A cup of coffee in a room at 20 °C starts at 90 °C. You will add a small amount of cold cream at exactly room temperature either at the start of a 10-min wait or at the end. If the cooling constant K is the same in both cases, which gives the hotter coffee at t = 10 min?',
 ['Adding cream at the start', 'Adding cream at the end', 'They are identical', 'It depends on the room temperature'], 2,
 'Both mixing (weighted average of excess temperatures) and cooling (multiplying the excess by e^{−Kt}) are LINEAR operations on the excess over room, so they commute. Result is the same. (In practice K changes with the cup volume, so real coffee differs slightly.)', _h);
TF('t08', 4, 'A cup of uncovered hot water in a room can, at some stage, cool below room temperature even though Newton\'s law of cooling (conduction/convection only) says it never can.', true,
 'Evaporation removes latent heat, so the water can drop below room temperature (toward the wet-bulb temperature) when the room air is not saturated. Newton\'s simple law leaves this out.', _h);

/* ---------- t09 Laws ---------- */
NUM('t09', 4, 'A closed system goes from state 1 to state 2 by path X, absorbing 300 J and doing 120 J of work on its surroundings. By another path Y it does 200 J of work on its surroundings. How much heat (J) does it absorb along path Y?', 380, 'J',
 'ΔU = Q − W is path independent: ΔU = 300 − 120 = 180 J. On Y: Q = ΔU + W = 180 + 200 = 380 J.', _h);
NUM('t09', 4, 'A heat engine takes 2000 J from a reservoir at 227 °C and rejects heat to a reservoir at 27 °C. What is the maximum work (J) it could deliver per cycle?', 800, 'J',
 'Convert to kelvin: T_h = 500 K, T_c = 300 K. η = 1 − 300/500 = 0.40 → W = 800 J.', _h);
MC('t09', 4, 'An inventor claims a cyclic engine working between 600 K and 300 K absorbs 1000 J per cycle and delivers 550 J of work. The claim:',
 ['is fine', 'violates the first law', 'violates the second law (Carnot limit is 50%)', 'is fine if the cold reservoir is at 0 °C'], 2,
 'The first law is satisfied (rejects 450 J). But η = 0.55 > 1 − 300/600 = 0.50, the Carnot limit. Not possible.', _h);
MC('t09', 4, 'A refrigerator is operated in a closed, insulated, sealed room with its door left open. The room temperature will:',
 ['fall, since the fridge is cooling', 'rise, since the electrical work ends up as heat in the room', 'stay constant', 'fall then rise'], 1,
 'Energy conservation: electrical energy enters the isolated room and ends as heat; net heat released by the condenser = heat absorbed + work. The room warms.', _h);
MC('t09', 5, 'Equal masses of water initially at 10 °C and 90 °C exchange heat ONLY with each other (the pair is isolated). If the exchange is done in the cleverest possible reversible way (e.g., an ideal counter-flow heat exchanger), what is the highest temperature the initially COLD water can reach?',
 ['50 °C', '70 °C', 'nearly 90 °C', '100 °C'], 2,
 'Energy: T_a + T_b = 100 °C (equal c, m). Second law: ΔS = mc[ln(T_a/283.15) + ln(T_b/363.15)] ≥ 0. The limit ΔS = 0 gives T_a·T_b = 283.15 × 363.15 with T_a + T_b = 646.3 K, i.e. the two temperatures simply swap: cold water reaches 90 °C, hot ends at 10 °C. Simple mixing (50 °C) is the IRREVERSIBLE extreme.', _h);
MC('t09', 3, 'The Zeroth Law (A~C and B~C implies A~B) is essential because it:',
 ['defines energy', 'lets a thermometer (system C) be used to compare A and B and justifies temperature as a property', 'says entropy increases', 'defines absolute zero'], 1,
 'It makes "same temperature" a transitive relation: a thermometer placed in contact with A and B tells us whether they would be in equilibrium. It was named "zeroth" (c. 1931, Ralph Fowler) after the first and second laws already had numbers.', _h);
MS('t09', 4, 'Which statements about the Laws of Thermodynamics are correct?',
 ['For an isolated system, total energy is constant.', 'Heat can never flow from a colder to a hotter body in any circumstances.', 'The entropy of the universe never decreases in any process.', 'Absolute zero cannot be reached in a finite number of steps.'], [0, 2, 3],
 'B is false: with work input (a refrigerator), heat does flow cold → hot; the Clausius statement says it cannot happen SPONTANEOUSLY/with no other change.', _h);
MC('t09', 4, 'An insulated rigid container with a membrane splits it: half holds an ideal gas at temperature T, the other half is vacuum. The membrane bursts. The final temperature of the gas is:',
 ['T', 'less than T, since it expands', 'greater than T', 'half of T'], 0,
 'Free expansion: Q = 0, W = 0, so ΔU = 0, and for an ideal gas U depends only on T. T is unchanged. (The entropy does rise.)', _h);

/* ---------- t10 Systems & processes ---------- */
NUM('t10', 4, 'For the cycle A → B → C → A in the figure, find the net work done BY the gas per cycle in joules. (1 kPa·L = 1 J)', 400, 'J',
 'The net work is the enclosed area: triangle with base (6 − 2) L = 4 L and height (300 − 100) kPa = 200 kPa. Area = ½ × 4 × 200 = 400 J. The loop is clockwise (up at small V, back along the bottom at small P), so the gas does positive net work.', { dg: 1, fig: 'qf-t1-pv' });
NUM('t10', 5, 'In the same cycle, the gas is at 300 K at point A. What is the maximum temperature (K) reached anywhere on the path? (Hint: look at the straight line B → C.)', 1200, 'K',
 'PV ∝ T. A: 100 × 2 = 200 J-equivalent. On B→C: P = 400 − 50V (kPa, L) → PV = 400V − 50V², a maximum of 800 at V = 4 L (P = 200 kPa), larger than both endpoints (600 at B and C). T_max = 300 × 800/200 = 1200 K. The hottest point lies in the MIDDLE of a straight-line leg.', { dg: 1, fig: 'qf-t1-pv' });
MC('t10', 4, 'Which statement is true for the cycle in the figure?',
 ['It is a refrigerator cycle because the path is counter-clockwise', 'It is an engine cycle (net work out) because the loop is clockwise', 'ΔU for one loop is 400 J', 'Net heat for one loop is zero'], 1,
 'Clockwise on a P-V diagram means net work is done by the gas (engine). ΔU over a complete loop is zero, so Q_net = W_net = +400 J.', { dg: 1, fig: 'qf-t1-pv' });
NUM('t10', 4, 'A monatomic ideal gas (γ = 5/3) at 300 K is expanded adiabatically and reversibly to twice its volume. What is the final temperature (K)?', 189, 'K',
 'TV^{γ−1} = const: T₂ = 300 × (1/2)^{2/3} = 300 × 0.630 = 189 K.', _h);
NUM('t10', 4, '2.00 mol of ideal gas is compressed isothermally at 350 K from 30 L to 10 L. How much heat (J) flows out of the gas?', 6390, 'J',
 'ΔU = 0, so Q_out = |W| = nRT ln(V₁/V₂) = 2.00 × 8.314 × 350 × ln 3 = 5820 × 1.0986 = 6394 J ≈ 6.39 kJ.', { dg: 1, tol: 0.02 });
NUM('t10', 4, '3.00 mol of a monatomic ideal gas is heated from 300 K to 500 K at constant pressure. Find the heat absorbed (J). (R = 8.314)', 12471, 'J',
 'Q = nC_pΔT = 3 × 2.5R × 200 = 3 × 20.785 × 200 = 12 471 J. Of this, ΔU = 7483 J and W = nRΔT = 4988 J (40%).', { dg: 1, tol: 0.01 });
MC('t10', 4, 'Starting from the same initial state and expanding to the same final VOLUME, an ideal gas does more work in a reversible ISOTHERMAL expansion than in a reversible ADIABATIC one because:',
 ['in the adiabatic case the gas cools as it expands, so its pressure falls faster', 'the adiabatic gas absorbs more heat', 'isothermal has lower pressure', 'work is independent of path'], 0,
 'The adiabatic curve is steeper (PV^γ = const): with Q = 0 the gas uses its own internal energy and cools, so P drops faster and the area under the curve is smaller.', _h);
TF('t10', 4, 'A pressure cooker with its valve open, steam escaping, is an OPEN system; a sealed can heated on a stove is a CLOSED system.', true,
 'Open: matter crosses the boundary. Closed: energy crosses but matter does not. Isolated: neither.', _h);
MS('t10', 4, 'For an ideal gas taken around a complete counter-clockwise loop on a PV diagram, which are true?',
 ['ΔU = 0 for the loop', 'The net work is done ON the gas', 'Net heat is absorbed by the gas', 'It could operate as a refrigerator/heat pump'], [0, 1, 3],
 'Counter-clockwise: net work is done on the gas, so W_by < 0 and Q_net = W_by < 0: net heat is REJECTED. ΔU = 0 over any cycle.', _h);

/* ---------- DEEP HISTORY ---------- */
MC('t01', 3, 'Anders Celsius\'s original 1742 temperature scale differed from the one we use today in which way?',
 ['It used 0 for the boiling point and 100 for the freezing point of water', 'It was based on the freezing point of brine', 'It started at absolute zero', 'It had 180 divisions between the fixed points'], 0,
 'Celsius set 0 at boiling and 100 at freezing; the scale was inverted shortly afterwards (c. 1744, associated with Linnaeus and Strömer). Fahrenheit\'s scale has 180 divisions; Fahrenheit used brine for his 0 °F.', _h);
MC('t01', 4, 'Which pair of fixed-point definitions belongs to Fahrenheit\'s scale as commonly stated today (at 1 atm)?',
 ['0 and 100', '32 and 212', '0 and 80', '273.15 and 373.15'], 1,
 'Fahrenheit (mercury thermometer 1714, scale published 1724): water freezes at 32 °F and boils at 212 °F, 180 divisions apart. Réaumur used 0 and 80; kelvin 273.15 and 373.15.', _h);
MC('t01', 3, 'Thermocouples work because of a thermoelectric effect discovered in 1821 by:',
 ['Thomas Seebeck', 'Anders Celsius', 'Joseph Black', 'Josef Stefan'], 0,
 'Thomas Johann Seebeck (1821): a circuit of two dissimilar metals with their junctions at different temperatures develops an EMF ∝ ΔT.', _h);
MC('t01', 4, 'The 2019 SI redefinition of the kelvin fixed the value of which constant?',
 ['The Boltzmann constant k_B = 1.380649 × 10⁻²³ J/K', 'The triple point of water at 273.16 K as a definition', 'The gas constant R = 8.314 J/mol·K only', 'The Stefan–Boltzmann constant'], 0,
 'Since 20 May 2019 the kelvin is defined by fixing k_B = 1.380649 × 10⁻²³ J/K, replacing the older definition via the triple point of water (273.16 K).', _h);
MC('t03', 3, 'Who distinguished heat from temperature and discovered latent heat and specific heat (c. 1760) in Glasgow and Edinburgh?',
 ['Joseph Black', 'Benjamin Thompson', 'James Joule', 'Ludwig Boltzmann'], 0,
 'Joseph Black (1728–1799) measured the heat absorbed in melting ice with no temperature change (latent heat) and showed substances differ in heat needed per degree (specific heat/heat capacity).', _h);
MC('t03', 4, 'Lavoisier and Laplace (c. 1782–83) built an ice calorimeter. What did it measure?',
 ['Heat released by a sample, from the MASS of ice it melted', 'Temperature by the volume of mercury', 'The mechanical equivalent of heat', 'Emissivity of a surface'], 0,
 'Heat released by the sample melted ice in a surrounding jacket; since each kilogram of melted ice absorbs L_f, the mass of melt-water measures the heat.', _h);
MC('t05', 3, 'The law of heat conduction P = kAΔT/L is named after Joseph Fourier, who published his treatise on heat (Théorie analytique de la chaleur) in:',
 ['1822', '1701', '1879', '1900'], 0,
 'Fourier\'s Théorie analytique de la chaleur appeared in 1822. 1701: Newton (cooling); 1879: Stefan; 1900: Planck.', _h);
MC('t07', 4, 'Put these events in the correct chronological order: (1) Wien\'s displacement law, (2) Planck\'s quantum radiation law, (3) Stefan\'s empirical T⁴ law, (4) Kirchhoff\'s law of thermal radiation.',
 ['4, 3, 1, 2', '3, 4, 2, 1', '4, 1, 3, 2', '1, 3, 4, 2'], 0,
 'Kirchhoff 1859–60; Stefan 1879 (experimental) with Boltzmann\'s theoretical derivation in 1884; Wien 1893; Planck 1900.', _h);
TF('t07', 4, 'Stefan obtained the T⁴ law from experimental data in 1879, and his student Ludwig Boltzmann later derived it theoretically (1884) using thermodynamics and radiation pressure.', true,
 'Correct: Stefan (1879) empirical, Boltzmann (1884) theoretical derivation, hence "Stefan–Boltzmann law".', _h);
MC('t07', 3, 'Planck\'s 1900 radiation law was the birth of quantum theory because it assumed:',
 ['energy is exchanged in discrete packets E = hf', 'light travels as a wave only', 'temperature is quantized', 'atoms are indivisible'], 0,
 'To fix the "ultraviolet catastrophe" of Rayleigh–Jeans, Planck introduced quanta of energy E = hf (h = 6.626 × 10⁻³⁴ J·s).', _h);
MC('t07', 4, 'John Leslie\'s famous "cube" (c. 1804) — a hot-water-filled metal cube with four differently finished faces — was used to show that:',
 ['radiated heat depends strongly on the surface finish (matte black emits far more than polished metal)', 'heat travels only by conduction', 'temperature is proportional to T⁴', 'caloric has mass'], 0,
 'At the same temperature, the blackened face radiated the most and the polished metal face the least — the origin of the emissivity idea. (Kirchhoff later tied emissivity to absorptivity.)', _h);
MC('t07', 4, 'In 1800 William Herschel discovered infrared radiation by noting what?',
 ['A thermometer placed just beyond the red end of the sun\'s spectrum still warmed', 'A thermocouple reading below 0 K', 'A black cube radiating at a different rate', 'Blue light heated a gas'], 0,
 'Herschel measured temperatures across the prism spectrum; the thermometer beyond the red reached the highest temperature: invisible "calorific rays".', _h);
MC('t08', 3, 'Isaac Newton\'s law of cooling was published anonymously in which year?',
 ['1701', '1687', '1824', '1848'], 0,
 'Newton described it in a paper on his temperature scale (Scala graduum caloris) in the Philosophical Transactions, 1701. (The Principia is 1687.)', _h);
MC('t09', 4, 'The word "entropy" was coined by Rudolf Clausius in 1865. Which earlier work by Sadi Carnot (1824) is considered the foundation of the second law?',
 ['Reflections on the Motive Power of Fire', 'Théorie analytique de la chaleur', 'The Mechanical Equivalent of Heat', 'Scala graduum caloris'], 0,
 'Carnot\'s 1824 "Réflexions sur la puissance motrice du feu" analysed the ideal engine; Clausius (1850, 1865) and Kelvin formulated the second law and entropy.', _h);
MC('t09', 3, 'The Zeroth Law of Thermodynamics was given that name around 1931 by:',
 ['Ralph Fowler', 'Max Planck', 'Anders Celsius', 'Joseph Black'], 0,
 'Ralph H. Fowler introduced the name because it logically precedes the First and Second Laws.', _h);
MC('t09', 4, 'Matching: which contributor is associated with deriving (1850) the equivalence of a perpetuum mobile of the second kind with heat flowing from cold to hot?',
 ['Rudolf Clausius', 'Count Rumford', 'Joseph Fourier', 'Anders Celsius'], 0,
 'Clausius\'s 1850 statement: heat cannot of itself pass from a colder to a hotter body. Kelvin gave the equivalent "no complete conversion" form the following year.', _h);
/* ---------- extra logic puzzles ---------- */
MC('t04', 5, 'You mix 1 kg of water at 0 °C (ice water) with 1 kg at 100 °C. Compare with mixing 1 kg of ICE at 0 °C with 1 kg of water at 100 °C. The final temperatures are (roughly):',
 ['50 °C and 50 °C', '50 °C and ≈ 10 °C', '50 °C and 33 °C', '0 °C and 0 °C'], 1,
 'Water/water: 50 °C. Ice/water: heat available to cool to 0: 418.4 kJ; ice melting takes 334 kJ; the remaining 84.4 kJ warm 2 kg: ΔT = 84.4/(2 × 4.184) = 10.1 °C. So ≈ 10 °C. (Melting is worth 80 degrees of warming of the same mass.)', _h);
NUM('t03', 4, 'An electric kettle delivers 1500 W to 1.20 kg of water at 20.0 °C, 80% efficient. How long (s) until the water reaches 100 °C? (c = 4184 J/kg·K)', 335, 's',
 'Heat needed = 1.20 × 4184 × 80 = 401 664 J. Useful power = 0.80 × 1500 = 1200 W. t = 401 664/1200 = 334.7 s ≈ 335 s.', { dg: 1, tol: 0.02 });
NUM('t09', 4, 'Two identical copper blocks (each C = 400 J/K), one at 100 °C and one at 20 °C, are placed in contact inside an insulated box. What is the final temperature (°C)?', 60, '°C',
 'Isolated: ΔU_total = 0, so the heat lost by one equals the heat gained by the other. Equal heat capacities give the average, 60 °C.', { dg: 1, tol: 0.01 });

/* ---- post-process: bump a few multi-step items to d5, and spread the MC answer positions (skip items whose text cites option letters) ---- */
(function () {
  const Qs = DATA.questions.slice(_h0);
  ['Fifty grams of ice', 'Two hundred grams of ice', 'Ten grams of steam', 'In which of these insulated mixtures', 'The thermal network', 'interface between the fibreglass', 'Three liquids', 'A student drops 100 g', 'Two metal samples', 'A cup in a 20.0 °C room reads 80', 'Skin at 34', 'A copper rod and a steel rod', 'A foam panel', 'Sweat evaporating', 'A type-K', 'To find a calorimeter', 'Which statement is true for the cycle', 'A 0.500 mol'].forEach(k => { const q = Qs.find(x => x.q.indexOf(k) >= 0 || x.q.toLowerCase().indexOf(k.toLowerCase()) >= 0); if (q && q.d === 4) q.d = 5; });
  let seed = 7; const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  const tgt = [2, 3, 0, 1, 3, 2, 1, 0, 2, 3, 1, 0];
  let k = 0;
  Qs.filter(q => q.type === 'mc' && !/(^|[ (;.])[A-D]:|Option [A-D]|\([A-D]\)/.test(q.exp)).forEach(q => {
    const want = tgt[k++ % tgt.length], right = q.ch[q.ans], others = q.ch.filter((_, i) => i !== q.ans);
    for (let i = others.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [others[i], others[j]] = [others[j], others[i]]; }
    others.splice(want, 0, right); q.ch = others; q.ans = want;
  });
})();
