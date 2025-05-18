interface ButtonProps
{
    icon: React.ReactNode;
    text?: string;
}


const Button = ({icon,text}: ButtonProps) => {

    return(
        <button type="button" className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex">
            {icon}
            {text}
        </button>
    ); 
};

export default Button;