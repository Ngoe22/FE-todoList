"use client"

import {ReactNode} from "react";
import type { Ticket } from "@/types";
import {AllTkContext} from "@/context"

interface  Props {
    value : Ticket[]
    children: ReactNode;
}
function TicketsProvider({ value ,children } :Props) {

    return (
        <AllTkContext.Provider value={value} >
            {children}
        </AllTkContext.Provider>
    )
}

export default TicketsProvider;