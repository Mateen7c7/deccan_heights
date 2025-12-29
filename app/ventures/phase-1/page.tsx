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
    "Phase 5 offers an exclusive opportunity to own premium land in one of Hyderabad's fastest-growing corridors. Perfectly positioned for high appreciation, these plots are fully approved and ready for registration. With wide expansive roads and lush greenery, it provides the perfect canvas for your dream home or a secure investment portfolio.",
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
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3977.412537972301!2d78.06275!3d17.094694399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDA1JzQwLjkiTiA3OMKwMDMnNDUuOSJF!5e1!3m2!1sen!2sin!4v1767023319552!5m2!1sen!2sin",
};

export default function Phase1Page() {
  return <VenturePageTemplate data={phase1Data} />;
}
