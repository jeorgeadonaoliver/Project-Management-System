import SidebarImage from "./sidebar-image"

import dummylogo from '../../assets/logo.png'
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarIcon from "./sidebat-icon";
import { BiLogOut } from "react-icons/bi";

interface SidebarItemProps{
   icon: React.ReactNode;
    text: string;
    index: number;
    route?: string;
}

const sidebar = React.memo(({sidebarItems} : {sidebarItems: SidebarItemProps[]}) => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const navigateToPage = useCallback((page: string) => {
        navigate(page);
    }, [navigate]);

    const handleItemClick = useCallback((index: number | null, route?: string) => {
        setActiveIndex(index);
        if (route) {
            navigateToPage(route);
        }
    }, [navigateToPage, setActiveIndex]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setActiveIndex(null); 
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef, setActiveIndex]);

    return(
        <>
        <div className="fixed top-0 left-0 h-screen w-18 m-0 flex flex-col items-center bg-neutral-800 text-white shadow-lg overflow-y-auto text-sm">
            <SidebarImage imagePath={dummylogo} name={""}></SidebarImage>

            <div className=" relative w-full flex justify-center mt-4 mb-8">
                     <div className="absolute h-0.5 w-12 bg-white top-1/2 transform -translate-y-1/2"></div>
                </div>
                
                {sidebarItems.map((item) => (
                    <SideBarIcon
                        key={item.text}
                        icon={item.icon}
                        text={item.text}
                        isActive={activeIndex === item.index}
                        onClick={() => {
                                handleItemClick(item.index);
                                navigateToPage(item.route ?? '');
                        }}
                    />
                ))}



                <div className="flex-col justify-center mt-auto mb-3" >
                    <div className=" relative w-full flex justify-center">
                         <div className="absolute h-0.5 w-12 bg-white top-1/2 transform -translate-y-1/2"></div>
                    </div>
                    <SideBarIcon
                        key={"Logout"}
                        icon={<BiLogOut size="20" />}
                        text={"Logout"}
                        isActive={activeIndex === 0}
                        onClick={() => {
                            navigateToPage('/login');
                        }}
                    />
                </div>
        </div>
        </>
    );
});

export default sidebar;
