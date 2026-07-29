import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deccanheights.com"),
  title: {
    default: "Deccan Heights | Premium Real Estate Agency & Open Plots in Hyderabad",
    template: "%s | Deccan Heights",
  },
  description:
    "Deccan Heights is a premier real estate developer and agency in Hyderabad, offering premium open plots, residential gated communities, and farm plots in Shadnagar, Balapur Bandra, and more.",
  keywords: [
    "Deccan Heights",
    "Real Estate Hyderabad",
    "Open Plots Shadnagar",
    "Residential Plots Hyderabad",
    "Balapur Bandra Plots",
    "Buy Land Hyderabad",
    "Plots near RGI Airport",
    "Gated Community Hyderabad",
  ],
  authors: [{ name: "Deccan Heights Team" }],
  creator: "Deccan Heights",
  publisher: "Deccan Heights",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deccanheights.com",
    title: "Deccan Heights | Premium Real Estate & Open Plots in Hyderabad",
    description:
      "Deccan Heights offers premium residential gated communities, open plots, and farm lands in prime Hyderabad locations like Shadnagar and Balapur Bandra.",
    siteName: "Deccan Heights",
    images: [
      {
        url: "/new_dh_logo_c.png",
        width: 1200,
        height: 630,
        alt: "Deccan Heights Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deccan Heights | Premium Real Estate & Open Plots in Hyderabad",
    description:
      "Deccan Heights offers premium residential gated communities, open plots, and farm lands in prime Hyderabad locations like Shadnagar and Balapur Bandra.",
    images: ["/new_dh_logo_c.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className=" min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Deccan Heights",
              "image": "https://deccanheights.com/new_dh_logo_c.png",
              "@id": "https://deccanheights.com/#organization",
              "url": "https://deccanheights.com",
              "telephone": "+918328120257",
              "email": "deccanheightsofficial@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Downtown Mall, Unit 4 & 5, Ground floor, Veer Nagar, Lakdikapul",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500004",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.4022,
                "longitude": 78.4616
              },
              "sameAs": [
                "https://www.facebook.com/deccanheights",
                "https://www.instagram.com/deccanheights",
                "https://www.linkedin.com/company/deccanheights"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
