"use client"

import {useState} from "react";
import AddProjectDialog from "../AddProjectDialog";
import {AddNewProject} from "@/types";
import {projectAPI} from "@/services/api/api.service";
import {useRouter} from "next/navigation";


export default function Header ( ) {

    const router = useRouter();
    const [ isAdding , setIsAdding ] = useState( false );

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex justify-between items-center">

            <div className={`flex items-center justify-between w-full`} >
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Dự Án</h1>
                {/*<p className="text-sm text-gray-500"></p>*/}

                <button
                    onClick={() => setIsAdding(true)}
                    className={`bg-(--task-add-btn-bg) text-(--task-add-btn-txt) px-3 py-2 rounded-md text-sm font-bold cursor-pointer`}
                > + Thêm dự án mới</button>
            </div>


            {/*===========*/}
            <AddProjectDialog
                isOpen={ isAdding}
                onSubmit={ async (newP:AddNewProject) => {
                     const res= await projectAPI.createCsr( { ...newP , id:crypto.randomUUID() })
                    console.log(res)
                    setIsAdding(false)
                    router.refresh()
                } }
                onClose={()=>{ setIsAdding(false) }}
            />
        </div>


    )
}