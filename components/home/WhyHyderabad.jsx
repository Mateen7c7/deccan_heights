"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Global IT Hub",
        description: "Home to 1300+ IT companies including Google, Microsoft, Facebook, and Amazon, making it India&apos;s technology powerhouse.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Unmatched ROI",
        description: "The only major Indian city to see a 32% rise in property sales recently, outperforming every other metro in the country.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        title: "Massive Infrastructure",
        description: "Proposed 50,000-acre ITIR project expected to generate 15 lakh jobs and drive unprecedented urban growth.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Political Stability",
        description: "A stable government focused on infrastructure development and investor-friendly policies since 2014.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

export default function WhyHyderabad() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-sm font-bold tracking-widest text-[#C6A15B] uppercase mb-3">
                                Strategic Investment
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#3C3C3C] leading-tight mb-8">
                                Why Invest in <span className="text-[#C6A15B]">Hyderabad?</span>
                            </h3>
                            <p className="text-lg text-[#3C3C3C]/80 leading-relaxed mb-10">
                                Hyderabad has emerged as India&apos;s most resilient and fastest-growing real estate market.
                                With world-class infrastructure, a booming IT sector, and a cosmopolitan lifestyle,
                                the city offers a unique blend of high growth and stability for investors.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-[#F8F8F8] rounded-full flex items-center justify-center text-[#C6A15B]">
                                        <span className="font-bold text-xl">32%</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#3C3C3C]">Market Growth</h4>
                                        <p className="text-[#3C3C3C]/70">The only major Indian city to see rising property sales when others struggled.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 w-12 h-12 bg-[#F8F8F8] rounded-full flex items-center justify-center text-[#C6A15B]">
                                        <span className="font-bold text-xl">1.5M</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#3C3C3C]">Job Creation</h4>
                                        <p className="text-[#3C3C3C]/70">Proposed ITIR project set to revolutionize employment and urban development.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 bg-[#F8F8F8] rounded-2xl border border-[#BDBDBD]/20 hover:border-[#C6A15B]/40 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#C6A15B] shadow-sm mb-6 group-hover:bg-[#C6A15B] group-hover:text-white transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#3C3C3C] mb-3">{feature.title}</h4>
                                <p className="text-[#3C3C3C]/70 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
