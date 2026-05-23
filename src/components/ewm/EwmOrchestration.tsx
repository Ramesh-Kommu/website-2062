import { motion } from "framer-motion";
import iconDock from "@/assets/icon-dock.png";
import iconPick from "@/assets/icon-pick.png";
import iconPutaway from "@/assets/icon-putaway.png";
import iconPacking from "@/assets/icon-packing.png";
import iconShipment from "@/assets/icon-shipment.png";

const features = [
  { title: "Dock Scheduling & Receiving", desc: "Carrier arrivals pre-scheduled. Dock doors assigned by commodity and crew availability.", icon: iconDock },
  { title: "Optimised Pick Execution", desc: "Wave management releases orders in priority batches. Pick paths minimise travel.", icon: iconPick },
  { title: "Intelligent Putaway & Slotting", desc: "EWM calculates optimal bin for every pallet — balancing velocity, weight, and capacity.", icon: iconPutaway },
  { title: "Packing, Kitting & VAS", desc: "Pack stations enforce instructions, capture weights, and auto-select carton sizes.", icon: iconPacking },
  { title: "Shipment & Carrier Execution", desc: "Shipments consolidated, manifested, and tendered to carriers with real-time POD.", icon: iconShipment },
];

const chartData = [
  { label: "Pick Accuracy Rate", value: 85, display: "99.2%", note: "vs 94% baseline", isRed: false },
  { label: "Inventory Accuracy", value: 90, display: "99.5%", note: "real-time cycle count", isRed: false },
  { label: "Labour Productivity", value: 40, display: "+40%", note: "units per labour hour", isRed: false },
  { label: "Dock Cycle Time", value: 38, display: "~38%", note: "dock-to-stock hours", isRed: true },
  { label: "OTIF Performance", value: 80, display: "96%", note: "on-time-in-full", isRed: false },
  { label: "Space Utilisation", value: 35, display: "+28%", note: "same footprint, more SKUs", isRed: true },
];

const EwmOrchestration = () => {
  return (
    <section className="py-14 sm:py-20" style={{ backgroundColor: "#080B14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1500px] px-5 sm:px-6 md:px-10">
        <motion.span
          className="text-primary text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 block"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          — How the Warehouse Flows
        </motion.span>
        <motion.h2
          className="text-[33px] sm:text-[38px] md:text-[48px] font-medium leading-tight mb-3"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          End-to-End
          <br />
          <span style={{ color: "#0DA3E7" }}>Warehouse Orchestration</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-[14px] sm:text-sm max-w-2xl mb-14 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Carbynetech configures SAP EWM to mirror and optimise your physical warehouse flows.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 items-start">
          {/* Left: Features */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                className="flex gap-3 items-start"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded"
                  style={{ backgroundColor: "#282E33" }}
                >
                  <img src={f.icon} alt="" className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-foreground text-[14px] sm:text-[14px] font-semibold block mb-0.5">
                    {f.title}
                  </span>
                  <p className="text-muted-foreground text-[14px] sm:text-[12px] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-primary text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
              — Operational Impact
            </span>
            <h3
              className="text-[24px] sm:text-[24px] font-semibold mb-5 text-foreground"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              What Changes{" "}
              <span className="font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#0DA3E7" }}>
                After Go-Live
              </span>
            </h3>
            <div className="flex flex-col gap-4">
              {chartData.map((d, i) => (
                <div key={d.label}>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground text-[14px] sm:text-[12px] w-[130px] flex-shrink-0 text-left">
                      {d.label}
                    </span>
                    <div
                      className="flex-1 h-[22px] rounded-[2px] overflow-hidden"
                      style={{ border: "1px solid #5D6F82", backgroundColor: "transparent" }}
                    >
                      <motion.div
                        className="h-full rounded-[2px]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${d.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{
                          backgroundColor: d.isRed ? "#EF4444" : "#00E686",
                        }}
                      />
                    </div>
                    <motion.span
                      className="text-foreground text-[15px] sm:text-[13px] font-semibold w-[45px] flex-shrink-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
                    >
                      {d.display}
                    </motion.span>
                    <span className="text-muted-foreground text-[12px] sm:text-[10px] w-[120px] flex-shrink-0 hidden sm:block italic">
                      {d.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EwmOrchestration;
