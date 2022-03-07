import TableContainer from '@mui/material/TableContainer';
import styled from "styled-components";

export const ContainerTable = styled(TableContainer)`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-bottom: 20px;
    padding: 0% 3%;
    &:hover{
    cursor: pointer;
    background: rgb(52, 65, 139);
    color: rgb(255, 255, 255);
}
`
export const Label = styled.label`
    font-size: 0.8rem;
`
export const Title = styled.h4`
   margin-bottom: 0px;
`
export const CommentArea = styled.textarea`
   width: 100%;
   min-height: 150px;
   border: 1px solid rgb(160, 160, 160);
`


