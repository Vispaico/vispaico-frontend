'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { useEffect, useState } from 'react';

type MainSiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
};

export default function MainSiteLink({ href, children, ...props }: MainSiteLinkProps) {
  const [isAiSubdomain, setIsAiSubdomain] = useState(false);

  useEffect(() => {
    setIsAiSubdomain(window.location.hostname.split('.')[0] === 'ai');
  }, []);

  const destination = isAiSubdomain && href.startsWith('/')
    ? `https://vispaico.com${href}`
    : href;

  return (
    <a href={destination} {...props}>
      {children}
    </a>
  );
}
