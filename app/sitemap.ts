import type { MetadataRoute } from "next";

const baseUrl = "https://homeloanagents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-27");
  const paths = [
    "",
    "/contact",
    "/get-started",
    "/quote",
    "/pricing",
    "/how-it-works",
    "/licensing",
    "/privacy",
    "/terms",
    "/sms-terms",
    "/learn",
    "/calculators",
    "/buy",
    "/refinance",
    "/why-homeloanagents",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}