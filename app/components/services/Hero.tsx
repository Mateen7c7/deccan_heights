"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#3C3C3C]">
      {/* Background Gradient/Image Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#3C3C3C] via-[#2a2a2a] to-[#1a1a1a] opacity-90 z-0" />
      <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10 mix-blend-overlay z-0" />{" "}
      {/* Subtle texture placeholder */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Our Comprehensive{" "}
          <span className="text-[#C6A15B]">Real Estate Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-[#BDBDBD] mb-10 max-w-3xl mx-auto font-light"
        >
          From plots to property management, we deliver tailored solutions for
          your journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-[#C6A15B] text-white font-semibold rounded-md shadow-lg hover:bg-[#b08d4b] transition-all transform hover:scale-105"
          >
            Consult with Us
          </a>
          <button
            onClick={scrollToServices}
            className="px-8 py-4 border border-[#BDBDBD] text-white font-semibold rounded-md hover:bg-white/10 transition-all flex items-center gap-2 group"
          >
            Explore Services
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-sm tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
