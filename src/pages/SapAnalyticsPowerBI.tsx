import { motion } from "framer-motion";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import {
  Database, Bot, Cloud, BarChart3, LineChart,
  Server, Sparkles, Sun, Zap,
  AlertTriangle, FileText, Search, GitMerge,
  Building2, TrendingUp, Layers,
  Microscope, MessageSquare, Filter, Bell, ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import { useState } from "react";
import heroBg from "@/assets/sap-analytics-hero-bg.png";
import architectureDiagram from "@/assets/sap-architecture-diagram.png";
import claudeChat from "@/assets/sap-claude-chat.png";
import boardroomDashboard from "@/assets/sap-boardroom-dashboard.png";

const LIME = "#C8FF01";
const GREEN_BORDER = "rgba(200,255,1,0.25)";
const PANEL = "#0F1420";
const PURPLE_BG = "#1A1740";
const BLUE_BG = "#101A30";

/* ---------- Hero ---------- */
const HeroSection = () => {
  const stats = [
    { value: "75%", label: "Faster Decisions" },
    { value: "400+", label: "Joule AI Use Cases" },
    { value: "Zero", label: "Data Duplication" },
    { value: "Real-Time", label: "Live Fabric" },
  ];
  return (
    <section className="relative min-h-[600px] sm:min-h-[680px] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 sm:mb-8"
          style={{ background: "rgba(200,255,1,0.08)", border: `1px solid ${GREEN_BORDER}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="text-[12px] sm:text-[11px] font-medium uppercase tracking-[0.18em]" style={{ color: LIME }}>
            SAP Analytics & AI Practice
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[32px] sm:text-[44px] md:text-[56px] font-medium leading-[1.1] mb-5 max-w-3xl text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          From Raw Data to<br />
          Decisive Action
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[15px] sm:text-[14px] max-w-xl mb-12 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Where SAP's data fabric meets the age of agentic AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[26px] sm:text-[32px] md:text-[36px] font-medium leading-none mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-[12px] sm:text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Eyebrow = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-px" style={{ background: LIME }} />
    <span className="text-[10px] font-medium tracking-[0.2em]" style={{ color: LIME }}>{text}</span>
  </div>
);

/* ---------- Five Pillars ---------- */
const PillarsSection = () => {
  const pillars = [
    { icon: BarChart3, title: "Business scale", subtitle: "Data Fabric", desc: "Federated live connections across S/4HANA, BW, and cloud — zero duplication, full semantic richness." },
    { icon: Bot, title: "Joule AI", subtitle: "Agentic Copilot", desc: "400+ AI use cases across finance, HR, and supply chain — natural language to live insight, instantly." },
    { icon: Cloud, title: "SAP Analytics Cloud", subtitle: "BI & Storytelling", desc: "AI Smart Insights, Just Ask Q&A, and pixel-perfect executive stories from data to boardroom." },
    { icon: LineChart, title: "SAC Planning", subtitle: "xP&A & IBP", desc: "Monte Carlo simulations, driver-based models, and integrated financial planning in one cockpit." },
    { icon: BarChart3, title: "Power BI", subtitle: "Microsoft Ecosystem", desc: "Live DirectQuery from Datasphere, Claude AI annotations, and exec dashboards embedded in Teams." },
  ];
  const CARD_BG = "#13161D";
  const ICON_BG = "#B3DE4F";
  const SUB_COLOR = "#7F8F43";
  return (
    <section className="py-12 sm:py-16" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeUp">
          <Eyebrow text="The Stack" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Five Pillars of Intelligence
          </h2>
          <p className="text-[14px] sm:text-[13px] mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
            One unbroken chain — from raw data governance to decisive action.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-md p-5 pt-10 border border-transparent bg-[#13161D] transition-all duration-300 hover:bg-[#141B04] hover:border-[#B3DE4F80] hover:shadow-[0px_4.8px_24.4px_-6px_#B3DE4F1A]"
              style={{
                boxShadow: "0px 4px 13px -2px #1310220F, 0px 4.8px 24.4px -6px #1310221A",
              }}
            >
              <div
                className="w-10 h-10 mb-6 rounded-md flex items-center justify-center"
                style={{ background: ICON_BG }}
              >
                <p.icon className="w-5 h-5" style={{ color: "#0F1A0A" }} strokeWidth={2} />
              </div>
              <h3 className="text-[15px] font-medium text-white mb-1.5">{p.title}</h3>
              <div className="text-[11.5px] mb-3 font-mono" style={{ color: SUB_COLOR }}>{p.subtitle}</div>
              <p className="text-[14px] sm:text-[12px] leading-[1.55]" style={{ color: "rgba(255,255,255,0.55)" }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- How It All Connects ---------- */
const ConnectsSection = () => {
  return (
    <section className="py-12 sm:py-16" style={{ background: "#202E3C" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeUp">
          <Eyebrow text="Architecture" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            How It All Connects
          </h2>
          <p className="text-[14px] sm:text-[13px] mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
            A governed, live, AI-amplified intelligence stack.
          </p>
        </ScrollReveal>

        <div className="flex justify-center">
          <img
            src={architectureDiagram}
            alt="How it all connects — SAP architecture diagram"
            className="w-full max-w-[1100px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

/* ---------- Intelligence in Plain Language ---------- */
const PlainLanguageSection = () => {
  const items = [
    { icon: Search, title: "Anomaly Detection", desc: "Claude monitors Datasphere models — surfacing deviations with root-cause." },
    { icon: FileText, title: "Narrative Generation", desc: "AI-written executive summaries for every SAC story and Power BI page." },
    { icon: Microscope, title: "Scenario Intelligence", desc: "Interprets Monte Carlo results and recommends which levers to pull." },
    { icon: GitMerge, title: "Cross-System Synthesis", desc: "Connects Joule, Datasphere, SAC, and Power BI into one unified insight layer." },
  ];
  return (
    <section className="py-12 sm:py-16" style={{ background: "#070A07" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        <div className="flex flex-col h-full">
          <ScrollReveal animation="fadeUp">
            <Eyebrow text="Claude AI Layer" />
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-white mb-4 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Intelligence in Plain Language
            </h2>
            <p className="text-[14px] sm:text-[13px] mb-8 max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Embedded AI transforms analytics into narratives, anomaly alerts, and actionable recommendations.
            </p>
          </ScrollReveal>
          <div className="space-y-3">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-3 p-4 rounded-md bg-[#10151B] border border-transparent transition-all duration-300 hover:bg-[#121F17] hover:border-[#B3DE4F33]"
              >
                <it.icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#fff" }} strokeWidth={1.5} />
                <div>
                  <div className="text-[15px] sm:text-[13px] font-medium text-white mb-1">{it.title}</div>
                  <div className="text-[11.5px] leading-relaxed" style={{ color: "#8799AB" }}>{it.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full justify-end">
          <img
            src={claudeChat}
            alt="Claude · SAP Datasphere conversation"
            className="w-full max-w-[560px] ml-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

/* ---------- What We Deliver ---------- */
const DeliverSection = () => {
  const cards = [
    {
      icon: Database,
      title: "SAP Datasphere",
      bullets: [
        "Federated live connections — S/4HANA, BW, Snowflake",
        "Semantic entity modelling with full lineage",
        "Row-level security & data marketplace governance",
      ],
    },
    {
      icon: Bot,
      title: "Joule AI",
      bullets: [
        "Natural language to live chart — Just Ask",
        "Custom agents via Joule Studio",
        "Bidirectional Microsoft 365 Copilot integration",
      ],
    },
    {
      icon: Cloud,
      title: "SAP Analytics Cloud",
      bullets: [
        "AI Smart Insights on Datasphere models",
        "Joule inline assistance in story design",
        "Pixel-perfect executive reporting",
      ],
    },
    {
      icon: BarChart3,
      title: "SAC Planning",
      bullets: [
        "xP&A across finance, HR, and operations",
        "Compass Monte Carlo simulations",
        "Driver-based models replacing spreadsheets",
      ],
    },
    {
      icon: LineChart,
      title: "Power BI",
      bullets: [
        "DirectQuery from Datasphere — zero data movement",
        "Claude AI narrative annotations",
        "RLS matching SAP authorisation objects",
      ],
    },
    {
      icon: Layers,
      title: "Claude AI Layer",
      bullets: [
        "Executive summary generation for every report",
        "Anomaly detection with root-cause narratives",
        "Scenario interpretation & decision support",
      ],
    },
  ];
  return (
    <section className="py-12 sm:py-16" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeUp">
          <Eyebrow text="Capabilities" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What We Deliver
          </h2>
          <p className="text-[14px] sm:text-[13px] mb-8 max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
            End-to-end capability across the full SAP intelligence stack.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-md px-5 py-4 bg-[#0D1014] transition-all duration-300 hover:bg-[#17252C]"
              style={{ border: "1.5px solid #1F221F" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#1B4371]"
                  style={{ border: "1px solid #1E232C" }}
                >
                  <c.icon className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-medium text-white">{c.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[14px] sm:text-[12px] leading-snug" style={{ color: "#8799AB" }}>
                    <span aria-hidden className="mt-[6px] w-1 h-1 rounded-full shrink-0" style={{ background: "#8799AB" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Boardroom Intelligence (accordion of 5 panels) ---------- */
const TEAL = "#30E8BA";
const YELLOW = "#F5BE3D";
const DESC = "#8799AB";

const BoardroomSection = () => {
  const panels = [
    {
      label: "Financial Performance",
      role: "CFO",
      kicker: "Finance",
      title: "Financial Performance",
      desc: "Real-time financial health across all entities — DirectQuery from SAP Datasphere with full row-level security.",
      chips: ["P&L Live", "Cash Flow", "Variance"],
    },
    {
      label: "Sales & Revenue",
      role: "CRO",
      kicker: "Sales",
      title: "Sales & Revenue",
      desc: "Live CRM-to-ERP pipeline — opportunity-level data meets actual bookings with AI-driven forecast accuracy.",
      chips: ["Pipeline", "Win Rate", "ASP"],
    },
    {
      label: "Operations KPIs",
      role: "COO",
      kicker: "Operations",
      title: "Operations KPIs",
      desc: "Plant-floor to warehouse — IoT signals, OEE & SLAs, and Claude AI anomaly alerts in one view.",
      chips: ["OEE", "Adherence", "Turns"],
    },
    {
      label: "FP&A Planning",
      role: "FP&A",
      kicker: "Planning",
      title: "FP&A Planning",
      desc: "What-if & scenario planning pushed from SAP Planning into Power BI for exec board reviews.",
      chips: ["Variance", "Scenarios", "Rolling FC"],
    },
    {
      label: "Workforce Analytics",
      role: "CHRO",
      kicker: "HR",
      title: "Workforce Analytics",
      desc: "SuccessFactors + SAP HCM unified in Datasphere — workforce trends with privacy-compliant RLS.",
      chips: ["Headcount & Attrition", "Talent Pipeline", "Cost per Hire"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(4);

  return (
    <section className="py-10 sm:py-14" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeUp">
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex justify-center">
              <Eyebrow text="Power BI Dashboards" />
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-white leading-[1.15] mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Boardroom{" "}
              <span style={{ color: TEAL, fontFamily: "'Square Peg', cursive", fontStyle: "normal" }}>
                Intelligence
              </span>
            </h2>
            <p className="text-[15px] sm:text-[16px] max-w-2xl mx-auto" style={{ color: DESC }}>
              DirectQuery from SAP Datasphere — zero scheduled refresh, full row-level security.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: horizontal scroll carousel */}
        <div className="sm:hidden -mx-5 px-5 flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: "none" }}>
          {panels.map((p, i) => (
            <div
              key={p.label}
              className="relative shrink-0 snap-start rounded-md overflow-hidden"
              style={{ width: "95%", height: 440, border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${boardroomDashboard})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.9) 100%)" }}
              />
              <div className="relative z-10 h-full w-full flex flex-col justify-end p-5">
                <div className="flex items-center gap-2 mb-3 text-[11px] font-medium tracking-wider uppercase" style={{ color: YELLOW }}>
                  <span>{p.role}</span>
                  <span className="opacity-60">·</span>
                  <span>{p.kicker}</span>
                </div>
                <h3 className="text-white text-[22px] font-medium leading-tight mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-[14px] mb-4" style={{ color: "rgba(220,228,240,0.82)" }}>
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      className="text-[12px] px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(245,190,61,0.12)",
                        color: YELLOW,
                        border: "1px solid rgba(245,190,61,0.35)",
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / tablet: Accordion strip */}
        <div className="hidden sm:flex gap-2 sm:gap-2.5 h-[460px] md:h-[520px]">
          {panels.map((p, i) => {
            const isOpen = i === openIndex;
            return (
              <button
                key={p.label}
                onClick={() => setOpenIndex(i)}
                className="relative overflow-hidden rounded-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none text-left cursor-pointer"
                style={{
                  flex: isOpen ? "1 1 0%" : "0 0 56px",
                  maxWidth: isOpen ? "820px" : "56px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                aria-expanded={isOpen}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    backgroundImage: `url(${boardroomDashboard})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: isOpen ? 1 : 0.55,
                    filter: isOpen ? "none" : "grayscale(0.4) brightness(0.55)",
                  }}
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: isOpen
                      ? "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.85) 100%)"
                      : "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.9) 100%)",
                  }}
                />

                {/* Collapsed: vertical label */}
                {!isOpen && (
                  <div className="relative z-10 h-full w-full flex items-end justify-center pb-6">
                    <span
                      className="text-white text-[13px] sm:text-[14px] font-medium tracking-wide whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {p.label}
                    </span>
                  </div>
                )}

                {/* Open: content */}
                {isOpen && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="relative z-10 h-full w-full flex flex-col justify-end p-5 sm:p-7 md:p-8"
                  >
                    <div className="flex items-center gap-2 mb-3 text-[11px] sm:text-[12px] font-medium tracking-wider uppercase" style={{ color: YELLOW }}>
                      <span>{p.role}</span>
                      <span className="opacity-60">·</span>
                      <span>{p.kicker}</span>
                    </div>
                    <h3 className="text-white text-[22px] sm:text-[26px] md:text-[30px] font-medium leading-tight mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {p.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] max-w-xl mb-5" style={{ color: "rgba(220,228,240,0.78)" }}>
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.chips.map((c) => (
                        <span
                          key={c}
                          className="text-[11px] sm:text-[12px] px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(245,190,61,0.12)",
                            color: YELLOW,
                            border: "1px solid rgba(245,190,61,0.35)",
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer feature row */}
        <div className="mt-6 rounded-md px-5 sm:px-7 py-4 sm:py-5 flex flex-wrap items-center justify-between gap-4 sm:gap-6" style={{ background: "#0B0F18", border: "1px solid rgba(255,255,255,0.06)" }}>
          {[
            { k: "Live", v: "DirectQuery - no refresh lag" },
            { k: "RLS", v: "SAP auth row-level security" },
            { k: "AI", v: "Claude narrative on every page" },
            { k: "MS", v: "Teams & SharePoint native" },
          ].map((f) => (
            <div key={f.k} className="flex items-center gap-3 text-[14px] sm:text-[13px]">
              <span style={{ color: YELLOW }} className="font-medium">{f.k}</span>
              <span style={{ color: "rgba(255,255,255,0.55)" }}>:</span>
              <span className="text-white/85">{f.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ---------- Discovery -> Intelligence (process) ---------- */
const ProcessSection = () => {
  const steps = [
    { icon: Search, label: "Data Audit" },
    { icon: Layers, label: "Architecture" },
    { icon: Sparkles, label: "AI Activation" },
    { icon: Bell, label: "Enablement" },
  ];
  return (
    <section
      className="relative py-12 sm:py-14 overflow-hidden"
      style={{
        background: PURPLE_BG,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <ScrollReveal animation="fadeUp">
          <div className="flex items-center justify-center mb-2">
            <Eyebrow text="Process" />
          </div>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Discovery <span className="text-white">→ Intelligence</span>
          </h2>
          <p className="text-[15px] sm:text-[14px] mb-8" style={{ color: "#8799AB" }}>
            Four phases. No endless blueprints.
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap justify-center gap-4">
          {steps.map((s) => (
            <div
              key={s.label}
              className="px-6 py-3.5 inline-flex items-center gap-2.5 rounded-md"
              style={{ background: "#0D0A23", border: "1.5px solid #1F221F" }}
            >
              <s.icon className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              <span className="text-[15px] sm:text-[13px] font-medium text-white">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Client Impact ---------- */
const ImpactSection = () => {
  const cards = [
    {
      value: "04",
      unit: "Hrs",
      tag: "vs 4 Days",
      desc: (
        <>
          Datasphere <strong className="text-white font-semibold">reduced our month-end close analytics</strong> from four days to just four hours — a <strong className="text-white font-semibold">24x</strong> acceleration
        </>
      ),
      role: "Chief Data Officer",
      company: "Global Manufacturing",
      glow: "radial-gradient(120% 90% at 25% 40%, rgba(40,170,90,0.6) 0%, rgba(20,90,55,0.45) 40%, rgba(0,0,0,0) 75%), #07140C",
      glowHover: "radial-gradient(120% 90% at 75% 60%, rgba(40,170,90,0.6) 0%, rgba(20,90,55,0.45) 40%, rgba(0,0,0,0) 75%), #07140C",
      arrow: "#7BE3A0",
    },
    {
      value: "11",
      unit: "Days",
      tag: "vs 6 weeks",
      desc: (
        <>
          Across <strong className="text-white font-semibold">47 cost centres and 12 countries,</strong> our budget cycle dropped from <strong className="text-white font-semibold">six weeks</strong> to only eleven days.
        </>
      ),
      role: "VP Financial Planning",
      company: "Consumer Goods",
      glow: "radial-gradient(120% 90% at 25% 40%, rgba(210,90,50,0.55) 0%, rgba(120,30,30,0.45) 40%, rgba(0,0,0,0) 75%), #1A0A0A",
      glowHover: "radial-gradient(120% 90% at 75% 60%, rgba(210,90,50,0.55) 0%, rgba(120,30,30,0.45) 40%, rgba(0,0,0,0) 75%), #1A0A0A",
      arrow: "#F08566",
    },
    {
      value: "68",
      unit: "%",
      tag: "Self-Served",
      desc: (
        <>
          With Joule, <strong className="text-white font-semibold">68%</strong> of ad-hoc questions are now <strong className="text-white font-semibold">self-served — and board packs</strong> practically write themselves
        </>
      ),
      role: "Head of Analytics",
      company: "Retail & E-Commerce",
      glow: "radial-gradient(120% 90% at 25% 40%, rgba(60,90,220,0.6) 0%, rgba(90,50,180,0.5) 40%, rgba(0,0,0,0) 75%), #150B30",
      glowHover: "radial-gradient(120% 90% at 75% 60%, rgba(60,90,220,0.6) 0%, rgba(90,50,180,0.5) 40%, rgba(0,0,0,0) 75%), #150B30",
      arrow: "#A8B5FF",
    },
  ];
  return (
    <section className="py-10 sm:py-14" style={{ background: "#000" }}>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeUp">
          <Eyebrow text="Results" />
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium text-white mb-3 leading-[1.15]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Client Impact
          </h2>
          <p className="text-[15px] sm:text-[14px] mb-8" style={{ color: "#8799AB" }}>
            Measurable outcomes across finance, operations, and planning.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-[1040px] mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-[18px] p-6 min-h-[360px] overflow-hidden"
              style={{ background: c.glow, border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* hover glow overlay (mirrored) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                style={{ background: c.glowHover }}
              />
              <div className="relative z-10 flex flex-col h-full min-h-[312px]">
              {/* top row */}
              <div className="flex items-start justify-between mb-7">
                <div className="inline-flex items-center gap-1.5 text-[14px] sm:text-[12px] text-white/90">
                  <Sparkles className="w-3.5 h-3.5 text-white/80" strokeWidth={1.5} />
                  <span>Insight</span>
                </div>
                <span
                  className="text-[13px] sm:text-[11px] px-3 py-1 rounded-full text-white/85"
                  style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.04)" }}
                >
                  {c.tag}
                </span>
              </div>

              {/* big number */}
              <div className="flex items-start gap-1 mb-6 relative">
                <span className="text-[68px] sm:text-[76px] font-medium leading-[0.9] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {c.value}
                </span>
                <span className="text-[22px] font-medium text-white mt-2">{c.unit}</span>
                <ArrowUpRight className="w-5 h-5 ml-2 mt-2" style={{ color: c.arrow }} strokeWidth={1.75} />
              </div>

              {/* description */}
              <p className="text-[12.5px] leading-[1.6] mb-auto" style={{ color: "rgba(255,255,255,0.78)" }}>
                {c.desc}
              </p>

              {/* footer */}
              <div className="mt-7 text-right">
                <div className="text-[15px] sm:text-[14px] font-medium text-white">{c.role}</div>
                <div className="text-[11.5px] mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{c.company}</div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Lime CTA ---------- */
const AnalyticsCTASection = () => (
  <BrandedCTASection
    eyebrow="Get Started"
    title={<>Your Data Is Speaking.<br /><CtaHighlight>Are You Listening?</CtaHighlight></>}
    description="Start with a six-week SAP Analytics maturity scan — we'll surface where your data is hiding decisions, and design an open AI-amplified path forward."
  />
);

const SapAnalyticsPowerBI = () => {
  return (
    <div className="min-h-screen" style={{ background: "#000", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <ConnectsSection />
      <PlainLanguageSection />
      <DeliverSection />
      <BoardroomSection />
      <ProcessSection />
      <ImpactSection />
      <AnalyticsCTASection />
      <FooterSection />
    </div>
  );
};

export default SapAnalyticsPowerBI;
