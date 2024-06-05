import './App.css'
import SideNavBar from "./components/SideNav";
import SideNavBarItem from "./components/SideNav/SideNavBarItem.tsx";
import {BarChart3, Boxes, LayoutDashboard, Settings, UserCircle} from "lucide-react";

function App() {
    return (
        <SideNavBar>
            <SideNavBarItem icon={<LayoutDashboard size={20}/>} text="Dashboard" alert />
            <SideNavBarItem icon={<BarChart3 size={20}/>} text="Statistics" active />
            <SideNavBarItem icon={<UserCircle size={20}/>} text="Users" alert />
            <SideNavBarItem icon={<Boxes size={20}/>} text="Inventory" />
            <hr className="my-3" />
            <SideNavBarItem icon={<Settings size={20}/>} text="Settings" />
        </SideNavBar>
    )
}

export default App
