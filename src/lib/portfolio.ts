// src/lib/portfolio.ts (Re-adding 'content' to PortfolioItem Interface)
import { fetchGraphQL } from "./graphql";

// Interfaces
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
interface PortfolioCategory { id: string; name: string; slug: string; }

// --- Ensure 'content' property is here ---
export interface PortfolioItem {
    id: string;
    title: string;
    slug: string;
    portfolioItemDetails: {
        clientName: string | null;
        projecturl: string | null; // Uses projecturl
        shortSummary: string | null;
    };
    featuredImage?: { node?: MediaItem; };
    portfolioCategories?: { nodes?: PortfolioCategory[]; };
    content?: string; // <<< RE-ADD THIS LINE
}
// ------------------------------------

// Type Guard for Errors
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError { return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors); }

// Connection/Pagination Types
interface PortfolioConnection { nodes: PortfolioItem[]; pageInfo: { endCursor: string | null; hasNextPage: boolean; }; }
interface PortfolioDataPaged { portfolioItems: PortfolioConnection }

// Query - No changes needed here
const GET_PORTFOLIO_ITEMS_PAGED_QUERY = ` query GetPortfolioItemsPaged($first: Int, $after: String) { portfolioItems(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) { pageInfo { endCursor hasNextPage } nodes { id title(format: RENDERED) slug portfolioItemDetails { clientName projecturl shortSummary } featuredImage { node { sourceUrl(size: LARGE) altText mediaDetails { height width } } } portfolioCategories { nodes { id name slug } } } } } `;


// Fetch All Function (Pagination Loop) - No changes needed here
export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
    let allItems: PortfolioItem[] = []; let hasNextPage = true; /* ... rest of loop ... */
    while (hasNextPage) { try { /* ... fetch ... */ } catch (error: unknown) { /* ... error handling ... */ } } return allItems; }

// Fetch Featured Items Function - No changes needed here
export async function getFeaturedPortfolioItems(count: number = 3): Promise<PortfolioItem[]> {
     try { /* ... fetch ... */ } catch (error: unknown) { /* ... error handling ... */ return []; } }