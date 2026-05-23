import globalReachBg from "@/assets/global-reach-bg.png";
import ScrollReveal, { ScrollRevealItem } from "@/components/ewm/ScrollReveal";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "8+", label: "Countries Served" },
  { value: "200+", label: "Employees" },
];

const GlobalReachSection = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={globalReachBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Mobile-only readability overlay */}
      <div
        className="absolute inset-0 sm:hidden pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 flex flex-col justify-end min-h-[320px] sm:min-h-[380px] pb-10 sm:pb-14 pt-14 sm:pt-20">
        <ScrollReveal animation="fadeRight" duration={0.9}>
          <div className="mb-6 sm:mb-8">
            <div className="inline-block">
              <p className="text-white text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Global Reach</p>
              <div className="w-[60%] h-[2px] bg-white" />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="clipReveal" duration={1}>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-[26px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[43px] 2xl:text-[51px] mb-3 text-white leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>Where We <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#30E8BA' }}>Operate</span></h2>
            <p className="text-white text-[14px] sm:text-[13px] xl:text-[14px] 2xl:text-[16px] max-w-[560px] xl:max-w-[680px] mx-auto leading-relaxed">
              Headquartered in India and the USA, Carbynetech supports manufacturing enterprises across South Asia, the Middle East, and global industrial markets.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="staggerChildren" staggerDelay={0.15} duration={0.6}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 overflow-hidden border-l border-r border-b border-white/10">
            {stats.map(({ value, label }, i) => (
              <ScrollRevealItem
                key={label}
                className={`py-5 sm:py-7 px-4 text-center ${
                  i < 3 ? "sm:border-r border-white/10" : ""
                } ${i % 2 === 0 ? "border-r border-white/10 sm:border-r" : ""} ${
                  i < 2 ? "border-b border-white/10 sm:border-b-0" : ""
                }`}
              >
                <span
                  className="block text-white"
                  style={{
                    fontFamily: "'Radio Canada Big', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 4vw, 42px)",
                    lineHeight: 1.2,
                  }}
                >
                  {value}
                </span>
                <p className="text-[14px] sm:text-[13px] xl:text-[14px] 2xl:text-[15px] text-white/85 mt-2 tracking-wider sm:tracking-widest leading-snug">
                  {label}
                </p>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalReachSection;
