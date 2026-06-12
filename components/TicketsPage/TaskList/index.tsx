"use client"

import Header from "./Header"
import TaskStatusCard from "./TaskStatusCard";
import type {Task} from "@/types"
import {useContext, useEffect, useState} from "react";
import { CurrentID } from "@/context"
import {taskAPI} from "@/services/api/api.service";

export default function TaskList () {

    const currentID = useContext(CurrentID) ;
    const [ tasks, setTasks ] = useState<Task[]|null>(null);
    const [draggingTasks, setDraggingTasks] = useState<Task|null>(null);


    useEffect(() => {
        async function loadTasks() {
            const res = await taskAPI.getByTicketIdCsr(currentID.tk);
            // console.log(res.data)
            setTasks(res.data);
        }
        loadTasks();
    }, [currentID.tk]);

    if (!tasks) return null;

    const taskFilter :{ [key: string]: Task[] } = {} ;
    for ( const task of tasks) {
        const status = task.status ;
        if ( taskFilter[status] ) {
            taskFilter[status].push( task )
        } else {
            taskFilter[status] = [ task ] ;
        }
    }

    const statusCardsUI = [];
    for ( const type of status ) {
        statusCardsUI.push (
            <TaskStatusCard
                key={type}
                list={ taskFilter[type] ? taskFilter[type] : []  }
                status={type}

                onstartdropCallback = {
                    ( t:Task ) => {
                        setDraggingTasks(t)
                    }
                }
                ondropCallback = { async ()=> {
                    if ( draggingTasks && draggingTasks.status !== type ) {
                        const  updateTask = { ...draggingTasks , status : type }
                        const res = await taskAPI.updateCsr( updateTask.id , updateTask )
                        if(res.statusText !== "OK" )
                            return alert(`something wrong  , pls try later`);

                        setTasks(
                            tasks.map (  (task) =>{
                                    if ( task.id === draggingTasks.id ) {
                                        task.status = type
                                    }
                                    return task
                                }
                            )
                        )
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

