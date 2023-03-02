import styled from 'styled-components'
import { IsLogged } from '../../types/types'



export const RootLayoutWrapper = styled.main<IsLogged>`
    background-color: #06213A ;
    display: ${props => props.isLogged ? 'inline-block' : 'flex'};
    justify-content: center;
    height: ${props => props.isLogged ? '100vh' : '90vh'};
    width: ${props => props.isLogged ? '80%' : '100vw'};
    vertical-align: top
    /* ${props => props.isLogged && `
        display: inline-block
    `} */
`

export const Footer = styled.footer`
    text-align: center;
    background-color: #06213A;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #FFF;
`