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

export interface ExperienceMetric {
  value: string;
  label: string;
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

export interface ProjectCategoryCard {
  title: string;
  description: string;
}

export interface TechnicalHighlights {
  technologies: string[];
  practices: string[];
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
      "New Hire",
      "Team: Azure Fabric OneLake Shortcuts",
    ],
    technologies: [
      "Azure Fabric",
      "OneLake Shortcuts",
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

export const experienceMetrics: ExperienceMetric[] = [
  { value: "800+", label: "Remote employees served daily" },
  { value: "500K+", label: "Loan applications secured" },
  { value: "20%", label: "Reduction in data breaches" },
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

export const projectCategoryCards: ProjectCategoryCard[] = [
  {
    title: "Healthcare Platform",
    description:
      "Medical data analytics, patient management, clinical insights",
  },
  {
    title: "Full-Stack Applications",
    description: "End-to-end web applications with modern frameworks",
  },
  {
    title: "System Programming",
    description: "Low-level C programming, file systems, shell development",
  },
  {
    title: "Data Management Solutions",
    description: "Database design, data processing, and management systems",
  },
];

export const technicalHighlights: TechnicalHighlights = {
  technologies: [
    "Healthcare Analytics & Medical Data Processing",
    "Blockchain & Web3 Development",
    "Computer Vision (OpenCV) & OCR (Tesseract)",
    "System-level Programming (C, FUSE)",
    "Full-Stack Development (Next.js, React, FastAPI)",
    "Database Design (PostgreSQL, Prisma)",
  ],
  practices: [
    "Comprehensive testing (Unit & Manual)",
    "Modern development workflows",
    "Cross-platform compatibility",
    "User-centered design principles",
  ],
};

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
    title: "Scale & Impact",
    bullets: [
      "Served 800+ remote employees daily",
      "Enhanced security for 500,000+ loan applications",
      "Managed 1,000+ database entries",
      "Reduced data breaches by 20%",
    ],
  },
  {
    title: "Key Achievements",
    bullets: [
      "Saved 10+ hours of meeting time weekly",
      "Built end-to-end full-stack applications",
      "Optimized blockchain transaction monitoring",
      "Implemented security and verification systems",
      "Designed scalable database architectures",
    ],
  },
];

export const interestCards: InterestCard[] = [
  {
    title: "Full-Stack Development",
    description: "End-to-end application development with modern frameworks",
  },
  {
    title: "Blockchain & Web3",
    description:
      "NFT platforms, transaction monitoring, and decentralized applications",
  },
  {
    title: "Security & Data Protection",
    description: "Building secure systems and protecting user data",
  },
  {
    title: "System Design & Scalability",
    description:
      "Designing systems that scale to hundreds of thousands of users",
  },
];

export const contactIntro =
  "I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a conversation about technology. Feel free to reach out!";

export const contactInfoCards: ContactCard[] = [
  { label: "Email", value: "sinhadevaansh@gmail.com" },
  { label: "Phone", value: "(608) 335-0973" },
  { label: "Location", value: "Madison, WI" },
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
