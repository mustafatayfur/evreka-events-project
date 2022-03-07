
import styled from "styled-components";

export const ContainerMap =  styled.div`
    .map{
        width: 380px;
        margin-right: -100px;
        margin-left: -20px;
        @media only screen and (max-width: 380px) {
            
            margin-right: 0px;
            margin-left: -50px;
        }
        @media only screen and (max-width: 780px) {
            width: 580px;
        }
    }
    
`