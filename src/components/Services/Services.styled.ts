import styled from "styled-components";

export const ServicesContainer = styled.section`
    background-color:  #1F2029;
    margin-top: 3rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const HeaderServices = styled.header`
    text-align: center;
    margin-top: 3rem;
    
    h1 {
        font-size: 2.1rem;
        margin-bottom: .5rem;
    }

    @media (min-width: 820px) {
        width: 1200px;
        margin: 2rem auto;
        text-align: left;
    }
`

export const SectionServices = styled.section`
   display: grid;
    margin-top: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    @media (min-width: 820px) {
        width: 1300px;
        margin: 3rem auto;
    }

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .5rem;

        svg {
            font-size: 6rem;
            color: #3F60AA;
        }

        div {
            width: 60%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: .5rem;
            text-align: center;
        }
    }
`