import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phase 5 Layout Map",
  description:
    "View the detailed layout map and location details for Deccan Heights Phase 5 premium residential plots.",
  alternates: {
    canonical: "/maps/phase5",
  },
};

export default function Phase5Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
