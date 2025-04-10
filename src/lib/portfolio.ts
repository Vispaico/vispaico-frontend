// src/lib/portfolio.ts (Improved Error Typing)
import { fetchGraphQL } from "./graphql";

interface MediaItem { /* ... */ }
interface PortfolioCategory { /* ... */ }
export interface PortfolioItem { /* ... uses projecturl ... */ }
interface PortfolioDataPaged { portfolioItems: { nodes: PortfolioItem[]; pageInfo: { endCursor: string | null; hasNextPage: boolean; }; } }

const GET_PORTFOLIO_ITEMS_PAGED_QUERY = ` query GetPortfolioItemsPaged($first: Int, $after: String) { /* ... query using projecturl ... */ } `;

// Type guard for GraphQL errors structure
interface GraphQLError { message: string; locations?: any[]; path?: string[]; extensions?: any; }
interface GraphQLResponseError { errors: GraphQLError[]; }
function isGraphQLResponseError(obj: any): obj is GraphQLResponseError {
  return obj && Array.isArray(obj.errors) && obj.errors.length > 0;
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
    let allItems: PortfolioItem[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;
    const fetchCount = 100;
    console.log("Starting portfolio fetch loop...");
    while (hasNextPage) {
        try {
            const variables = { first: fetchCount, after: endCursor };
            console.log(`Fetching portfolio page with variables:`, variables);
            const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
            const items = data?.portfolioItems?.nodes ?? [];
            const pageInfo = data?.portfolioItems?.pageInfo;
            console.log(` -> Received ${items.length} items.`);
            if (items.length > 0) { allItems = allItems.concat(items); }
            hasNextPage = pageInfo?.hasNextPage ?? false;
            endCursor = pageInfo?.endCursor ?? null;
            console.log(` -> hasNextPage: ${hasNextPage}, endCursor: ${endCursor}`);
        } catch (error) {
            // --- Improved Error Logging ---
            let errorMessage = "An unknown error occurred.";
            if (isGraphQLResponseError(error)) {
                 errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`;
            } else if (error instanceof Error) {
                 errorMessage = error.message;
            }
            console.error("Failed during portfolio item pagination fetch:", errorMessage, error);
            // --------------------------
            hasNextPage = false;
        }
    }
    console.log(`Finished fetching. Total portfolio items: ${allItems.length}`);
    return allItems;
}

export async function getFeaturedPortfolioItems(count: number = 3): Promise<PortfolioItem[]> {
     try {
        const variables = { first: count };
        const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
        return data?.portfolioItems?.nodes ?? [];
    } catch (error) {
         // --- Improved Error Logging ---
        let errorMessage = "An unknown error occurred.";
        if (isGraphQLResponseError(error)) {
             errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`;
        } else if (error instanceof Error) {
             errorMessage = error.message;
        }
        console.error(`Failed to fetch ${count} portfolio items:`, errorMessage, error);
        // --------------------------
        return [];
    }
}

// --- Include interface definitions ---
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
interface PortfolioCategory { id: string; name: string; slug: string; }
export interface PortfolioItem { id: string; title: string; slug: string; portfolioItemDetails: { clientName: string | null; projecturl: string | null; shortSummary: string | null; }; featuredImage?: { node?: MediaItem; }; portfolioCategories?: { nodes?: PortfolioCategory[]; }; }
// --- End interface definitions ---