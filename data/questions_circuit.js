/* ===== CIRCUIT LAB QUESTION BANK — c01–c13 ===== */
/* MC(lesson, difficulty1-4, question, choices, answerIndex, explanation, {f:tryoutFilter, dg:diagnostic}) */

// c01 — charge, Coulomb
MC('c01',1,'Two objects carry charges of the same sign. The force between them is:',['attractive','repulsive','zero','perpendicular to the line joining them'],1,'Like charges repel, unlike charges attract.',{dg:1});
NUM('c01',2,'Two point charges, +3.0 μC and −5.0 μC, are 0.30 m apart. What is the magnitude of the electrostatic force between them (N)? (k = 8.99×10⁹ N·m²/C²)',1.5,'N','F = kq₁q₂/r² = 8.99×10⁹×3×10⁻⁶×5×10⁻⁶/0.09 = 1.50 N (attractive).',{dg:1,tol:0.03});
MC('c01',2,'The distance between two point charges is doubled. The force between them becomes:',['½ as large','¼ as large','2× as large','4× as large'],1,'Inverse-square law: F ∝ 1/r².',{dg:1});
MC('c01',3,'Both charges are doubled AND the distance is halved. The force changes by a factor of:',['4','8','16','2'],2,'×2×2 from charges = ×4; halving r gives ×4 → ×16 total.',{f:1});
MC('c01',2,'A negatively charged rod is brought near (not touching) a neutral metal sphere; the far side is briefly grounded, then the ground and rod are removed. The sphere is now:',['neutral','negative','positive','it depends on humidity only'],2,'Charging by induction leaves the sphere with charge opposite to the rod.',{f:1});
TF('c01',1,'In a metal wire, electrons move from the positive terminal toward the negative terminal of a battery.',false,'Electrons are negative: they drift from − to + (conventional current is the opposite direction).');
MC('c01',2,'The SI unit of electric charge is the:',['ampere','coulomb','volt','farad'],1,'Coulomb (C). Ampere is coulomb per second.');
NUM('c01',3,'How much charge (C) is carried by 1.0×10¹⁸ electrons? (e = 1.602×10⁻¹⁹ C)',0.160,'C','Q = 10¹⁸ × 1.602×10⁻¹⁹ = 0.160 C (magnitude).',{tol:0.02});
NUM('c01',3,'Electric field (N/C) at 0.50 m from a point charge of 2.0 μC?',71900,'N/C','E = kQ/r² = 8.99×10⁹×2×10⁻⁶/0.25 = 7.19×10⁴ N/C.',{tol:0.03});
NUM('c01',2,'A uniform electric field exists between two plates 2.0 mm apart with a 120 V potential difference. The field strength (V/m) is:',60000,'V/m','E = V/d = 120/0.002 = 6.0×10⁴ V/m.');
MC('c01',2,'Inside a closed hollow conductor (a Faraday cage) in an external static field, the electric field is:',['equal to the external field','twice the external field','zero','reversed'],2,'Charges rearrange to cancel the field in the conductor’s interior.');
MC('c01',2,'Static electricity is most dangerous when:',['humidity is high','sparks occur near flammable vapors or dust','objects are grounded','wearing cotton clothes'],1,'A spark can ignite fuel vapors, grain dust, or oxygen-enriched atmospheres; ESD can also destroy ICs.',{dg:1});
MC('c01',3,'A gold-leaf electroscope is touched by a positively charged glass rod (contact). The leaves spread apart because:',['leaves become oppositely charged','both leaves acquire the same (positive) charge and repel','the rod magnetizes them','gravity is reduced'],1,'Charging by contact gives the same sign on both leaves → repulsion.');
MC('c01',1,'Which scientist’s name is attached to the inverse-square law for electric force?',['Volta','Coulomb','Ohm','Faraday'],1,'Charles-Augustin de Coulomb, 1785 (torsion balance).');
MC('c01',2,'Human-perceivable electrostatic shocks need about 3000 V. Which statement about ICs is correct?',['they are immune below 3000 V','they can be damaged by ESD well below 100 V','only conductors are damaged','ESD only matters in winter'],1,'That’s why anti-static straps and mats are used when handling MOS devices.');

// c02 — capacitors
NUM('c02',2,'Capacitors of 10 μF and 15 μF are connected in series. Equivalent capacitance (μF)?',6,'μF','C = (10×15)/(10+15) = 6.0 μF.',{dg:1});
NUM('c02',1,'Capacitors of 10 μF and 15 μF are connected in parallel. Equivalent capacitance (μF)?',25,'μF','Parallel capacitances add.');
NUM('c02',2,'Energy stored (mJ) in a 100 μF capacitor charged to 12 V?',7.2,'mJ','U = ½CV² = 0.5×100×10⁻⁶×144 = 7.2×10⁻³ J.',{dg:1});
NUM('c02',2,'Time constant (s) of an RC circuit with R = 10 kΩ and C = 47 μF?',0.47,'s','τ = RC = 10⁴×47×10⁻⁶ = 0.47 s.',{dg:1});
MC('c02',2,'An initially uncharged capacitor charges through a resistor. After one time constant it has reached about:',['37 %','50 %','63 %','86 %'],2,'1 − e⁻¹ = 0.632.',{dg:1,f:1});
NUM('c02',3,'A 5.0 V source charges a 1000 μF capacitor through 1.0 kΩ. The voltage (V) across the capacitor after 1.0 s is:',3.16,'V','τ = 1 s; v = 5(1 − e⁻¹) = 3.16 V.',{tol:0.02});
NUM('c02',3,'R = 2.0 MΩ and C = 1.0 μF (charging from a DC source). How long (s) for the capacitor to charge to 50 % of the supply?',1.39,'s','t = τ ln 2 = 2 s × 0.693 = 1.39 s.',{tol:0.03,f:1});
MC('c02',2,'In DC steady state (fully charged) a capacitor behaves like:',['a short circuit','an open circuit','a 0.7 V source','a resistor of R = 1/ωC'],1,'No DC current flows through a fully charged capacitor.');
MC('c02',2,'At the instant a switch connects an uncharged capacitor to a source (t = 0⁺) the capacitor behaves like:',['an open circuit','a short circuit','a resistor','an inductor'],1,'Voltage across it is zero, so it initially acts as a short.');
MC('c02',2,'A polarized electrolytic capacitor is marked with a stripe on one side. The stripe indicates the:',['positive lead','negative lead','ground screw','voltage rating'],1,'The stripe marks the negative terminal.',{dg:1});
NUM('c02',2,'A ceramic capacitor is marked “104”. Its capacitance in nF is:',100,'nF','10 × 10⁴ pF = 100 000 pF = 100 nF = 0.1 μF.');
MC('c02',2,'The plate separation of a parallel-plate capacitor is doubled (all else equal). Its capacitance:',['doubles','halves','is unchanged','quadruples'],1,'C = ε A/d.');
MC('c02',3,'Two capacitors in series across a voltage source: the smaller-capacitance capacitor has:',['the smaller voltage','the larger voltage','the same voltage','no voltage'],1,'Same charge Q; V = Q/C is larger for the smaller C.');
TF('c02',2,'The voltage across a capacitor can change instantaneously.',false,'That would require infinite current; voltage changes continuously.');
MC('c02',2,'Which action increases a capacitor’s capacitance?',['decreasing plate area','inserting a dielectric between the plates','increasing plate separation','using a thinner conductor'],1,'Dielectric raises ε_r so C increases.');

// c03 — Ohm's law and power
NUM('c03',1,'A 48 Ω resistor carries 0.25 A. What is the voltage across it (V)?',12,'V','V = IR = 0.25×48 = 12 V.',{dg:1});
NUM('c03',1,'A 120 V appliance draws 0.5 A. Power (W)?',60,'W','P = VI.');
NUM('c03',2,'Resistance (Ω) of a 60 W, 120 V bulb at operating temperature?',240,'Ω','R = V²/P = 14400/60 = 240 Ω.',{dg:1});
NUM('c03',2,'A 1500 W heater runs 4 h. Energy costs $0.12/kWh. Cost ($)?',0.72,'$','6 kWh × 0.12 = $0.72.');
MC('c03',2,'The voltage across a fixed resistor is doubled. The power dissipated becomes:',['2×','4×','½','unchanged'],1,'P = V²/R.',{dg:1,f:1});
MC('c03',3,'Resistor A has twice the length and twice the diameter of resistor B (same material). R_A/R_B =',['½','1','2','4'],0,'R ∝ L/A: ×2 (length) ÷4 (area) = ½.',{f:1});
MC('c03',1,'Which of these is an SI BASE unit?',['volt','ohm','ampere','watt'],2,'The ampere is one of the seven base units.');
NUM('c03',1,'Convert 4700 μF to farads (F).',0.0047,'F','4700×10⁻⁶ = 4.7×10⁻³ F.',{tol:0.01});
MC('c03',1,'The prefix “micro” (μ) means:',['10⁻³','10⁻⁶','10⁻⁹','10⁶'],1,'μ = 10⁻⁶.');
MC('c03',2,'Which common metal is the best electrical conductor (lowest resistivity) at room temperature?',['copper','gold','silver','aluminum'],2,'Silver (1.59×10⁻⁸ Ω·m), then copper.');
MC('c03',2,'As temperature increases, the resistance of a typical metal conductor:',['decreases','increases','stays constant','becomes zero'],1,'Positive temperature coefficient: more lattice scattering.');
NUM('c03',2,'A 10 Ω resistor carries 0.30 A. Power dissipated (W)?',0.9,'W','P = I²R = 0.09×10 = 0.9 W.');
NUM('c03',2,'Charge (C) that passes a point when a 2.0 A current flows for 30 s?',60,'C','Q = It.');
MC('c03',2,'The kilowatt-hour is a unit of:',['power','energy','current','force'],1,'1 kWh = 3.6×10⁶ J.');
TF('c03',2,'Ohm’s law (V = IR with constant R) accurately describes an LED’s behavior.',false,'LEDs are non-ohmic: current rises exponentially above V_f.');
MC('c03',3,'A measured answer of 2.50 V × 3.2 A should be reported (for power) with how many significant figures?',['1','2','3','4'],1,'Keep the fewest sig figs among inputs (3.2 → 2): 8.0 W.');

// c04 — color code
NUM('c04',2,'Resistor bands: yellow – violet – red – gold. Resistance (Ω)?',4700,'Ω','47 × 10² = 4.7 kΩ ±5 %.',{dg:1,tol:0.01});
NUM('c04',2,'Five-band resistor: brown – black – black – red – brown. Resistance (Ω)?',10000,'Ω','100 × 100 = 10 kΩ ±1 %.',{tol:0.01});
MC('c04',1,'The gold tolerance band means:',['±1 %','±2 %','±5 %','±10 %'],2,'Gold = ±5 %, silver = ±10 %.',{dg:1});
NUM('c04',2,'Orange – orange – gold – silver. Resistance (Ω)?',3.3,'Ω','33 × 0.1 = 3.3 Ω ±10 %.',{tol:0.01});
NUM('c04',1,'Red – red – brown – gold. Resistance (Ω)?',220,'Ω','22 × 10.',{tol:0.01});
NUM('c04',2,'Green – blue – orange – gold. Resistance (Ω)?',56000,'Ω','56 × 10³.',{tol:0.01});
MC('c04',2,'An SMD resistor is marked “103”. Its value is:',['103 Ω','10 kΩ','1 kΩ','100 kΩ'],1,'10 × 10³ = 10 kΩ.');
MC('c04',2,'A 4.7 kΩ ±5 % resistor is measured at 4.55 kΩ. Is it within tolerance?',['yes (limits 4.465–4.935 kΩ)','no, too low','no, too high','cannot tell'],0,'4700×0.95 = 4465 Ω.',{f:1});
NUM('c04',2,'A capacitor is marked “473”. Capacitance in nF?',47,'nF','47 × 10³ pF = 47 nF.');
MC('c04',1,'On a standard LED the LONGER lead is the:',['cathode','anode','ground','gate'],1,'Long leg = anode (+).');
MC('c04',2,'Which E-series has 24 values per decade and ±5 % tolerance?',['E6','E12','E24','E96'],2,'E24 ↔ 5 %, E12 ↔ 10 %, E96 ↔ 1 %.');
MC('c04',2,'A resistor with NO tolerance band has a tolerance of:',['±1 %','±5 %','±10 %','±20 %'],3,'No 4th band → ±20 %.');

// c05 — series parallel
NUM('c05',2,'Equivalent resistance (Ω) of 10 Ω, 15 Ω and 30 Ω in parallel?',5,'Ω','1/R = 0.1 + 0.0667 + 0.0333 = 0.2.',{dg:1});
NUM('c05',2,'Equivalent resistance (Ω) of 6 Ω in series with (12 Ω ∥ 4 Ω)?',9,'Ω','12∥4 = 3; 6 + 3 = 9 Ω.',{dg:1});
NUM('c05',2,'A 12 V source feeds 2 kΩ in series with 4 kΩ. Voltage across the 4 kΩ (V)?',8,'V','Divider: 12×4/6 = 8 V.',{dg:1});
NUM('c05',2,'A 6 A current enters a parallel pair of 2 Ω and 4 Ω. Current through the 2 Ω (A)?',4,'A','I₁ = 6×4/(2+4) = 4 A.');
MC('c05',1,'Two bulbs are wired in series. One bulb is unscrewed. The other bulb:',['gets brighter','goes out','stays the same','blinks'],1,'Open circuit interrupts the only path.');
MC('c05',2,'Adding a third identical bulb in series to two bulbs in series across a fixed battery makes each bulb:',['brighter','dimmer','the same','burn out'],1,'R_total ↑ ⇒ I ↓ ⇒ P = I²R ↓.',{f:1});
NUM('c05',1,'Four 100 Ω resistors in parallel. Equivalent resistance (Ω)?',25,'Ω','R/N.');
NUM('c05',2,'1 kΩ in series with (2 kΩ ∥ 2 kΩ). Total (kΩ)?',2,'kΩ','1 + 1 = 2 kΩ.');
MC('c05',1,'The equivalent resistance of resistors in parallel is always:',['greater than the largest','equal to their sum','less than the smallest','equal to the average'],2,'Adding paths lowers total resistance.');
NUM('c05',1,'9 V is applied across 100 Ω, 200 Ω and 300 Ω in series. Current (mA)?',15,'mA','I = 9/600 = 0.015 A.');
MC('c05',3,'A voltage divider’s output, when a load resistor is connected across the output, will:',['increase','decrease','not change','reverse'],1,'Load in parallel with R₂ lowers R₂’s effective value.',{f:1});
MC('c05',2,'Household outlets are wired in parallel so that:',['each appliance gets full line voltage and works independently','the current is the same in each','the power is shared equally','fuses are unnecessary'],0,'Parallel branches share the same voltage.');

// c06 — batteries
NUM('c06',2,'A 9.0 V battery with 2.0 Ω internal resistance drives a 16 Ω load. Terminal voltage (V)?',8,'V','I = 9/18 = 0.5 A; V = 9 − 0.5×2 = 8 V.',{dg:1});
NUM('c06',1,'Four 1.5 V cells connected in series give (V):',6,'V','Series voltages add.');
MC('c06',2,'Identical cells in PARALLEL produce:',['more voltage, same capacity','same voltage, more capacity','more voltage and capacity','less internal resistance and less capacity'],1,'Parallel: V same, capacity adds, r drops.',{dg:1});
NUM('c06',2,'Energy (Wh) in a 2000 mAh, 3.7 V Li-ion cell?',7.4,'Wh','2 Ah × 3.7 V.');
NUM('c06',2,'A 2000 mAh battery powers a 250 mA load. Ideal runtime (h)?',8,'h','t = 2 Ah/0.25 A.');
MC('c06',3,'Maximum power is delivered to a load when its resistance equals:',['zero','twice the source resistance','the source’s internal resistance','infinity'],2,'Matched load: R_L = r_int (efficiency 50 %).');
MC('c06',2,'Who invented the first chemical battery (the voltaic pile) in 1800?',['Galvani','Volta','Faraday','Ohm'],1,'Alessandro Volta.',{dg:1});
NUM('c06',2,'A 1.5 V cell with 0.30 Ω internal resistance is shorted. Short-circuit current (A)?',5,'A','I = ε/r.');
MC('c06',1,'The symbol “⎓” printed on a power adapter means:',['alternating current','direct current','ground','fuse'],1,'DC (straight line above dashed line). “~” is AC.');
NUM('c06',2,'A USB charger outputs 5 V at 2 A. Output power (W)?',10,'W','P = VI.');
NUM('c06',3,'Time (h) to charge an 11.1 Wh battery from a 10 W output at 85 % efficiency?',1.31,'h','11.1/(10×0.85) = 1.31 h.',{tol:0.03});
MC('c06',2,'Nominal voltage of a lithium-ion cell is about:',['1.2 V','1.5 V','3.6–3.7 V','9 V'],2,'4.2 V full, ~3.0 V empty.');

// c07 — KVL KCL
NUM('c07',1,'At a node, 3 A and 2 A flow in; 4 A flows out one branch. Current in the remaining branch (A, out)?',1,'A','KCL: in = out → 5 = 4 + x.',{dg:1});
NUM('c07',2,'A 12 V source drives three series resistors. Two drops are 4 V and 5 V. The third drop (V)?',3,'V','KVL: sum of drops = 12.',{dg:1});
NUM('c07',3,'Three branches meet at a node: source 12 V + 4 Ω, 6 Ω to ground, source 6 V + 3 Ω (all other ends at the source −/ground). Node voltage (V)?',6.67,'V','(12−V)/4 + (6−V)/3 = V/6 → V = 6.67 V.',{tol:0.02});
MC('c07',2,'In superposition, when analyzing the effect of ONE voltage source alone, other independent voltage sources are replaced by:',['open circuits','short circuits','resistors','current sources'],1,'Zero-volt source = wire.',{dg:1});
MC('c07',2,'In superposition, unused independent CURRENT sources are replaced by:',['short circuits','open circuits','wires','batteries'],1,'Zero-current source = open.');
TF('c07',3,'Superposition can be applied directly to power (P = I²R).',false,'Power is non-linear; superpose currents or voltages, then compute power.',{f:1});
NUM('c07',2,'A 10 V battery and a 4 V battery opposing (series-opposing) drive 6 Ω. Current (A)?',1,'A','(10 − 4)/6.');
MC('c07',2,'For a circuit with N nodes, how many independent KCL equations can be written?',['N','N − 1','N + 1','2N'],1,'One node equation is redundant.');
MC('c07',2,'Kirchhoff’s voltage law expresses conservation of:',['charge','energy','momentum','mass'],1,'KCL: charge; KVL: energy.');
MC('c07',2,'Kirchhoff published his circuit laws in:',['1785','1827','1845','1888'],2,'Gustav Kirchhoff, 1845, as a 21-year-old student.');

// c08 — Thevenin etc.
NUM('c08',3,'18 V source in series with 6 Ω, then 3 Ω to ground. Thevenin voltage seen across the 3 Ω (V)?',6,'V','18×3/9.',{dg:1});
NUM('c08',3,'Same circuit: Thevenin resistance (Ω)?',2,'Ω','6∥3 = 2 Ω (source shorted).',{dg:1});
NUM('c08',3,'Maximum power (W) that circuit (V_th = 6 V, R_th = 2 Ω) can deliver to a load?',4.5,'W','V²/(4R) = 36/8.');
NUM('c08',3,'Wheatstone bridge balanced with R₁ = 100 Ω, R₂ = 200 Ω, R₃ = 150 Ω (R₁/R₂ = R₃/R_x). R_x (Ω)?',300,'Ω','R_x = R₂R₃/R₁.');
NUM('c08',3,'A delta network of three 30 Ω resistors is converted to a Y. Each Y leg (Ω)?',10,'Ω','R_Y = R_Δ/3.');
MC('c08',2,'A Wheatstone bridge is balanced when:',['the detector current is zero','the battery is disconnected','all resistors are equal','R_x is shorted'],0,'Null condition: no current through the detector.',{dg:1});
NUM('c08',3,'A Norton equivalent has I_N = 3 A and R_N = 4 Ω. The Thevenin voltage (V)?',12,'V','V = I_N R_N.');
MC('c08',3,'When finding R_th of a network containing a dependent source, you should:',['turn the dependent source off','keep it on and use a test source','replace it by a short','replace it by an open'],1,'Dependent sources stay active.');
MC('c08',2,'Who is credited with inventing the Wheatstone bridge?',['Charles Wheatstone','Samuel Hunter Christie','Lord Kelvin','Werner Siemens'],1,'Christie (1833); Wheatstone popularised it (1843).');
MC('c08',2,'At maximum power transfer, the efficiency of the source–load system is:',['100 %','75 %','50 %','25 %'],2,'Half the power is lost in R_th.');

// c09 — DC characteristics & hazards
MC('c09',2,'The “let-go” threshold current for typical adults (AC) is about:',['0.1 mA','10 mA','1 A','10 A'],1,'~10 mA (muscle tetany).',{dg:1});
NUM('c09',2,'Current (mA) through wet skin resistance of 1 kΩ at 120 V?',120,'mA','I = V/R = 0.12 A = 120 mA — potentially lethal.');
MC('c09',2,'Who championed DC power distribution in the 1880s “War of the Currents”?',['Tesla','Westinghouse','Edison','Faraday'],2,'Edison (DC); Tesla/Westinghouse (AC).');
MC('c09',2,'Which of these is a DC source?',['alternator','transformer','photovoltaic cell','wall outlet'],2,'Solar cells, batteries, fuel cells, dynamos (with commutator).');
MC('c09',2,'Most serious electrical injury is determined primarily by:',['voltage alone','current through the body (and its path)','wire color','the time of day'],1,'Voltage drives current through body resistance; heart path is worst.');
MC('c09',2,'A fully charged camera-flash capacitor is left unplugged. The hazard is:',['none','stored charge can still shock','explosive gas','magnetic field'],1,'Capacitors retain charge.');
TF('c09',2,'DC is safe at any voltage because it does not alternate.',false,'High-voltage DC can be lethal.');
MC('c09',3,'A metal wrench dropped across a 12 V car battery becomes very hot because:',['12 V is lethal','very low resistance draws hundreds of amps (I²R)','the battery is AC','the wrench is magnetic'],1,'Short circuit: I = V/R with tiny R.');

// c10 — AC
NUM('c10',2,'Peak voltage (V) of a 120 V rms sine wave?',170,'V','120×1.414 = 169.7 V.',{dg:1,tol:0.02});
NUM('c10',2,'A sine wave has a peak of 311 V. The rms value (V)?',220,'V','311/√2.',{f:1,tol:0.02});
NUM('c10',1,'The period (ms) of 50 Hz AC?',20,'ms','T = 1/f.',{dg:1});
MC('c10',1,'US mains frequency is:',['50 Hz','60 Hz','100 Hz','120 Hz'],1,'US: 120 V, 60 Hz; much of world: 230 V, 50 Hz.');
MC('c10',2,'On a standard US 120 V outlet the wider slot is:',['hot','neutral','ground','switched'],1,'Narrow = hot, wide = neutral, round = ground.');
NUM('c10',2,'A 1500 W heater on a 120 V circuit draws (A):',12.5,'A','I = P/V.');
MC('c10',2,'In US household wiring the bare copper or green wire is the:',['hot','neutral','safety ground','return'],2,'Equipment-grounding conductor.');
NUM('c10',2,'Peak-to-peak voltage (V) of 120 V rms?',339,'V','2×169.7.',{tol:0.02});
MC('c10',2,'Which topic is EXCLUDED from the Circuit Lab rules?',['AC characteristics & hazards','AC circuit theory and frequency analysis','household AC components','sources/uses of AC'],1,'Excluded: AC circuit theory, frequency analysis, inductance, 3-phase, scopes, etc.');
MC('c10',2,'Split-phase 240 V is obtained from:',['one 240 V hot and a neutral','two 120 V hot legs 180° apart','a step-up transformer at the outlet','a DC inverter'],1,'Two hots (180° apart) give 240 V between them.');
TF('c10',2,'A wall switch should break the hot conductor, not the neutral.',true,'So the fixture is de-energized when off.');
MC('c10',2,'Which inventor is associated with the polyphase AC induction motor?',['Edison','Tesla','Volta','Henry'],1,'Nikola Tesla (1887–88).');
MC('c10',2,'An AC voltmeter normally displays:',['peak value','peak-to-peak','rms value','average value'],2,'DMMs on V~ show rms (for sine waves).');

// c11 — magnetism
MC('c11',1,'If a bar magnet is cut in half, you get:',['one N-pole piece and one S-pole piece','two smaller complete magnets','two unmagnetized pieces','a monopole'],1,'No isolated poles.',{dg:1});
MC('c11',2,'The pole near Earth’s geographic North Pole is, magnetically, a:',['north pole','south pole','neutral region','monopole'],1,'A compass N end points to it, so it is a magnetic south pole.');
NUM('c11',2,'A 0.20 m wire carries 5.0 A perpendicular to a 0.30 T field. Force (N)?',0.30,'N','F = BIL = 0.3×5×0.2.',{dg:1});
MC('c11',2,'Two long parallel wires carry current in the same direction. They:',['attract','repel','do not interact','rotate'],0,'Ampère: parallel currents attract.');
MC('c11',2,'Right-hand rule for a straight wire: thumb points along the current; fingers curl in the direction of:',['the force','the magnetic field','the electron flow','the voltage'],1,'');
MC('c11',2,'Who first observed that a current deflects a compass needle (1820)?',['Ørsted','Ampère','Faraday','Henry'],0,'Hans Christian Ørsted.',{dg:1});
MC('c11',1,'Which metal is ferromagnetic?',['copper','aluminum','iron','gold'],2,'Fe, Ni, Co (+ Gd).');
NUM('c11',3,'Magnetic field (μT) at 5.0 cm from a long straight wire carrying 10 A? (μ₀ = 4π×10⁻⁷)',40,'μT','B = μ₀I/2πr = 2×10⁻⁷×10/0.05 = 4×10⁻⁵ T.',{tol:0.03});
MC('c11',2,'The magnetic flux through a loop whose plane is parallel to the field lines is:',['maximum','half maximum','zero','infinite'],2,'Φ = BA cosθ with θ = 90°.');
MC('c11',3,'The magnetic force on a moving charge:',['does positive work','does no work','accelerates it along v','is always zero'],1,'F ⟂ v so work = 0 (changes direction only).');
MC('c11',2,'The SI unit of magnetic flux density is the:',['weber','tesla','henry','gauss'],1,'T = Wb/m².');
NUM('c11',3,'Field inside a long air-core solenoid with 2000 turns/m carrying 1.5 A (mT)? (μ₀ = 4π×10⁻⁷)',3.77,'mT','B = μ₀ n I.',{tol:0.03});

// c12 — electromagnets
MC('c12',1,'Which change makes an electromagnet STRONGER?',['fewer turns','more current','plastic core','thinner battery'],1,'More turns, more current, soft-iron core.',{dg:1});
MC('c12',2,'Reversing the battery connections on an electromagnet:',['turns it off','swaps its poles','doubles its strength','changes nothing'],1,'B reverses with I.');
MC('c12',2,'A soft-iron core loses most of its magnetism when the current is switched off because:',['iron has low retentivity','the battery drains','the coil unwinds','iron becomes diamagnetic'],0,'Soft iron: low coercivity/retentivity.');
MC('c12',2,'Who built the first electromagnet (1824)?',['Sturgeon','Henry','Faraday','Edison'],0,'William Sturgeon.');
MC('c12',2,'Replacing the iron bolt by a plastic rod in the same coil will:',['greatly weaken the field','strengthen the field','not change it','reverse it'],0,'Core multiplies the field by μ_r.');
TF('c12',2,'An air gap between the electromagnet’s core and the load reduces its pulling force.',true,'Air gaps are high-reluctance.');
MC('c12',3,'Why can a huge number of turns on a small battery be counterproductive?',['wire R rises so current falls','coil cancels itself','iron melts','polarity reverses'],0,'I = V/R falls as N increases; also heating.',{f:1});
MC('c12',2,'You can find the north pole of a coil with current using:',['RHR #2 (fingers curl with current, thumb = north)','the left foot rule','Ohm’s law','Coulomb’s law'],0,'');

// c13 — transformers
NUM('c13',2,'A transformer has 500 primary turns and 50 secondary turns. Primary 120 V. Secondary voltage (V)?',12,'V','V_s = V_p N_s/N_p.',{dg:1});
NUM('c13',3,'An ideal step-down transformer supplies 2 A at 12 V from a 120 V primary. Primary current (A)?',0.2,'A','P = 24 W; I_p = 24/120.',{dg:1});
MC('c13',2,'A step-up transformer has:',['more secondary turns than primary','fewer secondary turns','equal turns','no core'],0,'N_s > N_p → V_s > V_p.');
MC('c13',2,'A transformer is connected to a steady DC battery. The secondary output is:',['steady DC','steady AC','zero after a brief transient','doubled'],2,'No changing flux ⇒ no induced EMF (except at switch-on/off).',{dg:1,f:1});
MC('c13',2,'Transformer cores are laminated mainly to reduce:',['hysteresis only','eddy-current losses','resistance of wires','flux linkage'],1,'');
NUM('c13',3,'A transformer 1000:100 turns, 120 V primary, delivers 5 A. Primary current (A)?',0.5,'A','V_s=12 V, P=60 W, I_p=0.5 A.',{f:1});
MC('c13',2,'Electricity is transmitted at very high voltage to:',['increase current','reduce I²R line losses','increase frequency','avoid transformers'],1,'P = VI: higher V → lower I → losses ∝ I².');
NUM('c13',3,'The same power is sent at 10 000 V instead of 1000 V over the same lines. The I²R loss changes by what factor (÷)?',100,'×','I falls ×10 ⇒ loss ÷100.');
MC('c13',2,'Lenz’s law states the induced current:',['aids the change in flux','opposes the change in flux','is always clockwise','is independent of flux'],1,'');
NUM('c13',2,'A 200-turn coil experiences a flux change of 0.040 Wb in 0.20 s. Average induced EMF (V)?',40,'V','ε = NΔΦ/Δt.');
MC('c13',2,'Electromagnetic induction was discovered by Faraday in:',['1785','1800','1831','1888'],2,'Also independently by Joseph Henry.');
MC('c13',2,'An isolation transformer (1:1) mainly provides:',['voltage gain','galvanic isolation','current gain','frequency change'],1,'');
