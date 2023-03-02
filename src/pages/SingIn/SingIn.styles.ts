import { StyledIconBase } from "@styled-icons/styled-icon";
import styled from "styled-components";
import { FormStyles } from "../Login/Login.styles";

export const SingInWrapper = styled(FormStyles)`
    width: 480px;
    align-self: center;
    color: #fff;
    h1{
        font-size: 4.8rem;
        text-align: center;
    }
    input{
        margin-bottom: 20px;       
    }     
`

export const InputWrapper = styled.div`
    position: relative;
    height: 100%;    
    p{
        color: #FF800B;
        position: absolute;
        //bottom: -16px;
        right: 20px;
        margin: 0;
        font-size: 1rem;
        top: 0;        
    }
    ${StyledIconBase} {  
        position: absolute;
        width: 20px;
        top: 35px;
        right: 20px;
        color: #80D42C;
    }
`

export const PasswordSection = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
    p{
        top: 78px;
        left: 20px;
    }
`