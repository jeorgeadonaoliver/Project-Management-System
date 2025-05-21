interface ButtonModalProps{
    icon: React.ReactNode;
    text?: string;
    onClick : () => void;
}

const ButtonModal = ({icon,text, onClick}: ButtonModalProps) => {

    return(
       <> 
        <button type="button" 
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex" 
        onClick={onClick}>
            {icon}
            {text}
        </button>
      </>
    ); 
};

export default ButtonModal;