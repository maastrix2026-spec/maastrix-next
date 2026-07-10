"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, User, Sparkles, Terminal } from "lucide-react";
import { featuredWork, ProjectCard } from "@/data/caseStudies";

export default function CaseStudyJournal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const currentScroll = window.scrollY;
      containerRef.current.style.setProperty("--scroll-y", `${currentScroll}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#f8fafc] text-slate-900 py-20 overflow-hidden border-t border-slate-200"
      style={{ "--scroll-y": "0" } as React.CSSProperties}
    >

      {/* Hydration-Safe Light Technical Ambient Glow Fields */}
      <div
        className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[130px] pointer-events-none will-change-transform"
        style={{ transform: "translate3d(0, calc(var(--scroll-y) * 0.06px), 0)" }}
      />
      <div
        className="absolute bottom-[5%] left-[-5%] w-[450px] h-[450px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{ transform: "translate3d(0, calc(var(--scroll-y) * -0.04px), 0)" }}
      />

      {/* Blueprint Structural Mesh Screen */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a02_1px,transparent_1px),linear-gradient(to_bottom,#0f172a02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">

        {/* Section Heading Setup */}
        <div className="text-left max-w-3xl space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              Technical Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight">
            Proven Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Complex Architecture Systems.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
            A granular review of how we optimize machine learning infrastructure, clean up unstructured datasets via vision pipelines, and lock down global data networks.
          </p>
        </div>

        {/* Responsive Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredWork.map((project: ProjectCard) => (
            <ParallaxCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-Component: 3D Mouse Parallax Hover Element
// Optimized with CSS compositing layers to fix cross-browser boundary masking bugs
function ParallaxCard({ project }: { project: ProjectCard }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    const rotateX = -(y / (box.height / 2)) * 5;
    const rotateY = (x / (box.width / 2)) * 5;

    // Fixed: Added translateZ(0) to force hard compositing layers, tracking clean border-radii across Safari and Chrome Engine setups
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01) translateZ(0)`;
    card.style.transition = "transform 0.08s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)";
    card.style.transition = "transform(0.35s) cubic-bezier(0.25, 1, 0.5, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 will-change-transform isolate"
    >
      <div className="space-y-6">
        {/* Aspect-Locked Media Base Layer */}
        {/* Fixed: Added mask-image property along with overflow-hidden to lock down image corners perfectly on Safari */}
        <div className="relative aspect-[16/10] w-full bg-slate-50 overflow-hidden border-b border-slate-100 shrink-0 [mask-image:linear-gradient(white,white)]">
          <Image
            src={project.imgSrc}
            alt={project.title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-103 brightness-[0.98] group-hover:brightness-100"
          />
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 text-white text-[9px] font-black tracking-widest uppercase backdrop-blur-md">
            <Terminal className="h-3 w-3 text-blue-400" />
            {project.category}
          </div>
        </div>

        {/* Content Body Space */}
        <div className="px-6 space-y-3.5">
          {/* Main Structural Title */}
          <h3 className="text-base sm:text-lg font-black tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
            {project.title}
          </h3>

          {/* Business Impact Value */}
          <p className="text-xs text-blue-700 font-bold leading-relaxed bg-blue-50/60 border border-blue-100/50 rounded-lg px-3 py-2">
            <span className="uppercase text-[9px] block tracking-wider font-black text-blue-500 mb-0.5">Impact Vector:</span>
            {project.impact}
          </p>

          {/* Deep Engineering Detail */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
            {project.technicalBrief}
          </p>

          {/* Technology Pills System */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag, tIdx) => (
              <span key={tIdx} className="text-[11px] font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Meta Footer Bar */}
      <div className="mt-8 px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-wider text-slate-400">
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-slate-300" />
            <span className="text-slate-500">{project.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-slate-300" />
            <span>{project.date}</span>
          </div>
        </div>

        <Link
          href="/blog"
          className="group focus:outline-none"
          aria-label="Navigate to architectural logs"
        >
          <div className="h-8 w-8 rounded-xl bg-slate-50 text-slate-500 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center border border-slate-200/60 group-hover:border-blue-600 shadow-sm transition-all duration-300 shrink-0">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}