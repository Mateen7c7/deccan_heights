"use client";

import { motion } from "framer-motion";
import VentureCard from "./VentureCard";

const ventures = [
    {
        id: 1,
        title: "Deccan Heights Phase I",
        description: "Experience luxury living in the heart of nature with our premium plots designed for your dream home. A perfect blend of tranquility and modern amenities.",
        image: "/plot1.webp",
        stats: [
            { label: "Area", value: "1200 Sq.ft" },
            { label: "Price", value: "₹25L+" },
            { label: "Location", value: "Shadnagar" },
        ],
    },
    {
        id: 2,
        title: "Deccan Heights Phase II",
        description: "A secure gated community offering world-class amenities and excellent connectivity to the city. Invest in a future that grows with you.",
        image: "/plot2.webp",
        stats: [
            { label: "Area", value: "1500 Sq.ft" },
            { label: "Price", value: "₹35L+" },
            { label: "Location", value: "Shadnagar" },
        ],
    },
];

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export default function ActiveVenturesSection() {
    return (
        <section className="bg-[#F8F8F8] py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="mb-12 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={headerVariants}
                >
                    <h2 className="text-3xl font-bold text-[#C6A15B] sm:text-4xl md:text-5xl">
                        Our Active Ventures
                    </h2>
                    <motion.div
                        className="mx-auto mt-4 h-1 w-24 bg-[#C6A15B] rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 96, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    />
                    <motion.p
                        className="mx-auto mt-4 max-w-2xl text-[#3C3C3C] text-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Discover our premium ongoing projects that redefine luxury living.
                    </motion.p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={gridVariants}
                >
                    {ventures.map((venture) => (
                        <VentureCard key={venture.id} venture={venture} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
