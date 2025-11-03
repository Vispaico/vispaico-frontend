import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { resolveLocale } from '@/i18n/locale-utils';

type HeroContent = {
  badge: string;
  title: string;
  description: string;
  cta: string;
};

type WhyCard = {
  icon: string;
  title: string;
  text: string;
};

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  price: string;
  duration: string;
  cta: string;
};

type BundleItem = {
  icon: string;
  title: string;
  subtitle: string;
};

type RemediationScenario = {
  title: string;
  scope: string;
  cost: string;
  timeline: string;
};

type RemediationContent = {
  title: string;
  introHeading: string;
  introParagraphs: string[];
  scenariosHeading: string;
  scenarios: RemediationScenario[];
  guarantee: {
    heading: string;
    paragraphs: string[];
  };
};

type StandardsContent = {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
};

type ContactContent = {
  title: string;
  description: string;
  cta: string;
  notePrefix: string;
  emailLinkText: string;
  noteSuffix: string;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.AccessibilityAudit.metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function AccessibilityAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.AccessibilityAudit' });

  const hero = t.raw('hero') as HeroContent;
  const why = t.raw('why') as { title: string; cards: WhyCard[] };
  const services = t.raw('services') as { title: string; items: ServiceItem[] };
  const bundle = t.raw('bundle') as {
    title: string;
    intro: string;
    items: BundleItem[];
    savings: string;
    price: string;
    description: string;
    cta: string;
  };
  const remediation = t.raw('remediation') as RemediationContent;
  const testimonial = t.raw('testimonial') as { quote: string; name: string; role: string };
  const standards = t.raw('standards') as StandardsContent;
  const contact = t.raw('contact') as ContactContent;

  return (
    <div className="bg-gradient-to-br from-gray-950 via-slate-950 to-blue-950 text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
            {hero.badge}
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{hero.title}</h1>
          <p className="max-w-3xl text-lg text-blue-100">{hero.description}</p>
          <Link
            href="#services"
            className="inline-flex rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {hero.cta}
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6" id="why">
          <h2 className="text-center text-3xl font-bold md:text-4xl">{why.title}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {why.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
              >
                <div className="mb-4 text-3xl" aria-hidden="true">{card.icon}</div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-base text-blue-100">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">{services.title}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.items.map((service) => (
              <div key={service.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-gray-950/80 p-8 shadow-xl">
                <div className="text-3xl" aria-hidden="true">{service.icon}</div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-base text-blue-100">{service.description}</p>
                <ul className="mt-6 space-y-2 text-base text-blue-100">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-2xl font-bold text-orange-300">{service.price}</div>
                <div className="text-base text-blue-200">{service.duration}</div>
                <Link
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 p-10 px-6 text-center shadow-2xl md:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">{bundle.title}</h2>
          <p className="mt-6 text-base text-blue-100">{bundle.intro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bundle.items.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                <div>
                  <strong className="text-white">{item.title}</strong>
                  <p className="text-base text-blue-100">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm font-semibold text-orange-300">{bundle.savings}</div>
          <div className="mt-4 text-3xl font-bold text-white">{bundle.price}</div>
          <p className="mt-4 text-base text-blue-100">{bundle.description}</p>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {bundle.cta}
          </Link>
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">{remediation.title}</h2>
          <div className="mt-8 space-y-6 text-sm text-blue-100">
            <h3 className="text-2xl font-semibold text-white">{remediation.introHeading}</h3>
            {remediation.introParagraphs.map((paragraph, index) => (
              <p key={`remediation-intro-${index}`} className="text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="mt-12 text-center text-2xl font-semibold text-white">{remediation.scenariosHeading}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {remediation.scenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-2xl border border-white/10 bg-gray-950/80 p-6">
                <h4 className="text-lg font-semibold text-white">{scenario.title}</h4>
                <p className="mt-3 text-base text-blue-100">{scenario.scope}</p>
                <p className="mt-3 text-base text-blue-100">{scenario.cost}</p>
                <p className="mt-3 text-base text-blue-100">{scenario.timeline}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-base text-blue-100">
            <h3 className="text-2xl font-semibold text-white">{remediation.guarantee.heading}</h3>
            {remediation.guarantee.paragraphs.map((paragraph, index) => (
              <p key={`remediation-guarantee-${index}`} className="mt-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-transparent to-red-600/20 p-10 text-center shadow-xl">
          <blockquote className="text-xl font-medium text-white">“{testimonial.quote}”</blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/20" aria-hidden="true" />
            <div className="text-left text-sm text-blue-100">
              <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">{standards.title}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {standards.items.map((standard) => (
              <div key={standard.title} className="rounded-2xl border border-white/10 bg-gray-950/80 p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-white">{standard.title}</h4>
                <p className="mt-3 text-base text-blue-100">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/15 via-red-600/10 to-transparent p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">{contact.title}</h2>
          <p className="mt-6 text-base text-blue-100">{contact.description}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {contact.cta}
          </Link>
          <div className="mt-6 text-sm text-blue-200">
            {contact.notePrefix}{' '}
            <Link href="mailto:crew@vispaico.com" className="text-orange-300 underline-offset-2 hover:underline">
              {contact.emailLinkText}
            </Link>{' '}
            {contact.noteSuffix}
          </div>
        </div>
      </section>
    </div>
  );
}
