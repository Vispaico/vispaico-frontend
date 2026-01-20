"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const HomeFinalCTA = () => {
  const t = useTranslations('Home.finalCta');
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const target = Date.now() + 1000 * 60 * 60 * 72;
    const update = () => {
      const remaining = Math.max(0, target - Date.now());
      const totalMinutes = Math.floor(remaining / (1000 * 60));
      const days = Math.floor(totalMinutes / (60 * 24));
      const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
      const minutes = totalMinutes % 60;
      setCountdown(`${days}d ${hours}h ${minutes}m`);
    };
    update();
    const interval = window.setInterval(update, 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-16 md:py-24 bg-gradient-to-r from-orange-600 via-red-600 to-rose-600 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          {t('title')}
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          {t('subtitle')}
        </p>
        <div className="mx-auto mb-10 flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/15 px-5 py-4 text-left shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
              <svg aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 7h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t('calendarLabel')}</p>
              <p className="text-lg font-semibold">{t('calendarValue')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/15 px-5 py-4 text-left shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
              <svg aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3M12 22a10 10 0 100-20 10 10 0 000 20z" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t('countdownLabel')}</p>
              <p className="text-lg font-semibold">{countdown || t('countdownFallback')}</p>
            </div>
          </div>
        </div>
        <Link
          href="/vispaico-growth-website"
          className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-xl transition hover:bg-white/90"
        >
          {t('cta')}
          <svg aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </motion.section>
  );
};

export default HomeFinalCTA;
