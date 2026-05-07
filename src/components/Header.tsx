"use client";

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type HeaderProps = {
  onContactClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const t = useTranslations('Header');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navLinks = (t.raw('navLinks') as { label: string; href: string; dropdownKey?: string }[]) ?? [];
  const servicesDropdown = (t.raw('servicesDropdown') as { label: string; href: string; isCta?: boolean }[]) ?? [];

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);
  const handleBookCall = () => {
    closeMenu();
    onContactClick?.();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(12,12,10,0.95)] backdrop-blur-[12px]">
      <nav className="mx-auto flex h-[60px] w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={t('homeAriaLabel')}
        >
          <Image
            src="/logos/Vispaico_ship it_Logo_gr.webp"
            alt={t('logoAlt')}
            width={150}
            height={40}
            className="h-auto"
            priority
            unoptimized
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[14px] text-[var(--text-secondary)]">
          {navLinks.map((link) => {
            const isLaunchProgram = link.label === 'Launch Program';

            if (link.dropdownKey === 'services') {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeout.current) {
                      clearTimeout(dropdownTimeout.current);
                    }
                    setShowDropdown(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 150);
                  }}
                >
                  <Link href={link.href} className="transition-colors hover:text-[var(--text-primary)]">
                    {link.label}
                  </Link>
                  {showDropdown && (
                    <div
                      className="absolute left-0 top-full mt-2 z-30 w-[220px] rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-2"
                      onMouseEnter={() => {
                        if (dropdownTimeout.current) {
                          clearTimeout(dropdownTimeout.current);
                        }
                        setShowDropdown(true);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 150);
                      }}
                    >
                      <div className="flex flex-col gap-1">
                        {servicesDropdown.map((item, index) => (
                          <React.Fragment key={item.label}>
                            {index === servicesDropdown.length - 1 ? (
                              <Link
                                href={item.href}
                                className="flex h-9 items-center rounded-[6px] px-3 text-[13px] font-[500] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              <Link
                                href={item.href}
                                className="flex h-9 items-center rounded-[6px] px-3 text-[13px] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                              >
                                {item.label}
                              </Link>
                            )}
                            {index === servicesDropdown.length - 2 && (
                              <div className="my-1 h-px bg-[var(--border)]" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors ${
                  isLaunchProgram
                    ? 'text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isLaunchProgram && (
                  <span className="mr-[6px] inline-block h-[4px] w-[4px] rounded-full bg-[var(--accent)] align-middle" />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={handleBookCall}
            className="rounded-[7px] border border-[var(--border)] px-5 py-2 text-[14px] font-[500] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
          >
            {t('bookCall')}
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={openMenu}
          aria-label="Open navigation menu"
        >
          <span className="block h-0.5 w-5 rounded-full bg-[var(--text-secondary)]" />
          <span className="mt-1 block h-0.5 w-5 rounded-full bg-[var(--text-secondary)]" />
          <span className="mt-1 block h-0.5 w-5 rounded-full bg-[var(--text-secondary)]" />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[rgba(12,12,10,0.95)] backdrop-blur-[12px] px-6 py-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={closeMenu}
              aria-label={t('homeAriaLabel')}
            >
              <Image
                src="/logos/Vispaico_ship it_Logo_gr.webp"
                alt={t('logoAlt')}
                width={150}
                height={40}
                className="h-auto"
                priority
                unoptimized
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="text-[var(--text-secondary)]"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-6 text-[18px] text-[var(--text-secondary)]">
            {navLinks.map((link) => {
              const isLaunchProgram = link.label === 'Launch Program';
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block flex items-center ${
                    isLaunchProgram ? 'text-[var(--text-primary)] font-[500]' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {isLaunchProgram && (
                    <span className="mr-[6px] inline-block h-[4px] w-[4px] rounded-full bg-[var(--accent)]" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 border-t border-[var(--border)] pt-6">
            <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
              AI Services
            </p>
            <div className="mt-3 flex flex-col gap-2 text-[14px] text-[var(--text-secondary)]">
              {servicesDropdown.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block rounded-[6px] px-3 py-2 transition-colors hover:bg-[var(--bg-elevated)] ${index === servicesDropdown.length - 1 ? 'text-[var(--text-primary)] font-[500]' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleBookCall}
              className="rounded-[7px] border border-[var(--border)] px-5 py-3 text-[14px] font-[500] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
            >
              {t('bookCall')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
