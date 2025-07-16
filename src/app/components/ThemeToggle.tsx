'use client';

import { useTheme } from '../contexts/ThemeContext';
import { HiSun, HiMoon, HiCode } from 'react-icons/hi';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'dark', name: 'Dark', icon: HiMoon },
    { id: 'light', name: 'Light', icon: HiSun },
    { id: 'synthwave', name: 'Synthwave', icon: HiCode },
  ] as const;

  const currentTheme = themes.find(t => t.id === theme);
  const Icon = currentTheme?.icon || HiMoon;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 sm:p-3 rounded-lg bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] text-[var(--theme-text)] hover:border-[var(--theme-primary)] transition-all shadow-md"
        aria-label="Change theme"
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-40 sm:w-48 rounded-lg bg-[var(--theme-bg-secondary)] border border-[var(--theme-border)] shadow-lg z-50">
            {themes.map(({ id, name, icon: ThemeIcon }) => (
              <button
                key={id}
                onClick={() => {
                  setTheme(id);
                  setIsOpen(false);
                }}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-[var(--theme-bg)] transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  theme === id ? 'text-[var(--theme-primary)]' : 'text-[var(--theme-text)]'
                }`}
              >
                <ThemeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-sm sm:text-base">{name}</span>
                {theme === id && (
                  <span className="ml-auto text-xs hidden sm:inline">Active</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}