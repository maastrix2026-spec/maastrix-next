"use client";

import React, { useEffect, useState } from "react";
import { Mail, MessageSquare, ShieldCheck, ArrowDown, Sparkles, Globe } from "lucide-react";

export default function ContactHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Opt-in to requestAnimationFrame for smoother 60fps parallax calculations
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className="relative w-full min-h-[500px] sm:min-h-[580px] flex items-center bg-[#0d0f12] overflow-hidden border-b border-white/5 
                 pt-30 sm:pt-28 lg:pt-32 pb-16 sm:pb-20" /* Prevents sliding under your fixed/absolute navbar */
    >
      
      {/* =========================================================================
          ADVANCED MULTI-LAYERED PARALLAX BACKDROP GRAPHICS
          ========================================================================= */}
      
      {/* Primary Ambient Cyan/Blue Parallax Glow */}
      <div 
        className="absolute top-[-10%] left-[-5%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
      />
      
      {/* Secondary Indigo Parallax Glow (Counter-balanced Depth) */}
      <div 
        className="absolute bottom-[-5%] right-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none will-change-transform"
        style={{ transform: `translate3d(0, ${-scrollY * 0.1}px, 0)` }}
      />
      
      {/* High-Fidelity Blueprint Micro Engineering Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Decorative Interactive Dot Matrix (Moving at a distinct speed) */}
      <div 
        className="absolute top-[30%] right-16 grid grid-cols-5 gap-3 opacity-15 pointer-events-none will-change-transform hidden xl:grid"
        style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}
      >
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white" />
        ))}
      </div>

      {/* =========================================================================
          CORE STRUCTURAL CONTENT CONTAINER
          ========================================================================= */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Text Block & Anchors */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Capsule */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                22-Year Corporate Delivery History
              </span>
            </div>

            {/* Typography Heading Layer */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Let’s Architect Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 animate-gradient">
                Next Digital System.
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-2xl">
              Have a complex enterprise application to scale or a custom AI workflow to coordinate? Initiate a direct thread with our core development squads. We deliver deterministic software velocity, production-ready architectures, and clean operational execution parameters.
            </p>

            {/* Scroll Panel Trigger Button */}
            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2.5 text-xs font-black text-gray-300 hover:text-blue-400 uppercase tracking-widest transition-all duration-300 group bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-blue-500/30 px-5 py-3 rounded-xl backdrop-blur-sm"
              >
                Go to communications panel
                <ArrowDown className="h-3.5 w-3.5 text-blue-400 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column: High-End Matrix Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
            
            {/* Trust Item 1 */}
            <div className="group p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 backdrop-blur-md transition-all duration-300 space-y-3 shadow-2xl">
              <div className="h-9 w-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider">Direct Engineer Comms</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed mt-1">
                  All requests clear incoming pipelines straight to senior software technical architects, skipping bloated management delays.
                </p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="group p-6 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-white/10 backdrop-blur-md transition-all duration-300 space-y-3 shadow-2xl">
              <div className="h-9 w-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider">Enterprise Security Guardrails</h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed mt-1">
                  Your source blueprints, structural documentation, and application specifications are entirely safe under strict NDA workflows.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}