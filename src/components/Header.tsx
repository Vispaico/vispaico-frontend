"use client";

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCursor } from '@/context/CursorContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header: React.FC = () => {
  const t = useTranslations('Header');
  const { setIsHoveringInteractive } = useCursor();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { key: 'websites', href: '/vispaico-growth-website', fallback: 'Services' },
      { key: 'portfolio', href: '/case-studies', fallback: 'Showcase' },
      { key: 'growthServices', href: '/services', fallback: 'Growth Services' },
      { key: 'articles', href: '/articles', fallback: 'Resources' },
      { key: 'about', href: '/about', fallback: 'About' },
      { key: 'contact', href: '/contact', fallback: 'Contact' },
    ],
    []
  );

  const navLabels = t.raw('nav') as Record<string, string>;

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="bg-linear-to-r from-gray-800 via-gray-900 to-black text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center relative">
        <Link href="/" className="flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label={t('homeAriaLabel')}>
          <Image src="/logos/Vispaico_ship it_Logo_wh.webp" alt={t('logoAlt')} width={150} height={40} className="h-auto" priority unoptimized={true} />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-hidden" aria-label={t('mobileToggle')}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="hover:text-gray-300 transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {navLabels?.[item.key] ?? item.fallback}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.key}`}
              href={item.href}
              className="block text-white hover:text-gray-300 transition-colors"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleMobileMenu}
            >
              {navLabels?.[item.key] ?? item.fallback}
            </Link>
          ))}
          <div className="w-11/12 border-t border-white/10 pt-4">
            <LanguageSwitcher />
          </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;