import TeamHero from "@/components/team/TeamHero";
import LeadershipSection from "@/components/team/LeadershipSection";
import SalesTeamSection from "@/components/team/SalesTeamSection";
import LegalAdvisorsSection from "@/components/team/LegalAdvisorsSection";
import Certifications from "@/components/team/Certifications";
import ContactCTA from "@/components/team/ContactCTA";

export const metadata = {
  title: "Our Team | Deccan Heights",
  description:
    "Meet the experienced leadership, sales, and legal experts behind Deccan Heights. Committed to excellence and trust in real estate.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <TeamHero />
      <LeadershipSection />
      <SalesTeamSection />
      <LegalAdvisorsSection />
      <Certifications />
      <ContactCTA />
    </main>
  );
}
