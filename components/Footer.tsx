"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const projects = [
    { name: "Deccan Heights Phase I", href: "#" },
    { name: "Riverside Villas", href: "#" },
    { name: "Commercial Hub", href: "#" },
    { name: "Upcoming Ventures", href: "#" },
  ];

  return (
    <footer className="bg-charcoal-500 text-white pt-16 pb-8 overflow-hidden relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold-500/0 via-gold-500 to-gold-500/0 opacity-50" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              {/* <h2 className="text-2xl font-bold font-serif tracking-wide text-white">
                DECCAN <span className="text-gold-500">HEIGHTS</span>
              </h2> */}
              <h2 className="text-2xl font-bold text-white mb-6">
                <img src="/new_dh_logo_c.png" alt="image" height={60} width={300} />
              </h2>
            </Link>
            <p className="text-silver-500 text-sm leading-relaxed max-w-xs">
              Premium real estate solutions for the modern visionary. We build
              legacies, not just structures. Experience excellence in every
              square foot.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, color: "#C6A15B" }} // Gold hover
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-silver-500 hover:bg-white/10 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-silver-500 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-gold-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-6 text-gold-500">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <Link
                    href={project.href}
                    className="text-silver-500 hover:text-white transition-colors duration-300 block hover:translate-x-1 transform"
                  >
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gold-500">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-silver-500">
                <MapPin className="shrink-0 text-gold-500 mt-1" size={18} />
                <span className="text-sm">
                  Downtown Mall, Unit 4 & 5, Ground floor, Veer Nagar, Lakdikapul, Hyderabad, Telangana 500004
                </span>
              </div>
              <div className="flex items-center gap-3 text-silver-500">
                <Phone className="shrink-0 text-gold-500" size={18} />
                <span className="text-sm">+918328120257</span>
              </div>
              <div className="flex items-center gap-3 text-silver-500">
                <Mail className="shrink-0 text-gold-500" size={18} />
                <a
                  href="mailto:deccanheightsofficial@gmail.com"
                  className="text-sm hover:text-gold-500 transition-colors"
                >
                  deccanheightsofficial@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver-500 text-sm">
            © {currentYear} Deccan Heights. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-silver-500">
            <Link
              href="/privacy"
              className="hover:text-gold-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gold-500 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-gold-500 transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
