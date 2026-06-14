// components
import { TopBar ,  TicketList , TaskList} from "@/components/TicketsPage"

// hooks
import { TicketsProvider ,CurrentIdProvider ,TasksProvider }  from "@/hooks/context/";

//service
import { projectAPI, ticketAPI ,taskAPI  } from "@/services/api/api.service"

// ==========================================================

interface Props {
    searchParams: Promise<{
        tk: string;
        pj: string;
    }>;
}
export default async function Tickets ({ searchParams }: Props) {

    const params = await searchParams;
    const { data: currentProject } = await projectAPI.getById(params.pj);
    const { data: allTickets } = await ticketAPI.getByProjectId(params.pj);
    const { data: allTasks } = await taskAPI.getAll();



    return (
            <div className={"grid grid-cols-4 gap-4 m-auto  w-[95%] overflow-hidden mt-5 mb-3"} >
                <div className={ css.container + "col-span-4  " } >
                    <TopBar projectName={currentProject.name } />
                </div>

                <div className={ css.container + " col-span-4 lg:col-span-1 h-[60vh]  lg:h-[85vh]" } >
                    <TicketsProvider value={allTickets} >
                        <CurrentIdProvider CurrentId = { params } >
                            <TicketList />
                        </CurrentIdProvider>
                    </TicketsProvider>
                </div>

                <div className={ css.container + " col-span-4 lg:col-span-3 h-[60vh]  lg:h-[85vh]"} >
                    <CurrentIdProvider CurrentId = { params } >
                        <TasksProvider value = {allTasks} >
                            <TaskList  />
                        </TasksProvider>
                    </CurrentIdProvider>
                </div>
            </div>



    )
}

const css = {
    container : "bg-[var(--ctn-bg)] p-4 shadow-xs rounded-xl border border-gray-300 "
}



// http://localhost:3000/Tickets?tk=1&pj=1