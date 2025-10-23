import PortfolioLayout from '../components/PortfolioLayout';
import { HiCode, HiShieldCheck, HiLightningBolt, HiCube } from 'react-icons/hi';
import { interestCards, skillCategories, skillHighlights } from '../data/profile';

export default function Skills() {
  const iconOrder = [HiCode, HiCube, HiShieldCheck, HiLightningBolt];

  return (
    <PortfolioLayout>
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          {'< SKILLS & EXPERTISE />'}
        </h2>
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((group) => (
            <div 
              key={group.category}
              className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]"
            >
              <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 sm:px-3 py-1 bg-[var(--console-bg)] rounded text-xs sm:text-sm text-[var(--console-text)] border border-[var(--console-border)] hover:border-[var(--console-primary)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Experience Highlights */}
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">
            Professional Experience Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillHighlights.map((highlight) => (
              <div key={highlight.title}>
                <h4 className="font-semibold text-[var(--console-accent)] mb-2">{highlight.title}</h4>
                <ul className="space-y-2 text-[var(--console-text)]">
                  {highlight.bullets.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">
            Areas of Interest & Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {interestCards.map((card, index) => {
              const Icon = iconOrder[index] ?? HiCode;
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
      </div>
    </PortfolioLayout>
  );
}
