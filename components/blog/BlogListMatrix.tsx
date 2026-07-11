import React from "react";
import Image from "next/image";
import {
  Shield,
  Terminal,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const ARCHITECTURE_POSTS = [
  {
    id: "rag-pipeline-audits",
    category: "AI Engineering & Vector Infra",
    title:
      "Architecting Context-Aware RAG Pipelines for High-Throughput Insurance Claim Audits",
    impact:
      "Reduced verification latency by 40% while achieving deterministic factual tracking outputs.",
    technicalBrief:
      "Engineered localized hybrid chunking matrices integrated with dynamic sliding-window embedding pipelines to prevent long-context retrieval degradation.",
    imgSrc:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
    tags: ["pgvector", "Hybrid Search", "Contextual Chunking"],
    author: "AI Platform Group",
    date: "June 24, 2026",
    challenge:
      "Enterprise claims matching systems suffered significant context drift and hallucination rates when scanning complex files larger than 150 pages, inflating compute budgets.",
    implementation: [
      "Built semantic parent-child chunk mapping inside specialized pgvector tables.",
      "Implemented reciprocal rank fusion algorithms crossing sparse BM25 indexing over dense embeddings.",
      "Injected real-time telemetry validation routines to automatically retry loose parameters before model ingestion.",
    ],
    deepDive: {
      problemSpace:
        "Standard naive chunking strategies split documents blindly based on character limits, shattering context boundaries. When processing multi-page commercial claims, critical cross-references are completely dropped, forcing the LLM to hallucinate data omissions.",
      solutionArchitecture:
        "We implemented an advanced multi-layered hierarchy. First, documents are processed using structural layouts where parent sections remain intact. Small recursive sentences are embedded to point directly back to their larger contextual bounds.",
      systemImpact:
        "By minimizing context fluff and running local Reciprocal Rank Fusion over hybrid keyword and vector nodes, we reduced tokens-per-request overhead while eliminating hallucinations across high-volume validation workflows.",
    },
  },
  {
    id: "hybrid-ocr-vision-llm",
    category: "Computer Vision & LLMs",
    title:
      "Optimizing Low-Latency Hybrid OCR & Vision–LLM Architectures for Unstructured Data",
    impact:
      "Accelerated raw imagery ingestion throughput across decentralized mobile entry layers.",
    technicalBrief:
      "Combined lightweight edge-processed layout analysis models with fallback multimodal vision pipelines to process complex transactional schemas with near-zero accuracy drift.",
    imgSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    tags: ["Vision-LLM", "LayoutLM", "Asynchronous Ingestion"],
    author: "Core Vision Squad",
    date: "May 19, 2026",
    challenge:
      "Handwritten and skewed physical receipts uploaded over varying mobile edge devices regularly broke legacy rigid template OCR engines, introducing massive manual remediation costs.",
    implementation: [
      "Deployed a localized edge pre-processing pipeline using LayoutLM to isolate structural bounding text boxes.",
      "Coupled low-power extraction passes with targeted GPT-4o Vision API updates for highly distorted sections.",
      "Built asynchronous Redis-backed message worker systems to guarantee data delivery in low-connectivity areas.",
    ],
    deepDive: {
      problemSpace:
        "Traditional OCR engines fail when handling real-world imagery containing geometric skews, camera shadows, or handwritten annotations.",
      solutionArchitecture:
        "The engine runs a two-tier verification step. A highly optimized localized LayoutLM container processes the layout tree instantly to establish positional landmarks.",
      systemImpact:
        "This hybrid structure offloads most standard layout extractions away from external billing meters while maintaining structural data mapping accuracy.",
    },
  },
  {
    id: "hardened-api-gateways",
    category: "Backend Security Matrix",
    title:
      "Hardening High-Concurrency API Gateways with Stateless Multi-Factor Session Controls",
    impact:
      "Secured enterprise cloud endpoints against high-volume algorithmic token attacks.",
    technicalBrief:
      "Implemented decentralized intermediate crypto-token validation rules using isolated caching layers to secure critical pricing nodes without reducing endpoint latency.",
    imgSrc:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    tags: ["Stateless Auth", "Redis Layering", "Rate-Limiting Matrix"],
    author: "SecOps Engineering",
    date: "April 08, 2026",
    challenge:
      "Automated scraping bots launched distributed token attacks against underlying calculation microservices, threatening system reliability and inflating API infrastructure overhead.",
    implementation: [
      "Configured sliding-window token bucket algorithms inside an isolated Redis caching layout layer.",
      "Developed secure custom Express and Node.js middleware modules running cryptographic validation calculations.",
      "Deployed role-based routing controls coupled with stateless session fingerprint tracking signatures.",
    ],
    deepDive: {
      problemSpace:
        "Standard database-backed user verification microservices create severe bottlenecks under automated scraper attacks.",
      solutionArchitecture:
        "We decoupled the gateway processing layer by introducing short-lived, cryptographically signed, stateless tokens.",
      systemImpact:
        "Invalid bot requests are dropped at the gateway perimeter while core calculation clusters remain protected from resource exhaustion.",
    },
  },
];

type ArchitecturePost = (typeof ARCHITECTURE_POSTS)[number];

export default function BlogListMatrix() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-14 text-slate-900 sm:py-18 lg:py-24">
      <div className="pointer-events-none absolute bottom-0 left-[8%] top-0 hidden w-px bg-slate-200 xl:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-14 sm:space-y-18 lg:space-y-24">
          {ARCHITECTURE_POSTS.map((post, index) => (
            <ArchitectureRow
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureRow({
  post,
  index,
}: {
  post: ArchitecturePost;
  index: number;
}) {
  return (
    <article className="grid grid-cols-1 items-start gap-6 sm:gap-8 xl:grid-cols-12">
      {/* Image */}
      <div className="space-y-4 xl:col-span-5">
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-900 shadow-md">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

          <Image
            src={post.imgSrc}
            alt={post.title}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 1279px) 100vw, 42vw"
            className="object-cover"
          />

          <div className="absolute left-3 top-3 z-20 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded border border-white/10 bg-slate-950/80 px-2.5 py-1 text-[8px] font-black uppercase tracking-widest text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-[9px]">
            <Cpu className="h-3 w-3 shrink-0 text-blue-400" />
            <span className="truncate">{post.category}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 px-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-slate-600 sm:text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm sm:space-y-6 sm:p-6 lg:p-8 xl:col-span-7">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:gap-3 sm:text-[10px]">
            <span className="font-black text-slate-500">
              {post.author}
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-300" />

            <span>{post.date}</span>
          </div>

          <h2 className="text-lg font-black leading-snug tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
            {post.title}
          </h2>
        </div>

        {/* Impact */}
        <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50/40 px-4 py-3.5">
          <span className="mb-1 flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-blue-600">
            <Shield className="h-3 w-3 text-blue-500" />
            Business Impact Vector
          </span>

          <p className="text-xs font-bold leading-relaxed text-blue-950 sm:text-sm">
            {post.impact}
          </p>
        </div>

        {/* Challenge and implementation */}
        <div className="grid grid-cols-1 gap-6 border-b border-slate-200 pb-6 pt-2 text-sm md:grid-cols-2">
          <div className="space-y-2">
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-950">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              The Structural Challenge
            </span>

            <p className="text-xs font-medium leading-relaxed text-slate-500 sm:text-sm">
              {post.challenge}
            </p>
          </div>

          <div className="space-y-2">
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-950">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Execution Blueprint
            </span>

            <ul className="space-y-2 text-xs font-medium text-slate-600 sm:text-sm">
              {post.implementation.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deep dive */}
        <div className="space-y-4 pt-2">
          <div className="inline-flex items-center gap-1.5 rounded bg-slate-100 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-slate-950">
            <Terminal className="h-3 w-3 text-slate-700" />
            Architectural Breakdown
          </div>

          <div className="space-y-4 text-xs font-medium leading-relaxed text-slate-600 sm:text-sm">
            <div>
              <strong className="mb-1 block font-bold text-slate-900">
                Problem Space Context:
              </strong>
              <p>{post.deepDive.problemSpace}</p>
            </div>

            <div>
              <strong className="mb-1 block font-bold text-slate-900">
                Deep Implementation Details:
              </strong>
              <p>{post.deepDive.solutionArchitecture}</p>
            </div>

            <div>
              <strong className="mb-1 block font-bold text-slate-900">
                System Efficiency:
              </strong>
              <p>{post.deepDive.systemImpact}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}