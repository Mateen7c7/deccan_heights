"use client";

import { motion } from "framer-motion";

// Interface for Review Data
interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
  avatar?: string; // Optional avatar URL
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    review:
      "The documentation process was extremely smooth. I felt very secure investing with Deccan Heights.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Reddy",
    review:
      "Prime locations and very transparent pricing. It's hard to find such honesty in real estate these days.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Khan",
    review:
      "Deccan Heights helped me secure my dream investment. The team was supportive at every step.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    review:
      "Excellent customer service and guidance throughout. Highly recommended for first-time investors.",
    rating: 4,
  },
  {
    id: 5,
    name: "Vikram Singh",
    review:
      "Highly professional team, very happy with my plot. The development is exactly as promised.",
    rating: 5,
  },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Star Icon Component
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "#C6A15B" : "none"}
    stroke={filled ? "#C6A15B" : "#BDBDBD"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F8F8F8] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold text-[#C6A15B] sm:text-4xl md:text-5xl mb-4">
            What Our Customers Say
          </h2>
          <div className="mx-auto h-1 w-24 bg-[#C6A15B] rounded-full mb-6" />
          <p className="mx-auto max-w-2xl text-[#3C3C3C] text-lg">
            Hear from our satisfied investors who have found their perfect
            property with Deccan Heights.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-[#BDBDBD]/30 flex flex-col h-full relative"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 opacity-10">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#C6A15B"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                </svg>
              </div>

              <div className="flex items-center mb-4">
                {/* Avatar Placeholder (Initials) */}
                <div className="w-12 h-12 rounded-full bg-[#F8F8F8] border border-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B] font-bold text-xl mr-4">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)}
                </div>
                <div>
                  <h3 className="font-bold text-[#3C3C3C] text-lg">
                    {review.name}
                  </h3>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < review.rating} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[#3C3C3C]/80 italic grow leading-relaxed">
                &quot;{review.review}&quot;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
