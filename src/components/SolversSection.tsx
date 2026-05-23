import solversBg from "@/assets/solvers-bg.png";

const solvers = [
  { name: "GUROBI", type: "Commercial · MIP/LP", detail: "Industry standard for large-scale optimization" },
  { name: "HEXALY", type: "Commercial · Hybrid", detail: "Heuristic + exact solver combination" },
  { name: "OR-TOOLS", type: "Open Source · CP/LP", detail: "Google's optimization suite" },
  { name: "HiGHS", type: "Open Source · MIP/LP", detail: "High performance open-source solver" },
  { name: "PYOMO & PuLP", type: "Modeling · Python", detail: "Flexible Python modeling interfaces" },
];

const SolversSection = () => {
  return (
    <section id="solvers" className="relative py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={solversBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: '#C8FF01' }} />
            <span className="text-xs font-medium uppercase tracking-[0.15em]" style={{ color: '#C8FF01' }}>Our Solver Arsenal</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Right Solver. <span style={{ color: '#C8FF01' }}>Every Time.</span>
          </h2>
          <p className="text-sm sm:text-[13px] mt-4 max-w-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Solver selection is a science. A routing problem solved in CPLEX runs 8× slower than OR-Tools. A scheduling
            problem in Gurobi versus Hexaly can mean hours vs. seconds. Our team has deep expertise across the full solver
            spectrum — commercial and open-source.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {solvers.map((s) => (
            <div
              key={s.name}
              className="border rounded-lg p-4 sm:p-5 text-center backdrop-blur-sm transition-colors"
              style={{ borderColor: 'rgba(200,255,1,0.15)', background: 'rgba(0,0,0,0.3)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(200,255,1,0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(200,255,1,0.15)'}
            >
              <h3 className="text-foreground font-bold text-sm sm:text-base mb-1">{s.name}</h3>
              <p className="text-[11px] sm:text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.type}</p>
              <p className="text-[11px] sm:text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolversSection;
