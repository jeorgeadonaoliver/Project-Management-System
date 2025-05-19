import type { ReactNode } from "react";
import { MdAdd } from "react-icons/md";
import ButtonModal from "./button-modal";

interface CardProps {
  children?: ReactNode;
  cardTitle: string;
  addButton: boolean;
  openModal: () => void;
  text?: string;
}

const Card: React.FC<CardProps> = ({ children, cardTitle, addButton, text, openModal }) => {

    return (
        <div className="p-6 rounded-4xl bg-neutral-300 text-black shadow-lg">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{cardTitle}</h2>
                {addButton && <ButtonModal icon={<MdAdd size="25" />} text={text} openModal={openModal}></ButtonModal>}
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
};


export default Card;