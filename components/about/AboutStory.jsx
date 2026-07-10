"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutStory() {
  const highlights = [
    "Turning complex operational bottlenecks into highly scalable architectures.",
    "Engineering robust web applications and cross-platform mobile portals.",
    "Pushing performance, custom API security, and reliability to their absolute limits."
  ];

  return (
    <section className="relative bg-white text-slate-900 font-sans py-12 lg:pt-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: HIGH-IMPACT CORPORATE IMAGE */}
          <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/assets/images/about.jpg" 
              alt="Maastrix Solutions Engineering Team"
              fill
              sizes="(max-w-1024px) 100vw, 45vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            {/* Ambient Accent Dot Element */}
            <div className="absolute bottom-6 left-6 z-20 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hidden sm:flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">Est. 2004</span>
            </div>
          </div>

          {/* RIGHT COLUMN: BRAND STORY CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Our Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                From Core Foundations to Global Web Reality.
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Maastrix Solutions was founded to move beyond the limitations of pre-packaged software, focusing instead on engineering systems built for true operational scale. We partner with organizations to bypass generic solutions and instead develop high-performance applications designed to handle demanding traffic and complex data requirements with ease.
              </p>
              <p>
                Today, we function as a collaborative global team of expert architects, engineers, and developers stationed across the US, UK, Canada, and beyond. This distributed approach allows us to maintain exceptional code quality and deployment velocity, ensuring our partners receive stable, future-proof software that drives measurable business outcomes.
              </p>
            </div>

            {/* DYNAMIC CHECKLIST MATRIX */}
            <ul className="space-y-3.5 pt-2">
              {highlights.map((text, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3.5 group cursor-default"
                >
                  <div className="mt-0.5 text-slate-950 transition-colors duration-300 group-hover:text-blue-600 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 fill-current text-slate-950 group-hover:text-blue-600 transition-colors duration-300 stroke-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 transition-colors duration-200 group-hover:text-slate-950">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* INTERACTIVE CALL-TO-ACTION LINK */}
            {/* <div className="pt-4">
              <a 
                href=""
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-950 uppercase tracking-wider group hover:text-blue-600 transition-colors duration-300"
              >
                Explore Our System Portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}