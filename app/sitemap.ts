import type { MetadataRoute } from "next";
import { solutions, solutionHref } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://quantumbh.net";
  return [
    "",
    "/about",
    ...solutions.map((s) => solutionHref(s.slug)),
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority:
      path === "" ? 1 : path === "/about" || path === "/contact" ? 0.7 : 0.8,
  }));
}
