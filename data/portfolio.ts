export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Web" | "Mobile App" | "Enterprise Software" | "Developer Tools";
  techStack: string[];
  clientName: string;
  clientCountry: string;
  deepLink: string;
  isFeatured?: boolean;
  mode: "production" | "development"; // Tracking deployment lifecycle state
}

export const mockProjects: Project[] = [
  {
    id: "adjuster-assist",
    title: "AdjusterAssist Platform",
    description: "An advanced insurance claim drafting engine utilizing Retrieval-Augmented Generation (RAG), high-accuracy OCR text extraction, and a multi-tier classification workflow in a mobile ecosystem.",
    category: "Mobile App",
    techStack: ["Node.js", "Expo", "React Native", "OpenAI API", "Supabase"],
    clientName: "AdjusterAssist LLC",
    clientCountry: "USA",
    deepLink: "https://adjuster-assist.vercel.app",
    mode: "development"
  },
  {
    id: "claimscope",
    title: "ClaimScope™ Intelligence System",
    description: "A centralized governance intelligence platform designed to structure complex enterprise documentation, compliance workflows, and multi-tier decision accountability into a perfectly traceable operational framework.",
    category: "Web",
    techStack: ["Next.js", "Node.js", "Express", "Tailwind CSS"],
    clientName: "ClaimScope Consulting",
    clientCountry: "USA",
    deepLink: "https://claimscopeconsulting.com",
    isFeatured: true,
    mode: "production"
  },
  {
    id: "poolshare-mobility",
    title: "PoolShare Mobility Hub",
    description: "A smart carpooling and decentralized ride-sharing infrastructure engineered with custom route optimization, location matching middleware, and secure user profile pipelines.",
    category: "Mobile App",
    techStack: ["React Native", "Expo", "Node.js", "MariaDB", "Sentry"],
    clientName: "Maastrix Solutions Internal",
    clientCountry: "Global",
    deepLink: "https://github.com/maastrix-solutions",
    mode: "development"
  },
  {
    id: "hadms-jordan",
    title: "HADMS Humanitarian Platform",
    description: "A critical international aid management dashboard engineered to monitor distribution frameworks, optimize supply logs, and secure dynamic relief allocation workflows.",
    category: "Enterprise Software",
    techStack: ["Node.js", "Express", "MySQL", "Tailwind CSS"],
    clientName: "Humanitarian Aid & Relief Coordination",
    clientCountry: "Jordan",
    deepLink: "https://maastrixsolutions.com",
    isFeatured: true,
    mode: "production"
  },
  {
    id: "fetch-armor",
    title: "fetch-armor npm Package",
    description: "A lightweight, production-grade security wrapper and performance enhancement tool built to secure HTTP requests and maximize network velocity.",
    category: "Developer Tools",
    techStack: ["TypeScript", "Node.js", "npm Registry"],
    clientName: "Open Source Community",
    clientCountry: "Global",
    deepLink: "https://www.npmjs.com/package/fetch-armor",
    mode: "production"
  },
  {
    id: "csc-backend",
    title: "CSC Core Management Suite",
    description: "A centralized content administration panel featuring pricing API protection layers, metadata scrapers, and unified dynamic asset management.",
    category: "Web",
    techStack: ["Node.js", "Express", "MySQL", "Tailwind CSS"],
    clientName: "CSC Enterprises",
    clientCountry: "Australia",
    deepLink: "https://maastrixsolutions.com",
    mode: "production"
  },
  {
    id: "vanguard-settlement",
    title: "Vanguard Ledger Gateway",
    description: "High-concurrency fintech transactional engine built with robust error handling to satisfy banking compliance criteria and real-time ledger settlement.",
    category: "Enterprise Software",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis"],
    clientName: "Vanguard FinTech",
    clientCountry: "UK",
    deepLink: "https://maastrixsolutions.com",
    mode: "production"
  }
];