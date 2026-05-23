import { motion, useReducedMotion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import type { ReactNode } from "react";
import {
  Eye, Cpu, Activity, Network, ArrowRight, Lightbulb, PenTool, Plug, Maximize, RefreshCw,
  Wrench, Sparkles, Users, FlaskConical, Bot, Workflow, BookOpenCheck, GitBranch,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/vision-analytics-hero.jpeg";

const LIME = "#C8FF01";
const LIME_SOFT = "rgba(200,255,1,0.25)";
const PANEL = "#0B0E14";
const PANEL_2 = "#0F1218";
const CARD = "#11151D";
const BORDER = "rgba(255,255,255,0.08)";
const MUTED = "rgba(255,255,255,0.55)";
const DIM = "rgba(255,255,255,0.45)";
const GROTESK = "'Space Grotesk', sans-serif";

/* ---------- Reveal ---------- */
const Reveal = ({ children, delay = 0, y = 28, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) => {
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

const Eyebrow = ({ text, center = false }: { text: string; center?: boolean }) => (
  <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
    <div className="w-6 h-px" style={{ background: LIME }} />
    <span className="text-[15px] tracking-[0.2em]" style={{ color: LIME }}>{text}</span>
  </div>
);

/* ===================== HERO ===================== */
const HeroSection = () => {
  const stats = [
    { v: "100%", l: "Defect Coverage" },
    { v: "5ms", l: "Latency" },
    { v: "62%", l: "Scrap Reduction" },
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: PANEL }}>
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      {/* Vignette to keep text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)" }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16 sm:pb-24">
        <Reveal>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-8"
            style={{ background: "rgba(200,255,1,0.06)", border: `1px solid ${LIME_SOFT}` }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
            <span
              className="sm:text-[11px] uppercase tracking-[0.18em] font-normal text-xs"
              style={{ color: LIME }}
            >
              Vision Analytics · Real-Time Quality
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className="text-[42px] sm:text-[44px] md:text-[56px] font-medium leading-[1.08] tracking-normal mb-5 max-w-3xl text-white"
            style={{ fontFamily: GROTESK }}
          >
            Zero-Defect
            <br />Manufacturing Starts Here.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            className="text-[16px] sm:text-[14px] max-w-xl leading-relaxed mb-10"
            style={{ color: MUTED }}
          >
            AI-powered vision inspection that catches quality issues at the edge — in real time,
            before they reach the line.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-md">
            {stats.map((s) => (
              <div key={s.l}>
                <div
                  className="text-[24px] sm:text-[30px] font-medium leading-none"
                  style={{ fontFamily: GROTESK }}
                >
                  {s.v}
                </div>
                <div
                  className="text-[12px] sm:text-[10px] uppercase tracking-[0.16em] mt-1"
                  style={{ color: DIM }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/* ---------- Donut ---------- */
const Donut = ({ value, color }: { value: number; color: string }) => {
  const r = 28;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="relative w-[72px] h-[72px]">
      <svg viewBox="0 0 72 72" className="w-full h-full -rotate-90">
        <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
        <motion.circle
          cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
          initial={{ strokeDasharray: `0 ${c}` }}
          whileInView={{ strokeDasharray: `${dash} ${c}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-white text-[16px] font-medium" style={{ fontFamily: GROTESK }}>
        {value}%
      </div>
    </div>
  );
};

/* ===================== FOUR PILLARS ===================== */
const PillarsSection = () => {
  const pillars = [
    { v: 99, color: "#C8FF01", tag: "Real-Time Vision", d: "Sub-5ms edge inference. No cloud round-trips.", chips: ["Edge AI", "ONNX"] },
    { v: 95, color: "#3DB5F2", tag: "AI Defect Detection", d: "Multi-class models trained on your geometry.", chips: ["YOLOv9", "Auto-Label"] },
    { v: 87, color: "#30E8BA", tag: "Predictive Analytics", d: "MES/ERP correlation for upstream SPC.", chips: ["InfluxDB", "MES"] },
    { v: 92, color: "#C8FF01", tag: "Closed Loop Control", d: "Machine adjustments via PLC bridge in real time.", chips: ["OPC-UA", "PLC"] },
  ];
  return (
    <section className="py-12 sm:py-16" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <Reveal>
          <Eyebrow text="AI Quality Platform" center />
          <h2 className="text-center text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-10 text-white" style={{ fontFamily: GROTESK }}>
            Four Pillars of Real-Time Quality
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1160px] mx-auto justify-items-center">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.06}>
              <div
                className="group px-4 py-4 rounded-xl h-full w-full max-w-[270px] mx-auto transition-all duration-300"
                style={{
                  background: "#0A0D0A",
                  border: "1.5px solid #1D201D",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#19231933")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#0A0D0A")}
              >
                <div className="flex justify-center mb-2">
                  <Donut value={p.v} color={p.color} />
                </div>
                <div
                  className="text-center text-[12px] uppercase tracking-[0.22em] mb-2 font-medium"
                  style={{ color: "rgba(255,255,255,0.5)", fontFamily: GROTESK }}
                >
                  {p.tag}
                </div>
                <p className="text-center text-[16px] leading-[1.4] mb-3 text-white">
                  {p.d}
                </p>
                <div className="flex justify-center gap-2 flex-wrap">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded text-[14px]"
                      style={{
                        background: "#111411",
                        border: "1px solid #1D201D",
                        color: "rgba(255,255,255,0.75)",
                      }}
                    >
                      {c}
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

/* ===================== KPI STRIP — Numbers that prove vision ===================== */
const KpiStripSection = () => {
  const stats = [
    { v: "11+", l: "Technologies", c: "#00E0EC" },
    { v: "50+", l: "Solutions Delivered", c: "#C8FF00" },
    { v: "8+",  l: "Industries", c: "#00E0EC" },
    { v: "200+", l: "Clients Worldwide", c: "#C8FF00" },
  ];
  return (
    <section
      className="relative py-12 sm:py-16 px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 overflow-hidden"
      style={{ backgroundColor: "#173B2A" }}
    >
      {/* faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] text-center">
        <Reveal>
          <p
            className="text-[15px] tracking-[0.2em] mb-4 flex items-center justify-center gap-2"
            style={{ color: "#B2F215" }}
          >
            <span className="w-6 h-px" style={{ background: "#B2F215" }} />
            Vision At Scale
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-10 text-white"
            style={{ fontFamily: GROTESK }}
          >
            Vision that proves itself
            <br />
            in numbers.
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center items-center gap-x-16 sm:gap-x-24 gap-y-10">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={0.16 + i * 0.08}>
              <div>
                <div
                  className="text-[44px] sm:text-[54px] font-medium leading-none"
                  style={{ color: s.c, fontFamily: GROTESK }}
                >
                  {s.v}
                </div>
                <p
                  className="text-[16px] sm:text-[13px] mt-3"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {s.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* wavy bottom edge */}
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
  );
};

/* ===================== INTELLIGENCE ACROSS THE ENTIRE VALUE CHAIN ===================== */
const ValueChainSection = () => {
  const C = {
    yellow: "#FFC61A",
    cyan: "#00FFFF",
    green: "#00F891",
    purple: "#B336F6",
    teal: "#19D3D6",
  };
  const bars = [
    { l: "AI for Manufacturing", v: 98, c: C.yellow },
    { l: "Industrial Data Engineering", v: 92, c: C.cyan },
    { l: "Supply Chain Intelligence", v: 85, c: C.green },
    { l: "Digital Factory Analytics", v: 90, c: C.purple },
  ];
  const chartBars = [62, 68, 75, 70, 80, 85, 96];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const legend = [
    { c: C.yellow, l: "Surface Defects", v: "42%" },
    { c: C.cyan, l: "Dimensional Errors", v: "28%" },
    { c: C.green, l: "Assembly Misalign", v: "18%" },
    { c: C.purple, l: "Label / Barcode", v: "12%" },
  ];
  return (
    <section className="py-12 sm:py-16" style={{ background: "#13171D" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ background: C.yellow }} />
              <span className="text-[15px] tracking-[0.2em]" style={{ color: C.yellow }}>What We Deliver</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-5 text-white" style={{ fontFamily: GROTESK }}>
              Intelligence Across the
              <br />Entire Value Chain
            </h2>
            <p className="text-[16px] leading-relaxed mb-8 max-w-md" style={{ color: MUTED }}>
              From raw sensor data to boardroom KPIs — our platform unifies
              vision, data, and decisions.
            </p>
            <div className="space-y-5">
              {bars.map((b, i) => (
                <Reveal key={b.l} delay={i * 0.06}>
                  <div>
                    <div className="flex justify-between text-[16px] mb-2">
                      <span className="text-white">{b.l}</span>
                      <span style={{ color: b.c, fontFamily: GROTESK }}>{b.v}%</span>
                    </div>
                    <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: b.c }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${b.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl p-6" style={{ background: "#0A0D0A", border: "1.5px solid #1D201D" }}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-white text-[16px] font-medium" style={{ fontFamily: GROTESK }}>Weekly Inspection Throughput</div>
                <div className="text-[15px]" style={{ color: C.yellow, fontFamily: GROTESK }}>↑ 18% MoM</div>
              </div>
              <div className="flex items-end gap-2 h-40 mb-3">
                {chartBars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-sm"
                    style={{ background: i === chartBars.length - 1 ? C.teal : "rgba(25,211,214,0.25)" }}
                  />
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[14px] mb-6" style={{ color: DIM }}>
                {days.map((d) => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {legend.map((l) => (
                  <div
                    key={l.l}
                    className="rounded-md px-3 py-2.5"
                    style={{ background: "#111411", border: "1px solid #1D201D" }}
                  >
                    <div className="flex items-center justify-between gap-2 text-[15px] mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.c }} />
                        <span className="text-white">{l.l}</span>
                      </div>
                      <span style={{ color: l.c, fontFamily: GROTESK }}>{l.v}</span>
                    </div>
                    <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: l.c }}
                        initial={{ width: 0 }}
                        whileInView={{ width: l.v }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      />
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

/* ===================== AGENTS THAT ACT, NOT JUST ALERT ===================== */
const AgentsSection = () => {
  const C = {
    yellow: "#FFC61A",
    cyan: "#00FFFF",
    green: "#00F891",
    purple: "#B336F6",
    teal: "#19D3D6",
  };
  const steps = [
    { l: "Detect", c: C.green },
    { l: "Analyse", c: C.green },
    { l: "Decide", c: C.yellow },
    { l: "Execute", c: C.green },
  ];
  const items = [
    { icon: Eye, t: "Vision Quality Co-Pilot", d: "Root-cause insights and automatic SPC reports.", badge: "Active", c: C.green },
    { icon: Workflow, t: "Workflow & Decision Agents", d: "Routes non-conforming parts and escalates anomalies.", badge: "Active", c: C.green },
    { icon: BookOpenCheck, t: "Self-Improving Playbooks", d: "Refines thresholds from quality engineer feedback.", badge: "Learning", c: C.cyan },
    { icon: GitBranch, t: "Closed Loop SIF", d: "Pushes corrective commands directly to machines.", badge: "Connected", c: C.green },
  ];
  return (
    <section className="py-12 sm:py-16" style={{ background: "#000000" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ background: C.green }} />
              <span className="text-[15px] tracking-[0.2em]" style={{ color: C.green }}>AI Agent Quality</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-5 text-white" style={{ fontFamily: GROTESK }}>
              Agents That Act,
              <br />
              Not Just Alert
            </h2>
            <p className="text-[16px] leading-relaxed mb-8 max-w-md" style={{ color: MUTED }}>
              Autonomous agents monitor, adjust, and learn — turning passive
              inspection into active quality management.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {steps.map((s, i) => (
                <div key={s.l} className="flex items-center gap-2">
                  <span
                    className="px-4 py-2 rounded-md text-[15px]"
                    style={{
                      background: "#0A0D0A",
                      border: `1px solid ${s.c}`,
                      color: s.c,
                      fontFamily: GROTESK,
                    }}
                  >
                    {s.l}
                  </span>
                  {i < steps.length - 1 && <ChevronRight className="w-3.5 h-3.5" style={{ color: DIM }} />}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.t}
                    className="px-5 py-4 rounded-md flex items-center justify-between gap-4 transition-colors duration-300"
                    style={{ background: "#0A0D0A", border: "1px solid #1D201D" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#19231933")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0A0D0A")}
                  >
                    <div className="flex gap-4 items-center min-w-0">
                      <div className="w-10 h-10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" style={{ color: it.c }} strokeWidth={1.5} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white text-[16px] font-medium" style={{ fontFamily: GROTESK }}>{it.t}</h4>
                        <p className="text-[16px] mt-0.5 leading-relaxed" style={{ color: MUTED }}>{it.d}</p>
                      </div>
                    </div>
                    <span
                      className="shrink-0 px-3 py-1 rounded-full text-[14px]"
                      style={{
                        background: "transparent",
                        border: `1px solid ${it.c}`,
                        color: it.c,
                        fontFamily: GROTESK,
                      }}
                    >
                      {it.badge}
                    </span>
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

/* ===================== PURPOSE-BUILT FOR REGULATED MANUFACTURING ===================== */
const ApproachSection = () => {
  const steps = [
    { icon: Lightbulb, num: "01", t: "Understand", d: "Map your line topology & defect taxonomy.", color: "#FFC61A" },
    { icon: PenTool,   num: "02", t: "Design",     d: "Architect the vision & data model.",        color: "#00FFFF" },
    { icon: Plug,      num: "03", t: "Integrate",  d: "Deploy edge nodes & connect MES.",          color: "#00F891" },
    { icon: Maximize,  num: "04", t: "Scale",      d: "Roll out to all lines & facilities.",       color: "#B336F6" },
    { icon: RefreshCw, num: "05", t: "Evolve",     d: "Continuous model improvement.",             color: "#19D3D6" },
  ];
  return (
    <section className="py-12 sm:py-16" style={{ background: "#000000" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <Reveal>
          <Eyebrow text="Our Approach" />
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-10 text-white" style={{ fontFamily: GROTESK }}>
            Purpose-Built for Regulated Manufacturing
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-6 max-w-[1000px] mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.t} delay={i * 0.08}>
                <div
                  className={`flex flex-col items-center text-center ${
                    i === 4 ? "col-span-2 sm:col-span-1 max-w-[160px] mx-auto" : ""
                  }`}
                >
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full mb-3"
                    style={{ border: `1.5px solid ${s.color}`, background: "rgba(255,255,255,0.02)" }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#fff" }} strokeWidth={1.4} />
                  </div>
                  <span
                    className="text-[14px] sm:text-[11px] font-medium mb-1.5"
                    style={{ color: s.color, fontFamily: GROTESK }}
                  >
                    {s.num}
                  </span>
                  <h4
                    className="text-[16px] sm:text-[14px] font-medium text-white mb-1 leading-tight"
                    style={{ fontFamily: GROTESK }}
                  >
                    {s.t}
                  </h4>
                  <span className="text-[14px] sm:text-[11px] leading-snug" style={{ color: "#8799AB" }}>
                    {s.d}
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

/* ===================== CORE VALUES ===================== */
const ValuesSection = () => {
  const items = [
    { icon: Wrench, t: "Engineering Excellence", d: "Systems that engineers trust in the harshest conditions." },
    { icon: Sparkles, t: "Product Innovation", d: "Bringing tomorrow's R&D to production today." },
    { icon: Users, t: "Customer Focus", d: "Your uptime, ROI, and KPIs are our metrics." },
    { icon: FlaskConical, t: "Continuous Research", d: "Partnering with labs to advance what's possible." },
  ];
  return (
    <section className="py-12 sm:py-16" style={{ background: "#202E3C" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ background: LIME }} />
            <span className="text-[15px] tracking-[0.2em]" style={{ color: LIME }}>Core Values</span>
          </div>
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium leading-tight mb-5 sm:mb-6 text-white" style={{ fontFamily: GROTESK }}>
            Built on Principles That Scale.
          </h2>
          <p className="text-[16px] sm:text-[13px] leading-relaxed max-w-4xl" style={{ color: "rgba(255,255,255,0.5)" }}>
            Vision Analytics is engineered for the factory floor — not the lab. Every line of code, every model, and every deployment is
            grounded in four core values that keep our systems reliable, innovative, customer-aligned, and continuously evolving.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[900px]">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.t} className="rounded-md p-3 sm:p-4" style={{ background: "#09091199", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: "rgba(255,255,255,0.5)" }} strokeWidth={1.6} />
                  <h3 className="text-white font-semibold text-[15px] sm:text-[12px]">{it.t}</h3>
                </div>
                <p className="text-[14px] sm:text-[11px] leading-snug pl-[22px]" style={{ color: "rgba(255,255,255,0.45)" }}>{it.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ===================== CTA ===================== */
const CTASection = () => (
  <BrandedCTASection
    title={<>See Vision Analytics <CtaHighlight>Live on Your Line</CtaHighlight></>}
    description="Book a 45-minute discovery session. We'll map your gaps, calculate ROI, and demo live on parts similar to yours."
  />
);

/* ===================== PAGE ===================== */
const VisionAnalytics = () => {
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
      <PillarsSection />
      <KpiStripSection />
      <ValueChainSection />
      <AgentsSection />
      <ApproachSection />
      <ValuesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default VisionAnalytics;
