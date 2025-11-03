'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

interface PremiumWebsiteFounderNoteProps {
  className?: string;
}

const PremiumWebsiteFounderNote: React.FC<PremiumWebsiteFounderNoteProps> = ({ className = '' }) => {
  const t = useTranslations('Services.PremiumWebsite.founderNote');
  const paragraphs = t.raw('paragraphs') as string[];
  return (
    <div
      className={`mx-auto flex max-w-4xl flex-wrap items-start gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 text-left shadow-lg sm:flex-nowrap sm:p-8 ${className}`.trim()}
    >
      <div className="flex-shrink-0">
        <Image
          src="/images/niels_coffee.webp"
          alt={t('imageAlt')}
          width={112}
          height={112}
          className="h-20 w-20 rounded-full object-cover shadow-md md:h-24 md:w-24"
        />
      </div>
      <div className="space-y-4 text-gray-800">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
          {t('badge')}
        </div>
        <div className="space-y-4 text-base leading-relaxed md:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            {t('emailLabel')} <span className="text-orange-600">{t('email')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumWebsiteFounderNote;
