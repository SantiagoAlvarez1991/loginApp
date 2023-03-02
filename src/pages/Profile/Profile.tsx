import { FC, useEffect } from "react"
import { RouteProps, useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"
import { getUserData } from "../../redux/slices/user"

/**
 * 
 * @returns Renderiza la información del usuario
 */

const Profile : FC = () => {    

    const {userName} = useParams()
    const userData = useAppSelector(getUserData)



    useEffect(()=> {
            const verifyUSer = () => {
                if(userData?.name !== userName )
                throw Error ('ese no es tu nombre')
            } 
            verifyUSer()
        },[userData?.name, userName])

    return(
        <section>
            <h2>Este es el perfil de {userName}</h2>
        </section>
    )
}

export default Profile



// export const userDataLoder = async ({params} : any) => {
    
//     const { userName } = params
//     if (userData?.name !== userName){
//         throw Error('ese no es tu nombre')
//     }
//     return true
// }