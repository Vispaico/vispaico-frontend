"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
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

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      color: 'bg-green-500 hover:bg-green-600',
      href: CONTACT_LINKS.whatsapp(getWhatsAppMessage(context)),
    },
    {
      name: 'Messenger',
      icon: MessengerIcon,
      color: 'bg-blue-500 hover:bg-blue-600',
      href: CONTACT_LINKS.messenger,
    },
    {
      name: 'Zalo',
      icon: ZaloIcon,
      color: 'bg-blue-600 hover:bg-blue-700',
      href: CONTACT_LINKS.zalo,
    },
    {
      name: 'Phone',
      icon: Phone,
      color: 'bg-purple-500 hover:bg-purple-600',
      href: CONTACT_LINKS.phone,
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-orange-500 hover:bg-orange-600',
      href: CONTACT_LINKS.email(getEmailSubject(context), getEmailBody(context)),
    },
    {
      name: 'Contact Form',
      icon: MessageSquare,
      color: 'bg-gray-700 hover:bg-gray-800',
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
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-white mb-1">Get in Touch</h2>
                <p className="text-blue-100 text-sm">Choose your preferred contact method</p>
                <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 text-white text-sm flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-100" />
                    <span className="text-sm font-medium">{VISPAICO_PHONE_DISPLAY}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-100" />
                    <span className="text-sm font-medium">{VISPAICO_EMAIL}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {contactOptions.map((option) => (
                    <motion.button
                      key={option.name}
                      onClick={() => handleOptionClick(option)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${option.color} text-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg`}
                    >
                      <option.icon className="w-8 h-8" />
                      <span className="text-sm font-semibold">{option.name}</span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-center text-xs text-gray-500">{CONTACT_AVAILABILITY}</p>
                  <p className="text-center text-xs text-gray-500 mt-1">Vispaico</p>
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
