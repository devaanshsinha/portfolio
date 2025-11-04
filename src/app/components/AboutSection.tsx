import Image from "next/image";
import { HiDownload, HiEye } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import { ConsoleHeading } from "./console/console-heading";
import { ConsolePanel } from "./console/console-panel";
import { aboutSummary } from "../data/profile";

export default function AboutSection() {
  const { paragraphs, resume, education } = aboutSummary;
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
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <figure className="flex flex-col items-center text-center lg:order-2 lg:items-end lg:text-right">
            <Image
              src={headshot.src}
              alt={headshot.alt}
              width={224}
              height={224}
              priority
              className="h-44 w-44 rounded border border-[var(--console-border)] object-cover shadow-lg lg:h-52 lg:w-52"
            />
          </figure>
          <div className="order-1 w-full space-y-6">
            <div className="space-y-4 sm:space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-[var(--console-text)] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href={resume.pdf}
                  download={resume.fileName}
                  className="flex items-center gap-2 text-sm sm:text-base"
                >
                  <HiDownload className="text-lg" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="secondary">
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
          Education
        </ConsoleHeading>
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <div className="flex-1 space-y-2">
            <h4 className="text-base font-semibold text-[var(--console-text)] sm:text-lg">
              {education.institution}
            </h4>
            <p className="text-xs text-[var(--console-text-dim)] sm:text-sm">{education.program}</p>
            <p className="text-xs text-[var(--console-text-dim)] sm:text-sm">{education.duration}</p>
            {education.achievements.map((achievement) => (
              <p key={achievement} className="text-xs text-[var(--console-text-dim)] sm:text-sm">
                {achievement}
              </p>
            ))}
          </div>
          <Image
            src={education.crestImage}
            alt={education.crestAlt}
            width={96}
            height={96}
            className="h-20 w-20 flex-shrink-0 self-center rounded border border-[var(--console-border)] bg-white p-2 object-contain sm:h-24 sm:w-24 sm:self-start"
          />
        </div>
      </ConsolePanel>
    </div>
  );
}
