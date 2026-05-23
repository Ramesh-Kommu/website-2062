import Navbar from "@/components/Navbar";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import CustomersSection from "@/components/home/CustomersSection";
import InsightsSection from "@/components/home/InsightsSection";
import ConsultingSection from "@/components/home/ConsultingSection";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import WhatWeDeliverSection from "@/components/home/WhatWeDeliverSection";
import Vision2030Section from "@/components/home/Vision2030Section";
// import ApproachSection from "@/components/home/ApproachSection";
import InnerCoreSection from "@/components/home/InnerCoreSection";
import PartnersSection from "@/components/home/PartnersSection";
import HomeCTASection from "@/components/home/HomeCTASection";
import FooterSection from "@/components/home/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HomeHeroSection />
      <CustomersSection />
      <InsightsSection />
      <ConsultingSection />
      <GlobalReachSection />
      <WhatWeDeliverSection />
      <Vision2030Section />
      {/* <ApproachSection /> */}
      <InnerCoreSection />
      <PartnersSection />
      <HomeCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
