
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "brain" | "smartphone" | "code" | "commerce" | "wad" | "seo";
  keywords: string[];
  imgSrc: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-engineering",
    title: "Artificial Intelligence Solutions",
    description: "Architecting contextual LLM orchestration layers, native vision automation arrays, and continuous real-time speech processing interfaces to supercharge your business automation logic.",
    iconName: "brain",
    keywords: ["LLM Integration", "Vision AI", "Predictive Models", "RAG Pipelines"],
    imgSrc: "/assets/images/services/ai-solution.webp"
  },
  {
    id: "application-services",
    title: "Enterprise Application Services",
    description: "Engineering robust, scalable cross-platform mobile experiences utilizing Expo and React Native, managed through automated deployment tracks for high operational performance.",
    iconName: "smartphone",
    keywords: ["Android", "ios", "Cross-Platform", "CI/CD"],
    imgSrc: "/assets/images/services/mobile.webp"
  },
  {
    id: "web-design",
    title: "Premium UI/UX Web Design",
    description: "Designing corporate digital identities with pixel-perfect layouts designed carefully to elevate global brand visibility and turn visitors into long-term enterprise clients.",
    iconName: "code",
    keywords: ["Figma", "Design Systems", "Brand Identity", "UX Strategy"],
    imgSrc: "/assets/images/services/ui-ux.webp"
  },
  {
    id: "ecommerce",
    title: "High-Scale E-Commerce Systems",
    description: "Deploying bulletproof transactional checkout pipelines and inventory matrices that process secure operations seamlessly on any client screen width.",
    iconName: "commerce",
    keywords: ["Stripe", "Inventory Management", "Secure Checkout", "Scalable Storefront"], // Added
    imgSrc: "/assets/images/services/ecom.webp"
  },
  {
    id: "web-app",
    title: "Custom Web Applications (WAD)",
    description: "Building production-grade custom software products powered by secure Node.js architectures, dynamic metadata layers, and optimized database endpoints.",
    iconName: "wad",
    keywords: ["Node.js", "Express", "python", "Django" ,"Database Management", "API Architecture"],
    imgSrc: "/assets/images/services/web.webp"
  },
  {
    id: "seo",
    title: "Data-Driven SEO Services",
    description: "Maximizing organic search loops and indexability scores using strategic structural auditing routines that place your business directly in front of targeted global leads.",
    iconName: "seo",
    keywords: ["Technical SEO", "Backlink Strategy", "Content Audits", "Performance"], // Added
    imgSrc: "/assets/images/services/seo.webp"
  },
  {
    id: "intelligent-knowledge-search",
    title: "Intelligent Retrieval & Search Systems",
    description: "Developing hyper-personalized AI chatbots and advanced semantic search configurations that crawl complex internal knowledge bases to deliver instant, context-aware answers.",
    iconName: "brain", // You can map this to a unique icon like an 'eye' or 'search' icon if your component allows it later
    keywords: ["Semantic Search", "Vector Databases", "Knowledge Base", "AI Chatbots"], // Added
    imgSrc: "/assets/images/services/ai-search.webp"
  },
  {
    id: "workflow-automation",
    title: "Autonomous Workflow Automation",
    description: "Orchestrating zero-maintenance event-driven automation pipelines and agentic background loops that eliminate operational overhead and link isolated enterprise software stacks.",
    iconName: "wad", // Maps perfectly into your custom system workflow architectures
    keywords: ["Event-Driven", "API Integration", "Pipeline Automation", "Agentic Systems"],
    imgSrc: "/assets/images/services/workflow.webp"
  }
];