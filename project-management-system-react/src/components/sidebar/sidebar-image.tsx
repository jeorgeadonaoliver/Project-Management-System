import { useNavigate } from 'react-router-dom';
import './sidebar.css'
import { useCallback } from 'react';

interface SidebarImageProps
{
    imagePath: string;
    name: string;
    //onClick: () => void;
}

const SidebarImage = ({imagePath, name}: SidebarImageProps) => {

    const navigate = useNavigate();
    const navigateToPage = useCallback((page: string) => {
        navigate(page);}, [navigate]);

    return (
    <div className="sidebar-image" onClick={() => navigateToPage('/home') }>
        <img src={imagePath} 
        alt="Profile"
        className="w-[100px] h-[80px] object-cover"/>

        <span className="text-sm text-white mt-1">{name}</span>
    </div>)
};

export default SidebarImage;