import styled from "styled-components";

export const MainGrid = styled.div`
    display: grid;
    align-items: baseline;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 15px;
    :hover{
        cursor:pointer;
    }
    img {
        height: 40%;
    }
    .cardInfo {
        width: 90%;
        height: 20%;
        align-items: center;
        justify-content: center;
        
    }
`