"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TeamCard from "@/components/team/TeamCard";
import { TeamMember } from "@/components/team/types";

const founders: TeamMember[] = [
  {
    id: "founder-1",
    name: "Mr. Arshad Ali Khan",
    title: "Founder & Chairman",
    image: "/staff/Arshad Ali Khan.PNG",
    summary:
      "With over 25 years of experience in luxury real estate, Mr. Arshad Ali Khan has shaped the skyline of Deccan. His vision for sustainable, premium living drives our mission forward.",
    bio: "Mr. Arshad Ali Khan is the visionary Founder & Chairman of Deccan Heights. Starting his career in 1998, he has overseen the development of over 50 premium residential projects. His leadership style focuses on integrity, innovation, and customer-centricity.",
    email: "arshad@deccanheights.com",
    linkedin: "#",
    certifications: ["Governament Certified"],
  },
];

export default function FoundersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-500 mt-2 mb-4">
            Meet Our Founder
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Guiding Deccan Heights with decades of industry experience and an
            unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TeamCard member={founder} variant="leadership" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-medium transition-colors"
          >
            View Full Leadership Team
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
