import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import FooterSection from "@/components/home/FooterSection";
import peopleBand from "@/assets/culture-people-band.png";
import imgMiddle from "@/assets/culture-images/MiddleImage.jpg";
import imgLeftTop from "@/assets/culture-images/Left-Top.jpeg";
import imgLeftMiddle from "@/assets/culture-images/Left-Middle.jpg";
import imgLeftBottom from "@/assets/culture-images/Left-Bottom.jpg";
import imgLeftLeftTop from "@/assets/culture-images/Left-Left-Top.jpeg";
import imgLeftLeftBottom from "@/assets/culture-images/Left-Left-Bottom.jpg";
import imgRightTop from "@/assets/culture-images/Right-Top.jpeg";
import imgRightMiddle from "@/assets/culture-images/Right-Middle.jpeg";
import imgRightBottom from "@/assets/culture-images/Right-Bottom.jpeg";
import imgRightRightTop from "@/assets/culture-images/Right-Right-Top.jpg";
import imgRightRightBottom from "@/assets/culture-images/Right-Right-Bottom.jpeg";

const serif = "'Cormorant Garamond', serif";
const eyebrow = "'Space Grotesk', sans-serif";

const Eyebrow = ({ children, color = "#6b6b6b" }: { children: React.ReactNode; color?: string }) => (
  <p
    className="uppercase mb-4"
    style={{
      fontFamily: eyebrow,
      fontSize: "10px",
      letterSpacing: "0.22em",
      fontWeight: 500,
      color,
    }}
  >
    {children}
  </p>
);

const Highlight = ({ children, bg = "#C8FF01" }: { children: React.ReactNode; bg?: string }) => (
  <span style={{ background: bg, padding: "0 6px", color: "#0a0a0a" }}>{children}</span>
);

const Photo = ({
  className = "",
  aspect,
  rotate = 0,
  src,
}: {
  className?: string;
  aspect?: string;
  rotate?: number;
  src?: string;
}) => (
  <div
    className={`bg-gradient-to-br from-stone-200 to-stone-300 border border-black/5 shadow-sm rounded-xl overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:z-10 relative cursor-pointer ${className}`}
    style={{
      ...(aspect ? { aspectRatio: aspect } : {}),
      transform: `rotate(${rotate}deg)`,
      ...(src ? { backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" } : {}),
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(0deg) scale(1.02)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = `rotate(${rotate}deg)`)}
  />
);

const Culture = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: serif }}>
      <Navbar />

      {/* HERO — Crafting solutions that matter */}
      <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16" style={{ background: "#FAF5E8" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          {/* Hero photo grid */}
          <div className="grid grid-cols-12 gap-3 items-stretch">
            {/* LEFT cluster: outer (2 cards) + inner (3 cards) */}
            <div className="hidden md:flex col-span-3 flex-row gap-3">
              <div className="w-1/2 flex flex-col gap-3">
                <Photo className="flex-1" rotate={-2} src={imgLeftLeftTop} />
                <Photo className="flex-1" rotate={2} src={imgLeftLeftBottom} />
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <Photo className="flex-1" rotate={1} src={imgLeftTop} />
                <Photo className="flex-1" rotate={-1} src={imgLeftMiddle} />
                <Photo className="flex-1" rotate={1} src={imgLeftBottom} />
              </div>
            </div>

            {/* CENTER stack: big photo + eyebrow + "Crafting" */}
            <div className="col-span-12 md:col-span-6 flex flex-col">
              <Photo className="w-full" aspect="21/9" rotate={0} src={imgMiddle} />
              <div className="flex flex-col items-center mt-4">
                <p
                  className="uppercase mt-2 mb-3 flex items-center gap-3"
                  style={{ fontFamily: eyebrow, fontSize: "10px", letterSpacing: "0.28em", fontWeight: 700, color: "#1a1a1a" }}
                >
                  <span className="inline-block w-8 h-px bg-[#1a1a1a]/40" />
                  CULTURE AT CARBYNETECH
                  <span className="inline-block w-8 h-px bg-[#1a1a1a]/40" />
                </p>
                <h1
                  className="text-center leading-[0.95] text-[#0a0a0a]"
                  style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(40px, 7.5vw, 112px)" }}
                >
                  Crafting
                </h1>
              </div>
            </div>

            {/* RIGHT cluster: inner (3 cards) + outer (2 cards) */}
            <div className="hidden md:flex col-span-3 flex-row gap-3">
              <div className="w-1/2 flex flex-col gap-3">
                <Photo className="flex-1" rotate={-1} src={imgRightTop} />
                <Photo className="flex-1" rotate={2} src={imgRightMiddle} />
                <Photo className="flex-1" rotate={-1} src={imgRightBottom} />
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <Photo className="flex-1" rotate={1} src={imgRightRightTop} />
                <Photo className="flex-1" rotate={-2} src={imgRightRightBottom} />
              </div>
            </div>
          </div>

          {/* Full-width second line */}
          <h2
            className="text-center leading-[0.95] text-[#0a0a0a] mt-2 whitespace-normal sm:whitespace-nowrap px-2"
            style={{ fontFamily: serif, fontWeight: 800, fontSize: "clamp(40px, 7.5vw, 112px)" }}
          >
            solutions that{" "}
            <em style={{ color: "#E25D32", fontStyle: "italic", fontWeight: 800 }}>matter.</em>
          </h2>

          <p
            className="mt-8 max-w-3xl mx-auto text-center text-[#5a5a5a] px-2"
            style={{ fontFamily: eyebrow, fontSize: "15px", lineHeight: 1.7, fontWeight: 500 }}
          >
            At Carbynetech, we're not just building technology - we're building solutions that matter.
            <br className="hidden sm:block" />
            Our culture is shaped by curiosity, ownership, and a shared commitment to doing meaningful work.
          </p>
        </div>
      </section>

      {/* MISSION — dark */}
      <section className="py-12 sm:py-16" style={{ background: "#0a0a0a", color: "#f5f5f5" }}>
        <ScrollReveal animation="fadeUp" className="max-w-[900px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <Eyebrow color="#C8FF01">Our Mission</Eyebrow>
          <p
            className="text-[26px] sm:text-[36px] md:text-[44px] leading-[1.25]"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            We exist to <Highlight>simplify complex problems</Highlight> through technology. Whether it's building scalable systems or delivering smart digital solutions, our goal is to create <em style={{ color: "#C8FF01" }}>impact that lasts.</em>
          </p>
          <p
            className="mt-6 sm:mt-8 text-[20px] sm:text-[28px] md:text-[32px] leading-[1.35] text-white/85"
            style={{ fontFamily: serif, fontWeight: 400 }}
          >
            We believe technology should <em>empower</em> businesses, not complicate them.
          </p>
        </ScrollReveal>
      </section>

      {/* VALUES */}
      <section className="py-12 sm:py-16" style={{ background: "#F5EFE3" }}>
        <ScrollReveal animation="fadeUp" className="max-w-[1100px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <Eyebrow>Our Values</Eyebrow>
          <h2
            className="text-[#1a1a1a] mb-8 sm:mb-12"
            style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}
          >
            Our values aren't slogans — they<br />guide how we work every day.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              { eb: "01 / Ownership", t: "Ownership", d: "We take responsibility from start to finish — proactive, accountable, and dependable.", bg: "#FFFFFF", fg: "#1a1a1a", ebColor: "#6b6b6b" },
              { eb: "02 / Clarity", t: <>Clarity Over <em style={{ color: "#1a1a1a" }}>Complexity</em></>, d: "We prefer simple, elegant solutions over over-engineered systems that no one can maintain.", bg: "#C8FF01", fg: "#1a1a1a", ebColor: "#1a1a1a" },
              { eb: "03 / Learning", t: "Continuous Learning", d: "We stay curious and committed to growth — sharpening our craft, every single day.", bg: "#FFFFFF", fg: "#1a1a1a", ebColor: "#6b6b6b" },
            ].map((v, i) => (
              <div
                key={i}
                className="group rounded-xl p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                style={{ background: v.bg, color: v.fg }}
              >
                <p className="uppercase mb-6" style={{ fontFamily: eyebrow, fontSize: "9px", letterSpacing: "0.22em", fontWeight: 700, color: v.ebColor }}>{v.eb}</p>
                <div className="w-8 h-8 rounded-full border border-current/30 mb-5 flex items-center justify-center transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" style={{ borderColor: "rgba(0,0,0,0.25)" }}>
                  <span className="text-sm">✦</span>
                </div>
                <h3 className="text-[22px] sm:text-[26px] leading-[1.15] mb-3" style={{ fontFamily: serif, fontWeight: 700 }}>{v.t}</h3>
                <p style={{ fontFamily: eyebrow, fontSize: "15px", lineHeight: 1.65, fontWeight: 500, color: "rgba(0,0,0,0.78)" }}>{v.d}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">
            {[
              { eb: "04 / Collaboration", t: "Collaboration First", d: "Great work happens when teams listen, share, and build together — across roles and disciplines.", bg: "#1F4F4A", fg: "#f5f5f5" },
              { eb: "05 / Integrity", t: "Integrity in Action", d: "We do the right thing — even when no one's watching. Honesty is non-negotiable.", bg: "#E25D32", fg: "#fff" },
            ].map((v, i) => (
              <div
                key={i}
                className="group rounded-xl p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                style={{ background: v.bg, color: v.fg }}
              >
                <p className="uppercase mb-6" style={{ fontFamily: eyebrow, fontSize: "9px", letterSpacing: "0.22em", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>{v.eb}</p>
                <div className="w-8 h-8 rounded-full mb-5 flex items-center justify-center transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110" style={{ borderColor: "rgba(255,255,255,0.4)", border: "1px solid" }}>
                  <span className="text-sm">✦</span>
                </div>
                <h3 className="text-[22px] sm:text-[26px] leading-[1.15] mb-3" style={{ fontFamily: serif, fontWeight: 700 }}>{v.t}</h3>
                <p style={{ fontFamily: eyebrow, fontSize: "15px", lineHeight: 1.65, fontWeight: 500, color: "rgba(255,255,255,0.92)" }}>{v.d}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* HOW WE WORK — outcomes not activity */}
      <section className="py-10 sm:py-14" style={{ background: "#FFFDF6" }}>
        <ScrollReveal animation="fadeUp" className="max-w-[1100px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <p
            className="uppercase mb-4"
            style={{ fontFamily: eyebrow, fontSize: "12px", letterSpacing: "0.18em", fontWeight: 700, color: "#0a0a0a" }}
          >
            HOW WE WORK
          </p>
          <h2
            className="text-[#0a0a0a] mb-8 sm:mb-10"
            style={{ fontFamily: serif, fontWeight: 700, fontSize: "clamp(40px, 6.4vw, 76px)", lineHeight: 1.05 }}
          >
            We focus on outcomes,<br />not just activity.
          </h2>

          <div>
            {[
              { n: "i.", t: <>We value deep work over<br />constant meetings.</>, d: "Time to focus is protected. We default to written context and asynchronous updates so the work — not the calendar — sets the pace." },
              { n: "ii.", t: <>We encourage open<br />communication and<br />transparency.</>, d: "Questions get answered, decisions get explained, and progress is visible. Clarity isn't a luxury — it's a working norm." },
              { n: "iii.", t: <>We prioritize quality over<br />shortcuts.</>, d: "Done right beats done quick. We sweat the details others would skip, because the next person to touch this work deserves it." },
              { n: "iv.", t: <>We embrace feedback as<br />a tool for growth.</>, d: "Direct, kind, frequent. Feedback flows in every direction — and the best ideas win, regardless of who said them first." },
            ].map((r, i) => (
              <div key={i} className="group relative py-3 sm:py-4">
                <div className="absolute top-0 left-0 h-px bg-black/25 w-10 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="grid grid-cols-12 gap-x-3 sm:gap-x-4 gap-y-2 items-start pt-2">
                  <div className="col-span-2 sm:col-span-1">
                    <div
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(32px, 3.6vw, 46px)", color: "#E86A3D", lineHeight: 1 }}
                    >
                      {r.n}
                    </div>
                  </div>
                  <div
                    className="col-span-10 sm:col-span-6 text-[#0a0a0a]"
                    style={{ fontFamily: serif, fontWeight: 700, fontSize: "clamp(22px, 2vw, 30px)", lineHeight: 1.15 }}
                  >
                    {r.t}
                  </div>
                  <div
                    className="hidden sm:block col-span-12 sm:col-span-5 text-[#4a4a4a]"
                    style={{ fontFamily: eyebrow, fontSize: "14px", lineHeight: 1.55 }}
                  >
                    {r.d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="mt-8 text-[#0a0a0a]"
            style={{ fontFamily: serif, fontWeight: 600, fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.4 }}
          >
            Whether working independently or as a team, we aim for{" "}
            <Highlight bg="#D4FF3D">clarity, speed, and impact.</Highlight>
          </p>
        </ScrollReveal>
      </section>

      {/* GROWTH & DEVELOPMENT */}
      <section
        className="py-12 sm:py-16"
        style={{
          background: "#1F5054",
          color: "#f5f5f5",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <ScrollReveal animation="fadeUp" className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <p
            className="uppercase mb-4"
            style={{ fontFamily: eyebrow, fontSize: "13px", letterSpacing: "0.22em", fontWeight: 600, color: "#ffffff" }}
          >
            Growth & Development
          </p>
          <h2
            className="mb-10 sm:mb-12"
            style={{ fontFamily: serif, fontWeight: 500, fontSize: "clamp(38px, 6vw, 76px)", lineHeight: 1.05 }}
          >
            At Carbynetech, growth isn't a side benefit — it's{" "}
            <em style={{ color: "#C8FF01", fontStyle: "italic" }}>part of the job.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2z" />
                  </svg>
                ),
                t: "Learning new tools and technologies is encouraged.",
                d: "Curiosity is rewarded. We make space for the new framework, the new language, the new approach.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                ),
                t: "Team members are trusted to explore and innovate.",
                d: "Autonomy is the default. If you see a better path, we'd rather you take it than wait to be told.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 10h6M7 14h10" />
                  </svg>
                ),
                t: "We support skill development through real-world challenges.",
                d: "The classroom is the project. Real problems, real stakes, real growth — supported by the team around you.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 sm:p-8 transition-colors duration-300"
                style={{
                  background: "#28575ACC",
                  border: "1px solid #386365",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#224648";
                  e.currentTarget.style.border = "1px solid #386365";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#28575ACC";
                  e.currentTarget.style.border = "1px solid #386365";
                }}
              >
                <div
                  className="w-10 h-10 rounded-md mb-8 flex items-center justify-center text-white/80"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {c.icon}
                </div>
                <h3
                  className="mb-4 text-white"
                  style={{ fontFamily: serif, fontWeight: 500, fontSize: "22px", lineHeight: 1.2 }}
                >
                  {c.t}
                </h3>
                <p style={{ fontFamily: eyebrow, fontSize: "14.5px", lineHeight: 1.65, color: "rgba(255,255,255,0.7)" }}>
                  {c.d}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-10 italic"
            style={{ fontFamily: serif, fontSize: "clamp(24px, 3vw, 36px)", color: "#C8FF01", fontWeight: 500 }}
          >
            We grow by solving problems, not just studying them.
          </p>
        </ScrollReveal>
      </section>

      {/* TEAM — thinkers, builders */}
      <section className="relative overflow-hidden py-12 sm:py-16" style={{ background: "#FAF5E8" }}>
        {/* Green blur orb bottom-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            right: "-120px",
            bottom: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background: "#B3DE4F",
            filter: "blur(140px)",
            backdropFilter: "blur(300px)",
            opacity: 0.85,
          }}
        />
        <ScrollReveal animation="fadeUp" className="relative max-w-[1280px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <p
            className="uppercase mb-8 sm:mb-12"
            style={{ fontFamily: eyebrow, fontSize: "12px", letterSpacing: "0.22em", fontWeight: 600, color: "#0a0a0a" }}
          >
            OUR TEAM
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h2
                className="text-[#0a0a0a]"
                style={{ fontFamily: serif, fontWeight: 700, fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.02, letterSpacing: "-0.01em" }}
              >
                A team of <em style={{ color: "#E86A3D", fontStyle: "italic", fontWeight: 600 }}>thinkers,</em>
                <br />
                <em style={{ color: "#E86A3D", fontStyle: "italic", fontWeight: 600 }}>builders,</em> and
                <br />
                problem-solvers.
              </h2>
              <p
                className="mt-8 max-w-md text-[#6b6b6b]"
                style={{ fontFamily: eyebrow, fontSize: "16px", lineHeight: 1.6, fontWeight: 400 }}
              >
                We value people who bring more than just their job description to the work — people who notice, ask, and care.
              </p>
              <p
                className="mt-12 text-[#0a0a0a]"
                style={{ fontFamily: serif, fontStyle: "italic", fontSize: "clamp(20px, 1.8vw, 26px)", fontWeight: 600 }}
              >
                Titles matter less here -{" "}
                <Highlight bg="#C8FF01">contribution matters more.</Highlight>
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  t: "Take initiative.",
                  d: "See it, own it, move it forward — without waiting for permission.",
                  bg: "#C8FF01",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  ),
                },
                {
                  t: "Ask questions.",
                  d: "The best engineers we know are the ones who ask one more question than the room expects.",
                  bg: "#E86A3D",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                  ),
                },
                {
                  t: "Challenge ideas.",
                  d: "Push back on the work, never on the person. The best ideas survive being questioned.",
                  bg: "#1F4F4A",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
                  ),
                },
                {
                  t: "Care about the details.",
                  d: "The small things are the work. We notice them, fix them, and take pride in them.",
                  bg: "#F5C9BC",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 22 12 12 22 2 12 12 2" /></svg>
                  ),
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-5 bg-white rounded-2xl px-5 py-5 sm:px-6 sm:py-6"
                  style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-[10deg]"
                    style={{ background: p.bg }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h4
                      className="text-[#0a0a0a]"
                      style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 700, fontSize: "22px", lineHeight: 1.2 }}
                    >
                      {p.t}
                    </h4>
                    <p
                      className="mt-1.5 text-[#6b6b6b]"
                      style={{ fontFamily: eyebrow, fontSize: "15px", lineHeight: 1.55, fontWeight: 400 }}
                    >
                      {p.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* PEOPLE & CULTURE — image band */}
      <section className="relative bg-white py-4 sm:py-6">
        <div
          className="relative w-full overflow-hidden min-h-[260px] sm:min-h-[clamp(360px,42vw,580px)] rounded-tr-[60px] rounded-bl-[60px] sm:rounded-tr-[clamp(140px,20vw,280px)] sm:rounded-bl-[clamp(140px,20vw,280px)]"
        >
          <img
            src={peopleBand}
            alt="Carbynetech team"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative z-10 h-full min-h-[inherit] flex flex-col items-center justify-end px-6 pb-10 sm:pb-14 md:pb-20">
            <div className="inline-block text-left">
              <h2
                className="text-white"
                style={{
                  fontFamily: serif,
                  fontWeight: 600,
                  fontSize: "clamp(26px, 5.5vw, 68px)",
                  lineHeight: 1.1,
                }}
              >
                Driven by <span style={{ color: "#E86A3D" }}>People &amp; Culture</span>
              </h2>
              <p
                className="mt-4 max-w-xl text-white/90"
                style={{ fontFamily: eyebrow, fontSize: "15.5px", lineHeight: 1.65, fontWeight: 400 }}
              >
                Behind every successful project is a collaborative team that values creativity, growth, and teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKPLACE — trust and support */}
      <section className="py-12 sm:py-16 bg-white">
        <ScrollReveal animation="fadeUp" className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <p
            className="uppercase text-center mb-8"
            style={{ fontFamily: eyebrow, fontSize: "12px", letterSpacing: "0.22em", fontWeight: 600, color: "#0a0a0a" }}
          >
            OUR ENVIRONMENT
          </p>
          <h2
            className="text-center text-[#0a0a0a]"
            style={{ fontFamily: serif, fontWeight: 700, fontSize: "clamp(28px, 4.2vw, 56px)", lineHeight: 1.08 }}
          >
            A workplace built on<br />
            <em style={{ color: "#E86A3D", fontStyle: "italic", fontWeight: 700 }}>trust</em>{" "}
            <span style={{ fontStyle: "italic", fontWeight: 700 }}>and</span>{" "}
            <em style={{ color: "#E86A3D", fontStyle: "italic", fontWeight: 700 }}>support.</em>
          </h2>
          <p
            className="text-center text-[#6b6b6b] max-w-none mx-auto mt-6 mb-10 lg:whitespace-nowrap"
            style={{ fontFamily: eyebrow, fontSize: "15.5px", lineHeight: 1.7, fontWeight: 500 }}
          >
            We aim to create a work environment that holds two ideas at once — and finds the balance between them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[920px] mx-auto">
            {[
              {
                t: "Focused,", em: "Flexible.",
                bg: "#F5EFE3", fg: "#1a1a1a", emColor: "#E86A3D", yetColor: "#1a1a1a",
                icon: (
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="50" cy="50" r="42" />
                    <circle cx="50" cy="50" r="28" />
                    <circle cx="50" cy="50" r="14" />
                    <line x1="50" y1="2" x2="50" y2="98" />
                    <line x1="2" y1="50" x2="98" y2="50" />
                  </svg>
                ),
              },
              {
                t: "Fast-moving,", em: "Thoughtful.",
                bg: "#C8FF01", fg: "#0a0a0a", emColor: "#1F4F4A", yetColor: "#1a1a1a",
                icon: (
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 35 L70 35 L60 25 M70 35 L60 45" />
                    <path d="M10 55 L70 55 L60 45 M70 55 L60 65" />
                    <path d="M10 75 L70 75 L60 65 M70 75 L60 85" />
                  </svg>
                ),
              },
              {
                t: "Independent,", em: "Collaborative.",
                bg: "#0a0a0a", fg: "#ffffff", emColor: "#C8FF01", yetColor: "#ffffff",
                icon: (
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="50" cy="50" r="32" />
                    <line x1="72" y1="72" x2="92" y2="92" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((c, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl px-6 py-8 sm:px-7 sm:py-9 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                style={{ background: c.bg, color: c.fg, minHeight: "170px" }}
              >
                <div
                  className="absolute -left-4 -bottom-4 w-[120px] h-[120px] opacity-[0.08] transition-all duration-500 ease-out group-hover:opacity-[0.15] group-hover:scale-110 group-hover:-rotate-12"
                  style={{ color: c.fg }}
                >
                  {c.icon}
                </div>
                <div className="relative text-center">
                  <p style={{ fontFamily: serif, fontSize: "clamp(22px, 2.2vw, 28px)", fontWeight: 800, lineHeight: 1.1 }}>
                    {c.t}
                  </p>
                  <p
                    className="my-2 uppercase"
                    style={{ fontFamily: eyebrow, fontSize: "10px", letterSpacing: "0.32em", fontWeight: 700, color: c.yetColor, opacity: 0.9 }}
                  >
                    yet
                  </p>
                  <p
                    style={{
                      fontFamily: serif,
                      fontSize: "clamp(22px, 2.2vw, 28px)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: c.emColor,
                      lineHeight: 1.1,
                    }}
                  >
                    {c.em}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CLOSING — dark */}
      <section className="py-16 sm:py-20" style={{ background: "#0a0a0a", color: "#f5f5f5" }}>
        <ScrollReveal animation="fadeUp" className="max-w-[900px] mx-auto px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 text-center">
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 4vw, 48px)", lineHeight: 1.25 }}>
            We believe great work happens<br />
            when people are <em style={{ color: "#C8FF01" }}>trusted</em><br />
            and <em style={{ color: "#C8FF01" }}>supported.</em>
          </h2>
        </ScrollReveal>
      </section>

      <FooterSection />
    </div>
  );
};

export default Culture;
