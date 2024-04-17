import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    @media (min-width: 820px) {
        flex-direction: row;
        width: 1200px;
        margin: 1rem auto;
    }
`

export const ArticleImage = styled.article`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
 

    img {
        width: 80%;
    }
`

export const ArticleAbout = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    text-align: center;
    width: 80%;

    @media (min-width: 820px) {
        text-align: left;
    }

    h2 {
        font-size: 2.1rem;
        color: #253237;
        margin-bottom: .4rem;
    }

    p {
        font-size: 18px;
        color: #253237;
        font-weight: 500;
    }
`