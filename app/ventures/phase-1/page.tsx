import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase 5 - Deccan Heights",
  description:
    "Premium open plots in Shadnagar. 1200 Sq.ft plots starting at ₹25L+.",
};

const phase1Data = {
  title: "Deccan Heights Phase 5",
  subtitle: "A sanctuary of peace meticulously designed for your legacy.",
  description:
    "Phase I offers an exclusive opportunity to own premium land in one of Hyderabad's fastest-growing corridors. Perfectly positioned for high appreciation, these plots are fully approved and ready for registration. With wide expansive roads and lush greenery, it provides the perfect canvas for your dream home or a secure investment portfolio.",
  image: "/plot1.webp",
  stats: [
    { label: "Plot Size", value: "9 acres" },
    { label: "Starting Price", value: "₹8500 per Sq.yard" },
    { label: "Location", value: "Shadnagar" },
  ],
  amenities: [
    "Within HMDA limits (Pure Residential Zone)",
    "Near International Airport",
    "Bangalore Highway facing property",
    "Well connected by MMTS and APSRTC",
    "Proposed Textile Park and Apparel Park nearby",
    "Proposed Golf Club and Aero Hub",
    "Close to Symbiosis International University",
    "Near TATA Institute of Social Sciences (TISS)",
    "Nearby shopping malls and star hotels",
    "Close to golf courses, clubs, and resorts",
    "9 engineering colleges in the vicinity",
    "2 medical colleges nearby",
    "Government degree colleges close by",
    "Many residential schools nearby",
    "Planned recreational projects in the area",
    "Close to industrial estates",
    "Proposed super speciality hospitals at Mamidipally",
    "Proposed IT Park at Elkatta",
    "SONY Electronics Park nearby",
    "Proposed government townships around ORR",
    "Surrounded by mega townships like DLF, My Home, and AP Housing Board",
    "Adani Connex Data Centers nearby",
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
