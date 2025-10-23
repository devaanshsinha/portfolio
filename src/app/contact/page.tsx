import type { ReactElement } from 'react';
import PortfolioLayout from '../components/PortfolioLayout';
import { HiMail, HiPhone, HiLocationMarker, HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import {
  callToAction,
  contactInfoCards,
  contactIntro,
  contactLinks,
  statusCards
} from '../data/profile';

export default function Contact() {
  const contactIcons = [HiMail, HiPhone, HiLocationMarker] as const;

  return (
    <PortfolioLayout>
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          {'< CONTACT ME />'}
        </h2>
        
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <p className="text-sm sm:text-base text-[var(--console-text)] mb-4 sm:mb-6 leading-relaxed">
            {contactIntro}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfoCards.map((card, index) => {
                  const Icon = contactIcons[index] ?? HiMail;
                  const href =
                    card.label.toLowerCase() === 'email'
                      ? `mailto:${card.value}`
                      : card.label.toLowerCase() === 'phone'
                        ? `tel:${card.value.replace(/[^0-9]/g, '')}`
                        : undefined;

                  const content = (
                    <div className="flex items-center gap-3">
                      <Icon className="text-xl sm:text-2xl text-[var(--console-secondary)]" />
                      <div>
                        <div className="font-semibold text-[var(--console-secondary)]">{card.label}</div>
                        <div className="text-sm text-[var(--console-text-dim)]">{card.value}</div>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a
                      key={card.label}
                      href={href}
                      className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)] hover:border-[var(--console-primary)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={card.label}
                      className="flex items-center gap-3 text-[var(--console-text)] p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)]"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">Connect Online</h3>
              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const iconMap = {
                    LinkedIn: <FaLinkedin className="text-2xl" />,
                    GitHub: <FaGithub className="text-2xl" />,
                    Resume: <FaFilePdf className="text-2xl" />
                  } satisfies Record<string, ReactElement>;

                  const icon = iconMap[link.label as keyof typeof iconMap] ?? <FaLinkedin className="text-2xl" />;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)] hover:border-[var(--console-primary)]"
                    >
                      {icon}
                      <div>
                        <div className="font-semibold">{link.label}</div>
                        <div className="text-sm text-[var(--console-text-dim)]">{link.description}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">Current Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {statusCards.map((card) => (
              <div key={card.title} className="p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
                <h4 className="font-semibold text-[var(--console-primary)] mb-2 flex items-center gap-2">
                  {card.title === 'Education' ? <HiAcademicCap className="text-lg" /> : <HiBriefcase className="text-lg" />}
                  {card.title}
                </h4>
                <p className="text-[var(--console-text)] text-sm">
                  {card.description.split('\n').map((line, index, arr) => (
                    <span key={`${card.title}-${index}`}>
                      {line}
                      {index < arr.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)] text-center">
          <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">
            {callToAction.heading}
          </h3>
          <p className="text-sm sm:text-base text-[var(--console-text)] mb-4 sm:mb-6">
            {callToAction.body}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href={callToAction.primary.href}
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors text-sm sm:text-base"
            >
              {callToAction.primary.label}
            </a>
            <a 
              href={callToAction.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors text-sm sm:text-base"
            >
              {callToAction.secondary.label}
            </a>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
