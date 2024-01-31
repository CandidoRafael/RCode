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
        <MenuItem> <a href="#servicos">Serviços</a></MenuItem>
        <MenuItem> <a href="#portfolio">Portfólio</a></MenuItem>
        <MenuItem> <a href="#sobre">Sobre</a></MenuItem>
        <MenuItem> <a href="#contato">Contato</a></MenuItem>
    </Menu>
    );
};