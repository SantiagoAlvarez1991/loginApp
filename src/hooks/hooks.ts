import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import { useEffect } from 'react'
import { User } from '../types/types'
import { useNavigate, useParams } from 'react-router-dom'
import { getLocalStorage } from '../utilities/localStorage.utility'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useRedirectLogedUser = () => {
    
    const getUser = getLocalStorage('userData')
    const navigate = useNavigate()
    const { userName } = useParams()

    useEffect(()=> {
        const verifyUSer = () => {
            const username = getUser ? navigate(`/${userName}`) : null
            return username
        }
        verifyUSer()
    },[])
}