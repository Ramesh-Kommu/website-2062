import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowUpRight, BarChart3, Beaker, Boxes,
  Database, FileCheck2, Sparkles, Truck,
  Hourglass, Globe, Link2, ShieldCheck, BrainCircuit,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/inventiq-hero-bg.jpeg";
import industryCard1 from "@/assets/inventiq-card1.png";
import industryCard2 from "@/assets/inventiq-card2.png";
import industryCard3 from "@/assets/inventiq-card3.png";
import industryCard4 from "@/assets/inventiq-card4.png";

const SERIF = "'Cormorant', 'Cormorant Garamond', serif";
const PANEL = "#060604";
const TEXT_DIM = "#636363";

/* ---------- Hero ---------- */
const HeroSection = () => (
  <section
    className="relative min-h-[620px] sm:min-h-[700px] flex items-center overflow-hidden"
    style={{ background: PANEL }}
  >
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(6,6,4,0.92) 0%, rgba(6,6,4,0.65) 45%, rgba(6,6,4,0.25) 100%)",
      }}
    />
    <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-32 sm:pt-36 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2"
      >
        <span
          className="uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "22px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          MULTI-AGENT AI
        </span>
        <span className="hidden sm:inline text-white/30">·</span>
        <span
          className="uppercase"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "22px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          SAP-NATIVE INVENTORY PLATFORM
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-[44px] sm:text-[64px] md:text-[80px] font-light leading-[1.05] mb-6 max-w-3xl text-white"
        style={{ fontFamily: SERIF, letterSpacing: "-0.01em" }}
      >
        Stop guessing.<br />
        Let AI manage your stock.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-[14px] sm:text-[15px] max-w-xl leading-relaxed text-white/55 mb-8"
      >
        InventIQ connects to your SAP system, predicts what you need, optimises stock
        across every location, and places orders automatically — so your team can focus on
        growth instead of firefighting.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl"
      >
        {[
          { v: "98.7%", l: "FILL RATE" },
          { v: "95%", l: "AUTOMATED" },
          { v: "138Cr", l: "CASH FREED" },
          { v: "12 wk", l: "TIME TO VALUE" },
        ].map((s) => (
          <div key={s.l}>
            <div
              className="text-[26px] sm:text-[30px] font-light text-white"
              style={{ fontFamily: SERIF }}
            >
              {s.v}
            </div>
            <div className="text-[14px] sm:text-[15px] text-white/45 uppercase tracking-[0.16em] mt-1">
              {s.l}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ---------- How It Works ---------- */
const HowItWorksSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const steps = [
    {
      n: "01",
      tag: "INTEGRATION",
      t: "Connect to SAP",
      d: "Reads your orders, stock, and sales history. Live integration via SAP standard connectors. No data migration.",
    },
    {
      n: "02",
      tag: "OPTIMIZATION",
      t: "Predict Demand",
      d: "AI forecasts what each product needs — even at SKU-level — using historical patterns, seasonality and feature signals.",
    },
    {
      n: "03",
      tag: "OPTIMIZATION",
      t: "Optimize Stock",
      d: "Calculates the right mix at every plant, warehouse, and store. Knows the lowest density to hit risk.",
    },
    {
      n: "04",
      tag: "AUTOMATION",
      t: "Act Automatically",
      d: "Places orders directly in SAP, 95% without needing a human. You focus on exceptions; InventIQ runs the routine.",
    },
  ];
  return (
    <section className="py-9 sm:py-10" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div
          className="block uppercase mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          HOW IT WORKS
        </div>
        <h2
          className="text-[28px] sm:text-[36px] md:text-[42px] font-light text-white leading-[1.05] mb-5"
          style={{ fontFamily: SERIF }}
        >
          Your supply chain, running itself
        </h2>
        <p className="text-[14px] sm:text-[15px] mb-7 max-w-2xl" style={{ color: TEXT_DIM }}>
          InventIQ is an AI-powered inventory platform built for SAP manufacturers.
          <br />
          Four steps. Fully autonomous. Fully auditable.
        </p>

        {/* Horizontal divider with dots that sit on the vertical column lines — hidden on mobile */}
        <div className="relative hidden md:block z-20" style={{ height: "10px" }}>
          {/* Horizontal line extends 15px past the last vertical line on the right */}
          <div
            className="absolute left-0 top-1/2 h-px -translate-y-1/2"
            style={{ width: "calc(100% + 15px)", background: "rgba(255,255,255,0.25)" }}
          />
          {[
            { pct: 25, cellIdx: 0 },
            { pct: 50, cellIdx: 1 },
            { pct: 75, cellIdx: 2 },
            { pct: 100, cellIdx: 3 },
          ].map(({ pct, cellIdx }) => {
            const isActive = hovered === cellIdx;
            return (
              <div
                key={pct}
                className="absolute w-2.5 h-2.5 rounded-full border-2 -translate-x-1/2 -translate-y-1/2 transition-colors duration-200 z-30"
                style={{
                  left: `${pct}%`,
                  top: "50%",
                  borderColor: isActive ? "#ffffff" : "rgba(255,255,255,0.75)",
                  backgroundColor: PANEL,
                }}
              />
            );
          })}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-px"
          style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
        >
          {steps.map((it, idx) => (
            <div
              key={it.t}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered((h) => (h === idx ? null : h))}
              onClick={() => setHovered((h) => (h === idx ? null : idx))}
              className={`group relative overflow-hidden px-4 pt-3 pb-4 sm:px-5 sm:pt-3 sm:pb-5 md:px-6 md:pt-3 md:pb-6 transition-all duration-500 cursor-pointer ease-out md:[&:last-child]:border-r md:[&:last-child]:border-white/10`}
              style={{ backgroundColor: PANEL }}
            >
              <div
                className="relative text-[40px] sm:text-[46px] md:text-[52px] font-light leading-none mb-4 transition-all duration-500 ease-out origin-left"
                style={{
                  fontFamily: SERIF,
                  color: hovered === idx ? "#A0FF6B" : TEXT_DIM,
                  transform: hovered === idx ? "scale(1.12) translateX(2px)" : "scale(1)",
                }}
              >
                {it.n}
              </div>
              <div
                className="relative text-[13px] sm:text-[13px] uppercase tracking-[0.18em] mb-2 transition-colors duration-500"
                style={{ color: hovered === idx ? "#A0FF6B" : TEXT_DIM }}
              >
                {it.tag}
              </div>
              <div className="relative text-[17px] sm:text-[16px] md:text-[15px] mb-3 text-white font-medium transition-all duration-500">
                {it.t}
              </div>
              <p
                className="relative text-[15px] sm:text-[14px] leading-relaxed transition-colors duration-500"
                style={{ color: hovered === idx ? "#FFFFFF" : TEXT_DIM }}
              >
                {it.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Powerful AI — Plain business language ---------- */
type CapRow = {
  n: string;
  tag: string;
  t: string;
  desc: string;
  chips: string[];
  quote: string;
  attrib: string;
};

const CapabilitiesSection = () => {
  const rows: CapRow[] = [
    {
      n: "01",
      tag: "FORECASTING",
      t: "Know What You'll Need Before You Need It",
      desc: "AI analyses sales history with context — monsoon seasonality, OEM model-year changes, festival spikes, commodity price movements. Produces an accurate demand plan for every product at every location, every week.",
      chips: [
        "Seasonal surges planned 8–10 weeks ahead",
        "Slow-moving spares handled without overstocking",
        "New product launches modelled from day one",
        "Forecast accuracy >95%",
      ],
      quote:
        "\"The monsoon surge used to catch us every year. InventIQ now flags it 10 weeks out and adjusts procurement automatically.\"",
      attrib: "— Head of Materials Planning · Tyre Manufacturer",
    },
    {
      n: "02",
      tag: "PREDICTION",
      t: "Stock the Right Place, Not Every Place",
      desc: "Most companies plan each warehouse independently. That creates phantom shortages — stock you have but in the wrong location. InventIQ looks across your entire network simultaneously and balances stock where it's actually needed.",
      chips: [
        "Eliminates over-stocking at one site while another goes short",
        "Accounts for goods in transit before ordering more",
        "Raw material, production, and distribution planned together",
      ],
      quote:
        "\"We had raw material sitting for 60 days at our main plant while our Pune facility was short. InventIQ balanced everything out.\"",
      attrib: "— VP Procurement · Auto Components",
    },
    {
      n: "03",
      tag: "AUTOMATION",
      t: "Orders That Place Themselves",
      desc: "When InventIQ decides it's time to replenish, it raises the purchase order directly in SAP — within your pre-agreed rules. Your team sees what was done, adjusts if needed, and only deals with genuine exceptions.",
      chips: [
        "Purchase orders created in SAP automatically",
        "Stock transfers triggered without manual work",
        "Every action logged with full reasoning for audit",
        "You define the guardrails — spend limits, thresholds",
      ],
      quote:
        "\"My team used to spend three hours every morning raising POs. Now InventIQ does that overnight. They arrive and the work is done.\"",
      attrib: "— GM Operations · Battery Manufacturer",
    },
    {
      n: "04",
      tag: "RISK INTELLIGENCE",
      t: "Problems Flagged Before They Happen",
      desc: "InventIQ watches your supply chain around the clock. A supplier running late, a port disruption, a demand spike — it spots these weeks in advance and gives you a specific recommendation, not just a warning.",
      chips: [
        "Supplier delay alerts with alternative sourcing options",
        "Demand spike detection with recommended response plan",
        "Seasonal build-up reminders with procurement action",
      ],
      quote:
        "\"When the port congestion hit in Q3, InventIQ had already flagged it two weeks earlier and rerouted our procurement. Our competitors scrambled for 6 weeks.\"",
      attrib: "— COO · Specialty Chemical Manufacturer",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-9 sm:py-10" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div
          className="block uppercase mb-4"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.32em",
            color: TEXT_DIM,
          }}
        >
          PLATFORM CAPABILITIES
        </div>
        <h2
          className="text-[28px] sm:text-[36px] md:text-[42px] font-light text-white leading-[1.05] mb-5"
          style={{ fontFamily: SERIF }}
        >
          Powerful AI.
          <br />
          Plain business language.
        </h2>
        <p className="text-[14px] mb-7 max-w-xl" style={{ color: TEXT_DIM }}>
          Every feature is built around one question: does this help manufacturers carry
          less stock, serve customers better, and spend less time on manual work?
        </p>

        <div className="flex flex-col">
          {rows.map((r, i) => {
            const open = openIdx === i;
            return (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setOpenIdx(open ? null : i)}
                className="group cursor-pointer transition-colors duration-500"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  background: open ? "rgba(255,255,255,0.015)" : "transparent",
                }}
              >
                {/* Header row */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-6 px-4 sm:px-5 py-4 sm:py-5">
                  <span
                    className="text-[16px] font-light shrink-0 w-6 sm:w-8 pt-0.5 sm:pt-0"
                    style={{ fontFamily: SERIF, color: TEXT_DIM }}
                  >
                    {r.n}
                  </span>
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:gap-6">
                    <span
                      className="text-[11px] sm:text-[14px] uppercase tracking-[0.18em] sm:tracking-[0.2em] sm:shrink-0 sm:w-32 mb-1 sm:mb-0"
                      style={{ color: TEXT_DIM }}
                    >
                      {r.tag}
                    </span>
                    <span
                      className="text-[20px] sm:text-[22px] md:text-[24px] text-white sm:flex-1 transition-colors leading-snug"
                      style={{ fontFamily: SERIF }}
                    >
                      {r.t}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: open ? 90 : 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="shrink-0 pt-1 sm:pt-0"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white/50 group-hover:text-white/80 transition-colors"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Expandable content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{
                    height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                    opacity: { duration: 0.35, ease: "easeOut" },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-7 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-8 md:gap-10">
                      {/* Left: description + chips */}
                      <div>
                        <p
                          className="text-[14px] leading-[1.65] mb-5"
                          style={{
                            color: "rgba(255,255,255,0.55)",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {r.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {r.chips.map((c, ci) => (
                            <motion.span
                              key={c}
                              initial={{ opacity: 0, y: 6 }}
                              animate={
                                open
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 6 }
                              }
                              transition={{
                                duration: 0.35,
                                delay: open ? 0.15 + ci * 0.05 : 0,
                                ease: "easeOut",
                              }}
                              whileHover={{ scale: 1.03, y: -2 }}
                              className="inline-flex text-[12px] sm:text-[13px] px-2.5 py-1.5 rounded-none sm:rounded-full leading-tight w-full sm:w-fit cursor-default transition-colors duration-300 hover:!bg-white/10 hover:!border-white/25 hover:!text-white"
                              style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.7)",
                                fontFamily: "'Inter', sans-serif",
                              }}
                            >
                              {c}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Right: quote */}
                      <div
                        className="md:pl-10"
                        style={{
                          borderLeft:
                            "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <p
                          className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.55] text-white/85 mb-4"
                          style={{ fontFamily: SERIF }}
                        >
                          {r.quote}
                        </p>
                        <p
                          className="text-[13px] sm:text-[14px]"
                          style={{ color: TEXT_DIM }}
                        >
                          {r.attrib}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
        </div>
      </div>
    </section>
  );
};

/* ---------- Everything Else You Need ---------- */
const EverythingElseSection = () => {
  const items = [
    {
      icon: BarChart3,
      t: "Live Dashboard",
      d: "Real-time inventory and service performance in Power BI or SAP Analytics Cloud.",
    },
    {
      icon: Hourglass,
      t: "Shelf-Life Control",
      d: "Ensures oldest stock moves first, reducing write-offs and waste for perishables.",
    },
    {
      icon: Globe,
      t: "Export Lane Management",
      d: "Manages 4–8 week ocean shipping windows, port risk, and trade policy changes.",
    },
    {
      icon: Link2,
      t: "Deep SAP Integration",
      d: "Reads and writes to SAP S/4HANA, ECC, and IBP directly. No middleware.",
    },
    {
      icon: ShieldCheck,
      t: "Full Audit Trail",
      d: "Every automated decision logged with reasoning. Complete compliance visibility.",
    },
    {
      icon: BrainCircuit,
      t: "Self-Learning AI",
      d: "Forecasts improve and safety stock self-calibrates as it learns your business.",
    },
  ];
  return (
    <section className="py-16 sm:py-20" style={{ background: "#060604" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="text-center mb-4">
          <span
            className="block uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.32em",
              color: "#6B6B63",
              textAlign: "center",
            }}
          >
            ALSO INCLUDED
          </span>
        </div>
        <h2
          className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-white leading-[1.05] mb-8 sm:mb-9 text-center"
          style={{ fontFamily: SERIF, letterSpacing: "-0.01em" }}
        >
          Everything Else You Need
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[980px] mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl p-4 transition-colors duration-300 cursor-pointer flex items-start gap-3"
              style={{
                background: "#0D0D0D",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1B1B11")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0D0D0D")}
            >
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center"
                style={{
                  background: "#161616",
                  width: 36,
                  height: 36,
                }}
              >
                <it.icon
                  size={14}
                  strokeWidth={1.5}
                  className="text-white/70 transition-transform duration-500 ease-out group-hover:rotate-[20deg]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[18px] sm:text-[19px] text-white mb-1 font-light leading-tight"
                  style={{ fontFamily: SERIF }}
                >
                  {it.t}
                </div>
                <p className="text-[14px] sm:text-[15px] leading-snug" style={{ color: "#7A7A72" }}>
                  {it.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Industry — Built for your industry ---------- */
const IndustrySection = () => {
  const industries = [
    {
      tab: "Tyre & Rubber",
      bg: industryCard1,
      title: "Zero OEM Stoppages. No Surplus.",
      desc:
        "Natural rubber sourced from a handful of suppliers, 100+ tyre variants, and OEM customers who will penalise you for a single missed delivery. InventIQ handles monsoon-driven demand swings and dual-source RM risk.",
      stats: [
        { v: "32%", l: "INVENTORY REDUCTION" },
        { v: "99%", l: "OEM FILL RATE" },
        { v: "12d", l: "RM COVER TARGET" },
      ],
    },
    {
      tab: "Battery & Energy",
      bg: industryCard2,
      title: "Shelf-life precision. EV-ready.",
      desc:
        "Electrolyte has a shelf life. Lead oxide pricing moves with the LME. EV adoption is reshaping your demand mix. InventIQ manages all three simultaneously — FEFO automation, smart forward-buying, and EV transition modelling.",
      stats: [
        { v: "22%", l: "SPOILAGE REDUCTION" },
        { v: "97%", l: "FILL RATE" },
        { v: "FEFO", l: "EXPIRY CONTROL" },
      ],
    },
    {
      tab: "Agrochem",
      bg: industryCard3,
      title: "Never miss the harvest window.",
      desc:
        "Your customers need stock precisely when the kharif or rabi season opens. InventIQ models harvest calendars, accounts for perishability, and ensures your network is built up at exactly the right time.",
      stats: [
        { v: "0", l: "MISSED SEASONS" },
        { v: "28%", l: "WASTE REDUCTION" },
        { v: "04", l: "PLANTS SYNCED" },
      ],
    },
    {
      tab: "Auto Components",
      bg: industryCard4,
      title: "4,000+ SKUs. Multiple OEMs. Delivered.",
      desc:
        "Thousands of part numbers, multiple OEM customers, plants across India. InventIQ keeps every variant stocked and every OEM call-off met, even as EV platform transitions reshape demand.",
      stats: [
        { v: "35%", l: "INVENTORY REDUCTION" },
        { v: "99%", l: "OEM OTIF" },
        { v: "05", l: "PLANTS SYNCED" },
      ],
    },
  ];

  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section className="py-9 sm:py-10" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="text-center mb-3">
          <span
            className="block uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0.32em",
              color: TEXT_DIM,
              textAlign: "center",
            }}
          >
            INDUSTRY SOLUTIONS
          </span>
        </div>
        <h2
          className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-white leading-[1.05] mb-4 text-center"
          style={{ fontFamily: SERIF }}
        >
          Built for your industry, your complexity
        </h2>
        <p className="text-[14px] mb-7 text-center max-w-xl mx-auto" style={{ color: TEXT_DIM }}>
          Pre-configured models for the industries that need it most — results faster, with less setup.
        </p>

        <div className="relative flex flex-wrap justify-center gap-2 mb-7">
          {industries.map((t, i) => (
            <button
              key={t.tab}
              onClick={() => setActive(i)}
              className="relative text-[14px] px-5 py-2 rounded-full cursor-pointer"
              style={{
                color: active === i ? "#fff" : TEXT_DIM,
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                transition: "color 0.4s ease",
              }}
            >
              {active === i && (
                <motion.span
                  layoutId="industry-tab-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "#1B1B11" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.tab}</span>
            </button>
          ))}
        </div>

        {/* Industry showcase card with bg image */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl"
              style={{
                backgroundImage: `url(${current.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
              }}
            >
              <div className="relative z-10 p-6 sm:p-8 md:p-10 max-w-2xl">
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[24px] sm:text-[28px] md:text-[32px] font-light text-white leading-tight mb-4"
                  style={{ fontFamily: SERIF }}
                >
                  {current.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[14px] sm:text-[15px] leading-relaxed mb-7 max-w-lg font-light"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {current.desc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md"
                >
                  {current.stats.map((s) => (
                    <div key={s.l}>
                      <div
                        className="text-[22px] sm:text-[30px] font-light text-white leading-none"
                        style={{ fontFamily: SERIF }}
                      >
                        {s.v}
                      </div>
                      <div
                        className="text-[10px] sm:text-[14px] uppercase tracking-[0.1em] sm:tracking-[0.2em] mt-2 font-light leading-tight break-words"
                        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif" }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/* ---------- Customer Stories ---------- */
const TestimonialsSection = () => {
  const items = [
    {
      bg: "#0F0F0F",
      fg: "#ffffff",
      quoteColor: "#D7D7D7",
      badge: "₹42Cr",
      label: "CAPITAL FREED",
      watermark: "42 Cr",
      quote:
        '"We had ₹42 Crore locked in raw material sitting for 60+ days. Within 8 months of InventIQ, cover is down to 12 days. ROI was visible in the first quarter."',
      name: "VP Supply Chain",
      role: "Tyre Manufacturer, South India",
    },
    {
      bg: "#EEECE8",
      fg: "#1a1a1a",
      quoteColor: "#2F2F2F",
      badge: "3h",
      label: "TIME SAVED DAILY",
      watermark: "3 4",
      quote:
        '"My planners used to spend three hours every morning raising POs. InventIQ does that overnight. My team arrives and the work is done — they focus on supplier strategy now."',
      name: "GM — Operations",
      role: "Battery Manufacturer, Maharashtra",
    },
    {
      bg: "#1F2228",
      fg: "#ffffff",
      quoteColor: "#D7D7D7",
      badge: "0",
      label: "MISSED SEASONS",
      watermark: "0",
      quote:
        '"We used to miss the October harvest window every two years. InventIQ flags it 10 weeks out and adjusts procurement automatically. We haven\'t missed a season since."',
      name: "Director, Supply Chain",
      role: "Agrochem Company, Gujarat",
    },
  ];
  return (
    <section className="py-9 sm:py-10 relative overflow-hidden" style={{ background: PANEL }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div
          className="block uppercase mb-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.32em",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          CUSTOMER STORIES
        </div>
        <h2
          className="text-[36px] sm:text-[46px] md:text-[56px] font-light text-white leading-[1.05] mb-6"
          style={{ fontFamily: SERIF }}
        >
          In their own words
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
    badge: string;
    label: string;
    watermark: string;
    quote: string;
    name: string;
    role: string;
  }>;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative max-w-[960px] mx-auto">
      {items.map((t, i) => {
        const isLight = t.bg === "#EEECE8";
        const muted = isLight ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.55)";
        const subtle = isLight ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)";
        const border = isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)";
        const watermarkColor = isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.03)";
        const faded = hovered !== null && hovered !== i;
        const textOpacity = faded ? 0.22 : 1;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="group rounded-2xl p-5 relative overflow-hidden flex flex-col cursor-pointer min-h-[260px]"
            style={{
              background: t.bg,
              border: `1px solid ${border}`,
              transition: "box-shadow 0.4s ease, border-color 0.4s ease",
            }}
          >
                <div className="flex items-center gap-3 mb-4 relative z-10 transition-opacity duration-300" style={{ opacity: textOpacity }}>
                  <span
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      border: `1px solid ${border}`,
                      color: t.fg,
                      fontFamily: SERIF,
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: 1,
                    }}
                  >
                    {t.badge}
                  </span>
                  <span
                    className="text-[14px] uppercase tracking-[0.18em]"
                    style={{ color: muted, fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {t.label}
                  </span>
                </div>

                <div
                  aria-hidden
                  className="absolute right-4 text-[76px] sm:text-[100px] font-light pointer-events-none whitespace-nowrap leading-none transition-opacity duration-300"
                  style={{ fontFamily: SERIF, color: watermarkColor, top: 38, opacity: textOpacity }}
                >
                  {t.watermark}
                </div>

                <p
                  className="text-[19px] sm:text-[21px] leading-[1.55] mb-5 relative z-10 font-light transition-opacity duration-300"
                  style={{ color: t.quoteColor, fontFamily: SERIF, opacity: textOpacity }}
                >
                  {t.quote}
                </p>

                <div className="mt-auto relative z-10 transition-opacity duration-300" style={{ fontFamily: "Inter, sans-serif", opacity: textOpacity }}>
                  <div className="text-[14px] font-semibold mb-0.5" style={{ color: t.fg }}>
                    {t.name}
                  </div>
                  <div className="text-[14px] font-light" style={{ color: subtle }}>
                    {t.role}
                  </div>
                </div>
              </motion.div>
            );
      })}
    </div>
  );
};

/* ---------- See InventIQ on your SAP data (LIGHT) ---------- */
const SeeInventiqCTASection = () => {
  const ease = [0.25, 0.46, 0.45, 0.94] as const;
  return (
  <section className="pt-10 sm:pt-12 md:pt-14 pb-0" style={{ background: "#EAEAEA" }}>
    <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
      <motion.h2
        className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.05] mb-5 sm:mb-6"
        style={{ fontFamily: SERIF, color: "#111", letterSpacing: "-0.01em", fontWeight: 300 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease }}
      >
        See InventIQ on
        <br />
        your SAP data
      </motion.h2>
      <motion.p
        className="text-[14px] sm:text-[15px] mb-6 sm:mb-7 leading-relaxed px-2"
        style={{ color: "rgba(0,0,0,0.65)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        In two weeks, we quantify exactly how much working capital you can free — using your own inventory data.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        No cost. No commitment.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pb-12 sm:pb-14 md:pb-16"
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

            className="w-full sm:w-auto px-8 sm:px-9 py-3.5 text-[14px] font-medium uppercase tracking-[0.22em] transition-colors text-[#1a1a1a] hover:bg-black hover:!text-white text-center"
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

    {/* dark bottom bar — straddles CTA bg and footer */}
    <div
      className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 relative"
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
            className="text-[19px] sm:text-[21px] text-white mb-1 font-light"
            style={{ fontFamily: SERIF }}
          >
            Works with what you already have
          </div>
          <div className="text-[14px] text-white/55 leading-relaxed">
            SAP S/4HANA · ECC 6.0 · IBP · Azure Cloud · Power BI — no middleware required.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 shrink-0 w-full md:w-auto">
          <a
            href="#"
            className="px-6 py-3 text-[14px] font-medium rounded-full transition-transform hover:scale-105 text-center whitespace-nowrap"
            style={{ background: "#fff", color: "#111" }}
          >
            Book a Consultant
          </a>
          <a
            href="#"
            className="text-[14px] text-white/85 hover:text-white inline-flex items-center justify-center sm:justify-start gap-1.5 whitespace-nowrap"
          >
            Explore Services <ArrowUpRight size={12} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

const Inventiq = () => (
  <div
    className="min-h-screen w-full"
    style={{ background: PANEL, fontFamily: "'Space Grotesk', sans-serif" }}
  >
    <div
      className="mx-auto w-full max-w-[1280px] overflow-hidden"
      style={{ background: PANEL }}
    >
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <EverythingElseSection />
      <IndustrySection />
      <TestimonialsSection />
      <SeeInventiqCTASection />
      <div className="pt-12 sm:pt-14" style={{ background: "#0a0a0a" }}>
        <FooterSection />
      </div>
    </div>
  </div>
);

export default Inventiq;
