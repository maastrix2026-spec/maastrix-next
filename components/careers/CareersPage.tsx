"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Terminal, ArrowRight, Briefcase, MapPin, Clock, Award, Users } from "lucide-react";
import { openPositions, JobPosition } from "@/data/careers";

type DeptFilter = "All" | "Engineering" | "Design";

export default function CareersPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDept, setActiveDept] = useState<DeptFilter>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter computation
  const filteredJobs = useMemo(() => {
    if (activeDept === "All") return openPositions;
    return openPositions.filter(job => job.department === activeDept);
  }, [activeDept]);

  return (
    <div className="w-full pt-20 bg-[#0d0f12]">

      {/* =========================================================================
          SECTION 1: PREMIUM HERO BLOCK (Dark Premium Theme)
          ========================================================================= */}
      <section className="relative w-full min-h-[500px] lg:h-[65vh] flex items-center overflow-hidden border-b border-white/5">

        {/* Parallax background glows & meshes */}
        <div
          className="absolute top-10 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10 py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Users className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                  JOIN OUR ENGINEERING TEAM
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                Build Your Career. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
                  Build Tomorrow&apos;s Technology.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed font-medium">
                Join Maastrix Solutions and collaborate with talented engineers, designers, and innovators to develop AI-powered applications, enterprise software, cloud-native platforms, ecommerce solutions, and intelligent digital products for businesses around the world. Grow your skills, embrace new technologies, and make a lasting impact.
              </p>

              <div className="pt-2">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02]"
                >
                  View Open Positions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Contextual Asymmetric Metric Card Column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-2xl font-black text-blue-400">17+ Yrs</h3>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Industry Trust</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="text-2xl font-black text-indigo-400">100%</h3>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Deterministic Velocity</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OPEN ROLES BOARD (Clean Light Theme transition)
          ========================================================================= */}
      <section id="openings" className="bg-white text-slate-900 py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header & Department Switches */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
                Current Opportunities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Explore our active deployment vacancies and find your next engineering challenge.
              </p>
            </div>

            {/* Micro Filter Controls */}
            <div className="flex bg-slate-50 border border-slate-200 p-1 rounded-xl self-start md:self-end">
              {(["All", "Engineering", "Design"] as DeptFilter[]).map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${activeDept === dept
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Positions Listing Matrix */}
          <div className="space-y-4">
            {filteredJobs.map((job: JobPosition, idx: number) => (
              <div
                key={`${job.id}-${idx}`}
                className="group bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Meta Core Details Block */}
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100/60">
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {mounted ? job.location : "Bhubaneswar, India"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                      <Award className="h-3.5 w-3.5" />
                      {job.experience}
                    </span>
                  </div>

                  <h3 className="text-lg font-black tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors duration-200">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Apply Interactive Action Button */}
                <div className="shrink-0 pt-2 lg:pt-0">
                  <a
                    href={`/careers/${job.id}`}
                    className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 py-2.5 bg-slate-50 hover:bg-blue-600 border border-slate-200 hover:border-blue-600 text-slate-800 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 group/btn"
                  >
                    Apply Now
                    <Briefcase className="h-3.5 w-3.5 text-slate-400 group-hover/btn:text-white transition-transform duration-200 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}