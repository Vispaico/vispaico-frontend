"use client";

import Image from 'next/image';
import React from 'react';

interface FounderNoteProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const FounderNote: React.FC<FounderNoteProps> = ({
  title = 'From Niels',
  children,
  className = ''
}) => {
  return (
    <div
      className={`mx-auto flex max-w-4xl flex-wrap items-start gap-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 text-left shadow-[0_20px_40px_rgba(3,3,3,0.35)] sm:flex-nowrap sm:p-8 ${className}`.trim()}
    >
      <div className="flex-shrink-0">
        <Image
          src="/images/niels_ceo.webp"
          alt="Niels enjoying coffee"
          width={112}
          height={112}
          className="h-20 w-20 rounded-full object-cover shadow-md md:h-24 md:w-24"
          priority={false}
        />
      </div>
      <div className="space-y-4 text-[var(--text-secondary)]">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
          {title}
        </div>
        <div className="space-y-4 text-base leading-relaxed md:text-lg text-[var(--text-primary)]">{children}</div>
      </div>
    </div>
  );
};

export default FounderNote;
