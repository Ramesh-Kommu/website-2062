// @ts-ignore
import { Heart, Wrench, BarChart3, Lightbulb, Users } from "lucide-react";
import ScrollReveal, { ScrollRevealItem } from "@/components/ewm/ScrollReveal";
import { useScrollActiveIndex } from "@/hooks/use-scroll-active";

const items = [
  { num: "01", icon: Heart, title: "Customer Impact", desc: "Every Solution Starts And Ends With Measurable Client Success." },
  { num: "02", icon: Wrench, title: "Engineering Excellence", desc: "Robust, Scalable Systems Built On Best-In-Class Practices." },
  { num: "03", icon: BarChart3, title: "Industrial Expertise", desc: "Deep Domain Knowledge Across Manufacturing Verticals." },
  { num: "04", icon: Lightbulb, title: "Practical Innovation", desc: "AI That Solves Real Problems, Not Just Proof-Of-Concepts." },
  { num: "05", icon: Users, title: "Collaborative Partnership", desc: "Long-Term Relationships Built On Trust And Shared Goals." },
];

const InnerCoreSection = () => {
  const { containerRef, activeIndex, setManualIndex } = useScrollActiveIndex<HTMLDivElement>({
    selector: "[data-scroll-card]",
  });

  return (
    <section className="relative py-10 sm:py-14 overflow-hidden" style={{ background: '#000000' }}>
      <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeRight" duration={0.9}>
          <div className="mb-6 sm:mb-8">
            <div className="inline-block">
              <p className="text-white text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Inner Core</p>
              <div className="w-[60%] h-[2px] bg-white" />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="clipReveal" duration={1}>
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-[26px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[43px] 2xl:text-[51px] mb-3 leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}
            >
              <span className="text-white">The Principles that Guide </span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, color: '#30E8BA' }}>
                Every Engagement & Decision
              </span>
            </h2>
            <p className="text-[14px] sm:text-[15px] xl:text-[15px] 2xl:text-[17px] max-w-[520px] xl:max-w-[640px] mx-auto leading-relaxed" style={{ color: '#C8C8C8' }}>
              Driven by trust, innovation, and measurable results.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="staggerChildren" staggerDelay={0.1} duration={0.6}>
          <div ref={containerRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {items.slice(0, 3).map((item, i) => (
                <ScrollRevealItem key={item.num}>
                  <Card {...item} isActive={activeIndex === i} onSelect={() => setManualIndex(i)} />
                </ScrollRevealItem>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[880px] mx-auto">
              {items.slice(3).map((item, i) => (
                <ScrollRevealItem key={item.num}>
                  <Card {...item} isActive={activeIndex === i + 3} onSelect={() => setManualIndex(i + 3)} />
                </ScrollRevealItem>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

function Card({ num, icon: Icon, title, desc, isActive, onSelect }: { num: string; icon: React.ElementType; title: string; desc: string; isActive: boolean; onSelect?: () => void }) {
  return (
    <div
      data-scroll-card
      className="px-4 py-4 transition-colors duration-300 h-full cursor-pointer"
      onClick={onSelect}
      style={{
        background: isActive ? '#33332B' : '#000000',
        border: `1px solid ${isActive ? '#33332B' : '#27271C'}`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#33332B';
        e.currentTarget.style.borderColor = '#33332B';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isActive ? '#33332B' : '#000000';
        e.currentTarget.style.borderColor = isActive ? '#33332B' : '#27271C';
      }}
    >
      <div className="flex items-start gap-3 mb-1">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: '#2A2A36' }}
        >
          <Icon size={17} style={{ color: '#C8FF01' }} />
        </div>
        <div>
          <span className="text-[11px] block mb-0.5" style={{ color: '#666' }}>{num}</span>
          <h4 className="font-semibold text-[16px] sm:text-[16px] xl:text-[16px] 2xl:text-[18px] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {title}
          </h4>
        </div>
      </div>
      <p className="text-[14px] sm:text-[13px] xl:text-[14px] 2xl:text-[15px] leading-relaxed mt-1.5 ml-[48px]" style={{ color: '#C8C8C8' }}>
        {desc}
      </p>
    </div>
  );
}

export default InnerCoreSection;
