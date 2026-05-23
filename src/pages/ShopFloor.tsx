import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";
import {
  ArrowUpRight,
  Activity,
  Boxes,
  FileCheck2,
  Gauge,
  Radio,
  Zap,
  Shield,
  BarChart2,
  FileCheck,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/shopfloor-hero-bg.jpg";
import dashboardImg from "@/assets/shopfloor-dashboard.png";

const SERIF = "'Cormorant', 'Cormorant Garamond', serif";
const PANEL = "#060604";
const TEXT_DIM = "#636363";
const DASHBOARD_TEXT = "#D7D7D7";
const ease = [0.25, 0.46, 0.45, 0.94] as const;

/* ===================== HERO ===================== */
const HeroSection = () => (
  <section
    className="relative min-h-[620px] sm:min-h-[700px] flex items-center overflow-hidden"
    style={{ background: PANEL }}
  >
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(6,6,4,0.95) 0%, rgba(6,6,4,0.7) 45%, rgba(6,6,4,0.3) 100%)",
      }}
    />
    <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pt-32 sm:pt-36 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-wrap items-center gap-2"
      >
        <span
          className="uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            lineHeight: "20px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          COMPLETE PLANT VISIBILITY
        </span>
        <span className="text-white/30">·</span>
        <span
          className="uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            lineHeight: "20px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          REAL-TIME LOSS DETECTION
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[48px] sm:text-[68px] md:text-[84px] font-normal leading-[1.05] mb-6 max-w-3xl text-white"
        style={{ fontFamily: SERIF, letterSpacing: "-0.01em" }}
      >
        Every factory leaks.
        <br />
        We find where.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-[16px] sm:text-[17px] max-w-xl leading-relaxed text-white/70 mb-8 font-normal"
      >
        Real-time material and process tracking across every production line, every zone,
        every shift — so you can see exactly where yield, time, and money disappear.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="grid grid-cols-3 gap-6 sm:gap-8 max-w-md"
      >
        {[
          { v: "5%", l: "MATERIAL SAVINGS" },
          { v: "10×", l: "FACTORIES" },
          { v: "98%", l: "UPTIME" },
        ].map((s) => (
          <div key={s.l}>
            <div
              className="text-[32px] sm:text-[36px] font-normal text-white"
              style={{ fontFamily: SERIF }}
            >
              {s.v}
            </div>
            <div className="text-[11px] sm:text-[12px] text-white/60 uppercase tracking-[0.16em] mt-1 font-medium">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ===================== BUILT FOR OPS / DESIGNED FOR ACCOUNTABILITY ===================== */
const AccountabilitySection = () => {
  const rows = [
    {
      n: "01",
      t: "Granular Loss Intelligence",
      d: "Zone, shift, and material stream insights for targeted process improvements and clear operational accountability across every production run.",
    },
    {
      n: "02",
      t: "Trend-Based Efficiency Tracking",
      d: "Daily, weekly, and monthly trend reports benchmarking actual performance against recipe expectations across every run and shift window.",
    },
    {
      n: "03",
      t: "Real-Time Loss Alerts",
      d: "Automated alerts for material losses and overdose events — enabling supervisor intervention before waste compounds across the batch.",
    },
  ];
  return (
    <section className="py-14 sm:py-20" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div
          className="block uppercase mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            lineHeight: "20px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          PLATFORM CAPABILITIES
        </div>
        <h2
          className="text-[36px] sm:text-[50px] md:text-[58px] font-normal text-white leading-[1.05] mb-6"
          style={{ fontFamily: SERIF, letterSpacing: "-0.005em" }}
        >
          Built for operations.
          <br />
          Designed for accountability.
        </h2>
        <p
          className="text-[16px] sm:text-[17px] mb-10 sm:mb-14 max-w-2xl leading-relaxed font-normal"
          style={{ color: "#9a9a98", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          InventIQ is an AI-powered inventory platform built for SAP manufacturers.
          <br className="hidden sm:block" />
          Four steps. Fully autonomous. Fully auditable.
        </p>

        <div className="flex flex-col" style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          {rows.map((r, i) => (
            <motion.div
              key={r.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="group grid grid-cols-1 sm:grid-cols-[140px_1fr_1.4fr] items-start gap-5 sm:gap-10 py-8 sm:py-11 transition-colors duration-500"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div className="flex items-baseline gap-2 sm:contents">
                <span
                  className="text-[28px] sm:text-[67px] font-light leading-none text-white sm:text-[#212121] sm:group-hover:text-white transition-colors duration-700 ease-out"
                  style={{ fontFamily: SERIF }}
                >
                  {r.n}
                </span>
                <span
                  className="text-[24px] sm:text-[26px] md:text-[28px] font-normal leading-snug text-white"
                  style={{ fontFamily: SERIF }}
                >
                  {r.t}
                </span>
              </div>
              <p
                className="text-[15px] sm:text-[15px] md:text-[16px] leading-[1.7] max-w-[560px] font-normal transition-colors duration-700 ease-out text-white/90 group-hover:text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {r.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ===================== WHERE BUDGET IS LOST (4-card grid) ===================== */
const MaterialLossSection = () => {
  const items = [
    {
      n: "01",
      t: "No Real-Time Tracking",
      d: "Consumption invisible until shift-end reconciliation.",
    },
    {
      n: "02",
      t: "Manual Reconciliation",
      d: "Hours of delay and systematic inaccuracies.",
    },
    {
      n: "03",
      t: "Siloed Data Sources",
      d: "Historian, SCADA, and ERP never unified.",
    },
    {
      n: "04",
      t: "Late Loss Detection",
      d: "Waste events identified only after the fact.",
    },
  ];
  return (
    <section className="py-16 sm:py-24" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10">
        <div
          className="block uppercase mb-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "20px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          OPERATIONAL CHALLENGES
        </div>
        <h2
          className="text-[32px] sm:text-[44px] md:text-[52px] font-normal text-white leading-[1.05] mb-12 sm:mb-16"
          style={{ fontFamily: SERIF, letterSpacing: "-0.005em" }}
        >
          Where your material budget is being lost
        </h2>

        {/* Timeline */}
        <div className="relative">
          <div
            className="hidden sm:block absolute left-0 right-0 top-0"
            style={{ height: "1px", background: "rgba(255,255,255,0.12)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-0">
            {items.map((it, i) => (
              <motion.div
                key={it.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="group relative pt-2 sm:pt-6 pb-0 px-0 sm:px-6 lg:px-8 transition-colors duration-500 sm:[border-left:1px_solid_rgba(255,255,255,0.10)] sm:first:[border-left:none]"
              >
                <span
                  className="hidden sm:block absolute -top-[5px] left-5 sm:left-6 lg:left-8 transition-all duration-500 group-hover:bg-white group-hover:border-white"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.35)",
                    background: PANEL,
                  }}
                />

                <div
                  className="text-[56px] sm:text-[72px] font-light leading-none mb-5 transition-all duration-500 ease-out text-[#2a2a26] group-hover:text-white origin-left group-hover:scale-[1.08]"
                  style={{ fontFamily: SERIF }}
                >
                  {it.n}
                </div>

                <div
                  className="text-[20px] sm:text-[22px] mb-2.5 text-white font-normal leading-snug transition-transform duration-500 ease-out origin-left group-hover:scale-[1.06]"
                  style={{ fontFamily: SERIF }}
                >
                  {it.t}
                </div>
                <p
                  className="text-[19px] sm:text-[17px] md:text-[18px] leading-[1.6] max-w-none sm:max-w-[260px] font-medium transition-all duration-500 ease-out text-white/90 group-hover:text-white origin-left group-hover:scale-[1.04]"
                  style={{ fontFamily: SERIF }}
                >
                  {it.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== FROM FACTORY FLOOR TO LOSS INTELLIGENCE ===================== */
const StatStripSection = () => {
  const items = [
    {
      icon: Activity,
      title: "Data Capture",
      desc: "Live reads from historians, PLCs, SCADA, and IoT sensors at every production zone.",
    },
    {
      icon: Zap,
      title: "Tag & Recipe Validation",
      desc: "Multi-layer data quality checks — tags matched against recipe-linked material expectations.",
    },
    {
      icon: Shield,
      title: "Zone-Wise Balancing",
      desc: "Zone reconciliation with full inflow and outflow accounting — no dead zones, no blind spots.",
    },
    {
      icon: BarChart2,
      title: "Gross Error Detection",
      desc: "Statistical algorithms flag sensor faults, process anomalies, and overdose events in real time.",
    },
    {
      icon: FileCheck,
      title: "Loss Analytics & Action",
      desc: "Shift, daily, weekly variance reports with zone drill-down and ERP write-back.",
    },
  ];
  return (
    <section className="py-20 sm:py-24" style={{ background: "#0E0E0E" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10 text-center">
        <div
          className="block uppercase mb-5 text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          HOW IT WORKS
        </div>
        <h2
          className="text-[32px] sm:text-[44px] md:text-[52px] font-normal text-white leading-[1.1] mb-16 sm:mb-20 max-w-4xl mx-auto"
          style={{ fontFamily: SERIF }}
        >
          From factory floor data to actionable loss intelligence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-4 sm:gap-x-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                className="group flex flex-col items-center text-center px-2 cursor-default"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="text-[20px] sm:text-[22px] font-normal text-white mb-3 leading-tight"
                  style={{ fontFamily: SERIF }}
                >
                  {it.title}
                </h3>
                <p
                  className="text-[18px] sm:text-[14px] leading-relaxed max-w-none sm:max-w-[220px] font-medium"
                  style={{ color: "rgba(255,255,255,0.8)", fontFamily: SERIF }}
                >
                  {it.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        .group:hover > div:first-child {
          background-color: #272727 !important;
          border-color: #272727 !important;
        }
      `}</style>
    </section>
  );
};


/* ===================== REAL-TIME PRODUCTION TRUTH (expandable rows) ===================== */
type Row = {
  icon: typeof Activity;
  tag: string;
  t: string;
  d: string;
  badge: string;
  badgeColor: string;
};
const ProductionTruthSection = () => {
  const rows = [
    {
      icon: Gauge,
      t: "Machine-Level\nGranularity",
      d: "Every machine, every zone — monitored continuously with sub-minute resolution. No manual data entry.",
      badge: "Auto-tracked",
      sub: "PRODUCTION",
      badgeColor: "#7AB8A1",
    },
    {
      icon: Activity,
      t: "Real-Time\nOEE Figures",
      d: "Availability, performance, quality — calculated from actual production data, not self-reported numbers.",
      badge: "Verified",
      sub: "OEE METRICS",
      badgeColor: "#E0B872",
    },
    {
      icon: Users,
      t: "Shift-Level\nAccountability",
      d: "Every variance attributed to a shift, a line, a person. When losses happen, everyone knows.",
      badge: "Real-time",
      sub: "LOSS ALERTS",
      badgeColor: "#7AA1D8",
    },
    {
      icon: Radio,
      t: "Zero-Latency\nAlerts",
      d: "Instant push notifications to operators, supervisors, and plant heads — with full context and suggested actions.",
      badge: "<30s",
      sub: "ALERT LATENCY",
      badgeColor: "#D87A7A",
    },
  ];
  return (
    <section className="py-14 sm:py-20" style={{ background: "#060604" }}>
    <div className="mx-auto max-w-[1120px] px-5 sm:px-6 md:px-10">
        <div
          className="text-center block uppercase mb-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          CAPABILITIES
        </div>
        <h2
          className="text-[34px] sm:text-[44px] md:text-[56px] font-normal text-white leading-[1.1] mb-12 text-center"
          style={{ fontFamily: SERIF }}
        >
          Real-time Production Truth
        </h2>

        <div className="flex flex-col gap-2.5">
          {rows.map((r, i) => (
            <motion.div
              key={r.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-xl transition-colors duration-300"
              style={{
                background: "#0E0E0E",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#181818")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0E0E0E")}
            >
              <div className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_1.5fr_auto] items-center gap-3 sm:gap-6 px-4 sm:px-5 pt-4 pb-1 sm:py-5">
                <span
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: "#0E0E0E",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <r.icon size={14} strokeWidth={1.4} className="text-white/70" />
                </span>
                <div
                  className="min-w-0 break-words text-[18px] sm:text-[21px] text-white font-normal leading-[1.4] whitespace-pre-line sm:min-h-[48px] flex items-center"
                  style={{ fontFamily: SERIF }}
                >
                  {r.t}
                </div>
                <p
                  className="hidden sm:block min-w-0 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.6] font-medium"
                  style={{ fontFamily: SERIF, color: "#bcbcba" }}
                >
                  {r.d}
                </p>
                <div className="text-right shrink-0">
                  <div
                    className="text-[17px] sm:text-[19px] font-normal"
                    style={{ fontFamily: SERIF, color: r.badgeColor }}
                  >
                    {r.badge}
                  </div>
                  <div
                    className="text-[10px] sm:text-[10px] uppercase tracking-[0.2em] mt-0.5 font-medium"
                    style={{ color: TEXT_DIM }}
                  >
                    {r.sub}
                  </div>
                </div>
              </div>
              <p
                className="sm:hidden text-[16px] leading-[1.55] px-4 pb-4 font-medium break-words"
                style={{ fontFamily: SERIF, color: "#bcbcba" }}
              >
                {r.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== EVERY ZONE, EVERY VARIANCE (dashboard) ===================== */
const ZoneViewSection = () => {
  const stats = [
    { v: "05", l: "Zones Monitored" },
    { v: "12K+", l: "Data Points / Hr" },
    { v: "<2s", l: "Avg Response" },
    { v: "99.97%", l: "Uptime" },
  ];
  return (
    <section className="py-16 sm:py-20" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 md:px-10">
        <div
          className="block uppercase mb-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          LIVE DASHBOARD
        </div>
        <h2
          className="text-[32px] sm:text-[44px] md:text-[56px] font-normal text-white leading-[1.1] mb-12"
          style={{ fontFamily: SERIF, letterSpacing: "-0.005em" }}
        >
          Every Zone. Every Variance. One View.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-sm"
          >
            <p className="text-[18px] sm:text-[19px] md:text-[20px] mb-10 leading-relaxed font-medium" style={{ color: "#b8b8b6", fontFamily: SERIF }}>
              From high-level KPIs to granular zone-level flow analysis — everything your operations team needs, unified in real time.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((s) => (
                <div key={s.l} className="text-center sm:text-left">
                  <div
                    className="text-[42px] sm:text-[50px] font-normal leading-none mb-2"
                    style={{ fontFamily: SERIF, color: DASHBOARD_TEXT }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="text-[15px] sm:text-[16px] font-normal"
                    style={{ color: "#9a9a98", fontFamily: SERIF }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="relative rounded-xl overflow-hidden w-full max-w-[520px]"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
              background: "#0A0A0A",
              color: DASHBOARD_TEXT,
            }}
          >
            <img
              src={dashboardImg}
              alt="Shopfloor production accounting dashboard showing efficiency, loss volume, recovery and alerts"
              className="block w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ===================== OUTCOMES THAT REACH THE P&L ===================== */
const OutcomesSection = () => {
  const items = [
    {
      tag: "Real-time",
      sub: "INTERVENTION WINDOW",
      t: "Overdose & Waste Alerts",
      d: "Intervene before waste accumulates across a batch — protect yield at the point of action.",
    },
    {
      tag: "Zone-level",
      sub: "DRILL-DOWN",
      t: "Loss Distribution Visibility",
      d: "Pinpoint which zone or material stream drives inefficiency — targeted priorities.",
    },
    {
      tag: "3 layers",
      sub: "OPERATOR → PLANNER → CXO",
      t: "Decision-Ready Dashboards",
      d: "Operational decisions at the right level, at the right time — built for planners.",
    },
  ];
  return (
    <section className="py-10 sm:py-14" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div
          className="block uppercase mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          BUSINESS VALUE
        </div>
        <h2
          className="text-[32px] sm:text-[44px] md:text-[52px] font-normal text-white leading-[1.1] mb-10"
          style={{ fontFamily: SERIF, letterSpacing: "-0.005em" }}
        >
          Outcomes that reach the P&amp;L
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.6fr] gap-8 lg:gap-14">
          {/* LEFT: Icon + headline + stat */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
              style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Zap size={14} strokeWidth={1.4} className="text-white/70" />
            </div>
            <div
              className="text-[20px] sm:text-[24px] text-white mb-2.5 font-normal leading-snug"
              style={{ fontFamily: SERIF }}
            >
              Resource Planning Clarity
            </div>
            <p className="text-[17px] sm:text-[15px] mb-10 leading-relaxed max-w-xs font-medium sm:font-normal" style={{ color: "#b8b8b6", fontFamily: SERIF }}>
              Right-size raw material orders — eliminate over-purchasing from uncertainty buffers.
            </p>
            <div
              className="text-[34px] sm:text-[42px] font-normal text-white leading-none mb-2"
              style={{ fontFamily: SERIF }}
            >
              ~18%
            </div>
            <div
              className="text-[12px] uppercase tracking-[0.22em] font-medium"
              style={{ color: TEXT_DIM }}
            >
              INVENTORY REDUCTION
            </div>
          </motion.div>

          {/* RIGHT: rows */}
          <div className="flex flex-col">
            {items.map((r, i) => (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group grid grid-cols-[140px_1fr] gap-6 sm:gap-10 py-5 sm:py-6 transition-colors duration-300 hover:bg-white/[0.03]"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)", WebkitTapHighlightColor: "transparent" }}
              >
                <div className="text-right pr-5" style={{ borderRight: "1px solid rgba(255,255,255,0.10)", WebkitTapHighlightColor: "transparent" }}>
                  <div
                    className="text-[19px] sm:text-[22px] text-white font-normal leading-tight mb-1.5 transition-all duration-500 ease-out group-hover:scale-[1.06] origin-right"
                    style={{ fontFamily: SERIF }}
                  >
                    {r.tag}
                  </div>
                  <div
                    className="text-[11px] uppercase tracking-[0.22em] font-medium"
                    style={{ color: TEXT_DIM }}
                  >
                    {r.sub}
                  </div>
                </div>
                <div>
                  <div
                    className="text-[19px] sm:text-[20px] text-white font-normal leading-snug mb-2 transition-all duration-500 ease-out group-hover:scale-[1.04] origin-left"
                    style={{ fontFamily: SERIF }}
                  >
                    {r.t}
                  </div>
                  <p
                    className="text-[17px] sm:text-[15px] leading-[1.6] max-w-[520px] font-medium sm:font-normal transition-colors duration-500 ease-out group-hover:text-white"
                    style={{ color: "#c4c4c2", fontFamily: SERIF }}
                  >
                    {r.d}
                  </p>
                </div>
              </motion.div>
            ))}
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== MEASURABLE IMPACT ACROSS EVERY METRIC ===================== */
const ImpactStripSection = () => {
  const stats = [
    {
      v: "05",
      label: "RAW MATERIAL\nCONSUMPTION REDUCTION",
      d: "Excess consumption eliminated vs. baseline",
    },
    {
      v: "98%",
      label: "REAL-TIME PRODUCTION\nVISIBILITY",
      d: "Of production zones covered by live sensor feeds",
    },
    {
      v: "120",
      label: "ALERTS GENERATED",
      d: "Material loss and variance alerts actioned per cycle",
    },
    {
      v: "10×",
      label: "RECONCILIATION SPEED",
      d: "Faster than manual shift-end methods",
    },
  ];
  return (
    <section className="py-16 sm:py-20" style={{ background: "#0A0A07" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10 text-center">
        <div
          className="block uppercase mb-5 text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          ACHIEVED RESULTS
        </div>
        <h2
          className="text-[34px] sm:text-[44px] md:text-[56px] font-normal text-white leading-[1.15] mb-16 max-w-4xl mx-auto"
          style={{ fontFamily: SERIF, letterSpacing: "-0.005em" }}
        >
          Measurable impact across every metric
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-10 max-w-5xl mx-auto mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="flex flex-col items-center text-center px-2"
            >
              <div
                className="text-[52px] sm:text-[68px] font-normal text-white leading-none mb-5"
                style={{ fontFamily: SERIF }}
              >
                {s.v}
              </div>
              <div
                className="text-[12px] sm:text-[12px] uppercase tracking-[0.22em] mb-4 whitespace-pre-line leading-[1.5] font-medium"
                style={{ color: "#9a9a98" }}
              >
                {s.label}
              </div>
              <p
                className="hidden sm:block text-[15px] sm:text-[16px] font-normal leading-snug max-w-[220px]"
                style={{ fontFamily: SERIF, color: "rgba(255,255,255,0.9)" }}
              >
                {s.d}
              </p>
            </motion.div>
          ))}
        </div>
        <div
          className="pt-8 max-w-4xl mx-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="uppercase text-[12px] sm:text-[13px] tracking-[0.28em] font-medium"
            style={{ color: "#9a9a98", fontFamily: "'Inter', sans-serif" }}
          >
            "Real-time data. Intelligent processes. Deeper insights for improved operational success."
          </p>
        </div>
      </div>
    </section>
  );
};

/* ===================== CONNECTS TO ANY SYSTEM ===================== */
const ConnectorsSection = () => {
  const cols = [
    {
      title: "Data Sources",
      accent: "#7AB8A1",
      items: ["OSIsoft PI", "Aspen IP21", "PLC / SCADA", "DCS", "Modbus RTU/TCP"],
    },
    {
      title: "Sensor Types",
      accent: "#E0B872",
      items: ["Load Sensors", "Flow Meters", "Level Sensors", "Counters", "Valves"],
    },
    {
      title: "Enterprise Systems",
      accent: "#7AA1D8",
      items: ["SAP ERP", "SAP MES", "SQL Databases", "REST APIs", "OPC-UA"],
    },
  ];
  return (
    <section className="py-14 sm:py-16" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 text-center">
        <div
          className="block uppercase mb-4 text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          INTEGRATION ARCHITECTURE
        </div>
        <h2
          className="text-[32px] sm:text-[44px] md:text-[52px] font-normal text-white leading-[1.15] mb-4 max-w-3xl mx-auto"
          style={{ fontFamily: SERIF, letterSpacing: "-0.005em" }}
        >
          Connects to virtually any system
        </h2>
        <p className="text-[18px] sm:text-[19px] md:text-[20px] mb-12 max-w-md mx-auto leading-relaxed font-medium" style={{ color: "#b8b8b6", fontFamily: SERIF }}>
          Plug-and-play integration across every layer of your industrial technology stack — from historian to ERP.
        </p>

        {(() => {
          const Card = ({ c, i, inCarousel }: { c: typeof cols[number]; i: number; inCarousel?: boolean }) => {
            const inner = (
              <div
                className={`group relative rounded-xl overflow-hidden text-center px-6 py-8 cursor-default transition-all duration-500 h-full ${
                  inCarousel ? "snap-center shrink-0 w-[82%]" : ""
                }`}
                style={{
                  background: "#0E0E0E",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#181818";
                  e.currentTarget.style.borderColor = `${c.accent}55`;
                  e.currentTarget.style.boxShadow = `0 20px 50px -20px ${c.accent}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#0E0E0E";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px]"
                  style={{ width: "30px", background: c.accent, opacity: 0.6 }}
                />
                <div className="text-[20px] sm:text-[22px] font-normal mb-5" style={{ fontFamily: SERIF, color: "#fff" }}>
                  {c.title}
                </div>
                <div className="mx-auto mb-6" style={{ width: "24px", height: "1px", background: c.accent, opacity: 0.5 }} />
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="text-[15px] sm:text-[15px] font-normal transition-all duration-400 ease-out group-hover:text-white"
                      style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
            if (inCarousel) return inner;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
                whileHover={{ y: -6 }}
              >
                {inner}
              </motion.div>
            );
          };

          const scrollerRef = useRef<HTMLDivElement>(null);
          const [active, setActive] = useState(0);
          const onScroll = () => {
            const el = scrollerRef.current;
            if (!el) return;
            const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.82));
            setActive(Math.max(0, Math.min(cols.length - 1, idx)));
          };
          const goTo = (i: number) => {
            const el = scrollerRef.current;
            if (!el) return;
            el.scrollTo({ left: i * el.clientWidth * 0.82 + i * 16, behavior: "smooth" });
          };

          return (
            <>
              {/* Mobile: horizontal snap carousel */}
              <div className="sm:hidden -mx-5">
                <div
                  ref={scrollerRef}
                  onScroll={onScroll}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 pb-3 [&::-webkit-scrollbar]:hidden"
                  style={{ scrollbarWidth: "none" }}
                >
                  {cols.map((c, i) => (
                    <Card key={c.title} c={c} i={i} inCarousel />
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {cols.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: active === i ? 20 : 6,
                        background: active === i ? "#fff" : "rgba(255,255,255,0.3)",
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Tablet/Desktop: grid */}
              <div className="hidden sm:grid max-w-[1080px] mx-auto grid-cols-3 gap-5">
                {cols.map((c, i) => (
                  <Card key={c.title} c={c} i={i} />
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </section>
  );
};

/* ===================== TESTIMONIAL CARDS ===================== */
const TestimonialsSection = () => {
  const items = [
    {
      bg: "#0F0F0F",
      fg: "#ffffff",
      quoteColor: "#D7D7D7",
      label: "COO / FACTORY MANAGER",
      watermark: "CO",
      quote:
        '"Real-time zone alerts. Shift-level accountability. Corrective action before the next batch starts — not after the quarterly review surfaces the loss."',
      name: "",
      role: "",
    },
    {
      bg: "#EEECE8",
      fg: "#1a1a1a",
      quoteColor: "#2F2F2F",
      label: "DIGITAL TRANSFORMATION MANAGER",
      watermark: "DT",
      quote:
        '"One platform integrating every sensor, historian, and ERP system. No spreadsheets. No data handoffs. No operational blind spots between systems."',
      name: "",
      role: "",
    },
    {
      bg: "#1F2228",
      fg: "#ffffff",
      quoteColor: "#D7D7D7",
      label: "CIO / IT LEADER",
      watermark: "CI",
      quote:
        '"Standards-based OPC-UA and REST connectivity. Scalable zone topology. Built-in data governance from first capture through to analytics."',
      name: "",
      role: "",
    },
  ];
  return (
    <section className="py-14 sm:py-16" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div
          className="block uppercase mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          WHO BENEFITS
        </div>
        <h2
          className="text-[32px] sm:text-[42px] md:text-[48px] font-normal text-white leading-[1.1] mb-8 max-w-3xl"
          style={{ fontFamily: SERIF }}
        >
          The right information reaching the
          <br className="hidden sm:block" />
          right decision-maker
        </h2>
        <TestimonialsGrid items={items} />
      </div>
    </section>
  );
};

const TestimonialsGrid = ({
  items,
}: {
  items: Array<{
    bg: string;
    fg: string;
    quoteColor: string;
    label: string;
    watermark: string;
    quote: string;
    name: string;
    role: string;
  }>;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
      {items.map((t, i) => {
        const isLight = t.bg === "#EEECE8";
        const muted = isLight ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)";
        const subtle = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)";
        const border = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)";
        const watermarkColor = isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.04)";
        const faded = hovered !== null && hovered !== i;
        const textOpacity = faded ? 0.22 : 1;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="rounded-2xl p-6 relative overflow-hidden flex flex-col cursor-pointer min-h-[300px]"
            style={{ background: t.bg, border: `1px solid ${border}` }}
          >
            <div
              aria-hidden
              className="absolute right-4 text-[110px] sm:text-[140px] font-light pointer-events-none whitespace-nowrap leading-none transition-opacity duration-300"
              style={{ fontFamily: SERIF, color: watermarkColor, top: 0, opacity: textOpacity }}
            >
              {t.watermark}
            </div>
            <div
              className="relative z-10 transition-opacity duration-300 mb-8"
              style={{ opacity: textOpacity }}
            >
              <span
                className="inline-flex items-center justify-center w-11 h-11 rounded-full text-[10px] font-light tracking-[0.12em]"
                style={{
                  border: `1px solid ${border}`,
                  color: muted,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {t.watermark}
              </span>
            </div>
            <div
              className="relative z-10 transition-opacity duration-300 mb-3"
              style={{ opacity: textOpacity }}
            >
              <span
                className="text-[12px] uppercase tracking-[0.22em] font-medium"
                style={{ color: muted, fontFamily: "Inter, sans-serif" }}
              >
                {t.label}
              </span>
            </div>
            <p
              className="text-[16px] sm:text-[17px] leading-[1.55] relative z-10 font-normal transition-opacity duration-300"
              style={{ color: t.quoteColor, fontFamily: SERIF, opacity: textOpacity }}
            >
              {t.quote}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

/* ===================== CTA — STOP ESTIMATING ===================== */
const ShopFloorCTASection = () => (
  <section className="pt-10 sm:pt-12 md:pt-14 pb-0" style={{ background: "#EAEAEA" }}>
    <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 text-center">
      <motion.h2
        className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.05] mb-5 sm:mb-6"
        style={{ fontFamily: SERIF, color: "#111", letterSpacing: "-0.01em", fontWeight: 300 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease }}
      >
        Stop estimating your losses.
        <br />
        Start measuring them.
      </motion.h2>
      <motion.p
        className="text-[15px] sm:text-[16px] mb-6 sm:mb-7 leading-relaxed px-2 max-w-2xl mx-auto font-normal"
        style={{ color: "rgba(0,0,0,0.75)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        In two weeks, we baseline your true yield, your real reconciliation gap, and the
        margin you can recover — using your own production data. No cost. No commitment.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pb-24 sm:pb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
        }}
      >
        {["Contact Us", "Explore More"].map((label) => (
          <motion.a
            key={label}
            href={label === "Contact Us" ? "/contact" : "#"}

            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors text-[#1a1a1a] hover:bg-black hover:!text-white text-center"
            style={{ border: "1px solid rgba(0,0,0,0.35)" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
            }}
          >
            {label}
          </motion.a>
        ))}
      </motion.div>
    </div>

    <div
      className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10 relative"
      style={{ marginBottom: "-70px" }}
    >
      <motion.div
        className="rounded-2xl px-6 sm:px-8 md:px-10 py-6 sm:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6 text-left relative z-10"
        style={{ background: "#1A1A1A" }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="min-w-0">
          <div
            className="text-[19px] sm:text-[22px] text-white mb-1.5 font-normal"
            style={{ fontFamily: SERIF }}
          >
            Works with what you already have
          </div>
          <div className="text-[13px] text-white/70 leading-relaxed font-normal">
            SAP S/4HANA · ECC 6.0 · Historians · OPC-UA · Power BI — no rip and replace.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 shrink-0 w-full md:w-auto">
          <a
            href="#"
            className="px-6 py-3 text-[13px] font-semibold rounded-full transition-transform hover:scale-105 text-center whitespace-nowrap"
            style={{ background: "#fff", color: "#111" }}
          >
            Book a Walk-through
          </a>
          <a
            href="#"
            className="text-[13px] font-medium text-white/90 hover:text-white inline-flex items-center justify-center sm:justify-start gap-1.5 whitespace-nowrap"
          >
            Explore Services <ArrowUpRight size={13} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ===================== PAGE ===================== */
type RevealVariant = "rise" | "parallax" | "zoom" | "tilt" | "slideL" | "slideR" | "blur";

const Reveal = ({
  children,
  delay = 0,
  variant = "rise",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: RevealVariant;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Scroll-linked parallax (independent of the in-view reveal)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 22, mass: 0.6 });

  const initialMap: Record<RevealVariant, Record<string, number>> = {
    rise:     { opacity: 0, y: 70 },
    parallax: { opacity: 0, y: 90 },
    zoom:     { opacity: 0, scale: 0.92, y: 40 },
    tilt:     { opacity: 0, y: 60, rotateX: 10 },
    slideL:   { opacity: 0, x: -80 },
    slideR:   { opacity: 0, x: 80 },
    blur:     { opacity: 0, y: 40, filter: "blur(14px)" as unknown as number },
  };
  const animateMap: Record<RevealVariant, Record<string, number | string>> = {
    rise:     { opacity: 1, y: 0 },
    parallax: { opacity: 1, y: 0 },
    zoom:     { opacity: 1, scale: 1, y: 0 },
    tilt:     { opacity: 1, y: 0, rotateX: 0 },
    slideL:   { opacity: 1, x: 0 },
    slideR:   { opacity: 1, x: 0 },
    blur:     { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  if (reduce) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={initialMap[variant]}
      whileInView={animateMap[variant]}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 1.05,
        delay,
        ease: [0.22, 1, 0.36, 1], // expo-out, very cinematic
      }}
      style={{
        transformPerspective: 1200,
        willChange: "transform, opacity, filter",
        ...(variant === "parallax" ? { y } : {}),
      }}
    >
      {children}
    </motion.div>
  );
};

/* Top scroll progress indicator (premium feel) */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0% 50%",
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.0) 100%)",
      }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
    />
  );
};

const ShopFloor = () => (
  <div
    className="min-h-screen w-full"
    style={{
      background: PANEL,
      fontFamily: "'Space Grotesk', sans-serif",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    <style>{`
      html, body { scrollbar-width: none; -ms-overflow-style: none; }
      html::-webkit-scrollbar, body::-webkit-scrollbar { width: 0; height: 0; display: none; }
    `}</style>
    <ScrollProgress />
    <div
      className="mx-auto w-full max-w-[1280px]"
      style={{ background: PANEL }}
    >
      <Navbar />
      <HeroSection />
      <Reveal variant="blur"><AccountabilitySection /></Reveal>
      <Reveal variant="parallax" delay={0.05}><MaterialLossSection /></Reveal>
      <Reveal variant="zoom"><StatStripSection /></Reveal>
      <Reveal variant="slideL"><ProductionTruthSection /></Reveal>
      <Reveal variant="slideR"><ZoneViewSection /></Reveal>
      <Reveal variant="tilt"><OutcomesSection /></Reveal>
      <Reveal variant="zoom"><ImpactStripSection /></Reveal>
      <Reveal variant="parallax"><ConnectorsSection /></Reveal>
      <Reveal variant="blur"><TestimonialsSection /></Reveal>
      <Reveal variant="rise"><ShopFloorCTASection /></Reveal>
      <div className="pt-24 sm:pt-28" style={{ background: "#0a0a0a" }}>
        <FooterSection />
      </div>
    </div>
  </div>
);

export default ShopFloor;
