import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Regulatory Runway",
  description: "FRE1 in 90-second cards for UK financial regulation.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
