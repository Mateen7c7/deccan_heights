"use client";

import Phase5 from "@/svg_components/Phase5";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { 
  ArrowLeft, 
  Phone, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  ShieldCheck, 
  Layers,
  Clock,
  CheckCircle2,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { allPlotVentures } from "@/data/plots";

interface AboutStat {
  value: string;
  label: string;
  sublabel?: string;
}

interface PlotSizeOption {
  size: string;
  label: string;
  price: string;
  rate: string;
  badge?: string;
}

interface CustomSizeInfo {
  title: string;
  subtitle: string;
  description: string;
}

interface PaymentPlanOption {
  value: string;
  label: string;
}

interface LocationAdvantage {
  title: string;
  description: string;
}

interface VentureData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  status: "ongoing" | "completed" | "upcoming";
  badge?: string;
  location?: string;
  priceRange?: string;
  roiHighlight?: string;
  thumbnails?: string[];
  stats?: { label: string; value: string }[];
  aboutTitle?: string;
  aboutDescription?: string;
  aboutStats?: AboutStat[];
  pricingTitle?: string;
  plotSizes?: PlotSizeOption[];
  customSize?: CustomSizeInfo;
  paymentPlans?: PaymentPlanOption[];
  layoutTitle?: string;
  layoutPlanUrl?: string;
  mapPageUrl?: string;
  mapEmbedUrl?: string;
  locationTitle?: string;
  locationAdvantages?: LocationAdvantage[];
  quoteText?: string;
  amenities?: string[];
  locationHighlights?: string[];
}

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.019-5.101-2.875-6.958C16.604 1.926 14.129.905 11.5.905c-5.437 0-9.86 4.418-9.863 9.862-.001 1.83.5 3.61 1.449 5.183L2.094 21.94l6.053-1.586zM17.91 14.67c-.337-.17-1.996-.985-2.305-1.096-.309-.112-.534-.168-.758.17-.224.337-.87 1.096-1.066 1.32-.197.225-.393.25-.73.08-1.037-.52-2.05-1.04-2.87-1.745-.638-.55-1.07-1.23-1.196-1.45-.126-.22-.013-.34.1-.497.102-.142.224-.282.337-.42.112-.142.15-.24.225-.39.075-.15.037-.282-.019-.393-.056-.112-.534-1.286-.73-1.765-.19-.458-.383-.396-.534-.4-.14-.007-.303-.008-.466-.008a.89.89 0 00-.645.3c-.224.24-.855.836-.855 2.036 0 1.2 1.417 2.36 1.6 2.61.19.25 2.628 4.013 6.368 5.626.889.384 1.584.614 2.127.787.893.284 1.706.244 2.348.148.715-.107 2.196-.897 2.505-1.765.309-.868.309-1.613.217-1.765-.09-.153-.337-.24-.675-.41z"/>
  </svg>
);

export default function VenturePageTemplate({ data }: { data: VentureData }) {
  // Image Slideshow state
  const thumbnails = data.thumbnails || [data.image];
  const [activeImage, setActiveImage] = useState(thumbnails[0]);

  // Enquiry Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSize, setSelectedSize] = useState(data.plotSizes?.[0]?.size || "100 sq.yd");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    setPhoneError("");
    setIsSubmitted(true);
  };

  // exploration
  const otherProjects = allPlotVentures.filter((p) => p.id !== data.id);

  return (
    <main className="min-h-screen bg-[#F8F8F8] pt-[72px] md:pt-[84px] text-[#3C3C3C]">
      
      {/* --- SUB HEADER / BREADCRUMBS --- */}
      <div className="sticky top-[72px] md:top-[84px] z-30 bg-white border-b border-gray-200 py-3 px-6 shadow-xs">
        <div className="container mx-auto flex items-center justify-between text-xs md:text-sm">
          <Link 
            href="/ventures" 
            className="flex items-center gap-2 text-gray-500 hover:text-[#C6A15B] font-medium transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-gray-400">
            <span>Deccan Heights Builders</span>
            <span>&gt;</span>
            <span className="text-[#3C3C3C] font-semibold">{data.title}</span>
          </div>
          <a 
            href="tel:+917801055200" 
            className="flex items-center gap-2 bg-[#C6A15B]/10 text-[#C6A15B] hover:bg-[#C6A15B] hover:text-white px-4 py-1.5 rounded-full font-bold transition-all cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Here</span>
          </a>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[55vh] min-h-[450px] w-full overflow-hidden flex items-end pb-10 bg-[#3C3C3C]">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
          {/* Hero text */}
          <div className="text-white max-w-2xl">
            {data.badge && (
              <span className="inline-block py-1 px-3 bg-[#EA580C] text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3 rounded-md">
                {data.badge}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
              {data.title}
            </h1>
            <p className="text-base md:text-lg text-gray-200 font-light mb-6">
              {data.subtitle}
            </p>

            {/* Quick Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-gray-300 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6A15B]" />
                <span>{data.location || "Shadnagar, Hyderabad"}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#C6A15B]" />
                <span>{data.priceRange || "₹8,500/sq.yd"}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#C6A15B]" />
                <span>{data.roiHighlight || "ROI: High Appreciation"}</span>
              </div>
            </div>
          </div>

          {/* Hero image slide thumbnails */}
          {thumbnails.length > 1 && (
            <div className="flex gap-2.5 self-start md:self-end bg-black/25 p-2 rounded-2xl backdrop-blur-xs border border-white/10">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(thumb)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === thumb
                      ? "border-[#C6A15B] scale-105 shadow-md"
                      : "border-white/20 hover:border-white/60 opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`View Image ${idx + 1}`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- CONTENT CONTAINER WITH 70/30 GRID --- */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-10 items-start">
            
            {/* --- LEFT COLUMN: 7 COLS --- */}
            <div className="lg:col-span-7 space-y-16">
              
              {/* --- ABOUT PROJECT SECTION --- */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-xs">
                <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-widest block mb-2">Overview</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-6">
                  {data.aboutTitle || "About This Project"}
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                  {data.aboutDescription || data.description}
                </p>

                {/* About Stats Cards */}
                {data.aboutStats && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {data.aboutStats.map((stat, idx) => (
                      <div key={idx} className="bg-[#F8F8F8] rounded-xl border border-gray-150 p-5 text-center transition-all hover:shadow-xs hover:border-[#C6A15B]/30">
                        <p className="text-2xl md:text-3xl font-extrabold text-[#C6A15B] tracking-tight">{stat.value}</p>
                        <p className="text-xs font-bold text-[#3C3C3C] mt-2 mb-1">{stat.label}</p>
                        {stat.sublabel && (
                          <p className="text-[10px] text-gray-500">{stat.sublabel}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* --- PLOT SIZES & PRICING --- */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-xs space-y-8">
                <div>
                  <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-widest block mb-2">Pricing</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                    {data.pricingTitle || "Plot Sizes & Pricing"}
                  </h2>
                </div>

                {/* Plot Sizes Grid */}
                {data.plotSizes && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.plotSizes.map((sizeOpt, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white rounded-xl border border-gray-200 p-5 relative hover:border-[#C6A15B] hover:shadow-sm transition-all"
                      >
                        {sizeOpt.badge && (
                          <span className="absolute top-4 right-4 bg-[#EA580C]/10 text-[#EA580C] text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                            {sizeOpt.badge}
                          </span>
                        )}
                        <h4 className="text-lg font-bold text-[#3C3C3C] mb-2">{sizeOpt.size}</h4>
                        <p className="text-xs text-gray-400 font-medium mb-1">{sizeOpt.label}</p>
                        <p className="text-xl font-extrabold text-[#3C3C3C]">{sizeOpt.price}</p>
                        <p className="text-xs text-[#C6A15B] font-bold mt-1">{sizeOpt.rate}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Custom Size Inquiry Box */}
                {data.customSize && (
                  <div className="bg-[#C6A15B]/5 border-2 border-dashed border-[#C6A15B]/30 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <span className="bg-[#C6A15B]/10 text-[#C6A15B] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                        {data.customSize.title}
                      </span>
                      <h4 className="text-base font-bold text-[#3C3C3C] mb-1">{data.customSize.subtitle}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{data.customSize.description}</p>
                    </div>
                    <button 
                      onClick={() => document.getElementById("enquiry-form-card")?.scrollIntoView({ behavior: "smooth" })}
                      className="px-5 py-3 bg-[#C6A15B] text-white text-xs font-bold rounded-lg hover:bg-[#3C3C3C] transition-colors shrink-0 cursor-pointer shadow-xs"
                    >
                      Enquire Custom Size
                    </button>
                  </div>
                )}

                {/* Payment Plan Options */}
                {data.paymentPlans && (
                  <div className="border-t border-gray-100 pt-8 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
                      <h4 className="font-bold text-sm text-[#3C3C3C]">Payment Plan Options</h4>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {data.paymentPlans.map((plan, idx) => (
                        <div key={idx} className="bg-[#F8F8F8] border border-gray-200 rounded-lg p-3 text-center">
                          <p className="text-base font-extrabold text-[#C6A15B]">{plan.value}</p>
                          <p className="text-[10px] text-gray-500 font-medium mt-1 leading-tight">{plan.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* --- PROJECT LAYOUT PLAN (ZOOMABLE) --- */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-widest block pl-2">Layout Plan</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3C3C3C] pl-2 mb-2">
                  {data.layoutPlanUrl ? (
                    <a 
                      href={data.layoutPlanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C6A15B] transition-colors inline-flex items-center gap-2 group cursor-pointer"
                    >
                      <span>{data.layoutTitle || "Project Layout Plan"}</span>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#C6A15B] transition-colors shrink-0" />
                    </a>
                  ) : (
                    data.layoutTitle || "Project Layout Plan"
                  )}
                </h2>

                {data.layoutPlanUrl?.endsWith(".pdf") ? (
                  <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                    {/* PDF Header */}
                    <div className="bg-[#1E293B] text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B] font-bold">
                          DH
                        </div>
                        <div>
                          <h4 className="font-bold text-sm md:text-base leading-tight">
                            {data.title} — Layout Plan
                          </h4>
                          <p className="text-xs text-gray-400">
                            {data.location || "Shadnagar, Hyderabad"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a 
                          href={data.layoutPlanUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open in New Tab</span>
                        </a>
                        <a 
                          href={data.layoutPlanUrl} 
                          download
                          className="bg-[#C6A15B] hover:bg-[#b08e4f] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                    {/* PDF Content */}
                    <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
                      <iframe
                        src={`${data.layoutPlanUrl}#toolbar=1`}
                        className="w-full h-full border-0"
                        title={`${data.title} Layout Plan PDF`}
                      />
                    </div>
                  </div>
                ) : (
                  <TransformWrapper
                    initialScale={1}
                    minScale={0.5}
                    maxScale={4}
                    centerOnInit={true}
                  >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
                        {/* Interactive Map Header */}
                        <div className="bg-[#1E293B] text-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B] font-bold">
                              DH
                            </div>
                            <div>
                              <h4 className="font-bold text-sm md:text-base leading-tight">
                                {data.title} — Layout Plan
                              </h4>
                              <p className="text-xs text-gray-400">
                                {data.location || "Shadnagar, Hyderabad"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            {data.layoutPlanUrl && (
                              <a 
                                href={data.layoutPlanUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-700 hover:bg-slate-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 whitespace-nowrap"
                              >
                                <ExternalLink className="w-3 h-3" />
                                <span>Open in New Tab</span>
                              </a>
                            )}
                            <span className="bg-[#EA580C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                              {data.status === "completed" ? "Completed" : "NEW LAUNCH"}
                            </span>
                          </div>
                        </div>

                        {/* Control Strip */}
                        <div className="bg-[#F8FAFC] border-b border-gray-200 px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 gap-2">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#C6A15B] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            <span>Drag to pan, double click or pinch to zoom.</span>
                          </div>
                          <div className="flex items-center justify-end gap-3 font-semibold text-[#3C3C3C]">
                            <button 
                              type="button"
                              onClick={() => zoomOut()} 
                              className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all cursor-pointer font-bold shadow-2xs"
                              aria-label="Zoom Out"
                            >
                              —
                            </button>
                            <span className="w-12 text-center text-xs text-gray-500 font-bold">Scale</span>
                            <button 
                              type="button"
                              onClick={() => zoomIn()} 
                              className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all cursor-pointer font-bold shadow-2xs"
                              aria-label="Zoom In"
                            >
                              +
                            </button>
                            <button 
                              type="button"
                              onClick={() => resetTransform()} 
                              className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer text-xs font-bold shadow-2xs"
                            >
                              Reset
                            </button>
                          </div>
                        </div>

                        {/* Map Content */}
                        <div className="bg-white p-4 flex items-center justify-center min-h-[400px] overflow-hidden cursor-grab active:cursor-grabbing">
                          <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-full !h-full flex items-center justify-center">
                            {data.id === "phase-5" ? (
                              <div className="w-full max-w-[800px] flex items-center justify-center">
                                <Phase5 width={800} height={600} />
                              </div>
                            ) : (
                              <img 
                                src={data.layoutPlanUrl || "/plot1.webp"} 
                                alt={`${data.title} Layout Plan`}
                                className="max-w-full max-h-[500px] object-contain transition-transform duration-300"
                              />
                            )}
                          </TransformComponent>
                        </div>
                      </div>
                    )}
                  </TransformWrapper>
                )}
              </div>

              {/* --- LOCATION ADVANTAGES --- */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#C6A15B] uppercase tracking-widest block mb-2">Location</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                    {data.locationTitle || "Location Advantages"}
                  </h2>
                </div>

                {data.locationAdvantages && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.locationAdvantages.map((adv, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white hover:bg-[#F8F8F8] border border-gray-200 rounded-xl p-5 flex items-start gap-4 transition-all hover:border-[#C6A15B]/30"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#C6A15B]/10 flex items-center justify-center text-[#C6A15B] shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#3C3C3C] text-sm mb-1">{adv.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">{adv.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* --- BOTTOM BANNER QUOTE --- */}
              {data.quoteText && (
                <div className="bg-[#C6A15B]/5 border border-[#C6A15B]/20 rounded-2xl p-8 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-3 h-full bg-[#C6A15B]" />
                  <p className="text-base md:text-lg font-bold text-[#3C3C3C] italic max-w-2xl mx-auto leading-relaxed">
                    &ldquo;{data.quoteText}&rdquo;
                  </p>
                </div>
              )}

            </div>

            {/* --- RIGHT COLUMN: 3 COLS (STICKY SIDEBAR) --- */}
            <div className="lg:col-span-3 lg:sticky lg:top-[160px] space-y-6">
              
              {/* Enquiry Form Card */}
              <div 
                id="enquiry-form-card" 
                className="bg-white rounded-2xl border border-gray-150 p-6 shadow-md"
              >
                <h3 className="text-lg font-extrabold text-[#3C3C3C] mb-5 border-b border-gray-100 pb-3">
                  Enquire About This Project
                </h3>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Your Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:ring-1 focus:ring-[#C6A15B] focus:border-[#C6A15B] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Phone Number (10 digits)</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number"
                          className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:ring-1 focus:ring-[#C6A15B] focus:border-[#C6A15B] transition-all"
                        />
                        {phoneError && (
                          <p className="text-[11px] text-red-500 font-semibold mt-1">{phoneError}</p>
                        )}
                      </div>
                      
                      {data.plotSizes && (
                        <div>
                          <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Select Plot Size</label>
                          <div className="relative">
                            <select
                              value={selectedSize}
                              onChange={(e) => setSelectedSize(e.target.value)}
                              className="w-full px-4 py-2.5 bg-[#F8F8F8] border border-gray-200 rounded-lg text-sm focus:outline-hidden focus:ring-1 focus:ring-[#C6A15B] focus:border-[#C6A15B] transition-all appearance-none cursor-pointer text-[#3C3C3C] font-medium"
                            >
                              {data.plotSizes.map((sizeOpt, idx) => (
                                <option key={idx} value={sizeOpt.size}>{sizeOpt.size} ({sizeOpt.price})</option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full py-3 bg-[#1e3a8a] text-white text-sm font-bold rounded-lg hover:bg-[#172554] transition-colors cursor-pointer flex items-center justify-center gap-2 mt-4 shadow-xs"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Free Site Visit</span>
                      </button>

                      <a
                        href="tel:+917801055200"
                        className="w-full py-3 bg-[#F8F8F8] border border-gray-200 text-[#3C3C3C] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-2xs text-center"
                      >
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>Call +91 7801055200</span>
                      </a>

                      <a
                        href={`https://wa.me/917801055200?text=Hi,%20I%20am%20interested%20in%20${data.title}%20for%20a%20plot%20size%20of%20${selectedSize}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-[#22C55E] text-white text-sm font-bold rounded-lg hover:bg-[#16A34A] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs text-center"
                      >
                        <WhatsAppIcon />
                        <span>WhatsApp Us</span>
                      </a>
                    </motion.form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-50/50 border border-green-200 rounded-xl p-5 text-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-green-800">Thank you, {name}!</h4>
                        <p className="text-xs text-green-700 font-medium mt-1 leading-relaxed">
                          Your interest in the {selectedSize} plot size has been recorded. Our team will call you shortly on <strong>{phone}</strong> to confirm your site visit.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName("");
                          setPhone("");
                        }}
                        className="px-4 py-2 bg-white border border-green-300 text-green-800 text-xs font-bold rounded-lg hover:bg-green-50 active:scale-95 transition-all cursor-pointer"
                      >
                        Enquire Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Project Snapshot Card */}
              <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-xs">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Project Snapshot
                </h4>
                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-400 font-medium">Location</span>
                    <span className="font-bold text-[#3C3C3C] text-right">{data.location || "Shadnagar, Hyderabad"}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-400 font-medium">Price</span>
                    <span className="font-bold text-[#C6A15B] text-right">{data.priceRange || "₹8,500/sq.yd"}</span>
                  </div>
                  {data.plotSizes && (
                    <div className="flex justify-between border-b border-gray-50 pb-2">
                      <span className="text-gray-400 font-medium">Plot Sizes</span>
                      <span className="font-bold text-[#3C3C3C] text-right max-w-[150px] leading-tight">
                        {data.plotSizes.map((s) => s.size.replace(" sq.yd", "")).join(", ")} sq.yd
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between border-b border-gray-50 pb-2">
                    <span className="text-gray-400 font-medium">Expected ROI</span>
                    <span className="font-bold text-[#3C3C3C] text-right">{data.roiHighlight?.replace("ROI: ", "") || "High Appreciation"}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-gray-400 font-medium">Approval</span>
                    <span className="font-bold text-green-600 text-right">Clear Title & Govt. Approved</span>
                  </div>
                </div>
              </div>

              {/* Explore More Card */}
              {otherProjects.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-gray-400 pl-1">
                    Also Explore
                  </h4>
                  {otherProjects.map((proj) => (
                    <div 
                      key={proj.id} 
                      className="bg-white rounded-xl border border-gray-150 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col gap-3 p-3 group"
                    >
                      <div className="relative h-28 w-full rounded-lg overflow-hidden shrink-0">
                        <Image 
                          src={proj.image} 
                          alt={proj.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="flex flex-col justify-between py-1 flex-grow">
                        <div>
                          <span className="text-[9px] uppercase font-bold text-gray-400 tracking-wider">
                            {proj.status === "ongoing" ? "Ongoing" : "Completed"}
                          </span>
                          <h5 className="font-extrabold text-sm text-[#3C3C3C] group-hover:text-[#C6A15B] transition-colors leading-tight mt-1">
                            {proj.title}
                          </h5>
                          <p className="text-xs text-gray-400 mt-1">{proj.location || "Shadnagar, Hyderabad"}</p>
                        </div>
                        <Link 
                          href={`/ventures/${proj.slug}`} 
                          className="text-xs font-bold text-[#C6A15B] hover:text-[#3C3C3C] transition-colors mt-3 inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>View Project</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
