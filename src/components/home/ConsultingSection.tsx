import teamCollageImg from "@/assets/team-collage-new.png";
import iconDomain from "@/assets/icon-domain.png";
import iconEngineering from "@/assets/icon-engineering.png";
import iconAiDs from "@/assets/icon-ai-ds.png";
import iconTechStrategy from "@/assets/icon-tech-strategy.png";
import ScrollReveal, { ScrollRevealItem } from "@/components/ewm/ScrollReveal";
// @ts-ignore

const features = [
  { icon: iconDomain, title: "Deep Domain Knowledge" },
  { icon: iconEngineering, title: "Engineering Expertise" },
  { icon: iconAiDs, title: "AI & Data Science" },
  { icon: iconTechStrategy, title: "Tech–Strategy Bridge" },
];

const ConsultingSection = () => {
  return (
    <section className="relative py-10 sm:py-16" style={{ backgroundColor: '#060604' }}>
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeRight" duration={0.9}>
          <div className="mb-3 sm:mb-4">
            <div className="inline-block">
              <p
                className="text-foreground text-[17px] sm:text-[20px] xl:text-[21px] 2xl:text-[23px] tracking-wide mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
              >
                Who we are
              </p>
              <div className="w-[60%] h-[3px] bg-foreground" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-4 lg:gap-6 items-start">
          <ScrollReveal animation="fadeUp" duration={0.9} className="pt-1 md:pl-6 lg:pl-10">
            <h2
              className="text-[22px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[35px] 2xl:text-[43px] leading-[1.15] mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}
            >
              One Team.{" "}
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 400,
                  color: '#30E8BA',
                }}
              >
                Deep Expertise.
              </span>
            </h2>

            <p className="text-white/90 text-[14px] sm:text-[13px] md:text-[13.5px] xl:text-[14px] 2xl:text-[16px] mb-8 sm:mb-10 leading-relaxed max-w-[540px] xl:max-w-[660px]">
              We combine deep consulting expertise, industry knowledge, and
              technical strength in engineering, AI, and data science-embedding
              experts within teams to bridge strategy and execution.
            </p>

            <ScrollReveal animation="staggerChildren" staggerDelay={0.12} duration={0.5}>
              <div className="grid grid-cols-2 gap-x-5 gap-y-5 mb-10">
                {features.map(({ icon, title }) => (
                  <ScrollRevealItem key={title} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#2B2B2B' }}
                    >
                      <img src={icon} alt={title} className="w-5 h-5 object-contain" />
                    </div>
                    <span className="text-foreground font-semibold text-[13px] sm:text-[13px] xl:text-[14px] 2xl:text-[15px]">{title}</span>
                  </ScrollRevealItem>
                ))}
              </div>
            </ScrollReveal>

            <button
              className="px-6 py-2.5 text-[13px] font-semibold transition-colors"
              style={{ backgroundColor: '#F5BE3D', color: '#0a0a0a', borderRadius: 0 }}
            >
              Explore Our Team →
            </button>
          </ScrollReveal>

          <ScrollReveal animation="fadeLeft" duration={1} delay={0.2}>
            <div className="flex items-start justify-center md:justify-start mt-4 sm:mt-6 md:-mt-2 lg:-mt-4 xl:-mt-6 md:-ml-2 lg:-ml-4">
              <img
                src={teamCollageImg}
                alt="Team Working Experience"
                className="w-full max-w-[640px] xl:max-w-none object-contain"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
