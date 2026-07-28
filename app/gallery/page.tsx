"use client";

import React from "react";
import { motion } from "motion/react";
import { Building, MapPin, CheckCircle2, Tv, Smartphone } from "lucide-react";

export default function GalleryPage() {
  const highlights = [
    "LEED Pre-Gold Certified Green Building",
    "Prime Location in Yeshwanthpur, Bangalore",
    "Spacious 27,500 sq. ft. Floor Plates",
    "Centralized Air Conditioning & 100% Power Backup",
    "Excellent Connectivity to Metro & NICE Corridor",
  ];

  return (
    <div className="pt-32 md:pt-36 lg:pt-40 pb-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-semibold tracking-widest uppercase mb-3 text-sm md:text-base"
          >
            Visual Showcase
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-charcoal-500 mb-6 tracking-tight"
          >
            Explore Deccan Heights
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 w-24 bg-gold-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Take a virtual tour of our state-of-the-art office spaces and premium developments. Experience the excellence of Grade-A infrastructure first hand.
          </motion.p>
        </div>

        {/* Featured Video Section (Full Width Card) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300 group mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gold-500/10 text-gold-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
              <Tv className="w-6 h-6" />
            </div>
            <div>
              <span className="text-gold-500 text-xs font-bold uppercase tracking-wider block">
                Featured Presentation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-charcoal-500">
                Brigade Deccan Heights Walkthrough
              </h3>
            </div>
          </div>

          {/* Grid Layout for Video and details on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Video Container */}
            <div className="lg:col-span-7 relative w-full aspect-video rounded-2xl overflow-hidden shadow-md bg-black">
              <iframe
                src="https://www.youtube.com/embed/OfabpSvNZF0"
                title="Brigade Deccan Heights Walkthrough"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Information */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal-500/5 text-charcoal-500 text-xs font-medium rounded-full">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" /> Yeshwanthpur, Bangalore
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal-500/5 text-charcoal-500 text-xs font-medium rounded-full">
                    <Building className="w-3.5 h-3.5 text-gold-500" /> Commercial Office Space
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Take a detailed tour of Brigade Deccan Heights, a premier Grade-A commercial office development. Perfectly positioned at the gateway of North Bengaluru, this project offers high-performance workspaces, world-class amenities, and gold-standard energy efficiency for modern corporate requirements.
                </p>
              </div>

              {/* Key Features List */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-4">
                  Key Specifications & Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Divider & Title */}
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal-500 mb-2">Property Highlights & Shorts</h2>
          <p className="text-gray-500 text-sm md:text-base">Quick video showcases featuring architectural designs, walkthrough highlights, and core features.</p>
        </div>

        {/* Shorts Grid Section (Two Shorts Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Shorts Video Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300 group flex flex-col items-center text-center md:text-left md:items-start"
          >
            <div className="flex items-center gap-3 mb-6 w-full justify-center md:justify-start">
              <div className="p-3 bg-gold-500/10 text-gold-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-gold-500 text-xs font-bold uppercase tracking-wider block">
                  Quick Tour
                </span>
                <h3 className="text-lg md:text-xl font-bold text-charcoal-500">
                  Deccan Heights Overview
                </h3>
              </div>
            </div>

            {/* Video Container - Aspect Ratio 9/16 */}
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-black mb-6">
              <iframe
                src="https://www.youtube.com/embed/6L49FjezXg8"
                title="Deccan Heights Overview"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed">
                Watch a quick visual overview showcasing the premium infrastructure, aesthetic facade, and landscape design of our developments.
              </p>
            </div>
          </motion.div>

          {/* Shorts Video Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300 group flex flex-col items-center text-center md:text-left md:items-start"
          >
            <div className="flex items-center gap-3 mb-6 w-full justify-center md:justify-start">
              <div className="p-3 bg-gold-500/10 text-gold-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-gold-500 text-xs font-bold uppercase tracking-wider block">
                  Workspace Tour
                </span>
                <h3 className="text-lg md:text-xl font-bold text-charcoal-500">
                  Interior & Amenities Spotlight
                </h3>
              </div>
            </div>

            {/* Video Container - Aspect Ratio 9/16 */}
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-md bg-black mb-6">
              <iframe
                src="https://www.youtube.com/embed/qqWM-DL1kA8"
                title="Deccan Heights Interior & Amenities Spotlight"
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed">
                Explore the elegant lobbies, modern workspaces, high-speed lift areas, and world-class office environments within Deccan Heights.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

