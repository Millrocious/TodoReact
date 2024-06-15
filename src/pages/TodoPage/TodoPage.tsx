import "../../assets/global.css"
import SideNavLayout from "../../layouts/SideNavLayout";
import TodoItem from "./TodoItem.tsx";
import SolidTextField from "../../components/ui/TextField/SolidTextField";
import {ListTodoIcon} from "lucide-react";
import Button from "../../components/ui/Button/SolidButton";
import Tag, {TagColors} from "../../components/ui/Tag";

const TodoPage = () => {
    return (
        <SideNavLayout>
            <div className="w-full h-full rounded-2xl bg-neutral-900 p-5">
                <div className="flex flex-row w-full space-x-3">
                    <SolidTextField Icon={<ListTodoIcon />} />
                    <Button title={"Add"} variant={"primary"}/>
                </div>

                <div className="space-y-5">
                    <TodoItem title={"Todo 1"} description={"Desc 1"} />
                    <TodoItem title={"Todo 1"} description={"Desc 1"} />
                    <TodoItem title={"Todo 1"} description={"Desc 1"} />
                </div>
            </div>
            <div className="w-full h-full rounded-2xl bg-neutral-900 p-5 flex flex-col justify-between">
                <div className="space-y-5">
                    <h1 className="text-3xl font-bold text-neutral-500">Title</h1>
                    <div className="w-full h-52 bg-neutral-800 rounded-xl p-5">
                        <h1 className="text-xl font-bold text-neutral-500">Description</h1>
                    </div>

                    <div className="flex flex-row space-x-3">
                        <h1 className="text-xl font-bold text-neutral-500">Tags: </h1>
                        <Tag title={"TAG BLUE"} tagColor={TagColors.BLUE} />
                        <Tag title={"TAG RED"} tagColor={TagColors.RED} />
                        <Tag title={"TAG GREEN"} tagColor={TagColors.GREEN} />
                    </div>
                    <h1 className="text-3xl font-bold text-neutral-500">Sub-tasks</h1>
                    <TodoItem title={"Todo 1"} description={"Desc 1"} />
                    <TodoItem title={"Todo 1"} description={"Desc 1"} />
                    <TodoItem title={"Todo 1"} description={"Desc 1"} />
                </div>
                <div className="flex flex-row justify-between space-x-4">
                    <Button title={"Delete"} fullWidth variant={"error"}/>
                    <Button title={"Save"} fullWidth variant={"primary"}/>
                </div>
            </div>
        </SideNavLayout>
    );
};

export default TodoPage;
