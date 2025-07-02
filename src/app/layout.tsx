import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import MacDesktop from "@/components/MacDesktop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devaansh's Portfolio",
  description: "Computer Science student portfolio with macOS-inspired design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <MacDesktop />
        <MenuBar />
        <main className="pt-7 pb-24 relative z-10">
          {children}
        </main>
        <Dock />
      </body>
    </html>
  );
}
