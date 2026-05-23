import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import heroBg from "@/assets/sfx9/hero-bg.png";
import oeeMonitor from "@/assets/sfx9/oee-monitor.png";
import capability1 from "@/assets/sfx9/capability-1.jpeg";
import capability2 from "@/assets/sfx9/capability-2.jpeg";
import capability3 from "@/assets/sfx9/capability-3.jpeg";
import capability4 from "@/assets/sfx9/capability-4.jpeg";

const capabilities = [
  {
    tab: "Paperless From Day One",
    title: "Zero paper. Full control.",
    desc: "Every work instruction, quality form, batch record, and maintenance log is digital — eliminating paper in every sector SFX9 serves.",
    stats: [
      { value: "100%", label: "PAPER ELIMINATED" },
      { value: "78%", label: "MANUAL ENTRY CUT" },
    ],
    image: capability1,
  },
  {
    tab: "In Progress Quality",
    title: "Catch it. Before it ships.",
    desc: "Quality gates embedded in every workflow — not bolted on at the end. Mandatory checkpoints prevent defects from advancing.",
    stats: [
      { value: "0%", label: "DEFECT ESCAPE" },
      { value: "∞", label: "GATES PER ROUTE" },
    ],
    image: capability2,
  },
  {
    tab: "Real Time OEE",
    title: "See loss. Fix loss. Now.",
    desc: "Availability, Performance, and Quality captured live from every machine — giving teams the data to act before losses escalate.",
    stats: [
      { value: "<1s", label: "LATENCY" },
      { value: "6", label: "LOSS CATEGORIES" },
    ],
    image: capability3,
  },
  {
    tab: "Complete Traceability",
    title: "Every lot. Every step.",
    desc: "From raw material to finished goods — every lot, batch, and component fully traceable for recall readiness and compliance.",
    stats: [
      { value: "Min", label: "RECALL SPEED" },
      { value: "Full", label: "GENEALOGY DEPTH" },
    ],
    image: capability4,
  },
];

const SERIF = "'Cormorant', 'Cormorant Garamond', serif";
const PANEL = "#060604";

const pillars = [
  {
    n: "01",
    title: "Adaptive Manufacturing",
    desc: "Dynamic routing, recipe-driven workflows and real-time order orchestration that adapts to mix, demand and constraints.",
    tags: ["Dynamic Routing", "Recipe Management", "Order Orchestration", "WIP Tracking"],
  },
  {
    n: "02",
    title: "In-Process Quality",
    desc: "Closed-loop SPC, in-line inspection and non-conformance workflows that catch defects before they cascade downstream.",
    tags: ["SPC", "Inspection Plans", "Non-Conformance", "Defect Pareto"],
  },
  {
    n: "03",
    title: "OEE & Performance",
    desc: "Real-time OEE with availability, performance and quality decomposition — surfaced down to the asset and shift.",
    tags: ["Availability", "Performance", "Quality", "Loss Analysis"],
  },
  {
    n: "04",
    title: "Inventory & Traceability",
    desc: "Genealogy-grade traceability across raw, WIP and finished goods with full lot, batch and serial visibility.",
    tags: ["Lot / Batch", "Serial Track", "Genealogy", "Recall Ready"],
  },
  {
    n: "05",
    title: "Maintenance & Reliability",
    desc: "Condition-based maintenance, work-order automation and reliability analytics aligned with production schedules.",
    tags: ["CBM", "Work Orders", "MTBF", "Spares"],
  },
  {
    n: "06",
    title: "Energy & Sustainability",
    desc: "Energy intensity, scope-1/2 emissions and utilities consumption tracked per asset, batch and product line.",
    tags: ["Energy/Unit", "Emissions", "Utilities", "ESG Reports"],
  },
];

const industryRows = [
  { name: "Consumer Packaged Goods", category: "Food · Beverage · Personal Care", desc: "Eliminates paper batch records, enforces GMP and HACCP inline, manages CIP compliance, and maintains complete lot genealogy.", chips: ["Digital Batch Records", "CIP Scheduling", "Allergen Control", "In-Line Quality Gates"] },
  { name: "Motor Manufacturing", category: "Electric · Industrial · Servo", desc: "Captures torque, test and assembly data per unit with full serialisation and energy analytics across every line.", chips: ["Torque Verification", "Test Result Capture", "Unit Serialisation", "Energy Analytics"] },
  { name: "Tyre Manufacturing", category: "OTR · Passenger · Commercial", desc: "Enforces cure cycle compliance, monitors uniformity and kWh per tonne, and traces every quality deviation to root cause.", chips: ["Cure Cycle Compliance", "Uniformity Checks", "kWh/t Monitoring", "Quality Deviations"] },
  { name: "Equipment Manufacturing", category: "Capital Equipment · Industrial Machinery", desc: "Manages project-based work orders, milestone inspections, as-built documentation and end-to-end BOM traceability.", chips: ["Project Work Orders", "Milestone Inspection", "As-Built Docs", "BOM Traceability"] },
  { name: "Auto Components", category: "Tier 1 · Tier 2 · EV Parts", desc: "Delivers IATF-grade quality gates, SMED-driven changeovers, component traceability and live SPC monitoring.", chips: ["IATF Quality Gates", "SMED Changeover", "Component Traceability", "SPC Monitoring"] },
];

const platformLayers = [
  { n: "01", title: "Maintenance & Reliability", chips: ["SAP"] },
  { n: "02", title: "SFX9 MES Core", chips: ["Paperless", "In-Process QC", "OEE", "Traceability", "Maintenance"] },
  { n: "03", title: "Operator Interface", chips: ["Touchscreen Terminals", "Dashboards", "Alerts", "Shift Reports"] },
  { n: "04", title: "Automation / SCADA", chips: ["PLC / SCADA", "OPC-UA", "Modbus", "Machine APIs"] },
  { n: "05", title: "Shop Floor", chips: ["Machines", "Sensors", "Barcode / RFID", "Conveyors", "Energy Meters"] },
];

const testimonials = [
  {
    bg: "#0F0F0F",
    fg: "#ffffff",
    badgeTop: "4S",
    badgeBottom: "Trace",
    keyResultLabel: "TRACE TIME",
    watermark: "4S Trace",
    quote:
      "We went from 14-day batch traceability to 4 seconds. Our auditors thought the system was faked.",
    name: "VP Operations",
    role: "Global Tire Manufacturing Group",
  },
  {
    bg: "#EEECE8",
    fg: "#1a1a1a",
    badgeTop: "0",
    keyResultLabel: "DEFECT ESCAPES",
    quote:
      "SFX9 didn't just digitise our forms — it rewired how our people think about quality. Defect escapes dropped to zero in 11 weeks.",
    name: "Head of Quality",
    role: "Automotive Manufacturing Enterprise",
  },
  {
    bg: "#1F2228",
    fg: "#ffffff",
    badgeTop: "7",
    keyResultLabel: "PLANTS APPROVED",
    quote:
      "The ROI conversation lasted 3 minutes. The board approved the rollout to all 7 plants before the pilot even ended.",
    name: "Group CTO",
    role: "Multi-Plant Food Manufacturing Company",
  },
];

export default function Sfx9Mes() {
  // Sticky monitor only until end of pillars section
  const pillarsRef = useRef<HTMLDivElement>(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = pillarsRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setStickyVisible(r.top < window.innerHeight * 0.35 && r.bottom > window.innerHeight * 0.4);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", backgroundColor: "#060604" }}>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E]/55 via-[#0B0C0E]/40 to-[#0B0C0E]" />
        </div>
        <div className="relative mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-32 sm:pt-44 md:pt-56 pb-14 sm:pb-24 md:pb-36">
          <motion.p
            className="uppercase tracking-[0.32em] text-white/65 text-[11px] sm:text-[12px] font-medium mb-4 sm:mb-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            SFX9 — Manufacturing Execution System
          </motion.p>
          <motion.h1
            className="text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
            initial={{ opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            The intelligent
            <br />
            shop floor platform
          </motion.h1>
          <motion.p
            className="mt-5 max-w-[560px] text-white/80 text-[15px] sm:text-[17px] leading-[1.55] font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Unifies your entire production floor into one realtime intelligence layer — orchestrating
            paper, asset, lot, quality, energy, recipe, operator, schedule, machine and data.
          </motion.p>
          <motion.div
            className="mt-8 sm:mt-12 flex flex-wrap gap-x-8 sm:gap-x-14 gap-y-4"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } } }}
          >
            {[
              { v: "06+", l: "Manufacturing modes" },
              { v: "100%", l: "Realtime visibility" },
              { v: "05x", l: "Faster issue resolution" },
              { v: "1.x", l: "Days to value" },
              { v: "+78%", l: "OEE uplift" },
            ].map((s) => (
              <motion.div
                key={s.l}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-white text-[34px] sm:text-[44px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                  {s.v}
                </div>
                <div className="text-white/60 text-[11px] sm:text-[12px] uppercase tracking-[0.18em] mt-1 font-medium">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SIX PILLARS — sticky monitor on right */}
      <section ref={pillarsRef} className="relative py-7 sm:py-12">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-7 lg:gap-16">
          <div>
            <div className="lg:sticky lg:top-0 lg:z-20 lg:bg-[#060604] lg:pt-32 lg:pb-6">
              <ScrollReveal animation="fadeUp">
                <p className="uppercase tracking-[0.32em] text-white/60 text-[11px] sm:text-[12px] font-medium mb-3">SFX9 — 01</p>
                <h2
                  className="text-white"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.1 }}
                >
                  Six pillars of
                  <br />
                  SFX9 intelligence
                </h2>
                <p className="mt-4 max-w-[460px] text-white/75 text-[15px] sm:text-[16px] leading-[1.6]">
                  Every pillar is a primitive within the platform — composable, governed and tuned to the
                  way your plants actually run.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-7 sm:mt-12 flex flex-col gap-5 sm:gap-8">
              {pillars.map((p) => (
                <ScrollReveal key={p.n} animation="fadeUp">
                  <div className="border-t border-white/10 pt-5">
                    <div className="flex items-baseline gap-4">
                      <span className="text-white/55 text-[13px] tracking-[0.2em] font-medium">{p.n}</span>
                      <h3 className="text-white text-[20px] sm:text-[24px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 max-w-[520px] text-white/75 text-[14px] sm:text-[15px] leading-[1.6]">
                      {p.desc}
                    </p>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/20 px-3 py-1 text-[12px] sm:text-[12.5px] text-white/85 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Sticky monitor column — desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-0 pt-32">
              <div className="rounded-[18px] overflow-hidden">
                <img src={oeeMonitor} alt="SFX9 OEE dashboard" className="w-full h-auto block" />
              </div>
              <p className="mt-4 text-white/40 text-[11px] uppercase tracking-[0.22em]">
                Live OEE • Realtime Quality • Reject Quality
              </p>
            </div>
          </div>

          {/* Mobile inline image */}
          <div className="lg:hidden">
            <div className="rounded-[14px] overflow-hidden">
              <img src={oeeMonitor} alt="SFX9 OEE dashboard" className="w-full h-auto block" />
            </div>
          </div>
        </div>

        {/* Floating sticky preview while scrolling pillars (mobile bottom) */}
        {/* Removed — using natural sticky in column above */}
        {stickyVisible && null}
      </section>

      {/* PRECISION-CONFIGURED */}
      <section className="py-7 sm:py-12 ">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp">
            <p className="uppercase tracking-[0.32em] text-white/60 text-[11px] sm:text-[12px] font-medium mb-3">Industries</p>
            <h2 className="text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1 }}>
              Precision-configured for your world
            </h2>
            <p className="mt-4 max-w-[640px] text-white/75 text-[15px] sm:text-[16px] leading-[1.6]">
              Not a generic MES. Each deployment is tailored to your exact process flows,
              compliance requirements, and KPI priorities.
            </p>
          </ScrollReveal>

          <div className="mt-7 sm:mt-12">
            {industryRows.map((row, i) => (
              <ScrollReveal key={row.name} animation="fadeUp">
                <div
                  className="group grid grid-cols-1 md:grid-cols-[1.1fr_1.5fr_1.6fr] gap-3 md:gap-8 items-start py-4 sm:py-6 transition-colors duration-300 hover:bg-white/[0.02]"
                  style={i === 0 ? undefined : { borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="text-white text-[20px] sm:text-[22px]" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    {row.name}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif" }}>
                    <div className="uppercase tracking-[0.22em] text-white/70 text-[11.5px] sm:text-[12px] font-medium">
                      {row.category}
                    </div>
                    <div className="grid transition-all duration-500 ease-out grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3">
                      <div className="overflow-hidden">
                        <p className="text-white/70 text-[13.5px] sm:text-[14px] leading-[1.6] max-w-[360px]">
                          {row.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {row.chips.map((c) => (
                      <span key={c} className="rounded-full border border-white/20 px-3 py-1.5 text-[12px] sm:text-[12.5px] text-white/85 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES THAT CROSS EVERY INDUSTRY — 4 stacked tabs */}
      <section className="py-7 sm:py-12 ">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp">
            <p className="uppercase tracking-[0.32em] text-white/60 text-[11px] sm:text-[12px] font-medium mb-3">THE COMMON THREAD</p>
            <h2 className="text-white" style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1 }}>
              Capabilities that cross every industry
            </h2>
          </ScrollReveal>

          <div className="mt-7 sm:mt-10">
            <CapabilityTabs />
          </div>
        </div>
      </section>

      {/* EVERY METRIC THAT MATTERS */}
      <section className="py-7 sm:py-12 ">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <KpiIntelligence />
        </div>
      </section>

      {/* CONNECTED PLATFORM, LAYER BY LAYER */}
      <section className="py-7 sm:py-12 " style={{ background: "#000" }}>
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-12">
          <ScrollReveal animation="fadeUp">
            <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-white/70 mb-3">
              ARCHITECTURE
            </div>
            <h2
              className="text-white"
              style={{
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: "clamp(28px, 3.6vw, 46px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              A connected platform,
              <br />
              layer by layer
            </h2>
            <p className="mt-4 max-w-[560px] text-white/75 text-[15px] sm:text-[16px] leading-[1.6]">
              Five connected layers from machine PLCs to enterprise ERP — designed for
              seamless integration into your existing technology landscape.
            </p>
          </ScrollReveal>

          <div className="mt-7 sm:mt-16">
            {platformLayers.map((l) => (
              <ScrollReveal key={l.n} animation="fadeUp">
                <div className="group relative py-4 sm:py-7">
                  <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[100px_1fr_auto] items-center gap-1 sm:gap-10">
                    <span
                      className="text-white/70 text-[16px] sm:text-[20px] leading-none tracking-[0.05em]"
                      style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontVariantNumeric: "oldstyle-nums", fontWeight: 500 }}
                    >
                      {l.n}
                    </span>
                    <div
                      className="text-white text-[16px] sm:text-[20px] leading-none sm:leading-normal transition-all duration-300 sm:group-hover:text-[22px]"
                      style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 500, letterSpacing: "0.005em" }}
                    >
                      {l.title}
                    </div>
                    <div className="hidden sm:flex flex-wrap justify-end gap-2 col-start-3">
                      {l.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-white/20 px-3.5 py-1.5 text-[12.5px] text-white/75 font-medium transition-all duration-300 group-hover:border-white/60 group-hover:text-white"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="flex sm:hidden flex-wrap gap-1.5 col-span-2 mt-3">
                      {l.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-none border border-white/25 px-2.5 py-1 text-[11.5px] text-white/50 font-medium tracking-[0.02em] transition-all duration-300 hover:border-white hover:text-white"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* short baseline line under number, expands full-width on hover */}
                  <div className="absolute left-0 bottom-0 w-[28px] sm:w-[100px] transition-all duration-500 ease-out group-hover:w-full" style={{ height: "1px", background: "rgba(255,255,255,0.15)", transform: "scaleY(0.5)", transformOrigin: "bottom" }} />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fadeUp">
            <div className="mt-10 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <div>
                <div className="text-white text-[16px] sm:text-[20px] mb-2.5" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 500, letterSpacing: "0.005em" }}>
                  ISO &amp; GMP Compliant
                </div>
                <p className="text-white/70 text-[14px] sm:text-[15px] leading-[1.6]">HACCP, IATF 16949, 21 CFR Part 11 ready.</p>
              </div>
              <div>
                <div className="text-white text-[16px] sm:text-[20px] mb-2.5" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 500, letterSpacing: "0.005em" }}>
                  Security by Default
                </div>
                <p className="text-white/70 text-[14px] sm:text-[15px] leading-[1.6]">Role-based access, e-signatures, complete audit trails.</p>
              </div>
              <div>
                <div className="text-white text-[16px] sm:text-[20px] mb-2.5" style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 500, letterSpacing: "0.005em" }}>
                  Local IT Ready
                </div>
                <p className="text-white/70 text-[14px] sm:text-[15px] leading-[1.6]">Edge servers, plant networks — no central IT overhaul required.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CUSTOMER STORIES */}
      <section className="py-8 sm:py-14 relative overflow-hidden" style={{ background: PANEL }}>
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <div className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-white/70 mb-3">CUSTOMER STORIES</div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-medium text-white leading-[1.05] mb-7" style={{ fontFamily: SERIF }}>
            In their own words
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative max-w-[980px] mx-auto">
            {testimonials.map((t, i) => {
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
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: isLight
                        ? "radial-gradient(circle at 80% 0%, rgba(0,0,0,0.05), transparent 60%)"
                        : "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.06), transparent 60%)",
                    }}
                  />
                  <div className="flex items-start gap-3 mb-3 relative z-10">
                    <div
                      className="flex flex-col items-center justify-center rounded-md px-2.5 py-1 leading-none transition-transform duration-500 group-hover:scale-105"
                      style={{ border: `1px solid ${border}`, fontFamily: "'Space Grotesk', sans-serif", color: muted }}
                    >
                      <span className="text-[14px] font-semibold">{t.badgeTop}</span>
                      <span className="text-[10px] font-medium">{t.badgeBottom}</span>
                    </div>
                    <div className="pt-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {/* <div className="text-[11px] font-medium" style={{ color: muted }}>Key Result :</div> */}
                      <div className="text-[11px] tracking-[0.12em] font-semibold" style={{ color: muted }}>{t.keyResultLabel}</div>
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className="absolute left-5 right-0 text-[52px] sm:text-[58px] font-light pointer-events-none whitespace-nowrap leading-none transition-all duration-700 ease-out group-hover:translate-x-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: watermarkColor, top: "70px" }}
                  >
                    {t.watermark}
                  </div>
                  <p
                    className="text-[15px] sm:text-[15.5px] leading-[1.55] mt-12 mb-6 relative z-10 font-normal"
                    style={{ color: t.fg, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t.quote}
                  </p>
                  <div className="mt-auto relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    <div className="text-[13px] font-semibold mb-0.5" style={{ color: t.fg }}>{t.name}</div>
                    <div className="text-[11px] font-medium" style={{ color: subtle }}>{t.role}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRANSFORM CTA (LIGHT) */}
      <section className="pt-14 sm:pt-24 pb-0" style={{ background: "#EAEAEA" }}>
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
          <h2
            className="text-[36px] sm:text-[48px] md:text-[58px] leading-[1.1] mb-5"
            style={{ fontFamily: SERIF, color: "#111", letterSpacing: "-0.01em", fontWeight: 500 }}
          >
            Transform your manufacturing<br />operations
          </h2>
          <p className="text-[15px] sm:text-[16px] mb-8 font-normal" style={{ color: "rgba(0,0,0,0.75)" }}>
            See how SFX9 turns raw plant signals into a live operating system for your factory.
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center pb-14 sm:pb-24">
            <a
              href="/contact"
              className="px-9 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors text-[#1a1a1a] hover:bg-black hover:!text-white"
              style={{ border: "1px solid rgba(0,0,0,0.35)" }}
            >
              Contact Us
            </a>
            <a
              href="#"
              className="px-9 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors text-[#1a1a1a] hover:bg-black hover:!text-white"
              style={{ border: "1px solid rgba(0,0,0,0.35)" }}
            >
              Explore More
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 relative" style={{ marginBottom: "-70px" }}>
          <div
            className="rounded-2xl px-6 sm:px-8 md:px-10 py-6 sm:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-6 text-left relative z-10"
            style={{ background: "#1A1A1A" }}
          >
            <div className="min-w-0">
              <div className="text-[19px] sm:text-[22px] text-white mb-1.5 font-normal" style={{ fontFamily: SERIF }}>
                Transform your production visibility
              </div>
              <div className="text-[13px] text-white/70 leading-relaxed font-normal">
                See SFX9 in your environment in under two weeks.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 shrink-0 w-full md:w-auto">
              <a
                href="/contact"
                className="px-6 py-3 text-[13px] font-semibold rounded-full transition-transform hover:scale-105 text-center whitespace-nowrap"
                style={{ background: "#fff", color: "#111" }}
              >
                Book a Consultant
              </a>
              <a href="#" className="text-[13px] font-medium text-white/90 hover:text-white inline-flex items-center justify-center sm:justify-start gap-1.5 whitespace-nowrap">
                Explorer Services <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-24 sm:pt-28" style={{ background: "#0a0a0a" }}>
        <FooterSection />
      </div>
    </div>
  );
}

type Capability = (typeof capabilities)[number];

function CapabilityTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cap = capabilities[activeIndex];
  return (
    <ScrollReveal animation="fadeUp">
      <div className="relative grid grid-cols-1 md:grid-cols-[260px_1fr] rounded-2xl overflow-hidden border border-white/10 bg-[#0E1011]">
        {/* Tabs column */}
        <div className="relative z-10 bg-transparent py-5 sm:py-7 px-3 sm:px-5 flex flex-col">
          <ul className="flex flex-col gap-2.5 sm:gap-4">
            {capabilities.map((c, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={c.tab}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left py-3 px-4 rounded-md text-[14px] sm:text-[15px] transition-colors ${
                      isActive
                        ? "bg-white/[0.08] text-white"
                        : "text-white/55 hover:text-white/80"
                    }`}
                    style={{ fontFamily: SERIF, fontWeight: 600 }}
                  >
                    {c.tab}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-5 px-4 flex gap-1.5">
            {capabilities.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to tab ${i + 1}`}
                className="h-[2px] w-6 rounded-full transition-colors"
                style={{ background: i === activeIndex ? "#7BE0A6" : "rgba(255,255,255,0.12)" }}
              />
            ))}
          </div>
        </div>

        {/* Content + background */}
        <div className="relative min-h-[220px]">
          {capabilities.map((c, i) => (
            <img
              key={c.tab}
              src={c.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: i === activeIndex ? 1 : 0 }}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(14,16,17,0.92) 0%, rgba(14,16,17,0.65) 45%, rgba(14,16,17,0.25) 100%)",
            }}
          />
          <div key={cap.tab} className="relative z-10 px-5 sm:px-9 py-6 sm:py-8 flex flex-col h-full justify-center animate-fade-in">
            <h3
              className="text-white"
              style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: "clamp(28px, 3.2vw, 40px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              {cap.title}
            </h3>
            <p className="mt-3 text-white/80 text-[14px] sm:text-[15px] leading-[1.6] max-w-[520px]">
              {cap.desc}
            </p>
            <div className="mt-5 sm:mt-8 grid grid-cols-2 gap-6 max-w-[420px]">
              {cap.stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-white"
                    style={{
                      fontFamily: SERIF,
                      fontWeight: 500,
                      fontSize: "clamp(34px, 3.6vw, 48px)",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-2 text-white/70 text-[11px] sm:text-[11.5px] uppercase tracking-[0.22em] font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

const kpiTabs = ["Paperless", "Quality", "OEE", "Maintenance", "Sustainability", "Inventory"] as const;
type KpiTab = (typeof kpiTabs)[number];

const kpiData: Record<KpiTab, { code: string; name: string; desc: string }[]> = {
  Paperless: [
    { code: "100%", name: "Paperless Work Instructions", desc: "Every work order, batch record, quality form is digital — zero paper." },
    { code: "−78%", name: "Manual Data Entry Reduction", desc: "Auto-population from PLCs and structured digital capture." },
  ],
  Quality: [
    { code: "FPY", name: "First Pass Yield", desc: "Units produced correctly first time — zero rework, zero scrap." },
    { code: "QD", name: "Quality Deviations", desc: "Non-conformances and CAPA events tracked by product, line, operator." },
    { code: "QR", name: "Quality Rate", desc: "Good units to total units — excluding rejects, rework, and startup losses." },
    { code: "IPQ", name: "In-Process Gates", desc: "Mandatory inspection gates enforced per route with pass/fail tracking." },
  ],
  OEE: [
    { code: "OEE", name: "Equipment Effectiveness", desc: "Availability × Performance × Quality computed in real time for every line." },
    { code: "AVA", name: "Availability Rate", desc: "Actual production time vs planned — capturing all downtime events." },
    { code: "PERF", name: "Performance Rate", desc: "Actual vs theoretical max speed — micro-stoppages and speed losses." },
    { code: "CDT", name: "Changeover Duration", desc: "Last good piece to first good piece — tracked per line, per SKU pair." },
    { code: "CL%", name: "Changeover Loss", desc: "Production capacity lost to changeover events across all format changes." },
  ],
  Maintenance: [
    { code: "UMH", name: "Unplanned Maintenance Hrs", desc: "Breakdown hours by machine, cause category, and response time." },
    { code: "CIP", name: "CIP Cycle Time", desc: "Clean-in-place cycle tracked against designed time and regulatory requirements." },
  ],
  Sustainability: [
    { code: "kWh/t", name: "Energy per Tonne", desc: "Energy consumed per tonne at machine, line, and site level with ESG reporting." },
    { code: "m³/t", name: "Water per Tonne", desc: "Water usage per tonne including CIP, cooling, and process water." },
  ],
  Inventory: [
    { code: "98%+", name: "Inventory Accuracy", desc: "Real-time transaction capture eliminates cycle count discrepancies." },
    { code: "WUR", name: "Warehouse Utilisation", desc: "Real-time slot occupancy with heat-map visualisation and slotting optimisation." },
    { code: "PCT", name: "Planning Cycle Time", desc: "Time from production planning to confirmed schedule release." },
  ],
};

function KpiIntelligence() {
  const [active, setActive] = useState<KpiTab>("OEE");
  const rows = kpiData[active];

  return (
    <>
      <ScrollReveal animation="fadeUp">
        <p className="uppercase tracking-[0.32em] text-white/60 text-[11px] sm:text-[12px] font-medium mb-3">KPI INTELLIGENCE</p>
        <h2
          className="text-white"
          style={{ fontFamily: SERIF, fontWeight: 500, fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1 }}
        >
          Every metric that matters
        </h2>
        <p className="mt-4 max-w-[620px] text-white/75 text-[15px] sm:text-[16px] leading-[1.6]">
          18 KPIs across 6 categories — captured automatically, surfaced in real time.
        </p>
      </ScrollReveal>

      <ScrollReveal animation="fadeUp">
        <div className="mt-7 sm:mt-12 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-2.5">
          {kpiTabs.map((t) => {
            const isActive = t === active;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`w-full sm:w-auto rounded-full px-3 sm:px-5 py-2 text-[12px] sm:text-[13.5px] font-medium transition-colors border text-center ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-white/15 text-white/60 hover:text-white/85 hover:border-white/30"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      <div className="mt-7 sm:mt-12 border-t border-white/10">
        {rows.length === 0 ? (
          <div className="py-16 text-center text-white/55 text-[14px]">
            Content coming soon.
          </div>
        ) : (
          rows.map((r) => (
            <div
              key={r.code}
              className={`grid grid-cols-[72px_1fr] sm:grid-cols-[140px_1.2fr_1.6fr] items-baseline gap-2 sm:gap-10 border-b border-white/10 ${/\d/.test(r.code) ? "py-3.5 sm:py-7" : "py-3 sm:py-5"}`}
            >
              <div
                className="text-white"
                style={{ fontFamily: SERIF, fontWeight: 500, fontSize: /\d/.test(r.code) ? "clamp(30px, 3.2vw, 44px)" : "clamp(18px, 2vw, 26px)", lineHeight: 1 }}
              >
                {r.code}
              </div>
              <div
                className="col-span-1 sm:col-auto text-white text-[13.5px] sm:text-[16px] font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {r.name}
              </div>
              <p
                className="col-span-2 sm:col-auto mt-2 sm:mt-0 text-white/75 text-[13.5px] sm:text-[14.5px] leading-[1.5] sm:leading-[1.6]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {r.desc}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
}

