// src/app/layout.tsx (The MODIFIED Root Layout)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/Providers";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Script from "next/script";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Development & Design Agency | Web Apps from $899 | Vispaico",
  description: "Vispaico is an AI development and design agency that builds custom web apps, websites, and AI solutions. Get your project delivered in as little as 3 days, starting from $899.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    'name': 'Vispaico Co. Ltd.',
    'description': 'A creative agency specializing in web development, design, AI solutions, marketing, and SaaS products.',
    'url': 'https://vispaico.com',
    'logo': 'https://vispaico.com/logos/vispaico_wh_logo.svg',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'No. 7, Lane 201 Lach Tray',
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
      'AI Solutions',
      'Digital Marketing',
      'SaaS Development'
    ]
  };

  return (
    <html lang="en">
      <head>
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
      </head>
      <body className={`${inter.className} ...`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5NG2SG8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ClientProviders>
          {/* NOTICE: The Header and Footer are GONE from here. */}
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}