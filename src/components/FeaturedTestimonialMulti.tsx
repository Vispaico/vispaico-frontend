import Image from 'next/image';
import testimonials from '@/data/testimonials.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// This component specifically features the Vispea testimonial (the 7th entry in our data file).
export default function FeaturedTestimonialMulti() {
  // Get the sevenvth testimonial (index 6) from our data.
  const testimonial = testimonials[6];

  if (!testimonial) {
    return null; // Don't render anything if the testimonial isn't found
  }

  return (
    <section className="bg-transparent py-8">
      <div className="group relative container mx-auto px-4 max-w-md text-center border border-gray-600 rounded-lg p-6">
        {/* Mobile default state: visible gradient border */}
        <div className="md:hidden absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
            <div className="bg-slate-800 h-full w-full rounded-lg"></div>
        </div>
        {/* Desktop hover state: animated gradient border */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
            <div className="bg-slate-800 h-full w-full rounded-lg"></div>
        </div>
        <div className="relative z-10">
            <Image
              src={testimonial.imageSrc}
              alt={`Photo of ${testimonial.name}`}
              width={60}
              height={60}
              className="rounded-full object-cover mx-auto mb-3"
            />
            <div className="flex justify-center text-yellow-400 mb-3">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <blockquote className="text-lg md:text-xl font-medium text-gray-200">
              <p>&quot;{testimonial.quote}&quot;</p>
            </blockquote>
            <cite className="block mt-3 not-italic">
              <span className="font-semibold text-white">{testimonial.name}</span>
              <span className="text-gray-400">, {testimonial.title}</span>
            </cite>
        </div>
      </div>
    </section>
  );
}
