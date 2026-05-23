import { motion } from "framer-motion";

const IbpCTASection = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Lime/green background */}
      <div className="absolute inset-0" style={{ backgroundColor: "#C8FF00" }} />
      {/* Large faded SAP IBP watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[142px] sm:text-[200px] md:text-[280px] font-black uppercase tracking-widest"
          style={{ color: "rgba(0,0,0,0.06)", fontFamily: "Space Grotesk, sans-serif" }}
        >
          SAP IBP
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <motion.span
          className="text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2"
          style={{ color: "#0D0F14" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px" style={{ backgroundColor: "#0D0F14" }} />
          Start Here
        </motion.span>

        <motion.h2
          className="text-[33px] sm:text-[40px] md:text-[52px] font-medium leading-tight mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif", color: "#0D0F14" }}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <span className="sm:hidden">
            See What Agile SAP IBP
            <br />
            Looks Like for
            <br />
            Your Plant.
          </span>
          <span className="hidden sm:inline">
            See What Agile SAP IBP
            <br />
            Looks Like for Your Plant.
          </span>
        </motion.h2>

        <motion.p
          className="text-[14px] sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ color: "rgba(13,15,20,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          45-minute working session with IBP specialists. We'll map your gaps to change acceleration.
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

            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-none transition-colors text-center text-white hover:opacity-90"
            style={{ background: '#080B14' }}
          >
            CONTACT US
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-none transition-colors text-center text-[#080B14] hover:bg-[#080B14] hover:!text-white"
            style={{ border: '1px solid rgba(8,11,20,0.3)' }}
          >
            EXPLORE MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IbpCTASection;
