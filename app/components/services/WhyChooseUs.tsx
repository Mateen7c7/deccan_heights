"use client";

import { motion } from "motion/react";
import { Shield, Award, Clock, Users } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Families" },
  { value: "100%", label: "Legal Transparency" },
];

const features = [
  { title: "Governament Approved", icon: Shield },
  { title: "Award Winning", icon: Award },
  { title: "On-Time Delivery", icon: Clock },
  { title: "Expert Support", icon: Users },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#3C3C3C] text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B] rounded-full filter blur-[100px] opacity-10 -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-[#C6A15B] font-bold uppercase tracking-widest text-sm mb-2">
              Why Choose Us
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Decades of Trust in <br />
              Real Estate.
            </h2>
            <p className="text-gray-400 mb-8 text-lg max-w-xl">
              We don&apos;t just sell properties; we build lasting relationships
              through transparency, integrity, and verified quality.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <feature.icon className="w-5 h-5 text-[#C6A15B]" />
                  </div>
                  <span className="font-semibold">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors backdrop-blur-md"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#C6A15B] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
