import React, { useEffect } from 'react'
import {Outlet, redirect, useNavigate} from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Authentication, getIsUserLogged, getToken } from '../../redux/slices/authentication'
import { getUserAPI } from '../../redux/slices/user'
import { RootState } from '../../redux/store'
import { User } from '../../types/types'
import { getLocalStorage } from '../../utilities/localStorage.utility'
import Header from '../Header/Header'
import { Footer, RootLayoutWrapper } from './RootLayout.styles'

const RootLayout = () => {

  //const user = useAppSelector((state : RootState) => state.user as User)
  const userIsLogged = useAppSelector(getIsUserLogged)
  const token = useAppSelector(getToken)
  const dispatch = useAppDispatch()


  // useEffect(()=>{
  //   //console.log(token);    
  //   !!userIsLogged && dispatch(getUserAPI(token))
  // },[userIsLogged, token])

  const authentication = useAppSelector(state => state.authentication as Authentication)
  const navigate = useNavigate()   
  
  useEffect(() => {                
    !!authentication.islogged 
         ? dispatch(getUserAPI(token))    
         : navigate(`/`)  
 },[authentication.islogged])



  return (
    <>  
        {userIsLogged &&  <Header />}
        <RootLayoutWrapper isLogged={userIsLogged}><Outlet /> </RootLayoutWrapper>
        {!userIsLogged &&  <Footer><p>2023</p></Footer>}
        
    </>
  )
}

export default RootLayout


