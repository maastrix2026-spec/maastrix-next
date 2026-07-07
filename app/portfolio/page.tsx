import { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcases";
import TechStackSlider from "@/components/TechStackSlider";
import React from "react";

// Production SEO Metadata Configuration for the Portfolio Hub
export const metadata: Metadata = {
  title: "Our Work & Case Studies | Enterprise Project Showcase | Maastrix Solutions",
  description: "Explore the Maastrix Solutions portfolio of production-grade software engineering. Discover how we deliver high-concurrency custom web applications, advanced cross-platform mobile frameworks, secure e-commerce portals, and enterprise-scale digital infrastructure.",
  keywords: [
    "Software Engineering Portfolio",
    "Web Application Case Studies",
    "Maastrix Solutions Projects",
    "Enterprise Software Showcases",
    "React Native Development Examples"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com/portfolio",
  },
  openGraph: {
    title: "Our Work & Case Studies | Enterprise Project Showcase | Maastrix Solutions",
    description: "Browse our global track record of custom software architecture, robust mobile app deployments, and high-performance engineering breakthroughs.",
    url: "https://maastrixsolutions.com/portfolio",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og", // Replace with a curated grid overlay of your best project screens
        width: 1200,
        height: 630,
        alt: "Maastrix Solutions Enterprise Development Portfolio Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Project Showcase & Engineering Work | Maastrix Solutions",
    description: "Real-world case studies detailing our deployment of secure web apps, custom API architectures, and scaled digital products.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function PortfolioLayoutPage() {
  return (
    <main>
      <PortfolioHero />
      <PortfolioShowcase />
      <TechStackSlider />
    </main>
  );
}