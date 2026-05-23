import { useState } from "react";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import { motion } from "framer-motion";
import {
  Layers, Bot, BookOpen,
  Gauge, ArrowUpRight, Code2,
  ShieldCheck, Plug, GitBranch, ScrollText,
  UserCheck, Wrench, Truck, AlertTriangle, Settings as SettingsIcon,
  CheckCircle2, TrendingUp, Repeat, Sparkles,
  Settings, ShieldCheck as ShieldCheckIcon, Zap,
  Cog, Cloud, Leaf,
  FileCheck, Puzzle, Cpu, BarChart3,
  Search, ClipboardList, Radio, FolderPlus, Eye,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import heroBg from "@/assets/sap-support-hero-bg.png";

const LIME = "#B2F215";
const GREEN_BG = "#1F3A2A";
const GREEN_BORDER = "rgba(178,242,21,0.25)";
const PANEL = "#0F1420";
const PANEL_2 = "#11172A";

/* ---------- Hero ---------- */
const HeroSection = () => {
  const stats = [
    { value: "99.9%", label: "System Uptime" },
    { value: "50+", label: "SAP Modules Supported" },
    { value: "<15min", label: "Avg Response Time" },
    { value: "24/7", label: "Global Coverage" },
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 sm:mb-8"
          style={{ background: "rgba(178,242,21,0.08)", border: `1px solid ${GREEN_BORDER}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: LIME }} />
          <span className="text-[15px] sm:text-[11px] font-medium normal-case tracking-[0.06em]" style={{ color: LIME }}>
            SAP Application Management & Support
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[42px] sm:text-[48px] md:text-[60px] font-medium leading-[1.08] mb-5 max-w-[900px] whitespace-normal text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Empower Your Business with<br />
          Intelligent SAP Support.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[17px] sm:text-[14px] max-w-xl mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Leverage AI-powered monitoring, automation, and continuous optimization to keep your SAP landscape stable, scalable, and future-ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 max-w-3xl"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[34px] sm:text-[34px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.value}</div>
              <div className="text-[15px] sm:text-[12px] mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Section header helper ---------- */
const Eyebrow = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center gap-3 mb-4">
    <div className="w-8 h-px" style={{ background: LIME }} />
    <span className="text-[15px] sm:text-[12px] font-medium tracking-wide" style={{ color: LIME }}>{text}</span>
  </div>
);

/* ---------- Scroll Reveal helper ---------- */
const Reveal = ({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ---------- 2. AMS Evolution (tabs) ---------- */
const tabsData = [
  {
    key: "legacy", label: "Legacy AMS", icon: Settings,
    title: "Legacy AMS", badge: "Traditional",
    items: [
      "Incident-based support",
      "Manual troubleshooting",
      "Limited monitoring",
      "Slow change implementation",
    ],
  },
  {
    key: "managed", label: "Managed AMS", icon: ShieldCheckIcon,
    title: "Managed AMS", badge: "Modern",
    items: [
      "SLA-driven support",
      "Proactive monitoring & alerts",
      "Functional experts across modules",
      "Structured change management",
    ],
  },
  {
    key: "intelligent", label: "Intelligent AMS", icon: Zap,
    title: "Intelligent AMS", badge: "Our Model",
    items: [
      "AI-assisted incident detection",
      "Predictive monitoring",
      "Clean core-aligned changes",
      "Continuous improvements & visibility",
    ],
  },
];

const EvolutionSection = () => {
  const [active, setActive] = useState("intelligent");
  return (
    <section className="py-8 sm:py-10" style={{ background: "#060604" }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="text-center mb-7">
          <Eyebrow text="The AMS Evolution" />
          <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            SAP Support Has Changed Forever
          </h2>
          <p className="mt-3 text-[17px] sm:text-[14px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            Has your provider kept up?
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
          {tabsData.map((t) => {
            const isActive = active === t.key;
            const TabIcon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-[16px] sm:text-[13px] font-medium rounded-md transition-all"
                style={{
                  background: isActive ? "#21C45D" : "#1E2229",
                  color: isActive ? "#000" : "#FFFFFF",
                  border: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <TabIcon className="w-4 h-4" style={{ color: isActive ? "#000" : "#FFFFFF" }} />
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[820px] mx-auto">
          {tabsData.map((t) => {
            const highlighted = t.key === active;
            const CardIcon = t.icon;
            return (
              <div
                key={t.key}
                className="p-5 rounded-xl transition-all"
                style={{
                  background: highlighted ? "#121F17" : "#1A1D23",
                  border: highlighted ? "0.5px solid rgba(33,196,93,0.5)" : "1px solid #23262D",
                  boxShadow: highlighted ? "0 0 40px rgba(33,196,93,0.12)" : "none",
                }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0" style={{ background: highlighted ? "#21C45D" : "#23272F" }}>
                    <CardIcon className="w-3.5 h-3.5" style={{ color: highlighted ? "#000" : "#FFFFFF" }} />
                  </div>
                  <h3 className="text-white text-[17px] sm:text-[14px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {t.title}
                    <span className="ml-1.5 text-[14px] sm:text-[11px] font-normal" style={{ color: "#8799AB" }}>({t.badge})</span>
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-2 text-[15px] sm:text-[12px] leading-relaxed" style={{ color: "#8799AB" }}>
                      <span style={{ color: "#8799AB" }}>•</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------- 3. Forces Reshaping ---------- */
const forcesData = [
  {
    stat: "60%", label: "Faster Resolution",
    icon: Cog, title: "AI-Driven Automation",
    desc: "AI and Machine Learning transform SAP AMS with intelligent monitoring, automated ticket classification, and faster incident resolution.",
    bullets: [
      "Auto-classify and route support tickets",
      "Predict system issues before impact",
      "Automate recurring incident resolution",
    ],
  },
  {
    stat: "3×", label: "More Scalable",
    icon: Cloud, title: "Cloud & Modern SAP",
    desc: "S/4HANA, RISE with SAP, and cloud platforms make SAP environments more connected, flexible, and scalable.",
    bullets: [
      "Hybrid and cloud landscape support",
      "Seamless cross-system integration",
      "Enhanced scalability monitoring",
    ],
  },
  {
    stat: "70%", label: "Less Custom Code",
    icon: Leaf, title: "Clean Core & Improvement",
    desc: "Organizations adopt Clean Core strategy to keep SAP systems stable, upgrade-ready, and innovation-friendly.",
    bullets: [
      "Minimize heavy core customizations",
      "Build extensions via modern platforms",
      "Continuously optimize performance",
    ],
  },
];

const ForcesSection = () => (
  <section className="py-8 sm:py-10" style={{ background: "#15181E" }}>
    <div className="max-w-[1080px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-6 h-px" style={{ background: LIME }} />
          <span className="text-[15px] sm:text-[12px] font-medium" style={{ color: LIME, fontFamily: "'Space Grotesk', sans-serif" }}>
            New Trends in SAP AMS
          </span>
        </div>
        <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-[1.1] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          The Forces Reshaping<br />Application Management
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
        {forcesData.map((f) => (
          <div
            key={f.title}
            className="rounded-xl overflow-hidden bg-[#1A1D23] border border-[#23262D] transition-colors duration-300 hover:bg-[#21252E] hover:border-[#2E3540]"
          >
            <div className="flex items-baseline gap-2 px-5 pt-5 pb-3" style={{ backgroundImage: "linear-gradient(to right, rgba(135,153,171,0.35) 0%, rgba(135,153,171,0.35) 50%, transparent 50%)", backgroundSize: "100% 0.5px", backgroundPosition: "left bottom", backgroundRepeat: "no-repeat" }}>
              <span className="text-[24px] font-semibold leading-none" style={{ color: LIME, fontFamily: "'Space Grotesk', sans-serif" }}>
                {f.stat}
              </span>
              <span className="text-[14px] sm:text-[11px]" style={{ color: "#8799AB" }}>{f.label}</span>
            </div>

            <div className="flex items-center gap-2 px-5 pt-3 mb-3">
              <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: "#23272F" }}>
                <f.icon className="w-3 h-3" style={{ color: "#FFFFFF" }} />
              </div>
              <h3 className="text-white text-[16px] sm:text-[12px] font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {f.title}
              </h3>
            </div>

            <p className="px-5 text-[15px] sm:text-[11px] leading-relaxed mb-3" style={{ color: "#8799AB" }}>
              {f.desc}
            </p>

            <ul className="space-y-1 px-5 pb-5">
              {f.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-[14px] sm:text-[10.5px] leading-relaxed" style={{ color: "#8799AB" }}>
                  <span>•</span>{b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 4. Clean Core ---------- */
const coreCards = [
  { icon: FileCheck, title: "Process Compliance First", desc: "Evaluate standard SAP functionality before custom development." },
  { icon: Puzzle, title: "BTP-Based Extensions", desc: "Extend using SAP BTP — keeping the core stable and upgrade-safe." },
  { icon: Cpu, title: "API-First Integration", desc: "Modern API architectures for future-proof integrations." },
  { icon: BarChart3, title: "Continuous Optimization", desc: "Regular code reviews to eliminate technical debt." },
];

const CleanCoreSection = () => (
  <section className="py-8 sm:py-10" style={{ background: "#060604" }}>
    <div className="max-w-[1100px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <div className="text-center mb-7">
        <Eyebrow text="Clean Core Strategy" />
        <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-[1.1] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Protect Your SAP Core.<br />Extend Without Compromise.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[960px] mx-auto">
        {coreCards.map((c) => (
          <div key={c.title} className="p-5 rounded-xl flex gap-3.5 bg-[#1A1D23] border border-[#23262D] transition-colors duration-300 hover:bg-[#21252E] hover:border-[#2E3540]">
            <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0" style={{ background: "#1A2E28" }}>
              <c.icon className="w-4 h-4" style={{ color: "#FFFFFF" }} />
            </div>
            <div>
              <h3 className="text-white text-[17px] sm:text-[14px] font-semibold mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.title}</h3>
              <p className="text-[15px] sm:text-[12px] leading-relaxed" style={{ color: "#8799AB" }}>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 4b. Business Impact ---------- */
const businessImpactStats = [
  { value: "−70%", label: "Custom Code Reduction" },
  { value: "3×", label: "Faster Upgrade Cycles" },
  { value: "−45%", label: "Regression Testing Effort" },
  { value: "40%", label: "Legacy Mods Retired" },
];

const BusinessImpactSection = () => (
  <section className="py-8 sm:py-10" style={{ background: "#10231C" }}>
    <div className="max-w-[1100px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <div className="text-center mb-8">
        <h3 className="text-[22px] sm:text-[18px] font-semibold" style={{ color: LIME, fontFamily: "'Space Grotesk', sans-serif" }}>
          Business Impact
        </h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1000px] mx-auto">
        {businessImpactStats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-5"
            style={{
              background: "linear-gradient(98.29deg, #224A35 3.65%, #195F3D 94.22%)",
              border: "1px solid rgba(178,242,21,0.18)",
            }}
          >
            <div className="text-[36px] sm:text-[32px] font-semibold leading-none mb-2" style={{ color: LIME, fontFamily: "'Space Grotesk', sans-serif" }}>
              {s.value}
            </div>
            <div className="text-[15px] sm:text-[12px] mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
              {s.label}
            </div>
            <div className="h-px w-full" style={{ background: "linear-gradient(to right, rgba(178,242,21,0.55) 0%, rgba(178,242,21,0.55) 50%, rgba(255,255,255,0.08) 50%)" }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 5. Migration Journey ---------- */
const journeySteps = [
  { icon: Search, phase: "Pre-Migration", title: "Assess", desc: "Landscape assessment & readiness evaluation" },
  { icon: ClipboardList, phase: "Build Phase", title: "Plan & Build", desc: "Parallel stabilization and system preparation" },
  { icon: Radio, phase: "Cutover", title: "Go-Live", desc: "Cutover support ensuring seamless transition" },
  { icon: FolderPlus, phase: "Post Go-Live", title: "Hypercare", desc: "Intensive monitoring and rapid issue resolution" },
  { icon: Eye, phase: "Steady State", title: "Optimize", desc: "Intelligent AMS and continuous optimization" },
];

const JourneySection = () => (
  <section className="py-8 sm:py-10" style={{ background: "#060604" }}>
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-center mb-8">
        <Eyebrow text="S/4HANA Migration" />
        <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-[1.1] text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Supporting Your<br />Transformation Journey
        </h2>
        <p className="mt-4 text-[17px] sm:text-[14px]" style={{ color: "#8799AB" }}>
          End-to-end migration support ensuring stability and continuity at every stage.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-[980px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      >
        {journeySteps.map((s, i) => (
          <motion.div
            key={s.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group text-center rounded-lg p-3 transition-colors duration-300 hover:bg-[#11151B]"
          >
            <div
              className="mx-auto w-11 h-11 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[rgba(33,196,93,0.25)] group-hover:scale-110 group-hover:rotate-3"
              style={{ background: "rgba(33,196,93,0.10)", border: "1px solid #133B29" }}
            >
              <s.icon className="w-4 h-4 transition-colors duration-300 group-hover:text-[#B2F215]" style={{ color: "#FFFFFF" }} />
            </div>
            <div className="text-[14px] sm:text-[10.5px] mb-1" style={{ color: "#21C45D", fontFamily: "'Space Grotesk', sans-serif" }}>
              Step {i + 1} <span style={{ color: "#21C45D", opacity: 0.85 }}>({s.phase})</span>
            </div>
            <h3 className="text-white text-[15px] sm:text-[13px] font-semibold mb-1.5 transition-colors duration-300 group-hover:text-[#B2F215]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
            <p className="text-[14px] sm:text-[10.5px] leading-relaxed mx-auto max-w-[160px]" style={{ color: "#8799AB" }}>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ---------- 6. Pricing Plans ---------- */
const plans = [
  {
    badge: "Essential Support", name: "Core AMS", featured: false,
    desc: "Maintain SAP system stability and ensure smooth day-to-day operations.",
    items: [
      "Incident and problem management",
      "Basic system monitoring",
      "SLA-based support and issue resolution",
      "Standard change management",
    ],
    cta: "Contact Sales",
  },
  {
    badge: "Enhanced Support", name: "AMS Pro", featured: true,
    desc: "Proactive monitoring and ongoing system optimization for growing enterprises.",
    items: [
      "Proactive system monitoring & prevention",
      "Functional & technical module support",
      "Performance improvements & enhancements",
      "Dedicated support team",
      "Monthly optimization reports",
    ],
    cta: "Get Started",
  },
  {
    badge: "Advanced Support", name: "AMS Elite", featured: false,
    desc: "Complex SAP environments with focus on innovation and continuous improvement.",
    items: [
      "AI-driven monitoring and automation",
      "Continuous optimization & strategic improvements",
      "Advisory support for transformation",
      "Executive dashboards & analytics",
      "24/7 priority response",
    ],
    cta: "Contact Sales",
  },
];

const PlansSection = () => (
  <section className="py-8 sm:py-10" style={{ background: "#15181E" }}>
    <div className="max-w-[920px] mx-auto px-5 sm:px-6 md:px-8">
      <div className="text-center mb-8">
        <Eyebrow text="Service Tiers" />
        <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Flexible Plans for Every Need
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {plans.map((p) => (
          <div
            key={p.name}
            className="rounded-lg p-5 flex flex-col h-full"
            style={{
              background: p.featured ? "#21C45D" : "#1A1D23",
              border: p.featured ? "1px solid transparent" : "1px solid #23262D",
              boxShadow: p.featured ? "0 25px 60px rgba(33,196,93,0.25)" : "none",
              transform: p.featured ? "translateY(-12px)" : "none",
              paddingBottom: p.featured ? "28px" : undefined,
            }}
          >
            <div className="text-[14px] sm:text-[10px] font-medium mb-2" style={{ color: p.featured ? "#15181E" : "#25F973" }}>{p.badge}</div>
            <h3 className="text-[22px] sm:text-[18px] font-semibold mb-2" style={{ color: p.featured ? "#15181E" : "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
            <p className="text-[15px] sm:text-[11.5px] leading-relaxed mb-4" style={{ color: p.featured ? "#15181E" : "#8799AB" }}>{p.desc}</p>
            <ul className="space-y-2 flex-1 mb-5">
              {p.items.map((it) => (
                <li key={it} className="flex gap-2 text-[15px] sm:text-[11.5px] leading-relaxed" style={{ color: p.featured ? "#15181E" : "#8799AB" }}>
                  <span className="mt-[6px] w-1 h-1 rounded-full shrink-0" style={{ background: p.featured ? "#15181E" : "#8799AB" }} />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <button
              className="w-full py-2.5 text-[16px] sm:text-[12px] font-medium rounded-md transition-all mt-auto"
              style={{
                background: p.featured ? "#0E1115" : "#21C45D",
                color: p.featured ? "#21C45D" : "#000",
              }}
            >
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 7. Customer Value ---------- */
const valueCards = [
  { icon: Gauge, badge: "Performance", title: "Higher System Stability", desc: "Proactive monitoring ensures business continuity and minimum unplanned downtime." },
  { icon: ArrowUpRight, badge: "Efficiency", title: "Faster Issue Resolution", desc: "AI-powered incident routing reduces mean-time to resolve by up to 60%." },
  { icon: Repeat, badge: "Optimization", title: "Continuous Optimization", desc: "Always-on tuning improves throughput across business processes by 30%." },
  { icon: TrendingUp, badge: "Innovation", title: "Digital Transformation", desc: "Modernization that helps you accelerate to a cloud-first future." },
];

const ValueSection = () => (
  <section className="py-8 sm:py-10" style={{ background: "#060604" }}>
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
      <div className="text-center mb-7">
        <Eyebrow text="Customer Value" />
        <h2 className="text-[36px] sm:text-[40px] md:text-[48px] font-medium leading-tight text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Everything You Need. All in One Place.
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {valueCards.map((c) => (
          <div key={c.title} className="group p-4 rounded-lg text-center w-[210px] bg-[#1A1D23] border border-[#23262D] transition-colors duration-300 hover:bg-[#21252E] hover:border-[#2E3540]">
            <div className="mx-auto w-9 h-9 rounded-md flex items-center justify-center mb-3" style={{ background: "#1A2E28" }}>
              <c.icon className="w-3.5 h-3.5" style={{ color: "#fff" }} />
            </div>
            <div className="text-[13px] sm:text-[9px] uppercase tracking-wider mb-2" style={{ color: "#21C45D" }}>{c.badge}</div>
            <h3 className="text-white text-[16px] sm:text-[12px] font-semibold mb-2 whitespace-nowrap transition-all duration-300 group-hover:sm:text-[13px] group-hover:text-[#B2F215]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.title}</h3>
            <p className="text-[14px] sm:text-[10.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------- 8. Final CTA ---------- */
const CTASection = () => (
  <BrandedCTASection
    title={<>Ready to Transform Your<br /><CtaHighlight>SAP Support?</CtaHighlight></>}
    description="Let's discuss how CarbyneTech can help you move from reactive to intelligent SAP management."
  />
);

/* ---------- Page ---------- */
const SapApplicationSupport = () => {
  return (
    <div className="min-h-screen" style={{ background: "#0A0E1A" }}>
      <Navbar />
      <HeroSection />
      <Reveal><EvolutionSection /></Reveal>
      <Reveal><ForcesSection /></Reveal>
      <Reveal><CleanCoreSection /></Reveal>
      <Reveal><BusinessImpactSection /></Reveal>
      <Reveal><JourneySection /></Reveal>
      <Reveal><PlansSection /></Reveal>
      <Reveal><ValueSection /></Reveal>
      <Reveal><CTASection /></Reveal>
      <FooterSection />
    </div>
  );
};

export default SapApplicationSupport;
