// src/context/CursorContext.tsx
"use client"; // Context Providers often need client features

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface CursorContextProps {
  isHoveringInteractive: boolean;
  setIsHoveringInteractive: (isHovering: boolean) => void;
  cursorText: string;
  setCursorText: (text: string) => void; // Optional: For text inside cursor
}

// Create the context with a default value
const CursorContext = createContext<CursorContextProps | undefined>(undefined);

// Create the Provider component
export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [cursorText, setCursorText] = useState(''); // Optional text state

  return (
    <CursorContext.Provider value={{ isHoveringInteractive, setIsHoveringInteractive, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
};

// Create a custom hook for easy context access
export const useCursor = (): CursorContextProps => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};