import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const siteUrl = "https://www.devaansh.tech";
const previewImage = `${siteUrl}/images/headshot.jpeg`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Devaansh Sinha",
  url: siteUrl,
  jobTitle: "Software Engineer",
  alumniOf: "University of Wisconsin–Madison",
  sameAs: [
    "https://www.linkedin.com/in/devaanshsinha/",
    "https://github.com/devaanshsinha",
  ],
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Devaansh Sinha | Software Engineer",
  description:
    "Portfolio of Devaansh Sinha — Software Engineer at UW–Madison. Explore projects, experiences, and research.",
  keywords: [
    "Devaansh Sinha",
    "software engineer",
    "UW Madison",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Devaansh Sinha" }],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Devaansh Sinha | Software Engineer",
    description:
      "Explore projects and research by Devaansh Sinha, student at UW–Madison.",
    url: siteUrl,
    siteName: "Devaansh Sinha Portfolio",
    type: "website",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Devaansh Sinha portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devaansh Sinha | Software Engineer",
    description:
      "Portfolio showcasing work, research, and projects by Devaansh Sinha.",
    images: [previewImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/images/dicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: "/images/dicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  );
}
