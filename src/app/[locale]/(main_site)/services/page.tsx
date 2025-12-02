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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
                  </div>
                </div>
              </div>
            </article>
          ))}
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
