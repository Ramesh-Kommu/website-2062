import { motion } from "framer-motion";
import checkIcon from "@/assets/check-icon.png";

const painPoints = [
  { label: "Inventory Accuracy Gaps" },
  { label: "Inefficient Pick Paths" },
  { label: "Dock-to-Stock Bottlenecks" },
  { label: "No Real-Time Visibility" },
  { label: "Automation Readiness Gap" },
];

const EwmBusinessReality = () => {
  return (
    <section className="py-14 sm:py-20" style={{ backgroundColor: "#080B14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1500px] px-5 sm:px-6 md:px-10 text-center">
        <motion.span
          className="text-[#9EF916] text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          — The Warehouse Reality
        </motion.span>
        <motion.h2
          className="text-[26px] sm:text-[30px] md:text-[48px] font-medium leading-tight mb-4 max-w-4xl mx-auto text-white"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Your warehouse runs
          <br />
          the business. Is it running at its best?
        </motion.h2>
        <motion.p
          className="text-[#64748B] text-[14px] sm:text-sm max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Mid-market manufacturers face growing warehouse complexity while headcount budgets remain tight.
          Carbynetech's SAP EWM bridges that gap without enterprise-scale disruption.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
        >
          {painPoints.map(({ label }, idx) => (
            <motion.div
              key={label}
              className={`flex items-center justify-center gap-2 sm:gap-3 rounded-md px-3 py-3 sm:px-5 transition-colors duration-200 hover:bg-[#132E28] w-full h-[64px] sm:w-auto sm:h-auto ${idx === painPoints.length - 1 ? 'col-span-2 max-w-[calc(50%-0.375rem)] mx-auto sm:max-w-none' : ''}`}
              style={{ backgroundColor: "#151A1E", border: "1px solid #1F2429" }}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img src={checkIcon} alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[13px] sm:text-[13px] font-medium text-center leading-tight">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EwmBusinessReality;
