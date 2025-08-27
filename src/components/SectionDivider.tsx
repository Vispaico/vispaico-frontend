// src/components/SectionDivider.tsx
'use client';

import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto h-10 my-4">
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/10"></div>
      <div className="laser-flash"></div>
    </div>
  );
};

export default SectionDivider;
