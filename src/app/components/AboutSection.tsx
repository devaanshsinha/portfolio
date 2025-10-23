import Image from "next/image";
import { HiDownload, HiEye } from "react-icons/hi";

import { aboutSummary } from "../data/profile";

export default function AboutSection() {
  const { paragraphs, resume, education } = aboutSummary;

  return (
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
        {"< ABOUT ME />"}
      </h2>
      <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
        {paragraphs.map((paragraph, index) => (
          <p
            key={paragraph}
            className={`text-sm sm:text-base text-[var(--console-text)] leading-relaxed ${
              index < paragraphs.length - 1 ? "mb-4" : "mb-6"
            }`}
          >
            {paragraph}
          </p>
        ))}

        <div className="flex gap-4 flex-wrap">
          <a
            href={resume.pdf}
            download={resume.fileName}
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors flex items-center gap-2 text-sm sm:text-base justify-center"
          >
            <HiDownload className="text-lg" />
            Download Resume
          </a>
          <a
            href={resume.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors flex items-center gap-2 text-sm sm:text-base justify-center"
          >
            <HiEye className="text-lg" />
            View Resume
          </a>
        </div>
      </div>

      <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
        <h3 className="text-lg sm:text-xl font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">
          Education
        </h3>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="space-y-2 flex-1">
            <h4 className="text-base sm:text-lg font-semibold text-[var(--console-text)]">
              {education.institution}
            </h4>
            <p className="text-xs sm:text-sm text-[var(--console-text-dim)]">
              {education.program}
            </p>
            <p className="text-xs sm:text-sm text-[var(--console-text-dim)]">
              {education.duration}
            </p>
            {education.achievements.map((achievement) => (
              <p key={achievement} className="text-xs sm:text-sm text-[var(--console-text-dim)]">
                {achievement}
              </p>
            ))}
          </div>
          <Image
            src={education.crestImage}
            alt={education.crestAlt}
            width={96}
            height={96}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg border border-[var(--console-border)] bg-white p-2 flex-shrink-0 self-center sm:self-start"
          />
        </div>
      </div>
    </div>
  );
}
