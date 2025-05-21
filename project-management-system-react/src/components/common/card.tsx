import type { ReactNode } from "react";
import ButtonModal from "./button-modal";

interface CardProps {
  iconbtn: ReactNode;
  children?: ReactNode;
  cardTitle: string;
  addButton: boolean;
  onClick: () => void;
  text?: string;
}

const Card: React.FC<CardProps> = ({ iconbtn, children, cardTitle, addButton, text, onClick }) => {

    return (
        <div className="p-6 rounded-4xl bg-neutral-300 text-black shadow-lg">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{cardTitle}</h2>
                {addButton && <ButtonModal icon={iconbtn} text={text} onClick={onClick}></ButtonModal>}
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
};


export default Card;