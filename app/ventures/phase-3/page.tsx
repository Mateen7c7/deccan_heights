import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { phase123Data } from "@/data/plots";

export const metadata: Metadata = {
  title: "Phase 1, 2 & 3 - Deccan Heights",
  description:
    "Premium residential plots in Shadnagar. 100 sq.yd plots starting at ₹10L.",
};

export default function Phase3Page() {
  return <VenturePageTemplate data={phase123Data} />;
}
