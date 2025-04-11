// src/lib/portfolio.ts (Refined Error Typing in Catch)
import { fetchGraphQL } from "./graphql";

// --- Interfaces ---
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
interface PortfolioCategory { id: string; name: string; slug: string; }
export interface PortfolioItem {
    id: string; title: string; slug: string;
    portfolioItemDetails: { clientName: string | null; projecturl: string | null; shortSummary: string | null; }; // Uses projecturl
    featuredImage?: { node?: MediaItem; };
    portfolioCategories?: { nodes?: PortfolioCategory[]; };
}
interface PortfolioConnection { nodes: PortfolioItem[]; pageInfo: { endCursor: string | null; hasNextPage: boolean; }; }
interface PortfolioDataPaged { portfolioItems: PortfolioConnection }
// --- End Interfaces ---

// --- Type Guard for Errors ---
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError { // Use unknown
  return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors);
}
// --- End Type Guard ---

const GET_PORTFOLIO_ITEMS_PAGED_QUERY = ` query GetPortfolioItemsPaged($first: Int, $after: String) { portfolioItems(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) { pageInfo { endCursor hasNextPage } nodes { id title(format: RENDERED) slug portfolioItemDetails { clientName projecturl shortSummary } featuredImage { node { sourceUrl(size: LARGE) altText mediaDetails { height width } } } portfolioCategories { nodes { id name slug } } } } } `;

// --- Fetch All Function (Pagination Loop) ---
export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
    let allItems: PortfolioItem[] = []; let hasNextPage = true; let endCursor: string | null = null; const fetchCount = 100;
    while (hasNextPage) {
        try {
            const variables = { first: fetchCount, after: endCursor };
            const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
            const items = data?.portfolioItems?.nodes ?? [];
            const pageInfo = data?.portfolioItems?.pageInfo;
            if (items.length > 0) { allItems = allItems.concat(items); }
            hasNextPage = pageInfo?.hasNextPage ?? false;
            endCursor = pageInfo?.endCursor ?? null;
        } catch (error: unknown) { // <<< Use unknown type for error
            // --- Refined Catch Block ---
            let errorMessage = "An unknown error occurred during portfolio pagination fetch.";
            if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
            else if (error instanceof Error) { errorMessage = error.message; }
            console.error("Failed during portfolio item pagination fetch:", errorMessage, error);
            // --------------------------
            hasNextPage = false;
        }
    }
    console.log(`Finished fetching. Total portfolio items: ${allItems.length}`);
    return allItems;
}

// --- Fetch Featured Items Function ---
export async function getFeaturedPortfolioItems(count: number = 3): Promise<PortfolioItem[]> {
     try {
        const variables = { first: count, after: null };
        const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
        return data?.portfolioItems?.nodes ?? [];
    } catch (error: unknown) { // <<< Use unknown type for error
         // --- Refined Catch Block ---
        let errorMessage = "An unknown error occurred fetching featured portfolio items.";
        if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        else if (error instanceof Error) { errorMessage = error.message; }
        console.error(`Failed to fetch ${count} portfolio items:`, errorMessage, error);
        // --------------------------
        return [];
    }
}