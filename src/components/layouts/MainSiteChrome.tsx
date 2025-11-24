"use client";

import { ReactNode, useCallback, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VispaicoContactModal from '@/components/VispaicoContactModal';
import VispaicoWheel from '@/components/VispaicoWheel';

type MainSiteChromeProps = {
  children: ReactNode;
};

const MainSiteChrome = ({ children }: MainSiteChromeProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Header onContactClick={openModal} />
      <main>{children}</main>
      <Footer />
      <VispaicoWheel />
      <VispaicoContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default MainSiteChrome;
