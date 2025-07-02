// src/lib/testimonials.ts (Refined Error Typing in Catch)
import { fetchGraphQL } from "./graphql";

// --- Type Guard Copied ---
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError { // Use unknown
  return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors);
}
// --- End Type Guard ---

// --- Interfaces ---
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
export interface Testimonial {
    id: string; title: string; content?: string;
    testimonialDetails: { authorName: string | null; authorTitle: string | null; quoteText: string | null; }; // Uses authorTitle
    featuredImage?: { node?: MediaItem; };
}
interface TestimonialsData { testimonials: { nodes: Testimonial[]; } }
// --- End Interfaces ---

const GET_TESTIMONIALS_QUERY = ` query GetTestimonials { testimonials(first: 5, where: {orderby: {field: DATE, order: DESC}}) { nodes { id title(format: RENDERED) content(format: RENDERED) testimonialDetails { authorName authorTitle quoteText } featuredImage { node { sourceUrl(size: THUMBNAIL) altText mediaDetails { height width } } } } } } `;

export async function getTestimonials(): Promise<Testimonial[]> {
    try {
        const data = await fetchGraphQL(GET_TESTIMONIALS_QUERY) as TestimonialsData;
        return data?.testimonials?.nodes ?? [];
    } catch (error: unknown) { // <<< Use unknown type for error
        // --- Refined Catch Block ---
        let errorMessage = "An unknown error occurred fetching testimonials.";
        if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        else if (error instanceof Error) { errorMessage = error.message; }
        console.error("Failed to fetch testimonials:", errorMessage, error);
        // --------------------------
        return [];
    }
}