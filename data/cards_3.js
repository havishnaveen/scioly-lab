[
['Motor equation','V = ε_back + I·R_a;  I = (V − ε)/R_a'],
['Back-EMF','ε = k_e·ω; grows with speed, opposes the supply'],
['Stall','ω = 0, ε = 0 → I = V/R_a (max current & torque, overheats)'],
['Motor efficiency (ideal)','η = ε/V; max power at ε = V/2 (η = 50 %)'],
['Motor power','P_in = VI = τω + I²R'],
['Commutator','Reverses armature current each half turn so torque keeps one direction'],
['Reverse a DC motor','Reverse supply polarity (DPDT switch / H-bridge)'],
['Efficient speed control','PWM: V_avg = duty × V'],
['Flyback diode','Reverse-biased across coil/motor; clamps the inductive spike'],
['Sync speed','n_s = 120f/poles; slip s = (n_s − n)/n_s'],
['Stepper','200 steps/rev = 1.8° per step'],
['Gears (ideal)','Reduction N: speed ÷N, torque ×N'],
['Generator EMF','ε_max = NBAω; rms = 0.707 max'],
['Lenz','Induced current opposes the change in flux'],
['Motional EMF','ε = BLv']
].forEach(([f,b])=>C('circuit','Motors & EM',f,b));
[
['Solving routine','Redraw → label nodes → collapse from the far end → I_total → expand with dividers → check KCL/KVL/power'],
['Nodal analysis','KCL at each unknown node: Σ(V_node − V_other)/R = injected current; N−1 equations'],
['Mesh analysis','KVL per window; shared R carries I₁ − I₂'],
['Superposition','Kill other sources (V → wire, I → open); add; never for power'],
['Thévenin','V_th = open-circuit voltage; R_th = R seen with sources off; I_L = V_th/(R_th+R_L)'],
['Max power transfer','R_L = R_th; P = V_th²/(4R_th); η = 50 %'],
['Source transform','V_s + R series ⇄ I = V_s/R in parallel with R'],
['Infinite ladder (R, R)','1.618R (golden ratio)'],
['Cube of R (opposite corners)','5R/6'],
['Balanced bridge','R₁/R₃ = R₂/R₄ → middle branch carries 0 A'],
['DC steady state','Capacitor = open; inductor = short'],
['Parallel rule','R_total < smallest branch; R ∥ 2R = 2R/3']
].forEach(([f,b])=>C('circuit','Solving circuits',f,b));
