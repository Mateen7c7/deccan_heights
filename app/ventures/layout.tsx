import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Ventures",
  description:
    "Browse Deccan Heights' current and completed real estate plot ventures, residential lands, and farm plots in Hyderabad.",
  alternates: {
    canonical: "/ventures",
  },
};

export default function VenturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
