"use client";

import { ChangeEvent, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';
import { locales } from '@/i18n/config';

const LanguageSwitcher = () => {
  const t = useTranslations('LanguageSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    if (nextLocale === locale) {
      return;
    }

    const localePattern = new RegExp(`^/(?:${locales.join('|')})(?=/|$)`);
    let normalizedPath = pathname.replace(localePattern, '');
    if (!normalizedPath.startsWith('/')) {
      normalizedPath = `/${normalizedPath}`;
    }
    if (normalizedPath === '' || normalizedPath === '//') {
      normalizedPath = '/';
    }

    const query = Object.fromEntries(searchParams.entries()) as Record<string, string>;

    startTransition(() => {
      router.replace({ pathname: normalizedPath, query }, { locale: nextLocale });
      router.refresh();
    });
  };

  return (
    <label className="flex items-center gap-2 text-sm text-white">
      <span className="sr-only">{t('ariaLabel')}</span>
      <select
        value={locale}
        onChange={handleChange}
        aria-label={t('ariaLabel')}
        className="bg-black/40 border border-white/20 rounded-md px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
        disabled={isPending}
      >
        {locales.map((code) => (
          <option key={code} value={code} className="text-black">
            {t(`locales.${code}`)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSwitcher;
