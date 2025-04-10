// src/components/Header.tsx (Corrected Services Link)
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCursor } from '@/context/CursorContext';

interface HeaderProps { siteTitle?: string; }

const Header: React.FC<HeaderProps> = ({ siteTitle = "Vispaico" }) => {
  const { setIsHoveringInteractive } = useCursor();
  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Site Logo */}
        <Link href="/" className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-label={`${siteTitle} Homepage`}>
          <Image src="/logos/vispaico wh logo.svg" alt={`${siteTitle} Logo`} width={130} height={35} className="h-auto" priority unoptimized={true} />
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          {/* --- Corrected Services Link --- */}
          <Link
            href="/services" // <<< CHANGED FROM /#services
            className="hover:text-gray-300 transition-colors"
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            Services
          </Link>
          {/* ----------------------------- */}
          <Link href="/portfolio" className="hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> Work </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> About </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> Contact </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;