import teamCardsImg from "@/assets/team-cards.png";

const TeamSection = () => {
  return (
    <section className="py-10 sm:py-14" style={{ background: "#060604" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6">
        <h2 className="text-[26px] sm:text-[26px] md:text-[32px] lg:text-[40px] text-center mb-10 sm:mb-16 leading-[1.1]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>
          Solution Driven, Passionate Team
        </h2>
        <div className="flex justify-center">
          <img src={teamCardsImg} alt="Team values" className="w-full max-w-[1100px] h-auto" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
