import ActiveVenturesSection from "@/components/home/ActiveVenturesSection";
import Hero from "@/components/Hero";
import TrustValue from "@/components/TrustValue";
import LeadCaptureStrip from "@/components/LeadCaptureStrip";
import BenefitsSection from "@/components/home/BenefitsSection";
import FoundersSection from "@/components/home/FoundersSection";
// import OurServicess from "@/components/home/OurServicess";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyHyderabad from "@/components/home/WhyHyderabad";
import BookSiteVisit from "@/components/home/BookSiteVisit";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TrustValue />
      <ActiveVenturesSection />
      <BenefitsSection />
      <FoundersSection />
      <LeadCaptureStrip />
      <ServicesSection />
      <TestimonialsSection />
      <WhyHyderabad />
      <BookSiteVisit />
      {/* <OurServicess/>     */}
    </div>
  );
}
