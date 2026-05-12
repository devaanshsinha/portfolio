import Image from "next/image";
import { HiDownload, HiEye } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import { ConsoleHeading } from "./console/console-heading";
import { ConsolePanel } from "./console/console-panel";
import { aboutSummary } from "../data/profile";

export default function AboutSection() {
  const { paragraphs, resume, employment, education } = aboutSummary;
  const headshot = {
    src: "/images/headshot.jpeg",
    alt: "Headshot of Devaansh Sinha",
  };

  return (
    <div className="space-y-4">
      <ConsoleHeading level={2} className="mb-4 sm:mb-6">
        {"< ABOUT ME />"}
      </ConsoleHeading>

      <ConsolePanel>
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <figure className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-end lg:text-right">
            <Image
              src={headshot.src}
              alt={headshot.alt}
              width={224}
              height={224}
              priority
              className="h-36 w-36 rounded border border-[var(--console-border)] object-cover shadow-lg sm:h-44 sm:w-44 lg:h-52 lg:w-52"
            />
          </figure>
          <div className="order-2 w-full space-y-5 sm:space-y-6">
            <div className="space-y-4 sm:space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-[var(--console-text)] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button asChild className="w-full sm:w-auto">
                <a
                  href={resume.pdf}
                  download={resume.fileName}
                  className="flex items-center gap-2 text-sm sm:text-base"
                >
                  <HiDownload className="text-lg" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <a
                  href={resume.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base"
                >
                  <HiEye className="text-lg" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </ConsolePanel>

      <ConsolePanel>
        <ConsoleHeading level={3} className="mb-3 text-xl sm:mb-4 sm:text-xl text-[var(--console-secondary)]">
          Current Employment
        </ConsoleHeading>
        <div className="flex items-start gap-4">
          <Image
            src={employment.logoImage}
            alt={employment.logoAlt}
            width={96}
            height={96}
            className="h-16 w-16 flex-shrink-0 rounded border border-[var(--console-border)] bg-white p-2 object-contain sm:h-24 sm:w-24"
          />
          <div className="min-w-0 flex-1 space-y-2">
            <h4 className="text-base font-semibold text-[var(--console-text)] sm:text-lg">
              {employment.company}
            </h4>
            <p className="text-xs text-[var(--console-text-dim)] sm:text-sm">{employment.role}</p>
            <p className="text-xs text-[var(--console-text-dim)] sm:text-sm">
              {employment.team} | {employment.duration}
            </p>
          </div>
        </div>
      </ConsolePanel>

      <ConsolePanel>
        <ConsoleHeading level={3} className="mb-3 text-xl sm:mb-4 sm:text-xl text-[var(--console-secondary)]">
          Education
        </ConsoleHeading>
        <div className="flex items-start gap-4">
          <Image
            src={education.crestImage}
            alt={education.crestAlt}
            width={96}
            height={96}
            className="h-16 w-16 flex-shrink-0 rounded border border-[var(--console-border)] bg-white p-2 object-contain sm:h-24 sm:w-24"
          />
          <div className="min-w-0 flex-1 space-y-2">
            <h4 className="text-base font-semibold text-[var(--console-text)] sm:text-lg">
              {education.institution}
            </h4>
            <p className="text-xs text-[var(--console-text-dim)] sm:text-sm">{education.program}</p>
            <p className="text-xs text-[var(--console-text-dim)] sm:text-sm">{education.duration}</p>
            <p className="text-xs text-[var(--console-text-dim)] sm:text-sm">{education.gpa}</p>
            {education.achievements.map((achievement) => (
              <p key={achievement} className="text-xs text-[var(--console-text-dim)] sm:text-sm">
                {achievement}
              </p>
            ))}
          </div>
        </div>
      </ConsolePanel>
    </div>
  );
}
