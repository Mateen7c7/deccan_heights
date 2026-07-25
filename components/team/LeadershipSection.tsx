"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { TeamMember } from "./types";

const leaders: TeamMember[] = [
  {
    id: "l1",
    name: "Mr. Arshad Ali Khan",
    title: "Founder & Chairman",
    image: "/staff/Arshad ali khan.jpeg",
    summary:
      "With over 25 years of experience in luxury real estate, Mr. Arshad Ali Khan has shaped the skyline of Deccan. His vision for sustainable, premium living helps drive our mission forward.",
    bio: "Mr. Arshad Ali Khan is the visionary Founder & Chairman of Deccan Heights. Starting his career in 1998, he has overseen the development of over 50 premium residential projects. His leadership style focuses on integrity, innovation, and customer-centricity.",
    email: "arshad@deccanheights.com",
    linkedin: "#",
    certifications: ["RERA Certified"],
  },
  {
    id: "l2",
    name: "Mr. Adnan Ali Khan",
    title: "Managing Director",
    image: "/staff/adnan.jpeg",
    summary:
      "Mr. Adnan Ali Khan leads our operational excellence, ensuring every project meets the Gold Standard of Deccan Heights. His attention to detail and customer focus is unmatched.",
    bio: "Mr. Adnan Ali Khan serves as Managing Director of Deccan Heights, overseeing project execution, legal compliance, and customer experience. He brings operational discipline and a commitment to delivering premium real estate with transparency and integrity.",
    email: "adnan@deccanheights.com",
    linkedin: "#",
    expertises: [
      "Operations Management",
      "Legal Compliance",
      "Sustainable Design",
    ],
    certifications: ["Green Building Certified", "MBA"],
  },
  {
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
  },
  {
    id: "l12",
    name: "Syed Nooruddin",
    title: "Chief Executive Officer",
    image: "/staff/Syed Nooruddin.jpeg",
    summary:
      "Syed Nooruddin is the chief executive officer of Deccan Heights. He is responsible for the overall operations of the company.",
    bio: "Syed Nooruddin is the chief executive officer of Deccan Heights. He is responsible for the overall operations of the company. He has a background in operations management and has a proven track record of success in the real estate industry.",
    email: "nooruddin@deccanheights.com",
    linkedin: "#",
    expertises: ["Leadership", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Chief Executive Officer"],
  },
  {
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
  },

  {
    id: "l13",
    name: "Syed Zubair",
    title: "General Manager",
    image: "/staff/Syed Zubair.jpeg",
    summary:
      "Syed Zubair is the general manager of Deccan Heights. He is responsible for the overall operations of the company.",
    bio: "Syed Zubair is the general manager of Deccan Heights. He is responsible for the overall operations of the company. He has a background in operations management and has a proven track record of success in the real estate industry.",
    email: "zubair@deccanheights.com",
    linkedin: "#",
    expertises: ["Operations Management", "Team Leadership", "Market Analysis"],
    certifications: ["Certified General Manager"],
  },
  {
    id: "l8",
    name: "Gulam Mustafa",
    title: "General Manager",
    image: "/staff/Gulam Mustafa.jpg",
    summary:
      "Gulam Mustafa is the general manager of Deccan Heights. He is responsible for the overall operations of the company.",
    bio: "Gulam Mustafa is the general manager of Deccan Heights. He is responsible for the overall operations of the company. He has a background in operations management and has a proven track record of success in the real estate industry.",
    email: "mustafa@deccanheights.com",
    linkedin: "#",
    expertises: ["Operations Management", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Operations Manager"],
  },
  {
    id: "l7",
    name: "Mohammed Akram",
    title: "Chief Marketing Manager",
    image: "/staff/Mohammed Akram.jpg",
    summary:
      "Mohammed Akram is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company.",
    bio: "Mohammed Akram is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company. He has a background in marketing and has a proven track record of success in the real estate industry.",
    email: "akram@deccanheights.com",
    linkedin: "#",
    expertises: ["Marketing Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Marketing Manager"],

  },
  {
    id: "l9",
    name: "Imran Khan",
    title: "Chief Marketing Manager",
    image: "/staff/ImranKhan.jpg",
    summary:
      "Imran Khan is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company.",
    bio: "Imran Khan is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company. He has a background in marketing and has a proven track record of success in the real estate industry.",
    email: "imran@deccanheights.com",
    linkedin: "#",
    expertises: ["Marketing Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Marketing Manager"],
  }, {
    id: "l10",
    name: "Mohammed Abdul Mujeeb",
    title: "Chief Marketing Manager",
    image: "/staff/Mohammed abdul mujeeb.jpg",
    summary:
      "Mohammed Abdul Mujeeb is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company.",
    bio: "Mohammed Abdul Mujeeb is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company. He has a background in marketing and has a proven track record of success in the real estate industry.",
    email: "mujeeb@deccanheights.com",
    linkedin: "#",
    expertises: ["Marketing Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Marketing Manager"],
  },
  {
    id: "l11",
    name: "Mohammed Maseehuddin",
    title: "Chief Marketing Manager",
    image: "/staff/Mohammed Maseehuddin.jpeg",
    summary:
      "Mohammed Maseehuddin is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company.",
    bio: "Mohammed Maseehuddin is the chief marketing manager of Deccan Heights. He is responsible for the overall marketing of the company. He has a background in marketing and has a proven track record of success in the real estate industry.",
    email: "maseehuddin@deccanheights.com",
    linkedin: "#",
    expertises: ["Marketing Strategy", "Team Leadership", "Market Analysis"],
    certifications: ["Certified Marketing Manager"],
  }

];

export default function LeadershipSection() {
  const topLeaders = leaders.slice(0, 2);
  const otherLeaders = leaders.slice(2);

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

        {/* Top Tier (Founder & MD) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {topLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TeamCard member={leader} variant="leadership" isFeatured={true} />
            </motion.div>
          ))}
        </div>

        {/* Divider / spacing */}
        <div className="h-px bg-gray-100 max-w-6xl mx-auto mb-16" />

        {/* Secondary Tier (Other Executives) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherLeaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
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
