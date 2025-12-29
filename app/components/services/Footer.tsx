"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3C3C3C] text-[#BDBDBD] py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Deccan Heights
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Elevating lifestyles with premium real estate solutions. From
              plots to holiday homes, we build trust and quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#C6A15B] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#C6A15B] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#C6A15B] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#C6A15B] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Residential Plots
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Sell Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Construction
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Resort Investments
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  RERA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C6A15B] transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0" />
                <span>
                  Road No. 12, NBT Nagar, Banjara Hills,
                  <br />
                  Hyderabad, Telangana 500034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C6A15B] shrink-0" />
                <span>+91 40 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C6A15B] shrink-0" />
                <span>info@deccanheights.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Deccan Heights. All rights
            reserved.
          </p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
}
