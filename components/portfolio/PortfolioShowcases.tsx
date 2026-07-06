"use client";

import React, { useState, useMemo } from "react";
import { ArrowUpRight, Folder, Globe, Layers, Activity, ShieldCheck } from "lucide-react";
import { mockProjects, Project } from "@/data/portfolio";

// Explicitly extending the types to account for the new project state flag
type FilterCategory = "All" | "Web" | "Mobile App" | "Enterprise Software" | "Developer Tools";

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = ["All", "Web", "Mobile App", "Enterprise Software", "Developer Tools"];

  // Optimized Filter Computation Matrix
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return mockProjects;
    return mockProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="relative w-full bg-slate-50 text-slate-900 py-20 lg:py-32 overflow-hidden border-b border-slate-200">
      {/* Subdued Geometric Backdrop Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c702_1px,transparent_1px),linear-gradient(to_bottom,#0284c703_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10 space-y-16">
        
        {/* =========================================================================
            STRUCTURAL HEADER SECTION
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-200/60 pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Production Case Studies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
              Proven Deployments. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Global Infrastructure.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-xl">
              Explore our verified portfolio of robust backend architectures, low-latency mobile platforms, and high-velocity developer tools shipped worldwide.
            </p>
          </div>

          {/* PREMIUM COMPACT CONTROLLER FILTER BAR */}
          <div className="flex flex-wrap gap-1 bg-white border border-slate-200 p-1.5 rounded-2xl self-start lg:self-end shadow-[0_4px_12px_rgba(0,0,0,0.02)] max-w-full overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black tracking-tight uppercase transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-slate-950 text-white shadow-md scale-[1.02]"
                    : "text-slate-500 hover:text-slate-950 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PROJECTS GRID MATRIX
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project: Project & { mode?: "production" | "development" }) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white border border-slate-200/80 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(2,132,199,0.06)] hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* Meta Row: Project Type Tag, Development Status & Client Geo-Location */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100/40 px-2.5 py-1 rounded-md">
                      <Folder className="h-3 w-3 shrink-0" />
                      {project.category}
                    </span>

                    {/* Operational Project Mode Tag */}
                    {project.mode === "development" ? (
                      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded">
                        <Activity className="h-2.5 w-2.5 shrink-0 animate-pulse" />
                        Under Dev
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                        <ShieldCheck className="h-2.5 w-2.5 shrink-0" />
                        In Prod
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400">
                    <Globe className="h-3 w-3 text-slate-300" />
                    {project.clientCountry}
                  </span>
                </div>

                {/* Main Identity Title & Narrative */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl font-black tracking-tight text-slate-950">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Lower Section: Tech Stack Pill Trays & Deep Link */}
              <div className="space-y-6 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-bold tracking-wide text-slate-600 bg-slate-50 border border-slate-200/40 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Client Reference & Call to Action Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[11px] font-bold">
                  <div>
                    <span className="text-slate-400 block font-medium text-[9px] uppercase tracking-widest">
                      Enterprise Client
                    </span>
                    <span className="text-slate-800 text-xs sm:text-sm font-black">
                      {project.clientName}
                    </span>
                  </div>
                  
                  <a
                    href={project.deepLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-50 hover:bg-slate-950 border border-slate-200 hover:border-slate-950 text-slate-700 hover:text-white rounded-xl transition-all duration-200 shadow-sm font-black uppercase tracking-widest text-[10px]"
                  >
                    Launch
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-inherit transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* =========================================================================
            EMPTY STATE FALLBACK
            ========================================================================= */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl bg-white shadow-sm max-w-md mx-auto">
            <Layers className="h-10 w-10 text-slate-300 mx-auto mb-3 animate-pulse" />
            <h4 className="text-sm font-black text-slate-950 uppercase tracking-wider">Pipeline Syncing</h4>
            <p className="text-xs font-medium text-slate-400 mt-1">Additional production software products and modules under development are coming online soon.</p>
          </div>
        )}

      </div>
    </section>
  );
}