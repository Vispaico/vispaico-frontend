"use client";

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import {
  CONTACT_AVAILABILITY,
  CONTACT_LINKS,
  CONTACT_MESSAGES,
  VISPAICO_EMAIL,
  VISPAICO_PHONE_DISPLAY,
} from '@/data/contact-info';
import { MessengerIcon, WhatsAppIcon, ZaloIcon } from '@/components/contact/ContactIcons';

const quickOptions = [
  {
    label: 'WhatsApp',
    href: CONTACT_LINKS.whatsapp(CONTACT_MESSAGES.defaultWhatsApp),
    color: 'bg-green-500 hover:bg-green-600',
    Icon: WhatsAppIcon,
    colSpan: 'col-span-1',
  },
  {
    label: 'Messenger',
    href: CONTACT_LINKS.messenger,
    color: 'bg-blue-500 hover:bg-blue-600',
    Icon: MessengerIcon,
    colSpan: 'col-span-1',
  },
  {
    label: 'Zalo',
    href: CONTACT_LINKS.zalo,
    color: 'bg-blue-600 hover:bg-blue-700',
    Icon: ZaloIcon,
    colSpan: 'col-span-1',
  },
  {
    label: 'Phone',
    href: CONTACT_LINKS.phone,
    color: 'bg-purple-500 hover:bg-purple-600',
    Icon: Phone,
    colSpan: 'col-span-1',
  },
  {
    label: 'Email Us',
    href: `mailto:${VISPAICO_EMAIL}`,
    color: 'bg-orange-500 hover:bg-orange-600',
    Icon: Mail,
    colSpan: 'col-span-2',
  },
];

const ContactQuickOptions = () => (
  <div className="mt-10 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100">
    <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">Quick Contact Options</h4>
    <p className="text-center text-sm text-gray-600 mb-4">Choose your preferred way to reach us</p>
    <div className="grid grid-cols-2 gap-3">
      {quickOptions.map(({ label, href, color, Icon, colSpan }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${color} text-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg ${colSpan}`}
        >
          <Icon className="w-8 h-8" />
          <span className="text-sm font-semibold">{label}</span>
        </motion.a>
      ))}
    </div>
    <p className="text-center text-xs text-gray-500 mt-4">{CONTACT_AVAILABILITY}</p>
    <p className="text-center text-xs text-gray-500">Phone: {VISPAICO_PHONE_DISPLAY}</p>
  </div>
);

export default ContactQuickOptions;
