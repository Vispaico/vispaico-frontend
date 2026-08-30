import React from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Github, Instagram, Facebook, Linkedin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

// Lucide icons are stroked; FontAwesome brand icons are filled — both render
// in the same currentColor so they read as a unified row in the footer.
const socialLinks = [
  { href: 'https://github.com/Vispaico', label: 'GitHub', icon: <Github strokeWidth={1.5} /> },
  { href: 'https://x.com/vispaico', label: 'X', icon: <FontAwesomeIcon icon={faXTwitter} /> },
  { href: 'https://www.tiktok.com/@vispaico', label: 'TikTok', icon: <FontAwesomeIcon icon={faTiktok} /> },
  { href: 'https://www.instagram.com/vispaico/', label: 'Instagram', icon: <Instagram strokeWidth={1.5} /> },
  { href: 'https://www.facebook.com/vispaico/', label: 'Facebook', icon: <Facebook strokeWidth={1.5} /> },
  { href: 'https://www.linkedin.com/company/vispaico/', label: 'LinkedIn', icon: <Linkedin strokeWidth={1.5} /> },
];

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();
  const sections = [
    {
      key: 'product',
      links: [
        { key: 'aios', href: '/aios' },
        { key: 'aiServices', href: '/services' }
      ]
    },
    {
      key: 'resources',
      links: [
        { key: 'journal', href: '/journal' },
        { key: 'articles', href: '/articles' },
        { key: 'aboutNiels', href: '/about' },
        { key: 'faq', href: '/faq' }
      ]
    },
    {
      key: 'legal',
      links: [
        { key: 'contact', href: '/contact' },
        { key: 'privacy', href: '/privacy' },
        { key: 'terms', href: '/terms' },
        { key: 'dataDeletion', href: '/data-deletion' }
      ]
    }
  ] as const;

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border)] text-[var(--text-secondary)] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="text-center md:text-left">
            <div className="relative h-14 w-48 mx-auto mb-8">
              <Image src="/logos/Vispaico_ship it_Logo_gr.webp" alt="Vispaico Logo" fill style={{ objectFit: 'contain' }} />
            </div>
            <p className="text-[var(--text-secondary)] text-center md:text-center">{t('mission')}</p>
          </div>

          {sections.map((section) => (
            <div key={section.key} className="text-center md:text-center">
              <h3 className="text-lg font-[600] uppercase tracking-[0.35em] text-[var(--text-secondary)] mb-5">
                {t(`sections.${section.key}.title`)}
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <Link href={link.href} className="transition-colors hover:text-[var(--text-primary)]">
                      {t(`sections.${section.key}.links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-6 text-center text-sm">
          <div className="flex flex-wrap justify-center gap-4 text-[var(--text-secondary)] mb-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-6 w-6 items-center justify-center transition-colors hover:text-[var(--text-primary)] [&_svg]:h-6 [&_svg]:w-6"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="mx-auto mb-6 max-w-xl rounded-[10px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-[var(--text-secondary)]">
            <h4 className="text-xl font-[600] text-[var(--text-primary)] mb-3">{t('newsletter.title')}</h4>
            <p className="mb-5 text-sm">{t('newsletter.subtitle')}</p>
            <form action="/api/newsletter" method="post" className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label htmlFor="footer-newsletter-email" className="sr-only">{t('newsletter.label')}</label>
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                required
                placeholder={t('newsletter.placeholder')}
                className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:border-[var(--text-primary)] focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-[7px] border border-[var(--border)] px-5 py-3 text-sm font-[500] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-base)]"
              >
                {t('newsletter.button')}
              </button>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="footer-newsletter-b_name">
                  <input
                    id="footer-newsletter-b_name"
                    type="text"
                    name="b_name"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
            </form>
            <p className="mt-3 text-xs text-[var(--text-muted)]">{t('newsletter.disclaimer')}</p>
          </div>

          <p className="text-xs text-[var(--text-muted)]">{t('ownership')}</p>
          <p className="text-xs text-[var(--text-muted)]">{t('rights', { year })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
