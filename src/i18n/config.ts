export const locales = ['en', 'de', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';
