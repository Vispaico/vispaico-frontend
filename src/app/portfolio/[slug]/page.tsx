// src/app/portfolio/[slug]/page.tsx (Fix TypeScript Error)
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
      id title(format: RENDERED) slug content(format: RENDERED)
      portfolioItemDetails { clientName projecturl shortSummary }
      featuredImage { node { sourceUrl(size: LARGE) altText mediaDetails { height width } } }
      portfolioCategories { nodes { id name slug uri } }
    }
  }
`;

interface GraphQLErrorDetail { message: string; }
interface GraphQLResponseError { errors: GraphQLErrorDetail[]; }
function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError { return typeof obj === 'object' && obj !== null && Array.isArray((obj as GraphQLResponseError).errors); }

async function getSinglePortfolioItem(slug: string): Promise<PortfolioItem | null> {
    try { /* ... fetch logic ... */ }
    catch (error: unknown) { /* ... error handling ... */ }
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

    useEffect(() => { /* ... fetch logic ... */ }, [slug]);

    if (loading) { /* ... loading ... */ }
    if (error || !item) { /* ... error ... */ }
    const details = item.portfolioItemDetails;

    return (
        <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen">
            {/* Back Link */}
            <Link href="/portfolio" className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > {/* ... */} </Link>

            {/* Title & Client */}
            <h1 className="...">{item.title}</h1>
             {details?.clientName && ( <p className="...">Client: {details.clientName}</p> )}

             {/* Categories and Live Link */}
             <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-sm">
                 {/* --- MODIFIED CHECK --- */}
                 {item.portfolioCategories?.nodes && item.portfolioCategories.nodes.length > 0 && (
                 // --- END MODIFICATION ---
                     <div className="flex items-center gap-2">
                         <span className="font-semibold text-gray-700 dark:text-gray-300">Categories:</span>
                         {item.portfolioCategories.nodes.map((cat) => (
                             <span key={cat.id} className="bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-gray-700 dark:text-gray-300">
                                 {cat?.name ?? ''} {/* Safe access */}
                             </span>
                         ))}
                     </div>
                 )}
                  {details?.projecturl && ( <a href={details.projecturl} /* ... */ onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > {/* ... */} </a> )}
             </div>

            {/* Featured Image */}
            {item.featuredImage?.node?.sourceUrl && ( <div className="..."> <Image src={item.featuredImage.node.sourceUrl} /* ... */ /> </div> )}

            {/* Main Content */}
            {item.content ? ( <div className="..." dangerouslySetInnerHTML={{ __html: item.content }} /> )
             : ( <p className="...">No detailed description.</p> )}
        </div>
    );
}

// NO generateStaticParams