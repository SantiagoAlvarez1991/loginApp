import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { getIsUserLogged, resetAuthentication } from '../../redux/slices/authentication'
import { getUserData, resetUser } from '../../redux/slices/user'
//import { resetUser } from '../../redux/slices/authentication'
import { RootState } from '../../redux/store'
import { User } from '../../types/types'
import { removeLocalStorage } from '../../utilities/localStorage.utility'
import { HeaderElement, ProfileImageWrapper, UserName } from './Header.styles'

const Header = () => {

  const userData = useAppSelector(getUserData)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userIsLogged = useAppSelector(getIsUserLogged)

  const logOut = () => {        
    dispatch(resetAuthentication())
    dispatch(resetUser())
    navigate("/")
  }
  
  return (
    <HeaderElement isLogged={userIsLogged}>
      <div>
        <ProfileImageWrapper>
          <img src={userData?.avatar} alt={userData?.name}/>
        </ProfileImageWrapper>
        <p>Bienvenido</p>
        <UserName>{userData?.name}</UserName>
        <Link to={`bienvenido/${userData?.name}`}>Mi perfil</Link>
        <nav>
          <ul>
            <li><NavLink to={'todo'}>To do</NavLink></li>
            <li><NavLink to={'market'}>Market</NavLink></li>
          </ul>
        </nav>
        <button onClick={() => logOut()}>Cerrar sesión</button>
      </div>
    </HeaderElement>
  )
}

export default Header