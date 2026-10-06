import type { Metadata } from "next";
import localFont from "next/font/local";
import { isIndexable, siteDescription, siteTitle, siteUrl } from "../lib/site";
import "./globals.css";

const geist = localFont({
  display: "swap",
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  alternates: siteUrl ? { canonical: new URL("/", siteUrl) } : undefined,
  description: siteDescription,
  icons: { icon: "/icon.svg" },
  metadataBase: siteUrl ?? new URL("http://localhost:3000"),
  openGraph: {
    description: siteDescription,
    locale: "en_US",
    siteName: "Nuvora Portfolio Demo",
    title: siteTitle,
    type: "website",
    url: siteUrl ? new URL("/", siteUrl) : undefined,
  },
  robots: { follow: true, index: isIndexable },
  title: siteTitle,
  twitter: {
    card: "summary_large_image",
    description: siteDescription,
    title: siteTitle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
