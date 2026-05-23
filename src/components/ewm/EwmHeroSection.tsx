import { motion } from "framer-motion";
import heroBg from "@/assets/ewm-hero-bg.png";

const stats = [
  { value: "10wk", label: "Typical Go-Live" },
  { value: "99%+", label: "Inventory Accuracy" },
  { value: "40%", label: "Labour Efficiency" },
  { value: "60%", label: "Fewer Ship Errors" },
];

const EwmHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-[12px] sm:text-xs font-medium uppercase tracking-wider">
            SAP EWM × Warehouse Intelligence
          </span>
        </motion.div>

        <motion.h1
          className="text-[42px] sm:text-[52px] md:text-[64px] font-medium leading-[1.15] tracking-normal mb-5 sm:mb-6 max-w-3xl"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          initial={{ opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-foreground">Smarter Warehouses.</span>
          <br />
          Faster Fulfilment.
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-[15px] sm:text-sm md:text-base max-w-2xl mb-8 sm:mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Built for manufacturers whose shopfloor can't afford to stop.
          <br />
          CarbyneTech deploys SAP EWM solutions engineered for real-world warehouse operations.
          No consultant copy-paste. Just precise configuration that works from Day 1.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:flex items-center gap-6 sm:gap-8 md:gap-16"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 1.1 } } }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold ">
                {stat.value}
              </span>
              <p className="text-muted-foreground text-[12px] sm:text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EwmHeroSection;
