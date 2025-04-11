// src/lib/portfolio.ts (Reverting to state before 'content' field attempt - Task 46)
import { fetchGraphQL } from "./graphql";

// Interfaces
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
interface PortfolioCategory { id: string; name: string; slug: string; }
export interface PortfolioItem {
    id: string;
    title: string;
    slug: string;
    portfolioItemDetails: {
        clientName: string | null;
        projecturl: string | null; // Uses projecturl (lowercase)
        shortSummary: string | null;
    };
    featuredImage?: { node?: MediaItem; };
    portfolioCategories?: { nodes?: PortfolioCategory[]; };
    // NO 'content' field defined here in this version
}

// Type Guard for Errors
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError {
  return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors);
}

// Connection/Pagination Types
interface PortfolioConnection { nodes: PortfolioItem[]; pageInfo: { endCursor: string | null; hasNextPage: boolean; }; }
interface PortfolioDataPaged { portfolioItems: PortfolioConnection }

// GraphQL Query for Pagination (Uses projecturl)
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
          projecturl # Use lowercase
          shortSummary
        }
        featuredImage { node { sourceUrl(size: LARGE) altText mediaDetails { height width } } }
        portfolioCategories { nodes { id name slug } }
      }
    }
  }
`;

// Fetch All Function (Pagination Loop)
export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
    let allItems: PortfolioItem[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;
    const fetchCount = 100;
    while (hasNextPage) {
        try {
            const variables = { first: fetchCount, after: endCursor };
            const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged; // Use fetchGraphQL
            const items = data?.portfolioItems?.nodes ?? [];
            const pageInfo = data?.portfolioItems?.pageInfo;
            if (items.length > 0) { allItems = allItems.concat(items); }
            hasNextPage = pageInfo?.hasNextPage ?? false;
            endCursor = pageInfo?.endCursor ?? null;
        } catch (error: unknown) {
            let errorMessage = "An unknown error occurred.";
            if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
            else if (error instanceof Error) { errorMessage = error.message; }
            console.error("Failed during portfolio item pagination fetch:", errorMessage, error);
            hasNextPage = false;
        }
    }
    console.log(`Finished fetching. Total portfolio items: ${allItems.length}`);
    return allItems;
}

// Fetch Featured Items Function
export async function getFeaturedPortfolioItems(count: number = 3): Promise<PortfolioItem[]> {
     try {
        const variables = { first: count, after: null };
        const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged; // Use fetchGraphQL
        return data?.portfolioItems?.nodes ?? [];
    } catch (error: unknown) {
        let errorMessage = "An unknown error occurred.";
        if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        else if (error instanceof Error) { errorMessage = error.message; }
        console.error(`Failed to fetch ${count} portfolio items:`, errorMessage, error);
        return [];
    }
}