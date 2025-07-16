import PortfolioLayout from '../components/PortfolioLayout';
import { HiMail, HiPhone, HiLocationMarker, HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

export default function Contact() {
  return (
    <PortfolioLayout>
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--console-primary)] mb-4 sm:mb-6">
          {'< CONTACT ME />'}
        </h2>
        
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <p className="text-sm sm:text-base text-[var(--console-text)] mb-4 sm:mb-6 leading-relaxed">
            I&apos;m always open to discussing new opportunities, collaborating on interesting projects, 
            or just having a conversation about technology. Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">Contact Information</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:sinhadevaansh@gmail.com" 
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)] hover:border-[var(--console-primary)]"
                >
                  <HiMail className="text-xl sm:text-2xl" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-sm text-[var(--console-text-dim)]">sinhadevaansh@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="tel:6083350973" 
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)] hover:border-[var(--console-primary)]"
                >
                  <HiPhone className="text-xl sm:text-2xl" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-sm text-[var(--console-text-dim)]">(608) 335-0973</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-3 text-[var(--console-text)] p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
                  <HiLocationMarker className="text-xl sm:text-2xl text-[var(--console-secondary)]" />
                  <div>
                    <div className="font-semibold text-[var(--console-secondary)]">Location</div>
                    <div className="text-sm text-[var(--console-text-dim)]">Madison, WI</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-4">Connect Online</h3>
              <div className="space-y-3">
                <a 
                  href="https://www.linkedin.com/in/devaanshsinha/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)] hover:border-[var(--console-primary)]"
                >
                  <FaLinkedin className="text-2xl" />
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-[var(--console-text-dim)]">Professional Profile</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.github.com/devaanshsinha/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)] hover:border-[var(--console-primary)]"
                >
                  <FaGithub className="text-2xl" />
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-[var(--console-text-dim)]">Code Portfolio</div>
                  </div>
                </a>
                
                <a 
                  href="/Devaansh_Sinha_resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors p-3 bg-[var(--console-bg)] rounded border border-[var(--console-border)] hover:border-[var(--console-primary)]"
                >
                  <FaFilePdf className="text-2xl" />
                  <div>
                    <div className="font-semibold">Resume</div>
                    <div className="text-sm text-[var(--console-text-dim)]">View or Download PDF</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Status */}
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)]">
          <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">Current Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <h4 className="font-semibold text-[var(--console-primary)] mb-2 flex items-center gap-2">
                <HiAcademicCap className="text-lg" />
                Education
              </h4>
              <p className="text-[var(--console-text)] text-sm">
                Senior year at UW Madison<br/>
                Graduating May 2026
              </p>
            </div>
            <div className="p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <h4 className="font-semibold text-[var(--console-primary)] mb-2 flex items-center gap-2">
                <HiBriefcase className="text-lg" />
                Work
              </h4>
              <p className="text-[var(--console-text)] text-sm">
                Software Engineering Intern at Gemini<br/>
                Open to new opportunities
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-[var(--console-bg-light)] p-4 sm:p-6 rounded-lg border border-[var(--console-border)] text-center">
          <h3 className="text-base sm:text-lg font-bold text-[var(--console-secondary)] mb-3 sm:mb-4">Let&apos;s Build Something Amazing Together!</h3>
          <p className="text-sm sm:text-base text-[var(--console-text)] mb-4 sm:mb-6">
            Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
            I&apos;d love to hear from you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="mailto:sinhadevaansh@gmail.com?subject=Let's Connect!" 
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors text-sm sm:text-base"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/devaanshsinha/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors text-sm sm:text-base"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </PortfolioLayout>
  );
}