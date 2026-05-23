import { motion } from "framer-motion";
import iconCore from "@/assets/ibp-icon-core.png";
import iconAdvanced from "@/assets/ibp-icon-advanced.png";
import iconResponse from "@/assets/ibp-icon-response.png";

const packs = [
  {
    tier: "Core",
    tierColor: "#13715D",
    icon: iconCore,
    title: "Demand & Supply Sync",
    desc: "AI-powered demand sensing with pre-loaded manufacturing templates.",
    features: [
      "ML Forecasting · 50+ Algorithms",
      "Sales consensus workflow",
      "AI safety stock optimization",
      "OTIF / MAPE dashboards",
      "S/4HANA integration",
    ],
    footer: "Teams replacing spreadsheet S&OP",
  },
  {
    tier: "Advanced",
    tierColor: "#F5BE3D",
    icon: iconAdvanced,
    title: "S&OP Command Center",
    desc: "Data-driven leadership cadence — finance, supply & revenue aligned.",
    features: [
      "Financial + volume reconciliation",
      "Capacity-constrained supply plan",
      "Scenario simulation with P&L impact",
      "Auto executive S&OP decks",
      "Multi-plant network optimisation",
    ],
    footer: "Leadership teams ready for real-time S&OP",
  },
  {
    tier: "Response",
    tierColor: "#38BACB",
    icon: iconResponse,
    title: "Real-Time Response Planning",
    desc: "AI-ranked alternate scenarios ready before disruption escalates.",
    features: [
      "Event-driven re-planning triggers",
      "Multi-echelon re-optimisation",
      "Constraint-based ATP & order promising",
      "Supply risk scoring engine",
      "Disruption war room dashboard",
    ],
    footer: "Manufacturers exposed to supply volatility",
  },
];

const IbpThreePacks = () => {
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
          SAP IBP Accelerators
        </motion.span>

        <motion.h2
          className="text-[31px] sm:text-[36px] md:text-[44px] font-medium leading-tight text-white mt-4 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Three Packs.{" "}
          <span style={{ fontFamily: "'Square Peg', cursive", color: "#30E8BA", fontSize: "1.1em" }}>
            One Live Platform.
          </span>
        </motion.h2>

        <motion.p
          className="text-white/50 text-[14px] sm:text-sm max-w-xl mx-auto mt-3 mb-12 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Pre-configured for manufacturing. 70% faster than build-from-scratch.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
        >
          {packs.map(({ tier, tierColor, icon, title, desc, features, footer }) => (
            <motion.div
              key={title}
              className="rounded-lg p-5 sm:p-6 flex flex-col overflow-hidden"
              style={{ backgroundColor: "#10151B", border: "1px solid #26282ECC", borderBottom: `3px solid ${tierColor}` }}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ border: `1px solid #26282ECC` }}
                >
                  <img src={icon} alt={tier} className="w-6 h-6 object-contain" />
                </div>
                <span
                  className="text-[12px] font-bold uppercase tracking-wider"
                  style={{ color: tierColor, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  ({tier})
                </span>
              </div>

              <h3 className="text-white text-[18px] sm:text-[18px] font-semibold mb-2">{title}</h3>
              <p className="text-white/40 text-[14px] sm:text-[12px] leading-relaxed mb-4">{desc}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/60 text-[14px] sm:text-[12px]">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: tierColor }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="-mx-5 sm:-mx-6 -mb-5 sm:-mb-6 mt-auto">
                <div className="h-px" style={{ backgroundColor: "#26282ECC" }} />
                <div className="px-5 sm:px-6 py-3">
                  <p className="text-white/40 text-[13px] sm:text-[11px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {footer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IbpThreePacks;
