import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

// Choose a single premium font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MUJ Toppers",
  description:
    "MUJ toppers is built to make your college life easier—Access, PYQs, toppers' notes, study tips, food delivery, and cab booking all in one place, powered by a passionate mix who have been through it. We ensure you have everything you need to excel—both inside and outside the classroom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-200/50`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
