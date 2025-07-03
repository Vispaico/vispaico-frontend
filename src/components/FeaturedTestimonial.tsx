import Image from 'next/image';
import testimonials from '@/data/testimonials.json';

// This component specifically features the RiverCity testimonial (the 3rd entry in our data file).
export default function FeaturedTestimonial() {
  // Get the third testimonial (index 2) from our data.
  const testimonial = testimonials[2];

  if (!testimonial) {
    return null; // Don't render anything if the testimonial isn't found
  }

  return (
    <section className="bg-white dark:bg-slate-800 py-12">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <Image
          src={testimonial.imageSrc}
          alt={`Photo of ${testimonial.name}`}
          width={80}
          height={80}
          className="rounded-full object-cover mx-auto mb-4"
        />
        <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">
          <p>&quot;{testimonial.quote}&quot;</p>
        </blockquote>
        <cite className="block mt-4 not-italic">
          <span className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</span>
          <span className="text-gray-600 dark:text-gray-400">, {testimonial.title}</span>
        </cite>
      </div>
    </section>
  );
}