"use client";

import React from "react";
import Image from "next/image";
import { clientLogos } from "../../data/clients"; // Verify your relative backdot path hierarchy

export default function ClientSlider() {
  // Seamless loop array duplication
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="relative py-14 bg-surface-light border-y border-border-subtle overflow-hidden select-none">
      {/* Structural Inner Wrapper */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
          {/* Accent-Style Header Block (Anchored Left, just like modern consultant frameworks) */}
          <div className="lg:pr-6 text-center lg:text-left z-10 border-b lg:border-b-0 lg:border-r border-border-subtle pb-6 lg:pb-0">
            <span className="text-[13px] font-bold uppercase tracking-widest text-primary">
              OUR CLIENTS
            </span>
            <h2 className="text-base font-extrabold tracking-tight text-secondary uppercase mt-1 leading-snug">
              Trusted by Leading
              <br className="hidden lg:block" /> Enterprise Clients
            </h2>
          </div>

          {/* Infinite Marquee Slider Windows Container (Spans 3/4 layout width on desktop) */}
          <div className="lg:col-span-3 relative w-full overflow-hidden flex items-center">
            {/* Mirror Gradient Mask Flares for professional edge blending transitions */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-surface-light to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-surface-light to-transparent z-10 pointer-events-none" />

            {/* Continuous Motion Row Track */}
            <div
              className="flex w-max gap-20 items-center animate-marquee-loop whitespace-nowrap px-4"
              style={{
                animationDuration: "45s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationPlayState: "running",
                // ADD THESE FOR SMOOTHNESS
                willChange: "transform",
                backfaceVisibility: "hidden",
                perspective: 1000,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animationPlayState = "paused")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.animationPlayState = "running")
              }
            >
              {doubledLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="relative w-40 h-16 transition-all duration-300 ease-in-out flex-shrink-0 flex items-center justify-center hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} framework asset identity`}
                    fill
                    sizes="160px"
                    className="object-contain"
                    priority={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
