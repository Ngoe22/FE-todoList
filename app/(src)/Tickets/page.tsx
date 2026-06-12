// components
import { TopBar ,  TicketList , TaskList} from "@/components/TicketsPage"

// hooks
import { TicketsProvider ,CurrentIdProvider }  from "@/hooks/context/";

//service
import { projectAPI, ticketAPI  } from "@/services/api/api.service"

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

    return (
        <div className={"flex flex-wrap gap-x-8 gap-y-10 m-auto mt-10 w-[95%] mb-3"} >
            <div className={ css.container + "w-4/4" } >
                <TopBar projectName={currentProject.name } />
            </div>

            <div className={ css.container + "w-full lg:w-1/4" } >
                <TicketsProvider allTickets={allTickets} >
                    <CurrentIdProvider CurrentId = { params } >
                        <TicketList />
                    </CurrentIdProvider>
                </TicketsProvider>
            </div>

            <div className={ css.container + "grow "} >
                <CurrentIdProvider CurrentId = { params } >
                    <TaskList  />
                </CurrentIdProvider>
            </div>
        </div>
    )
}

const css = {
    container : "bg-[var(--ctn-bg)] p-4 shadow-xs rounded-xl border border-gray-300 "
}



// http://localhost:3000/Tickets?tk=1&pj=1