export interface ProjectCard {
  id: string;
  category: string;
  title: string;
  impact: string;
  technicalBrief: string;
  author: string;
  date: string;
  imgSrc: string;
  tags: string[];
}

export const featuredWork: ProjectCard[] = [
  {
    id: "rag-architecture",
    category: "AI Engineering & Vector Infra",
    title: "Architecting Context-Aware RAG Pipelines for High-Throughput Insurance Claim Audits",
    impact: "Reduced verification latency by 40% while achieving deterministic factual tracking outputs.",
    technicalBrief: "Engineered localized hybrid chunking matrices integrated with dynamic sliding-window embedding pipelines to prevent long-context retrieval degradation.",
    author: "AI Platform Group",
    date: "June 24, 2026",
    imgSrc: "/assets/images/rag.webp",
    tags: ["pgvector", "Hybrid Search", "Contextual Chunking"]
  },
  {
    id: "ocr-vision-pipeline",
    category: "Computer Vision & LLMs",
    title: "Optimizing Low-Latency Hybrid OCR & Vision-LLM Architectures for Unstructured Data",
    impact: "Accelerated raw imagery ingestion throughput across decentralized mobile entry layers.",
    technicalBrief: "Combined lightweight edge-processed layout analysis models with fallback multimodal vision pipelines to process complex transactional schemas with near-zero accuracy drift.",
    author: "Core Vision Squad",
    date: "May 19, 2026",
    imgSrc: "/assets/images/llm.webp",
    tags: ["Vision-LLM", "LayoutLM", "Asynchronous Ingestion"]
  },
  {
    id: "mfa-api-gateway",
    category: "Backend Security Matrix",
    title: "Hardening High-Concurrency API Gateways with Stateless Multi-Factor Session Controls",
    impact: "Secured enterprise cloud endpoints against high-volume algorithmic token attacks.",
    technicalBrief: "Implemented decentralized, intermediate crypto-token validation rules using isolated caching layers to secure critical pricing nodes without reducing endpoint latency.",
    author: "SecOps Engineering",
    date: "April 08, 2026",
    imgSrc: "/assets/images/secure.webp",
    tags: ["Stateless Auth", "Redis Layering", "Rate-Limiting Matrix"]
  }
];