import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import EwmHeroSection from "@/components/ewm/EwmHeroSection";
import EwmBusinessReality from "@/components/ewm/EwmBusinessReality";
import EwmIntelligentSystem from "@/components/ewm/EwmIntelligentSystem";
import EwmOrchestration from "@/components/ewm/EwmOrchestration";
import EwmModernWarehouse from "@/components/ewm/EwmModernWarehouse";
import EwmIndustrySection from "@/components/ewm/EwmIndustrySection";
import EwmServicePortfolio from "@/components/ewm/EwmServicePortfolio";
import EwmResultsSection from "@/components/ewm/EwmResultsSection";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";

const SapEwm = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Navbar />
    <EwmHeroSection />
    <EwmBusinessReality />
    <EwmIntelligentSystem />
    <EwmOrchestration />
    <EwmModernWarehouse />
    <EwmIndustrySection />
    <EwmServicePortfolio />
    <EwmResultsSection />
    <BrandedCTASection
      eyebrow="Start Here"
      title={<>Ready to See What Your Warehouse <CtaHighlight>Could Look Like?</CtaHighlight></>}
      description="Book a free 60-minute warehouse assessment. We'll walk your flows, identify constraints, and outline a solution — no obligation."
    />
    <FooterSection />
  </div>
);

export default SapEwm;
