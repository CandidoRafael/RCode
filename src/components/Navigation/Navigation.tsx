import { Menu, MenuItem } from "./Navigation.styled"

type NavigationProps = {
    direction: string;
    gap: string;
    color: string;
    hovercolor: string;
}

export const Navigation = ({ direction, gap, color,hovercolor }: NavigationProps) => {
    return (
    <Menu 
     direction={direction} 
     gap={gap} 
     color={color}
     hovercolor={hovercolor}
     >
        <MenuItem> <a href="#Home">Home</a></MenuItem>
        <MenuItem> <a href="#solucoes">Soluções</a></MenuItem>
        <MenuItem> <a href="vantagens">Vantagens</a></MenuItem>
        <MenuItem> <a href="#portfolio">Portfólio</a></MenuItem>
        <MenuItem> <a href="#contato">Contato</a></MenuItem>
    </Menu>
    );
};