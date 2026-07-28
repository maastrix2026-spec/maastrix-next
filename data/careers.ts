export interface JobPosition {
  id: string;
  title: string;
  department: "Engineering" | "Design" | "Growth & Marketing" | "Operations";
  location: string;
  type: "Full-Time" | "Part-Time" | "Remote";
  experience: string;
  description: string;
  longDescription: string;
  responsibilities: string[];
  requirements: string[];
  preferredStack: string[];
}

export const openPositions: JobPosition[] = [
  // {
  //   id: "full-stack-developer",
  //   title: "Full Stack Developer",
  //   department: "Engineering",
  //   location: "Bhubaneswar",
  //   type: "Full-Time",
  //   experience: "1+ Years",
  //   description:
  //     "Build scalable enterprise web applications, architect high-concurrency API gateways, and manage robust database systems integrated with modern AI infrastructure.",
  //   longDescription:
  //     "We are seeking a motivated Full Stack Developer to spearhead the architecture, security, and continuous deployment of our enterprise platforms. In this role, you will take ownership of building scalable real-time systems using Node.js and Next.js, managing custom middleware, and implementing AI-driven features. You will collaborate with our engineering team to deliver high-quality, production-grade code for international clients.",
  //   responsibilities: [
  //     "Develop and maintain high-performance web applications using Next.js and React.",
  //     "Architect, optimize, and maintain high-availability Node.js/Express backend APIs.",
  //     "Manage relational database systems (MySQL/MariaDB/Supabase) with a focus on query optimization.",
  //     "Integrate advanced artificial intelligence pipelines, focusing on text-generation and automated workflows.",
  //     "Write clean, reusable, and scalable code, contributing to internal shared NPM registries and core modules.",
  //     "Collaborate with internal teams and international clients to deliver impactful software solutions.",
  //   ],
  //   requirements: [
  //     "1+ years of hands-on production experience with Node.js and Next.js (Mandatory).",
  //     "Strong command over JavaScript/TypeScript and core frontend-to-backend integration.",
  //     "Experience with REST API design, secure authentication patterns, and middleware configuration.",
  //     "Familiarity with SQL database design (MySQL, MariaDB) and version control (Git).",
  //     "Understanding of SSR/SSG concepts in Next.js and systemic logging/debugging practices.",
  //     "Strong communication skills with the ability to thrive in a fast-paced environment.",
  //   ],
  //   preferredStack: [
  //     "Node.js",
  //     "Express",
  //     "TypeScript",
  //     "Next.js",
  //     "React Native",
  //     "MongoDB",
  //     "MySQL",
  //     "Supabase",
  //     "OpenAI API",
  //   ],
  // },
  {
    id: "it-team-lead",
    title: "IT Team Lead",
    department: "Engineering",
    location: "Bhubaneswar",
    type: "Full-Time",
    experience: "4-8 Years",
    description:
      "Lead high-impact engineering teams, architect robust multi-stack solutions, and act as the technical bridge between international clients and our development lifecycle.",
    longDescription:
      "We are seeking a seasoned IT Team Lead to oversee the end-to-end development of enterprise-grade web and mobile applications. In this role, you will be the primary technical authority, responsible for mentoring developers, defining project scopes, and ensuring architectural integrity. You will combine your deep expertise in PHP, Node.js, and Python with hands-on infrastructure management and direct client advocacy to drive projects from proposal to production.",
    responsibilities: [
      "Lead, mentor, and foster growth within the development team to ensure the delivery of high-quality, performant software.",
      "Translate complex client needs into detailed project scope documents, technical proposals, and accurate effort estimates.",
      "Serve as the lead technical point of contact for international clients, conducting discovery sessions and providing strategic project updates.",
      "Drive technical decision-making, including application architecture design, code review protocols, and technology stack selection.",
      "Oversee end-to-end DevOps, including server configuration, cloud infrastructure management (AWS/Azure/DigitalOcean), and CI/CD pipeline optimization.",
      "Troubleshoot mission-critical technical blockers and enforce security and performance best practices across the project lifecycle.",
    ],
    requirements: [
      "4-8 years of professional experience in full-stack development and team leadership.",
      "Expert-level proficiency in PHP (Laravel), Node.js, and Python.",
      "Advanced experience in cloud infrastructure management (AWS, Azure, or DigitalOcean) and server-side deployment.",
      "Proven track record in project lifecycle management: from initial requirement gathering and scoping to deployment.",
      "Exceptional English communication skills with demonstrated experience managing stakeholders from international markets.",
      "Strong analytical mindset with the ability to manage multiple concurrent projects without compromising quality.",
    ],
    preferredStack: [
      "Laravel",
      "Node.js",
      "Python",
      "AWS/Azure",
      "Docker/Kubernetes",
      "CI/CD (GitHub Actions/Jenkins)",
      "React Native",
    ],
  },
  // {
  //   id: "web-designer",
  //   title: "Web Designer",
  //   department: "Design",
  //   location: "Bhubaneswar",
  //   type: "Full-Time",
  //   experience: "1+ Years",
  //   description:
  //     "Craft pixel-perfect, responsive web experiences, bridge the gap between creative design and code, and optimize high-traffic landing pages for conversion and SEO.",
  //   longDescription:
  //     "We are looking for a creative and detail-oriented Web Designer to join our design team. You will be responsible for translating high-fidelity prototypes from Figma and Photoshop into clean, maintainable HTML/CSS templates. Beyond design, you will manage WordPress ecosystems and leverage cutting-edge AI tools to accelerate development workflows, ensuring every site we launch is SEO-optimized and cross-browser compatible.",
  //   responsibilities: [
  //     "Design intuitive, user-centric website layouts, UI dashboards, and high-conversion landing pages.",
  //     "Perform pixel-perfect conversion of designs (Figma, Canva, PSD) into responsive, high-performance HTML/CSS/JavaScript templates.",
  //     "Develop, maintain, and customize robust WordPress themes and templates to meet diverse client requirements.",
  //     "Ensure total mobile responsiveness, cross-browser consistency, and adherence to SEO best practices.",
  //     "Actively utilize AI-assisted tools (ChatGPT, Claude, etc.) to streamline coding, content population, and design workflows.",
  //     "Collaborate with backend developers to integrate designs seamlessly with server-side logic.",
  //   ],
  //   requirements: [
  //     "1+ year of professional experience in web design and frontend development.",
  //     "Strong proficiency in HTML5, CSS3, JavaScript (ES6+), Bootstrap, and jQuery.",
  //     "Demonstrated expertise in WordPress theme customization and plugin management.",
  //     "Deep familiarity with industry-standard design tools including Figma, Adobe Photoshop, and Canva.",
  //     "Proven track record of converting static design files (PSD/Figma) into functional, responsive web layouts.",
  //     "Strong understanding of modern SEO principles and cross-browser testing methodologies.",
  //   ],
  //   preferredStack: [
  //     "HTML5/CSS3",
  //     "Bootstrap",
  //     "WordPress",
  //     "Figma",
  //     "Adobe Photoshop",
  //     "JavaScript/jQuery",
  //     "Tailwind CSS",
  //   ],
  // },
  // Add other jobs here matching the JobPosition interface structure...
];
