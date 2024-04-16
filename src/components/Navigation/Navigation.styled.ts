import styled from "styled-components";

type MenuProps = {
    direction: string;
    gap: string;
    color: string;
    hovercolor: string;
}

export const Menu = styled.ul<MenuProps>`
 display: flex;
 list-style-type: none;
 padding: 1rem;
 font-size: 16px;
 text-align: center;
 flex-direction: ${({ direction }) => direction}; 
 gap: ${({ gap }) => gap};

  a {
    text-decoration: none;
    color: ${({ color }) => color};
    transition: .2s all linear;

    &:hover {

      color: ${({ hovercolor }) => hovercolor};
    }
    
  }
 `;

export const MenuItem = styled.li`
  font-weight: 500;
  font-size: 1.05rem;
  cursor: pointer;
  letter-spacing: .2px;
`;