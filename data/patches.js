/* ===== in-place fixes for questions that referred to earlier questions ("same circuit") — ids stay stable so saved progress is kept ===== */
(function () {
  const P = {
    q94: ['An 18 V source is in series with 6 Ω, then 3 Ω to ground. The load is connected across the 3 Ω. Thévenin resistance seen by the load (Ω)?'],
    q95: ['A network has V_th = 6 V and R_th = 2 Ω. Maximum power (W) it can deliver to a load?'],
    q158: ['A 12 V DC motor has 2.0 Ω armature resistance. While running, its back-EMF is 9.0 V. The current it draws (A)?'],
    q610: ['An RC circuit has a 12 V battery, a 2.0 kΩ resistor and a 10 μF capacitor, initially discharged. The current (mA) in the resistor at the instant the switch closes?'],
    q611: ['An RC circuit has a 12 V battery, 2.0 kΩ and 10 μF (initially discharged). After exactly ONE time constant, what percentage of the initial current is still flowing?'],
    q612: ['An RC circuit has a 12 V battery, 2.0 kΩ and 10 μF (initially discharged). Charge (μC) on the capacitor after one time constant?'],
    q615: ['C₁ = 10 μF is charged to 5.0 V (Q = 50 μC), then connected to C₂ = 4 μF in series with C₃ = 6 μF. After equilibrium, the charge (μC) on C₂ (same as C₃)?'],
    q640: ['A loop has an effective net 32 V driving 18 Ω and 22 Ω in series. Voltage (V) across the 18 Ω resistor?'],
    q643: ['Mesh equations: 6I₁ − 2I₂ = 25 and −2I₁ + 10I₂ = 15 (amps). Solve for I₂ (A).'],
    q675: ['Inside a long solenoid (n = 50 000 /m) the current rises at 2 A/s, so dB/dt = 0.126 T/s. A stationary +0.5 C charge sits at r = 10 cm from the axis, where the induced E-field is (r/2)·dB/dt. Force (mN) on the charge?'],
    q748: ['A 24 V motor with R_a = 4 Ω draws 1.5 A while running (back-EMF 18 V). Efficiency (%), ignoring friction?'],
    q772: ['A stepper motor has 1.8° per step. Steps needed for a 90° rotation?'],
    q777: ['A generator coil (N = 100, B = 0.2 T, A = 0.01 m², 60 Hz) has a peak EMF of 75.4 V. Its RMS value (V)?'],
    q788: ['A 24 V motor with R_a = 4 Ω first draws 1.5 A (back-EMF 18 V), then is loaded until it draws 3 A (back-EMF 12 V). New speed divided by old speed?'],
    q800: ['An ideal transformer has 120 V on its primary, N_p = 200, N_s = 50. The secondary drives a 10 Ω load. Primary current (A)?'],
    q808: ['A 12 V source drives 4 Ω in series with (6 Ω ∥ 12 Ω). Voltage (V) across the 6 Ω resistor?'],
    q822: ['12 V — 2 Ω — node A. A to ground through 6 Ω, and A — 1 Ω — node B — 2 Ω — ground. V_B (V)?'],
    q824: ['12 V — 3 Ω — node A. A to ground through 6 Ω. A — 2 Ω — node B. B to ground through 4 Ω. A 3 A current source pushes current INTO B. Find V_B (V).'],
    q830: ['Two-mesh circuit: a 10 V source with 1 Ω in mesh 1, a 2 Ω resistor shared by both meshes, and 6 Ω in mesh 2. Current (A) through the shared 2 Ω resistor?'],
    q833: ['A 12 V source feeds 4 Ω in series to terminal a, and 12 Ω connects from a to b (b is the source − terminal). Thévenin resistance seen from a–b (Ω)?'],
    q834: ['A 12 V source feeds 4 Ω in series to terminal a, and 12 Ω connects from a to b. A 6 Ω load is connected across a–b. Load current (A)?'],
    q835: ['A Thévenin source has V_th = 9 V and R_th = 3 Ω. Maximum power (W) it can deliver to any load?'],
    q845: ['12 V — 4 Ω — node — 8 Ω — ground, with a 100 μF capacitor from the node to ground. Time constant (μs) for charging through the network?']
  };
  // the diagnostic only uses hard questions (d>=3); older easy questions stay in lessons/drills
  DATA.questions.forEach(q => { if (q.d < 3) q.dg = false; });
  Object.keys(P).forEach(id => { const q = DATA.questions.find(x => x.id === id); if (q) q.q = P[id][0]; });
})();
