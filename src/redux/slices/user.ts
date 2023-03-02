import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCreateUser, fetchloginUser, fetchProfileUser, LoginData } from "../../services/user";
import { CreateUserInput, User } from "../../types/types";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../../utilities/localStorage.utility";
import { RootState } from "../store";
import { getToken } from "./authentication";




export interface UserInitialState {
    isLoading: boolean,
    userData: User | undefined
}

const initialState : UserInitialState = {
    isLoading : false,
    userData: undefined
}

export const getUserAPI = createAsyncThunk(
    'user/getUser', async(token: string) => {
        try{
            const userData = await fetchProfileUser(token)
            return userData
        }
        catch(error){                        
            throw error
        }
    }
)

export const createUserAPI = createAsyncThunk(
    'user/createUser', async(userData : CreateUserInput) => {
        try{
            const newUser = await fetchCreateUser(userData)
            return newUser
        }
        catch(error){
            throw error
        }
    }
)


    //const dispatch : any = () => useAppDispatch()
    //const token = useAppSelector(getToken) 


export const userSlice = createSlice({    
    name : 'user',    
    initialState :  initialState,
    reducers : {     
        resetUser : () => {
            return initialState
        }      
    },
    extraReducers : (builder) => {
        builder
            .addCase(getUserAPI.pending , (state : UserInitialState ) => {
                state.isLoading = true
            })
            .addCase(getUserAPI.fulfilled, (state: UserInitialState, action) => {                              
                state.isLoading = false,
                state.userData = action.payload                
            })
            .addCase(getUserAPI.rejected, (state: UserInitialState) => {                
                state.isLoading = false
            })
            .addCase(createUserAPI.pending, (state : UserInitialState) => {
                state.isLoading = true
            })
            .addCase(createUserAPI.fulfilled, (state: UserInitialState, action) => {
                state.isLoading = false,
                state.userData = action.payload
            })
            .addCase(createUserAPI.rejected, (state: UserInitialState)=> {
                state.isLoading = false
            })
    }
})


export const { resetUser } = userSlice.actions

export const getUserData = (state : RootState) => state.user.userData



