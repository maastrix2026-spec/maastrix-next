"use client";

import React from "react";
import Image from "next/image";
import { Play, Sparkles, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const InteractiveGridPattern = dynamic(
  () => import("@/components/ui/interactive-grid-pattern").then((mod) => mod.InteractiveGridPattern),
  { ssr: false }
);

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-[#0d0f12] text-white font-sans overflow-hidden pt-30 pb-20 lg:pt-32 lg:pb-28">

      {/* PURE PARALLAX LAYER ENGINE */}
      <div className="absolute top-[-10%] right-[-10%] w-200 h-200 bg-linear-to-bl from-blue-600/10 via-transparent to-transparent rounded-full blur-[140px] opacity-70 bg-fixed pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-15%] w-180 h-180 bg-linear-to-tr from-white/5 via-transparent to-transparent rounded-full blur-[120px] opacity-40 bg-fixed pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-auto">
        <InteractiveGridPattern
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>

      {/* Decorative Blueprint Matrix Overlay Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none z-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">

        {/* TOP BLOCK: TYPOGRAPHY HEADER MATCHING WORLD-CLASS ENTERPRISE THEMES */}
        <div className="max-w-5xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Global IT &amp; Web Solutions Leader</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.15]">
            Empowering Global Enterprises Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">2004</span> With Cutting-Edge Engineering.
          </h1>
        </div>

        {/* BOTTOM BLOCK: THREE-COLUMN OFFSET LAYOUT FORMULATION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">

          {/* Card 1: Left Contextual Image Frame */}
          <div className="md:col-span-4 group relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/10">
              <Image
                src="/assets/images/about/quad1.jpg"
                alt="Maastrix Agile Engineering Workspace"
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/70 via-transparent to-transparent" />

              {/* Dynamic Overlay Floating Metadata tag */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl">
                <p className="text-[11px] font-bold tracking-wider text-blue-400 uppercase">Global Footprint</p>
                <p className="text-xs text-gray-300 mt-0.5 font-medium">US · Canada · UK · Europe · India</p>
              </div>
            </div>
          </div>

          {/* Card 2: Center Elevated Tall Image Frame */}
          <div className="md:col-span-4 group relative md:-mb-12">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/10 border-4 border-[#0d0f12]">
              <Image
                src="/assets/images/about/quad2.jpg"
                alt="Collaborative Solutions Framework Architectural Setup"
                fill
                sizes="(max-w-7xl) 33vw, 100vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/70 via-transparent to-transparent" />

              {/* Strategic Corporate Alliance Indicator */}
              <div className="absolute top-6 right-6 bg-blue-600/90 text-white rounded-full p-2.5 shadow-lg backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Side Content 3: Real Brand Narrative Column & CTA Interface */}
          <div className="md:col-span-4 space-y-6 md:pl-4 lg:pl-6 mt-8 md:mt-0">
            <div className="space-y-4 text-xs lg:text-sm text-gray-400 leading-relaxed font-medium">
              <p>
                We are one of the top players leading the current web designing industry. Headquartered in St.Louis, we have the solutions to offer which are tailor-made according to your requirements. We have also collaborated and formed alliances with companies belonging to similar traditions and businesses across the globe.
              </p>
              <p>
                To expand our global reaches, we successfully engineered a high-impact corporate alliance with St.Louis-based <span className="text-white font-semibold">Alpha Synopsys</span>—an Inc 500 listed IT powerhouse sharing our dedicated technical values—allowing us to scale enterprise operations while keeping our own unique identity intact.
              </p>
              <p>
                Our global clients span across the US, Canada, UK, Australia, Switzerland, and Europe. While their unique technical blueprints differ, our primary directive remains exact: deliver high-quality, high-converting digital ecosystems that meet corporate business needs today and secure their goals for tomorrow.
              </p>
            </div>

            {/* CTA Layer Matrix */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
              {/* <button className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-[#0d0f12] text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95 group">
                <span className="p-1 rounded-full bg-[#0d0f12]/10 group-hover:bg-white/20 transition-colors">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Play Showreel
              </button> */}
              <div></div>

              {/* Decorative Geometric Star Accent */}
              <div className="relative h-9 w-9 text-blue-500/80 animate-[spin_16s_linear_infinite] flex-shrink-0 select-none">
                <svg viewBox="0 0 100 100" fill="currentColor" className="h-full w-full">
                  <path d="M50 0 L58 35 L93 15 L70 45 L100 58 L65 65 L80 95 L50 73 L20 95 L35 65 L0 58 L30 45 L7 15 L42 35 Z" />
                </svg>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}