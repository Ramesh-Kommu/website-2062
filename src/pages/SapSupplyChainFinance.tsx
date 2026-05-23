import { motion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import {
  Wrench, ClipboardList, Layers, Database, Trash2, FileBarChart,
  Workflow, GitBranch, Zap, Sparkles, Activity, TrendingUp, Calculator,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/sap-scf-hero-bg.png";

const LIME = "#C8FF01";
const TEAL = "#5EE7C8";
const GREEN_BORDER = "rgba(200,255,1,0.25)";
const PANEL = "#0F1420";
const PURPLE_BG = "#1A1740";

/* ---------- Hero ---------- */
const HERO_LIME = "#AAFF00";
const HeroSection = () => {
  const stats = [
    { value: "06", label: "Domains" },
    { value: "40+", label: "Value Levers" },
    { value: "AI+Human", label: "Agentic AI" },
    { value: "On-Prem & RISE", label: "Deploy" },
  ];
  return (
    <section className="relative min-h-[640px] sm:min-h-[720px] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 sm:mb-8"
          style={{ background: "rgba(170,255,0,0.08)", border: `1px solid ${HERO_LIME}40` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: HERO_LIME }} />
          <span className="text-[14px] sm:text-[11px] font-medium tracking-[0.18em]" style={{ color: HERO_LIME }}>
            Supply Chain Finance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[41px] sm:text-[44px] md:text-[56px] font-medium leading-[1.1] mb-5 max-w-3xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Supply Chain Finance<br />Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[16px] sm:text-[14px] max-w-2xl mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Where Finance rigor meets operational precision. Carbynetech brings together Finance Controllers, Management Reporting specialists, Profitability Analysis experts, and SCM process architects — augmented by Analytics, Data Science, and Agentic AI — to deliver holistic Finance transformation across your supply chain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[34px] sm:text-[32px] md:text-[36px] font-medium leading-none mb-2 whitespace-nowrap" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-[14px] sm:text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Section header helpers ---------- */
const Eyebrow = ({ text, color = LIME }: { text: string; color?: string }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-8 h-px" style={{ background: color }} />
    <span className="text-[13px] font-medium uppercase tracking-[0.2em]" style={{ color }}>{text}</span>
  </div>
);

/* ---------- Six Practice Domains ---------- */
const DomainsSection = () => {
  const domains = [
    {
      icon: Wrench, tag: "VALUE", title: "Manufacturing Cost Control",
      desc: "Full cost visibility from production order to period close — automated checks, validated allocations, zero manual chasing.",
      chips: ["Order Variance Analysis", "WIP Reconciliation", "Standard vs Actual Costing", "Production Order Audit", "Overhead Allocation Reviews", "Product Costing Refinement"],
    },
    {
      icon: ClipboardList, tag: "PLAN", title: "Forecast & Business Planning",
      desc: "Reliable operational realities into financial plans — cost buckets, volume drivers, and fixed asset movements reconciled in one view.",
      chips: ["Demand Forecast Integration", "Volume-Cost Bridge", "Plan Variance Tracking", "Rolling Forecast Cycle Planning", "Driver Modeling & What-Ifs", "Reserve Provision Diagnostics"],
    },
    {
      icon: Layers, tag: "COST", title: "Costing & Transfer Pricing",
      desc: "Costing accuracy that survives audit — governance frameworks, intercompany pricing models, and real-time traceability from raw to finished.",
      chips: ["Standard Cost Object Maintenance", "Bill of Activity Costs Compliance", "Activity Price Reviews", "Intercompany Adjustment Logic", "Transfer Pricing Validation", "Margin Bridge Analytics"],
    },
    {
      icon: Database, tag: "ASSETS & DATA", title: "Fixed Asset Intelligence",
      desc: "From project approval to asset capitalization — CapEx tracked, WIP reviewed, and master data automated with precision.",
      chips: ["Asset Under Construction Reviews", "Capitalization Audit Controls", "Asset Master Data Cleanse", "Depreciation Run Diagnostics", "CapEx vs OpEx Classification", "Inventory Master Sync"],
    },
    {
      icon: Trash2, tag: "QUALITY", title: "Business Waste Control",
      desc: "Quantify and contain the hidden cost of waste — obsolescence, defects, and write-offs surfaced in your CO framework.",
      chips: ["Provision Obsolescence Monitoring", "Scrap & Rework Cost Coordination", "Quality Failure Cost Analysis", "Inventory Aging Diagnostics", "Returns Cost Pattern Mining", "Production Run Waste Reviews"],
    },
    {
      icon: FileBarChart, tag: "REPORT", title: "Management Reporting & COPA",
      desc: "One coherent story from factory floor to P&L — COPA structured cycles, automated management packs, delivered on time.",
      chips: ["COPA Realignment & Re-org Support", "Profitability Segment Modeling", "COPA Document Cycle Integration", "Run-Rate vs Margin Analytics", "Periodic Close Insights View", "Management Report Productionization"],
    },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16" style={{ background: "#060604" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <h2 className="text-center text-[29px] sm:text-[30px] md:text-[40px] font-medium text-white mb-8 sm:mb-10 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Six Practice Domains.<br />One Finance Transformation.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-4 sm:p-5 transition-colors duration-300"
              style={{
                background: "#0C100C",
                border: "0.5px solid rgba(37,37,37,0.7)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#151A00"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#0C100C"; }}
            >
              <div className="absolute top-4 right-5 text-[12px] font-medium tracking-[0.2em]" style={{ color: "#C8FF00" }}>
                {d.tag}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-[2px] shrink-0"
                  style={{ background: "#052436" }}
                >
                  <d.icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] sm:text-[15px] font-medium text-white">{d.title}</h3>
              </div>
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                {d.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {d.chips.map((c) => (
                  <span
                    key={c}
                    className="chip text-[12.5px] px-2 py-1 transition-colors duration-300"
                    style={{
                      background: "#061727",
                      border: "0.5px solid #052839",
                      color: "rgba(200,220,240,0.75)",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .group:hover .chip {
          background: #142A18 !important;
          border-color: rgba(170,255,0,0.15) !important;
        }
      `}</style>
    </section>
  );
};

/* ---------- Value Creation ---------- */
const ValueCreationSection = () => {
  const items = [
    { icon: Workflow, title: "Fiori Activation", desc: "Type-ahead Fiori questions — toolkit surfaces resolves ~80% issues over Excel." },
    { icon: GitBranch, title: "Workflow Automation", desc: "Approval workflows for CapEx, write-offs, accruals, and PO release ceremonies — routed, tracked, and audit-ready." },
    { icon: Zap, title: "Process Simplification", desc: "Eliminating manual steps in Mumbai, COPA cycles and closing-day chains through configuration and master scheduling." },
    { icon: Sparkles, title: "Agentic AI Augmentation", desc: "Autonomous agents that monitor variances, flag missing inputs, run scenarios, and generate management commentary." },
  ];
  return (
    <section className="py-12 sm:py-14 md:py-16" style={{ background: "#060604" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <h2 className="text-center text-[29px] sm:text-[30px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          How Value Creation in Supply Chain Finance
        </h2>
        <p className="text-center text-[16px] sm:text-[13px] mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "#8799AB" }}>
          Value unlocked not through migration alone — but through Fiori enablement, intelligent workflows, and new S/4HANA features activated post go-live.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 py-3.5 text-center rounded-md transition-all duration-300"
              style={{ background: "#12151C", border: "1.5px solid #1D222B" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#0B1324";
                e.currentTarget.style.boxShadow = "0px 4px 20px 0px #02184880";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#12151C";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <it.icon className="w-5 h-5 mx-auto mb-2 text-white" strokeWidth={1.5} />
              <h3 className="text-[16px] font-medium text-white mb-1.5">{it.title}</h3>
              <p className="text-[13.5px] leading-snug" style={{ color: "#8799AB" }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Finance That Closes Itself (purple agents) ---------- */
const ClosesItselfSection = () => {
  const agents = [
    { tag: "Agent 01", icon: Activity, title: "Period-End Agent", desc: "Monitors open production orders, missing activity prices, and unclosed overheads. Flags and resolves blockers 72 hours before close." },
    { tag: "Agent 02", icon: TrendingUp, title: "Variance Intelligence Agent", desc: "Detects cost variances across production orders and COPA segments. Generates root-cause narratives and routes exceptions for controller sign-off." },
    { tag: "Agent 03", icon: Calculator, title: "Costing Simulation Agent", desc: "Runs what-if scenarios on activity price changes, volume shifts, and transfer price revisions. Delivers instant P&L impact previews." },
  ];
  return (
    <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden" style={{ background: PURPLE_BG }}>
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <h2 className="text-[29px] sm:text-[30px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Finance That Closes Itself.
        </h2>
        <p className="text-[16px] sm:text-[13px] mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.55)" }}>
          Agentic AI that operates within your S/4HANA landscape — monitoring, detecting, simulating, and resolving before you even open the dashboard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {agents.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 sm:p-5 rounded-md transition-colors duration-300"
              style={{
                background: "#1D123F",
                border: "1px solid #402379",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#5F4298"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#402379"; }}
            >
              <div
                className="inline-block text-[13px] font-medium tracking-[0.15em] px-2.5 py-1 mb-3 rounded-full"
                style={{ color: "#D096FF", background: "#1C113D", border: "1px solid #402379" }}
              >
                {a.tag}
              </div>
              <h3 className="text-[18px] sm:text-[15px] font-medium text-white mb-3">{a.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "#8B9DC1" }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- A Different Kind of SAP Partner ---------- */
const DifferentPartnerSection = () => {
  const skills = [
    "SAP CO - Product Costing", "SAP FI - Asset Accounting", "COPA - Profitability Analysis",
    "Material Ledger - Actual Costing", "SAP Analytics Cloud", "Agentic AI - S/4HANA Native",
  ];
  return (
    <section className="py-12 sm:py-14 md:py-16" style={{ background: "#060604" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <h2 className="text-[29px] sm:text-[30px] md:text-[40px] font-medium text-white mb-4 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          A Different Kind of SAP Partner
        </h2>
        <p className="text-[16px] sm:text-[13px] max-w-3xl mx-auto mb-8 leading-relaxed" style={{ color: "#8799AB" }}>
          Carbynetech is not a generalist integrator. Our Supply Chain Finance practice is staffed by Finance Controllers who have closed books, Management Reporting leads who have built COPA from scratch, and Costing specialists who have designed transfer price models for multi-entity operations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="px-5 py-3 text-[16px] sm:text-[13px] font-medium rounded-md text-white cursor-default"
              style={{ background: "#1E2229", border: "1px solid rgba(255,255,255,0.04)" }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Lime CTA ---------- */
const ScfCTASection = () => (
  <BrandedCTASection
    title={<>Ready for Finance That <CtaHighlight>Closes Itself?</CtaHighlight></>}
    description="Transform your supply chain finance with intelligent automation, real-time insights, and S/4HANA-native design. Carbynetech helps you move faster, close smarter, and operate with precision at scale."
  />
);

/* ---------- Page ---------- */
const SapSupplyChainFinance = () => {
  return (
    <div className="min-h-screen" style={{ background: "#000", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <DomainsSection />
      <ValueCreationSection />
      <ClosesItselfSection />
      <DifferentPartnerSection />
      <ScfCTASection />
      <FooterSection />
    </div>
  );
};

export default SapSupplyChainFinance;
