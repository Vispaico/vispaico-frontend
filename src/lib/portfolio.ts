// src/lib/portfolio.ts (FINAL Syntax Clean + Robust Error Handling)
import { fetchGraphQL } from "./graphql";

// --- Interfaces ---
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
interface PortfolioCategory { id: string; name: string; slug: string; }
export interface PortfolioItem {
    id: string; title: string; slug: string;
    portfolioItemDetails: { clientName: string | null; projecturl: string | null; shortSummary: string | null; };
    featuredImage?: { node?: MediaItem; };
    portfolioCategories?: { nodes?: PortfolioCategory[]; };
    content?: string; // Keep content field from previous fix
}
interface PortfolioConnection { nodes: PortfolioItem[]; pageInfo: { endCursor: string | null; hasNextPage: boolean; }; }
interface PortfolioDataPaged { portfolioItems: PortfolioConnection }
// --- End Interfaces ---

// --- Type Guard for GraphQL errors ---
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; } // Expected structure from WPGraphQL on query errors
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError {
  return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors);
}
// --- End Type Guard ---


// --- PAGED QUERY - Ensure no stray characters / comments ---
const GET_PORTFOLIO_ITEMS_PAGED_QUERY = `
  query GetPortfolioItemsPaged($first: Int, $after: String) {
    portfolioItems(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        title(format: RENDERED)
        slug
        portfolioItemDetails {
          clientName
          projecturl
          shortSummary
        }
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            altText
            mediaDetails {
               height
               width
            }
          }
        }
        portfolioCategories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`; // <<< Make sure final backtick is clean


// --- Fetch All Function ---
export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
    let allItems: PortfolioItem[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;
    const fetchCount = 100;

    while (hasNextPage) {
        try {
            const variables = { first: fetchCount, after: endCursor };
            const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
            const items = data?.portfolioItems?.nodes ?? [];
            const pageInfo = data?.portfolioItems?.pageInfo;
            if (items.length > 0) { allItems = allItems.concat(items); }
            hasNextPage = pageInfo?.hasNextPage ?? false;
            endCursor = pageInfo?.endCursor ?? null;
        } catch (error: unknown) {
             // --- Refined Error Handling ---
             console.error("Error during portfolio pagination fetch:", error); // Log raw error
             let errorMessage = "An unknown error occurred during pagination.";
             // Check if it has a message property directly
             if (error instanceof Error) { errorMessage = error.message; }
             // Check if it's a WPGraphQL structured error (AFTER checking basic Error)
             else if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
             console.error("Refined Error Message:", errorMessage);
             // --------------------------
             hasNextPage = false; // Stop loop on ANY error
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
    } catch (error: unknown) {
        // --- Refined Error Handling ---
        console.error(`Error fetching ${count} portfolio items:`, error); // Log raw error
        let errorMessage = "An unknown error occurred fetching featured items.";
        if (error instanceof Error) { errorMessage = error.message; }
        else if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        console.error("Refined Error Message:", errorMessage);
        // --------------------------
        return []; // Return empty on error
    }
}