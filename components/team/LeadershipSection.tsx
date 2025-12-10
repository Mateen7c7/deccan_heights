"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { TeamMember } from "./types";

const leaders: TeamMember[] = [
  {
    id: "l1",
    name: "Rajesh Kumar",
    title: "Founder & CEO",
    image: "/team/agent-male.png", // Using the male placeholder
    summary:
      "With over 25 years of experience in luxury real estate, Rajesh has shaped the skyline of Deccan. His vision for sustainable, premium living helps drive our mission forward.",
    bio: "Rajesh Kumar is the visionary Founder & CEO of Deccan Heights. Starting his career in 1998, he has overseen the development of over 50 premium residential projects. His leadership style focuses on integrity, innovation, and customer-centricity. Rajesh holds an MBA from IIM Bangalore and is a frequent speaker at national real estate summits.",
    email: "rajesh@deccanheights.com",
    linkedin: "#",
    expertises: [
      "Strategic Planning",
      "Luxury Development",
      "Investor Relations",
    ],
    certifications: ["RERA Certified", "CREDAI Member"],
  },
  {
    id: "l2",
    name: "Priya Sharma",
    title: "Managing Director",
    image: "/team/agent-female.png", // Using the female placeholder
    summary:
      "Priya leads our operational excellence, ensuring every project meets the Gold Standard of Deccan Heights. Her attention to detail and customer focus is unmatched.",
    bio: "Priya Sharma brings operational discipline and aesthetic finesse to Deccan Heights. Formerly a senior consultant at a top global firm, she pivoted to real estate to build communities, not just houses. She oversees project execution, legal compliance, and customer experience. Priya is also an advocate for sustainable architecture.",
    email: "priya@deccanheights.com",
    linkedin: "#",
    expertises: [
      "Operations Management",
      "Legal Compliance",
      "Sustainable Design",
    ],
    certifications: ["Green Building Certified", "MBA"],
  },
  {
    id: "l3",
    name: "Arjun Reddy",
    title: "Head of Sales",
    image: "/team/agent-male.png",
    summary:
      "Arjun brings a dynamic approach to sales, focusing on building long-term relationships rather than just closing deals. He mentors our elite sales force.",
    bio: "Arjun Reddy is the driving force behind our record-breaking sales figures. With a background in psychology and marketing, he understands the emotional journey of buying a home. He leads a team of 40+ agents and ensures that transparency remains the core of our sales process.",
    email: "arjun@deccanheights.com",
    linkedin: "#",
    expertises: ["Sales Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Sales Professional"],
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-500 mb-4">
            Leadership & Vision
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Guiding Deccan Heights with decades of industry experience and a
            commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TeamCard member={leader} variant="leadership" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
