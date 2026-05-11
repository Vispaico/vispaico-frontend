"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
    {text}
  </p>
);

const containerClass = 'mx-auto w-full max-w-[1100px]';

/* ───────────────────────────────────────────
   LAUNCH PROGRAM FEATURE CARD (right column)
   ─────────────────────────────────────────── */
const LaunchProgramCard = () => {
  const phases = [
    {
      label: 'Phase 01',
      title: 'Infrastructure & Foundation',
      timeline: 'Weeks 1–3',
      detail: 'Private AI stack · Website · Agents · CMS',
    },
    {
      label: 'Phase 02',
      title: 'Content & SEO',
      timeline: 'Months 1–2',
      detail: 'Keyword strategy · 8 articles · Social setup · Postiz live',
    },
    {
      label: 'Phase 03',
      title: 'Automation & Growth',
      timeline: 'Months 3–4',
      detail: 'Lead gen pipeline · CRM sync · 16 articles · n8n workflows',
    },
    {
      label: 'Phase 04',
      title: 'Scale & Handover',
      timeline: 'Months 5–6',
      detail: '16 articles · Full documentation · 90-day roadmap · Everything transferred',
    },
  ];

  return (
    <div className="rounded-[10px] border border-[var(--border)] bg-[var(--bg-base)] p-7">
      {/* Card header */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
          What&apos;s delivered
        </span>
        <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-[10px] py-[2px] text-[10px] text-[var(--text-muted)]">
          6 months
        </span>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-[var(--border)]" />

      {/* Phase rows */}
      <div className="flex flex-col">
        {phases.map((phase, i) => (
          <div
            key={phase.label}
            className={`flex items-start justify-between py-[14px] ${
              i < phases.length - 1 ? 'border-b border-[var(--border)]' : ''
            }`}
          >
            <div>
              <span className="text-[10px] font-[500] uppercase tracking-[0.06em] text-[var(--text-muted)]">
                {phase.label}
              </span>
              <p className="mt-[3px] text-[13px] font-[600] text-[var(--text-primary)]">
                {phase.title}
              </p>
              <p className="mt-[3px] text-[12px] text-[var(--text-muted)]">
                {phase.detail}
              </p>
            </div>
            <span className="ml-4 mt-1 rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-[8px] py-[2px] text-[10px] text-[var(--text-muted)] whitespace-nowrap">
              {phase.timeline}
            </span>
          </div>
        ))}
      </div>

      {/* Card footer */}
      <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <span className="text-[12px] text-[var(--text-muted)]">
          40 articles · 300+ posts · 100% your infrastructure
        </span>
        <Link
          href="/launch#included"
          className="rounded-[6px] px-[14px] py-[6px] text-[12px] font-[500] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          Full breakdown →
        </Link>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────
   MAIN HOMEPAGE
   ─────────────────────────────────────────── */
const HomePageContent = () => {
  const t = useTranslations('Home');

  const hero = t.raw('hero') as {
    eyebrow: string;
    heading: string;
    secondaryHeading: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    socialProof: string;
    socialInitials: string[];
  };

  const services = (t.raw('services') as {
    tag: string;
    title: string;
    description: string;
    price: string;
    highlight?: boolean;
    includedInLaunch?: boolean;
  }[]) ?? [];

  const metrics = (t.raw('metrics') as { value: string; label: string }[]) ?? [];

  const testimonials = (t.raw('testimonials') as {
    quote: string;
    result: string;
    author: string;
    role: string;
  }[]) ?? [];

  const finalCta = t.raw('finalCta') as {
    eyebrow: string;
    heading: string;
    subtext: string;
    cta: string;
    secondaryCta1: string;
    secondaryCta2: string;
    finePrint: string;
    finePrintLink: string;
    finePrintLinkText: string;
  };

  const servicesHeading = t('servicesHeading');
  const servicesSubtext = t('servicesSubtext');
  const servicesLabel = t('servicesLabel');
  const testimonialsHeading = t('testimonialsHeading');
  const testimonialsSubtext = t('testimonialsSubtext');
  const testimonialsLabel = t('testimonialsLabel');

  const socialInitials = hero.socialInitials ?? [];

  const buildAvatarInitials = (name: string) => {
    const letters = name
      .split(' ')
      .map((w) => w.charAt(0))
      .filter(Boolean)
      .join('')
      .slice(0, 2)
      .toUpperCase();
    return letters || name.slice(0, 2).toUpperCase();
  };

  const featureList = [
    'Private AI infrastructure on your servers (Ollama, Open WebUI, n8n, Postiz)',
    'AI-powered website + custom-trained chat agent',
    '40 SEO articles across 6 months',
    'Full social media operation across all platforms',
    'Lead generation + workflow automation',
    'Everything transferred to you at month 6',
  ];

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">

      {/* ══════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════ */}
      <section className="flex min-h-[calc(100vh-60px)] flex-col justify-center px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <div className="flex flex-col gap-6">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-3 text-[12px] font-[500] uppercase tracking-[0.08em] text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* H1 */}
            <h1 className="text-[clamp(36px,5vw,64px)] font-[600] leading-[1.1] tracking-[-0.025em]">
              {hero.heading}
              <br />
              <span className="text-[var(--text-secondary)]">{hero.secondaryHeading}</span>
            </h1>

            {/* Subhead */}
            <p className="max-w-[520px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
              {hero.tagline}
            </p>

            {/* CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/launch"
                className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="#services"
                className="rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              >
                {hero.secondaryCta}
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-7 flex items-center gap-3 text-[13px] text-[var(--text-muted)]">
              <div className="flex items-center">
                {socialInitials.map((initial, index) => (
                  <span
                    key={index}
                    style={{ marginRight: index < socialInitials.length - 1 ? -8 : 0 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--bg-base)] bg-[var(--bg-elevated)] text-[9px] font-[600] text-[var(--text-secondary)]"
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <span>{hero.socialProof}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — LAUNCH PROGRAM FEATURE
          ══════════════════════════════════════ */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-surface)] px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <div className="grid gap-[64px] md:grid-cols-2 items-start">
            {/* LEFT COLUMN */}
            <div>
              <SectionLabel text="Flagship product" />
              <h2 className="mt-3 text-[clamp(28px,3.5vw,44px)] font-[600] leading-[1.1] tracking-[-0.025em]">
                The Launch Program.
              </h2>
              <p className="mt-4 max-w-[460px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                Six months. One team. A fully operational AI-powered business — with private infrastructure your company owns outright.
              </p>
              <p className="mt-3 max-w-[460px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                Most businesses spend 18 months and $50,000+ coordinating developers, agencies, and consultants that don&apos;t talk to each other.
              </p>
              <p className="mt-3 max-w-[460px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                We do it all. Integrated. Then hand it over.
              </p>

              {/* Feature list */}
              <ul className="mt-6 space-y-3">
                {featureList.map((item) => (
                  <li key={item} className="flex items-start gap-[10px] text-[14px] leading-[1.6] text-[var(--text-secondary)]">
                    <span className="mt-[8px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Price block */}
              <div className="mt-7 border-t border-[var(--border)] pt-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-[32px] font-[600] text-[var(--text-primary)]">$24,800</span>
                  <span className="text-[13px] text-[var(--text-muted)]">· complete program · 6 months</span>
                </div>
                <p className="mt-[6px] text-[13px] text-[var(--text-muted)]">
                  Payment plans available. Limited to 3 clients per quarter.
                </p>
              </div>

              {/* CTA row */}
              <div className="mt-5 flex flex-wrap gap-[10px]">
                <Link
                  href="/launch"
                  className="rounded-[7px] bg-[var(--accent)] px-6 py-[10px] text-[14px] font-[600] tracking-[0.06em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
                >
                  Apply for the program →
                </Link>
                <Link
                  href="/launch#included"
                  className="rounded-[7px] border border-[var(--border)] px-6 py-[10px] text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                >
                  See full details
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <LaunchProgramCard />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — SERVICES GRID
          ══════════════════════════════════════ */}
      <section id="services" className="px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <SectionLabel text={servicesLabel} />
          <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            {servicesHeading}
          </h2>
          <p className="mt-3 max-w-[520px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
            {servicesSubtext}
          </p>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`flex min-h-[240px] flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 transition-colors hover:border-[#444440]`}
                style={service.highlight ? { borderColor: '#3a3a36' } : undefined}
              >
                <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {service.tag}
                </span>
                <h3 className="mt-2 text-[18px] font-[600] text-[var(--text-primary)]">{service.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{service.description}</p>
                <div className="mt-auto flex flex-col border-t border-[var(--border)] pt-4 text-[13px] text-[var(--text-muted)]">
                  <div className="flex items-center justify-between">
                    <span>{service.price}</span>
                    <span className="text-[var(--text-muted)]">→</span>
                  </div>
                  {service.includedInLaunch && (
                    <span className="mt-2 text-[12px] font-[400] italic text-[var(--text-muted)]">
                      Also included in the Launch Program
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — METRICS BAR
          ══════════════════════════════════════ */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${containerClass} divide-y divide-[var(--border)] border-y border-[var(--border)] bg-[var(--bg-surface)]`}>
          <div className="grid grid-cols-1 divide-y divide-[var(--border)] md:grid-cols-4 md:divide-y-0">
            {metrics.map((metric, index) => (
              <div
                key={metric.value}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-8 text-center ${
                  index === 2
                    ? 'md:border-l md:border-r'
                    : ''
                } ${
                  index < metrics.length - 1 && index !== 2 ? 'md:border-r' : ''
                }`}
              >
                <span className="text-[clamp(32px,4vw,48px)] font-[600] text-[var(--text-primary)]">
                  {metric.value}
                </span>
                <span className="text-[13px] text-[var(--text-secondary)]">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — TESTIMONIALS
          ══════════════════════════════════════ */}
      <section id="testimonials" className="px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <SectionLabel text={testimonialsLabel} />
          <h2 className="mt-4 text-[clamp(32px,4vw,48px)] font-[600] leading-[1.1]">
            {testimonialsHeading}
          </h2>
          <p className="mt-3 max-w-[480px] text-[14px] leading-[1.75] text-[var(--text-secondary)]">
            {testimonialsSubtext}
          </p>
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6"
              >
                <blockquote className="text-[15px] italic leading-[1.75] text-[var(--text-secondary)]">
                  {item.quote}
                </blockquote>
                <span className="mt-4 inline-flex rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[11px] font-[500] text-[var(--text-secondary)]">
                  {item.result}
                </span>
                <div className="mt-4 border-t border-[var(--border)] pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                      {buildAvatarInitials(item.author)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-[500] text-[var(--text-primary)]">{item.author}</span>
                      <span className="text-[12px] text-[var(--text-muted)]">{item.role}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — FINAL CTA
          ══════════════════════════════════════ */}
      <section id="final-cta" className="px-6 py-[96px]">
        <div className={`${containerClass} text-center`}>
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-3 text-[12px] font-[500] uppercase tracking-[0.08em] text-[var(--text-secondary)]">
            <span className="h-[4px] w-[4px] rounded-full bg-[var(--accent)]" />
            <span>{finalCta.eyebrow}</span>
          </div>

          <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
            {finalCta.subtext}
          </p>

          {/* Primary CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/launch"
              className="rounded-[7px] bg-[var(--accent)] px-6 py-3 text-[11px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              {finalCta.cta}
            </Link>
          </div>

          {/* Secondary row */}
          <div className="mt-4 flex justify-center flex-wrap gap-[24px]">
            <Link
              href="/services"
              className="rounded-[7px] px-[14px] py-[6px] text-[13px] font-[500] text-[var(--text-secondary)] underline transition-colors hover:text-[var(--text-primary)]"
            >
              {finalCta.secondaryCta1}
            </Link>
            <Link
              href="/contact"
              className="rounded-[7px] px-[14px] py-[6px] text-[13px] font-[500] text-[var(--text-secondary)] underline transition-colors hover:text-[var(--text-primary)]"
            >
              {finalCta.secondaryCta2}
            </Link>
          </div>

          {/* Fine print */}
          <p className="mt-5 text-[13px] text-[var(--text-muted)]">
            {finalCta.finePrintLinkText ? (
              <>
                {finalCta.finePrint.split(finalCta.finePrintLinkText)[0]}
                <Link
                  href={finalCta.finePrintLink}
                  className="text-[var(--text-secondary)] underline hover:text-[var(--text-primary)]"
                >
                  {finalCta.finePrintLinkText}
                </Link>
                {finalCta.finePrint.split(finalCta.finePrintLinkText)[1]}
              </>
            ) : (
              finalCta.finePrint
            )}
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePageContent;
