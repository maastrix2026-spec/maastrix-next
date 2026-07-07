import { Metadata } from "next";
import ServiceGridSection from "@/components/services/ServiceGridSection";
import ServiceHero from "@/components/services/ServiceHero";
import TechStackSlider from "@/components/TechStackSlider";
import React from "react";

// Production SEO Metadata Configuration for the Services Page
export const metadata: Metadata = {
  title: "Enterprise Software Engineering & IT Solutions | Maastrix Solutions",
  description: "Explore our end-to-end software engineering capabilities. We deliver production-grade Node.js backend infrastructure, cross-platform React Native mobile applications, tailored CMS ecosystems, and custom artificial intelligence pipelines.",
  keywords: [
    "Enterprise Software Solutions",
    "Node.js Backend Engineering",
    "React Native App Development",
    "Custom CMS & Portal Development",
    "AI & Automation Integration"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com/services",
  },
  openGraph: {
    title: "Enterprise Software Engineering & IT Solutions | Maastrix Solutions",
    description: "Production-grade custom backends, fluid mobile application systems, scalable CMS engineering, and intelligent AI automation pipelines built to scale globally.",
    url: "https://maastrixsolutions.com/services",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og",
        width: 1200,
        height: 630,
        alt: "Maastrix Solutions Core Enterprise Development Capabilities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise IT Services & Application Engineering | Maastrix Solutions",
    description: "Discover our full operational stack—from resilient database architectures to robust cross-platform mobile frameworks.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function ServicesLayoutPage() {
  return (
    <main>
      <ServiceHero />
      <ServiceGridSection />
      <TechStackSlider />
    </main>
  );
}