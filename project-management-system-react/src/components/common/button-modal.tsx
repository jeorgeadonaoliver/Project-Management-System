interface ButtonModalProps{
    icon: React.ReactNode;
    text?: string;
    openModal : () => void;
}

const ButtonModal = ({icon,text, openModal}: ButtonModalProps) => {

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