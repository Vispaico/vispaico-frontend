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
      className={`mx-auto flex max-w-4xl flex-wrap items-start gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left shadow-lg sm:flex-nowrap sm:p-8 ${className}`.trim()}
    >
      <div className="flex-shrink-0">
        <Image
          src="/images/niels_coffee.webp"
          alt="Niels enjoying coffee"
          width={112}
          height={112}
          className="h-20 w-20 rounded-full object-cover shadow-md md:h-24 md:w-24"
          priority={false}
        />
      </div>
      <div className="space-y-4 text-gray-800">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          {title}
        </div>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">{children}</div>
      </div>
    </div>
  );
};

export default FounderNote;
