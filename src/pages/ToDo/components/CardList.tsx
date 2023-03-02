import { useToDoContext } from "../context/ToDo.context"
import Card from "./Card"


const CardList = () => {

    const { tasks } = useToDoContext()

    return(
        <div>
            {tasks && tasks.map(task => <Card nombre={task.nombre} descripcion={task.descripcion}/>)}
            {!tasks.length && <p>No hay tareas agendadas</p>}
        </div>
    )
}

export default CardList