export interface ResumeLinks {
  pdf: string;
  fileName: string;
}

export interface Education {
  institution: string;
  program: string;
  duration: string;
  achievements: string[];
  crestImage: string;
  crestAlt: string;
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
    "Hello! I'm Devaansh Sinha, a Computer Science student at the University of Wisconsin Madison passionate about building innovative digital experiences and solving complex problems through code.",
    "With hands-on experience from internships at Gemini and Bajaj Finance Direct Limited, I specialize in full-stack development, system design, and security. I've developed tools serving hundreds of thousands of users and built systems that enhance security for large-scale applications."
  ],
  resume: {
    pdf: "/Devaansh_Sinha_resume.pdf",
    fileName: "Devaansh_Sinha_Resume.pdf"
  } satisfies ResumeLinks,
  education: {
    institution: "University of Wisconsin Madison",
    program: "BS in Computer Science, Certificate in Game Design",
    duration: "Sept 2022 – May 2026 | GPA: 3.9/4.0",
    achievements: [],
    crestImage: "/images/WX9DTCt5_400x400.png",
    crestAlt: "University of Wisconsin Madison logo"
  } satisfies Education
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Gemini",
    position: "Software Engineering Intern",
    location: "New York, NY",
    periods: [
      {
        duration: "June 2025 – Present",
        achievements: [
          "Redesigned Ethereum-based NFT tracking system, transitioning blockchain listener architecture to token-level activity and reducing network monitoring load by 70% while streamlining internal data management",
          "Implemented automated removal of unsupported NFTs, reducing on-screen clutter, cutting database size by 200GB, and improving query performance by 40%",
          "Upgraded external wallet API to eliminate redundant payloads, cutting data transfer size by 60% and improving load times for wallet-rich user accounts by 2.5 seconds",
          "Collaborated one-on-one with a Project Manager to design and launch a Showcase section on user profiles, allowing creators to highlight pinned collections and increasing interactions with showcased items by 25%",
          "Leading Gemini Horizon Wallet expansion with a dedicated NFT workspace that mirrors MetaMask-class management flows for ERC-721 and ERC-1155 assets",
          "Delivered smart-contract powered NFT batch transfer for Horizon Wallet, enabling multi-token sends in a single transaction and reducing gas spend for power users"
        ],
        technologies: [
          "Blockchain",
          "Web3",
          "PostgreSQL",
          "API Development",
          "Smart Contracts",
          "Wallet Infrastructure",
          "Performance Optimization"
        ]
      },
      {
        duration: "June 2024 – August 2024",
        achievements: [
          "Developed and deployed custom standup tool using Django and AWS, automating daily submissions for 800+ remote employees and saving 10+ hours of meeting time weekly",
          "Built comprehensive team management dashboard with custom reminders, standup questions, and work analysis features, increasing manager productivity by 25%",
          "Designed PostgreSQL database architecture managing 1,000+ standup entries with optimized queries for recaps, statistical insights, and historical data retrieval",
          "Developed calendar management system for NFT Marketplace drops, streamlining scheduling workflow for product releases"
        ],
        technologies: ["Django", "AWS", "PostgreSQL", "REST APIs", "NFT"]
      }
    ]
  },
  {
    company: "Bajaj Finance Direct Limited",
    position: "Software Engineering Intern",
    location: "Pune, India",
    duration: "June 2023 – Aug 2023",
    achievements: [
      "Built spam detection service using Spring Boot and Elasticsearch, securing 500K+ loan applications with 95% accuracy rate through dynamic database cross-referencing",
      "Developed ID verification system and authorization services handling 10K+ daily authentication requests for company web services",
      "Enhanced data protection by securing 15+ open endpoints and implementing access controls, achieving 20% reduction in reported data breaches"
    ],
    technologies: ["Spring Boot", "Elasticsearch", "Security", "Authentication", "Data Protection"]
  }
];

export const experienceMetrics: ExperienceMetric[] = [
  { value: "800+", label: "Remote employees served daily" },
  { value: "500K+", label: "Loan applications secured" },
  { value: "20%", label: "Reduction in data breaches" }
];

export const projectEntries: ProjectEntry[] = [
  {
    title: "Cogniflow",
    description:
      "An on-chain intelligence agent that ingests Ethereum wallet activity into Supabase Postgres, enriches it with CoinGecko pricing and OpenAI embeddings, and exposes deterministic APIs, a Next.js dashboard, and chat tooling for semantic portfolio insights.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "pgvector", "OpenAI", "CoinGecko", "Ethereum"],
    category: "Web3 Analytics Platform",
    detailsLink: "/projects/cogniflow",
    ctaLabel: "View Project Details"
  },
  {
    title: "GlycoNova",
    description:
      "A comprehensive Type 1 diabetes management platform built with Next.js and TypeScript. Features data processing and analysis for Dexcom G6/G7 & Omnipod 5 devices, intelligent glucose pattern recognition, personalized insulin recommendations, and secure data handling. Built by a T1D veteran with 16 years of experience in collaboration with endocrinologists, providing free access to everyone.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Framer Motion", "Tailwind CSS", "Data Visualization", "Healthcare Analytics"],
    category: "Healthcare Platform",
    detailsLink: "/projects/glyconova"
  },
  {
    title: "ShelfWise",
    description:
      "A comprehensive pantry management app utilizing Python, OpenCV, and Tesseract for receipt scanning, FastAPI and Prisma for backend, and React/TypeScript for frontend. Integrated NLP-based assistant for hands-free interaction, optimizing food tracking, recipe suggestions, and reducing waste.",
    technologies: ["Python", "OpenCV", "Tesseract", "FastAPI", "Prisma", "React", "TypeScript", "OpenAI"],
    category: "Full-Stack Application",
    detailsLink: "/projects/shelfwise"
  },
  {
    title: "Custom C Shell",
    description:
      "Created a C-based Unix shell with advanced features such as command execution, history tracking, and variable management. Supported built-in commands like cd and exit, enabling users to navigate and interact with the system through a custom command-line interface.",
    technologies: ["C", "Unix", "System Programming", "CLI"],
    category: "System Programming"
  },
  {
    title: "Hospital Record System",
    description:
      "Developed a comprehensive program using Java to help clinics keep a record of their patients that have been treated or are in queue based on level of medical urgency, age, and other information. Implemented extensive unit and manual testing to ensure reliability.",
    technologies: ["Java", "JUnit", "Data Structures", "Testing"],
    category: "Healthcare Software"
  },
  {
    title: "Custom File System",
    description:
      "Created a custom user-level C-based file system using FUSE that handles tasks like reading, writing, making directories, deleting files, and more. Implemented low-level file operations and memory management.",
    technologies: ["C", "FUSE", "File Systems", "Linux"],
    category: "System Programming"
  }
];

export const projectCategoryCards: ProjectCategoryCard[] = [
  {
    title: "Healthcare Platform",
    description: "Medical data analytics, patient management, clinical insights"
  },
  {
    title: "Full-Stack Applications",
    description: "End-to-end web applications with modern frameworks"
  },
  {
    title: "System Programming",
    description: "Low-level C programming, file systems, shell development"
  },
  {
    title: "Data Management Solutions",
    description: "Database design, data processing, and management systems"
  }
];

export const technicalHighlights: TechnicalHighlights = {
  technologies: [
    "Healthcare Analytics & Medical Data Processing",
    "Blockchain & Web3 Development",
    "Computer Vision (OpenCV) & OCR (Tesseract)",
    "System-level Programming (C, FUSE)",
    "Full-Stack Development (Next.js, React, FastAPI)",
    "Database Design (PostgreSQL, Prisma)"
  ],
  practices: [
    "Comprehensive testing (Unit & Manual)",
    "Modern development workflows",
    "Cross-platform compatibility",
    "User-centered design principles"
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C/C++", "Java", "Python", "Swift", "SQL", "R", "HTML/CSS", "Assembly", "Bash", "JavaScript", "TypeScript"]
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
      "Blender"
    ]
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
      "CUDA"
    ]
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
      "Object Oriented Programming"
    ]
  }
];

export const skillHighlights: SkillHighlight[] = [
  {
    title: "Scale & Impact",
    bullets: [
      "Served 800+ remote employees daily",
      "Enhanced security for 500,000+ loan applications",
      "Managed 1,000+ database entries",
      "Reduced data breaches by 20%"
    ]
  },
  {
    title: "Key Achievements",
    bullets: [
      "Saved 10+ hours of meeting time weekly",
      "Built end-to-end full-stack applications",
      "Optimized blockchain transaction monitoring",
      "Implemented security and verification systems",
      "Designed scalable database architectures"
    ]
  }
];

export const interestCards: InterestCard[] = [
  {
    title: "Full-Stack Development",
    description: "End-to-end application development with modern frameworks"
  },
  {
    title: "Blockchain & Web3",
    description: "NFT platforms, transaction monitoring, and decentralized applications"
  },
  {
    title: "Security & Data Protection",
    description: "Building secure systems and protecting user data"
  },
  {
    title: "System Design & Scalability",
    description: "Designing systems that scale to hundreds of thousands of users"
  }
];

export const contactIntro =
  "I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a conversation about technology. Feel free to reach out!";

export const contactInfoCards: ContactCard[] = [
  { label: "Email", value: "sinhadevaansh@gmail.com" },
  { label: "Phone", value: "(608) 335-0973" },
  { label: "Location", value: "Madison, WI" }
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    description: "linkedin.com/in/devaanshsinha",
    href: "https://www.linkedin.com/in/devaanshsinha/"
  },
  {
    label: "GitHub",
    description: "devaanshsinha",
    href: "https://www.github.com/devaanshsinha/"
  },
  {
    label: "Resume",
    description: "View or Download PDF",
    href: "/Devaansh_Sinha_resume.pdf"
  }
];

export const statusCards: StatusCard[] = [
  {
    title: "Education",
    description: "Senior year at UW Madison\nGraduating May 2026"
  },
  {
    title: "Work",
    description: "Software Engineering Intern at Gemini\nOpen to new opportunities"
  }
];

export const callToAction = {
  heading: "Let's Build Something Amazing Together!",
  body:
    "Whether you have a project in mind, want to discuss opportunities, or just want to connect, I'd love to hear from you.",
  primary: {
    label: "Send Email",
    href: "mailto:sinhadevaansh@gmail.com?subject=Let's Connect!"
  },
  secondary: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/devaanshsinha/"
  }
};
