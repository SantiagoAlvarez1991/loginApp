import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { createUserAPI } from "../../../redux/slices/user";
//import { createUser } from "../../../redux/slices/authentication";
import { CreateUserInput, User } from "../../../types/types";
import { setLocalStorage } from "../../../utilities/localStorage.utility";
import { useErrors } from "../hooks/useErrors";
import { InputWrapper, PasswordSection } from "../SingIn.styles";
import { Check } from "@styled-icons/material"


const FormSingIn = () => {


    const dispatch = useAppDispatch()     
    const navigate = useNavigate()
    const ref = useRef<HTMLInputElement>(null)
    
    // enum InputTypes {
    //     USER = "user",
    //     EMAIL = "email",
    //     PASSWORD = "password" }

    

    const [ inputValues, setInputValues ] = useState<CreateUserInput>({
        name: "",
        email: "",
        password: "",    
        repeatPassword: "",
        avatar: "https://noimage.com"         
    })

    const { repeatPassword, ...userValuesforStore } = inputValues
    const { error, formIsOk } = useErrors(inputValues)

    useEffect(()=>{
        ref.current && ref.current.focus()
    },[])

    const handleInput = (e : ChangeEvent<HTMLInputElement>) => {
        setInputValues({ 
            ...inputValues,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            formIsOk   
            ? (
                dispatch(createUserAPI(userValuesforStore)),           
                alert("usuario creado"),
                navigate('/bienvenido')
                
            )     
            : alert('hay errores')

            //dispatch(createUserAPI(userValuesforStore))
            
    }
    

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <InputWrapper>
                <label htmlFor="name"> Usuario </label>
                <input
                    type='text'
                    placeholder="Nombre de usuario"
                    onChange={(e)=>handleInput(e)}
                    value={inputValues.name}   
                    name='name'  
                    id='name'  
                    ref={ref}                                 
                    />
                <p>{error.name}</p>   
                {!error.name.length && <Check/>}         
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="email"> Correo electrónico</label>
                <input
                    type='email'
                    placeholder="Correo electrónico"
                    onChange={(e)=>handleInput(e)}
                    value={inputValues.email}     
                    name= 'email'   
                    id='email'                             
                    />
                <p>{error.email}</p>
                {!error.email.length && <Check/>}
            </InputWrapper>   
            <PasswordSection>
                <InputWrapper>
                    <label htmlFor="pass"> Contraseña </label>
                    <input
                        type='password'
                        placeholder="contraseña"                    
                        onChange={(e)=>handleInput(e)}
                        value={inputValues.password}    
                        name='password' 
                        id='pass'     
                        autoComplete="on"          
                    />
                    <p>{error.password}</p>
                    {!error.password.length && <Check/>}
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="repeatPass"> Confirma tu contraseña </label>
                    <input
                        type='password'
                        placeholder="confirma la contraseña"
                        onChange={(e)=>handleInput(e)}
                        value={repeatPassword}    
                        name='repeatPassword'     
                        id='repeatPass'   
                        autoComplete="on"        
                    />
                    <p>{error.repeatPassword}</p>
                    {(!error.repeatPassword.length && !error.password.length) && <Check/>}
                </InputWrapper>             
            </PasswordSection>             
                       
            <button disabled={!formIsOk}>Enviar</button>

        </form>
    )
}

export default FormSingIn