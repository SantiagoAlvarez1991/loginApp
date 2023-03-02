import { AuthenticationToken, CreateUserInput, User } from "../types/types"

export interface LoginData {
    email: string,
    password: string
}

export const fetchloginUser = async({email, password} : LoginData) : Promise<AuthenticationToken> => {
    const request = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers : {
            'Content-Type': 'application/json'            
        },
        body : JSON.stringify({
            email: email,
            password: password
        })
    })       
    const response = await request.json()
    return response
}

export const fetchProfileUser = async(token : string) : Promise<User> => {
    const request = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}` 
        }
    })
    console.log(request);
    
    const response = await request.json()
    return response  
}

export const fetchCreateUser = async(userData : CreateUserInput) : Promise<User> => {
    const request = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(userData)
    })
    console.log(request)
    const response = request.json()
    return response
}