"use client";

import { motion } from "framer-motion";

// Placeholder logos - just text styled nicely or use SVGs if I had them
const certifications = [
  { id: 1, name: "RERA Approved", sub: "Fully Compliant" },
  { id: 2, name: "ISO 9001:2015", sub: "Quality Management" },
  { id: 3, name: "IGBC Membership", sub: "Green Building Council" },
  { id: 4, name: "CREDAI Member", sub: "Confederation of Real Estate" },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-10"
        >
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-2">
            Accreditations
          </h3>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-4 text-gold-500">
                {/* Placeholder Icon */}
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-charcoal-500">{cert.name}</h4>
              <p className="text-xs text-gray-400 mt-1">{cert.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
