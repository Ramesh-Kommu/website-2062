const steps = [
  { num: "01", title: "Problem Scoping", desc: "We map your operational decision to a mathematical structure — objective, variables, constraints." },
  { num: "02", title: "Formulation", desc: "Rigorous mathematical programming: LP, MIP, CP, or hybrid. Every constraint is explicit." },
  { num: "03", title: "Solver Selection", desc: "Benchmark across Gurobi, Hexaly, OR-Tools, CPLEX. Pick the right weapon for the structure." },
  { num: "04", title: "Validation", desc: "Stress-test with historical data. Sensitivity analysis. Dual interpretation for business insight." },
  { num: "05", title: "Deployment", desc: "Production API or embedded engine. Real-time re-optimization. Monitoring and model updates." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-12 sm:py-16" style={{ background: '#202E3C' }}>
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: '#C8FF01' }} />
            <span className="text-xs font-medium uppercase tracking-[0.15em]" style={{ color: '#C8FF01' }}>How We Deliver</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-white">From Problem to</span>
            <br />
            <span style={{ color: '#C8FF01' }}>Production.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line through the circles */}
          <div className="hidden md:block absolute top-[5px] left-0 right-0 h-px" style={{ background: 'rgba(200, 255, 1, 0.35)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-0 sm:gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative pl-6 md:pl-0 pb-8 sm:pb-0">
                {/* Vertical line for mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-[5px] top-[11px] bottom-0 w-px" style={{ background: 'rgba(200, 255, 1, 0.35)' }} />
                )}
                {/* Circle dot */}
                <div className="absolute left-0 top-0 md:static w-[11px] h-[11px] rounded-full border-[1.5px] mb-0 md:mb-8" style={{ borderColor: '#C8FF01', background: '#202E3C' }} />
                <span className="text-[13px] font-semibold mb-2 block" style={{ color: '#C8FF01' }}>{step.num}</span>
                <h3 className="text-white font-semibold text-base sm:text-[14px] mb-3">{step.title}</h3>
                <p className="text-sm sm:text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
