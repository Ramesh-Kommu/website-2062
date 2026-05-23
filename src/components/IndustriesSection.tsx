import gridlinesBg from "@/assets/gridlines.png";

const industries = [
  "Supply Chain", "Logistics & Transport", "Manufacturing", "Finance", "Healthcare",
  "Energy & Utilities", "Construction", "Agri & Food", "Defense & Govt", "Pharma",
];

const IndustriesSection = () => {
  return (
    <section
      id="industries"
      className="py-12 sm:py-16 relative overflow-hidden"
      style={{ background: "#080B14" }}
    >
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage: `url(${gridlinesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="text-primary text-xs sm:text-xs font-medium uppercase tracking-widest">
              Industry Verticals
            </span>
          </div>
          <h2
            className="text-[26px] sm:text-3xl md:text-[42px] font-normal leading-[1.1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Optimization Works
            <br />
            Everywhere Hard <span className="text-primary">Decisions Exist.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {industries.map((ind) => (
            <button
              key={ind}
              className="border border-border/60 rounded-full px-3 sm:px-6 py-2.5 sm:py-3 text-sm text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors text-center"
              style={{ background: '#05111A' }}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
