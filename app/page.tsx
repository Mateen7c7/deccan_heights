import ActiveVenturesSection from "@/components/home/ActiveVenturesSection";
import Hero from "@/components/Hero";
import TrustValue from "@/components/TrustValue";
import LeadCaptureStrip from "@/components/LeadCaptureStrip";
import BenefitsSection from "@/components/home/BenefitsSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TrustValue />
      <ActiveVenturesSection />
      <BenefitsSection />
      <LeadCaptureStrip />      {/* <BenefitsSection/> */}
    </div>
  );
}
