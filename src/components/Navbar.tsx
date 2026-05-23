import { useEffect, useState } from "react";
import { useNavigate, useLocation, useRouter } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import logoCulture from "@/assets/carbynetech-logo-full.png";
import productMes from "@/assets/product-mes.jpg";
import productScheduling from "@/assets/product-scheduling.jpg";
import productInventory from "@/assets/product-inventory.jpg";
import productAccounting from "@/assets/product-accounting.jpg";
import navWatermark from "@/assets/nav-watermark.png";
import { preloadHeroImage } from "@/lib/route-hero-images";

const navigationLinks = [
  { title: "Services", hasDropdown: true },
  { title: "Products", hasDropdown: true },
  { title: "Insights & Events", hasDropdown: false, href: "/insights-events" },
  { title: "Culture", hasDropdown: false, href: "/culture" },
  { title: "Careers", hasDropdown: false, href: "/careers" },
];

const solutionsCol1 = [
  {
    heading: "AI Transformation",
    items: [{ label: "Agentic Intelligence", href: "/agentic-intelligence" }],
  },
  {
    heading: "Decision Intelligence",
    items: [
      { label: "AI Optimization", href: "/decision-intelligence" },
      { label: "Predictive Analytics", href: "/predictive-analytics" },
    ],
  },
  {
    heading: "Data Engineering",
    items: [{ label: "Enterprise Data Engineering", href: "/enterprise-data-engineering" }],
  },
];

const solutionsCol2 = [
  {
    heading: "Digital Applications",
    items: [
      { label: "Intelligent Web and Mobile Apps", href: "/intelligent-web-mobile-apps" },
      { label: "Microsoft Power Platform", href: "/microsoft-power-platform" },
    ],
  },
  {
    heading: "SIEM and Infra Monitoring",
    items: [{ label: "Splunk AI Applications", href: "/splunk-ai-applications" }],
  },
  {
    heading: "Digital Factory",
    items: [
      { label: "Shopfloor Digital Apps", href: "/shopfloor-digital-apps" },
      { label: "Condition Monitoring", href: "/condition-monitoring" },
      { label: "Vision Analytics / Real-time Quality", href: "/vision-analytics" },
    ],
  },
];

const solutionsCol3 = [
  {
    heading: "SAP Services",
    items: [
      { label: "SAP Analytics, Power BI Integration", href: "/sap-analytics-power-bi" },
      { label: "SAP Value Creation", href: "/sap-value-creation" },
      { label: "SAP Supply Chain Finance", href: "/sap-supply-chain-finance" },
      { label: "SAP RISE Implementation and Upgrades", href: "/sap-rise-implementation" },
      { label: "SAP IBP", href: "/sap-ibp" },
      { label: "SAP EWM", href: "/sap-ewm" },
      { label: "Tech Factory", href: "/tech-factory" },
      { label: "Manage Services - Application Support", href: "/sap-application-support" },
    ],
  },
];

const productItems = [
  {
    label: "Digital Factory - SFX9 MES",
    eyebrow: "Manufacturing Execution System",
    title: "The Intelligent Shop Floor Platform",
    description: "Manufacturing Execution System for smart factory operations",
    href: "/sfx9-mes",
    image: productMes,
  },
  {
    label: "Factory Finite Job Scheduling",
    eyebrow: "Production Scheduling",
    title: "AI-Driven Finite Scheduling",
    description: "Optimize production scheduling with AI-driven planning",
    href: "/factory-finite-scheduling",
    image: productScheduling,
  },
  {
    label: "InventIQ - Inventory Optimizer",
    eyebrow: "Inventory Intelligence",
    title: "Smart Inventory & Demand Forecasting",
    description: "Intelligent inventory management and demand forecasting",
    href: "/inventiq",
    image: productInventory,
  },
  {
    label: "Shopfloor Production Accounting",
    eyebrow: "Production Analytics",
    title: "Real-Time Cost & Output Tracking",
    description: "Real-time cost tracking and production analytics",
    href: "/shopfloor",
    image: productAccounting,
  },
];

const preloadRouteHrefs = [
  "/",
  "/insights-events",
  "/culture",
  "/careers",
  "/contact",
  ...solutionsCol1.flatMap((section) => section.items.map((item) => item.href)),
  ...solutionsCol2.flatMap((section) => section.items.map((item) => item.href)),
  ...solutionsCol3.flatMap((section) => section.items.map((item) => item.href)),
  ...productItems.map((item) => item.href),
] as const;

const serviceRouteHrefs = [
  ...solutionsCol1.flatMap((section) => section.items.map((item) => item.href)),
  ...solutionsCol2.flatMap((section) => section.items.map((item) => item.href)),
  ...solutionsCol3.flatMap((section) => section.items.map((item) => item.href)),
] as const;

const productRouteHrefs = productItems.map((item) => item.href);

const directRouteHrefs = navigationLinks
  .map((link) => link.href)
  .filter((href): href is string => Boolean(href));

const backgroundRouteHrefs = preloadRouteHrefs.filter((href) => !directRouteHrefs.includes(href));

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navigate = useNavigate();
  const router = useRouter();
  const location = useLocation();

  const preloadHref = (href: string) => {
    if (!href.startsWith("/")) return;
    void router.preloadRoute({ to: href as (typeof preloadRouteHrefs)[number] }).catch(() => undefined);
    preloadHeroImage(href);
  };

  useEffect(() => {
    const timeoutId = globalThis.setTimeout(() => {
      directRouteHrefs.forEach((href) => preloadHref(href));
    }, 700);

    return () => globalThis.clearTimeout(timeoutId);
  }, [router]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ menu: string }>).detail;
      if (detail?.menu === "Services" || detail?.menu === "Products") {
        setOpenMenu(detail.menu);
        if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("open-nav-menu", handler as EventListener);
      return () => window.removeEventListener("open-nav-menu", handler as EventListener);
    }
  }, []);


  useEffect(() => {
    let intervalId: ReturnType<typeof globalThis.setInterval> | undefined;

    const timeoutId = globalThis.setTimeout(() => {
      let index = 0;
      intervalId = globalThis.setInterval(() => {
        preloadHref(backgroundRouteHrefs[index]);
        index += 1;
        if (index >= backgroundRouteHrefs.length && intervalId) {
          globalThis.clearInterval(intervalId);
        }
      }, 180);
    }, 1600);

    return () => {
      globalThis.clearTimeout(timeoutId);
      if (intervalId) globalThis.clearInterval(intervalId);
    };
  }, [router]);

  useEffect(() => {
    let hrefs: readonly string[] = [];

    if (openMenu === "Services" || mobileSection === "Services") hrefs = serviceRouteHrefs;
    if (openMenu === "Products" || mobileSection === "Products") hrefs = productRouteHrefs;
    if (mobileOpen && !mobileSection) hrefs = directRouteHrefs;

    hrefs.forEach((href) => preloadHref(href));
  }, [openMenu, mobileOpen, mobileSection, router]);

  const handleLinkClick = (href: string) => {
    preloadHref(href);
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
    if (href.startsWith("/")) {
      navigate({ to: href });
    }
  };

  const renderSolutionColumn = (
    sections: { heading: string; items: { label: string; href: string }[] }[]
  ) => (
    <div className="flex flex-1 flex-col gap-6 sm:gap-7">
      {sections.map((section) => (
        <div key={section.heading}>
          <h3 className="mb-0.5 sm:mb-1 text-[12px] sm:text-[13px] font-semibold text-white leading-tight">
            {section.heading}
          </h3>
          <ul className="flex flex-col gap-0">
            {section.items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onPointerEnter={() => preloadHref(item.href)}
                  onFocus={() => preloadHref(item.href)}
                  onClick={(e) => {
                    if (item.href.startsWith("/")) {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }
                  }}
                  className="text-[11px] sm:text-[12px] leading-[1.4] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderDropdown = (title: string) => {
    if (title === "Services") {
      return (
        <div className="flex flex-1 flex-col sm:flex-row gap-6 sm:gap-8">
          {renderSolutionColumn(solutionsCol1)}
          {renderSolutionColumn(solutionsCol2)}
          {renderSolutionColumn(solutionsCol3)}
        </div>
      );
    }
    if (title === "Products") {
      const active = hoveredProduct ?? 0;
      const activeItem = productItems[active];
      return (
        <div className="flex flex-1 flex-col md:flex-row gap-6 md:gap-12 items-stretch">
          {/* Left: product list with descriptions */}
          <div className="flex flex-col gap-5 md:gap-6 md:w-[300px] shrink-0">
            {productItems.map((item, i) => {
              const isActive = active === i;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onPointerEnter={() => preloadHref(item.href)}
                  onFocus={() => preloadHref(item.href)}
                  onClick={(e) => {
                    if (item.href.startsWith("/")) {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }
                  }}
                  onMouseEnter={() => setHoveredProduct(i)}
                  className="group block text-left cursor-pointer"
                >
                  <div
                    className={`transition-colors duration-300 ${
                      isActive ? "text-[#5BC8D9]" : "text-white group-hover:text-[#5BC8D9]"
                    }`}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: "1.3",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="mt-1.5 text-white/55"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "11px",
                      fontWeight: 400,
                      lineHeight: "1.45",
                    }}
                  >
                    {item.description}
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right: image with overlaid bottom-right text */}
          <div className="flex-1 w-full">
            <div key={active} className="relative w-full h-full min-h-[320px] md:min-h-[400px] overflow-hidden animate-fade-in">
              <img
                src={activeItem.image}
                alt={activeItem.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1011] via-[#0E1011]/85 to-[#0E1011]/20" />
              <div className="absolute inset-x-0 bottom-0 px-6 sm:px-8 pb-32 sm:pb-40 text-right">
                <p
                  className="text-white/70 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase mb-3"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {activeItem.eyebrow}
                </p>
                <h3
                  className="text-white text-[22px] sm:text-[26px] md:text-[30px] leading-[1.15]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  {activeItem.title}
                </h3>
                <div className="ml-auto mt-3 h-px w-10 bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const isOverlayOpen = openMenu === "Services" || openMenu === "Products";

  const isCulture = location.pathname === "/culture";

  const renderNavLinks = (insideOverlay: boolean) => (
    <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-6">
      {navigationLinks.map((link) => {
        const isMenuActive = openMenu === link.title;
        const isRouteActive = link.href ? location.pathname === link.href : false;
        // When a dropdown menu is open, only the open trigger is active (suppress route highlight)
        const isActive = isOverlayOpen ? isMenuActive : (isMenuActive || isRouteActive);
        const darkText = isCulture && !isOverlayOpen;
        return (
          <button
            key={link.title}
            onPointerEnter={() => {
              if (link.href) preloadHref(link.href);
            }}
            onFocus={() => {
              if (link.href) preloadHref(link.href);
            }}
            onClick={() => {
              if (link.hasDropdown) {
                setOpenMenu(openMenu === link.title ? null : link.title);
              } else {
                setOpenMenu(null);
                if (link.href) navigate({ to: link.href });
              }
            }}
            className={`relative py-2 text-[13px] xl:text-[15px] 2xl:text-[16px] [@media(min-width:1920px)]:text-[18px] transition-colors duration-300 cursor-pointer ${
              darkText
                ? isActive
                  ? "text-black"
                  : "text-black/85 hover:text-black"
                : isActive
                  ? "text-white"
                  : "text-white/85 hover:text-white"
            }`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 400,
              lineHeight: "1.2",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {link.title}
            {isActive && (
              <span className={`absolute -bottom-0.5 left-0 right-0 h-px ${darkText ? "bg-black" : "bg-white"}`} />
            )}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Top nav — becomes fixed when an overlay menu is open */}
      <nav className={`${isOverlayOpen ? "fixed" : "absolute"} inset-x-0 top-0 z-[110] pt-4 sm:pt-6`}>
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <div className="flex w-full items-center justify-between rounded-md px-3 sm:px-4 py-2" style={{ background: "#0101011A", backdropFilter: "blur(0.1px)", WebkitBackdropFilter: "blur(0.1px)" }}>
            <a
              href="/"
              onPointerEnter={() => preloadHref("/")}
              onFocus={() => preloadHref("/")}
              onClick={(e) => {
                e.preventDefault();
                navigate({ to: "/" });
                setOpenMenu(null);
              }}
              className="shrink-0"
            >
              <img src={isCulture ? logoCulture : logo} alt="CarbyneTech" className="h-11 sm:h-12 md:h-14 xl:h-16 2xl:h-[68px] object-contain" />
            </a>

            {renderNavLinks(false)}

            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Mobile hamburger — placed BEFORE Contact button */}
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden inline-flex h-9 w-9 items-center justify-center bg-black text-white cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="7" x2="19" y2="7" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="17" x2="19" y2="17" />
                </svg>
              </button>
              {(() => {
                const isContactActive = location.pathname === "/contact";
                return (
                  <a
                    href="/contact"
                    onPointerEnter={() => preloadHref("/contact")}
                    onFocus={() => preloadHref("/contact")}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate({ to: "/contact" });
                      setOpenMenu(null);
                    }}
                    className={`flex h-8 sm:h-9 md:h-10 xl:h-12 2xl:h-[52px] items-center gap-1.5 sm:gap-2 rounded-none px-2.5 sm:px-3.5 md:px-4 xl:px-6 2xl:px-7 text-[10px] sm:text-[11px] md:text-[12px] xl:text-[14px] 2xl:text-[15px] font-semibold uppercase tracking-[0.12em] transition-all hover:opacity-90 ${
                      isContactActive
                        ? "bg-[#EDE7FF] text-[#3A1F8B] shadow-[0_2px_8px_rgba(106,43,255,0.12)]"
                        : "bg-foreground text-background"
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span>Contact Us</span>
                    <span className="text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[18px]">↗</span>
                  </a>
                );
              })()}
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay (sits below the fixed nav) */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOverlayOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ backgroundColor: "#0E1011", backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)" }}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden">
          {/* Spacer for fixed nav */}
          <div className="h-[72px] sm:h-[88px] md:h-[96px] shrink-0" />

          {/* (SOLUTIONS) / (PRODUCTS) label */}
          <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-40 shrink-0">
            <div className="px-3 sm:px-4">
              <div
                className="mt-2 sm:mt-4 text-white/80"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                ({openMenu === "Products" ? "PRODUCTS" : "SOLUTIONS"})
              </div>
              <div className="mt-3 h-px w-full bg-white/10" />
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-40 pt-6 sm:pt-8 pb-4 sm:pb-6 flex-1 min-h-0 overflow-hidden">
            <div className="px-3 sm:px-4 h-full">
              {openMenu && renderDropdown(openMenu)}
            </div>
          </div>

          {/* Watermark image — pushed down, bottom clipped by overlay overflow-hidden */}
          <div className="mt-6 sm:mt-8 md:mt-10 pointer-events-none select-none shrink-0 translate-y-[35%] sm:translate-y-[40%] md:translate-y-[45%]">
            <img
              src={navWatermark}
              alt=""
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[120] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-4"
        }`}
        style={{ backgroundColor: "#0E1011" }}
      >
        <div className="flex h-full w-full flex-col">
          {/* Mobile header */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-white/10">
            <img src={logo} alt="CarbyneTech" className="h-11 object-contain" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => {
                setMobileOpen(false);
                setMobileSection(null);
              }}
              className="inline-flex h-9 w-9 items-center justify-center bg-white text-black"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Mobile body */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            {!mobileSection && (
              <ul className="flex flex-col">
                {navigationLinks.map((link) => (
                  <li key={link.title} className="border-b border-white/10">
                    <button
                      onPointerEnter={() => {
                        if (link.href) preloadHref(link.href);
                      }}
                      onFocus={() => {
                        if (link.href) preloadHref(link.href);
                      }}
                      onClick={() => {
                        if (link.hasDropdown) {
                          setMobileSection(link.title);
                        } else {
                          setMobileOpen(false);
                          if (link.href) navigate({ to: link.href });
                        }
                      }}
                      className="flex w-full items-center justify-between py-4 text-white text-[14px] uppercase tracking-[0.08em]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <span>{link.title}</span>
                      {link.hasDropdown && <span className="text-white/50">›</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {mobileSection && (
              <div>
                <button
                  onClick={() => setMobileSection(null)}
                  className="mb-4 inline-flex items-center gap-2 text-white/70 text-[12px] uppercase tracking-[0.08em]"
                >
                  <span>‹</span> Back
                </button>
                <h2 className="text-white text-[16px] font-semibold mb-4 uppercase tracking-[0.08em]">
                  {mobileSection}
                </h2>

                {mobileSection === "Services" && (
                  <div className="flex flex-col gap-5">
                    {[...solutionsCol1, ...solutionsCol2, ...solutionsCol3].map((section) => (
                      <div key={section.heading}>
                        <h3 className="mb-1.5 text-[12px] font-semibold text-white">
                          {section.heading}
                        </h3>
                        <ul className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                onClick={(e) => {
                                  if (item.href.startsWith("/")) {
                                    e.preventDefault();
                                    handleLinkClick(item.href);
                                  }
                                }}
                                className="block text-[12px] text-white/60 py-1"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {mobileSection === "Products" && (
                  <ul className="flex flex-col gap-3">
                    {productItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onPointerEnter={() => preloadHref(item.href)}
                          onFocus={() => preloadHref(item.href)}
                          onClick={(e) => {
                            if (item.href.startsWith("/")) {
                              e.preventDefault();
                              handleLinkClick(item.href);
                            }
                          }}
                          className="block rounded-md border border-white/10 p-3"
                        >
                          <div className="text-white text-[13px] font-medium mb-1">{item.label}</div>
                          <div className="text-white/50 text-[11px] leading-snug">{item.description}</div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Mobile CTA */}
          <div className="px-5 py-4 border-t border-white/10">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("/contact");
              }}
              className="flex h-10 w-full items-center justify-center gap-2 bg-foreground text-background text-[12px] font-semibold uppercase tracking-[0.15em]"
            >
              Contact Us <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
