import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchloginUser, fetchProfileUser, LoginData } from "../../services/user";
import { AuthenticationToken, ErrorAuthentication, User } from "../../types/types";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../../utilities/localStorage.utility";
import { RootState } from "../store";


export interface Authentication {
    isLoading: boolean,    
    authentication: AuthenticationToken,
    islogged: boolean
}

const initialState : Authentication = {
    isLoading : false,    
    authentication: {
        access_token: getLocalStorage('token') ?  JSON.parse(getLocalStorage('token')) : "",        
        refresh_token: '',
        statusCode : null,
        message: ''
    },
    islogged: getLocalStorage('token') ? true : false    
}

export const loginUserAPI = createAsyncThunk(
    'authentication/loginUser', async({email, password} : LoginData) => {
        try{
            // la funcion callback siempre debe retornar una promesa
            const login = await fetchloginUser({email, password})
            return login
        }
        catch(error){
            throw error
            
        }
    }
) 

// export const getUserAPI = createAsyncThunk(
//     'user/getUser', async(token: string) => {
//         try{
//             const userData = await fetchProfileUser(token)
//             return userData
//         }
//         catch(error){
//             throw error
//         }
//     }
// )

export const authenticationSlice = createSlice({
    name : 'authentication',
    //initialState :  getLocalStorage('token') ?  JSON.parse(getLocalStorage('userData') as string ) : initialState,
    // initialState :  getLocalStorage('token') 
    //                 ?  {...initialState.authentication.access_token = JSON.parse(getLocalStorage('token')), ...initialState} 
    //                 : initialState,
    initialState :  initialState,
    reducers : {          
        resetAuthentication : () => {   
            removeLocalStorage('token'); 
            return {
                ...initialState, 
                authentication: {
                    ...initialState.authentication, 
                    access_token : ''
                },
                islogged: false
                }
        }     
    },
    extraReducers : (builder) => {
        builder
            .addCase(loginUserAPI.pending , (state : Authentication ) => {
                state.isLoading = true
            })
            .addCase(loginUserAPI.fulfilled, (state: Authentication, action) => {     
                state.isLoading = false,
                state.authentication = action.payload    
                {!!state.authentication.access_token 
                    ? (state.islogged = true,
                        setLocalStorage('token', action.payload.access_token))
                    : state.islogged = false}            
            })
            .addCase(loginUserAPI.rejected, (state: Authentication) => {
                state.isLoading = false
                state.islogged = false
            })
    }
})


export const { resetAuthentication } = authenticationSlice.actions

export const getAuthenticationStatusCode = (state : RootState) => state.authentication.authentication.statusCode
export const getToken = (state : RootState) => state.authentication.authentication.access_token
export const getIsUserLogged = (state : RootState) => state.authentication.islogged



