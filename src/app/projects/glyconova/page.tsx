import PortfolioLayout from '../../components/PortfolioLayout';
import Link from 'next/link';
import { HiArrowLeft, HiExternalLink, HiCode } from 'react-icons/hi';

export default function GlycoNova() {
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
            GlycoNova
          </h1>
          <p className="text-lg text-[var(--console-secondary)]">
            Type 1 Diabetes Management Platform
          </p>
        </div>

        {/* Overview Section */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Overview</h2>
          <p className="text-[var(--console-text)] leading-relaxed mb-4">
            GlycoNova is a comprehensive diabetes management platform built by someone with 16 years of lived experience with Type 1 Diabetes. 
            The platform integrates with Dexcom CGM (G6/G7) and Omnipod 5 insulin pumps to provide real-time glucose monitoring, 
            intelligent pattern recognition, and personalized insulin recommendations.
          </p>
          <p className="text-[var(--console-text)] leading-relaxed">
            Built in collaboration with endocrinologists, GlycoNova aims to democratize access to advanced diabetes management tools 
            by providing free access to everyone, regardless of their financial situation.
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
                  <h3 className="font-semibold text-[var(--console-text)]">Real-Time Device Integration</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Seamless connection with Dexcom CGM and Omnipod insulin pumps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Pattern Recognition</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">AI-powered glucose pattern analysis for trend prediction</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Insulin Recommendations</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Personalized dosing suggestions based on historical data</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Data Visualization</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Interactive charts and dashboards for glucose trends</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">HIPAA Compliance</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Secure data handling with end-to-end encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--console-primary)] mt-1">▸</span>
                <div>
                  <h3 className="font-semibold text-[var(--console-text)]">Multi-Device Sync</h3>
                  <p className="text-sm text-[var(--console-text-dim)]">Access your data from any device, anywhere</p>
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
              <h3 className="font-semibold text-[var(--console-primary)] mb-2">Frontend</h3>
              <p className="text-sm text-[var(--console-text)] mb-2">
                Built with Next.js 14 and TypeScript for type-safe, server-side rendered performance. 
                Utilized Tailwind CSS for responsive design and Framer Motion for smooth animations.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[var(--console-bg)] rounded text-xs text-[var(--console-primary)] border border-[var(--console-primary)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-primary)] mb-2">Backend</h3>
              <p className="text-sm text-[var(--console-text)] mb-2">
                RESTful API handling 10K+ daily health data points with sub-200ms response times. 
                PostgreSQL database with optimized queries for time-series glucose data.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PostgreSQL', 'Prisma ORM', 'REST APIs', 'JWT Auth'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[var(--console-bg)] rounded text-xs text-[var(--console-secondary)] border border-[var(--console-secondary)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-primary)] mb-2">Integrations</h3>
              <p className="text-sm text-[var(--console-text)] mb-2">
                Seamless integration with medical device APIs for real-time data synchronization. 
                Implemented webhook listeners for instant glucose updates.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Dexcom API', 'Omnipod API', 'Clerk Auth', 'Webhooks', 'WebSocket'].map(tech => (
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
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">10K+</div>
              <p className="text-sm text-[var(--console-text-dim)]">Daily health data points processed</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">&lt;200ms</div>
              <p className="text-sm text-[var(--console-text-dim)]">Average API response time</p>
            </div>
            <div className="text-center p-4 bg-[var(--console-bg)] rounded border border-[var(--console-border)]">
              <div className="text-2xl font-bold text-[var(--console-primary)] mb-2">98%</div>
              <p className="text-sm text-[var(--console-text-dim)]">Mobile responsiveness score</p>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
          <h2 className="text-xl font-bold text-[var(--console-secondary)] mb-4">Challenges & Solutions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--console-accent)]">Challenge: Real-time Data Synchronization</h3>
              <p className="text-sm text-[var(--console-text)] mt-1">
                Implemented WebSocket connections with automatic reconnection logic and data buffering to ensure no glucose readings are lost during network interruptions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-accent)]">Challenge: HIPAA Compliance</h3>
              <p className="text-sm text-[var(--console-text)] mt-1">
                Built comprehensive encryption at rest and in transit, audit logging, and role-based access controls to meet healthcare data protection standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--console-accent)]">Challenge: Complex Time-Series Analysis</h3>
              <p className="text-sm text-[var(--console-text)] mt-1">
                Optimized PostgreSQL queries with proper indexing and materialized views for efficient analysis of glucose patterns over extended time periods.
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap">
          <a 
            href="https://glyconova.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--console-primary)] text-[var(--console-bg)] font-bold rounded-lg hover:bg-[var(--console-secondary)] transition-colors flex items-center gap-2"
          >
            <HiExternalLink />
            Visit Live Site
          </a>
          <a 
            href="https://github.com/devaanshsinha/glyconova" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[var(--console-bg)] border border-[var(--console-primary)] text-[var(--console-primary)] font-bold rounded-lg hover:bg-[var(--console-primary)] hover:text-[var(--console-bg)] transition-colors flex items-center gap-2"
          >
            <HiCode />
            View Source Code
          </a>
        </div>
      </div>
    </PortfolioLayout>
  );
}