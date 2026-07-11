"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { clientLogos } from "../../data/clients";

export default function ClientSlider() {
  const [loadedCount, setLoadedCount] = useState(0);

  /*
   * Repeat logos inside each group so the marquee remains wider
   * than ultrawide screens. Both groups remain exactly identical.
   */
  const marqueeLogos = useMemo(
    () => [...clientLogos, ...clientLogos],
    [],
  );

  const isReady = loadedCount >= marqueeLogos.length;

  const handleLogoLoad = useCallback(() => {
    setLoadedCount((current) =>
      Math.min(current + 1, marqueeLogos.length),
    );
  }, [marqueeLogos.length]);

  if (clientLogos.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="client-slider-heading"
      className="relative w-full overflow-hidden border-y border-slate-200 bg-white py-10 sm:py-12 lg:py-14"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-indigo-500/[0.04] blur-3xl" />
      </div>

      {/* Heading */}
      <div className="relative mx-auto mb-8 max-w-7xl px-4 text-center sm:mb-10 sm:px-6 lg:px-8">
        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-xs">
          Our Clients
        </span>

        <h2
          id="client-slider-heading"
          className="mx-auto mt-3 max-w-2xl text-xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-2xl lg:text-3xl"
        >
          Trusted by leading enterprise clients
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-500 sm:text-sm">
          Building dependable digital products for organizations across
          industries and markets.
        </p>
      </div>

      {/* Full-width marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-16 lg:w-28" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-16 lg:w-28" />

        {/* Fixed-height placeholder prevents layout shift */}
        {!isReady && (
          <div
            aria-hidden="true"
            className="flex h-20 w-full items-center justify-center gap-8 overflow-hidden px-4 sm:h-24 sm:gap-12 lg:h-28 lg:gap-16"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-12 w-28 shrink-0 animate-pulse rounded-xl bg-slate-100 sm:h-14 sm:w-36 lg:h-16 lg:w-40"
              />
            ))}
          </div>
        )}

        {/* Marquee viewport */}
        <div
          className={[
            "client-marquee-viewport",
            "h-20 w-full sm:h-24 lg:h-28",
            isReady
              ? "visible opacity-100"
              : "invisible absolute inset-0 opacity-0",
          ].join(" ")}
        >
          <div className="client-marquee-track">
            <LogoGroup
              logos={marqueeLogos}
              onLogoLoad={handleLogoLoad}
            />

            <LogoGroup logos={marqueeLogos} ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ClientLogo {
  id: string | number;
  name: string;
  src: string;
}

interface LogoGroupProps {
  logos: ClientLogo[];
  ariaHidden?: boolean;
  onLogoLoad?: () => void;
}

function LogoGroup({
  logos,
  ariaHidden = false,
  onLogoLoad,
}: LogoGroupProps) {
  return (
    <div
      className="client-marquee-group"
      aria-hidden={ariaHidden}
    >
      {logos.map((logo, index) => (
        <div
          key={`${ariaHidden ? "duplicate" : "original"}-${logo.id}-${index}`}
          className="client-logo-card group"
        >
          <div className="relative h-10 w-24 sm:h-12 sm:w-32 md:w-36 lg:h-14 lg:w-40">
            <Image
              src={logo.src}
              alt={ariaHidden ? "" : `${logo.name} logo`}
              fill
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 144px, 160px"
              className="pointer-events-none select-none object-contain"
              loading="eager"
              priority={!ariaHidden && index < 6}
              draggable={false}
              onLoad={!ariaHidden ? onLogoLoad : undefined}
            />
          </div>
        </div>
      ))}
    </div>
  );
}