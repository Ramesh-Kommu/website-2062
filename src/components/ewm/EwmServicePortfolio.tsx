import { motion } from "framer-motion";
import { Rocket, RefreshCw, Link, Settings, Eye, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "EWM Rapid Start Programme",
    desc: "Fixed-scope, fixed-price implementation. 10-week timeline from kickoff to live operations with 90-day hypercare.",
  },
  {
    icon: RefreshCw,
    title: "Legacy WMS Migration",
    desc: "Structured migration extracts, cleanses, and validates data before cutover — eliminating quality risks.",
  },
  {
    icon: Link,
    title: "ERP & TMS Integration",
    desc: "Pre-built templates connecting EWM to SAP ECC, S/4HANA, and leading TMS with real-time sync.",
  },
  {
    icon: Settings,
    title: "Automation Integration",
    desc: "Connect conveyors, AS/RS, AMR directly to SAP EWM — unified control of people and machines.",
  },
  {
    icon: Eye,
    title: "EWM Managed Operations",
    desc: "System admin, performance monitoring, slotting reviews, and a dedicated warehouse systems advisor.",
  },
  {
    icon: GraduationCap,
    title: "Warehouse Operations Training",
    desc: "Role-specific training in your live environment with process playbooks and supervisor certification.",
  },
];

const EwmServicePortfolio = () => {
  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: "#080B14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1500px] px-5 sm:px-6 md:px-10">
        <motion.span
          className="text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
          style={{ color: "#21C45D" }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ backgroundColor: "#21C45D" }} />
          Carbynetech EWM Services
        </motion.span>
        <motion.h2
          className="text-[31px] sm:text-[36px] md:text-[44px] font-medium leading-tight text-white mt-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The Complete EWM
          <br />
          Service Portfolio
        </motion.h2>
        <motion.p
          className="text-white/60 text-[14px] sm:text-sm max-w-xl mt-4 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          From rapid implementation to managed services — capability without complexity.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              className="rounded-lg p-4 transition-colors group"
              style={{ backgroundColor: "#151A1E", border: "1px solid #282E33" }}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center mb-3"
                style={{ backgroundColor: "#132E28" }}
              >
                <Icon className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <h4 className="text-white text-[14px] sm:text-[14px] font-semibold mb-1.5 group-hover:text-[#21C45D] transition-colors">
                {title}
              </h4>
              <p className="text-white/50 text-[13px] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EwmServicePortfolio;
