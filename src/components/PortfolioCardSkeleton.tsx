'use client';

const PortfolioCardSkeleton = () => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-800/50 shadow-lg aspect-4/3 animate-pulse">
      {/* Image Placeholder */}
      <div className="absolute inset-0 bg-slate-700"></div>
      
      {/* Sticker Placeholder */}
      <div className="absolute top-4 right-4 bg-slate-700 w-28 h-8 transform rotate-[20deg] origin-top-right rounded-md"></div>

      {/* Overlay with Text Placeholders */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 flex flex-col justify-end">
        <div>
          <div className="h-5 bg-slate-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardSkeleton;
