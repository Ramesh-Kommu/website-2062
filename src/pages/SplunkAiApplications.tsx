import { motion, useReducedMotion, useInView } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  Shield, Activity, Network, ShieldCheck, Search, Workflow, FileSearch, FileCheck2,
  Gauge, Server, AlertTriangle, BellRing, GitBranch, Database, BarChart3,
  Inbox, Filter, Bot, PlayCircle, CheckCircle2, Award, Users, Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/splunk-hero-bg.jpeg";
import bgSecurity from "@/assets/splunk/bg-security.jpg";
import bgObservability from "@/assets/splunk/bg-observability.jpg";
import bgMiddleware from "@/assets/splunk/bg-middleware.jpg";

/* Reuse the Vision Analytics design language */
const LIME = "#C8FF01";
const LIME_SOFT = "rgba(200,255,1,0.25)";
const PANEL = "#0B0E14";
const CARD = "#11151D";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "rgba(255,255,255,0.55)";
const DIM = "rgba(255,255,255,0.45)";
const GROTESK = "'Space Grotesk', sans-serif";
const SCRIPT = "'Cormorant Garamond', serif";

/* ---------- Reveal ---------- */
const Reveal = ({ children, delay = 0, y = 24, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Eyebrow = ({ text, center = false, color = LIME }: { text: string; center?: boolean; color?: string }) => (
  <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
    <div className="w-6 h-px" style={{ background: color }} />
    <span className="text-[14px] sm:text-[10px] tracking-[0.2em]" style={{ color }}>{text}</span>
  </div>
);

/* ===================== HERO ===================== */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: PANEL }}>
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-16 sm:pb-24">
      <Reveal>
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8"
          style={{ background: "rgba(200,255,1,0.06)", border: `1px solid ${LIME_SOFT}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="text-[15px] sm:text-[11px] font-medium tracking-[0.05em]" style={{ color: LIME }}>
            Splunk · Intelligence Partnership
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h1
          className="text-[44px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.01em] mb-6 max-w-3xl text-white"
          style={{ fontFamily: GROTESK, fontWeight: 500 }}
        >
          Security
          <br />
          Observability
          <br />
          Intelligent Operations
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-[17px] sm:text-[13px] md:text-[14px] max-w-xl leading-relaxed" style={{ color: "#8799AB" }}>
          We transform security operations with AI-driven automation — detect threats, resolve
          incidents, and optimize IT operations without human delay.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ===================== NUMBERS THAT MATTER ===================== */
const NumbersSection = () => {
  const stats = [
    { v: "85%", l: "Alerts Triaged Automatically", d: "AI-powered triage reduces manual review by 85%, letting your SOC focus on real threats instead of noise." },
    { v: "67%", l: "Lower Alert Fatigue", d: "Intelligent correlation and deduplication cuts alert volume by 67%, eliminating analyst burnout and missed incidents." },
    { v: "287d", l: "Avg Breach Detection", d: "The average enterprise takes 287 days to detect a breach. Our platform reduces that to hours, not months." },
    { v: "$5.6M", l: "Avg Cost of a Breach", d: "Every breach costs an average of $5.6M. Faster detection and automated response dramatically reduce exposure." },
  ];
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <h2
            className="text-center text-[32px] sm:text-[30px] md:text-[36px] mb-6 sm:mb-8 leading-tight text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            The Numbers That Matter{" "}
            <span style={{ fontFamily: "'Square Peg', cursive", fontWeight: 400, color: "#30E8BA", fontSize: "1.15em" }}>
              in CyberSec
            </span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.v} delay={i * 0.05}>
              <div
                className="group p-6 h-full transition-all duration-500 ease-out"
                style={{ background: "#111113", borderRadius: 0 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0px 4px 10px 5px #1F32394D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="text-[36px] sm:text-[36px] mb-3 transition-all duration-500 ease-out group-hover:text-[38px] sm:group-hover:text-[40px]"
                  style={{ color: "#20A374", fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                >
                  {s.v}
                </div>
                <div className="text-white text-[15px] sm:text-[13px] font-semibold mb-3 transition-all duration-500 ease-out group-hover:text-[16px] sm:group-hover:text-[14px]">
                  {s.l}
                </div>
                <p
                  className="text-[16px] sm:text-[12px] leading-relaxed transition-all duration-500 ease-out group-hover:text-white group-hover:text-[14.5px] sm:group-hover:text-[12.5px]"
                  style={{ color: "#737594" }}
                >
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

function AnimatedMetric({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState("0%");
  useEffect(() => {
    if (!inView) return;
    const target = parseInt(value, 10);
    if (isNaN(target)) { setDisplay(value); return; }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${Math.round(target * eased)}%`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span>{display}</span>;
}

const WhatWeDeliverSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-15%" });

  const domains = [
    {
      index: "01",
      category: "Security",
      title: "Security Intelligence",
      description:
        "Splunk Enterprise · SIEM · SOAR · XDR · CrowdStrike · Threat Intel. AI-driven triage, automated playbooks, and real-time incident correlation across your security stack.",
      metric: "60%",
      metricLabel: "Faster Detection",
      Icon: Shield,
      accent: "from-sky-400/20 to-sky-400/0",
      bg: bgSecurity,
    },
    {
      index: "02",
      category: "Observability",
      title: "Observability & IT Operations",
      description:
        "ServiceNow · Datadog · SolarWinds · Full-Stack Observability. Centralized log collection, ITSI, predictive alerting, anomaly detection, and auto-remediation.",
      metric: "50%",
      metricLabel: "Less Downtime",
      Icon: Activity,
      accent: "from-violet-400/20 to-violet-400/0",
      bg: bgObservability,
    },
    {
      index: "03",
      category: "Middleware",
      title: "Multi-cloud Integration & Middleware",
      description:
        "ITSM · CI/CD · IRESS Middleware · API Orchestration. Event-stream correlation, cross-platform dashboards, and unified operations across hybrid environments.",
      metric: "100%",
      metricLabel: "Unified Coverage",
      Icon: Network,
      accent: "from-amber-400/20 to-amber-400/0",
      bg: bgMiddleware,
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ fontFamily: GROTESK, backgroundColor: "#07070a" }}
      className="relative overflow-hidden py-12 sm:py-16 px-5 sm:px-6 md:px-10"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10),transparent_70%)] blur-3xl" />
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <Reveal>
          <Eyebrow text="Three Domains · End-to-End Service Platform" center />
          <h2
            className="text-center text-[40px] sm:text-[40px] md:text-[48px] mb-8 leading-tight text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            What We Deliver
          </h2>
        </Reveal>

        {/* cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {domains.map((d, i) => (
            <motion.article
              key={d.index}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              style={{ fontFamily: GROTESK }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-white/20"
            >
              {/* background image */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12] transition-opacity duration-700 group-hover:opacity-25"
                style={{ backgroundImage: `url(${d.bg})` }}
              />
              {/* dark gradient veil for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07070a] via-[#07070a]/85 to-[#07070a]/40" />
              {/* hover glow */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${d.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[15px] sm:text-[11px] uppercase tracking-[0.18em] text-white/40"
                    style={{ fontFamily: GROTESK }}
                  >
                    Domain {d.index} — {d.category}
                  </span>
                  <d.Icon
                    className="h-5 w-5 text-white/30 transition-colors group-hover:text-white/70"
                    strokeWidth={1.5}
                  />
                </div>

                <h3
                  className="mt-4 text-[22px] sm:text-xl font-semibold leading-tight text-white"
                  style={{ fontFamily: GROTESK }}
                >
                  {d.title}
                </h3>

                <p
                  className="mt-3 text-[15px] sm:text-sm leading-relaxed text-white/60"
                  style={{ fontFamily: GROTESK }}
                >
                  {d.description}
                </p>

                <div className="mt-6 flex items-baseline gap-3 border-t border-white/10 pt-4">
                  <span
                    className="text-[34px] sm:text-3xl font-medium text-white tabular-nums"
                    style={{ fontFamily: GROTESK }}
                  >
                    <AnimatedMetric value={d.metric} inView={inView} />
                  </span>
                  <span
                    className="text-[15px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50"
                    style={{ fontFamily: GROTESK }}
                  >
                    {d.metricLabel}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
type DomainCard = { tag: string; sub: string; t: string; d: string; pct: string; pl: string; arrow?: "down" | "up" | "" };

/* ===================== SECURITY INTELLIGENCE (pixel-matched) ===================== */
const SecurityIntelligenceSection = () => {
  const cards: DomainCard[] = [
    { tag: "SIEM", sub: "— Enterprise-Class", t: "Unified SIEM for Sentinel & CrowdStrike", d: "Centralized event correlation, real-time threat detection, and compliance-ready dashboards across hybrid environments. Powered by Splunk ES.", pct: "60%", pl: "Manual Analysis Effort", arrow: "down" },
    { tag: "SOAR", sub: "— Smart Automation", t: "Accelerate & Automate Response Workflows", d: "Pre-built playbooks for phishing, malware, and insider threat. Integrates with ServiceNow, PagerDuty, and Jira for end-to-end orchestration.", pct: "75%", pl: "Faster Response Time", arrow: "down" },
    { tag: "XDR", sub: "— Extended Detection", t: "Context-Based Remediation for your Environment", d: "Behavioral analytics, cross-endpoint visibility, and automated containment. Eliminates blind spots across network, email, and cloud.", pct: "3X", pl: "Expanded detection coverage", arrow: "" },
    { tag: "Attack Analyzer", sub: "", t: "Automated Threat Analysis & Cyber Forensics / Simulation", d: "Real-time threat intelligence feeds, automated IOC enrichment, and kill-chain mapping for faster investigation.", pct: "90%", pl: "Manual Analysis Effort", arrow: "down" },
    { tag: "Asset & Risk Intelligence", sub: "", t: "Full Asset Visibility & Risk Scoring / Compliance Monitoring", d: "Continuous asset discovery, vulnerability correlation, and risk-based prioritization for compliance frameworks.", pct: "100%", pl: "Audit Readiness & Full Visibility", arrow: "" },
    { tag: "OT/ICS/IoT Security", sub: "", t: "Runtime Micro-Stability / Predictive Threat Correlation", d: "Industrial control system monitoring, firmware analysis, and zero-trust segmentation for critical infrastructure.", pct: "3X", pl: "Reactive to Predictive Shift", arrow: "" },
  ];

  const STAT = "#C8FF00A6";
  const MUTED_TXT = "#737594";

  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#111113" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="What We Build For Your Safety" />
          <h2
            className="text-[40px] sm:text-[44px] md:text-[56px] mb-8 leading-[1.05] text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            Security Intelligence
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div
                className="group relative h-full p-5 sm:p-6 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
                style={{ background: "#13181C", borderRadius: 0 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0B120B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#13181C";
                }}
              >
                <div className="flex flex-col h-full">
                  {/* eyebrow tag */}
                  <div
                    className="text-[15px] sm:text-[11px] mb-4 transition-all duration-500 ease-out"
                    style={{
                      color: MUTED_TXT,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.tag}{c.sub ? ` ${c.sub}` : ""}
                  </div>

                  {/* title */}
                  <h3
                    className="text-white text-[21px] sm:text-[18px] font-semibold mb-2.5 leading-[1.3] transition-all duration-500 ease-out"
                    style={{ fontFamily: GROTESK }}
                  >
                    {c.t}
                  </h3>

                  {/* description */}
                  <p
                    className="text-[16px] sm:text-[12.5px] leading-[1.5] mb-5 flex-1 transition-colors duration-500 ease-out group-hover:text-white"
                    style={{ color: MUTED_TXT, fontFamily: GROTESK }}
                  >
                    {c.d}
                  </p>

                  {/* stat row */}
                  <div className="flex items-baseline gap-2.5 mt-auto">
                    <span
                      className="text-[32px] sm:text-[26px] leading-none transition-all duration-500 ease-out"
                      style={{
                        color: STAT,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {c.arrow === "down" ? "↓" : c.arrow === "up" ? "↑" : ""}{c.pct}
                    </span>
                    <span
                      className="text-[15px] sm:text-[11px] transition-colors duration-500 ease-out"
                      style={{
                        color: STAT,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {c.pl}
                    </span>
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

/* ===================== OBSERVABILITY & IT OPERATIONS (pixel-matched) ===================== */
const ObservabilitySection = ({
  cards,
  eyebrow = "Domain 02",
  title = "Observability &",
  italic = "IT Operations",
  cols = 4,
}: {
  cards: DomainCard[];
  eyebrow?: string;
  title?: string;
  italic?: string;
  cols?: 3 | 4;
}) => {
  const STAT = "#C8FF0080";
  const MUTED_TXT = "#737594";

  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text={eyebrow} />
          <h2
            className="text-[40px] sm:text-[44px] md:text-[56px] mb-8 leading-[1.05] text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            {title}{" "}
            <span style={{ fontFamily: "'Square Peg', cursive", fontWeight: 400, color: "#30E8BA", fontSize: "110%" }}>
              {italic}
            </span>
          </h2>
        </Reveal>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-5`}>
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div
                className="group relative h-full p-5 sm:p-6 transition-all duration-500 ease-out cursor-pointer overflow-hidden"
                style={{ background: "#13181C", borderRadius: 0 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0B120B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#13181C";
                }}
              >
                <div className="flex flex-col h-full">
                  {/* eyebrow tag */}
                  <div
                    className="text-[15px] sm:text-[11px] mb-4 transition-all duration-500 ease-out"
                    style={{
                      color: MUTED_TXT,
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.tag}{c.sub ? ` ${c.sub}` : ""}
                  </div>

                  {/* title */}
                  <h3
                    className="text-white text-[20px] sm:text-[17px] font-semibold mb-2.5 leading-[1.3] transition-all duration-500 ease-out group-hover:text-[19px] sm:group-hover:text-[18px]"
                    style={{ fontFamily: GROTESK }}
                  >
                    {c.t}
                  </h3>

                  {/* description */}
                  <p
                    className="text-[16px] sm:text-[12px] leading-[1.55] mb-5 flex-1 transition-all duration-500 ease-out group-hover:text-white group-hover:text-[14.5px] sm:group-hover:text-[12.75px]"
                    style={{ color: MUTED_TXT, fontFamily: GROTESK }}
                  >
                    {c.d}
                  </p>

                  {/* stat row */}
                  <div className="flex items-baseline gap-2.5 mt-auto">
                    <span
                      className="text-[32px] sm:text-[26px] leading-none transition-all duration-500 ease-out"
                      style={{
                        color: STAT,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {c.arrow === "down" ? "↓" : c.arrow === "up" ? "↑" : ""}{c.pct}
                    </span>
                    <span
                      className="text-[15px] sm:text-[11px] transition-colors duration-500 ease-out"
                      style={{
                        color: STAT,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {c.pl}
                    </span>
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

const DomainSection = ({
  eyebrow,
  title,
  italic,
  italicColor = LIME,
  cards,
  cols = 3,
  bg = PANEL,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  italicColor?: string;
  cards: DomainCard[];
  cols?: 3 | 4;
  bg?: string;
}) => (
  <section className="relative py-10 sm:py-14" style={{ background: bg }}>
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
      <Reveal>
        <Eyebrow text={eyebrow} />
        <h2
          className="text-[24px] sm:text-[30px] md:text-[36px] mb-8 leading-tight text-white"
          style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
        >
          {title}{" "}
          {italic && (
            <span style={{ fontFamily: SCRIPT, fontStyle: "italic", fontWeight: 500, color: italicColor }}>
              {italic}
            </span>
          )}
        </h2>
      </Reveal>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4`}>
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.04}>
            <div className="rounded-md p-5 h-full flex flex-col" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: LIME }}>{c.tag}</span>
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: DIM }}>{c.sub}</span>
              </div>
              <h3 className="text-white text-[13px] font-semibold mb-2 leading-snug">{c.t}</h3>
              <p className="text-[11px] leading-relaxed mb-4 flex-1" style={{ color: DIM }}>{c.d}</p>
              <div className="flex items-baseline gap-2 pt-3" style={{ borderTop: `1px solid ${BORDER}` }}>
                <span className="text-[18px] sm:text-[20px]" style={{ color: LIME, fontFamily: GROTESK, fontWeight: 600 }}>
                  {c.arrow === "down" ? "↓" : c.arrow === "up" ? "↑" : ""} {c.pct}
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em]" style={{ color: DIM }}>{c.pl}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ===================== ALERT TO ACTION (LIGHT) ===================== */
const AlertToActionSection = () => {
  const GREEN = "#20A374";
  const DARK = "#10151B";
  const METRIC_LABEL = "#8799AB";
  const steps = ["Ingest & Collect", "Correlate & Enrich", "CTR / AI Enrichment", "Playbook Trigger", "Resolution"];
  const metrics = [
    { v: "70%", l: "MTTR Reduction", arrow: "↓" },
    { v: "90%", l: "Playbook Automation", arrow: "" },
    { v: "24×7", l: "Automated Triage", arrow: "" },
    { v: "3×", l: "Alert-to-Fix Velocity", arrow: "" },
  ];
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#F2F2F3" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 text-center">
        <Reveal>
          <Eyebrow text="Product — Security Operations" center color={DARK} />
          <h2
            className="text-[34px] sm:text-[36px] md:text-[44px] mb-8 leading-[1.1]"
            style={{ fontFamily: GROTESK, fontWeight: 500, color: DARK, letterSpacing: "-0.01em" }}
          >
            From Alert to Action{" "}
            <span style={{ fontFamily: "'Square Peg', cursive", fontWeight: 400, color: GREEN, fontSize: "1.15em" }}>
              Without Human Delay
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-10">
            {steps.map((s) => (
              <div
                key={s}
                className="group px-5 py-2.5 rounded-md text-[16px] sm:text-[13px] transition-all duration-500 ease-out cursor-pointer"
                style={{
                  background: "transparent",
                  border: `0.8px solid ${DARK}`,
                  color: DARK,
                  fontFamily: GROTESK,
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = DARK;
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = DARK;
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <Reveal key={m.l} delay={0.1 + i * 0.05}>
              <div className="text-center">
                <div
                  className="text-[48px] sm:text-[56px] md:text-[64px] mb-2 leading-none"
                  style={{ color: GREEN, fontFamily: GROTESK, fontWeight: 400 }}
                >
                  {m.v}
                  {m.arrow && <span className="text-[30px] sm:text-[36px] ml-1">{m.arrow}</span>}
                </div>
                <div
                  className="text-[16px] sm:text-[14px]"
                  style={{ color: METRIC_LABEL, fontFamily: GROTESK, fontWeight: 400 }}
                >
                  {m.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== HOW WE ENGAGE ===================== */
const HowWeEngageSection = () => {
  const rows = [
    {
      t: "Assess & Consult",
      d: "Discovery workshops, maturity scoring, and use-case prioritization — built around your stack.",
      tags: ["Use-Case Catalog", "Maturity Audit", "TCO/ROI Model", "Outcome Alignment"],
    },
    {
      t: "Configure & Implement",
      d: "Stand up Splunk Cloud or Enterprise, onboard data, deploy detections and dashboards.",
      tags: ["Ingestion Pipelines", "Content Packs", "Data Onboarding"],
    },
    {
      t: "Automate & Operationalize",
      d: "Codify response playbooks. Wire up SOAR, ITSI, and on-call workflows that scale.",
      tags: ["SOAR Playbooks", "ITSI Service Trees", "Hyperion Schemas", "On-Call Integrations"],
    },
    {
      t: "Optimize & Evolve",
      d: "Continuous tuning across cost, coverage, and detection efficacy with quarterly reviews.",
      tags: ["Detection Tuning", "Cost Ops", "Adversary Hunting"],
    },
  ];
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="Our Delivery Model" />
          <h2
            className="text-[34px] sm:text-[32px] md:text-[40px] mb-8 leading-tight text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            How We Engage
          </h2>
        </Reveal>
        <div className="space-y-3">
          {rows.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.04}>
              <div
                className="rounded-md px-5 sm:px-6 py-3.5 sm:py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 transition-colors duration-300 group"
                style={{ background: "#111113" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0F1701";
                  const desc = e.currentTarget.querySelector<HTMLElement>("[data-eng-desc]");
                  if (desc) desc.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#111113";
                  const desc = e.currentTarget.querySelector<HTMLElement>("[data-eng-desc]");
                  if (desc) desc.style.color = "#8799AB";
                }}
              >
                <div className="md:w-1/3">
                  <h3 className="text-white text-[19px] sm:text-[16px] font-semibold mb-1.5">{r.t}</h3>
                  <p
                    data-eng-desc
                    className="text-[16px] sm:text-[13px] leading-relaxed transition-colors duration-300"
                    style={{ color: "#8799AB" }}
                  >
                    {r.d}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:flex-1 md:justify-end">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-full text-[15px] sm:text-[12px] cursor-pointer transition-colors duration-200"
                      style={{ border: "0.8px solid #A6EE2B", color: "#A6EE2B", background: "transparent" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#A6EE2B";
                        e.currentTarget.style.color = "#111113";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#A6EE2B";
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== INDUSTRY-LEADING PLATFORM ===================== */
const PlatformSection = () => {
  const stats = [
    { v: "11×", l: "Leader in CIQ", d: "Recognized leader in Gartner Magic Quadrant for SIEM & Cyber Analytics consecutively." },
    { v: "2×", l: "Leader in Observability Platforms", d: "Recognized in industry analyst reports for unified observability and ITOps platforms." },
    { v: "3×", l: "Indian Premier Award Finalist", d: "Awarded for innovation, engineering, delivery, and customer experience." },
    { v: "15+", l: "Industry Partnerships", d: "Strategic alliances spanning hyperscalers, ITSM platforms, and threat intelligence vendors." },
  ];
  return (
    <section className="relative py-16 sm:py-20" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="Recognized As An Industry Practice" center />
          <h2
            className="text-center text-[24px] sm:text-[30px] md:text-[36px] mb-10 leading-tight text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            Built on an Industry-Leading Platform
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05}>
              <div>
                <div className="text-[36px] sm:text-[44px] mb-1" style={{ color: LIME, fontFamily: GROTESK, fontWeight: 600 }}>{s.v}</div>
                <div className="text-white text-[12px] font-semibold mb-2">{s.l}</div>
                <p className="text-[10px] leading-relaxed" style={{ color: DIM }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== CTA ===================== */
const CTASection = () => (
  <BrandedCTASection
    eyebrow="Get Started"
    title={<>Your Data Is Speaking.<br /><CtaHighlight>Are You Listening?</CtaHighlight></>}
    description="Start with a complimentary SAP Analytics Maturity Assessment — map your current state and design a roadmap to governed, AI-amplified clarity."
  />
);

/* ===================== PAGE ===================== */
const SplunkAiApplications = () => {
  // securityCards now live inside <SecurityIntelligenceSection />

  const observabilityCards: DomainCard[] = [
    { tag: "ITSI", sub: "— Enterprise Observability", t: "Real-Time Visibility 3+ Across IOC Centric", d: "End-to-end service health across hybrid stacks with KPI service trees and outage prevention.", pct: "50%", pl: "Faster Triage", arrow: "down" },
    { tag: "APM", sub: "— Service Health", t: "Protect Service Performance with SLOs", d: "Trace every request, set error budgets, and protect the SLO with automated rollback signals.", pct: "40%", pl: "Faster Detection", arrow: "" },
    { tag: "Logs", sub: "— Log Streams", t: "Detect & Prevent Issues Impacting Users", d: "Correlate logs, traces, and infra metrics to find root cause before customers ever notice.", pct: "65%", pl: "Less Customer Impact", arrow: "down" },
    { tag: "AIOps", sub: "— Adaptive Alerts", t: "Prioritize Alerts — Lower MTTR / MTTD", d: "ML clusters and suppresses noise so on-call engineers only see what's truly actionable.", pct: "80%", pl: "Less Noise", arrow: "down" },
  ];

  const middlewareCards: DomainCard[] = [
    { tag: "MQ", sub: "— Middleware Integration", t: "API Log Ingestion · Transaction Routing & Event Streaming", d: "Real-time ingestion and correlation of MQ, REST, and event-bus traffic — keep transactions flowing across your enterprise.", pct: "70%", pl: "Faster Issue Detection", arrow: "down" },
    { tag: "Kafka", sub: "— Stream Realtime", t: "Event Stream Ingestion · Latency Control · Queue Optimization", d: "Operational visibility for Kafka topics, consumer lag, and broker health — tuned for high-volume environments.", pct: "100%", pl: "Stream Visibility", arrow: "" },
    { tag: "ESB", sub: "— Integration Backbone", t: "Cross-Platform Dashboards · Audit Trail · Multi-Tenant Reporting", d: "Unified dashboards across MuleSoft, TIBCO, and webMethods — full audit trail for regulated industries.", pct: "70%", pl: "Faster Audit Cycles", arrow: "down" },
  ];

  return (
    <div className="min-h-screen no-scrollbar" style={{ background: PANEL }}>
      <style>{`
        html, body { scrollbar-width: none; -ms-overflow-style: none; }
        html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; width: 0; height: 0; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>
      <Navbar />
      <HeroSection />
      <NumbersSection />
      <WhatWeDeliverSection />
      <SecurityIntelligenceSection />
      <ObservabilitySection cards={observabilityCards} />
      <ObservabilitySection
        eyebrow="Domain 03"
        title="Middleware &"
        italic="Integration Intel"
        cards={middlewareCards}
        cols={3}
      />
      <AlertToActionSection />
      <HowWeEngageSection />
      
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default SplunkAiApplications;
