"use client"

import React, {useContext, useState} from "react";
import {CurrentID} from "@/context";
import  {AddNewTicket} from "@/types"

interface Props {
    onadding : (data:AddNewTicket) =>void
}
export default function AddTicket ( {onadding} :Props )  {
    const currentID = useContext(CurrentID)
    const [ data , setData ] = useState<AddNewTicket>(
        { title : "", deadline : "" , description : "--"  , projectId : currentID.pj}
    );
    const changeHandle =  (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return (
        <div className=" pt-4 mt-4 border-t border-t-gray-300 font-bold flex gap-x-1 gap-y-2 flex-wrap"  >
            <h3
                className="grow mb-2 text-(--gray-text) text-sm"
            >
                + Tạo Ticket mới
            </h3>

            <input
                onChange={(e) => changeHandle(e)}
                value={data.title}
                name="title"
                type="text"
                className={ "border border-gray-300 rounded-md px-3 py-2 w-4/4 focus:outline-none focus:ring-2 focus:ring-blue-500" }
            />
            <input
                onChange={(e) => changeHandle(e)}
                value={data.deadline}
                type="date"
                name="deadline"
                className="border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500 grow text-gray-600"
            />
            <button
                onClick={ () => {

                    if ( !data.title  ||  !data.deadline ) {
                        return alert(`Hoàn tất thông tin trước khi thêm Ticket `)
                    }
                    onadding(data)
                    setData({ title : "", deadline : "" , description : "--"  , projectId : currentID.pj})
                }}
                className="w-15  cursor-pointer rounded-md bg-blue-600 text-3xl text-white"
            >
                +
            </button>
        </div>
    ) ;
}