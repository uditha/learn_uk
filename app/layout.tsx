import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Regulatory Runway",
  description: "FRE1 in 90-second cards for UK financial regulation.",
  applicationName: "The Regulatory Runway",
  robots: { index: false, follow: false },
  appleWebApp: {
    capable: true,
    title: "Runway",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0C1524",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
