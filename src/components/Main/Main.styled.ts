import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 820px) {
        width: 1200px;
        margin: 1rem auto;
        flex-direction: row-reverse;
    }
`

export const TextContainer = styled.div`
   display: flex;
   width: 70%;
   padding: .2rem;
   gap: 1rem;
   flex-direction: column;

   @media (min-width: 820px) {
     width: 50%;
     align-items: self-start;
   }
   `

export const TitleMain = styled.h1`
    text-align: center;
    font-size: 2.1rem;

    @media (min-width: 820px) {
        text-align: left;
        width: 500px;
        font-size: 2.7rem;
    }
`