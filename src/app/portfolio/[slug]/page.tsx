// src/app/portfolio/[slug]/page.tsx (Restore from end of Task 45/Start of Task 49)
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

// Type Guard for GraphQL errors
interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError {
  return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors);
}

async function getSinglePortfolioItem(slug: string): Promise<PortfolioItem | null> {
    try {
        const data = await fetchGraphQL(
            GET_SINGLE_PORTFOLIO_ITEM_QUERY,
            { id: slug, idType: 'SLUG' }
        ) as { portfolioItem: PortfolioItem | null };
        return data?.portfolioItem ?? null;
    } catch (error: unknown) { // Use unknown type
        let errorMessage = "An unknown fetch error occurred.";
        if (isGraphQLResponseError(error)) { errorMessage = `GraphQL Error(s): ${error.errors.map(e => e.message).join(', ')}`; }
        else if (error instanceof Error) { errorMessage = error.message; }
        console.error(`Failed to fetch portfolio item by slug "${slug}". Error:`, errorMessage, error);
        return null;
    }
}

export default function SinglePortfolioItemPage() {
    const params = useParams();
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    const [item, setItem] = useState<PortfolioItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        if (!slug) { setLoading(false); return; };
        let isMounted = true;
        const loadData = async () => {
            setLoading(true); setError(null);
            const fetchedItem = await getSinglePortfolioItem(slug);
            if (isMounted) {
                 if (!fetchedItem) { setError("Project not found."); setItem(null); }
                 else { setItem(fetchedItem); }
                 setLoading(false);
            }
        };
        loadData();
        return () => { isMounted = false; };
    }, [slug]);

    if (loading) { return <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center">Loading project details...</div>; }
    if (error || !item) { return <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center"> <p className='mb-4'>{error || 'Project could not be loaded.'}</p> <Link href="/portfolio" className='underline text-indigo-600 dark:text-indigo-400'>Return to Portfolio</Link> </div>; }

    const details = item.portfolioItemDetails;

    return (
        <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen">
            {/* Back Link */}
            <Link href="/portfolio" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                 <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" /> Back to Portfolio
            </Link>
            {/* Title and Client */}
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h1>
             {details?.clientName && ( <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">Client: {details.clientName}</p> )}
             {/* Categories and Live Link */}
             <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-sm">
                 {/* --- THIS IS THE LINE TO MODIFY IN STEP 2 --- */}
                 {item.portfolioCategories?.nodes && item.portfolioCategories.nodes.length > 0 && (
                 // ----------------------------------------------
                     <div className="flex items-center gap-2">
                         <span className="font-semibold text-gray-700 dark:text-gray-300">Categories:</span>
                         {/* This map needs the check applied in Step 2 */}
                         {item.portfolioCategories.nodes.map((cat) => (
                             <span key={cat.id} className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                                 {cat?.name ?? ''}
                             </span>
                         ))}
                     </div>
                 )}
                 {details?.projecturl && ( <a href={details.projecturl} target="_blank" rel="noopener noreferrer" className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > Visit Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="..." /> </a> )}
             </div>
            {/* Featured Image */}
            {item.featuredImage?.node?.sourceUrl && ( <div className="..."> <Image src={item.featuredImage.node.sourceUrl} /* ... */ /> </div> )}
            {/* Main Content */}
            {item.content ? ( <div className="..." dangerouslySetInnerHTML={{ __html: item.content }} /> ) : ( <p className="...">No detailed description.</p> )}
        </div>
    );
}

// Removed generateStaticParams