import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database, ArrowRight,
  FileSpreadsheet, Calendar, BarChart3, Boxes, FlaskConical,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/factory-scheduling-hero-bg.jpeg";
import iconJobshop from "@/assets/ffs-icon-jobshop.png";
import iconBatch from "@/assets/ffs-icon-batch.png";
import iconDiscrete from "@/assets/ffs-icon-discrete.png";
import solverHexaly from "@/assets/solver-hexaly.png";
import solverOrtools from "@/assets/solver-ortools.png";
import solverCustom from "@/assets/solver-custom.png";

const SERIF = "'Cormorant', 'Cormorant Garamond', serif";
const PANEL = "#060604";
const CARD = "#161621";
const TEXT_DIM = "#636363";

/* ---------- Hero ---------- */
const HeroSection = () => (
  <section className="relative min-h-[620px] sm:min-h-[700px] flex items-center overflow-hidden" style={{ background: PANEL }}>
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pt-32 sm:pt-36 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="mb-8 flex items-center gap-2"
      >
        <span className="hidden sm:inline text-[12px] sm:text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-white/55">CARBYNETECH</span>
        <span className="hidden sm:inline text-white/30">·</span>
        <span className="text-[12px] sm:text-[10px] font-semibold sm:font-medium uppercase tracking-[0.22em] text-white/70 sm:text-white/55">SAP MANUFACTURING INTELLIGENCE</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[56px] sm:text-[64px] md:text-[80px] font-medium sm:font-light leading-[1.05] mb-6 max-w-3xl text-white"
        style={{ fontFamily: SERIF, letterSpacing: "-0.01em" }}
      >
        Shopfloor Intelligence<br />Schedules That Think.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
        className="text-[16px] sm:text-[14px] font-medium sm:font-normal max-w-xl leading-relaxed text-white/80 sm:text-white/55 mb-8"
      >
        Carbynetech's AI-powered scheduling engine eliminates production chaos —
        connecting SAP S/4HANA, Excel, and your shopfloor into a single source of truth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl"
      >
        {[
          { v: "40%", l: "Lower Inventory" },
          { v: "98%", l: "OTIF Delivery" },
          { v: "03%", l: "Capacity Conflicts" },
        ].map((s) => (
          <div key={s.l}>
            <div className="text-[38px] sm:text-[34px] font-normal sm:font-light text-white" style={{ fontFamily: SERIF }}>{s.v}</div>
            <div className="text-[12px] sm:text-[11px] font-semibold sm:font-normal text-white/75 sm:text-white/45 uppercase tracking-[0.14em] mt-1">{s.l}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ---------- Why It Matters ---------- */
const WhyItMattersSection = () => {
  const items = [
    { v: "6–8 hrs", t: "Manual Scheduling Chaos", d: "Excel-based planning breaks under multi-constraint shopfloor reality. Every change requires a full rebuild." },
    { v: "4–6 hrs", t: "Late Visibility", d: "Sequence conflicts discovered on the floor, not in planning. Firefighting replaces optimization." },
    { v: "30–40%", t: "Disconnected Systems", d: "SAP data stays locked; planners re-key manually. Sync errors compound scheduling waste daily." },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  // 3 dots, one per cell — sit on each cell's right vertical divider
  const dotPositions = [1 / 3, 2 / 3, 1];
  const isDotActive = (i: number) => hovered === i;

  return (
    <section className="py-14 sm:py-16" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div className="text-[12px] sm:text-[10px] font-semibold sm:font-medium uppercase tracking-[0.22em] mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>HOW IT WORKS</div>
        <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-normal sm:font-light text-white leading-[1.05] mb-5" style={{ fontFamily: SERIF }}>
          Why It Matters
        </h2>
        <p className="text-[14px] sm:text-[14px] font-medium sm:font-normal mb-10 max-w-2xl" style={{ color: "rgba(255,255,255,0.7)" }}>
          Every hour of manual scheduling is an hour of value left on the shopfloor — while competitors optimize.
        </p>

        {/* Horizontal divider with hollow dots that sit on the verticals' top */}
        <div className="relative hidden md:block h-px">
          <div
            className="absolute h-px top-0"
            style={{ left: 0, right: "-72px", background: "rgba(255,255,255,0.18)" }}
          />
          {dotPositions.map((p, i) => {
            const active = isDotActive(i);
            const size = active ? 11 : 9;
            return (
              <div
                key={i}
                className="absolute transition-all duration-300"
                style={{
                  left: `${p * 100}%`,
                  top: 0,
                  transform: "translate(-50%, -50%)",
                  width: size,
                  height: size,
                }}
              >
                <div
                  className="w-full h-full rounded-full transition-all duration-300"
                  style={{
                    border: `1px solid ${active ? "#ffffff" : "rgba(255,255,255,0.45)"}`,
                    background: PANEL,
                  }}
                />
              </div>
            );
          })}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 md:gap-px"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          {items.map((it, idx) => {
            const active = hovered === idx;
            const isLast = idx === items.length - 1;
            return (
              <div
                key={it.t}
                className={`p-4 sm:p-5 md:p-6 transition-all duration-300 ${!isLast ? "border-b border-white/[0.18] md:border-b-0" : ""} ${isLast ? "md:border-r md:border-white/[0.18]" : ""}`}
                style={{ background: PANEL }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="font-medium sm:font-light leading-none mb-6 transition-all duration-300"
                  style={{
                    fontFamily: SERIF,
                    color: active ? "#ffffff" : TEXT_DIM,
                    transform: active ? "scale(1.01)" : "scale(1)",
                    transformOrigin: "left center",
                  }}
                >
                  <span
                    className="inline-block"
                    style={{ fontSize: "clamp(48px, 5vw, 64px)" }}
                  >
                    {it.v}
                  </span>
                </div>
                <div
                  className="mb-3 transition-colors duration-300 font-semibold sm:font-medium"
                  style={{ color: "#ffffff", fontSize: "16px" }}
                >
                  {it.t}
                </div>
                <p
                  className="leading-relaxed max-w-xs transition-colors duration-300 font-medium sm:font-normal"
                  style={{
                    color: active ? "#ffffff" : "rgba(255,255,255,0.7)",
                    fontSize: "13px",
                  }}
                >
                  {it.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- The Scheduling Engine (LIGHT) ---------- */
const SchedulingEngineSection = () => {
  const cards = [
    { tag: "Input", title: "SAP S/4HANA", desc: "Live PP/PI data pull. Write optimized schedule back to production orders.", dot: "#EE9D2B" },
    { tag: "Input", title: "Excel Upload", desc: "Upload capacity, orders, and constraints. Zero IT dependency for pilot.", dot: "#2BCDEE" },
    { tag: "Input", title: "Manual Entry", desc: "Direct entry for quick ad-hoc scheduling scenarios and overrides.", dot: "#EE2BD7" },
  ];
  const stats = [
    { v: "90M+", l: "Schedules Computed" },
    { v: "35%", l: "Average Time Saved" },
    { v: "175+", l: "Factories Served" },
    { v: "3K+", l: "Active Planners" },
  ];
  const chips = ["Multi-Resource Scheduling", "Real-Time Re-scheduling", "What-If Scenario Analysis", "Zero-Code SAP Connector"];

  return (
    <section className="py-14 sm:py-16" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div className="mb-8 text-left">
          <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-normal sm:font-light leading-[1.05] mb-4" style={{ fontFamily: SERIF, color: "#1a1a1a" }}>
            The Scheduling Engine
          </h2>
          <p className="text-[14px] sm:text-[13px] max-w-xl leading-relaxed font-medium" style={{ color: "rgba(0,0,0,0.75)" }}>
            Connect your data, define constraints, and let the engine find the optimal schedule across all your resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-9 max-w-[920px] mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-2xl p-5 relative cursor-pointer transition-colors duration-300"
              style={{ background: "#141414" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#131B22")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#141414")}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block text-[13px] sm:text-[11px] font-semibold text-white/90 sm:text-white/75 uppercase tracking-wider transition-transform duration-300 origin-left group-hover:scale-[1.08]" style={{ fontFamily: "Inter, sans-serif" }}>{c.tag}</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.dot }} />
              </div>
              <h3 className="text-[20px] sm:text-[19px] font-semibold text-white mb-2.5 transition-transform duration-300 origin-left group-hover:scale-[1.06]" style={{ fontFamily: SERIF }}>{c.title}</h3>
              <p className="text-[14px] sm:text-[13px] font-medium text-white/85 sm:text-white/70 leading-relaxed transition-all duration-300 origin-left group-hover:scale-[1.04] group-hover:text-white/90" style={{ fontFamily: "Inter, sans-serif" }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-[920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center md:text-left">
              <div className="text-[40px] sm:text-[44px] font-medium sm:font-light leading-none" style={{ fontFamily: SERIF, color: "#1a1a1a" }}>{s.v}</div>
              <div className="text-[15px] sm:text-[15px] font-semibold mt-2.5" style={{ color: "rgba(0,0,0,0.9)", fontFamily: SERIF }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="max-w-[920px] mx-auto grid grid-cols-2 md:flex md:flex-wrap gap-2 md:justify-between">
          {chips.map((c) => (
            <span
              key={c}
              className="flex items-center justify-center text-center min-h-[48px] md:min-h-0 text-[13px] sm:text-[12px] font-semibold text-white px-5 py-2.5 rounded-md cursor-pointer transition-transform duration-300 origin-center hover:scale-[1.08]"
              style={{ background: "#141414", fontFamily: SERIF }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Every Shopfloor Complexity ---------- */
const ComplexitySection = () => {
  const cards = [
    {
      iconSrc: iconJobshop, iconBg: "#EE9D2B1A", color: "#EE9D2B",
      tag: "Discrete · High-Mix", title: "Job Shop Scheduling",
      points: [
        "Dynamic job routing across work centers",
        "Machine-level sequencing & priority dispatch",
        "Setup time optimization between jobs",
        "Priority-based dispatching rules",
      ],
      footer: "↑ 35% throughput on high-mix lines",
    },
    {
      iconSrc: iconBatch, iconBg: "#3399CC1A", color: "#3399CC",
      tag: "Process · Campaign-Based", title: "Batch Process Scheduling",
      points: [
        "Batch grouping & campaign logic",
        "Changeover minimization between runs",
        "Resource & utility constraints",
        "Shelf-life and expiry windows",
      ],
      footer: "↓ 28% changeover loss",
    },
    {
      iconSrc: iconDiscrete, iconBg: "#359C691A", color: "#359C69",
      tag: "BOM-Driven · Sequence-Sensitive", title: "Discrete Manufacturing",
      points: [
        "Multi-level BOM sequencing",
        "Work center load balancing",
        "Parallel operation scheduling",
        "Takt time alignment",
      ],
      footer: "↑ 22% OEE improvement",
    },
  ];
  return (
    <section className="py-14 sm:py-16" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-normal sm:font-light text-white leading-[1.05] mb-5 max-w-3xl" style={{ fontFamily: SERIF }}>
          Every Shopfloor Complexity.<br />Modelled and Solved.
        </h2>
        <p className="text-[14px] sm:text-[13px] font-medium sm:font-normal text-white/70 sm:text-white/45 mb-9 max-w-xl">
          From high-mix job shops to complex gas-based batch processing, our engine adapts to your manufacturing reality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-[820px] mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-xl p-5 sm:p-4 flex flex-col relative overflow-hidden transition-colors duration-300 hover:bg-[#10151B]"
              style={{ background: "#0E1012", border: "0.8px solid #26282ECC", borderBottom: `3px solid ${c.color}`}}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{ background: c.iconBg, width: 32, height: 32 }}
                >
                  <img src={c.iconSrc} alt="" className="w-4 h-4 object-contain transition-transform duration-300 group-hover:-rotate-[25deg]" />
                </div>
                <span className="text-[15px] sm:text-[14px] font-bold sm:font-semibold" style={{ color: c.color, fontFamily: "'Cormorant', serif" }}>{c.tag}</span>
              </div>
              <h3 className="text-[20px] sm:text-[20px] font-semibold text-white mb-3 transition-all duration-300 group-hover:text-[20.5px]" style={{ fontFamily: SERIF }}>{c.title}</h3>
              <ul className="flex flex-col gap-1.5 mb-5">
                {c.points.map((p) => (
                  <li key={p} className="text-[15px] sm:text-[14px] font-medium text-white/85 sm:text-white/75 leading-relaxed flex gap-2" style={{ fontFamily: "'Cormorant', serif" }}>
                    <span className="text-white/50 mt-0.5">•</span><span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <span className="text-[15px] sm:text-[14px] font-bold sm:font-semibold transition-all duration-300 group-hover:text-[14.5px]" style={{ color: c.color, fontFamily: "'Cormorant', serif" }}>{c.footer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Powered by Solvers (LIGHT) ---------- */
const SolversSection = () => {
  const solvers = [
    {
      iconSrc: solverHexaly,
      title: "Hexaly",
      desc: "Commercial-grade metaheuristic optimizer. Handles combinatorial complexity at scale. Best for large Job Shop and Batch scenarios.",
      footer: "↑ 35% throughput on high-mix lines",
      footerColor: "#EE9D2B",
    },
    {
      iconSrc: solverOrtools,
      title: "OR-Tools (Google)",
      desc: "Open-source constraint programming. Flexible, fast, ideal for discrete manufacturing sequence problems with tight constraints.",
      footer: "Open Source · Flexible",
      footerColor: "#3399CC",
    },
    {
      iconSrc: solverCustom,
      title: "Custom Heuristics",
      desc: "Commercial-grade metaheuristic optimizer. Handles combinatorial complexity at scale. Best for large Job Shop and Batch scenarios.",
      footer: "SME-Optimized",
      footerColor: "#359C69",
    },
  ];
  const tags = ["Scenario Type", "Complexity Score", "Auto-Selection", "Optimal Solver"];

  return (
    <section className="py-14 sm:py-16" style={{ background: "#F4F2EC" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div className="text-left mb-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-normal sm:font-light leading-[1.05] mb-4" style={{ fontFamily: SERIF, color: "#1a1a1a" }}>
            Powered by World-Class Optimization Solvers
          </h2>
          <p className="text-[14px] sm:text-[12px] font-medium sm:font-normal max-w-xl" style={{ color: "#000000" }}>
            Three solver engines, one unified API. The right solver is auto-selected based on problem topology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-[920px] mx-auto">
          {solvers.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl p-5"
              style={{ border: "1px solid #242424", backgroundColor: "#111111" }}
            >
              <span
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-2xl"
                style={{ background: "linear-gradient(180deg, #082A46 0%, #062641 98.08%)" }}
              />
              <div className="relative">
              <img src={s.iconSrc} alt="" className="w-7 h-7 object-contain mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-[22px] sm:text-[22px] text-white mb-2 font-semibold transition-transform duration-300 origin-left group-hover:scale-[1.06]" style={{ fontFamily: SERIF }}>{s.title}</h3>
              <p className="text-[15px] sm:text-[15px] font-medium text-white/90 sm:text-white/85 leading-relaxed mb-4 transition-transform duration-300 origin-left group-hover:scale-[1.04]" style={{ fontFamily: SERIF }}>{s.desc}</p>
              <div className="text-[15px] sm:text-[15px] font-bold sm:font-semibold transition-transform duration-300 origin-left group-hover:scale-[1.06]" style={{ color: s.footerColor, fontFamily: SERIF }}>
                {s.footer}
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-[920px] mx-auto">
          <div className="flex flex-wrap items-center justify-start gap-3 mb-4">
            {tags.map((t, i) => (
              <div key={t} className="flex items-center gap-3">
                <span className="text-[13px] font-semibold text-white px-4 py-2 rounded-md"
                  style={{ background: "#111111", fontFamily: SERIF }}>{t}</span>
                {i < tags.length - 1 && <span className="text-black/40">→</span>}
              </div>
            ))}
          </div>
          <div>
            <span className="text-[13px] font-semibold inline-block px-4 py-2.5 rounded-md"
              style={{ background: "#E8E5DC", color: "rgba(0,0,0,0.85)", border: "1px solid rgba(0,0,0,0.08)", fontFamily: SERIF }}>
              Solver is auto-selected based on problem topology — no configuration needed.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Works With What You Already Have ---------- */
const IntegrationsSection = () => {
  const integrations = [
    { icon: Database, color: "#FF8A3D", title: "SAP S/4HANA", desc: "Live BOM, routing, WC and production order sync, in real-time." },
    { icon: FileSpreadsheet, color: "#3EE695", title: "Excel / CSV", desc: "Upload constraints, calendars, and overrides via familiar templates." },
    { icon: Calendar, color: "#FFB341", title: "Gantt Views", desc: "Interactive views for line ops with real-time drag-and-drop editing." },
    { icon: BarChart3, color: "#A88BFF", title: "BI Dashboards", desc: "PowerBI, Tableau, and OOTB dashboards already supported." },
    { icon: FlaskConical, color: "#FF6B9D", title: "What-If Simulator", desc: "Test scenarios before committing to production with safe sandbox modeling." },
    { icon: Boxes, color: "#3D8AFF", title: "Excess & Reports", desc: "Auto-push schedules, exception reports and live status to managers." },
  ];
  return (
    <section className="py-14 sm:py-16" style={{ background: "#060604", fontFamily: "Inter, sans-serif" }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-normal sm:font-light text-white leading-[1.05] mb-4" style={{ fontFamily: "Cormorant, serif" }}>
          Works With What You Already Have
        </h2>
        <p className="text-[14px] sm:text-[13px] font-medium sm:font-normal mb-9 max-w-xl" style={{ color: "#A3AAB8", fontFamily: "Inter, sans-serif" }}>
          Seamless integration with your existing enterprise stack. No rip-and-replace required.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {integrations.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                background: "#111111",
                border: "1px solid #242424",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(180deg, #082A46 0%, #062641 98.08%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#111111";
              }}
            >
              <it.icon size={18} style={{ color: it.color }} className="mb-4 transition-transform duration-300 group-hover:scale-110 origin-left" />
              <h3 className="text-white mb-2 font-semibold sm:font-medium transition-all duration-300 origin-left group-hover:scale-[1.06]" style={{ fontFamily: "Cormorant, serif", fontSize: "21px" }}>{it.title}</h3>
              <p className="leading-relaxed font-medium sm:font-normal transition-all duration-300 origin-left group-hover:text-white group-hover:scale-[1.03]" style={{ color: "#A3AAB8", fontFamily: "Inter, sans-serif", fontSize: "14px" }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Customer Voices ---------- */
const TestimonialsSection = () => {
  const items = [
    {
      bg: "#0F0F0F",
      fg: "#ffffff",
      badgeTop: "18x",
      badgeBottom: "Faster",
      keyResultLabel: "FASTER SCHEDULING",
      watermark: "18× Faster",
      quote: "Carbynetech cut our scheduling cycle from 3 days to 4 hours. The team couldn't believe the transformation.",
      name: "Rajesh Menon",
      role: "VP Operations · Tata Steel",
    },
    {
      bg: "#EEECE8",
      fg: "#1a1a1a",
      badgeTop: "96x",
      badgeBottom: "On Time",
      keyResultLabel: "ON-TIME DELIVERY",
      watermark: "96× On Time",
      quote: "We went from 72% OTD to 96% in just one quarter. Our customers noticed the difference immediately.",
      name: "Priya Sharma",
      role: "Supply Chain Director · Mahindra Manufacturing",
    },
    {
      bg: "#1F2228",
      fg: "#ffffff",
      badgeTop: "3x",
      badgeBottom: "Cost",
      keyResultLabel: "COST REDUCTION",
      watermark: "34× Cost",
      quote: "The AI solver doesn't just optimize — it thinks three steps ahead. It's like having a scheduling genius on staff.",
      name: "Arjun Patel",
      role: "Plant Manager · Reliance Industries",
    },
  ];
  return (
    <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div className="text-[13px] sm:text-[14px] font-medium uppercase tracking-[0.22em] text-white/55 mb-3">CUSTOMER STORIES</div>
        <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-normal sm:font-light text-white leading-[1.05] mb-9" style={{ fontFamily: SERIF }}>
          In their own words
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative max-w-[980px] mx-auto">
          {items.map((t, i) => {
            const isLight = t.bg === "#EEECE8";
            const muted = isLight ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)";
            const subtle = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)";
            const border = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)";
            const watermarkColor = isLight ? "rgba(0,0,0,0.035)" : "rgba(255,255,255,0.025)";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl p-6 relative overflow-hidden flex flex-col cursor-pointer min-h-[340px]"
                style={{
                  background: t.bg,
                  border: `1px solid ${border}`,
                  transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = isLight
                    ? "0 20px 40px -20px rgba(0,0,0,0.25)"
                    : "0 20px 40px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = isLight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = border;
                }}
              >
                {/* sweep gradient on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: isLight
                      ? "radial-gradient(circle at 80% 0%, rgba(0,0,0,0.05), transparent 60%)"
                      : "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.06), transparent 60%)",
                  }}
                />

                {/* top: badge + key result label */}
                <div className="flex items-start gap-3 mb-3 relative z-10">
                  <div
                    className="flex flex-col items-center justify-center rounded-md px-2.5 py-1 leading-none transition-transform duration-500 group-hover:scale-105"
                    style={{ border: `1px solid ${border}`, fontFamily: "'Space Grotesk', sans-serif", color: muted }}
                  >
                    <span className="text-[13px]">{t.badgeTop}</span>
                    <span className="text-[9px]">{t.badgeBottom}</span>
                  </div>
                  <div className="pt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <div className="text-[10px]" style={{ color: muted }}>Key Result :</div>
                    <div className="text-[10px] tracking-[0.12em]" style={{ color: muted }}>{t.keyResultLabel}</div>
                  </div>
                </div>

                {/* watermark — slides on hover */}
                <div
                  aria-hidden
                  className="absolute left-5 right-0 text-[52px] sm:text-[58px] font-light pointer-events-none whitespace-nowrap leading-none transition-all duration-700 ease-out group-hover:translate-x-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: watermarkColor, top: "70px" }}
                >
                  {t.watermark}
                </div>

                {/* quote */}
                <p
                  className="text-[14px] leading-[1.55] mt-12 mb-6 relative z-10"
                  style={{ color: t.fg, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t.quote}
                </p>

                {/* name + role */}
                <div className="mt-auto relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <div className="text-[14px] sm:text-[12px] font-semibold mb-0.5" style={{ color: t.fg }}>{t.name}</div>
                  <div className="text-[12px] sm:text-[10px] font-medium sm:font-normal" style={{ color: subtle }}>{t.role}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- Transform CTA (LIGHT) ---------- */
const TransformCTASection = () => (
  <section className="pt-24 sm:pt-28 pb-0" style={{ background: "#EAEAEA" }}>
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 text-center">
      <h2
        className="text-[34px] sm:text-[44px] md:text-[56px] leading-[1.1] mb-6"
        style={{ fontFamily: SERIF, color: "#111", letterSpacing: "-0.01em", fontWeight: 300 }}
      >
        Transform your scheduling<br />experience
      </h2>
      <p className="text-[13px] mb-10" style={{ color: "rgba(0,0,0,0.65)" }}>
        Drive production efficiency and accelerate delivery with Carbynetech.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center pb-24 sm:pb-28">
        <a
          href="/contact"

          className="px-9 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors text-[#1a1a1a] hover:bg-black hover:!text-white"
          style={{ border: "1px solid rgba(0,0,0,0.35)" }}
        >
          Contact Us
        </a>
        <a
          href="#"
          className="px-9 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors text-[#1a1a1a] hover:bg-black hover:!text-white"
          style={{ border: "1px solid rgba(0,0,0,0.35)" }}
        >
          Explore More
        </a>
      </div>
    </div>

    {/* dark bottom bar — straddles CTA bg and footer */}
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 relative" style={{ marginBottom: "-70px" }}>
      <div
        className="rounded-2xl px-7 sm:px-10 py-7 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 text-left relative z-10"
        style={{ background: "#1A1A1A" }}
      >
        <div>
          <div className="text-[20px] sm:text-[22px] text-white mb-1.5 font-medium sm:font-light" style={{ fontFamily: SERIF }}>
            Transform your production visibility
          </div>
          <div className="text-[11px] text-white/55">
            Drive accountability and eliminate material waste with CarbyneTech.
          </div>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <a
            href="#"
            className="px-6 py-3 text-[12px] font-medium rounded-full transition-transform hover:scale-105"
            style={{ background: "#fff", color: "#111" }}
          >
            Book a Consultant
          </a>
          <a href="#" className="text-[12px] text-white/85 hover:text-white inline-flex items-center gap-1.5">
            Explorer Services <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FactoryFiniteScheduling = () => (
  <div className="min-h-screen w-full" style={{ background: PANEL, fontFamily: "'Space Grotesk', sans-serif" }}>
    <div className="mx-auto w-full max-w-[1280px] overflow-hidden" style={{ background: PANEL }}>
      <Navbar />
      <HeroSection />
      <WhyItMattersSection />
      <SchedulingEngineSection />
      <ComplexitySection />
      <SolversSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <TransformCTASection />
      <div className="pt-24 sm:pt-28" style={{ background: "#0a0a0a" }}>
        <FooterSection />
      </div>
    </div>
  </div>
);

export default FactoryFiniteScheduling;
