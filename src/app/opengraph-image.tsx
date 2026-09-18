import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05050A",
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(124,92,255,0.35), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 200,
            fontWeight: 700,
            color: "#F5F6F8",
            letterSpacing: -6,
          }}
        >
          TG<span style={{ color: "#39FF6A" }}>B</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 40,
            color: "#B9BAC6",
            letterSpacing: 2,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
