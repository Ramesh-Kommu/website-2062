import { motion, useReducedMotion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import type { ReactNode } from "react";
import {
  Database, Cloud, Server, Layers, GitBranch, Zap, Shield, BarChart3,
  Workflow, Cpu, Activity, Box, Brain, Link2, Settings, Lock, FileCode,
  ArrowRight, CheckCircle2, Gauge,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/de-hero-bg.jpeg";
import dataArchitectureDiagram from "@/assets/data-architecture-diagram.png";
import dataIntegrationHub from "@/assets/data-integration-hub.png";
import lakehouseTiers from "@/assets/lakehouse-tiers.png";

const LIME = "#C8FF01";
const GREEN_BORDER = "rgba(200,255,1,0.25)";
const PANEL = "#0F1420";
const PANEL_2 = "#0B1020";
const DARK_BLUE = "#0A0F1F";

/* ---------- Reveal (scroll-triggered animation) ---------- */
const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Eyebrow ---------- */
const Eyebrow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-px" style={{ background: LIME }} />
    <span className="text-[11px] font-medium tracking-[0.05em]" style={{ color: LIME }}>{text}</span>
  </div>
);

/* ---------- Hero ---------- */
const HeroSection = () => {
  const stats = [
    { value: "90+", label: "Projects Delivered" },
    { value: "10x", label: "Faster Data Pipelines" },
    { value: "99%", label: "Uptime SLA Guaranteed" },
    { value: "50%", label: "Infrastructure Cost Saved" },
  ];
  return (
    <motion.section className="relative min-h-[600px] sm:min-h-[680px] flex items-center overflow-hidden" initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 sm:mb-8"
          style={{ background: "rgba(200,255,1,0.08)", border: `1px solid ${GREEN_BORDER}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: LIME }}>
            Enterprise Data Engineering · Azure Native
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[32px] sm:text-[44px] md:text-[56px] font-medium leading-[1.1] mb-5 max-w-3xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Engineering<br /> Enterprise Data on Azure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[15px] sm:text-[14px] max-w-xl mb-8 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Specialised data engineering practice. SAP-first integration tools. Factories for large-scale enterprise data lakes on Azure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[26px] sm:text-[32px] md:text-[36px] font-medium leading-none mb-2" style={{ color: "white", fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-[12px] sm:text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

/* ---------- End-to-End Azure Data Platform ---------- */
const PlatformSection = () => {
  const chips = ["Multi-Source Ingestion", "ADF Orchestration", "Delta Lakehouse", "Real-Time Analytics", "AI/ML Serving"];
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: "#070A07" }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow text="Data Architecture" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-5 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            End-to-End Azure<br />Data Platform
          </h2>
          <p className="text-[14px] sm:text-[13px] mb-8 max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            From SAP source systems to Power BI dashboards — fully orchestrated through Azure Data Factory with enterprise-grade reliability and governance.
          </p>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="text-[12px] sm:text-[10px] px-3 py-1.5" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* diagram */}
        <div className="relative p-4 sm:p-6 flex items-center justify-center" style={{ background: "#070A07", boxShadow: "0 10px 40px rgba(200,255,1,0.06), 0 4px 20px rgba(0,0,0,0.4)" }}>
          <img src={dataArchitectureDiagram} alt="End-to-End Azure Data Platform diagram" className="w-full h-auto object-contain" />
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Powerful Data Integration ---------- */
const IntegrationSection = () => {
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: "#070A07" }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px" style={{ background: LIME }} />
            <span className="text-[11px] font-medium tracking-[0.05em]" style={{ color: LIME }}>Azure Data Factory</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Powerful Data Integration<br />at Enterprise Scale
          </h2>
          <p className="text-[14px] sm:text-[13px] max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            SAP-native pipelines with built-in connectors, incremental loads, and dependency-aware transformation graphs.
          </p>
        </div>

        {/* integration hub diagram with labels */}
        <div className="relative mx-auto max-w-5xl">
          <img src={dataIntegrationHub} alt="Data integration hub diagram" className="w-full h-auto object-contain block" />
          {(() => {
            const labelCls = "hidden sm:block absolute text-[10px] sm:text-[12px] md:text-[13px] text-white/85 whitespace-nowrap -translate-x-1/2";
            return (
              <>
                {/* Top-left: SAP CF Accelerator (gear) */}
                <span className={labelCls} style={{ left: "25%", top: "41%" }}>SAP CF Accelerator</span>
                {/* Mid-left: OData Extraction (link) */}
                <span className={labelCls} style={{ left: "11%", top: "63%" }}>OData Extraction</span>
                {/* Bottom-left: Parallel Processing (cloud) */}
                <span className={labelCls} style={{ left: "25%", top: "86%" }}>Parallel Processing</span>
                {/* Top-right: Multi-Source Ingestion (arrows) */}
                <span className={labelCls} style={{ left: "75%", top: "41%" }}>Multi-Source Ingestion</span>
                {/* Mid-right: Business Data Cubes (bars) */}
                <span className={labelCls} style={{ left: "89%", top: "63%" }}>Business Data Cubes</span>
                {/* Bottom-right: Complex Transforms (brain) */}
                <span className={labelCls} style={{ left: "75%", top: "86%" }}>Complex Transforms</span>
              </>
            );
          })()}
        </div>

        {/* Mobile-only labels list (shown when overlay labels are hidden) */}
        <div className="sm:hidden mt-6 grid grid-cols-2 gap-2">
          {["SAP CF Accelerator","Multi-Source Ingestion","OData Extraction","Business Data Cubes","Parallel Processing","Complex Transforms"].map((l) => (
            <span key={l} className="text-[12px] px-3 py-1.5 text-center" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Pipeline Performance + Adoption ---------- */
const MetricsSection = () => {
  const perf = [
    { value: 94, label: "Uptime" },
    { value: 87, label: "Throughput" },
    { value: 96, label: "Data Quality" },
    { value: 72, label: "Auto-recovery" },
  ];
  const adoption = [
    { label: "Lakehouse Architecture", value: 98 },
    { label: "Azure Data Platform", value: 95 },
    { label: "SAP Synchronization", value: 90 },
    { label: "Power BI Integration", value: 86 },
    { label: "ADF Orchestration", value: 81 },
  ];
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: DARK_BLUE }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Eyebrow text="Performance" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-8 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Pipeline Performance<br />Metrics
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {perf.map((p) => {
              const circumference = 2 * Math.PI * 26;
              const offset = circumference - (p.value / 100) * circumference;
              return (
                <div key={p.label} className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                      <circle cx="32" cy="32" r="26" fill="none" stroke={LIME} strokeWidth="3" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[11px] font-medium" style={{ color: LIME }}>{p.value}%</div>
                  </div>
                  <div className="text-[11px] sm:text-[9px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>{p.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <Eyebrow text="Adoption" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-8 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Technology Adoption Rates
          </h2>
          <div className="space-y-4">
            {adoption.map((a) => (
              <div key={a.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] sm:text-[11px]" style={{ color: "rgba(255,255,255,0.7)" }}>{a.label}</span>
                  <span className="text-[12px] sm:text-[10px]" style={{ color: LIME }}>{a.value}%</span>
                </div>
                <div className="h-1 w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${a.value}%` }} viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full" style={{ background: LIME }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Lakehouse Architecture ---------- */
const LakehouseSection = () => {
  const layers = [
    { label: "Bronze", desc: "RAW Layer", color: "#CD7F32" },
    { label: "Silver", desc: "Cleansed", color: "#C0C0C0" },
    { label: "Gold", desc: "Business", color: "#A3E635" },
    { label: "Platinum", desc: "ML Ready", color: "#A855F7" },
  ];
  const chips = ["Spark Transforms", "Stream Processing", "AI-Assisted Eng.", "Lake Build Tooling"];
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: "#070A07" }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative p-6 sm:p-8" style={{ background: "#070A07", borderRadius: 14, border: "1px solid rgba(200,255,1,0.12)", boxShadow: "0 10px 40px rgba(200,255,1,0.06), 0 4px 20px rgba(0,0,0,0.4)" }}>
          <img src={lakehouseTiers} alt="Bronze Silver Gold Platinum lakehouse tiers" className="w-full h-auto object-contain block" />
          <div className="grid grid-cols-4 gap-2 mt-3 mb-6">
            {layers.map((l) => (
              <div key={l.label} className="text-center">
                <div className="text-[14px] sm:text-[13px] font-semibold text-white">{l.label}</div>
                <div className="text-[12px] sm:text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{l.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Delta Lake", "Unity Catalog", "AutoML", "Spark Streaming", "MLFlow", "Photon Engine"].map((c) => (
              <span key={c} className="text-[12px] sm:text-[10px] px-3 py-1.5" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow text="Azure Databricks" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-5 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Lakehouse Architecture<br />Built for Scale
          </h2>
          <p className="text-[14px] sm:text-[13px] mb-6 max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Multi-layer Delta lakehouse with Bronze-Silver-Gold-Platinum tiers. Unity Catalog governance, AutoML pipelines, and real-time Spark streaming.
          </p>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="text-[12px] sm:text-[10px] px-3 py-1.5" style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Carbynetech Engineering Process ---------- */
const ProcessSection = () => {
  const steps = [
    { label: "Data Source Discovery", color: "#A3E635" },
    { label: "SAP / ERP Modeling", color: "#3B82F6" },
    { label: "API Pipeline Design", color: "#A3E635" },
    { label: "Databricks Processing Layer", color: "#F97316" },
    { label: "Validation & Deployment", color: "#A3E635" },
    { label: "Right-Sized Delivery", color: "#A855F7" },
    { label: "Business Domain Alignment", color: "#A3E635" },
  ];
  const chips = ["SAP Native", "Azure ADF", "Databricks", "AI / ML", "Power BI", "Security"];
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: "#000" }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow text="What We Work" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-6 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            The Carbynetech<br />Engineering Process
          </h2>
          <p className="text-[15px] sm:text-[14px] mb-8 max-w-md leading-[1.7]" style={{ color: "rgba(255,255,255,0.5)" }}>
            A proven 7-stage methodology that takes your data from discovery to production — with full SAP integration, Azure deployment, and business alignment.
          </p>
          <div className="grid grid-cols-3 gap-2 max-w-md">
            {chips.map((c) => (
              <span key={c} className="text-[13px] sm:text-[12px] px-4 py-2.5 text-center rounded-md" style={{ background: PANEL, color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.10)" }}>
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="p-6 sm:p-10 rounded-2xl" style={{ background: "#0A0F0A", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="relative">
            <div className="flex flex-col gap-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative flex items-center gap-5"
                >
                  {/* connector between this circle and the next — outer-to-outer */}
                  {i < steps.length - 1 && (
                    <div
                      className="absolute w-px"
                      style={{
                        left: "18.5px",
                        top: "100%",
                        height: "16px",
                        background: "rgba(255,255,255,0.10)",
                      }}
                    />
                  )}
                  <div
                    className="w-[38px] h-[38px] rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: `radial-gradient(circle, ${s.color}26 0%, ${s.color}10 60%, #0A0F0A 100%)`,
                      border: `1.5px solid ${s.color}`,
                    }}
                  >
                    <span className="text-[9px] font-semibold tracking-wider" style={{ color: s.color, fontFamily: "'JetBrains Mono', monospace" }}>
                      0{i + 1}
                    </span>
                  </div>
                  <span className="text-[14px] sm:text-[12px] text-white/85 flex-1">{s.label}</span>
                  <div
                    className="w-10 h-[1.5px] shrink-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, transparent 0%, ${s.color} 50%, transparent 100%)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Azure Integration Services ---------- */
const ServicesSection = () => {
  const services = [
    { icon: Workflow, title: "Azure Logic Apps", desc: "No-code/low-code workflows to connect apps, SaaS, and on-prem systems using prebuilt connectors." },
    { icon: Cloud, title: "Azure API Management", desc: "Publish, secure, and govern APIs with throttling, analytics, and developer portals." },
    { icon: Layers, title: "Azure Service Bus", desc: "Reliable messaging with queues & topics for decoupled enterprise communication." },
    { icon: GitBranch, title: "Azure Event Grid", desc: "Event-driven service that routes real-time events across systems and applications." },
    { icon: Box, title: "Azure Functions", desc: "Serverless compute for event-triggered processing and lightweight integrations." },
    { icon: Zap, title: "Azure Data Factory", desc: "Orchestrate ETL/ELT pipelines across databases, lakes, and SaaS platforms." },
  ];
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: "#000" }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: LIME }} />
            <span className="text-[11px] font-medium tracking-[0.05em]" style={{ color: LIME }}>Data Integration Layer</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-4 leading-[1.05]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Azure Integration <span style={{ color: LIME }}>Services</span>
          </h2>
          <p className="text-[15px] sm:text-[15px] max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Extend your data platform with scalable, event-driven, and API-led integration services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-4 rounded-lg transition-colors"
              style={{ background: "#0E110E", border: "1.5px solid #1F221F" }}
            >
              <div className="w-7 h-7 mb-3 flex items-center justify-center rounded" style={{ background: "#171F0D", border: "0.5px solid #2E430B" }}>
                <s.icon className="w-[14px] h-[14px] text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] sm:text-[13px] font-medium mb-1.5" style={{ color: "#759600", fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
              <p className="text-[13px] sm:text-[11.5px] leading-[1.55]" style={{ color: "#8799AB" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Built on Real Implementation ---------- */
const ProofSection = () => {
  const stats = [
    { value: "90+", label: "Pipelines Built" },
    { value: "50%", label: "Cost Reduction" },
    { value: "10x", label: "Faster Delivery" },
    { value: "99%", label: "Pipeline SLA" },
  ];
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: "#000" }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ background: LIME }} />
          <span className="text-[12px] font-medium" style={{ color: LIME }}>Proof Points</span>
        </div>
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium mb-6 leading-[1.05] text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="text-white">Built on Real</span><br />
          <span style={{ background: "linear-gradient(90deg, #B0ED13 0%, #33A88D 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Implementation</span>
        </h2>
        <p className="text-[15px] sm:text-[15px] max-w-3xl mx-auto mb-8" style={{ color: "#8799AB" }}>
          Every metric backed by production deployments across Fortune 500 manufacturing, pharma, and industrial clients.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="rounded-md py-6 px-5" style={{ background: "#09091199", border: "1px solid #1F2811" }}>
              <div className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-none mb-2" style={{ background: "linear-gradient(90deg, #B0ED13 0%, #33A88D 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-[13px] sm:text-[12px]" style={{ color: "#8799AB" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- Full-Stack Azure Technology ---------- */
const TechStackSection = () => {
  const groups = [
    { title: "Data Integration", items: ["Azure Data Factory", "SAP BW/4HANA", "OData API", "RFC/BAPI", "BODS"] },
    { title: "Analytics Platform", items: ["Databricks", "Azure Synapse", "Power BI", "Unity Catalog"] },
    { title: "AI & Machine Learning", items: ["Azure ML", "AutoML", "MLflow", "Spark MLlib", "Cognitive"] },
    { title: "Storage Layer", items: ["ADLS Gen2", "Delta Lake", "Azure SQL", "Cosmos DB", "Blob"] },
    { title: "Orchestration", items: ["ADF Pipelines", "Azure Purview", "DevOps CI/CD", "Databricks Workflow"] },
    { title: "Security & Governance", items: ["Azure AD", "Key Vault", "Private Endpoints", "RBAC", "Defender"] },
  ];
  return (
    <motion.section className="py-8 sm:py-12" style={{ background: "#000" }} initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="text-center mb-8">
          <Eyebrow text="Technology" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium text-white mb-3 leading-[1.1] text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Full-Stack Azure Technology
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {groups.map((g) => (
            <div key={g.title} className="px-5 py-4 rounded-lg" style={{ background: "#0E110E", border: "1.5px solid #1F221F" }}>
              <div
                className="text-[17px] sm:text-[15px] font-semibold mb-3"
                style={{
                  background: "linear-gradient(90deg, #AAF007 0%, #AAFF05 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {g.title}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="text-[13px] sm:text-[11.5px] px-2.5 py-1 rounded-md"
                    style={{
                      background: "transparent",
                      color: "#9BA0A3",
                      border: "1px solid #262926",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

/* ---------- CTA ---------- */
const CTASection = () => (
  <BrandedCTASection
    title={<>Stop Moving Data.<br /><CtaHighlight>Start Engineering Platforms.</CtaHighlight></>}
    description="Light full-length built on ADF. Enterprise-scale data lakes on Databricks. Built for large data volumes."
  />
);

const EnterpriseDataEngineering = () => {
  return (
    <div className="min-h-screen" style={{ background: "#000" }}>
      <Navbar />
      <HeroSection />
      <PlatformSection />
      <IntegrationSection />
      <LakehouseSection />
      <ProcessSection />
      <ServicesSection />
      <ProofSection />
      <TechStackSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default EnterpriseDataEngineering;