"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Layers } from "lucide-react";

export default function ProjectCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const currentScroll = window.scrollY;
      
      // Calculate a slower scroll rate to subtly drift the background image
      sectionRef.current.style.setProperty("--bg-parallax", `${currentScroll * 0.12}px`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#090b0e] text-white overflow-hidden border-y border-white/5 py-24 lg:py-32"
      style={{ "--bg-parallax": "0px" } as React.CSSProperties}
    >
      {/* =========================================================================
          BACKGROUND IMAGERY & TECHNICAL GRID LAYERS
          ========================================================================= */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none transition-transform duration-100 ease-out scale-105 will-change-transform"
        style={{ 
          backgroundImage: "url('/assets/images/backgrounds/corporate-towers.jpg')",
          transform: "translate3d(0, var(--bg-parallax), 0) scale(1.05)"
        }}
      />
      
      {/* Absolute Radial Gradient Overlay to darken edges for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e] via-[#090b0e]/80 to-[#090b0e] z-0" />
      
      {/* Subtle Blue Accent Glow */}
      <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* =========================================================================
          CONTENT PRESENTATION LAYER
          ========================================================================= */}
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center z-10 space-y-8">
        
        {/* Decorative Badge Element */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <Layers className="h-3.5 w-3.5 text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
            Enterprise Client Onboarding
          </span>
        </div>

        {/* Technical Impact Heading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Have a Complex System to Scale? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
              Let’s Architect It Together.
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Whether you need to configure context-aware RAG pipelines, deploy low-latency OCR technologies, or secure critical business data nodes with multi-factor middleware layers, our specialized core development squads are ready to deliver.
          </p>
        </div>

        {/* High-Contrast Conversion Action Panel */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-a-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-blue-600 text-slate-950 hover:text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-lg hover:shadow-blue-600/20 transition-all duration-300 group shrink-0"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors duration-200" />
          </Link>
          
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wide">
            <Terminal className="h-4 w-4 text-emerald-500" />
            <span>Direct pipeline assignment within 24 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}