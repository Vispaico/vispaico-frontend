"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import ContactCTAButton from '@/components/ContactCTAButton';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';
import { ease } from '@/lib/motion';

export type ServicePageData = {
  hero: {
    label: string;
    heading: string;
    subhead: string;
    priceAnchor: string;
    ctaText: string;
    ctaLink: string;
  };
  included: {
    label: string;
    heading: string;
    features: readonly string[];
  };
  steps: {
    label: string;
    heading: string;
    items: readonly string[];
  };
  who: {
    label: string;
    heading: string;
    body: string;
  };
  pricing: {
    label: string;
    plans: readonly {
      title: string;
      price: string;
      subtitle?: string;
      features: readonly string[];
      featured?: boolean;
      badge?: string;
      note?: string;
    }[];
  };
  related: {
    heading: string;
    items: readonly {
      tag: string;
      title: string;
      description: string;
      price: string;
      href: string;
    }[];
  };
  cta: {
    heading: string;
    subtext: string;
    button: string;
    link: string;
    emailBelow?: string;
  };
  // Optional industries link (rendered after related)
  industriesLink?: {
    text: string;
    href: string;
  };
  // Optional add-on section (rendered after pricing)
  addOn?: {
    label: string;
    heading: string;
    subtext: string;
    card: {
      tag: string;
      title: string;
      description: string;
      price: string;
      priceLinkText: string;
      priceLink: string;
      pills: readonly string[];
    };
  };
  // Optional stats section (rendered after pricing or addOn)
  statsSection?: {
    label: string;
    heading: string;
    columns: readonly {
      stat: string;
      label: string;
      text: string;
    }[];
  };
  // Optional outcome grid (rendered after pricing)
  outcomeGrid?: {
    label: string;
    heading: string;
    subtext: string;
    card: {
      tag: string;
      title: string;
      description: string;
      price: string;
      priceLinkText: string;
      priceLink: string;
      pills: readonly string[];
    };
    outcomes: readonly {
      stat: string;
      label: string;
    }[];
  };
};

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
    {text}
  </p>
);

const StatCard = ({ stat, label, text, index = 0 }: { stat: string; label: string; text: string; index?: number }) => (
  <Reveal
    delay={0.1 + index * 0.06}
    y={12}
    duration={0.6}
    className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6"
  >
    <p className="text-[clamp(28px,3vw,40px)] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
      <CountUp value={stat} />
    </p>
    <p className="mt-1 text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">{label}</p>
    <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">{text}</p>
  </Reveal>
);

const OutcomeStatCard = ({ stat, label, index = 0 }: { stat: string; label: string; index?: number }) => (
  <Reveal
    delay={0.1 + index * 0.06}
    y={12}
    duration={0.6}
    className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6"
  >
    <p className="text-[clamp(28px,3vw,40px)] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
      <CountUp value={stat} />
    </p>
    <p className="mt-1 text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">{label}</p>
  </Reveal>
);

const GradientLine = ({ width = '900px' }: { width?: string }) => (
  <motion.div
    aria-hidden
    className={`absolute left-1/2 top-0 h-[1px] w-[min(${width},calc(100%-3rem))] -translate-x-1/2 origin-left bg-gradient-to-r from-transparent via-[#f97316] to-transparent`}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: '-15% 0px' }}
    transition={{ duration: 1.2, ease }}
  />
);

const renderLayout = (data: ServicePageData) => {
  const container = 'mx-auto w-full max-w-[900px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text={data.hero.label} />
          </Reveal>
          <Reveal delay={0.06} y={20} duration={0.7}>
            <h1
              className="mt-4 text-[clamp(36px,5vw,60px)] leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              {data.hero.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.16} y={12} duration={0.6}>
            <p className="mt-6 max-w-[560px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
              {data.hero.subhead}
            </p>
          </Reveal>
          <Reveal delay={0.24} y={8} duration={0.5}>
            <p className="mt-4 text-[14px] text-[var(--text-muted)]">{data.hero.priceAnchor}</p>
          </Reveal>
          <Reveal delay={0.3} y={8} duration={0.5}>
            <div className="mt-6">
              <ContactCTAButton
                text={data.hero.ctaText}
                className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text={data.included.label} />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              {data.included.heading}
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.included.features.map((feature, i) => (
              <Reveal
                key={feature}
                delay={0.12 + i * 0.05}
                y={8}
                duration={0.5}
                className="text-[14px] leading-[1.75] text-[var(--text-secondary)]"
              >
                {feature}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text={data.steps.label} />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              {data.steps.heading}
            </h2>
          </Reveal>
          <div className="mt-8 flex flex-col gap-6">
            {data.steps.items.map((step, index) => (
              <Reveal
                key={step}
                delay={0.12 + index * 0.05}
                y={8}
                duration={0.5}
                className="flex flex-col gap-2 md:flex-row md:items-start"
              >
                <span
                  className="font-mono text-[32px] text-[var(--text-muted)]"
                  style={{ fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="max-w-[820px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  {step}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text={data.who.label} />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              {data.who.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mt-4 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
              {data.who.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text={data.pricing.label} />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.pricing.plans.map((plan, i) => (
              <Reveal
                key={plan.title}
                delay={0.1 + i * 0.06}
                y={12}
                duration={0.6}
                className="flex"
              >
                <article
                  className={`relative flex w-full flex-col overflow-hidden rounded-[10px] border bg-[var(--bg-surface)] p-7 ${
                    plan.featured ? 'border-[#3a3a36]' : 'border-[var(--border)]'
                  }`}
                >
                  {plan.featured && (
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-10% 0px' }}
                      transition={{ duration: 0.9, delay: 0.4, ease }}
                    />
                  )}
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">{plan.title}</h3>
                    {plan.badge && (
                      <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] text-[var(--text-secondary)]">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[22px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                    <CountUp value={plan.price} />
                  </p>
                  {plan.subtitle && (
                    <p className="mt-1 text-[13px] text-[var(--text-muted)]">{plan.subtitle}</p>
                  )}
                  <ul className="mt-6 space-y-2 text-[13px] text-[var(--text-secondary)]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="leading-[1.75]">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="mt-4 text-[12px] text-[var(--text-muted)]">{plan.note}</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Section (optional) */}
      {data.addOn && (
        <section className="px-6 py-[64px] md:py-[96px]">
          <div className={container}>
            <Reveal y={8} duration={0.5}>
              <SectionLabel text={data.addOn.label} />
            </Reveal>
            <Reveal delay={0.06} y={14} duration={0.7}>
              <h2
                className="mt-3 text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
                style={{ fontWeight: 650 }}
              >
                {data.addOn.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.14} y={10} duration={0.6}>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                {data.addOn.subtext}
              </p>
            </Reveal>
            <Reveal delay={0.22} y={12} duration={0.6}>
              <div className="relative mt-8 max-w-[560px] overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.9, delay: 0.4, ease }}
                />
                <span className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {data.addOn.card.tag}
                </span>
                <h3 className="mt-[10px] text-[18px] font-[600] text-[var(--text-primary)]">
                  {data.addOn.card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-[var(--text-secondary)] whitespace-pre-line">
                  {data.addOn.card.description}
                </p>
                <div className="mt-5 h-px bg-[var(--border)]" />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[14px] text-[var(--text-muted)]">{data.addOn.card.price}</span>
                  <Link
                    href={data.addOn.card.priceLink}
                    className="group text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    <span>{data.addOn.card.priceLinkText}</span>
                    <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.addOn.card.pills.map((pill) => (
                    <span
                      key={pill}
                      className="inline-block rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-[10px] py-[2px] text-[10px] font-[500] text-[var(--text-muted)]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Stats Section (optional) */}
      {data.statsSection && (
        <section className="px-6 py-[64px] md:py-[96px]">
          <div className={container}>
            <Reveal y={8} duration={0.5}>
              <SectionLabel text={data.statsSection.label} />
            </Reveal>
            <Reveal delay={0.06} y={14} duration={0.7}>
              <h2
                className="mt-3 text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
                style={{ fontWeight: 650 }}
              >
                {data.statsSection.heading}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
              {data.statsSection.columns.map((col, i) => (
                <StatCard key={col.stat} {...col} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcome Grid (optional) */}
      {data.outcomeGrid && (
        <>
          <section className="px-6 py-[64px] md:py-[96px]">
            <div className={container}>
              <Reveal y={8} duration={0.5}>
                <SectionLabel text={data.outcomeGrid.label} />
              </Reveal>
              <Reveal delay={0.06} y={14} duration={0.7}>
                <h2
                  className="mt-3 text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
                  style={{ fontWeight: 650 }}
                >
                  {data.outcomeGrid.heading}
                </h2>
              </Reveal>
              <Reveal delay={0.14} y={10} duration={0.6}>
                <p className="mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  {data.outcomeGrid.subtext}
                </p>
              </Reveal>
              <Reveal delay={0.22} y={12} duration={0.6}>
                <div className="relative mt-8 max-w-[560px] overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.9, delay: 0.4, ease }}
                  />
                  <span className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {data.outcomeGrid.card.tag}
                  </span>
                  <h3 className="mt-[10px] text-[18px] font-[600] text-[var(--text-primary)]">
                    {data.outcomeGrid.card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-[var(--text-secondary)] whitespace-pre-line">
                    {data.outcomeGrid.card.description}
                  </p>
                  <div className="mt-5 h-px bg-[var(--border)]" />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[14px] text-[var(--text-muted)]">{data.outcomeGrid.card.price}</span>
                    <Link
                      href={data.outcomeGrid.card.priceLink}
                      className="group text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      <span>{data.outcomeGrid.card.priceLinkText}</span>
                      <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {data.outcomeGrid.card.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-block rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-[10px] py-[2px] text-[10px] font-[500] text-[var(--text-muted)]"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
          <section className="px-6 py-[64px] md:py-[96px]">
            <div className={container}>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {data.outcomeGrid.outcomes.map((outcome, i) => (
                  <OutcomeStatCard key={outcome.stat} {...outcome} index={i} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Related Services */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <Reveal y={14} duration={0.7}>
            <h2
              className="text-[clamp(28px,3vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              {data.related.heading}
            </h2>
          </Reveal>
          <div className={`mt-8 grid gap-3 ${data.related.items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {data.related.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={0.1 + i * 0.06}
                y={12}
                duration={0.6}
                className="flex"
              >
                <Link
                  href={item.href}
                  className="group relative flex min-h-[220px] w-full flex-col overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 text-[var(--text-primary)] transition-colors hover:border-[#444440]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {item.tag}
                    </span>
                    <span
                      className="font-mono text-[10px] text-[var(--text-muted)]"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[18px] font-[600]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item.description}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 text-[13px] text-[var(--text-muted)]">
                    <span>{item.price}</span>
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Link (optional) */}
      {data.industriesLink && (
        <section className="px-6 py-[40px] md:py-[48px]">
          <div className={`${container} text-center`}>
            <Link
              href={data.industriesLink.href}
              className="group inline-flex items-center gap-2 rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            >
              <span>{data.industriesLink.text}</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative px-6 py-[64px] md:py-[96px]">
        <GradientLine />
        <div className={`${container} text-center`}>
          <Reveal y={14} duration={0.7}>
            <h2
              className="text-[clamp(28px,3.5vw,42px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              {data.cta.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08} y={10} duration={0.6}>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
              {data.cta.subtext}
            </p>
          </Reveal>
          <Reveal delay={0.16} y={8} duration={0.5}>
            <div className="mt-8 flex flex-col items-center gap-4">
              <ContactCTAButton
                text={data.cta.button}
                className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
              />
              {data.cta.emailBelow && (
                <p className="text-[12px] text-[var(--text-muted)]">or email {data.cta.emailBelow}</p>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

const ServicePageContent: React.FC<{ data: ServicePageData }> = ({ data }) => renderLayout(data);

export default ServicePageContent;
