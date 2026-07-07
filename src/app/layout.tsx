// src/app/layout.tsx (The MODIFIED Root Layout)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-expect-error CSS import without type declarations
import "./globals.css";
// @ts-expect-error CSS import without type declarations
import '@vispaico/agent-widget/styles/tokens.css';
import { ClientProviders } from "@/components/Providers";
// @ts-expect-error CSS import without type declarations
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { SiteAgentWidget } from "@/components/site-agent-widget";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vispaico — Your Company's Private AI Workforce",
  description: "Connect company knowledge, business data, and operations into one intelligent layer your team can use every day. CÔNG TY TNHH VISPAICO ⭐ tra cứu mã số thuế 0201994030 - Số 7, ngõ 201 đường Lạch Tray , Phường Lạch Tray, Quận Ngô Quyền, Thành phố Hải Phòng, Việt Nam",
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
    'description': 'Vispaico — Your Company\'s Private AI Workforce',
    'url': 'https://vispaico.com',
    'logo': 'https://vispaico.com/logos/Vispaico_ship it_Logo_gr.webp',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Số 7, ngõ 201 đường Lạch Tray, Phường Gia Viên, TP Hải Phòng, Việt Nam',
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
      'AI Development',
      'Web Design',
    ]
  };

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'CÔNG TY TNHH VISPAICO',
    'alternateName': 'VISPAICO',
    'url': 'https://www.vispaico.com',
    'logo': 'https://www.vispaico.com/logos/Vispaico_ship it_Logo_gr.webp',
    'slogan': 'Ship It.',
    'description': 'We build private AI operating systems for growing companies. Connect company knowledge, business data, and operations into one intelligent layer your team can use every day.',
    'foundingDate': '2019',
    'founder': {
      '@type': 'Person',
      'name': 'Niels Teitge'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Số 7, ngõ 201 đường Lạch Tray, Phường Gia Viên, TP Hải Phòng, Việt Nam',
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3279949468229929"
          crossOrigin="anonymous"
        />
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
        <SiteAgentWidget />
      </body>
    </html>
  );
}