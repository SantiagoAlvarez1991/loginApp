import { useEffect } from "react"
import { redirect, useNavigate } from "react-router-dom"
import { useAppSelector, useRedirectLogedUser } from "../../hooks/hooks"
import { RootState } from "../../redux/store"
import FormSingIn from "./components/FormSingIn"
import { SingInWrapper } from "./SingIn.styles"

const SingIn = () => {

    
    //useRedirectLogedUser()    

    return(
        <SingInWrapper>
            <h1>Crea tu cuenta</h1>
            <FormSingIn/>    
        </SingInWrapper>
    )
}

export default SingIn