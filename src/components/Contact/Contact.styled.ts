import styled from "styled-components";

export const ContactContainer = styled.section`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;

    header {
        padding: 1rem;
        padding-bottom: 3rem;
        text-align: center;

        h1 {
            font-size: 2.2rem;
            padding-bottom: .5rem;
        }

        @media (min-width: 1000px) {
            width: 60%;
            padding-left: 5rem;
            text-align: left;
        }
    }

    @media (min-width: 1000px) {
       flex-direction: row;
        width: 1200px;
        margin: 2rem auto;
       align-items: center;
    }
`

export const SectionContact = styled.section`
    text-align: center;
    width: 95%;
    border-radius: 5px;
    padding: 1rem;
    background-color: #F4F5F7;
    margin: auto;

    h2 {
        font-size: 1.8rem;
        padding-bottom: .3rem;
    }

    @media (min-width: 1000px) {
        width: auto;
    }

    p {
        color: #919EAB;
    }

    form {
        display: flex;
        margin-top: .7rem;
        flex-direction: column;
        gap: 1rem;

        span {
            font-size: .7rem;
            color: red;
        }

        input {
            border: none;
            border: 1px solid transparent;
            outline: none;
            padding: 1rem;
            border-radius: 5px;
            transition: .4s all linear;

            &::placeholder {
                color: #919EAB;
            }

            &:focus {
                border: 1px solid #505B60;
            }
        }

        textarea {
            height: 120px;
            border: none;
            resize: none;
            outline: none;
            border: 1px solid transparent;
            border-radius: 5px;
            padding: 1rem;
            transition: .5s all linear;


            &::placeholder {
                color: #919EAB;
            }

            &:focus {
                border: 1px solid #505B60;
            }
        }

    }
`