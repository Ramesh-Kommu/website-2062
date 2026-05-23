import { motion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import { Code2, Layout, Cloud, Cog, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import heroBg from "@/assets/tech-factory-hero-bg.png";

const LIME = "#C8FF01";
const GREEN_BORDER = "rgba(200,255,1,0.25)";
const PANEL_BG = "#0B0F18";
const ENGAGE_BG = "#1F3247";
const SKILL_COLORS = ["#FFC61A", "#00FFFF", "#00F891", "#B336F6", "#19D3D6"];

/* ---------- Eyebrow ---------- */
const Eyebrow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="w-6 h-px" style={{ background: LIME }} />
    <span className="text-[10px] font-medium tracking-[0.2em]" style={{ color: LIME }}>
      {text}
    </span>
  </div>
);

/* ---------- Hero ---------- */
const HeroSection = () => {
  const stats = [
    { value: "14+", label: "SAP Domains" },
    { value: "<2 Wks", label: "Ramp-Up" },
    { value: "100%", label: "SAP-Only Focus" },
  ];
  return (
    <section className="relative min-h-[600px] sm:min-h-[640px] flex items-center overflow-hidden bg-black">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6"
          style={{ background: "rgba(200,255,1,0.08)", border: `1px solid ${GREEN_BORDER}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="text-[13px] sm:text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: LIME }}>
            SAP Centre of Excellence — 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[40px] sm:text-[44px] md:text-[56px] font-medium leading-[1.1] mb-5 max-w-3xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          The right SAP talent,<br />
          exactly when you need it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[16px] sm:text-[14px] max-w-xl mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Pre-qualified, project-ready SAP specialists across 14 technical domains — deployed in days, not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-3 gap-6 sm:gap-12 max-w-xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[34px] sm:text-[32px] md:text-[36px] font-medium leading-none mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-[12px] sm:text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Disciplines ---------- */
type Skill = { title: string; subtitle: string };
type Discipline = { num: string; title: string; icon: React.ElementType; skills: Skill[] };

const disciplines: Discipline[] = [
  {
    num: "01", title: "Core ABAP & OO", icon: Code2,
    skills: [
      { title: "Core ABAP", subtitle: "Syntax & Modules" },
      { title: "ABAP OO", subtitle: "Object-Oriented" },
      { title: "RESTful App Programming", subtitle: "Clean Core" },
      { title: "CDS Views", subtitle: "Pull-down Ready" },
    ],
  },
  {
    num: "02", title: "UX & Frontend", icon: Layout,
    skills: [
      { title: "Fiori / UI5", subtitle: "UX Excellence" },
    ],
  },
  {
    num: "03", title: "S/4 Cloud & Integration", icon: Cloud,
    skills: [
      { title: "SAP BTP Admin", subtitle: "Platform Governed" },
      { title: "BTP Developer", subtitle: "Extension Ready" },
      { title: "CPI Suite", subtitle: "Plug-n-Play" },
      { title: "PI/PO Integration", subtitle: "Migration Ready" },
      { title: "REST / SOAP APIs", subtitle: "Agile" },
      { title: "EDI Developer", subtitle: "B2B Fluency" },
    ],
  },
  {
    num: "04", title: "Automation & DevOps", icon: Cog,
    skills: [
      { title: "SAP Joule — AI", subtitle: "AI-Native" },
      { title: "Workflow Automation", subtitle: "Process Eng." },
      { title: "DevOps & ALM", subtitle: "CI/CD Ready" },
    ],
  },
];

const DisciplinesSection = () => (
  <section className="py-8 sm:py-10 bg-black">
    <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <ScrollReveal animation="fadeUp">
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px" style={{ background: LIME }} />
            <span className="text-[12px] sm:text-[10px] font-medium tracking-[0.2em]" style={{ color: LIME }}>
              Capacity Intelligence
            </span>
            <span className="w-6 h-px" style={{ background: LIME }} />
          </div>
          <h2 className="text-[36px] sm:text-[36px] md:text-[40px] font-medium text-white leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            14 Disciplines. One Bench.
          </h2>
          <p className="mt-3 text-[15px] sm:text-[13px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            Each resource is SAP-certified, project-tested, and ready for immediate deployment.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-0">
        {disciplines.map((d, i) => {
          const Icon = d.icon;
          return (
            <ScrollReveal key={d.num} animation="fadeUp" delay={i * 0.05}>
              <div className="group/disc border-t border-white/10 pt-5 pb-6 px-3 sm:px-4 transition-colors duration-500 ease-out hover:bg-white/[0.03]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-5 sm:gap-8">
                    <span
                      className="text-[20px] sm:text-[18px] md:text-[20px] font-light transition-colors duration-500 group-hover/disc:text-white/60"
                      style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {d.num}
                    </span>
                    <h3
                      className="text-[21px] sm:text-[20px] md:text-[22px] font-medium leading-tight text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {d.title}
                    </h3>
                  </div>
                  <span className="text-[11px] sm:text-[10px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {d.skills.length} Skill{d.skills.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {d.skills.map((s, idx) => (
                    <div
                      key={s.title}
                      className="group/skill flex items-center gap-2.5 px-3 py-2.5 cursor-pointer opacity-90 translate-y-0 group-hover/disc:opacity-100 hover:!bg-white/[0.08] hover:!border-white/25 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "2px",
                        transition: "transform 500ms ease-out, background-color 400ms ease-out, border-color 400ms ease-out, opacity 400ms ease-out",
                        transitionDelay: `${idx * 60}ms`,
                      }}
                    >
                      {(() => {
                        const c = SKILL_COLORS[idx % SKILL_COLORS.length];
                        return (
                          <div
                            className="w-6 h-6 flex items-center justify-center shrink-0 transition-colors duration-300"
                            style={{ background: `${c}22`, borderRadius: "2px" }}
                          >
                            <Icon size={12} color={c} />
                          </div>
                        );
                      })()}
                      <div>
                        <div className="text-white text-[13.5px] sm:text-[11.5px] font-medium leading-tight">{s.title}</div>
                        <div className="text-[12px] sm:text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{s.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------- Engagement Flow ---------- */
const flowSteps = [
  { num: "01", title: "Requirement Briefing", desc: "SOW, scope, volumes, and time line defined with precision. No ambiguity." },
  { num: "02", title: "Talent Match & Profile", desc: "Pre-vetted, certified, and available specialists matched in 48-72 hours." },
  { num: "03", title: "Project Onboarding", desc: "Remote or on-site deployment. Full-time or project-based. Your move." },
];

const EngagementSection = () => (
  <section className="py-10 sm:py-14 md:py-16" style={{ background: ENGAGE_BG }}>
    <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <ScrollReveal animation="fadeUp">
        <Eyebrow text="Engagement Intelligence" />
        <h2
          className="text-[36px] sm:text-[36px] md:text-[40px] font-medium leading-[1.15] text-white mb-9 sm:mb-11"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          From requirement to Deployed specialist
        </h2>
      </ScrollReveal>

      {/* Timeline */}
      <div className="relative">
        {/* Horizontal line — centered through 14px dot (top + 7px) */}
        <div
          className="hidden md:block absolute left-0 right-0 h-px"
          style={{ background: "rgba(255,255,255,0.18)", top: "7px" }}
        />
        {/* Vertical line (mobile) — runs through center of 14px dots */}
        <div
          className="md:hidden absolute top-0 bottom-0 w-px"
          style={{ background: "rgba(255,255,255,0.18)", left: "6.5px" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {flowSteps.map((s, i) => (
            <ScrollReveal key={s.num} animation="fadeUp" delay={i * 0.1}>
              <div className="group relative cursor-pointer pl-7 md:pl-0">
                {/* Dot — exactly 14px, sits on the line */}
                <div
                  className="rounded-full mb-5 md:mb-7 transition-transform duration-300 ease-out group-hover:scale-125 flex items-center justify-center absolute md:relative left-0 top-1 md:top-0"
                  style={{
                    width: 14,
                    height: 14,
                    border: `1.5px solid ${LIME}`,
                    background: ENGAGE_BG,
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ width: "100%", height: "100%", background: LIME }}
                  />
                </div>

                <div
                  className="text-[16px] sm:text-[14px] mb-3 transition-all duration-300 group-hover:text-[15px]"
                  style={{ color: LIME, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.num}
                </div>
                <h3
                  className="text-white font-normal mb-3 transition-all duration-300"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(20px, 1.6vw, 22px)",
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="leading-relaxed transition-all duration-300"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "clamp(15px, 1vw, 14.5px)",
                    maxWidth: "320px",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Why + Engagement Scenarios ---------- */
const whyPoints = [
  "100+ bench-strong team — zero speed-of-talent bottlenecks",
  "Pre-vetted & certified across all SAP specialties",
  "Single specialist to full squad — agile team scaling",
  "92%+ SLA on documentation readiness from day one",
  "NDA-first engagement — zero client IP risk",
];
const scenarios = [
  "Project Augmentation", "AMS Support",
  "S/4HANA Migration", "BTP Implementation",
  "Integration Modernization", "End-of-Life Rollout",
  "ABAP Optimization", "CPI Deployment",
];

const WhySection = () => (
  <section className="py-8 sm:py-10" style={{ background: "#060604" }}>
    <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <ScrollReveal animation="fadeUp">
        <div
          className="rounded-xl p-5 sm:p-8 md:p-10"
          style={{ border: "1px solid #262926", background: "#060604" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
            {/* Why Carbynetech */}
            <div className="md:pr-10">
              <h3
                className="text-[15px] sm:text-[13.5px] font-medium mb-6"
                style={{ color: LIME, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Why Carbynetech
              </h3>
              <ul className="space-y-4">
                {whyPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-[13.5px] sm:text-[12px] leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <span
                      className="shrink-0 text-[14px] sm:text-[12px] mt-px"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      →
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engagement Scenarios — with left separator on md+ */}
            <div className="md:pl-10 md:border-l" style={{ borderColor: "#262926" }}>
              <h3
                className="text-[15px] sm:text-[13.5px] font-medium mb-6"
                style={{ color: LIME, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Engagement Scenarios
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {scenarios.map((s) => (
                  <div
                    key={s}
                    className="text-center px-3 py-3 text-[13px] sm:text-[11.5px] rounded-md cursor-pointer transition-colors duration-200 hover:bg-[#2a2a2a]"
                    style={{
                      border: "1px solid #262926",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ---------- Client Proof ---------- */
const testimonials = [
  {
    num: "01",
    quote: "“As a global life sciences company operating across 30 plants, our SAP roll-out demands tip-of-the-spear transparent on-site onboarding. Three sites, zero remote. Four months without a single quality escalation.”",
    name: "SVP — Global Manufacturing IT",
    company: "A Fortune 5 Aerospace Firm",
  },
  {
    num: "02",
    quote: "“We needed a CPI and EDI integration team to complete re-engineering of our legacy SAP landscape. Carbynetech delivered three CPI-certified specialists at 30% off market rate.”",
    name: "Head of IT — Enterprise Apps",
    company: "Banking & Financial Services, India",
  },
  {
    num: "03",
    quote: "“Our S/4HANA migration was stalling due to a critical knowledge gap in CDS Views. Carbynetech matched us with certified specialists within 72 hours. Production went live on time.”",
    name: "VP — SAP Programme Delivery",
    company: "Logistics & Manufacturing, India",
  },
];

const ClientProofSection = () => (
  <section className="py-8 sm:py-10 bg-black">
    <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <ScrollReveal animation="fadeUp">
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px" style={{ background: LIME }} />
            <span className="text-[12px] sm:text-[10px] font-medium tracking-[0.2em]" style={{ color: LIME }}>
              Client Proof
            </span>
            <span className="w-6 h-px" style={{ background: LIME }} />
          </div>
          <h2 className="text-[36px] sm:text-[36px] md:text-[40px] font-medium leading-[1.15] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Delivered to scale.<br />
            <span style={{ color: LIME }}>Trusted by leaders.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-0">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.num} animation="fadeUp" delay={i * 0.05}>
            <div className="grid grid-cols-12 gap-4 sm:gap-6 py-6 px-3 sm:px-4 border-t border-white/10 last:border-b transition-colors duration-200 hover:bg-white/[0.04] cursor-pointer items-center">
              <div className="col-span-1 text-[26px] sm:text-[24px] md:text-[28px] font-light" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Space Grotesk', sans-serif" }}>
                {t.num}
              </div>
              <p className="col-span-12 sm:col-span-7 text-[15px] sm:text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {t.quote}
              </p>
              <div className="col-span-12 sm:col-span-4 sm:text-right">
                <div className="text-white text-[14px] sm:text-[12.5px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {t.name}
                </div>
                <div className="text-[12.5px] sm:text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {t.company}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- CTA ---------- */
const CTASection = () => (
  <BrandedCTASection
    eyebrow="Get Started"
    title={<>Your Data Is Speaking.<br /><CtaHighlight>Are You Listening?</CtaHighlight></>}
    description="Start with a complimentary SAP Analytics Maturity Assessment — map your current state and design a roadmap to governed, AI-amplified clarity."
  />
);

/* ---------- Page ---------- */
const TechFactory = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <DisciplinesSection />
      <EngagementSection />
      <WhySection />
      <ClientProofSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default TechFactory;
