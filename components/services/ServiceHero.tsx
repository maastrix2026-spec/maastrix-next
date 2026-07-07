"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Terminal, Cpu, ArrowRight } from "lucide-react";

export default function ServiceHero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative w-full min-h-[600px] lg:h-[80vh] lg:min-h-[700px] bg-[#0d0f12] text-white overflow-hidden flex items-center border-b border-white/5">

            {/* =========================================================================
          PARALLAX BACKING METRIC (Inspired by the flowing background curves in image_68f779.jpg)
          ========================================================================= */}

            {/* Slow-moving deep background glow */}
            <div
                className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none transition-transform will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            />

            {/* Asymmetric geometric grid that shifts faster to create spatial depth */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_40%_50%,#000_70%,transparent_100%)] pointer-events-none transition-transform will-change-transform"
                style={{ transform: `translateY(${scrollY * 0.25}px)` }}
            />

            {/* =========================================================================
          FOREGROUND CONTENT GRID
          ========================================================================= */}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10 py-12 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: HIGH-IMPACT INNER COPY (Spans 7 Columns) */}
                    <div className="lg:col-span-7 space-y-6 text-left">

                        {/* Contextual Inner Pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                            <Terminal className="h-3.5 w-3.5 text-blue-400" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                                Core Engineering Capabilities
                            </span>
                        </div>

                        {/* Main Asymmetric Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                            Production-Grade <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500">
                                Backend & Mobile Systems
                            </span>
                        </h1>

                        {/* Service-Specific Statement */}
                        <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed font-medium">
                            We engineer custom, highly resilient digital architecture. From high-concurrency Node.js API layers and optimized database schemas to responsive cross-platform mobile environments, we build frameworks meant to scale seamlessly.
                        </p>

                        {/* High-Contrast Action Button (Positioned like 'Let's Code' in image_68f779.jpg) */}
                        <div className="pt-2">
                            <a
                                href="#services-list"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02]"
                            >
                                Explore Capabilities
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: PREMIUM ROUNDED CORE IMAGE (Spans 5 Columns) */}
                    <div
                        className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[5/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-transform will-change-transform"
                        style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
                    >
                        {/* Contextual Corporate Tech Stack Image */}
                        <Image
                            src="/assets/images/services/service-hero.jpg"
                            alt="Advanced systems engineering, deployment metrics monitoring, and code optimization workspace"
                            fill
                            className="object-cover object-center"
                            priority
                            sizes="(max-w-768px) 100vw, (max-w-1200px) 100vw, 100vw"
                        />

                        {/* Subtle premium light sheen overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent mix-blend-plus-lighter pointer-events-none" />

                        {/* Floating Absolute Badge */}
                        <div className="absolute bottom-4 left-4 right-4 bg-[#0d0f12]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                                <Cpu className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-400">Deterministic Focus</p>
                                <p className="text-xs text-gray-300 font-medium">Zero generic templates. Just high-performance custom infrastructure.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}