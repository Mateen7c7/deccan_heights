"use client";


import VentureCard from "./VentureCard";

const ventures = [
    {
        id: 1,
        title: "Deccan Heights Phase 5",
        description: "Experience luxury living in the heart of nature with our premium plots designed for your dream home. A perfect blend of tranquility and modern amenities.",
        image: "/plot1.webp",
        stats: [
            { label: "Area", value: "1200 Sq.ft" },
            { label: "Price", value: "₹25L+" },
            { label: "Location", value: "Shadnagar" },
        ],
    },
];



export default function ActiveVenturesSection() {
    return (
        <section className="bg-[#F8F8F8] py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-[#C6A15B] sm:text-4xl md:text-5xl">
                        Our Active Ventures
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 bg-[#C6A15B] rounded-full" />
                    <p className="mx-auto mt-4 max-w-2xl text-[#3C3C3C] text-lg">
                        Discover our premium ongoing projects that redefine luxury living.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
                    {ventures.map((venture) => (
                        <VentureCard key={venture.id} venture={venture} />
                    ))}
                </div>
            </div>
        </section>
    );
}
