"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-gray-900"
    >
      {/* Background Layer with Parallax & Zoom */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-full h-[120%] -top-[10%]" // Taller to accommodate parallax
        >
          <Image
            src="/plot1.webp"
            alt="Luxury Real Estate"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>

        {/* Cinematic Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80" />

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C6A15B]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <motion.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-5xl mx-auto"
        >
          {/* Headline with Staggered Words */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1] drop-shadow-2xl">
            <span className="inline-block mr-2">
              {"Discover Premium".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <br className="hidden md:block" />
            <span className="inline-block text-[#C6A15B]">
              {"Plot Ventures".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <br className="hidden lg:block" />
            <span className="inline-block">
              {"for a Lifetime Investment".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-light tracking-wide drop-shadow-md"
          >
            Explore exclusive land opportunities crafted for long-term value and
            peace of mind.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center"
          >
            {/* Primary Button - Gold Gradient */}

            <Link href="/ventures">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(198, 161, 91, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-linear-to-r from-[#C6A15B] to-[#AA8540] text-white text-lg font-medium rounded-full shadow-xl transition-all duration-300 overflow-hidden cursor-pointer w-full sm:w-auto"
              >
                <span className="relative z-10">View Our Plot Ventures</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>
            </Link>

            {/* Secondary Button - Glassmorphism */}
            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-white/40 text-white text-lg font-medium rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#C6A15B] hover:text-[#C6A15B] hover:shadow-[0_0_20px_rgba(198,161,91,0.2)] cursor-pointer w-full sm:w-auto text-center"
              >
                Schedule a Site Visit
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-10 cursor-pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-white/60 text-xs uppercase tracking-[0.2em] font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/80 w-6 h-6"
            strokeWidth="1.5"
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
