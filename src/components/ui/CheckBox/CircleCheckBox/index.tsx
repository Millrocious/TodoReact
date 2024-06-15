interface CircleCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CircleCheckBox = (props: CircleCheckboxProps) => {
    return (
        <div className="flex justify-center items-center h-full">
            <div
                className={`w-6 h-6 rounded-full border-2 border-gray-400 
                flex items-center justify-center transition-all duration-300 ${
                    props.checked ? 'scale-110' : 'scale-100'
                }`}
                onClick={() => props.onChange(!props.checked)}
            >
                <div
                    className={`w-3 h-3 rounded-full bg-white transition-all duration-300 ${
                        props.checked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                />
            </div>
        </div>
    );
};

export default CircleCheckBox;