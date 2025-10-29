import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./styles.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Modern Navigation",
  description: "Work-in-progress modern interface for Devaansh Sinha.",
};

export default function ModernLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`modern-root ${display.variable} ${body.variable}`}>
      <main className="modern-shell">{children}</main>
    </div>
  );
}
