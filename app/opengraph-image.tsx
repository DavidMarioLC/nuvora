import { ImageResponse } from "next/og";

export const alt = "Nuvora — a marketing SaaS landing page portfolio demo";
export const contentType = "image/png";
export const size = { height: 630, width: 1200 };

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(120deg, #50059b, #6812ba)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>
        Nuvora
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          Marketing SaaS Landing Page
        </div>
        <div style={{ color: "#e4cdf8", display: "flex", fontSize: 28 }}>
          UI design · Accessibility · Next.js
        </div>
      </div>
      <div style={{ color: "#e4cdf8", display: "flex", fontSize: 24 }}>
        Portfolio demo / Fictional brand
      </div>
    </div>,
    size
  );
}
