"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Shield, Terminal, Cpu, CheckCircle2, Layers } from "lucide-react";

const ARCHITECTURE_POSTS = [
  {
    id: "rag-pipeline-audits",
    category: "AI Engineering & Vector Infra",
    title: "Architecting Context-Aware RAG Pipelines for High-Throughput Insurance Claim Audits",
    impact: "Reduced verification latency by 40% while achieving deterministic factual tracking outputs.",
    technicalBrief: "Engineered localized hybrid chunking matrices integrated with dynamic sliding-window embedding pipelines to prevent long-context retrieval degradation.",
    // Abstract dark tech visualization - Server Nodes / Neural Links
    imgSrc: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop", 
    tags: ["pgvector", "Hybrid Search", "Contextual Chunking"],
    author: "AI Platform Group",
    date: "June 24, 2026",
    challenge: "Enterprise claims matching systems suffered significant context drift and hallucination rates when scanning complex files larger than 150 pages, inflating compute budgets.",
    implementation: [
      "Built semantic parent-child chunk mapping inside specialized pgvector tables.",
      "Implemented reciprocal rank fusion (RRF) algorithms crossing sparse BM25 indexing over dense embeddings.",
      "Injected real-time telemetry validation routines to automatically retry loose parameters before model ingestion."
    ],
    deepDive: {
      problemSpace: "Standard naive chunking strategies split documents blindly based on character limits, shattering context boundaries. When processing multi-page commercial claims, critical cross-references (such as an endorsement clause on page 12 modifying an exclusion policy on page 84) are completely dropped, forcing the LLM to hallucinate data omissions.",
      solutionArchitecture: "We implemented an advanced multi-layered hierarchy. First, documents are processed using structural layouts where parent sections remain intact. Small recursive sentences (child chunks) are embedded to point directly back to their larger contextual bounds. During vector matching, if a child block clears our cosine similarity threshold, the parent document segment is instead contextually injected into the LLM context pool.",
      systemImpact: "By minimizing context fluff and running local Reciprocal Rank Fusion over hybrid keyword/vector nodes, we reduced tokens-per-request overhead, saving 40% compute latency while eliminating hallucinations across high-volume validation workflows."
    }
  },
  {
    id: "hybrid-ocr-vision-llm",
    category: "Computer Vision & LLMs",
    title: "Optimizing Low-Latency Hybrid OCR & Vision–LLM Architectures for Unstructured Data",
    impact: "Accelerated raw imagery ingestion throughput across decentralized mobile entry layers.",
    technicalBrief: "Combined lightweight edge-processed layout analysis models with fallback multimodal vision pipelines to process complex transactional schemas with near-zero accuracy drift.",
    // Abstract high-speed glowing telemetry optics
    imgSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    tags: ["Vision-LLM", "LayoutLM", "Asynchronous Ingestion"],
    author: "Core Vision Squad",
    date: "May 19, 2026",
    challenge: "Handwritten and skewed physical receipts uploaded over varying mobile edge devices regularly broke legacy rigid template OCR engines, introducing massive manual remediation costs.",
    implementation: [
      "Deployed a localized edge pre-processing pipeline using LayoutLM to isolate structural bounding text boxes.",
      "Coupled low-power extraction passes with targeted GPT-4o Vision API updates for highly distorted sections.",
      "Built asynchronous Redis-backed message worker systems to guarantee data delivery in low-connectivity areas."
    ],
    deepDive: {
      problemSpace: "Traditional OCR engines fail when handling real-world imagery containing geometric skews, camera shadows, or handwritten annotations. Passing every high-resolution capture directly to heavy multi-modal foundation models creates astronomical API bills and blocks real-time interaction due to 5+ second payload processing round-trips.",
      solutionArchitecture: "The engine runs a two-tier verification step. A highly optimized, localized LayoutLM container processes the layout tree instantly to establish positional landmarks. If structural match probabilities cross 92%, text extraction executes instantly via local heuristics. Any low-confidence sub-regions are dynamically cropped out and processed concurrently via isolated, micro-payload vision pipelines.",
      systemImpact: "This hybrid structure offloads 85% of standard layout extractions away from external billing meters. Transaction throughput drops into sub-second territory while maintaining structural data mapping accuracy across non-uniform user capture layouts."
    }
  },
  {
    id: "hardened-api-gateways",
    category: "Backend Security Matrix",
    title: "Hardening High-Concurrency API Gateways with Stateless Multi-Factor Session Controls",
    impact: "Secured enterprise cloud endpoints against high-volume algorithmic token attacks.",
    technicalBrief: "Implemented decentralized, intermediate crypto-token validation rules using isolated caching layers to secure critical pricing nodes without reducing endpoint latency.",
    // Secure deep blue circuit grid / data matrix lines
    imgSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    tags: ["Stateless Auth", "Redis Layering", "Rate-Limiting Matrix"],
    author: "SecOps Engineering",
    date: "April 08, 2026",
    challenge: "Automated scraping bots launched distributed token attacks against underlying calculation microservices, threatening system reliability and inflating API infrastructure overhead.",
    implementation: [
      "Configured sliding-window token bucket algorithms inside an isolated Redis caching layout layer.",
      "Developed secure custom Express/Node.js middleware modules running cryptographic validation calculations.",
      "Deployed role-based routing controls coupled with stateless session fingerprint tracking signatures."
    ],
    deepDive: {
      problemSpace: "Standard database-backed user verification microservices create severe bottlenecks under multi-gigabit automated scraper attacks. Every inbound transaction forces an exhaustive round-trip query down to the primary data tier, leading to connection pool exhaustion and complete downstream resource starvation.",
      solutionArchitecture: "We decoupled the gateway processing layer by introducing short-lived, cryptographically signed, stateless tokens. The edge router validates user session authenticity using public-key validation modules entirely in-memory. Inbound traffic passes through multi-tier Redis clusters utilizing sliding-window tracking mechanics to flag and drop malicious volume spikes before routing down to calculation clusters.",
      systemImpact: "This architecture ensures that invalid bot requests are completely dropped at the gateway perimeter within less than 2ms. Core calculation clusters remain fully protected from resource exhaustion, guaranteeing maximum service uptime for verified users."
    }
  }
];

export default function BlogListMatrix() {
  return (
    <section className="bg-[#f8fafc] text-slate-900 py-24 relative overflow-hidden">
      {/* Subtle line timeline guide down the center layout on large screens */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-slate-200 hidden xl:block pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="space-y-24">
          {ARCHITECTURE_POSTS.map((post, idx) => (
            <ParallaxRow key={post.id} post={post} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ParallaxRow({ post, index }: { post: typeof ARCHITECTURE_POSTS[0]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal row animation via intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (rowRef.current) observer.observe(rowRef.current);

    // Scroll-driven parallax logic for the image element
    const handleScroll = () => {
      if (!imgContainerRef.current) return;
      const rect = imgContainerRef.current.getBoundingClientRect();
      const scrollPos = window.innerHeight - rect.top;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yTranslation = (scrollPos * 0.04); // Smooth custom speed multiplier
        const img = imgContainerRef.current.querySelector(".parallax-target") as HTMLElement;
        if (img) {
          img.style.transform = `translate3d(0, ${yTranslation}px, 0) scale(1.15)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={rowRef}
      className={`grid grid-cols-1 xl:grid-cols-12 gap-8 items-start transition-all duration-1000 ease-out will-change-transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Graphic Parallax Visual Frame Column (5 Columns Wide) */}
      <div className="xl:col-span-5 space-y-4">
        <div
          ref={imgContainerRef}
          className="relative aspect-[16/11] w-full bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-200/60 isolate"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          <Image
            src={post.imgSrc}
            alt={post.title}
            fill
            priority={index === 0} // Highest priority on above-the-fold content to maximize LCP speeds
            sizes="(max-w-1200px) 100vw, 45vw"
            className="parallax-target object-cover will-change-transform transition-transform duration-100 ease-out scale-110 origin-top"
          />
          <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-950/80 backdrop-blur-md text-white text-[9px] font-black tracking-widest uppercase border border-white/10">
            <Cpu className="h-3 w-3 text-blue-400" />
            {post.category}
          </div>
        </div>

        {/* Technical Stack Tags Row */}
        <div className="flex flex-wrap gap-1.5 px-1">
          {post.tags.map((tag, i) => (
            <span key={i} className="text-[10px] font-black tracking-wider uppercase px-2.5 py-1 bg-white border border-slate-200 text-slate-600 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Deep Architecture Content Space (7 Columns Wide) */}
      <div className="xl:col-span-7 space-y-6 bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-sm">
        
        {/* Core Metadata Headings */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <span className="text-slate-500 font-black">{post.author}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full" />
            <span>{post.date}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
            {post.title}
          </h2>
        </div>

        {/* High Performance Business Metric Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-100 rounded-xl px-4 py-3.5">
          <span className="text-[9px] font-black uppercase tracking-widest text-blue-600 block mb-1 flex items-center gap-1">
            <Shield className="h-3 w-3 text-blue-500" /> Business Impact Vector
          </span>
          <p className="text-xs sm:text-sm text-blue-950 font-bold leading-relaxed">
            {post.impact}
          </p>
        </div>

        {/* Problem vs Blueprint Matrix Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <span className="font-black text-slate-950 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" /> The Structural Challenge
            </span>
            <p className="text-slate-500 leading-relaxed font-medium">
              {post.challenge}
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-black text-slate-950 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" /> Execution Blueprint
            </span>
            <ul className="space-y-2 text-slate-600 font-medium">
              {post.implementation.map((step, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-tight">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Production Architecture Deep Dive Narrative */}
        <div className="space-y-4 pt-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-slate-950 bg-slate-100 px-2 py-1 rounded">
            <Terminal className="h-3 w-3 text-slate-700" /> Architectural Breakdown
          </div>
          
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            <div>
              <strong className="text-slate-900 font-bold block mb-1">Problem Space Context:</strong>
              <p>{post.deepDive.problemSpace}</p>
            </div>
            <div>
              <strong className="text-slate-900 font-bold block mb-1">Deep Implementation Details:</strong>
              <p>{post.deepDive.solutionArchitecture}</p>
            </div>
            <div>
              <strong className="text-slate-900 font-bold block mb-1">System Efficiency:</strong>
              <p>{post.deepDive.systemImpact}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}