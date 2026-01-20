"use client";

import { useEffect, useState } from 'react';
import { useCursor } from '@/context/CursorContext';
import { useLocale, useTranslations } from 'next-intl';

const STORAGE_KEY = 'vispaico-lead-magnet-dismissed';

const HomeLeadMagnet = () => {
  const t = useTranslations('Home.leadMagnet');
  const locale = useLocale();
  const { setIsHoveringInteractive } = useCursor();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 30000);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'true');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage(t('messages.subscribing'));
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-next-intl-locale': locale
        },
        body: JSON.stringify({ email, formType: 'newsletter' })
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe.');
      }

      setMessage(t('messages.success'));
      setEmail('');
    } catch (error) {
      setMessage(t('messages.error'));
      console.error('Lead magnet signup error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-md">
      <div className="rounded-3xl border border-white/15 bg-slate-950/95 p-6 text-white shadow-2xl backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-orange-200/80 mb-2">
              {t('eyebrow')}
            </p>
            <h3 className="text-2xl font-semibold mb-2">{t('title')}</h3>
            <p className="text-sm text-blue-100 mb-4">{t('subtitle')}</p>
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="lead-magnet-email" className="sr-only">
            {t('label')}
          </label>
          <input
            id="lead-magnet-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-blue-200 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/60"
            disabled={submitting}
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 disabled:opacity-70"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            {submitting ? t('button.submitting') : t('button.default')}
          </button>
        </form>
        {message && <p className="mt-3 text-xs text-blue-200">{message}</p>}
        <p className="mt-3 text-xs text-blue-300">{t('disclaimer')}</p>
      </div>
    </div>
  );
};

export default HomeLeadMagnet;
