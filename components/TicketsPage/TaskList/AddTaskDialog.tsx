
import {useContext, useEffect, useState} from "react";
import {CurrentID} from "@/context";
import type {AddNewTask} from "@/types";

interface Props {
    isOn : boolean;
    onCancel : () => void;
    onConfirmPress : ( {}:AddNewTask) => void;
}
export default function AddTaskDialog ( { isOn , onCancel ,onConfirmPress } : Props ) {

    const currentId = useContext(CurrentID)
    const [ formValues, setFormValues ] = useState <AddNewTask>  ({
        title: "",
        deadline: "",
        description: "-",
        ticketId: currentId.tk,
        projectId: currentId.pj,
        status :"undone"
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFormValues(prev => ({
            ...prev,
            ticketId: currentId.tk,
            projectId: currentId.pj,
        }))
    }, [currentId.tk, currentId.pj])

    if (!isOn) return null ;
    return (
        <div className=" fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs z-50">
            <div
                className={`bg-white p-3 rounded-md flex flex-col gap-2 min-w-3/4`}
            >
                <div className={`font-bold text-xl`} >Thêm Task Mới</div>
                {
                    inputs.map( (input ,index)=> {
                            return (
                                <div key={index}>
                                    <label>
                                        <div  className={`block text-xs font-semibold text-gray-500 mb-1`}>{input.label}</div>
                                        <input
                                            value={ formValues[input.value] }
                                            onChange={(e)=>{
                                                setFormValues( { ...formValues , [input.value]: e.target.value }  );
                                            }}
                                            className={`w-full p-2.5 border border-gray-300 rounded-lg outline-none focus:border-blue-500 text-sm`}
                                            type={input.inputType} />
                                    </label>
                                </div>
                            )
                        }
                    )
                }

                <div className={`flex gap-2 items-center justify-end mt-2`} >
                    <button
                        onClick={() => {
                            onCancel()
                            setFormValues( {
                                title: "",
                                deadline: "",
                                description: "-",
                                ticketId: currentId.tk,
                                projectId: currentId.pj,
                                status :"undone"
                            } );
                        }}
                        className={`px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 cursor-pointer`}
                    >
                        Hủy
                    </button>
                    <button
                        onClick={() => {
                            for ( const [, value ] of Object.entries( formValues ) ) {
                                if (!value.trim()) return alert("Hoàn tất thông tin trước khi thêm Task ")
                            }
                            onConfirmPress(formValues)
                            setFormValues( {
                                title: "",
                                deadline: "",
                                description: "-",
                                ticketId: currentId.tk,
                                projectId: currentId.pj,
                                status :"undone"
                            } );
                        }}
                        className={`px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 cursor-pointer`}
                    >
                        Tạo Task
                    </button>
                </div>
            </div>
        </div>
    )
}


const inputs = [
    {
        label : `Tiêu đề` ,
        value : `title` ,
        inputType : "text",
    } ,
    {
        label : `Hạn nộp` ,
        value : `deadline` ,
        inputType : "date",
    } ,
] ;
