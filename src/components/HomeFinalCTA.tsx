"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const HomeFinalCTA = () => {
  const t = useTranslations('Home.finalCta');

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
