import styled from "styled-components";

export const Wrapper = styled.div`
    .box-modal{
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    border: 2px solid #000;
    box-shadow: 24px;
    padding: 4%;
    border-radius: 10px;
    border: none;
    min-height: 250px;
}
.fragment{
    margin-left: 45%;
    margin-top: 90px;
    font-size: xx-large;
}
.close-icon{
    position: absolute;
    right: 3%;
    top: 3%;
    font-size: x-large;
    font-weight: bolder;
    border-radius: 50%;
}
.close-icon:hover{
    background: rgb(155, 210, 255);
}
`
