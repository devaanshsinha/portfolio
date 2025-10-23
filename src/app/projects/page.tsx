import PortfolioLayout from '../components/PortfolioLayout';
import Link from 'next/link';
import { HiCog, HiCode, HiOfficeBuilding, HiHeart, HiArrowRight } from 'react-icons/hi';
import {
  projectEntries,
  projectCategoryCards,
  technicalHighlights
} from '../data/profile';

export default function Projects() {
  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <h2 className="text-lg sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          <span className="hidden sm:inline">{'< PERSONAL & ACADEMIC PROJECTS />'}</span>
          <span className="sm:hidden">{'< PROJECTS />'}</span>
        </h2>
        
        <div className="grid gap-6">
          {projectEntries.map((project, index) => (
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
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-[var(--console-bg)] rounded-full text-xs text-[var(--console-primary)] border border-[var(--console-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.detailsLink && (
                <Link 
                  href={project.detailsLink}
                  className="inline-flex items-center gap-2 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors font-semibold"
                  target={project.isExternal ? "_blank" : undefined}
                  rel={project.isExternal ? "noopener noreferrer" : undefined}
                >
                  {project.ctaLabel ?? "View Project Details"}
                  <HiArrowRight />
                </Link>
              )}
            </div>
          ))}
        </div>
        
        {/* Project Categories Overview */}
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-4">
            Project Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectCategoryCards.map((card, index) => {
              const Icon = [HiHeart, HiCode, HiCog, HiOfficeBuilding][index] ?? HiCode;
              return (
                <div
                  key={card.title}
                  className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]"
                >
                  <Icon className="text-4xl mb-2 mx-auto text-[var(--console-primary)]" />
                  <h4 className="font-semibold text-[var(--console-primary)] mb-2">{card.title}</h4>
                  <p className="text-sm text-[var(--console-text-dim)]">{card.description}</p>
                </div>
              );
            })}
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
                {technicalHighlights.technologies.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--console-accent)] mb-3">Development Practices</h4>
              <ul className="space-y-2 text-[var(--console-text)]">
                {technicalHighlights.practices.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
