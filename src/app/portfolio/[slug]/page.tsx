// src/app/portfolio/[slug]/page.tsx (Final Version - Syntax Checked)
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchGraphQL } from '@/lib/graphql';
import { PortfolioItem } from '@/lib/portfolio'; // Uses projecturl
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useCursor } from '@/context/CursorContext';

library.add(faArrowUpRightFromSquare, faArrowLeft);

// Query using confirmed 'projecturl'
const GET_SINGLE_PORTFOLIO_ITEM_QUERY = `
  query GetSinglePortfolioItem($id: ID!, $idType: PortfolioItemIdType!) {
    portfolioItem(id: $id, idType: $idType) {
      id
      title(format: RENDERED)
      slug
      content(format: RENDERED) # Ensure content is fetched
      portfolioItemDetails { clientName projecturl shortSummary } # Use projecturl
      featuredImage { node { sourceUrl(size: LARGE) altText mediaDetails { height width } } }
      portfolioCategories { nodes { id name slug uri } }
    }
  }
`;

// Type Guard for GraphQL errors
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError {
  return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors);
}

// Fetching Function for Single Item
async function getSinglePortfolioItem(slug: string): Promise<PortfolioItem | null> {
    try {
        const data = await fetchGraphQL(
            GET_SINGLE_PORTFOLIO_ITEM_QUERY,
            { id: slug, idType: 'SLUG' }
        ) as { portfolioItem: PortfolioItem | null };
        // Add check here for data structure before returning
        if (data && data.portfolioItem) {
            return data.portfolioItem;
        }
        return null;
    } catch (error: unknown) {
        let errorMessage = "An unknown fetch error occurred.";
        if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        else if (error instanceof Error) { errorMessage = error.message; }
        console.error(`Failed to fetch portfolio item by slug "${slug}". Error:`, errorMessage, error);
        return null;
    }
}


// The Page Component (Client Component)
export default function SinglePortfolioItemPage() {
    const params = useParams();
    const slug = typeof params?.slug === 'string' ? params.slug : ''; // Get slug safely
    const [item, setItem] = useState<PortfolioItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    // Fetch data on client side
    useEffect(() => {
        if (!slug) { setLoading(false); console.log("Slug not ready for fetch."); return; };
        let isMounted = true;
        const loadData = async () => {
            if (!isMounted) return; setLoading(true); setError(null);
            console.log(`Fetching data for slug: ${slug}`);
            const fetchedItem = await getSinglePortfolioItem(slug);
            if (isMounted) {
                 if (!fetchedItem) { console.error("Item not found after fetch."); setError("Project not found."); setItem(null); }
                 else { setItem(fetchedItem); }
                 setLoading(false);
            }
        };
        loadData();
        return () => { isMounted = false; }; // Cleanup
    }, [slug]); // Dependency array

    // Conditional Rendering for Loading/Error states
    if (loading) { return <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center">Loading project details...</div>; }
    if (error || !item) { return <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center"> <p className='mb-4'>{error || 'Project could not be loaded.'}</p> <Link href="/portfolio" className='underline text-indigo-600 dark:text-indigo-400'>Return to Portfolio</Link> </div>; }

    // Data is loaded, proceed with rendering
    const details = item.portfolioItemDetails; // Safe to access item now

    // --- Clean Return Statement ---
    return (
        <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen">
            {/* Back Link */}
            <Link
                href="/portfolio"
                className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
                 <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
                 Back to Portfolio
            </Link>

            {/* Title and Client */}
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">{item.title ?? 'Portfolio Item'}</h1>
             {details?.clientName && ( <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">Client: {details.clientName}</p> )}

             {/* Categories and Live Link */}
             <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-sm">
                 {item.portfolioCategories?.nodes && item.portfolioCategories.nodes.length > 0 && (
                     <div className="flex items-center gap-2">
                         <span className="font-semibold text-gray-700 dark:text-gray-300">Categories:</span>
                         {item.portfolioCategories.nodes.map((cat) => (
                             <span key={cat.id} className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                                 {cat?.name ?? ''}
                             </span>
                         ))}
                     </div>
                 )}
                  {details?.projecturl && (
                     <a
                        href={details.projecturl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                     >
                         Visit Live Site
                         <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1.5 h-3 w-3" />
                     </a>
                  )}
             </div>

            {/* Featured Image */}
            {item.featuredImage?.node?.sourceUrl && (
                <div className="mb-8 md:mb-12 aspect-video relative overflow-hidden rounded-lg shadow-md">
                    <Image
                        src={item.featuredImage.node.sourceUrl}
                        alt={item.featuredImage.node.altText || item.title || ''} // Final alt fix
                        fill
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Main Content (Ensure content field exists in interface/query) */}
            {item.content ? (
                <div
                    className="prose prose-lg dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                />
             ) : (
                <p className="text-gray-500 italic mt-8">No detailed description provided for this project.</p>
             )}
        </div> // End Container Div
    ); // End Return
} // End Component Function

// Removed generateStaticParams