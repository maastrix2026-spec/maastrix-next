import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CompanyProfile from "@/components/CompanyProfile";
import ClientSlider from "@/components/shared/ClientSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudyJournal from "@/components/CaseStudyJournal";
import ProjectCTA from "@/components/ProjectCTA";

// Core SEO Metadata Configuration 
export const metadata: Metadata = {
  title: "Enterprise Systems Architecture & AI Engineering | YourCompany",
  description: "We engineer high-performance Node.js backends, intelligent machine learning automation pipelines, and robust cross-platform mobile systems built to scale.",
  keywords: [
    "Backend Software Development",
    "Node.js Systems Architect",
    "Enterprise AI Integration",
    "React Native Mobile Applications",
    "Custom CMS Solutions",
    "SEO optimisation",
    "Web Development"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com", 
  },
  openGraph: {
    title: "Enterprise Systems Architecture & AI Engineering",
    description: "Production-grade backend engineering, robust infrastructure setups, and intelligent workflow automation loops.",
    url: "https://maastrixsolutions.com",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og", 
        width: 1200,
        height: 630,
        alt: "Maastrix Executive Engineering Technical Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Systems Architecture & AI Engineering",
    description: "Production-grade backend engineering and intelligent workflow automation loops.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyProfile />
      <WhyChooseUs />
      <ProjectCTA />
      <CaseStudyJournal />
      <ClientSlider />
    </main>
  );
}