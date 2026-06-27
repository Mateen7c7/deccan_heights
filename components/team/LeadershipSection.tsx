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
    name: "Adnan Ali Khan",
    title: "Managing Director",
    image: "/staff/adnan.jpeg", // Using the female placeholder
    summary:
      "Adnan leads our operational excellence, ensuring every project meets the Gold Standard of Deccan Heights. Her attention to detail and customer focus is unmatched.",
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
    name: "Syed Zakir Quadri ",
    title: "President (sales & Marketing)",
    image: "/staff/SyedZakirQuadri.jpeg",
    summary:
      "Zakir brings a dynamic approach to sales, focusing on building long-term relationships rather than just closing deals. He mentors our elite sales force.",
    bio: "Sajid Ali is the driving force behind our record-breaking sales figures. With a background in psychology and marketing, he understands the emotional journey of buying a home. He leads a team of 40+ agents and ensures that transparency remains the core of our sales process.",
    email: "zakir@deccanheights.com",
    linkedin: "#",
    expertises: ["Sales Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Sales Professional"],
  },
  {
    id: "l4",
    name: "Mohammed irshad Ahmed",
    title: "General manager",
    image: "/staff/MohammedirshadAhmed.jpeg",
    summary:
      "Mohammed irshad Ahmed is the general manager of Deccan Heights. He is responsible for the overall operations of the company.",
    bio: "Mohammed irshad Ahmed is the general manager of Deccan Heights. He is responsible for the overall operations of the company. He has a background in operations management and has a proven track record of success in the real estate industry.",
    email: "mohammedirshad@deccanheights.com",
    linkedin: "#",
    expertises: ["Operations Management", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Operations Professional"],
  },{
    id: "l5",
    name: "Syed jaleel Quadri",
    title: "Asst general manager",
    image: "/staff/SyedjaleelQuadri.jpeg",
    summary:
      "Jaleel brings a dynamic approach to sales, focusing on building long-term relationships rather than just closing deals. He mentors our elite sales force.",
    bio: "Jaleel is the asst general manager of Deccan Heights. He is responsible for the overall sales of the company. He has a background in sales and has a proven track record of success in the real estate industry.",
    email: "jaleel@deccanheights.com",
    linkedin: "#",
    expertises: ["Sales Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Sales Asst General Manager"],
  },{
    id: "l6",
    name: "Ashfak Ishaq Yin",
    title: "Business Strategist ",
    image: "/staff/AshfakIshaqYin.jpeg",
    summary:
      "Ashfak brings a dynamic approach to business, focusing on building long-term relationships rather than just closing deals. He mentors our elite business force.",
    bio: "A Seasoned entrepreneur with a financial backbone, investor and business strategist with 30+ years of global experience across India, the Middle East, USA, Malaysia, and beyond. One who has worn many hats - CFO, Business Head, Director, Mentor, Co-founder across a remarkably diverse range of industries.Best at collaborating, building, structuring and strategically growing businesses, especially in early to mid stages.",
    email: "ashfak@deccanheights.com",
    linkedin: "#",
    expertises: ["Business Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Business Strategist"],
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
