/* ===== generators for motors and solving circuits ===== */
const _sf=(x,n)=>Number(Number(x).toPrecision(n||3));
G('g_mot_stall','c29',1,'Motor stall current & heat',R=>{
  const V=R.pick([6,9,12,24]),Ra=R.pick([1,1.5,2,3,4,5]);const I=_sf(V/Ra,3);
  if(R.int(0,1)) return {q:`A ${V} V motor has armature resistance ${Ra} Ω. Stall current (A)?`,ans:I,unit:'A',exp:`I = V/R = ${V}/${Ra} = ${I} A.`};
  return {q:`A ${V} V motor with armature resistance ${Ra} Ω is jammed. Power dissipated as heat (W)?`,ans:_sf(V*V/Ra,3),unit:'W',exp:`P = V²/R = ${V*V}/${Ra} = ${_sf(V*V/Ra,3)} W.`};
});
G('g_mot_backemf','c29',2,'Motor back-EMF & efficiency',R=>{
  const V=R.pick([12,24]),Ra=R.pick([1,2,4]),I=R.pick([0.5,1,1.5,2]);
  const e=_sf(V-I*Ra,3);
  if(R.int(0,1)) return {q:`A ${V} V motor, R_a = ${Ra} Ω, draws ${I} A while running. Back-EMF (V)?`,ans:e,unit:'V',exp:`ε = V − IR = ${V} − ${I}×${Ra} = ${e} V.`};
  return {q:`A ${V} V motor, R_a = ${Ra} Ω, draws ${I} A while running. Efficiency (%)? (ignore friction)`,ans:_sf(e/V*100,3),unit:'%',exp:`η = ε/V = ${e}/${V} = ${_sf(e/V*100,3)} %.`,tol:0.02};
});
G('g_mot_load','c29',3,'Motor speed under load (from k_e)',R=>{
  const V=R.pick([6,12,24]),Ra=R.pick([1,2,4]),ke=R.pick([0.01,0.02,0.03,0.05]),tq=R.pick([0.01,0.02,0.03,0.05]);
  const I=tq/ke,e=V-I*Ra;if(e<=0.15*V) return {q:`A 12 V motor with stall current 6 A. Stall current for a 24 V supply on the same motor (A)?`,ans:12,unit:'A',exp:'I = V/R_a doubles with V.'};
  const w=e/ke,rpm=_sf(w*60/(2*Math.PI),3);
  return {q:`A ${V} V motor has R_a = ${Ra} Ω and k_e = k_t = ${ke} V·s/rad. It carries a load torque ${tq} N·m. Speed (rpm)?`,ans:rpm,unit:'rpm',exp:`I = τ/k = ${_sf(I,3)} A; ε = ${V} − ${_sf(I,3)}×${Ra} = ${_sf(e,3)} V; ω = ε/k = ${_sf(w,3)} rad/s = ${rpm} rpm.`,tol:0.03};
});
G('g_mot_gear','c30',2,'Gear train speed and torque',R=>{
  const N=R.pick([3,4,5,10,20]),rpm=R.pick([1200,3000,4000,6000]),t=R.pick([0.02,0.05,0.1,0.2]);
  if(R.int(0,1)) return {q:`A motor turns ${rpm} rpm through a ${N}:1 reduction. Output speed (rpm)?`,ans:_sf(rpm/N,3),unit:'rpm',exp:`${rpm}/${N}.`};
  return {q:`A motor produces ${t} N·m through an ideal ${N}:1 reduction. Output torque (N·m)?`,ans:_sf(t*N,3),unit:'N·m',exp:`τ×${N}.`};
});
G('g_mot_pwm','c30',2,'PWM average voltage / power',R=>{
  const V=R.pick([5,6,9,12,24]),d=R.pick([10,20,25,40,50,75]),Rl=R.pick([2,4,6,8]);
  if(R.int(0,1)) return {q:`${V} V is switched with duty cycle ${d} %. Average voltage (V)?`,ans:_sf(V*d/100,3),unit:'V',exp:`V×duty = ${_sf(V*d/100,3)} V.`};
  return {q:`${V} V is switched with ${d} % duty across a ${Rl} Ω resistor. Average power (W)?`,ans:_sf(d/100*V*V/Rl,3),unit:'W',exp:`P_avg = duty×V²/R = ${_sf(d/100*V*V/Rl,3)} W (not (V_avg)²/R).`};
});
G('g_mot_ac','c30',2,'AC motor sync speed / slip',R=>{
  const f=R.pick([50,60]),p=R.pick([2,4,6,8]);const ns=120*f/p;
  if(R.int(0,1)) return {q:`Synchronous speed (rpm) of a ${p}-pole motor on ${f} Hz?`,ans:ns,unit:'rpm',exp:`120f/p = ${ns}.`};
  const s=R.pick([2,3,4,5,6]);return {q:`A ${p}-pole induction motor on ${f} Hz has ${s} % slip. Rotor speed (rpm)?`,ans:_sf(ns*(1-s/100),4),unit:'rpm',exp:`${ns}×(1 − ${s/100}).`};
});
G('g_gen_emf','c30',3,'Coil generator EMF',R=>{
  const N=R.pick([50,100,200,500]),B=R.pick([0.1,0.2,0.5]),A=R.pick([0.005,0.01,0.02]),rpm=R.pick([600,1200,1800,3600]);
  const w=2*Math.PI*rpm/60,em=_sf(N*B*A*w,3);
  if(R.int(0,1)) return {q:`A coil of ${N} turns, area ${A} m², spins at ${rpm} rpm in ${B} T. Peak EMF (V)?`,ans:em,unit:'V',exp:`ω = ${_sf(w,4)}; NBAω = ${em} V.`,tol:0.02};
  return {q:`A coil of ${N} turns, area ${A} m², spins at ${rpm} rpm in ${B} T. RMS EMF (V)?`,ans:_sf(em/Math.SQRT2,3),unit:'V',exp:`peak ${em}; rms = peak/√2 = ${_sf(em/Math.SQRT2,3)} V.`,tol:0.02};
});
G('g_mot_lift','c31',3,'Motor lifting efficiency',R=>{
  const m=R.pick([0.5,1,2,5]),h=R.pick([0.5,1,1.5,2]),t=R.pick([2,3,4,5]),V=R.pick([6,12]),I=R.pick([1,2,3]);
  const pm=m*9.8*h/t,pi=V*I;if(pm>=pi) return {q:'A 12 V motor draws 1 A. Electrical power (W)?',ans:12,unit:'W',exp:'VI.'};
  return {q:`A motor on ${V} V drawing ${I} A lifts a ${m} kg mass ${h} m in ${t} s at constant speed. Efficiency (%)? (g = 9.8)`,ans:_sf(pm/pi*100,3),unit:'%',exp:`P_mech = mgh/t = ${_sf(pm,3)} W; P_in = ${pi} W.`,tol:0.03};
});
G('g_em_faraday','c32',2,'Faraday EMF and motional EMF',R=>{
  if(R.int(0,1)){const N=R.pick([20,50,100,200]),dF=R.pick([2,4,6,8]),dt=R.pick([0.1,0.2,0.5]);return {q:`A ${N}-turn coil sees flux change by ${dF} mWb in ${dt} s. EMF magnitude (V)?`,ans:_sf(N*dF/1000/dt,3),unit:'V',exp:`Nε = NΔΦ/Δt = ${_sf(N*dF/1000/dt,3)} V.`};}
  const B=R.pick([0.1,0.2,0.5]),L=R.pick([0.2,0.5,1]),v=R.pick([2,4,5,10]);return {q:`A ${L} m rod moves at ${v} m/s perpendicular to a ${B} T field. Motional EMF (V)?`,ans:_sf(B*L*v,3),unit:'V',exp:`BLv = ${_sf(B*L*v,3)} V.`};
});
G('g_em_charge','c32',3,'Charge in a B field: force and radius',R=>{
  const v=R.pick([1e5,1e6,2e6,5e6]),B=R.pick([0.05,0.1,0.2,0.5]);
  if(R.int(0,1)) return {q:`A proton moves at ${v.toExponential(0)} m/s perpendicular to ${B} T. Magnetic force (×10⁻¹⁵ N)? (q = 1.6×10⁻¹⁹ C)`,ans:_sf(1.6e-19*v*B*1e15,3),unit:'×10⁻¹⁵ N',exp:`F = qvB.`,tol:0.02};
  return {q:`A proton (1.67×10⁻²⁷ kg) moves at ${v.toExponential(0)} m/s perpendicular to ${B} T. Orbit radius (mm)?`,ans:_sf(1.67e-27*v/(1.6e-19*B)*1000,3),unit:'mm',exp:`r = mv/qB.`,tol:0.03};
});
G('g_reduce','c33',2,'Nested series–parallel reduction',R=>{
  const r=()=>R.pick([1,2,3,4,6,12]);const a=r(),b=r(),c=r(),d=r(),e=r();
  const p=(x,y)=>x*y/(x+y);const total=a+p(b,c+p(d,e));
  return {q:`Find the equivalent resistance (Ω) of ${a} Ω in series with [${b} Ω in parallel with (${c} Ω in series with (${d} Ω in parallel with ${e} Ω))].`,ans:_sf(total,4),unit:'Ω',exp:`${d}∥${e} = ${_sf(p(d,e),4)}; +${c} = ${_sf(c+p(d,e),4)}; ∥${b} = ${_sf(p(b,c+p(d,e)),4)}; +${a} = ${_sf(total,4)} Ω.`,tol:0.02};
});
G('g_branchI','c33',2,'Current in one branch of a series–parallel circuit',R=>{
  const V=R.pick([12,24,36]),R1=R.pick([2,4,6]),R2=R.pick([6,12]),R3=R.pick([3,4,12]);
  const Rp=R2*R3/(R2+R3),Rt=R1+Rp,I=V/Rt,Vp=I*Rp;
  return {q:`${V} V source: ${R1} Ω in series with (${R2} Ω ∥ ${R3} Ω). Current through the ${R3} Ω resistor (A)?`,ans:_sf(Vp/R3,3),unit:'A',exp:`Rp = ${_sf(Rp,3)}; I = ${_sf(I,3)} A; Vp = ${_sf(Vp,3)} V; I₃ = Vp/${R3}.`,tol:0.02};
});
G('g_nodal','c34',3,'Nodal analysis: ladder node voltages',R=>{
  const V=R.pick([12,24,18]),R1=R.pick([2,3,4]),R2=R.pick([4,6,12]),R3=R.pick([1,2,3]),R4=R.pick([2,3,6]);
  const Rb=R3+R4,Rp=R2*Rb/(R2+Rb),A=V*Rp/(R1+Rp),B=A*R4/Rb;
  if(R.int(0,1)) return {q:`${V} V — ${R1} Ω — node A. A—${R2} Ω—ground; A—${R3} Ω—B; B—${R4} Ω—ground. Find V_A (V).`,ans:_sf(A,3),unit:'V',exp:`Collapse or nodal: A = ${_sf(A,4)} V.`,tol:0.02};
  return {q:`${V} V — ${R1} Ω — node A. A—${R2} Ω—ground; A—${R3} Ω—B; B—${R4} Ω—ground. Find V_B (V).`,ans:_sf(B,3),unit:'V',exp:`A = ${_sf(A,4)} V; B = A·${R4}/${R3+R4} = ${_sf(B,4)} V.`,tol:0.02};
});
G('g_mesh2','c35',3,'Two-mesh current',R=>{
  const V=R.pick([10,12,24]),R1=R.pick([1,2,3]),R2=R.pick([2,4,6]),R3=R.pick([3,6,12]);
  const I1=V/(R1+R2*R3/(R2+R3)),I2=I1*R2/(R2+R3);
  return {q:`Two-mesh circuit: ${V} V source with ${R1} Ω in mesh 1, ${R2} Ω shared by both meshes, ${R3} Ω in mesh 2. Current through the ${R3} Ω resistor (A)?`,ans:_sf(I2,3),unit:'A',exp:`(R1+R2)I₁ − R2 I₂ = V; −R2 I₁ + (R2+R3)I₂ = 0 ⇒ I₂ = ${_sf(I2,4)} A (I₁ = ${_sf(I1,4)} A).`,tol:0.02};
});
G('g_super','c35',3,'Superposition at a node',R=>{
  const V1=R.pick([6,12,24]),V2=R.pick([3,6,9,12]),R1=R.pick([2,4,6]),R2=R.pick([4,6,12]),R3=R.pick([3,6,12]);
  const A=(V1/R1+V2/R2)/(1/R1+1/R2+1/R3),a1=V1*(R2*R3/(R2+R3))/(R1+R2*R3/(R2+R3));
  return {q:`${V1} V through ${R1} Ω and ${V2} V through ${R2} Ω feed a node that has ${R3} Ω to ground. Node voltage (V)? (Use superposition.)`,ans:_sf(A,3),unit:'V',exp:`${V1} V alone gives ${_sf(a1,3)} V; ${V2} V alone gives ${_sf(A-a1,3)} V; sum ${_sf(A,3)} V.`,tol:0.02};
});
G('g_thev_load','c35',3,'Thévenin then load current',R=>{
  const V=R.pick([12,24,18,30]),R1=R.pick([2,4,6]),R2=R.pick([6,12,4]),RL=R.pick([3,6,8,12]);
  const Vth=V*R2/(R1+R2),Rth=R1*R2/(R1+R2),I=Vth/(Rth+RL);
  return {q:`${V} V source, ${R1} Ω in series, then ${R2} Ω across terminals a–b. A ${RL} Ω load is connected across a–b. Load current (A)? (Use Thévenin.)`,ans:_sf(I,3),unit:'A',exp:`V_th = ${_sf(Vth,3)} V, R_th = ${_sf(Rth,3)} Ω; I = V_th/(R_th+${RL}) = ${_sf(I,3)} A.`,tol:0.02};
});
G('g_maxp','c35',3,'Maximum power transfer',R=>{
  const V=R.pick([12,24,18,30]),R1=R.pick([2,4,6]),R2=R.pick([6,12,4]);
  const Vth=V*R2/(R1+R2),Rth=R1*R2/(R1+R2);
  if(R.int(0,1)) return {q:`A network is a ${V} V source with ${R1} Ω in series and ${R2} Ω across the output. Load resistance for maximum power (Ω)?`,ans:_sf(Rth,3),unit:'Ω',exp:`R_L = R_th = ${R1}∥${R2} = ${_sf(Rth,3)} Ω.`};
  return {q:`A network is a ${V} V source with ${R1} Ω in series and ${R2} Ω across the output. Maximum power to a load (W)?`,ans:_sf(Vth*Vth/(4*Rth),3),unit:'W',exp:`V_th = ${_sf(Vth,3)}, R_th = ${_sf(Rth,3)}; P = V²/4R = ${_sf(Vth*Vth/(4*Rth),3)} W.`,tol:0.02};
});
G('g_srcx','c35',2,'Source transformation',R=>{
  const V=R.pick([6,9,12,24]),Rr=R.pick([2,3,4,6]);
  return {q:`A ${V} V source in series with ${Rr} Ω is converted to a Norton equivalent. Norton current (A)?`,ans:_sf(V/Rr,3),unit:'A',exp:`I = V/R = ${_sf(V/Rr,3)} A (in parallel with ${Rr} Ω).`};
});
G('g_cap_ss','c36',3,'Steady-state capacitor voltage and energy',R=>{
  const V=R.pick([12,24,9]),R1=R.pick([2,4,6]),R2=R.pick([4,8,12]),C=R.pick([10,47,100,220]);
  const Vc=V*R2/(R1+R2);
  if(R.int(0,1)) return {q:`${V} V — ${R1} Ω — node — ${R2} Ω — ground, with a ${C} μF capacitor from the node to ground. Steady-state capacitor voltage (V)?`,ans:_sf(Vc,3),unit:'V',exp:`Capacitor open: divider ${V}×${R2}/${R1+R2} = ${_sf(Vc,3)} V.`};
  return {q:`${V} V — ${R1} Ω — node — ${R2} Ω — ground, with a ${C} μF capacitor from the node to ground. Time constant (μs)?`,ans:_sf(C*R1*R2/(R1+R2),3),unit:'μs',exp:`R_th = ${R1}∥${R2} = ${_sf(R1*R2/(R1+R2),3)} Ω; τ = R_th·C.`,tol:0.02};
});
