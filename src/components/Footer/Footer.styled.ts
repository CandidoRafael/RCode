import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #1F2029;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-around;

    section {

        p {
         font-size: 11px;
         color: #919EAB;
        }

        img {
            width: 100px;
            height: 60px;
            border-radius: .5rem;
            object-fit: cover;
        }
    }

    ul {
        list-style-type: none;
        
        li {
            padding: .2rem;
            
            a {
                cursor: pointer;
                transition: .3s all;
                color: #919EAB;
                text-decoration: none;

                &:hover {
                    color: #fff;
                }
            }

        }
    }
`