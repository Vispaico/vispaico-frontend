// src/app/[locale]/(main_site)/faq/page.tsx

import type { Metadata } from 'next';
import FAQPageClient from '@/components/FAQPageClient';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'FAQ — Vispaico | AI Systems & Web Development',
    description: "Answers to the most common questions about Vispaico's services — from the $899 Growth Website to the $24,800 Launch Program. Ownership, process, tech stack, and support.",
  };
}

export default function FAQPage() {
  return <FAQPageClient />;
}
