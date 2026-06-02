import { Metadata } from 'next';
import ServicePageContent from '@/components/ServicePageLayout';
import { servicePages } from '@/data/service-pages';

const pageKey = 'companyAnalyst';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = servicePages[pageKey].metadata;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function Page() {
  return <ServicePageContent data={servicePages[pageKey]} />;
}
