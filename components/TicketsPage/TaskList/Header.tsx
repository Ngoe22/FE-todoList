import AddTaskDialog from './AddTaskDialog'
import {useContext, useState} from "react";
import type {AddNewTask} from "@/types";
import {taskAPI} from "@/services/api/api.service";
import {useRouter} from "next/navigation";
import {CurrentID} from "@/context";

export default function  Header () {

    const currentID = useContext(CurrentID)
    const router = useRouter()
    const [ isAdding , setIsAdding ] = useState(false);


    return (
        <div className={`flex items-center justify-between pb-5 mb-5 border-gray-300 border-b`}>
            <h3
                className={`text-(--df-text)`}
            >

            </h3>
            <button
                onClick={()=>{
                    console.log(currentID.tk);
                    if ( !currentID.tk ) return alert(`Chọn ticket truớc khi thêm Task !`)
                    setIsAdding(true)
                }}
                className={`bg-(--task-add-btn-bg) text-(--task-add-btn-txt) px-3 py-2 rounded-md text-xs font-bold cursor-pointer`}
            >
                + Thêm Task Mới
            </button>
            <AddTaskDialog
                isOn={isAdding}
                onCancel={()=>{
                    setIsAdding(false)
                }}
                onConfirmPress={async ( data : AddNewTask )=>{
                    const res = await taskAPI.createCsr({...data , id: crypto.randomUUID()})
                    console.log(res)
                    if ( res.status !== 201 ) return alert(`fail`)
                    router.refresh()
                    setIsAdding(false)
                }}
            />
        </div>
    )
}
