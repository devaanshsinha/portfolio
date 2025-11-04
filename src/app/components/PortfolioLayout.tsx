'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiMenu, HiMoon, HiSun, HiX } from 'react-icons/hi';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ConsoleHeading } from './console/console-heading';
import { ConsolePanel } from './console/console-panel';
import { useLoading } from './LoadingProvider';
import { useTheme } from '../contexts/ThemeContext';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

type ThemeMode = 'dark' | 'light' | 'synthwave';

const themeOptions: Array<{ value: ThemeMode; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { value: 'dark', label: 'Dark', icon: HiMoon },
  { value: 'light', label: 'Light', icon: HiSun },
  { value: 'synthwave', label: 'Synth', icon: HiCode },
];

const windowIndicators = [
  { color: 'bg-red-500' },
  { color: 'bg-yellow-500' },
  { color: 'bg-green-500' },
];

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const { isLoading, terminalText } = useLoading();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = useMemo(
    () => [
      { id: 'about', label: 'ABOUT', icon: '▸', href: '/about' },
      { id: 'experience', label: 'EXPERIENCE', icon: '▸', href: '/experience' },
      { id: 'projects', label: 'PROJECTS', icon: '▸', href: '/projects' },
      { id: 'skills', label: 'SKILLS', icon: '▸', href: '/skills' },
      { id: 'contact', label: 'CONTACT', icon: '▸', href: '/contact' },
    ],
    []
  );

  const getActiveSection = useCallback((): string => {
    if (pathname === '/' || pathname === '/about') return 'about';
    if (pathname === '/experience') return 'experience';
    if (pathname === '/projects' || pathname.startsWith('/projects/')) return 'projects';
    if (pathname === '/skills') return 'skills';
    if (pathname === '/contact') return 'contact';
    return 'about';
  }, [pathname]);

  const handleThemeChange = (value: ThemeMode) => {
    setTheme(value);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          {terminalText ? (
            <div className="mb-4 text-2xl font-mono text-[var(--console-primary)]">
              {terminalText}
              <span className="animate-pulse">_</span>
            </div>
          ) : null}
          <div className="mt-8 flex justify-center gap-2">
            {windowIndicators.map(({ color }, index) => (
              <div
                key={color}
                className={`h-3 w-3 rounded-full ${color} animate-bounce`}
                style={{ animationDelay: `${index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-2 sm:p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="relative mb-4 text-center sm:mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-wider sm:text-4xl md:text-6xl font-[var(--font-sans)]">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <span className="text-[var(--console-primary)]">DEVAANSH</span>
              <span className="text-[var(--console-secondary)]">.</span>
              <span className="text-[var(--console-accent)]">TECH</span>
            </Link>
          </h1>
          <p className="px-4 text-xs tracking-widest text-[var(--console-text-dim)] sm:text-sm">
            SOFTWARE ENGINEER | GEMINI | UW MADISON
          </p>
        </header>

        <ConsolePanel
          tone="light"
          padding="none"
          className="overflow-hidden border-2 shadow-2xl"
          animateOnMount={false}
        >
          <div className="flex items-center justify-between bg-[var(--console-border)] px-3 py-2 sm:px-4">
            <div className="flex items-center gap-2">
              {windowIndicators.map(({ color }) => (
                <span key={color} className={`h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3 ${color}`} />
              ))}
            </div>
            <div className="hidden text-xs tracking-[0.18em] text-[var(--console-text-dim)] sm:block">
              PORTFOLIO_SYSTEM_v1.5
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-[var(--console-text)]"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="border-b border-[var(--console-border)] bg-[var(--console-bg)] lg:hidden">
              <nav className="p-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => {
                    const isActive = getActiveSection() === item.id;
                    return (
                      <motion.li
                        key={item.id}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      >
                        <Button
                          asChild
                          variant="nav"
                          isActive={isActive}
                          className="h-auto w-full px-4 py-3 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Link href={item.href} className="flex w-full items-center gap-3">
                            <motion.span
                              animate={{ rotate: isActive ? 90 : 0 }}
                              transition={{ duration: 0.2, ease: 'easeOut' }}
                              className="text-xs"
                            >
                              {item.icon}
                            </motion.span>
                            <span>{item.label}</span>
                          </Link>
                        </Button>
                      </motion.li>
                    );
                  })}
                </ul>
                <div className="mt-6 border-t border-[var(--console-border)] pt-6">
                  <ConsoleHeading
                    level={3}
                    className="mb-3 text-xs tracking-[0.18em] text-[var(--console-text-dim)]"
                    animate={false}
                  >
                    THEME
                  </ConsoleHeading>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em]"
                      >
                        <span>
                          {themeOptions.find((option) => option.value === theme)?.label ?? 'Dark'}
                        </span>
                        <span className="text-[var(--console-text-dim)]">▾</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-full">
                      {themeOptions.map(({ value, label, icon: Icon }) => (
                        <DropdownMenuItem
                          key={value}
                          onSelect={() => handleThemeChange(value)}
                          className="flex items-center gap-3 text-xs uppercase tracking-[0.12em]"
                          data-active={theme === value}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="flex-1">{label}</span>
                          {theme === value && <span className="text-[var(--console-primary)]">◆</span>}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </nav>
            </div>
          )}

          <div className="p-3 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-4">
              <nav className="hidden lg:block lg:col-span-1">
                <ConsolePanel
                  tone="base"
                  padding="sm"
                  className="border border-[var(--console-border)]"
                  animateOnMount={false}
                >
                  <ConsoleHeading
                    level={3}
                    className="mb-4 text-sm tracking-[0.18em] text-[var(--console-primary)]"
                    animate={false}
                  >
                    MAIN MENU
                  </ConsoleHeading>
                  <ul className="space-y-2">
                    {menuItems.map((item) => {
                      const isActive = getActiveSection() === item.id;
                      return (
                        <motion.li
                          key={item.id}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                        >
                          <Button
                            asChild
                            variant="nav"
                            isActive={isActive}
                            className="h-auto w-full px-4 py-3 text-sm"
                          >
                            <Link href={item.href} className="flex w-full items-center gap-3">
                              <motion.span
                                animate={{ rotate: isActive ? 90 : 0 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                className="text-xs"
                              >
                                {item.icon}
                              </motion.span>
                              <span>{item.label}</span>
                            </Link>
                          </Button>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <div className="mt-6 border-t border-[var(--console-border)] pt-6">
                    <ConsoleHeading
                      level={3}
                      className="mb-4 text-sm tracking-[0.18em] text-[var(--console-primary)]"
                      animate={false}
                    >
                      THEME
                    </ConsoleHeading>
                    <Tabs
                      value={theme}
                      onValueChange={(value) => handleThemeChange(value as ThemeMode)}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-3 gap-2 border border-[var(--console-border)] bg-[var(--console-bg-light)] p-1">
                        {themeOptions.map(({ value, label, icon: Icon }) => (
                          <TabsTrigger
                            key={value}
                            value={value}
                            className="gap-2 text-xs"
                          >
                            <Icon className="h-4 w-4" />
                            {label}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </div>
                </ConsolePanel>
              </nav>

              <main className="lg:col-span-3">
                  <ConsolePanel
                    tone="base"
                    padding="md"
                    className="min-h-[400px] border border-[var(--console-border)]"
                    animateOnMount={false}
                  >
                  {children}
                </ConsolePanel>
              </main>
            </div>
          </div>
        </ConsolePanel>

        <footer className="mt-4 pb-4 text-center text-xs text-[var(--console-text-dim)] sm:mt-8 sm:text-sm">
          <p>© 2025 Devaansh</p>
        </footer>
      </div>
    </div>
  );
}
