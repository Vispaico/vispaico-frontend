// src/app/(main_site)/layout.tsx

import React from 'react';
import Header from '@/components/Header'; // Make sure the path is correct
import Footer from '@/components/Footer'; // Make sure the path is correct

// This layout is ONLY for pages inside the (main_site) group.
export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}