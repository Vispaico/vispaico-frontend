export const VISPAICO_PHONE_DISPLAY = '+84 (0) 936 166 892';
export const VISPAICO_PHONE_DIAL = '+84936166892';
export const VISPAICO_EMAIL = 'hola@vispaico.com';

export const CONTACT_AVAILABILITY = 'Available 7 days a week • Response within 2 hours';

export const CONTACT_MESSAGES = {
  defaultWhatsApp: "Hi Vispaico! I'm interested in your 72-hour website service.",
  customQuote: 'Hi Vispaico! I need a custom website quote.',
};

export const CONTACT_LINKS = {
  whatsapp: (message: string = CONTACT_MESSAGES.defaultWhatsApp) =>
    `https://wa.me/${VISPAICO_PHONE_DIAL.replace('+', '')}?text=${encodeURIComponent(message)}`,
  messenger: 'https://www.facebook.com/vispaico/',
  zalo: 'https://zalo.me/0936166892',
  phone: `tel:${VISPAICO_PHONE_DIAL}`,
  email: (subject: string, body: string) =>
    `mailto:${VISPAICO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
};

export type ContactContext = {
  projectName?: string;
  budget?: string;
  messageType?: 'general' | 'custom';
};

