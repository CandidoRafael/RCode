import { FooterContainer } from "./Footer.styled";
import logo from '../../assets/LogoCerta.png';

export const Footer = () => {
    return (
        <FooterContainer>
           <section>
            <img src={logo} alt="Logo empresa" />
             <p>Desenvolvendo com profissionalismo e com as melhores práticas do mercado.</p>
           </section>
           
           <ul>
             <li><a href="#home">Home</a></li>
             <li><a href="#servicos">Serviços</a></li>
             <li><a href="#portfolio">Portfólio</a></li>
             <li><a href="#sobre">Sobre</a></li>
             <li><a href="#contato">Contato</a></li>
           </ul>
        </FooterContainer>
    );
};