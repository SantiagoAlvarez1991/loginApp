import { useState } from "react"
import { useToDoContext } from "../context/ToDo.context"


interface Tarea {
    descripcion: string,
	nombre: string
}


const Form = ()=> {

    const { addTask } = useToDoContext()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    

    const handleSubmit = () => {
        addTask({descripcion: description, nombre: title})
        setTitle('')
        setDescription('')        
    }

    return(
        <div>
             <form onSubmit={(e) => e.preventDefault()}> 
                <label htmlFor='title'>Title</label>
                <input 
                    type='text' 
                    id='title' 
                    name='title' 
                    placeholder='write a title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>          
                </input>
                <label>Description
                <textarea 
                    rows={4} 
                    placeholder='Write a description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>       
                </textarea>
                </label>
                <button onClick={handleSubmit}>add</button>
             </form> 
        </div>
        
    )
}

export default Form