import { motion } from "framer-motion";

const EwmIndustrySection = () => {
  return (
    <section
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgba(125, 245, 85, 0.333333) 0%, rgba(73, 143, 50, 0.333333) 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <motion.span
          className="text-primary text-[15px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          — Industries We Serve
        </motion.span>
        <motion.h2
          className="text-[45px] sm:text-[52px] md:text-[64px] font-bold leading-tight mb-2 text-foreground"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 70, clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Warehouse Complexity
        </motion.h2>
        <motion.p
          className="mb-2 text-foreground text-[58px] sm:text-[68px] md:text-[83px]"
          style={{ fontFamily: "Ruthie, cursive", lineHeight: 1 }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Varies by Industry.
        </motion.p>
        <motion.h2
          className="text-[45px] sm:text-[52px] md:text-[64px] font-bold leading-tight mb-6 text-foreground"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 70, clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          We Know Yours.
        </motion.h2>
        <motion.p
          className="text-foreground/70 text-[16px] sm:text-base max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Carbynetech's EWM accelerators are pre-loaded with industry-specific configuration
          for your product types and fulfilment models.
        </motion.p>
      </div>
    </section>
  );
};

export default EwmIndustrySection;
