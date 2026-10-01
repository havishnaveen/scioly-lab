/* ===== CIRCUIT LAB — Part 4: history, LEDs, PN junctions/BJT, op-amps, digital logic ===== */

L({id:'c17', t:'History of Electricity & Magnetism (Volta → Tesla & beyond)', tier:'hist', yield:3, min:45, off:'Topic 9',
formulas:[
 ['Units named for people','ampere (Ampère) · coulomb · volt (Volta) · ohm · farad · henry · tesla · weber · siemens · hertz · joule · watt · gauss · kelvin']],
html:`
<div class="box unv"><b>Official requirement</b>The written test must include at least one question on “historical perspective of the electricity and magnetism discoveries made by <b>Ampère, Coulomb, Kirchhoff, Volta, Ohm, Tesla &amp; Faraday</b>.” Those seven are the <i>guaranteed</i> names. Extended roster below = insurance.</div>
<h2>1. The seven required figures</h2>
<div class="tablewrap"><table><tr><th>Scientist</th><th>Nationality</th><th>Key date(s)</th><th>Contribution</th><th>Unit / fame</th></tr>
<tr><td><b>Alessandro Volta</b></td><td>Italian</td><td>1800</td><td>Invented the <b>voltaic pile</b>, first continuous chemical battery (zinc/copper discs, brine-soaked cardboard). Disproved Galvani’s “animal electricity”; contact-potential debates.</td><td><b>Volt</b> (V)</td></tr>
<tr><td><b>Charles-Augustin de Coulomb</b></td><td>French</td><td>1785</td><td><b>Coulomb’s law</b> (inverse-square force between charges) using a <b>torsion balance</b>; also friction, magnetism poles.</td><td><b>Coulomb</b> (C)</td></tr>
<tr><td><b>André-Marie Ampère</b></td><td>French</td><td>1820 (law 1826)</td><td>Founder of <b>electrodynamics</b>: parallel currents attract/repel; <b>Ampère’s law</b>; proposed the solenoid and the idea that magnetism is due to circulating currents; coined “galvanometer” concept; “father of electrodynamics”.</td><td><b>Ampere</b> (A)</td></tr>
<tr><td><b>Georg Simon Ohm</b></td><td>German</td><td>1827</td><td><b>Ohm’s law</b> V = IR (<i>Die galvanische Kette, mathematisch bearbeitet</i>). Initially ridiculed; later awarded the Copley Medal (1841).</td><td><b>Ohm</b> (Ω)</td></tr>
<tr><td><b>Gustav Robert Kirchhoff</b></td><td>German</td><td>1845 (circuit laws); 1859–60 (spectroscopy, blackbody)</td><td><b>Kirchhoff’s circuit laws</b> (KCL, KVL) as a student of 21; with Bunsen discovered Cs and Rb by spectroscopy; <b>Kirchhoff’s law of thermal radiation</b> (defined blackbody).</td><td>(Kirchhoff’s laws)</td></tr>
<tr><td><b>Nikola Tesla</b></td><td>Serbian-American (b. 1856, Smiljan)</td><td>1887–1891 (AC motor/system); 1891 Tesla coil</td><td><b>Polyphase AC induction motor</b> and rotating magnetic field; AC power systems with Westinghouse (Niagara 1895); Tesla coil; radio/remote-control work; wireless-power dreams (Wardenclyffe).</td><td><b>Tesla</b> (T) — magnetic flux density</td></tr>
<tr><td><b>Michael Faraday</b></td><td>English</td><td>1831 (induction), 1821 (first motor), 1833–34 (electrolysis laws)</td><td><b>Electromagnetic induction</b>; <b>first electric motor</b> (1821, homopolar); <b>laws of electrolysis</b>; <b>Faraday cage</b> (1836); field lines; diamagnetism; coined “electrode, anode, cathode, ion”.</td><td><b>Farad</b> (F)</td></tr></table></div>
<div class="box key"><b>Mnemonic for the big seven’s dates</b>Coulomb 1785 → Volta 1800 → Ampère 1820 → Ohm 1827 → Faraday 1831 → Kirchhoff 1845 → Tesla 1888. (Sort of: “1785, 1800, 20, 27, 31, 45, 88”.)</div>
<h2>2. Extended roster (frequent invitational/state questions)</h2>
<div class="tablewrap"><table><tr><th>Who</th><th>When</th><th>What</th></tr>
<tr><td>Thales of Miletus</td><td>~600 BC</td><td>Amber rubbed with fur attracts light objects (Greek <i>elektron</i>); lodestone</td></tr>
<tr><td>William Gilbert</td><td>1600</td><td><i>De Magnete</i>: Earth is a giant magnet; coined “electricus”</td></tr>
<tr><td>Otto von Guericke</td><td>~1660</td><td>First electrostatic generator (sulfur globe)</td></tr>
<tr><td>Stephen Gray</td><td>1729</td><td>Conductors vs insulators; transmitted charge along hundreds of feet of thread/wire</td></tr>
<tr><td>Charles du Fay</td><td>1733</td><td>Two kinds of electricity (vitreous and resinous)</td></tr>
<tr><td>Musschenbroek / von Kleist</td><td>1745–46</td><td><b>Leyden jar</b> (first capacitor)</td></tr>
<tr><td>Benjamin Franklin</td><td>1752</td><td>Kite experiment; lightning rod; + / − naming; conservation of charge; one-fluid theory</td></tr>
<tr><td>Luigi Galvani</td><td>1780s–91</td><td>Frog-leg twitching; “animal electricity” → galvanism</td></tr>
<tr><td>Henry Cavendish</td><td>1770s</td><td>Unpublished: inverse-square law, resistance and capacitance experiments (Ohm-like)</td></tr>
<tr><td>Hans Christian Ørsted</td><td>1820</td><td>Current deflects compass → electromagnetism</td></tr>
<tr><td>Biot &amp; Savart</td><td>1820</td><td>Biot–Savart law (field of a current element)</td></tr>
<tr><td>Thomas Seebeck</td><td>1821</td><td>Thermoelectric (thermocouple) effect; Peltier (1834) reverse</td></tr>
<tr><td>William Sturgeon</td><td>1824–25</td><td>First electromagnet (horseshoe iron + coil)</td></tr>
<tr><td>Joseph Henry</td><td>1830–35</td><td>Powerful electromagnets, self-inductance, the relay (1835), independent induction discovery; first Smithsonian Secretary → <b>henry</b> (H)</td></tr>
<tr><td>Hippolyte Pixii</td><td>1832</td><td>First hand-cranked generator (dynamo)</td></tr>
<tr><td>Heinrich Lenz</td><td>1834</td><td>Lenz’s law (direction of induced EMF)</td></tr>
<tr><td>Samuel Morse</td><td>1837–44</td><td>Electric telegraph (&amp; Morse code)</td></tr>
<tr><td>James Joule</td><td>1840</td><td>Joule heating (P = I²R); mechanical equivalent of heat → <b>joule</b></td></tr>
<tr><td>Charles Wheatstone</td><td>1843 (bridge)</td><td>Popularized the “Wheatstone” bridge (invented by S. H. Christie, 1833); telegraph, concertina</td></tr>
<tr><td>Wilhelm Weber / C. F. Gauss</td><td>1830s–40s</td><td>Absolute units; telegraph; <b>weber</b> (Wb), <b>gauss</b> (G)</td></tr>
<tr><td>James Clerk Maxwell</td><td>1861–65</td><td><b>Maxwell’s equations</b>: unified electricity, magnetism, light (EM waves)</td></tr>
<tr><td>Alexander Graham Bell</td><td>1876</td><td>Telephone</td></tr>
<tr><td>Edwin Hall</td><td>1879</td><td>Hall effect</td></tr>
<tr><td>Thomas Edison / Joseph Swan</td><td>1879</td><td>Practical incandescent lamp; Pearl Street Station (NYC) 1882 (DC)</td></tr>
<tr><td>Pierre &amp; Jacques Curie</td><td>1880</td><td>Piezoelectricity</td></tr>
<tr><td>Léon Thévenin</td><td>1883</td><td>Thévenin’s theorem</td></tr>
<tr><td>Heinrich Hertz</td><td>1887</td><td>Generated/detected radio waves → <b>hertz</b> (Hz); photoelectric effect observed</td></tr>
<tr><td>George Westinghouse</td><td>1886–</td><td>AC distribution, Niagara Falls power (1895)</td></tr>
<tr><td>Charles Steinmetz</td><td>1893</td><td>Complex-number (phasor) AC theory; hysteresis law</td></tr>
<tr><td>J. J. Thomson</td><td>1897</td><td>Discovery of the <b>electron</b> (cathode rays, e/m)</td></tr>
<tr><td>Robert Millikan</td><td>1909</td><td>Oil-drop experiment: charge of an electron</td></tr>
<tr><td>Kamerlingh Onnes</td><td>1911</td><td>Superconductivity (mercury at 4.2 K)</td></tr>
<tr><td>John Ambrose Fleming</td><td>1904</td><td>Vacuum-tube diode (<i>Fleming valve</i>); Fleming’s left/right-hand rules; Lee de Forest triode 1906</td></tr>
<tr><td>Edward Norton</td><td>1926</td><td>Norton’s theorem</td></tr>
<tr><td>Bardeen, Brattain, Shockley</td><td>Dec 1947 / 1948</td><td><b>Transistor</b> (point-contact; junction BJT 1948); Nobel 1956</td></tr>
<tr><td>Jack Kilby / Robert Noyce</td><td>1958 / 1959</td><td>Integrated circuit</td></tr>
<tr><td>George Boole</td><td>1854</td><td>Boolean algebra; Claude Shannon (1937) applied it to switching circuits</td></tr></table></div>
<div class="box hist"><b>Fun connections that show up on tests</b>• The <b>Volta–Galvani</b> dispute (animal vs metallic electricity). • Ohm’s law was <b>first ignored</b> in Germany. • Kirchhoff’s laws came from a <b>student</b>. • <b>Faraday had almost no formal education</b> (apprenticed under Humphry Davy). • <b>Maxwell’s</b> equations predicted light is EM radiation. • <b>Tesla</b>’s name is given to the SI unit of magnetic flux density; his rival Edison backed DC. • The <b>ampere</b> is a base SI unit; the <b>volt, ohm, farad, coulomb</b> are derived.</div>
<p>See the <a href="#/timeline">interactive timeline</a> and the history flashcard deck for spaced practice.</p>`});

L({id:'c18', t:'LEDs: Operation, Polarity, Current Limiting & Brightness', tier:'sn', yield:3, min:40, off:'States/Nat.: Topic (LED)',
formulas:[
 ['LED series resistor','R = (V_s − V_f)/I_f   (I_f typically 10–20 mA)'],
 ['Power in resistor','P_R = I_f²R = (V_s − V_f)I_f'],
 ['Typical V_f','IR 1.2 V · red 1.8–2.0 V · orange/yellow 2.0–2.1 V · green 2.0–3.2 V · blue/white 3.0–3.4 V · UV 3.3–3.8 V'],
 ['LEDs in series','V_s > ΣV_f;  one resistor for the string'],
 ['Brightness','∝ forward current (not voltage)']],
html:`
<div class="box unv"><b>Rules note</b>“Fundamental characteristics and operation of a light emitting diode (LED)” is listed as a <b>States/Nationals</b> written topic in the 2026 manual — but LED tasks are also in the <b>hands-on</b> examples (“2 LEDs equally bright”) at any level. Know it cold.</div>
<h2>1. What an LED is</h2>
<p>A <b>light-emitting diode</b> is a PN-junction diode made from compound semiconductors (GaAs, GaP, GaN, InGaN…). When <b>forward biased</b>, electrons recombine with holes and release energy as <b>photons</b> (electroluminescence). The color is set by the semiconductor <b>band gap</b> (E = hf): bigger gap → shorter wavelength → higher V_f. Blue LED (Akasaki, Amano, Nakamura — <b>Nobel Prize 2014</b>) made white LEDs possible (blue LED + yellow phosphor).</p>
<h2>2. Polarity</h2>
<p><b>Anode (+, long leg)</b> → <b>cathode (−, short leg, flat side of the plastic rim, larger internal anvil)</b>. Schematic: triangle points from anode to cathode, with two arrows out. Reverse bias: no light, tiny leakage; max reverse V only ≈ 5 V → reversed connection at high voltage <b>damages</b> it.</p>
<h2>3. The I–V curve (non-ohmic!)</h2>
<p>Below V_f (≈ 1.8–3.3 V) almost no current; above it, current rises <b>exponentially</b>: a small extra volt means enormous current. So an LED connected directly to a battery is destroyed — <b>it always needs a series current-limiting resistor</b> (or constant-current driver).</p>
<div class="eq">R = (V_supply − V_f) / I_f</div>
<div class="box ex"><b>Worked example</b>Red LED (V_f = 2.0 V, I_f = 15 mA) on a 9 V battery: R = 7/0.015 = 467 Ω → use 470 Ω (E12). P_R = 0.015²×470 = 0.106 W (¼ W is OK). Supply from 3 V: R = 1/0.015 = 67 Ω → 68 Ω.</div>
<h2>4. Multiple LEDs</h2>
<ul><li><b>Series:</b> same current ⇒ same brightness (for the same I). Supply must exceed ΣV_f: two red LEDs (2×2.0 = 4 V) on 9 V → R = 5/0.015 = 330 Ω.</li>
<li><b>Parallel:</b> give <b>each LED its own resistor</b> (V_f differs between LEDs — “current hogging”: the lower-V_f LED takes more current). Sharing one resistor for parallel LEDs → unequal brightness, or the dominant one fails.</li>
<li>Different colors on the same current have different apparent brightness/efficiency.</li></ul>
<div class="box filter"><b>Tryout-filter</b>• <b>Equal brightness task</b>: any valid configuration must give equal <i>current</i>. Series is the easiest guarantee.<br>• “If a red and a blue LED are in series with a resistor on 5 V, will the blue light?” → V_f(blue) ≈ 3.2 + 1.9 = 5.1 V &gt; 5 V → <b>neither lights properly</b>.<br>• A LED has a max <i>continuous</i> current (typically 20–30 mA for 5 mm); pulsed rating higher.</div>
<div class="box hw"><b>Multimeter diode-test mode</b>Red probe on anode, black on cathode → displays V_f (~1.7–3.0 V) and LEDs even glow dimly; reversed → “OL”. Works to identify anode/cathode without any markings and to verify a diode isn't open or shorted.</div>
<p><b>Other uses:</b> indicators, displays (7-segment, matrices), IR remotes, optocouplers, grow lights, laser diodes, OLED (organic) displays.</p>`});

L({id:'c19', t:'PN Junctions, Diodes, Zener, Rectifiers & Transistors (BJT/MOSFET)', tier:'sn', yield:3, min:75, off:'States/Nat.: PN junctions (diodes, PNP, NPN)',
formulas:[
 ['Diode (ideal-ish)','Forward: V_D ≈ 0.6–0.7 V (Si), 0.2–0.3 V (Ge), 0.15–0.45 V (Schottky). Reverse: I ≈ 0 until breakdown'],
 ['Half-wave rectifier','Output peak = V_p − 0.7 V;  average (unfiltered) ≈ (V_p − 0.7)/π'],
 ['Zener regulator','R_s = (V_in − V_Z)/(I_Z + I_L)'],
 ['BJT current gain','I_C = β·I_B   (β = h_FE, 50–300);  I_E = I_B + I_C'],
 ['BJT KVL (Si)','V_BE ≈ 0.7 V (active/saturation);  V_CE(sat) ≈ 0.2 V'],
 ['Saturation (switch)','I_B ≥ I_C(sat)/β (use 2–10× margin: “forced beta” ≈ 10)'],
 ['Emitter follower','V_E = V_B − 0.7 V;  voltage gain ≈ 1']],
html:`
<div class="box unv"><b>Why this lesson matters (your regionals blind spot)</b>The 2026 manual lists “Basic electrical characteristics of silicon PN junctions (e.g., <b>diodes, PNP, NPN</b>)” as a <b>States/Nationals</b> topic, and the “Semiconductors beyond those listed” are <b>excluded</b>. But invitational and some regional writers ignore the tier labels, and SciOly's own practice PowerPoints include “PN Junctions” (#14) and “LEDs, Diodes and Operational Amplifiers” (#12). <b>Learn it so a transistor question never catches you again.</b></div>
<h2>1. Semiconductors &amp; the PN junction</h2>
<p><b>Silicon</b> (group IV, 4 valence electrons) is a poor conductor when pure. <b>Doping</b> creates: <b>N-type</b> (add phosphorus/arsenic: extra <i>electrons</i> = majority carriers) and <b>P-type</b> (add boron: <i>holes</i> = majority carriers). Join P and N: electrons diffuse to P, holes to N → a <b>depletion region</b> of immobile ions forms, creating a built-in barrier ≈ 0.7 V (Si) that stops further diffusion.</p>
<ul><li><b>Forward bias</b> (+ to P/anode, − to N/cathode): external V cancels the barrier; once V &gt; ≈ 0.7 V, current flows (exponentially).</li><li><b>Reverse bias</b>: barrier grows, depletion widens, only tiny leakage (nA–μA) until <b>breakdown</b> (avalanche/Zener).</li></ul>
<div class="eq">Diode equation (Shockley): I = I_S (e^(V/nV_T) − 1),  V_T = kT/q ≈ 25.9 mV at 300 K\nSilicon knee ≈ 0.6–0.7 V;  Germanium ≈ 0.2–0.3 V;  Schottky ≈ 0.15–0.45 V</div>
<h2>2. Diode types</h2>
<table><tr><th>Type</th><th>Key feature / use</th></tr>
<tr><td>Rectifier (1N4001–1N4007, 1 A; 50–1000 V PIV)</td><td>AC → DC; reverse-recovery ≈ μs; 1N4148 small-signal switching (4 ns)</td></tr>
<tr><td>Schottky</td><td>metal–semiconductor junction; low V_F, very fast; power supplies</td></tr>
<tr><td>Zener</td><td>designed to conduct in reverse at V_Z → voltage reference/regulator</td></tr>
<tr><td>LED</td><td>emits light (see LED lesson)</td></tr>
<tr><td>Photodiode / solar cell</td><td>light → current (reverse-biased/photovoltaic mode)</td></tr>
<tr><td>Varactor, tunnel, PIN, TVS</td><td>RF tuning / surge suppression etc.</td></tr></table>
<h2>3. Diode circuits (solve by “assume-and-check”)</h2>
<p>Guess each diode ON (replace with 0.7 V source) or OFF (open). Solve; check that ON diodes have I &gt; 0 and OFF diodes have V &lt; 0.7 V. If inconsistent, revise the guess.</p>
<div class="box ex"><b>Worked example</b>9 V source, 1 kΩ resistor, silicon diode forward: I = (9 − 0.7)/1000 = <b>8.3 mA</b>; V_R = 8.3 V. Reversed: I ≈ 0, V_R = 0, the diode takes the full 9 V.</div>
<ul><li><b>Half-wave rectifier:</b> one diode in series with the load on an AC source; passes positive half-cycles. Output peak = V_p − 0.7 V. <b>Full-wave bridge</b>: four diodes; two conduct at a time → output peak = V_p − 1.4 V, ripple at 2f. Add a <b>filter capacitor</b> for smoother DC.</li>
<li><b>Clamping/protection:</b> flyback diode across relay coil; reverse-polarity protection diode in series with a supply; diode OR’ing of supplies.</li>
<li><b>Zener regulator:</b> series R_s from V_in, Zener in parallel with the load: V_out ≈ V_Z. R_s = (V_in − V_Z)/(I_Z + I_L). Power: P_Z = V_Z·I_Z,max.</li></ul>
<h2>4. The Bipolar Junction Transistor (BJT)</h2>
<p><b>John Bardeen, Walter Brattain, William Shockley (1947–48, Bell Labs; Nobel 1956)</b>. A BJT has three terminals: <b>Emitter (E), Base (B), Collector (C)</b> and two junctions. <b>NPN</b> = N-P-N sandwich (arrow on emitter points <i>out</i>), <b>PNP</b> = P-N-P (arrow <i>in</i>).</p>
<svg class="dia" viewBox="0 0 420 230" width="420"><circle cx="110" cy="115" r="42" class="w"/><path class="w" d="M20 115 H85 M85 92 V138 M85 104 L125 76 V30 M85 126 L125 154 V200"/><path class="w" d="M105 146 L125 154 L113 136" fill="currentColor"/><text x="130" y="28">C</text><text x="130" y="210">E</text><text x="12" y="108">B</text><text x="60" y="222">NPN</text>
<circle cx="320" cy="115" r="42" class="w"/><path class="w" d="M230 115 H295 M295 92 V138 M295 104 L335 76 V30 M295 126 L335 154 V200"/><path class="w" d="M305 108 L296 106 L301 122" fill="currentColor"/><text x="340" y="28">E</text><text x="340" y="210">C</text><text x="222" y="108">B</text><text x="270" y="222">PNP</text></svg>
<div class="box key"><b>NPN as a switch / amplifier — the five rules</b>
<ol><li>Current flows in at C and B, out at E (NPN). Arrow on emitter = direction of conventional current.</li><li>The transistor turns on when <b>V_BE ≈ 0.7 V</b> (base must be 0.7 V above emitter).</li><li><b>I_E = I_B + I_C</b>;  <b>I_C = β·I_B</b> in the <b>active</b> region (β = h_FE ≈ 100 typical).</li><li><b>Cutoff:</b> V_BE &lt; 0.6 V → I_C ≈ 0 (switch OFF). <b>Saturation:</b> base overdriven → V_CE ≈ 0.2 V (switch ON, fully conducting). <b>Active:</b> in between (amplifier).</li><li><b>PNP</b> is the mirror image: emitter at the top (positive), turns on when base is 0.7 V <i>below</i> emitter; current flows <b>out</b> of the base.</li></ol></div>
<div class="box ex"><b>Worked example — transistor switch</b>A 12 V / 120 mA relay coil (or lamp) driven by a 2N3904 from a 5 V logic pin. Need I_B ≥ I_C/β_forced = 0.12/10 = 12 mA; R_B = (5 − 0.7)/0.012 ≈ 360 Ω → use 330 Ω (≈13 mA). Flyback diode across the coil.<br>Amplifier: β = 100, I_B = 50 μA → I_C = 5 mA; with R_C = 1 kΩ from 10 V: V_C = 10 − 5 = 5 V (active).</div>
<h3>Configurations</h3>
<table><tr><th>Config.</th><th>Input → output</th><th>Characteristics</th></tr>
<tr><td>Common emitter</td><td>B → C</td><td>voltage gain, <b>inverts</b> (180°)</td></tr><tr><td>Common collector (emitter follower)</td><td>B → E</td><td>gain ≈ 1, high input R, low output R (buffer)</td></tr><tr><td>Common base</td><td>E → C</td><td>RF/high-frequency amplifiers</td></tr></table>
<h3>Other transistors</h3>
<ul><li><b>FET/MOSFET:</b> voltage-controlled (gate, source, drain); practically zero gate current; N-channel turns on when V_GS &gt; V_th (~2–4 V; logic-level 1–2 V). Symbols: arrow direction on the body. JFET: depletion mode. <b>CMOS</b> = complementary NMOS+PMOS (logic).</li><li><b>Darlington pair:</b> two BJTs, β ≈ β₁β₂ (1000+), V_BE ≈ 1.4 V.</li><li><b>Phototransistor, IGBT, thyristor (SCR), triac</b> (AC dimmer).</li></ul>
<div class="box filter"><b>Tryout-filter</b>• “NPN base at 0 V: is the transistor on?” → No (cutoff). Base at 5 V through 1 kΩ from a 5 V logic source and E grounded: I_B ≈ 4.3 mA → on.<br>• “V_C of an NPN switch when ON?” ≈ 0.2 V; when OFF = V_supply.<br>• Identify NPN vs PNP from the arrow. • Which leg is emitter? (arrow).<br>• “A transistor with β = 200 has I_B = 25 μA. I_C?” → 5 mA; I_E = 5.025 mA.<br>• “Why is a base resistor needed?” → limits I_B (the B–E junction is a diode!).</div>
<div class="box hw"><b>Hands-on</b>With a multimeter in diode mode: for NPN, red on base / black on E or C → reads ≈ 0.6–0.7 V (two diodes back-to-back from the base); black on base / red on E or C → OL. This identifies the base and the type (swap probes for PNP). Always check the datasheet pinout (2N3904: flat side toward you, E-B-C; BC547: C-B-E).</div>`});

L({id:'c20', t:'Operational Amplifiers (Op-Amps)', tier:'sn', yield:3, min:65, off:'States/Nat.: op-amps',
formulas:[
 ['Golden rules (ideal)','1) V₊ = V₋ (with negative feedback)  2) I₊ = I₋ = 0'],
 ['Open loop','V_out = A_ol(V₊ − V₋), A_ol ≈ 10⁵–10⁶; output limited to supply rails'],
 ['Inverting','V_out = −(R_f/R_in)·V_in'],
 ['Non-inverting','V_out = (1 + R_f/R_g)·V_in'],
 ['Voltage follower','V_out = V_in (gain +1)'],
 ['Summing (inverting)','V_out = −R_f(V₁/R₁ + V₂/R₂ + …)'],
 ['Difference amp','V_out = (R_f/R₁)(V₂ − V₁) when R_f/R₁ = R_g/R₂'],
 ['Comparator','V_out = +V_sat if V₊>V₋ else −V_sat (no feedback)']],
html:`
<h2>1. What an op-amp is</h2>
<p>A high-gain <b>differential</b> voltage amplifier with two inputs — <b>non-inverting (+)</b> and <b>inverting (−)</b> — and one output, powered from ±V_s (e.g., ±12 V) or single supply. Symbol: triangle. Classic IC: <b>μA741</b> (Fairchild, 1968, designed by Dave Fullagar, after Bob Widlar’s 709), <b>LM358</b> (dual, single-supply), <b>LM324</b> (quad), TL071, LM741.</p>
<div class="eq">V_out = A_ol (V₊ − V₋),   A_ol ≈ 100 000+  →  (V₊ − V₋) ≈ 0 when feedback exists</div>
<div class="box key"><b>Golden rules (ideal op-amp with negative feedback)</b><ol><li><b>Inputs draw no current</b> (infinite input impedance).</li><li><b>The op-amp output does whatever it takes to make V₊ = V₋</b> (“virtual short”).</li><li>Output cannot exceed the supply rails (saturation; real outputs stop ≈ 1–2 V below rail unless “rail-to-rail”).</li></ol></div>
<h2>2. The five circuits you must know</h2>
<table><tr><th>Circuit</th><th>Gain</th><th>How to derive</th></tr>
<tr><td><b>Inverting amplifier</b> (V_in → R_in → (−) node; R_f from output to (−); (+) grounded)</td><td>−R_f/R_in</td><td>(−) is a <i>virtual ground</i>: I = V_in/R_in flows through R_f → V_out = −I·R_f</td></tr>
<tr><td><b>Non-inverting amplifier</b> (V_in to (+); R_f from out to (−); R_g from (−) to ground)</td><td>1 + R_f/R_g</td><td>V₋ = V_out·R_g/(R_g+R_f) = V_in</td></tr>
<tr><td><b>Voltage follower / buffer</b> (output tied to (−))</td><td>+1</td><td>impedance isolator: high in, low out</td></tr>
<tr><td><b>Summing amplifier</b></td><td>−R_f(Σ V_i/R_i)</td><td>KCL at virtual ground; used in DACs, mixers</td></tr>
<tr><td><b>Comparator</b> (no feedback, or positive feedback → Schmitt trigger)</td><td>±V_sat</td><td>output flips when V₊ crosses V₋</td></tr></table>
<div class="box ex"><b>Worked examples</b><br>Inverting: R_in = 10 kΩ, R_f = 47 kΩ, V_in = +0.5 V → V_out = −4.7 × 0.5 = <b>−2.35 V</b>.<br>Non-inverting: R_f = 90 kΩ, R_g = 10 kΩ → gain = 10; V_in = 0.3 V → <b>3.0 V</b>. If supplies are ±5 V and V_in = 0.8 V → would be 8 V → <b>clips at ≈ +5 V (saturation)</b>.<br>Difference of two sensors … use the difference amplifier.</div>
<h2>3. More circuits (beyond basics)</h2>
<ul><li><b>Integrator</b> (capacitor in feedback): V_out = −(1/RC)∫V_in dt — a DC input gives a ramp. <b>Differentiator</b> (capacitor in input) — calculus excluded from calculations but you should recognise them.</li><li><b>Schmitt trigger:</b> comparator with hysteresis (positive feedback): two thresholds → noise immunity.</li><li><b>Instrumentation amplifier:</b> 3 op-amps, high CMRR, for bridge/strain-gauge sensors.</li><li><b>Active filters</b> (excluded frequency analysis) and <b>oscillators</b>.</li></ul>
<h2>4. Real-world limits</h2>
<ul><li><b>Gain-bandwidth product</b> (741 ≈ 1 MHz): gain × bandwidth is constant.</li><li><b>Slew rate</b> (V/μs), <b>input offset voltage</b> (mV), <b>input bias current</b>, <b>CMRR</b>, <b>output current limit</b>.</li><li>Supplies: dual (±) or single; don't exceed rating; decoupling capacitors (0.1 μF).</li></ul>
<div class="box filter"><b>Tryout-filter</b>• “Op-amp with no feedback, V₊ = 1.2 V, V₋ = 1.0 V, rails ±12 V” → output ≈ <b>+12 V</b> (actually +10–11 V).<br>• “Gain of a non-inverting amp with R_f = 0?” → 1 (follower). • “What is the input current of an ideal op-amp?” → 0.<br>• “Why is the − input called a virtual ground in an inverting amplifier with + grounded?” → the feedback keeps it at ≈0 V though not physically grounded.</div>
<div class="box hw"><b>Pin-out (8-pin DIP, e.g., 741)</b>Pin 2 = inverting (−), 3 = non-inverting (+), 6 = output, 7 = V+, 4 = V−, 1 &amp; 5 = offset null, 8 = NC; notch/dot marks pin 1; count counterclockwise from the notch.</div>`});

L({id:'c21', t:'Digital Logic, Binary & Logic-Gate Circuits', tier:'xtra', yield:2, min:50, off:'SciOly practice #15 (beyond listed topics)',
formulas:[
 ['Gates','AND: A·B · OR: A+B · NOT: Ā · NAND: (AB)′ · NOR: (A+B)′ · XOR: A⊕B · XNOR'],
 ['De Morgan','(A·B)′ = A′ + B′;   (A+B)′ = A′·B′'],
 ['Binary → decimal','Σ bit × 2ⁿ (LSB n=0)'],
 ['Number of combinations','2ⁿ for n inputs'],
 ['TTL levels','LOW ≤ 0.8 V, HIGH ≥ 2.0 V (5 V logic)']],
html:`
<div class="box unv"><b>Status check</b>Digital logic is <b>not</b> on the 2026 written-topic list, and there's a <b>practice PowerPoint #15 “Digital Logic”</b> on the soinc.org Circuit Lab page. Previous seasons (and some invitationals) included logic-gate circuits in the hands-on portion. Treat as <b>insurance</b>: it's quick to master.</div>
<h2>1. Binary &amp; logic levels</h2>
<p>Digital circuits use two levels: <b>HIGH (1, ~V_cc)</b> and <b>LOW (0, ~0 V)</b>. TTL (5 V): LOW ≤ 0.8 V, HIGH ≥ 2.0 V; 74HC CMOS works 2–6 V; 3.3 V logic (modern). Binary place values: 128 64 32 16 8 4 2 1. <b>1011₂ = 8+2+1 = 11₁₀</b>. Hex: 0–9, A–F (A = 10 … F = 15): 0xFF = 255.</p>
<h2>2. Gates &amp; truth tables</h2>
<table><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>NAND</th><th>NOR</th><th>XOR</th><th>XNOR</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></table>
<p><b>NOT</b> (inverter): 0↔1. <b>NAND and NOR are “universal”</b>: any logic can be built from NANDs only. AND symbol = flat back D shape; OR = curved back with pointed front; a <b>bubble</b> on the output/inputs = inversion.</p>
<h2>3. Switch/transistor implementation</h2>
<ul><li><b>Series switches = AND</b> (light ON only if both closed). <b>Parallel switches = OR.</b> A relay with NC contact = NOT.</li><li>Transistor inverter: NPN + pull-up resistor: input HIGH → transistor ON → output LOW.</li><li>NAND gate with two series NPNs; NOR with two parallel. CMOS uses complementary pairs.</li></ul>
<h2>4. Boolean algebra basics</h2>
<div class="eq">A + 0 = A     A · 1 = A     A + A′ = 1     A · A′ = 0\nA + AB = A     A(A + B) = A     A + A′B = A + B\nDe Morgan: (AB)′ = A′ + B′ ,  (A + B)′ = A′B′</div>
<div class="box ex"><b>Example</b>Output = (A AND B) OR (NOT C) for A=1, B=0, C=1 → (0) OR (0) = <b>0</b>. XOR from gates: A⊕B = (A+B)(AB)′. Half-adder: Sum = A⊕B, Carry = A·B.</div>
<h2>5. Hands-on with logic ICs</h2>
<p>74xx/40xx chips: pin 14 = V_cc, pin 7 = GND (14-pin DIP). <b>Unused inputs must be tied</b> HIGH/LOW (floating inputs behave randomly). Use a pull-up (10 kΩ to V_cc) or pull-down resistor on switch inputs. LED + resistor (330 Ω) as the output indicator (don't source/sink too much — CMOS ~20 mA per pin max, TTL sources only ~0.4 mA!). Common ICs: 7400 (quad NAND), 7402 (NOR), 7404 (hex inverter), 7408 (AND), 7432 (OR), 7486 (XOR), 555 timer (astable/monostable: f = 1.44/((R₁+2R₂)C)), 74HC595 shift register.</p>
<div class="box filter"><b>Tryout-filter</b>• “NAND with both inputs tied together behaves like…” → NOT. • “How many rows in a 4-input truth table?” → 16. • “What logic function do two switches in series implement?” → AND.</div>`});
