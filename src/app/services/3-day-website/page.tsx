
import { Metadata } from 'next';
import { getTestimonials } from '@/lib/testimonials';
import ThreeDayWebsiteClientPage from '@/components/ThreeDayWebsiteClientPage';

export const metadata: Metadata = {
  title: 'Get a Website or Landing Page in 3 Days | Vispaico',
};

const ThreeDayWebsitePage = async () => {
  const testimonials = await getTestimonials();
  

  return <ThreeDayWebsiteClientPage testimonials={testimonials} />;
};

export default ThreeDayWebsitePage;
