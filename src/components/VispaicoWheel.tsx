"use client";

import { useState, type ComponentType, type SVGProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_LINKS, CONTACT_MESSAGES } from '@/data/contact-info';
import { MessengerIcon, WhatsAppIcon, ZaloIcon } from '@/components/contact/ContactIcons';

type WheelContact = {
  id: string;
  label: string;
  aria: string;
  color: string;
  hoverColor: string;
  iconAngle: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
};

const contacts: WheelContact[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    aria: 'Chat on WhatsApp',
    color: '#25D366',
    hoverColor: '#1da851',
    iconAngle: 150,
    Icon: WhatsAppIcon,
    href: CONTACT_LINKS.whatsapp(CONTACT_MESSAGES.defaultWhatsApp),
  },
  {
    id: 'zalo',
    label: 'Zalo',
    aria: 'Chat on Zalo',
    color: '#0A94FF',
    hoverColor: '#057ad0',
    iconAngle: 270,
    Icon: ZaloIcon,
    href: CONTACT_LINKS.zalo,
  },
  {
    id: 'messenger',
    label: 'Messenger',
    aria: 'Chat on Facebook Messenger',
    color: '#0084FF',
    hoverColor: '#006ADB',
    iconAngle: 30,
    Icon: MessengerIcon,
    href: CONTACT_LINKS.messenger,
  },
];

const VispaicoWheel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderWheel = (size = 100, svgId = 'desktop-wheel') => (
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
        <defs>
          <filter id={`${svgId}-glow`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {contacts.map((contact, index) => {
          const startAngle = index * (360 / contacts.length) - 90;
          const endAngle = startAngle + (360 / contacts.length) - 5;
          const startRad = (startAngle * Math.PI) / 180;
          const endRad = (endAngle * Math.PI) / 180;
          const x1 = 50 + 45 * Math.cos(startRad);
          const y1 = 50 + 45 * Math.sin(startRad);
          const x2 = 50 + 45 * Math.cos(endRad);
          const y2 = 50 + 45 * Math.sin(endRad);

          return (
            <g key={contact.id}>
              <a href={contact.href} target="_blank" rel="noreferrer" aria-label={contact.aria}>
                <path
                  d={`M 50 50 L ${x1} ${y1} A 45 45 0 0 1 ${x2} ${y2} Z`}
                  fill={contact.color}
                  className="transition-all duration-300 hover:brightness-110 cursor-pointer"
                  filter={`url(#${svgId}-glow)`}
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}
                />
              </a>
            </g>
          );
        })}
        <circle cx="50" cy="50" r="18" fill="white" className="drop-shadow-lg" />
      </svg>

      {contacts.map((contact) => {
        const angleRad = ((contact.iconAngle + 90) * Math.PI) / 180;
        const iconX = 50 + 28 * Math.cos(angleRad);
        const iconY = 50 + 28 * Math.sin(angleRad);
        return (
          <div
            key={`icon-${contact.id}-${size}`}
            className="absolute pointer-events-none"
            style={{
              left: `${iconX}%`,
              top: `${iconY}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <contact.Icon className="w-5 h-5 text-white drop-shadow-md" />
          </div>
        );
      })}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-white"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:block fixed bottom-8 right-8 z-40 w-32 h-32">
        {renderWheel()}
      </div>

      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute bottom-16 right-0 w-32 h-32"
            >
              {renderWheel(80, 'mobile-wheel')}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-xl flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isExpanded ? { rotate: 45 } : { rotate: 0 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-white">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <motion.div
            className="absolute inset-0 rounded-full bg-green-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.button>
      </div>
    </>
  );
};

export default VispaicoWheel;
