import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../../utilities/localStorage.utility";

const initialState : User = {
  id: null,
  email: "",
  password: "",
  name: "",
  role: "",
  avatar: ""
}

export const userSlice = createSlice({
    name : 'user',
    initialState :  getLocalStorage('userData') ?  JSON.parse(getLocalStorage('userData') as string ) : initialState,
    //initialState :  initialState,
    reducers : {
        createUser: (state, action : PayloadAction<User>) => {
            setLocalStorage('userData', action.payload)            
            return action.payload
        },
        loginUser: (state, action) => {
            setLocalStorage('userData', action.payload)
            return {
                ...state,
                user: action.payload.user,
                password: action.payload.password,
                //...action.payload
            }
        },
        modifyUser: (state, action : PayloadAction<User>) => {
            return {...state, ...action.payload}
        },
        resetUser: () => {   
            removeLocalStorage('userData')    
            return initialState
        }
    }
})

export const {createUser, modifyUser, resetUser, loginUser} = userSlice.actions

