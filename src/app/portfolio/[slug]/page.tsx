// src/app/portfolio/[slug]/page.tsx (Syntax Checked, Uses projecturl)
"use client"; // Needs to be client component for hooks

import React, { useState, useEffect } from 'react'; // Import React and hooks
import Image from 'next/image';
import Link from 'next/link';
import { fetchGraphQL } from '@/lib/graphql';
import { PortfolioItem } from '@/lib/portfolio'; // Interface uses projecturl
// Use hooks for navigation and params instead of RSC utils
import { useParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useCursor } from '@/context/CursorContext';

library.add(faArrowUpRightFromSquare, faArrowLeft);

// Keep query accessible
const GET_SINGLE_PORTFOLIO_ITEM_QUERY = `
  query GetSinglePortfolioItem($id: ID!, $idType: PortfolioItemIdType!) {
    portfolioItem(id: $id, idType: $idType) {
      id
      title(format: RENDERED)
      slug
      content(format: RENDERED)
      portfolioItemDetails { clientName projecturl shortSummary } # Use projecturl
      featuredImage { node { sourceUrl(size: LARGE) altText mediaDetails { height width } } }
      portfolioCategories { nodes { id name slug uri } }
    }
  }
`;

// Fetching Function (can stay outside component)
async function getSinglePortfolioItem(slug: string): Promise<PortfolioItem | null> {
    try {
        const data = await fetchGraphQL(
            GET_SINGLE_PORTFOLIO_ITEM_QUERY,
            { id: slug, idType: 'SLUG' }
        ) as { portfolioItem: PortfolioItem | null };
        return data?.portfolioItem ?? null;
    } catch (error) {
        console.error(`Failed to fetch portfolio item by slug "${slug}". GraphQL errors:`, (error as any)?.source?.errors || error);
        return null;
    }
}

// --- Page Component is now a Client Component ---
export default function SinglePortfolioItemPage() {
    const params = useParams();
    const router = useRouter();
    // Ensure slug is treated as string, provide fallback if needed
    const slug = typeof params?.slug === 'string' ? params.slug : '';

    const [item, setItem] = useState<PortfolioItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // State for fetch errors

    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        // Only fetch if slug is available
        if (!slug) {
             console.log("Slug not available yet.");
             // Optionally set loading false here if you don't expect slug later
             // setLoading(false);
            return;
        };

        let isMounted = true; // Prevent state update on unmounted component
        const loadData = async () => {
            setLoading(true);
            setError(null); // Clear previous errors
            console.log(`Fetching data for slug: ${slug}`);
            const fetchedItem = await getSinglePortfolioItem(slug);

            if (isMounted) { // Only update state if component is still mounted
                 if (!fetchedItem) {
                    console.error("Portfolio item not found!");
                    setError("Project not found."); // Set error state
                    setItem(null);
                } else {
                    setItem(fetchedItem);
                }
                setLoading(false);
            }
        };

        loadData();

        // Cleanup function
        return () => {
            isMounted = false;
        };
    }, [slug]); // Depend on slug - refetch if slug changes somehow

    // --- Render Loading / Error / Content ---
    if (loading) {
        return <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center">Loading project details...</div>;
    }

    if (error || !item) { // Display error or generic not found
        return <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center">
                    <p className='mb-4'>{error || 'Project could not be loaded.'}</p>
                    <Link href="/portfolio" className='underline text-indigo-600 dark:text-indigo-400'>Return to Portfolio</Link>
                </div>;
    }

    // Item exists, render the details
    const details = item.portfolioItemDetails;

    // --- Make sure return statement is clean ---
    return (
        <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen">
            {/* Back Link */}
            <Link href="/portfolio"
                 className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
                 <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
                 Back to Portfolio
            </Link>

            {/* Title and Client */}
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h1>
             {details?.clientName && ( <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">Client: {details.clientName}</p> )}

             {/* Categories and Live Link */}
             <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-sm">
                 {item.portfolioCategories?.nodes?.length > 0 && (
                     <div className="flex items-center gap-2">
                         <span className="font-semibold text-gray-700 dark:text-gray-300">Categories:</span>
                         {item.portfolioCategories.nodes.map((cat) => (
                             <span key={cat.id} className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                                 {cat.name}
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
                        alt={item.featuredImage.node.altText || item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Main Content */}
            {item.content ? ( <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.content }} /> )
             : ( <p className="text-gray-500 italic mt-8">No detailed description.</p> )}
        </div>
    ); // <<< End Component Return
} // <<< End Component Function

