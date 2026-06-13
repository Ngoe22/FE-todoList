import * as React from "react";
import InputSm from "@/components/InputSm"
import {useEffect} from "react";


interface Props {
    isSelected :boolean;
    title : string;
    deadLine : string;
    onselect : ()=>void;
    ondelete : ()=>void;
    onedit : (text :string)=>void;
}
export default function TicketItem ( {isSelected ,title , deadLine, onselect , ondelete , onedit } :Props ) {

    const [ isEdit , setEdit ] = React.useState( false )

    useEffect(
        () => {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            if (!isSelected) setEdit(false)
        },
        [isSelected]
    )


    const addCss = isSelected ? ticketCss.selected :ticketCss.default

    return (
        <li
            onClick={onselect}
            className= {`flex justify-between p-3 border rounded-xl gap-4 ${addCss.tag} `}
        >
            <div className="grow" >
                <div className={ `text-base font-bold ${addCss.text} relative w-full ` } >
                    {title}

                    <InputSm
                        initText ={title}
                        isOpen={  isEdit }
                        onClose = {()=> {setEdit(false)} }
                        onSubmit={  (text)=>{
                            onedit(text)
                            setEdit(false)
                        }}
                    />

                </div>
                <div className="text-sm text-(--gray-text) font-bold mt-2" >
                    {deadLine}
                </div>
            </div>

            <div className="flex flex-col items-center justify-end gap-2 opacity-70" >
                <button
                    className="cursor-pointer"
                    onClick={(e)=> {
                        console.log(e)
                        e.stopPropagation()
                        ondelete()
                    }}
                >
                    🗑
                </button>
                <button
                    className={`cursor-pointer `}
                    onClick={  ()=> setEdit( !isEdit )  }
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