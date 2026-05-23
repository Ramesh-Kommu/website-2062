import { motion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import {
  Search, Compass, Zap, ShieldCheck,
  Layout, Workflow, Sparkles, Code2, ArrowDown, BarChart3,
  Rocket, Users, ShieldAlert,
  Database, GitBranch, Target, Cloud,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/sap-value-hero-bg.jpeg";

const LIME = "#C8FF01";
const GREEN_BORDER = "rgba(200,255,1,0.25)";
const PANEL = "#0F1420";
const BLUE_BG = "#1B2540";

/* ---------- Hero ---------- */
const HeroSection = () => {
  return (
    <section className="relative min-h-[560px] sm:min-h-[640px] flex items-start overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-40 sm:pt-48 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 sm:mb-8"
          style={{ background: "rgba(200,255,1,0.08)", border: `1px solid ${GREEN_BORDER}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.18em]" style={{ color: LIME }}>
            SAP Value Creation Practice
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[38px] sm:text-[44px] md:text-[56px] font-medium leading-[1.1] mb-5 max-w-3xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Your S/4HANA Is Live.<br />Is It Working for You?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[15px] sm:text-[14px] max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Most enterprises capture less than 40% of available S/4HANA value post go-live. We close that gap — systematically.
        </motion.p>
      </div>
    </section>
  );
};

/* ---------- Structured Path / Stages ---------- */
const StructuredPathSection = () => {
  const stages = [
    { icon: Search, tag: "ASSESS", title: "Value Opportunity Scan", desc: "Dormant features, debt hotspots & process gaps." },
    { icon: Compass, tag: "DESIGN", title: "Value Blueprint", desc: "Quick wins (3–90 days) + strategic roadmap." },
    { icon: Zap, tag: "ACTIVATE", title: "Delivery Sprints", desc: "Fiori apps, workflows, feature enablement." },
    { icon: ShieldCheck, tag: "SUSTAIN", title: "Value Governance", desc: "KPI dashboards, adoption tracking, improvement cycles." },
  ];
  return (
    <section className="py-12 sm:py-14 md:py-16" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium text-white mb-3 leading-[1.15] max-w-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          A Structured Path from <br className="hidden sm:block" />Adoption Gap to Realized Value
        </h2>
        <p className="text-[14px] sm:text-[13px] mb-8 sm:mb-10 max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          Four integrated stages. One measurable outcome: S/4HANA ROI you can report to your board.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 justify-items-center">
          {stages.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group p-5 sm:p-6 text-center cursor-pointer w-full max-w-[230px]"
              style={{ background: "#05070C", border: "1.5px solid #0D121A", borderRadius: "4px" }}
            >
              <s.icon className="w-6 h-6 mx-auto mb-5 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <div className="text-[13px] sm:text-[11px] font-semibold tracking-[0.22em] mb-2 text-white">{s.tag}</div>
              <div
                className="text-[15px] sm:text-[13px] mb-3"
                style={{ color: "#7F8F43", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.title}
              </div>
              <p className="text-[14px] sm:text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- What We Deliver ---------- */
const DeliverSection = () => {
  const cards = [
    {
      icon: Layout, title: "Fiori Experience Transformation",
      headline: "Turn Hidden Transactions into Intuitive Workflows",
      desc: "Role-based Fiori launchpads, custom Fiori apps, and UX simplifications that drive daily adoption across shop floor, finance, and procurement personas.",
      chips: ["Fiori 3.0", "Custom App Dev", "UX Audit", "Persona Design"],
    },
    {
      icon: Workflow, title: "Intelligent Workflow Automation",
      headline: "Eliminate the Manual Handoffs Still Costing You Time",
      desc: "SAP Business Workflow, Flexible Workflow, and BTP Process Automation — approval chains, exception handling, and cross-system orchestration.",
      chips: ["Flexible Workflow", "BTP Automation", "Approval Chains"],
    },
    {
      icon: Sparkles, title: "S/4HANA Feature Activation",
      headline: "You Paid for These Features. Start Using Them.",
      desc: "Systematic activation of S/4HANA innovations — Advanced ATP, Predictive Accounting, Central Finance, Embedded Analytics.",
      chips: ["Embedded Analytics", "Predictive Accounting", "aATP", "MRP Live"],
      chipsLime: true,
    },
    {
      icon: Code2, title: "Enhancements & Custom Dev",
      headline: "Bridge the Gap Between Standard and Your Reality",
      desc: "BAdI-based enhancements, ABAP Cloud extensions, CDS View reporting layers, and output management modernization — upgrade-safe.",
      chips: ["ABAP Cloud", "BAdI", "CDS Views", "RAP Framework"],
    },
    {
      icon: ArrowDown, title: "Simplification & Debt Reduction",
      headline: "Simplify What Migration Left Behind",
      desc: "Retire Z programs, consolidate redundant custom objects, streamline configurations, and align to S/4HANA best practices.",
      chips: ["Custom Code Reduction", "TCO Optimization", "Clean Core"],
    },
    {
      icon: BarChart3, title: "Outcomes Achieved", isOutcomes: true,
      stats: [
        { value: "70%+", label: "Fiori adoption in 90 days" },
        { value: "4 hrs", label: "Process time (was 2 days)" },
        { value: "3 Days", label: "Faster month-end close" },
        { value: "-50%", label: "Custom code objects" },
        { value: "-80%", label: "Process exceptions handled" },
        { value: "Zero", label: "Additional SAP licensing" },
      ],
    },
  ];
  const ACCENT = "#7F8F43";
  const MONO = "'JetBrains Mono', monospace";
  return (
    <section className="py-12 sm:py-14 md:py-16" style={{ background: "#090D15" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <h2 className="text-center text-[28px] sm:text-[32px] md:text-[40px] font-medium text-white mb-8 sm:mb-12 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          What We Deliver
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-5 rounded-[2px]"
              style={{ background: "#0E110E", border: "1.5px solid #1F221F" }}
            >
              <c.icon className="w-5 h-5 mb-3 text-white" strokeWidth={1.5} />
              <h3 className="text-[16px] sm:text-[15px] font-medium text-white mb-1.5">{c.title}</h3>
              {c.isOutcomes ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                  {c.stats!.map((s) => (
                    <div key={s.label} className="flex items-baseline gap-1.5">
                      <div className="text-[17px] sm:text-[15px] font-medium whitespace-nowrap" style={{ color: ACCENT, fontFamily: MONO }}>{s.value}</div>
                      <div className="text-[12px] sm:text-[10px] leading-tight" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-[13px] sm:text-[11px] mb-1.5" style={{ color: ACCENT, fontFamily: MONO, letterSpacing: "0.02em" }}>{c.headline}</p>
                  <p className="text-[13px] sm:text-[11px] leading-snug mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.chips!.map((chip) => (
                      <span
                        key={chip}
                        className="text-[12px] sm:text-[10px] px-2 py-0.5 rounded-[2px]"
                        style={{ background: "rgba(127,143,67,0.10)", color: ACCENT, border: "1px solid rgba(127,143,67,0.25)" }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- How We Engage ---------- */
const EngageSection = () => {
  const tiers = [
    {
      icon: Rocket, eyebrow: "Entry Point", title: "Value Sprint",
      meta: "4–6 Weeks · Fixed Scope · Fixed Price",
      desc: "Quick win delivery: a single Fiori app, one workflow automation, or a feature activation package. Designed as a de-risked entry point that generates a measurable outcome.",
      chips: ["Single Deliverable", "De-Risked", "Business Case Builder"],
    },
    {
      icon: Users, eyebrow: "Structured Execution", title: "Value Program",
      meta: "3–6 Months · Dedicated Team · Agile Sprints",
      desc: "Roadmap execution across two or three service tracks with a dedicated Carbynetech team. Steering cadence, sprint reviews, and KPI reporting built in from day one.",
      chips: ["Multi-Track", "Sprint Reviews", "KPI Reporting"],
    },
    {
      icon: ShieldAlert, eyebrow: "Continuous Value", title: "Value Partnership",
      meta: "Ongoing · Embedded Team · Monthly Governance",
      desc: "An embedded Carbynetech team operating as your S/4HANA value acceleration partner. Continuous backlog management, monthly governance, and quarterly KPI reporting.",
      chips: ["Embedded Team", "Governance", "Quarterly KPIs"],
    },
  ];
  return (
    <section className="py-12 sm:py-14 md:py-16" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          How We Engage
        </h2>
        <p className="text-[14px] sm:text-[13px] mb-8 sm:mb-10 max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          From a focused four-week sprint to an embedded long-term partnership — structured to match where you are.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="p-4 sm:p-5 rounded-[2px]"
              style={{ background: "#070A07", border: "1px solid #082426" }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-[14px] sm:text-[12px] font-medium mb-0.5" style={{ color: LIME }}>{t.eyebrow}</div>
                  <h3 className="text-[17px] sm:text-[15px] font-semibold text-white">{t.title}</h3>
                </div>
                <t.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-[13px] sm:text-[11.5px] font-medium mb-1.5" style={{ color: LIME }}>{t.meta}</div>
              <p className="text-[13px] sm:text-[11.5px] leading-snug mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>{t.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.chips.map((c) => (
                  <span key={c} className="text-[12px] sm:text-[10px] px-2 py-0.5 rounded-[2px]" style={{ background: "transparent", color: "rgba(255,255,255,0.75)", border: "1px solid #1F221F" }}>
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Why Carbynetech ---------- */
const WhySection = () => {
  const principles = [
    { icon: Database, title: "S/4HANA-Native", desc: "No generic SI overhead. Pure S/4HANA value focus from first engagement to final sprint.", watermark: "100" },
    { icon: GitBranch, title: "Clean Core Committed", desc: "Every deliverable is built upgrade-safe by design. Your investment survives your next release.", watermark: "Zero" },
    { icon: Target, title: "Outcome-Priced", desc: "Engagements tied to measurable KPI milestones — not time-and-materials ambiguity.", watermark: "KPI" },
    { icon: Cloud, title: "RISE-Ready", desc: "Deep expertise across RISE with SAP cloud transitions, BTP extensions, and hybrid landscapes.", watermark: "BTP" },
  ];
  return (
    <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden" style={{ background: "#202E3C" }}>
      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px" style={{ background: LIME }} />
          <span className="text-[13px] sm:text-[11px] font-medium tracking-[0.2em]" style={{ color: LIME }}>Why OptimAI</span>
        </div>
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Why Carbynetech
        </h2>
        <p className="text-[14px] sm:text-[13px] mb-8 sm:mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
          Four principles that define how we work — and why clients return.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden p-5"
              style={{ background: "#09091199", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 0 }}
            >
              <span
                aria-hidden
                className="absolute top-3 right-4 font-semibold select-none pointer-events-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "34px", color: "rgba(255,255,255,0.05)", letterSpacing: "0.01em" }}
              >
                {p.watermark}
              </span>
              <div className="flex items-center gap-2.5 mb-3">
                <p.icon className="w-5 h-5 text-white" strokeWidth={1.6} />
                <h3 className="text-[17px] sm:text-[15px] font-medium text-white">{p.title}</h3>
              </div>
              <p className="text-[14px] sm:text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Lime CTA ---------- */
const ValueCTASection = () => (
  <BrandedCTASection
    title={<>Ready to Realize Your <CtaHighlight>S/4HANA Value?</CtaHighlight></>}
    description="Start with a Value Opportunity Scan. We'll surface where your S/4HANA investment is leaving value on the table — and the fastest path to capture it."
  />
);

const SapValueCreation = () => {
  return (
    <div className="min-h-screen" style={{ background: "#000", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <StructuredPathSection />
      <DeliverSection />
      <EngageSection />
      <WhySection />
      <ValueCTASection />
      <FooterSection />
    </div>
  );
};

export default SapValueCreation;
