import visionBg from "@/assets/vision2030-bg.png";
import visionVideo from "@/assets/vision2030-bg.mp4";
import ScrollReveal from "@/components/ewm/ScrollReveal";

const Vision2030Section = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '500px' }}>
      <video
        src={visionVideo}
        poster={visionBg}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(0deg, rgba(10, 10, 6, 0) 0%, #0A0A06 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(10,10,6,0) 0%, rgba(10,10,6,0.55) 50%, rgba(10,10,6,0) 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, #000000 100%)" }}
      />
      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 py-16 sm:py-20 md:py-28 flex flex-col justify-center min-h-[500px]">
        <ScrollReveal animation="fadeRight" duration={0.8}>
          <div className="mb-6 sm:mb-8">
            <div className="inline-block">
              <p className="text-white text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>The Decade of Intelligence</p>
              <div className="w-[35%] h-[2px] bg-white" />
            </div>
          </div>
        </ScrollReveal>

        <div className="sm:pl-12 md:pl-20">
        <ScrollReveal animation="fadeUp" duration={0.9} delay={0.1}>
          <h2
            className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[31px] 2xl:text-[35px] font-medium leading-[1.1] text-white mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            AI + Manufacturing
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="clipReveal" duration={1.1} delay={0.2}>
          <p
            className="text-[38px] sm:text-[56px] md:text-[68px] xl:text-[80px] 2xl:text-[100px] font-medium leading-[1.1] mb-6 sm:mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#30E8BA" }}
          >
            Vision 2030
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" duration={0.8} delay={0.35}>
          <p className="text-white/85 text-[14px] sm:text-sm md:text-base xl:text-[16px] 2xl:text-[18px] max-w-[560px] xl:max-w-[700px] leading-relaxed mb-8 sm:mb-10">
            Embrace AI, machine intelligence and predictive analytics for next-generation
            manufacturing. Our vision connects people, processes and machines into a unified
            intelligence layer.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" duration={0.7} delay={0.5}>
          <div>
            <a href="#team" className="inline-flex items-center gap-2 text-white text-[13px] sm:text-sm font-semibold group">
              Explore Our Team
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <div className="w-[140px] h-px bg-white/30 mt-2" />
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Vision2030Section;
