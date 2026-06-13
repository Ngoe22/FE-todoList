"use client"

import Header from "./Header"
import TaskStatusCard from "./TaskStatusCard";
import type {Task} from "@/types"
import {createContext, useContext, useMemo, useState} from "react";
import {AllTaskContext, CurrentID} from "@/context"
import {taskAPI} from "@/services/api/api.service";
import { useRouter } from "next/navigation"

// Trong component



export const UpdateData = createContext(null)


export default function TaskList () {

    const currentID = useContext(CurrentID) ;
    const allTaskContext = useContext(AllTaskContext) ;
    const [draggingTasks, setDraggingTasks] = useState<Task|null>(null);
    const router = useRouter()


    const taskFilter = useMemo( ()=> {
        const list :{ [key: string]: Task[] } = {} ;
        for ( const task of allTaskContext) {
            if (task.ticketId === currentID.tk) {
                const status = task.status ;
                if ( list[status] ) {
                    list[status].push( task )
                } else {
                    list[status] = [ task ] ;
                }
            }
        }
        return list
    },[allTaskContext, currentID.tk] )



    const statusCardsUI = [];
    for ( const type of status ) {
        statusCardsUI.push (
            <TaskStatusCard
                key={type}
                list={ taskFilter[type] ? taskFilter[type] : []  }
                status={type}

                onstartdropCallback = {
                    ( t:Task ) => {setDraggingTasks(t)}
                }

                ondropCallback = { async ()=> {
                    if ( draggingTasks && draggingTasks.status !== type ) {
                        const  updateTask = { ...draggingTasks , status : type }
                        const res = await taskAPI.updateCsr( updateTask.id , updateTask )
                        console.log(res)
                        if(res.status !== 200 )
                            return alert(`!!! co loi , thu lai sau : ( `);
                        router.refresh()
                    }
                } }
            />
        )
    }


    return(
        <div >
            <Header/>
            <ul
                className={` grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3`}
            >
                {statusCardsUI}
            </ul>
        </div>
    )
}




const  status =  [ "undone" , "processing" , "testing" , "done" ]  as const ;

