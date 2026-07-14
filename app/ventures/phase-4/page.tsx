import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { phase4Data } from "@/data/plots";

export const metadata: Metadata = {
  title: "Phase 4 - Deccan Heights",
  description:
    "Premium farm plots in Shadnagar. 121 sq.yd plots starting at ₹7.8L.",
};

export default function Phase4Page() {
  return <VenturePageTemplate data={phase4Data} />;
}
