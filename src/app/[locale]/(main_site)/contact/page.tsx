import React from 'react';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import { buildCanonical } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import ContactQuickOptions from '@/components/ContactQuickOptions';

library.add(faEnvelope, faPhone, faLocationDot);

type ContactDetails = {
  label: string;
  value: string;
};

const containerClass = 'mx-auto w-full max-w-[1100px]';
const sectionPadding = 'px-6 py-[64px] md:py-[96px]';
const cardClass = 'rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.45)]';
const detailRowClass = 'flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-4';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Contact.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: buildCanonical(resolvedLocale, 'contact')
    }
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Contact' });
  const hero = t.raw('hero') as { title: string; description: string };
  const form = t.raw('form') as { title: string };
  const details = t.raw('details') as {
    title: string;
    address: ContactDetails;
    email: ContactDetails;
    phone: ContactDetails;
  };

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className={sectionPadding}>
        <div className={`${containerClass} space-y-12`}>
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">Get in touch</p>
            <h1 className="text-[clamp(36px,5vw,64px)] font-[600] leading-tight">{hero.title}</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">{hero.description}</p>
          </div>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className={cardClass}>
              <h2 className="text-2xl font-[600] mb-6 text-[var(--text-primary)]">{form.title}</h2>
              <ContactForm />
              <ContactQuickOptions />
            </div>
            <div className={`${cardClass} space-y-6`}>
              <h2 className="text-2xl font-[600] text-[var(--text-primary)]">{details.title}</h2>
              <div className="space-y-4">
                <ContactDetailRow icon={faLocationDot} item={details.address} />
                <ContactDetailRow icon={faEnvelope} item={details.email} href={`mailto:${details.email.value}`} />
                <ContactDetailRow icon={faPhone} item={details.phone} href={`tel:${details.phone.value.replace(/\s|-|\(|\)/g, '')}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const ContactDetailRow = ({ icon, item, href }: { icon: IconDefinition; item: ContactDetails; href?: string }) => (
  <article className={`${detailRowClass}`}>
    <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border bg-neutral-700">
      <FontAwesomeIcon icon={icon} className="h-20 w-20 text-blue-50" aria-hidden="true" />
    </div><br />
    <div>
      <h3 className="text-sm font-semibold text-[var(--text-secondary)]">{item.label}</h3>
      {href ? (
        <a href={href} className="text-[var(--text-primary)] hover:text-[var(--accent)]">
          {item.value}
        </a>
      ) : (
        <p className="text-[var(--text-primary)]">{item.value}</p>
      )}
    </div>
  </article>
);
