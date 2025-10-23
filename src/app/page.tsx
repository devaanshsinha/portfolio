'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  aboutSummary,
  contactInfoCards,
  contactIntro,
  contactLinks,
  experienceEntries,
  experienceMetrics,
  interestCards,
  projectEntries,
  skillCategories,
  skillHighlights,
  statusCards,
  technicalHighlights,
  callToAction
} from './data/profile';

const siteOwner = {
  name: "Devaansh Sinha",
  title: "Software Engineer & UW–Madison CS Student"
};

function FullProfileSnapshot() {
  return (
    <article aria-label="Full portfolio snapshot" className="space-y-4">
      <header>
        <h1>{siteOwner.name}</h1>
        <p>{siteOwner.title}</p>
      </header>

      <section>
        <h2>Summary</h2>
        {aboutSummary.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        <p>{aboutSummary.education.institution}</p>
        <p>{aboutSummary.education.program}</p>
        <p>{aboutSummary.education.duration}</p>
        {aboutSummary.education.achievements.map((achievement) => (
          <p key={achievement}>{achievement}</p>
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        {experienceEntries.map((experience) => (
          <div key={`${experience.company}-${experience.position}`} style={{ marginBottom: '1rem' }}>
            <p>
              <strong>{experience.position}</strong> &mdash; {experience.company} ({experience.location})
            </p>
            {experience.periods
              ? experience.periods.map((period) => (
                  <div key={period.duration} style={{ marginLeft: '1rem' }}>
                    <p><em>{period.duration}</em></p>
                    <ul>
                      {period.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                    <p>Technologies: {period.technologies.join(', ')}</p>
                  </div>
                ))
              : (
                <div style={{ marginLeft: '1rem' }}>
                  {experience.duration && <p><em>{experience.duration}</em></p>}
                  {experience.achievements && (
                    <ul>
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                  {experience.technologies && (
                    <p>Technologies: {experience.technologies.join(', ')}</p>
                  )}
                </div>
              )
            }
          </div>
        ))}
        <ul>
          {experienceMetrics.map((metric) => (
            <li key={metric.label}>{metric.value} &mdash; {metric.label}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        {projectEntries.map((project) => (
          <div key={project.title} style={{ marginBottom: '1rem' }}>
            <p>
              <strong>{project.title}</strong> ({project.category})
            </p>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(', ')}</p>
          </div>
        ))}
        <h3>Technical Highlights</h3>
        <p>Key Technologies:</p>
        <ul>
          {technicalHighlights.technologies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>Development Practices:</p>
        <ul>
          {technicalHighlights.practices.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        {skillCategories.map((category) => (
          <div key={category.category} style={{ marginBottom: '0.75rem' }}>
            <p><strong>{category.category}</strong></p>
            <p>{category.skills.join(', ')}</p>
          </div>
        ))}
        {skillHighlights.map((highlight) => (
          <div key={highlight.title} style={{ marginBottom: '0.75rem' }}>
            <p><strong>{highlight.title}</strong></p>
            <ul>
              {highlight.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <h3>Interest Areas</h3>
        <ul>
          {interestCards.map((card) => (
            <li key={card.title}>
              <strong>{card.title}:</strong> {card.description}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>{contactIntro}</p>
        <ul>
          {contactInfoCards.map((card) => (
            <li key={card.label}>
              <strong>{card.label}:</strong> {card.value}
            </li>
          ))}
        </ul>
        <p>Status:</p>
        <ul>
          {statusCards.map((card) => (
            <li key={card.title}>
              <strong>{card.title}:</strong> {card.description}
            </li>
          ))}
        </ul>
        <p>Online:</p>
        <ul>
          {contactLinks.map((link) => (
            <li key={link.label}>
              {link.label} &mdash; {link.description} ({link.href})
            </li>
          ))}
        </ul>
        <p>{callToAction.body}</p>
      </section>
    </article>
  );
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/about');
  }, [router]);

  return (
    <>
      <div className="sr-only">
        <FullProfileSnapshot />
      </div>
      <noscript>
        <style>{`
          .no-js-profile {
            padding: 2rem;
            color: var(--console-text);
            font-family: var(--font-mono);
          }
          .no-js-profile h1,
          .no-js-profile h2,
          .no-js-profile h3 {
            margin-top: 1.5rem;
          }
        `}</style>
        <div className="no-js-profile">
          <FullProfileSnapshot />
        </div>
      </noscript>
    </>
  );
}
