import { useState } from "react";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import { motion } from "framer-motion";
import {
  Target, Database, ClipboardCheck, Lock,
  Wrench, Briefcase, Globe2, FileSearch,
  FileCode2, UserCheck, Layers, TrendingUp,
  Compass, Layout, Plug, Truck, Sparkles,
  ShieldCheck, BookOpen, Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/sap-rise-hero-bg.png";

const LIME = "#C8FF01";
const TEAL = "#5EE7C8";
const GREEN_BORDER = "rgba(200,255,1,0.25)";
const PANEL = "#0F1420";

/* Hero-only tokens */
const HERO_LIME = "#AAFF00";
const HERO_DESC = "#8799AB";
const HERO_BORDER = "rgba(170,255,0,0.35)";

/* ---------- Hero ---------- */
const HeroSection = () => {
  const chips = ["End-to-End Delivery", "Global Template Expertise", "Post-Go-Live Value Expansion"];
  return (
    <section className="relative min-h-[640px] sm:min-h-[720px] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 sm:mb-8"
          style={{ background: "rgba(170,255,0,0.06)", border: `1px solid ${HERO_BORDER}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: HERO_LIME }} />
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.02em]" style={{ color: HERO_LIME }}>
            Rise With SAP S/4HANA · Implementation Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[28px] sm:text-[40px] md:text-[52px] font-medium leading-[1.1] mb-5 max-w-5xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Your ECC Is a Ticking Clock.<br />
          Your Transformation{" "}
          <span className="sm:whitespace-nowrap">Deserves More Than a Migration.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[13px] sm:text-[14px] max-w-xl mb-10 leading-relaxed"
          style={{ color: HERO_DESC }}
        >
          Carbynetech delivers end-to-end RISE with SAP S/4HANA journeys — blueprint through global rollout to continuous value expansion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-3"
        >
          {chips.map((c) => (
            <span
              key={c}
              className="px-5 py-2.5 text-[12px] sm:text-[13px] font-medium rounded-full"
              style={{ background: "transparent", border: `1px solid ${HERO_BORDER}`, color: HERO_LIME, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Section header helper (left-aligned eyebrow) ---------- */
const Eyebrow = ({ text, color = LIME }: { text: string; color?: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-px" style={{ background: color }} />
    <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color }}>{text}</span>
  </div>
);

/* ---------- Challenges (Enterprise Risks) ---------- */
const ChallengesSection = () => {
  const items = [
    { icon: Target, title: "Scope Drift", titleColor: "#30E8BA", desc: "Unclear process ownership — scope drift starts before config begins." },
    { icon: Database, title: "Data Debt", titleColor: "#F5BE3D", desc: "Legacy data quality failures surfacing too late to remediate." },
    { icon: ClipboardCheck, title: "UAT Bottlenecks", titleColor: "#3CCADD", desc: "Solution gaps discovered post-implementation eroding confidence." },
    { icon: Lock, title: "Locked Value", titleColor: "#7588A3", desc: "Advanced scenarios unconfigured after cutover — ROI unrealised." },
  ];
  return (
    <section className="py-10 sm:py-12 lg:py-14" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <Eyebrow text="Enterprise Risks" color={HERO_LIME} />
        <h2
          className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium text-white leading-[1.1] mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Challenges That Derail Transformations
        </h2>
        <p className="text-[13px] sm:text-[14px] mb-6 sm:mb-8" style={{ color: "#8799AB" }}>
          The hidden risks that erode SAP programmes before they deliver value.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 justify-items-center">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-md px-3 py-4 sm:px-4 sm:py-5 flex flex-col items-center text-center cursor-default transition-colors duration-300 w-full max-w-[260px]"
              style={{
                background: "#13161D",
                border: "0.8px solid #1E232C",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#141A28";
                e.currentTarget.style.border = "0.8px solid #454545";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#13161D";
                e.currentTarget.style.border = "0.8px solid #1E232C";
              }}
            >
              <div
                className="w-10 h-10 rounded-md flex items-center justify-center mb-3"
                style={{ background: "#161920", border: "1px solid #1E232C" }}
              >
                <it.icon size={16} className="text-white" strokeWidth={1.6} />
              </div>
              <h3
                className="text-[14px] sm:text-[15px] font-semibold mb-1.5"
                style={{ color: it.titleColor, fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {it.title}
              </h3>
              <p className="text-[11.5px] sm:text-[12px] leading-snug" style={{ color: "#8799AB" }}>
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Service Portfolio ---------- */
const ServicePortfolio = () => {
  const services = [
    { icon: Wrench, title: "Requirements & Process Engineering", desc: "Fit-Gap Analysis, BPMN-Aligned Design — Locking Scope Before Config Begins.", tags: ["Workshops", "BPMN"] },
    { icon: Briefcase, title: "Program Management & Advisory", desc: "SAP-Credentialed PMO Steering Governance And Alignment From Day One.", tags: ["PMO", "Governance"] },
    { icon: Globe2, title: "Global Template & Rollouts", desc: "Build Once, Deploy Everywhere — Reusable Templates With Localization Precision.", tags: ["Global", "Rollout"] },
    { icon: FileSearch, title: "Data Provision & ETL Validation", desc: "Business-Led Cleansing, Mapping Validation — Load-Ready, Auditable Data.", tags: ["ETL", "Data Quality"] },
    { icon: FileCode2, title: "SAP ALM, Documentation & Testing", desc: "Cloud ALM Setup, Test Script Authoring, Structured Cycle Management.", tags: ["ALM", "Testing"] },
    { icon: UserCheck, title: "Augmented Customer & UAT Support", desc: "Embedded Specialists For UAT Waves, Defect Triage, And Hypercare.", tags: ["UAT", "Hypercare"] },
    { icon: Layout, title: "Fiori UX & Embedded Analytics", desc: "Role-Based Launchpad Design, SAC/BW Analytics In Your Users' Hands.", tags: ["Fiori", "SAC/BW"] },
    { icon: TrendingUp, title: "Advanced Scenarios & Scope Expansion", desc: "MRP, Multi-Valuation, Intercompany Flows — Unlocking Full RISE Investment.", tags: ["MRP", "Advanced"] },
  ];
  return (
    <section className="py-10 sm:py-12 lg:py-14" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <Eyebrow text="Service Portfolio" color={HERO_LIME} />
        <h2
          className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium text-white leading-[1.1] mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Everything to <span style={{ color: TEAL, fontFamily: "'Square Peg', cursive", fontWeight: 400, fontSize: "1.3em" }}>Plan, Respond &amp; Scale</span>
        </h2>
        <p className="text-[13px] sm:text-[14px] mb-6 sm:mb-8" style={{ color: "#8799AB" }}>
          Modular services for mid-market manufacturing — start where pain is greatest.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-md p-5 sm:p-6 cursor-default transition-colors duration-300"
              style={{ background: "#11181D", border: "0.8px solid #29313C" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#17252C";
                e.currentTarget.style.border = "0.8px solid #29313C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#11181D";
                e.currentTarget.style.border = "0.8px solid #29313C";
              }}
            >
              <div className="flex items-start justify-between mb-5 gap-3">
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                  style={{ background: "rgba(48,232,186,0.15)" }}
                >
                  <s.icon size={16} className="text-white" strokeWidth={1.6} />
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-3 py-1 rounded-full font-medium"
                      style={{
                        color: "#30E8BA",
                        background: "#112E2D80",
                        border: "1px solid #13574A",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.title}
              </h3>
              <p className="text-[12px] sm:text-[12.5px] leading-relaxed" style={{ color: "#8799AB" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Delivery Journey ---------- */
const DeliveryJourney = () => {
  const phases = [
    { icon: Compass, title: "Discover & Blueprint", desc: "Process workshops, fit-gap analysis, and BPMN-aligned design." },
    { icon: Layout, title: "Global Template Build", desc: "Reusable architecture with localization precision across sites." },
    { icon: Plug, title: "Data & Integration", desc: "ETL validation, legacy extraction, and reconciliation." },
    { icon: Truck, title: "Rollout & UAT", desc: "Structured test cycles, defect triage, and hypercare." },
    { icon: Sparkles, title: "Value Expansion", desc: "Advanced scenarios, scope expansion, and continuous ROI." },
  ];
  const metrics = [
    { value: "40%", label: "Faster rollout cycles", color: "#30E8BA" },
    { value: "3×", label: "Cleaner data loads", color: "#3CCADD" },
    { value: "60%", label: "Fewer post-go-live defects", color: "#F5BE3D" },
    { value: "100%", label: "Auditable data delivery", color: "#E25050" },
    { value: "24/7", label: "Hypercare support", color: "#30E8BA" },
    { value: "5+", label: "Global rollout sites", color: "#3CCADD" },
  ];
  return (
    <section className="py-10 sm:py-12 lg:py-14" style={{ backgroundColor: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <motion.span
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2"
          style={{ color: HERO_LIME }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ backgroundColor: HERO_LIME }} />
          Delivery Journey
        </motion.span>

        <motion.h2
          className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium leading-tight text-white mt-2 text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          From{" "}
          <span style={{ fontFamily: "'Square Peg', cursive", color: "#30E8BA", fontSize: "1.1em" }}>
            Blueprint to Business Value
          </span>
        </motion.h2>

        <motion.p
          className="text-white/50 text-[12px] sm:text-sm max-w-xl mx-auto mt-2 mb-8 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Five integrated phases — each a precision handoff, not a hand-off.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-stretch">
          {/* Left: Phases */}
          <motion.div
            className="flex flex-col gap-2.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {phases.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="flex items-start gap-4 rounded-lg p-4 flex-1"
                style={{ backgroundColor: "#10151B", border: "1px solid #26282ECC" }}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <Icon size={18} className="text-white/70 mt-0.5 shrink-0" strokeWidth={1.6} />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white text-[13px] font-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h4>
                  <p className="text-[11px] leading-relaxed" style={{ color: "#8799AB" }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Metrics Grid */}
          <motion.div
            className="grid grid-cols-2 grid-rows-3 gap-2.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          >
            {metrics.map(({ value, label, color }) => (
              <motion.div
                key={label}
                className="rounded-lg p-4 sm:p-5 flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: "#10151B", border: "1px solid #26282ECC" }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {value}
                </span>
                <p className="text-[10px] sm:text-[11px] mt-2" style={{ color: "#8799AB" }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Specialist Partner ---------- */
const SpecialistPartner = () => {
  const cards = [
    {
      icon: ShieldCheck,
      tier: "Expertise",
      tierColor: "#30E8BA",
      title: "SAP-Certified Consultants",
      desc: "Deep credentials across Basis, Functional, and Analytics domains.",
      features: [
        "SAP-credentialed programme leads",
        "Functional & technical depth",
        "Analytics & reporting specialists",
        "Proven delivery track record",
      ],
      footer: "Enterprises demanding authority.",
    },
    {
      icon: BookOpen,
      tier: "Speed",
      tierColor: "#F5BE3D",
      title: "Industry Pre-built Templates",
      desc: "Accelerators for Manufacturing, Logistics, and Finance.",
      features: [
        "Pre-configured design decisions",
        "Compressed blueprint phase",
        "Reduced rework risk",
        "Industry-specific best practices",
        "Proven rollout patterns",
      ],
      footer: "Programmes targeting faster time-to-value.",
    },
    {
      icon: Zap,
      tier: "Delivery",
      tierColor: "#38BACB",
      title: "Hybrid Delivery Model",
      desc: "Onshore advisory + offshore execution at competitive economics.",
      features: [
        "Onshore governance & advisory",
        "Offshore config & testing",
        "Optimal quality-cost balance",
        "Flexible team scaling",
      ],
      footer: "Global programmes optimising delivery cost.",
    },
  ];
  return (
    <section className="py-10 sm:py-12 lg:py-14" style={{ backgroundColor: "#080B14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <motion.span
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3 flex items-center justify-center gap-2"
          style={{ color: HERO_LIME }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ backgroundColor: HERO_LIME }} />
          Why Carbynetech
        </motion.span>

        <motion.h2
          className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium leading-tight text-white mt-2 text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Specialist Partner.{" "}
          <span style={{ fontFamily: "'Square Peg', cursive", color: "#30E8BA", fontSize: "1.1em" }}>
            Not a Resourcing Supplier.
          </span>
        </motion.h2>

        <motion.p
          className="text-white/50 text-[12px] sm:text-sm max-w-xl mx-auto mt-2 mb-8 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          What separates a transformation partner from capacity augmentation.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
        >
          {cards.map(({ icon: Icon, tier, tierColor, title, desc, features, footer }) => (
            <motion.div
              key={title}
              className="rounded-lg p-5 sm:p-6 flex flex-col overflow-hidden"
              style={{ backgroundColor: "#10151B", border: "1px solid #26282ECC", borderBottom: `3px solid ${tierColor}` }}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ border: `1px solid #26282ECC` }}
                >
                  <Icon size={18} style={{ color: tierColor }} strokeWidth={1.6} />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: tierColor, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  ({tier})
                </span>
              </div>

              <h3 className="text-white text-[16px] sm:text-[18px] font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
              <p className="text-[11px] sm:text-[12px] leading-relaxed mb-4" style={{ color: "#8799AB" }}>{desc}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[11px] sm:text-[12px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: tierColor }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="-mx-5 sm:-mx-6 -mb-5 sm:-mb-6 mt-auto">
                <div className="h-px" style={{ backgroundColor: "#26282ECC" }} />
                <div className="px-5 sm:px-6 py-3">
                  <p className="text-[10px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>
                    {footer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Lime CTA ---------- */
const RiseCTASection = () => (
  <BrandedCTASection
    eyebrow="Start Your Journey"
    title={<>From Blueprint to <CtaHighlight>Business Value — Every Mile.</CtaHighlight></>}
    description="Schedule a discovery session with our SAP specialists. We'll map your transformation gaps to the right accelerator."
  />
);

/* ---------- Page ---------- */
const SapRiseImplementation = () => {
  const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
  return (
    <div className="min-h-screen" style={{ background: "#000", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <Reveal><ChallengesSection /></Reveal>
      <Reveal><ServicePortfolio /></Reveal>
      <Reveal><DeliveryJourney /></Reveal>
      <Reveal><SpecialistPartner /></Reveal>
      <Reveal><RiseCTASection /></Reveal>
      <FooterSection />
    </div>
  );
};

export default SapRiseImplementation;
