import { motion } from "framer-motion";

const EwmCTASection = () => {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden" style={{ backgroundColor: "#13171D" }}>
      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <motion.span
          className="text-[#21C45D] text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px bg-[#21C45D]" />
          Start Here
        </motion.span>
        <motion.h2
          className="text-[33px] sm:text-[40px] md:text-[52px] font-medium leading-tight mb-4 text-white"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Ready to See What Your
          <br />
          Warehouse{" "}
          <span className="text-[#21C45D] italic" style={{ fontFamily: "Ruthie, cursive", fontSize: "1.3em" }}>
            Could
          </span>{" "}
          Look Like?
        </motion.h2>
        <motion.p
          className="text-white/50 text-[15px] sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Book a free 60-minute warehouse assessment. We'll walk your flows, identify constraints, and
          outline a solution — no obligation.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="/contact"

            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-none transition-opacity hover:opacity-90 text-center"
            style={{ backgroundColor: "#21C45D", color: "#ffffff" }}
          >
            CONTACT US
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-none transition-colors hover:bg-white/5 text-center text-white"
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}
          >
            EXPLORE MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EwmCTASection;
