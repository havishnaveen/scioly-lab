/* ===== THERMODYNAMICS QUESTION BANK — t01–t10 ===== */

// t01 — temperature
NUM('t01',1,'Convert 72 °F to °C.',22.2,'°C','(72 − 32)/1.8 = 22.2 °C.',{dg:1,tol:0.01});
NUM('t01',1,'Convert 25 °C to kelvin.',298.15,'K','T(K) = T(°C) + 273.15.',{dg:1,tol:0.001});
NUM('t01',1,'Convert 98.6 °F to kelvin.',310.15,'K','37.0 °C → 310.15 K.',{tol:0.002});
NUM('t01',1,'Convert 20 °C to °F.',68,'°F','1.8×20 + 32.',{tol:0.005});
MC('t01',2,'At what temperature do the Celsius and Fahrenheit scales give the same number?',['−40','0','32','−273'],0,'°F = 1.8°C + 32 → −40 = −40.',{dg:1,f:1});
MC('t01',2,'A temperature INCREASE of 15 °C corresponds to an increase of ____ K.',['15','288','59','27'],0,'Differences: 1 °C = 1 K. (It is 27 °F.)',{dg:1});
MC('t01',1,'The absolute (Kelvin) temperature scale was proposed in 1848 by:',['Celsius','Fahrenheit','William Thomson (Lord Kelvin)','Rankine'],2,'');
MC('t01',2,'Absolute zero corresponds to:',['−273.15 °C','−100 °C','0 °C','−373.15 °C'],0,'= 0 K = −459.67 °F.');
NUM('t01',2,'Liquid nitrogen boils at 77 K. In °C?',-196,'°C','77 − 273.15 = −196.15 °C.',{tol:0.01});
MC('t01',2,'A thermocouple works by the:',['Doppler effect','Seebeck effect','Hall effect','Zeeman effect'],1,'Two dissimilar metals junction → voltage ∝ ΔT.');
MC('t01',2,'The triple point of water is at:',['0 °C exactly','0.01 °C (273.16 K)','4 °C','100 °C'],1,'');
MC('t01',2,'Anders Celsius’s original 1742 scale had 0 and 100 assigned to:',['freezing and boiling respectively','boiling and freezing respectively','body and room temperature','ice and brine'],1,'It was inverted later (c. 1744).');
TF('t01',1,'The kelvin is written with a degree symbol: “273 °K”.',false,'Correct is “273 K”.');
MC('t01',2,'Which scale is the absolute version of Fahrenheit?',['Kelvin','Rankine','Réaumur','Celsius'],1,'');
NUM('t01',3,'Approximate boiling point of water (°C) at 1500 m elevation? (≈ −1 °C per 300 m)',95,'°C','100 − 5.',{tol:0.02});
MC('t01',2,'Which is an appropriate use of Kelvin (rather than °C) in a formula?',['ideal gas law','Newton’s law of cooling excess temperature (T − T_r)','converting units of ΔT','reading a thermometer'],0,'Gas laws and T⁴ radiation need absolute temperature; differences can be in either.');

// t02 — heat & units
NUM('t02',2,'How many joules are in 250 Calories (food Calories, kcal)?',1046000,'J','250×4184.',{dg:1,tol:0.01});
MC('t02',1,'1 Calorie (food, capital C) equals:',['1 cal','10 cal','100 cal','1000 cal'],3,'',{dg:1,f:1});
NUM('t02',2,'1 BTU is approximately how many calories?',252,'cal','1055 J / 4.184.',{tol:0.02});
NUM('t02',1,'1 kWh equals how many joules?',3600000,'J','1000 W × 3600 s.',{tol:0.001});
MC('t02',2,'A therm is:',['1000 BTU','10 000 BTU','100 000 BTU','1 000 000 BTU'],2,'');
MC('t02',2,'Joule’s paddle-wheel experiment showed that:',['heat is a fluid','mechanical work converts to heat at a fixed rate','entropy always decreases','gases expand when heated'],1,'≈ 4.18 J per calorie.',{dg:1});
NUM('t02',3,'A 10 kg mass falls 2.0 m, turning a paddle in 1.0 kg of water, 20 times. Temperature rise of the water (K)? (g = 9.8 m/s², c = 4184 J/kg·K)',0.94,'K','Mgh×20 = 3920 J → /4184.',{tol:0.03});
MC('t02',1,'Heat is best defined as:',['the total energy stored in a body','energy transferred because of a temperature difference','temperature','a weightless fluid'],1,'',{dg:1,f:1});
NUM('t02',2,'A 3000 BTU/h air conditioner removes heat at a rate of (W)?',879,'W','3000×0.2931.',{tol:0.02});
TF('t02',1,'A hot object “contains” a quantity of heat.',false,'It contains internal (thermal) energy; heat is energy in transit.');
MC('t02',2,'One “ton of refrigeration” is:',['2000 W','12 000 BTU/h','1 hp','3 kW exactly'],1,'≈ 3.517 kW.');
NUM('t02',1,'A 500 W heater runs 60 s. Energy (kJ)?',30,'kJ','');

// t03 — specific heat & calorimetry
NUM('t03',2,'Heat (kJ) needed to warm 250 g of water from 20.0 °C to 85.0 °C? (c = 4.184 J/g·K)',68,'kJ','250×4.184×65 = 68 000 J.',{dg:1,tol:0.02});
NUM('t03',2,'150 g of water at 80 °C is poured into 250 g of water at 20 °C. Final temperature (°C)?',42.5,'°C','Equal c: (150×80 + 250×20)/400.',{dg:1,tol:0.01});
NUM('t03',3,'A 200 g copper block (c = 0.385 J/g·K) at 300 °C is dropped into 500 g of water at 20 °C. Final temperature (°C)? (no losses)',29.9,'°C','77(300 − T) = 2092(T − 20).',{tol:0.01});
MC('t03',2,'Water has an unusually high specific heat mainly because of:',['hydrogen bonding','low density','ionic bonds','metallic bonding'],0,'');
MC('t03',2,'Two objects of equal mass receive the same heat. The one with the LOWER specific heat will:',['warm more','warm less','not warm','melt'],0,'ΔT = Q/mc.',{dg:1});
NUM('t03',3,'2.0 mol of He (monatomic ideal gas) is heated at constant volume from 300 K to 400 K. Heat (J)?',2494,'J','n(3/2)RΔT.',{tol:0.02});
MC('t03',2,'For an ideal gas, C_p − C_v equals:',['0','R','γ','R/2'],1,'Mayer’s relation (1842).');
MC('t03',2,'The Dulong–Petit law says the molar heat capacity of many solids is about:',['3R ≈ 25 J/mol·K','R/2','10R','0'],0,'');
MC('t03',2,'For air (mostly diatomic) γ = C_p/C_v is about:',['1.0','1.33','1.40','1.67'],2,'');
NUM('t03',3,'100 g of an unknown metal at 100 °C is dropped into 200 g of water at 20 °C; final T = 24.0 °C. Specific heat of the metal (J/g·K)?',0.44,'J/g·K','c = 200×4.184×4/(100×76).',{tol:0.04});
NUM('t03',1,'Heat capacity (J/K) of 100 g of water?',418.4,'J/K','C = mc.',{tol:0.01});
MC('t03',2,'In calorimetry (ideal), the heat lost by the hot object equals:',['the heat gained by the cold object','zero','the final temperature','entropy'],0,'');

// t04 — phases & latent heat
NUM('t04',3,'Total heat (kJ) to convert 100 g of ice at −20 °C to steam at 120 °C? (c_ice 2.09, c_w 4.184, c_steam 2.01 J/g·K; L_f 334 J/g, L_v 2256 J/g)',309,'kJ','4.18 + 33.4 + 41.84 + 225.6 + 4.02 = 309.04 kJ.',{dg:1,tol:0.02});
NUM('t04',2,'Heat (J) to melt 50 g of ice at 0 °C? (L_f = 334 J/g)',16700,'J','');
NUM('t04',2,'Heat (J) to boil away 10 g of water at 100 °C? (L_v = 2256 J/g)',22560,'J','');
MC('t04',1,'During a phase change at constant pressure the temperature of a pure substance:',['rises','falls','stays constant','oscillates'],2,'Energy goes into bonds (latent heat).',{dg:1,f:1});
MC('t04',2,'Dry ice (solid CO₂) turning directly to gas at 1 atm is called:',['deposition','sublimation','condensation','melting'],1,'',{dg:1});
NUM('t04',3,'20 g of ice at 0 °C is added to 100 g of water at 70 °C (insulated). Final temperature (°C)?',45,'°C','100×4.184×(70 − T) = 20×334 + 20×4.184×T.',{tol:0.02});
MC('t04',2,'The latent heat of vaporization of water is ____ its latent heat of fusion.',['much larger than','much smaller than','about equal to','exactly equal to'],0,'2256 vs 334 kJ/kg.');
MC('t04',2,'A steam burn is worse than a boiling-water burn mainly because:',['steam condenses and releases latent heat','steam is hotter than 100 °C always','water absorbs UV','steam is dry'],0,'');
MC('t04',2,'A pressure cooker cooks faster because:',['higher pressure raises the boiling point','it lowers the boiling point','it removes oxygen','it adds heat'],0,'');
MC('t04',2,'At the triple point:',['only solid exists','solid, liquid and gas coexist in equilibrium','water boils and freezes','only gas exists'],1,'');
MC('t04',2,'The solid–liquid line in water’s P–T phase diagram has a negative slope, meaning:',['ice melts when pressure increases','ice is denser than water','water freezes at higher T under pressure','there is no triple point'],0,'');
NUM('t04',2,'Latent heat of fusion of water in cal/g (approx.)?',80,'cal/g','334/4.184 = 79.8.',{tol:0.02});
MC('t04',1,'Gas turning directly to a solid (frost) is called:',['sublimation','deposition','condensation','fusion'],1,'');

// t05 — conduction
NUM('t05',3,'Conduction loss (W) through foam (k = 0.035 W/m·K), area 0.028 m², thickness 2.0 cm, ΔT = 40 K?',1.96,'W','P = kAΔT/L.',{dg:1,tol:0.02});
MC('t05',2,'If the thickness of an insulating layer is doubled (all else same) the conduction rate:',['doubles','halves','quarters','is unchanged'],1,'P ∝ 1/L.',{dg:1});
NUM('t05',3,'A wall: 12 cm wood (k = 0.15) then 5 cm EPS (k = 0.035). Total R (m²K/W)?',2.23,'m²K/W','0.80 + 1.43.',{tol:0.02});
MC('t05',2,'Metal feels colder than wood at the same temperature because metal:',['is actually colder','conducts heat away from your hand faster','has lower specific heat','radiates more'],1,'',{dg:1});
MC('t05',2,'Which is the best thermal INSULATOR?',['copper','aerogel','steel','water'],1,'k ≈ 0.015 W/m·K.');
NUM('t05',2,'Convert R-19 (US units) to SI (m²K/W).',3.35,'m²K/W','19/5.678.',{tol:0.02});
MC('t05',2,'Most insulating materials work mainly by:',['reflecting all light','trapping still air','absorbing water','storing heat'],1,'');
MC('t05',2,'A metal screw passing through foam insulation acts as a:',['radiation shield','thermal bridge','vapor barrier','heat sink only'],1,'');
MC('t05',2,'Fourier’s law of heat conduction was published in:',['1701','1822','1859','1900'],1,'');
MC('t05',2,'Heat transfer by conduction is impossible in:',['water','a vacuum','wood','air'],1,'No medium.');
MC('t05',2,'For layers in series, the total thermal resistance is:',['the sum of the R values','the largest R only','the reciprocal sum','the product'],0,'');
MC('t05',3,'Compressing fiberglass or foam insulation:',['improves its R-value','lowers its R-value by reducing trapped air','has no effect','turns it into a conductor'],1,'');

// t06 — convection & radiation
NUM('t06',3,'Net radiative heat loss (W) from a black (ε = 0.95) cylinder, A = 0.020 m², at 350 K in 295 K surroundings? (σ = 5.67×10⁻⁸)',8.0,'W','εσA(T⁴ − T_env⁴).',{tol:0.04});
MC('t06',2,'Which heat-transfer mode needs NO medium?',['conduction','convection','radiation','evaporation'],2,'',{dg:1});
MC('t06',2,'Aluminum foil inside an insulated device reduces heat loss mainly by decreasing:',['conduction','radiation (low emissivity)','condensation','latent heat'],1,'');
MC('t06',2,'If the absolute temperature of a blackbody doubles, its radiated power increases by a factor of:',['2','4','8','16'],3,'P ∝ T⁴.',{dg:1,f:1});
NUM('t06',3,'Temperature drop (K) of 100 g of water when 1.0 g evaporates (L ≈ 2.3 kJ/g)?',5.5,'K','2300/418.4.',{tol:0.06});
MC('t06',2,'Natural convection in a fluid is caused by:',['density differences due to temperature','a fan','electric fields','magnetic fields'],0,'');
MC('t06',2,'Kirchhoff’s law of radiation says a good absorber is a:',['poor emitter','good emitter','non-radiator','neutral'],1,'',{dg:1});
MC('t06',2,'Why are thermos (Dewar) flasks silvered and evacuated?',['to reduce radiation and conduction/convection','to store cold only','to make them light','for looks'],0,'');
MC('t06',2,'To suppress convection in an air gap between insulating walls, the gap should generally be:',['very wide (5–10 cm)','thin (≈ 1 cm or less)','empty of any material, wide','connected to outside'],1,'');
NUM('t06',2,'Radiant exitance (W/m²) of a blackbody at 300 K?',459,'W/m²','σT⁴.',{tol:0.02});
MC('t06',2,'Covering a cup of hot water with a lid mainly reduces:',['evaporation and convection','radiation only','conduction only','nothing'],0,'');
MC('t06',2,'Wind chill is mainly due to increased:',['forced convection','radiation','conduction through clothing only','latent heat of ice'],0,'');

// t07 — radiant exitance
NUM('t07',2,'Peak emission wavelength (nm) of the Sun (T = 5772 K)? (b = 2.898×10⁻³ m·K)',502,'nm','λ = b/T.',{dg:1,tol:0.02});
NUM('t07',2,'By what factor does radiant exitance increase when T goes from 300 K to 600 K?',16,'×','2⁴.',{dg:1,f:1});
NUM('t07',3,'Earth’s equilibrium temperature with S = 1361 W/m² and albedo 0.30 (K)?',255,'K','[S(1−a)/4σ]^¼.',{tol:0.02});
MC('t07',2,'Radiant exitance is:',['power per unit area leaving a surface','power per unit area incident on a surface','power per steradian','total power'],0,'',{dg:1});
MC('t07',2,'Irradiance is:',['power per unit area leaving a surface','power per unit area incident on a surface','power per solid angle','energy per photon'],1,'');
MC('t07',2,'Planck’s law (1900) introduced the idea that:',['energy is exchanged in discrete quanta E = hf','heat is a fluid','entropy is zero','gases are real'],0,'');
NUM('t07',3,'A surface emits peak radiation at 10 μm. Its temperature (K)?',290,'K','T = b/λ.',{tol:0.02});
MC('t07',2,'As a blackbody gets hotter its peak wavelength:',['moves to shorter wavelengths','moves to longer wavelengths','stays the same','disappears'],0,'Wien displacement.');
MC('t07',2,'The Stefan–Boltzmann law was found empirically by Stefan in:',['1679','1879','1979','1779'],1,'Boltzmann derived it in 1884.');
MC('t07',2,'The “ultraviolet catastrophe” refers to:',['the classical prediction of infinite short-wavelength blackbody radiation','UV damage','a star explosion','ozone loss'],0,'');
NUM('t07',2,'Radiant exitance (kW/m²) of a blackbody at 1000 K?',56.7,'kW/m²','σT⁴.',{tol:0.02});

// t08 — Newton cooling
NUM('t08',3,'T₀ = 75.0 °C, T_r = 22.0 °C, K = 0.0120 min⁻¹, t = 25 min. Predicted T_f (°C)?',61.3,'°C','22 + 53e^(−0.3).',{dg:1,tol:0.01});
NUM('t08',3,'T₀ = 70.0, T_f = 58.0 after 20 min, T_r = 21.0. K (min⁻¹)?',0.01405,'min⁻¹','K = (1/20)ln(49/37).',{dg:1,tol:0.03});
NUM('t08',3,'T₀ = 80, T_r = 20, K = 0.02 min⁻¹. Time (min) to reach 50 °C?',34.7,'min','t = ln(60/30)/0.02.',{tol:0.02});
MC('t08',2,'A plot of ln(T − T_room) versus time for Newton cooling is:',['a straight line with slope −K','a parabola','an exponential rise','a constant'],0,'',{dg:1});
MC('t08',2,'The time constant of the cooling is:',['K','1/K','K²','ln K'],1,'');
MC('t08',2,'After 3 time constants the excess temperature (T − T_r) is about ____ of its initial value:',['37 %','14 %','5 %','1 %'],2,'e⁻³ = 0.0498.');
MC('t08',2,'If the insulation conductance G is halved (C fixed), then K:',['doubles','halves','is unchanged','quadruples'],1,'K = G/C.',{f:1});
MC('t08',2,'Compared with a device with small K, a device with larger K will have a ____ final temperature:',['higher','lower','the same','undefined'],1,'');
NUM('t08',3,'Half-life (min) of the temperature excess for K = 0.02 min⁻¹?',34.7,'min','ln2/K.',{tol:0.02});
MC('t08',2,'Newton’s law of cooling was first published by Newton in:',['1701','1801','1601','1901'],0,'');
NUM('t08',3,'K = 0.01405 min⁻¹, T_r = 21.0. A 20-min run starts at 80.0 °C. Predicted T_f (°C)?',65.6,'°C','21 + 59e^(−0.281).',{tol:0.01});
MC('t08',3,'Newton’s law (linear in ΔT) becomes least accurate when:',['ΔT is small','ΔT is large (radiation ∝ T⁴, evaporation)','the room is cold','K is tiny'],1,'');

// t09 — laws
MC('t09',2,'Which law defines temperature through thermal equilibrium?',['zeroth','first','second','third'],0,'',{dg:1});
NUM('t09',2,'A gas absorbs 500 J of heat and does 200 J of work on the surroundings. ΔU (J)?',300,'J','ΔU = Q − W.',{dg:1});
MC('t09',2,'“Heat cannot spontaneously flow from a colder to a hotter body” is the ____ statement of the second law.',['Clausius','Kelvin–Planck','Carnot','Boltzmann'],0,'',{dg:1});
MC('t09',2,'The Kelvin–Planck statement says:',['no cyclic engine can convert all heat to work','heat flows uphill with work','entropy is zero','energy is created'],0,'');
MC('t09',2,'The third law implies that:',['absolute zero cannot be reached in a finite number of steps','entropy is infinite at 0 K','heat is conserved','pressure is zero'],0,'');
NUM('t09',2,'A gas is compressed with 150 J of work done ON it while it releases 100 J of heat. ΔU (J)?',50,'J','ΔU = Q − W = −100 − (−150).');
MC('t09',2,'A perpetual-motion machine of the second kind violates:',['first law','second law','third law','zeroth law'],1,'');
MC('t09',2,'Who named the “zeroth law” (c. 1931)?',['Fowler','Kelvin','Clausius','Carnot'],0,'');
TF('t09',2,'In chemistry’s sign convention ΔU = Q + W, where W is work done on the system.',true,'Check the sign convention in each problem.');
MC('t09',2,'The entropy of an isolated system:',['always decreases','never decreases','is constant always','equals temperature'],1,'');

// t10 — systems & processes
MC('t10',1,'Work done by a gas in an isochoric (constant volume) process is:',['zero','PΔV','nRT ln(V₂/V₁)','ΔU'],0,'',{dg:1});
NUM('t10',3,'1.00 mol ideal gas at 300 K expands isothermally from 10 L to 20 L. Work done by the gas (J)? (R = 8.314)',1729,'J','nRT ln2.',{dg:1,tol:0.02});
NUM('t10',2,'2.0 mol of an ideal gas heated from 300 K to 400 K at constant pressure. Work by the gas (J)?',1663,'J','nRΔT.',{tol:0.02});
NUM('t10',3,'Air (γ = 1.4) at 300 K is adiabatically compressed to 1/10 of its volume. Final temperature (K)?',753,'K','300×10^0.4.',{tol:0.02});
MC('t10',2,'For one complete thermodynamic cycle, the change in internal energy is:',['positive','negative','zero','equal to Q_in'],2,'State function.');
MC('t10',2,'On a P–V diagram, an adiabat compared with an isotherm through the same point is:',['steeper','less steep','identical','horizontal'],0,'');
MC('t10',2,'On a P–V diagram a clockwise cycle represents:',['a heat engine (net work out)','a refrigerator','isothermal process','isochoric process'],0,'');
MC('t10',2,'Which are path functions (depend on the process)?',['heat and work','U and H','S and G','P and V'],0,'');
MC('t10',2,'An open system exchanges:',['nothing','energy only','matter and energy','matter only'],2,'');
MC('t10',2,'For an ideal gas in an isothermal process, ΔU is:',['positive','negative','zero','infinite'],2,'');
MC('t10',2,'A gas expands into a vacuum (free expansion). For an ideal gas:',['Q = W = 0 and ΔU = 0','W > 0','Q > 0','T rises'],0,'');
NUM('t10',2,'A rectangular cycle: P from 1×10⁵ Pa to 3×10⁵ Pa, V from 2×10⁻³ m³ to 4×10⁻³ m³. Net work per cycle (J)?',400,'J','ΔP×ΔV.');
