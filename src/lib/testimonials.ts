// src/lib/testimonials.ts (Improved Error Typing)
import { fetchGraphQL } from "./graphql";

// --- Copied Type Guard ---
interface GraphQLError { message: string; locations?: any[]; path?: string[]; extensions?: any; }
interface GraphQLResponseError { errors: GraphQLError[]; }
function isGraphQLResponseError(obj: any): obj is GraphQLResponseError {
  return obj && Array.isArray(obj.errors) && obj.errors.length > 0;
}
// --- End Type Guard ---

interface MediaItem { /* ... */ }
export interface Testimonial { /* ... uses authorTitle ... */ }
interface TestimonialsData { testimonials: { nodes: Testimonial[]; } }

const GET_TESTIMONIALS_QUERY = ` query GetTestimonials { testimonials(first: 5, where: {orderby: {field: DATE, order: DESC}}) { nodes { id title(format: RENDERED) content(format: RENDERED) testimonialDetails { authorName authorTitle } featuredImage { node { sourceUrl(size: THUMBNAIL) altText mediaDetails { height width } } } } } } `;

export async function getTestimonials(): Promise<Testimonial[]> {
    try {
        const data = await fetchGraphQL(GET_TESTIMONIALS_QUERY) as TestimonialsData;
        return data?.testimonials?.nodes ?? [];
    } catch (error) {
        // --- Improved Error Logging ---
        let errorMessage = "An unknown error occurred.";
        if (isGraphQLResponseError(error)) {
             errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`;
        } else if (error instanceof Error) {
             errorMessage = error.message;
        }
        console.error("Failed to fetch testimonials:", errorMessage, error);
        // --------------------------
        return [];
    }
}

// --- Include interface definitions ---
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
export interface Testimonial { id: string; title: string; content?: string; testimonialDetails: { authorName: string | null; authorTitle: string | null; quoteTextShort: string | null; }; featuredImage?: { node?: MediaItem; }; }
// --- End interface definitions ---