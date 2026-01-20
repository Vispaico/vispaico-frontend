"use client";

import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const STORAGE_KEY = 'vispaico-exit-intent-dismissed';

const HomeExitIntent = () => {
  const t = useTranslations('Home.exitIntent');
  const [open, setOpen] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    const dismissed = typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      dismissedRef.current = true;
      return;
    }

    const onMouseOut = (event: MouseEvent) => {
      if (dismissedRef.current) return;
      if (open) return;
      if (event.clientY <= 0) {
        setOpen(true);
      }
    };

    document.addEventListener('mouseout', onMouseOut);
    return () => document.removeEventListener('mouseout', onMouseOut);
  }, [open]);

  const close = () => {
    setOpen(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    }
    dismissedRef.current = true;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-6 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-white/15 bg-slate-950 p-8 text-white shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-orange-200/80 mb-2">{t('eyebrow')}</p>
            <h3 className="text-2xl font-semibold mb-3">{t('title')}</h3>
            <p className="text-sm text-blue-100 mb-6">{t('subtitle')}</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={t('dismiss')}
            className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/70 transition hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/vispaico-growth-website"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105"
            onClick={close}
          >
            {t('primaryCta')}
          </Link>
          <Link
            href="/contact"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-300 hover:text-orange-200"
            onClick={close}
          >
            {t('secondaryCta')}
          </Link>
        </div>
        <button
          type="button"
          onClick={close}
          className="mt-4 text-xs uppercase tracking-[0.25em] text-blue-200/70"
        >
          {t('dismiss')}
        </button>
      </div>
    </div>
  );
};

export default HomeExitIntent;
