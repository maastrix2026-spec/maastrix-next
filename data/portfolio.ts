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
    deepLink: "/",
    mode: "development"
  },
  {
    id: "hadms",
    title: "HADMS: Aid Management",
    description: "A secure aid management system empowering admins to establish distribution zones, verify registered beneficiaries, coordinate localized volunteer assignments, and streamline individual or corporate donation workflows.",
    category: "Enterprise Software",
    techStack: ["React.js", "Laravel", "MySQL"],
    clientName: "Humanitarian Aid & Relief Coordination",
    clientCountry: "Jordan",
    deepLink: "https://hadms.org",
    isFeatured: true,
    mode: "production"
  },
  
  {
    id: "vtc",
    title: "Virtual tour Cafe",
    description: "The premier digital resource for real estate professionals, enabling users to seamlessly upload property profiles and generate interactive virtual tours to maximize market visibility and engagement.",
    category: "Web",
    techStack: ["Laravel", "React", "MySQL"],
    clientName: "Virtual tour Cafe",
    clientCountry: "UK",
    deepLink: "https://virtualtourcafe.com",
    mode: "production"
  },
  {
    id: "lims",
    title: "Land management System",
    description: "Land Information Management System is a web-based platform for managing Private, Government, and Forest land acquisition. It offers project, village, khata, and plot management, payment tracking, document management, Excel import/export, dashboards, reporting, and role-based access.",
    category: "Enterprise Software",
    techStack: ["Node.js", "Express", "SQL", "React"],
    clientName: "BNB Land Consultancy Pvt. Ltd",
    clientCountry: "India",
    deepLink: "https://lims.bnbconsultancy.in",
    mode: "production"
  }
];