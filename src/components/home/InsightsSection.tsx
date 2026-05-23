import { useEffect, useState } from "react";
import insightBg from "@/assets/insight-bg-main.jpg";
import imgProcurement from "@/assets/case-studies/procurement-logistics-intelligence.jpg";
import imgPharma from "@/assets/case-studies/enterprise-analytics-pharma.jpg";
import imgAnimalNutrition from "@/assets/case-studies/sap-analytics-animal-nutrition.jpg";
import ScrollReveal from "@/components/ewm/ScrollReveal";

const SLIDE_DURATION = 6000; // ms per card

const slides = [
  {
    image: insightBg,
    category: "CASE STUDY  |  MANUFACTURING",
    title: "Material Reconciliation",
    titleScript: "& Production Accounting",
    subtitle: "From Unexplained Losses to Real-Time Production Accounting",
    stats: [
      { value: "100%", label: "End-to-End Material Visibility" },
      { value: "Real-Time", label: "Loss Tracking & Reconciliation" },
    ],
  },
  {
    image: imgProcurement,
    category: "CASE STUDY  |  PROCUREMENT & LOGISTICS",
    title: "Procurement & Logistics",
    titleScript: "Intelligence, Reimagined",
    subtitle:
      "End-to-end procurement and logistics intelligence powered by SAP-driven analytics — built on a unified on-premise SQL Server + Power BI data layer.",
    stats: [
      { value: "35%", label: "↓ Reporting Time" },
      { value: "Live", label: "Drill-Down Visibility" },
    ],
  },
  {
    image: imgPharma,
    category: "CASE STUDY  |  PHARMA OPERATIONS",
    title: "Enterprise Analytics",
    titleScript: "for Pharma Operations",
    subtitle:
      "Unified visibility across procurement, sales, finance, and inventory performance — powered by SAP S/4HANA and Power BI.",
    stats: [
      { value: "100%", label: "End-to-End Data Visibility" },
      { value: "Real-Time", label: "Actionable Insights & Decisions" },
    ],
  },
  {
    image: imgAnimalNutrition,
    category: "CASE STUDY  |  ANIMAL NUTRITION",
    title: "Unifying SAP-driven\nAnalytics for a Leader",
    titleScript: "in Animal Nutrition",
    subtitle:
      "A unified analytics layer across sales, inventory, and financial performance — engineered on SAP ECC, SAP BW, and Power BI.",
    stats: [
      { value: "35%", label: "↓ Reporting Turnaround" },
      { value: "20%", label: "↑ Working Capital Visibility" },
    ],
  },
];

const InsightsSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const goPrev = () => setActive((p) => (p - 1 + total) % total);
  const goNext = () => setActive((p) => (p + 1) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % total);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section className="bg-white">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Background image with crossfade + slow Ken Burns zoom on active */}
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === active ? 1 : 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: i === active ? "scale(1.06)" : "scale(1)",
              transition:
                "opacity 1000ms ease-in-out, transform 7000ms ease-out",
            }}
          />
        ))}

        {/* Dark gradient overlay for readability on photo backgrounds */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.65) 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 xl:px-32 2xl:px-20 py-8 sm:py-9 md:py-10">
          {/* Featured insights eyebrow */}
          <ScrollReveal animation="fadeRight" duration={0.8}>
            <div className="mb-6 sm:mb-8">
              <div className="inline-block">
                <p
                  className="text-white text-[17px] sm:text-[20px] xl:text-[21px] 2xl:text-[23px] tracking-wide mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
                >
                  Featured insights
                </p>
                <div className="w-[60%] h-[2px] bg-white" />
              </div>
            </div>
          </ScrollReveal>

          {/* Slide content with crossfade + slide-up */}
          <div className="relative max-w-[760px] xl:max-w-[900px] 2xl:max-w-[1020px] ml-2 sm:ml-6 md:ml-12 lg:ml-14 mt-10 sm:mt-14 md:mt-16 min-h-[260px] sm:min-h-[290px] xl:min-h-[320px] 2xl:min-h-[360px]">
            {slides.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(20px)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <p
                    className="text-white text-[12px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] mb-3 sm:mb-4 font-medium"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      animation: isActive ? "insightFadeUp 700ms ease-out both" : "none",
                      animationDelay: "80ms",
                    }}
                  >
                    {s.category}
                  </p>
                  <h2
                    className="whitespace-pre-line text-white text-[22px] sm:text-[32px] md:text-[42px] xl:text-[47px] 2xl:text-[52px] font-normal leading-[1.05] mb-1"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      animation: isActive ? "insightFadeUp 800ms ease-out both" : "none",
                      animationDelay: "180ms",
                    }}
                  >
                    {s.title}
                  </h2>
                  <h2
                    className="text-[#30E8BA] text-[22px] sm:text-[32px] md:text-[42px] xl:text-[47px] 2xl:text-[52px] font-normal leading-[1.05] mb-5 sm:mb-6 not-italic"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontStyle: "normal",
                      animation: isActive ? "insightFadeUp 800ms ease-out both" : "none",
                      animationDelay: "280ms",
                    }}
                  >
                    {s.titleScript}
                  </h2>
                  <p
                    className="text-white text-[14px] sm:text-[14px] md:text-[15px] xl:text-[15px] 2xl:text-[17px] leading-relaxed mb-6 sm:mb-7"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      animation: isActive ? "insightFadeUp 800ms ease-out both" : "none",
                      animationDelay: "400ms",
                    }}
                  >
                    {s.subtitle}
                  </p>

                  <div className="flex gap-8 sm:gap-12">
                    {s.stats.map((stat, j) => (
                      <div
                        key={j}
                        style={{
                          animation: isActive ? "insightFadeUp 800ms ease-out both" : "none",
                          animationDelay: `${520 + j * 120}ms`,
                        }}
                      >
                        <div
                          className="text-[#30E8BA] text-[18px] sm:text-[20px] xl:text-[21px] 2xl:text-[25px] font-semibold mb-1"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-white/85 text-[12px] sm:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel controls */}
          <div className="mt-10 sm:mt-4 md:mt-5 flex items-center gap-4 sm:gap-6 ml-2 sm:ml-6 md:ml-12 lg:ml-14">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/50 text-white/80 hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={goNext}
                aria-label="Next"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/50 text-white/80 hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="flex-1 h-[4px] bg-white/25 relative overflow-hidden rounded-full">
              <div
                key={`${active}-${paused}`}
                className="absolute left-0 top-0 h-full bg-white"
                style={{
                  width: "100%",
                  transformOrigin: "left center",
                  animation: paused
                    ? "none"
                    : `insightProgress ${SLIDE_DURATION}ms linear forwards`,
                }}
              />
            </div>

            <div
              key={`counter-${active}`}
              className="text-white text-[20px] sm:text-[28px] xl:text-[31px] 2xl:text-[35px] font-normal whitespace-nowrap"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                animation: "insightFadeUp 500ms ease-out both",
              }}
            >
              <span className="font-semibold">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-white/70 text-[14px] sm:text-[18px] xl:text-[18px] 2xl:text-[20px]">
                /{String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes insightProgress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes insightFadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default InsightsSection;
