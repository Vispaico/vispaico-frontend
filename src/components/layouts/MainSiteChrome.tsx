"use client";

import { ReactNode, useCallback, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VispaicoContactModal from '@/components/VispaicoContactModal';
import { ContactModalProvider } from '@/context/ContactModalContext';

type MainSiteChromeProps = {
  children: ReactNode;
};

const MainSiteChrome = ({ children }: MainSiteChromeProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <ContactModalProvider openModal={openModal}>
        <Header onContactClick={openModal} />
        <main>{children}</main>
      </ContactModalProvider>
      <Footer />
      <VispaicoContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default MainSiteChrome;
