// src/app/(main_site)/portfolio/health-vitality-reviews/page.tsx
import PortfolioItemPage from '@/components/PortfolioItemPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Vitality Reviews Portfolio | Vispaico',
  description: 'Case study for the Health Vitality Reviews project.',
};

export default function ProjectPage() {
  return <PortfolioItemPage projectId="health-vitality-reviews" />;
}
