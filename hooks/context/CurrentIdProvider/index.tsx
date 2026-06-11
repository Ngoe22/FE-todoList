"use client"

import {ReactNode} from "react";
import type { CurrentId } from "@/types";
import {CurrentID} from "@/context"

interface  Props {
    CurrentId : CurrentId
    children: ReactNode;
}
function TicketsProvider({ CurrentId  ,children } :Props) {

    return (
        <CurrentID.Provider value={CurrentId} >
            {children}
        </CurrentID.Provider>
    )
}

export default TicketsProvider;