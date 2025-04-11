// src/app/portfolio/[slug]/page.tsx (Final Alt Text Fix)
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

// Query, Type Guard, Fetch Function (Assume correct from previous step)
const GET_SINGLE_PORTFOLIO_ITEM_QUERY = ` /* ... */ `;
interface GraphQLErrorDetail { /*...*/ } interface GraphQLResponseError { /*...*/ } function isGraphQLResponseError(obj: unknown): obj is GraphQLResponseError { /*...*/ }
async function getSinglePortfolioItem(slug: string): Promise<PortfolioItem | null> { /* ... */ }


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
            <Link href="/portfolio" /* ... */ > {/* ... */} </Link>

            {/* Title and Client */}
            <h1 className="...">{item.title}</h1>
             {details?.clientName && ( <p className="...">Client: {details.clientName}</p> )}

             {/* Categories and Live Link */}
             <div className="...">
                 {item.portfolioCategories?.nodes && item.portfolioCategories.nodes.length > 0 && ( /* ... categories map ... */ )}
                 {details?.projecturl && ( <a href={details.projecturl} /* ... */ > {/* ... */} </a> )}
             </div>

            {/* Featured Image */}
            {item.featuredImage?.node?.sourceUrl && (
                <div className="mb-8 md:mb-12 aspect-video relative overflow-hidden rounded-lg shadow-md">
                    <Image
                        src={item.featuredImage.node.sourceUrl}
                        // --- Ensure alt is always string ---
                        alt={item.featuredImage.node.altText || item.title || ''} // Fallback to empty string
                        // ----------------------------------
                        fill
                        sizes="(max-width: 1024px) 100vw, 80vw"
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Main Content */}
            {item.content ? ( <div className="..." dangerouslySetInnerHTML={{ __html: item.content }} /> )
             : ( <p className="...">No detailed description.</p> )}
        </div>
    );
}

// Removed generateStaticParams