import React, { useState } from 'react';
import type { ModalContextValue } from './modal-context';
import {ModalContext} from './modal-context';
// ... import ModalContext and ModalContextValue as defined above

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const openModal = () => {
    //setModalContent();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const modalContextValue: ModalContextValue = {
    isOpen,
    openModal,
    closeModal,
    modalContent,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
