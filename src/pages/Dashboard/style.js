import styled from "styled-components";

export const Wrapper = styled.div`
  
    display: flex;
    flex-direction:row ;
    justify-content:center ;
    border-left: 30px solid rgb(18, 18, 78);
    border-top: 50px solid rgb(18, 18, 78);
    @media only screen and (max-width: 380px) {
        flex-direction:column-reverse ;
        border: 0px solid rgb(18, 18, 78);
        
    }
    @media only screen and (max-width: 780px) {
      flex-direction:column-reverse ;
      border: 5px solid rgb(18, 18, 78);
    }

    @media only screen and (max-width: 980px) {
        
    }  
  
  .dashboard-table {
    flex-basis: 50%;
    margin-left: -10% ;
    @media only screen and (max-width: 380px) {
      margin-left: 0% ;
    }
    @media only screen and (max-width: 780px) {
      margin-left: 0% ;
    }
  }
  h2{
    margin-left: 20px;
  }
`
