/* ===== CIRCUIT LAB QUESTION BANK — c14–c26 ===== */

// c14 — motors & generators
MC('c14',2,'The commutator of a brushed DC motor:',['reverses the coil current every half turn','stores energy','reduces back-EMF','filters the supply'],0,'Keeps torque in the same sense.',{dg:1});
NUM('c14',2,'A 12 V DC motor with 2.0 Ω armature resistance is stalled. Current (A)?',6,'A','No back-EMF: I = V/R.',{dg:1});
NUM('c14',2,'The same motor running with 9.0 V back-EMF draws (A):',1.5,'A','I = (12 − 9)/2.');
MC('c14',2,'A motor draws the largest current:',['at top speed','at start-up / stall','at half speed','when unloaded'],1,'Back-EMF is zero at start.',{f:1});
MC('c14',2,'A generator works on the principle of:',['Coulomb’s law','Faraday’s law of induction','Ohm’s law','Boyle’s law'],1,'');
MC('c14',2,'A simple alternator (slip rings) produces:',['DC','AC','pulsating magnetism','static charge'],1,'Commutator gives pulsating DC; slip rings give AC.');
NUM('c14',3,'Synchronous speed (rpm) of a 4-pole motor on 60 Hz? (n = 120f/p)',1800,'rpm','120×60/4.');
MC('c14',2,'Reversing the battery polarity on a brushed permanent-magnet DC motor:',['reverses rotation','stops it','does nothing','burns it out'],0,'');
MC('c14',2,'The induction motor (polyphase, rotating field) was developed by:',['Edison','Tesla','Volta','Ampère'],1,'');
MC('c14',2,'Electric motors convert:',['mechanical → electrical','electrical → mechanical','chemical → thermal','thermal → electrical'],1,'');

// c15 — control devices
MC('c15',2,'An SPDT switch has:',['one pole and two throws','two poles and one throw','two poles and two throws','one pole and one throw'],0,'',{dg:1});
MC('c15',2,'A relay’s NO contact:',['is closed when the coil is off','closes when the coil is energized','is always open','connects the coil'],1,'',{dg:1});
MC('c15',2,'A flyback (freewheel) diode across a relay coil is used to:',['reduce coil resistance','absorb the inductive voltage spike when current stops','rectify AC','increase contact rating'],1,'',{dg:1,f:1});
MC('c15',2,'A fuse is placed in:',['parallel with the load','series with the load (hot side)','only on the neutral','across the battery'],1,'');
MC('c15',2,'A GFCI trips when:',['current exceeds 15 A','hot and neutral currents differ by ~5 mA','voltage exceeds 130 V','the plug is pulled'],1,'Detects leakage to ground through a person.',{dg:1,f:1});
MC('c15',2,'A thermal-magnetic circuit breaker uses the magnetic element for:',['slow overload trips','instant short-circuit trips','resetting','voltage sensing'],1,'Thermal bimetal for overloads; magnetic for shorts.');
MC('c15',2,'14 AWG copper household wiring is normally protected by a breaker of:',['10 A','15 A','30 A','50 A'],1,'12 AWG → 20 A, 10 AWG → 30 A.');
MC('c15',2,'Which fuse type tolerates brief inrush currents of motors?',['fast-blow','slow-blow (time-delay)','no difference','thermal cut-off only'],1,'');
NUM('c15',2,'A 12 V relay has a 400 Ω coil. Coil current (mA)?',30,'mA','I = 12/400 = 0.03 A.');
TF('c15',1,'If a 15 A fuse keeps blowing, it is safe to replace it with a 30 A fuse.',false,'Wire overheating and fire risk.');
MC('c15',2,'A major advantage of a relay is:',['it amplifies voltage','electrical isolation between control and load circuits','it never wears out','it runs on AC only'],1,'');
MC('c15',2,'A DPDT switch can be used to:',['reverse the polarity to a motor','measure current','rectify AC','limit current'],0,'');
MC('c15',2,'Who built the relay (1835) for use in telegraphy?',['Joseph Henry','Samuel Morse only','Edison','Ohm'],0,'');
MC('c15',2,'Two switches in SERIES implement which logic function?',['OR','AND','XOR','NOT'],1,'');
MC('c15',2,'An AFCI device primarily protects against:',['shock','arc-induced fires','undervoltage','surges'],1,'');
MS('c15',3,'Which of these devices can protect against OVERCURRENT? (select all)',['fuse','circuit breaker','GFCI receptacle only','PTC resettable fuse'],[0,1,3],'A GFCI protects against ground-fault leakage, not overloads (a GFCI breaker combines both).');
MC('c15',2,'An NTC thermistor’s resistance:',['rises with temperature','falls with temperature','is constant','is zero at 25 °C'],1,'');
MC('c15',2,'A potentiometer is a:',['2-terminal variable resistor','3-terminal adjustable voltage divider','diode','transformer'],1,'Rheostat: 2-terminal variable R.');
NUM('c15',2,'Two 1500 W heaters are plugged into one 120 V branch circuit. Total current (A)?',25,'A','P/V = 3000/120 — exceeds a 15 A/20 A breaker.');

// c16 — diagrams
MC('c16',1,'In a battery symbol the longer line is the:',['negative terminal','positive terminal','ground','switch'],1,'',{dg:1});
MC('c16',2,'An ammeter is connected:',['in parallel','in series','across the source','to ground only'],1,'');
MC('c16',2,'Two crossing lines in a schematic with NO dot at the crossing:',['are connected','are not connected','indicate a short','are a transformer'],1,'');
MC('c16',2,'In the BJT symbol the arrow on the emitter points OUT for:',['PNP','NPN','MOSFET','diode'],1,'NPN = “Not Pointing iN”.');
NUM('c16',2,'R (Ω) for a red LED (V_f = 2.0 V, 15 mA) on 9 V?',467,'Ω','(9 − 2)/0.015 = 467 Ω.',{tol:0.02});
MC('c16',2,'Reference designator “K1” usually denotes a:',['capacitor','relay','transistor','diode'],1,'R, C, L, D, Q, U, S, K, F, T.');
MC('c16',2,'The triangle-and-bar diode symbol conducts conventional current:',['from bar to triangle','from the triangle’s base toward the bar (anode → cathode)','in both directions','never'],1,'');

// c17 — history
MC('c17',1,'Who invented the voltaic pile?',['Galvani','Volta','Ampère','Tesla'],1,'',{dg:1});
MC('c17',2,'Coulomb’s inverse-square force law dates from:',['1650','1785','1845','1890'],1,'');
MC('c17',2,'Which scientist discovered electromagnetic induction (1831)?',['Faraday','Ohm','Kirchhoff','Volta'],0,'',{dg:1});
MC('c17',2,'Ohm’s law was published in:',['1785','1800','1827','1888'],2,'');
MC('c17',2,'Kirchhoff’s circuit laws were formulated in:',['1745','1845','1895','1931'],1,'');
MC('c17',2,'Who is known as the “father of electrodynamics”?',['Ampère','Coulomb','Volta','Tesla'],0,'',{dg:1});
MC('c17',2,'Tesla is best associated with:',['voltaic pile','polyphase AC induction motor and AC power systems','torsion balance','the telegraph'],1,'');
MC('c17',2,'The SI unit “farad” honors:',['Faraday','Ferdinand','Fermi','Fahrenheit'],0,'');
MC('c17',2,'The 1752 kite experiment is credited to:',['Franklin','Ampère','Gilbert','Kirchhoff'],0,'');
MC('c17',2,'Who discovered the electron (1897)?',['Millikan','J. J. Thomson','Rutherford','Bohr'],1,'');
MC('c17',2,'The transistor was invented at Bell Labs by:',['Bardeen, Brattain and Shockley','Edison and Tesla','Noyce and Kilby','Fleming and de Forest'],0,'');
MC('c17',2,'Galvani’s frog-leg experiments led to a dispute with:',['Volta','Ampère','Franklin','Ohm'],0,'');
MC('c17',2,'Which set of names are all SI units?',['volt, henry, tesla','Volta, Henry, Tesla','Ohm’s, Watt’s, Ampère’s','weber, Coulomb’s, Ohm’s'],0,'Units are lower-case names (volt, henry, tesla).');
MC('c17',3,'Who discovered that a current-carrying wire deflects a compass (1820)?',['Ørsted','Ampère','Faraday','Weber'],0,'');
MC('c17',2,'Michael Faraday built the first electric motor in:',['1800','1821','1888','1900'],1,'');
MC('c17',3,'Thévenin’s theorem dates from:',['1783','1883','1926','1958'],1,'Norton’s theorem: 1926.');
MC('c17',2,'Heinrich Lenz is known for:',['Lenz’s law (direction of induced current)','the triode','Ohm’s law','the Leyden jar'],0,'');
MC('c17',2,'Who demonstrated radio waves experimentally (1887)?',['Hertz','Marconi','Maxwell','Tesla'],0,'');
MC('c17',3,'Maxwell’s equations unified electricity, magnetism and:',['gravity','light','heat','sound'],1,'');

// c18 — LEDs
NUM('c18',2,'Series resistor (Ω) for a LED with V_f = 2.1 V at 20 mA from a 5 V supply?',145,'Ω','(5 − 2.1)/0.02 = 145 Ω.',{dg:1,tol:0.02});
MC('c18',2,'LED brightness depends primarily on:',['forward current','reverse voltage','color of the wire','battery age only'],0,'',{dg:1});
MC('c18',3,'Two LEDs connected in PARALLEL should have:',['one shared resistor','a separate resistor each','no resistors','opposite polarity'],1,'',{f:1});
NUM('c18',3,'Two red LEDs (2.0 V each) in series with a resistor on 9 V at 10 mA. R (Ω)?',500,'Ω','(9 − 4)/0.01.',{tol:0.02});
MC('c18',2,'Compared with a red LED, a blue LED has a:',['lower forward voltage','higher forward voltage','zero forward voltage','the same'],1,'');
MC('c18',2,'Who received the 2014 Nobel Prize in Physics for blue LEDs?',['Akasaki, Amano, Nakamura','Bardeen, Brattain, Shockley','Kilby','Noyce'],0,'');
NUM('c18',3,'Power dissipated (W) in a 467 Ω resistor carrying 15 mA?',0.105,'W','P = I²R.',{tol:0.03});
MC('c18',2,'An LED connected backwards at modest voltage will:',['light very brightly','not light','melt the resistor','reverse polarity itself'],1,'');
MC('c18',3,'A red LED (≈2.0 V) and a blue LED (≈3.2 V) in series on 5 V with a resistor: result?',['both lit normally','neither lights properly (3.2 + 2.0 > 5)','blue only','red only'],1,'');
MC('c18',2,'White LEDs are usually made from:',['blue LED + phosphor','red + green + yellow diodes only','tungsten','incandescent glass'],0,'');

// c19 — diodes/BJT
MC('c19',1,'The forward voltage drop of a silicon PN junction is about:',['0.07 V','0.7 V','7 V','0 V'],1,'',{dg:1});
MC('c19',2,'In an NPN transistor symbol, the emitter arrow points:',['in','out (away from base)','up','nowhere'],1,'',{dg:1});
NUM('c19',2,'β = 100, I_B = 50 μA. Collector current (mA)?',5,'mA','I_C = βI_B.',{dg:1});
NUM('c19',3,'β = 200, I_B = 25 μA. Emitter current (mA)?',5.025,'mA','I_C = 5 mA; I_E = I_B + I_C.',{tol:0.01});
MC('c19',2,'To turn ON a silicon NPN transistor, the base must be about ____ above the emitter:',['0.2 V','0.7 V','5 V','12 V'],1,'',{dg:1});
NUM('c19',2,'9 V source, 1 kΩ and a forward-biased silicon diode in series. Current (mA)?',8.3,'mA','(9 − 0.7)/1000.',{tol:0.02});
MC('c19',2,'A Zener diode in a simple regulator is connected:',['forward, in series','reverse-biased, in parallel with the load','in parallel, forward','in series, reverse'],1,'');
MC('c19',2,'A half-wave rectifier with a silicon diode, 10 V peak AC input, gives a peak output of about:',['10 V','9.3 V','8.6 V','5 V'],1,'');
MC('c19',2,'A full-wave bridge rectifier uses:',['1 diode','2 diodes','4 diodes','8 diodes'],2,'');
MC('c19',2,'A saturated NPN transistor switch has V_CE of about:',['0.2 V','0.7 V','V_supply','5 V'],0,'');
MC('c19',2,'When V_BE is well below 0.6 V an NPN transistor is in:',['saturation','cutoff','active region','breakdown'],1,'');
MC('c19',2,'The common-emitter amplifier output is:',['in phase with input','inverted (180°)','always zero','DC only'],1,'');
NUM('c19',3,'5 V logic drives a transistor base via resistor; need I_B = 12 mA. Base resistor (Ω)? (V_BE = 0.7 V)',358,'Ω','(5 − 0.7)/0.012.',{tol:0.03});
MC('c19',3,'A PNP transistor (emitter at +V) turns ON when the base is pulled:',['0.7 V above emitter','0.7 V below emitter','to ground only if NPN','open'],1,'');
MC('c19',2,'Majority carriers in P-type silicon are:',['electrons','holes','protons','neutrons'],1,'');
MC('c19',2,'In a PN junction at equilibrium the depletion region contains:',['free electrons','immobile ions','neutrons','no charge at all'],1,'');
MC('c19',2,'Schottky diodes are preferred in some circuits because they have:',['very large drop','low forward drop and fast switching','no junction','high reverse voltage only'],1,'');
MC('c19',3,'A multimeter in diode-test mode: red on base, black on emitter and collector of an NPN both read ≈0.65 V. This indicates:',['NPN with base identified','PNP','open','shorted transistor'],0,'');
MC('c19',2,'Bardeen, Brattain and Shockley received the Nobel Prize for the transistor in:',['1947','1956','1971','1990'],1,'Invention Dec 1947; prize 1956.');

// c20 — op-amps
NUM('c20',2,'Inverting amplifier: R_in = 10 kΩ, R_f = 47 kΩ, V_in = +0.5 V. V_out (V)?',-2.35,'V','−(47/10)×0.5.',{dg:1,tol:0.02});
NUM('c20',2,'Non-inverting amplifier: R_f = 90 kΩ, R_g = 10 kΩ, V_in = 0.3 V (supplies ±12 V). V_out (V)?',3,'V','(1 + 9) × 0.3.',{dg:1});
MC('c20',2,'Ideal op-amp “golden rule”: with negative feedback the two inputs:',['draw large current','are at the same voltage','are at opposite voltages','are grounded'],1,'',{dg:1});
MC('c20',2,'An op-amp with no feedback used as a comparator has an output that:',['is proportional to V_in','saturates near a supply rail','is zero','is half of V_cc'],1,'');
MC('c20',1,'A voltage follower has a gain of:',['0','1','10','infinity'],1,'');
NUM('c20',2,'Inverting amp with R_f = 100 kΩ, R_in = 10 kΩ, V_in = 0.2 V. V_out (V)?',-2,'V','');
MC('c20',2,'In the inverting configuration with (+) grounded, the (−) input is called a:',['virtual ground','real ground','supply','load'],0,'');
NUM('c20',3,'Summing amp: R_f = 10 kΩ; V₁ = 1 V through 10 kΩ; V₂ = 2 V through 20 kΩ. V_out (V)?',-2,'V','−(1 + 1).');
MC('c20',2,'An op-amp powered from ±5 V tries to give 8 V. The output will:',['be 8 V','clip near +5 V (less a volt or two)','blow up','be −8 V'],1,'');
MC('c20',2,'The ideal op-amp’s input current is:',['large','zero','equal to output','1 A'],1,'');

// c21 — digital logic
MC('c21',1,'Two switches in series controlling a lamp implement:',['OR','AND','NOT','XOR'],1,'',{dg:1});
NUM('c21',1,'Binary 1011 is decimal:',11,'','8 + 2 + 1.',{dg:1});
MC('c21',2,'A “universal gate” is:',['AND','NAND','XOR','buffer'],1,'NAND (and NOR) can build all logic.');
MC('c21',2,'XOR output is 1 when:',['both inputs equal','inputs differ','both are 1','both are 0'],1,'');
NUM('c21',1,'How many rows are in a truth table for 4 inputs?',16,'','2⁴.');
MC('c21',2,'De Morgan: (A·B)′ equals:',['A′·B′','A′ + B′','A + B','A⊕B'],1,'');
MC('c21',2,'For 5 V TTL logic, a valid HIGH input is at least:',['0.8 V','2.0 V','3.5 V','5.0 V'],1,'');
MC('c21',2,'A NAND gate with both inputs tied together behaves as:',['AND','NOT','OR','buffer'],1,'');
NUM('c21',2,'0xFF in decimal is:',255,'','15×16 + 15.');
MC('c21',2,'Floating (unconnected) inputs on a logic IC should be:',['left floating','tied to V_cc or ground via a proper level','connected to each other only','touched by hand'],1,'');

// c22 — hands-on
MC('c22',1,'To measure current with a DMM the meter must be placed:',['in parallel with the component','in series with the component','across the power supply','after removing the battery only'],1,'',{dg:1});
MC('c22',1,'To measure voltage the meter is connected:',['in series','in parallel (across) the component','to ground only','with the circuit off and open'],1,'',{dg:1});
MC('c22',2,'When measuring resistance the circuit must be:',['powered','unpowered, with the resistor isolated','short-circuited','grounded'],1,'',{dg:1});
MC('c22',2,'On a standard solderless breadboard, holes in the same 5-hole column half (a–e) are:',['electrically connected','not connected','connected only when powered','isolated by the trench'],0,'');
MC('c22',2,'The center trench of a breadboard is there so that:',['DIP ICs can straddle it','wires don’t fall in','the board can bend','the rails connect'],0,'');
MC('c22',2,'A blown DMM current fuse is most likely caused by:',['measuring voltage with the leads in the mA jack','measuring resistance','measuring a battery’s voltage with the dial on V','using the COM jack'],0,'Leads in mA jack + dial on V across a source = short through the meter.');
NUM('c22',3,'Mystery resistor: series with a known 1.00 kΩ across 9.02 V. Voltage across the known resistor is 3.01 V. R_x (Ω)?',1997,'Ω','R_x = 1000×(9.02 − 3.01)/3.01.',{tol:0.02,f:1});
MC('c22',2,'For a current measurement of ~5 A you should connect the red lead to the:',['VΩ jack','mA jack','10 A jack','COM jack'],2,'');
MC('c22',2,'A DMM displays “OL”. This means:',['open loop / overload (out of range)','output low','oscillator loaded','zero'],0,'');
MC('c22',2,'USB charger label “5.0 V ⎓ 2.4 A”. Output power (W)?',['2.1','7.4','12','24'],2,'5×2.4 = 12 W.');
MC('c22',2,'On many full-size breadboards the power rail is:',['always continuous end to end','sometimes split in the middle','never connected','AC only'],1,'');
MC('c22',2,'A DMM shows a negative voltage. The most likely reason is:',['faulty meter','leads connected with reversed polarity','the battery is AC','the meter’s fuse blew'],1,'');
NUM('c22',2,'12 V supply, current through it measured as 0.25 A. Power supplied (W)?',3,'W','P = VI.');
MC('c22',3,'Which is the best way to verify a resistor’s color-code value?',['measure with the ohmmeter with the resistor isolated','measure it while power is on','use the voltmeter across it in a live circuit only','guess'],0,'');
MS('c22',3,'Which practices are correct for safe multimeter use? (select all)',['leave the dial on OFF/V after use','never measure resistance on a live circuit','put the ammeter across the battery to check the voltage','start on the highest range if unsure'],[0,1,3],'');

// c23 — meters/measurement
NUM('c23',3,'A 10 MΩ voltmeter measures the lower resistor of a 1 MΩ/1 MΩ divider on 10 V. Reading (V)?',4.76,'V','0.909/(1+0.909)×10.',{tol:0.02,f:1});
NUM('c23',3,'5 V source and 10 Ω load; ammeter burden is 0.5 Ω. Reading (A)?',0.476,'A','5/10.5.',{tol:0.02});
MC('c23',2,'An ideal voltmeter has:',['zero resistance','infinite resistance','1 Ω','variable R'],1,'');
NUM('c23',2,'Percent error if you measure 4.76 V for an expected 5.00 V (%)?',4.8,'%','|4.76 − 5|/5×100.',{tol:0.05});
MC('c23',2,'Meter-loading errors are an example of:',['random error','systematic error','gross error','precision'],1,'');
NUM('c23',2,'P = V×I with V ±1 % and I ±2 %. Worst-case % uncertainty in P?',3,'%','Add relative uncertainties.');
MC('c23',2,'Two-point calibration of a sensor fixes:',['only offset','offset and gain (slope)','only noise','nothing'],1,'');

// c24 — inductors
MC('c24',2,'In DC steady state an ideal inductor behaves like:',['an open circuit','a short circuit (wire)','a capacitor','a resistor of 1 Ω'],1,'',{dg:1});
NUM('c24',2,'Time constant (ms) of an RL circuit with L = 10 mH and R = 100 Ω?',0.1,'ms','τ = L/R = 10⁻⁴ s = 0.1 ms.',{tol:0.02});
MC('c24',2,'An inductor opposes changes in its:',['voltage','current','charge','resistance'],1,'');
NUM('c24',2,'Energy (J) stored in a 0.1 H inductor carrying 2 A?',0.2,'J','½LI².');
MC('c24',2,'The SI unit of inductance honors:',['Henry','Hertz','Hall','Helmholtz'],0,'');

// c25 — troubleshooting
MC('c25',2,'In a series circuit, a voltmeter across one resistor reads the full supply voltage and the lamp is off. The resistor is:',['shorted','open','perfect','a capacitor'],1,'',{dg:1,f:1});
MC('c25',2,'A shorted component has about ____ across it:',['the supply voltage','0 V','twice the supply','no meaning'],1,'');
MC('c25',2,'The “half-split” method means:',['cutting the circuit in half physically','testing midway to decide which half contains the fault','measuring at half voltage','replacing half the parts'],1,'');
MC('c25',2,'Two bulbs in series are both dark. Possible cause:',['an open anywhere in the loop','a short across one bulb only','too much current','nothing'],0,'');
MC('c25',2,'An LED does not light. Which first check is reasonable?',['polarity and series resistor/continuity','repaint the LED','increase the voltage to 50 V','remove all resistors'],0,'');

// c26 — test strategy
MC('c26',2,'According to the 2026 Circuit Lab rules the written portion counts:',['10–25 %','25–50 %','50–75 %','90 %'],2,'Hands-on is the remaining 25–50 %.',{dg:1});
MC('c26',2,'Circuit Lab teams may bring:',['no notes','notes/resources on paper, any size, binders OK','one index card','only printed formulas'],1,'');
MC('c26',2,'Unless requested otherwise, answers must be in:',['US customary units','metric units with appropriate significant figures','SI with 10 decimals','any units'],1,'');
MC('c26',2,'Ties in Circuit Lab are broken by:',['a coin flip','pre-selected tiebreaker task(s)/questions','team size','alphabetical order'],1,'');
MS('c26',3,'Which topics MUST be prepared for even at regionals (2026 list)? (select all)',['electrical control devices (relays, fuses, breakers, GFCIs)','transformers and right-hand rules','operational amplifiers (States/Nationals only)','history of Ampère/Coulomb/Kirchhoff/Volta/Ohm/Tesla/Faraday'],[0,1,3],'Op-amps, LEDs and PN junctions are labeled States/Nationals in the 2026 manual (but still worth learning).');
