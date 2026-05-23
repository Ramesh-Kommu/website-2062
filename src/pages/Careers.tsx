import { useMemo, useState } from "react";
import { Link, useNavigate, getRouteApi } from "@tanstack/react-router";
import {
  Search,
  Briefcase,
  MapPin,
  Monitor,
  ArrowLeft,
  Clock,
  Users,
  Sparkles,
  Building2,
  Linkedin,
  Twitter,
  Link2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import careersBg from "@/assets/careers-bg.jpeg";
import careersNearFooter from "@/assets/careers-near-footer.jpeg";
import { roles, getRoleBySlug } from "@/data/careers";

const routeApi = getRouteApi("/careers");

const PAGE_SIZE = 6;

const Careers = () => {
  const search = routeApi.useSearch();
  const navigate = useNavigate({ from: "/careers" });
  const [query, setQuery] = useState("");

  const selectedRole = search.jobtitle ? getRoleBySlug(search.jobtitle) : undefined;

  const filtered = useMemo(
    () => roles.filter((r) => r.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const currentPage = Math.max(1, search.page ?? 1);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paged = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const goToPage = (p: number) => {
    navigate({ search: (prev: { jobtitle?: string; page?: number }) => ({ ...prev, page: p === 1 ? undefined : p }) });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "520px" }}>
        <img src={careersBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,11,20,0.55) 0%, rgba(8,11,20,0.35) 50%, rgba(8,11,20,0.2) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pt-32 sm:pt-40 pb-20">
          <ScrollReveal animation="clipReveal" duration={1}>
            <h1
              className="text-white text-[40px] sm:text-[56px] md:text-[68px] font-normal leading-[1.05] mb-6 max-w-[640px]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Design the future.
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" duration={0.8} delay={0.25}>
            <p className="text-white/90 text-[12px] sm:text-[13px] max-w-[420px] leading-relaxed">
              Work on meaningful products, solve complex problems, and create
              experiences people rely on every day.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {selectedRole ? (
        /* ====== ROLE DETAIL VIEW ====== */
        <section className="relative z-10 -mt-10 sm:-mt-12">
          <div className="mx-auto w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[42%_58%]">
            <div className="bg-[#F0EAE1] rounded-tl-[28px] sm:rounded-tl-[36px] px-5 sm:px-8 md:px-12 pt-10 sm:pt-14 pb-10 lg:pb-20">
              <div className="lg:sticky lg:top-28">
                <ScrollReveal animation="fadeUp" duration={0.7}>
                  <Link
                    to="/careers"
                    search={{ jobtitle: undefined, page: undefined }}
                    className="inline-flex items-center gap-2 text-[12px] text-[#0A1A3A]/70 mb-8 hover:text-[#0A1A3A] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to all roles
                  </Link>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#0A6B2E] bg-[#0A6B2E]/10 rounded-full px-3 py-1 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A6B2E]" />
                    Now hiring · {selectedRole.openings} {selectedRole.openings > 1 ? "openings" : "opening"}
                  </span>

                  <h2
                    className="text-[28px] sm:text-[34px] font-semibold text-[#0A1A3A] leading-[1.1] mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {selectedRole.title}
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-[#0A1A3A]/70 leading-relaxed mb-7">
                    {selectedRole.summary}
                  </p>

                  {/* Meta grid */}
                  <div className="grid grid-cols-2 gap-2.5 mb-7">
                    {[
                      { icon: Briefcase, label: "Type", value: selectedRole.type },
                      { icon: Monitor, label: "Work mode", value: selectedRole.workMode },
                      { icon: MapPin, label: "Location", value: selectedRole.location },
                      { icon: Clock, label: "Experience", value: selectedRole.experience.replace("Exp: ", "") },
                      { icon: Building2, label: "Team", value: selectedRole.team },
                      { icon: Users, label: "Posted", value: `${selectedRole.postedDaysAgo}d ago` },
                    ].map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="bg-white/60 backdrop-blur-sm rounded-xl px-3.5 py-3 border border-white"
                      >
                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#0A1A3A]/50 mb-1">
                          <Icon className="w-3 h-3" />
                          {label}
                        </div>
                        <div className="text-[12.5px] font-medium text-[#0A1A3A] leading-snug">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mb-7">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#0A1A3A]/60 mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      Why this role
                    </div>
                    <ul className="space-y-2">
                      {selectedRole.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-[13px] text-[#0A1A3A] leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F45B4A] flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Share — desktop only */}
                  <div className="hidden lg:flex items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-[#0A1A3A]/50">
                    Share
                    <div className="flex items-center gap-2">
                      {[Linkedin, Twitter, Link2].map((Icon, i) => (
                        <button
                          key={i}
                          className="w-7 h-7 rounded-full bg-white/70 hover:bg-white border border-white flex items-center justify-center text-[#0A1A3A]/70 hover:text-[#0A1A3A] transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <div className="bg-[#FBF7F0] rounded-tr-[28px] sm:rounded-tr-[36px] px-5 sm:px-8 md:px-12 pt-10 sm:pt-14 pb-10">
              <ScrollReveal animation="fadeUp" duration={0.7}>
                <div className="space-y-7">
                  {selectedRole.sections.map((section) => (
                    <div key={section.heading}>
                      <h3
                        className="text-[15px] sm:text-[16px] font-semibold text-[#0A1A3A] mb-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {section.heading}
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-10">
                  <button className="bg-[#0A6B2E] text-white text-[13px] sm:text-[14px] font-medium rounded-md px-5 py-2.5 hover:bg-[#085322] transition-colors">
                    Apply for this job
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ) : (
        /* ====== LISTING VIEW ====== */
        <section className="bg-[#FBF7F0] -mt-10 sm:-mt-12 relative z-10 rounded-t-[28px] sm:rounded-t-[36px]">
          <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 pt-10 sm:pt-14 pb-16 sm:pb-20">
            <ScrollReveal animation="fadeUp" duration={0.7}>
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (search.page) goToPage(1);
                  }}
                  placeholder="Search jobs..."
                  className="w-full bg-white rounded-full pl-11 pr-5 py-3.5 text-[14px] text-[#0A1A3A] placeholder:text-gray-400 border border-transparent focus:outline-none focus:border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                />
              </div>
              <div className="border-t border-gray-200/80 pt-4">
                <p className="text-[13px] sm:text-[14px] text-gray-500">
                  {filtered.length}+ Jobs available
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-6 divide-y divide-gray-200/80">
              {paged.map((role, i) => (
                <ScrollReveal
                  key={role.slug}
                  animation="fadeLeft"
                  duration={0.5}
                  delay={Math.min(i * 0.05, 0.3)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-5 sm:py-6">
                    <div>
                      <h3
                        className="text-[16px] sm:text-[18px] font-semibold text-[#0A1A3A] mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] sm:text-[13px] text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5" /> {role.workMode}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" /> {role.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Monitor className="w-3.5 h-3.5" /> {role.category}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/careers"
                      search={{ jobtitle: role.slug, page: undefined }}
                      className="text-[13px] sm:text-[14px] font-medium text-[#F45B4A] border border-[#F45B4A]/40 rounded-md px-4 py-2 hover:bg-[#F45B4A]/5 transition-colors self-start sm:self-auto whitespace-nowrap"
                    >
                      Apply for this job
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
              {filtered.length === 0 && (
                <p className="py-10 text-center text-[13px] text-gray-500">No roles match your search.</p>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-12">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => goToPage(n)}
                    className={`w-9 h-9 rounded-full text-[13px] font-medium transition-colors ${
                      n === safePage
                        ? "bg-[#0A1A3A] text-white"
                        : "bg-[#E6ECF5] text-[#0A1A3A] hover:bg-[#d8e1ee]"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => goToPage(Math.min(totalPages, safePage + 1))}
                  disabled={safePage === totalPages}
                  className="w-9 h-9 rounded-full bg-[#E6ECF5] text-[#0A1A3A] hover:bg-[#d8e1ee] text-[13px] font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  »
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Values CTA banner */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "280px" }}>
        <img src={careersNearFooter} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(33,103,178,0.85) 0%, rgba(33,103,178,0.65) 60%, rgba(8,11,20,0.55) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-10 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <ScrollReveal animation="fadeLeft" duration={0.9}>
            <h2
              className="text-white text-[28px] sm:text-[40px] md:text-[44px] font-normal leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              See if our values
              <br />
              resonate with you.
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeRight" duration={0.9} delay={0.15}>
            <div className="text-white/95 text-[12px] sm:text-[13px] leading-[1.7] space-y-4">
              <p>
                "Our culture is built on accountability, collaboration, and
                continuous growth. We empower our teams to take initiative,
                deliver impact, and evolve with changing business needs.
              </p>
              <p>Join us to build a career defined by learning and meaningful contribution."</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Careers;
