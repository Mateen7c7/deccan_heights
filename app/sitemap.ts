import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deccanheights.com";
  const routes = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/services",
    "/team",
    "/ventures",
    "/ventures/balapur-bandra",
    "/ventures/phase-1",
    "/ventures/phase-3",
    "/ventures/phase-4",
    "/maps/phase5",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));
}
