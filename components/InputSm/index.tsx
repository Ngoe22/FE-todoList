import React, {useEffect} from "react";

interface Props {
    isOpen  : boolean ;
    onSubmit : (text:string) => void;
    onClose : () => void;
    initText : string;
}

export default function InputSm (  { isOpen , onSubmit  , initText,onClose} :Props ) {

    const [text, setText] = React.useState(initText);
    useEffect( () => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (!isOpen)  setText( initText )


    },[initText,isOpen])

    if ( !isOpen ) return null

    return (
        <div
            className={` z-10 left-0 top-0  bg-transparent flex flex-col gap-1 w-full `}
            style={{ position:"absolute" }}
        >
            <input
                className=" min-w-0 grow p-2 bg-(--white-bg) h-full  focus:outline-sky-200 text-(--df-text) shadow-xl"
                autoFocus={true}
                value={ text }
                onChange={e => setText(e.target.value)}
            />
            <div className={`flex items-center justify-end opacity-95`} >
                <button
                    className="px-4  cursor-pointer text-(--task-add-btn-txt) bg-emerald-500 "
                    onClick={() => {
                        if (!text) return alert(`Hoàn tất thông tin trước khi truoc khi Submit `)
                        onSubmit(text)
                    }}
                >
                    ✓
                </button>
                <button
                    className=" px-4  cursor-pointer bg-red-400 text-(--task-add-btn-txt) "
                    onClick={() => {
                        onClose()
                    }}
                >
                    ✗
                </button>
            </div>

        </div>
    )
}
//