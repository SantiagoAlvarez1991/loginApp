import { FormEvent, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { loginUserAPI } from "../../../redux/slices/authentication"

const FormLogin = () => {

    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const params = useParams()

    const dispatch = useAppDispatch()
    const navigate = useNavigate() 

    console.log(params);
    

    const ref = useRef<HTMLInputElement>(null)

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(
            loginUserAPI({
                email: user,
                password: password
            })
        )
        navigate(`/${user}`)
    }

    useEffect(()=>{
        ref.current && ref.current.focus()
    },[])

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Usuario
                <input 
                    type='text' 
                    placeholder="nombre de usuario" 
                    onChange={(e)=> setUser(e.target.value)}
                    value={user}
                    ref={ref}/>
            </label>
            <label>Contraseña
                <input 
                    type='password' 
                    placeholder="contraseña" 
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}/>
            </label>
            <button>Iniciar sesión</button>
        </form>
    )

}

export default FormLogin