import PortfolioLayout from "../components/PortfolioLayout";
import { ConsoleHeading } from "../components/console/console-heading";
import { ConsolePanel } from "../components/console/console-panel";
import { ConsoleTag } from "../components/console/console-tag";
import { HiCode, HiCube, HiLightningBolt, HiShieldCheck } from "react-icons/hi";

import { interestCards, skillCategories, skillHighlights } from "../data/profile";

export default function Skills() {
  const iconOrder = [HiCode, HiCube, HiShieldCheck, HiLightningBolt];

  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <ConsoleHeading level={2} className="mb-4 sm:mb-6">
          {"< SKILLS & EXPERTISE />"}
        </ConsoleHeading>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillCategories.map((group) => (
            <ConsolePanel key={group.category}>
              <ConsoleHeading
                level={3}
                className="mb-3 text-base text-[var(--console-secondary)] sm:mb-4 sm:text-lg"
              >
                {group.category}
              </ConsoleHeading>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <ConsoleTag
                    key={skill}
                    className="px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base"
                  >
                    {skill}
                  </ConsoleTag>
                ))}
              </div>
            </ConsolePanel>
          ))}
        </div>

        <ConsolePanel>
          <ConsoleHeading
            level={3}
            className="mb-3 text-base text-[var(--console-secondary)] sm:mb-4 sm:text-lg"
          >
            Professional Experience Highlights
          </ConsoleHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillHighlights.map((highlight) => (
              <ConsolePanel key={highlight.title} tone="base" padding="sm">
                <h4 className="mb-2 font-semibold text-[var(--console-accent)]">{highlight.title}</h4>
                <ul className="space-y-2 text-[var(--console-text)]">
                  {highlight.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </ConsolePanel>
            ))}
          </div>
        </ConsolePanel>

        <ConsolePanel>
          <ConsoleHeading level={3} className="mb-4 text-lg text-[var(--console-secondary)]">
            Areas of Interest & Expertise
          </ConsoleHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {interestCards.map((card, index) => {
              const Icon = iconOrder[index] ?? HiCode;
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
      </div>
    </PortfolioLayout>
  );
}
