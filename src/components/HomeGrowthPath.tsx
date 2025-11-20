"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowTrendUp,
  faShieldHalved,
  faFlaskVial
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type GrowthItem = {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: string;
};

library.add(faArrowTrendUp, faShieldHalved, faFlaskVial);

const iconMap: Record<string, IconDefinition> = {
  growth: faArrowTrendUp,
  maintenance: faShieldHalved,
  conversion: faFlaskVial
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } }
};

const cardContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } }
};

const HomeGrowthPath = () => {
  const t = useTranslations('Home.growthPath');
  const items = (t.raw('items') as GrowthItem[]) ?? [];
  const cta = t('cta');

  return (
    <motion.section
      className="py-16 md:py-24 bg-slate-950/70 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('title')}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={cardContainerVariants}
        >
          {items.map((item) => {
            const icon = iconMap[item.icon] ?? faArrowTrendUp;
            return (
              <motion.div
                key={item.id}
                className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-8 text-left shadow-lg backdrop-blur-lg"
                variants={cardVariants}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                  <FontAwesomeIcon icon={icon} className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-orange-200">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-400">
                    {item.price}
                  </p>
                </div>
                <p className="mt-6 grow whitespace-pre-line text-base text-gray-100">
                  {item.description}
                </p>
                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-200"
                  >
                    {cta}
                    <svg
                      aria-hidden
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeGrowthPath;
