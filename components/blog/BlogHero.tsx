"use client";

import React from "react";
import { Terminal, Shield, Eye, Layers, Activity } from "lucide-react";

export default function BlogHero() {
  const metrics = [
    { label: "Latency Defeated", value: "-40%", icon: Activity },
    { label: "Systems Hardened", value: "Production Ready", icon: Shield },
    { label: "Data Pipelines", value: "Multi-Modal", icon: Layers },
  ];

  return (
    <section className="relative w-full bg-[#080a0d] text-white pt-28 pb-16 overflow-hidden border-b border-white/5">
      {/* Structural technical mesh grid backing */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient micro-glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Framework Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-blue-500/10 border border-blue-500/20">
              <Terminal className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Engineering Notebooks
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-white">
              Deep Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Architecture Breakdowns.
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl font-medium">
              We don&apos;t write generic listicles. Explore granular technical documentation covering high-throughput distributed systems, custom vector embedding layers, and edge computer vision frameworks built for enterprise scalability.
            </p>

            {/* Filter Pill Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["All Systems", "AI Infrastructure", "Computer Vision", "Backend Security"].map((tab, idx) => (
                <button
                  key={idx}
                  className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm transition-all duration-200 border ${
                    idx === 0 
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/10" 
                      : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Metrics Panel Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-4 group hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-white/5 text-blue-400 group-hover:bg-blue-500/10 transition-colors shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-base font-black tracking-tight text-white leading-none mb-1">
                      {metric.value}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}