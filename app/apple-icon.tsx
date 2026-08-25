import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0C1524",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F0ECDF",
          fontSize: 54,
          fontFamily: "Georgia, serif",
          letterSpacing: "-1px",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 66,
            border: "4px solid #C8A63E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          FR
        </div>
      </div>
    ),
    size
  );
}
