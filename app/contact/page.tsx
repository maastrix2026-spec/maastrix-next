import { Metadata } from "next";
import CompanyMap from "@/components/contact/CompanyMap";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import React from "react";

// Production SEO Metadata Configuration for the Contact Page
export const metadata: Metadata = {
  title: "Contact Us | Connect with IT & Software Experts | Maastrix Solutions",
  description: "Get in touch with the Maastrix Solutions engineering team. Partner with us for high-concurrency Node.js systems, custom React Native mobile applications, and enterprise IT consulting.",
  keywords: [
    "Contact Maastrix Solutions",
    "Hire Software Engineers",
    "Enterprise IT Consultation",
    "Custom Software Engineering Quote",
    "Software Development Inquiry"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us | Connect with IT & Software Experts | Maastrix Solutions",
    description: "Ready to scale your digital architecture? Contact our systems architects and development specialists to discuss your custom project needs today.",
    url: "https://maastrixsolutions.com/contact",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og", // Replace with an asset showcasing your global communication lines
        width: 1200,
        height: 630,
        alt: "Maastrix Solutions Consultation and Project Intake Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Maastrix Solutions | Enterprise IT & Engineering",
    description: "Reach out to discuss robust custom software execution, scalable cloud backends, and full-scale product builds.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function ContactLayoutPage() {
  return (
    <main>
      <ContactHero />
      <ContactSection />
      <CompanyMap />
    </main>
  );
}