import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathkathaaa | Interactive Math Classes & Workshops for Kids",
  description:
    "Book free math classes and workshops for children with Mathkathaaa. Ignite curiosity, improve problem-solving skills, and make math fun for kids of all ages.",
  keywords: [
    "Math classes for kids",
    "Math workshops",
    "Free math class",
    "Mathkathaaa",
    "Kids learning",
    "STEM education",
    "Math courses online",
    "Math enrichment program",
  ],
  authors: [{ name: "Mathkathaaa", url: "https://www.mathkathaaa.com" }],
  openGraph: {
    title: "Mathkathaaa | Interactive Math Classes & Workshops for Kids",
    description:
      "Book free math classes and workshops for children with Mathkathaaa. Ignite curiosity, improve problem-solving skills, and make math fun for kids of all ages.",
    url: "https://www.mathkathaaa.com",
    siteName: "Mathkathaaa",
    images: [
      {
        url: "https://www.mathkathaaa.com/og-image.png", // replace with your social sharing image
        width: 1200,
        height: 630,
        alt: "Mathkathaaa - Fun Math Classes for Kids",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathkathaaa | Interactive Math Classes & Workshops for Kids",
    description:
      "Book free math classes and workshops for children with Mathkathaaa. Ignite curiosity, improve problem-solving skills, and make math fun for kids of all ages.",
    images: ["https://www.mathkathaaa.com/og-image.png"], // replace with your social sharing image
    site: "@Mathkathaaa", // optional: your twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
