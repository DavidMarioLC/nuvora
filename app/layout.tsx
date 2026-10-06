import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  display: "swap",
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  description:
    "Smarter marketing, connected teams, and meaningful growth. Discover Vehtvz, your all-in-one workspace for the next chapter of your business.",
  icons: { icon: "/icon.svg" },
  title: "Vehtvz — Grow Faster with Expert Marketing Solutions",
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
