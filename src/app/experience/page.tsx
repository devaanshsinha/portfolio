import PortfolioLayout from '../components/PortfolioLayout';
import { ConsoleHeading } from '../components/console/console-heading';
import { ConsolePanel } from '../components/console/console-panel';
import { ConsoleTag } from '../components/console/console-tag';
import { experienceEntries, experienceMetrics } from '../data/profile';

export default function Experience() {
  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <ConsoleHeading level={2} className="mb-4 sm:mb-6">
          <span className="hidden sm:inline">{'< PROFESSIONAL EXPERIENCE />'}</span>
          <span className="sm:hidden">{'< EXPERIENCE />'}</span>
        </ConsoleHeading>

        <div className="space-y-6">
          {experienceEntries.map((exp) => (
            <ConsolePanel key={exp.company} interactive>
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <ConsoleHeading level={3} className="mb-1 text-lg text-[var(--console-secondary)] sm:text-xl">
                    {exp.position}
                  </ConsoleHeading>
                  <ConsoleHeading level={4} className="text-base text-[var(--console-accent)] sm:text-lg">
                    {exp.company}
                  </ConsoleHeading>
                </div>
                <div className="mt-2 text-left text-xs text-[var(--console-text-dim)] md:mt-0 md:text-right sm:text-sm">
                  <p>{exp.location}</p>
                  {exp.duration && <p className="font-semibold">{exp.duration}</p>}
                </div>
              </div>

              {exp.periods ? (
                <div className="space-y-6">
                  {exp.periods.map((period, index) => (
                    <div key={`${period.duration}-${index}`} className="ml-2 border-l-2 border-[var(--console-accent)] pl-4">
                      <div className="mb-3 flex items-center justify-between">
                        <h5 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--console-primary)]">
                          {period.duration}
                        </h5>
                        <span className="text-xs font-medium text-[var(--console-text-dim)]">
                          {index === 0 ? '2025' : '2024'}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--console-primary)]">
                          Key Achievements
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed text-[var(--console-text)]">
                          {period.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2">
                              <span className="mt-1 text-xs text-[var(--console-primary)]">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--console-primary)]">
                          Technologies Used
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {period.technologies.map((tech) => (
                            <ConsoleTag key={tech} tone="secondary">
                              {tech}
                            </ConsoleTag>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--console-primary)]">
                      Key Achievements
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-[var(--console-text)]">
                      {(exp.achievements ?? []).map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <span className="mt-1 text-sm text-[var(--console-primary)]">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--console-primary)]">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(exp.technologies ?? []).map((tech) => (
                        <ConsoleTag key={tech} tone="secondary">
                          {tech}
                        </ConsoleTag>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </ConsolePanel>
          ))}
        </div>

        <ConsolePanel>
          <ConsoleHeading level={3} className="mb-4 text-lg text-[var(--console-secondary)]">
            Impact Summary
          </ConsoleHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {experienceMetrics.map((metric) => (
              <ConsolePanel key={metric.label} tone="base" padding="sm" className="text-center">
                <div className="mb-2 text-2xl font-bold text-[var(--console-primary)]">{metric.value}</div>
                <p className="text-sm text-[var(--console-text-dim)]">{metric.label}</p>
              </ConsolePanel>
            ))}
          </div>
        </ConsolePanel>
      </div>
    </PortfolioLayout>
  );
}
