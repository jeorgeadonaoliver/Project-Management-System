interface SideBarIconProps
{
    icon: React.ReactNode;
    text: string;
    isActive: boolean;
    onClick : () => void;
}

const SideBarIcon = ({ icon, text, isActive, onClick }: SideBarIconProps) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center 
    h-15 w-16 mt-2 mb-0 mx-auto hover:-translate-y-1 hover:scale-110
        ${isActive ? 'bg-neutral-600 text-white rounded-xl' : 'bg-neutral-800 text-gray-400 hover:bg-neutral-600 hover:text-white rounded-xl'}`}>
      <div className="text-2xl">{icon}</div>

      <span className="text-[12px] text-white">{text}</span>
    </div>
  );
};

export default SideBarIcon;