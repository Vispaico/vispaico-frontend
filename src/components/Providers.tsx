// src/components/Providers.tsx (Wraps Context and Page Transitions)
"use client"; // This entire component runs on the client

import React, { ReactNode } from 'react';
import { CursorProvider } from '@/context/CursorContext'; // Context for cursor state
import CustomCursor from '@/components/CustomCursor'; // The custom cursor element
import { PageTransitionWrapper } from '@/components/PageTransitionWrapper'; // The component handling animations

// This component bundles client-side providers and wrappers
export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    // CursorProvider makes cursor state available to components below it
    <CursorProvider>
      {/* PageTransitionWrapper handles animating page changes */}
      <PageTransitionWrapper>
         {/* children represents the actual page component being rendered */}
         {children}
      </PageTransitionWrapper>

      {/* CustomCursor is rendered here, within the CursorProvider context */}
      <CustomCursor />
    </CursorProvider>
  );
}
