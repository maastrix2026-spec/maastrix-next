"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, Cpu, Layers, Zap, ArrowRight, CheckCircle2, Award, Users2, Building2 } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  specs: string[];
}

interface MetricItem {
  value: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      sectionRef.current.style.setProperty("--scroll-top", `${window.scrollY}`);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features: FeatureCard[] = [
    {
      icon: <Cpu className="h-4 w-4" />,
      title: "Advanced Tech Infrastructure",
      description: "Custom, high-concurrency backend systems and optimized native mobile ecosystems engineered for maximum transactional availability and traffic resilience.",
      specs: ["Node.js / Express Core", "Supabase & SQL Optimization", "Real-Time Parallel Pipelines"]
    },
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      title: "Enterprise-Grade Security",
      description: "Hardened API gateways, secure custom intermediate middleware architectures, and role-based access control schemas safeguard business logic matrices.",
      specs: ["RBAC Endpoints", "Rate-Limiting Matrix", "Strict Data Isolation Layers"]
    },
    {
      icon: <Zap className="h-4 w-4" />,
      title: "High-Velocity Execution",
      description: "Agile, automated deployment pipelines coupled with highly reliable modular UI foundations guarantee rapid feature shipping timelines.",
      specs: ["Continuous Integration Tracking", "Deterministic Code Velocity", "Zero-Break Package Management"]
    },
    {
      icon: <Layers className="h-4 w-4" />,
      title: "End-to-End Delivery Systems",
      description: "From data architecture optimization to client-side fluid view layers, we manage full engineering operational lifecycles cleanly.",
      specs: ["Cross-Platform Architecture", "Dynamic Metadata Engines", "Sentry Core Crash Auditing"]
    }
  ];

  const metrics: MetricItem[] = [
    { value: "22+", label: "Years Experience", subtext: "Enterprise execution history", icon: <Building2 className="h-4 w-4 text-blue-600" /> },
    { value: "100%", label: "Client Handshake", subtext: "Guaranteed SLA uptime parameters", icon: <Award className="h-4 w-4 text-blue-600" /> },
    { value: "24/7", label: "Active Pipelines", subtext: "Automated structural infrastructure", icon: <Users2 className="h-4 w-4 text-blue-600" /> }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-slate-50 text-slate-900 py-20 lg:py-28 overflow-hidden border-y border-slate-200"
      style={{ "--scroll-top": "0" } as React.CSSProperties}
    >
      {/* Premium Subdued Technical Geometric Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c703_1px,transparent_1px),linear-gradient(to_bottom,#0284c703_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* =========================================================================
              LEFT BLOCK: STRATEGIC INTENT & CORPORATE METRICS (Sticky Contextual Column)
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Global Engineering Matrix
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.1]">
                Engineered to Drive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Software Velocity.
                </span>
              </h2>
              
              <p className="text-sm text-slate-800 leading-relaxed font-medium max-w-lg">
                We equip global organizations with elite backend and full-stack engineering power. By eliminating typical non-technical agency layers, our teams interface directly on code infrastructure to maximize reliability and data throughput.
              </p>
            </div>

            {/* Premium Embedded Corporate Metric Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 pt-2">
              {metrics.map((metric, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:border-slate-300 transition-colors duration-200"
                >
                  <div className="h-8 w-8 rounded-lg bg-blue-50/80 flex items-center justify-center shrink-0 border border-blue-100/50">
                    {metric.icon}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-slate-950 tracking-tight">{metric.value}</span>
                      <span className="text-xs font-bold text-slate-800 tracking-tight">{metric.label}</span>
                    </div>
                    <p className="text-[13px] text-slate-600 font-medium leading-none mt-0.5">{metric.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a 
                href="/get-a-quote" 
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-slate-950 hover:bg-blue-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-md transition-all duration-300 group"
              >
                Initiate Architecture Briefing
                <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* =========================================================================
              RIGHT BLOCK: ARCHITECTURAL VALUE CARDS (With Dark Theme Hover State)
              ========================================================================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((item, index) => (
              <div 
                key={index}
                className="relative p-6 bg-white border border-slate-200/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-xl transition-all duration-300 hover:bg-[#090b0e] hover:border-[#090b0e] group flex flex-col justify-between overflow-hidden"
              >
                {/* Structural Line Frame (Permanently Fixed Top Highlight Line) */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

                <div className="space-y-4">
                  {/* Micro Icon Housing Grid */}
                  <div className="inline-flex p-2.5 rounded-xl bg-slate-50 text-slate-700 border border-slate-100 transition-all duration-300 group-hover:bg-white group-hover:text-slate-950 group-hover:border-white group-hover:scale-105 shadow-sm">
                    {item.icon}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-base font-black tracking-tight text-slate-950 group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors duration-200">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Micro Validation Specs Array */}
                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-white/10 space-y-1.5 transition-colors duration-200">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[12px] font-bold text-slate-400 group-hover:text-slate-300 transition-colors duration-200">
                      <CheckCircle2 className="h-3 w-3 text-blue-500 shrink-0" />
                      <span className="tracking-wide">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}