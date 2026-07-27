"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const IMAGES = [
  "/bg1.png",
  "/bg2.png",
  "/bg3.png",
  "/bg4.png",

];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

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
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 select-none">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: "easeInOut" },
              scale: { duration: 7, ease: "easeOut" },
            }}
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
          >
            <Image
              src={IMAGES[currentSlide]}
              alt={`Luxury Real Estate Slide ${currentSlide + 1}`}
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Overlay - Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-black/80 z-10 pointer-events-none" />

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C6A15B]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-10" />
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
              {"Ventures".split(" ").map((word, i) => (
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
                <span className="relative z-10">View Our  Ventures</span>
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

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xs transition-all duration-300 hover:bg-[#C6A15B] hover:border-[#C6A15B] hover:scale-110 cursor-pointer shadow-lg group"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length)}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xs transition-all duration-300 hover:bg-[#C6A15B] hover:border-[#C6A15B] hover:scale-110 cursor-pointer shadow-lg group"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? "bg-[#C6A15B] w-8 shadow-[0_0_8px_#C6A15B]"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
