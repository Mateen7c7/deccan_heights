import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { balapurBandraData } from "@/data/plots";

export const metadata: Metadata = {
  title: "Balapur Bandra Gated Community Plots",
  description:
    "Luxurious gated community villas & residential plots at Mallapur, Near RGI Airport. Invest in Hyderabad's fastest-growing residential hub.",
  alternates: {
    canonical: "/ventures/balapur-bandra",
  },
};

export default function BalapurBandraPage() {
  return <VenturePageTemplate data={balapurBandraData} />;
}
