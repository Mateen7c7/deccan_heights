"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  Home,
  Clock,
  MapPin,
  Check,
  Navigation,
  AlertCircle,
  TrendingUp,
  Gift,
  FileText,
  CheckCircle2
} from "lucide-react";
import { allPlotVentures } from "@/data/plots";

// Custom SVG Component for WhatsApp Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const BookSiteVisit = () => {
  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Check if Office is Open (Mon-Sat, 10 AM - 6 PM)
  useEffect(() => {
    const checkOfficeHours = () => {
      const now = new Date();
      // Adjust to IST if necessary, but standard local time is usually what users expect
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = now.getHours();

      // Mon = 1, Sat = 6
      const isOpenDay = day >= 1 && day <= 6;
      const isOpenHour = hour >= 10 && hour < 18; // 10:00 to 17:59

      setIsOpenNow(isOpenDay && isOpenHour);
    };

    checkOfficeHours();
    const interval = setInterval(checkOfficeHours, 60000); // check every minute
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple 10-digit validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/[\s-()]/g, ""))) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    setPhoneError("");
    setIsSubmitting(true);

    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setSelectedProject("");
    setSelectedSize("");
    setMessage("");
    setIsSuccess(false);
  };

  return (
    <section className="w-full bg-[#F8F8F8] py-16 px-4 md:px-8 border-t border-gray-200/50">
      <div className="container mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#3C3C3C] tracking-tight">
            Book Your Free <span className="text-[#C6A15B]">Site Visit</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#C6A15B] mx-auto mt-4" />
          <p className="text-[#3C3C3C]/80 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Take the first step toward your dream investment. Our team will get back to you within 2 hours.
          </p>
        </div>

        {/* Three Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* COLUMN 1: Contact Us Directly & Why Act Now */}
          <div className="flex flex-col gap-8 justify-between">
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col gap-4 flex-1">
              <h3 className="text-lg font-bold text-[#3C3C3C] mb-2">
                Contact Us Directly
              </h3>

              {/* Call Us Now */}
              <button
                type="button"
                onClick={() => window.location.href = "tel:+918686059555"}
                className="w-full bg-[#C6A15B] hover:bg-[#a48446] text-white p-4 rounded-xl flex items-center gap-4 transition-colors cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50"
              >
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Call Us Now</div>
                  <div className="text-lg font-bold">8686059555</div>
                </div>
              </button>

              {/* Call Us Now */}
              <button
                type="button"
                onClick={() => window.location.href = "tel:+918639004881"}
                className="w-full bg-[#C6A15B] hover:bg-[#a48446] text-white p-4 rounded-xl flex items-center gap-4 transition-colors cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#C6A15B]/50"
              >
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/70 font-semibold">Call Us Now</div>
                  <div className="text-lg font-bold">8639004881</div>
                </div>
              </button>

              {/* WhatsApp Us */}
              <button
                type="button"
                onClick={() => window.open("https://wa.me/918328120257?text=Hi,%20I'm%20interested%20in%20booking%20a%20free%20site%20visit%20with%20Deccan%20Heights.", "_blank")}
                className="w-full bg-[#25D366] hover:bg-[#1ebd53] text-white p-4 rounded-xl flex items-center gap-4 transition-colors cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
              >
                <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-base font-bold">WhatsApp Us</div>
                </div>
              </button>

              {/* Email Us */}
              <button
                type="button"
                onClick={() => window.location.href = "mailto:deccanheights@gmail.com"}
                className="w-full bg-[#F8F9FA] hover:bg-gray-200/50 border border-gray-200/60 text-[#3C3C3C] p-4 rounded-xl flex items-center gap-4 transition-colors cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <div className="w-10 h-10 bg-[#C6A15B]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C6A15B]" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[10px] uppercase tracking-wider text-[#3C3C3C]/60 font-semibold">Email Us</div>
                  <div className="text-xs md:text-sm font-bold truncate text-[#3C3C3C] mt-0.5">
                    deccanheights@gmail.com
                  </div>
                </div>
              </button>
            </div>

            {/* Why Act Now Card */}
            <div className="bg-[#3C3C3C] text-white p-6 rounded-2xl shadow-md flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase text-[#C6A15B] mb-5 border-b border-white/10 pb-2">
                  Why Act Now?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm font-medium">Limited plots available</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm font-medium">Prices increasing quarterly</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm font-medium">Zero brokerage charges</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Gift className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm font-medium">Free site visit arranged</span>
                  </li>
                  <li className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </div>
                    <span className="text-sm font-medium">Instant documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Send Enquiry */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-between"
                >
                  <h3 className="text-lg font-bold text-[#3C3C3C] mb-4">
                    Send Enquiry
                  </h3>

                  <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">

                    {/* Name & Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="enquiryName" className="block text-xs font-semibold text-[#3C3C3C] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="enquiryName"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-[#3C3C3C] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="enquiryPhone" className="block text-xs font-semibold text-[#3C3C3C] mb-1.5">
                          Phone *
                        </label>
                        <input
                          id="enquiryPhone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (phoneError) setPhoneError("");
                          }}
                          placeholder="10-digit number"
                          className={`w-full px-3.5 py-2.5 rounded-lg border ${phoneError ? "border-red-500" : "border-gray-300"} text-[#3C3C3C] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all`}
                        />
                        {phoneError && (
                          <p className="text-[10px] text-red-500 mt-1 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            {phoneError}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="enquiryEmail" className="block text-xs font-semibold text-[#3C3C3C] mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="enquiryEmail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-[#3C3C3C] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all"
                      />
                    </div>

                    {/* Project & Plot Size Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="enquiryProject" className="block text-xs font-semibold text-[#3C3C3C] mb-1.5">
                          Project
                        </label>
                        <select
                          id="enquiryProject"
                          value={selectedProject}
                          onChange={(e) => setSelectedProject(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-[#3C3C3C] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all bg-white"
                        >
                          <option value="">Select Project</option>
                          {allPlotVentures.map((venture) => (
                            <option key={venture.id} value={venture.title}>
                              {venture.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="enquirySize" className="block text-xs font-semibold text-[#3C3C3C] mb-1.5">
                          Plot Size
                        </label>
                        <select
                          id="enquirySize"
                          value={selectedSize}
                          onChange={(e) => setSelectedSize(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-[#3C3C3C] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all bg-white"
                        >
                          <option value="">Select Size</option>
                          <option value="120 sq.yd">120 sq.yd</option>
                          <option value="150 sq.yd">150 sq.yd</option>
                          <option value="200 sq.yd">200 sq.yd</option>
                          <option value="240 sq.yd">240 sq.yd</option>
                          <option value="300 sq.yd">300 sq.yd</option>
                          <option value="400 sq.yd">400 sq.yd</option>
                          <option value="500 sq.yd">500 sq.yd</option>
                          <option value="1000 sq.yd">1000 sq.yd</option>
                          <option value="Custom Size">Custom Size</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="enquiryMsg" className="block text-xs font-semibold text-[#3C3C3C] mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        id="enquiryMsg"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Any specific requirements or questions..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-[#3C3C3C] text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 bg-[#C6A15B] hover:bg-[#a48446] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-50 select-none"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Home className="w-4 h-4" />
                          <span>Book Free Site Visit</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Subtext */}
                  <p className="text-[10px] text-gray-400 text-center mt-3 select-none leading-normal">
                    By submitting, you agree to be contacted by Deccan Heights. No spam, ever.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="w-16 h-16 bg-[#C6A15B]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#C6A15B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3C3C3C] mb-2">
                    Site Visit Booked!
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 max-w-sm">
                    Thank you for your interest. One of our consultants will call you within 2 hours to coordinate and confirm your complimentary site visit.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 bg-[#C6A15B]/10 hover:bg-[#C6A15B]/20 text-[#C6A15B] text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* COLUMN 3: Map & Office Hours */}
          <div className="flex flex-col gap-8 justify-between">
            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between flex-1">
              {/* Map embed */}
              <div className="w-full h-[180px] bg-gray-100 relative shrink-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.554681876109!2d78.45832167524424!3d17.404416783485736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97ff47383a9f%3A0x6f76bdabd8b9330a!2sDeccan%20Heights%20Homes%20%26%20Resorts%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1785155543649!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Deccan Heights Office Location Map"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Address details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex gap-3 items-start mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#C6A15B]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4.5 h-4.5 text-[#C6A15B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#3C3C3C]">
                      Deccan Heights Homes & Resorts PVT. LTD.
                    </h4>
                    <p className="text-xs text-gray-500 leading-normal mt-1">
                      Road No. 12, Banjara Hills, Hyderabad
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => window.open("https://maps.app.goo.gl/kvUhbBVAWYTbLWsx6", "_blank")}
                  className="w-full bg-[#F8F9FA] hover:bg-gray-200/50 border border-gray-200/60 text-[#C6A15B] py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2.5 mb-4 border-b border-gray-100 pb-2">
                  <Clock className="w-4.5 h-4.5 text-[#C6A15B]" />
                  <h3 className="text-sm font-bold text-[#3C3C3C]">
                    Office Hours
                  </h3>
                </div>

                <div className="flex justify-between items-center text-xs md:text-sm text-[#3C3C3C] py-2">
                  <span className="text-gray-500 font-medium">Monday – Saturday</span>
                  <span className="font-bold text-[#C6A15B]">10 AM – 6 PM</span>
                </div>
              </div>

              {/* Dynamic Status Indicator */}
              <div className="mt-3">
                <AnimatePresence mode="wait">
                  {isOpenNow ? (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="bg-green-50 text-green-700 border border-green-200/60 p-2.5 rounded-lg flex items-center gap-2 text-xs"
                    >
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                      <span className="font-semibold">We're open now — call us!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="closed"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="bg-orange-50 text-orange-700 border border-orange-200/60 p-2.5 rounded-lg flex items-center gap-2 text-xs"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-orange-400"></span>
                      <span className="font-semibold">We're closed now — send us an enquiry!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BookSiteVisit;
