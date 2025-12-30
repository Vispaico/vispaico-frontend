"use client";

import { useEffect, useRef } from 'react';

import { ArticleAd } from './ArticleAd';

type ArticleWithAdsProps = {
  children: React.ReactNode;
};

export function ArticleWithAds({ children }: ArticleWithAdsProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const topAdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = contentRef.current;
    const ad = topAdRef.current;
    if (!container || !ad) return;

    const firstImage = container.querySelector('img');
    if (firstImage) {
      const imageBlock = firstImage.closest('p') ?? firstImage;
      const captionBlock = imageBlock.nextElementSibling;

      if (captionBlock) {
        captionBlock.insertAdjacentElement('afterend', ad);
      } else {
        imageBlock.insertAdjacentElement('afterend', ad);
      }
      return;
    }

    const proseBlock = container.querySelector('.prose');
    if (proseBlock) {
      proseBlock.insertAdjacentElement('afterbegin', ad);
    }
  }, []);

  return (
    <div ref={contentRef} className="space-y-12">
      {children}

      <div ref={topAdRef} className="space-y-3 w-full">
        <div className="flex justify-center w-full">
          <ArticleAd variant="mobile-banner" />
        </div>
      </div>
    </div>
  );
}
