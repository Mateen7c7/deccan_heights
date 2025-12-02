"use client";

import { motion } from "motion/react";

/**
 * LeadCaptureStrip Component
 * 
 * A responsive, horizontal lead capture form designed for the Deccan Heights homepage.
 * 
 * Design Choices:
 * - Layout: Uses Flexbox (flex-col on mobile, flex-row on desktop) to achieve the requested responsive behavior.
 * - Colors: 
 *   - Primary CTA: #C6A15B (Gold/Sandstone)
 *   - Text: #3C3C3C (Charcoal)
 *   - Borders: #BDBDBD (Soft Gray)
 *   - Background: #FFFFFF (White)
 * - Animation: Framer Motion `whileInView` is used to trigger a subtle fade-in and upward movement when the component enters the viewport.
 * - Accessibility: Includes `sr-only` labels for inputs while using placeholders for visual cues. Focus states use the brand gold color.
 * - Styling: Tailwind CSS classes are used for all styling, ensuring consistency with the project's design system.
 */
const LeadCaptureStrip = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-white py-8 px-4 md:px-8 border-t border-b border-gray-100 shadow-sm"
            aria-label="Lead Capture Form"
        >
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#C6A15B] mb-6 text-center xl:text-left">
                    Request a Callback
                </h2>
                <form className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6">

                    {/* Full Name */}
                    <div className="w-full xl:flex-1">
                        <label htmlFor="fullName" className="sr-only">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] text-[#3C3C3C] placeholder-gray-400 focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all shadow-sm"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="w-full xl:flex-1">
                        <label htmlFor="phone" className="sr-only">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] text-[#3C3C3C] placeholder-gray-400 focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all shadow-sm"
                            required
                        />
                    </div>

                    {/* Preferred Location */}
                    <div className="w-full xl:flex-1">
                        <label htmlFor="location" className="sr-only">Preferred Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Preferred Location"
                            className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] text-[#3C3C3C] placeholder-gray-400 focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all shadow-sm"
                        />
                    </div>

                    {/* Budget */}
                    <div className="w-full xl:flex-1">
                        <label htmlFor="budget" className="sr-only">Budget</label>
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            placeholder="Budget"
                            className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] text-[#3C3C3C] placeholder-gray-400 focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all shadow-sm"
                        />
                    </div>

                    {/* Consent Checkbox */}
                    <div className="w-full xl:w-auto flex items-center gap-3 min-w-[200px]">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            className="w-5 h-5 text-[#C6A15B] border-gray-300 rounded focus:ring-[#C6A15B] cursor-pointer accent-[#C6A15B]"
                            required
                        />
                        <label htmlFor="consent" className="text-xs text-gray-500 leading-tight">
                            I consent to having my information processed for contact purposes.
                        </label>
                    </div>

                    {/* CTA Button */}
                    <div className="w-full xl:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full xl:w-auto whitespace-nowrap px-8 py-3 bg-[#C6A15B] hover:bg-[#b08d4b] text-white font-medium rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
                        >
                            Get Callback
                        </motion.button>
                    </div>

                </form>
            </div>
        </motion.section>
    );
};

export default LeadCaptureStrip;
