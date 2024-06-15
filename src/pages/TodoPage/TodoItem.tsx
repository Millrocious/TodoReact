import {useState} from "react";
import CircleCheckBox from "../../components/ui/CheckBox/CircleCheckBox";

interface Props {
    title: string;
    description: string;
}

const TodoItem = (props: Props) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    return (
        <div>
            <div className="flex flex-row bg-neutral-800 p-5 rounded-2xl">
                <div className="me-4">
                    <CircleCheckBox checked={isChecked} onChange={handleChange} />
                </div>
                <div>
                    <h1 className="font-bold">{props.title}</h1>
                    <p className="text-xs text-neutral-600">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;