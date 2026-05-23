import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

type NavItem = { label: string; to: string };

const services: NavItem[] = [
  { label: "AI Transformation", to: "/agentic-intelligence" },
  { label: "Data Engineering", to: "/enterprise-data-engineering" },
  { label: "Digital Factory", to: "/tech-factory" },
  { label: "SAP Solutions", to: "/sap-value-creation" },
  { label: "Analytics", to: "/vision-analytics" },
];
const quickLinks: NavItem[] = [
  { label: "Services", to: "__menu:Services" },
  { label: "Products", to: "__menu:Products" },
  { label: "Insights & Events", to: "/insights-events" },
  { label: "Culture", to: "/culture" },
  { label: "Careers", to: "/careers" },
];
const industries: NavItem[] = [
  { label: "Heavy Industry", to: "/insights-events" },
  { label: "Energy & Utilities", to: "/insights-events" },
  { label: "Chemicals", to: "/insights-events" },
  { label: "Pharma", to: "/insights-events" },
  { label: "Automotive", to: "/insights-events" },
];


const FooterSection = () => {
  return (
    <footer style={{ background: "#000000" }}>
      <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 py-6 sm:py-8">
        <div className="px-3 sm:px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[2.4fr_1fr_1fr_1fr_1fr_1fr] gap-6 lg:gap-x-0.5 xl:gap-x-1 lg:gap-y-6">
          {/* Logo Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <img src={logo} alt="CarbyneTech" className="h-12 mb-5 object-contain" />
            <p className="text-[11px] text-white/80 leading-relaxed mb-5 max-w-[260px] font-light">
              Empowering enterprises with cutting-edge AI, Data Engineering, and Digital Transformation solutions.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-[#1a1a18] flex items-center justify-center hover:bg-[#26261f] transition-colors"><LinkedinIcon className="w-3.5 h-3.5 text-white" /></a>
              <a href="#" aria-label="X" className="w-8 h-8 rounded-full bg-[#1a1a18] flex items-center justify-center hover:bg-[#26261f] transition-colors"><TwitterIcon className="w-3 h-3 text-white" /></a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[#1a1a18] flex items-center justify-center hover:bg-[#26261f] transition-colors"><YoutubeIcon className="w-3.5 h-3.5 text-white" /></a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-[13px] font-normal text-white mb-3">Services</h4>
            <ul className="space-y-0">
              {services.map((item) => (
                <li key={item.to + item.label}><Link to={item.to} className="text-[11px] font-light text-white/70 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[13px] font-normal text-white mb-3">Quick Links</h4>
            <ul className="space-y-0">
              {quickLinks.map((item) => {
                if (item.to.startsWith("__menu:")) {
                  const menu = item.to.replace("__menu:", "");
                  return (
                    <li key={item.to + item.label}>
                      <button
                        type="button"
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            window.dispatchEvent(new CustomEvent("open-nav-menu", { detail: { menu } }));
                          }
                        }}
                        className="text-[11px] font-light text-white/70 hover:text-white transition-colors text-left bg-transparent p-0"
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                }
                return (
                  <li key={item.to + item.label}><Link to={item.to} className="text-[11px] font-light text-white/70 hover:text-white transition-colors">{item.label}</Link></li>
                );
              })}

            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-1">
            <h4 className="text-[13px] font-normal text-white mb-3">Industries</h4>
            <ul className="space-y-0">
              {industries.map((item) => (
                <li key={item.to + item.label}><Link to={item.to} className="text-[11px] font-light text-white/70 hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>


          {/* Contact (India) */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-[13px] font-normal text-white mb-3">INDIA</h4>
            <address className="not-italic space-y-0.5 text-[11px] font-light text-white/70 leading-relaxed">
              <p>Carbynetech India Pvt Ltd</p>
              <p>5th Floor, Wing 1B</p>
              <p>Block A, Cyber Gateway</p>
              <p>HITEC City, Hyderabad</p>
              <p><a href="mailto:sales@carbynetech.com" className="hover:text-white transition-colors">sales@carbynetech.com</a></p>
            </address>
          </div>

          {/* USA */}
          <div className="col-span-1 lg:col-span-1">
            <h4 className="text-[13px] font-normal text-white mb-3">USA</h4>
            <address className="not-italic space-y-0.5 text-[11px] font-light text-white/70 leading-relaxed">
              <p>Carbynetech Inc.</p>
              <p>11501 Royal Lane</p>
              <p>Providence Forge, VA 23140</p>
            </address>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
        <div className="px-3 sm:px-4"><div className="border-t border-white/10" /></div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 py-2">
        <div className="px-3 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-light text-white/70">Copyright © 2026. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <a href="#" className="text-[11px] font-light text-white/70 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-[11px] font-light text-white/70 hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="text-[11px] font-light text-white/70 hover:text-white transition-colors">Cookie Policy</a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
