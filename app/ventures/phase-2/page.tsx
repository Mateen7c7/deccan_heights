import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase II - Deccan Heights",
  description:
    "Luxury gated community plots in Shadnagar. 1500 Sq.ft plots starting at ₹35L+.",
};

const phase2Data = {
  title: "Deccan Heights Phase II",
  subtitle: "Future-ready smart community for the modern investor.",
  description:
    "Phase II elevates the standard of living with enhanced amenities and strategic positioning. Designed as a premium gated community, it offers a secure environment with world-class infrastructure. Whether you are looking for immediate construction or long-term capital appreciation, Phase II stands as a beacon of growth in the Shadnagar region.",
  image: "/plot2.webp",
  stats: [
    { label: "Plot Size", value: "1500 Sq.ft" },
    { label: "Starting Price", value: "₹35L+" },
    { label: "Location", value: "Shadnagar" },
  ],
  amenities: [
    "Grand Entrance Arch with Gate",
    "Clubhouse Membership Access",
    "Landscaped Gardens & Gazebos",
    "Children's Play Area",
    "Water Harvesting Pits",
    "Overhead Water Tank",
    "Solar Street Lighting",
    "Curbed Stones for Roads",
  ],
  locationHighlights: [
    "2 Mins from National Highway 44",
    "Adjacent to Established Residential Zones",
    "15 Mins to Microsoft Data Center",
    "Near Corporate Hospitals & Schools",
    "Quick Access to Outer Ring Road (ORR)",
    "High Appreciation Potential Zone",
  ],
};

export default function Phase2Page() {
  return <VenturePageTemplate data={phase2Data} />;
}
