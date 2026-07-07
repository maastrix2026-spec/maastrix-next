import { Metadata } from "next";
import QuoteForm from "@/components/getaQuote/QuoteForm";
import QuoteHero from "@/components/getaQuote/QuoteHero";
import React from "react";

// Production SEO Metadata Configuration for the Get a Quote/Project Scoping Page
export const metadata: Metadata = {
  title: "Request a Quote | Custom Software & Systems Estimation | Maastrix Solutions",
  description: "Request a detailed project estimation from Maastrix Solutions. Share your requirements for custom Node.js backend infrastructure, React Native mobile apps, or enterprise web platforms, and get a technical scoping proposal.",
  keywords: [
    "Request Software Development Quote",
    "IT Project Estimation",
    "Software Engineering Proposal",
    "Hire Backend Developers",
    "App Development Cost Estimate"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com/get-a-quote", // Match this exactly to your actual folder path string
  },
  openGraph: {
    title: "Request a Quote | Custom Software & Systems Estimation | Maastrix Solutions",
    description: "Submit your project scope to our systems engineering team. Receive a precise architectural layout and delivery cost breakdown tailored to your enterprise requirements.",
    url: "https://maastrixsolutions.com/get-a-quote",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og", // Replace with an analytical project-blueprint or cost-scoping graphic asset
        width: 1200,
        height: 630,
        alt: "Maastrix Solutions Project Architecture and Scoping Strategy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Custom Software Engineering Quote | Maastrix Solutions",
    description: "Ready to build? Get a comprehensive technical project estimation and delivery timeline from our engineering leads.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function GetAQuoteLayoutPage() {
  return (
    <main>
      <QuoteHero />
      <QuoteForm />
    </main>
  );
}