import Link from "next/link";
import { HiArrowRight, HiCog, HiCode, HiHeart, HiOfficeBuilding } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import PortfolioLayout from "../components/PortfolioLayout";
import { ConsoleHeading } from "../components/console/console-heading";
import { ConsolePanel } from "../components/console/console-panel";
import { ConsoleTag } from "../components/console/console-tag";
import {
  projectEntries,
  projectCategoryCards,
  technicalHighlights,
} from "../data/profile";

export default function Projects() {
  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <ConsoleHeading level={2} className="mb-4 sm:mb-6">
          <span className="hidden sm:inline">{'< PERSONAL & ACADEMIC PROJECTS />'}</span>
          <span className="sm:hidden">{'< PROJECTS />'}</span>
        </ConsoleHeading>

        <div className="grid gap-6">
          {projectEntries.map((project) => (
            <ConsolePanel key={project.title} interactive>
              <div className="mb-3 flex flex-col md:flex-row md:items-center md:justify-between">
                <ConsoleHeading level={3} className="text-lg text-[var(--console-secondary)] sm:text-xl">
                  {project.title}
                </ConsoleHeading>
                <ConsoleTag
                  tone="accent"
                  className="mt-2 self-start text-[11px] md:mt-0 md:self-center"
                >
                  {project.category}
                </ConsoleTag>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-[var(--console-text)] sm:text-base">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <ConsoleTag key={tech} tone="primary">
                    {tech}
                  </ConsoleTag>
                ))}
              </div>

              {project.detailsLink && (
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-sm font-semibold text-[var(--console-secondary)] hover:text-[var(--console-primary)]"
                >
                  <Link
                    href={project.detailsLink}
                    target={project.isExternal ? "_blank" : undefined}
                    rel={project.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2"
                  >
                    {project.ctaLabel ?? "View Project Details"}
                    <HiArrowRight />
                  </Link>
                </Button>
              )}
            </ConsolePanel>
          ))}
        </div>

        <ConsolePanel>
          <ConsoleHeading level={3} className="mb-4 text-base text-[var(--console-secondary)] sm:text-lg">
            Project Categories
          </ConsoleHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {projectCategoryCards.map((card, index) => {
              const Icon = [HiHeart, HiCode, HiCog, HiOfficeBuilding][index] ?? HiCode;
              return (
                <ConsolePanel key={card.title} tone="base" padding="sm" className="text-center">
                  <Icon className="mx-auto mb-2 text-4xl text-[var(--console-primary)]" />
                  <h4 className="mb-2 font-semibold text-[var(--console-primary)]">{card.title}</h4>
                  <p className="text-sm text-[var(--console-text-dim)]">{card.description}</p>
                </ConsolePanel>
              );
            })}
          </div>
        </ConsolePanel>

        <ConsolePanel>
          <ConsoleHeading level={3} className="mb-4 text-lg text-[var(--console-secondary)]">
            Technical Highlights
          </ConsoleHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ConsolePanel tone="base" padding="sm">
              <h4 className="mb-3 font-semibold text-[var(--console-accent)]">Key Technologies</h4>
              <ul className="space-y-2 text-[var(--console-text)]">
                {technicalHighlights.technologies.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </ConsolePanel>
            <ConsolePanel tone="base" padding="sm">
              <h4 className="mb-3 font-semibold text-[var(--console-accent)]">Development Practices</h4>
              <ul className="space-y-2 text-[var(--console-text)]">
                {technicalHighlights.practices.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </ConsolePanel>
          </div>
        </ConsolePanel>
      </div>
    </PortfolioLayout>
  );
}
