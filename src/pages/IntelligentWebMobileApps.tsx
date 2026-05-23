import { motion, useReducedMotion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import { useState, type ReactNode } from "react";
import {
  Globe, Smartphone, Boxes, FileCode2, Cpu, Bot, ShieldCheck,
  Rocket, Layers, GitBranch, Workflow, TestTube2, Eye, Lock, Zap,
  Database, BarChart3, Bell, MousePointerClick, LayoutDashboard,
  Sparkles, Settings2, Search, Activity, Palette, Link2, Cloud, Brain, Shield,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/wma-bg.jpeg";
import realWorldPreview from "@/assets/real-world-preview.png";
import sapExtensionsPreview from "@/assets/task-centric-sap-extensions.jpeg";
import studioIntelligence from "@/assets/studio-intelligence.png";

/* Reuse the Splunk/Vision design language */
const LIME = "#C8FF01";
const PANEL = "#0B0E14";
const CARD = "#11151D";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "rgba(255,255,255,0.55)";
const DIM = "rgba(255,255,255,0.45)";
const GROTESK = "'Space Grotesk', sans-serif";

/* ---------- Reveal ---------- */
const Reveal = ({
  children, delay = 0, y = 24, className,
}: { children: ReactNode; delay?: number; y?: number; className?: string }) => {
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
    <span className="text-[10px] tracking-[0.2em]" style={{ color }}>{text}</span>
  </div>
);

const SectionHeading = ({
  eyebrow, children, center = true,
}: { eyebrow: string; children: ReactNode; center?: boolean }) => (
  <div className={center ? "text-center mb-8" : "mb-8"}>
    <Reveal>
      <Eyebrow text={eyebrow} center={center} />
    </Reveal>
    <Reveal delay={0.05}>
      <h2
        className="text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] text-white"
        style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
      >
        {children}
      </h2>
    </Reveal>
  </div>
);

/* ===================== HERO ===================== */
const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ background: PANEL }}
  >
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-16 sm:pb-24">
      <Reveal>
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8"
          style={{ background: "rgba(200,255,1,0.06)", border: "1px solid rgba(200,255,1,0.25)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="text-[12px] sm:text-[11px] font-medium tracking-[0.05em]" style={{ color: LIME }}>
            Intelligent Web & Mobile Applications
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h1
          className="text-[36px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.01em] mb-6 max-w-3xl text-white"
          style={{ fontFamily: GROTESK, fontWeight: 500 }}
        >
          Engineering the
          <br />Future of Enterprise
          <br />
          Applications
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-[16px] sm:text-[13px] md:text-[14px] max-w-2xl leading-relaxed" style={{ color: "#8799AB" }}>
          Carbynetech delivers agentic, real-time web and mobile experiences built on cloud-native
          architecture — deeply integrated with SAP and non-SAP sources. From boardroom dashboards
          to shopfloor workflows, we build software that thinks.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ===================== THREE PILLARS ===================== */
const ThreePillarsSection = () => {
  const items = [
    {
      icon: Globe,
      title: "Web Applications",
      desc: "Enterprise-grade apps with real-time data and deep SAP integration.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Agentic",
      desc: "Mobile-first, offline-capable apps with embedded AI agents for shopfloor and field teams.",
    },
    {
      icon: Boxes,
      title: "SAP Integration",
      desc: "Clean-core extension patterns — modern UX on existing processes, no heavy customisation.",
    },
  ];
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="text-center mb-8">
          <Reveal>
            <Eyebrow text="Core Offerings" center />
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-[34px] sm:text-[48px] md:text-[60px] leading-[1.1] text-white"
              style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Three Pillars of Intelligent Software
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div
                className="group relative p-6 h-full rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: "#0C1317",
                  border: "1px solid #192F17",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = "1px solid #254A1F";
                  e.currentTarget.style.boxShadow = "0px 4px 30px 0px #254A1F4D";
                  const box = e.currentTarget.querySelector<HTMLElement>("[data-icon-box]");
                  if (box) {
                    box.style.background = "#254A1F";
                    box.style.border = "1px solid #254A1F";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = "1px solid #192F17";
                  e.currentTarget.style.boxShadow = "none";
                  const box = e.currentTarget.querySelector<HTMLElement>("[data-icon-box]");
                  if (box) {
                    box.style.background = "#1F2C1D";
                    box.style.border = "1px solid #254A1F";
                  }
                }}
              >
                <div
                  data-icon-box
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-6 transition-all duration-300"
                  style={{
                    background: "#1F2C1D",
                    border: "1px solid #254A1F",
                  }}
                >
                  <it.icon size={16} style={{ color: "#FFFFFF" }} />
                </div>
                <h3 className="text-white text-[19px] sm:text-[16px] mb-2" style={{ fontFamily: GROTESK, fontWeight: 500 }}>
                  {it.title}
                </h3>
                <p className="text-[15.5px] sm:text-[12.5px] leading-relaxed mb-5" style={{ color: MUTED }}>
                  {it.desc}
                </p>
                <div className="flex items-end justify-between mt-3">
                  <div className="h-px w-16" style={{ background: "rgba(255,255,255,0.15)" }} />
                  <span
                    className="text-[34px] leading-none"
                    style={{
                      fontFamily: GROTESK,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.06)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== LAYERED TECHNOLOGY STACK ===================== */
const TechStackSection = () => {
  const bars = [
    { label: "Frontend Stack — React, Next.js, React Native", value: 95 },
    { label: "AI / LLM — Claude, OpenAI, in-house agents", value: 88 },
    { label: "Backend & APIs — Node, Python, GraphQL", value: 92 },
    { label: "Data Layer — Postgres, Vector DBs, Pipelines", value: 85 },
  ];
  return (
    <section className="relative py-8 sm:py-12" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div>
            <Reveal><Eyebrow text="Foundation" /></Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] text-white mb-6"
                style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
              >
                Layered
                <br />
                <span style={{ color: LIME }}>Technology Stack</span>
              </h2>
            </Reveal>
            <div className="space-y-3 mt-6">
              {bars.map((b, i) => (
                <Reveal key={b.label} delay={i * 0.07}>
                  <div className="p-3" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[15px] sm:text-[11px]" style={{ color: MUTED }}>{b.label}</span>
                      <span className="text-[15px] sm:text-[11px]" style={{ color: LIME }}>{b.value}%</span>
                    </div>
                    <div className="h-1 w-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.value}%` }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.07 }}
                        className="h-full"
                        style={{ background: LIME }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mock dashboard panel */}
          <Reveal delay={0.1}>
            <div className="p-5" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#FEBC2E" }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="text-[10px]" style={{ color: DIM }}>Live Preview</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-10" style={{ background: "rgba(255,255,255,0.05)" }} />
                ))}
              </div>
              <div className="flex items-end gap-2 h-32">
                {[40, 65, 30, 85, 50, 70, 45].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="flex-1"
                    style={{ background: i === 3 ? LIME : "rgba(200,255,1,0.25)" }}
                  />
                ))}
              </div>
              <div className="mt-4 text-right text-[11px]" style={{ color: LIME }}>99.9%</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ===================== AI ACCELERATES BUILD ===================== */
const AiAcceleratesSection = () => {
  const items = [
    { icon: Sparkles, title: "AI Design-to-Code", desc: "Figma designs auto-converted to production React components with design tokens." },
    { icon: Zap, title: "40% Faster Sprints", desc: "AI pair-programming reduces boilerplate, catches bugs early and suggests optimizations in real time." },
    { icon: TestTube2, title: "Auto-Generated Tests", desc: "Unit, integration and E2E test suites generated by AI — 90%+ code coverage from day one." },
    { icon: ShieldCheck, title: "AI Security Scans", desc: "OWASP-aligned static analysis and dependency audits run automatically on every pull request." },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="text-center mb-7">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: LIME }} />
            <span className="text-[12px] sm:text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: LIME }}>
              Development Advantage
            </span>
          </div>
          <h2
            className="text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1] text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            How AI Tools Accelerate Our Build
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {items.map((it, i) => {
            const isHover = hovered === i;
            return (
              <Reveal key={it.title} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="p-6 h-full rounded-lg transition-all duration-300"
                  style={{
                    background: isHover ? "#00362D" : "#12141A",
                    border: isHover ? "0.8px solid #00362D" : "0.8px solid rgba(18,20,26,0.5)",
                    boxShadow: isHover ? "0px 2px 50px 0px #206F6159" : "none",
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-5 transition-all duration-300"
                    style={{
                      background: isHover ? "#0A4F43" : "#191E25",
                    }}
                  >
                    <it.icon
                      size={16}
                      color="#ffffff"
                      style={{
                        transition: "transform 0.3s ease",
                        transform: isHover ? "rotate(20deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                  <h3 className="text-white text-[18px] sm:text-[14px] mb-2" style={{ fontFamily: GROTESK, fontWeight: 500 }}>
                    {it.title}
                  </h3>
                  <p className="text-[15px] sm:text-[12px] leading-relaxed" style={{ color: MUTED }}>{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ===================== BUILT FOR REAL WORLD ===================== */
const RealWorldSection = () => {
  const cards = [
    { icon: LayoutDashboard, title: "Mobile-First Design", desc: "Touch-optimised controls, adaptive layouts for every device." },
    { icon: Workflow, title: "Offline & Sync", desc: "Secure local storage with intelligent background sync." },
    { icon: Search, title: "Scan & Capture", desc: "Barcode/QR scanning, photo annotations and GPS stamps." },
    { icon: Bell, title: "Proactive Alerts", desc: "AI-classified push alerts with guided resolution flows." },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: LIME }} />
            <span className="text-[12px] sm:text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: LIME }}>
              Mobile-First Features
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1] text-white mb-7"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            Built for the Real World
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Preview image */}
          <Reveal>
            <img
              src={realWorldPreview}
              alt="Live preview dashboard with 99.9% uptime"
              className="w-full h-auto max-w-[440px] mx-auto"
              loading="lazy"
            />
          </Reveal>
          {/* 4 mini cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cards.map((c, i) => {
              const isHover = hovered === i;
              return (
                <Reveal key={c.title} delay={i * 0.05}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="p-4 h-full rounded-lg transition-all duration-300"
                    style={{
                      background: isHover ? "#00362D" : "#12141A",
                      border: isHover ? "0.8px solid #00362D" : "0.8px solid rgba(18,20,26,0.5)",
                      boxShadow: isHover ? "0px 2px 50px 0px #206F6159" : "none",
                    }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md mb-3 transition-all duration-300"
                      style={{ background: isHover ? "#0A4F43" : "#191E25" }}
                    >
                      <c.icon
                        size={14}
                        color="#ffffff"
                        style={{
                          transition: "transform 0.3s ease",
                          transform: isHover ? "rotate(20deg)" : "rotate(0deg)",
                        }}
                      />
                    </div>
                    <h4 className="text-white text-[17px] sm:text-[13px] mb-1.5" style={{ fontFamily: GROTESK, fontWeight: 500 }}>
                      {c.title}
                    </h4>
                    <p className="text-[15px] sm:text-[11.5px] leading-relaxed" style={{ color: MUTED }}>{c.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== TASK-CENTRIC SAP EXTENSIONS ===================== */
const SapExtensionsSection = () => (
  <section className="relative pt-10 sm:pt-14 pb-0 overflow-hidden" style={{ background: "#070A07" }}>
    <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
      <Reveal>
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="w-8 h-px" style={{ background: LIME }} />
          <span className="text-[12px] sm:text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: LIME }}>
            SAP-Integrated Mobile Workflows
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2
          className="text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1] text-white mb-5"
          style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
        >
          Task-Centric SAP Extensions
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-[16px] sm:text-[14px] leading-relaxed max-w-2xl mb-8" style={{ color: "#8799AB" }}>
          Focused mobile flows for SAP use-cases through clean-core extension patterns
          — modern UX on existing processes.
        </p>
      </Reveal>
    </div>

    <Reveal delay={0.15} className="w-full">
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <img
          src={sapExtensionsPreview}
          alt="Task-centric SAP extensions dashboard preview"
          className="block w-[130%] max-w-none h-auto -ml-[15%]"
          loading="lazy"
        />
      </div>
    </Reveal>
  </section>
);

/* ===================== AI-AUGMENTED DEVELOPMENT ===================== */
const AiAugmentedSection = () => {
  const chips = [
    "AI Code Generation", "AI Design Systems", "AI-Driven Testing",
    "Figma → React Automation", "Intelligent Code Review",
    "AI Performance Profiling", "AI Security Scanning", "40% Faster Delivery",
  ];
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: LIME }} />
            <span className="text-[12px] sm:text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: LIME }}>
              Competitive Edge
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1] text-white mb-5"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            We Build Faster &amp; Smarter with
            <br />AI-Augmented Development
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[16px] sm:text-[14px] leading-relaxed mb-8 max-w-3xl" style={{ color: "#8799AB" }}>
            Our engineers wield AI tools — from design generation to automated testing — compressing
            timelines by up to <span style={{ color: "#AEE324", fontWeight: 600 }}>40%</span> without
            sacrificing quality. Senior-level UI/UX and production-grade architecture at startup speed.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 items-stretch">
          {chips.map((c, i) => (
            <Reveal key={c} delay={i * 0.03} className="h-full">
              <span
                className="inline-flex items-center justify-center w-full sm:w-auto h-full min-h-[56px] sm:min-h-0 px-4 py-2 text-[14px] sm:text-[12px] rounded-md text-center leading-snug"
                style={{ background: "#111411", border: "1px solid #262926", color: "#8799AB" }}
              >
                {c}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== AGENTIC DELIVERY PIPELINE ===================== */
const PipelineSection = () => {
  const steps = [
    { icon: Search, title: "Discover & Architect", desc: "SAP & data mapping with AI-assisted design" },
    { icon: Palette, title: "Design with AI", desc: "Figma-to-code, pixel-perfect & accessible" },
    { icon: Settings2, title: "Build & Integrate", desc: "Micro-frontends on K8s microservices" },
    { icon: Bot, title: "Embed Agents", desc: "NLP co-pilots & proactive alerts built-in" },
    { icon: Rocket, title: "Deploy & Scale", desc: "Zero-downtime CI/CD across environments" },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: LIME }} />
            <span className="text-[12px] sm:text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: LIME }}>
              Our Approach
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1] text-white mb-5"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            Unified Agentic Delivery Pipeline
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[16px] sm:text-[14px] leading-relaxed mb-7 max-w-2xl" style={{ color: "#8799AB" }}>
            A coherent platform that transforms enterprise data into intelligent applications
            — across every device and role.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => {
            const isHover = hovered === i;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="p-5 h-full rounded-lg text-center transition-all duration-300"
                  style={{
                    background: isHover ? "#00362D" : "#12141A",
                    border: isHover ? "0.8px solid #00362D" : "0.8px solid rgba(18,20,26,0.5)",
                    boxShadow: isHover ? "0px 2px 50px 0px #206F6159" : "none",
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-4 transition-all duration-300"
                    style={{
                      background: isHover ? "#0A4F43" : "#191E25",
                    }}
                  >
                    <s.icon
                      size={16}
                      color="#ffffff"
                      style={{
                        transition: "transform 0.3s ease",
                        transform: isHover ? "rotate(20deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                  <h4 className="text-white text-[16px] sm:text-[13px] mb-1.5" style={{ fontFamily: GROTESK, fontWeight: 600 }}>
                    {s.title}
                  </h4>
                  <p className="text-[14px] sm:text-[11.5px] leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ===================== STUDIO INTELLIGENCE ===================== */
const StudioSection = () => {
  const cards = [
    { icon: Zap, title: "AI-Augmented Delivery", desc: "40% faster with AI toolchain" },
    { icon: Sparkles, title: "Best-in-Class UI/UX", desc: "AI-powered design systems" },
    { icon: Link2, title: "SAP Clean-Core", desc: "Protect upgrade paths" },
    { icon: Cloud, title: "Kubernetes-Native", desc: "Pilot to global scale" },
    { icon: Brain, title: "Embedded AI Agents", desc: "NLP co-pilots built-in" },
    { icon: Shield, title: "Security & Governance", desc: "Enterprise-grade compliance" },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="relative py-10 sm:py-14" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: LIME }} />
            <span className="text-[12px] sm:text-[11px] font-medium uppercase tracking-[0.15em]" style={{ color: LIME }}>
              Why Carbynetech
            </span>
          </div>
          <h2
            className="text-[28px] sm:text-[38px] md:text-[48px] leading-[1.1] text-white"
            style={{ fontFamily: GROTESK, fontWeight: 500, letterSpacing: "-0.01em" }}
          >
            The Studio That Builds with Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left illustration */}
          <Reveal>
            <img
              src={studioIntelligence}
              alt="Isometric mobile app studio illustration"
              className="w-full h-auto max-w-[520px] mx-auto block"
              loading="lazy"
            />
          </Reveal>

          {/* Right cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-[460px] mx-auto lg:mx-0 w-full">
            {cards.map((c, i) => {
              const isHover = hovered === i;
              return (
                <Reveal key={c.title} delay={i * 0.04}>
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="p-3 h-full rounded-lg transition-all duration-300"
                    style={{
                      background: isHover ? "#00362D" : "#12141A",
                      border: isHover ? "0.8px solid #00362D" : "0.8px solid rgba(18,20,26,0.5)",
                      boxShadow: isHover ? "0px 2px 50px 0px #206F6159" : "none",
                    }}
                  >
                    <div
                      className="inline-flex items-center justify-center w-7 h-7 rounded-md mb-2 transition-all duration-300"
                      style={{
                        background: isHover ? "#0A4F43" : "#191E25",
                      }}
                    >
                      <c.icon
                        size={13}
                        color="#ffffff"
                        style={{
                          transition: "transform 0.3s ease",
                          transform: isHover ? "rotate(20deg)" : "rotate(0deg)",
                        }}
                      />
                    </div>
                    <h4 className="text-white text-[16px] sm:text-[12px] mb-0.5" style={{ fontFamily: GROTESK, fontWeight: 600 }}>
                      {c.title}
                    </h4>
                    <p className="text-[14px] sm:text-[10.5px] leading-relaxed" style={{ color: MUTED }}>{c.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== CTA ===================== */
const CTASection = () => (
  <BrandedCTASection
    title={<>Start Your <CtaHighlight>Digital Factory Journey</CtaHighlight></>}
    description="Book a 45-minute discovery session. We'll map your gaps, calculate ROI, and demo live on parts similar to yours."
  />
);

/* ===================== PAGE ===================== */
const IntelligentWebMobileApps = () => {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: PANEL }}>
      <style>{`
        html, body { overflow-x: hidden; }
        body::-webkit-scrollbar { display: none; }
        body { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <Navbar />
      <HeroSection />
      <ThreePillarsSection />
      
      <AiAcceleratesSection />
      <RealWorldSection />
      <SapExtensionsSection />
      <AiAugmentedSection />
      <PipelineSection />
      <StudioSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default IntelligentWebMobileApps;
