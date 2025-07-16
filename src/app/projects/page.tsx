import PortfolioLayout from '../components/PortfolioLayout';
import { HiCog, HiCode, HiOfficeBuilding, HiHeart } from 'react-icons/hi';

export default function Projects() {
  const projects = [
    {
      title: "GlycoNova",
      description: "A comprehensive Type 1 diabetes management platform built with Next.js and TypeScript. Features data processing and analysis for Dexcom G6/G7 & Omnipod 5 devices, intelligent glucose pattern recognition, personalized insulin recommendations, and secure data handling. Built by a T1D veteran with 16 years of experience in collaboration with endocrinologists, providing free access to everyone.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Clerk", "Framer Motion", "Tailwind CSS", "Data Visualization", "Healthcare Analytics"],
      category: "Healthcare Platform"
    },
    {
      title: "ShelfWise",
      description: "A comprehensive pantry management app utilizing Python, OpenCV, and Tesseract for receipt scanning, FastAPI and Prisma for backend, and React/TypeScript for frontend. Integrated NLP-based assistant for hands-free interaction, optimizing food tracking, recipe suggestions, and reducing waste.",
      technologies: ["Python", "OpenCV", "Tesseract", "FastAPI", "Prisma", "React", "TypeScript", "OpenAI"],
      category: "Full-Stack Application"
    },
    {
      title: "Custom C Shell",
      description: "Created a C-based Unix shell with advanced features such as command execution, history tracking, and variable management. Supported built-in commands like cd and exit, enabling users to navigate and interact with the system through a custom command-line interface.",
      technologies: ["C", "Unix", "System Programming", "CLI"],
      category: "System Programming"
    },
    {
      title: "Hospital Record System",
      description: "Developed a comprehensive program using Java to help clinics keep a record of their patients that have been treated or are in queue based on level of medical urgency, age, and other information. Implemented extensive unit and manual testing to ensure reliability.",
      technologies: ["Java", "JUnit", "Data Structures", "Testing"],
      category: "Healthcare Software"
    },
    {
      title: "Custom File System",
      description: "Created a custom user-level C-based file system using FUSE that handles tasks like reading, writing, making directories, deleting files, and more. Implemented low-level file operations and memory management.",
      technologies: ["C", "FUSE", "File Systems", "Linux"],
      category: "System Programming"
    }
  ];

  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <h2 className="text-lg sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          <span className="hidden sm:inline">{'< PERSONAL & ACADEMIC PROJECTS />'}</span>
          <span className="sm:hidden">{'< PROJECTS />'}</span>
        </h2>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)] hover:border-[var(--console-secondary)] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--console-secondary)]">
                  {project.title}
                </h3>
                <span className="text-xs text-[var(--console-accent)] bg-[var(--console-bg)] px-3 py-1 rounded-full border border-[var(--console-accent)] mt-2 md:mt-0 self-start md:self-center">
                  {project.category}
                </span>
              </div>
              
              <p className="text-sm sm:text-base text-[var(--console-text)] mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-[var(--console-bg)] rounded-full text-xs text-[var(--console-primary)] border border-[var(--console-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Categories Overview */}
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-4">
            Project Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiHeart className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">Healthcare Platform</h4>
              <p className="text-sm text-[var(--console-text-dim)]">Medical data analytics, patient management, clinical insights</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiCode className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">Full-Stack Applications</h4>
              <p className="text-sm text-[var(--console-text-dim)]">End-to-end web applications with modern frameworks</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiCog className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">System Programming</h4>
              <p className="text-sm text-[var(--console-text-dim)]">Low-level C programming, file systems, shell development</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <HiOfficeBuilding className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
              <h4 className="font-semibold text-[var(--console-primary)] mb-2">Data Management Solutions</h4>
              <p className="text-sm text-[var(--console-text-dim)]">Database design, data processing, and management systems</p>
            </div>
          </div>
        </div>
        
        {/* Technical Highlights */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">
            Technical Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-[var(--console-accent)] mb-3">Key Technologies</h4>
              <ul className="space-y-2 text-[var(--console-text)]">
                <li>• Healthcare Analytics & Medical Data Processing</li>
                <li>• Blockchain & Web3 Development</li>
                <li>• Computer Vision (OpenCV) & OCR (Tesseract)</li>
                <li>• System-level Programming (C, FUSE)</li>
                <li>• Full-Stack Development (Next.js, React, FastAPI)</li>
                <li>• Database Design (PostgreSQL, Prisma)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--console-accent)] mb-3">Development Practices</h4>
              <ul className="space-y-2 text-[var(--console-text)]">
                <li>• Comprehensive testing (Unit & Manual)</li>
                <li>• Modern development workflows</li>
                <li>• Cross-platform compatibility</li>
                <li>• User-centered design principles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}