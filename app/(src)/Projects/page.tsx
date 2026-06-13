
// import type {Project}  from "@/types"
import { projectAPI  } from "@/services/api/api.service"

import {ProjectsProvider} from "@/hooks/context"
import {  AddProject , ProjectList } from "@/components/ProjectPage"


export default async function  Projects() {

    const { data: currentProject } = await projectAPI.getAll();

    return (

        <div className="min-h-screen bg-gray-100 p-8 font-sans">
            <div className="max-w-5xl mx-auto">

                <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard Dự Án</h1>
                        {/*<p className="text-sm text-gray-500"></p>*/}
                    </div>
                </div>

                <AddProject></AddProject>

                <ProjectsProvider  value={currentProject}>
                    <ProjectList></ProjectList>
                </ProjectsProvider>


            </div>
        </div>
    );
}

