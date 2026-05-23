import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import { getCaseDetail } from "@/data/caseStudyDetails";
import { getCaseBySlug } from "@/data/caseStudies";
import fallbackHero from "@/assets/insight-detail-hero.jpeg";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span
    className="inline-flex items-center justify-center rounded-md border border-white/15 bg-[#141618] px-3 py-1.5 text-[12px] sm:text-[12.5px] font-medium text-white/90"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    {children}
  </span>
);

const PainPoint = ({ n, text }: { n: string; text: string }) => (
  <li className="flex gap-4 text-[14px] sm:text-[14.5px] text-white/85 leading-[1.65] font-medium">
    <span className="text-[#C8FF01] font-semibold w-5 shrink-0">{n}</span>
    <span>{text}</span>
  </li>
);

interface Props {
  slug?: string;
}

const InsightDetail = ({ slug = "cfo-intelligence-suite" }: Props) => {
  const data = getCaseDetail(slug);
  const card = getCaseBySlug(slug);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0A0A06] text-white">
        <Navbar />
        <div className="mx-auto max-w-[800px] px-6 pt-40 pb-32 text-center">
          <h1 className="text-3xl font-semibold mb-4">Case study not found</h1>
          <p className="text-white/70">The requested case study could not be loaded.</p>
        </div>
        <FooterSection />
      </div>
    );
  }

  const heroImg = card?.image ?? fallbackHero;
  const cols = data.afterMetrics.length;
  const colsClass = cols === 3 ? "grid-cols-3" : cols === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2";

  return (
    <div className="min-h-screen" style={{ background: "#0A0A06", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "640px" }}>
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,6,0.85) 0%, rgba(10,10,6,0.6) 55%, rgba(10,10,6,0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,10,6,0) 60%, rgba(10,10,6,0.95) 100%)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-32 sm:pt-40 pb-12">
          <ScrollReveal animation="fadeUp" duration={0.6}>
            <p className="text-white/85 text-[12px] sm:text-[12.5px] font-semibold tracking-[0.24em] sm:tracking-[0.26em] uppercase mb-6">
              {data.eyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="clipReveal" duration={1} delay={0.1}>
            <h1 className="text-white text-[30px] sm:text-[52px] md:text-[43px] font-medium leading-[1.15] sm:leading-[1.08] mb-6 max-w-[860px]">
              {data.heroTitle}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.8} delay={0.3}>
            <p className="text-white/85 text-[14px] sm:text-[16px] max-w-[680px] leading-[1.7] mb-12">
              {data.heroSubtitle}
            </p>
          </ScrollReveal>

          {/* 3-column meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/12">
            {data.meta.map((c, i) => (
              <ScrollReveal
                key={i}
                animation="fadeUp"
                duration={0.7}
                delay={0.4 + i * 0.12}
                className={`py-5 md:px-6 ${i > 0 ? "md:border-l border-white/12" : ""}`}
              >
                <h4 className="text-white text-[14px] sm:text-[15px] font-semibold mb-2">{c.h}</h4>
                <p className="text-white/75 text-[13px] sm:text-[14px] leading-[1.65]">{c.t}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points / After */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal animation="fadeLeft" duration={0.9} className="md:pr-10 md:border-r border-white/10">
              <p className="text-white/75 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider mb-3">
                {data.painPointsLabel}
              </p>
              <h2 className="text-white text-[28px] sm:text-[38px] font-semibold leading-[1.2] sm:leading-[1.15] mb-8">
                {data.painPointsHeading}
              </h2>
              <ul className="space-y-3.5">
                {data.painPoints.map((p, i) => (
                  <PainPoint key={i} n={String(i + 1).padStart(2, "0")} text={p} />
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal animation="fadeRight" duration={0.9} delay={0.15} className="md:pl-4">
              <p className="text-white/75 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider mb-3">
                {data.afterLabel}
              </p>
              <h2 className="text-white text-[28px] sm:text-[38px] font-semibold leading-[1.2] sm:leading-[1.15] mb-6">
                {data.afterHeading}
              </h2>
              <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.75] mb-8 max-w-[560px]">
                {data.afterDescription}
              </p>
              <div className={`grid ${colsClass} border border-white/10 rounded-md overflow-hidden max-w-[560px]`}>
                {data.afterMetrics.map((m, i) => (
                  <div key={i} className={`p-5 ${i > 0 ? "border-l border-white/10" : ""}`}>
                    <div className="text-[20px] sm:text-[24px] font-bold mb-1 text-[#C8FF01]">{m.v}</div>
                    <div className="text-white/75 text-[12px] sm:text-[12.5px] font-medium leading-[1.4]">{m.s}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Data Architecture - light section */}
      <section className="py-16 sm:py-20" style={{ background: "#F4F2EA" }}>
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.6}>
            <p className="text-[#3B6CFF] text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider mb-3">
              {data.archEyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="clipReveal" duration={0.9} delay={0.1}>
            <h2 className="text-[#0A0A06] text-[26px] sm:text-[42px] font-semibold leading-[1.2] sm:leading-[1.15] mb-12">
              {data.archTitle}
            </h2>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
            {data.pipeline.map((p, i) => (
              <ScrollReveal
                key={i}
                animation="scaleUp"
                duration={0.6}
                delay={i * 0.1}
                className="flex items-center flex-1"
              >
                <div className="flex-1 border border-[#0A0A06]/20 bg-white rounded-sm px-4 py-4 min-h-[88px] flex flex-col justify-center transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="text-[#0A0A06] text-[14px] sm:text-[15px] font-bold mb-1.5">{p.title}</div>
                  <div className="text-[#0A0A06]/70 text-[10px] sm:text-[10.5px] font-semibold tracking-[0.16em] whitespace-pre-line leading-[1.5]">
                    {p.sub}
                  </div>
                </div>
                {i < data.pipeline.length - 1 && (
                  <div className="px-2 text-[#0A0A06]/50 text-[18px] hidden lg:block">→</div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.6}>
            <p className="text-white/75 text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider mb-3">
              {data.whatBuiltEyebrow}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="clipReveal" duration={0.9} delay={0.1}>
            <h2 className="text-white text-[26px] sm:text-[40px] font-semibold leading-[1.2] sm:leading-[1.15] mb-10">
              {data.whatBuiltTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.dashboardGroups.map((g, i) => (
              <ScrollReveal
                key={i}
                animation="fadeUp"
                duration={0.7}
                delay={(i % 2) * 0.1 + Math.floor(i / 2) * 0.05}
              >
                <div className="rounded-md border border-white/10 bg-[#0F1112] p-5 transition-all hover:border-white/25 hover:shadow-[0_10px_30px_rgba(200,255,1,0.06)]">
                  <h3
                    className="text-white text-[18px] sm:text-[20px] font-semibold mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {g.h}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <Pill key={it}>{it}</Pill>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.7}>
            <h2 className="text-white text-[26px] sm:text-[38px] font-semibold mb-8">{data.impactHeading}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-md overflow-hidden">
            {data.impactMetrics.map((m, i) => (
              <ScrollReveal
                key={i}
                animation="scaleUp"
                duration={0.6}
                delay={i * 0.1}
                className={`p-6 ${i % 2 === 1 ? "border-l border-white/10" : ""} ${
                  i >= 2 ? "border-t lg:border-t-0 lg:border-l border-white/10" : ""
                }`}
              >
                <p className="text-white/70 text-[10.5px] sm:text-[11px] font-semibold tracking-[0.18em] mb-3">
                  {m.label}
                </p>
                <div className="text-white text-[36px] sm:text-[48px] font-bold leading-none mb-3">{m.v}</div>
                <p className="text-white/75 text-[12.5px] sm:text-[13px] font-medium leading-[1.55]">{m.s}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.7}>
            <h2 className="text-white text-[28px] sm:text-[40px] font-semibold mb-8">{data.outcomeHeading}</h2>
          </ScrollReveal>
          <ScrollReveal animation="clipReveal" duration={1} delay={0.15}>
            <p className="text-white/90 text-[17px] sm:text-[24px] font-medium leading-[1.55] sm:leading-[1.5] max-w-[960px]">
              {data.outcome}
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.6} delay={0.4}>
            <p className="text-right text-white/70 text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] mt-10">
              {data.attribution}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default InsightDetail;
