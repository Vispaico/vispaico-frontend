"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type CoreValue = {
  title: string;
  description: string;
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  img: string;
};

type HeroContent = {
  title: string;
  paragraphs: string[];
  frustrationsHeading: string;
  frustrations: string[];
  differencesHeading: string;
  differences: string[];
  familyParagraph: string;
  lifestyleParagraph: string;
  closing: string;
  signature: string;
  ctaLabel: string;
};

type JoinContent = {
  title: string;
  description: string;
  ctaLabel: string;
};

const hoverEffects = [
  {
    whileHover: {
      scale: [1, 1.08, 1.05],
      rotate: [0, 10, -10, 10, -10, 0],
      boxShadow: [
        '0 0 0px rgba(250, 204, 21, 0)',
        '0 0 40px 15px rgba(250, 204, 21, 0.7)',
        '0 0 0px rgba(250, 204, 21, 0)'
      ]
    },
    transition: { duration: 0.8, ease: 'easeInOut' as const }
  },
  {
    whileHover: {
      x: [0, -15, 15, -15, 15, 0],
      y: [0, 10, -10, 10, -10, 0],
      rotate: [0, -8, 8, -8, 8, 0]
    },
    transition: { duration: 0.6, ease: 'easeInOut' as const }
  },
  {
    whileHover: {
      scaleY: [1, 0.8, 1.2, 1],
      scaleX: [1, 1.2, 0.8, 1],
      y: [0, 20, -20, 0],
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)'
    },
    transition: { duration: 0.7, ease: 'easeOut' as const }
  },
  {
    whileHover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', rotate: 1 },
    transition: { duration: 0.2, ease: 'easeInOut' as const }
  }
];

const AboutPageClient = () => {
  const t = useTranslations('About');
  const hero = t.raw('hero') as HeroContent;
  const coreValues = t.raw('coreValues') as CoreValue[];
  const teamMembers = t.raw('team') as TeamMember[];
  const join = t.raw('join') as JoinContent;
  const containerClass = 'mx-auto w-full max-w-[1100px]';
  const sectionSpacing = 'px-6 py-[64px] md:py-[96px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className={`${sectionSpacing}`}>
        <div className={`${containerClass} text-center space-y-10`}>          
          <motion.h1
            className="text-[clamp(32px,5vw,60px)] font-[700] leading-tight text-[var(--text-primary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const }}
          >
            {hero.title}
          </motion.h1>
          <motion.div
            className="space-y-5 text-[var(--text-secondary)] max-w-[760px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.3 }}
          >
            {hero.paragraphs.map((paragraph, index) => (
              <p key={`hero-paragraph-${index}`}>{paragraph}</p>
            ))}
            <div className="space-y-6 text-left">
              <div>
                <p className="font-semibold uppercase tracking-[0.3em] text-[var(--text-primary)] text-sm">
                  {hero.frustrationsHeading}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {hero.frustrations.map((item, index) => (
                    <li key={`frustration-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold uppercase tracking-[0.3em] text-[var(--text-primary)] text-sm">
                  {hero.differencesHeading}
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {hero.differences.map((item, index) => (
                    <li key={`difference-${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p>{hero.familyParagraph}</p>
            <p>{hero.lifestyleParagraph}</p>
            <p>{hero.closing}</p>
            <div className="space-y-4">
              <p>{hero.signature}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent)] text-[var(--text-primary)] font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {hero.ctaLabel} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={sectionSpacing}>
        <div className={containerClass}>
          <h2 className="text-3xl font-[600] text-[var(--text-primary)] text-center">
            {t('coreValuesTitle')}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={`${value.title}-${index}`}
                className="p-6 rounded-[18px] border border-[var(--border)] bg-[var(--bg-surface)] text-center shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                {...hoverEffects[index % hoverEffects.length]}
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-400">{value.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={sectionSpacing}>
        <div className={containerClass}>
          <h2 className="text-3xl font-[600] text-[var(--text-primary)] text-center">
            {t('teamTitle')}
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="group relative overflow-hidden text-center p-4 rounded-[18px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition duration-300 group-hover:opacity-80">
                  <div className="h-full w-full rounded-[18px] bg-gradient-to-r from-orange-500 to-red-600 opacity-30" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gray-600 relative">
                    <Image
                      src={member.img}
                      alt={`Photo of ${member.name}`}
                      fill
                      sizes="(max-width: 768px) 20vw, 128px"
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">{member.name}</h4>
                  <p className="text-indigo-400 text-sm mb-2">{member.role}</p>
                  <p className="text-[var(--text-secondary)] text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`text-center ${sectionSpacing}`}>
        <div className={containerClass}>
          <h3 className="text-2xl font-[600] text-[var(--text-primary)]">{join.title}</h3>
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">{join.description}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              {join.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPageClient;
