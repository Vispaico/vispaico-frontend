'use client';

import Image from 'next/image';
import React from 'react';

interface PremiumWebsiteFounderNoteProps {
  className?: string;
}

const PremiumWebsiteFounderNote: React.FC<PremiumWebsiteFounderNoteProps> = ({ className = '' }) => {
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
        />
      </div>
      <div className="space-y-4 text-gray-800">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
          From Niels
        </div>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          <p>
            “Premium shouldn&apos;t mean endless workshops and twelve-person email threads. It should mean a tailored build with a clear owner, fast decisions, and hard launch dates. That&apos;s why we built the premium line.”
          </p>
          <p>
            “You get a dedicated producer, senior designer, and senior engineer all focused on shipping a site that feels built-for-you. No agencies passing decks around in Figma for weeks. Just work.”
          </p>
          <p>
            Questions? Email me: <span className="text-orange-600">niels@vispaico.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumWebsiteFounderNote;
