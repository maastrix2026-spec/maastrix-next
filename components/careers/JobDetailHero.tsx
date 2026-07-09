"use client";

import React, { useEffect, useState } from "react";
import { Terminal, MapPin, Clock, Award, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { JobPosition } from "@/data/careers"; // Import the strict interface

interface JobHeroProps {
  job: JobPosition; // Clean, structural binding to clear compilation block
}

export default function JobDetailHero({ job }: JobHeroProps) {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Notice the added pt-20 (or pt-24 / pt-32 depending on your navbar height)
    <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center pt-24 bg-[#0d0f12] overflow-hidden border-b border-white/5">
      <div
        className="absolute top-12 right-10 sm:right-32 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10 py-12 sm:py-16">
        <div className="space-y-6 max-w-4xl">
          <button
            onClick={() => router.push("/careers")}
            className="inline-flex items-center gap-2 text-xs font-black text-gray-400 hover:text-blue-400 uppercase tracking-widest transition-colors duration-150 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-150 group-hover:-translate-x-0.5" />
            Back to Open Positions
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Terminal className="h-3.5 w-3.5 text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              {job.department} Global Team
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 bg-white/[0.03] border border-white/5 px-3.5 py-2 rounded-xl">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />
              <span>{job.location}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 bg-white/[0.03] border border-white/5 px-3.5 py-2 rounded-xl">
              <Clock className="h-3.5 w-3.5 text-indigo-400" />
              <span>{job.type}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 bg-white/[0.03] border border-white/5 px-3.5 py-2 rounded-xl">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span>{job.experience} Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}