import { useState, useEffect } from "react"
import { CreateUserInput, User } from "../../../types/types"

export const useErrors = (input : CreateUserInput ) => {

    interface ErrorB {
        name: ErrorTypes,
        email: ErrorTypes,
        password: ErrorTypes,
        confirmPassword: ErrorTypes
    }

    interface ErrorTypes {        
        text: string,
        error: boolean
    }

    interface Error {
        name: string;
        text: string;        
    }

    const [formIsOk, setFormIsOk] = useState<boolean>()
    
    const [error, setError] = useState<Error[]>([])   
    console.log(error);
    
    const confirmPassword = input.password === input.repeatPassword
    const passwordLength = 4
    const minimunpasswordLenght = input.password.length >= passwordLength
    const nameInputLenght = input.name.trim() === ''
   
    useEffect(()=> {     
        !confirmPassword 
        ? setError([...error, { 
            name: 'confirmPassword',
            text: 'Las contraseñas deben coincidir',            
        }])
        : setError([...error.filter(error => error.name !== 'confirmPassword')])
      
    }, [input])  

    useEffect(()=> {         
                              
        !minimunpasswordLenght
        ? setError([...error, { 
            name: 'passwordLenght',
            text: 'La contraseña debe tener 4 o más caracteres',            
        }])
        : setError([...error.filter(error => error.name !== 'passwordLenght')]) 
    }, [input, minimunpasswordLenght])  

    // useEffect(()=>{
    //     const validateErrorForm = Object.entries(error).find(singleError => singleError[1].error === true )
    //     validateErrorForm ? setFormIsOk(false) : setFormIsOk(true)
    // },[error])

    return {error, formIsOk}
}