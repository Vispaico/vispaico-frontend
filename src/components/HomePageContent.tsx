"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { useContactModal } from '@/context/ContactModalContext';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';
import { dur, ease } from '@/lib/motion';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
    {text}
  </p>
);

const containerClass = 'mx-auto w-full max-w-[1100px]';

/* ───────────────────────────────────────────
   AIOS FEATURE CARD (right column)
   ─────────────────────────────────────────── */
const AiosCard = () => {
  const phases = [
    {
      label: 'Phase 01',
      title: 'Company Brain',
      timeline: 'Knowledge Layer',
      detail: 'Documents · SOPs · CRM · Institutional knowledge',
    },
    {
      label: 'Phase 02',
      title: 'Company Analyst',
      timeline: 'Intelligence Layer',
      detail: 'Sales data · Financials · KPIs · Trend detection',
    },
    {
      label: 'Phase 03',
      title: 'Company Operator',
      timeline: 'Operations Layer',
      detail: 'Bottleneck detection · Capacity · Alerts',
    },
  ];

  // The "active" phase marker is laid out absolutely so the dot
  // can animate to each row on view. Phases 0/1/2 → top: 0/56/112.
  const [activePhase, setActivePhase] = React.useState(0);
  const reduce = useReducedMotion();
  const cardRef = React.useRef<HTMLDivElement>(null);
  const rowRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    if (reduce) return;
    const card = cardRef.current;
    if (!card) return;
    let intervalId: number | undefined;

    const leaveObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && intervalId !== undefined) {
            window.clearInterval(intervalId);
            intervalId = undefined;
          }
        });
      },
      { threshold: 0.4 },
    );

    const inViewObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && intervalId === undefined) {
            intervalId = window.setInterval(() => {
              setActivePhase((p) => (p + 1) % phases.length);
            }, 1800);
          }
        });
      },
      { threshold: 0.4 },
    );

    inViewObserver.observe(card);
    leaveObserver.observe(card);

    return () => {
      inViewObserver.disconnect();
      leaveObserver.disconnect();
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [reduce, phases.length]);

  // Translate the active dot vertically to align with the active row.
  const dotTop = activePhase * 56;

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-base)] p-7"
    >
      {/* Breathing glow — slow opacity loop so the card feels alive without animating UI. */}
      {!reduce && (
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
      {/* Card header */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
          The AIOS Stack
        </span>
        <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-[10px] py-[2px] text-[10px] text-[var(--text-muted)]">
          Private · Secure · Yours
        </span>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-[var(--border)]" />

      {/* Phase rows with active indicator */}
      <div className="relative">
        {/* Track */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-14px] top-[6px] h-[160px] w-px bg-[var(--border)]"
        />
        {/* Active dot */}
        {!reduce && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-[-18px] block h-[10px] w-[10px] rounded-full bg-[#f97316]"
            initial={false}
            animate={{ top: 6 + dotTop + 4 }}
            transition={{ duration: 0.5, ease }}
            style={{
              boxShadow:
                '0 0 0 4px rgba(249,115,22,0.15), 0 0 12px 2px rgba(249,115,22,0.4)',
            }}
          />
        )}

        <div className="flex flex-col">
          {phases.map((phase, i) => (
            <div
              key={phase.label}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              className={`flex items-start justify-between py-[14px] ${
                i < phases.length - 1 ? 'border-b border-[var(--border)]' : ''
              }`}
            >
              <div>
                <span className="text-[10px] font-[500] uppercase tracking-[0.06em] text-[var(--text-muted)]">
                  {phase.label}
                </span>
                <p
                  className={`mt-[3px] text-[13px] font-[600] transition-colors duration-500 ${
                    i === activePhase
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
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
      </div>

      {/* Card footer */}
      <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
        <span className="text-[12px] text-[var(--text-muted)]">
          Deployed on your infrastructure · Fully owned by you
        </span>
        <Link
          href="/aios"
          className="group rounded-[6px] px-[14px] py-[6px] text-[12px] font-[500] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <span>Full overview</span>
          <span className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────
   MAIN HOMEPAGE
   ─────────────────────────────────────────── */
const HomePageContent = () => {
  const { openModal } = useContactModal();
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
    href: string;
    highlight?: boolean;
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

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">

      {/* ══════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════ */}
      <section className="relative flex min-h-[calc(100vh-60px)] flex-col justify-center overflow-hidden px-6 py-[64px] md:py-[96px]">
        {/* Slow conic gradient — alive without being a video. 60s rotation, very low opacity. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="absolute -inset-[50%]"
            style={{
              background:
                'conic-gradient(from 180deg at 50% 50%, #f97316 0deg, transparent 60deg, transparent 300deg, #f97316 360deg)',
              opacity: 0.18,
              animation: 'spin 60s linear infinite',
            }}
          />
        </div>
        {/* Grid backdrop + lone accent intersection. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)',
          }}
        />
        {/* Single accent dot at the first grid intersection nearest the H1. */}
        <span
          aria-hidden
          className="pointer-events-none absolute hidden h-[2px] w-[2px] rounded-full bg-[#f97316] md:block"
          style={{
            top: 'calc(50% - 4px)',
            left: 'calc(50% - 280px)',
            boxShadow: '0 0 8px 2px rgba(249,115,22,0.5)',
          }}
        />
        <div className={containerClass}>
          <div className="flex flex-col gap-6">
            {/* Eyebrow pill */}
            <Reveal delay={0} y={8} duration={0.5}>
              <div className="inline-flex items-center gap-3 text-[12px] font-[600] uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#22c55e]"
                  style={{ boxShadow: '0 0 0 4px rgba(34,197,94,0.15)' }}
                />
                <span>{hero.eyebrow}</span>
              </div>
            </Reveal>

            {/* H1 */}
            <Reveal delay={0.08} y={20} duration={0.7}>
              <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)]">
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>
                  {hero.heading}
                </span>
                <br />
                <span
                  className="text-[var(--text-muted)]"
                  style={{
                    fontFamily: '"Newsreader", Georgia, serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {hero.secondaryHeading}
                </span>
              </h1>
            </Reveal>

            {/* Subhead */}
            <Reveal delay={0.18} y={12} duration={0.6}>
              <p className="max-w-[520px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
                {hero.tagline}
              </p>
            </Reveal>

            {/* CTA row */}
            <Reveal delay={0.28} y={12} duration={0.6}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
                >
                  {hero.primaryCta}
                </button>
                <Link
                  href="#services"
                  className="rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                >
                  {hero.secondaryCta}
                </Link>
              </div>
            </Reveal>

            {/* Social proof */}
            <Reveal delay={0.38} y={8} duration={0.6}>
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
            </Reveal>

            {/* Live status row — pulsing dot + CountUp numbers. */}
            <Reveal delay={0.46} y={6} duration={0.5}>
              <div className="mt-4 flex items-center gap-3 text-[12px] text-[var(--text-secondary)]">
                <span
                  className="relative flex h-2 w-2"
                  aria-hidden
                >
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"
                    style={{ animation: 'pulse-ring 2s ease-out infinite' }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
                </span>
                <span>
                  Currently onboarding <CountUp value="2" className="font-[600] text-[var(--text-primary)]" /> companies for Q3 2026
                  <span className="mx-2 text-[var(--text-muted)]">·</span>
                  <CountUp value="1" className="font-[600] text-[var(--text-primary)]" /> spot remaining
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — AIOS FEATURE
          ══════════════════════════════════════ */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-surface)] px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <div className="grid gap-[64px] md:grid-cols-2 items-start">
            {/* LEFT COLUMN */}
            <div>
              <Reveal y={8} duration={0.5}>
                <SectionLabel text="Flagship product" />
              </Reveal>
              <Reveal delay={0.06} y={16} duration={0.7}>
                <h2
                  className="mt-3 text-[clamp(28px,3.5vw,44px)] font-[600] leading-[1.08] tracking-[-0.03em]"
                  style={{ fontWeight: 650 }}
                >
                  Vispaico AIOS&trade;
                </h2>
              </Reveal>
              <Reveal delay={0.14} y={12} duration={0.6}>
                <p className="mt-4 max-w-[460px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                  Your Company&apos;s Private AI Workforce. A secure AI operating system that understands your business, analyzes your data, and helps your team make better decisions every day.
                </p>
              </Reveal>
              <Reveal delay={0.18} y={12} duration={0.6}>
                <p className="mt-3 max-w-[460px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                  Deployed in phases. Deployed on infrastructure you control. Fully owned by your company.
                </p>
              </Reveal>

              {/* Feature list */}
              <ul className="mt-6 space-y-3">
                {[
                  'Company Brain → knowledge layer that knows your business',
                  'Company Analyst → business intelligence on your data',
                  'Company Operator → operational monitoring and alerts',
                  'Self-hosted on your servers or private cloud',
                  'No data leaves your infrastructure',
                  'Full ownership → no vendor lock-in',
                ].map((item, i) => (
                  <Reveal
                    key={item}
                    as="li"
                    delay={0.22 + i * 0.05}
                    y={8}
                    duration={0.5}
                    className="flex items-start gap-[10px] text-[14px] leading-[1.6] text-[var(--text-secondary)]"
                  >
                    <span className="mt-[8px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[var(--text-muted)]" />
                    {item}
                  </Reveal>
                ))}
              </ul>

              {/* Price block */}
              <Reveal delay={0.55} y={10} duration={0.6}>
                <div className="mt-7 border-t border-[var(--border)] pt-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[32px] font-[600] text-[var(--text-primary)]">Starting at $4,000</span>
                    <span className="text-[13px] text-[var(--text-muted)]">· per component · monthly from $500</span>
                  </div>
                  <p className="mt-[6px] text-[13px] text-[var(--text-muted)]">
                    Enterprise implementations from $20,000. Custom pricing available.
                  </p>
                </div>
              </Reveal>

              {/* CTA row */}
              <Reveal delay={0.62} y={10} duration={0.6}>
                <div className="mt-5 flex flex-wrap gap-[10px]">
                  <Link
                    href="/aios"
                    className="rounded-[7px] bg-[var(--accent)] px-6 py-[10px] text-[14px] font-[600] tracking-[0.06em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
                  >
                    Explore AIOS →
                  </Link>
                  <Link
                    href="/services/ai-operations-audit"
                    className="rounded-[7px] border border-[var(--border)] px-6 py-[10px] text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                  >
                    Book an AI Operations Audit
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN */}
            <Reveal y={20} duration={0.7}>
              <AiosCard />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — SERVICES GRID
          ══════════════════════════════════════ */}
      <section id="services" className="px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text={servicesLabel} />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-4 text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.08] tracking-[-0.03em]"
              style={{ fontWeight: 650 }}
            >
              {servicesHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mt-3 max-w-[520px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
              {servicesSubtext}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={0.18 + i * 0.06}
                y={16}
                duration={0.6}
                className="flex"
              >
                <Link
                  href={service.href}
                  className="group relative flex min-h-[240px] w-full flex-col overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 transition-colors hover:border-[#444440]"
                  style={service.highlight ? { borderColor: '#3a3a36' } : undefined}
                >
                  {/* Gradient top-line draws left-to-right on view (highlight cards only). */}
                  {service.highlight && (
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-10% 0px' }}
                      transition={{ duration: 0.9, delay: 0.4 + i * 0.06, ease }}
                    />
                  )}
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {service.tag}
                    </span>
                    <span
                      className="font-mono text-[10px] text-[var(--text-muted)]"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-2 text-[18px] font-[600] text-[var(--text-primary)]">{service.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{service.description}</p>
                  <div className="mt-auto flex flex-col border-t border-[var(--border)] pt-4 text-[13px] text-[var(--text-muted)]">
                    <div className="flex items-center justify-between">
                      <span>{service.price}</span>
                      <span className="inline-block text-[var(--text-muted)] transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
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
                <span
                  className="text-[clamp(32px,4vw,48px)] font-[600] text-[var(--text-primary)]"
                  style={{ fontWeight: 650 }}
                >
                  <CountUp value={metric.value} />
                </span>
                {/* Label fades in slightly after the number lands. */}
                <Reveal delay={1.0} y={4} duration={0.4}>
                  <span className="text-[13px] text-[var(--text-secondary)]">{metric.label}</span>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — INDUSTRIES
          ══════════════════════════════════════ */}
      <section id="industries" className="px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="Industries" />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-4 text-[clamp(32px,4vw,48px)] font-[600] leading-[1.08] tracking-[-0.03em]"
              style={{ fontWeight: 650 }}
            >
              Built For Operationally Complex Businesses
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
              Every industry has unique challenges. We build private AI operating systems that address yours.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[
              'Manufacturing',
              'Logistics',
              'Professional Services',
              'Legal',
              'Healthcare Administration',
              'Construction',
              'E-commerce',
            ].map((industry, i) => (
              <Reveal
                key={industry}
                delay={0.2 + i * 0.04}
                y={8}
                duration={0.5}
                className="flex items-center gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] px-5 py-4 text-[14px] font-[500] text-[var(--text-secondary)]"
              >
                <span
                  className="font-mono text-[10px] text-[var(--text-muted)]"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(i + 1).padStart(3, '0')}
                </span>
                <span>{industry}</span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5} y={8} duration={0.5}>
            <div className="mt-8">
              <Link
                href="/industries"
                className="group inline-flex items-center gap-2 rounded-[7px] border border-[var(--border)] px-6 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              >
                <span>See Industry Solutions</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — FINAL CTA
          ══════════════════════════════════════ */}
      <section id="final-cta" className="relative px-6 py-[96px]">
        {/* Gradient line draws left-to-right on view to mark the arrival. */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-0 h-[1px] w-[min(1100px,calc(100%-3rem))] -translate-x-1/2 origin-left bg-gradient-to-r from-transparent via-[#f97316] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.2, ease }}
        />
        <div className={`${containerClass} text-center`}>
          {/* Eyebrow pill */}
          <Reveal y={6} duration={0.5}>
            <div className="inline-flex items-center gap-3 text-[12px] font-[600] uppercase tracking-[0.12em] text-[var(--text-secondary)]">
              <span className="h-[4px] w-[4px] rounded-full bg-[var(--accent)]" />
              <span>{finalCta.eyebrow}</span>
            </div>
          </Reveal>

          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-4 text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.08] tracking-[-0.03em]"
              style={{ fontWeight: 650 }}
            >
              {finalCta.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
              {finalCta.subtext}
            </p>
          </Reveal>

          {/* Primary CTA */}
          <Reveal delay={0.22} y={8} duration={0.5}>
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={openModal}
                className="rounded-[7px] bg-[var(--accent)] px-6 py-3 text-[13px] font-[600] tracking-[0.1em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
              >
                {finalCta.cta}
              </button>
            </div>
          </Reveal>

          {/* Secondary row */}
          <Reveal delay={0.3} y={8} duration={0.5}>
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
          </Reveal>

          {/* Fine print */}
          <Reveal delay={0.38} y={6} duration={0.5}>
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
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default HomePageContent;
