"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactLeadCapture() {
  return (
    <section id="contact" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-100">
          {/* Contact Form */}
          

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
                      Downtown Mall, Unit 4 & 5, Ground floor, Veer Nagar, Lakdikapul
                      <br />
                      Hyderabad, Telangana 500004
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
            <div className="mt-12 h-64 w-full rounded-lg overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.554681876109!2d78.45832167524424!3d17.404416783485736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97ff47383a9f%3A0x6f76bdabd8b9330a!2sDeccan%20Heights%20Homes%20%26%20Resorts%20PVT.%20LTD.!5e1!3m2!1sen!2sin!4v1785155543649!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
