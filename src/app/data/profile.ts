export interface ResumeLinks {
  pdf: string;
  fileName: string;
}

export interface Education {
  institution: string;
  program: string;
  duration: string;
  gpa: string;
  achievements: string[];
  crestImage: string;
  crestAlt: string;
}

export interface Employment {
  company: string;
  role: string;
  team: string;
  duration: string;
  logoImage: string;
  logoAlt: string;
}

export interface ExperiencePeriod {
  duration: string;
  achievements: string[];
  technologies: string[];
}

export interface ExperienceEntry {
  company: string;
  position: string;
  location: string;
  periods?: ExperiencePeriod[];
  duration?: string;
  achievements?: string[];
  technologies?: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  detailsLink?: string;
  ctaLabel?: string;
  isExternal?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SkillHighlight {
  title: string;
  bullets: string[];
}

export interface InterestCard {
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  description: string;
  href: string;
}

export interface ContactCard {
  label: string;
  value: string;
}

export interface StatusCard {
  title: string;
  description: string;
}

export const aboutSummary = {
  paragraphs: [
    "Yo, I'm Devaansh. I'm a software engineer at Microsoft and a recent UW-Madison graduate with a BS in Computer Science and a minor in Game Design.",
    "I like building useful software, tinkering with computers, playing video games, and working through puzzles until the pieces click. Feel free to reach out to me to talk about the daily NY Times Sudoku!",
  ],
  resume: {
    pdf: "/Devaansh_Sinha_resume.pdf",
    fileName: "Devaansh_Sinha_Resume.pdf",
  } satisfies ResumeLinks,
  employment: {
    company: "Microsoft",
    role: "Software Engineer",
    team: "Azure Fabric OneLake Shortcuts",
    duration: "May 2026 – Present",
    logoImage: "/images/microsoft.png",
    logoAlt: "Microsoft logo",
  } satisfies Employment,
  education: {
    institution: "University of Wisconsin Madison",
    program: "BS in Computer Science, Minor in Game Design",
    duration: "Sept 2022 – Dec 2025",
    gpa: "GPA: 3.92/4.0",
    achievements: [],
    crestImage: "/images/WX9DTCt5_400x400.png",
    crestAlt: "University of Wisconsin Madison logo",
  } satisfies Education,
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Microsoft",
    position: "Software Engineer",
    location: "Redmond, WA",
    duration: "May 2026 – Present",
    achievements: [
      "Onboarded tier one enterprise partners and mirrored catalogs directly into OneLake across AWS, GCP, and Azure engines, while supporting connector integrations",
      "Extended internal microservices and APIs with service-to-service (S2S) token exchange and resolved cache invalidation bottlenecks to ensure metadata consistency",
      "Developed AI-driven developer tooling to automate SDLC workflows, accelerating team-wide testing, code reviews, and delivery cycles",
      "Built automated integration and end-to-end test suites across heterogeneous cloud environments to validate end-to-end shortcut reliability",
    ],
    technologies: [
      "Azure Fabric",
      "OneLake Shortcuts",
      "AWS",
      "GCP",
      "Azure",
      "Microservices",
      "APIs",
      "Distributed Systems",
      "AI Developer Tooling",
      "Integration & E2E Testing",
    ],
  },
  {
    company: "Gemini",
    position: "Software Developer / Software Engineering Intern",
    location: "New York, NY",
    periods: [
      {
        duration: "Feb 2026 – Feb 2026",
        achievements: [
          "Worked on an internal full-stack admin platform using TypeScript, React, and Scala, strengthening error handling and improving system observability",
          "Added and refined gRPC service endpoints to surface operational metadata and streamline internal access to system state",
        ],
        technologies: [
          "TypeScript",
          "React",
          "Scala",
          "gRPC",
          "Internal Tooling",
          "Observability",
        ],
      },
      {
        duration: "Jun 25 – Aug 25",
        achievements: [
          "Redesigned a Django-based backend microservice for Ethereum token activity, transitioning listener architecture to token-level activity and reducing production monitoring load by 70%",
          "Stabilized Kubernetes workloads by tuning CPU and memory requests and limits, eliminating OOMKills and reducing pod restart rates in production",
          "Built an automated token pruning pipeline that removed unsupported NFTs, cut PostgreSQL storage by 200GB, and improved query performance by 40%",
          "Led API modernization across Stripe billing and external wallet services, refactoring legacy endpoints, maintaining SDK compliance, cutting payload size by 60%, and improving wallet-heavy load times by 2.5 seconds",
          "Collaborated one-on-one with a Project Manager to design and launch a Showcase section on user profiles, allowing creators to highlight pinned collections and increasing interactions with showcased items by 25%",
          "Developing Gemini Horizon Wallet expansion with a dedicated NFT workspace that mirrors MetaMask-class management flows for ERC-721 and ERC-1155 assets",
          "Delivered smart-contract powered NFT batch transfer for Horizon Wallet, enabling multi-token sends in a single transaction and reducing gas spend for power users",
        ],
        technologies: [
          "Django",
          "Blockchain",
          "Web3",
          "Kubernetes",
          "PostgreSQL",
          "Stripe",
          "API Development",
          "Smart Contracts",
          "Wallet Infrastructure",
          "Performance Optimization",
        ],
      },
      {
        duration: "Jun 24 – Aug 24",
        achievements: [
          "Built and deployed an internal automation platform using Django, AWS, and PostgreSQL for 800+ engineers, eliminating 10+ hours of manual reporting weekly",
          "Developed an interactive team management dashboard inside Slack with configurable reminders, automated prompts, and work summaries, improving engineering lead oversight and team transparency",
          "Owned backend features end-to-end across technical design, implementation, testing, code review, and production releases within Agile SDLC workflows",
          "Designed PostgreSQL database architecture managing 1,000+ standup entries with optimized queries for recaps, statistical insights, and historical data retrieval",
          "Developed calendar management system for NFT Marketplace drops, streamlining scheduling workflow for product releases",
        ],
        technologies: [
          "Django",
          "AWS",
          "PostgreSQL",
          "Slack",
          "REST APIs",
          "NFT",
          "Agile",
        ],
      },
    ],
  },
  {
    company: "Bajaj Finance Direct Limited",
    position: "Software Engineer",
    location: "Pune, India",
    duration: "December 2022 – Aug 2023",
    achievements: [
      "Built a highly scalable spam detection service using Spring Boot and Elasticsearch, securing 500K+ loan applications with 95% accuracy through dynamic database cross-referencing",
      "Developed ID verification system and authorization services handling 10K+ daily authentication requests for company web services",
      "Enhanced data protection by securing 15+ open endpoints and implementing access controls across mission-critical backend systems, achieving a 20% reduction in reported data breaches",
    ],
    technologies: [
      "Spring Boot",
      "Elasticsearch",
      "Security",
      "Authentication",
      "Data Protection",
    ],
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    title: "Remnis",
    description:
      "Developing a local-first work memory app for macOS developers with a Tauri + React desktop client and Python sidecar that captures active-window context, normalizes workflow events, and uses an on-device RAG pipeline with LanceDB and open-source embeddings to make past errors, files, and task context semantically searchable without sending data to the cloud.",
    technologies: [
      "Tauri",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Tailwind CSS",
      "macOS",
      "LanceDB",
      "Embeddings",
    ],
    category: "Developer Productivity Tool",
    detailsLink: "/projects/remnis",
    ctaLabel: "View Project Details",
  },
  {
    title: "Cogniflow",
    description:
      "An on-chain intelligence agent that ingests Ethereum wallet activity into Supabase Postgres, enriches it with CoinGecko pricing and OpenAI embeddings, and exposes deterministic APIs, a Next.js dashboard, and chat tooling for semantic portfolio insights.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "OpenAI",
      "CoinGecko",
      "Ethereum",
    ],
    category: "Web3 Analytics Platform",
    detailsLink: "/projects/cogniflow",
    ctaLabel: "View Project Details",
  },
  {
    title: "GlycoNova",
    description:
      "A comprehensive Type 1 diabetes management platform built with Next.js and TypeScript. Features data processing and analysis for Dexcom G6/G7 & Omnipod 5 devices, intelligent glucose pattern recognition, personalized insulin recommendations, and secure data handling. Built by a T1D veteran with 16 years of experience in collaboration with endocrinologists, providing free access to everyone.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Clerk",
      "Framer Motion",
      "Tailwind CSS",
      "Data Visualization",
      "Healthcare Analytics",
    ],
    category: "Healthcare Platform",
    detailsLink: "/projects/glyconova",
  },
  {
    title: "ShelfWise",
    description:
      "A comprehensive pantry management app utilizing Python, OpenCV, and Tesseract for receipt scanning, FastAPI and Prisma for backend, and React/TypeScript for frontend. Integrated NLP-based assistant for hands-free interaction, optimizing food tracking, recipe suggestions, and reducing waste.",
    technologies: [
      "Python",
      "OpenCV",
      "Tesseract",
      "FastAPI",
      "Prisma",
      "React",
      "TypeScript",
      "OpenAI",
    ],
    category: "Full-Stack Application",
    detailsLink: "/projects/shelfwise",
  },
  {
    title: "Custom C Shell",
    description:
      "Created a C-based Unix shell with advanced features such as command execution, history tracking, and variable management. Supported built-in commands like cd and exit, enabling users to navigate and interact with the system through a custom command-line interface.",
    technologies: ["C", "Unix", "System Programming", "CLI"],
    category: "System Programming",
  },
  {
    title: "Hospital Record System",
    description:
      "Developed a comprehensive program using Java to help clinics keep a record of their patients that have been treated or are in queue based on level of medical urgency, age, and other information. Implemented extensive unit and manual testing to ensure reliability.",
    technologies: ["Java", "JUnit", "Data Structures", "Testing"],
    category: "Healthcare Software",
  },
  {
    title: "Custom File System",
    description:
      "Created a custom user-level C-based file system using FUSE that handles tasks like reading, writing, making directories, deleting files, and more. Implemented low-level file operations and memory management.",
    technologies: ["C", "FUSE", "File Systems", "Linux"],
    category: "System Programming",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      "C/C++",
      "Java",
      "Python",
      "Swift",
      "SQL",
      "R",
      "HTML/CSS",
      "Assembly",
      "Bash",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: "Technologies",
    skills: [
      "AWS",
      "Docker",
      "Google Cloud Platform",
      "Git",
      "Hadoop",
      "Spark",
      "Kafka",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Blockchain",
      "Web3",
      "NFT",
      "Stripe",
      "OpenAI",
      "Blender",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Django",
      "PyTorch",
      "Spring Boot",
      "JUnit",
      "Mockito",
      "Pandas",
      "Elasticsearch",
      "React",
      "Next.js",
      "FastAPI",
      "Prisma",
      "Clerk",
      "Framer Motion",
      "Tailwind CSS",
      "CUDA",
    ],
  },
  {
    category: "Coursework",
    skills: [
      "Computer Graphics",
      "Computer Vision",
      "Operating Systems",
      "Big Data",
      "Algorithms",
      "Data Structures",
      "Machine Organization",
      "Discrete Math",
      "Linear Algebra",
      "Introduction to AI",
      "Introductory Applied Statistics",
      "Object Oriented Programming",
    ],
  },
];

export const skillHighlights: SkillHighlight[] = [
  {
    title: "Systems & Scale",
    bullets: [
      "Mirrored enterprise partner catalogs into OneLake across AWS, GCP, and Azure",
      "Built internal platform serving 800+ engineers, cutting 10+ weekly manual reporting hours",
      "Redesigned backend microservices, boosting production monitoring efficiency by 70%",
      "Engineered spam detection microservice safeguarding 500K+ loan applications (95% accuracy)",
    ],
  },
  {
    title: "Engineering & Tooling",
    bullets: [
      "Implemented service-to-service (S2S) token exchange and distributed cache consistency",
      "Built AI-driven developer tooling automating team testing, code reviews, and SDLC cycles",
      "Developed automated integration and E2E test suites across multi-cloud environments",
      "Shipped internal admin and observability tooling using TypeScript, React, Scala, and gRPC",
    ],
  },
];

export const interestCards: InterestCard[] = [
  {
    title: "Distributed Systems & Cloud",
    description:
      "Cross-cloud catalog integrations, microservices, and distributed data fabrics across Azure, AWS, and GCP",
  },
  {
    title: "Developer Tooling & Local AI",
    description:
      "Local-first productivity tools, on-device vector search (RAG), and automated SDLC workflows",
  },
  {
    title: "Systems Programming & OS",
    description:
      "Custom file systems (FUSE), Unix shells, low-level C engineering, and memory-efficient architectures",
  },
  {
    title: "Backend & API Architecture",
    description:
      "High-throughput microservices, resilient data pipelines, and service-to-service auth systems",
  },
];

export const contactIntro =
  "I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a conversation about technology. Feel free to reach out!";

export const contactInfoCards: ContactCard[] = [
  { label: "Email", value: "sinhadevaansh@gmail.com" },
  { label: "Phone", value: "(608) 335-0973" },
  { label: "Location", value: "Seattle, WA" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    description: "Devaansh Sinha",
    href: "https://www.linkedin.com/in/devaanshsinha/",
  },
  {
    label: "GitHub",
    description: "devaanshsinha",
    href: "https://www.github.com/devaanshsinha/",
  },
  {
    label: "Resume",
    description: "View or Download PDF",
    href: "/Devaansh_Sinha_resume.pdf",
  },
];

export const statusCards: StatusCard[] = [
  {
    title: "Education",
    description: "Recent UW Madison graduate\nBS Computer Science, Minor in Game Design",
  },
  {
    title: "Work",
    description:
      "Software Engineer at Microsoft\nAzure Fabric OneLake Shortcuts",
  },
];

export const callToAction = {
  heading: "Let's Build Something Amazing Together!",
  body: "Whether you have a project in mind, want to discuss opportunities, or just want to connect, I'd love to hear from you.",
  primary: {
    label: "Send Email",
    href: "mailto:sinhadevaansh@gmail.com?subject=Let's Connect!",
  },
  secondary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/devaanshsinha/",
  },
};
