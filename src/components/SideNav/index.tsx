import {ReactNode, useState} from "react";
import {ChevronFirst, ChevronLast, MoreVertical} from "lucide-react";
import {SidebarContext} from "../../context/SidebarContext";

interface Props {
    children: ReactNode
}

const SideNavBar = (props: Props) => {
    const [expanded, setExpanded] = useState(true)

    return (
        <aside>
            <nav className="h-full flex flex-col rounded-2xl bg-neutral-900 shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1 className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>
                        <span className="font-extrabold text-indigo-200">Todos</span>
                        <span className="font-bold text-white">React</span>
                    </h1>
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-neutral-800 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst/> : <ChevronLast/>}
                    </button>
                </div>

                <SidebarContext.Provider value={expanded}>
                    <ul className="flex-1 px-3">{props.children}</ul>
                </SidebarContext.Provider>

                <div className="flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`
                          flex justify-between items-center
                          overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                        `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}


export default SideNavBar;