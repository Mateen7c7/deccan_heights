"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-charcoal-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team/hero-bg.png"
          alt="Deccan Heights Team"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-charcoal-900/90 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-gold-500 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
            Expertise & Integrity
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
            Meet Our Team
          </h1>
          <p className="text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
            The dedicated professionals behind Deccan Heights, committed to
            guiding you through every step of your real estate journey with
            trust and excellence.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4  bg-[#C6A15B] text-white font-semibold rounded shadow-lg hover:bg-gold-600 transition-colors uppercase tracking-wide"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
