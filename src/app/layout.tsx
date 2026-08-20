import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const label = JetBrains_Mono({
  variable: "--font-label",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NASA Space Apps Challenge Ogbomoso",
  description:
    "Bringing Global Innovation to Ogbomoso, a two-day local NASA Space Apps hackathon for software, AI, data, hardware, design, science and entrepreneurship talent.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${label.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
