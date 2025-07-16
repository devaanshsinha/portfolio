import PortfolioLayout from '../components/PortfolioLayout';
import { HiDownload, HiEye } from 'react-icons/hi';
import Image from 'next/image';

export default function About() {
  return (
    <PortfolioLayout>
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          {'< ABOUT ME />'}
        </h2>
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <p className="text-sm sm:text-base text-[var(--console-text)] leading-relaxed mb-4">
            Hello! I&apos;m Devaansh Sinha, a Computer Science student at the University of Wisconsin Madison 
            passionate about building innovative digital experiences and solving complex problems through code.
          </p>
          <p className="text-sm sm:text-base text-[var(--console-text)] leading-relaxed mb-6">
            With hands-on experience from internships at Gemini and Bajaj Finance Direct Limited, I specialize in 
            full-stack development, system design, and security. I&apos;ve developed tools serving hundreds of thousands 
            of users and built systems that enhance security for large-scale applications.
          </p>
          
          {/* Resume Download */}
          <div className="flex gap-4 flex-wrap">
            <a 
              href="/Devaansh_Sinha_resume.pdf" 
              download="Devaansh_Sinha_Resume.pdf"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors flex items-center gap-2 text-sm sm:text-base justify-center"
            >
              <HiDownload className="text-lg" />
              Download Resume
            </a>
            <a 
              href="/Devaansh_Sinha_resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors flex items-center gap-2 text-sm sm:text-base justify-center"
            >
              <HiEye className="text-lg" />
              View Resume
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-lg sm:text-xl font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">Education</h3>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="space-y-2 flex-1">
              <h4 className="text-base sm:text-lg font-semibold text-[var(--console-text)]">University of Wisconsin Madison</h4>
              <p className="text-xs sm:text-sm text-[var(--console-text-dim)]">BS in Computer Science, Certificate in Game Design</p>
              <p className="text-xs sm:text-sm text-[var(--console-text-dim)]">Sept 2022 – May 2026 | GPA: 3.9/4.0</p>
              <p className="text-xs sm:text-sm text-[var(--console-text-dim)]">4-time Dean&apos;s List recipient</p>
            </div>
            <Image 
              src="/images/WX9DTCt5_400x400.png" 
              alt="University of Wisconsin Madison logo"
              width={96}
              height={96}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg border border-[var(--console-border)] bg-white p-2 flex-shrink-0 self-center sm:self-start"
            />
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}