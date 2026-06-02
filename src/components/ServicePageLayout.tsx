import React from 'react';
import { Link } from '@/i18n/navigation';
import ContactCTAButton from '@/components/ContactCTAButton';

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
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
    {text}
  </p>
);

const StatCard = ({ stat, label, text }: { stat: string; label: string; text: string }) => (
  <div className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6">
    <p className="text-[clamp(28px,3vw,40px)] font-[600] text-[var(--text-primary)]">{stat}</p>
    <p className="mt-1 text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
    <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">{text}</p>
  </div>
);

const OutcomeStatCard = ({ stat, label }: { stat: string; label: string }) => (
  <div className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6">
    <p className="text-[clamp(28px,3vw,40px)] font-[600] text-[var(--text-primary)]">{stat}</p>
    <p className="mt-1 text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">{label}</p>
  </div>
);

const renderLayout = (data: ServicePageData) => {
  const container = 'mx-auto w-full max-w-[900px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text={data.hero.label} />
          <h1 className="mt-4 text-[clamp(36px,5vw,60px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            {data.hero.heading}
          </h1>
          <p className="mt-6 max-w-[560px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
            {data.hero.subhead}
          </p>
          <p className="mt-4 text-[14px] text-[var(--text-muted)]">{data.hero.priceAnchor}</p>
          <div className="mt-6">
            <ContactCTAButton
              text={data.hero.ctaText}
              className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text={data.included.label} />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            {data.included.heading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.included.features.map((feature) => (
              <p key={feature} className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                {feature}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text={data.steps.label} />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            {data.steps.heading}
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {data.steps.items.map((step, index) => (
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

      {/* Who it's for */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text={data.who.label} />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            {data.who.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            {data.who.body}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text={data.pricing.label} />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {data.pricing.plans.map((plan) => (
              <article
                key={plan.title}
                className={`flex flex-col rounded-[10px] border bg-[var(--bg-surface)] p-7 ${
                  plan.featured ? 'border-[#3a3a36]' : 'border-[var(--border)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">{plan.title}</h3>
                  {plan.badge && (
                    <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] text-[var(--text-secondary)]">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">{plan.price}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Section (optional) */}
      {data.addOn && (
        <section className="px-6 py-[64px] md:py-[96px]">
          <div className={container}>
            <SectionLabel text={data.addOn.label} />
            <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
              {data.addOn.heading}
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
              {data.addOn.subtext}
            </p>
            <div className="mt-8 max-w-[560px] rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
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
                  className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {data.addOn.card.priceLinkText}
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
          </div>
        </section>
      )}

      {/* Stats Section (optional) */}
      {data.statsSection && (
        <section className="px-6 py-[64px] md:py-[96px]">
          <div className={container}>
            <SectionLabel text={data.statsSection.label} />
            <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
              {data.statsSection.heading}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
              {data.statsSection.columns.map((col) => (
                <StatCard key={col.stat} {...col} />
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
              <SectionLabel text={data.outcomeGrid.label} />
              <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
                {data.outcomeGrid.heading}
              </h2>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                {data.outcomeGrid.subtext}
              </p>
              <div className="mt-8 max-w-[560px] rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
                <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
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
                    className="text-[13px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {data.outcomeGrid.card.priceLinkText}
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
            </div>
          </section>
          <section className="px-6 py-[64px] md:py-[96px]">
            <div className={container}>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {data.outcomeGrid.outcomes.map((outcome) => (
                  <OutcomeStatCard key={outcome.stat} {...outcome} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Related Services */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <h2 className="text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            {data.related.heading}
          </h2>
          <div className={`mt-8 grid gap-3 ${data.related.items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {data.related.items.map((item) => (
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

      {/* Industries Link (optional) */}
      {data.industriesLink && (
        <section className="px-6 py-[40px] md:py-[48px]">
          <div className={`${container} text-center`}>
            <Link
              href={data.industriesLink.href}
              className="inline-flex items-center gap-2 rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            >
              {data.industriesLink.text}
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${container} text-center`}>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            {data.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            {data.cta.subtext}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <ContactCTAButton
              text={data.cta.button}
              className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            />
            {data.cta.emailBelow && (
              <p className="text-[12px] text-[var(--text-muted)]">or email {data.cta.emailBelow}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

const ServicePageContent: React.FC<{ data: ServicePageData }> = ({ data }) => renderLayout(data);

export default ServicePageContent;
