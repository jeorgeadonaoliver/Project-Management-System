import type { ReactNode } from "react";
import type React from "react";
import Button from "./button";
import { IoClose } from "react-icons/io5";


interface ModalProos{
  children?: ReactNode;
  modalTitle: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProos> = ({children, modalTitle, closeModal}) => {

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400/80 backdrop-blur bg-opacity-100 transition-opacity duration-500 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black transition-transform duration-300 scale-100">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold mb-4">{modalTitle}</h2>
                <Button icon={<IoClose size="20" />} 
                onClick={closeModal}></Button>
            </div>
            {children}
          </div>
        </div>
    );

};

export default Modal;