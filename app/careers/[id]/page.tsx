import { Metadata } from "next";
import { openPositions } from "@/data/careers";
import { notFound } from "next/navigation";
import JobDetailClient from "./JobDetailPageClient";

interface Props {
  params: Promise<{ id: string }> | { id: string };
}

// 1. Dynamic Server-Side Meta Injection 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const job = openPositions.find((p) => p.id === resolvedParams.id);
  
  if (!job) {
    return { title: "Position Not Found | Maastrix Solutions" };
  }

  const pageTitle = `${job.title} (${job.experience} Exp) | Maastrix Solutions`;
  const pageDescription = job.description;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://maastrixsolutions.com/careers/${job.id}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://maastrixsolutions.com/careers/${job.id}`,
      siteName: "Maastrix Solutions",
      type: "article",
      images: [
        {
          url: "https://maastrixsolutions.com/og",
          width: 1200,
          height: 630,
          alt: `Maastrix Solutions Recruitment - ${job.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["https://maastrixsolutions.com/og"],
    },
  };
}

// 2. High-Performance Server-Side Rendering Engine
export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const job = openPositions.find((p) => p.id === resolvedParams.id);

  if (!job) {
    notFound();
  }

  // Injecting structured Job Posting Schema data directly for Google Jobs rich snippet indexers
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.longDescription,
    "datePosted": "2026-07-01", 
    "employmentType": job.type === "Remote" ? "FULL_TIME" : "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Maastrix Solutions",
      "sameAs": "https://maastrixsolutions.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
        "addressCountry": "IN"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": job.experience.includes("months") ? 6 : 60
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JobDetailClient activeJob={job} />
    </>
  );
}