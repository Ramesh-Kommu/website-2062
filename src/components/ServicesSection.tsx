const services = [
  {
    num: "01",
    title: "Optimization\nModel Development",
    desc: "From whiteboard to solver-ready formulation. We translate your business problem into precise mathematical models - decision variables, objectives, and every binding constraint your operations face.",
  },
  {
    num: "02",
    title: "Decision Support\nSystems",
    desc: "Real-time optimization engines embedded in your planning tools. Planners interact with dashboards while Gurobi runs behind the scenes — decisions in seconds, not spreadsheet gymnastics.",
  },
  {
    num: "03",
    title: "Prescriptive\nAnalytics",
    desc: "Beyond descriptive and predictive — we tell you exactly what to do and by how much. Demand forecasts + optimization models = procurement, staffing, and pricing decisions that maximize profit under uncertainty.",
  },
  {
    num: "04",
    title: "Solver Advisory &\nTraining",
    desc: "Already have an OR team? We accelerate them. Solver benchmarking, model performance tuning, Gurobi parameter optimization, and hands-on training in mathematical programming from practitioners.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16" style={{ background: "#080B14" }}>
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: '#C8FF01' }} />
            <span className="text-xs font-medium uppercase tracking-[0.15em]" style={{ color: '#C8FF01' }}>What We Do</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Decision Analytics
            <br />
            <span style={{ color: '#C8FF01' }}>Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative p-5 sm:p-7 pt-6 sm:pt-8 pb-16 sm:pb-20 transition-colors duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              <h4 className="text-white font-medium text-base sm:text-[15px] leading-snug mb-3 sm:mb-4 whitespace-pre-line" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h4>
              <p className="text-[13px] sm:text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</p>
              <span className="absolute bottom-2 sm:bottom-3 right-4 sm:right-5 text-6xl sm:text-7xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'rgba(255,255,255,0.04)' }}>{s.num}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
