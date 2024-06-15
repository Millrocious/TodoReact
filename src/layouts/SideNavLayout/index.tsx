import {ReactNode} from 'react';
import SideNavBarItem from "../../components/SideNav/SideNavBarItem.tsx";
import {ListIcon, ListTodoIcon, Settings} from "lucide-react";
import SideNavBar from "../../components/SideNav";

interface Props {
    children: ReactNode
}

const SideNavLayout = (props: Props) => {
    return (
        <div className="flex flex-row h-[calc(100vh-1.5rem)] w-[calc(100vw-1.5rem)] m-3 space-x-3">
            <SideNavBar>
                <SideNavBarItem icon={<ListTodoIcon size={20}/>} text="Todos" active/>
                <SideNavBarItem icon={<ListIcon size={20}/>} text="Categories" />
                <hr className="my-3 border-neutral-700" />
                <SideNavBarItem icon={<Settings size={20}/>} text="Settings" />
            </SideNavBar>
            {props.children}
        </div>
    );
};

export default SideNavLayout;