import React from 'react';
import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
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
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24 min-h-screen">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">{hero.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div id="contact" className="bg-black/20 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-white">{form.title}</h2>
            <ContactForm />
            <ContactQuickOptions />
          </div>

          <div className="space-y-6 pt-2">
            <h2 className="text-2xl font-semibold mb-6 text-white">{details.title}</h2>
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-indigo-400 mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-medium text-white">{details.address.label}</h3>
                <p className="text-gray-300">{details.address.value}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-indigo-400 mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-medium text-white">{details.email.label}</h3>
                <a
                  href={`mailto:${details.email.value}`}
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  {details.email.value}
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-indigo-400 mt-1 shrink-0" aria-hidden="true" />
              <div>
                <h3 className="font-medium text-white">{details.phone.label}</h3>
                <a
                  href={`tel:${details.phone.value.replace(/\s|-|\(|\)/g, '')}`}
                  className="text-gray-300 hover:text-indigo-400 transition-colors"
                >
                  {details.phone.value}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}