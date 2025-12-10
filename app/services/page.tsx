import Hero from "../components/services/Hero";
import ServicesGrid from "../components/services/ServicesGrid";
import DetailedServices from "../components/services/DetailedServices";
import WhyChooseUs from "../components/services/WhyChooseUs";
import Testimonials from "../components/services/Testimonials";
import FAQ from "../components/services/FAQ";
import ContactLeadCapture from "../components/services/ContactLeadCapture";
import Footer from "../components/services/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Deccan Heights",
  description:
    "Explore our comprehensive real estate services including plot sales, property management, construction, and resort investments.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#C6A15B] selection:text-white">
      <Hero />
      <ServicesGrid />
      <DetailedServices />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactLeadCapture />
      <Footer />
    </main>
  );
}
