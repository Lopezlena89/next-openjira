import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '@/interfaces';
import { EntriesContext,entriesReducer } from './';



export interface EntriesState{
     entries:Entry[],
}
const Entries_INITIAL_STATE:EntriesState ={
     entries:[
          {
               _id: uuidv4(),
               description:'Pendiente: No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.',
               status:'pending',
               createdAt:Date.now(),
          },
          {
               _id: uuidv4(),
               description:'In - Progress: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
               status:'in-progress',
               createdAt:Date.now() - 1000000,
          },
          {
               _id: uuidv4(),
               description:'Terminadas: Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. ',
               status:'finished',
               createdAt:Date.now() - 100000
          },
     ],
}

export const EntriesProvider:FC = ({children}) =>{

     const [state, dispatch] = useReducer(entriesReducer,Entries_INITIAL_STATE);
     
     const addNewEntry = (description:string) =>{
          const newEntry:Entry ={
               _id: uuidv4(),
               description,
               createdAt: Date.now(),
               status: 'pending'
          }
          dispatch({type:'[Entry] Add-Entry', payload:newEntry})
     }
     const updateEntry = (entry:Entry) =>{
          
          dispatch({type:'[Entry] Update-Entry',payload:entry})
     }

     return(
          <EntriesContext.Provider value={{
                ...state,

                //methos
                addNewEntry,
                updateEntry
          }}>
               {children}
          </EntriesContext.Provider>
     )
}