import { useEffect, useMemo, useRef, useState } from "react";
import { Link, getRouteApi } from "@tanstack/react-router";
import { Search, Shield, ChevronDown, ArrowUpRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import insightsHeroBg from "@/assets/insights-hero-bg.jpeg";
import { caseStudies } from "@/data/caseStudies";
import InsightDetail from "@/pages/InsightDetail";
import { getCaseDetail } from "@/data/caseStudyDetails";

const routeApi = getRouteApi("/insights-events");

const InsightsEvents = () => {
  const search = routeApi.useSearch();
  const [query, setQuery] = useState(search.q ?? "");
  const [selected, setSelected] = useState<string[]>(
    search.industry ? search.industry.split(",").filter(Boolean) : []
  );
  const [open, setOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const industries = useMemo(
    () => Array.from(new Set(caseStudies.map((c) => c.industry))),
    []
  );

  const filtered = useMemo(() => {
    return caseStudies.filter((c) => {
      const matchesQ = c.title.toLowerCase().includes(query.toLowerCase()) ||
                       c.desc.toLowerCase().includes(query.toLowerCase());
      const matchesIndustry = selected.length === 0 || selected.includes(c.industry);
      return matchesQ && matchesIndustry;
    });
  }, [query, selected]);

  if (search.case && getCaseDetail(search.case)) {
    return <InsightDetail slug={search.case} />;
  }

  const toggle = (i: string) =>
    setSelected((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const label =
    selected.length === 0
      ? "All Industries"
      : selected.length === 1
      ? selected[0]
      : `${selected.length} Industries`;

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white">
      <Navbar />

      {/* Hero — kept original bg per request */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "560px" }}>
        <img
          src={insightsHeroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,11,20,0.88) 0%, rgba(8,11,20,0.7) 50%, rgba(8,11,20,0.45) 100%)",
          }}
        />
        {/* fade to page bg at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#0A0E1A]" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-32 sm:pt-40 pb-16">
          <ScrollReveal animation="fadeUp" duration={0.6}>
            <p
              className="text-white text-[11px] sm:text-[12px] tracking-[0.22em] uppercase mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Case Study
            </p>
          </ScrollReveal>
          <ScrollReveal animation="clipReveal" duration={1} delay={0.1}>
            <h1
              className="text-white text-[36px] sm:text-[52px] md:text-[64px] font-normal leading-[1.05] mb-6 max-w-[820px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Driving Success Through
              <br className="hidden sm:block" /> Real Customer Experiences
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.8} delay={0.3}>
            <p className="text-white/70 text-[12px] sm:text-[13px] max-w-[520px] leading-relaxed">
              Discover how businesses partner with CarbyneTech to accelerate
              innovation, solve complex challenges, and achieve measurable results.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#0A0E1A] pt-2">
        <ScrollReveal
          animation="fadeUp"
          duration={0.6}
          className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 flex flex-col sm:flex-row sm:justify-end gap-3"
        >
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search...."
              className="w-full h-10 rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-5 text-[12px] text-white placeholder:text-white/40 outline-none focus:border-white/30 transition-colors"
            />
          </div>
          <div ref={ddRef} className="relative w-full sm:w-[240px]">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="w-full h-10 flex items-center rounded-full bg-white/[0.04] border border-white/10 pl-10 pr-10 text-[12px] text-white outline-none focus:border-white/30 hover:border-white/20 transition-colors cursor-pointer text-left"
            >
              <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40 pointer-events-none" />
              <span className="truncate">{label}</span>
              <ChevronDown
                className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40 w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="absolute z-30 mt-2 w-full rounded-2xl bg-[#11162A] border border-white/10 shadow-xl py-2 max-h-72 overflow-y-auto">
                <button
                  type="button"
                  onClick={() => setSelected([])}
                  className="w-full flex items-center justify-between px-4 py-2 text-[12px] text-white/90 hover:bg-white/[0.05]"
                >
                  <span>All Industries</span>
                  {selected.length === 0 && <Check className="w-3.5 h-3.5 text-[#A5A8FF]" />}
                </button>
                <div className="my-1 h-px bg-white/10" />
                {industries.map((i) => {
                  const isSel = selected.includes(i);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between px-4 py-2 text-[12px] text-white/80 hover:bg-white/[0.05]"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className={`w-3.5 h-3.5 rounded-[4px] border flex items-center justify-center ${
                            isSel ? "bg-[#7E84FF] border-[#7E84FF]" : "border-white/30"
                          }`}
                        >
                          {isSel && <Check className="w-2.5 h-2.5 text-white" />}
                        </span>
                        {i}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* Cards grid */}
      <section className="bg-[#0A0E1A] py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <ScrollReveal
                key={c.slug}
                animation="fadeUp"
                duration={0.7}
                delay={(i % 3) * 0.1}
              >
                <Link
                  to="/insights-events"
                  search={(prev: { case?: string; q?: string; industry?: string }) => ({ ...prev, case: c.slug })}
                  className="block rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 group h-full"
                >
                  <div className="relative h-[180px] w-full overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col">
                    <span
                      className="self-start inline-block text-[10px] font-medium text-[#A5A8FF] bg-[#A5A8FF]/10 rounded-full px-3 py-1 mb-4"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {c.tag}
                    </span>
                    <h3
                      className="text-[16px] font-semibold text-white leading-[1.35] mb-3 min-h-[44px]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {c.title}
                    </h3>
                    <p className="text-[12.5px] text-white/55 leading-[1.55] mb-5">
                      {c.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#7E84FF] group-hover:text-[#A5A8FF] transition-colors">
                      Read More <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-white/50 text-[13px] py-16">
              No case studies match your filters.
            </p>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default InsightsEvents;
