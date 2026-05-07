import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServicesOverviewContent from '@/components/ServicesOverviewContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesOverview' as never });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

const ServicesPage = () => <ServicesOverviewContent />;

export default ServicesPage;
