"use client"
import type {Task,Status} from "@/types"
import * as React from "react";

interface Props {
    list : Task[] ;
    status : Status;
    ondropCallback: () => void;
    onstartdropCallback :  (t:Task) => void;
}
export default function TaskStatusCard ( { list , status ,ondropCallback,onstartdropCallback } :Props ) {

    function dragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        ondropCallback()
    }

    function startDrag(t :Task ) {
        onstartdropCallback(t)
    }

    const mainColor = statusColor[status]
    return (
        <div
            onDragOver={dragOver}
            onDrop={handleDrop}
            className="bg-(--gray-bg) p-2 rounded-md "
        >
            <div
                style={{background : `var(${mainColor})`}}
                className={`text-white font-bold rounded-xl flex items-center justify-center`}
            >
                {status}
            </div>

            <ul>
                {list.map( (item)=> {
                    return (
                        <li
                            draggable={true}
                            onDragStart={ ()=>{startDrag(item)} }
                            style={{borderColor : `var(${mainColor})` }}
                            className="bg-(--white-bg) p-2 rounded-md mt-3 border-t-2 select-none hover:shadow-md duration-300"
                            key={item.id}
                        >
                            <div className={`text-base flex items-center justify-end pb-1 mb-2 border-b border-gray-200  `}>
                                <button className={`cursor-pointer text-red-500`} >✐</button>
                                <button className={`cursor-pointer text-red-500`} >🗑</button>
                            </div>
                            <div className={`text-xs font-bold text-(--gray-text)`}>{item.id}</div>
                            <div className={`text-xs font-bold text-(--df-text) mt-1`}>{item.title}</div>
                            <div className={`text-xs text-right mt-3`}>📅{item.deadline}</div>
                        </li>
                    )
                } )}
            </ul>

        </div>


    )
}
// bg-
const statusColor = {
    undone: "--undone",
    processing: "--processing",
    testing: "--testing",
    done: "--done",
} ;
