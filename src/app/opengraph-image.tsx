import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated brand graphic, not a real photo — no licensed photography is
 * confirmed yet (Section 6: no AI-generated "our facility" fakes either).
 * Solid brand color + wordmark is an honest placeholder.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#1B4D3E",
          color: "#FFFFFF",
          fontSize: 72,
          fontWeight: 600,
        }}
      >
        <div>{company.brandName}</div>
        <div style={{ fontSize: 32, fontWeight: 400, opacity: 0.85, marginTop: 16 }}>
          Fertilizer Trading
        </div>
      </div>
    ),
    { ...size }
  );
}
