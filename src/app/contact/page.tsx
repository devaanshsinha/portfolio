import type { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HiAcademicCap,
  HiBriefcase,
  HiLocationMarker,
  HiMail,
  HiPhone,
} from "react-icons/hi";

import PortfolioLayout from "../components/PortfolioLayout";
import { ConsoleHeading } from "../components/console/console-heading";
import { ConsolePanel } from "../components/console/console-panel";
import {
  callToAction,
  contactInfoCards,
  contactIntro,
  contactLinks,
  statusCards,
} from "../data/profile";

const contactIcons = [HiMail, HiPhone, HiLocationMarker] as const;

export default function Contact() {
  return (
    <PortfolioLayout>
      <div className="space-y-4">
        <ConsoleHeading level={2} className="mb-4 sm:mb-6">
          {"< CONTACT ME />"}
        </ConsoleHeading>

        <ConsolePanel>
          <p className="mb-4 text-sm leading-relaxed text-[var(--console-text)] sm:mb-6 sm:text-base">
            {contactIntro}
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ConsolePanel tone="base" padding="sm">
              <ConsoleHeading level={3} className="mb-4 text-lg text-[var(--console-secondary)]">
                Contact Information
              </ConsoleHeading>
              <div className="space-y-3">
                {contactInfoCards.map((card, index) => {
                  const Icon = contactIcons[index] ?? HiMail;
                  const href =
                    card.label.toLowerCase() === "email"
                      ? `mailto:${card.value}`
                      : card.label.toLowerCase() === "phone"
                        ? `tel:${card.value.replace(/[^0-9+]/g, "")}`
                        : undefined;

                  const content = (
                    <div className="flex items-center gap-3">
                      <Icon className="text-xl text-[var(--console-secondary)] sm:text-2xl" />
                      <div>
                        <div className="font-semibold text-[var(--console-secondary)]">
                          {card.label}
                        </div>
                        <div className="text-sm text-[var(--console-text-dim)]">{card.value}</div>
                      </div>
                    </div>
                  );

                  if (href) {
                    return (
                      <Button
                        key={card.label}
                        asChild
                        variant="outline"
                        className="h-auto w-full justify-start gap-3 bg-[var(--console-bg)] px-4 py-3 text-left text-[var(--console-secondary)] hover:text-[var(--console-primary)]"
                      >
                        <a href={href}>{content}</a>
                      </Button>
                    );
                  }

                  return (
                    <ConsolePanel
                      key={card.label}
                      tone="base"
                      padding="sm"
                      className="flex items-center gap-3 bg-[var(--console-bg)]"
                    >
                      {content}
                    </ConsolePanel>
                  );
                })}
              </div>
            </ConsolePanel>

            <ConsolePanel tone="base" padding="sm">
              <ConsoleHeading level={3} className="mb-4 text-lg text-[var(--console-secondary)]">
                Connect Online
              </ConsoleHeading>
              <div className="space-y-3">
                {contactLinks.map((link) => {
                  const iconMap: Record<string, ReactElement> = {
                    LinkedIn: <FaLinkedin className="text-2xl" />,
                    GitHub: <FaGithub className="text-2xl" />,
                    Resume: <FaFilePdf className="text-2xl" />,
                  };
                  const icon = iconMap[link.label] ?? <FaLinkedin className="text-2xl" />;

                  return (
                    <Button
                      key={link.label}
                      asChild
                      variant="outline"
                      className="h-auto w-full justify-start gap-3 bg-[var(--console-bg)] px-4 py-3 text-left text-[var(--console-secondary)] hover:text-[var(--console-primary)]"
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {icon}
                        <div>
                          <div className="font-semibold">{link.label}</div>
                          <div className="text-sm text-[var(--console-text-dim)]">{link.description}</div>
                        </div>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </ConsolePanel>
          </div>
        </ConsolePanel>

        <ConsolePanel>
          <ConsoleHeading level={3} className="mb-3 text-base text-[var(--console-secondary)] sm:mb-4 sm:text-lg">
            Current Status
          </ConsoleHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {statusCards.map((card) => (
              <ConsolePanel key={card.title} tone="base" padding="sm" className="bg-[var(--console-bg)]">
                <h4 className="mb-2 flex items-center gap-2 font-semibold text-[var(--console-primary)]">
                  {card.title === "Education" ? (
                    <HiAcademicCap className="text-lg" />
                  ) : (
                    <HiBriefcase className="text-lg" />
                  )}
                  {card.title}
                </h4>
                <p className="text-sm text-[var(--console-text)]">
                  {card.description.split("\n").map((line, index, arr) => (
                    <span key={`${card.title}-${index}`}>
                      {line}
                      {index < arr.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </ConsolePanel>
            ))}
          </div>
        </ConsolePanel>

        <ConsolePanel className="text-center">
          <ConsoleHeading level={3} className="mb-3 text-base text-[var(--console-secondary)] sm:mb-4 sm:text-lg">
            {callToAction.heading}
          </ConsoleHeading>
          <p className="mb-4 text-sm text-[var(--console-text)] sm:mb-6 sm:text-base">
            {callToAction.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="text-sm sm:text-base">
              <a href={callToAction.primary.href}>{callToAction.primary.label}</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="text-sm sm:text-base"
            >
              <a href={callToAction.secondary.href} target="_blank" rel="noopener noreferrer">
                {callToAction.secondary.label}
              </a>
            </Button>
          </div>
        </ConsolePanel>
      </div>
    </PortfolioLayout>
  );
}
