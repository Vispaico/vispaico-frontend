// src/components/Header.tsx (Corrected Services Link)
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCursor } from '@/context/CursorContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Header: React.FC = () => {
  const t = useTranslations('Header');
  const { setIsHoveringInteractive } = useCursor();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle function

  return (
    <header className="bg-linear-to-r from-gray-800 via-gray-900 to-black text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center relative"> {/* Added relative for absolute positioning of mobile menu */}
        {/* Site Logo */}
        <Link href="/" className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label={t('homeAriaLabel')}>
          <Image src="/logos/Vispaico_ship it_Logo_wh.webp" alt={t('logoAlt')} width={150} height={40} className="h-auto" priority unoptimized={true} />
        </Link>

        {/* Hamburger Icon for Mobile */}
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

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6"> {/* Hidden on mobile, flex on desktop */}
          {/* --- Corrected Services Link --- */}
          <Link
            href="/web-design"
            className="hover:text-gray-300 transition-colors"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            {t('nav.websites')}
          </Link>
          {/* ----------------------------- */}
          <ul className="flex space-x-6">
          <li><Link href="/portfolio" className="hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {t('nav.portfolio')} </Link></li>
          <li><Link href="/about" className="hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {t('nav.about')} </Link></li>
          <li><Link href="/articles" className="hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {t('nav.articles')} </Link></li>
          <li><Link href="/contact" className="hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> {t('nav.contact')} </Link></li>
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 shadow-lg">
          <Link href="/web-design" className="block text-white hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> {t('nav.websites')} </Link>
          <Link href="/portfolio" className="block text-white hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> {t('nav.portfolio')} </Link>
          <Link href="/about" className="block text-white hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> {t('nav.about')} </Link>
          <Link href="/articles" className="block text-white hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> {t('nav.articles')} </Link>
          <Link href="/contact" className="block text-white hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> {t('nav.contact')} </Link>
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