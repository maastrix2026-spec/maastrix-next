import { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogListMatrix from "@/components/blog/BlogListMatrix";

// Production SEO Metadata Configuration for the Blog Feed
export const metadata: Metadata = {
  title: "Insights, Engineering Tutorials & Tech Trends | Maastrix Solutions",
  description: "Explore the Maastrix Solutions engineering journal. Deep dives into high-concurrency Node.js backend architecture, React Native mobile optimization, AI automation pipelines, and custom enterprise web development.",
  keywords: [
    "Maastrix Solutions Blog",
    "Software Engineering Insights",
    "Node.js Backend Tutorials",
    "React Native Performance Optimization",
    "Enterprise Software Trends"
  ],
  alternates: {
    canonical: "https://maastrixsolutions.com/blog",
  },
  openGraph: {
    title: "Insights, Engineering Tutorials & Tech Trends | Maastrix Solutions",
    description: "Deep dives into high-concurrency Node.js backend architecture, React Native optimization, and enterprise web development.",
    url: "https://maastrixsolutions.com/blog",
    siteName: "Maastrix Solutions",
    images: [
      {
        url: "https://maastrixsolutions.com/og", // Replace with your actual blog banner image asset
        width: 1200,
        height: 630,
        alt: "Maastrix Solutions Technical Engineering Journal Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights, Engineering Tutorials & Tech Trends | Maastrix Solutions",
    description: "Explore deep dives into custom software engineering, scalable backend setups, and AI application breakthroughs.",
    images: ["https://maastrixsolutions.com/og"],
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogListMatrix />
    </main>
  );
}