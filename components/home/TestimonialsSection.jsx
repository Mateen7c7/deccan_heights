"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const reviews = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "IT Professional",
        property: "Plot in Phase I",
        review: "The documentation process was extremely smooth. I felt very secure investing with Deccan Heights.",
        rating: 5,
        avatar: "RS",
    },
    {
        id: 2,
        name: "Priya Reddy",
        role: "Doctor",
        property: "Villa Project",
        review: "Prime locations and very transparent pricing. It's hard to find such honesty in real estate these days.",
        rating: 5,
        avatar: "PR",
    },
    {
        id: 3,
        name: "Ahmed Khan",
        role: "Business Owner",
        property: "Commercial Plot",
        review: "Deccan Heights helped me secure my dream investment. The team was supportive at every step.",
        rating: 5,
        avatar: "AK",
    },
    {
        id: 4,
        name: "Sneha Gupta",
        role: "Architect",
        property: "Residential Plot",
        review: "Excellent customer service and guidance throughout. Highly recommended for first-time investors.",
        rating: 4,
        avatar: "SG",
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Retired Officer",
        property: "Farm Land",
        review: "Highly professional team, very happy with my plot. The development is exactly as promised.",
        rating: 5,
        avatar: "VS",
    },
];

const Card = ({ i, progress, range, targetScale, review }) => {
    const container = useRef(null);


    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className="flex flex-col relative h-[450px] w-[90%] md:w-[70%] lg:w-[800px] rounded-xl p-10 origin-top bg-white border border-[#BDBDBD]/40 shadow-xl"
            >
                {/* Decorative Quote */}
                <div className="absolute top-8 right-8 opacity-10">
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="#C6A15B"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                    </svg>
                </div>

                <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full bg-[#F8F8F8] border-2 border-[#C6A15B] flex items-center justify-center text-[#C6A15B] font-bold text-2xl shadow-sm">
                        {review.avatar}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#3C3C3C]">{review.name}</h3>
                        <p className="text-[#BDBDBD] text-sm font-medium uppercase tracking-wide">
                            {review.role} • <span className="text-[#C6A15B]">{review.property}</span>
                        </p>
                    </div>
                </div>

                <div className="grow flex flex-col justify-center">
                    <p className="text-[#3C3C3C] text-xl md:text-2xl leading-relaxed font-light italic">
                        &quot;{review.review}&quot;
                    </p>
                </div>

                <div className="flex items-center gap-2 mt-6">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={index < review.rating ? "#C6A15B" : "none"}
                            stroke={index < review.rating ? "#C6A15B" : "#BDBDBD"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6"
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default function TestimonialsSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <section className="bg-[#F8F8F8] pt-20 pb-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-[#C6A15B] sm:text-4xl md:text-5xl mb-4"
                >
                    What Our Customers Say
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 100 }}
                    viewport={{ once: true }}
                    className="mx-auto h-1 bg-[#C6A15B] rounded-full mb-6"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-[#3C3C3C] text-lg"
                >
                    Real stories from families who found their home with Deccan Heights.
                </motion.p>
            </div>

            <div ref={container} className="relative">
                {reviews.map((review, i) => {
                    const targetScale = 1 - (reviews.length - 1 - i) * 0.05;
                    return (
                        <Card
                            key={i}
                            i={i}
                            review={review}
                            progress={scrollYProgress}
                            range={[i * 0.2, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
