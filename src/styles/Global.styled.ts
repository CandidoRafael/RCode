import styled from "styled-components";

export const Subtitle = styled.p`
    font-size: 14px;
    color: #919EAB;
    font-weight: 400;
`

export const BlueText = styled.span`
    color: #2A4FA1;
`

export const Button = styled.button`
    color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: 1.2rem 2rem;
    font-size: 1.2rem;
    border: none;
    font-weight: 600;
    cursor: pointer;
    border-radius: 40px;
    background-color: #2A4FA1;
    transition: .2s all linear;

    &:hover {
        opacity: .9;
    }
`