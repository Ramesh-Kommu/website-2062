import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import heroBg from "@/assets/agentic-hero-bg.png";
import painImg1 from "@/assets/agentic-pain-1.png";
import painImg2 from "@/assets/agentic-pain-2.png";
import painImg3 from "@/assets/agentic-pain-3.png";
import painImg4 from "@/assets/agentic-pain-4.png";
import carbynetechCube from "@/assets/carbynetech-cube.png";
import outcomesDiagram from "@/assets/agentic-outcomes-diagram.png";
import foundationIcon1 from "@/assets/agentic-foundation-1.png";
import foundationIcon2 from "@/assets/agentic-foundation-2.png";
import foundationIcon3 from "@/assets/agentic-foundation-3.png";
import foundationIcon4 from "@/assets/agentic-foundation-4.png";

const heroStats = [
  { value: "96%", label: "Actions Automated" },
  { value: "-2 days", label: "Period-Close Cycle" },
  { value: "14", label: "Purpose-Built SAP Agents" },
  { value: "4 Weeks", label: "First Agents Live in Production" },
];

const painCards = [
  {
    type: "text",
    title: "Manufacturing Execution",
    desc: "Agents monitor production orders, scrap, yield, OEE, and maintenance acting on deviations before they cost you a shift. All visible in the web app.",
    image: painImg1,
  },
  {
    type: "image",
    image: painImg2,
  },
  {
    type: "image",
    image: painImg3,
    title: "Supply Chain Operations",
    desc: "Agents watch every vendor, PO, GR/IR, and safety stock level — expediting, resolving, and rebalancing without manual triage. Planners approve, not chase.",
  },
  {
    type: "image-text",
    image: painImg3,
    title: "Supply Chain Finance",
    desc: "Agents orchestrate period-end close, variance analysis, cost simulations, and working capital — so your controllers focus on decisions, not reconciliation.",
  },
  {
    type: "text",
    title: "Human-in-the-Loop Governance",
    desc: "Every agent carries an approval threshold. High-stakes decisions are instantly routed to named approvers in the web app — with full context, one-click approval, and immutable audit trail.",
  },
  {
    type: "image-only",
    image: painImg4,
  },
];

const tabs = ["Manufacturing", "Supply Chain", "AI Finance"] as const;

const tabContent: Record<(typeof tabs)[number], { tag: string; title: string; bullets: string[] }[]> = {
  Manufacturing: [
    {
      tag: "PP · QM · PM · MES / IoT",
      title: "Manufacturing agents that act before the line stops.",
      bullets: [
        "Predictive Downtime Agents",
        "Rough OEE Recover",
        "Maintenance Window Predictor",
        "OEE & Shift Pattern guards",
      ],
    },
    {
      tag: "MM · SD · MRP · GR/IR",
      title: "Supply chain agents that never sleep, never miss a signal.",
      bullets: [
        "Autonomous ATP Predictor",
        "Inventory & Logistics Optimizer",
        "Supply Disruption Watcher & Resolver",
        "Dual-Tier Demand Sensing",
      ],
    },
    {
      tag: "FI · CO · FP&A · CO-PC · COPA",
      title: "Finance agents that close the books — while your team sleeps.",
      bullets: [
        "Touchless Reconciliation Engine",
        "Real-time Cash Flow Predictor",
        "Auto-categorization Agents",
        "Closing Co-Pilot Inter Agents",
      ],
    },
  ],
  "Supply Chain": [
    {
      tag: "01 — SC — AGENT",
      title: "Demand sensing that sees the next quarter, not the last one.",
      bullets: [
        "Real-time Demand Signals",
        "Auto Replenishment Triggers",
        "Disruption Early-Warning",
        "Supplier Risk Scoring",
      ],
    },
    {
      tag: "02 — SC — AGENT",
      title: "Logistics agents that never miss a window.",
      bullets: [
        "Dynamic Route Optimizer",
        "Carrier Selection Agent",
        "Yard & Dock Scheduler",
        "ETA Risk Predictor",
      ],
    },
    {
      tag: "03 — SC — AGENT",
      title: "Inventory agents that hold less and serve more.",
      bullets: [
        "Multi-Echelon Optimizer",
        "Slow-Mover Liquidator",
        "Safety-Stock Re-tuner",
        "Stockout Prevention Agent",
      ],
    },
  ],
  "AI Finance": [
    {
      tag: "01 — FIN — AGENT",
      title: "Close the books faster than your auditor expects.",
      bullets: [
        "Touchless Reconciliation",
        "Journal Entry Auto-Poster",
        "Variance Investigator",
        "Close-Calendar Co-Pilot",
      ],
    },
    {
      tag: "02 — FIN — AGENT",
      title: "Cash-flow agents that move money intelligently.",
      bullets: [
        "Working-Capital Optimizer",
        "Vendor Payment Scheduler",
        "AR Collections Agent",
        "Treasury Forecast Engine",
      ],
    },
    {
      tag: "03 — FIN — AGENT",
      title: "Controls that catch leakage before it leaves.",
      bullets: [
        "Duplicate Invoice Sniper",
        "Fraud Pattern Watcher",
        "Tax & Compliance Guard",
        "Procure-to-Pay Sentinel",
      ],
    },
  ],
};

const liveCases = [
  {
    tag: "Manufacturing · PP / QM · Scrap & Yield",
    title: "The Scrap Cost Was Invisible Until Month-End.",
    desc: "A mid-size automotive parts manufacturer was losing €180,000 per quarter in scrap — discovered only when the controller reviewed CO reports three weeks after the damage was done.",
  },
  {
    tag: "Supply Chain · MM / SD · PO Expediting",
    title: "The Vendor Was Late. The Planner Found Out Too Late.",
    desc: "A consumer goods manufacturer ran four planners whose primary job was manually chasing overdue purchase orders — a $200K/year cost in human effort, with no guarantee of catching every slip in time.",
  },
  {
    tag: "Supply Chain Finance · FI / CO · Period-End Close",
    title: "Close Week Was the Most Stressful Week of the Month.",
    desc: "A process manufacturer's finance team spent the first two weeks of every month clearing 200+ open items, chasing IC sign-offs, and manually running accrual checks — before the actual close work could even begin.",
  },
];

const liveItems = [
  {
    tag: "Days 1–5",
    title: "Blueprint Workshop",
    desc: "We map your highest-value agent opportunities against your SAP configuration, business rules, and approval hierarchies in a focused 2-day session.",
  },
  {
    tag: "Days 6–14",
    title: "SAP Read-Layer Setup",
    desc: "OData and BAPI connections established to your SAP landscape — read-only, clean-core compliant, no custom ABAP, no transports into production.",
  },
  {
    tag: "Days 15–24",
    title: "Agent & Web App Configuration",
    desc: "Agents calibrated to your thresholds, KPIs, and approval owners. The Carbynetech Agentic Web App deployed and configured for your team's daily workflow.",
  },
  {
    tag: "Day 28+",
    title: "Live & Continuous Optimisation",
    desc: "First agent goes live. Thresholds tuned, approval flows refined, and additional agents activated in phased sprints — with full rollback capability from day one.",
  },
];

const numbers = [
  { value: "31%", label: "Scrap Cost Reduction", note: "Manufacturing · PP/QM" },
  { value: "82%", label: "GR/IR Auto-Resolved", note: "Supply Chain · GR/IR" },
  { value: "68%", label: "PO Expediting Effort Eliminated", note: "Supply Chain · MM/SD" },
  { value: "44%", label: "Unplanned Downtime Reduction", note: "Manufacturing · PM / IoT" },
  { value: "-2D", label: "Period-End Close Cycle", note: "SC Finance · FI/CO" },
  { value: "$4M+", label: "Working Capital Freed", note: "SC Finance · Working Capital" },
];

const foundationItems = [
  { title: "SAP Read\nIntegration", icon: foundationIcon1 },
  { title: "Multi-Agent\nOrchestration", icon: foundationIcon2 },
  { title: "Agentic Web\nApplication", icon: foundationIcon3 },
  { title: "Governance\n& Clean Core", icon: foundationIcon4 },
];

const AgenticIntelligence = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Manufacturing");

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary text-xs font-medium tracking-wider">
              Agentic AI &nbsp;·&nbsp; SAP-Native &nbsp;·&nbsp; Manufacturing Intelligence
            </span>
          </motion.div>

          <motion.h1
            className="text-[30px] sm:text-[44px] md:text-[54px] font-medium leading-[1.15] mb-5 sm:mb-6 max-w-3xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-foreground">Your SAP Data</span>
            <br />
            <span style={{ color: "#FFFFFF" }}>Knows What to Do.</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base mb-3 font-medium"
            style={{ fontFamily: "Electrolize, sans-serif", color: "#FFFFFF" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Now it can act on it — automatically.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-2xl mb-10 sm:mb-14 leading-relaxed"
            style={{ color: "#8799AB" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            Carbynetech Agentic AI reads your SAP data, reasons across domains, and executes
            decisions through a built-house Agentic Web App — across Manufacturing, Supply Chain,
            and Supply Chain Finance — with input from a person on a chart only on its.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } } }}
          >
            {heroStats.map((s) => (
              <motion.div
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-medium" style={{ color: "#FFFFFF" }}>{s.value}</div>
                <p className="text-muted-foreground text-xs mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — SAP signals */}
      <section className="relative py-10 sm:py-14 bg-background overflow-hidden">
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 relative">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p className="text-center text-[11px] uppercase tracking-[0.2em] mb-5" style={{ color: "#C8FF00" }}>
              — What Carbynetech Does
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5">
              We turn your SAP Data into
              <br />
              <span style={{ color: "#ffffff" }}>Decisions that act themselves.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
            <p className="text-center text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-14">
              Purpose-built agents trained on your SAP objects, KPIs, and process patterns — all actions visible and approvable.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1080px] mx-auto">
            {/* Card 1 — Manufacturing Execution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-xl flex flex-col"
              style={{ backgroundColor: "#080B14", border: "1px solid #141A2D" }}
            >
              <div className="p-5 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Agents monitor production orders, scrap, yield, OEE, and maintenance acting on deviations before they cost you a shift. All visible in the web app.
                </p>
                <h3 className="text-sm sm:text-base font-semibold">Manufacturing Execution</h3>
              </div>
              <img src={painImg1} alt="" className="w-full h-28 object-cover" />
            </motion.div>

            {/* Card 2 — Supply Chain Operations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-xl min-h-[300px] flex flex-col justify-end"
              style={{ border: "1px solid #141A2D" }}
            >
              <img src={painImg2} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080B14 30%, transparent 70%)" }} />
              <div className="relative p-5">
                <h3 className="text-sm sm:text-base font-semibold mb-2">Supply Chain Operations</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                   Agents watch every vendor, PO, GR/IR, and safety stock level — expediting, resolving, and rebalancing without manual triage. Planners approve, not chase.
                </p>
              </div>
            </motion.div>

            {/* Card 3 — Supply Chain Finance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-xl min-h-[300px] flex flex-col justify-end"
              style={{ border: "1px solid #141A2D" }}
            >
              <img src={painImg3} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #080B14 30%, transparent 70%)" }} />
              <div className="relative p-5">
                <h3 className="text-sm sm:text-base font-semibold mb-2">Supply Chain Finance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Agents orchestrate period-end close, variance analysis, cost simulations, and working capital — so your controllers focus on decisions, not reconciliation.
                </p>
              </div>
            </motion.div>

            {/* Card 4 — Human-in-the-Loop Governance with inline image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-xl md:col-span-3 flex flex-col md:flex-row min-h-[200px]"
              style={{ backgroundColor: "#080B14", border: "1px solid #141A2D" }}
            >
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center relative z-10">
                <h3 className="text-sm sm:text-base font-semibold mb-3">Human-in-the-Loop Governance</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                   Every agent carries an approval threshold. High-stakes decisions are instantly routed to named approvers in the web app — with full context, one-click approval, and immutable audit trail.
                </p>
              </div>
              <div className="relative md:w-1/2 min-h-[160px]">
                <img src={painImg4} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #080B14 0%, rgba(8,11,20,0.6) 25%, transparent 60%)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Three Domains */}
      <section className="relative py-12 sm:py-16" style={{ backgroundColor: "#080B14" }}>
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p className="text-center text-[11px] uppercase tracking-[0.2em] mb-5" style={{ color: "#C8FF00" }}>
              — Capabilities and offerings
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5">
              Three Domains. Fourteen Agents.<br />
              <span style={{ color: "#ffffff" }}>One Agentic Web App.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
            <p className="text-center text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-10">
              Purpose-built agents trained on your SAP objects, KPIs, and process patterns —
              all actions are reviewed and approvable in the Carbynetech Agentic Web App.
            </p>
          </ScrollReveal>

          <div className="flex justify-center gap-2 mb-10">
            {tabs.map((t) => {
              const isActive = activeTab === t;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className="px-5 py-2 rounded-md text-xs sm:text-sm font-medium transition-all"
                  style={{
                    backgroundColor: isActive ? "#21C45D" : "#1E2229",
                    color: isActive ? "#000000" : "#FFFFFF",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
            {tabContent.Manufacturing.map((card, i) => {
              const activeIndex = tabs.indexOf(activeTab);
              const isHighlighted = i === activeIndex;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl border p-6 transition-all"
                  style={{
                    backgroundColor: isHighlighted ? "#121F17" : "#1A1D23",
                    borderColor: isHighlighted ? "rgba(33, 196, 93, 0.5)" : "rgba(35, 38, 45, 0.5)",
                  }}
                >
                  <p className="text-[11px] tracking-wider text-muted-foreground mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {card.tag}
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold mb-4 leading-snug">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex gap-2 items-start">
                        <span
                          className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: isHighlighted ? "#21C45D" : "#6B7280" }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Carbynetech Agentic AI */}
      <section className="relative py-12 sm:py-16" style={{ backgroundColor: "#0A1020" }}>
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p className="text-center text-[11px] tracking-[0.2em] mb-5" style={{ color: "#C8FF00" }}>
              — Customer Use Cases
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <h2 className="text-center text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-5" style={{ color: "#ffffff" }}>
              Carbynetech Agentic AI.
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
            <p className="text-center text-[15px] sm:text-base max-w-2xl mx-auto mb-14" style={{ color: "#8799AB" }}>
              Real operational scenarios. SAP as the data source. All outcomes delivered through
              the Carbynetech Agentic Web App — not through months of consulting.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-border/40">
            {liveCases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`px-6 ${i === 0 ? "md:pl-0 md:pr-8" : i === liveCases.length - 1 ? "md:pr-0 md:pl-8" : "md:px-8"} pt-8 md:pt-0 ${i < liveCases.length - 1 ? "pb-8 border-b border-border/40 md:border-b-0" : ""}`}
              >
                <p className="text-sm mb-6 text-foreground leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {c.tag}
                </p>
                <h3 className="text-lg sm:text-xl font-normal mb-4 leading-snug">{c.title}</h3>
                <p className="text-muted-foreground text-[13px] sm:text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Live in 4 Weeks */}
      <section className="relative py-12 sm:py-16" style={{ background: '#080B14' }}>
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p className="text-center text-[11px] uppercase tracking-[0.2em] mb-5 flex items-center justify-center gap-2" style={{ color: '#B2F215' }}>
              <span className="w-6 h-px" style={{ background: '#B2F215' }} />
              How We Deliver
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Live in 8 Weeks. <span style={{ color: '#ffffff' }}>Not 6 Months.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
            <p className="text-center text-sm sm:text-base max-w-2xl mx-auto mb-14" style={{ color: '#8799AB' }}>
              A structured, low-risk deployment built around your SAP data —
              <br />
              no re-platforming, no SAP customisation, no heavy IT lift. Your SAP core is never modified.
            </p>
          </ScrollReveal>

          <div className="relative mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {liveItems.map((it, i) => {
                const barColors = ['#22D4C8', '#38D9FF', '#7C4DFF', '#F5C518'];
                return (
                  <motion.div
                    key={it.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pt-8 transition-colors duration-300 flex flex-col min-h-[180px] md:min-h-[300px]"
                    style={{ background: 'transparent', border: '1px solid #082426' }}
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.background = '#0A1020'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    <div className="absolute -top-[2px] left-0 h-[3px] w-[85%]" style={{ background: barColors[i] }} />
                    <div className="px-6 flex-1">
                      <h3 className="text-white text-[15px] sm:text-base font-normal mb-3 leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{it.title}</h3>
                      <p className="text-[13px] sm:text-sm leading-relaxed" style={{ color: '#8799AB' }}>{it.desc}</p>
                    </div>
                    <div className="px-6 pb-4 pt-4 md:pb-6 md:pt-6">
                      <span
                        className="inline-block px-3 py-1.5 text-[11px]"
                        style={{ fontFamily: "'JetBrains Mono', monospace", color: '#ffffff', border: '1px solid #082426', background: 'transparent' }}
                      >
                        {it.tag}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Numbers */}
      <section className="relative py-12 sm:py-16" style={{ background: '#080B14' }}>
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p className="text-center text-[11px] uppercase tracking-[0.2em] mb-5 flex items-center justify-center gap-2" style={{ color: '#B2F215' }}>
              <span className="w-6 h-px" style={{ background: '#B2F215' }} />
              Outcomes At A Glance
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-medium leading-tight mb-20 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Numbers That Move the Business Forward.
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" duration={0.5} delay={0.15}>
            <img src={outcomesDiagram} alt="Outcomes at a glance diagram" className="w-full h-auto" />
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 7 — Built to sit alongside */}
      <section className="relative py-12 sm:py-16" style={{ backgroundColor: "#0A1020" }}>
        <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <p className="text-primary text-[11px] tracking-[0.2em] mb-5 flex items-center gap-2" style={{ textTransform: "none" }}>
              <span className="w-6 h-px bg-primary" />
              Technical Foundation
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 mb-20">
            <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium leading-tight text-white">
                Built to sit alongside
                <br />
                your SAP — not inside it.
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
              <p className="text-muted-foreground text-[15px] sm:text-base leading-relaxed">
                We read from SAP using standard APIs. All agent reasoning, actions, and approvals
                happen in the Carbynetech platform — a web application separate from SAP. Your SAP
                core is never modified. No Joule. No embedded AI. No risk to your landscape.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {foundationItems.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div
                  className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#1A2E28" }}
                >
                  <img
                    src={f.icon}
                    alt={f.title.replace("\n", " ")}
                    className="w-6 h-6 object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <p
                  className="text-xs sm:text-sm font-semibold whitespace-pre-line leading-snug"
                  style={{ color: "#21C45D" }}
                >
                  {f.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — CTA with watermark */}
      <section className="relative py-14 sm:py-20 overflow-hidden" style={{ backgroundColor: "#13171D" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none leading-[0.85]">
          <span className="watermark-text-cta block text-center">SAP DATA</span>
          <span className="watermark-text-cta block text-center">ACTION?</span>
        </div>
        <div className="relative mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
          <ScrollReveal animation="fadeUp" duration={0.4}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5 text-white max-w-[800px] mx-auto">
              Ready to See Your SAP Data
              <br />
              Take Action?
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.08}>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-8">
              Let's identify your highest-value agent opportunity in a focused 60-minute session.
              No slides. No pitch deck. Just your business challenges and our blueprints.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.4} delay={0.16}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 rounded-sm text-sm font-semibold hover:opacity-90 transition text-black inline-block"
                style={{ backgroundColor: "#21C45D" }}
              >
                CONTACT US
              </a>

              <button className="border border-white/20 text-white px-6 py-3 rounded-sm text-sm font-semibold hover:bg-white/5 transition">
                EXPLORE MORE
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AgenticIntelligence;
