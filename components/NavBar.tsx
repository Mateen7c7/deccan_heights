"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Ventures",
    href: "/ventures",
    submenu: [
      { name: "Phase 5", href: "/ventures/phase-1" },
      { name: "Phase 4", href: "/ventures/phase-4" },
      { name: "Phase 3", href: "/ventures/phase-3" },
      { name: "Balapur Bandra", href: "/ventures/balapur-bandra" },
      { name: "Phase 5 Interactive Map", href: "/maps/phase5" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  // { name: "Phase 5", href: "/maps/phase5" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome;

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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isSolid
        ? "bg-white/90  shadow-md py-2 md:py-1 lg:py-1"
        : "bg-white/0 py-4 md:py-1 lg:py-1"
        }`}
    >
      <div className="container mx-auto lg:mx-0 px-6  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50 group">
          <div className={`relative transition-all duration-300  ${isSolid
            ? "w-[130px] h-[80px] md:w-[160px] md:h-[98px] lg:w-[180px] lg:h-[50px]"
            : "w-[160px] h-[98px] md:w-[200px] md:h-[123px] lg:w-[450px] lg:h-[100px] lg:mt-6"
            }`}>
            <Image
              src="/new_dh_logo_c.png"
              alt="Deccan Heights Logo"
              fill
              className="object-cover"
              priority
              // sizes="(max-width: 768px) 300px, 500px"    
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              link.submenu?.some((sub) => pathname === sub.href);
            const hasSubmenu = !!link.submenu;

            return (
              <div
                key={link.name}
                className="relative group py-2"
                onMouseEnter={() => hasSubmenu && setHoveredLink(link.name)}
                onMouseLeave={() => hasSubmenu && setHoveredLink(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link href={link.href} className="flex items-center gap-1">
                    <motion.span
                      className={`text-sm lg:text-base xl:text-lg font-medium transition-colors duration-300 ${isActive
                        ? "text-gold-500"
                        : "text-charcoal-500 group-hover:text-gold-500"
                        }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                  {hasSubmenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${hoveredLink === link.name ? "rotate-180" : ""
                        } ${isActive
                          ? "text-gold-500"
                          : "text-charcoal-500 group-hover:text-gold-500"
                        }`}
                    />
                  )}
                </div>

                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform origin-left transition-transform duration-300 ease-out ${isActive
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />

                {/* Dropdown Menu */}
                {hasSubmenu && (
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50"
                      >
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`block px-5 py-3 text-sm font-medium transition-colors ${pathname === sub.href
                              ? "text-gold-500 bg-gold-50/50"
                              : "text-charcoal-500 hover:text-gold-500 hover:bg-gray-50"
                              }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
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
            className="md:hidden fixed inset-0 bg-white backdrop-blur-xl overflow-y-auto flex flex-col pt-28 pb-12 z-40"
          >
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const hasSubmenu = !!link.submenu;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className={`text-2xl font-medium tracking-wide ${pathname === link.href
                          ? "text-gold-500"
                          : "text-charcoal-500"
                          }`}
                        onClick={() => !hasSubmenu && setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </div>
                    {hasSubmenu && (
                      <div className="mt-2 ml-4 flex flex-col space-y-3 border-l-2 border-gold-100 pl-4">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={`text-lg font-medium ${pathname === sub.href
                              ? "text-gold-500"
                              : "text-charcoal-400"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
