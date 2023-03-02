import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'


interface IsActive {
    isActive: boolean
}


export const FormStyles = styled.section`
    label{
        padding-left: 20px ;
        display: block;
        opacity: 50%;
        margin-bottom: 3px;        
    }  
    input{
        margin-bottom: 15px;
        background-color: #06192A;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        &:focus{
           outline: none;
           border: solid 1px #80D42C;
        }    
        
    }  
    input, button{
        display: block;
        width: 100%;
        padding: 0 20px;
        font-size: 1.6rem;
    }
    button{
        margin-top: 30px;
        background-color: #80D42C;
    }
    button:disabled{        
        background-color: #787878;
        color: #06213A;
        cursor: auto
    }
`

export const LoginWrapper = styled(FormStyles)`
    width: 380px;
    align-self: center;
    color: #fff;
    h1{
        font-size: 4.8rem;
        text-align: center;
    }
    p{
        text-align: center;
    }
    a{
        color: #fff;
        font-weight: 800
    }
    
`

export const PasswordWrapper = styled.div<IsActive>`
    position: relative;
    div{
        position: absolute;
        top: calc(50% - 9px);
        right: 20px;
    }
    ${StyledIconBase} {
        cursor: pointer;
        width: 20px;
    }
`