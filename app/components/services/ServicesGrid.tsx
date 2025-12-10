"use client";

import { motion } from "motion/react";
import {
  Map,
  TrendingUp,
  Home,
  Key,
  Hammer,
  Palmtree,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "residential-plots",
    title: "Residential Plot Sales",
    description:
      "Prime plots in rapidly developing areas with high appreciation potential.",
    icon: Map,
  },
  {
    id: "sell-property",
    title: "Sell Your Property",
    description:
      "Expert valuation and marketing strategies to get the best price for your asset.",
    icon: TrendingUp,
  },
  {
    id: "buy-property",
    title: "Buy a Property",
    description:
      "End-to-end support in finding and acquiring your dream home or investment.",
    icon: Home,
  },
  {
    id: "property-management",
    title: "Property Management",
    description:
      "Comprehensive care for your property including maintenance and tenant management.",
    icon: Key,
  },
  {
    id: "construction",
    title: "Construction & Projects",
    description:
      "Turnkey construction solutions and professional project management services.",
    icon: Hammer,
  },
  {
    id: "resort-services",
    title: "Resort & Holiday Properties",
    description:
      "Exclusive holiday homes and resort management for leisure and investment.",
    icon: Palmtree,
  },
];

export default function ServicesGrid() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services-grid" className="py-24 px-6 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-4">
            Our Core <span className="text-[#C6A15B]">Capabilities</span>
          </h2>
          <p className="text-[#3C3C3C]/70 max-w-2xl mx-auto">
            Explore our diverse range of real estate services designed to meet
            every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
              onClick={() => scrollToSection(service.id)}
            >
              <div className="w-14 h-14 bg-[#F8F8F8] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C6A15B]/10 transition-colors">
                <service.icon className="w-7 h-7 text-[#C6A15B]" />
              </div>
              <h3 className="text-xl font-bold text-[#3C3C3C] mb-3 group-hover:text-[#C6A15B] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#3C3C3C]/70 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              <span className="flex items-center text-[#C6A15B] font-semibold text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
