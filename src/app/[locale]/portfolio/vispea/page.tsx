// src/app/[locale]/portfolio/vispea/page.tsx
import PortfolioItemPage from '@/components/PortfolioItemPage';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { buildCanonical } from '@/lib/seo';
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const projects = portfolioData as Project[];
  const project = projects.find((p) => p.id === 'vispea');

  return {
    title: project ? `${project.title} | Portfolio | Vispaico` : 'Vispea | Portfolio | Vispaico',
    description: project?.summary ?? 'Vispea apparel storefront case study.',
    alternates: {
      canonical: buildCanonical(locale, 'portfolio/vispea')
    }
  };
}

export default function Page() {
  return (
    <>
      <Header />
      <PortfolioItemPage projectId="vispea" />
      <Footer />
    </>
  );
}