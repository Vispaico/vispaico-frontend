// src/app/[locale]/(main_site)/services/page.tsx

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { resolveLocale } from '@/i18n/locale-utils';

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

type Tier = {
  id: string;
  title: string;
  price: string;
  description: string;
  bullets: string[];
  why: string;
  pricing: string[];
  cta: string;
};

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'ServicesPage.metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const [heroT, tiersRaw, formulaT] = await Promise.all([
    getTranslations({ locale: resolvedLocale, namespace: 'ServicesPage.hero' }),
    getTranslations({ locale: resolvedLocale, namespace: 'ServicesPage.tiers' }),
    getTranslations({ locale: resolvedLocale, namespace: 'ServicesPage.formula' }),
  ]);

  const tiers = tiersRaw.raw('items') as Tier[];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vispaico Growth Services",
    "provider": {
      "@type": "Organization",
      "name": "Vispaico",
      "url": "https://www.vispaico.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Growth Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Growth Content",
          "description": "SEO-optimized articles",
          "price": "399",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "SEO Forecasting & Planning",
          "description": "Three-scenario SEO forecasting with monthly recalibration and transparent assumptions.",
          "url": "https://www.vispaico.com/services/seo-forecasting"
        },
        {
          "@type": "Offer",
          "name": "Maintenance + Uptime",
          "description": "24/7 monitoring and backups",
          "price": "249",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "name": "Conversion Optimization",
          "description": "Funnel analysis and A/B testing",
          "price": "1500",
          "priceCurrency": "USD"
        }
      ]
    }

  };

  type SeoForecastingFaqItem = {
    question: string;
    paragraphs: string[];
    bullets?: string[];
  };

  const seoForecastingFaqItems: SeoForecastingFaqItem[] = [
    {
      question: 'How accurate are SEO forecasts?',
      paragraphs: [
        "Real talk: ~78% accurate at 12 months based on tracked client data. SEO has too many variables for perfection.",
        "What matters is staying within ~20% of your forecast—that's considered accurate in the industry.",
        "Month 3 forecasts are usually too early to be confident. By month 6 you can see real trends. Month 9 gets clearer. Month 12 is where the model becomes reliably predictive.",
        'We track monthly and adjust. When actual results differ by more than ~20%, we identify why and update the forecast forward.'
      ]
    },
    {
      question: 'Why do most SEO forecasts fail?',
      paragraphs: [
        'Three reasons:',
        'Optimism bias. Hidden methodology. Ignoring reality.',
        'We show conservative, likely, and optimistic scenarios, explain the math, and account for what actually happens (competition + updates + variance).'
      ]
    },
    {
      question: 'What data do you need to forecast accurately?',
      paragraphs: ['Minimum 12 months of real performance history, plus your current baseline and the plan you will actually execute.'],
      bullets: [
        'Organic traffic trends',
        'How fast rankings improved',
        'Content indexing rates',
        'Backlink acquisition pace',
        'Current rankings (positions 1–50, not just “page 1”)',
        'Content inventory (how many pieces exist)',
        'Domain authority + backlink profile',
        'Technical health',
        'Publishing targets, link targets, technical improvements, budget'
      ]
    },
    {
      question: 'Why three scenarios instead of one number?',
      paragraphs: ['Because one number is a lie. Three scenarios set expectations and make the methodology transparent.'],
      bullets: [
        'Conservative (70% confidence): ~35–45% traffic growth',
        'Likely (50% confidence): ~60–80% traffic growth',
        'Optimistic (30% confidence): ~100–130% traffic growth'
      ]
    },
    {
      question: 'How does publishing frequency affect the timeline?',
      paragraphs: ['Publishing more = faster growth, but not linearly. SEO compounds because indexing + ranking take time. Month 6 is not half of month 12.'],
      bullets: ['10 articles/month: ~+30% month 6, ~+65% month 12', '20 articles/month: ~+50% month 6, ~+110% month 12', '5 articles/month: ~+15% month 6, ~+35% month 12']
    },
    {
      question: 'Can you guarantee specific traffic numbers?',
      paragraphs: [
        'No. Anyone who guarantees SEO outcomes is lying.',
        'What we do guarantee: honest forecasting, monthly tracking, and adjustments when reality differs from plan.',
        'We estimate keyword ranking probability instead of promising rankings.'
      ]
    },
    {
      question: 'What happens if results fall short of forecast?',
      paragraphs: [
        'We track it monthly: traffic vs forecast, rankings vs predicted, content shipped vs plan, links acquired vs target.',
        "If you're off by more than ~20%, we identify why (algorithm, competition, underperforming content, slowed execution) and adjust the forecast forward.",
        'Credibility lives in calibration, not bravado.'
      ]
    },
    {
      question: 'How do you adjust for domain authority and competition?',
      paragraphs: ['Each target keyword gets a baseline ranking probability, then we adjust it based on your reality:'],
      bullets: [
        'Domain authority comparison (stronger than competitors: +10%, weaker: -10%)',
        'Content quality advantage (better than what ranks: +15%)',
        'Backlink pace (faster than competitors: +10%, slower: -10%)'
      ]
    },
    {
      question: "What's the difference between your forecasting and what other agencies do?",
      paragraphs: [
        'Most agencies give one optimistic number, hide the method, never track results, and disappear when wrong.',
        'We show three scenarios, explain the methodology, track monthly, and update the forecast when reality changes.'
      ]
    },
    {
      question: 'How often do you update the forecast?',
      paragraphs: ['Monthly. We compare actuals to the forecast, document variance, and recalibrate forward.']
    },
    {
      question: 'Is SEO forecasting worth the time?',
      paragraphs: ['Yes—because it turns vague “SEO progress” into a roadmap with expectations, budget justification, objective tracking, and early adjustment.']
    },
    {
      question: 'Who should get a forecast done?',
      paragraphs: [
        'Anyone doing SEO who has 12+ months of historical data, wants realistic expectations, and plans to actually execute.',
        "If you've been live for less than a year, we can plan and estimate, but we can't forecast accurately yet."
      ]
    }
  ];

  const seoForecastingFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoForecastingFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: [...item.paragraphs, ...(item.bullets ? item.bullets.map((bullet) => `• ${bullet}`) : [])].join('\n')
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoForecastingFaqSchema) }}
      />
      <main className="container mx-auto px-6 py-16 md:py-24 space-y-16">
        <header className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80">{heroT('eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{heroT('title')}</h1>
          <p className="text-lg text-blue-100/90">{heroT('subtitle')}</p>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-200/70">{heroT('support')}</p>
        </header>

        <section className="grid gap-10">
          {tiers.map((tier) => (
            <article
              key={tier.id}
              id={tier.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl"
            >
              <header className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-white uppercase tracking-[0.35em]">{tier.title}</h2>
                  <p className="text-orange-200/80 text-sm uppercase tracking-[0.35em]">{tier.price}</p>
                </div>
                <p className="text-base text-blue-100/85 max-w-xl">{tier.description}</p>
              </header>

              <div className="mt-6 grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">{tiersRaw('labels.deliverables')}</h3>
                  <ul className="space-y-3 text-sm text-blue-100/90">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-300/80" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">{tiersRaw('labels.why')}</h3>
                  <p className="text-sm text-blue-100/90">{tier.why}</p>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">{tiersRaw('labels.pricing')}</h4>
                  <ul className="space-y-2 text-sm text-blue-100/90">
                    {tier.pricing.map((priceLine) => (
                      <li key={priceLine}>{priceLine}</li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-100 transition hover:border-orange-300 hover:text-white"
                    >
                      {tier.cta}
                    </Link>
                    {tier.id === 'growth-content' && (
                      <div className="mt-4">
                        <Link
                          href="/services/seo-forecasting"
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-100 transition hover:border-orange-300/70 hover:text-white"
                        >
                          See SEO Forecasting &amp; Planning
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section
          id="seo-forecasting-faq"
          className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl"
        >
          <header className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80">SEO growth service</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">SEO Forecasting &amp; Planning — FAQ</h2>
            <p className="text-blue-100/90">
              Forecasting isn&apos;t a promise. It&apos;s a transparent model, calibrated monthly, so you can budget with confidence and
              measure progress without guessing.
            </p>
            <div>
              <Link
                href="/services/seo-forecasting"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Read the full SEO Forecasting explainer
              </Link>
            </div>
          </header>

          <div className="mt-8 max-w-4xl space-y-4">
            {seoForecastingFaqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-slate-950/20 p-6 shadow-sm transition hover:border-orange-300/40"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-left text-lg font-semibold text-white">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-100 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-blue-100/90">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {item.bullets && (
                    <ul className="list-disc space-y-2 pl-5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/20 via-black to-blue-500/10 p-10 shadow-2xl backdrop-blur-xl text-center">
          <h2 className="text-3xl font-semibold text-white">{formulaT('title')}</h2>
          <p className="mt-4 text-blue-100/90">{formulaT('description')}</p>
          <div className="mt-6 flex flex-col gap-3 text-lg font-semibold text-white sm:flex-row sm:justify-center">
            <span>{formulaT('line1')}</span>
            <span>{formulaT('line2')}</span>
            <span>{formulaT('line3')}</span>
            <span>= {formulaT('result')}</span>
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.35em] text-blue-200/70">{formulaT('note')}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/vispaico-growth-website"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              {formulaT('ctaPrimary')}
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-blue-100 transition hover:border-orange-300/70 hover:text-white"
            >
              {formulaT('ctaSecondary')}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
