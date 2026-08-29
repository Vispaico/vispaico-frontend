"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useContactModal } from '@/context/ContactModalContext';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';
import { dur, ease } from '@/lib/motion';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
    {text}
  </p>
);

type Tier = {
  name: string;
  includes: string;
  implementation: string;
  monthly: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  note?: string;
};

const tiers: Tier[] = [
  {
    name: 'Starter',
    includes: 'Company Brain',
    implementation: 'from $4,000+',
    monthly: 'from $500+',
    features: [
      'Knowledge audit and ingestion',
      'Custom RAG pipeline on your data',
      'Instant Q&A for your team',
      'Integration with your existing tools',
      '30 days post-launch support',
    ],
    badge: 'Most popular',
    featured: true,
  },
  {
    name: 'Growth',
    includes: 'Company Brain + Company Analyst',
    implementation: 'from $9,000+',
    monthly: 'from $1,300+',
    features: [
      'Everything in Starter',
      'Multi-source data integration',
      'Natural language business analysis',
      'Automated report generation',
      'Trend and risk detection',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    includes: 'Company Brain + Company Analyst + Company Operator',
    implementation: 'from $19,000+',
    monthly: 'from $3,300+',
    features: [
      'Everything in Growth',
      'Real-time operations monitoring',
      'Predictive capacity forecasting',
      'KPI tracking and alerting',
      'Customer risk signal detection',
      '24/7 monitoring and priority support',
    ],
  },
];

const PricingPageContent: React.FC = () => {
  const { openModal } = useContactModal();
  const reduceMotion = useReducedMotion();
  const container = 'mx-auto w-full max-w-[900px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="Pricing" />
          </Reveal>
          <Reveal delay={0.06} y={20} duration={0.7}>
            <h1
              className="mt-4 text-[clamp(36px,5vw,60px)] leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              Simple Pricing For Growing Companies
            </h1>
          </Reveal>
          <Reveal delay={0.16} y={12} duration={0.6}>
            <p className="mt-6 max-w-[560px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
              Transparent pricing. No hidden fees. Every plan includes implementation and ongoing support. Scale as you grow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal
                key={tier.name}
                delay={0.1 + i * 0.08}
                y={16}
                duration={0.6}
                className="flex"
              >
                <article
                  className={`relative flex w-full flex-col overflow-hidden rounded-[10px] border bg-[var(--bg-surface)] p-7 ${
                    tier.featured ? 'border-[#3a3a36]' : 'border-[var(--border)]'
                  }`}
                >
                  {/* Breathing glow + gradient top-line for the featured tier. */}
                  {tier.featured && !reduceMotion && (
                    <motion.div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.04) 40%, transparent 70%)',
                      }}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: [0.5, 0.85, 0.5] }}
                      transition={{ duration: dur.breathe, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                  {/* Gradient top-line on every tier card. */}
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.4 + i * 0.08, ease }}
                  />
                  <div className="relative flex items-center justify-between">
                    <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">{tier.name}</h3>
                    {tier.badge && (
                      <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] text-[var(--text-secondary)]">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="relative mt-2 text-[13px] text-[var(--text-muted)]">{tier.includes}</p>

                  <div className="relative mt-6">
                    <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Implementation</p>
                    <p className="mt-1 text-[22px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                      <CountUp value={tier.implementation} />
                    </p>
                  </div>

                  <div className="relative mt-4">
                    <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Monthly</p>
                    <p className="mt-1 text-[22px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                      <CountUp value={tier.monthly} />
                    </p>
                  </div>

                  <ul className="relative mt-8 space-y-2 text-[13px] text-[var(--text-secondary)]">
                    {tier.features.map((feature) => (
                      <li key={feature} className="leading-[1.75]">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {tier.note && (
                    <p className="relative mt-4 text-[12px] text-[var(--text-muted)]">{tier.note}</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {/* AI Operations Audit — separate card sourced from the Audit service page. */}
          <Reveal delay={0.36} y={16} duration={0.6} className="mt-4 flex">
            <article className="relative flex w-full flex-col overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              {/* Gradient top-line on the audit card. */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease }}
              />
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">AI Operations Audit</h3>
                <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] text-[var(--text-secondary)]">
                  Start here
                </span>
              </div>
              <p className="mt-2 text-[13px] text-[var(--text-muted)]">
                Find the highest-value AI opportunities before you invest.
              </p>

              <div className="mt-6">
                <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Investment</p>
                <p className="mt-1 text-[22px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                  <CountUp value="$1,500 – $3,000" />
                </p>
                <p className="mt-1 text-[12px] text-[var(--text-muted)]">Fixed fee · depends on company size and operational complexity.</p>
              </div>

              <ul className="mt-8 space-y-2 text-[13px] text-[var(--text-secondary)]">
                <li className="leading-[1.75]">Workflow analysis</li>
                <li className="leading-[1.75]">Knowledge flow mapping</li>
                <li className="leading-[1.75]">Data readiness assessment</li>
                <li className="leading-[1.75]">AI opportunity roadmap</li>
                <li className="leading-[1.75]">Implementation recommendations</li>
              </ul>

              <div className="mt-auto pt-6">
                <Link
                  href="/services/ai-operations-audit"
                  className="group inline-flex items-center gap-1 text-[13px] font-[500] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  <span>Book an AI Operations Audit</span>
                  <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Custom Enterprise */}
      <section className="relative px-6 py-[64px] md:py-[96px]">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-0 h-[1px] w-[min(900px,calc(100%-3rem))] -translate-x-1/2 origin-left bg-gradient-to-r from-transparent via-[#f97316] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.2, ease }}
        />
        <Reveal y={20} duration={0.7} className={`${container} rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-[40px] text-center`}>
          <h2
            className="text-[clamp(24px,3vw,36px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
            style={{ fontWeight: 650 }}
          >
            Not sure which tier fits or you need a custom solution?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            Tell us about your business and we&apos;ll recommend the right package → no pressure, no pitch.
          </p>
          <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            We also offer custom enterprise pricing for organizations that need tailored solutions, dedicated infrastructure, or multi-year partnerships.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Talk to us about custom pricing →
            </button>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default PricingPageContent;
