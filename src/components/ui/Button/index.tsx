interface ButtonProps {
    title: string;
}

const Button = (props: ButtonProps) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <button
                className="bg-[#151515] text-white font-bold
                py-2 px-4 rounded-2xl
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:ring-opacity-50
                transition hover:bg-blue-400 duration-500">
                {props.title}
            </button>
        </div>
    );
};

export default Button;