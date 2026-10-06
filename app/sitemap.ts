import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Hash sections belong to the same page; only publish the canonical URL.
  return isIndexable && siteUrl
    ? [{ url: new URL("/", siteUrl).toString() }]
    : [];
}
