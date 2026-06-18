"use client";

import React from 'react';
import { useContactModal } from '@/context/ContactModalContext';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
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
  const container = 'mx-auto w-full max-w-[900px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Pricing" />
          <h1 className="mt-4 text-[clamp(36px,5vw,60px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Simple Pricing For Growing Companies
          </h1>
          <p className="mt-6 max-w-[560px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
            Transparent pricing. No hidden fees. Every plan includes implementation and ongoing support. Scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col rounded-[10px] border bg-[var(--bg-surface)] p-7 ${
                  tier.featured ? 'border-[#3a3a36]' : 'border-[var(--border)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">{tier.name}</h3>
                  {tier.badge && (
                    <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] text-[var(--text-secondary)]">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[13px] text-[var(--text-muted)]">{tier.includes}</p>

                <div className="mt-6">
                  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Implementation</p>
                  <p className="mt-1 text-[22px] font-[600] text-[var(--text-primary)]">{tier.implementation}</p>
                </div>

                <div className="mt-4">
                  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Monthly</p>
                  <p className="mt-1 text-[22px] font-[600] text-[var(--text-primary)]">{tier.monthly}</p>
                </div>

                <ul className="mt-8 space-y-2 text-[13px] text-[var(--text-secondary)]">
                  {tier.features.map((feature) => (
                    <li key={feature} className="leading-[1.75]">
                      {feature}
                    </li>
                  ))}
                </ul>

                {tier.note && (
                  <p className="mt-4 text-[12px] text-[var(--text-muted)]">{tier.note}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${container} rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-[40px] text-center`}>
          <h2 className="text-[clamp(24px,3vw,36px)] font-[600] leading-[1.1]">
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
        </div>
      </section>
    </main>
  );
};

export default PricingPageContent;
