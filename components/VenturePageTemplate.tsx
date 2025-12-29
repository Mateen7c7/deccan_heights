"use client";

import Phase5 from "@/svg_components/Phase5";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface VentureStats {
  label: string;
  value: string;
}

interface VentureData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: VentureStats[];
  amenities: string[];
  locationHighlights: string[];
  mapEmbedUrl?: string;
  layoutPlanUrl?: string;
}

export default function VenturePageTemplate({ data }: { data: VentureData }) {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax-like scale */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-[#3C3C3C] via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-[#C6A15B] text-[#C6A15B] text-sm tracking-[0.2em] uppercase mb-4 rounded-full bg-black/20 backdrop-blur-md">
              Premium Land Project
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
              {data.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() =>
                  document
                    .getElementById("inquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-[#C6A15B] text-white font-bold rounded-full hover:bg-[#b08d4b] transition-all shadow-lg hover:shadow-[#C6A15B]/40 hover:-translate-y-1"
              >
                Download Brochure
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("inquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white hover:text-[#3C3C3C] transition-all backdrop-blur-sm"
              >
                Book Site Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="text-center pt-4 md:pt-0">
              <p className="text-[#BDBDBD] text-xs uppercase tracking-widest font-semibold mb-2">
                {stat.label}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-[#3C3C3C]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- OVERVIEW & HIGHLIGHTS --- */}
      <section className="py-24 px-6 md:px-12 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Description */}
          <div className="lg:w-1/2">
            <h3 className="text-[#C6A15B] font-bold uppercase tracking-wider mb-2">
              Project Overview
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-8">
              A Standard of Living Above the Rest
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {data.description}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Designed for those who appreciate quality and long-term value,
              this project offers a secure and appreciative asset. With rapid
              development in the surrounding areas, investing here is not just
              buying land; it&apos;s securing your future.
            </p>
          </div>

          {/* Right: Amenities/Features */}
          <div className="lg:w-1/2 bg-[#F8F8F8] p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#3C3C3C] mb-8">
              Premium Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C6A15B]/10 flex items-center justify-center text-[#C6A15B]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#3C3C3C] font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MASTER PLAN --- */}
      { (
        <section className="py-24 bg-[#F8F8F8]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-4">
              Project <span className="text-[#C6A15B]">Master Plan</span>
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore the meticulously planned layout of {data.title}, designed
              to provide maximum space, privacy, and aesthetic appeal.
            </p>
            <div className="relative w-full max-w-5xl mx-auto bg-white p-4 rounded-3xl shadow-xl border border-gray-100 overflow-hidden group">
              <div className="relative aspect-4/3 w-full">
                {/* <Image
                  src={data.layoutPlanUrl}
                  alt={`${data.title} Master Plan`}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-700 font-bold "
                /> */}
                <Phase5 width={300} height={300} />
              </div>

              {/* Overlay for interaction hint */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-sm text-[#3C3C3C] px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  View Full Layout
                </span>
              </div>

              <Link
                href="/maps/phase5"
                className="absolute inset-0 z-10"
                aria-label="View interactive map"
              />
            </div>
          </div>
        </section>
      )}

      {/* --- LOCATION --- */}
      <section className="py-24 bg-[#3C3C3C] text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Strategic <span className="text-[#C6A15B]">Location</span>
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg">
                Situated in a high-growth corridor, ensuring your investment
                appreciates while keeping you connected to the city&apos;s
                landmarks.
              </p>
              <ul className="space-y-4">
                {data.locationHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#C6A15B]" />
                    <span className="text-gray-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[400px] w-full bg-gray-800 rounded-2xl overflow-hidden relative border border-white/10 group">
              {data.mapEmbedUrl ? (
                <iframe
                  src={data.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <>
                  {/* Placeholder for Map */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#2C2C2C]">
                    <span className="text-gray-500 font-mono text-sm">
                      Interactive Map Integration
                    </span>
                  </div>
                  {/* Stylized Overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#C6A15B]/20 to-transparent pointer-events-none" />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- INQUIRY FORM SECTION --- */}
      <section
        id="inquiry-form"
        className="py-24 bg-white container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-4">
            Invest in <span className="text-[#C6A15B]">{data.title}</span>
          </h2>
          <p className="text-gray-600">
            Fill in the details below to receive the brochure, layout plan, and
            price sheet.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#F8F8F8] p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#3C3C3C] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all bg-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3C3C3C] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all bg-white"
                  placeholder="+91"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3C3C3C] mb-2">
                Email (Optional)
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all bg-white"
                placeholder="you@example.com"
              />
            </div>
            <button className="w-full py-4 bg-[#C6A15B] text-white font-bold rounded-lg hover:bg-[#3C3C3C] transition-colors shadow-lg">
              Request Project Details
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
