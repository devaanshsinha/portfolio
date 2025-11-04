'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  terminalText: string;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  terminalText: ''
});

export const useLoading = () => useContext(LoadingContext);

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [terminalText, setTerminalText] = useState('');

  useEffect(() => {
    const loadingText = '';
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

  return (
    <LoadingContext.Provider value={{ isLoading, terminalText }}>
      {children}
    </LoadingContext.Provider>
  );
}
