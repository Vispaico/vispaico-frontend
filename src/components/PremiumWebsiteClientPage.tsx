'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import React from 'react';
import { useTranslations } from 'next-intl';
import PremiumWebsiteProcess from '@/components/PremiumWebsiteProcess';
import PremiumWebsiteFounderNote from '@/components/PremiumWebsiteFounderNote';
import FeaturedTestimonialPremium from '@/components/FeaturedTestimonialPremium';
import KickoffForm from '@/components/KickoffForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrown,
  faUserTie,
  faGaugeHigh,
  faChartLine,
  faShieldHalved,
  faGlobe,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type HeroContent = {
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
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
  };
  bottomLine: {
    title: string;
    paragraphs: string[];
    highlight: string;
  };
};

const iconMap: Record<string, IconDefinition> = {
  crown: faCrown,
  userTie: faUserTie,
  gaugeHigh: faGaugeHigh,
  chartLine: faChartLine,
  shieldHalved: faShieldHalved,
  globe: faGlobe,
  bolt: faBolt
};

function DiscountAppliedBanner() {
  const searchParams = useSearchParams();
  const discountAmount = searchParams.get('discount');
  const t = useTranslations('Services.PremiumWebsite');

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

const PremiumWebsiteClientPage = () => {
  const t = useTranslations('Services.PremiumWebsite');
  const hero = t.raw('hero') as HeroContent;
  const sections = t.raw('sections') as SectionsContent;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <DiscountAppliedBanner />
      <motion.div
        className="bg-white text-black"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
              {hero.title}
            </h1>
            <h3 className="text-2xl mt-4 text-gray-800">
              {hero.subtitle}
            </h3>
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

          <motion.section className="mt-16" variants={itemVariants}>
            <PremiumWebsiteFounderNote />
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center py-12">{sections.whatsPossible.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">
                  {sections.whatsPossible.cardTitle}
                </h2>
                <div className="flex flex-col items-center">
                  <video
                    src="https://res.cloudinary.com/kinhcode01/video/upload/v1760930818/Vispaico/Images/Vispea_mgvptg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-lg shadow-lg"
                  ></video>
                </div>
              </div>
              <div className="w-full">
                <FeaturedTestimonialPremium />
              </div>
            </div>
          </motion.section>

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
                      icon={iconMap[card.icon] ?? faCrown}
                      className={`text-4xl mb-4 ${isHighlightCard ? 'text-white' : 'text-indigo-700'}`}
                    />
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className={isHighlightCard ? 'text-white/90' : 'text-gray-700'}>{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">{sections.process.title}</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <PremiumWebsiteProcess />
            </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">{sections.quickQuestions.title}</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-700">
              {sections.quickQuestions.items.map((item) => (
                <div key={item.question}>
                  <h3 className="text-xl font-bold text-black mt-4">{item.question}</h3>
                  {item.answer.map((line) => (
                    <p key={line} className="mt-2">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section id="final-cta" className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="vispaico_premium_website" showServiceInfo={false} />
          </motion.section>

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

export default PremiumWebsiteClientPage;
