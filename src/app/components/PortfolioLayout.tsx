'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLoading } from './LoadingProvider';
import { useState } from 'react';
import { HiMenu, HiX, HiMoon, HiSun, HiCode } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const { isLoading, terminalText } = useLoading();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
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
    if (pathname === '/projects' || pathname.startsWith('/projects/')) return 'projects';
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
    <div className="min-h-screen p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-4 sm:mb-8 relative">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-[var(--font-sans)] tracking-wider mb-2">
              <Link href="/about" className="inline-block hover:opacity-80 transition-opacity">
                <span className="text-[var(--console-primary)]">DEVAANSH</span>
                <span className="text-[var(--console-secondary)]">.</span>
                <span className="text-[var(--console-accent)]">TECH</span>
              </Link>
            </h1>
            <p className="text-[var(--console-text-dim)] text-xs sm:text-sm tracking-widest px-4">
              SOFTWARE ENGINEER | GEMINI | UW MADISON
            </p>
          </div>
        </header>

        {/* Main Console Container */}
        <div className="bg-[var(--console-bg-light)] rounded-lg border-2 border-[var(--console-border)] shadow-2xl overflow-hidden">
          {/* Console Header Bar */}
          <div className="bg-[var(--console-border)] px-3 sm:px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-[var(--console-text-dim)] hidden sm:block">
              PORTFOLIO_SYSTEM_v1.0
            </div>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1 text-[var(--console-text)]"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[var(--console-bg)] border-b border-[var(--console-border)]">
              <nav className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 text-sm
                          ${getActiveSection() === item.id 
                            ? 'bg-[var(--console-primary)] text-[var(--console-bg)] font-bold' 
                            : 'bg-[var(--console-bg-light)] hover:bg-[var(--console-border)] text-[var(--console-text)]'
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
                
                {/* Theme Selection in Mobile Menu */}
                <div className="mt-6 pt-6 border-t border-[var(--console-border)]">
                  <h3 className="text-xs font-bold text-[var(--console-text-dim)] uppercase mb-3">Theme</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => {
                        setTheme('dark');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all ${
                        theme === 'dark' 
                          ? 'bg-[var(--console-primary)] text-[var(--console-bg)]' 
                          : 'bg-[var(--console-bg-light)] text-[var(--console-text)] hover:bg-[var(--console-border)]'
                      }`}
                    >
                      <HiMoon className="w-5 h-5" />
                      <span className="text-xs">Dark</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme('light');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all ${
                        theme === 'light' 
                          ? 'bg-[var(--console-primary)] text-[var(--console-bg)]' 
                          : 'bg-[var(--console-bg-light)] text-[var(--console-text)] hover:bg-[var(--console-border)]'
                      }`}
                    >
                      <HiSun className="w-5 h-5" />
                      <span className="text-xs">Light</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme('synthwave');
                        setIsMobileMenuOpen(false);
                      }}
                      className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all ${
                        theme === 'synthwave' 
                          ? 'bg-[var(--console-primary)] text-[var(--console-bg)]' 
                          : 'bg-[var(--console-bg-light)] text-[var(--console-text)] hover:bg-[var(--console-border)]'
                      }`}
                    >
                      <HiCode className="w-5 h-5" />
                      <span className="text-xs">Synth</span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          )}

          {/* Console Content */}
          <div className="p-3 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Desktop Navigation Menu */}
              <nav className="hidden lg:block lg:col-span-1">
                <div className="bg-[var(--console-bg)] rounded-lg p-4 border border-[var(--console-border)]">
                  <h3 className="text-[var(--console-primary)] font-bold mb-4 text-sm tracking-widest">
                    MAIN MENU
                  </h3>
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={item.href}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3
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
                  
                  {/* Theme Selection in Desktop Menu */}
                  <div className="mt-6 pt-6 border-t border-[var(--console-border)]">
                    <h3 className="text-[var(--console-primary)] font-bold mb-4 text-sm tracking-widest">
                      THEME
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setTheme('dark')}
                        className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all ${
                          theme === 'dark' 
                            ? 'bg-[var(--console-primary)] text-[var(--console-bg)]' 
                            : 'bg-[var(--console-bg-light)] text-[var(--console-text)] hover:bg-[var(--console-border)]'
                        }`}
                      >
                        <HiMoon className="w-5 h-5" />
                        <span className="text-xs">Dark</span>
                      </button>
                      <button
                        onClick={() => setTheme('light')}
                        className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all ${
                          theme === 'light' 
                            ? 'bg-[var(--console-primary)] text-[var(--console-bg)]' 
                            : 'bg-[var(--console-bg-light)] text-[var(--console-text)] hover:bg-[var(--console-border)]'
                        }`}
                      >
                        <HiSun className="w-5 h-5" />
                        <span className="text-xs">Light</span>
                      </button>
                      <button
                        onClick={() => setTheme('synthwave')}
                        className={`p-3 rounded-lg flex flex-col items-center gap-1 transition-all ${
                          theme === 'synthwave' 
                            ? 'bg-[var(--console-primary)] text-[var(--console-bg)]' 
                            : 'bg-[var(--console-bg-light)] text-[var(--console-text)] hover:bg-[var(--console-border)]'
                        }`}
                      >
                        <HiCode className="w-5 h-5" />
                        <span className="text-xs">Synth</span>
                      </button>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Content Area */}
              <main className="lg:col-span-3">
                <div className="bg-[var(--console-bg)] rounded-lg p-4 sm:p-6 border border-[var(--console-border)] min-h-[400px]">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-4 sm:mt-8 text-center text-[var(--console-text-dim)] text-xs sm:text-sm pb-4">
          <p>© 2025 Devaansh</p>
        </footer>
      </div>
    </div>
  );
}