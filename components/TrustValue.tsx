"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "motion/react";

const CountingNumber = ({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>0</span>;
};

const PremiumPlots = () => {
  const features = [
    {
      id: 1,
      value: 100,
      suffix: "%",
      label: " Compliant",
      subtitle: "RERA Approved",
      description: "Fully legal and authorized plots for your peace of mind.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      value: 15,
      suffix: "+",
      label: " Years",
      subtitle: "Years of Experience",
      description:
        "A legacy of trust and excellence in real estate development.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      value: 500,
      suffix: "+",
      label: " Plots Sold",
      subtitle: "Happy Families",
      description:
        "Join a growing community of satisfied investors and homeowners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-slate-800"
          >
            Premium Plots, <span className="text-[#C9A24B]">Secure Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
          >
            Invest in a legacy that grows with time. Experience the perfect
            blend of nature, connectivity, and high appreciation potential with
            our RERA-approved layouts.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(201,162,75,0.15)] transition-shadow duration-300 flex flex-col items-center text-center group border border-gray-50"
            >
              <div className="w-20 h-20 bg-[#C9A24B]/10 rounded-full flex items-center justify-center text-[#C9A24B] mb-8 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-3xl font-bold mb-2 text-slate-800 flex items-center gap-1">
                <span className="flex items-center">
                  <CountingNumber value={feature.value} />
                  {feature.suffix}
                </span>
                <span>{feature.label}</span>
              </h3>

              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A24B] mb-4">
                {feature.subtitle}
              </p>

              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumPlots;
