import type { Metadata } from 'next';
import AiosPageContent from '@/components/AiosPageContent';

export const metadata: Metadata = {
  title: 'Vispaico AIOS™ — Your Company\'s Private AI Workforce',
  description: 'A private AI operating system that understands your business, analyzes your data, and helps your team make better decisions every day. Company Brain, Company Analyst, and Company Operator.',
};

export default function AiosPage() {
  return <AiosPageContent />;
}
