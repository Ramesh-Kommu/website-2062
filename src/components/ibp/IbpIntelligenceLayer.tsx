import { motion } from "framer-motion";
import iconDemand from "@/assets/intel-icon-demand.png";
import iconException from "@/assets/intel-icon-exception.png";
import iconEchelon from "@/assets/intel-icon-echelon.png";
import iconRisk from "@/assets/intel-icon-risk.png";
import iconModel from "@/assets/intel-icon-model.png";

const topCards = [
  {
    icon: iconDemand,
    value: "+50",
    suffix: "Algorithms",
    title: "Predictive Demand Sensing",
    desc: "POS, Weather, Promotions & Market Signals. Demand Shifts Detected Early.",
    color: "#C8FF00",
  },
  {
    icon: iconException,
    value: "4hr",
    suffix: "Re-plan",
    title: "Autonomous Exception Mgmt",
    desc: "Low-Risk Auto-Resolved. High-Impact Escalated With AI-Ranked Options.",
    color: "#0DA3E7",
  },
  {
    icon: iconEchelon,
    value: "-40%",
    suffix: "Inventory",
    title: "Multi-Echelon Optimisation",
    desc: "Optimal Stock At Every Node — Balancing Service, Capital & Cost.",
    color: "#FF4D6D",
  },
];

const bottomCards = [
  {
    icon: iconRisk,
    value: "Live",
    suffix: "Scoring",
    title: "Supply Risk Intelligence",
    desc: "Geopolitical, Supplier Health & Logistics Disruption Scored Continuously.",
    color: "#0DA3E7",
  },
  {
    icon: iconModel,
    value: "Auto",
    suffix: "Learning",
    title: "Continuous Model Improvement",
    desc: "Every Override Feeds Back Into ML. System Adapts Automatically.",
    color: "#0DA3E7",
  },
];

const IbpIntelligenceLayer = () => {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#080B14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <motion.span
          className="text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2"
          style={{ color: "#0DA3E7" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ backgroundColor: "#0DA3E7" }} />
          Supply Chain AI / ML
        </motion.span>

        <motion.h2
          className="text-[31px] sm:text-[36px] md:text-[44px] font-medium leading-tight text-white mt-4 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          The Intelligence Layer
        </motion.h2>
        <motion.p
          className="text-center text-[33px] sm:text-[38px] md:text-[46px] mb-3"
          style={{ fontFamily: "'Square Peg', cursive", color: "#30E8BA" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Inside Every Deployment
        </motion.p>

        <motion.p
          className="text-white/50 text-[14px] sm:text-sm max-w-2xl mx-auto mb-12 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          SAP IBP's native AI enhanced by Carbynetech's ML accelerators — tuned to mid-market manufacturing.
        </motion.p>

        {/* Top 3 cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
        >
          {topCards.map(({ icon, value, suffix, title, desc, color }) => (
            <motion.div
              key={title}
              className="rounded-lg p-5 group"
              style={{ backgroundColor: "#111820", border: "1px solid #1E2A35" }}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1A2330", border: "1px solid #26333F" }}>
                  <img src={icon} alt={title} className="w-5 h-5 object-contain" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold" style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>{value}</span>
                  <span className="text-white/30 text-[13px]">{suffix}</span>
                </div>
              </div>
              <h4 className="text-white text-[14px] font-semibold mb-1.5">{title}</h4>
              <p className="text-white/40 text-[13px] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom 2 cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[780px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } } }}
        >
          {bottomCards.map(({ icon, value, suffix, title, desc, color }) => (
            <motion.div
              key={title}
              className="rounded-lg p-5"
              style={{ backgroundColor: "#111820", border: "1px solid #1E2A35" }}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1A2330", border: "1px solid #26333F" }}>
                  <img src={icon} alt={title} className="w-5 h-5 object-contain" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold" style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>{value}</span>
                  <span className="text-white/30 text-[13px]">{suffix}</span>
                </div>
              </div>
              <h4 className="text-white text-[14px] font-semibold mb-1.5">{title}</h4>
              <p className="text-white/40 text-[13px] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IbpIntelligenceLayer;
