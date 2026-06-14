
// import type {Project}  from "@/types"
import { projectAPI  } from "@/services/api/api.service"

import {ProjectsProvider} from "@/hooks/context"
import {  AddProject , ProjectList ,Header } from "@/components/ProjectPage"


export default async function  Projects() {

    const { data: currentProject } = await projectAPI.getAll();

    return (

        <div className="min-h-screen bg-gray-100 p-8 font-sans">
            <div className="max-w-5xl mx-auto">
                <Header />
                <ProjectsProvider  value={currentProject}>
                    <ProjectList></ProjectList>
                </ProjectsProvider>


            </div>
        </div>
    );
}

