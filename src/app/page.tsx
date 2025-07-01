'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);
  const [terminalText, setTerminalText] = useState('');
  
  const menuItems = [
    { id: 'about', label: 'ABOUT', icon: '▸' },
    { id: 'projects', label: 'PROJECTS', icon: '▸' },
    { id: 'skills', label: 'SKILLS', icon: '▸' },
    { id: 'contact', label: 'CONTACT', icon: '▸' },
  ];

  useEffect(() => {
    const loadingText = 'INITIALIZING PORTFOLIO SYSTEM...';
    let index = 0;
    
    const interval = setInterval(() => {
      if (index <= loadingText.length) {
        setTerminalText(loadingText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--console-primary)] mb-6">
              {'< ABOUT ME />'}
            </h2>
            <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
              <p className="text-[var(--console-text)] leading-relaxed mb-4">
                Hello! I'm Devaansh, a senior year software engineering student passionate about 
                building innovative digital experiences.
              </p>
              <p className="text-[var(--console-text)] leading-relaxed">
                I specialize in full-stack development and enjoy creating 
                solutions that blend functionality with engaging user interfaces.
              </p>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--console-primary)] mb-6">
              {'< PROJECTS />'}
            </h2>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)] hover:border-[var(--console-secondary)] transition-all cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-[var(--console-secondary)] mb-2">
                    Project {i}
                  </h3>
                  <p className="text-[var(--console-text-dim)] mb-4">
                    Description of an awesome project showcasing my skills...
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[var(--console-bg)] rounded-full text-xs text-[var(--console-primary)] border border-[var(--console-primary)]">
                      React
                    </span>
                    <span className="px-3 py-1 bg-[var(--console-bg)] rounded-full text-xs text-[var(--console-primary)] border border-[var(--console-primary)]">
                      Node.js
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--console-primary)] mb-6">
              {'< SKILLS />'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
                { category: 'Backend', skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
                { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'VS Code'] },
                { category: 'Other', skills: ['Python', 'Java', 'C++', 'Agile'] },
              ].map((group) => (
                <div 
                  key={group.category}
                  className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]"
                >
                  <h3 className="text-lg font-bold text-[var(--console-secondary)] mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-[var(--console-bg)] rounded text-sm text-[var(--console-text)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--console-primary)] mb-6">
              {'< CONTACT />'}
            </h2>
            <div className="bg-[var(--console-bg-light)] p-6 rounded-lg border border-[var(--console-border)]">
              <p className="text-[var(--console-text)] mb-6">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:devaansh@example.com" 
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors"
                >
                  <span className="text-2xl">✉</span>
                  <span>devaansh@example.com</span>
                </a>
                <a 
                  href="https://github.com/devaansh" 
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors"
                >
                  <span className="text-2xl">⚡</span>
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/devaansh" 
                  className="flex items-center gap-3 text-[var(--console-secondary)] hover:text-[var(--console-primary)] transition-colors"
                >
                  <span className="text-2xl">◈</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
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
          <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-sans)] tracking-wider mb-2">
            <span className="text-[var(--console-primary)]">DEVAANSH</span>
            <span className="text-[var(--console-secondary)]">.</span>
            <span className="text-[var(--console-accent)]">DEV</span>
          </h1>
          <p className="text-[var(--console-text-dim)] text-sm tracking-widest">
            SOFTWARE ENGINEER | SENIOR YEAR
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
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 
                            ${activeSection === item.id 
                              ? 'bg-[var(--console-primary)] text-[var(--console-bg)] font-bold' 
                              : 'hover:bg-[var(--console-bg-light)] text-[var(--console-text)]'
                            }`}
                        >
                          <span className={activeSection === item.id ? 'rotate-90' : ''}>
                            {item.icon}
                          </span>
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              {/* Content Area */}
              <main className="lg:col-span-3">
                <div className="bg-[var(--console-bg)] rounded-lg p-6 border border-[var(--console-border)] min-h-[400px]">
                  {renderContent()}
                </div>
              </main>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-[var(--console-text-dim)] text-sm">
          <p>© 2025 Devaansh | Powered by Next.js</p>
        </footer>
      </div>
    </div>
  );
}