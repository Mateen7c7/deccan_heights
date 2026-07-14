import React from "react";
import VenturePageTemplate from "../../../components/VenturePageTemplate";
import { Metadata } from "next";
import { balapurBandraData } from "@/data/plots";

export const metadata: Metadata = {
  title: "Balapur Bandra - Deccan Heights",
  description:
    "Luxurious gated community villas & residential plots at Mallapur, Near RGI Airport.",
};

export default function BalapurBandraPage() {
  return <VenturePageTemplate data={balapurBandraData} />;
}
