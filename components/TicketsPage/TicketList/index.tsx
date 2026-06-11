"use client"

import  {useContext} from "react";
import {AllTkContext ,CurrentID }from "@/context"
import AddTicket from "./AddTicket";
import TicketItem from "./TicketItem";
import {useRouter} from "next/navigation";

import {  ticketAPI  } from "@/services/api/api.service"


export default function TicketList (  ) {

    const allTk = useContext(AllTkContext)
    const currentID = useContext(CurrentID)
    const router = useRouter();
    //
    const ticketSelect = ( tkId:string  )=> {
        router.replace(`/Tickets/?pj=${currentID.pj}&tk=${tkId}`,
            {scroll: false,});
    }




    const list =[] ;
    for ( const item of allTk ) {
        list.push(
            <TicketItem
                key={item.id}
                isSelected={item.id === currentID.tk}
                title={item.title}
                deadLine={item.deadline}
                onselect = { ()=> {
                    ticketSelect(item.id )
                } }
                ondelete = { async ()=> {
                    const result = await ticketAPI.deleteCsr(item.id)
                    console.log(result)
                } }
            />
        )
    }
    return (
        <div>

            <h2 className=" pb-4 mb-4 border-b border-b-gray-300 font-bold text-xl" >
                🏷️ Danh sách Ticket
            </h2>
            <ul className="flex flex-col gap-4 overflow-auto" >
                {list}
            </ul>
            <AddTicket
                onadding = {
                    async  (data) => {
                        const result = await ticketAPI.createCsr(data)
                        console.log(result)
                        router.refresh();
                    }
                }
            />

        </div>
    )
}


