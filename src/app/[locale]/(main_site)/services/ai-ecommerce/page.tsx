import { Metadata } from 'next';
import AiEcommercePage from '@/components/AiEcommercePage';

export const metadata: Metadata = {
  title: 'AI-Powered E-Commerce — Vispaico',
  description: 'Next.js storefront with an AI product recommendation engine and automated customer support agent. Sells and supports 24/7 without extra staff.',
};

export default function Page() {
  return <AiEcommercePage />;
}
