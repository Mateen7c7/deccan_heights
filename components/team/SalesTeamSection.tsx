"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TeamCard from "./TeamCard";
import { TeamMember } from "./types";

const salesTeam: TeamMember[] = [
  {
    id: "s1",
    name: "Vikram Singh",
    title: "Senior Property Consultant",
    department: "Residential Sales",
    image: "/team/agent-male.png",
    phone: "+91 98765 43210",
    email: "vikram@deccanheights.com",
    stats: [
      { label: "Experience", value: "8 Years" },
      { label: "Deals Closed", value: "150+" },
    ],
    expertises: ["Luxury Apartments", "South Hyderabad"],
    certifications: ["Realtor"],
    bio: "Vikram specializes in high-end residential properties. He has a knack for finding hidden gems and negotiating the best deals for his clients.",
  },
  {
    id: "s2",
    name: "Anjali Menon",
    title: "Commercial Specialist",
    department: "Commercial Sales",
    image: "/team/agent-female.png",
    phone: "+91 98765 43211",
    email: "anjali@deccanheights.com",
    stats: [
      { label: "Experience", value: "5 Years" },
      { label: "Volume", value: "₹50 Cr+" },
    ],
    expertises: ["Office Spaces", "Retail Leases", "IT Parks"],
    certifications: ["Commercial RE Cert"],
    bio: "Anjali is our go-to expert for commercial real estate. She understands the ROI requirements of investors and helps businesses find their perfect workspace.",
  },
  {
    id: "s3",
    name: "Rohan Das",
    title: "Plot Sales Manager",
    department: "Land & Plots",
    image: "/team/agent-male.png",
    phone: "+91 98765 43212",
    email: "rohan@deccanheights.com",
    stats: [
      { label: "Experience", value: "12 Years" },
      { label: "Acres Sold", value: "200+" },
    ],
    expertises: ["Land Acquisition", "Plots", "Legal Due Diligence"],
    certifications: ["Land Surveyor Basics"],
    bio: "Rohan has extensive knowledge of land zoning and plotting. He has helped hundreds of families build their dream homes on secure, approved plots.",
  },
  {
    id: "s4",
    name: "Sneha Kapoor",
    title: "Residential Sales Associate",
    department: "Residential Sales",
    image: "/team/agent-female.png",
    phone: "+91 98765 43213",
    email: "sneha@deccanheights.com",
    stats: [
      { label: "Experience", value: "3 Years" },
      { label: "Deals Closed", value: "45" },
    ],
    expertises: ["First-time Buyers", "Villas"],
    certifications: ["Certified Associate"],
    bio: "Sneha is passionate about helping first-time homebuyers navigate the market. Her patience and detailed explanations make the process stress-free.",
  },
];

const filters = [
  "All",
  "Residential Sales",
  "Commercial Sales",
  "Land & Plots",
];

export default function SalesTeamSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTeam =
    activeFilter === "All"
      ? salesTeam
      : salesTeam.filter((member) => member.department === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-500 mb-4">
            Meet Our Sales Experts
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Specialized agents ready to help you find exactly what you need.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gold-500 text-white shadow-md transform scale-105"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gold-500 hover:text-gold-500"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => (
              <motion.div
                layout
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TeamCard member={member} variant="sales" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
