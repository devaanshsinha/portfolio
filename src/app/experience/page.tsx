import PortfolioLayout from '../components/PortfolioLayout';
import { experienceEntries, experienceMetrics } from '../data/profile';

export default function Experience() {
  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          <span className="hidden sm:inline">{'< PROFESSIONAL EXPERIENCE />'}</span>
          <span className="sm:hidden">{'< EXPERIENCE />'}</span>
        </h2>

        <div className="space-y-6">
          {experienceEntries.map((exp, index) => (
            <div 
              key={index}
              className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)] hover:border-[var(--console-secondary)] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--console-secondary)] mb-1">
                    {exp.position}
                  </h3>
                  <h4 className="text-base sm:text-lg font-semibold text-[var(--console-accent)]">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <p className="text-[var(--console-text-dim)] text-xs sm:text-sm">{exp.location}</p>
                  {exp.duration && (
                    <p className="text-[var(--console-text-dim)] text-xs sm:text-sm font-semibold">{exp.duration}</p>
                  )}
                </div>
              </div>
              
                  {exp.periods ? (
                // Multi-period experience (like Gemini)
                <div className="space-y-6">
                  {exp.periods.map((period, periodIndex) => (
                    <div key={periodIndex} className="border-l-2 border-[var(--console-accent)] pl-4 ml-2">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-md font-semibold text-[var(--console-primary)]">
                          {periodIndex === 0 ? '2025' : '2024'}
                        </h5>
                        <span className="text-sm text-[var(--console-text-dim)] font-medium">
                          {period.duration}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h6 className="text-sm font-semibold text-[var(--console-primary)] mb-2">Key Achievements:</h6>
                        <ul className="space-y-1">
                          {period.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-[var(--console-text)] leading-relaxed flex items-start text-sm">
                              <span className="text-[var(--console-primary)] mr-2 mt-1 text-xs">▸</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="text-sm font-semibold text-[var(--console-primary)] mb-2">Technologies Used:</h6>
                        <div className="flex flex-wrap gap-2">
                          {period.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-[var(--console-bg)] rounded-full text-xs text-[var(--console-secondary)] border border-[var(--console-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Single period experience (like Bajaj Finance)
                <>
                  <div className="mb-4">
                    <h5 className="text-md font-semibold text-[var(--console-primary)] mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {(exp.achievements ?? []).map((achievement, achIndex) => (
                        <li key={achIndex} className="text-[var(--console-text)] leading-relaxed flex items-start">
                          <span className="text-[var(--console-primary)] mr-2 mt-1 text-sm">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-md font-semibold text-[var(--console-primary)] mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {(exp.technologies ?? []).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[var(--console-bg)] rounded-full text-xs text-[var(--console-secondary)] border border-[var(--console-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        
        {/* Impact Summary */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">
            Impact Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experienceMetrics.map(metric => (
              <div
                key={metric.label}
                className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]"
              >
                <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">{metric.value}</div>
                <p className="text-sm text-[var(--console-text-dim)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
