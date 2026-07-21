import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sala Polivalentă București — Arenă Națională";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(60% 60% at 20% 10%, rgba(255,46,67,0.35), transparent 60%), radial-gradient(60% 60% at 90% 30%, rgba(46,107,255,0.35), transparent 60%), #060912",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8b98b6",
            marginBottom: 16,
          }}
        >
          Complex Sportiv Național · București
        </div>
        <div style={{ fontSize: 116, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
          SALA
        </div>
        <div
          style={{
            fontSize: 116,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -4,
            background: "linear-gradient(100deg, #ff5c6c, #ffffff, #6089ff)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          POLIVALENTĂ
        </div>
        <div style={{ fontSize: 30, color: "#c7d0e4", marginTop: 30 }}>
          5.300 de locuri · din 1974 · arena Capitalei
        </div>
      </div>
    ),
    size
  );
}
