"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

function AnimatedPrice({ value }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Parse the value: "₹25L+" -> prefix: "₹", number: 25, suffix: "L+"
    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    const hasMatch = !!match;

    const prefix = hasMatch ? match[1] : "";
    const number = hasMatch ? parseInt(match[2], 10) : 0;
    const suffix = hasMatch ? match[3] : "";
    const startFrom = number + 10;

    const count = useMotionValue(startFrom);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (hasMatch && isInView) {
            const controls = animate(count, number, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, number, count, hasMatch]);

    // If we can't parse it as expected, just return the value
    if (!hasMatch) return <span>{value}</span>;

    return (
        <span ref={ref} className="inline-flex">
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export default function VentureCard({ venture }) {
    return (
        <motion.div
            className="group relative flex flex-col overflow-hidden rounded-xl border border-[#BDBDBD] bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
        >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={venture.image}
                    alt={venture.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-2xl font-bold text-[#3C3C3C]">
                    {venture.title}
                </h3>
                <p className="mb-6 text-[#BDBDBD] line-clamp-2">{venture.description}</p>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-3 gap-4 border-y border-[#F8F8F8] py-4">
                    {venture.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-xs font-medium text-[#BDBDBD] uppercase tracking-wider">
                                {stat.label}
                            </p>
                            <p className="mt-1 font-semibold text-[#3C3C3C]">
                                {stat.label === "Price" ? (
                                    <AnimatedPrice value={stat.value} />
                                ) : (
                                    stat.value
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="mt-auto w-full cursor-pointer rounded-lg bg-[#C6A15B] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#3C3C3C] hover:text-[#C6A15B]">
                    View Details
                </button>
            </div>
        </motion.div>
    );
}
