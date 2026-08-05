"use client";

import React from "react";
import Image from "next/image";
import { CheckCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const AnimatedGridPattern = dynamic(
  () => import("@/components/ui/animated-grid-pattern").then((mod) => mod.AnimatedGridPattern),
  { ssr: false }
);

export default function CompanyProfile() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-white text-slate-900 font-sans overflow-hidden"
    >
      {/* Animated Grid Pattern Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <AnimatedGridPattern
          numSquares={70}
          maxOpacity={0.01}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(700px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full skew-y-12"
          )}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        {/* 1. REMOVED lg:items-start so both columns stretch to equal height */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Left Column: Copywriting & Value Propositions */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
              Company Profile
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Who We Are
            </h2>

            <p className="mt-4 text-base sm:text-lg italic text-slate-600 leading-relaxed">
              Maastrix Solutions is an Enterprise AI and Digital Transformation
              company helping organizations harness the power of intelligent
              technology to innovate, automate, and grow. We specialize in
              Artificial Intelligence, Intelligent Automation, Enterprise
              Software Development, SaaS Platforms, Cloud Engineering, and
              Digital Experience Solutions.
            </p>

            <ul className="mt-8 space-y-4 text-sm sm:text-base text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-blue-500">
                  <CheckCheck className="w-5 h-5" />
                </span>
                <span>
                  We partner with startups, SMEs, enterprises, and government
                  organizations to modernize business operations through secure,
                  scalable, and future-ready technology. Our solutions
                  streamline workflows, automate complex processes, improve
                  operational efficiency, and accelerate digital transformation.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 text-blue-500">
                  <CheckCheck className="w-5 h-5" />
                </span>
                <span>
                  Our multidisciplinary team of AI engineers, solution
                  architects, UX/UI designers, cloud specialists, and full-stack
                  developers combines deep technical expertise with strategic
                  business insight to build high-performance digital products
                  tailored to each client&apos;s unique objectives.
                </span>
              </li>
            </ul>

            <p className="mt-8 text-sm sm:text-base text-slate-700 leading-relaxed">
              Whether developing AI-powered business applications, enterprise
              SaaS platforms, intelligent automation systems, cloud-native
              solutions, or modern web and mobile applications, our focus
              remains the same—delivering innovative technology that creates
              measurable business value, enhances customer experiences, and
              supports long-term growth.
            </p>
          </div>

          {/* 2. UPDATED WRAPPER: Added lg:h-full so it matches the text height on desktop */}
          <div className="relative overflow-hidden rounded-lg shadow-xl w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px]">
            {/* 3. UPDATED IMAGE: Used `fill` and `object-cover` instead of hardcoded sizes */}
            <Image
              src="/assets/images/about.jpg"
              alt="About Maastrix Solutions"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}