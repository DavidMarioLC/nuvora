import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  // Keep crawling possible so bots can read the noindex metadata on previews.
  return {
    rules: { allow: "/", userAgent: "*" },
    sitemap:
      isIndexable && siteUrl
        ? new URL("/sitemap.xml", siteUrl).toString()
        : undefined,
  };
}
