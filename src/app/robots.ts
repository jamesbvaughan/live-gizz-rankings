import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/rank", "/votes", "/users"],
    },
    sitemap: "https://livegizzrankings.com/sitemap.xml",
  };
}
