import { useModal } from "../../context/modal-context";

interface ButtonModalProps
{
    icon: React.ReactNode;
    text?: string;
}


const ButtonModal = ({icon,text}: ButtonModalProps) => {
    const { openModal } = useModal();
    
    return(
       <> 
        <button type="button" 
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex" 
        onClick={openModal}>
            {icon}
            {text}
        </button>
      </>
    ); 
};

export default ButtonModal;