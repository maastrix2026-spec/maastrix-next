"use client";

import React, { useEffect, useRef } from "react";
import { Terminal, ShieldCheck, Activity, Layers, Cpu } from "lucide-react";

export default function QuoteHero() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      // Capture viewport scroll position without triggering heavy state component cycles
      headerRef.current.style.setProperty("--scroll-top", `${window.scrollY}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const processSteps = [
    {
      icon: <Terminal className="h-4 w-4 text-blue-400" />,
      title: "1. Infrastructure Auditing",
      desc: "We analyze your target data configurations, processing pipelines, or backend architecture requirements.",
    },
    {
      icon: <Layers className="h-4 w-4 text-blue-400" />,
      title: "2. Blueprint Architecture",
      desc: "Our engineering leads model explicit RAG vector spaces, OCR parsing loops, and custom security middleware boundaries.",
    },
    {
      icon: <Activity className="h-4 w-4 text-blue-400" />,
      title: "3. High-Velocity Production",
      desc: "We deploy dedicated full-stack squads to ship clean, type-safe, production-ready system integrations.",
    },
  ];

  return (
    <div 
      ref={headerRef}
      className="w-full bg-[#090b0e] text-white border-b border-white/5 py-20 lg:py-28 relative overflow-hidden"
      style={{ "--scroll-top": "0" } as React.CSSProperties}
    >
      {/* =========================================================================
          AMBIENT DESIGN INFRASTRUCTURE LAYERS (High Performance Parallax Fields)
          ========================================================================= */}
      {/* Structural technical matrix blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient Blue Background Glow Nodes */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none will-change-transform"
        style={{ transform: "translate3d(0, calc(var(--scroll-top) * 0.05px), 0)" }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{ transform: "translate3d(0, calc(var(--scroll-top) * -0.05px), 0)" }}
      />

      {/* =========================================================================
          MAIN INTERFACE CONTAINER
          ========================================================================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Core Enterprise Value Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Direct Engineering Access
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
                System Velocity.
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed max-w-xl">
              Skip traditional non-technical agency buffers. Detail your platform parameters, database complexities, or processing challenges below. Our core software architecture leads will personally review your operational summary to draft a targeted execution strategy.
            </p>
          </div>

          {/* Right Column: Premium Pipeline Delivery Card Matrix */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#11141a]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6 relative overflow-hidden group">
              {/* Micro Architectural Contrast Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
              
              <div className="flex items-center gap-2 border-b border-white/5 pb-4">
                <Cpu className="h-4 w-4 text-blue-400" />
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">
                  Production Integration Architecture
                </h3>
              </div>
              
              <div className="space-y-5">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start group/item">
                    {/* Icon Housing Matrix */}
                    <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl group-hover/item:bg-blue-600 group-hover/item:border-blue-600 group-hover/item:text-white text-blue-400 shadow-sm transition-all duration-200 shrink-0">
                      {step.icon}
                    </div>
                    
                    {/* Text Specifications */}
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-white group-hover/item:text-blue-400 transition-colors duration-150">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}