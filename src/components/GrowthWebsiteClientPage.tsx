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


      <motion.div
        className="bg-white text-black"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="text-sm text-gray-600 flex flex-wrap items-center justify-center gap-3 uppercase tracking-wide mb-8"
            variants={itemVariants}
          >
            <span>Vispaico</span>
            <span className="text-gray-300">|</span>
            <span>Trusted by 138+ businesses</span>
            <span className="text-gray-300">|</span>
            <span>WCAG 2.2 AA Certified</span>
            <span className="text-gray-300">|</span>
            <span>100% Satisfaction Guarantee</span>
          </motion.div>

          {/* HERO SECTION */}
          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">{hero.title}</h1>
            <h3 className="text-3xl mt-4 text-gray-800">{hero.subtitle}</h3>
            <ul className="mt-12" role="list" aria-label="Key Benefits">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <Link
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              {hero.cta}
            </Link>
          </div>
          </motion.section>

          {/* FOUNDER NOTE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <FounderNote>
              {founderNote.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                {founderNote.emailLabel} <span className="text-orange-600"> {founderNote.email} </span>
              </p>
            </FounderNote>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center py-12">{sections.whatsPossible.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* WHAT'S POSSIBLE SECTION */}
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4"><FontAwesomeIcon icon={faFire} className="text-orange-500" /> {sections.whatsPossible.cardTitle}</h2>
                <div className="flex flex-col items-center">
                  <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/RiverCity_Web_vfofed.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                </div>
              </div>
              {/* FEATURED TESTIMONIAL */}
              <div className="w-full">
                <FeaturedTestimonial />
              </div>
            </div>
          </motion.section>

          {/* ONE SIMPLE SERVICE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">{sections.agencyTheater.title}</h2>
            <h3 className="text-2xl text-center mt-4 text-gray-800">
              {sections.agencyTheater.subtitle}
            </h3>
            <div className="mt-8 text-lg max-w-2xl mx-auto space-y-2 text-gray-700">
              {sections.agencyTheater.cons.map((item) => (
                <p key={`con-${item}`} className="flex items-center">
                  <span className="text-red-500 mr-2">✗</span>
                  {item}
                </p>
              ))}
              {sections.agencyTheater.pros.map((item) => (
                <p key={`pro-${item}`} className="flex items-center font-semibold">
                  <span className="text-green-600 mr-2">✓</span>
                  {item}
                </p>
              ))}
            </div>
            {sections.agencyTheater.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-3xl mx-auto text-center text-gray-700">
                {paragraph}
              </p>
            ))}
            <p className="text-2xl text-center font-semibold mt-4 bg-clip-text bg-gradient-to-r text-gray-800">
              {sections.agencyTheater.closing}
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">{sections.launchPackage.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              {sections.launchPackage.cards.map((card, index) => {
                const isHighlightCard = index === sections.launchPackage.cards.length - 1;

                return (
                  <motion.div
                    key={card.title}
                    className={`relative p-6 border border-gray-200 rounded-lg transition-transform duration-300 ${
                      isHighlightCard
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl md:col-span-3 md:max-w-xl md:mx-auto md:px-12'
                        : 'bg-gray-100 hover:-translate-y-1 hover:shadow-lg'
                    }`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FontAwesomeIcon
                      icon={iconMap[card.icon] ?? faDesktop}
                      className={`text-4xl mb-4 ${isHighlightCard ? 'text-white' : 'text-indigo-700'}`}
                    />
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className={isHighlightCard ? 'text-white/90' : 'text-gray-700'}>{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div className="mt-8" variants={itemVariants}>
              <details className="group border border-gray-200 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md max-w-xl mx-auto text-center">
                <summary className="flex flex-col items-center gap-3 text-lg font-semibold text-gray-900 cursor-pointer sm:flex-row sm:justify-center">
                  <span>Why Next.js + Headless CMS?</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-200 group-open:rotate-45 sm:ml-4">+</span>
                </summary>
                <div className="mt-4 space-y-3 text-gray-700">
                  <p>We don&apos;t build websites that die. Your site grows with your business:</p>
                  <ul className="list-disc space-y-2 pl-5 inline-block text-left">
                    <li>Add dashboards without rebuilding</li>
                    <li>Manage content without coding</li>
                    <li>Integrate new tools as you scale</li>
                    <li>Switch hosting providers if you want (you own it)</li>
                  </ul>
                </div>
              </details>
            </motion.div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section id="how-it-works" className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">{sections.process.title}</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ThreeDayProcess />
            </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-orange-50 shadow-lg px-8 py-10 text-center">
              <h2 className="text-4xl font-bold">What Happens After Launch?</h2>
              <div className="mt-6 space-y-4 text-gray-700">
                <p><span className="font-semibold text-gray-900">Day 4-30:</span> Free support &amp; unlimited revisions</p>
                <p><span className="font-semibold text-gray-900">Month 2+:</span> Optional maintenance packages <span aria-hidden="true">(Details → Growth Services page)</span></p>
                <p>You own everything. You&apos;re free to go solo or grow with us. No lock-in. Ever.</p>
              </div>
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">{sections.quickQuestions.title}</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-700">
              {sections.quickQuestions.items.map((item) => {
                const bulletLines = item.answer.filter((line) => line.startsWith('- '));
                const textLines = item.answer.filter((line) => !line.startsWith('- '));
                return (
                  <details
                    key={item.question}
                    className="group border border-gray-200 rounded-lg bg-white/70 px-6 py-5 shadow-sm transition-shadow hover:shadow-md mb-4"
                  >
                    <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-black">
                      <span>{item.question}</span>
                      <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <div className="mt-4 space-y-3 text-left">
                      {textLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      {bulletLines.length > 0 && (
                        <ul className="space-y-1 list-disc list-outside pl-5">
                          {bulletLines.map((line) => (
                            <li key={line}>{line.replace('- ', '')}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                );
              })}
              <h3 className="text-xl font-bold mt-8 text-black">{sections.quickQuestions.closingTitle}</h3>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section id="final-cta" className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="vispaico-growth-website" showServiceInfo={false} />
          </motion.section>

          {/* THE BOTTOM LINE SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl font-bold text-gray-700">{sections.bottomLine.title}</p>
              {sections.bottomLine.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-2 text-gray-700">
                  {paragraph}
                </p>
              ))}
              <p className="text-1xl font-light mt-4 bg-clip-text bg-gradient-to-r text-gray-700">{sections.bottomLine.highlight}</p>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </>
  );
};

export default GrowthWebsiteClientPage;
