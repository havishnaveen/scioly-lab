/* ===== extra generators modelled on real 2026 tests (loads after generators.js) ===== */
G('g_wire_scale','c03',2,'Wire resistance scaling (length / area)',R=>{
  const a=R.pick([2,3,4,5]),b=R.pick([2,3,4]);const k=R.int(0,1);
  if(k===0) return {q:`A wire has resistance R. Its length is multiplied by ${a} and its cross-sectional area is divided by ${b}. The new resistance is how many times R?`,ans:a*b,unit:'×R',exp:`R = ρL/A ⇒ ×${a} × ×${b} = ${a*b}R.`};
  return {q:`A wire has resistance R. Its length is multiplied by ${a} and its cross-sectional area is multiplied by ${b}. New resistance in units of R (3 sig figs)?`,ans:sf(a/b,3),unit:'×R',exp:`R ∝ L/A ⇒ ${a}/${b} = ${sf(a/b,3)}R.`};
});
G('g_equal_par','c05',1,'n equal resistors in parallel (m/n)',R=>{
  const n=R.int(2,8),m=R.pick([6,12,24,48,100,120,240]);
  return {q:`${n} identical ${m} Ω resistors are connected in parallel. Equivalent resistance (Ω)?`,ans:sf(m/n,4),unit:'Ω',exp:`R = m/n = ${m}/${n} = ${sf(m/n,4)} Ω.`};
});
G('g_longwire','c11',2,'Field of a long straight wire B = μ₀I/2πr',R=>{
  const I=R.pick([1,2,3,5,10,20]),r=R.pick([1,2,5,10,20]);const B=sf(2e-7*I/(r*1e-3),3);
  return {q:`Magnetic field (μT) at ${r} mm from a long straight wire carrying ${I} A? (μ₀ = 4π×10⁻⁷)`,ans:sf(B*1e6,3),unit:'μT',exp:`B = 2×10⁻⁷×${I}/${r}×10⁻³ = ${B} T = ${sf(B*1e6,3)} μT.`,tol:0.02};
});
G('g_solenoid','c11',2,'Solenoid field B = μ₀nI',R=>{
  const n=R.pick([100,200,500,1000,5000]),I=R.pick([0.5,1,2,3,5]);const B=sf(4e-7*Math.PI*n*100*I,3);
  return {q:`A long solenoid has ${n} turns per centimetre and carries ${I} A. Field inside (T)? (μ₀ = 4π×10⁻⁷)`,ans:B,unit:'T',exp:`n = ${n*100} /m; B = μ₀nI = ${B} T.`,tol:0.02};
});
G('g_loaded_div','c08',3,'Loaded voltage divider',R=>{
  const Vin=R.pick([3,5,9,12]),R1=R.pick([10,22,47,100]),R2=R.pick([10,22,47,100]),RL=R.pick([100,220,470,1000]);
  const par=R2*RL/(R2+RL),V=sf(Vin*par/(R1+par),3);
  return {q:`A divider has V_in = ${Vin} V, R₁ = ${R1} Ω (top), R₂ = ${R2} Ω (bottom). A ${RL} Ω load is connected across R₂. V_out (V)?`,ans:V,unit:'V',exp:`R₂‖R_L = ${sf(par,4)} Ω; V_out = ${Vin}×${sf(par,4)}/(${R1}+${sf(par,4)}) = ${V} V.`,tol:0.02};
});
G('g_mystery','c28',2,'Mystery resistor via series divider',R=>{
  const Rk=R.pick([47,100,220,470]),Rx=R.pick([33,68,150,330,560]),Vs=R.pick([3,5,9]);
  const Vk=sf(Vs*Rk/(Rk+Rx),4);
  return {q:`A known ${Rk} Ω resistor is in series with an unknown R_x across ${Vs} V. You measure ${Vk} V across the known resistor. R_x (Ω)?`,ans:sf(Rk*(Vs-Vk)/Vk,3),unit:'Ω',exp:`R_x = R_k(V_s − V_k)/V_k = ${Rk}×${sf(Vs-Vk,4)}/${Vk} ≈ ${sf(Rk*(Vs-Vk)/Vk,3)} Ω.`,tol:0.03};
});
G('g_share','c02',3,'Capacitor charge sharing',R=>{
  const C1=R.pick([10,20,47]),V=R.pick([5,10,12]),C2=R.pick([4,10,22]);
  const Vf=sf(C1*V/(C1+C2),3);
  return {q:`A ${C1} μF capacitor charged to ${V} V is connected in parallel with an uncharged ${C2} μF capacitor. Final voltage (V)?`,ans:Vf,unit:'V',exp:`Charge conserved: ${C1*V} μC over ${C1+C2} μF = ${Vf} V.`,tol:0.02};
});
G('g_percent_err','c28',1,'Percent error',R=>{
  const act=R.pick([47,56,100,150,220,330]),pr=sf(act*(1+R.pick([-0.06,-0.03,0.02,0.05,0.08])),3);
  return {q:`Predicted R = ${pr} Ω; meter reads ${act} Ω. Percent error (%)?`,ans:sf(Math.abs(pr-act)/act*100,3),unit:'%',exp:`|${pr} − ${act}|/${act} × 100 = ${sf(Math.abs(pr-act)/act*100,3)} %.`,tol:0.03};
});
G('g_rms','c10',1,'RMS of sine vs square',R=>{
  const A=R.pick([10,12,24,100,120,170,311]);
  if(R.int(0,1)) return {q:`A sine wave has amplitude ${A} V. RMS voltage (V)?`,ans:sf(A/Math.SQRT2,3),unit:'V',exp:`V_rms = ${A}/√2 = ${sf(A/Math.SQRT2,3)} V.`,tol:0.02};
  return {q:`A square wave alternates between +${A} V and −${A} V. RMS voltage (V)?`,ans:A,unit:'V',exp:'For a symmetric square wave, V_rms = amplitude.'};
});
