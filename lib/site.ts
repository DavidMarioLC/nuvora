const configuredUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const siteUrl = configuredUrl ? new URL(configuredUrl) : undefined;

if (siteUrl && !["https:", "http:"].includes(siteUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}

export const isIndexable =
  Boolean(siteUrl) &&
  process.env.NODE_ENV === "production" &&
  process.env.VERCEL_ENV !== "preview";

export const siteTitle = "Nuvora — SaaS Landing Page | Portfolio Demo";
export const siteDescription =
  "A responsive marketing SaaS landing page built with Next.js. A fictional brand and practice project showcasing UI design, accessibility, and frontend development.";
