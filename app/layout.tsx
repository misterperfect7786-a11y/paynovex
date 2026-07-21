import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PAYNOVEX | Enterprise FinTech Company India",
  description:
    "PAYNOVEX powers India’s next generation of digital payments with secure APIs, white-label fintech solutions, recharge services, travel booking, and enterprise payment gateway infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
