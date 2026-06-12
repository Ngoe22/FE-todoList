import React, {useEffect} from "react";

interface Props {
    isOpen  : boolean ;
    callback : (text:string) => void;
    initText : string;
}

export default function InputSm (  { isOpen , callback  , initText} :Props ) {

    const [text, setText] = React.useState(initText);

    useEffect( () => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setText(initText)
    },[initText])


    if ( !isOpen ) return null


    return (
        <div
            className={` z-10 left-0 top-0  bg-transparent flex  w-full shadow-xl`}
            style={{ position:"absolute" }}
        >
            <input
                className=" min-w-0 grow p-2 bg-(--white-bg) h-full  focus:outline-sky-200 text-(--df-text)"
                autoFocus={true}
                value={ text }
                onChange={e => setText(e.target.value)}
            />
            <button
                className="flex items-center justify-center px-4  cursor-pointer bg-(--task-add-btn-bg) text-(--task-add-btn-txt) "
                onClick={() => {
                    callback(text)
                }}
            >
                ok
            </button>

        </div>
    )
}