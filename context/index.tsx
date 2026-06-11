"use client"

import type { Ticket ,CurrentId} from '@/types'
import { createContext } from 'react';

const AllTkContext = createContext<Ticket[]>([])

const CurrentID = createContext <CurrentId> ({ tk:`` ,pj :`` });

export { AllTkContext , CurrentID }