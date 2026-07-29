import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { phase4Data } from "@/data/plots";

export const metadata: Metadata = {
  title: "Phase 4 Farm Plots",
  description:
    "Premium farm plots in Shadnagar. 121 sq.yd plots starting at ₹7.8L. Experience peaceful farm life with great connectivity and security.",
  alternates: {
    canonical: "/ventures/phase-4",
  },
};

export default function Phase4Page() {
  return <VenturePageTemplate data={phase4Data} />;
}
