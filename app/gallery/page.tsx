"use client";

import React from "react";
import { motion } from "motion/react";

export default function GalleryPage() {
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
            Gallery
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-charcoal-500 mb-6 tracking-tight"
          >
            Visual Showcase
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 w-24 bg-gold-500 mx-auto rounded-full"
          />
        </div>

        {/* Featured Landscape Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg bg-black border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300"
          >
            <iframe
              src="https://www.youtube.com/embed/OfabpSvNZF0"
              title="Brigade Deccan Heights Walkthrough"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg bg-black border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300"
          >
            <iframe
              src="https://www.youtube.com/embed/2TvNiqvHzIM"
              title="Deccan Heights Virtual Tour"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* Shorts Grid Section (Two Shorts Side by Side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full aspect-[9/16] max-w-[340px] mx-auto rounded-3xl overflow-hidden shadow-lg bg-black border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300"
          >
            <iframe
              src="https://www.youtube.com/embed/6L49FjezXg8"
              title="Deccan Heights Overview"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative w-full aspect-[9/16] max-w-[340px] mx-auto rounded-3xl overflow-hidden shadow-lg bg-black border border-gray-100 hover:shadow-2xl hover:border-gold-500/30 transition-all duration-300"
          >
            <iframe
              src="https://www.youtube.com/embed/qqWM-DL1kA8"
              title="Deccan Heights Interior & Amenities Spotlight"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

