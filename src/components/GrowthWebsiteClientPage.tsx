// src/components/GrowthWebsiteClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import ThreeDayProcess from '@/components/ThreeDayProcess';
import FounderNote from '@/components/FounderNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPaintBrush, faMobileAlt, faSearch, faHandshake, faClock, faBrain, faFire } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';
import KickoffForm from './KickoffForm';


// --- NEW COMPONENT #1: The Discount Banner ---
type HeroContent = {
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
};

type FounderNoteContent = {
  paragraphs: string[];
  emailLabel: string;
  email: string;
};

type LaunchPackageCard = {
  icon: string;
  title: string;
  description: string;
};

type QuickQuestion = {
  question: string;
  answer: string[];
};

type SectionsContent = {
  whatsPossible: {
    title: string;
    cardTitle: string;
  };
  agencyTheater: {
    title: string;
    subtitle: string;
    cons: string[];
    pros: string[];
    paragraphs: string[];
    closing: string;
  };
  launchPackage: {
    title: string;
    cards: LaunchPackageCard[];
  };
  process: {
    title: string;
  };
  quickQuestions: {
    title: string;
    items: QuickQuestion[];
    closingTitle: string;
  };
  bottomLine: {
    title: string;
    paragraphs: string[];
    highlight: string;
  };
};

const iconMap: Record<string, IconDefinition> = {
  desktop: faDesktop,
  paintBrush: faPaintBrush,
  mobile: faMobileAlt,
  search: faSearch,
  handshake: faHandshake,
  clock: faClock,
  brain: faBrain
};

function DiscountAppliedBanner() {
  const searchParams = useSearchParams();
  const discountAmount = searchParams.get('discount');
  const t = useTranslations('Services.GrowthWebsite');

  if (!discountAmount || Number(discountAmount) <= 0) {
    return null;
  }

  return (
    <motion.div
      className="sticky top-0 z-50 bg-green-600 text-white text-center p-3 font-semibold shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {t('discountBanner', { amount: `$${discountAmount}` })}
    </motion.div>
  );
}

const GrowthWebsiteClientPage = () => {
  const t = useTranslations('Services.GrowthWebsite');
  const hero = t.raw('hero') as HeroContent;
  const founderNote = t.raw('founderNote') as FounderNoteContent;
  const sections = t.raw('sections') as SectionsContent;

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  const containerClass = 'mx-auto w-full max-w-[1100px]';
  const sectionSpacing = 'px-6 py-[64px] md:py-[96px]';
  const heroBadges = ['Vispaico', 'Trusted by 138+ businesses', 'WCAG 2.2 AA Certified', '100% Satisfaction Guarantee'];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Vispaico Growth Website",
    "description": "Professional website built in 3 days with Next.js, headless CMS, and WCAG 2.2 AA compliance",
    "brand": {
      "@type": "Brand",
      "name": "Vispaico"
    },
    "price": "899",
    "priceCurrency": "USD",
    "url": "https://www.vispaico.com/vispaico-growth-website",
    "image": "https://www.vispaico.com/images/niels_coffee.webp",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "12"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "A very good experience, easy communication, and a stunning new page for our rental store.",
        "author": {
          "@type": "Person",
          "name": "Neil, CEO at RiverCity Bike Rentals"
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "899",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Vispaico",
        "url": "https://www.vispaico.com"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DiscountAppliedBanner />

      <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
        <div className={`${containerClass} ${sectionSpacing}`}>
          <motion.div
            className="space-y-[88px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.section className="space-y-8 text-center" variants={itemVariants}>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                {heroBadges.map((badge, index) => (
                  <React.Fragment key={badge}>
                    <span>{badge}</span>
                    {index < heroBadges.length - 1 && <span className="text-[var(--border)]">|</span>}
                  </React.Fragment>
                ))}
              </div>
              <h1 className="text-[clamp(36px,5vw,60px)] font-[600] leading-tight text-[var(--text-primary)]">
                {hero.title}
              </h1>
              <h2 className="text-[clamp(22px,3vw,32px)] font-[500] text-[var(--text-secondary)]">
                {hero.subtitle}
              </h2>
              <ul className="mx-auto mt-6 max-w-3xl space-y-4 text-[var(--text-secondary)]">
                {hero.bullets.map((bullet) => (
                  <li key={bullet} className="text-[20px] leading-[1.6]">
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Link
                  href="#final-cta"
                  className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
                >
                  {hero.cta}
                </Link>
              </div>
            </motion.section>

            <motion.section variants={itemVariants}>
              <FounderNote>
                {founderNote.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  {founderNote.emailLabel} <span className="text-orange-400">{founderNote.email}</span>
                </p>
              </FounderNote>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                {sections.whatsPossible.title}
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 text-[var(--text-secondary)]">
                  <h3 className="text-center text-xl font-semibold text-[var(--text-primary)]">
                    <FontAwesomeIcon icon={faFire} className="text-orange-500" /> {sections.whatsPossible.cardTitle}
                  </h3>
                  <div className="mt-6 flex justify-center">
                    <video
                      src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/RiverCity_Web_vfofed.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                    ></video>
                  </div>
                </div>
                <FeaturedTestimonial />
              </div>
            </motion.section>

            <motion.section className="space-y-8" variants={itemVariants}>
              <div className="space-y-3">
                <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                  {sections.agencyTheater.title}
                </h2>
                <h3 className="text-[clamp(20px,2.5vw,32px)] text-center text-[var(--text-secondary)]">
                  {sections.agencyTheater.subtitle}
                </h3>
              </div>
              <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 text-[var(--text-secondary)]">
                <div className="space-y-3">
                  {sections.agencyTheater.cons.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <span className="text-red-500">✗</span>
                      {item}
                    </p>
                  ))}
                </div>
                <div className="mt-6 space-y-2">
                  {sections.agencyTheater.pros.map((item) => (
                    <p key={item} className="flex items-center gap-2 font-[600] text-[var(--text-primary)]">
                      <span className="text-green-500">✓</span>
                      {item}
                    </p>
                  ))}
                </div>
                {sections.agencyTheater.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-center text-[var(--text-secondary)]">
                    {paragraph}
                  </p>
                ))}
                <p className="mt-6 text-center text-2xl font-semibold text-[var(--text-primary)]">
                  {sections.agencyTheater.closing}
                </p>
              </div>
            </motion.section>

            <motion.section variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                {sections.launchPackage.title}
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {sections.launchPackage.cards.map((card, index) => {
                  const isHighlightCard = index === sections.launchPackage.cards.length - 1;
                  return (
                    <motion.div
                      key={card.title}
                      className={`relative flex flex-col gap-4 p-6 rounded-[20px] border border-[var(--border)] transition-transform duration-300 ${
                        isHighlightCard
                          ? 'items-center text-center bg-[var(--bg-surface)] text-[var(--text-secondary)] shadow-[0_15px_45px_rgba(0,0,0,0.35)] md:col-span-3 mx-auto max-w-[640px]'
                          : 'items-start text-left bg-[var(--bg-surface)] text-[var(--text-secondary)] shadow-[0_15px_45px_rgba(0,0,0,0.35)]'
                      }`}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <FontAwesomeIcon
                        icon={iconMap[card.icon] ?? faDesktop}
                        className={`text-4xl mb-2 ${isHighlightCard ? 'text-white' : 'text-[var(--text-primary)]'}`}
                      />
                      <h3 className={`text-xl font-[600] ${isHighlightCard ? 'text-white text-center w-full' : 'text-[var(--text-primary)]'}`}>
                        {card.title}
                      </h3>
                      <p className={`${isHighlightCard ? 'text-white/90 text-center w-full' : 'text-[var(--text-secondary)]'}`}>
                        {card.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            <motion.section id="how-it-works" className="space-y-6" variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                {sections.process.title}
              </h2>
              <div className="mt-6 rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6">
                <ThreeDayProcess />
              </div>
            </motion.section>

            <motion.section className="space-y-6" variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                {sections.quickQuestions.title}
              </h2>
              <div className="space-y-4">
                {sections.quickQuestions.items.map((item) => {
                  const bulletLines = item.answer.filter((line) => line.startsWith('- '));
                  const textLines = item.answer.filter((line) => !line.startsWith('- '));
                  return (
                    <details
                      key={item.question}
                      className="group border border-[var(--border)] rounded-[18px] bg-[var(--bg-surface)] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.35)] transition-shadow hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
                    >
                      <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[var(--text-primary)]">
                        <span>{item.question}</span>
                        <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--text-primary)] transition-transform duration-200 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <div className="mt-4 space-y-3 text-[var(--text-secondary)] text-left">
                        {textLines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                        {bulletLines.length > 0 && (
                          <ul className="space-y-1 list-disc pl-5">
                            {bulletLines.map((line) => (
                              <li key={line} className="text-[var(--text-secondary)]">
                                {line.replace('- ', '')}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  );
                })}
                <h3 className="text-center text-xl font-semibold text-[var(--text-primary)]">
                  {sections.quickQuestions.closingTitle}
                </h3>
              </div>
            </motion.section>

            <motion.section id="final-cta" className="text-center" variants={itemVariants}>
              <KickoffForm service="vispaico-growth-website" showServiceInfo={false} />
            </motion.section>

            <motion.section className="text-center" variants={itemVariants}>
              <div className="mx-auto max-w-3xl space-y-3 text-[var(--text-secondary)]">
                <p className="text-xl font-semibold text-[var(--text-primary)]">{sections.bottomLine.title}</p>
                {sections.bottomLine.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="text-lg font-light text-[var(--text-secondary)]">
                  {sections.bottomLine.highlight}
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default GrowthWebsiteClientPage;
