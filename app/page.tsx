import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CompanyProfile from "@/components/CompanyProfile";
import ClientSlider from "@/components/shared/ClientSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudyJournal from "@/components/CaseStudyJournal";
import ProjectCTA from "@/components/ProjectCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Core SEO Metadata Configuration 
export const metadata: Metadata = {
  title: "Maastrix Solution | Enterprise Systems Architecture & AI Engineering ",
  description: "We engineer high-performance backends, intelligent machine learning automation pipelines, and robust cross-platform mobile systems built to scale.",
  keywords: [
    "Software Development",
    "Enterprise AI Integration",
    "AI application development",
    "Mobile Applications",
    "Custom CMS Solutions",
    "SEO optimisation",
    "IT infrastructure",
    "Web Development",
    "Mobile Application Development",
    "custom website development company in the USA",
    "ecommerce website development agency in the UK",
    "mobile app development services in the UK",
    "professional digital marketing company in Bhubaneswar",
    "local SEO services in India for service-based businesses",
    "responsive web design agency in the UK",
    "custom web application development services in the USA",
    "cross-platform mobile app developers in India",
    "UI/UX design services in the USA for mobile apps",
    "CMS website development company in India",
    "best SEO service provider for small businesses",
    "ecommerce website development in India for UK-based brands",
    "best ecommerce development company in India with global reach",
    "iOS app design and development for USA businesses"
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
      <Navbar isTransparent={true} />
      <HeroSection />
      <CompanyProfile />
      <WhyChooseUs />
      <ProjectCTA />
      <CaseStudyJournal />
      <ClientSlider />
      <Footer/>
    </main>
  );
}