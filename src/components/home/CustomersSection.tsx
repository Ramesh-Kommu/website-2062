import ScrollReveal from "@/components/ewm/ScrollReveal";
import customersBg from "@/assets/customers-bg.mp4";

const CustomersSection = () => {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <ScrollReveal animation="fadeRight" duration={0.9}>
          <div className="mb-6 sm:mb-8">
            <div className="inline-block">
              <p className="text-[#1a1a2e] text-[15px] sm:text-[17px] xl:text-[17px] 2xl:text-[19px] font-normal tracking-wide mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Our Customers</p>
              <div className="w-[60%] h-[3px] bg-[#1a1a2e]" />
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="clipReveal" duration={1} delay={0.1}>
          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[43px] 2xl:text-[51px] text-center mb-8 sm:mb-10 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>
            <span className="text-[#1a1a2e]">Trusted by the Largest Enterprises </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                fontWeight: 500,
                backgroundImage: "linear-gradient(90deg, #EE6269 55.56%, #E25D8C 67.47%, #BA60BD 80.83%, #8766F8 91.29%, #727CFB 100%)",
              }}
            >
              On the South Asia
            </span>
          </h2>
        </ScrollReveal>
      </div>
      <ScrollReveal animation="scaleUp" duration={1.1}>
        <div className="w-full overflow-hidden relative" style={{ aspectRatio: '3840/420' }}>
          <video
            src={customersBg}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CustomersSection;
