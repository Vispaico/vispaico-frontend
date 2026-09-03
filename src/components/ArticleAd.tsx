"use client";

import { useRef } from 'react';

type AdVariant = 'leaderboard' | 'mobile-banner' | 'rectangle';

const AD_CONFIG: Record<AdVariant, { width: number; height: number }> = {
  'leaderboard': { width: 728, height: 90 },
  'mobile-banner': { width: 320, height: 50 },
  'rectangle': { width: 300, height: 250 },
};

type ArticleAdProps = {
  variant: AdVariant;
  className?: string;
};

export function ArticleAd({ variant, className }: ArticleAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = AD_CONFIG[variant];

  if (!config) return null;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minHeight: config.height, width: config.width }}
      aria-label="Sponsored advertisement"
    />
  );
}
