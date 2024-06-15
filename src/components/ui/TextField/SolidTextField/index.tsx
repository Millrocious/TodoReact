import React, {ReactElement, ReactNode} from "react";

interface SolidTextFieldProps {
    Icon: ReactNode;
}

const SolidTextField = (props: SolidTextFieldProps) => {
    const { Icon } = props;

    // Function to add className if Icon is a valid ReactElement
    const getIconWithClassName = (icon: ReactNode): ReactNode => {
        if (React.isValidElement(icon)) {
            return React.cloneElement(icon as ReactElement, {
                className: `${(icon.props.className || '')} w-5 h-5 absolute ml-3 pointer-events-none`,
            });
        }
        return icon;
    };

    const iconWithClassName = getIconWithClassName(Icon);

    return (
        <div className="w-full">
            <div className="my-8">
                <div className="relative flex items-center text-neutral-400 focus-within:text-neutral-600">
                    {iconWithClassName}
                    <input
                        type="text"
                        name="taskTitle"
                        placeholder="Task title"
                        autoComplete="off"
                        aria-label="Task title"
                        className="pr-3 pl-10 py-2 font-bold placeholder-neutral-500 text-black w-full
                        rounded-xl border-none ring-2 ring-neutral-300 focus:ring-neutral-500 focus:ring-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default SolidTextField;
