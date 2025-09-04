// src/components/Sticker.tsx
'use client';

import { motion } from 'framer-motion';

interface StickerProps {
  text: string;
}

const Sticker: React.FC<StickerProps> = ({ text }) => {
  return (
    <motion.div
      className="absolute top-20 right-1 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg transform rotate-[20deg] origin-top-right w-36 h-10 flex items-center justify-center text-sm"
      initial={{ scale: 0, rotate: 20 }}
      animate={{ scale: 1, rotate: 20 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
    >
      {text}
    </motion.div>
  );
};

export default Sticker;
