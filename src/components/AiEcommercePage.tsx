"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useContactModal } from '@/context/ContactModalContext';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
    {text}
  </p>
);

const container = 'mx-auto w-full max-w-[900px]';

const AiEcommercePage: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="E-Commerce" />
          <h1 className="mt-3 text-[clamp(36px,5vw,60px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            A store that sells, recommends, and supports — without extra staff.
          </h1>
          <p className="mt-6 max-w-[540px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
            We build Next.js e-commerce stores with an AI layer that
            recommends the right products to the right buyer, handles
            customer questions instantly, and turns browsers into buyers —
            around the clock.
          </p>
          <p className="mt-4 text-[14px] text-[var(--text-muted)]">from $5,000 · retainer from $400/mo</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Get a proposal →
            </button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="What we build" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            A store built to convert. Not just to look good.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              'Next.js storefront (fast, SEO-ready, mobile-first)',
              'AI product recommendation engine (trained on your catalog + buyer behavior)',
              'AI customer support agent (handles FAQs, order status, returns — 24/7)',
              'Headless CMS — manage products and content without a developer',
              'Payment integration (Stripe, PayPal, or regional providers)',
              'Inventory and order management integration',
              'Multi-language support (EN, DE, ES)',
              'WCAG 2.2 AA accessibility compliance',
              'Analytics dashboard: conversion rate, AOV, agent deflection rate',
              '30 days post-launch support',
            ].map((feature) => (
              <p key={feature} className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                {feature}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="The process" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            From brief to live store in 3–4 weeks.
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {[
              "Week 1: Discovery — we map your catalog, buyer journey, and existing tech stack.",
              "Week 1–2: Design and storefront build. Daily updates. You approve before we build.",
              "Week 2–3: AI layer integration — recommendation engine trained on your products, support agent trained on your FAQs and policies.",
              "Week 3–4: QA, payment testing, and performance optimization.",
              "Launch. Then 30 days of monitoring and refinement.",
            ].map((step, index) => (
              <div key={step} className="flex flex-col gap-2 md:flex-row md:items-start">
                <span className="text-[32px] font-[600] text-[var(--text-muted)]">{String(index + 1).padStart(2, '0')}</span>
                <p className="max-w-[820px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Ideal client" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            For product businesses ready to sell at scale.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            Physical product brands moving from Instagram DMs to a real store. Existing stores on Shopify or WooCommerce
            that are losing customers to slow load times and no personalization. B2B companies with complex catalogs
            where buyers need guidance to find the right product.
            <br /><br />
            If you&apos;re losing sales because your store doesn&apos;t answer questions, doesn&apos;t recommend the right product, or just
            loads too slowly — this build fixes all three.
          </p>
        </div>
      </section>

      {/* Outcomes — 3-column stat grid */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="What changes after launch" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            Measurable improvements from day one.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                stat: '2–4×',
                label: 'faster load speed vs Shopify avg.',
                text: "Next.js + Vercel delivers sub-second load times. Every 100ms faster increases conversion by ~1%. Speed is revenue.",
              },
              {
                stat: '30–45%',
                label: 'of support queries handled by AI agent',
                text: "The agent handles FAQs, order status, and return requests instantly. Your team focuses on the complex cases that actually need a human.",
              },
              {
                stat: '15–25%',
                label: 'average AOV increase from recommendations',
                text: "AI product recommendations shown at the right moment increase average order value without discounting or paid traffic.",
              },
            ].map((col) => (
              <div key={col.stat} className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6">
                <p className="text-[clamp(28px,3vw,40px)] font-[600] text-[var(--text-primary)]">{col.stat}</p>
                <p className="mt-1 text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">{col.label}</p>
                <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">{col.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] text-[var(--text-muted)] italic">Based on industry averages.</p>
        </div>
      </section>

      {/* Pricing — 2 columns */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Investment" />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Store build */}
            <article className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">Store build</h3>
              <p className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">$5,000 – $12,000</p>
              <p className="mt-1 text-[13px] text-[var(--text-muted)]">
                Depends on catalog size, integrations, and number of languages.
              </p>
              <div className="mt-5 h-px bg-[var(--border)]" />
              <ul className="mt-5 space-y-2 text-[13px] text-[var(--text-secondary)]">
                {[
                  'Full Next.js storefront',
                  'AI recommendation engine',
                  'AI support agent',
                  'CMS + payment integration',
                  'Analytics dashboard',
                  '30 days support',
                ].map((f) => (
                  <li key={f} className="leading-[1.75]">{f}</li>
                ))}
              </ul>
            </article>

            {/* Ongoing retainer */}
            <article className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">Ongoing retainer</h3>
              <p className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">$400 – $800 /mo</p>
              <p className="mt-1 text-[13px] text-[var(--text-muted)]">
                Keep the AI layer sharp as your catalog grows.
              </p>
              <div className="mt-5 h-px bg-[var(--border)]" />
              <ul className="mt-5 space-y-2 text-[13px] text-[var(--text-secondary)]">
                {[
                  'Agent retraining (new products, policies)',
                  'Recommendation model updates',
                  'Performance monitoring',
                  'Monthly conversion report',
                  'Priority support',
                ].map((f) => (
                  <li key={f} className="leading-[1.75]">{f}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <h2 className="text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            You might also need
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                tag: 'AI Website + Agent',
                title: 'A site that works while you sleep',
                description: 'The same AI-powered approach for your content site.',
                price: 'from $3,500 · retainer from $300/mo',
                href: '/services/ai-website-agent',
              },
              {
                tag: 'Social Media',
                title: 'One post becomes ten',
                description: 'Drive traffic to your store with consistent social content.',
                price: 'from $1,800/mo · fully managed',
                href: '/services/social-media-automation',
              },
              {
                tag: 'SEO & Content',
                title: 'Traffic that compounds',
                description: 'Rank for product terms and drive organic buyers.',
                price: 'from $1,200/mo',
                href: '/services/seo-content',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex min-h-[220px] flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 text-[var(--text-primary)] transition-colors hover:border-[#444440]"
              >
                <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-[18px] font-[600]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item.description}</p>
                <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 text-[13px] text-[var(--text-muted)]">
                  <span>{item.price}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${container} text-center`}>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            Ready to build a store that works as hard as you do?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            We scope every build before you commit. One call. A clear plan. No surprises.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Get a proposal →
            </button>
            <p className="text-[12px] text-[var(--text-muted)]">or email contact@vispaico.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiEcommercePage;
