// @ts-ignore

import iconDigitalTransformation from "@/assets/icon-digital-transformation.png";
import iconCostOptimisation from "@/assets/icon-cost-optimisation.png";
import iconBigData from "@/assets/icon-big-data.png";
import iconDigitalTwin from "@/assets/icon-digital-twin.png";
import iconAiMl from "@/assets/icon-ai-ml.png";
import iconQualityAssurance from "@/assets/icon-quality-assurance.png";
import iconSupplyChain from "@/assets/icon-supply-chain.png";
import iconProcessAutomation from "@/assets/icon-process-automation.png";
import ScrollReveal, { ScrollRevealItem } from "@/components/ewm/ScrollReveal";
import { useScrollActiveIndex } from "@/hooks/use-scroll-active";

const deliverables = [
  { icon: iconDigitalTransformation, label: "Digital Transformation" },
  { icon: iconCostOptimisation, label: "Cost Optimization" },
  { icon: iconBigData, label: "Big Data & Analytics" },
  { icon: iconDigitalTwin, label: "Digital Twin & IIOT" },
  { icon: iconAiMl, label: "AI & Machine Learning" },
  { icon: iconQualityAssurance, label: "Quality Assurance" },
  { icon: iconSupplyChain, label: "Supply Chain Finance" },
  { icon: iconProcessAutomation, label: "Process Automation" },
];

const WhatWeDeliverSection = () => {
  const { containerRef, activeIndex, setManualIndex } = useScrollActiveIndex<HTMLDivElement>({
    selector: "[data-scroll-card]",
  });

  return (
    <section className="py-10 sm:py-14" style={{ background: "#0A0A06" }}>
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="clipReveal" duration={1}>
          <div className="text-center mb-10 sm:mb-14">
            <div className="mb-6 sm:mb-8 flex justify-start sm:justify-center">
              <div className="inline-block">
                <p className="text-white text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Capabilities</p>
                <div className="w-[60%] h-[2px] bg-white" />
              </div>
            </div>
            <h2
              className="text-[26px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[43px] 2xl:text-[51px] mb-4 leading-[1.1]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, color: '#ffffff' }}
            >
              We Help You{" "}
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, color: '#30E8BA' }}>
                See Further.
              </span>
            </h2>
            <p className="text-[13px] sm:text-[15px] xl:text-[15px] 2xl:text-[17px] max-w-[640px] xl:max-w-[780px] mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
              Bridging what is with what can be — across every layer of your industrial enterprise.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="staggerChildren" staggerDelay={0.08} duration={0.55}>
          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map(({ icon, label }, i) => {
              const isActive = activeIndex === i;
              return (
                <ScrollRevealItem key={label}>
                  <div
                    data-scroll-card
                    className="group px-5 py-3 sm:px-6 sm:py-4 transition-all duration-300 cursor-pointer h-full"
                    style={{
                      background: isActive ? '#33332B' : '#0A0A06',
                      border: '1px solid #27271C',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#33332B';
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.filter = 'brightness(0) saturate(100%) invert(85%) sepia(80%) saturate(600%) hue-rotate(5deg) brightness(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isActive ? '#33332B' : '#0A0A06';
                      const img = e.currentTarget.querySelector('img');
                      if (img) img.style.filter = isActive ? 'brightness(0) saturate(100%) invert(85%) sepia(80%) saturate(600%) hue-rotate(5deg) brightness(1.1)' : 'none';
                    }}
                    onClick={() => setManualIndex(i)}
                  >
                    <img
                      src={icon}
                      alt={label}
                      className="w-7 h-7 mb-2 transition-all duration-300 group-hover:opacity-100"
                      style={{
                        opacity: isActive ? 1 : 0.7,
                        filter: isActive ? 'brightness(0) saturate(100%) invert(85%) sepia(80%) saturate(600%) hue-rotate(5deg) brightness(1.1)' : undefined,
                      }}
                      loading="lazy"
                    />
                    <span
                      className="text-[15px] sm:text-[15px] xl:text-[15px] 2xl:text-[17px] font-medium block"
                      style={{ color: '#D6D6D6', fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {label}
                    </span>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;
