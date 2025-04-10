// src/lib/graphql.ts

export async function fetchGraphQL(query: string, variables?: object) {
    const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;
  
    if (!endpoint) {
      throw new Error("WORDPRESS_GRAPHQL_ENDPOINT is not defined. Check your .env.local file.");
    }
  
    // console.log('Fetching from:', endpoint); // Uncomment for debugging if needed
  
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    // Add any other headers like Authorization if needed later
  
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
        // Next.js specific: configure caching and revalidation
        // 'force-cache' is good for static data like site title
        // 'no-store' forces fresh data every time (use for dynamic content)
        // { next: { revalidate: 60 } } checks for updates every 60 seconds
        next: { revalidate: 60 },
      });
  
      const json = await res.json();
  
      if (json.errors) {
        console.error("GraphQL Errors:", JSON.stringify(json.errors, null, 2));
        // Consider throwing a more specific error or handling different error types
        throw new Error(`GraphQL Error: ${json.errors[0]?.message || 'Unknown error'}`);
      }
  
      // console.log('Received data:', JSON.stringify(json.data, null, 2)); // Uncomment for debugging
      return json.data;
  
    } catch (error) {
      console.error("Failed to fetch GraphQL:", error);
      // Re-throw the error or return a specific error structure
      throw new Error(`Network or GraphQL fetch failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }