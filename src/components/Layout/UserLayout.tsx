import { useEffect } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Authentication, getToken } from "../../redux/slices/authentication";
import { getUserAPI, getUserData } from "../../redux/slices/user";
import { RootState } from "../../redux/store";
import { getLocalStorage } from "../../utilities/localStorage.utility";

const UserLayout = () => {


    const {userName} = useParams()
    console.log(userName);

       
    const navigate = useNavigate()    
    const dispatch = useAppDispatch()
    const token = useAppSelector(getToken)
    const userData = useAppSelector(getUserData)
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3NDU5NjU2NSwiZXhwIjoxNjc2MzI0NTY1fQ.MAMlOVM1aiRz3cOd1NIKf1capjcKi4togqCyOR33HS0'


    const authentication = useAppSelector(state => state.authentication as Authentication)

    // useEffect(()=> {
    //     const verifyUSer = () => {
    //         const username = userData?.name !== userName ? navigate(`/${userData?.name}`) : null
    //         return username
    //     }
    //     verifyUSer()
    // },[])

    // useEffect(() => {
    //     console.log(token);
        
    //     token && dispatch(getUserAPI(token))
    // }, [token])

    

    return(
        <>
            {/* <nav>
                <NavLink to={'todo'}>To do</NavLink>
                <NavLink to={'market'}>Market</NavLink>
            </nav> */}
            <section> <Outlet /> </section>
        </>
    )
}

export default UserLayout