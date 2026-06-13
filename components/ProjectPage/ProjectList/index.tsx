"use client"

import { AllProjectsContext } from "@/context";
import {useContext} from "react";
import type { Project } from "@/types";


export default function ProjectList ()  {


    const projects = useContext(AllProjectsContext)

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((item :Project) => (
                    <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between h-48 border border-gray-100">

                        <div>
                            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded"></span>
                            <h3 className="text-lg font-bold text-gray-800 mt-3">{item.name}</h3>
                        </div>

                        {/* Chân Card (Nút hành động) */}
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
                            <a
                                onClick={() => {
                                    console.log( `handleDelete(item.id)` )
                                }}
                                className="text-red-500 hover:text-red-600 text-sm font-medium"
                            >
                                Xóa
                            </a>
                            <a
                                href={`/Tickets?pj=${item.id}`}
                                className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
                            >
                                Vào Board
                            </a>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}