import React, { ReactNode, createContext, useContext } from 'react';

type ContactModalContextValue = {
  openModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | undefined>(undefined);

export const ContactModalProvider = ({ children, openModal }: { children: ReactNode; openModal: () => void }) => (
  <ContactModalContext.Provider value={{ openModal }}>{children}</ContactModalContext.Provider>
);

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
