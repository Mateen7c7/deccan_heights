import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { phase2Data } from "@/data/plots";

export const metadata: Metadata = {
  title: "Phase II - Deccan Heights",
  description:
    "Luxury gated community plots in Shadnagar. 1500 Sq.ft plots starting at ₹35L+.",
};

export default function Phase2Page() {
  return <VenturePageTemplate data={phase2Data} />;
}
