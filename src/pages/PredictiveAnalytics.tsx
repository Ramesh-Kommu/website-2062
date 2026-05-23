import { motion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import heroBg from "@/assets/predictive-hero-bg.jpeg";
import deliveryIcon1 from "@/assets/delivery-icon-1.png";
import deliveryIcon2 from "@/assets/delivery-icon-2.png";
import deliveryIcon3 from "@/assets/delivery-icon-3.png";
import deliveryIcon4 from "@/assets/delivery-icon-4.png";
import card1Bg from "@/assets/card1.jpeg";
import card2Bg from "@/assets/card2.jpeg";
import card3Bg from "@/assets/card3.jpeg";
import card4Bg from "@/assets/card4.jpeg";
import card5Bg from "@/assets/card5.jpeg";
import card6Bg from "@/assets/card6.jpeg";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroStats = [
  { value: "94%", label: "Demand Forecast\nAccuracy", arrow: false },
  { value: "$55M", label: "Working Capital Freed\nper $1B Revenue", arrow: false },
  { value: "35%", label: "Bad Debt\nReduction", arrow: false },
  { value: "31%", label: "Unplanned\nEquipment Downtime", arrow: "down" as const },
];

const accelerators = [
  {
    badges: ["↑26pts Forecast Accuracy ·", "↓18% Safety Stock"],
    title: "DemandSense™",
    desc: "AI demand forecasting (POS + macro + weather) with SAP IBP & Demantra integration",
    bg: card1Bg,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="34" width="9" height="22" />
        <rect x="27" y="22" width="9" height="34" />
        <rect x="44" y="10" width="9" height="46" />
      </svg>
    ),
  },
  {
    badges: ["↓18 Day CCC · $55M freed per", "$1B revenue"],
    title: "CashFlow Radar™",
    desc: "13-week cash visibility with AI predictions (AR, payables, banking data)",
    bg: card2Bg,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 44 L24 28 L36 38 L52 14" />
        <path d="M40 14 L52 14 L52 26" />
      </svg>
    ),
  },
  {
    badges: ["↓31% downtime · ↑OEE within", "90 days"],
    title: "MachineGuard™",
    desc: "Predictive maintenance (LSTM + sensors) with 72-hour failure alerts",
    bg: card3Bg,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8 L37 24 L52 27 L41 38 L44 54 L32 46 L20 54 L23 38 L12 27 L27 24 Z" />
        <path d="M50 10 L50 18 M46 14 L54 14" />
      </svg>
    ),
  },
  {
    badges: ["↓35% Bad debt · AR team", "2× more proactive"],
    title: "CreditLens™",
    desc: "ML credit risk scoring with 60-day early risk detection",
    bg: card4Bg,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="36" width="8" height="20" />
        <rect x="24" y="26" width="8" height="30" />
        <rect x="38" y="16" width="8" height="40" />
        <line x1="10" y1="10" x2="56" y2="10" />
      </svg>
    ),
  },
  {
    badges: ["3-6 Weeks early warning ·", "Sourcing alternate  flagged"],
    title: "SupplyRisk IQ™",
    desc: "Supplier risk intelligence with disruption forecasting & heatmaps",
    bg: card5Bg,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="10" />
        <path d="M32 14 L34 20 L32 22 L30 20 Z" />
        <path d="M32 50 L34 44 L32 42 L30 44 Z" />
        <path d="M14 32 L20 30 L22 32 L20 34 Z" />
        <path d="M50 32 L44 30 L42 32 L44 34 Z" />
        <path d="M19 19 L24 22 L23 24 L21 23 Z" />
        <path d="M45 45 L40 42 L41 40 L43 41 Z" />
        <path d="M45 19 L40 22 L41 24 L43 23 Z" />
        <path d="M19 45 L24 42 L23 40 L21 41 Z" />
      </svg>
    ),
  },
  {
    badges: ["Margin leakage detected", "3-4 weeks early"],
    title: "MarginPulse™",
    desc: "Real-time margin tracking with leakage detection & prediction",
    bg: card6Bg,
    icon: (
      <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="14" />
        <circle cx="32" cy="32" r="6" />
        <path d="M32 32 L48 20" />
        <circle cx="48" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

const steps = [
  { title: "Define & Scope", desc: "Identify 2–3 highest-ROI use cases. KPI target agreed up front.", icon: deliveryIcon1 },
  { title: "Ingest & Engineer", desc: "ERP, IoT, and financial feeds unified into ML-ready pipelines.", icon: deliveryIcon2 },
  { title: "Model & Validate", desc: "Build, backtest, and stress-test models on your own historical data.", icon: deliveryIcon3 },
  { title: "Embed & Alert", desc: "Predictions surface inside existing tools. Not a separate portal.", icon: deliveryIcon4 },
  { title: "Retrain & Scale", desc: "Continuous MLOps — drift detection and scheduled retraining baked in.", icon: deliveryIcon1 },
];

const edges = [
  {
    title: "Zero Rip-and-Replace",
    desc: "Predictions embed inside SAP, Oracle, D365, and Salesforce. No new system of record. Your IT stack stays intact. Adoption starts day one.",
  },
  {
    title: "MLOps Baked In by Default",
    desc: "Automated drift detection, scheduled retraining, and model lineage tracking. The prediction engine stays accurate as your business evolves — no manual intervention.",
  },
  {
    title: "Real Signal, Not Synthetic Data",
    desc: "Models train exclusively on your own ERP, IoT, and financial history. No industry benchmarks masquerading as insight. Predictions calibrated to your specific patterns.",
  },
  {
    title: "Private Cloud or On-Prem Ready",
    desc: "Fully deployable in your Azure, AWS, or GCP tenant — or on premises. Data never leaves your boundary. SOC 2 compliant architecture from day one.",
  },
];

const edgeIcons = [
  // zero rip — gear
  <svg key="g" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>,
  // mlops — moon/refresh
  <svg key="r" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2v6h-6" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <path d="M3 22v-6h6" />
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
  </svg>,
  // real signal — pulse
  <svg key="p" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l3-8 4 16 3-8h4" />
  </svg>,
  // cloud lock
  <svg key="c" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-1.3A7 7 0 1 0 4 15.3" />
    <rect x="9" y="14" width="8" height="6" rx="1" />
    <path d="M11 14v-2a2 2 0 0 1 4 0v2" />
  </svg>,
];

const PredictiveAnalytics = () => {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "Space Grotesk, sans-serif" }}
    >
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden md:h-screen" style={{ minHeight: "100svh" }}>
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            src={heroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-5 sm:px-6 md:px-10 pt-24 sm:pt-32 pb-10 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6 inline-flex w-fit self-start items-center gap-2 rounded-full px-3 py-1.5"
            style={{
              border: "1px solid #B2F215",
              background: "transparent",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#B2F215" }}
            />
            <span
              className="text-[11px] font-medium tracking-wider"
              style={{ color: "#B2F215" }}
            >
              Predictive Analytics
            </span>
          </motion.div>

          <motion.h1
            className="text-[34px] sm:text-[44px] md:text-[52px] font-medium leading-[1.1] mb-5 max-w-3xl text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            See the risk before it hits
            <br />
            your P&amp;L.
          </motion.h1>

          <motion.p
            className="text-[13px] sm:text-sm md:text-[15px] max-w-2xl mb-8 sm:mb-12 leading-relaxed"
            style={{ color: "#8799AB" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            CIOs and Supply Chain leaders running on gut instinct and lagging dashboards are
            bleeding cash. Carbynetech's predictive accelerators embed decision-grade intelligence
            directly into your ERP rhythm — weeks ahead of the event, not weeks after.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-x-3 gap-y-5 sm:flex sm:flex-wrap sm:items-start sm:gap-x-4 md:gap-x-5 sm:gap-y-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
            }}
          >
            {heroStats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="text-[28px] sm:text-[34px] md:text-[40px] font-medium leading-none flex items-center gap-1"
                  style={{ color: "#ffffff" }}
                >
                  {s.arrow === "down" && <span className="text-[26px]">↓</span>}
                  {s.value}
                </div>
                <p
                  className="text-[11px] sm:text-[12px] mt-1 leading-snug whitespace-pre-line"
                  style={{ color: "#8799AB" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Pre-built intelligence */}
      <ServiceAcceleratorsSection />

      {/* SECTION 3 — Signal to Decision in 5 steps */}
      <section
        className="relative py-8 sm:py-10 px-5 sm:px-6 md:px-10"
        style={{ backgroundColor: "#0A1020" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p
              className="text-center text-[11px] uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2"
              style={{ color: "#B2F215" }}
            >
              <span className="w-6 h-px" style={{ background: "#B2F215" }} />
              Delivery Model
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <h2 className="text-center text-[34px] sm:text-[42px] md:text-[50px] font-medium leading-tight mb-5 text-white">
              Signal to{" "} Decision in 5 steps.
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
            <p
              className="text-center text-[13px] sm:text-sm max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{ color: "#8799AB" }}
            >
              Every engagement starts with a committed business outcome — not a platform licence. We
              wire intelligence directly into your existing workflow so your planners, finance
              controllers, and operations managers act on predictions without ever leaving their
              current tools. Pilot scoped, live, and proven in 8 weeks — or we re-scope at no cost.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[980px] mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl p-6 text-center"
                style={{ backgroundColor: "#1A1D23", border: "1px solid #23262D" }}
              >
                <div
                  className="w-11 h-11 rounded-lg mx-auto mb-5 flex items-center justify-center"
                  style={{ backgroundColor: "#1A2E28" }}
                >
                  <img
                    src={s.icon}
                    alt={s.title}
                    className="w-5 h-5"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <h3 className="text-[17px] sm:text-[14px] font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p
                  className="text-[14px] sm:text-[11.5px] leading-relaxed"
                  style={{ color: "#7A8AA0" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Why Carbynetech (compact feature rows) */}
      <section
        className="relative py-8 sm:py-10 px-5 sm:px-6 md:px-10 overflow-hidden"
        style={{ backgroundColor: "#0B1120" }}
      >
        <div
          className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(178,242,21,0.10) 0%, transparent 60%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,225,255,0.07) 0%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left header column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <ScrollReveal animation="fadeUp" duration={0.4}>
              <p
                className="text-[11px] tracking-[0.22em] mb-3 flex items-center gap-2"
                style={{ color: "#B2F215" }}
              >
                <span className="w-6 h-px" style={{ background: "#B2F215" }} />
                Competitive Edge
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
              <h2
                className="text-[28px] sm:text-[34px] md:text-[40px] font-medium leading-[1.1] text-white tracking-tight mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Why teams pick{" "}
                <span style={{ color: "#B2F215" }}>Carbynetech</span>.
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
              <p className="text-[12.5px] leading-relaxed text-white/55 max-w-sm">
                Four design choices that compound — each one removes friction your incumbent vendors quietly add.
              </p>
            </ScrollReveal>
          </div>

          {/* Right rows */}
          <div className="lg:col-span-8 divide-y divide-white/[0.06]">
            {[
              {
                title: "Zero rip-and-replace",
                desc: "Predictions embed inside SAP, Oracle, D365, and Salesforce. No new system of record — adoption starts day one.",
                accent: "#B2F215",
                icon: (
                  <path d="M4 7h16M4 12h10M4 17h16" />
                ),
              },
              {
                title: "MLOps baked in",
                desc: "Drift detection, scheduled retraining, and model lineage — automated. Predictions stay accurate as your business evolves.",
                accent: "#00E1FF",
                icon: (
                  <>
                    <path d="M21 12a9 9 0 1 1-3-6.7" />
                    <path d="M21 4v5h-5" />
                  </>
                ),
              },
              {
                title: "Real signal, not synthetic",
                desc: "Models train exclusively on your ERP, IoT, and financial history. No industry benchmarks masquerading as insight.",
                accent: "#C8FF00",
                icon: <path d="M3 12h4l3-8 4 16 3-8h4" />,
              },
              {
                title: "Private cloud or on-prem ready",
                desc: "Deploys in your Azure, AWS, or GCP tenant — or on-prem. Data never leaves your boundary. SOC 2 by default.",
                accent: "#A78BFA",
                icon: (
                  <>
                    <path d="M6 19a4 4 0 0 1-.8-7.9 6 6 0 0 1 11.6 1.8A4 4 0 0 1 17 19H6Z" />
                  </>
                ),
              },
            ].map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative flex items-start gap-4 sm:gap-5 py-4 sm:py-5 first:pt-0"
              >
                <span
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors"
                  style={{
                    background: `${r.accent}14`,
                    border: `1px solid ${r.accent}33`,
                    color: r.accent,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {r.icon}
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[15px] sm:text-[16px] font-medium text-white leading-snug mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-white/55">
                    {r.desc}
                  </p>
                </div>
                <span
                  className="hidden sm:inline-block mt-2 h-1.5 w-1.5 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ background: r.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Numbers that move your board deck */}
      <section
        className="relative py-10 sm:py-12 pb-14 sm:pb-16 px-5 sm:px-6 md:px-10 overflow-hidden"
        style={{ backgroundColor: "#173B2A" }}
      >
        {/* tight, faint horizontal + vertical grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] text-center">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p
              className="text-[11px] tracking-[0.2em] mb-4 flex items-center justify-center gap-2"
              style={{ color: "#B2F215" }}
            >
              <span className="w-6 h-px" style={{ background: "#B2F215" }} />
              Business Outcomes
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <h2
              className="text-[28px] sm:text-[44px] md:text-[52px] font-medium leading-tight mb-12 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Numbers that move your
              <br />
              board deck.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-24">
            <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
              <div>
                <div
                  className="text-[44px] sm:text-[54px] font-medium leading-none flex items-center justify-center gap-1"
                  style={{ color: "#00E1FF" }}
                >
                  <span className="text-[36px]">↑</span>98%
                </div>
                <p
                  className="text-[12px] sm:text-[13px] mt-3"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Service Level Without Excess Stock
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" duration={0.4} delay={0.24}>
              <div>
                <div
                  className="text-[44px] sm:text-[54px] font-medium leading-none flex items-center justify-center gap-1"
                  style={{ color: "#C8FF00" }}
                >
                  <span className="text-[36px]">↓</span>31%
                </div>
                <p
                  className="text-[12px] sm:text-[13px] mt-3"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Leaner, More Reliable Operations
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* slight irregular wavy bottom edge */}
        <svg
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          viewBox="0 0 1440 24"
          preserveAspectRatio="none"
          style={{ height: "20px", display: "block" }}
        >
          <path
            d="M0,12 C40,9 80,15 130,13 C190,11 230,16 290,12 C350,8 400,15 460,13 C520,11 560,16 620,12 C680,9 740,15 800,13 C860,11 910,16 970,12 C1030,9 1080,15 1140,13 C1200,11 1250,16 1310,12 C1370,9 1410,14 1440,12 L1440,24 L0,24 Z"
            fill="#13171D"
          />
        </svg>
      </section>


      {/* SECTION 6 — CTA */}
      <BrandedCTASection
        title={<>Your first model, <CtaHighlight>live in 8 weeks.</CtaHighlight></>}
        description={<>
          Tell us your highest-pain area — cash flow gaps, late payments, demand volatility, supplier disruptions, or unplanned downtime. We will scope a focused pilot with a committed outcome, clear ROI target, and no long-term contract required.
        </>}
      />

      <FooterSection />
    </div>
  );
};

const ServiceAcceleratorsSection = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-accel-card]");
    const delta = card ? card.offsetWidth + 16 : 280;
    el.scrollBy({ left: dir * delta, behavior: "smooth" });
  };
  return (
    <section
      className="relative py-8 sm:py-10"
      style={{ backgroundColor: "#080B14" }}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <ScrollReveal animation="fadeUp" duration={0.4}>
          <p
            className="text-[11px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
            style={{ color: "#B2F215" }}
          >
            <span className="w-6 h-px" style={{ background: "#B2F215" }} />
            Service Accelerators
          </p>
        </ScrollReveal>
        <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
          <div className="flex items-end justify-between mb-6 gap-4">
            <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-medium leading-tight text-white">
              Pre-built intelligence.
            </h2>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="h-8 w-8 rounded-full border border-white/40 text-white/80 hover:bg-white hover:text-black transition flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="h-8 w-8 rounded-full border border-white/40 text-white/80 hover:bg-white hover:text-black transition flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {accelerators.map((a, i) => (
            <motion.div
              key={a.title}
              data-accel-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i, 3) * 0.08 }}
              className="relative overflow-hidden border-0 outline-0 shrink-0 snap-start w-[240px] sm:w-[260px] md:w-[280px] h-[260px]"
              style={{
                border: "none",
                outline: "none",
                boxShadow: "none",
                background: "#080B14",
                padding: 0,
                lineHeight: 0,
                borderRadius: "12px",
              }}
            >
              {/* BG image fills card */}
              <img
                src={a.bg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover select-none"
                style={{ margin: 0, padding: 0, border: "none", outline: "none", transform: "scale(1.06)", transformOrigin: "center" }}
                draggable={false}
              />
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                {/* Top — badges */}
                <div>
                  {a.badges.map((b, bi) => (
                    <p key={bi} className="text-[11px] font-mono leading-tight" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {b}
                    </p>
                  ))}
                </div>
                {/* Middle — icon */}
                <div className="flex items-center justify-center py-2">
                  <div className="text-white/85 [&_svg]:w-12 [&_svg]:h-12">{a.icon}</div>
                </div>
                {/* Bottom — title + desc */}
                <div>
                  <h3 className="text-[15px] font-semibold text-white mb-1 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {a.title}
                  </h3>
                  <p className="text-[11px] leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {a.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PredictiveAnalytics;
