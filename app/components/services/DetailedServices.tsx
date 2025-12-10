"use client";

import { motion } from "motion/react";
import {
  CheckCircle,
  Search,
  FileText,
  Handshake,
  ShieldCheck,
  Hammer,
} from "lucide-react";

const SectionWrapper = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-24 px-6 overflow-hidden ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const Heading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-12">
    <h3 className="text-[#C6A15B] font-bold uppercase tracking-widest text-sm mb-2">
      {subtitle}
    </h3>
    <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C]">{title}</h2>
  </div>
);

export default function DetailedServices() {
  return (
    <div className="flex flex-col">
      {/* A. Residential Plot Sales */}
      <SectionWrapper id="residential-plots" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-gray-100 relative group"
          >
            {/* Placeholder for Plot Map/Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="text-gray-400 font-semibold">
                Plot Map Visualization
              </span>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading title="Premium Residential Plots" subtitle="Land Sales" />
            <p className="text-[#3C3C3C]/80 mb-8 leading-relaxed text-lg">
              Secure your future with our curated selection of premium
              residential plots. We offer litigation-free, verified lands in
              high-growth corridors.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "DTCP & RERA Approved Layouts",
                "Strategic Locations near Highways",
                "Clear Title Documentation",
                "High Appreciation Potential",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#3C3C3C]">
                  <CheckCircle className="w-5 h-5 text-[#C6A15B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="px-8 py-3 bg-[#C6A15B] text-white font-semibold rounded hover:bg-[#b08d4b] transition-colors shadow-lg">
              View Available Plots
            </button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* B. Sell Your Property */}
      <SectionWrapper id="sell-property" className="bg-[#F8F8F8]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <Heading title="Sell With Confidence" subtitle="Seller Services" />
            <p className="text-[#3C3C3C]/80 mb-8 leading-relaxed text-lg">
              Get the best value for your property with our comprehensive
              selling strategy. We handle everything from valuation to closing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "Free Valuation",
                  desc: "Data-driven market analysis",
                },
                {
                  title: "Strategic Marketing",
                  desc: "Premium listing exposure",
                },
                { title: "Documentation", desc: "Hassle-free legal support" },
                {
                  title: "Fast Closing",
                  desc: "Streamlined negotiation process",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <h4 className="font-bold text-[#3C3C3C] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-[#3C3C3C] text-white font-semibold rounded hover:bg-black transition-colors shadow-lg">
              Request Valuation
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-white relative"
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <span className="text-gray-400 font-semibold">
                Marketing Strategy Visual
              </span>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* C. Buy a Property */}
      <SectionWrapper id="buy-property" className="bg-white">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Heading
            title="Your Journey to Ownership"
            subtitle="Buyer Services"
          />
          <p className="text-[#3C3C3C]/70">
            We simplify the buying process with a transparent, step-by-step
            approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { title: "Consultation", icon: Handshake, step: "01" },
            { title: "Property Search", icon: Search, step: "02" },
            { title: "Negotiation", icon: FileText, step: "03" },
            { title: "Closing", icon: ShieldCheck, step: "04" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative p-8 border border-[#BDBDBD]/30 rounded-xl bg-[#F8F8F8] hover:bg-white hover:shadow-lg transition-all group"
            >
              <div className="text-6xl font-black text-[#f0f0f0] absolute top-4 right-4 group-hover:text-[#C6A15B]/10 transition-colors">
                {item.step}
              </div>
              <div className="w-12 h-12 bg-[#C6A15B] rounded-lg text-white flex items-center justify-center mb-6 shadow-md">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                Guided support at every stage.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-[#C6A15B] text-white font-semibold rounded hover:bg-[#b08d4b] transition-colors shadow-lg">
            Start Property Search
          </button>
        </div>
      </SectionWrapper>

      {/* D. Property Management */}
      <SectionWrapper
        id="property-management"
        className="bg-[#3C3C3C] text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#C6A15B] font-bold uppercase tracking-widest text-sm mb-2">
              Hassle-Free Ownership
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Property Management
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Let us handle the day-to-day operations while you enjoy the
              returns. Ideal for NRI investors and busy professionals.
            </p>
            <button className="px-8 py-3 bg-white text-[#3C3C3C] font-semibold rounded hover:bg-gray-100 transition-colors shadow-lg">
              Get Management Proposal
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Tenant Screening",
              "Rent Collection",
              "Regular Maintenance",
              "Financial Reporting",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="w-8 h-8 text-[#C6A15B] mb-4" />
                <h4 className="text-lg font-semibold text-white">{item}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* E. Construction */}
      <SectionWrapper id="construction" className="bg-[#F8F8F8]">
        <Heading title="Construction & Projects" subtitle="Build With Us" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
              <Hammer className="w-12 h-12 text-[#C6A15B] mb-6" />
              <h3 className="text-2xl font-bold text-[#3C3C3C] mb-4">
                Turnkey Solutions
              </h3>
              <p className="text-[#3C3C3C]/70 mb-8 grow">
                From architectural design to final finishing, we manage the
                entire construction lifecycle with precision and quality
                materials.
              </p>
              <button className="w-full py-3 border-2 border-[#3C3C3C] text-[#3C3C3C] font-bold rounded hover:bg-[#3C3C3C] hover:text-white transition-all">
                Request Estimate
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-48 bg-gray-200 rounded-lg relative overflow-hidden group"
              >
                <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                  Portfolio {item}
                </span>
                <div className="absolute inset-0 bg-[#C6A15B]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* F. Resort / Holiday Property */}
      <SectionWrapper id="resort-services" className="bg-white">
        <div className="flex flex-col items-center">
          <Heading
            title="Holiday & Resort Properties"
            subtitle="Leisure Investment"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { title: "Hill Stations", color: "bg-emerald-100" },
              { title: "Beach Fronts", color: "bg-blue-100" },
              { title: "Farm Houses", color: "bg-amber-100" },
            ].map((type, i) => (
              <div
                key={i}
                className={`h-64 rounded-xl overflow-hidden relative group ${type.color}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-[#3C3C3C] opacity-50">
                    {type.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-lg">
                    {type.title} Investment
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <button className="px-10 py-4 bg-[#C6A15B] text-white font-semibold rounded-full hover:bg-[#b08d4b] transition-colors shadow-lg">
            Explore Holiday Properties
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
