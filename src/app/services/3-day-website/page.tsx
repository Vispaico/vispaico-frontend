
import { Metadata } from 'next';
import ThreeDayWebsiteClientPage from '@/components/ThreeDayWebsiteClientPage';

export const metadata: Metadata = {
  title: 'Get a Website or Landing Page in 3 Days | Vispaico',
};

const ThreeDayWebsitePage = async () => {
  return <ThreeDayWebsiteClientPage />;
};

export default ThreeDayWebsitePage;
