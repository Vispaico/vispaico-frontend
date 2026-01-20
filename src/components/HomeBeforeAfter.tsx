"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HomeBeforeAfter = () => {
  const t = useTranslations('Home.beforeAfter');
  const [value, setValue] = useState(55);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-slate-950/80 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-200/80 mb-3">
            {t('eyebrow')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-blue-100">
            {t('subtitle')}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 shadow-2xl">
            <div className="relative h-[360px] sm:h-[420px] md:h-[480px]">
              <Image
                src="/images/vispaico-72hour-website-transformation-1.webp"
                alt={t('afterAlt')}
                fill
                sizes="(max-width: 768px) 100vw, 960px"
                style={{ objectFit: 'cover' }}
                priority
                draggable={false}
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${value}%` }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src="/images/vispaico-72hour-website-transformation-2.webp"
                    alt={t('beforeAlt')}
                    fill
                    sizes="(max-width: 768px) 100vw, 960px"
                    style={{ objectFit: 'cover' }}
                    draggable={false}
                  />
                </div>
              </div>
              <div
                className="absolute inset-y-0"
                style={{ left: `calc(${value}% - 1px)` }}
              >
                <div className="h-full w-0.5 bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border border-white/70 bg-slate-900/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
                  ⇆
                </div>
              </div>
              <div className="absolute left-4 top-4 rounded-full bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
                {t('beforeLabel')}
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80">
                {t('afterLabel')}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-blue-100/70">0%</span>
            <input
              type="range"
              min={10}
              max={90}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              aria-label={t('sliderLabel')}
              className="w-full accent-orange-400"
            />
            <span className="text-xs uppercase tracking-[0.3em] text-blue-100/70">100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBeforeAfter;
