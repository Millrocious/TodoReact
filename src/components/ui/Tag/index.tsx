export enum TagColors {
    RED = "bg-red-300",
    BLUE = "bg-indigo-300",
    GREEN = "bg-green-300"
}

interface TagProps {
    title: string;
    tagColor: TagColors;
}

const Tag = (props: TagProps) => {
    return (
        <div className={`${props.tagColor} p-3 rounded-xl`}>
            <label className="font-bold text-sm text-neutral-800">{props.title}</label>
        </div>
    );
};

export default Tag;
