import { motion } from "framer-motion";
import iconDemand from "@/assets/ibp-icon-demand.png";
import iconSupply from "@/assets/ibp-icon-supply.png";
import iconReconciliation from "@/assets/ibp-icon-reconciliation.png";
import iconExecutive from "@/assets/ibp-icon-executive.png";
import iconMonitor from "@/assets/ibp-icon-monitor.png";

const steps = [
  { icon: iconDemand, title: "Demand Review", desc: "AI statistical baseline with market intelligence & sales consensus." },
  { icon: iconSupply, title: "Supply Review", desc: "Auto capacity-constrained supply plan. Gaps ranked by revenue impact." },
  { icon: iconReconciliation, title: "Reconciliation", desc: "P&L impact pre-calculated. Scenarios ranked for leadership decisions." },
  { icon: iconExecutive, title: "Executive S&OP", desc: "One plan cascades to production, procurement, logistics & finance." },
  { icon: iconMonitor, title: "Live Monitor", desc: "Real-time exception alerts between formal cycles." },
];

const metrics = [
  { value: "35%", label: "Forecast accuracy gain", color: "#30E8BA" },
  { value: "-40%", label: "Excess inventory cut", color: "#3CCADD" },
  { value: "3×", label: "Faster signal-to-decision", color: "#F5BE3D" },
  { value: "60%", label: "Less manual planning", color: "#E25050" },
  { value: "4hrs", label: "Disruption re-plan", color: "#30E8BA" },
  { value: "98%", label: "OTIF at Month 6", color: "#3CCADD" },
];

const IbpAlignmentSection = () => {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#070A07" }}>
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
          S&OP Alignment
        </motion.span>

        <motion.h2
          className="text-[31px] sm:text-[36px] md:text-[44px] font-medium leading-tight text-white mt-4 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          From Monthly Firefighting to
        </motion.h2>
        <motion.p
          className="text-center text-[33px] sm:text-[38px] md:text-[46px] mb-3"
          style={{ fontFamily: "'Square Peg', cursive", color: "#21C45D" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Continuous Alignment
        </motion.p>

        <motion.p
          className="text-white/50 text-[14px] sm:text-sm max-w-xl mx-auto mb-12 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Proven S&OP process framework embedded alongside the technology.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Left: Steps */}
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {steps.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                className="flex items-start gap-4 rounded-lg p-4 flex-1"
                style={{ backgroundColor: "#10151B", border: "1px solid #26282ECC" }}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <img src={icon} alt={title} className="w-5 h-5 mt-0.5 shrink-0 object-contain" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white text-[15px] font-semibold mb-1">{title}</h4>
                  <p className="text-white/40 text-[13px] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Metrics Grid */}
          <motion.div
            className="grid grid-cols-2 grid-rows-3 gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
          >
            {metrics.map(({ value, label, color }) => (
              <motion.div
                key={label}
                className="rounded-lg p-4 sm:p-5 flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: "#10151B", border: "1px solid #26282ECC" }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {value}
                </span>
                <p className="text-white/50 text-[13px] sm:text-[11px] mt-2">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IbpAlignmentSection;
