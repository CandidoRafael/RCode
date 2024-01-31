import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  background-color: #ffff;
  padding: .2rem;

  @media(min-width: 668px) {
    justify-content: space-around;
    padding: 0;
  }
`;

export const LogoContainer = styled.div``

export const Logo = styled.img`
  width: 180px;
  object-fit: cover;
  height: 100px;
`;

export const LogoMobile = styled.img`
    width: 55px;
    margin-left: .6rem;
`

export const MenuHamburger = styled.div`
  cursor: pointer;
  display: flex;
  margin-right: .6rem;
  flex-direction: column;
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 3px 0;
  transition: 0.3s;
`;

