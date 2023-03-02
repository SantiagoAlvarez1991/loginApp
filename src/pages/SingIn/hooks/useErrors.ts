import { useState, useEffect } from "react"
import { CreateUserInput, User } from "../../../types/types"

export const useErrors = (input : CreateUserInput ) => {

    interface Error {
        name: string,
        email: string,
        password: string,
        repeatPassword: string
    }

    enum errorTypes {
        NAME = 'Debes completar este campo',
        EMAIL = 'Debe ser un email válido',
        PASSWORD = 'Usa un combinación de más de 4 caracteres',
        REPEATPASSWORD = 'Las contraseñas deben coincidir'
    }
   
    const [formIsOk, setFormIsOk] = useState<boolean>()
    
    const [error, setError] = useState<Error>({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })  
    const [name, setName] = useState<string>('') 
    const [email, setEmail] = useState<string>('') 
    const [password, setPassword] = useState<string>('') 
    const [repeatPassword, setRepeatPassword] = useState<string>('') 
    
    const passwordLength = 4
    const minimunpasswordLenght = input.password.length >= passwordLength
    const nameInputLenght = input.name.trim() === ''
    const confirmPassword = input.password === input.repeatPassword
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isCorrectEmail = (emailInput: string) => emailInput.match(emailRegex) 

    useEffect(()=> {          
           
        !confirmPassword 
        ? setRepeatPassword(errorTypes.REPEATPASSWORD)
        : setRepeatPassword('')

        !minimunpasswordLenght
        ? setPassword(errorTypes.PASSWORD)
        : setPassword('') 

        !!nameInputLenght
        ? setName(errorTypes.NAME)
        : setName('')

        !isCorrectEmail(input.email)
        ? setEmail(errorTypes.EMAIL)
        : setEmail('')
      
    }, [input])  

    useEffect(()=> {
        setError({
            name: name,
            email: email,
            password: password,
            repeatPassword: repeatPassword
        })
    },[name, email, password, repeatPassword])
    
    useEffect(()=>{
        const validateErrorForm = Object.entries(error).find(singleError => singleError[1].length > 0 )
        validateErrorForm ? setFormIsOk(false) : setFormIsOk(true)
    },[error])

    return {error, formIsOk}
}