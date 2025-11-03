"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faRocket,
  faMoneyBill1Wave,
  faStar,
  faGun,
  faCrown,
  faUniversalAccess
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type HeroContent = {
  title: string;
  description: string;
  cta: string;
};

type IconKey = 'cart' | 'rocket' | 'money' | 'star' | 'gun' | 'crown' | 'universal-access';

type ServiceCard = {
  title: string;
  summary: string;
  link: string;
  icon: IconKey;
};

type DecisionQuestion = {
  question: string;
  answer: string;
  link: string;
};

type DecisionHelperContent = {
  title: string;
  subtitle: string;
  cta: string;
  questions: DecisionQuestion[];
};

type ComparisonService = {
  name: string;
  price: string;
  time: string;
  pages: string;
  bestFor: string;
  includes: string[];
};

type ComparisonContent = {
  title: string;
  table: {
    headers: string[];
    services: ComparisonService[];
  };
};

const iconMap: Record<IconKey, IconDefinition> = {
  cart: faCartShopping,
  rocket: faRocket,
  money: faMoneyBill1Wave,
  star: faStar,
  gun: faGun,
  crown: faCrown,
  'universal-access': faUniversalAccess
};

const WebDesignPageClient = () => {
  const t = useTranslations('Services.WebDesign');
  const common = useTranslations('Common');

  const hero = t.raw('hero') as HeroContent;
  const cards = t.raw('cards') as ServiceCard[];
  const decisionHelper = t.raw('decisionHelper') as DecisionHelperContent;
  const comparison = t.raw('comparison') as ComparisonContent;

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{hero.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" id="services">
          {cards.map((card, index) => {
            const icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={card.link}
                  className="group relative bg-black/20 p-8 rounded-xl flex flex-col cursor-pointer border border-white/20 backdrop-blur-lg"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                    <div className="bg-slate-800 h-full w-full rounded-lg" />
                  </div>
                  <div className="relative z-10 grow flex flex-col">
                    {icon && <FontAwesomeIcon icon={icon} className="text-3xl text-orange-400 mb-4" />}
                    <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                    <p className="text-gray-200 mb-6 grow">{card.summary}</p>
                    <span className="text-indigo-200 font-semibold group-hover:text-orange-400 transition-colors mt-auto">
                      {common('learnMore')}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{decisionHelper.title}</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{decisionHelper.subtitle}</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {decisionHelper.questions.map((item, index) => (
            <motion.div
              key={`${item.question}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="mb-6"
            >
              <Link
                href={item.link}
                className="group relative bg-black/20 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between cursor-pointer border border-white/20 backdrop-blur-lg"
              >
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-2">{item.question}</h3>
                  <p className="text-gray-300 text-base sm:text-lg">{item.answer}</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-2 px-4 rounded-md text-sm sm:text-base transition-transform duration-300 ease-in-out group-hover:scale-105">
                    {decisionHelper.cta}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{comparison.title}</h2>
        </motion.div>
        <div className="relative bg-black/20 p-8 rounded-xl border border-white/20 backdrop-blur-lg">
          <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
            <div className="bg-slate-800 h-full w-full rounded-lg" />
          </div>
          <div className="relative z-10 overflow-x-auto" tabIndex={0} aria-label={comparison.title}>
            <table className="min-w-full text-left text text-white">
              <thead>
                <tr>
                  {comparison.table.headers.map((header) => (
                    <th key={header} className="py-2 px-4 border-b border-gray-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.table.services.map((service, index) => (
                  <tr key={`${service.name}-${index}`}>
                    <td className="py-2 px-4 border-b border-gray-600">{service.name}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.price}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.time}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.pages}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.bestFor}</td>
                    <td className="py-2 px-4 border-b border-gray-600">
                      <ul className="list-disc list-inside">
                        {service.includes.map((item, itemIndex) => (
                          <li key={`${service.name}-include-${itemIndex}`}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignPageClient;
