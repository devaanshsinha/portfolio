import PortfolioLayout from '../components/PortfolioLayout';

export default function Experience() {
  const experiences = [
    {
      company: "Gemini",
      position: "Software Engineering Intern",
      location: "New York, NY",
      duration: "June 2024 – Present",
      achievements: [
        "Developed a custom standup tool using Django Rest Framework and AWS Elastic Beanstalk, automating daily standup submissions for over 800 remote employees, saving approximately 10 hours of meeting time per week.",
        "Automated the whole process and added various features allowing managers to closely monitor all work done, also added team management features for custom reminders, standup questions, and work analysis",
        "Integrated a PostgreSQL database for data storage, managing over 1,000 standup entries and enabling quick access to recaps, statistical insights, and historical data.",
        "Worked on a calendar management system for upcoming drops on the NFT Marketplace."
      ],
      technologies: ["Django Rest Framework", "AWS Elastic Beanstalk", "PostgreSQL", "Team Management", "NFT Marketplace"]
    },
    {
      company: "Bajaj Finance Direct Limited",
      position: "Software Engineering Intern",
      location: "Pune, India",
      duration: "June 2023 – Aug 2023",
      achievements: [
        "Created a spam detection service using Spring Boot and Elasticsearch, enhancing security for over 500,000 loan applications by cross-referencing user inputs against a dynamic spam database.",
        "Worked on building an ID verification system and authorization services for the company website and web services",
        "Improved data protection by securing open endpoints, mitigating risks, and preventing unauthorized access to sensitive user information, which contributed to a 20% reduction in reported data breaches."
      ],
      technologies: ["Spring Boot", "Elasticsearch", "ID Verification", "Security", "Data Protection"]
    },
  ];

  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--console-primary)] mb-6">
          {'< PROFESSIONAL EXPERIENCE />'}
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] hover:border-[var(--console-secondary)] transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--console-secondary)] mb-1">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-semibold text-[var(--console-accent)]">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[var(--console-text-dim)] text-sm">{exp.location}</p>
                  <p className="text-[var(--console-text-dim)] text-sm font-semibold">{exp.duration}</p>
                </div>
              </div>
              
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