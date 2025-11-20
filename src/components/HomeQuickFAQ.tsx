"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

type FAQItem = {
  question: string;
  answer: string[];
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45 } }
};

const faqContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const faqItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } }
};

const HomeQuickFAQ = () => {
  const t = useTranslations('Home.quickFaq');
  const items = (t.raw('items') as FAQItem[]) ?? [];
  const cta = t('cta');

  return (
    <motion.section
      className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-blue-950/70 to-purple-950 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={faqContainerVariants}
        >
          {items.map((item) => (
            <motion.div
              key={item.question}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-lg"
              variants={faqItemVariants}
            >
              <h3 className="text-xl font-semibold text-orange-200 mb-3">
                {item.question}
              </h3>
              <div className="space-y-3 text-base text-gray-100 whitespace-pre-line">
                {item.answer.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/vispaico-growth-website"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            {cta}
            <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeQuickFAQ;
