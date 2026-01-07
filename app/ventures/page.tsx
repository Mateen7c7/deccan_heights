"use client";

import { motion } from "motion/react";
import VentureCard from "../../components/home/VentureCard";
import React from "react";
import Image from "next/image";

const ongoingVentures = [
  {
    id: 1,
    title: "Deccan Heights Phase 5",
    description:
      "Experience luxury living in the heart of nature with our premium plots designed for your dream home. A perfect blend of tranquility and modern amenities.",
    image: "/plot1.webp",
    link: "/ventures/phase-1",
    stats: [
      { label: "Area", value: "9 Acres" },
      { label: "Price", value: "₹8500 " },
      { label: "Location", value: "Shadnagar" },
    ],
  },
];

const completedProjects = [
  {
    id: 1,
    title: "Basheera Bagh",
    description:
      "A premium residential development offering modern amenities and strategic connectivity.",
    location: "Hyderabad",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 2,
    title: "Clock Tower Colony",
    description:
      "Centrally located residential project with focus on community living and accessibility.",
    location: "Secunderabad",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 3,
    title: "Shadnagar Venture",
    description:
      "Strategic investment plots in the rapidly developing corridor of Shadnagar.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 4,
    title: "Brindawaan Nagar",
    description:
      "A serene residential layout designed for peaceful living within city reach.",
    location: "Hyderabad",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 5,
    title: "Empire City Shadnagar",
    description:
      "A landmark development in Shadnagar offering premium infrastructure and high ROI.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 6,
    title: "5th Revenue Qutub",
    description:
      "High-demand plots featuring excellent urban connectivity and essential services.",
    location: "Qutubullapur",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 7,
    title: "Golden Villa Balapur",
    description:
      "Luxury villa plots in the tranquil environment of Balapur, perfect for homeowners.",
    location: "Balapur",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 8,
    title: "Deccan Heights Phase 1",
    description:
      "The foundation of our excellence, Phase 1 set the standard for quality layouts.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 9,
    title: "Deccan Heights Phase 2",
    description:
      "Continuing our legacy of providing secure and premium gated communities.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 10,
    title: "Deccan Heights Phase 3",
    description:
      "A successful expansion of the Deccan Heights family with 100% occupancy.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
  {
    id: 11,
    title: "Deccan Heights Phase 4",
    description:
      "Modern living integrated with nature, delivering happiness to hundreds of families.",
    location: "Shadnagar",
    year: "Completed",
    status: "Completed",
  },
];

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-[#3C3C3C] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {/* Abstract Background */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gray-700 via-[#3C3C3C] to-[#3C3C3C]"></div> */}
          {/* <div className="bg-[url('/plot2.webp')] w-full h-full bg-cover bg-center"></div> */}
          <Image
            src="/plot2.webp"
            alt="Plot Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Our <span className="text-[#C6A15B]">Ventures</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Building a legacy of trust with ongoing excellence and a history of
            success.
          </motion.p>
        </div>
      </section>

      {/* --- ONGOING VENTURES (Venture 1 & 2) --- */}
      <section className="py-20 px-6 md:px-12 lg:px-24 container mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-4"
          >
            Ongoing <span className="text-[#C6A15B]">Ventures</span>
          </motion.h2>
          <div className="h-1 w-24 bg-[#C6A15B] mx-auto rounded-full mb-6"></div>
          <p className="text-[#3C3C3C]/80 max-w-2xl mx-auto">
            Explore our current premium developments designed for exceptional
            living and high returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {ongoingVentures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
        </div>
      </section>

      {/* --- UPCOMING PROJECTS (Interest Form) --- */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#C6A15B]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3C3C3C]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#C6A15B] font-bold tracking-wider uppercase text-sm"
              >
                Coming Soon
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#3C3C3C] mt-2 mb-6"
              >
                Upcoming <span className="text-[#C6A15B]">Projects</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-[#3C3C3C]/80 mb-8 leading-relaxed"
              >
                Be the first to know about our next landmark developments.
                Register your interest now to get exclusive pre-launch offers
                and priority site visits.
              </motion.p>

              <ul className="space-y-4 mb-8 text-[#3C3C3C]">
                {[
                  "Priority access to new plot releases",
                  "Exclusive pre-launch pricing benefit",
                  "Choice of premium locations within the layout",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B]">
                      ✔
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#3C3C3C] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#BDBDBD]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3C3C3C] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#BDBDBD]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3C3C3C] mb-2">
                    Interested Location
                  </label>
                  <select className="w-full px-4 py-3 bg-[#F8F8F8] border border-[#BDBDBD]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50 transition-all text-[#3C3C3C]">
                    <option>Shadnagar</option>
                    <option>Chevella</option>
                    <option>Moinabad</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="w-full py-4 bg-[#C6A15B] text-white font-bold rounded-lg hover:bg-[#3C3C3C] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Pre-Launch Access
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  By submitting, you agree to receive project updates. We
                  respect your privacy.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMPLETED PROJECTS --- */}
      <section className="py-20 bg-[#3C3C3C] text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Completed <span className="text-[#C6A15B]">Projects</span>
            </motion.h2>
            <div className="h-1 w-24 bg-[#C6A15B] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A testament to our commitment. Successfully delivered projects
              where communities are thriving today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#C6A15B]/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-[#C6A15B] transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-[#C6A15B]/20 text-[#C6A15B] text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#C6A15B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#C6A15B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {project.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
