"use client"

import {ReactNode} from "react";
import type { Ticket } from "@/types";
import {AllTkContext} from "@/context"

interface  Props {
    allTickets : Ticket[]
    children: ReactNode;
}
function TicketsProvider({ allTickets ,children } :Props) {

    return (
        <AllTkContext.Provider value={allTickets} >
            {children}
        </AllTkContext.Provider>
    )
}

export default TicketsProvider;