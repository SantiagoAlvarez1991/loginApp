import { FormEvent, useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { Authentication, getAuthenticationStatusCode, getToken, loginUserAPI } from "../../../redux/slices/authentication"
import { getUserAPI, getUserData, UserInitialState } from "../../../redux/slices/user"
import { ErrorAuthentication } from "../../../types/types"
import { getLocalStorage } from "../../../utilities/localStorage.utility"
import { Visibility, VisibilityOff } from '@styled-icons/material'
import { PasswordWrapper } from "../Login.styles"


const FormLogin = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isPasswordActive, setIsPasswordActive] = useState<boolean>(false)
    const params = useParams()

    const dispatch = useAppDispatch()
    const navigate = useNavigate() 
    const authentication = useAppSelector(state => state.authentication as Authentication)
    const statusCode = useAppSelector(getAuthenticationStatusCode)
    const userData = useAppSelector(getUserData)
    


    const token = useAppSelector(getToken)
    //const getToken = () => JSON.parse(getLocalStorage('token'))
    //const token = JSON.parse(getLocalStorage('token'))
    const ref = useRef<HTMLInputElement>(null)

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(           
            loginUserAPI({
                email: email,
                password: password
            })            
        )
    }
   
    const HandlePasswordVisibility = () => {
        setIsPasswordActive(prevState => !prevState)    
        // return(
        //     isPasswordActive ? <Visibility/> : <VisibilityOff/>
        // )

    }

    useEffect(()=>{
        ref.current && ref.current.focus()
    },[])

    useEffect(() => {   
        !!authentication.islogged && navigate(`/bienvenido`)           
        //!!authentication.islogged && dispatch(getUserAPI(token))
        // !!userData?.name && navigate(`/perro`)
        //!!userData?.name && navigate(`/${userData?.name}`)
        // navigate(`/${userData?.name}`)
        //console.log(userData?.name);        
    },[authentication])

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor={'email'}>Correo electrónico </label>
                <input 
                    type='text' 
                    placeholder="Correo electrónico" 
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}
                    ref={ref}
                    id='email'
                    />
                    
           
            <label htmlFor="pass">Contraseña </label>
                <PasswordWrapper isActive={isPasswordActive}>
                    <input 
                        type={isPasswordActive ? 'text' : 'password'} 
                        placeholder="Contraseña" 
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                        id='pass'
                        />                        
                    <div onClick={HandlePasswordVisibility}>
                        {isPasswordActive ? <Visibility/> : <VisibilityOff/>}                       
                    </div>                        
                </PasswordWrapper>
           
            <button>Iniciar sesión</button>
        </form>
    )

}

export default FormLogin