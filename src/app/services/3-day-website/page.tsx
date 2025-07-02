
import { Metadata } from 'next';
import { getTestimonials } from '@/lib/testimonials';
import ThreeDayWebsiteClientPage from '@/components/ThreeDayWebsiteClientPage';

export const metadata: Metadata = {
  title: 'Get a Website or Landing Page in 3 Days | Vispaico',
};

const ThreeDayWebsitePage = async () => {
  const testimonials = await getTestimonials();
  const testimonial = testimonials.length > 0 ? testimonials[0] : null;

  return <ThreeDayWebsiteClientPage testimonial={testimonial} />;
};

export default ThreeDayWebsitePage;
