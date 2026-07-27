"use client";

import React from "react";
import { motion } from "motion/react";
import TrustValue from "@/components/TrustValue";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

// --- Components ---

const AboutHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-slate-900/60 z-10" />
        {/* Placeholder for a real image, using a dark pattern/gradient for now if no image is available */}
        {/* Using one of the provided plot images as background */}
        <div className="absolute inset-0 bg-[url('/plot4.webp')] bg-cover bg-center opacity-40 grayscale" />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block py-1 px-4 mb-6 rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10 text-[#C6A15B] font-medium tracking-wide uppercase text-sm backdrop-blur-sm"
        >
          Since 2005
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building Legacies, <br />
          <span className="text-[#C6A15B]">Securing Futures</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Deccan Heights is more than a real estate developer. We are curators
          of exclusive lifestyles and guardians of your investments.
        </motion.p>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#C6A15B] font-bold uppercase tracking-widest mb-4 text-sm">
              Our Story
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3C3C3C] mb-8 leading-tight">
              Decades of Trust & <br /> Excellence
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Founded with a singular vision to transform the landscape of
                Hyderabad, Deccan Heights has grown from a modest beginning into
                one of the region&apos;s most trusted real estate brands.
              </p>
              <p>
                For over two decades, we have focused on one thing:{" "}
                <strong className="text-[#3C3C3C]">Value</strong>. We understand
                that buying land is not just a transaction; it&apos;s an
                emotional investment and a financial cornerstone for your
                family&apos;s future. That’s why we meticulously select
                locations that promise high appreciation and develop them with
                top-tier infrastructure.
              </p>
              <p>
                Today, our name is synonymous with integrity, transparency, and
                quality. We don’t just sell plots; we deliver promises.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-[#C6A15B] mb-1">20+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Years of Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#C6A15B] mb-1">10k+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">
                  Happy Customers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision/Mission Cards - Visual Element */}
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-tr from-[#C6A15B]/20 to-transparent rounded-4xl blur-2xl opacity-60" />
            <div className="grid gap-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#3C3C3C] rounded-xl flex items-center justify-center text-white mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#3C3C3C] mb-3">
                  Our Vision
                </h3>
                <p className="text-slate-600">
                  To be the leading real estate developer recognized for
                  transforming landscapes into sustainable, high-growth
                  communities that stand the test of time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#3C3C3C] p-8 rounded-2xl border border-slate-800 text-white hover:shadow-xl transition-shadow duration-300 transform md:translate-x-8"
              >
                <div className="w-12 h-12 bg-[#C6A15B] rounded-xl flex items-center justify-center text-white mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-slate-300">
                  To provide clear-titled, Governament-approved properties in strategic
                  locations, ensuring absolute peace of mind and maximum ROI for
                  our customers.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C6A15B]/30 transition-all duration-300 group"
  >
    <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-[#3C3C3C] group-hover:bg-[#C6A15B] group-hover:text-white transition-colors duration-300 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#3C3C3C] mb-3 group-hover:text-[#C6A15B] transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const WhyChooseUs = () => {
  const values = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Strategic Locations",
      description:
        "We identify high-growth corridors before they boom, ensuring you get the best entry price and maximum appreciation.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "100% Clear Titles",
      description:
        "Legal transparency is our core value. Every inch of land we sell is thoroughly vetted, clear-titled, and litigation-free.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Governament Approved",
      description:
        "We differ from the rest by strictly adhering to Governament norms. Your investment is protected by the highest regulatory standards.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer-Centric",
      description:
        "From site visits to registration assistance, our dedicated team supports you at every step of your ownership journey.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#C6A15B] font-bold uppercase tracking-widest mb-4 text-sm">
            Why Choose Us
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#3C3C3C] mb-6">
            The Deccan Heights Advantage
          </h2>
          <p className="text-slate-600 text-lg">
            We don&apos;t just sell land; we sell certainty. Here is why
            thousands of families trust us with their life savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <ValueCard key={i} {...v} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAStrip = () => {
  return (
    <section className="py-20 bg-[#3C3C3C] relative overflow-hidden">
      {/* Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A15B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to secure your piece of the future?
        </h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
          Explore our active ventures and find the perfect plot that fits your
          budget and aspirations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/ventures"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C6A15B] text-white font-bold rounded-lg hover:bg-[#b08d4b] transition-colors shadow-lg shadow-[#C6A15B]/20"
          >
            Explore Ventures
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#3C3C3C] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <StorySection />
      <WhyChooseUs />
      {/* 
        Reusing TrustValue for the "Certifications & Compliance" requirement 
        as it prominently features Governament, Years of Experience etc.
      */}
      <div className="bg-white">
        <TrustValue />
      </div>
      <CTAStrip />
    </main>
  );
}
