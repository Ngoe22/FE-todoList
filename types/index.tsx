type Project = {
    id: string;
    name: string;
    description: string;
    deadline :string ;
};

type Ticket = {
    id: string;
    projectId : string;
    description: string;
    deadline :string ;
    title :string ;
};

type Status = "undone" | "processing" | "testing" | "done";

type Task = {
    id: string;
    ticketId: string;
    projectId: string;
    title: string;
    status: Status;
    deadline: string;
};


type AllData = {
    projects: Project[];
    tickets: Ticket[];
    tasks: Task[];
};

type CurrentId =  {
    tk :string ;
    pj :string
}


type AddNewTicket = {
    title : string ;
    deadline : string ;
    description : string ;
    projectId : string ;
}

export type  {AllData,Project,Ticket,Task,Status , CurrentId , AddNewTicket}
