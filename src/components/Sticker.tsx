// src/components/Sticker.tsx
'use client';

import { motion } from 'framer-motion';

interface StickerProps {
  line1: string;
  line2: string;
  className?: string;
}

const Sticker: React.FC<StickerProps> = ({ line1, line2, className }) => {
  return (
    <motion.div
      className={className || "absolute top-20 right-1 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg transform rotate-[20deg] origin-top-right w-36 h-12 flex items-center justify-center text-center"}
      initial={{ scale: 0, rotate: 20 }}
      animate={{ scale: 1, rotate: 20 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
    >
      <div>
        <span className="block text-xs leading-tight">{line1}</span>
        <span className="block text-xs leading-tight">{line2}</span>
      </div>
    </motion.div>
  );
};

export default Sticker;
