import { BarChart3, Cpu, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: BarChart3,
    title: "Mathematical Rigor, Not Rule-of-Thumb",
    desc: "We model your real constraints — capacity, precedence, SLAs, risk bounds — as exact mathematical programs, solved to optimality.",
  },
  {
    icon: Cpu,
    title: "Solver-Agnostic Expertise",
    desc: "We choose the right solver for each problem class: Gurobi for MIP, Hexaly for combinatorics, HiGHS for LP at scale, OR-Tools for routing.",
  },
  {
    icon: TrendingUp,
    title: "Explainable Optimal Decisions",
    desc: "Every recommendation comes with dual variables, sensitivity ranges, and plain-English rationale — not a neural network's gut feeling.",
  },
];

const AnalyticsSection = () => {
  return (
    <section className="py-12 sm:py-16" style={{ background: '#202E3C' }}>
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px" style={{ background: '#C8FF01' }} />
            <span className="text-xs font-medium uppercase tracking-[0.15em]" style={{ color: '#C8FF01' }}>Why OptimAI</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.1] mb-5 sm:mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Not Analytics. <span style={{ color: '#C8FF01' }}>Optimal</span> Analytics.
          </h2>
          <p className="text-sm sm:text-[13px] leading-relaxed max-w-4xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Most analytics firms give you dashboards and descriptions of what happened. Mu Sigma gives you reports. ORMAE gives you case
            studies. We give you provably optimal decisions — mathematical certainty, not educated guessing.
            <br />
            Optimization is not a feature we bolt on. It is the core of every solution we build — from formulation to solver selection to
            deployment in your production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((card) => (
            <div key={card.title} className="rounded-md p-5 sm:p-7 pb-6 sm:pb-8" style={{ background: '#09091199', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <card.icon className="w-5 h-5 shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }} />
                <h3 className="text-white font-semibold text-sm sm:text-[14px]">{card.title}</h3>
              </div>
              <p className="text-[13px] sm:text-[13px] leading-relaxed pl-8" style={{ color: 'rgba(255,255,255,0.45)' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
