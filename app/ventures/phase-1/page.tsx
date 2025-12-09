import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase I - Deccan Heights",
  description:
    "Premium open plots in Shadnagar. 1200 Sq.ft plots starting at ₹25L+.",
};

const phase1Data = {
  title: "Deccan Heights Phase I",
  subtitle: "A sanctuary of peace meticulously designed for your legacy.",
  description:
    "Phase I offers an exclusive opportunity to own premium land in one of Hyderabad's fastest-growing corridors. Perfectly positioned for high appreciation, these plots are fully approved and ready for registration. With wide expansive roads and lush greenery, it provides the perfect canvas for your dream home or a secure investment portfolio.",
  image: "/plot1.webp",
  stats: [
    { label: "Plot Size", value: "1200 Sq.ft" },
    { label: "Starting Price", value: "₹25L+" },
    { label: "Location", value: "Shadnagar" },
  ],
  amenities: [
    "DTCP/RERA Approved Layout",
    "40ft & 30ft Black Top Roads",
    "Underground Drainage System",
    "Electricity with Transformers",
    "Avenue Plantation & Parks",
    "24/7 Security Surveillance",
    "Vastu Compliant Plots",
    "Compound Wall for Entire Layout",
  ],
  locationHighlights: [
    "5 Mins from Bangalore Highway (NH-44)",
    "20 Mins drive from Rajiv Gandhi Intl. Airport",
    "Near Shadnagar Railway Station",
    "Close to Symbiosis University",
    "Connectivity to Proposed Regional Ring Road",
    "Near Industrial Hubs (Kothur, Jepedcherla)",
  ],
};

export default function Phase1Page() {
  return <VenturePageTemplate data={phase1Data} />;
}
