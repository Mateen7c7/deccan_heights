"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { TeamMember } from "./types";

interface TeamCardProps {
  member: TeamMember;
  variant?: "leadership" | "sales" | "legal";
}

export default function TeamCard({ member, variant = "sales" }: TeamCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Simple elegant card layout */}
        <div className="relative h-72 w-full overflow-hidden bg-gray-100">
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/10 transition-colors z-10" />

          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-charcoal-500 group-hover:text-gold-500 transition-colors">
              {member.name}
            </h3>
            <p className="text-sm text-gold-500 font-medium uppercase tracking-wide">
              {member.title}
            </p>
          </div>

          {member.department && (
            <p className="text-xs text-gray-400 mb-3">{member.department}</p>
          )}

          {variant === "leadership" && member.summary && (
            <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
              {member.summary}
            </p>
          )}

          {variant === "sales" && member.stats && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {member.stats.slice(0, 2).map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-2 rounded text-center">
                  <span className="block text-gold-500 font-bold text-lg">
                    {stat.value}
                  </span>
                  <span className="block text-gray-400 text-[10px] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {variant === "legal" && (
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
              <span>View Credentials</span>
              <span className="text-gold-500">→</span>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-start gap-4">
            {member.email && (
              <button className="text-gray-400 hover:text-gold-500 text-sm font-medium flex items-center gap-1">
                Email
              </button>
            )}
            <button className="text-gold-500 hover:text-gold-600 text-sm font-medium ml-auto">
              View Profile
            </button>
          </div>
        </div>
      </motion.div>

      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        member={member}
      />
    </>
  );
}
