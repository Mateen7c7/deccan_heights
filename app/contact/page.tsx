"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  MessageCircle,
  ChevronDown,
  CheckCircle,
  Upload,
  Star,
  ArrowRight,
  ShieldCheck,
  Home,
  TrendingUp,
  Calendar,
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
} as const;

// --- MOCK DATA ---
const FAQs = [
  {
    question: "What is your typical response time?",
    answer:
      "We strive to respond to all inquiries within 2-4 business hours. For urgent matters, please call our office directly.",
  },
  {
    question: "What documentation do I need to buy a property?",
    answer:
      "Standard requirements include a valid government ID (Aadhar/PAN), proof of address, and financial statements. Our agents will guide you through the specific checklist for your chosen property.",
  },
  {
    question: "Do you cover areas outside of the city center?",
    answer:
      "Yes, Deccan Heights specializes in premium properties across the greater metropolitan area and select up-and-coming suburban districts.",
  },
  {
    question: "How do I schedule a viewing?",
    answer:
      "You can book a viewing directly through this page using the 'Book a Viewing' button, or by contacting one of our agents listed below.",
  },
];

const AGENTS = [
  {
    name: "Aarav Sharma",
    title: "Senior Estate Agent",
    phone: "+91 98765 43210",
    email: "aarav@deccanheights.com",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Priya Desai",
    title: "Luxury Specialist",
    phone: "+91 98765 43211",
    email: "priya@deccanheights.com",
    image:
      "https://images.unsplash.com/photo-1573496359-0796d958502a?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Rohan Mehta",
    title: "Commercial Lead",
    phone: "+91 98765 43212",
    email: "rohan@deccanheights.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Ananya Iyer",
    title: "Rental Manager",
    phone: "+91 98765 43213",
    email: "ananya@deccanheights.com",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

const REVIEWS = [
  {
    name: "Vikram Reddy",
    text: "Deccan Heights made finding our dream villa seamless. Their attention to detail and premium service is unmatched.",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    text: "Professional, transparent, and incredibly helpful throughout the entire buying process. Highly recommended.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    text: "The best real estate experience I've had. The team went above and beyond to ensure our needs were met.",
    rating: 5,
  },
];

// --- COMPONENTS ---

const Header = () => (
  <motion.header
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className="relative pt-32 pb-20 px-6 md:px-12 bg-white text-center"
  >
    <motion.h1
      variants={fadeInUp}
      className="text-5xl md:text-7xl font-bold text-[#C6A15B] mb-6 font-serif"
    >
      Contact Us
    </motion.h1>
    <motion.p
      variants={fadeInUp}
      className="text-lg md:text-2xl text-[#3C3C3C] max-w-2xl mx-auto font-light leading-relaxed"
    >
      We’re here to help you buy, sell, or rent with confidence.
    </motion.p>
  </motion.header>
);

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Buying",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-2xl shadow-xl border border-[#BDBDBD]/30 text-center min-h-[600px] flex flex-col justify-center items-center"
      >
        <div className="w-20 h-20 bg-[#C6A15B]/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-[#C6A15B]" />
        </div>
        <h3 className="text-3xl font-bold text-[#3C3C3C] mb-4">
          Message Sent!
        </h3>
        <p className="text-[#BDBDBD] text-lg max-w-md">
          Thank you for reaching out. One of our agents will get back to you
          within 2-4 hours.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 px-8 py-3 bg-[#C6A15B] text-white font-semibold rounded-lg hover:bg-[#b08d4b] transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-black/5 border border-[#BDBDBD]/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div variants={fadeInUp}>
          <label className="block text-sm font-semibold text-[#3C3C3C] mb-2">
            Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all placeholder:text-gray-300"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <label className="block text-sm font-semibold text-[#3C3C3C] mb-2">
            Email Address *
          </label>
          <input
            required
            type="email"
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all placeholder:text-gray-300"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <motion.div variants={fadeInUp}>
          <label className="block text-sm font-semibold text-[#3C3C3C] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all placeholder:text-gray-300"
            value={formState.phone}
            onChange={(e) =>
              setFormState({ ...formState, phone: e.target.value })
            }
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <label className="block text-sm font-semibold text-[#3C3C3C] mb-2">
            Inquiry Type
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all appearance-none bg-white text-[#3C3C3C]"
              value={formState.type}
              onChange={(e) =>
                setFormState({ ...formState, type: e.target.value })
              }
            >
              <option>Buying a Property</option>
              <option>Selling a Property</option>
              <option>Renting</option>
              <option>General Inquiry</option>
            </select>
            <ChevronDown className="absolute right-4 top-3.5 w-5 h-5 text-[#BDBDBD] pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeInUp} className="mb-6">
        <label className="block text-sm font-semibold text-[#3C3C3C] mb-2">
          Property Address (Optional)
        </label>
        <input
          type="text"
          placeholder="Enter address if relevant"
          className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all placeholder:text-gray-300"
          value={formState.address}
          onChange={(e) =>
            setFormState({ ...formState, address: e.target.value })
          }
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="mb-6">
        <label className="block text-sm font-semibold text-[#3C3C3C] mb-2">
          Message *
        </label>
        <textarea
          required
          rows={4}
          placeholder="How can we assist you today?"
          className="w-full px-4 py-3 rounded-lg border border-[#BDBDBD] focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none transition-all placeholder:text-gray-300 resize-none"
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
        />
      </motion.div>

      <motion.div variants={fadeInUp} className="mb-8">
        <label className="block text-sm font-semibold text-[#3C3C3C] mb-2">
          Upload Documents (Optional)
        </label>
        <div className="border-2 border-dashed border-[#BDBDBD] rounded-lg p-6 text-center hover:border-[#C6A15B] transition-colors cursor-pointer group">
          <Upload className="w-8 h-8 mx-auto text-[#BDBDBD] group-hover:text-[#C6A15B] mb-2 transition-colors" />
          <p className="text-sm text-[#BDBDBD] group-hover:text-[#3C3C3C]">
            Click to upload PDF or Images
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
        <div className="w-6 h-6 border rounded bg-gray-100 flex items-center justify-center text-xs text-gray-500">
          {/* Placeholder for CAPTCHA */}
          <span>🤖</span>
        </div>
        <span className="text-xs text-[#BDBDBD]">
          I am not a robot (CAPTCHA Placeholder)
        </span>
        <div className="ml-auto flex items-center gap-2">
          <input
            type="checkbox"
            required
            id="gdpr"
            className="accent-[#C6A15B] w-4 h-4"
          />
          <label htmlFor="gdpr" className="text-xs text-[#BDBDBD]">
            Accept GDPR & Privacy Policy
          </label>
        </div>
      </motion.div>

      <motion.button
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
        className="w-full py-4 bg-[#C6A15B] text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-[#b08d4b] transition-all flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Send Message <ArrowRight className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </motion.form>
  );
};

const ContactInfoItems = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    {[
      { icon: Phone, title: "Call Us", content: "+91 40 1234 5678" },
      { icon: Mail, title: "Email Us", content: "info@deccanheights.com" },
      {
        icon: MapPin,
        title: "Visit Us",
        content: "Deccan Heights HQ, Jubilee Hills, Hyderabad",
      },
      {
        icon: Clock,
        title: "Working Hours",
        content: "Mon - Sat: 10:00 AM - 7:00 PM",
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8F8F8] transition-colors"
      >
        <div className="w-12 h-12 bg-[#C6A15B]/10 rounded-full flex items-center justify-center shrink-0">
          <item.icon className="w-6 h-6 text-[#C6A15B]" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-[#3C3C3C]">{item.title}</h4>
          <p className="text-[#BDBDBD] mt-1">{item.content}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const AgentCard = ({ agent }: { agent: (typeof AGENTS)[0] }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="bg-white rounded-xl shadow-lg border border-[#BDBDBD]/20 overflow-hidden group"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <button className="w-full py-2 bg-[#C6A15B] text-white rounded font-medium text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-[#C6A15B] transition-colors">
          <MessageCircle className="w-4 h-4" /> Contact Agent
        </button>
      </div>
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-[#3C3C3C]">{agent.name}</h3>
      <p className="text-[#C6A15B] text-sm font-medium mb-4">{agent.title}</p>
      <div className="flex justify-center gap-4 text-[#BDBDBD]">
        <Phone className="w-4 h-4 hover:text-[#C6A15B] cursor-pointer" />
        <Mail className="w-4 h-4 hover:text-[#C6A15B] cursor-pointer" />
      </div>
    </div>
  </motion.div>
);

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeInUp} className="border-b border-[#BDBDBD]/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span
          className={`text-lg transition-colors ${
            isOpen ? "text-[#C6A15B] font-semibold" : "text-[#3C3C3C]"
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#BDBDBD] transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#C6A15B]" : "group-hover:text-[#3C3C3C]"
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#BDBDBD] leading-relaxed pr-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] font-sans overflow-x-hidden">
      <title>Contact Us | Deccan Heights</title>
      {/* Header Section */}
      <Header />

      {/* Main Content Grid */}
      <section className="container mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-12 mt-10">
            {/* Direct Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-2xl font-bold text-[#3C3C3C] mb-8 border-l-4 border-[#C6A15B] pl-4">
                Get in Touch
              </h2>
              <ContactInfoItems />
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-lg border border-[#BDBDBD]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.495767228308!2d78.406!3d17.436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzA5LjYiTiA3OMKwMjQnMjEuNiJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <div className="bg-white p-4 flex justify-between items-center">
                <span className="text-sm text-[#3C3C3C] font-medium">
                  Jubilee Hills, Hyderabad
                </span>
                <a
                  href="#"
                  className="text-sm text-[#C6A15B] font-bold hover:underline"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              {[Instagram, Facebook, Linkedin, MessageCircle].map(
                (Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ y: -5, color: "#C6A15B" }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#3C3C3C] hover:text-[#C6A15B] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-white py-20 border-y border-[#BDBDBD]/10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { title: "Schedule a Consultation", icon: Calendar },
              { title: "Request Valuation", icon: TrendingUp },
              { title: "Book a Viewing", icon: Home },
            ].map((cta, idx) => (
              <motion.button
                key={idx}
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(198, 161, 91, 0.2)",
                }}
                className="py-6 px-4 bg-[#C6A15B] text-white rounded-xl flex flex-col items-center justify-center gap-3 text-center transition-all shadow-md group"
              >
                <cta.icon className="w-8 h-8 opacity-90 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-lg">{cta.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#3C3C3C] mb-4">
              Meet Our Agents
            </h2>
            <div className="w-20 h-1 bg-[#C6A15B] mx-auto opacity-50"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {AGENTS.map((agent, idx) => (
              <AgentCard key={idx} agent={agent} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-[#F8F8F8] border border-[#BDBDBD]/20 relative"
              >
                <div className="absolute top-8 right-8 text-[#C6A15B]/20">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <div className="flex gap-1 mb-4 text-[#C6A15B]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#3C3C3C] mb-6 italic leading-relaxed">
                  &quot;{review.text}&quot;
                </p>
                <p className="font-bold text-[#3C3C3C]">— {review.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-12 mt-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Trust Badges placeholder */}
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-[#3C3C3C] mb-2" />
              <span className="text-xs font-bold text-[#3C3C3C] tracking-widest">
                RERA APPROVED
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-[#3C3C3C] mb-2" />
              <span className="text-xs font-bold text-[#3C3C3C] tracking-widest">
                5-STAR RATED
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F8F8F8]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3C3C3C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#BDBDBD]">
              Common questions about our services and process.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {FAQs.map((faq, idx) => (
              <FAQItem key={idx} {...faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance / Footer Note */}
      <section className="py-8 px-6 text-center border-t border-[#BDBDBD]/30 bg-[#F8F8F8]">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#BDBDBD] mb-4">
          <a href="#" className="hover:text-[#C6A15B] transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="#" className="hover:text-[#C6A15B] transition-colors">
            Terms of Service
          </a>
          <span>•</span>
          <span>RERA No: A1230000456</span>
        </div>
        <p className="text-xs text-[#BDBDBD]/60">
          © 2024 Deccan Heights. All rights reserved. Brokerage License #987654
        </p>
      </section>
    </main>
  );
}
