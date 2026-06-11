interface Props {
    isSelected :boolean;
    title : string;
    deadLine : string;
    onselect : ()=>void;
    ondelete : ()=>void;
}
export default function TicketItem ( {isSelected ,title , deadLine, onselect , ondelete } :Props ) {



    const addCss = isSelected ? ticketCss.selected :ticketCss.default

    return (
        <li
            onClick={onselect}
            className= {`flex justify-between p-4 border rounded-xl ${addCss.tag}`}
        >
            <div>
                <div className={ `font-bold ${addCss.text}` } >
                    {title}
                </div>
                <div className="text-sm text-(--gray-text)" >
                    {deadLine}
                </div>
            </div>

            <div>
                <button
                    className="cursor-pointer"
                    onClick={ondelete}
                >
                    <span>🗑</span>
                </button>
            </div>
        </li>
    )
}

const ticketCss = {
    selected: {
        tag: "border-[var(--tk-hl-border)] bg-[var(--tk-hl-bg)]" ,
        text : "text-(--tk-hl-text)" ,
    } ,
    default : {
        tag  : "bg-(--gray-bg) border-gray-300" ,
        text : "text-(--df-text)" ,
    }
}