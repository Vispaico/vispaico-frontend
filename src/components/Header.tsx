// src/components/Header.tsx (Corrected Services Link)
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Import useState
import { useCursor } from '@/context/CursorContext';

interface HeaderProps { siteTitle?: string; }

const Header: React.FC<HeaderProps> = ({ siteTitle = "Vispaico" }) => {
  const { setIsHoveringInteractive } = useCursor();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle function

  return (
    <header className="bg-white/80 backdrop-blur-md text-slate-900 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center relative"> {/* Added relative for absolute positioning of mobile menu */}
        {/* Site Logo */}
        <Link href="/" className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label={`${siteTitle} Homepage`}>
          <Image src="/logos/vispaico burg logo.svg" alt={`${siteTitle} Logo`} width={130} height={35} className="h-auto" priority unoptimized={true} />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none" aria-label="Toggle mobile menu">
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
        <div className="hidden md:flex space-x-6 items-center"> {/* Hidden on mobile, flex on desktop */}
          <Link
            href="/services"
            className="hover:text-indigo-600 transition-colors"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> Portfolio </Link>
          <Link href="/faq" className="hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> FAQ </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> About Us </Link>
          <Link href="/contact" className="bg-slate-900 text-white hover:bg-indigo-600 transition-colors font-medium py-2 px-4 rounded-md" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> Contact </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md flex flex-col items-center py-4 space-y-4 shadow-lg">
            <Link href="/services" className="block hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> Services </Link>
            <Link href="/portfolio" className="block hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> Portfolio </Link>
            <Link href="/faq" className="block hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> FAQ </Link>
            <Link href="/about" className="block hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> About Us </Link>
            <Link href="/contact" className="block hover:text-indigo-600 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleMobileMenu}> Contact </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;