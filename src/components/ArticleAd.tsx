"use client";

import clsx from 'clsx';
import { useEffect, useRef } from 'react';

type AdVariant = 'leaderboard' | 'mobile-banner' | 'rectangle';

const AD_CONFIG: Record<AdVariant, { key: string; scriptSrc: string; width: number; height: number }> = {
  'leaderboard': {
    key: '6e6fd6493909056cf3b2461168387a2b',
    scriptSrc: 'https://prototypesorting.com/6e6fd6493909056cf3b2461168387a2b/invoke.js',
    width: 728,
    height: 90,
  },
  'mobile-banner': {
    key: '598b2b887a99391d176233c57a5aa347',
    scriptSrc: 'https://prototypesorting.com/598b2b887a99391d176233c57a5aa347/invoke.js',
    width: 320,
    height: 50,
  },
  'rectangle': {
    key: '5030453d2eb50d6084c423db9718ea05',
    scriptSrc: 'https://prototypesorting.com/5030453d2eb50d6084c423db9718ea05/invoke.js',
    width: 300,
    height: 250,
  },
};

type ArticleAdProps = {
  variant: AdVariant;
  className?: string;
};

export function ArticleAd({ variant, className }: ArticleAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = AD_CONFIG[variant];

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !config) return;

    const iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups');
    iframe.setAttribute('referrerpolicy', 'no-referrer');
    iframe.title = 'Sponsored advertisement';
    iframe.style.border = '0';
    iframe.style.width = '100%';
    iframe.style.maxWidth = `${config.width}px`;
    iframe.style.height = `${config.height}px`;
    iframe.style.borderRadius = '12px';

    iframe.srcdoc = `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden;background:transparent;}</style></head><body><script>var atOptions={key:"${config.key}",format:"iframe",height:${config.height},width:${config.width},params:{}};<\/script><script src="${config.scriptSrc}"><\/script></body></html>`;

    container.innerHTML = '';
    container.appendChild(iframe);
  }, [config]);

  if (!config) return null;

  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm',
        'flex flex-col gap-2',
        className
      )}
    >
      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        <span>Sponsored</span>
        <span className="text-slate-400">Ad</span>
      </div>
      <div
        ref={containerRef}
        className="flex justify-center"
        style={{ minHeight: config.height }}
        aria-label="Sponsored advertisement"
      />
    </div>
  );
}
