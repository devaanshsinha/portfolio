import PortfolioLayout from '../components/PortfolioLayout';
import { HiDownload, HiEye } from 'react-icons/hi';

export default function About() {
  return (
    <PortfolioLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--console-primary)] mb-6">
          {'< ABOUT ME />'}
        </h2>
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <p className="text-[var(--console-text)] leading-relaxed mb-4">
            Hello! I&apos;m Devaansh Sinha, a Computer Science student at the University of Wisconsin Madison 
            passionate about building innovative digital experiences and solving complex problems through code.
          </p>
          <p className="text-[var(--console-text)] leading-relaxed mb-6">
            With hands-on experience from internships at Gemini and Bajaj Finance Direct Limited, I specialize in 
            full-stack development, system design, and security. I&apos;ve developed tools serving hundreds of thousands 
            of users and built systems that enhance security for large-scale applications.
          </p>
          
          {/* Resume Download */}
          <div className="flex gap-4 flex-wrap">
            <a 
              href="/Devaansh_Sinha_resume.pdf" 
              download="Devaansh_Sinha_Resume.pdf"
              className="px-6 py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors flex items-center gap-2"
            >
              <HiDownload className="text-lg" />
              Download Resume
            </a>
            <a 
              href="/Devaansh_Sinha_resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors flex items-center gap-2"
            >
              <HiEye className="text-lg" />
              View Resume
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Education</h3>
          <div className="flex items-start gap-4">
            <div className="space-y-2 flex-1">
              <h4 className="text-lg font-semibold text-[var(--console-text)]">University of Wisconsin Madison</h4>
              <p className="text-[var(--console-text-dim)]">BS in Computer Science, Certificate in Game Design</p>
              <p className="text-[var(--console-text-dim)]">Sept 2022 – May 2026 | GPA: 3.9/4.0</p>
              <p className="text-[var(--console-text-dim)]">4-time Dean&apos;s List recipient</p>
            </div>
            <img 
              src="/images/WX9DTCt5_400x400.png" 
              alt="University of Wisconsin Madison logo"
              className="w-24 h-24 object-contain rounded-lg border border-[var(--console-border)] bg-white p-2 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}