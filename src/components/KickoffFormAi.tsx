'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function KickoffFormAi() {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('KickoffForm');

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-next-intl-locale': locale
        },
        body: JSON.stringify({ ...formData, formType: 'kickoffAi' }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || t('errorUnknown'));
      router.push('/kickoff/thank-you');
    } catch (error: unknown) {
      setFormMessage(error instanceof Error ? error.message : t('errorUnknown'));
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">APPLY NOW</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-600 mb-2">
            YOUR NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            autoComplete="name"
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-600 mb-2">
            YOUR EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            autoComplete="email"
            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-full mt-8 inline-block text-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
      {formMessage && <p className="mt-4 text-center text-red-400">{formMessage}</p>}
    </motion.div>
  );
}
