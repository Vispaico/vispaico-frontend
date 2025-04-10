// src/lib/testimonials.ts (Refined Error Typing, Checked Interfaces)
import { fetchGraphQL } from "./graphql";

// --- Type Guard Copied ---
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError {
  return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors);
}
// --- End Type Guard ---

// --- Ensure Interfaces are fully defined ---
interface MediaItem {
    sourceUrl: string;
    altText?: string;
    mediaDetails?: { height?: number; width?: number; };
}
export interface Testimonial {
    id: string;
    title: string;
    content?: string;
    testimonialDetails: { authorName: string | null; authorTitle: string | null; quoteTextShort: string | null; };
    featuredImage?: { node?: MediaItem; };
}
interface TestimonialsData { testimonials: { nodes: Testimonial[]; } }
// --- End Interfaces ---

const GET_TESTIMONIALS_QUERY = ` query GetTestimonials { testimonials(first: 5, where: {orderby: {field: DATE, order: DESC}}) { nodes { id title(format: RENDERED) content(format: RENDERED) testimonialDetails { authorName authorTitle } featuredImage { node { sourceUrl(size: THUMBNAIL) altText mediaDetails { height width } } } } } } `;

export async function getTestimonials(): Promise<Testimonial[]> {
    try {
        const data = await fetchGraphQL(GET_TESTIMONIALS_QUERY) as TestimonialsData;
        return data?.testimonials?.nodes ?? [];
    } catch (error) {
        // --- Refined Catch Block ---
        let errorMessage = "An unknown error occurred.";
        if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        else if (error instanceof Error) { errorMessage = error.message; }
        console.error("Failed to fetch testimonials:", errorMessage, error);
        // --------------------------
        return [];
    }
}