// src/lib/testimonials.ts (Fetch Multiple Testimonials)
import { fetchGraphQL } from "./graphql";

interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }

// Testimonial Interface (no changes needed)
export interface Testimonial {
    id: string;
    title: string;
    content?: string;
    testimonialDetails: {
        authorName: string | null;
        authorTitle: string | null;
        quoteTextShort: string | null;
    };
    featuredImage?: { node?: MediaItem; };
}

// GraphQL response structure
interface TestimonialsData {
    testimonials: {
        nodes: Testimonial[];
    }
}

// --- Query to fetch multiple (e.g., 5) recent testimonials ---
const GET_TESTIMONIALS_QUERY = `
  query GetTestimonials {
    # Adjust 'first: 5' as needed
    testimonials(first: 5, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title(format: RENDERED)
        content(format: RENDERED)
        testimonialDetails {
          authorName
          authorTitle
          # quoteTextShort # Uncomment if using ACF field for quote
        }
        featuredImage {
          node {
            sourceUrl(size: THUMBNAIL) # Keep small size
            altText
            mediaDetails { height width }
          }
        }
      }
    }
  }
`;

// --- Renamed Function to fetch multiple ---
export async function getTestimonials(): Promise<Testimonial[]> {
    try {
        // No variables needed if 'first' is hardcoded in query
        const data = await fetchGraphQL(GET_TESTIMONIALS_QUERY) as TestimonialsData;
        return data?.testimonials?.nodes ?? []; // Return the array
    } catch (error) {
        console.error("Failed to fetch testimonials:", (error as any)?.source?.errors || error);
        return []; // Return empty array on error
    }
}