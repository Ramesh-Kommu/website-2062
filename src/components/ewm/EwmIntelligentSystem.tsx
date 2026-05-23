import { motion } from "framer-motion";
import inboundImg from "@/assets/ewm-flow-inbound.png";
import outboundImg from "@/assets/ewm-flow-outbound.png";
import pickingImg from "@/assets/ewm-flow-picking.png";
import yardImg from "@/assets/ewm-flow-yard.png";
import stockImg from "@/assets/ewm-flow-stock.png";

const processes = [
  { label: "Inbound Logistics & Goods Receipt", image: inboundImg, tall: true },
  { label: "Intelligent Storage & Slotting", image: stockImg, tall: false },
  { label: "Pick, Pack & Ship Optimisation", image: pickingImg, tall: true },
  { label: "Labour Management & Task Interleaving", image: yardImg, tall: false },
  { label: "Automation & Material Flow System", image: outboundImg, tall: true },
];

const EwmIntelligentSystem = () => {
  return (
    <section className="py-14 sm:py-20" style={{ backgroundColor: "#080B14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <motion.span
          className="flex items-center gap-2 text-[#9cd741] text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px bg-[#9cd741]" />
          Core EWM Capabilities
        </motion.span>
        <motion.h2
          className="text-[33px] sm:text-[40px] md:text-[48px] font-medium leading-tight mb-12 text-white"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Every Warehouse Process.
          <br />
          One <span className="text-[#0DA3E7]">Intelligent System.</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
        >
          {processes.map((p) => (
            <motion.div
              key={p.label}
              className={`group relative overflow-hidden rounded-xl w-full h-[220px] ${p.tall ? 'sm:h-[280px]' : 'sm:h-[252px]'}`}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={p.image}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white text-[17px] sm:text-[15px] font-medium leading-snug block line-clamp-2">{p.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EwmIntelligentSystem;
