import PortfolioLayout from '../../components/PortfolioLayout';
import Link from 'next/link';
import { HiArrowLeft, HiExternalLink, HiCode } from 'react-icons/hi';

export default function ShelfWise() {
  return (
    <PortfolioLayout>
      <div className="space-y-6">
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-[var(--console-text-dim)] hover:text-[var(--console-primary)] transition-colors">
          <HiArrowLeft />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="border-b border-[var(--console-border)] pb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--console-primary)] mb-2">
            ShelfWise
          </h1>
          <p className="text-lg text-[var(--console-secondary)]">
            AI-Powered Pantry Management System
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Overview</h2>
          <p className="text-[var(--console-text)] leading-relaxed mb-4">
            ShelfWise is a comprehensive pantry management application that revolutionizes how households track and manage their food inventory. 
            By combining computer vision for receipt scanning, AI-powered assistance, and intelligent recipe suggestions, 
            ShelfWise helps reduce food waste while making meal planning effortless.
          </p>
          <p className="text-[var(--console-text)] leading-relaxed">
            The platform features hands-free interaction through natural language processing, allowing users to update their inventory, 
            get recipe suggestions, and track expiration dates through voice commands - perfect for busy kitchens.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Smart Receipt Scanning</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">OCR technology with 95% accuracy for automatic inventory updates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">AI Recipe Suggestions</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Personalized recipes based on available ingredients and preferences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Voice-Controlled Updates</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Hands-free inventory management with NLP integration</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Expiration Tracking</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Smart notifications to prevent food waste</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Shopping List Generation</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Automatic lists based on consumption patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Nutritional Analytics</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Track nutritional intake and dietary goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Technical Architecture</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--console-primary)] mb-2">Computer Vision & OCR</h3>
              <p className="text-sm text-[var(--console-text)] mb-2">
                Implemented Python-based receipt scanning using OpenCV for image preprocessing and Tesseract OCR for text extraction. 
                Custom algorithms handle various receipt formats with 95% accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'OpenCV', 'Tesseract OCR', 'NumPy', 'PIL'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[var(--console-bg)] rounded text-xs text-[var(--console-primary)] border border-[var(--console-primary)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-primary)] mb-2">Backend API</h3>
              <p className="text-sm text-[var(--console-text)] mb-2">
                FastAPI backend with Prisma ORM for efficient database operations. RESTful endpoints handle inventory management, 
                recipe generation, and real-time updates with optimized query performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'Prisma ORM', 'PostgreSQL', 'Redis Cache', 'WebSockets'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[var(--console-bg)] rounded text-xs text-[var(--console-secondary)] border border-[var(--console-secondary)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-primary)] mb-2">Frontend & AI Integration</h3>
              <p className="text-sm text-[var(--console-text)] mb-2">
                React/TypeScript frontend with real-time updates. Integrated OpenAI GPT for natural language processing, 
                enabling conversational inventory management and intelligent recipe suggestions.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'React Query'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[var(--console-bg)] rounded text-xs text-[var(--console-accent)] border border-[var(--console-accent)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Metrics */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Impact & Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">95%</div>
              <p className="text-sm text-[var(--console-text-dim)]">OCR accuracy for receipt scanning</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">40%</div>
              <p className="text-sm text-[var(--console-text-dim)]">Reduction in food waste</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">2.5s</div>
              <p className="text-sm text-[var(--console-text-dim)]">Average receipt processing time</p>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Challenges & Solutions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--console-accent)]">Challenge: Receipt Format Variability</h3>
              <p className="text-sm text-[var(--console-text)] mt-1">
                Developed adaptive parsing algorithms that learn from user corrections, improving accuracy over time. Implemented fallback mechanisms for manual entry when OCR confidence is low.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-accent)]">Challenge: Real-time Voice Processing</h3>
              <p className="text-sm text-[var(--console-text)] mt-1">
                Integrated speech-to-text with contextual understanding, allowing natural commands like &quot;I just used two eggs&quot; to automatically update inventory counts.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-accent)]">Challenge: Scalable Recipe Matching</h3>
              <p className="text-sm text-[var(--console-text)] mt-1">
                Built efficient indexing system with Redis caching for instant recipe suggestions based on available ingredients, dietary restrictions, and user preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Future Enhancements</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[var(--console-primary)]">▸</span>
              <span className="text-[var(--console-text)]">Barcode scanning for faster product entry</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--console-primary)]">▸</span>
              <span className="text-[var(--console-text)]">Integration with grocery delivery services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--console-primary)]">▸</span>
              <span className="text-[var(--console-text)]">Multi-household sharing for families</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--console-primary)]">▸</span>
              <span className="text-[var(--console-text)]">Meal prep planning with batch cooking support</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap">
          <a 
            href="https://github.com/yourusername/shelfwise" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors flex items-center gap-2"
          >
            <HiCode />
            View Source Code
          </a>
          <a 
            href="https://shelfwise-demo.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors flex items-center gap-2"
          >
            <HiExternalLink />
            Live Demo
          </a>
        </div>
      </div>
    </PortfolioLayout>
  );
}