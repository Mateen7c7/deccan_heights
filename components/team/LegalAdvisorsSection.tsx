"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { TeamMember } from "./types";

const legalAdvisors: TeamMember[] = [
  {
    id: "la1",
    name: "Adv. Suresh Nair",
    title: "Senior Legal Counsel",
    department: "Property Law",
    image: "/team/agent-male.png",
    bio: "Advocate Suresh Nair has over 20 years of experience in property litigation and documentation. He ensures that every Deccan Heights project is 100% legally compliant and clear.",
    expertises: [
      "Property Litigation",
      "Title Verification",
      "Governament Compliance",
    ],
  },
  {
    id: "la2",
    name: "Adv. Meera Iyer",
    title: "Corporate Legal Advisor",
    department: "Contract Law",
    image: "/team/agent-female.png",
    bio: "Meera specializes in corporate contracts and joint venture agreements. Her meticulous drafting protects the interests of both the company and its stakeholders.",
    expertises: ["Contracts", "Joint Ventures", "Corporate Governance"],
  },
  {
    id: "la3",
    name: "Adv. Rajeev Gupta",
    title: "Environmental Consultant",
    department: "Sustainability Law",
    image: "/team/agent-male.png",
    bio: "Rajeev ensures all our projects adhere to environmental regulations and sustainability norms, paving the way for green certifications.",
    expertises: ["Environmental Law", "Green Clearances"],
  },
];

export default function LegalAdvisorsSection() {
  return (
    <section className="py-20 bg-charcoal-50">
      {/* Using a very light gray or off-white for neutral formal look */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-charcoal-500 mb-2 border-l-4 border-gold-500 pl-4">
            Legal Advisors
          </h2>
          <p className="text-gray-500 pl-5">
            Ensuring transparency, compliance, and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {legalAdvisors.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <TeamCard member={advisor} variant="legal" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
