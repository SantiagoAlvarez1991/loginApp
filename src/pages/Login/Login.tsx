import { Link, NavLink } from "react-router-dom"
import { useAppSelector, useRedirectLogedUser } from "../../hooks/hooks"
import FormLogin from "./components/FormLogin"
import { LoginWrapper } from "./Login.styles"


const Login = () => {

    //const state = useAppSelector(state => state.user)
    //useRedirectLogedUser()

    // NavLink me permite hacer estilos porque al hacer click en un NavLink se genera una prop active
    // Link no genera una prop cuando se le da clic
    
    return(
        <LoginWrapper>
            <h1>Bienvenido</h1>
            <FormLogin/>
            <p>No tengo una cuenta, <Link to='singin'>crear una cuenta</Link></p>
        </LoginWrapper>
    )
}

export default Login