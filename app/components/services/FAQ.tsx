"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Buying",
    question: "What is the process to book a residential plot?",
    answer:
      "Booking entails a site visit, selecting your plot, and paying a token advance. We then proceed with legal verification and registration.",
  },
  {
    category: "Selling",
    question: "How do you value my property?",
    answer:
      "We use a combination of current market trends, location analysis, and recent transaction data to determine the optimal selling price.",
  },
  {
    category: "Construction",
    question: "Do you provide architectural services?",
    answer:
      "Yes, we offer end-to-end construction services including architectural planning, structural design, and interior finishing.",
  },
  {
    category: "Management",
    question: "What does your Building Mantenance service cover?",
    answer:
      "Our service covers Man power supply , rent collection, Anual Property Maintenance, property inspections, and legal agreement renewals.",
  },
  {
    category: "Investment",
    question: "Are your resort properties available for investment?",
    answer:
      "Absolutely. Our resort properties offer high rental yields and personal holiday benefits. Contact us for the latest investment sheets.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-4">
            Frequently Asked <span className="text-[#C6A15B]">Questions</span>
          </h2>
          <p className="text-[#3C3C3C]/70">
            Common queries about our real estate services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <div>
                  <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-wider mb-1 block">
                    {faq.category}
                  </span>
                  <span className="font-semibold text-[#3C3C3C] text-lg">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <Minus className="text-[#C6A15B]" />
                ) : (
                  <Plus className="text-gray-400" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
