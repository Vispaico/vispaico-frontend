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

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Section 1: Hero Introduction */}
      <section className="relative py-20 md:py-32 text-center overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-indigo-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob animation-delay-2000"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob animation-delay-4000"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        ></motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center gap-12 lg:gap-16">
            <div className="w-full lg:max-w-4xl text-center">
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' as const }}
              >
                {hero.title}
              </motion.h1>
              <motion.div
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.3 }}
              >
                {hero.paragraphs.map((paragraph, index) => (
                  <p key={`hero-paragraph-${index}`}>{paragraph}</p>
                ))}

                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.6 }}
                >
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 opacity-70 blur-2xl"></div>
                    <div className="relative inset-0 w-full h-full rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
                      <Image
                        src="/images/niels.webp"
                        alt="Portrait of a Vispaico creator"
                        fill
                        sizes="(max-width: 1024px) 240px, 288px"
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-4 text-left">
                  <div>
                    <p className="font-semibold uppercase tracking-[0.3em] text-orange-400 text-sm">{hero.frustrationsHeading}</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      {hero.frustrations.map((item, index) => (
                        <li key={`frustration-${index}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold uppercase tracking-[0.3em] text-orange-400 text-sm">{hero.differencesHeading}</p>
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
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                      {hero.ctaLabel} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('coreValuesTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={`${value.title}-${index}`}
                className="p-6 bg-black/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 text-center md:text-left"
                {...hoverEffects[index % hoverEffects.length]}
              >
                <h3 className="text-xl font-semibold mb-3 text-indigo-400">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Meet the Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{t('teamTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="group relative text-center p-4 bg-black/20 rounded-lg shadow-lg border border-white/20 backdrop-blur-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                  <div className="bg-slate-800 h-full w-full rounded-md"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden bg-gray-600">
                    <Image
                      src={member.img}
                      alt={`Photo of ${member.name}`}
                      fill
                      sizes="(max-width: 768px) 20vw, 128px"
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                  <p className="text-indigo-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Join Us / Careers */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6 text-white">{join.title}</h3>
          <p className="text-center text-gray-300 mb-8 max-w-xl mx-auto">{join.description}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {join.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageClient;
