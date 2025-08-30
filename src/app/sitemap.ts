import type { MetadataRoute } from "next";
import portofolioList from "@/data/portofolio.json";

const SITE_URL = process.env.SITE_URL ?? "https://dytama.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/about/aditya-septama`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/portfolio` as const,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...portofolioList.map((item) => ({
      url: `${SITE_URL}/portofolio/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
