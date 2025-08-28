// src/app/portfolio/german-social-club/page.tsx
import PortfolioItemPage from '@/components/PortfolioItemPage';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <PortfolioItemPage projectId="german-social-club" />
      <Footer />
    </>
  );
}