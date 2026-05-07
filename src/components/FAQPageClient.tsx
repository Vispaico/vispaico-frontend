"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type FAQItem = {
  question: string;
  answer: string;
};

const containerClass = 'mx-auto w-full max-w-[1100px]';
const sectionPadding = 'px-6 py-[64px] md:py-[96px]';

const FAQPageClient: React.FC = () => {
  const t = useTranslations('FAQ');
  const title = t('title');
  const items = t.raw('items') as FAQItem[];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={sectionPadding}>
        <div className={`${containerClass}`}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">Frequently asked</p>
            <h1 className="text-[clamp(32px,5vw,60px)] font-[600] leading-tight">{title}</h1>
          </motion.div>
        </div>
      </section>

      <section className={sectionPadding}>
        <div className={`${containerClass} space-y-6`}>
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item, index) => (
              <motion.article
                key={`${item.question}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex h-full flex-col justify-between rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.35)]"
              >
                <h2 className="text-xl font-[600] text-[var(--text-primary)] leading-tight">{item.question}</h2>
                <p className="mt-4 text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: item.answer }} />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPageClient;
