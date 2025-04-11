// src/app/layout.tsx (Using ClientProviders wrapper, no direct page transition logic here)
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Assuming default Next.js font setup
import "./globals.css"; // Your global styles
import Header from '@/components/Header'; // Your Header component
import Footer from '@/components/Footer'; // Your Footer component
import { ClientProviders } from "@/components/Providers"; // Import the client-side provider wrapper
// Font Awesome CSS (ensure this configuration is correct)
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

// Your site metadata
export const metadata: Metadata = {
  title: "Vispaico - AI & Design Agency", // Adjust as needed
  description: "AI Studio, Design, Development and Ad Agency", // Adjust as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Type for children prop
}>) {
  return (
    <html lang="en">
      {/* Apply font class and hide default cursor */}
      <body className={`${inter.className} cursor-none bg-white dark:bg-slate-900 antialiased`}> {/* Added base background, antialiasing */}
        {/* Use the ClientProviders component to wrap client-side context and transitions */}
        <ClientProviders>
          {/* Header, main content (children), and Footer are rendered inside ClientProviders */}
          <Header siteTitle="Vispaico" />
          {/* The <main> tag helps structure semantic content */}
          <main>{children}</main>
          <Footer siteTitle="Vispaico" />
        </ClientProviders>
      </body>
    </html>
  );
}