"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  ShoppingBag,
  Laptop,
  Search,
  BrainCircuit,
  Smartphone,
  Award,
  Layers
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

export default function ServiceGridSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Structural Lucide Icon Resolver
  const resolveIcon = (name: ServiceItem["iconName"]) => {
    const props = { className: "h-4 w-4 transition-transform duration-300 group-hover:scale-110" };
    switch (name) {
      case "brain": return <BrainCircuit {...props} />;
      case "smartphone": return <Smartphone {...props} />;
      case "code": return <Code2 {...props} />;
      case "commerce": return <ShoppingBag {...props} />;
      case "wad": return <Laptop {...props} />;
      default: return <Search {...props} />;
    }
  };

  return (
    <section id="services-list" className="relative bg-white text-slate-900 font-sans py-24 overflow-hidden">

      {/* =========================================================================
          PREMIUM PARALLAX DECORATIVE ACCENTS
          ========================================================================= */}
      <div
        className="absolute top-[12%] left-[-8%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 blur-[120px] pointer-events-none will-change-transform"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      />

      {/* Clean Geometric Grid Dot Accent */}
      <div
        className="absolute top-[20%] right-12 grid grid-cols-4 gap-2.5 opacity-20 pointer-events-none will-change-transform hidden lg:grid"
        style={{ transform: `translateY(${-offsetY * 0.06}px)` }}
      >
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-950" />
        ))}
      </div>

      {/* =========================================================================
          SECTION 1: 22-YEAR CORPORATION LEGACY BRIEFING
          ========================================================================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80">
              <Award className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                22 Years of Turning Code into Competitive Advantage
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Engineered Software Solutions <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Driven by Elite Technical Teams.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
              For 22 years, our elite development squads have helped enterprises launch, scale, and secure digital products at speed. We architect resilient backends, pixel-perfect cross-platform frontends, and custom enterprise systems that perform flawlessly under global traffic — from day one.
            </p>

            {/* Quick Micro Capabilities Highlights */}
            <div className="grid grid-cols-2 gap-4 max-w-lg pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="text-sm font-black text-slate-950">Expertise-Led Squads</h4>
                <p className="text-sm text-slate-500 mt-1">Vetted backend, front-end, and mobile developers with automation.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                <h4 className="text-sm font-black text-slate-950">Predictable Velocity</h4>
                <p className="text-sm text-slate-500 mt-1">High-end architecture delivered on strict sprint cycles.</p>
              </div>
            </div>
          </div>

          {/* Premium Framed Showcase Media Component */}
          <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 p-3 shadow-md group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/services/service-hero2.avif"
                alt="Corporate engineering and systems workspace operations"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 2: SOLUTIONS CAPABILITIES GRID MATRIX (Fetched from Data Folder)
          ========================================================================= */}
      <div className="bg-gradient-to-b from-slate-50/60 to-white border-t border-slate-200/50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <Layers className="h-3.5 w-3.5 text-slate-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                Capabilities Catalogue
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
              Solutions Configured for Enterprise Growth
            </h3>
            <p className="text-sm sm:text-sm text-slate-700 font-medium leading-relaxed">
              Select an engineering track to map our system capabilities directly against your complex business prerequisites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service: ServiceItem, idx: number) => (
              <div
                key={`${service.id}-${idx}`}
                className="group bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col sm:flex-row gap-6 items-stretch transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg"
              >
                {/* Responsive Fixed Image Layer */}
                <div className="relative w-full sm:w-48 h-44 sm:h-auto rounded-xl overflow-hidden bg-slate-50 border border-slate-100/80 shrink-0">
                  <Image
                    src={service.imgSrc}
                    alt={`${service.title} execution deployment model`}
                    fill
                    sizes="(max-w-640px) 100vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Premium Subtle Ambient Inner Card Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Processing Matrix Block */}
                {/* Content Processing Matrix Block */}
                <div className="flex flex-col justify-between flex-1 py-1.5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100/50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {resolveIcon(service.iconName)}
                      </div>
                      <h4 className="text-lg font-black tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors duration-200">
                        {service.title}
                      </h4>
                    </div>

                    {/* REMOVED line-clamp-3 HERE */}
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {service.description}
                    </p>

                    {/* INTERACTIVE KEYWORDS ROW */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.keywords?.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] font-bold uppercase tracking-wider  group-hover:bg-blue-50 group-hover:border-blue-200 text-blue-700 transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}