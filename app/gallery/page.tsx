"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, Maximize2 } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/plot1.webp",
    title: "Premium Plots",
    category: "Residential",
    description: "Expansive residential plots with world-class amenities.",
  },
  {
    id: 2,
    src: "/plot2.webp",
    title: "Nature's Retreat",
    category: "Resorts",
    description: "Beautifully landscaped resorts for your weekend getaway.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    title: "Luxury Villa",
    category: "Ventures",
    description: "Exquisite modern architecture with premium finishes.",
  },
  {
    id: 4,
    src: "/plot3.webp",
    title: "Investment Gold",
    category: "Commercial",
    description: "Strategically located commercial spaces for high returns.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
    title: "Modern Interiors",
    category: "Design",
    description: "Spacious and elegant interiors designed for comfort.",
  },
  {
    id: 6,
    src: "/plot4.webp",
    title: "Green Living",
    category: "Residential",
    description: "Eco-friendly living spaces surrounded by greenery.",
  },
  {
    id: 7,
    src: "/hero-bg.png",
    title: "Grand Entrance",
    category: "Ventures",
    description: "Magnificent gated community entrances.",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    title: "Aerial View",
    category: "Resorts",
    description: "Breathtaking views of our sprawling properties.",
  },
  {
    id: 9,
    src: "/deccan_heights_resorts.png",
    title: "Resort Living",
    category: "Resorts",
    description: "Experience luxury living in our premium resorts.",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    title: "Corporate Excellence",
    category: "Commercial",
    description: "State-of-the-art office spaces for modern businesses.",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600&auto=format&fit=crop",
    title: "Dream Home",
    category: "Residential",
    description: "A perfect blend of luxury and comfort for your family.",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    title: "Elegant Kitchens",
    category: "Design",
    description: "Modern kitchen designs that inspire culinary creativity.",
  },
];

const categories = [
  "All",
  ...new Set(galleryImages.map((img) => img.category)),
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#F8F8F8]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-semibold tracking-widest uppercase mb-3"
          >
            Our Portfolio
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-charcoal-500 mb-6"
          >
            Visual Experience
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 w-24 bg-gold-500 mx-auto rounded-full"
          />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gold-500 text-white shadow-lg shadow-gold-500/30"
                  : "bg-white text-charcoal-500 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal-500/90 via-charcoal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="text-white"
                    >
                      <span className="text-gold-500 text-xs font-bold uppercase tracking-wider mb-2 block">
                        {image.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {image.description}
                      </p>
                      <div className="mt-4 flex items-center text-gold-500 text-sm font-semibold">
                        View Details <Maximize2 className="ml-2 w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-charcoal-500/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white hover:text-gold-500 transition-colors z-50 p-2 bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />

              {/* Image Info in Lightbox */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                <span className="text-gold-500 text-sm font-bold uppercase tracking-wider mb-2 block">
                  {selectedImage.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .container {
          max-width: 1400px;
        }
      `}</style>
    </div>
  );
}
