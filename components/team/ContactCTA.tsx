"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-[#3C3C3C] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A15B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Speak With a Member of Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
        >
          Whether you're looking to buy, sell, or invest, our experts are here
          to provide personalized guidance.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            "Schedule Consultation",
            "Contact Sales",
            "Contact Legal",
            "General Inquiry",
          ].map((text, idx) => (
            <motion.button
              key={idx}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#C6A15B",
                color: "#FFFFFF",
                borderColor: "#C6A15B",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className={`py-4 px-6 rounded border font-semibold tracking-wide uppercase text-sm transition-all duration-300 ${
                idx === 0
                  ? "bg-[#C6A15B] border-[#C6A15B] text-white hover:bg-[#A48446]"
                  : "bg-transparent border-gray-600 text-gray-300 hover:text-white"
              }`}
            >
              {text}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
