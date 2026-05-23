import { motion } from "framer-motion";
import { FileSpreadsheet, Clock, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";

const reasons = [
  { icon: FileSpreadsheet, value: "73%", label: "Spreadsheet Silos", desc: "Relying on multiple sources of truth across supply chain functions.", color: "#C8FF00" },
  { icon: Clock, value: "18d", label: "Slow Response", desc: "18 days to a full alternate response due to cascading delays.", color: "#FFFFFF" },
  { icon: TrendingUp, value: "+28%", label: "Forecast Blind Spots", desc: "MAPE translates into excess inventory or costly stock-outs.", color: "#0DA3E7" },
  { icon: AlertTriangle, value: "5×", label: "Conflicting Plans", desc: "Five forecasts and consensus among teams is nearly impossible.", color: "#FFFFFF" },
  { icon: DollarSign, value: "12%", label: "Revenue Leakage", desc: "Lost through slow responses, expedite costs and missed sales.", color: "#FF4D6D" },
];

const IbpPlanningGap = () => {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#0D0F14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <motion.span
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
          style={{ color: "#0DA3E7" }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ backgroundColor: "#0DA3E7" }} />
          The Planning Gap
        </motion.span>

        <motion.h2
          className="text-[31px] sm:text-[36px] md:text-[44px] font-medium leading-tight text-white mt-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          5 Reasons Your Plan Never Survives Reality
        </motion.h2>

        <motion.p
          className="text-white/50 text-[12px] sm:text-sm max-w-xl mt-3 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          The hidden costs that spreadsheet-based planning can't solve.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
        >
          {reasons.map(({ icon: Icon, value, label, desc, color }, i) => (
            <motion.div
              key={label}
              className={`rounded-lg p-4 sm:p-5 flex flex-col items-center text-center ${
                i === reasons.length - 1 ? "col-span-2 sm:col-span-1 max-w-[calc(50%-0.375rem)] sm:max-w-none mx-auto sm:mx-0 w-full" : ""
              }`}
              style={{ backgroundColor: "#151A22", border: "1px solid #1E2530" }}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#1A2030" }}>
                <Icon className="w-4 h-4 text-white/60" strokeWidth={1.5} />
              </div>
              <span className="text-2xl sm:text-2xl font-bold mb-1" style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>{value}</span>
              <h4 className="text-white text-[14px] sm:text-[12px] font-semibold mb-1">{label}</h4>
              <p className="text-white/60 sm:text-white/40 text-[12px] sm:text-[10px] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IbpPlanningGap;
