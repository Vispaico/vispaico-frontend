// src/components/SectionDivider.tsx
'use client';

import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto h-px bg-white/10 my-4">
      <div className="laser-flash"></div>
    </div>
  );
};

export default SectionDivider;
