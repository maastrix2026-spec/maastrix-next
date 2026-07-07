import { Metadata } from "next";
import CareersPage from "@/components/careers/CareersPage";
import React from "react";

// Production SEO Metadata Configuration for the Careers Page
export const metadata: Metadata = {
  title: "Join the Team | Careers & Engineering Opportunities | Maastrix Solutions",
  description: "Build the future of digital infrastructure with Maastrix Solutions. Explore open positions in high-concurrency Node.js backend development, mobile application engineering, frontend systems, and AI integration.",
  keywords: [
    "Maastrix Solutions Careers",
    "Software Engineer Jobs",
    "Node.js Developer Openings",
    "React Native Mobile Jobs",
    "Tech Career Opportunities"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com/careers",
  },
  openGraph: {
    title: "Join the Team | Careers & Engineering Opportunities | Maastrix Solutions",
    description: "Grow your software engineering career with a fast-growing, highly effective product development team building global enterprise systems.",
    url: "https://maastrixsolutions.com/careers",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og",
        width: 1200,
        height: 630,
        alt: "Maastrix Solutions Technical Engineering Workspace & Culture Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Maastrix Solutions | Software Engineering Openings",
    description: "Looking for your next challenge? We are hiring backend architects, mobile developers, and enterprise system designers.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function CareersLayoutPage() {
  return (
    <main>
      <CareersPage />
    </main>
  );
}