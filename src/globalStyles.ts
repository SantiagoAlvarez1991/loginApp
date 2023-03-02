import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        font-family: 'Manrope', sans-serif;
        font-size: 10px;
    }
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        /* padding: 0;
        margin: 0;                */
    }
    p, label{
        font-size: 1.2rem;
    }
    a{
        text-decoration: none;
    }
    input, button{
        font-family: 'Manrope', sans-serif;
        height: 55px;
        border-radius: 20px;
        box-sizing: border-box;
        border: none;
    }
    button{
        cursor: pointer;
        font-weight: 900;
    }   
    input{
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: "color 9999s ease-out, background-color 9999s ease-out";
            transition-delay: 9999s; 
    }    
    }
    
`;

export default GlobalStyle
