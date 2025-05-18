import React, {createContext} from "react";

export interface ModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalContent: React.ReactNode | null;
  // ... other modal-related state or functions
}

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);


export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

