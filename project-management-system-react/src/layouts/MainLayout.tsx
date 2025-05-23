import { Outlet } from "react-router-dom";
import  Sidebar  from "../components/sidebar/sidebar";
import { PiFolderOpenBold, PiMicrosoftTeamsLogo, PiUsersThreeFill } from "react-icons/pi";
import { HiOfficeBuilding } from "react-icons/hi";

const MainLayout = () =>{

          const sidebarItems = [
          { icon: <PiUsersThreeFill size="20" />, text: "Employees", index: 1, route: '/employees'},
          { icon: <PiFolderOpenBold size="20" />, text: "Projects", index: 2, route:'/projects' },
          { icon: <PiMicrosoftTeamsLogo size="20" />, text: "Teams", index: 3, route: '/teams'},
          { icon: <HiOfficeBuilding size="20" />, text: "Deparments", index: 4, route: '/departments'}];

    return(

      <div className="min-h-screen bg-neutral-800 text-white text-sm flex">
          
        <aside className="w-20 p-4">
            <Sidebar sidebarItems={sidebarItems}></Sidebar>
        </aside>
        <div className="bg-neutral-200 min-h-screen w-full rounded-l-4xl overflow-x-hidden">
          <main className="flex-1 p-6">
            <Outlet /> 
          </main>
        </div>
      </div>  
    );
};


export default MainLayout;