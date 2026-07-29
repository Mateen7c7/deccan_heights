import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { phase123Data } from "@/data/plots";

export const metadata: Metadata = {
  title: "Phase 1, 2 & 3 Completed Plots",
  description:
    "Premium completed residential plots in Shadnagar. 100 sq.yd plots starting at ₹10L. Secure your investment in a fully developed community.",
  alternates: {
    canonical: "/ventures/phase-3",
  },
};

export default function Phase3Page() {
  return <VenturePageTemplate data={phase123Data} />;
}
