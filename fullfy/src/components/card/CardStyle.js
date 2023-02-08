import styled from "styled-components";

export const MainGrid = styled.div`
    display: grid;
    justify-content: center;
    align-items: baseline;
    width: 80vw;
    min-height: 20vh;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 5vw;
    padding: 5vh 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 15px;
    :hover{
        cursor: pointer;
    }
    img {
        width: 50%;
        height: 40%;
    }
    .cardInfo {
        display: flex;
        margin-top: 45px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 33%;
        align-self: center;
        font-size: 2vh;
    }
`