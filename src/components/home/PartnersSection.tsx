import sapFade from "@/assets/partners/sap-fade.png";
import sapColor from "@/assets/partners/sap-color.png";
import microsoftFade from "@/assets/partners/microsoft-fade.png";
import microsoftColor from "@/assets/partners/microsoft-color.png";
import splunkFade from "@/assets/partners/splunk-fade.png";
import splunkColor from "@/assets/partners/splunk-color.png";
import kepwareFade from "@/assets/partners/kepware-fade.png";
import kepwareColor from "@/assets/partners/kepware-color.png";
import ScrollReveal from "@/components/ewm/ScrollReveal";

const partners = [
  { name: "SAP Partner", fade: sapFade, color: sapColor },
  { name: "Microsoft", fade: microsoftFade, color: microsoftColor },
  { name: "Splunk", fade: splunkFade, color: splunkColor },
  { name: "Kepware", fade: kepwareFade, color: kepwareColor },
];

const PartnersSection = () => {
  return (
    <section className="py-10 sm:py-14" style={{ background: "#000000" }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="clipReveal" duration={0.9}>
          <div
            className="w-full h-px mb-10 sm:mb-14"
            style={{ background: "rgba(160,160,160,0.35)" }}
          />
        </ScrollReveal>
        <ScrollReveal animation="scaleUp" duration={0.9} delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                letterSpacing: "0.34em",
                textTransform: "uppercase",
                color: "#A0A0A0",
              }}
              className="text-[13px] sm:text-[15px] md:text-[16px] leading-none whitespace-nowrap"
            >
              Technology Partners
            </span>
            <span
              aria-hidden
              className="hidden md:inline-block"
              style={{
                width: "1px",
                height: "28px",
                background: "rgba(160,160,160,0.5)",
              }}
            />
            <div className="flex items-center gap-5 sm:gap-7 md:gap-9 flex-nowrap justify-center">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="relative group cursor-pointer h-6 sm:h-7 md:h-8"
                >
                  <img
                    src={p.fade}
                    alt={p.name}
                    className="h-full w-auto object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={p.color}
                    alt={p.name}
                    aria-hidden
                    className="h-full w-auto object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersSection;
