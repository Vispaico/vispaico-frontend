// src/app/layout.tsx (The MODIFIED Root Layout)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/Providers";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$899 Websites in 72 Hours | Vispaico - Fast Web Design, No BS",
  description: "CÔNG TY TNHH VISPAICO ⭐ tra cứu mã số thuế 0201994030 - Số 7, ngõ 201 đường Lạch Tray , Phường Lạch Tray, Quận Ngô Quyền, Thành phố Hải Phòng, Việt Nam",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    'name': 'VISPAICO',
    'description': 'CÔNG TY TNHH VISPAICO, a creative studio specializing in web development.',
    'url': 'https://vispaico.com',
    'logo': 'https://vispaico.com/logos/vispaico_wh_logo.svg',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Số 7, ngõ 201 đường Lạch Tray , Phường Lạch Tray, Quận Ngô Quyền',
      'addressLocality': 'Haiphong',
      'addressCountry': 'VN'
    },
    'sameAs': [
      'https://x.com/vispaico',
      'https://www.linkedin.com/company/vispaico/',
      'https://github.com/Vispaico',
      'https://www.facebook.com/vispaico/',
      'https://www.instagram.com/vispaico/'
    ],
    'serviceType': [
      'Web Development',
      'Web Design',
    ]
  };

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'CÔNG TY TNHH VISPAICO',
    'alternateName': 'VISPAICO',
    'url': 'https://www.vispaico.com',
    'logo': 'https://www.vispaico.com/logo.png',
    'slogan': 'Ship It.',
    'description': 'Build your website in 72 hours for $899. Next.js + headless CMS. No meetings, no surprises. WCAG 2.2 AA compliant. Perfect for startups, consultants, e-commerce.',
    'foundingDate': '2019',
    'founder': {
      '@type': 'Person',
      'name': 'Niels Teitge'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Số 7, ngõ 201 đường Lạch Tray , Phường Lạch Tray, Quận Ngô Quyền',
      'addressLocality': 'Haiphong',
      'addressRegion': 'Hai Phong',
      'postalCode': '180000',
      'addressCountry': 'VN'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+84-936-166-892',
      'contactType': 'Customer Service',
      'availableLanguage': ['English', 'German', 'Spanish'],
      'areaServed': 'Worldwide'
    },
    'sameAs': [
      'https://www.linkedin.com/company/vispaico',
      'https://x.com/vispaico',
      'https://www.facebook.com/vispaico',
      'https://www.instagram.com/vispaico'
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.ctfassets.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.ctfassets.net" crossOrigin="anonymous" />
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K5NG2SG8');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body className={`${inter.className} ...`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5NG2SG8"
            height="0"
            width="0"
            className="gtm-noscript"
          ></iframe>
        </noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProviders>
            {/* NOTICE: The Header and Footer are GONE from here. */}
            {children}
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}