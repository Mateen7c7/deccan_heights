"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Ventures", href: "/ventures" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Phase 5", href: "/maps/phase5" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-white/70 backdrop-blur-md py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 group">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="Deccan Heights Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 48px, 48px"
            />
          </div>
          <div className="relative w-48 h-12">
            <Image
              src="/dht-removebg.png"
              alt="Deccan Heights"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2"
              >
                <motion.span
                  className={`text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-gold-500"
                      : "text-charcoal-500 group-hover:text-gold-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                </motion.span>
                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform origin-left transition-transform duration-300 ease-out ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-charcoal-500 hover:text-gold-500 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 bg-white/98 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={`text-2xl font-medium tracking-wide ${
                    pathname === link.href
                      ? "text-gold-500"
                      : "text-charcoal-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
