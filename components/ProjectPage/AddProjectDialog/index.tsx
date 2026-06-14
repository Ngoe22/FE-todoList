"use client"

import type {AddNewProject} from "@/types";
import {useState} from "react";

interface Props {
    isOpen : boolean ;
    onSubmit: ( newP : AddNewProject ) => void ;
    onClose: () => void ;
}

export default function AddProjectDialog ( {isOpen , onSubmit , onClose} : Props )  {


    const [ newProject, setNewProject ] = useState<AddNewProject >(
        {
            name : '' ,
            description : "--" ,
            deadline :``
        }
    )

    if (!isOpen) return null

    return (

        <div className={`fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs z-50`} >

            <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col  gap-4 min-w-[60vw] ">
                <div className={``} > Them du an  </div>



                {inputs.map( (item) => {

                    return <input
                        key={item.name}
                        type = {item.type}
                        placeholder = {item.placeholder}
                        className={item.className}

                        value={ newProject[item.name] }
                        onChange = { (e) =>{
                            setNewProject( {  ...newProject , [item.name]: e.target.value }  );
                        } }
                    />

                } )}

                <div
                    className={`flex items-center justify-end gap-3`}
                >

                    <button
                        onClick={()=>{
                            setNewProject({
                                name : '' ,
                                description : "--" ,
                                deadline :``
                            })
                            onClose();
                        }}
                        className="bg-red-400 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
                    >
                        Huỷ
                    </button>

                    <button
                        onClick={()=>{
                            for ( const [ , value]  of Object.entries(newProject) ) {
                                if ( !value.trim() ) return alert(`Hoan tat thong tin truoc khi submit`)
                            }
                            onSubmit( newProject )
                            setNewProject({
                                name : '' ,
                                description : "--" ,
                                deadline :``
                            })
                        }}
                        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                        Thêm Mới
                    </button>
                </div>
            </div>
        </div>

    )
}

const inputs = [
    {
        type : "text" ,
        name : "name" ,
        placeholder : "Tên dự án..." ,
        className : "border border-gray-300 px-4 py-2 rounded-lg flex-1 focus:outline-none focus:border-blue-500"
    } ,

    {
        type : "date" ,
        name : "deadline" ,
        placeholder : "" ,
        className : "w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm"
    }
]