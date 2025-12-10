"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactLeadCapture() {
  return (
    <section id="contact" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12"
          >
            <div className="mb-8">
              <h3 className="text-[#C6A15B] font-bold uppercase tracking-widest text-sm mb-2">
                Get in Touch
              </h3>
              <h2 className="text-3xl font-bold text-[#3C3C3C]">
                Start Your Journey
              </h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#3C3C3C]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#C6A15B] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#3C3C3C]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#C6A15B] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3C3C3C]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#C6A15B] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3C3C3C]">
                  Service Interest
                </label>
                <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#C6A15B] transition-colors">
                  <option>Buy a Property</option>
                  <option>Sell a Property</option>
                  <option>Property Management</option>
                  <option>Construction</option>
                  <option>Resort Investment</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#3C3C3C]">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#C6A15B] transition-colors"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-[#C6A15B] text-white font-bold rounded hover:bg-[#b08d4b] transition-all transform hover:-translate-y-1 shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Side Panel / Map */}
          <div className="bg-[#3C3C3C] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#C6A15B] w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Head Office</p>
                    <p className="text-gray-400 text-sm">
                      Deccan Heights HQ, Road No. 45
                      <br />
                      Jubilee Hills, Hyderabad, 500033
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-[#C6A15B] w-6 h-6" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-400 text-sm">+91 40 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-[#C6A15B] w-6 h-6" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-400 text-sm">
                      hello@deccanheights.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 w-full bg-white/10 rounded-lg overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xs uppercase tracking-widest">
                  Google Map Embed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
