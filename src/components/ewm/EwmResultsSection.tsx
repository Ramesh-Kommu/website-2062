import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    stars: 5,
    quote:
      "Carbynetech deployed SAP EWM in eleven weeks — pick accuracy went from 94.2% to 99.1% within the first month. Data migration was flawless.",
    author: "Head of Warehouse Operations",
    company: "A leading automotive parts manufacturer",
  },
  {
    stars: 5,
    quote:
      "They integrated six Locus robots directly into EWM. Labour productivity in our piece-pick zone jumped 43% in the first quarter.",
    author: "VP Logistics & Fulfilment",
    company: "Consumer Goods",
  },
];

const EwmResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-12 sm:py-16" style={{ backgroundColor: "#080B14" }}>
      <div className="mx-auto max-w-[1200px] xl:max-w-[1320px] 2xl:max-w-[1500px] px-5 sm:px-6 md:px-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-10 sm:mb-14">
          <div>
            <motion.span
              className="text-[#21C45D] text-[13px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-6 h-px bg-[#21C45D]" />
              Client Outcomes
            </motion.span>
            <motion.h2
              className="text-[31px] sm:text-[36px] md:text-[44px] font-medium leading-tight text-white mt-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Warehouses Transformed.
              <br />
              Results That Speak.
            </motion.h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 mt-auto pt-8">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              className="w-9 h-9 flex items-center justify-center rounded-sm border transition-colors"
              style={{ borderColor: "#303940", backgroundColor: "#151A1E" }}
            >
              <ChevronLeft className="w-4 h-4 text-white/50" />
            </button>
            <button
              onClick={() => setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1))}
              className="w-9 h-9 flex items-center justify-center rounded-sm border transition-colors"
              style={{ borderColor: "#303940", backgroundColor: "#151A1E" }}
            >
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative rounded-lg p-6 sm:p-8 border"
              style={{ backgroundColor: "#151A1E", borderColor: "#303940" }}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Quote mark */}
              <span
                className="absolute top-5 right-5 sm:top-6 sm:right-6 text-[71px] sm:text-[72px] font-serif leading-none select-none"
                style={{ color: "#132E28" }}
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} className="text-sm" style={{ color: "#20A374" }}>★</span>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/70 text-[14px] sm:text-[14px] leading-relaxed mb-8 pr-12">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{ backgroundColor: "#132E28", color: "#20A374" }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-[15px] sm:text-[13px] font-medium">{t.author}</p>
                  <p className="text-white/40 text-[14px] sm:text-[12px]">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EwmResultsSection;
