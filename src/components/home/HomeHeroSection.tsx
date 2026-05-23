import { Brain, Database, Bot, BarChart3, Cpu, Shield } from "lucide-react";
import homeHeroBg from "@/assets/home-hero-bg.png";
// Video fallback: if a file named home-hero-bg.{mp4,webm} exists next to the image,
// it will be loaded and played; otherwise the image is used.
const heroVideoModules = import.meta.glob("@/assets/home-hero-bg.{mp4,webm,mov}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const homeHeroVideo: string | undefined = Object.values(heroVideoModules)[0];

const capabilities = [
  { icon: Brain, label: "Decision Analytics" },
  { icon: Database, label: "SAP Business Data Cloud" },
  { icon: Bot, label: "Agentic AI" },
  { icon: BarChart3, label: "Microsoft Fabric Analytics" },
  { icon: Cpu, label: "IOT Manufacturing Excellence" },
  { icon: Shield, label: "Splunk IT Infra & Security" },
];

const HomeHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {homeHeroVideo ? (
          <video
            src={homeHeroVideo}
            poster={homeHeroBg}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={homeHeroBg} alt="" className="w-full h-full object-cover" />
        )}
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-10">
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1980px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
            <p className="mb-3 sm:mb-4 text-[15px] sm:text-[16px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-normal tracking-[0.02em] text-white">
              Empower Your Business Decisions with
            </p>
            <h1 className="mb-4 sm:mb-5 font-heading text-[34px] sm:text-[40px] md:text-[40px] lg:text-[48px] xl:text-[58px] 2xl:text-[68px] [@media(min-width:1980px)]:text-[80px] font-medium leading-[1.2] tracking-[-0.01em] text-foreground">
              AI Powered Manufacturing and
              <br className="hidden sm:block" />
              {" "}Supply Chain <span className="text-gradient-pink">Intelligence</span>
            </h1>
            <p className="max-w-[600px] xl:max-w-[760px] 2xl:max-w-[860px] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] font-light leading-[1.7] text-white">
              Leverage cutting-edge analytics and AI-powered solutions to unlock
              <br className="hidden sm:block" />
              {" "}the full potential of your data
            </p>
          </div>
        </div>

        <div className="w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1980px)]:max-w-[1840px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <div className="rounded-2xl px-3 sm:px-8 lg:px-5 py-3 sm:py-4 backdrop-blur-sm" style={{ background: 'rgb(255 255 255 / 0.02)' }}>
            <div className="grid grid-cols-2 sm:flex sm:flex-nowrap items-center justify-items-start sm:justify-between gap-x-3 gap-y-3 sm:gap-0">
              {capabilities.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-2 sm:gap-2.5 whitespace-nowrap text-[12px] sm:text-[11px] md:text-[12px] lg:text-[11px] xl:text-[14px] 2xl:text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Icon className="h-[18px] w-[18px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px] xl:h-[22px] xl:w-[22px] 2xl:h-[24px] 2xl:w-[24px] shrink-0 opacity-75" strokeWidth={1.4} />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{label.split(' ').slice(0, 2).join(' ')}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
