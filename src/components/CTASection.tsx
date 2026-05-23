const CTASection = () => {
  return (
    <section id="contact" className="relative py-12 sm:py-16 overflow-hidden" style={{ background: '#C8FF01' }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[5rem] sm:text-[8rem] md:text-[14rem] font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.03)' }}>
          OPTIMIZE
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.1] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#080B14' }}>
          Stop Guessing.
          <br />
          Start Optimizing.
        </h2>
        <p className="text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed" style={{ color: 'rgba(8,11,20,0.6)' }}>
          Your competitors are still tweaking. Fine-tuning. Iterating. A/B testing — you can leapfrog all
          at the mathematical frontier. Let's show you what optimal looks like for your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/contact"

            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-none transition-colors text-center"
            style={{ background: '#080B14', color: '#ffffff' }}
          >
            CONTACT US
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-none transition-colors text-center"
            style={{ border: '1px solid rgba(8,11,20,0.3)', color: '#080B14' }}
          >
            EXPLORE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
