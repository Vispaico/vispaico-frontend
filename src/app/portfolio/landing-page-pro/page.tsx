// src/app/portfolio/landing-page-pro.tsx
import PortfolioItemPage from '@/components/PortfolioItemPage';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <PortfolioItemPage projectId="landing-page-pro" />
      <Footer />
    </>
  );
}