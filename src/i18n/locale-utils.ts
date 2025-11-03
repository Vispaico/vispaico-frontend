import { locales, defaultLocale, type Locale } from './config';

export const resolveLocale = (locale: string): Locale =>
  locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
