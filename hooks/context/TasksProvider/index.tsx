"use client"

import {ReactNode} from "react";
import type { Task } from "@/types";
import {AllTaskContext} from "@/context"

interface  Props {
    value : Task[]
    children: ReactNode;
}
function TasksProvider({ value ,children } :Props) {

    return (
        <AllTaskContext.Provider value={value} >
            {children}
        </AllTaskContext.Provider>
    )
}

export default TasksProvider;