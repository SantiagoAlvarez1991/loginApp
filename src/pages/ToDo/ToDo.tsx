import CardList from "./components/CardList"
import Form from "./components/Form"
import { ToDoProvider } from "./context/ToDo.context"

const ToDo = () => {
    return(
        <ToDoProvider>            
            <Form/>
            <CardList/>              
        </ToDoProvider>   
    )
}

export default ToDo