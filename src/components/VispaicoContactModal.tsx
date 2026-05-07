"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from '@/i18n/navigation';
import { X, Phone, Mail, MessageSquare } from 'lucide-react';
import {
  CONTACT_LINKS,
  CONTACT_MESSAGES,
  VISPAICO_EMAIL,
  VISPAICO_PHONE_DISPLAY,
  CONTACT_AVAILABILITY,
  type ContactContext,
} from '@/data/contact-info';
import { MessengerIcon, WhatsAppIcon, ZaloIcon } from '@/components/contact/ContactIcons';

type VispaicoContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  context?: ContactContext;
};

const baseEmailBody = `Hi Vispaico Team,\n\nI have a question about your 72-hour website builds.\n\nThanks!`;

const getWhatsAppMessage = (context?: ContactContext) => {
  if (context?.projectName && context?.budget) {
    return `Hi Vispaico! I'm interested in building ${context.projectName} with a budget of ${context.budget}. Can you share next steps?`;
  }
  if (context?.messageType === 'custom') {
    return CONTACT_MESSAGES.customQuote;
  }
  return CONTACT_MESSAGES.defaultWhatsApp;
};

const getEmailSubject = (context?: ContactContext) => {
  if (context?.projectName) return `Inquiry about ${context.projectName}`;
  return 'Website project inquiry';
};

const getEmailBody = (context?: ContactContext) => {
  if (context?.projectName && context?.budget) {
    return `Hi Vispaico Team,\n\nI'd like to discuss ${context.projectName} with a budget of ${context.budget}.\n\nPlease share availability for a quick call.\n\nThanks!`;
  }
  if (context?.messageType === 'custom') {
    return `Hi Vispaico Team,\n\nI'd like a custom quote. Here are the details:\n\n-\n-\n-\n\nThanks!`;
  }
  return baseEmailBody;
};

const VispaicoContactModal = ({ isOpen, onClose, context }: VispaicoContactModalProps) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      router.prefetch('/contact');
    }
  }, [isOpen, router]);

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      href: CONTACT_LINKS.whatsapp(getWhatsAppMessage(context)),
    },
    {
      name: 'Messenger',
      icon: MessengerIcon,
      href: CONTACT_LINKS.messenger,
    },
    {
      name: 'Zalo',
      icon: ZaloIcon,
      href: CONTACT_LINKS.zalo,
    },
    {
      name: 'Phone',
      icon: Phone,
      href: CONTACT_LINKS.phone,
    },
    {
      name: 'Email',
      icon: Mail,
      href: CONTACT_LINKS.email(getEmailSubject(context), getEmailBody(context)),
    },
    {
      name: 'Contact Form',
      icon: MessageSquare,
      action: 'form' as const,
    },
  ];

  const handleOptionClick = (option: (typeof contactOptions)[number]) => {
    if (option.action === 'form') {
      onClose();
      router.push('/contact');
      return;
    }

    if (option.href) {
      window.open(option.href, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="max-w-md w-full rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="border-b border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-5 relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Contact</p>
                <h2 className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">Get in Touch</h2>
                <p className="mt-1 text-[13px] text-[var(--text-secondary)]">Choose your preferred contact method</p>
                <div className="mt-4 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] px-4 py-3 text-[13px] text-[var(--text-secondary)]">
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[var(--text-muted)]" />
                      <span className="font-[500] text-[var(--text-primary)]">{VISPAICO_PHONE_DISPLAY}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[var(--text-muted)]" />
                      <span className="font-[500] text-[var(--text-primary)]">{VISPAICO_EMAIL}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {contactOptions.map((option) => (
                    <motion.button
                      key={option.name}
                      onClick={() => handleOptionClick(option)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex flex-col items-center justify-center gap-2 rounded-[10px] border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-4 text-center text-[var(--text-primary)] transition-colors hover:border-[#444440]"
                    >
                      <option.icon className="w-6 h-6 text-[var(--text-primary)]" />
                      <span className="text-[12px] font-[600] text-[var(--text-primary)]">{option.name}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-5 border-t border-[var(--border)] pt-4">
                  <p className="text-center text-[11px] text-[var(--text-muted)]">{CONTACT_AVAILABILITY}</p>
                  <p className="text-center text-[11px] text-[var(--text-muted)] mt-1">Vispaico</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VispaicoContactModal;
