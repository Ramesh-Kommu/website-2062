import { useState, useRef, useEffect } from "react";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import { motion } from "framer-motion";
import {
  Database, Bot, Cloud, BarChart3, LineChart,
  Server, Sparkles, Zap,
  AlertTriangle, FileText, Search, GitMerge,
  Layers, MessageSquare, Filter, Bell,
  Workflow, Settings, Shield, Globe,
  Monitor, Cpu, ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/power-platform-hero-bg.png";
import claudeDashboard from "@/assets/claude-dashboard-1.png";

const LIME = "#C8FF01";
const GREEN_BORDER = "rgba(200,255,1,0.25)";
const PANEL = "#0F1420";
const PURPLE_BG = "#1A1740";
const BLUE_BG = "#101A30";

/* ── Shared animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─────────── Hero ─────────── */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ transformOrigin: '45% 60%', transform: 'scale(0.95)' }} />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pb-16 sm:pb-24 pt-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 sm:mb-8"
          style={{ background: "rgba(200,255,1,0.08)", border: `1px solid ${GREEN_BORDER}` }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: LIME }} />
          <span className="text-[11px] sm:text-[12px] font-medium tracking-[0.08em]" style={{ color: LIME }}>
            Power Platform · SAP · AI Intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[26px] sm:text-[38px] md:text-[48px] lg:text-[58px] font-medium leading-[1.08] mb-6 max-w-4xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Turn Your SAP Data Into{" "}
          <br className="hidden sm:block" />
          Predictive Power - At the
          <br />
          Speed of Thought
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[13px] sm:text-[14px] md:text-[15px] max-w-2xl leading-[1.75]"
          style={{ color: "#8799AB" }}
        >
          Stop waiting on analysts. Power BI Copilot and Anthropic's Claude API transform your
          SAP ECC and S/4HANA data streams into real-time intelligence — forecasting supply
          chain disruptions, detecting OEE anomalies, and generating executive narratives.
        </motion.p>
      </div>
    </section>
  );
};

const Eyebrow = ({ text, center = false }: { text: string; center?: boolean }) => (
  <div className={`flex items-center gap-3 mb-3 ${center ? "justify-center" : ""}`}>
    <div className="w-8 h-px" style={{ background: LIME }} />
    <span className="text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color: LIME }}>{text}</span>
  </div>
);

/* ─────────── What Power BI Copilot Unlocks ─────────── */
const CopilotUnlocksSection = () => {
  const cards = [
    {
      icon: Search,
      tag: "Natural Language Query",
      title: "Ask SAP Anything, In English",
      desc: "Type plain-English questions - Copilot surfaces visuals in 30 seconds, not 3 days.",
    },
    {
      icon: FileText,
      tag: "Automated Report Generation",
      title: "From SAP Extract to Board-Ready Report",
      desc: "Auto-generate complete report pages — charts, KPI cards, slicers — one-click publish.",
    },
    {
      icon: MessageSquare,
      tag: "Executive Storytelling",
      title: "AI-Written Narrative Summaries",
      desc: "Complex SAP CO-PA trends turned into crisp executive briefs. Context, not just charts.",
    },
    {
      icon: Globe,
      tag: "Mobile First",
      title: "Factory Floor Access on Any Device",
      desc: "Full Copilot experience on tablets and phones — offline capable, shop-floor ready.",
    },
  ];

  const bottomTags = [
    { label: "NL Querying", desc: "Plain-English questions on\nSAP PP, MM, CO data" },
    { label: "Auto Reports", desc: "Full page generation from\nSAP semantic models" },
    { label: "Narratives", desc: "AI-written summaries for\nexec dashboards" },
    { label: "Mobile First", desc: "Factory floor access on any\ndevice, offline capable" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Eyebrow text="Core Copilot Capabilities" />
          <h2
            className="text-[22px] sm:text-[28px] md:text-[34px] font-medium text-white mb-5 sm:mb-8 leading-[1.12]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            What Power BI Copilot<br />
            Unlocks for SAP Teams
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-12 max-w-[1100px]"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="group rounded-lg px-5 py-3 sm:px-6 sm:py-3.5 cursor-default transition-all duration-300"
              style={{
                background: "rgba(9,9,17,0.6)",
                border: "0.3px solid #313131",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid transparent";
                e.currentTarget.style.borderImage = "linear-gradient(0deg, #1B4A51 0%, #8CD9E4 100%) 1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "0.3px solid #313131";
                e.currentTarget.style.borderImage = "none";
              }}
            >
              <div className="mb-1.5">
                <c.icon
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[8deg]"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  strokeWidth={1.3}
                />
              </div>
              <div className="pl-7">
                <span
                  className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.15em] mb-1 block"
                  style={{ color: LIME, fontFamily: "'Space Grotesk', monospace" }}
                >
                  {c.tag}
                </span>
                <h3
                  className="text-[13px] sm:text-[15px] font-medium text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] leading-relaxed" style={{ color: "#8799AB" }}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom summary row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {bottomTags.map((t) => (
            <motion.div key={t.label} className="text-center" variants={fadeUp} transition={{ duration: 0.4 }}>
              <h4
                className="text-[13px] sm:text-[14px] font-medium text-white mb-1.5"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {t.label}
              </h4>
              <p className="text-[11px] sm:text-[12px] leading-relaxed whitespace-pre-line" style={{ color: "#8799AB" }}>
                {t.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────── Three Scenarios Where Copilot Changes Everything ─────────── */
const ScenariosSection = () => {
  const scenarios = [
    {
      label: "Supply Chain",
      desc: "Forecasting Inventory Shortages from SAP MM/MRP Data",
      color: "#38D9FF",
    },
    {
      label: "S/4HANA Migration",
      desc: "Visualizing S/4HANA Migration KPIs in Real Time",
      color: "#7C4DFF",
    },
    {
      label: "Profitability",
      desc: "CO-PA Profitability Dashboards for Executive Teams",
      color: "#F5C518",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: "#202E3C" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Eyebrow text="Real-World Use Cases" center />
          <h2
            className="text-[22px] sm:text-[28px] md:text-[34px] font-medium text-white mb-5 sm:mb-8 leading-[1.1] text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Three Scenarios Where Copilot<br className="hidden sm:block" />Changes Everything
          </h2>
        </motion.div>

        {/* Color bar */}
        <motion.div
          className="flex mb-8 max-w-[800px] mx-auto"
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        >
          {scenarios.map((s) => (
            <div key={s.label} className="flex-1 h-[4px] first:rounded-l-full last:rounded-r-full" style={{ background: s.color }} />
          ))}
        </motion.div>

        {/* Scenario columns — stack on mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-[800px] mx-auto text-center"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {scenarios.map((s) => (
            <motion.div key={s.label} variants={fadeUp} transition={{ duration: 0.4 }}>
              <h4
                className="text-[13px] sm:text-[15px] font-semibold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.label}
              </h4>
              <p className="text-[11px] sm:text-[12px] leading-relaxed" style={{ color: "#8799AB" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────── How Anthropic API Plugs Into Your SAP Stack ─────────── */
const AnthropicSection = () => {
  const items = [
    { icon: Server, tag: "Source", label: "SAP ECC / S/4HANA", sub: "PP · MM · CO · SD", color: "#FFC61A" },
    { icon: LineChart, tag: "Analytics", label: "Power BI Semantic Model", sub: "Dataflows · DirectQuery", color: "#00FFFF" },
    { icon: Settings, tag: "Automation", label: "Power Automate Flow", sub: "HTTP · Triggers · Actions", color: "#00F891" },
    { icon: Sparkles, tag: "AI Reasoning", label: "Anthropic Claude API", sub: "claude-3-5-sonnet", color: "#B336F6" },
    { icon: Monitor, tag: "Action", label: "Alerts · Reports · Tickets", sub: "Teams · SAP · ServiceNow", color: "#19D3D6" },
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Eyebrow text="Integration Architecture" center />
          <h2
            className="text-[22px] sm:text-[28px] md:text-[34px] font-medium text-white mb-4 leading-[1.1] text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How Anthropic API Plugs Into Your SAP Stack
          </h2>
          <p className="text-[12px] sm:text-[13px] mb-8 sm:mb-12 max-w-2xl mx-auto text-center leading-relaxed" style={{ color: "#8799AB" }}>
            No custom code required. Power Automate's pre-built HTTP connector links Power BI
            semantic models directly to Anthropic's Claude API.
          </p>
        </motion.div>

        {/* 5-col on md+, 3-col on sm, 2-col on mobile */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-6 max-w-[1000px] mx-auto"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full mb-3"
                style={{ border: `1.5px solid ${item.color}`, background: "rgba(255,255,255,0.02)" }}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: item.color }} strokeWidth={1.4} />
              </div>
              <span
                className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.12em] mb-1.5"
                style={{ color: item.color, fontFamily: "'Space Grotesk', monospace" }}
              >
                {item.tag}
              </span>
              <h4
                className="text-[11px] sm:text-[13px] font-medium text-white mb-1 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
              </h4>
              <span className="text-[9px] sm:text-[10px]" style={{ color: "#8799AB" }}>
                {item.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────── Four Ways Claude Transforms SAP Manufacturing ─────────── */
const ClaudeTransformsSection = () => {
  const dashboards = [
    { title: "Net Working Capital", img: claudeDashboard },
    { title: "Key Ratios", img: claudeDashboard },
    { title: "Balance Sheet", img: claudeDashboard },
    { title: "Accounts Payables", img: claudeDashboard },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1);
      const nextProgress = Math.min(1, Math.max(0, -rect.top / maxScroll));
      setScrollProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // 3 transitions (between 4 images) spread across full scroll
  const transitionProgress = scrollProgress * (dashboards.length - 1);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{
        background: "linear-gradient(0deg, #0A0A06 0%, rgba(10, 10, 6, 0) 100%)",
        height: `${dashboards.length * 100}vh`,
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col">
        {/* Heading */}
        <div className="mx-auto max-w-[1200px] w-full px-5 sm:px-6 md:px-10 pt-10 sm:pt-14 shrink-0">
          <Eyebrow text="Automation Scenarios" />
          <h2
            className="text-[22px] sm:text-[28px] md:text-[34px] font-medium text-white mb-4 leading-[1.1]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Four Ways Claude<br />Transforms SAP Manufacturing
          </h2>
        </div>

        {/* Image container */}
        <div className="relative flex-1 min-h-0 overflow-hidden">
          <div className="absolute inset-0 mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
            {dashboards.map((db, i) => {
              const offset = i === 0
                ? 0
                : Math.max(0, 1 - Math.max(0, transitionProgress - (i - 1))) * 100;

              return (
                <div
                  key={db.title}
                  className="absolute inset-0 will-change-transform"
                  style={{
                    zIndex: i + 1,
                    transform: `translateY(${offset}%)`,
                  }}
                >
                  <img
                    src={db.img}
                    alt={db.title}
                    className="w-full h-full object-cover object-top rounded-lg sm:rounded-xl select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─────────── Case Study: Automotive Parts Manufacturer ─────────── */
const CaseStudySection = () => {
  const steps = [
    { icon: Server, num: "01", label: "Data Ingestion", sub: "SAP Production Data → Power BI", color: "#FFC61A" },
    { icon: Sparkles, num: "02", label: "AI Visualization", sub: "Copilot Generates Instant Visuals", color: "#00FFFF" },
    { icon: Filter, num: "03", label: "Automated Trigger", sub: "Power Automate on KPI Breach", color: "#00F891" },
    { icon: Bot, num: "04", label: "AI Reasoning", sub: "Claude Analyzes & Prescribes", color: "#B336F6" },
    { icon: Settings, num: "05", label: "Automated Action", sub: "Alerts, SAP Updates, Tickets", color: "#19D3D6" },
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Eyebrow text="End-to-End Use Case" center />
          <h2
            className="text-[22px] sm:text-[28px] md:text-[34px] font-medium text-white mb-1 leading-[1.15]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Automotive Parts Manufacturer
          </h2>
          <p
            className="text-[22px] sm:text-[28px] md:text-[34px] font-medium mb-5 sm:mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Predictive Anomaly Loop
          </p>
        </motion.div>

        {/* 5-col on md+, 3-col on sm, 2-col + centered last on mobile */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-6 max-w-[1000px] mx-auto"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className={`flex flex-col items-center text-center ${
                /* Center the 5th item when in 2-col mobile layout */
                i === 4 ? "col-span-2 sm:col-span-1 max-w-[160px] mx-auto" : ""
              }`}
            >
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full mb-3"
                style={{ border: `1.5px solid ${step.color}`, background: "rgba(255,255,255,0.02)" }}
              >
                <step.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#fff" }} strokeWidth={1.4} />
              </div>
              <span
                className="text-[10px] sm:text-[11px] font-medium mb-1.5"
                style={{ color: step.color, fontFamily: "'Space Grotesk', monospace" }}
              >
                {step.num}
              </span>
              <h4
                className="text-[11px] sm:text-[13px] font-medium text-white mb-1 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {step.label}
              </h4>
              <span className="text-[9px] sm:text-[10px]" style={{ color: "#8799AB" }}>
                {step.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────── Deploy in Days, Not Months ─────────── */
const DeploySection = () => {
  const connectors = [
    { icon: Monitor, title: "SAP ECC Connector", desc: "Direct BAPI/RFC calls to PP, MM, CO, SD modules" },
    { icon: Settings, title: "Power Automate HTTP", desc: "No-code Anthropic API calls with JSON parsing" },
    { icon: Database, title: "Power BI Datasets", desc: "Direct semantic model push/pull for AI enrichment" },
    { icon: Cpu, title: "Microsoft Teams", desc: "Adaptive Cards with AI narratives and action buttons" },
    { icon: Shield, title: "Azure Key Vault", desc: "Secure API key management, zero hard-coded secrets" },
    { icon: Workflow, title: "ServiceNow / ITSM", desc: "Auto-ticket creation for AI-detected events" },
  ];
  const tags = [
    { label: "Azure Native", color: "#4FC3F7" },
    { label: "Zero Trust", color: "#66BB6A" },
    { label: "Full Audit", color: "#FFB74D" },
    { label: "DLP Policies", color: "#7E57C2" },
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Eyebrow text="No-Code Connectors" />
          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-medium text-white mb-3 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Deploy in Days, Not Months
          </h2>
          <p className="text-[12px] sm:text-[13px] mb-6 sm:mb-8 max-w-2xl leading-[1.8]" style={{ color: "rgba(255,255,255,0.45)" }}>
            Every integration runs through pre-certified connectors. Your IT team keeps governance. Your business teams deploy intelligence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8"
          style={{ border: "1px solid #0B292B" }}
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {connectors.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="flex items-start gap-3.5 px-5 py-4 transition-colors group"
              style={{ background: "#0D1014", borderRight: "1px solid #0B292B", borderBottom: "1px solid #0B292B" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#131921"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#0D1014"; }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "#0D1014", border: "0.5px solid #FFC61A80" }}
              >
                <c.icon className="w-4 h-4 text-white" strokeWidth={1.4} />
              </div>
              <div>
                <h4 className="text-[12px] sm:text-[13px] font-medium text-white mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {c.title}
                </h4>
                <p className="text-[10px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tags.map((t) => (
            <span
              key={t.label}
              className="px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide"
              style={{ border: `1px solid ${t.color}50`, color: t.color }}
            >
              {t.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────── CTA ─────────── */
const CTASection = () => (
  <BrandedCTASection
    title={<>Start Your SAP Data Into <CtaHighlight>Predictive Power</CtaHighlight></>}
    description="Let us show you what your SAP data can become when intelligence, automation, and real-time analytics converge."
  />
);

/* ─────────── Page ─────────── */
const MicrosoftPowerPlatform = () => {
  return (
    <div className="min-h-screen" style={{ background: "#000", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <CopilotUnlocksSection />
      <ScenariosSection />
      <AnthropicSection />
      <ClaudeTransformsSection />
      <CaseStudySection />
      <DeploySection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default MicrosoftPowerPlatform;
