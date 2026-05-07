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
    Icon: WhatsAppIcon,
    colSpan: 'col-span-1',
  },
  {
    label: 'Messenger',
    href: CONTACT_LINKS.messenger,
    Icon: MessengerIcon,
    colSpan: 'col-span-1',
  },
  {
    label: 'Zalo',
    href: CONTACT_LINKS.zalo,
    Icon: ZaloIcon,
    colSpan: 'col-span-1',
  },
  {
    label: 'Phone',
    href: CONTACT_LINKS.phone,
    Icon: Phone,
    colSpan: 'col-span-1',
  },
  {
    label: 'Email Us',
    href: `mailto:${VISPAICO_EMAIL}`,
    Icon: Mail,
    colSpan: 'col-span-2',
  },
];

const ContactQuickOptions = () => (
  <div className="mt-10 rounded-[18px] border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2 text-center">Quick Contact Options</h4>
    <p className="text-center text-sm text-[var(--text-secondary)] mb-4">Choose your preferred way to reach us</p>
    <div className="grid grid-cols-2 gap-3">
      {quickOptions.map(({ label, href, Icon, colSpan }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-[var(--text-primary)] rounded-xl border border-[var(--border)] bg-[var(--bg-base)] px-4 py-5 flex flex-col items-center justify-center gap-2 transition duration-200 ${colSpan} hover:border-[var(--accent)] hover:text-white`}
        >
          <Icon className="w-6 h-6 text-[var(--text-secondary)]" />
          <span className="text-sm font-semibold">{label}</span>
        </motion.a>
      ))}
    </div>
    <p className="text-center text-xs text-[var(--text-secondary)] mt-4">{CONTACT_AVAILABILITY}</p>
    <p className="text-center text-xs text-[var(--text-secondary)]">Phone: {VISPAICO_PHONE_DISPLAY}</p>
  </div>
);

export default ContactQuickOptions;
