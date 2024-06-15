interface ButtonProps {
    title: string;
    variant: 'primary' | 'secondary' | 'error'
    fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
    return (
        <div className={`flex justify-center items-center w-full ${props.fullWidth ? "w-full" : "w-fit"}`}>
            <button
                className={`
                bg-indigo-400 text-neutral-800 font-bold w-full
                ${props.variant === 'primary' ? "bg-indigo-300"
                    : props.variant === 'secondary' ? "bg-neutral-500" 
                    : "bg-[#ce8181]"
                }
                py-2 px-4 rounded-xl
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:ring-opacity-50
                transition hover:bg-indigo-300 duration-500
                `}
            >
                {props.title}
            </button>
        </div>
    );
};

export default Button;