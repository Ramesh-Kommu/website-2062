import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import type { ReactNode } from "react";
import { useRef } from "react";
import {
  Activity, Cpu, Database, Workflow, GitBranch, Gauge, Cloud, Server,
  Zap, Shield, BarChart3, Brain, Link2, Settings, Lock, FileCode,
  CheckCircle2, ArrowRight, Wifi, AlertTriangle, Layers, Boxes,
  Factory, LineChart, Bot, Network, RefreshCw,
  CalendarDays, FolderCheck, Crosshair, MapPin,
  Search as SearchIcon, BadgeCheck, ShoppingCart, Inbox, Wrench, FolderOpen, Compass, Plug,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/sda-bg.jpeg";
import telemetryDashboard from "@/assets/shopfloor-telemetry-dashboard.png";
import deployCardBg from "@/assets/shopfloor-deploy-card-bg.png";
import azureIotFactory from "@/assets/sda-01.png";
import edgeCardBg from "@/assets/shopfloor-edge-card-bg.png";
import factoryEdgeImg from "@/assets/sda-02.png";
import hybridCardBg from "@/assets/shopfloor-hybrid-card-bg.png";
import hybridArchImg from "@/assets/sda-03.png";
import erpIntegrationDiagram from "@/assets/erp-integration-diagram.png";

const LIME = "#00E0EC";
const LIME_SOFT = "rgba(0,224,236,0.25)";
const PANEL = "#0B0E14";
const PANEL_2 = "#0F1218";
const CARD = "#11151D";
const BORDER = "rgba(255,255,255,0.08)";
const BORDER_2 = "rgba(255,255,255,0.12)";
const MUTED = "rgba(255,255,255,0.55)";
const DIM = "rgba(255,255,255,0.45)";
const GROTESK = "'Space Grotesk', sans-serif";

/* ---------- Reveal (scroll-triggered loading animation) ---------- */
const Reveal = ({ children, delay = 0, y = 30, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};


const Eyebrow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-7 h-px" style={{ background: LIME }} />
    <span
      className="text-[14px] font-medium uppercase tracking-[0.18em] leading-none"
      style={{ color: LIME }}
    >
      {text}
    </span>
  </div>
);

/* ===================== HERO ===================== */
const HeroSection = () => {
  const stats = [
    { v: "98%", l: "OEE Visibility" },
    { v: "<50ms", l: "Edge Latency" },
    { v: "3x", l: "Faster Deployment" },
  ];
  return (
    <section className="relative min-h-[560px] sm:min-h-[640px] flex items-center overflow-hidden" style={{ background: PANEL }}>
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-14 sm:pb-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6"
            style={{ background: "rgba(0,224,236,0.08)", border: `1px solid ${LIME_SOFT}` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
            <span className="text-[13px] sm:text-[11px] font-medium tracking-[0.18em]" style={{ color: LIME }}>
              Shopfloor Digital Apps
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-medium leading-[1.08] mb-5 max-w-3xl text-white" style={{ fontFamily: GROTESK }}>
            Intelligence for the
            <br /> Digital Factory Floor
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-[16px] sm:text-[14px] max-w-xl leading-relaxed mb-10" style={{ color: "#8799AB" }}>
            Connect machines, people, and enterprise systems into one real-time AI-ready operations platform — deployed on Azure or on your plant's own edge servers.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-md">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="text-[30px] sm:text-[30px] font-medium" style={{ fontFamily: GROTESK }}>{s.v}</div>
                <div className="text-[12px] sm:text-[10px] tracking-[0.16em] mt-1" style={{ color: DIM }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ===================== UNIFIED OPERATIONS INTELLIGENCE LAYER ===================== */
const UnifiedLayerSection = () => {
  const cards = [
    { t: "Asset Utilization & OEE", d: "Real-time machine state, micro-stop detection, automated loss-tree classification", tag: "Live Monitoring" },
    { t: "Quality Intelligence", d: "Streaming SPC rules, golden-batch comparison, in-process deviation alerts", tag: "SPC + Alerting" },
    { t: "SAP Deep Integration", d: "Bi-directional sync with SAP ECC & S/4HANA — orders, materials, confirmations", tag: "ECC · S4HANA" },
    { t: "Agentic Co-Pilots", d: "AI agents propose rescheduling, parameter changes, maintenance triggers", tag: "AI · Autonomous" },
    { t: "Waste & Yield Management", d: "Scrap, rework, giveaway analytics linked to process parameter drivers", tag: "Yield Tracking" },
    { t: "Multi-Plant Rollout", d: "Pre-built blueprints for CPG, Pharma, Chemical — accelerated site standardization", tag: "Global Scale" },
  ];
  return (
    <section className="pt-16 sm:pt-24 pb-6 sm:pb-8" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="Core Capabilities" />
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.05] mb-12 sm:mb-16 text-white" style={{ fontFamily: GROTESK }}>
            A Unified Operations Intelligence Layer
          </h2>
        </Reveal>
        <div className="mx-auto max-w-[1020px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05} className="w-full h-full">
              <div
                className="group relative px-4 py-3.5 min-h-[160px] sm:h-[140px] w-full flex flex-col transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#0D1014",
                  border: "1.5px solid #1F221F",
                  borderRadius: 4,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#131921"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#0D1014"; }}
              >
                <h3 className="text-white text-[17px] font-medium mb-2" style={{ fontFamily: GROTESK }}>{c.t}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>{c.d}</p>
                <div className="mt-auto pt-3 flex justify-end">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
                    <span className="text-[13px]" style={{ color: LIME, fontFamily: "'JetBrains Mono', monospace" }}>{c.tag}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== REAL-TIME FACTORY INTELLIGENCE (chart strip) ===================== */
const FactoryIntelligenceSection = () => {
  return (
    <section className="pt-6 sm:pt-8 pb-6 sm:pb-8" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <div className="flex justify-center"><Eyebrow text="Live Telemetry" /></div>
          <h2
            className="text-center text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.1] mb-5 text-white"
            style={{ fontFamily: GROTESK }}
          >
            Real-Time Factory Intelligence
          </h2>
          <p
            className="text-center max-w-[760px] mx-auto text-[17px] sm:text-[15px] leading-[1.65] mb-12 sm:mb-16"
            style={{ color: "#8799AB" }}
          >
            Live OEE, availability, performance and quality yield — streamed from
            every line, every shift. One pane of glass for plant managers, operators,
            and executives.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <img
            src={telemetryDashboard}
            alt="Live telemetry dashboard showing OEE, availability, performance and quality yield"
            className="w-full h-auto block"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
};

/* ===================== YOUR PLANT. YOUR RULES. (3 stacked feature cards) ===================== */
const PlantRulesSection = () => {
  const cards = [
    {
      tag: "Cloud-Native Path",
      t: "Azure IoT Digital Factory",
      d: "Kubernetes-native platform on Azure - scalable, AI-ready, deeply integrated with Microsoft ecosystem.",
      pts: [
        "Azure AKS Kubernetes-native deployment",
        "Azure ML downtime & quality prediction",
        "Industrial data hub with time-series KPIs",
        "Multi-plant governance & tenanting",
        "Agentic factory co-pilots on Azure",
      ],
      stats: [
        { v: "< 200ms", l: "Cloud Latency" },
        { v: "∞", l: "Scalability" },
      ],
      img: azureIotFactory,
      bg: deployCardBg,
    },
    {
      tag: "On-Premise Path",
      t: "Factory Edge Solution",
      d: "Industrial-grade on HP/Dell IoT servers — open-source stack, resilient operations during WAN outages.",
      pts: [
        "HP/Dell ruggedized edge deployment",
        "PostgreSQL + Redis open-source backbone",
        "On-edge OEE with local ML inference",
        "SAP synchronization via secure APIs",
        "Zero cloud dependency for core operations",
      ],
      stats: [
        { v: "< 50ms", l: "Edge Latency" },
        { v: "100%", l: "Data Sovereignty" },
      ],
      img: factoryEdgeImg,
      bg: edgeCardBg,
    },
    {
      tag: "Side by Side",
      t: "Same Intelligence. Your Architecture.",
      d: "Both paths deliver OEE, quality, waste, AI — choose based on IT strategy and data sovereignty requirements.",
      pts: [
        "Real-Time OEE — Cloud or Edge computed",
        "Quality SPC & Golden Batch — Both paths",
        "SAP Integration — Live API or Buffered sync",
        "ML Prediction — Azure ML or On-edge ONNX",
        "WAN-Independent — Edge only (fully resilient)",
      ],
      stats: [
        { v: "2", l: "Deployment Paths" },
        { v: "1", l: "Unified Platform" },
      ],
      img: hybridArchImg,
      bg: hybridCardBg,
    },
  ];
  return (
    <section className="pt-6 sm:pt-8 pb-20 sm:pb-28" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="Deployment Architecture" />
          <h2
            className="text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.05] mb-12 sm:mb-16 text-white"
            style={{ fontFamily: GROTESK }}
          >
            Your Plant. Your Rules.
          </h2>
        </Reveal>

        <StackedCards cards={cards} />
      </div>
    </section>
  );
};

/* ----- Sticky stacking cards ----- */
type DeployCard = {
  tag: string;
  t: string;
  d: string;
  pts: string[];
  stats: { v: string; l: string }[];
  img: string;
  bg: string;
};

const StackedCards = ({ cards }: { cards: DeployCard[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
    restDelta: 0.0005,
  });

  return (
    <>
      {/* Sticky stacking version — only on large screens (>=1024px) where card height fits viewport */}
      <div
        ref={containerRef}
        className="mx-auto max-w-[1020px] relative hidden lg:block"
        style={{ height: "420vh" }}
      >
        <div className="sticky top-[100px] h-[calc(100vh-120px)]">
          <div className="relative h-full">
            {cards.map((c, i) => (
              <StackedCardLayer key={c.t} card={c} index={i} progress={smoothProgress} />
            ))}
          </div>
        </div>
      </div>

      {/* Simple stacked (non-sticky) version for tablet/mobile to prevent overlap with next section */}
      <div className="lg:hidden mx-auto max-w-[1020px] flex flex-col gap-5">
        {cards.map((c) => (
          <div key={c.t} className="relative">
            <StaticDeployCard card={c} />
          </div>
        ))}
      </div>
    </>
  );
};

const StaticDeployCard = ({ card }: { card: DeployCard }) => (
  <div
    className="relative rounded-[18px] overflow-hidden p-4 sm:p-5 md:p-6 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 items-center isolate"
    style={{
      backgroundColor: "#0A0E1A",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `url(${card.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.16,
      }}
    />
    <div className="relative z-10">
      <div
        className="text-[14px] font-medium tracking-[0.04em] mb-3 underline underline-offset-[6px] decoration-[1.5px]"
        style={{ color: LIME, fontFamily: GROTESK }}
      >
        {card.tag}
      </div>
      <h3
        className="text-white text-[28px] sm:text-[26px] md:text-[30px] font-medium mb-3 leading-[1.15]"
        style={{ fontFamily: GROTESK }}
      >
        {card.t}
      </h3>
      <p
        className="text-[15px] sm:text-[12.5px] leading-[1.55] mb-5 max-w-[420px]"
        style={{ color: "rgba(255,255,255,0.78)" }}
      >
        {card.d}
      </p>
      <ul className="space-y-2 mb-7">
        {card.pts.map((p) => (
          <li
            key={p}
            className="flex items-start gap-2 text-[14px] sm:text-[12px]"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            <span
              className="inline-block mt-[7px] w-[3px] h-[3px] rounded-full flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.6)" }}
            />
            {p}
          </li>
        ))}
      </ul>
      <div className="flex gap-10 sm:gap-12 mt-1">
        {card.stats.map((s) => (
          <div key={s.l}>
            <div
              className="text-[28px] sm:text-[36px] font-medium leading-none"
              style={{ color: LIME, fontFamily: GROTESK }}
            >
              {s.v}
            </div>
            <div className="text-[14px] mt-2" style={{ color: "rgba(255,255,255,0.55)" }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div
      className="relative z-10 flex items-center justify-center self-stretch rounded-[14px] overflow-hidden"
      style={{ background: "#0A0E1A" }}
    >
      <img
        src={card.img}
        alt={card.t}
        className="w-full max-w-[420px] h-auto max-h-[320px] object-contain"
      />
    </div>
  </div>
);

const StackedCardLayer = ({
  card,
  index,
  progress,
}: {
  card: DeployCard;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  // Each card lands flush at y = 0 (fully covers the previous card — no peeking edge).
  const enterStart = index === 0 ? 0 : 0.16 + (index - 1) * 0.28;
  const enterEnd = index === 0 ? 0.05 : enterStart + 0.22;
  const y = useTransform(
    progress,
    [enterStart, enterEnd, 1],
    index === 0 ? [0, 0, 0] : [620, 0, 0],
    { clamp: true }
  );

  return (
    <motion.div className="absolute inset-0" style={{ y, opacity: 1, zIndex: index + 1 }}>
      <div
        className="relative rounded-[18px] overflow-hidden p-4 sm:p-5 md:p-6 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 items-center isolate"
        style={{
          backgroundColor: "#0A0E1A",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: index === 0 ? "none" : "0 -20px 50px -10px rgba(0,0,0,0.7)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{ background: "#0A0E1A" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${card.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.16,
          }}
        />
        <div
          aria-hidden
          className="absolute left-0 top-0 bottom-0 z-0 w-full md:w-[56%]"
          style={{ background: "#0A0E1A" }}
        />
        <div className="relative z-10">
          <div
            className="text-[14px] font-medium tracking-[0.04em] mb-3 underline underline-offset-[6px] decoration-[1.5px]"
            style={{ color: LIME, fontFamily: GROTESK }}
          >
            {card.tag}
          </div>
          <h3
            className="text-white text-[28px] sm:text-[26px] md:text-[30px] font-medium mb-3 leading-[1.15]"
            style={{ fontFamily: GROTESK }}
          >
            {card.t}
          </h3>
          <p
            className="text-[15px] sm:text-[12.5px] leading-[1.55] mb-5 max-w-[420px]"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            {card.d}
          </p>
          <ul className="space-y-2 mb-7">
            {card.pts.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-[14px] sm:text-[12px]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                <span
                  className="inline-block mt-[7px] w-[3px] h-[3px] rounded-full flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex gap-10 sm:gap-12 mt-1">
            {card.stats.map((s) => (
              <div key={s.l}>
                <div
                  className="text-[28px] sm:text-[36px] font-medium leading-none"
                  style={{ color: LIME, fontFamily: GROTESK }}
                >
                  {s.v}
                </div>
                <div
                  className="text-[14px] mt-2"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative z-10 flex items-center justify-center self-stretch rounded-[14px] overflow-hidden"
          style={{ background: "#0A0E1A" }}
        >
          <img
            src={card.img}
            alt={card.t}
            className="w-[115%] max-w-none h-auto max-h-[380px] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

/* ===================== FROM PREDICTIONS TO AUTONOMOUS ACTIONS ===================== */
const AutonomousActionsSection = () => {
  const cards = [
    { tag: "Predictive", t: "Downtime & Quality Drift", d: "ML models score live signals — early warnings hours before failure." },
    { tag: "Generative", t: "What-If Set-Point Simulation", d: "Simulate recipe changes against digital process twins." },
    { tag: "Agentic", t: "Autonomous SAP Order Management", d: "Co-pilots propose rescheduling with single-click approval" },
  ];
  return (
    <section className="py-16 sm:py-24" style={{ background: PANEL_2 }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="AI & Agentic Operations" />
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.05] mb-3 text-white" style={{ fontFamily: GROTESK }}>
            From Predictions to Autonomous Actions
          </h2>
          <p className="text-[16px] mb-10 max-w-2xl" style={{ color: MUTED }}>
            Azure ML or on-edge ONNX — models watch your plant continuously. Co-pilots turn insights into SAP actions.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div
                className="group relative px-5 py-4 h-full transition-colors duration-200"
                style={{
                  background: "#13192133",
                  border: "0.3px solid #313131",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#131921")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#13192133")}
              >
                <div className="flex items-center gap-1.5 absolute top-3 right-4">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
                  <span className="text-[14px] font-mono" style={{ color: LIME, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}>
                    {c.tag}
                  </span>
                </div>
                <h3 className="text-white text-[18px] font-medium mt-5 mb-2" style={{ fontFamily: GROTESK }}>
                  {c.t}
                </h3>
                <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== BI-DIRECTIONAL SAP SYNC ===================== */
const SapSyncSection = () => {
  const items = [
    { icon: CalendarDays, t: "Production Orders & Schedules", d: "SAP orders, materials, routings pulled for real-time context" },
    { icon: FolderCheck, t: "Confirmations & Quality Lots", d: "Quantities, inspection results, yield written back automatically" },
    { icon: Crosshair, t: "Holds, Rework & Maintenance", d: "Quality holds and PM notifications triggered from factory events" },
    { icon: MapPin, t: "Master Data Alignment", d: "BOM, work centres, quality specs synchronized continuously" },
  ];
  return (
    <section className="py-16 sm:py-24" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="SAP Integration" />
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.05] mb-10 text-white" style={{ fontFamily: GROTESK }}>
            Bi-Directional <span style={{ color: LIME }}>SAP Sync</span>
          </h2>
          <p className="text-[17px] sm:text-[15px] leading-relaxed mb-10 max-w-2xl" style={{ color: MUTED }}>
            Factory insights aligned with SAP transactional records — actions flow back automatically.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <Reveal>
            <div className="space-y-3">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.t}
                    className="px-4 py-3 flex gap-3 items-start transition-colors duration-200"
                    style={{ background: "#0C100C", border: "1px solid #1F231F" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#121F17")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0C100C")}
                  >
                    <Icon className="w-4 h-4 mt-0.5 shrink-0 text-white" strokeWidth={1.6} />
                    <div>
                      <h4 className="text-white text-[16px] font-medium mb-1" style={{ fontFamily: GROTESK }}>{it.t}</h4>
                      <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>{it.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex items-center justify-center">
              <img
                src={erpIntegrationDiagram}
                alt="Integration Core connecting SAP ECC/S4HANA, MES/Historian, PLCs/Sensors, and Azure/Edge Hub"
                className="w-full h-auto max-w-[560px] object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ===================== BUILT FOR REAL FACTORY PROBLEMS ===================== */
const RealProblemsSection = () => {
  const items = [
    { icon: SearchIcon, t: "Hidden Capacity Discovery", d: "Expose micro-stops and speed losses — recover 8–15% throughput" },
    { icon: BadgeCheck, t: "First-Pass Quality Yield", d: "SPC rules and golden-batch benchmarking catch deviations in real-time" },
    { icon: ShoppingCart, t: "Predictive Maintenance", d: "ML models score live signals — early warnings hours before failure" },
    { icon: Inbox, t: "Autonomous Order Scheduling", d: "Agentic co-pilots propose SAP rescheduling from real-time line state" },
    { icon: Wrench, t: "Waste & Giveaway Reduction", d: "Digital mass balance linking yield variance to process parameters" },
    { icon: FolderOpen, t: "Regulatory Batch Traceability", d: "Complete genealogy for Pharma GMP, food safety, chemical compliance" },
    { icon: Compass, t: "Energy per Unit Tracking", d: "Granular consumption mapped to every SKU and shift — ESG-ready" },
    { icon: Plug, t: "Cross-Plant Benchmarking", d: "Compare OEE, quality, waste across your entire plant network" },
  ];
  return (
    <section className="py-16 sm:py-24" style={{ background: PANEL_2 }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <div className="flex justify-center"><Eyebrow text="Operational Use-Cases" /></div>
          <h2 className="text-center text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.1] mb-12 text-white" style={{ fontFamily: GROTESK }}>
            Built for Real Factory Problems
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.t} delay={i * 0.04}>
                <div
                  className="group relative px-5 py-4 h-full overflow-hidden transition-colors duration-300"
                  style={{ background: "#1A1D23", border: "1px solid #23262D", borderRadius: 0 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#121F17"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#1A1D23"; }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ height: "6px", background: "#093419" }}
                  />
                  <Icon className="w-5 h-5 mb-3 text-white" strokeWidth={1.6} />
                  <h4 className="text-white text-[16px] font-medium mb-1.5" style={{ fontFamily: GROTESK }}>{it.t}</h4>
                  <p className="text-[14px] leading-relaxed" style={{ color: MUTED }}>{it.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ===================== PRE-BUILT FOR YOUR INDUSTRY ===================== */
const IndustrySection = () => {
  const CYAN = "#00E0EC";
  const items = [
    {
      tag: "CPG",
      name: "Consumer Packaged Goods",
      kpis: [["+14%", "OEE"], ["+14%", "OEE"], ["+14%", "OEE"]],
      bullets: ["Speed Loss Detection", "Fill Weight Mgmt", "Changeover Optimization"],
    },
    {
      tag: "Pharma",
      name: "Pharmaceutical",
      kpis: [["+99%", "Traceability"], ["-30%", "OOS Events"], ["-50%", "CAPA Time"]],
      bullets: ["Batch Release Intel", "End-to-End Genealogy", "Equipment Qualification"],
    },
    {
      tag: "Chemical",
      name: "Chemical Mfg",
      kpis: [["+8%", "Yield"], ["-18%", "Energy/Unit"], ["-60%", "Batch Review"]],
      bullets: ["Batch Yield Optimization", "Energy Tracking", "Predictive Maintenance"],
    },
    {
      tag: "Food & Bev",
      name: "Food & Beverage",
      kpis: [["+12%", "Line Eff."], ["-28%", "Food Waste"], ["+20%", "Throughput"]],
      bullets: ["Allergen Traceability", "CIP Optimization", "Demand Scheduling"],
    },
  ];
  return (
    <section className="py-16 sm:py-24" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px" style={{ background: CYAN }} />
            <span className="text-[14px] font-medium tracking-[0.18em]" style={{ color: CYAN }}>Industry Blueprint</span>
          </div>
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.05] mb-12 text-white" style={{ fontFamily: GROTESK }}>
            Pre-Built for Your Industry
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.06}>
              <div
                className={`h-full lg:pl-6 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <div className="text-[15px] sm:text-[13px] font-medium mb-1.5" style={{ color: CYAN }}>{it.tag}</div>
                <h3 className="text-white text-[19px] sm:text-[15px] font-medium mb-4 leading-snug" style={{ fontFamily: GROTESK }}>
                  {it.name}
                </h3>
                <div className="grid grid-cols-3 gap-1.5 mb-5">
                  {it.kpis.map(([v, l], idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center py-2 px-1"
                      style={{ border: `0.5px solid ${CYAN}33`, borderRadius: 1 }}
                    >
                      <div className="text-[16px] sm:text-[14px] font-semibold" style={{ color: CYAN, fontFamily: GROTESK }}>{v}</div>
                      <div className="text-[12px] sm:text-[10px] uppercase tracking-[0.12em] mt-0.5" style={{ color: "#6B7280" }}>{l}</div>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[16px] sm:text-[14px]" style={{ color: "#CBD5D8" }}>
                      <span className="mt-1.5 inline-block w-1 h-1 rounded-full shrink-0" style={{ background: "#6B7280" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== YOUR FACTORY DOESN'T STOP WHEN THE NETWORK DOES ===================== */
const ResilienceSection = () => {
  const items = [
    { t: "Automatic Data Buffering", d: "Production & quality data buffered locally during connectivity gaps" },
    { t: "SAP Master Data Cache", d: "Orders, BOM, specs cached in PostgreSQL/Redis for offline context" },
    { t: "Continuous ML Inference", d: "Pre-trained models score live signals without external API calls" },
  ];
  return (
    <section className="py-16 sm:py-24" style={{ background: "#000000" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="Operational Resilience" />
          <h2 className="text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.05] mb-5 text-white" style={{ fontFamily: GROTESK }}>
            Your Factory Doesn't Stop When the Network Does
          </h2>
          <p className="text-[16px] mb-10 max-w-xl" style={{ color: MUTED }}>
            Local buffering, cached master data, and on-premise ML — intelligence regardless of WAN state.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div
                className="px-5 py-4 h-full transition-colors duration-200"
                style={{ background: "#0D1014", border: "1px solid #23262D", borderRadius: 0 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#131921"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#0D1014"; }}
              >
                <h3 className="text-white text-[17px] font-medium mb-1.5" style={{ fontFamily: GROTESK }}>{it.t}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== BUILT ON REAL IMPLEMENTATION ===================== */
const ProofSection = () => {
  const stats = [
    { v: "98%", l: "OEE Visibility" },
    { v: "<50ms", l: "Edge Latency" },
    { v: "6wk", l: "Avg. Go-Live" },
    { v: "100%", l: "ERP Sync" },
    { v: "24/7", l: "Plant Coverage" },
  ];
  return (
    <section className="py-16 sm:py-24" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <div className="flex justify-center"><Eyebrow text="Proof in Production" /></div>
          <h2 className="text-center text-[32px] sm:text-[36px] md:text-[44px] font-medium leading-[1.05] mb-12 text-white" style={{ fontFamily: GROTESK }}>
            Built on Real <span style={{ color: LIME }}>Implementation</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="p-6 rounded-xl text-center" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                <div className="text-[30px] sm:text-[30px] font-medium" style={{ color: LIME, fontFamily: GROTESK }}>{s.v}</div>
                <div className="text-[13px] uppercase tracking-[0.14em] mt-1" style={{ color: DIM }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ===================== CTA ===================== */
const CTASection = () => (
  <BrandedCTASection
    title={<>Start Your <CtaHighlight>Digital Factory Journey</CtaHighlight></>}
    description="Book a platform demo or get your tailored deployment architecture review."
  />
);

/* ===================== PAGE ===================== */
const ShopFloor = () => {
  return (
    <div className="min-h-screen no-scrollbar" style={{ background: PANEL }}>
      <style>{`
        html, body { scrollbar-width: none; -ms-overflow-style: none; }
        html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; width: 0; height: 0; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
        @media (min-width: 1280px) {
          .sfd-container { max-width: 1200px !important; }
        }
      `}</style>
      
      <Navbar />
      <HeroSection />
      <UnifiedLayerSection />
      <FactoryIntelligenceSection />
      <PlantRulesSection />
      <AutonomousActionsSection />
      <SapSyncSection />
      <RealProblemsSection />
      <IndustrySection />
      <ResilienceSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default ShopFloor;
