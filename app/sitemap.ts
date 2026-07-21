import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/despre",
    "/program",
    "/galerie",
    "/informare-publica",
    "/contact",
    "/termeni-si-conditii",
    "/confidentialitate",
    "/cookies",
    "/gdpr",
  ];
  const lastModified = new Date("2026-07-21");
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/program" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/informare-publica" || path === "/program" ? 0.8 : 0.6,
  }));
}
