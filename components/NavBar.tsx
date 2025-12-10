"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Active Ventures", href: "/ventures" },
  { name: "Team", href: "/team" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // "py-5 bg-white/80 border-transparent"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm border-gray-200/50"
          : "py-5 bg-white/80 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <div className="relative h-10 w-32 md:h-12 md:w-40 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Deccan Heights Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative group text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-[#C6A15B]"
                        : "text-[#3C3C3C] hover:text-[#C6A15B]"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#C6A15B] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#C6A15B] text-white text-sm font-semibold rounded shadow-md hover:bg-[#b08d4b] transition-colors flex items-center gap-2"
            >
              Contact Us
              <ChevronRight size={16} />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 text-[#3C3C3C] hover:text-[#C6A15B] transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 lg:hidden z-40"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-white z-50 shadow-2xl flex flex-col pt-24 pb-8 px-6 lg:hidden border-l border-gray-100"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 p-2 text-[#3C3C3C] hover:text-[#C6A15B] transition-colors"
                  aria-label="Close Menu"
                >
                  <X size={32} />
                </button>
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between text-lg font-medium border-b border-gray-100 pb-2 ${
                            isActive ? "text-[#C6A15B]" : "text-[#3C3C3C]"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                          <ChevronRight
                            size={16}
                            className={
                              isActive ? "text-[#C6A15B]" : "text-[#3C3C3C]/30"
                            }
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-4 bg-[#C6A15B] text-white font-semibold rounded hover:bg-[#b08d4b] transition-colors shadow-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Get in Touch
                  </Link>

                  <div className="mt-8 text-center">
                    <p className="text-[#3C3C3C]/40 text-xs uppercase tracking-widest">
                      Follow Us
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                      {/* Social Placeholders if needed */}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
