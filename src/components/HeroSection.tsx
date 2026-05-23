import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1500px] px-5 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-[10px] sm:text-xs font-medium uppercase tracking-wider">AI × Optimization</span>
        </div>

        <h1 className="text-[32px] sm:text-[48px] md:text-[56px] font-medium leading-[1.15] tracking-normal mb-5 sm:mb-6 max-w-3xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          <span className="text-foreground">Turn Data Into</span>
          <br />
          <span className="text-primary">Optimal Decisions.</span>
        </h1>

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mb-8 sm:mb-12 leading-relaxed">
          We combine industrial-strength solvers — Gurobi, Hexaly, OR-Tools, CPLEX — with deep
          domain expertise to transform your most complex operational decisions into
          competitive advantage. No black boxes. Pure mathematics.
        </p>

        <div className="grid grid-cols-2 sm:flex items-center gap-6 sm:gap-8 md:gap-16">
          <div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">40%</span>
            <p className="text-muted-foreground text-xs sm:text-xs mt-1">Avg Cost Reduction</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10×</span>
            <p className="text-muted-foreground text-xs sm:text-xs mt-1">Faster Than Heuristics</p>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">100+</span>
            <p className="text-muted-foreground text-xs sm:text-xs mt-1">Optimization Models</p>
          </div>
          <div className="hidden sm:block">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">∞</span>
            <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">Provable Optimality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
