import Image from 'next/image';
import testimonials from '@/data/testimonials.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// This component specifically features the RiverCity testimonial (the 3rd entry in our data file).
export default function FeaturedTestimonial() {
  // Get the third testimonial (index 2) from our data.
  const testimonial = testimonials[2];

  if (!testimonial) {
    return null; // Don't render anything if the testimonial isn't found
  }

  return (
    <section className="w-full">
      <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)] text-center">
        <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-orange-500/40 opacity-20" />
        <div className="relative z-10">
          <Image
            src={testimonial.imageSrc}
            alt={`Photo of ${testimonial.name}`}
            width={60}
            height={60}
            className="rounded-full object-cover mx-auto mb-3"
          />
          <div className="flex justify-center text-orange-400 mb-3">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <blockquote className="text-lg md:text-xl font-medium text-[var(--text-primary)]">
            <p>&quot;{testimonial.quote}&quot;</p>
          </blockquote>
          <cite className="block mt-3 not-italic text-[var(--text-secondary)]">
            <span className="font-semibold text-[var(--text-primary)]">{testimonial.name}</span>
            <span className="text-[var(--text-muted)]">, {testimonial.title}</span>
          </cite>
        </div>
      </div>
    </section>
  );
}