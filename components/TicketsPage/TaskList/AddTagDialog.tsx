import {useState} from "react";

interface Props {
    isOn : boolean;
    onCancel : () => void;
    onConfirmPress : () => void;
}
export default function AddTaskDialog ( { isOn , onCancel ,onConfirmPress } : Props ) {

    const [ formValues, setFormValues ] = useState( ()=>{
        const initValue : { [key: string]: string } = {}
        inputs.forEach((item)=> {
            initValue[item.value] = ``
        })
        return initValue
    } );


    if (!isOn) return null ;
    return (
        <div className=" fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-xs ">
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
                        onClick={() => onCancel()}
                        className={`px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 cursor-pointer`}
                    >
                        Hủy
                    </button>
                    <button
                        onClick={() => {
                            onConfirmPress()
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
        value : `daedLine` ,
        inputType : "date",
    } ,
] ;
