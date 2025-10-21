// src/components/SectionDivider.tsx
'use client';

import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="relative mx-auto my-10 h-0.5 w-full max-w-5xl bg-gradient-to-r from-slate-900/0 via-blue-500/60 to-slate-900/0">
      <div className="laser-flash"></div>
    </div>
  );
};

export default SectionDivider;
