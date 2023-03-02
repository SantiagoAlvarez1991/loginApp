import React, { createContext, ReactNode, useContext, useState } from "react";

export const ToDoContext = createContext<ToDoContextI | undefined>(undefined);

interface Props {
    children: ReactNode
}

export interface Task {
    descripcion: string;
	nombre: string
}

interface ToDoContextI {
    tasks : Task[];
    addTask : (Task: Task)=> void;
    removeTask : (name: string)=> void
}

export const ToDoProvider : React.FC<Props> = ({children}) =>{

    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = (newTask : Task) => {
        setTasks([...tasks, newTask])
    }

    const removeTask = (name: string) => {
        setTasks(tasks.filter(task => task.nombre !== name))
    }

    return(
        <ToDoContext.Provider value={{tasks, addTask, removeTask}}>
            {children}
        </ToDoContext.Provider>        
    )
}

export const useToDoContext = () => {
    const context = useContext(ToDoContext)
    if(context === undefined){
        throw new Error("ToDoContext debe ser usado dentro de un ToDoProvider")
    }
    return context;
}

