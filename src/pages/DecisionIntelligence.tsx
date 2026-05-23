import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import SolversSection from "@/components/SolversSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import ResultsSection from "@/components/ResultsSection";
import BrandedCTASection, { CtaHighlight } from "@/components/BrandedCTASection";
import FooterSection from "@/components/home/FooterSection";

const DecisionIntelligence = () => (
  <div className="min-h-screen bg-background">
    <style>{`
      .di-white-titles h1,
      .di-white-titles h1 span,
      .di-white-titles h2,
      .di-white-titles h2 span,
      .di-white-titles .text-primary {
        color: #ffffff !important;
      }
    `}</style>
    <Navbar />
    <div className="di-white-titles">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <SolversSection />
      <AnalyticsSection />
      <ResultsSection />
    </div>
    <BrandedCTASection
      title={<>Stop Guessing.<br /><CtaHighlight>Start Optimizing.</CtaHighlight></>}
      description="Your competitors are still tweaking. Fine-tuning. Iterating. A/B testing — you can leapfrog all at the mathematical frontier. Let's show you what optimal looks like for your business."
    />
    <FooterSection />
  </div>
);

export default DecisionIntelligence;
