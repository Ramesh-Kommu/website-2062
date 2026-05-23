import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ibpRapidStart from "@/assets/ibp-rapid-start.png";
import ibpAsAService from "@/assets/ibp-as-a-service.png";
import ibpErpIntegration from "@/assets/ibp-erp-integration.png";
import ibpCommercialPlanning from "@/assets/ibp-commercial-planning.png";
import ibpCapacityPlanner from "@/assets/ibp-capacity-planner.png";
import ibpCapabilityBuilding from "@/assets/ibp-capability-building.png";

const services = [
  {
    icon: ibpRapidStart,
    title: "IBP Rapid Start",
    desc: "Fixed-Scope Implementation With Governance, Training & 90-Day Hypercare.",
    tags: ["Fixed Price", "Turnkey"],
    iconBg: "#1A2F2E",
  },
  {
    icon: ibpAsAService,
    title: "IBP-As-A-Service",
    desc: "Managed Platform — Admin, Model Tuning, KPI Reporting & Planning Advisor.",
    tags: ["Subscription", "Managed"],
    iconBg: "#1A2F2E",
  },
  {
    icon: ibpErpIntegration,
    title: "ERP Integration",
    desc: "Pre-Built Connectors For S/4HANA, NetSuite & Dynamics 365.",
    tags: ["S/4HANA", "NetSuite"],
    iconBg: "#1A2F2E",
  },
  {
    icon: ibpCommercialPlanning,
    title: "Commercial Planning",
    desc: "CRM Pipeline + Trade Promotions Unified With IBP Demand Plans.",
    tags: ["CRM", "Revenue Align"],
    iconBg: "#1A2F2E",
  },
  {
    icon: ibpCapacityPlanner,
    title: "Capacity Planner",
    desc: "RCCP/DCCP For Job-Shop, Flow & Hybrid With Bottleneck Detection.",
    tags: ["Discrete", "Process"],
    iconBg: "#1A2530",
  },
  {
    icon: ibpCapabilityBuilding,
    title: "Capability Building",
    desc: "Role-Based Training In Your Live System, Not A Generic Sandbox.",
    tags: ["Hands-On", "SAP Certified"],
    iconBg: "#1A2530",
  },
];

const IbpServicePortfolio = () => {
  return (
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#0D0F14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <motion.span
          className="text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2"
          style={{ color: "#30E8BA" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ backgroundColor: "#30E8BA" }} />
          Service Portfolio
        </motion.span>

        <motion.h2
          className="text-[31px] sm:text-[36px] md:text-[44px] font-medium leading-tight text-white mt-4 text-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Everything to{" "}
          <span style={{ fontFamily: "'Square Peg', cursive", color: "#30E8BA", fontSize: "1.1em" }}>
            Plan, Respond & Scale
          </span>
        </motion.h2>

        <motion.p
          className="text-white/50 text-[14px] sm:text-sm max-w-xl mx-auto mt-3 mb-12 leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Modular services for mid-market manufacturing — start where pain is greatest.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
        >
          {services.map(({ icon, title, desc, tags, iconBg }) => (
            <motion.div
              key={title}
              className="rounded-lg p-3.5 transition-colors group flex flex-col"
              style={{ backgroundColor: "#11181D", border: "1px solid #29313C" }}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: iconBg, border: "1px solid #26333F" }}
                >
                  <img src={icon} alt={title} className="w-4.5 h-4.5 object-contain" />
                </div>
                <div className="flex gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12px] sm:text-[10px] font-medium tracking-wider px-2.5 py-0.5 rounded-full text-white"
                      style={{
                        backgroundColor: "#112E2D80",
                        border: "1px solid #13574A",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h4 className="text-white text-[15px] sm:text-[15px] font-semibold mb-1.5">
                {title}
              </h4>
              <p className="text-white/40 text-[13px] leading-relaxed mb-2 flex-1">{desc}</p>
              <div className="flex justify-end">
                <ArrowRight className="w-3.5 h-3.5 text-white/30" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IbpServicePortfolio;
