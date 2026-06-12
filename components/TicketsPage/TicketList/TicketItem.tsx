import * as React from "react";

interface Props {
    isSelected :boolean;
    title : string;
    deadLine : string;
    onselect : ()=>void;
    ondelete : ()=>void;
    onedit : ()=>void;
}
export default function TicketItem ( {isSelected ,title , deadLine, onselect , ondelete , onedit } :Props ) {



    const addCss = isSelected ? ticketCss.selected :ticketCss.default

    return (
        <li
            onClick={onselect}
            className= {`flex justify-between p-3 border rounded-xl ${addCss.tag} `}
        >
            <div>
                <div className={ `font-bold ${addCss.text} text-base ` } >
                    {title}
                    {/*<input/>*/}
                </div>
                <div className="text-sm text-(--gray-text) font-bold mt-2" >
                    {deadLine}
                </div>
            </div>

            <div className="flex flex-col items-center justify-end gap-2 opacity-70" >
                <button
                    className="cursor-pointer"
                    onClick={ondelete}
                >
                    🗑
                </button>
                <button
                    className={`cursor-pointer `}
                    onClick={onedit}
                >
                    ✏
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