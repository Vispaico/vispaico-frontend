"use client";

import React, { useState } from 'react';
import { useCursor } from '@/context/CursorContext';
import { useLocale, useTranslations } from 'next-intl';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { setIsHoveringInteractive } = useCursor();
  const locale = useLocale();
  const t = useTranslations('Newsletter');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(t('messages.subscribing'));
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-next-intl-locale': locale
        },
        body: JSON.stringify({ email, formType: 'newsletter' }),
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
    <div className="relative z-10 text-center md:text-left">
      <h3 className="text-xl font-semibold text-white mb-2">{t('heading')}</h3>
      <p className="text-blue-100 text-sm mb-4">{t('description')}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="newsletter-email" className="sr-only">{t('label')}</label>
        <input
          type="email"
          placeholder={t('placeholder')}
          className="grow p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50 transition duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitting}
          onMouseEnter={() => setIsHoveringInteractive(true)}
          onMouseLeave={() => setIsHoveringInteractive(false)}
          id="newsletter-email"
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-70"
          onMouseEnter={() => setIsHoveringInteractive(true)}
          onMouseLeave={() => setIsHoveringInteractive(false)}
        >
          {submitting ? t('button.submitting') : t('button.default')}
        </button>
      </form>
      {message && <p className="mt-4 text-white/80 text-sm">{message}</p>}
    </div>
  );
};

export default Newsletter;