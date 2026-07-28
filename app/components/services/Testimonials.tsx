"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Villa Owner",
    text: "Deccan Heights made finding our dream  home seamless. The transparency and professionalism were unmatched.",
    stars: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Plot Investor",
    text: "I appreciated the detailed legal verification process. It gave me complete peace of mind for my investment.",
    stars: 5,
  },
  {
    name: "Abdul Samad",
    role: "Property Seller",
    text: "Their marketing team is exceptional. My property was sold within weeks at the price I wanted.",
    stars: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-4">
            Client <span className="text-[#C6A15B]">Stories</span>
          </h2>
          <p className="text-[#3C3C3C]/70">
            Hear from those who found their perfect property with us.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="min-w-[85vw] md:min-w-0 shrink-0 bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col relative snap-center"
            >
              <Quote className="absolute top-6 right-6 text-[#C6A15B]/20 w-12 h-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < t.stars
                        ? "text-[#C6A15B] fill-[#C6A15B]"
                        : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
              <p className="text-[#3C3C3C]/80 italic mb-6 leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <div className="mt-auto">
                <h4 className="font-bold text-[#3C3C3C]">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
