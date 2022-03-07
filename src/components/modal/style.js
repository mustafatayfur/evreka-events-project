import { Box } from "@mui/system";
import { IoClose } from 'react-icons/io5'
import styled from "styled-components";
import { Button, CircularProgress} from "@mui/material";

export const MyContainer = styled(Box)`
   background: #ffffff ;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #000;
    box-shadow: 24px;
    padding: 4%;
    border-radius: 10px;
    border: none;
    min-height: 250px;
    width: 50% ;
    max-width: 480px ;
    @media only screen and (max-width: 380px) {
        width: 80% ;
    }
    @media only screen and (max-width: 780px) {
        width: 70% ;
    }
`

export const CloseIcon = styled(IoClose)`
    position: absolute;
    right: 3%;
    top: 3%;
    font-size: x-large;
    font-weight: bolder;
    border-radius: 50%;
    &:hover{
    background: rgb(155, 210, 255);
 }
`
export const Spinner = styled(CircularProgress)`
    margin-left: 45%;
     margin-top: 90px;
     font-size: xx-large;
`
export const ActionButton = styled(Button)`
    flex-basis: 50%;
`
