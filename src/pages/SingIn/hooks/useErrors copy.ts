import { useState, useEffect } from "react"
import { CreateUserInput, User } from "../../../types/types"

export const useErrors = (input : CreateUserInput ) => {

    interface Error {
        name: ErrorTypes,
        email: ErrorTypes,
        password: ErrorTypes,
        confirmPassword: ErrorTypes
    }

    interface ErrorTypes {        
        text: string,
        error: boolean
    }

    const [formIsOk, setFormIsOk] = useState<boolean>()
    
    const [error, setError] = useState<Error>({
        name: {            
            text: '',
            error: false,
        },
        email: {            
            text: '',
            error: false,
        },
        password: {            
            text: '',
            error: false,
        },
        confirmPassword: {            
            text: '',
            error: true,
        },
    })   
    console.log(error);
    

    // useEffect(()=> {  
    //     const confirmPassword = input.password === input.repeatPassword
    //     const passwordLength = 4
    //     const minimunpasswordLenght = input.password.length >= passwordLength
    //     const nameInputLenght = input.name.trim() === ''

    //     !confirmPassword 
    //     ? setError({...error, 
    //             confirmPassword : {
    //                 text: 'Las contraseñas deben coincidir',
    //                 error: true
    //             }                
    //         })
    //     : setError({...error, 
    //             confirmPassword : {
    //                 text: '',
    //                 error: false
    //             }                
    //         });     

    //     !minimunpasswordLenght
    //     ? setError({
    //             ...error,
    //             password : {                
    //                 text: 'La contraseña debe tener 4 o más caracteres',
    //                 error: true
    //             }
    //         })
    //     : setError({
    //         ...error,
    //         password : {                
    //             text: '',
    //             error: false
    //         }
    //     });

    //     !!nameInputLenght
    //     ? setError({
    //         ...error,
    //         name : {                
    //             text: 'Debes completar este campo',
    //             error: true
    //         }
    //     })
    //     : setError({
    //         ...error,
    //         name : {                
    //             text: '',
    //             error: false
    //         }
    //     })
        
    //     // la contraseña debe ser de 4 o mas caracteres
    //     // el campo de nombre no debe quedar vacio
    //     // el campo email debe ser tipo email y no debe estar vacio
    // }, [input])  

    useEffect(()=> {  
        const confirmPassword = input.password === input.repeatPassword
        const passwordLength = 4
        const minimunpasswordLenght = input.password.length >= passwordLength
        const nameInputLenght = input.name.trim() === ''

        !confirmPassword 
        ? setError({...error, 
                confirmPassword : {
                    text: 'Las contraseñas deben coincidir',
                    error: true
                }                
            })
        : setError({...error, 
                confirmPassword : {
                    text: '',
                    error: false
                }                
            });     

        !minimunpasswordLenght
        ? setError({
                ...error,
                password : {                
                    text: 'La contraseña debe tener 4 o más caracteres',
                    error: true
                }
            })
        : setError({
            ...error,
            password : {                
                text: '',
                error: false
            }
        });

        !!nameInputLenght
        ? setError({
            ...error,
            name : {                
                text: 'Debes completar este campo',
                error: true
            }
        })
        : setError({
            ...error,
            name : {                
                text: '',
                error: false
            }
        })
        
        // la contraseña debe ser de 4 o mas caracteres
        // el campo de nombre no debe quedar vacio
        // el campo email debe ser tipo email y no debe estar vacio
    }, [input])  

    useEffect(()=>{
        const validateErrorForm = Object.entries(error).find(singleError => singleError[1].error === true )
        validateErrorForm ? setFormIsOk(false) : setFormIsOk(true)
    },[error])

    return {error, formIsOk}
}