"use client";

import React from "react";
import { Users, Workflow, Code2, ShieldAlert, Award, Zap } from "lucide-react";

export default function OurTeamSection() {
    const coreStrengths = [
        {
            icon: <Workflow className="h-5 w-5 text-blue-600" />,
            title: "Traceable Governance & Frameworks",
            description: "We don't just write code; we architect structured documentation, reproducible workflows, and multi-tier decision accountability into every system layer."
        },
        {
            icon: <Code2 className="h-5 w-5 text-indigo-600" />,
            title: "Complex Systems Engineering",
            description: "Specialized in advanced intelligence structures—from building context-aware RAG pipelines and OCR workflows to high-concurrency real-time transactional gateways."
        },
        {
            icon: <Zap className="h-5 w-5 text-amber-600" />,
            title: "High-Velocity Execution",
            description: "Our hiring process targets top-tier talent who undergo rigorous training to sharpen development velocity, ensuring seamless project timelines and robust deliveries."
        },
        {
            icon: <Award className="h-5 w-5 text-emerald-600" />,
            title: "Exceptional Team Retention",
            description: "Over 70% of our core engineering team has stayed with us since inception. This deep institutional stability protects against knowledge gaps and ensures long-term support."
        }
    ];

    return (
        <section id="our-team" className="relative w-full bg-slate-50 text-slate-900 py-10 lg:py-15  overflow-hidden border-b border-slate-200">
            {/* Subdued Tech Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c702_1px,transparent_1px),linear-gradient(to_bottom,#0284c703_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10 space-y-16">

                {/* SECTION HEADER */}
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <Users className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            The Engine Room
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
                        Chiseled Talent. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            Cohesive Engineering Execution.
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
                        We operate on a foundational philosophy: <span className="italic font-semibold text-slate-700">&ldquo;You grow as your fellow grows.&rdquo;</span> By pairing industry veterans with rigorous software guidelines, we deliver predictable, high-end technical architectures.
                    </p>
                </div>

                {/* TWO-COLUMN INTELLECTUAL MATRIX */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* LEFT COLUMN: Narrative & Culture */}
                    <div className="lg:col-span-5 space-y-6 bg-white border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

                        <h3 className="text-lg font-black uppercase tracking-tight text-slate-950">
                            Our Culture Framework
                        </h3>

                        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                            <p>
                                Building production-grade applications requires more than raw coding skills; it demands strict ownership and meticulous discipline. Our hiring processes are deliberately selective, skimming the best available analytical minds.
                            </p>
                            <p>
                                Once onboarded, our developers undergo continuous operational alignment where their skills are chiseled and sharpened. This collaborative environment promotes deep internal respect for senior engineers and ensures a harmonious delivery flow.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-slate-150 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Zero-layoff environment built on stability
                            </span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Capabilities Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {coreStrengths.map((strength, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-white border border-slate-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_24px_rgba(2,132,199,0.04)] hover:border-blue-500/30 transition-all duration-300 group"
                            >
                                <div className="p-2 w-fit bg-slate-50 border border-slate-100 rounded-xl mb-4 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                                    {strength.icon}
                                </div>
                                <h4 className="text-sm font-black tracking-tight text-slate-950 mb-2">
                                    {strength.title}
                                </h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                    {strength.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}