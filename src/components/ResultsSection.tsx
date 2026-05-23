const stats = [
  { value: "40%", label: "Optimization Models" },
  { value: "10×", label: "Faster Than Heuristics" },
  { value: "100+", label: "Optimization Models Deployed" },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-12 sm:py-16" style={{ background: '#080B14' }}>
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ background: '#C8FF01' }} />
          <span className="text-xs font-medium uppercase tracking-[0.15em]" style={{ color: '#C8FF01' }}>Proven Outcomes</span>
          <div className="w-8 h-px" style={{ background: '#C8FF01' }} />
        </div>
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.1] mb-10 sm:mb-14" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Results That. <span style={{ color: '#C8FF01' }}>Speak.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-md p-8 sm:p-10" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <span
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #B0ED13 0%, #33A88D 100%)' }}
              >
                {stat.value}
              </span>
              <p className="text-sm sm:text-[13px] mt-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
