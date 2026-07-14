import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { phase5Data } from "@/data/plots";

export const metadata: Metadata = {
  title: "Phase 5 - Deccan Heights",
  description:
    "Premium open plots in Shadnagar. 1200 Sq.ft plots starting at ₹25L+.",
};

export default function Phase1Page() {
  return <VenturePageTemplate data={phase5Data} />;
}
