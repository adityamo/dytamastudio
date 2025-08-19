import type { MetadataRoute } from "next";

const SITE_URL = process.env.SITE_URL ?? "https://dytama.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
