'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLoading } from './LoadingProvider';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const { isLoading, terminalText } = useLoading();
  const pathname = usePathname();
  
  const menuItems = [
    { id: 'about', label: 'ABOUT', icon: '▸', href: '/about' },
    { id: 'experience', label: 'EXPERIENCE', icon: '▸', href: '/experience' },
    { id: 'projects', label: 'PROJECTS', icon: '▸', href: '/projects' },
    { id: 'skills', label: 'SKILLS', icon: '▸', href: '/skills' },
    { id: 'contact', label: 'CONTACT', icon: '▸', href: '/contact' },
  ];

  const getActiveSection = () => {
    if (pathname === '/' || pathname === '/about') return 'about';
    if (pathname === '/experience') return 'experience';
    if (pathname === '/projects') return 'projects';
    if (pathname === '/skills') return 'skills';
    if (pathname === '/contact') return 'contact';
    return 'about';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-mono text-[var(--console-primary)] mb-4">
            {terminalText}
            <span className="animate-pulse">_</span>
          </div>
          <div className="flex gap-2 justify-center mt-8">
            <div className="w-3 h-3 bg-[var(--console-primary)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-[var(--console-secondary)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-[var(--console-accent)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <Link href="/about">
            <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-sans)] tracking-wider mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="text-[var(--console-primary)]">DEVAANSH</span>
              <span className="text-[var(--console-secondary)]">.</span>
              <span className="text-[var(--console-accent)]">TECH</span>
            </h1>
          </Link>
          <p className="text-[var(--console-text-dim)] text-sm tracking-widest">
            SOFTWARE ENGINEER | GEMINI | UW MADISON
          </p>
        </header>

        {/* Main Console Container */}
        <div className="bg-[var(--console-bg-light)] rounded-lg border-2 border-[var(--console-border)] shadow-2xl overflow-hidden">
          {/* Console Header Bar */}
          <div className="bg-[var(--console-border)] px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-[var(--console-text-dim)]">
              PORTFOLIO_SYSTEM_v1.0
            </div>
          </div>

          {/* Console Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Navigation Menu */}
              <nav className="lg:col-span-1">
                <div className="bg-[var(--console-bg)] rounded-lg p-4 border border-[var(--console-border)]">
                  <h3 className="text-[var(--console-primary)] font-bold mb-4 text-sm tracking-widest">
                    MAIN MENU
                  </h3>
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 block
                            ${getActiveSection() === item.id 
                              ? 'bg-[var(--console-primary)] text-[var(--console-bg)] font-bold' 
                              : 'hover:bg-[var(--console-bg-light)] text-[var(--console-text)]'
                            }`}
                        >
                          <span className={getActiveSection() === item.id ? 'rotate-90' : ''}>
                            {item.icon}
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              {/* Content Area */}
              <main className="lg:col-span-3">
                <div className="bg-[var(--console-bg)] rounded-lg p-6 border border-[var(--console-border)] min-h-[400px]">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-[var(--console-text-dim)] text-sm">
          <p>© 2025 Devaansh</p>
        </footer>
      </div>
    </div>
  );
}