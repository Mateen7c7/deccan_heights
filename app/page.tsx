import ActiveVenturesSection from "@/components/home/ActiveVenturesSection";
import Hero from "@/components/Hero";
import TrustValue from "@/components/TrustValue";
import LeadCaptureStrip from "@/components/LeadCaptureStrip";
import BenefitsSection from "@/components/home/BenefitsSection";
// import OurServicess from "@/components/home/OurServicess";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TrustValue />
      <ActiveVenturesSection />
      <BenefitsSection />
      <LeadCaptureStrip />
      <ServicesSection />
      <TestimonialsSection />
      {/* <OurServicess/>     */}
    </div>
  );
}
