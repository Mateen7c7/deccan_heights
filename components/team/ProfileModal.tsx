"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TeamMember } from "./types";
import Image from "next/image";
import { useEffect } from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: TeamMember;
}

export default function ProfileModal({
  isOpen,
  onClose,
  member,
}: ProfileModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-800 hover:bg-gold-500 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Left: Image */}
            <div className="w-full md:w-2/5 relative h-64 md:h-auto min-h-[300px] bg-gray-100">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal-900/90 to-transparent text-white md:hidden">
                <h2 className="text-2xl font-bold">{member.name}</h2>
                <p className="text-gold-500 font-medium">{member.title}</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-3/5 p-8 md:p-10 bg-white">
              <div className="hidden md:block mb-6">
                <h2 className="text-3xl font-bold text-charcoal-500">
                  {member.name}
                </h2>
                <p className="text-gold-500 text-lg font-medium tracking-wide">
                  {member.title}
                </p>
              </div>

              <div className="space-y-6">
                {/* Bio */}
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                    About
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {member.bio || member.summary || "No biography available."}
                  </p>
                </div>

                {/* Stats grid */}
                {member.stats && member.stats.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {member.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 p-3 rounded-lg border-l-2 border-gold-500"
                      >
                        <div className="text-xl font-bold text-charcoal-500">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-8">
                  {/* Expertise */}
                  {member.expertises && (
                    <div className="flex-1">
                      <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                        Expertise
                      </h4>
                      <ul className="space-y-1">
                        {member.expertises.map((exp, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></span>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Languages or Certifications */}
                  {member.certifications && (
                    <div className="flex-1">
                      <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2 font-semibold">
                        Credentials
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.certifications.map((cert, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Actions */}
                <div className="pt-6 border-t border-gray-100 flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/918328120257?text=${encodeURIComponent(`Hi, I'd like to schedule a meeting with ${member.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gold-500 text-white font-semibold rounded shadow hover:bg-gold-600 transition-colors uppercase text-sm tracking-wide text-center"
                  >
                    Schedule Meeting
                  </a>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="px-6 py-3 border border-gray-300 text-charcoal-500 font-medium rounded hover:bg-gray-50 transition-colors uppercase text-sm tracking-wide"
                    >
                      Call
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
