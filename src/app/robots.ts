import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/rank",
    },
    sitemap: "https://livegizzrankings.com/sitemap.xml",
  };
}
