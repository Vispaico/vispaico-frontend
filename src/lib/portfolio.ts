// src/lib/portfolio.ts (Cleaned Query String)
import { fetchGraphQL } from "./graphql";

// Interfaces
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
interface PortfolioCategory { id: string; name: string; slug: string; }
export interface PortfolioItem {
    id: string;
    title: string;
    slug: string;
    portfolioItemDetails: { clientName: string | null; projecturl: string | null; shortSummary: string | null; }; // uses projecturl
    featuredImage?: { node?: MediaItem; };
    portfolioCategories?: { nodes?: PortfolioCategory[]; };
}

// Type Guard for Errors
interface GraphQLError { message: string; }
interface GraphQLResponseError { errors: GraphQLError[]; }
function isGraphQLResponseError(obj: any): obj is GraphQLResponseError {
  return obj && Array.isArray(obj.errors) && obj.errors.length > 0;
}

// Connection/Pagination Types
interface PortfolioConnection { nodes: PortfolioItem[]; pageInfo: { endCursor: string | null; hasNextPage: boolean; }; }
interface PortfolioDataPaged { portfolioItems: PortfolioConnection }

// --- GraphQL Query for Pagination (Cleaned) ---
// Removed any potential stray characters or comments inside
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
`; // <<< Ensure clean end


// --- Fetch All Function (Pagination Loop) ---
export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
    let allItems: PortfolioItem[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;
    const fetchCount = 100;
    // console.log("Starting portfolio fetch loop..."); // Keep logs commented unless debugging
    while (hasNextPage) {
        try {
            const variables = { first: fetchCount, after: endCursor };
            // console.log(`Fetching portfolio page with variables:`, variables);
            const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
            const items = data?.portfolioItems?.nodes ?? [];
            const pageInfo = data?.portfolioItems?.pageInfo;
            // console.log(` -> Received ${items.length} items.`);
            if (items.length > 0) { allItems = allItems.concat(items); }
            hasNextPage = pageInfo?.hasNextPage ?? false;
            endCursor = pageInfo?.endCursor ?? null;
            // console.log(` -> hasNextPage: ${hasNextPage}, endCursor: ${endCursor}`);
        } catch (error) {
            let errorMessage = "An unknown error occurred.";
            if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
            else if (error instanceof Error) { errorMessage = error.message; }
            console.error("Failed during portfolio item pagination fetch:", errorMessage, error);
            hasNextPage = false;
        }
    }
    // console.log(`Finished fetching. Total portfolio items: ${allItems.length}`);
    return allItems;
}

// --- Fetch Featured Items Function ---
export async function getFeaturedPortfolioItems(count: number = 3): Promise<PortfolioItem[]> {
     try {
        const variables = { first: count, after: null }; // Ensure 'after' is null for first page
        const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
        return data?.portfolioItems?.nodes ?? [];
    } catch (error) {
        let errorMessage = "An unknown error occurred.";
        if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        else if (error instanceof Error) { errorMessage = error.message; }
        console.error(`Failed to fetch ${count} portfolio items:`, errorMessage, error);
        return [];
    }
}