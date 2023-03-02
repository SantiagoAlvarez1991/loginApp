import { Task, useToDoContext } from "../context/ToDo.context"

const Card = ({nombre, descripcion} : Task) => {

    //const context = useToDoContext()
    const { removeTask } = useToDoContext()

    return(
        <div key={nombre}>
            <p>Titulo tarea: {nombre}</p>
            <p>Descripcion: {descripcion}</p>
            <button onClick={()=> removeTask(nombre)}>X</button>
        </div>
    )
}

export default Card