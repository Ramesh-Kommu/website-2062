import { motion } from "framer-motion";

const interfaces = [
  { title: "Mobile RF & Wearables", desc: "Fiori-based mobile apps for RF scanners and tablets. Offline capability for poor signal zones." },
  { title: "Voice-Directed Picking", desc: "Honeywell Vocollect and Zebra voice integration. Hands-free picking for high-throughput zones." },
  { title: "Pick-by-Light & Put-to-Light", desc: "Light-directed systems for high-velocity piece-pick and sorting operations." },
  { title: "AMR / AGV Integration", desc: "Native Robot Framework for autonomous mobile robots. Task and traffic management in EWM." },
  { title: "Vision & Barcode Systems", desc: "Fixed-mount cameras, tunnel scanners, and handheld imagers for receiving and sortation." },
  { title: "ASRS & Conveyor (MFS)", desc: "Native PLC-level control for automated storage, conveyors, and sortation equipment." },
  { title: "RFID & IoT Sensors", desc: "RFID tracking and IoT sensors for cold chain, compliance, and cycle counting." },
  { title: "Live Analytics Dashboard", desc: "Real-time KPI dashboards — throughput, labour, dock status, and inventory accuracy." },
];

const EwmModernWarehouse = () => {
  return (
    <section className="py-14 sm:py-20" style={{ backgroundColor: "#13171D" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1500px] px-5 sm:px-6 md:px-10 text-center">
        <motion.span
          className="text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 block"
          style={{ color: "#C8FF00" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          — Technology Enablers
        </motion.span>
        <motion.h2
          className="text-[33px] sm:text-[38px] md:text-[50px] font-medium leading-tight mb-12"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Modern Warehouse.
          <span className="italic" style={{ fontFamily: "Ruthie, cursive", fontSize: "1.3em" }}>
            Every Interface Covered...
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
        >
          {interfaces.map((item) => (
            <motion.div
              key={item.title}
              className="p-5 sm:p-6 text-left transition-all duration-300 hover:border-[#C8FF00]/20"
              style={{ backgroundColor: "#05070C", border: "1px solid #0D121A", borderRadius: 0 }}
              variants={{
                hidden: { opacity: 0, y: 50, rotateY: 8 },
                visible: { opacity: 1, y: 0, rotateY: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h4 className="text-foreground text-[15px] sm:text-[15px] font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-[14px] sm:text-[12px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EwmModernWarehouse;
