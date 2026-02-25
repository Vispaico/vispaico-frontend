const SITE_URL = 'https://www.vispaico.com';

export function buildCanonical(locale: string, pathname = ''): string {
  const normalizedLocale = locale.replace(/^\/+|\/+$/g, '');
  const normalizedPath = pathname ? pathname.replace(/^\/+/, '') : '';
  const suffix = normalizedPath ? `/${normalizedPath}` : '';
  return `${SITE_URL}/${normalizedLocale}${suffix}`;
}

export { SITE_URL };
