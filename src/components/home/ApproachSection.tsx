// @ts-ignore
import ScrollReveal, { ScrollRevealItem } from "@/components/ewm/ScrollReveal";

const steps = [
  { title: "Understand", desc: "Complex Industrial Environments" },
  { title: "Design", desc: "Scalable Digital Architectures" },
  { title: "Integrate", desc: "Enterprise & Operational Systems" },
  { title: "Apply AI", desc: "Analytics To Operational Challenges" },
  { title: "Deliver", desc: "Measurable Performance Improvements" },
];

const ApproachSection = () => {
  return (
    <section className="relative py-10 sm:py-14 overflow-hidden" style={{ background: '#0A0A06' }}>
      <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-40">
        <ScrollReveal animation="clipReveal" duration={1}>
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-[26px] sm:text-[26px] md:text-[32px] lg:text-[40px] mb-3 leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}
            >
              Our{" "}
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, color: '#30E8BA' }}>
                Approach
              </span>
            </h2>
            <p className="text-[13px] sm:text-[15px] max-w-[520px] mx-auto leading-relaxed" style={{ color: '#A1A1A1' }}>
              Technology expertise meets deep operational understanding.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="staggerChildren" staggerDelay={0.1} duration={0.55}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {steps.map(({ title, desc }) => (
              <ScrollRevealItem key={title}>
                <div
                  className="group relative cursor-pointer transition-all duration-300 h-full"
                  style={{
                    background: '#0A0A06',
                    border: '1px solid #27271C',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = '#33332B';
                    el.style.borderColor = '#33332B';
                    const bar = el.querySelector<HTMLElement>('[data-bar]');
                    if (bar) bar.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = '#0A0A06';
                    el.style.borderColor = '#27271C';
                    const bar = el.querySelector<HTMLElement>('[data-bar]');
                    if (bar) bar.style.width = '50%';
                  }}
                >
                  <div
                    data-bar
                    className="absolute top-0 left-0 h-[3px] transition-all duration-300"
                    style={{ width: '50%', background: '#FFCF1C' }}
                  />
                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <h4
                      className="font-semibold text-[14px] sm:text-[15px] mb-1"
                      style={{ color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {title}
                    </h4>
                    <p className="text-[11px] sm:text-[12px] leading-relaxed" style={{ color: '#A1A1A1' }}>
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ApproachSection;
