import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutProcess from "@/components/about/AboutProcess";
import AboutStory from "@/components/about/AboutStory";
import AboutTestimonials from "@/components/about/AboutTestimonal";
import OurTeamSection from "@/components/about/OurTeamSection";
import CaseStudyJournal from "@/components/CaseStudyJournal";

// Comprehensive SEO Metadata Configuration
export const metadata: Metadata = {
  title: "About Maastrix Solutions | Enterprise Web & IT Engineering Leader",
  description: "Founded in 2004, Maastrix Solutions delivers premier tailor-made web design, secure backend infrastructures, high-concurrency mobile apps, and E2E IT portal engineering globally.",
  keywords: [
    "Maastrix Solutions", 
    "Enterprise Web Development", 
    "Backend Infrastructure Engineering", 
    "Custom IT Portal Solutions",
    "React Native App Development"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com/about", // Replace with your production domain
  },
  openGraph: {
    title: "About Maastrix Solutions | Enterprise Web & IT Engineering Leader",
    description: "Delivering premier tailor-made software architecture, robust backend security layering, and advanced workflow automation pipelines globally.",
    url: "https://maastrixsolutions.com/about",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og", // Replace with your actual asset link
        width: 1200,
        height: 630,
        alt: "Maastrix Solutions Executive Leadership and Engineering Team",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Maastrix Solutions | Enterprise IT Engineering",
    description: "Delivering premier custom web design, secure backend architectures, and enterprise portal systems globally.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutProcess />
      <AboutStory />
      <OurTeamSection />
      <CaseStudyJournal />
      <AboutTestimonials />
    </main>
  );
}