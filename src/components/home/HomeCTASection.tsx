import ScrollReveal from "@/components/ewm/ScrollReveal";

const HomeCTASection = () => {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Half-circle glow */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "-260px",
          width: "780px",
          height: "520px",
          maxWidth: "120%",
          background: "#276B5A",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          filter: "blur(160px)",
          opacity: 0.95,
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1000px] flex-col items-center px-5 text-center sm:px-6">
        <ScrollReveal animation="fadeUp" duration={0.6}>
          <span
            className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#30E8BA" }}
          >
            Ready to Transform ?
          </span>
        </ScrollReveal>

        <ScrollReveal animation="clipReveal" duration={1} delay={0.1}>
          <h2
            className="mb-6 font-heading text-[32px] font-semibold leading-[1.1] text-white sm:text-[56px] lg:text-[52px]"
          >
            Building the Future
            <br />
            of{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #DCFFF6 0%, #09E1AB 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Intelligent Manufacturing
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" duration={0.7} delay={0.25}>
          <p
            className="mx-auto mb-10 max-w-[640px] text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            The next decade will fundamentally shift how manufacturing operates, and AI analytics and
            data-driven insights will redefine how industries plan, produce, and deliver.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" duration={0.6} delay={0.4}>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <a
              href="/contact"
              className="rounded-full px-5 py-2.5 text-[12px] font-medium transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-[13px] inline-block"
              style={{ background: "#E8E8E8", color: "#0A0A0A" }}
            >
              Contact Us
            </a>

            <button
              className="rounded-full px-5 py-2.5 text-[12px] font-medium transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-[13px]"
              style={{ background: "#30E8BA", color: "#0A0A0A" }}
            >
              Explore More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeCTASection;
