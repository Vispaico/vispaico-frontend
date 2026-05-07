"use client";

import React, { useState } from 'react';
import { useCursor } from '@/context/CursorContext';
import { useLocale, useTranslations } from 'next-intl';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [b_name, setBName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { setIsHoveringInteractive } = useCursor();
  const locale = useLocale();
  const t = useTranslations('Newsletter');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (b_name) { return; }
    setSubmitting(true);
    setMessage(t('messages.subscribing'));
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-next-intl-locale': locale
        },
        body: JSON.stringify({ email, b_name, formType: 'newsletter' }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe.');
      }

      setMessage(t('messages.success'));
      setEmail('');
    } catch (error) {
      setMessage(t('messages.error'));
      console.error('Newsletter subscription error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] px-6 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-neutral-800"
      />
      <div className="relative z-10 space-y-4 text-left">
        <p className="text-[11px] font-[500] uppercase tracking-[0.16em] text-[var(--text-muted)]">
          Story Club
        </p>
        <h3 className="text-[clamp(25px,4vw,32px)] font-[600] leading-[1.25] text-[var(--text-primary)]">
          {t('heading')}
        </h3>
        <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">
          {t('description')}
        </p>
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            {t('label')}
          </label>
          <input
            type="email"
            placeholder={t('placeholder')}
            className="grow rounded-[12px] border border-[var(--border)] bg-white/10 px-4 py-3 text-sm text-white placeholder-white/70 shadow-inner shadow-black/40 transition focus:border-orange-400 focus:ring-2 focus:ring-orange-500/50 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitting}
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
            id="newsletter-email"
          />
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="newsletter-b_name">
              <input
                id="newsletter-b_name"
                type="text"
                name="b_name"
                tabIndex={-1}
                value={b_name}
                onChange={(e) => setBName(e.target.value)}
                autoComplete="off"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-[14px] bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-[600] uppercase tracking-[0.15em] text-white shadow-lg shadow-orange-900/50 transition duration-300 hover:from-orange-400 hover:to-red-500 hover:-translate-y-0.5 disabled:opacity-70"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            {submitting ? t('button.submitting') : t('button.default')}
          </button>
        </form>
        {message && <p className="text-sm text-[var(--text-primary)]/80">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;