"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*
        Full Screen Transition Overlay - Curtain
        Uses the primary brand gold color.
        It covers the screen initially, then slides up after a delay.
      */}
      <motion.div
        className="fixed inset-0 z-100 bg-black origin-top pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
      />

      {/*
        Logo Animation Overlay
        Appears on top of the gold curtain.
        Fades out just before the curtain slides up.
      */}
      <motion.div
        className="fixed inset-0 z-101 flex flex-col items-center justify-center pointer-events-none gap-4"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.5,
          times: [0, 0.2, 0.85, 1],
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative w-64 h-48 md:w-96 md:h-72"
        >
          <Image
            src="/deccan_heights_resorts.png"
            alt="Deccan Heights Resorts"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-white text-3xl md:text-5xl font-serif font-bold tracking-wide text-center"
        >
          Deccan Heights
        </motion.h1> */}
      </motion.div>

      {/* Page Content Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
      >
        {children}
      </motion.div>
    </>
  );
}
