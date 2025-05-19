interface ButtonProps
{
    icon: React.ReactNode;
    text?: string;
    onClick: ()=> void;
}


const Button = ({icon,text, onClick}: ButtonProps) => {

    return(
        <button onClick={onClick}
        type="button" className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex">
            {icon}
            {text}
        </button>
    ); 
};

export default Button;