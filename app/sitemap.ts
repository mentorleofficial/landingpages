import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mentorle.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/become-mentor",
    "/events",
    "/resources",
    "/university",
    "/about",
    "/community",
    "/pricing",
    "/plus",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
