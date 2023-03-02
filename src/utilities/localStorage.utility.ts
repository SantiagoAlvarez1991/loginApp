import { User } from "../types/types"

export const setLocalStorage = (key : string, object : object | string) => {
    localStorage.setItem(key, JSON.stringify(object))
}

export const getLocalStorage = (key : string) => {
    return (localStorage.getItem(key) || '')
}

export const removeLocalStorage = (key: string) => {
    return localStorage.removeItem(key)
}