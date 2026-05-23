import { ReactNode } from "react";
import ScrollReveal from "@/components/ewm/ScrollReveal";

type BrandedCTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

/**
 * Shared dark CTA section matching the Home page CTA style.
 * Used across all Services pages so the closing CTA is consistent.
 */
const BrandedCTASection = ({
  eyebrow = "Ready to Transform ?",
  title,
  description,
  primaryLabel = "Contact Us",
  secondaryLabel = "Explore More",
  primaryHref = "#",
  secondaryHref = "#",
}: BrandedCTASectionProps) => {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Half-circle glow */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: "-260px",
          width: "780px",
          height: "520px",
          maxWidth: "120%",
          background: "#276B5A",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          filter: "blur(160px)",
          opacity: 0.95,
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[1000px] flex-col items-center px-5 text-center sm:px-6">
        <ScrollReveal animation="fadeUp" duration={0.6}>
          <span
            className="mb-6 inline-block text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#30E8BA" }}
          >
            {eyebrow}
          </span>
        </ScrollReveal>

        <ScrollReveal animation="clipReveal" duration={1} delay={0.1}>
          <h2 className="mb-6 font-heading text-[32px] font-semibold leading-[1.1] text-white sm:text-[56px] lg:text-[52px]">
            {title}
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" duration={0.7} delay={0.25}>
          <p
            className="mx-auto mb-10 max-w-[640px] text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" duration={0.6} delay={0.4}>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <a
              href={primaryHref}
              className="rounded-full px-5 py-2.5 text-[12px] font-medium transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-[13px]"
              style={{ background: "#E8E8E8", color: "#0A0A0A" }}
            >
              {primaryLabel}
            </a>
            <a
              href={secondaryHref}
              className="rounded-full px-5 py-2.5 text-[12px] font-medium transition-transform hover:scale-105 sm:px-7 sm:py-3 sm:text-[13px]"
              style={{ background: "#30E8BA", color: "#0A0A0A" }}
            >
              {secondaryLabel}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/** Convenience gradient span matching the Home CTA highlight style. */
export const CtaHighlight = ({ children }: { children: ReactNode }) => (
  <span
    style={{
      backgroundImage: "linear-gradient(180deg, #DCFFF6 0%, #09E1AB 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
    }}
  >
    {children}
  </span>
);

export default BrandedCTASection;
