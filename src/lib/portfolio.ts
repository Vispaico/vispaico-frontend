// src/lib/portfolio.ts (Implementing Pagination)
import { fetchGraphQL } from "./graphql";

// Interfaces (MediaItem, PortfolioCategory, PortfolioItem - unchanged, uses projecturl)
interface MediaItem { sourceUrl: string; altText?: string; mediaDetails?: { height?: number; width?: number; }; }
interface PortfolioCategory { id: string; name: string; slug: string; }
export interface PortfolioItem {
    id: string;
    title: string;
    slug: string;
    portfolioItemDetails: { clientName: string | null; projecturl: string | null; shortSummary: string | null; };
    featuredImage?: { node?: MediaItem; };
    portfolioCategories?: { nodes?: PortfolioCategory[]; };
    // content?: string;
}

// --- Updated GraphQL response structure for pagination ---
interface PortfolioConnection { // Represents the 'connection' type in WPGraphQL
    nodes: PortfolioItem[];
    pageInfo: {
        endCursor: string | null; // ID of the last item fetched
        hasNextPage: boolean;     // Is there another page?
    };
}
interface PortfolioDataPaged {
    portfolioItems: PortfolioConnection // Expect a connection type now
}
// --- End Pagination Types ---


// --- GraphQL Query - Updated for pagination ---
const GET_PORTFOLIO_ITEMS_PAGED_QUERY = `
  # Add $first and $after variables
  query GetPortfolioItemsPaged($first: Int, $after: String) {
    # Use the variables in the portfolioItems query
    portfolioItems(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
      # Request pageInfo alongside nodes
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        # Same fields as before
        id
        title(format: RENDERED)
        slug
        portfolioItemDetails { clientName projecturl shortSummary }
        featuredImage { node { sourceUrl(size: LARGE) altText mediaDetails { height width } } }
        portfolioCategories { nodes { id name slug } }
      }
    }
  }
`;

// --- Updated Fetching function with Pagination Loop ---
export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
    let allItems: PortfolioItem[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;
    const fetchCount = 100; // Fetch 100 items per request (adjust if needed)

    console.log("Starting portfolio fetch loop...");

    while (hasNextPage) {
        try {
            const variables = {
                 first: fetchCount,
                 after: endCursor // Use null for the first request
            };
            console.log(`Fetching portfolio page with variables:`, variables);
            const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;

            const items = data?.portfolioItems?.nodes ?? [];
            const pageInfo = data?.portfolioItems?.pageInfo;

            console.log(` -> Received ${items.length} items.`);

            if (items.length > 0) {
                allItems = allItems.concat(items); // Add fetched items to the list
            }

            // Update pagination info for the next loop iteration
            hasNextPage = pageInfo?.hasNextPage ?? false;
            endCursor = pageInfo?.endCursor ?? null;

            console.log(` -> hasNextPage: ${hasNextPage}, endCursor: ${endCursor}`);

            // Safety break for infinite loops (optional, remove in production if confident)
            // if (allItems.length > 500) {
            //     console.warn("Breaking portfolio fetch loop after 500 items.");
            //     break;
            // }

        } catch (error) {
            console.error("Failed during portfolio item pagination fetch:", (error as any)?.source?.errors || error);
            hasNextPage = false; // Stop loop on error
        }
    }

    console.log(`Finished fetching. Total portfolio items: ${allItems.length}`);
    return allItems;
}

// Optional: Keep a function to fetch only a few items (like for homepage)
export async function getFeaturedPortfolioItems(count: number = 3): Promise<PortfolioItem[]> {
     try {
        const variables = { first: count }; // Use the count directly
        const data = await fetchGraphQL(GET_PORTFOLIO_ITEMS_PAGED_QUERY, variables) as PortfolioDataPaged;
        return data?.portfolioItems?.nodes ?? [];
    } catch (error) {
        console.error(`Failed to fetch ${count} portfolio items. GraphQL errors:`, (error as any)?.source?.errors || error);
        return [];
    }
}