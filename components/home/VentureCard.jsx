"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { allPlotVentures } from "@/data/plots";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const WhatsAppIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958C16.604 1.926 14.129.905 11.5.905c-5.437 0-9.86 4.418-9.863 9.862-.001 1.83.5 3.61 1.449 5.183L2.094 21.94l6.053-1.586zM17.91 14.67c-.337-.17-1.996-.985-2.305-1.096-.309-.112-.534-.168-.758.17-.224.337-.87 1.096-1.066 1.32-.197.225-.393.25-.73.08-1.037-.52-2.05-1.04-2.87-1.745-.638-.55-1.07-1.23-1.196-1.45-.126-.22-.013-.34.1-.497.102-.142.224-.282.337-.42.112-.142.15-.24.225-.39.075-.15.037-.282-.019-.393-.056-.112-.534-1.286-.73-1.765-.19-.458-.383-.396-.534-.4-.14-.007-.303-.008-.466-.008a.89.89 0 00-.645.3c-.224.24-.855.836-.855 2.036 0 1.2 1.417 2.36 1.6 2.61.19.25 2.628 4.013 6.368 5.626.889.384 1.584.614 2.127.787.893.284 1.706.244 2.348.148.715-.107 2.196-.897 2.505-1.765.309-.868.309-1.613.217-1.765-.09-.153-.337-.24-.675-.41z" />
    </svg>
);

export default function VentureCard({ venture }) {
    // Find detailed project data if available
    const fullVenture = allPlotVentures.find((v) => {
        const titleMatch = v.title.toLowerCase() === venture.title.toLowerCase();
        const slugMatch = venture.link && (venture.link.endsWith(`/${v.slug}`) || venture.link.endsWith(`/${v.id}`));
        return titleMatch || slugMatch;
    }) || {};

    // Get thumbnails for the slider
    const thumbnails = fullVenture.thumbnails || [venture.image || "/plot1.webp"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === 0 ? thumbnails.length - 1 : prev - 1));
    };

    const handleNextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev === thumbnails.length - 1 ? 0 : prev + 1));
    };

    // Format badge fields
    const leftBadge = fullVenture.badge || "New Launch";
    const rightBadge = fullVenture.roiHighlight || "ROI: High Appreciation";

    // Format price and unit fields
    let priceDisplay = "₹8,500";
    let unitDisplay = "per sq. yard";
    const priceStr = fullVenture.priceRange || venture.stats?.find(s => s.label === "Price")?.value || "₹8,500";

    if (priceStr.includes("/")) {
        const parts = priceStr.split("/");
        priceDisplay = parts[0];
        if (parts[1].toLowerCase().includes("sq") || parts[1].toLowerCase().includes("yd") || parts[1].toLowerCase().includes("yard")) {
            unitDisplay = "per sq. yard";
        } else {
            unitDisplay = parts[1];
        }
    } else {
        priceDisplay = priceStr;
    }

    // Sizes mapping
    const sizes = fullVenture.plotSizes || [
        { size: "100 sq.yd", price: "₹8,50,000" },
        { size: "200 sq.yd", price: "₹17,00,000" },
        { size: "300 sq.yd", price: "₹25,50,000" },
        { size: "603 sq.yd", price: "₹51,25,500" }
    ];

    // Highlights mapping
    const defaultHighlights = [
        "Gated Community Layout",
        "Clear Title Property",
        "High Appreciation Potential",
        "Premium Amenities"
    ];
    const ventureHighlights = (fullVenture.id === "phase-5" || fullVenture.slug === "phase-1")
        ? [
            "Gated Community Layout",
            "100 Feet Road Facing",
            "Clear Title Property",
            "Premium Amenities"
        ]
        : (fullVenture.id === "phase-2"
            ? [
                "Gated Community Layout",
                "Clubhouse Access",
                "Clear Title Property",
                "Premium Amenities"
            ]
            : defaultHighlights);

    return (
        <motion.div
            className="group relative flex flex-col overflow-hidden rounded-xl border border-[#BDBDBD]/40 bg-white shadow-xs transition-all duration-300 hover:shadow-md"
            variants={cardVariants}
            whileHover={{ y: -4 }}
        >
            {/* Image Slider Container */}
            <div className="group/img relative h-64 w-full overflow-hidden">
                <Image
                    src={thumbnails[currentImageIndex]}
                    alt={venture.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={fullVenture.id === "phase-5"}
                />

                {/* Badges Overlays */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-md bg-[#FF7A00] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm uppercase tracking-wider">
                        {leftBadge}
                    </span>
                </div>
                <div className="absolute top-4 right-4 z-10">
                    <span className="rounded-md bg-[#D2A638] px-3.5 py-1.5 text-xs font-bold text-[#2A2415] shadow-sm uppercase tracking-wider">
                        {rightBadge}
                    </span>
                </div>

                {/* Slider Controls */}
                {thumbnails.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 hover:bg-black/60 cursor-pointer"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 hover:bg-black/60 cursor-pointer"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}

                {/* Slider Dot Indicators */}
                {thumbnails.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                        {thumbnails.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setCurrentImageIndex(idx);
                                }}
                                className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentImageIndex ? "bg-white w-5" : "bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content Body */}
            <div className="flex flex-1 flex-col p-6">
                {/* Title & Price Header */}
                <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 pr-4">
                        <h3 className="text-2xl font-bold text-[#0f2e82] tracking-tight">
                            {venture.title}
                        </h3>
                        <p className="mt-1.5 text-xs font-bold text-[#C6A15B] uppercase tracking-wide">
                            {fullVenture.subtitle || "Future Growth Destination Farmland"}
                        </p>
                    </div>
                    <div className="text-right shrink-0">
                        <p className="text-2xl font-black text-[#0f2e82] leading-none">
                            {priceDisplay}
                        </p>
                        <p className="text-[10px] text-[#8C8C8C] font-semibold mt-1 uppercase tracking-wider">
                            {unitDisplay}
                        </p>
                    </div>
                </div>

                {/* Location */}
                <div className="mb-4 flex items-center gap-1 text-sm font-semibold text-[#8C8C8C]">
                    <MapPin className="h-4 w-4 text-[#8C8C8C]" />
                    <span>{fullVenture.location || venture.stats?.find(s => s.label === "Location")?.value || "Telangana"}</span>
                </div>

                {/* Short Description */}
                <p className="mb-6 text-sm text-[#3C3C3C]/75 leading-relaxed">
                    {venture.description}
                </p>

                {/* Available Sizes Section */}
                <div className="mb-6">
                    <p className="text-[10px] font-extrabold text-[#3C3C3C]/60 tracking-wider uppercase mb-3">
                        Available Sizes
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                        {sizes.map((sizeOpt, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center rounded-lg bg-[#F4F5F7] py-2.5 px-3 text-xs font-semibold text-[#3C3C3C] shadow-xs"
                            >
                                <span className="font-extrabold text-[#0f2e82]">{sizeOpt.size}</span>
                                <span className="mx-1 text-gray-400">·</span>
                                <span className="text-gray-500 font-medium">{sizeOpt.price}</span>
                            </div>
                        ))}

                        {/* Custom Size */}
                        <div className="col-span-2 flex items-center justify-center rounded-lg border border-[#C6A15B]/30 bg-[#C6A15B]/5 py-2.5 px-3 text-xs font-extrabold text-[#C6A15B] transition-all hover:bg-[#C6A15B]/10 cursor-pointer">
                            Custom Size <span className="mx-1.5 text-[#C6A15B]/50">·</span> Available
                        </div>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div className="mb-6 grid grid-cols-2 gap-x-4 gap-y-3.5 border-t border-[#F0F0F0] pt-5">
                    {ventureHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs font-semibold text-[#3C3C3C]">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e] text-white">
                                <Check className="h-3 w-3 stroke-[3.5]" />
                            </div>
                            <span className="truncate leading-tight">{highlight}</span>
                        </div>
                    ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="mt-auto flex gap-3 pt-2">
                    {/* Know More */}
                    <Link href={venture.link || `/ventures/${fullVenture.slug || "phase-1"}`} className="flex-1">
                        <button className="w-full cursor-pointer rounded-lg bg-[#0f2e82] hover:bg-[#0b215c] py-3 text-center text-sm font-bold text-white shadow-xs transition-colors duration-300 flex items-center justify-center gap-1">
                            Know More <span className="font-normal font-sans">→</span>
                        </button>
                    </Link>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/917801055200?text=${encodeURIComponent(`Hi, I'm interested in ${venture.title || fullVenture.title || "Deccan Heights"}. Please provide more details.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                    >
                        <button className="w-full cursor-pointer rounded-lg bg-[#25D366] hover:bg-[#1ebd53] py-3 text-center text-sm font-bold text-white shadow-xs transition-colors duration-300 flex items-center justify-center gap-2">
                            <WhatsAppIcon />
                            <span>WhatsApp</span>
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
