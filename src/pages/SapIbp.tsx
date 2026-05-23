import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import IbpHeroSection from "@/components/ibp/IbpHeroSection";
import IbpPlanningGap from "@/components/ibp/IbpPlanningGap";
import IbpThreePacks from "@/components/ibp/IbpThreePacks";
import IbpAlignmentSection from "@/components/ibp/IbpAlignmentSection";
import IbpIntelligenceLayer from "@/components/ibp/IbpIntelligenceLayer";
import IbpServicePortfolio from "@/components/ibp/IbpServicePortfolio";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";

const SapIbp = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <IbpHeroSection />
    <IbpPlanningGap />
    <IbpThreePacks />
    <IbpAlignmentSection />
    <IbpIntelligenceLayer />
    <IbpServicePortfolio />
    <BrandedCTASection
      eyebrow="Start Here"
      title={<>See What Agile SAP IBP <CtaHighlight>Looks Like for Your Plant.</CtaHighlight></>}
      description="45-minute working session with IBP specialists. We'll map your gaps to change acceleration."
    />
    <FooterSection />
  </div>
);

export default SapIbp;
