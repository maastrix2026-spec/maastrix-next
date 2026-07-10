"use client";

import React from "react";
import { Star } from "lucide-react";
import { mockTestimonials, Testimonial } from "@/data/testimonials";

export default function AboutTestimonials() {
  // Duplicate the array to create a continuous, infinite marquee loop
  const doubleTestimonials = [...mockTestimonials, ...mockTestimonials];

  return (
    <section className="relative bg-white text-slate-900 font-sans py-20 lg:py-20 overflow-hidden border-t border-slate-100">
      
      {/* Injecting pure CSS directly to bypass configuration issues */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeSlider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .custom-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeSlider 40s linear infinite;
        }
        .custom-marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />
      
      {/* Structural Headers */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Global Validation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 leading-tight">
          Trusted by Industry Leaders Worldwide
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mt-4 font-medium">
          See how our engineering squads help global enterprises solve scale bottlenecks.
        </p>
      </div>

      {/* MARQUEE WRAPPER */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Edge Ambient Overlays for Premium Gradient Vignette fading */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Moving Track */}
        <div className="custom-marquee-track gap-6">
          {doubleTestimonials.map((item: Testimonial, idx: number) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[300px] sm:w-[420px] shrink-0 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Five-Star Quality Metric Row */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-blue-600 text-blue-600" />
                  ))}
                </div>

                {/* Narrative Statement */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* End User Meta Identity Information Block */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950 flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-wider shadow-sm">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-black tracking-tight text-slate-950">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400">
                    {item.role} &middot; <span className="text-blue-600">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}