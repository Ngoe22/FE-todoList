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
    description :string ;
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

type AddNewTask = {
    title : string ;
    deadline : string ;
    description : string ;
    ticketId :string ;
    projectId : string ;
    status : Status ;
    [key: string]: string;
}

export type  {AllData,Project,Ticket,Task,Status , CurrentId , AddNewTicket , AddNewTask}
