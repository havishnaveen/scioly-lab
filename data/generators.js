/* ===== RANDOMIZED PROBLEM GENERATORS (infinite drill) ===== */
/* Each fn(R) returns {q, ans, unit, exp, tol?} ; R = {int(a,b), pick(arr), float(a,b,dec)} */
const sf = (x, n) => Number(Number(x).toPrecision(n || 3));
const E12 = [10,12,15,18,22,27,33,39,47,56,68,82];
const E24 = [10,11,12,13,15,16,18,20,22,24,27,30,33,36,39,43,47,51,56,62,68,75,82,91];
function fmtR(o){ if(o>=1e6) return sf(o/1e6,3)+' MΩ'; if(o>=1e3) return sf(o/1e3,3)+' kΩ'; return sf(o,3)+' Ω'; }
const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','gray','white'];

/* ---------- CIRCUIT ---------- */
G('g_ohm','c03',1,'Ohm’s law (solve for V, I or R)',R=>{
  const I=R.pick([0.02,0.05,0.1,0.25,0.5,1,2,3]), Rr=R.pick([10,22,47,100,220,330,470,1000,2200]);
  const V=sf(I*Rr,3); const k=R.int(0,2);
  if(k===0) return {q:`A ${Rr} Ω resistor carries ${I} A. What is the voltage across it (V)?`,ans:V,unit:'V',exp:`V = IR = ${I}×${Rr} = ${V} V.`};
  if(k===1) return {q:`${V} V is applied across a ${Rr} Ω resistor. What current flows (A)?`,ans:I,unit:'A',exp:`I = V/R = ${V}/${Rr} = ${I} A.`};
  return {q:`A resistor has ${V} V across it while carrying ${I} A. What is its resistance (Ω)?`,ans:Rr,unit:'Ω',exp:`R = V/I = ${V}/${I} = ${Rr} Ω.`};
});
G('g_power','c03',2,'Power P = VI = I²R = V²/R',R=>{
  const k=R.int(0,2);
  if(k===0){const V=R.pick([5,9,12,24,120]),Rr=R.pick([10,47,100,220,1000]);const P=sf(V*V/Rr,3);return {q:`${V} V is applied across a ${Rr} Ω resistor. Power dissipated (W)?`,ans:P,unit:'W',exp:`P = V²/R = ${V*V}/${Rr} = ${P} W.`};}
  if(k===1){const I=R.pick([0.1,0.2,0.5,1,2,5]),Rr=R.pick([2,10,47,100]);const P=sf(I*I*Rr,3);return {q:`A ${Rr} Ω resistor carries ${I} A. Power dissipated (W)?`,ans:P,unit:'W',exp:`P = I²R = ${I*I}×${Rr} = ${P} W.`};}
  const P0=R.pick([40,60,75,100]),V=R.pick([120,230]);const Rr=sf(V*V/P0,3);return {q:`A ${P0} W lamp is designed for ${V} V. Its operating resistance (Ω)?`,ans:Rr,unit:'Ω',exp:`R = V²/P = ${V*V}/${P0} = ${Rr} Ω.`};
});
G('g_kwh','c03',2,'Energy cost (kWh)',R=>{
  const P=R.pick([100,500,800,1000,1500,2000]),h=R.pick([2,3,4,5,8]),rate=R.pick([0.10,0.12,0.15,0.20]);
  const cost=sf(P/1000*h*rate,3);return {q:`A ${P} W appliance runs ${h} h. Electricity costs $${rate.toFixed(2)}/kWh. Cost ($)?`,ans:cost,unit:'$',exp:`${P/1000} kW × ${h} h × ${rate} = $${cost}.`};
});
G('g_series','c05',1,'Series resistance',R=>{
  const a=R.pick(E12)*R.pick([1,10,100]),b=R.pick(E12)*R.pick([1,10,100]),c=R.pick(E12)*R.pick([1,10,100]);
  return {q:`Resistors of ${fmtR(a)}, ${fmtR(b)} and ${fmtR(c)} are in series. Total resistance (Ω)?`,ans:a+b+c,unit:'Ω',exp:`Sum = ${a+b+c} Ω.`};
});
G('g_par2','c05',2,'Two resistors in parallel',R=>{
  const a=R.pick(E12)*R.pick([10,100]),b=R.pick(E12)*R.pick([10,100]);const r=sf(a*b/(a+b),3);
  return {q:`${fmtR(a)} in parallel with ${fmtR(b)}. Equivalent resistance (Ω)?`,ans:r,unit:'Ω',exp:`R = ab/(a+b) = ${a}×${b}/${a+b} = ${r} Ω.`};
});
G('g_par3','c05',2,'Three in parallel',R=>{
  const a=R.pick([10,20,30,60,100]),b=R.pick([10,20,30,60,100]),c=R.pick([10,20,30,60,100]);const r=sf(1/(1/a+1/b+1/c),3);
  return {q:`${a} Ω, ${b} Ω and ${c} Ω are in parallel. Equivalent resistance (Ω)?`,ans:r,unit:'Ω',exp:`1/R = 1/${a}+1/${b}+1/${c} → R = ${r} Ω.`};
});
G('g_combo','c05',3,'Series + parallel combination',R=>{
  const a=R.pick([2,4,5,10,20]),b=R.pick([6,12,15,30]),c=R.pick([6,12,15,30]);const r=sf(a+b*c/(b+c),3);
  return {q:`${a} Ω in series with (${b} Ω ∥ ${c} Ω). Total resistance (Ω)?`,ans:r,unit:'Ω',exp:`${b}∥${c} = ${sf(b*c/(b+c),3)}; total = ${r} Ω.`};
});
G('g_div','c05',2,'Voltage divider',R=>{
  const V=R.pick([5,9,12,15,24]),r1=R.pick([1,2,4.7,10,22])*1000,r2=R.pick([1,2,3.3,10,47])*1000;const vo=sf(V*r2/(r1+r2),3);
  return {q:`A ${V} V source feeds R₁ = ${fmtR(r1)} in series with R₂ = ${fmtR(r2)} (unloaded). Voltage across R₂ (V)?`,ans:vo,unit:'V',exp:`V = ${V}×${r2}/${r1+r2} = ${vo} V.`};
});
G('g_idiv','c05',2,'Current divider',R=>{
  const I=R.pick([2,3,6,9,12]),a=R.pick([2,3,4,6]),b=R.pick([4,6,12]);const i1=sf(I*b/(a+b),3);
  return {q:`${I} A enters two parallel resistors: ${a} Ω and ${b} Ω. Current through the ${a} Ω (A)?`,ans:i1,unit:'A',exp:`I₁ = ${I}×${b}/${a+b} = ${i1} A.`};
});
G('g_color4','c04',2,'4-band resistor color code',R=>{
  const base=R.pick(E24),m=R.int(0,5),tolC=R.pick([['gold',5],['silver',10]]);const val=base*Math.pow(10,m);
  const d1=Math.floor(base/10),d2=base%10;
  return {q:`Resistor bands: ${COLORS[d1]} – ${COLORS[d2]} – ${COLORS[m]} – ${tolC[0]}. Resistance (Ω)?`,ans:val,unit:'Ω',tol:0.01,exp:`${d1}${d2} × 10^${m} = ${fmtR(val)} ±${tolC[1]} %.`};
});
G('g_color5','c04',3,'5-band resistor color code',R=>{
  const base=R.pick([100,120,150,200,220,330,470,510,680,750,910]),m=R.int(0,4);const val=base*Math.pow(10,m);
  const d=String(base).split('').map(Number);
  return {q:`5-band resistor: ${COLORS[d[0]]} – ${COLORS[d[1]]} – ${COLORS[d[2]]} – ${COLORS[m]} – brown. Resistance (Ω)?`,ans:val,unit:'Ω',tol:0.01,exp:`${base} × 10^${m} = ${fmtR(val)} ±1 %.`};
});
G('g_rctau','c02',2,'RC time constant',R=>{
  const r=R.pick([1,2.2,4.7,10,47,100])*1000,c=R.pick([1,4.7,10,47,100,220]);const tau=sf(r*c*1e-6,3);
  return {q:`R = ${fmtR(r)}, C = ${c} μF. Time constant τ (s)?`,ans:tau,unit:'s',exp:`τ = RC = ${r}×${c}×10⁻⁶ = ${tau} s.`};
});
G('g_rcv','c02',3,'RC charging voltage',R=>{
  const V=R.pick([5,9,12]),r=R.pick([1,10,100])*1000,c=R.pick([10,47,100]),tau=r*c*1e-6,t=sf(tau*R.pick([0.5,1,2,3]),3);
  const v=sf(V*(1-Math.exp(-t/tau)),3);
  return {q:`An uncharged ${c} μF capacitor charges from ${V} V through ${fmtR(r)}. Capacitor voltage at t = ${t} s (V)?`,ans:v,unit:'V',tol:0.03,exp:`τ = ${sf(tau,3)} s; v = ${V}(1 − e^(−${t}/${sf(tau,3)})) = ${v} V.`};
});
G('g_cap','c02',2,'Capacitor combos & energy',R=>{
  const k=R.int(0,2),a=R.pick([4.7,10,22,47,100]),b=R.pick([10,22,47,100,220]);
  if(k===0) return {q:`${a} μF and ${b} μF in series. Equivalent (μF)?`,ans:sf(a*b/(a+b),3),unit:'μF',exp:`C = ab/(a+b).`};
  if(k===1) return {q:`${a} μF and ${b} μF in parallel. Equivalent (μF)?`,ans:a+b,unit:'μF',exp:`Parallel capacitances add.`};
  const V=R.pick([5,9,12,24]);return {q:`Energy (mJ) stored in a ${b} μF capacitor charged to ${V} V?`,ans:sf(0.5*b*1e-6*V*V*1000,3),unit:'mJ',exp:`½CV² = ${sf(0.5*b*1e-6*V*V*1000,3)} mJ.`};
});
G('g_coul','c01',2,'Coulomb’s law',R=>{
  const q1=R.pick([1,2,3,5,10]),q2=R.pick([1,2,4,6,8]),r=R.pick([0.05,0.1,0.2,0.5,1]);const F=sf(8.99e9*q1*q2*1e-12/(r*r),3);
  return {q:`Point charges ${q1} μC and ${q2} μC are ${r} m apart. Force magnitude (N)? (k = 8.99×10⁹)`,ans:F,unit:'N',tol:0.03,exp:`F = kq₁q₂/r² = ${F} N.`};
});
G('g_xfmr','c13',2,'Transformer ratio',R=>{
  const Np=R.pick([100,200,500,1000]),ns=R.pick([10,20,50,100,250,2000]),Vp=R.pick([12,24,120,230]),Is=R.pick([0.5,1,2,5]);const Vs=sf(Vp*ns/Np,3),Ip=sf(Vs*Is/Vp,3);
  const k=R.int(0,1);
  if(k===0) return {q:`Ideal transformer: N_p = ${Np}, N_s = ${ns}, V_p = ${Vp} V. Secondary voltage (V)?`,ans:Vs,unit:'V',exp:`V_s = V_p N_s/N_p = ${Vs} V.`};
  return {q:`Ideal transformer: N_p = ${Np}, N_s = ${ns}, V_p = ${Vp} V, secondary current ${Is} A. Primary current (A)?`,ans:Ip,unit:'A',exp:`V_s = ${Vs} V; P = ${sf(Vs*Is,3)} W; I_p = P/V_p = ${Ip} A.`};
});
G('g_batt','c06',2,'Terminal voltage with internal resistance',R=>{
  const e=R.pick([1.5,3,6,9,12]),r=R.pick([0.1,0.5,1,2]),RL=R.pick([4,8,10,16,25]);const I=e/(r+RL),Vt=sf(e-I*r,3);
  return {q:`A ${e} V source with ${r} Ω internal resistance drives a ${RL} Ω load. Terminal voltage (V)?`,ans:Vt,unit:'V',tol:0.02,exp:`I = ${sf(I,3)} A; V_t = ε − Ir = ${Vt} V.`};
});
G('g_led','c18',2,'LED series resistor',R=>{
  const Vs=R.pick([3.3,5,9,12]),Vf=R.pick([1.8,2.0,2.1,3.2]),I=R.pick([10,15,20]);if(Vs<=Vf+0.5)return G._retry;
  const r=sf((Vs-Vf)/(I/1000),3);return {q:`LED V_f = ${Vf} V, I_f = ${I} mA, supply ${Vs} V. Series resistor (Ω)?`,ans:r,unit:'Ω',tol:0.02,exp:`R = (${Vs} − ${Vf})/${I/1000} = ${r} Ω (use nearest E12 above).`};
});
G('g_bjt','c19',2,'BJT currents',R=>{
  const b=R.pick([50,100,150,200,300]),Ib=R.pick([10,20,50,100]);const Ic=sf(b*Ib/1000,3);
  return {q:`β = ${b}, I_B = ${Ib} μA. Collector current (mA)?`,ans:Ic,unit:'mA',exp:`I_C = βI_B = ${Ic} mA.`};
});
G('g_bjtrb','c19',3,'Base resistor for transistor switch',R=>{
  const Vin=R.pick([3.3,5,9]),Ic=R.pick([50,100,200,500]),bf=R.pick([10,20]);const Ib=Ic/bf,Rb=sf((Vin-0.7)/(Ib/1000),3);
  return {q:`NPN switch: load current ${Ic} mA, forced β = ${bf}, drive voltage ${Vin} V, V_BE = 0.7 V. Base resistor (Ω)?`,ans:Rb,unit:'Ω',tol:0.03,exp:`I_B = ${Ic}/${bf} = ${Ib} mA; R_B = (${Vin} − 0.7)/${Ib/1000} = ${Rb} Ω.`};
});
G('g_opamp','c20',2,'Op-amp gain',R=>{
  const rin=R.pick([1,2.2,4.7,10])*1000,rf=R.pick([10,22,47,100])*1000,Vin=R.pick([0.1,0.2,0.3,0.5]);const k=R.int(0,1);
  if(k===0) return {q:`Inverting amp: R_in = ${fmtR(rin)}, R_f = ${fmtR(rf)}, V_in = ${Vin} V. V_out (V) (supplies ±15 V)?`,ans:sf(-rf/rin*Vin,3),unit:'V',tol:0.02,exp:`V_out = −(R_f/R_in)V_in.`};
  return {q:`Non-inverting amp: R_f = ${fmtR(rf)}, R_g = ${fmtR(rin)}, V_in = ${Vin} V (supplies ±15 V). V_out (V)?`,ans:sf((1+rf/rin)*Vin,3),unit:'V',tol:0.02,exp:`V_out = (1 + R_f/R_g)V_in.`};
});
G('g_thev','c08',3,'Thevenin equivalent of a divider',R=>{
  const V=R.pick([12,18,24]),a=R.pick([2,3,6]),b=R.pick([3,6,12]);const vth=sf(V*b/(a+b),3),rth=sf(a*b/(a+b),3);const k=R.int(0,1);
  return k===0?{q:`${V} V source → ${a} Ω in series → node; ${b} Ω from node to ground. Thevenin voltage at the node (V)?`,ans:vth,unit:'V',exp:`V_th = ${V}×${b}/${a+b} = ${vth} V.`}:{q:`Same network: Thevenin resistance seen at the node (Ω)?`,ans:rth,unit:'Ω',exp:`R_th = ${a}∥${b} = ${rth} Ω.`,q2:0};
});
G('g_bridge','c08',3,'Balanced Wheatstone bridge',R=>{
  const r1=R.pick([100,200,500,1000]),r2=R.pick([100,200,500,2000]),r3=R.pick([150,300,470,1000]);const rx=sf(r2*r3/r1,3);
  return {q:`Balanced bridge (R₁/R₂ = R₃/R_x): R₁ = ${r1} Ω, R₂ = ${r2} Ω, R₃ = ${r3} Ω. R_x (Ω)?`,ans:rx,unit:'Ω',exp:`R_x = R₂R₃/R₁ = ${rx} Ω.`};
});
G('g_rms','c10',2,'AC rms/peak',R=>{
  const k=R.int(0,2),V=R.pick([12,24,120,230,240]);
  if(k===0) return {q:`Peak voltage (V) of a ${V} V rms sine wave?`,ans:sf(V*Math.SQRT2,3),unit:'V',exp:`V_p = 1.414×V_rms.`};
  if(k===1) return {q:`A sine wave has a peak of ${V} V. rms value (V)?`,ans:sf(V/Math.SQRT2,3),unit:'V',exp:`V_rms = V_p/√2.`};
  const f=R.pick([50,60,400]);return {q:`Period (ms) of ${f} Hz AC?`,ans:sf(1000/f,3),unit:'ms',exp:`T = 1/f.`};
});
G('g_bil','c11',2,'Force on a wire F = BIL',R=>{
  const B=R.pick([0.1,0.2,0.5,1]),I=R.pick([1,2,5,10]),L=R.pick([0.1,0.2,0.5,1]);const F=sf(B*I*L,3);
  return {q:`A ${L} m wire carries ${I} A perpendicular to a ${B} T field. Force (N)?`,ans:F,unit:'N',exp:`F = BIL = ${F} N.`};
});
G('g_sol','c11',3,'Solenoid field',R=>{
  const N=R.pick([100,200,500,1000]),L=R.pick([0.05,0.1,0.2]),I=R.pick([0.5,1,2]);const B=sf(4e-7*Math.PI*N/L*I*1000,3);
  return {q:`Air-core solenoid: N = ${N} turns, length ${L} m, current ${I} A. B inside (mT)? (μ₀ = 4π×10⁻⁷)`,ans:B,unit:'mT',tol:0.03,exp:`B = μ₀NI/L = ${B} mT.`};
});
G('g_motor','c14',2,'Motor stall/run current',R=>{
  const V=R.pick([6,9,12,24]),r=R.pick([1,2,3,5]),eb=sf(V*R.pick([0.5,0.6,0.75,0.8]),3);
  return R.int(0,1)?{q:`${V} V DC motor, armature R = ${r} Ω. Stalled current (A)?`,ans:sf(V/r,3),unit:'A',exp:`No back-EMF: I = V/R.`}:{q:`${V} V DC motor, armature R = ${r} Ω, running with back-EMF ${eb} V. Current (A)?`,ans:sf((V-eb)/r,3),unit:'A',exp:`I = (V − ε_b)/R.`};
});
G('g_meterload','c23',3,'Voltmeter loading',R=>{
  const V=R.pick([5,10,12]),r=R.pick([100,470,1000])*1000;const rm=10e6;const lower=1/(1/r+1/rm),vr=sf(V*lower/(r+lower),3);
  return {q:`A ${V} V source feeds a divider of two equal ${fmtR(r)} resistors. A 10 MΩ voltmeter reads across the lower one. Reading (V)?`,ans:vr,unit:'V',tol:0.02,exp:`R_lower∥10M = ${sf(lower,4)} Ω → V = ${vr} V (ideal ${V/2} V).`};
});
G('g_usb','c06',3,'Battery charge time',R=>{
  const mAh=R.pick([2000,3000,4000,5000]),Vb=R.pick([3.7]),Vc=R.pick([5,9]),Ic=R.pick([1,2,3]),eff=R.pick([0.8,0.85,0.9]);const E=mAh/1000*Vb,P=Vc*Ic;const t=sf(E/(P*eff),3);
  return {q:`Charge a ${mAh} mAh, ${Vb} V battery from a ${Vc} V, ${Ic} A charger at ${Math.round(eff*100)} % efficiency. Time (h)?`,ans:t,unit:'h',tol:0.03,exp:`E = ${sf(E,3)} Wh; P = ${P} W; t = E/(Pη) = ${t} h.`};
});
G('g_zener','c19',3,'Zener series resistor',R=>{
  const Vin=R.pick([9,12,15]),Vz=R.pick([3.3,5.1,6.2]),Il=R.pick([10,20,30]),Iz=R.pick([5,10]);const rs=sf((Vin-Vz)/((Il+Iz)/1000),3);
  return {q:`Zener regulator: V_in = ${Vin} V, V_Z = ${Vz} V, load ${Il} mA, Zener bias ${Iz} mA. Series resistor (Ω)?`,ans:rs,unit:'Ω',tol:0.03,exp:`R_s = (${Vin} − ${Vz})/${(Il+Iz)/1000} = ${rs} Ω.`};
});
G('g_faraday','c13',2,'Faraday’s law',R=>{
  const N=R.pick([50,100,200,500]),dPhi=R.pick([0.01,0.02,0.05]),dt=R.pick([0.1,0.2,0.5]);const e=sf(N*dPhi/dt,3);
  return {q:`A ${N}-turn coil sees a flux change of ${dPhi} Wb in ${dt} s. Average EMF (V)?`,ans:e,unit:'V',exp:`ε = NΔΦ/Δt = ${e} V.`};
});
G('g_relay','c15',1,'Relay coil current',R=>{
  const V=R.pick([5,12,24]),r=R.pick([50,120,400,720]);const I=sf(V/r*1000,3);
  return {q:`A ${V} V relay has a coil resistance of ${r} Ω. Coil current (mA)?`,ans:I,unit:'mA',exp:`I = V/R = ${I} mA.`};
});
G('g_mystery','c22',3,'Mystery resistor from voltages only',R=>{
  const Vs=R.pick([5,9,12]),Rk=R.pick([470,1000,2200,4700]),Rx=R.pick([330,680,1500,3300,6800,10000]);const Vk=Vs*Rk/(Rk+Rx);
  return {q:`Series loop: known ${Rk} Ω and unknown R_x across ${Vs} V. Voltage across the known resistor measured as ${sf(Vk,3)} V. R_x (Ω)?`,ans:Rx,unit:'Ω',tol:0.03,exp:`R_x = R_k(V_s − V_k)/V_k = ${Rk}×${sf(Vs-Vk,3)}/${sf(Vk,3)} ≈ ${Rx} Ω.`};
});
G('g_binary','c21',1,'Binary ↔ decimal',R=>{
  const n=R.int(5,200);return R.int(0,1)?{q:`Convert binary ${n.toString(2)} to decimal.`,ans:n,unit:'',tol:0.001,exp:`Sum of place values = ${n}.`}:{q:`Convert decimal ${n} to binary (enter the number of 1-bits).`,ans:n.toString(2).split('1').length-1,unit:'',tol:0.001,exp:`${n} = ${n.toString(2)}₂ has ${n.toString(2).split('1').length-1} ones.`};
});

/* ---------- THERMO ---------- */
G('g_tconv','t01',1,'Temperature conversions',R=>{
  const k=R.int(0,3);
  if(k===0){const F=R.pick([32,50,68,86,100,104,212,-4,14]);return {q:`Convert ${F} °F to °C.`,ans:sf((F-32)/1.8,3),unit:'°C',tol:0.01,exp:`(${F} − 32)/1.8.`};}
  if(k===1){const C=R.pick([-40,-10,0,15,25,37,80,100]);return {q:`Convert ${C} °C to °F.`,ans:sf(1.8*C+32,3),unit:'°F',tol:0.01,exp:`1.8×${C} + 32.`};}
  if(k===2){const C=R.pick([-196,-78.5,0,20,100,327]);return {q:`Convert ${C} °C to kelvin.`,ans:sf(C+273.15,4),unit:'K',tol:0.002,exp:`K = °C + 273.15.`};}
  const K=R.pick([77,195,250,300,373.15,500]);return {q:`Convert ${K} K to °F.`,ans:sf((K-273.15)*1.8+32,3),unit:'°F',tol:0.01,exp:`(${K} − 273.15)×1.8 + 32.`};
});
const MAT={water:4.184,ice:2.09,aluminum:0.897,copper:0.385,iron:0.449,glass:0.84,lead:0.129,silver:0.235,ethanol:2.44,mercury:0.140};
G('g_q','t03',2,'Q = mcΔT',R=>{
  const mat=R.pick(Object.keys(MAT)),m=R.pick([50,100,200,250,500]),T1=R.pick([10,15,20,25]),T2=R.pick([50,60,80,90]);const Q=sf(m*MAT[mat]*(T2-T1),3);
  return {q:`Heat (J) needed to warm ${m} g of ${mat} (c = ${MAT[mat]} J/g·K) from ${T1} °C to ${T2} °C?`,ans:Q,unit:'J',tol:0.02,exp:`Q = mcΔT = ${m}×${MAT[mat]}×${T2-T1} = ${Q} J.`};
});
G('g_mix','t03',2,'Mixing water samples',R=>{
  const m1=R.pick([100,150,200,300]),m2=R.pick([100,200,250,400]),T1=R.pick([60,70,80,90]),T2=R.pick([10,15,20,25]);const T=sf((m1*T1+m2*T2)/(m1+m2),3);
  return {q:`${m1} g of water at ${T1} °C is mixed with ${m2} g of water at ${T2} °C (insulated). Final temperature (°C)?`,ans:T,unit:'°C',tol:0.01,exp:`T = (m₁T₁ + m₂T₂)/(m₁+m₂) = ${T} °C.`};
});
G('g_metalwater','t03',3,'Hot metal into water',R=>{
  const met=R.pick(['copper','iron','aluminum','lead']),mm=R.pick([100,150,200,300]),Tm=R.pick([100,200,300]),mw=R.pick([200,300,500]),Tw=R.pick([15,20,25]);
  const cm=MAT[met],T=sf((mm*cm*Tm+mw*4.184*Tw)/(mm*cm+mw*4.184),3);
  return {q:`A ${mm} g ${met} block (c = ${cm} J/g·K) at ${Tm} °C is dropped into ${mw} g of water at ${Tw} °C. Final temperature (°C)? (no losses)`,ans:T,unit:'°C',tol:0.01,exp:`T = (m_m c_m T_m + m_w c_w T_w)/(m_m c_m + m_w c_w) = ${T} °C.`};
});
G('g_latent','t04',2,'Latent heat',R=>{
  const m=R.pick([20,50,100,250]),k=R.int(0,1);
  return k===0?{q:`Heat (kJ) to melt ${m} g of ice at 0 °C? (L_f = 334 J/g)`,ans:sf(m*334/1000,3),unit:'kJ',tol:0.02,exp:`Q = mL_f = ${sf(m*334/1000,3)} kJ.`}:{q:`Heat (kJ) to vaporize ${m} g of water already at 100 °C? (L_v = 2256 J/g)`,ans:sf(m*2256/1000,3),unit:'kJ',tol:0.02,exp:`Q = mL_v = ${sf(m*2256/1000,3)} kJ.`};
});
G('g_heatcurve','t04',3,'Heating curve steps',R=>{
  const m=R.pick([50,100,200]),T0=R.pick([-30,-20,-10]),Tf=R.pick([110,120,150]);
  const Q=m*2.09*(0-T0)+m*334+m*4.184*100+m*2256+m*2.01*(Tf-100);
  return {q:`Heat (kJ) to convert ${m} g of ice at ${T0} °C to steam at ${Tf} °C? (c_ice 2.09, c_water 4.184, c_steam 2.01 J/g·K; L_f 334, L_v 2256 J/g)`,ans:sf(Q/1000,3),unit:'kJ',tol:0.02,exp:`Sum of 5 steps = ${sf(Q/1000,4)} kJ.`};
});
G('g_iceadd','t04',3,'Ice added to hot water',R=>{
  const mw=R.pick([100,150,200]),Tw=R.pick([60,70,80]),mi=R.pick([10,15,20]);const T=(mw*4.184*Tw-mi*334)/(mw*4.184+mi*4.184);
  if(T<=0) return G._retry;
  return {q:`${mi} g of ice at 0 °C is added to ${mw} g of water at ${Tw} °C (insulated). Final temperature (°C)?`,ans:sf(T,3),unit:'°C',tol:0.02,exp:`${mw}×4.184(${Tw} − T) = ${mi}×334 + ${mi}×4.184T → T = ${sf(T,3)} °C.`};
});
G('g_cond','t05',3,'Conduction heat flow',R=>{
  const k=R.pick([0.026,0.035,0.04,0.15,1.0,50]),A=R.pick([0.01,0.02,0.05,0.1]),dT=R.pick([10,20,40,50]),L=R.pick([0.01,0.02,0.05]);const P=sf(k*A*dT/L,3);
  return {q:`Heat flow (W) through k = ${k} W/m·K, A = ${A} m², L = ${L} m, ΔT = ${dT} K?`,ans:P,unit:'W',tol:0.02,exp:`P = kAΔT/L = ${P} W.`};
});
G('g_rlayers','t05',3,'Layered wall R and heat loss',R=>{
  const L1=R.pick([0.05,0.1,0.12]),k1=R.pick([0.12,0.15,0.6]),L2=R.pick([0.03,0.05,0.1]),k2=R.pick([0.025,0.035,0.04]),A=R.pick([5,10,20]),dT=R.pick([10,20,30]);
  const Rt=L1/k1+L2/k2,P=sf(A*dT/Rt,3);
  return {q:`Wall: ${L1*100} cm of k = ${k1} material then ${L2*100} cm of k = ${k2} insulation, area ${A} m², ΔT = ${dT} K. Heat loss (W)?`,ans:P,unit:'W',tol:0.02,exp:`R = ${sf(L1/k1,3)} + ${sf(L2/k2,3)} = ${sf(Rt,3)} m²K/W; P = AΔT/R = ${P} W.`};
});
G('g_rad','t06',3,'Radiation εσAT⁴',R=>{
  const e=R.pick([0.05,0.3,0.8,0.95,1]),A=R.pick([0.01,0.02,0.05,0.1]),T=R.pick([350,400,600,800,1000]),Te=R.pick([0,293]);
  const P=e*5.67e-8*A*(Math.pow(T,4)-Math.pow(Te,4));
  return {q:`${Te?'Net radiated power':'Radiated power'} (W) from a surface: ε = ${e}, A = ${A} m², T = ${T} K${Te?`, surroundings ${Te} K`:''}? (σ = 5.67×10⁻⁸)`,ans:sf(P,3),unit:'W',tol:0.03,exp:`P = εσA(T⁴${Te?' − T_env⁴':''}) = ${sf(P,3)} W.`};
});
G('g_wien','t07',2,'Wien displacement law',R=>{
  const T=R.pick([300,1000,2800,3000,5772,10000]);const l=2.898e-3/T*1e9;
  return {q:`Peak blackbody wavelength (nm) at T = ${T} K? (b = 2.898×10⁻³ m·K)`,ans:sf(l,3),unit:'nm',tol:0.02,exp:`λ = b/T = ${sf(l,3)} nm.`};
});
G('g_exit','t07',2,'Stefan–Boltzmann exitance',R=>{
  const T=R.pick([300,500,1000,2000,5772]);return {q:`Blackbody radiant exitance (kW/m²) at ${T} K?`,ans:sf(5.67e-8*Math.pow(T,4)/1000,3),unit:'kW/m²',tol:0.02,exp:`M = σT⁴.`};
});
G('g_newtonpred','t08',3,'Newton cooling prediction',R=>{
  const T0=R.pick([65,70,75,80]),Tr=R.pick([20,21,22,24]),K=R.pick([0.006,0.008,0.012,0.02,0.03]),t=R.pick([20,25,30]);const Tf=Tr+(T0-Tr)*Math.exp(-K*t);
  return {q:`T₀ = ${T0} °C, room ${Tr} °C, K = ${K} min⁻¹, t = ${t} min. Predicted T_f (°C)?`,ans:sf(Tf,3),unit:'°C',tol:0.01,exp:`T_f = T_r + (T₀−T_r)e^(−Kt) = ${sf(Tf,3)} °C.`};
});
G('g_newtonK','t08',3,'Find K from data',R=>{
  const T0=R.pick([65,70,75,80]),Tr=R.pick([20,21,22,24]),Tf=T0-R.pick([6,9,12,15,18]),t=R.pick([20,25,30]);const K=Math.log((T0-Tr)/(Tf-Tr))/t;
  return {q:`Start ${T0} °C, end ${Tf} °C after ${t} min in a ${Tr} °C room. Cooling constant K (min⁻¹)?`,ans:sf(K,3),unit:'min⁻¹',tol:0.03,exp:`K = (1/t)ln[(T₀−T_r)/(T_f−T_r)] = ${sf(K,3)}.`};
});
G('g_newtont','t08',3,'Time to reach a temperature',R=>{
  const T0=R.pick([70,80,90]),Tr=R.pick([20,22]),K=R.pick([0.01,0.02,0.03]),T=R.pick([40,45,50,55]);const t=Math.log((T0-Tr)/(T-Tr))/K;
  return {q:`T₀ = ${T0} °C, room ${Tr} °C, K = ${K} min⁻¹. Time (min) to cool to ${T} °C?`,ans:sf(t,3),unit:'min',tol:0.02,exp:`t = (1/K)ln[(T₀−T_r)/(T−T_r)] = ${sf(t,3)} min.`};
});
G('g_gas','t11',2,'Combined gas law',R=>{
  const P1=R.pick([1,2,3]),V1=R.pick([2,4,5,10]),T1=R.pick([20,27,300-273.15]),T2=R.pick([50,100,127]),V2=R.pick([3,5,8]);
  const T1k=T1+273.15,T2k=T2+273.15;const P2=P1*V1/V2*T2k/T1k;
  return {q:`Gas at ${P1} atm, ${V1} L, ${sf(T1,3)} °C is changed to ${V2} L and ${T2} °C. New pressure (atm)?`,ans:sf(P2,3),unit:'atm',tol:0.02,exp:`P₂ = P₁V₁T₂/(V₂T₁) (kelvin) = ${sf(P2,3)} atm.`};
});
G('g_ideal','t11',2,'PV = nRT',R=>{
  const n=R.pick([0.5,1,2,3]),T=R.pick([273.15,300,350,400]),V=R.pick([5,10,20,22.4]);const P=n*0.08206*T/V;
  return {q:`Pressure (atm) of ${n} mol of ideal gas in ${V} L at ${T} K? (R = 0.08206 L·atm/mol·K)`,ans:sf(P,3),unit:'atm',tol:0.02,exp:`P = nRT/V = ${sf(P,3)} atm.`};
});
G('g_vrms','t11',3,'Root-mean-square speed',R=>{
  const gas=R.pick([['H₂',0.002016],['He',0.004003],['N₂',0.02801],['O₂',0.03200],['CO₂',0.04401]]),T=R.pick([250,300,400,500]);const v=Math.sqrt(3*8.314*T/gas[1]);
  return {q:`v_rms (m/s) of ${gas[0]} (M = ${gas[1]} kg/mol) at ${T} K?`,ans:sf(v,3),unit:'m/s',tol:0.02,exp:`√(3RT/M) = ${sf(v,3)} m/s.`};
});
G('g_isowork','t10',3,'Isothermal work',R=>{
  const n=R.pick([0.5,1,2]),T=R.pick([300,350,400]),r=R.pick([1.5,2,3,4]);const W=n*8.314*T*Math.log(r);
  return {q:`${n} mol ideal gas expands isothermally at ${T} K to ${r}× its volume. Work by the gas (J)?`,ans:sf(W,3),unit:'J',tol:0.02,exp:`W = nRT ln(V₂/V₁) = ${sf(W,3)} J.`};
});
G('g_adiabat','t10',3,'Adiabatic compression',R=>{
  const g=R.pick([1.4,1.67]),r=R.pick([5,8,10,15]),T1=R.pick([290,300,310]);const T2=T1*Math.pow(r,g-1);
  return {q:`Ideal gas (γ = ${g}) at ${T1} K is compressed adiabatically to 1/${r} of its volume. Final T (K)?`,ans:sf(T2,3),unit:'K',tol:0.02,exp:`T₂ = T₁ r^(γ−1) = ${sf(T2,3)} K.`};
});
G('g_carnot','t14',2,'Carnot efficiency',R=>{
  const Th=R.pick([400,500,600,800,1000]),Tc=R.pick([250,300,350]);if(Tc>=Th)return G._retry;
  return {q:`Carnot efficiency (%) between T_h = ${Th} K and T_c = ${Tc} K?`,ans:sf((1-Tc/Th)*100,3),unit:'%',tol:0.01,exp:`1 − ${Tc}/${Th}.`};
});
G('g_engine','t14',2,'Engine energy balance',R=>{
  const Qh=R.pick([500,1000,2000,5000]),eta=R.pick([0.2,0.25,0.3,0.4]);return {q:`An engine absorbs ${Qh} J per cycle with ${eta*100} % efficiency. Heat rejected per cycle (J)?`,ans:sf(Qh*(1-eta),3),unit:'J',tol:0.01,exp:`Q_c = Q_h(1 − η).`};
});
G('g_cop','t14',3,'Max COP (fridge / heat pump)',R=>{
  const Tc=R.pick([255,263,270,273]),Th=R.pick([293,298,300,310]);const k=R.int(0,1);
  return k===0?{q:`Maximum refrigerator COP between T_c = ${Tc} K and T_h = ${Th} K?`,ans:sf(Tc/(Th-Tc),3),unit:'',tol:0.02,exp:`T_c/(T_h − T_c).`}:{q:`Maximum heat-pump COP delivering heat at T_h = ${Th} K from ${Tc} K air?`,ans:sf(Th/(Th-Tc),3),unit:'',tol:0.02,exp:`T_h/(T_h − T_c).`};
});
G('g_dS','t12',3,'Entropy change',R=>{
  const k=R.int(0,2);
  if(k===0){const Q=R.pick([500,1000,2000]),Th=R.pick([400,500,600]),Tc=R.pick([250,300,350]);return {q:`${Q} J flows from a ${Th} K reservoir to a ${Tc} K reservoir. ΔS of the universe (J/K)?`,ans:sf(Q/Tc-Q/Th,3),unit:'J/K',tol:0.03,exp:`Q/T_c − Q/T_h.`};}
  if(k===1){const m=R.pick([50,100,200]);return {q:`Entropy change (J/K) when ${m} g of ice melts at 273.15 K? (L_f = 334 J/g)`,ans:sf(m*334/273.15,3),unit:'J/K',tol:0.02,exp:`mL/T.`};}
  const m=R.pick([100,250,500]),T1=R.pick([10,20,25]),T2=R.pick([60,80,90]);return {q:`Entropy change (J/K) heating ${m} g of water from ${T1} °C to ${T2} °C? (c = 4.184 J/g·K)`,ans:sf(m*4.184*Math.log((T2+273.15)/(T1+273.15)),3),unit:'J/K',tol:0.03,exp:`mc ln(T₂/T₁).`};
});
G('g_first','t09',1,'First law',R=>{
  const Q=R.pick([100,200,500,800]),W=R.pick([50,100,300,400]);return {q:`A system absorbs ${Q} J of heat and does ${W} J of work. ΔU (J)?`,ans:Q-W,unit:'J',tol:0.001,exp:`ΔU = Q − W = ${Q-W} J.`};
});
G('g_expand','t20',2,'Thermal expansion',R=>{
  const mat=R.pick([['steel',12],['aluminum',23],['copper',17],['glass',9]]),L=R.pick([1,10,50,100]),dT=R.pick([20,40,60,80]);const dL=mat[1]*1e-6*L*dT*100;
  return {q:`Length increase (cm) of a ${L} m ${mat[0]} bar (α = ${mat[1]}×10⁻⁶ /K) heated by ${dT} K?`,ans:sf(dL,3),unit:'cm',tol:0.02,exp:`ΔL = αLΔT.`};
});
G('g_gibbs','t13',3,'Gibbs free energy',R=>{
  const H=R.pick([-100,-50,40,100]),S=R.pick([-100,50,200,300]),T=R.pick([298,350,500]);const G_=H-T*S/1000;
  return {q:`ΔH = ${H} kJ, ΔS = ${S} J/K at T = ${T} K. ΔG (kJ)?`,ans:sf(G_,3),unit:'kJ',tol:0.02,exp:`ΔG = ΔH − TΔS = ${sf(G_,3)} kJ (${G_<0?'spontaneous':'non-spontaneous'}).`};
});
G('g_unit','t02',2,'Energy unit conversions',R=>{
  const k=R.int(0,3);
  if(k===0){const C=R.pick([100,250,500,2000]);return {q:`${C} food Calories (kcal) in kJ?`,ans:sf(C*4.184,3),unit:'kJ',tol:0.01,exp:`×4.184.`};}
  if(k===1){const B=R.pick([1,100,5000,30000]);return {q:`${B} BTU in kJ? (1 BTU = 1.055 kJ)`,ans:sf(B*1.055,3),unit:'kJ',tol:0.01,exp:`×1.055.`};}
  if(k===2){const kwh=R.pick([0.5,1,2,10]);return {q:`${kwh} kWh in MJ?`,ans:sf(kwh*3.6,3),unit:'MJ',tol:0.01,exp:`×3.6.`};}
  const B=R.pick([6000,12000,24000]);return {q:`A ${B} BTU/h air conditioner removes heat at what rate (kW)? (1 BTU/h = 0.2931 W)`,ans:sf(B*0.2931/1000,3),unit:'kW',tol:0.02,exp:`${B}×0.2931 W.`};
});
G('g_score','t18',3,'2019 scoring formulas',R=>{
  const kb=R.pick([0.005,0.006,0.008]),kt=sf(kb*R.pick([1.1,1.25,1.5,2]),3),err=R.pick([0.5,1,2,3.5]);
  return R.int(0,1)?{q:`2019 heat score HS = 20×(lowest k / team k). Lowest k = ${kb}, team k = ${kt}. HS?`,ans:sf(20*kb/kt,3),unit:'pts',tol:0.02,exp:`HS = ${sf(20*kb/kt,3)}.`}:{q:`2019 prediction score PS = 25 − 2.5×|error|. Prediction off by ${err} °C. PS?`,ans:25-2.5*err,unit:'pts',tol:0.01,exp:`25 − 2.5×${err}.`};
});
G._retry = {retry:true};
