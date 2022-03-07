import { Card } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0px 25px;
    @media only screen and (max-width: 380px) {
        margin-left: 1% ;
        width:70% ;
    }
    @media only screen and (max-width: 780px) {
        margin-left: 1% ;
        width:70% ;
    }
`
export const CardContainer = styled(Card)`
    background: white;
    padding: 10%;
    width: 120%;
`


