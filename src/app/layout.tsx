// src/app/layout.tsx (The MODIFIED Root Layout)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/Providers";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { /* ... */ };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ...`}>
        <ClientProviders>
          {/* NOTICE: The Header and Footer are GONE from here. */}
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}