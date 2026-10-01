/* ===== THERMODYNAMICS QUESTION BANK — t11–t22 ===== */

// t11 — gas laws
NUM('t11',2,'A balloon of 2.0 L at 20 °C is cooled at constant pressure to −10 °C. New volume (L)?',1.80,'L','V₂ = 2.0×263.15/293.15.',{dg:1,tol:0.02});
NUM('t11',2,'A rigid can at 25 °C and 1.00 atm is heated to 100 °C. Final pressure (atm)?',1.25,'atm','T in kelvin: 373.15/298.15.',{dg:1,tol:0.02});
NUM('t11',2,'Pressure (atm) of 0.50 mol of gas at 300 K in 2.0 L? (R = 0.08206 L·atm/mol·K)',6.15,'atm','nRT/V.',{tol:0.02});
NUM('t11',3,'Root-mean-square speed of N₂ (M = 0.028 kg/mol) at 300 K (m/s)?',517,'m/s','√(3RT/M).',{tol:0.02});
MC('t11',2,'Doubling the absolute temperature of a gas in a rigid container (constant V) makes the pressure:',['halve','double','quadruple','stay the same'],1,'',{dg:1});
MC('t11',2,'At the same temperature, helium and xenon atoms have the same average:',['speed','kinetic energy','momentum','mass'],1,'⟨KE⟩ = 3/2 kT.');
NUM('t11',2,'By what factor does v_rms change when T goes from 300 K to 600 K?',1.414,'×','√2.',{tol:0.02});
MC('t11',2,'“Equal volumes of gases at equal T and P contain equal numbers of molecules” is:',['Avogadro’s law','Boyle’s law','Dalton’s law','Charles’s law'],0,'');
MC('t11',2,'Boyle’s law states PV = constant when:',['T is constant','P is constant','V is constant','n is changing'],0,'',{dg:1});
NUM('t11',1,'Molar volume (L) of an ideal gas at STP (0 °C, 1 atm)?',22.4,'L','',{tol:0.01});
MC('t11',2,'The caloric theory of heat said heat was:',['a weightless fluid','molecular motion','a wave','an illusion'],0,'',{dg:1});
MC('t11',2,'Which experiment most directly undermined the caloric theory?',['Rumford’s cannon boring','Boyle’s J-tube','Torricelli’s barometer','Ørsted’s compass'],0,'');
MC('t11',2,'Gauge pressure vs absolute pressure: absolute = ',['gauge + atmospheric','gauge − atmospheric','gauge × atmospheric','gauge only'],0,'');

// t12 — entropy
NUM('t12',3,'1000 J of heat flows from a 400 K reservoir to a 300 K reservoir. ΔS of the universe (J/K)?',0.83,'J/K','−1000/400 + 1000/300.',{dg:1,tol:0.03});
NUM('t12',3,'Entropy change (J/K) when 100 g of ice melts at 273.15 K? (L_f = 334 J/g)',122,'J/K','mL/T.',{tol:0.02});
NUM('t12',3,'Entropy change (J/K) when 500 g of water is heated from 20 °C to 80 °C? (c = 4.184 J/g·K)',390,'J/K','mc ln(T₂/T₁).',{tol:0.03});
MC('t12',2,'Who coined the word “entropy” (1865)?',['Clausius','Boltzmann','Carnot','Kelvin'],0,'',{dg:1});
MC('t12',2,'Boltzmann’s statistical formula for entropy is:',['S = k ln W','S = Q/T only','S = mcΔT','S = PV'],0,'',{dg:1});
MC('t12',2,'The entropy change of the universe in a reversible process is:',['positive','negative','zero','infinite'],2,'');
MC('t12',2,'Entropy of the SYSTEM when a gas condenses to a liquid:',['increases','decreases','stays the same','is undefined'],1,'');
NUM('t12',3,'Entropy change (J/K) of 1 mol ideal gas when its volume doubles in free expansion? (R = 8.314)',5.76,'J/K','R ln 2.',{tol:0.02});
MC('t12',2,'Which has the highest entropy per mole at 298 K?',['ice','liquid water','water vapor','diamond'],2,'');
MC('t12',2,'The heat-death concept is linked to:',['maximum entropy','absolute zero only','Carnot cycle','enthalpy'],0,'');

// t13 — enthalpy
NUM('t13',3,'ΔH (kJ/mol) for CH₄ + 2O₂ → CO₂ + 2H₂O(l) using ΔH_f°: CH₄ −74.8, CO₂ −393.5, H₂O(l) −285.8?',-890.3,'kJ/mol','Σproducts − Σreactants.',{dg:1,tol:0.01});
MC('t13',1,'An exothermic reaction has:',['ΔH > 0','ΔH < 0','ΔS < 0','ΔG > 0'],1,'',{dg:1});
NUM('t13',3,'Ice melts: ΔH = +6010 J/mol, ΔS = +22.0 J/mol·K. Temperature at which ΔG = 0 (K)?',273,'K','ΔH/ΔS.',{tol:0.02});
MC('t13',2,'The standard enthalpy of formation of O₂(g) is:',['0','−100 kJ/mol','+100 kJ/mol','depends on T only'],0,'');
MC('t13',2,'At constant pressure the heat exchanged equals:',['ΔU','ΔH','ΔS','ΔG'],1,'');
NUM('t13',3,'50 mL 1.0 M HCl + 50 mL 1.0 M NaOH (22.0 °C → 28.9 °C). ΔH per mole (kJ/mol; assume 100 g solution, c = 4.18 J/g·K)?',-57.7,'kJ/mol','q = 100×4.18×6.9 = 2884 J; n = 0.050 mol.',{tol:0.03});
MC('t13',2,'Hess’s law states that ΔH for a reaction:',['depends only on the initial and final states','depends on the path','is always negative','equals ΔG'],0,'');
MC('t13',2,'A reaction is spontaneous at constant T and P when:',['ΔG < 0','ΔG > 0','ΔH > 0 only','ΔS < 0 only'],0,'');
MC('t13',2,'Which enthalpy is larger for water?',['fusion','vaporization','equal','undefined'],1,'');

// t14 — engines
NUM('t14',2,'Carnot efficiency (%) of an engine operating between 500 K and 250 K?',50,'%','1 − 250/500.',{dg:1,tol:0.01});
NUM('t14',3,'Carnot efficiency (%) between 500 °C and 30 °C?',60.8,'%','1 − 303.15/773.15.',{tol:0.02});
MC('t14',2,'Which step of the Carnot cycle rejects heat to the cold reservoir?',['isothermal compression','adiabatic expansion','isothermal expansion','adiabatic compression'],0,'',{dg:1,f:1});
NUM('t14',3,'Maximum COP of a refrigerator operating between 270 K (inside) and 300 K (kitchen)?',9,'','T_c/(T_h − T_c).');
NUM('t14',3,'Maximum COP of a heat pump heating a house at 293 K from 273 K outdoors?',14.65,'','T_h/(T_h − T_c).',{tol:0.02});
MC('t14',2,'Sadi Carnot published his work on the motive power of fire in:',['1698','1824','1850','1900'],1,'',{dg:1});
NUM('t14',3,'Ideal Otto-cycle efficiency (%) for compression ratio r = 8, γ = 1.4?',56.5,'%','1 − 8^(−0.4).',{tol:0.02});
MC('t14',3,'An inventor claims an engine takes 1000 J at 400 K, exhausts at 300 K and outputs 300 J. This is:',['possible','impossible: exceeds Carnot limit 25 %','possible only for gases','a refrigerator'],1,'');
MC('t14',2,'The Stirling engine was invented in:',['1712','1816','1876','1892'],1,'Robert Stirling.');
MC('t14',2,'James Watt’s key improvement to the steam engine was:',['the separate condenser','the flywheel','the diesel cycle','the turbine'],0,'');
MC('t14',2,'Newcomen’s atmospheric steam engine dates from:',['1698','1712','1765','1804'],1,'');
MC('t14',2,'A refrigerator’s performance is given by:',['efficiency (always < 1)','COP (can exceed 1)','entropy','γ'],1,'');

// t15 — history
MC('t15',2,'Who is called the “father of thermodynamics”?',['Sadi Carnot','Joule','Kelvin','Gibbs'],0,'',{dg:1});
MC('t15',2,'Rumford’s 1798 cannon-boring observations suggested heat is:',['a fluid','a form of motion','an element','conserved'],1,'',{dg:1});
MC('t15',2,'Who measured the mechanical equivalent of heat with paddle wheels?',['Joule','Carnot','Fahrenheit','Stirling'],0,'');
MC('t15',2,'Joseph Black is associated with:',['latent and specific heat','the diesel engine','absolute zero','the third law'],0,'');
MC('t15',2,'The Celsius scale was introduced in:',['1714','1742','1848','1900'],1,'');
MC('t15',2,'Fahrenheit’s mercury thermometer dates from about:',['1714','1814','1614','1914'],0,'');
MC('t15',2,'The Kelvin scale dates from:',['1742','1848','1900','1950'],1,'');
MC('t15',2,'Who derived S = k ln W?',['Boltzmann','Gibbs','Planck','Clapeyron'],0,'');
MC('t15',2,'The unit of power (watt) honors the inventor who improved the steam engine:',['James Watt','Matthew Boulton','Thomas Newcomen','Thomas Savery'],0,'');
MC('t15',2,'The third law of thermodynamics is associated with:',['Nernst','Carnot','Watt','Boyle'],0,'',{dg:1});
MC('t15',2,'The Dewar (vacuum) flask was invented in:',['1712','1892','1948','1767'],1,'');
MC('t15',2,'Who discovered (empirically) that radiated power ∝ T⁴ in 1879?',['Stefan','Wien','Planck','Kirchhoff'],0,'');
MC('t15',3,'Which person is credited with the Kelvin–Planck statement’s Kelvin half and the concept of the heat pump (1852)?',['Lord Kelvin (William Thomson)','Clausius','Joule','Rankine'],0,'');
MC('t15',2,'Amedeo Avogadro’s hypothesis is from:',['1811','1611','1911','1711'],0,'');
MC('t15',2,'The Clausius–Clapeyron relation links:',['vapor pressure and temperature','pressure and volume only','heat and work','entropy and information'],0,'');
MC('t15',2,'Gibbs is associated with:',['free energy and the phase rule','Brownian motion','the triple point only','thermocouples'],0,'');
MC('t15',2,'The concept that heat is a weightless fluid called “caloric” is associated with:',['Lavoisier','Joule','Helmholtz','Maxwell'],0,'');
MC('t15',2,'Maxwell’s demon was proposed in:',['1867','1967','1767','1567'],0,'');

// t16 — device (verified 2018/2019)
MC('t16',2,'In the 2018/2019 Division C Thermodynamics rules the device must fit inside a cube of edge:',['10 cm','15 cm','20 cm','25 cm'],1,'Division B: 20 cm.',{dg:1});
MC('t16',2,'The 2018/2019 device task used how many identical standard beakers (one inside, one control)?',['one','two','three','none'],1,'',{dg:1});
MC('t16',2,'Which heat-loss path is usually the LARGEST for an insulated hot-water beaker with a probe hole?',['the top opening (evaporation/convection/radiation)','the glass bottom','the thermocouple wire only','the label'],0,'');
MC('t16',2,'Hot-melt glue on a 70 °C device can fail because:',['it softens around 70–90 °C','it conducts heat well','it is magnetic','it evaporates'],0,'');
MC('t16',2,'Metalized film/foil reduces heat loss by:',['lowering emissivity (reflecting IR) across an air gap','raising conductivity','adding mass','absorbing water'],0,'');
MC('t16',2,'Wet insulation insulates worse because:',['water has much higher thermal conductivity than air','water has lower specific heat','foam melts','air gets heavier'],0,'');
MC('t16',2,'A heavy, dense inner layer around the beaker is a poor choice because:',['it absorbs heat (thermal mass)','it is cheaper','it radiates less','it is a better insulator'],0,'');
NUM('t16',3,'Volume of hot water in the 2019 Division C range: what is the thermal mass (J/K) of 100 mL of water? (ρ = 1 g/mL, c = 4.184)',418.4,'J/K','',{tol:0.01});
MC('t16',2,'The 2018 rules specified a probe access hole of about:',['0.5 cm','1.5 cm','3 cm','5 cm'],1,'Less than 2.5 cm below the top of the beaker; check 2027 rules!');
MC('t16',2,'The 2027 Thermodynamics device is described on soinc.org as designed to:',['collect heat','shed heat only','generate electricity','melt ice only'],0,'The details of the task must be read in the 2027 rules.');

// t17 — heat collection principles
MC('t17',2,'A good solar absorber surface (visible light) should have:',['high absorptivity','high reflectivity','low emissivity in visible only','transparent coating'],0,'');
MC('t17',2,'Glazing over an absorber reduces losses mainly by:',['blocking IR re-emission and convection','making it heavier','absorbing all light','cooling the plate'],0,'');
MC('t17',3,'A selective surface is best described as:',['high solar absorptivity and low IR emissivity','low absorptivity and high emissivity','transparent and reflective','magnetic'],0,'');
MC('t17',2,'To maximize energy collected, the absorber should be tilted so sunlight arrives:',['at grazing incidence','at normal (perpendicular) incidence','parallel to the plate','from behind'],1,'');
MC('t17',2,'The “stagnation temperature” of a collector is:',['the highest temperature with no heat removed','the lowest temperature','the freezing point','the room temperature'],0,'');
MC('t17',3,'Insulating the back of a collector raises the stagnation temperature because it:',['lowers the loss coefficient U_L','raises absorptivity','raises irradiance','reduces density'],0,'');

// t18 — scoring
NUM('t18',3,'2019 Heat score: lowest k in the field is 0.0060; your team’s k is 0.00729. HS (max 20)?',16.5,'pts','20×0.0060/0.00729.',{dg:1,tol:0.02});
NUM('t18',3,'2019 prediction score: predicted 63.5 °C, actual 62.0 °C. PS (25 − 2.5×|error|)?',21.25,'pts','',{dg:1,tol:0.01});
MC('t18',2,'Maximum number of plots accepted for scoring in 2018/2019 Thermodynamics:',['1','2','4','10'],2,'',{dg:1});
NUM('t18',3,'T₀ = 70.0, T_f = 62.0, T_r = 22.0, t = 25 min. k (min⁻¹)?',0.00729,'min⁻¹','(1/25)ln(48/40).',{tol:0.03});
MC('t18',2,'2019 Division C Thermodynamics: the written test was worth:',['25','35','45','65'],2,'TS = 45 × (team/highest).',{dg:1});
MC('t18',2,'Which best describes the 2019 tiebreaker order?',['test score, prediction score, heat score','heat score only','ice score','coin flip'],0,'');
MC('t18',2,'In 2019, a construction violation corrected at impound multiplied PS and k by:',['0.7 and 1.4','0.9 and 1.1','0 and 0','1 and 1'],0,'');
NUM('t18',2,'Maximum chart score (points) in 2019?',10,'pts','');
MC('t18',2,'In the 2018 scoring the optional ice-water bonus was worth up to:',['1 point','5 points','15 points','25 points'],1,'');
MC('t18',2,'Best strategy for the prediction portion is to:',['use your measured K(V) and Newton’s law with the actual T₀, T_r and time','guess room temperature','use a random number','use the control beaker temperature'],0,'');

// t19 — safety
MC('t19',2,'Why is a steam burn more severe than a hot-water burn at 100 °C?',['latent heat is released when steam condenses','steam is hotter by 50 °C','steam is heavier','steam is sticky'],0,'',{dg:1});
MC('t19',2,'Which PPE is required for Thermodynamics (2019)?',['eye protection','hard hat','steel-toe boots only','gloves only'],0,'');
MC('t19',2,'Correct thermometer placement for measuring water temperature:',['tip in the middle of the liquid, not touching glass','touching the bottom of the beaker','above the water','taped outside the beaker'],0,'');
MC('t19',2,'Calibrating a thermometer with crushed ice and water gives:',['0 °C','4 °C','−10 °C','25 °C'],0,'');
MC('t19',2,'Why avoid pouring boiling water into a cold ordinary glass beaker?',['thermal shock can crack it','it lowers c','it freezes','it evaporates all'],0,'');
MC('t19',2,'Dust from cutting fiberglass or aerogel should be handled with:',['a mask and gloves in a ventilated area','bare hands','nothing','heat'],0,'');

// t20 — applications
NUM('t20',2,'A 100 m steel rail (α = 12×10⁻⁶ /K) warms by 40 K. Length increase (cm)?',4.8,'cm','ΔL = αLΔT.',{tol:0.02});
MC('t20',2,'Water is densest at about:',['0 °C','4 °C','10 °C','100 °C'],1,'',{dg:1});
MC('t20',2,'A bimetallic strip bends when heated because:',['the two metals expand by different amounts','it melts','it is magnetized','it absorbs light'],0,'');
MC('t20',2,'A sea breeze blows from sea to land in the afternoon because:',['land heats faster, air rises over land, cooler sea air flows in','sea is warmer','moon gravity','wind from land'],0,'');
MC('t20',2,'The greenhouse effect is caused mainly by gases that:',['absorb infrared radiation and re-emit it','block visible light','are heavier than air','have no color'],0,'');
MC('t20',2,'When a metal ring with a hole is heated, the hole:',['shrinks','expands','stays the same','disappears'],1,'');

// t21 — strategy
MC('t21',2,'In 2018/2019 Thermodynamics, notes were permitted in:',['a hole-punched, secured 3-ring binder','any loose papers','nothing','a single sheet'],0,'',{dg:1});
MS('t21',3,'Division C written test areas (2019) included which of these? (select all)',['history of thermodynamics','radiant exitance / entropy / enthalpy (Div C only)','thermal conductivity and heat transfer','organic chemistry synthesis'],[0,1,2],'');

// t22 — advanced
MC('t22',3,'The probability of a microstate of energy E at temperature T is proportional to:',['e^(−E/k_BT)','E²','T/E','ln E'],0,'');
MC('t22',3,'Each quadratic degree of freedom contributes ____ per molecule to the average energy:',['½ k_BT','k_BT','2 k_BT','3 k_BT'],0,'');
MC('t22',3,'The thermodynamic potential minimized at equilibrium at constant T and P is:',['Helmholtz F','Gibbs G','enthalpy H','internal energy U'],1,'');
MC('t22',3,'Quantum “freeze-out” explains why:',['heat capacities fall at low T','gases liquefy','entropy is infinite','the Sun shines'],0,'');
