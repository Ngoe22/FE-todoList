"use client"

import type {Ticket, CurrentId, Task, Project} from '@/types'
import { createContext } from 'react';

const AllTkContext = createContext<Ticket[]>([])

const AllTaskContext = createContext<Task[]>([])

const AllProjectsContext = createContext<Project[]>([])

const CurrentID = createContext <CurrentId> ({ tk:`` ,pj :`` });

export { AllTkContext , CurrentID , AllTaskContext ,AllProjectsContext }