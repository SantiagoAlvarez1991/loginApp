import styled from "styled-components";
import { IsLogged } from "../../types/types";

export const HeaderElement = styled.header<IsLogged>`
    width: 20%;
    height: 100vh;
    background-color: #06213A;
    color: white;
    display: inline-block;
    vertical-align: top;
    padding: 30px;   
    p{
        &:nth-child(2){
            font-size: 1.5rem;
            margin-block-end: -5px;
        }
    }   
    & > div {
        height: calc(100vh - 60px);
        background-color: rgba(0,0,0,.2);
        border-radius: 20px;
        padding: 30px;
    }   
    a{
        color: white;
    }
    nav{
        margin-top: 50px;
        ul{
            padding: 0;
            list-style: none;
            font-size: 1.5rem;
        }
        li{
            margin: 20px 0;
        }
        
    }
`

export const ProfileImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: green;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 3px #FFF;
    //border: solid 3px #80D42C;
    img{
        width: 100%;  
        height: 100%;
        object-fit:cover      
    }
`
export const UserName = styled.p`
    font-size: 3rem;
    font-weight: 900;
`