import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com/"),
  title: "Botir Khaltaev - Portfolio",
  description: "A portfolio website for Botir Khaltaev",
  generator: "Next.js",
  applicationName: "Portfolio template",
  keywords: [
    "Portfolio template",
    "React",
    "developer",
    "backend",
    "nextjs",
    "react",
    "rust",
    "typescript",
    "cplusplus",
    "tailwindcss",
    "java",
    "meta",
    "facebook",
    "backend developer",
    "backend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "software developer portfolio",
    "backend engineer portfolio",
  ],
  colorScheme: "dark",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  );
}
