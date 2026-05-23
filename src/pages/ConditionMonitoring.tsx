import { motion, useReducedMotion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import type { ReactNode } from "react";
import {
  Crosshair, Activity, Waves, Scale, Radio, Cpu, Brain, Server,
  Gauge, ArrowRight, CheckCircle2, AlertTriangle, Wrench, Settings,
  Database, Zap, Shield, GitBranch, FileCode, Layers, BarChart3,
  Factory, Workflow,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/condition-monitoring-hero.jpeg";

const LIME = "#C8FF01";
const LIME_SOFT = "rgba(200,255,1,0.25)";
const GREEN_BAND = "#3F5A1A";
const PANEL = "#0B0E14";
const PANEL_2 = "#0F1218";
const CARD = "#11151D";
const BORDER = "rgba(255,255,255,0.08)";
const BORDER_2 = "rgba(255,255,255,0.12)";
const MUTED = "rgba(255,255,255,0.55)";
const DIM = "rgba(255,255,255,0.45)";
const GROTESK = "'Space Grotesk', sans-serif";
const SCRIPT = "'Caveat', cursive";

/* ---------- Reveal ---------- */
const Reveal = ({ children, delay = 0, y = 48, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(12px)", scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Eyebrow = ({ text, center = false }: { text: string; center?: boolean }) => (
  <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
    <div className="w-7 h-px" style={{ background: LIME }} />
    <span className="text-[16px] sm:text-[11px] font-medium tracking-[0.18em]" style={{ color: LIME }}>{text}</span>
  </div>
);

/* ===================== HERO ===================== */
const HeroSection = () => (
  <section className="relative min-h-[680px] sm:min-h-[760px] flex items-center overflow-hidden" style={{ background: PANEL }}>
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pt-28 sm:pt-32 pb-14 sm:pb-20">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6"
          style={{ background: "#3425304D", border: "1px solid #C8FF0099" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="sm:text-[11px] tracking-[0.18em] whitespace-pre-line font-light text-sm" style={{ color: LIME }}>
            {"Edge-Native Ai-Augmented · Industry 4.0"}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="text-[42px] sm:text-[44px] md:text-[56px] font-medium leading-[1.08] mb-5 max-w-3xl text-white" style={{ fontFamily: GROTESK }}>
          Intelligent
          <br />Condition Monitoring
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="text-[17px] sm:text-[14px] max-w-xl leading-relaxed" style={{ color: "#8799AB" }}>
          Vibration-based predictive maintenance — from shop-floor sensors to
          SAP work orders. Catch failures before they cost you.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ===================== ROTATING ASSET SPECIALISTS ===================== */
const SpecialistsSection = () => {
  const items = [
    { icon: Crosshair, t: "Laser Shaft Alignment", d: "Precision laser measurement aligns rotor pairs to eliminate vibration and premature bearing failure." },
    { icon: Activity, t: "Online Monitoring", d: "24/7 wireless surveillance with vibration sensors on motors, pumps, fans, and conveyors." },
    { icon: Waves, t: "Vibration Analysis", d: "Expert FFT, time-waveform, and orbit analysis to pinpoint root causes." },
    { icon: Scale, t: "In-Situ Balancing", d: "Single-shot in-place field balancing with vibration feedback — corrective time cut from days to hours." },
  ];
  return (
    <section className="py-10 sm:py-14" style={{ background: "#060604" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <Reveal>
            <Eyebrow text="Who We Are" />
            <h2 className="text-[42px] sm:text-[44px] md:text-[52px] font-medium leading-[1.05] mb-6 text-white" style={{ fontFamily: GROTESK }}>
              Rotating Asset
              <br />
              Specialists
            </h2>
            <p className="text-[17px] leading-relaxed max-w-md" style={{ color: "#8799AB" }}>
              Carbynetech combines decades of rotating machinery
              expertise with modern edge AI — delivering a platform
              that detects failures weeks before they occur, and routes
              corrective action automatically into your MES.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow text="What We Deliver" />
            <div className="space-y-2">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <div key={it.t} className="px-4 py-3 flex gap-3 items-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "#0C100C", border: "1px solid #1F231F", borderRadius: 0 }}>
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1 text-base" style={{ fontFamily: GROTESK }}>{it.t}</h4>
                      <p className="leading-relaxed text-sm" style={{ color: "#8799AB" }}>{it.d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ===================== AGENTIC SIGNAL FLOW ===================== */
const SignalFlowSection = () => {
  const nodes = [
    { icon: Radio, t: "Sensors", s: "Tri-axial", eyebrow: "Source", color: "#C8FF01" },
    { icon: Cpu, t: "IIoT Gateway", s: "51.2 kHz", eyebrow: "Ingest", color: "#22D3EE" },
    { icon: Settings, t: "Edge Engine", s: "FFT + ML", eyebrow: "Compute", color: "#34D399" },
    { icon: Brain, t: "AI Co-pilot", s: "Fault + RUL", eyebrow: "AI Reasoning", color: "#A78BFA" },
    { icon: Factory, t: "SAP / MES", s: "Work orders", eyebrow: "Action", color: "#F472B6" },
  ];
  const stats = [
    { v: "51.2 kHz", l: "Sampling rate" },
    { v: "< 2 min", l: "Fault-to-notification" },
    { v: "Zero cloud", l: "Edge-native processing" },
  ];
  return (
    <section className="py-10 sm:py-14" style={{ background: "#0C0F13" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="Signal Architecture" />
          <h2 className="text-[42px] sm:text-[44px] md:text-[52px] font-medium leading-[1.05] mb-10 sm:mb-12 text-white" style={{ fontFamily: GROTESK }}>
            Agentic Signal <span style={{ color: LIME }}>Flow</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Flow diagram — clean column layout (per template) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-4">
            {nodes.map((n, i) => {
              const Icon = n.icon;
              const isLast = i === nodes.length - 1;
              return (
                <motion.div
                  key={n.t}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Icon + connector wrapper to keep line outside the circle */}
                  <div className="relative w-full flex items-center justify-center mb-5">
                    {/* Connector line: starts at right edge of this circle, ends at left edge of next circle */}
                    {!isLast && (
                      <div
                        className="hidden md:block absolute h-px pointer-events-none"
                        style={{
                          background: "rgba(255,255,255,0.35)",
                          left: "calc(50% + 28px)",
                          width: "calc(100% + 1rem - 56px)",
                          top: "28px",
                        }}
                      />
                    )}
                    {/* Thin circular icon ring */}
                    <div className="relative z-10 w-[56px] h-[56px] rounded-full flex items-center justify-center"
                      style={{ border: `1px solid ${n.color}`, background: "#0C0F13" }}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Eyebrow label in matching color */}
                  <div className="text-[16px] font-medium mb-2" style={{ color: n.color, fontFamily: GROTESK }}>
                    {n.eyebrow}
                  </div>
                  {/* Name */}
                  <div className="text-white text-[17px] sm:text-[16px] font-medium leading-tight" style={{ fontFamily: GROTESK }}>
                    {n.t}
                  </div>
                  {/* Subtitle muted */}
                  <div className="text-[16px] mt-2" style={{ color: "#5C6B7E" }}>
                    {n.s}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Stats row — thin lime band on top, three columns with dividers */}
          <div className="mt-10 sm:mt-12">
            <div className="h-[6px] w-full" style={{ background: "rgba(200,255,1,0.08)" }} />
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ background: "#080B10" }}>
              {stats.map((s, i) => (
                <div key={s.l} className="text-center py-6"
                  style={{
                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}>
                  <div className="text-[17px] sm:text-[16px] font-semibold" style={{ color: LIME, fontFamily: GROTESK }}>{s.v}</div>
                  <div className="text-[16px] mt-1.5" style={{ color: "#5C6B7E" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ===================== INTELLIGENT MANUFACTURING (green band) ===================== */
const ManifestoSection = () => (
  <section
    className="py-8 sm:py-10 relative overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, rgba(125, 245, 85, 0.333333) 0%, rgba(73, 143, 50, 0.333333) 100%)",
    }}
  >
    <div className="mx-auto max-w-[1100px] px-5 sm:px-6 md:px-10 text-center">
      <Reveal>
        <Eyebrow text="Building the Future of" center />
        <h2 className="text-[42px] sm:text-[48px] md:text-[64px] font-medium leading-[1.05] text-white" style={{ fontFamily: GROTESK }}>
          Intelligent{" "}
          <span style={{ fontFamily: "'Ruthie', cursive", color: "#ffffff", fontWeight: 400, fontSize: "1.4em" }}>
            Manufacturing
          </span>
        </h2>
        <p className="text-[17px] sm:text-[14px] max-w-2xl mx-auto mt-6 leading-relaxed text-white">
          AI-driven maintenance intelligence that anticipates failure, prevents downtime, and
          autonomously dispatches corrective work — end-to-end.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ===================== WHERE VIBRATION INTELLIGENCE PAYS OFF ===================== */
const ApplicationsSection = () => {
  const items = [
    { tag: "Automotive", t: "Press & Transfer Line Motors", d: "Early-warning fault detection prevents multi-hour stoppages on high-throughput transfer lines." },
    { tag: "Mining", t: "Conveyor Belt & Pulley Drives", d: "Pattern recognition distinguishes belt damage, misalignment, and mechanical fault to load contact." },
    { tag: "Oil & Gas", t: "Hazardous Zone Machinery", d: "ATEX Zone 1/2 monitoring with wireless sensors — fault signatures correlated with process variables." },
    { tag: "Power Generation", t: "Turbine & Generator Trains", d: "High-channel monitoring detects rotor cracks and rubbing before cascade to upstream." },
    { tag: "Food & Beverage", t: "Hygienic Pumps & Mixers", d: "Pattern recognition distinguishes belt damage, misalignment, and mechanical fault to load contact." },
    { tag: "Steel & Cement", t: "Gearbox & Roll Drive Train", d: "Sub-synch frequency tracking and departure analysis catches gear box typical stages." },
  ];
  return (
    <section className="py-10 sm:py-14" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <Eyebrow text="Industry Applications" />
          <h2 className="text-[42px] sm:text-[44px] md:text-[52px] font-medium leading-[1.05] mb-8 text-white" style={{ fontFamily: GROTESK }}>
            Where Vibration{" "}
            <span style={{ fontFamily: "'Ruthie', cursive", fontWeight: 400, fontSize: "1.4em" }}>
              Intelligence Pays Off
            </span>
          </h2>
        </Reveal>
        {/* Table-like cell grid: no gaps, hairline dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const cols = 3;
            const totalRows = Math.ceil(items.length / cols);
            const col = i % cols;
            const row = Math.floor(i / cols);
            const isLastCol = col === cols - 1;
            const isLastRow = row === totalRows - 1;
            return (
              <Reveal key={it.t} delay={i * 0.04}>
                <div
                  className="group relative p-4 sm:p-5 h-full overflow-hidden transition-colors duration-300"
                  style={{
                    background: "#0F1115",
                    borderRight: isLastCol ? "none" : "1px solid rgba(255,255,255,0.06)",
                    borderBottom: isLastRow ? "none" : "1px solid rgba(255,255,255,0.06)",
                    minHeight: 130,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1 h-1 rounded-full" style={{ background: LIME }} />
                    <span className="text-[16px] font-medium" style={{ color: LIME, fontFamily: GROTESK }}>
                      {it.tag}
                    </span>
                  </div>
                  <h4 className="text-white text-[17px] font-semibold mb-2" style={{ fontFamily: GROTESK }}>
                    {it.t}
                  </h4>
                  <p className="leading-relaxed text-sm max-w-[34ch]" style={{ color: "#8799AB" }}>
                    {it.d}
                  </p>
                  <span
                    className="absolute bottom-3 right-5 text-[56px] font-bold pointer-events-none leading-none"
                    style={{ fontFamily: GROTESK, color: "rgba(200,255,1,0.05)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ===================== FACTORY FLOOR · TECHNOLOGY STACK + AGENTIC FLOW ===================== */
const FactoryFloorSection = () => {
  const stack = [
    { t: "PostgreSQL + TimescaleDB", d: "Time-series storage for HF vibration streams", tag: "EDGE", tone: "lime" as const },
    { t: "Redis Cache Layer", d: "Real-time alarm state & live dashboard feeds", tag: "EDGE", tone: "lime" as const },
    { t: "Docker / K3s Microservices", d: "Zero cloud dependency — runs inside your plant", tag: "EDGE", tone: "lime" as const },
    { t: "ACOEM · Advantech · PRÜFTECHNIK", d: "Multi-vendor sensor SDK, plug-and-play", tag: "EDGE", tone: "lime" as const },
    { t: "ML Failure Models", d: "RUL estimation via trend + statistical thresholds", tag: "AI", tone: "dim" as const },
    { t: "Adaptive Baselining Engine", d: "Load & speed-aware dynamic alarm calibration", tag: "AI", tone: "dim" as const },
    { t: "Multisignal Fusion", d: "Vibration + current + temperature + process vars", tag: "AI", tone: "dim" as const },
    { t: "SAP PM/CM Connector", d: "Bi-directional work order, notification, FLOC", tag: "ERP", tone: "blue" as const },
  ];
  const flow = [
    { t: "Continuous Ingestion", d: "Tri-axial vibration at 51.2 kHz streamed to edge storage" },
    { t: "Spectral Feature Extraction", d: "FFT, envelope demodulation, cepstrum, order tracking" },
    { t: "ML Fault Classification", d: "Classifiers score bearing, gear, imbalance, looseness fault probability" },
    { t: "RUL Estimation", d: "Remaining useful life modeled via degradation trend extrapolation" },
    { t: "SAP Integration", d: "Fault alerts auto-generate PM notifications and work orders" },
  ];
  const stats = [
    { v: "30%", l: ["L10 life reduction", "from 1 mm/s imbalance"] },
    { v: "3-8%", l: ["Energy gain from", "balanced rotors"] },
    { v: "10×", l: ["Failure rate in", "unbalanced systems"] },
  ];

  const tagStyles: Record<string, { color: string; border: string }> = {
    lime: { color: LIME, border: "rgba(200,255,1,0.5)" },
    dim: { color: "rgba(255,255,255,0.45)", border: "rgba(255,255,255,0.18)" },
    blue: { color: "#5BA8FF", border: "rgba(91,168,255,0.5)" },
  };

  return (
    <section className="py-10 sm:py-14" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <Reveal>
          <h2 className="text-[42px] sm:text-[44px] md:text-[52px] font-medium leading-[1.05] mb-8 text-white" style={{ fontFamily: GROTESK }}>
            Factory <span style={{ color: LIME }}>Floor</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT — Technology Stack */}
          <Reveal>
            <div className="flex flex-col h-full">
              <div className="text-[16px] font-medium mb-3" style={{ color: LIME, fontFamily: GROTESK }}>
                Technology Stack
              </div>
              <div className="flex-1 flex flex-col justify-between">
                {stack.map((s, i) => {
                  const style = tagStyles[s.tone];
                  return (
                    <div
                      key={s.t}
                      className="flex items-center justify-between gap-4 py-2.5"
                      style={{ borderBottom: i < stack.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                    >
                      <div>
                        <div className="text-white text-[16px] sm:text-[13px] font-medium" style={{ fontFamily: GROTESK }}>{s.t}</div>
                        <div className="text-[16px] sm:text-[11px] mt-0.5" style={{ color: "#8799AB" }}>{s.d}</div>
                      </div>
                      <span
                        className="shrink-0 px-1.5 py-0.5 text-[15px] font-semibold tracking-[0.14em]"
                        style={{
                          color: style.color,
                          border: `1px solid ${style.border}`,
                          borderRadius: 2,
                          fontFamily: GROTESK,
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Agentic Maintenance Flow */}
          <Reveal delay={0.1}>
            <div className="flex flex-col h-full">
              <div className="text-[16px] font-medium mb-3" style={{ color: "rgba(255,255,255,0.35)", fontFamily: GROTESK }}>
                Agentic Maintenance Flow
              </div>

            {/* Bordered container — filled */}
            <div className="relative p-3 sm:p-4" style={{ background: "#141814", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 2 }}>
              <div className="flex flex-col">
                {flow.map((f, i) => (
                  <div
                    key={f.t}
                    className="relative flex items-center gap-3 py-2.5 px-3"
                    style={{
                      borderBottom: i < flow.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      background: "transparent",
                    }}
                  >
                    <div className="w-6 shrink-0 text-[17px] sm:text-[16px] font-medium leading-none" style={{ color: "rgba(200,255,1,0.22)", fontFamily: GROTESK }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-white text-[16px] sm:text-[13px] font-medium" style={{ fontFamily: GROTESK }}>{f.t}</div>
                      <div className="text-[16px] sm:text-[11px] mt-0.5" style={{ color: "#8799AB" }}>{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Olive stats strip */}
            <div className="grid grid-cols-3 mt-4" style={{ background: "#354408", border: "1.3px solid #4F6607", borderRadius: 2 }}>
              {stats.map((s, i) => (
                <div
                  key={s.v}
                  className="px-3 sm:px-5 py-4"
                  style={{ borderRight: i < stats.length - 1 ? "1.3px solid #4F6607" : "none" }}
                >
                  <div className="text-[22px] sm:text-[26px] font-bold leading-none" style={{ color: LIME, fontFamily: GROTESK }}>
                    {s.v}
                  </div>
                  <div className="text-[16px] mt-2 leading-tight" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {s.l[0]}<br />{s.l[1]}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ===================== CTA ===================== */
const CTASection = () => (
  <BrandedCTASection
    title={<>See Intelligent Condition Monitoring <CtaHighlight>Live on Your Line</CtaHighlight></>}
    description="Book a 45-minute discovery session. We'll map your gaps, calculate ROI, and demo live on parts similar to yours."
  />
);

/* ===================== PAGE ===================== */
const ConditionMonitoring = () => {
  return (
    <div className="min-h-screen no-scrollbar" style={{ background: PANEL }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap');
        html, body { scrollbar-width: none; -ms-overflow-style: none; }
        html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; width: 0; height: 0; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; width: 0; height: 0; }
      `}</style>
      <Navbar />
      <HeroSection />
      <SpecialistsSection />
      <SignalFlowSection />
      <ManifestoSection />
      <ApplicationsSection />
      <FactoryFloorSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default ConditionMonitoring;
