import PortfolioLayout from '../components/PortfolioLayout';

export default function Experience() {
  const experiences = [
    {
      company: "Gemini",
      position: "Software Engineering Intern",
      location: "New York, NY",
      periods: [
        {
          duration: "June 2025 – Present",
          achievements: [
            "Optimized blockchain transaction monitoring for Nifty Gateway by migrating from ERC-20 to ERC-721 focused tracking, reducing unnecessary listening activity by 70%",
            "Reduced database size by approximately 200GB through removal of off-network NFTs, improving query performance by 40% and reducing storage costs",
            "Decreased API call volume by 50% and reduced request payload sizes by 60% for external wallet data fetching, improving page load times by 2.5 seconds",
            "Leading platform-wide Stripe integration upgrade affecting 15K+ monthly users to modernize payment services and introduce enhanced payment features"
          ],
          technologies: ["Blockchain", "Web3", "PostgreSQL", "API Development", "Stripe", "System Architecture", "Performance Optimization"]
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
    },
  ];

  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          {'< PROFESSIONAL EXPERIENCE />'}
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
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
                      {exp.achievements.map((achievement, achIndex) => (
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
                      {exp.technologies.map((tech) => (
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
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">800+</div>
              <p className="text-sm text-[var(--console-text-dim)]">Remote employees served daily</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">500K+</div>
              <p className="text-sm text-[var(--console-text-dim)]">Loan applications secured</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">20%</div>
              <p className="text-sm text-[var(--console-text-dim)]">Reduction in data breaches</p>
            </div>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}