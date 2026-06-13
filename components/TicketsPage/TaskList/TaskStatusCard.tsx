"use client"

import type {Task,Status} from "@/types"
import * as React from "react";
import InputSm from "@/components/InputSm";
import {taskAPI} from "@/services/api/api.service";
import {useRouter} from "next/navigation";

interface Props {
    list : Task[] ;
    status : Status;
    ondropCallback: () => void;
    onstartdropCallback :  (t:Task) => void;
}
export default function TaskStatusCard ( { list , status ,ondropCallback,onstartdropCallback } :Props ) {

    const router = useRouter()
    const [editingId, setEditingId] = React.useState(``);

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
                            className="bg-(--white-bg) p-2 px-3 rounded-md mt-3 border-t-2 select-none hover:shadow-md duration-300"
                            key={item.id}
                        >
                            <div className={`text-base flex items-center justify-end pb-1 mb-2 border-b border-gray-200  gap-2 opacity-70`}>
                                <button
                                    onClick= { async () => {
                                        const res = await taskAPI.deleteCsr(item.id) ;
                                        console.log(res)
                                        router.refresh()
                                    } }
                                    className={`cursor-pointer `}
                                >
                                    🗑
                                </button>
                                <button
                                    onClick={()=> setEditingId(item.id)}
                                    className={`cursor-pointer `}
                                >
                                    ✏
                                </button>
                            </div>
                            <div className={`text-xs font-bold text-(--gray-text)`}># {item.id}</div>
                            <div className={`text-base font-bold  text-(--df-text) mt-1 relative`}>
                                {item.title}
                                <InputSm
                                    isOpen  ={editingId === item.id}
                                    onSubmit = { async (text:string) => {
                                         const res = await taskAPI.updateCsr ( item.id , { ...item , title: text  } )
                                        console.log(res)
                                        router.refresh()
                                        setEditingId(``)
                                    } }
                                    onClose = {() => {
                                        setEditingId(``)
                                    } }
                                    initText = {item.title}
                                />
                            </div>
                            <div className={`text-sm text-right text-(--gray-text) font-bold mt-3`}>📅{item.deadline}</div>
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
