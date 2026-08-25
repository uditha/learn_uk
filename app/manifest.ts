import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Regulatory Runway",
    short_name: "Runway",
    description: "FRE1 in 90-second cards for UK financial regulation.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0C1524",
    theme_color: "#0C1524",
    lang: "en-GB",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
