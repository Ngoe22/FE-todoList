"use client"

import { AllProjectsContext } from "@/context";
import {useContext, useState} from "react";
import type { Project } from "@/types";
import {projectAPI} from "@/services/api/api.service";
import {useRouter} from "next/navigation";
import InputSm from "@/components/InputSm";


export default function ProjectList ()  {

    const router = useRouter();
    const projects = useContext(AllProjectsContext)
    const [editingProject, setEditingProject] = useState(``)

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((item :Project) => {
                    return (
                        <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between h-48 border border-gray-100">

                            <div>
                                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">{item.deadline}</span>
                                <h3 className="text-lg font-bold text-gray-800 mt-3 relative">
                                    {item.name}
                                    <InputSm
                                        isOpen={ editingProject === item.id }
                                        initText={ item.name }
                                        onSubmit={ async (text : string)=>{
                                            const res = await projectAPI.updateCsr(item.id, { ...item , name : text })
                                            console.log(res)
                                            setEditingProject(``)
                                            router.refresh()
                                        } }
                                        onClose={ ()=> {setEditingProject(``)} }
                                    />
                                </h3>
                            </div>

                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">

                                <div  className="flex items-center gap-4 bg-gray-100 px-3 py-1 rounded-xs">
                                    <button
                                        onClick={ async () => {
                                            const res = await projectAPI.deleteCsr(item.id)
                                            console.log(res)
                                            router.refresh()
                                        }}
                                        className="text-red-500 hover:text-red-600 text-sm font-medium cursor-pointer"
                                    >
                                        Xóa
                                    </button>

                                    <button
                                        className="text-amber-500  text-sm font-medium cursor-pointer "
                                        onClick={  () => {
                                            setEditingProject(item.id)} }
                                    >
                                        Sửa
                                    </button>

                                </div>
                                <a
                                    href={`/Tickets?pj=${item.id}`}
                                    className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
                                >
                                    Vào Board
                                </a>
                            </div>

                        </div>
                    )

                })}
            </div>

        </div>
    )
}