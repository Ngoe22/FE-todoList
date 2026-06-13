

"use client"

import {ReactNode} from "react";
import type { Project } from "@/types";
import {AllProjectsContext} from "@/context"

interface  Props {
    value : Project[]
    children: ReactNode;
}
function ProjectsProvider({ value ,children } :Props) {

    return (
        <AllProjectsContext.Provider value={value} >
            {children}
        </AllProjectsContext.Provider>
    )
}

export default ProjectsProvider;