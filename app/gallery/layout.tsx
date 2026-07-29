import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the landscape and development progress of Deccan Heights' premium residential plot ventures.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
