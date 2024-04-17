import { AboutContainer, ArticleAbout, ArticleImage } from "./About.styled"
import imageAbout from '../../assets/ImageAbout.png'
import { motion } from "framer-motion"
import { fadeInBottomVariant } from "../../utils/Variants"

export const About = () => {
    return (
        <AboutContainer id="sobre"
            as={motion.article}
            variants={fadeInBottomVariant}
            initial='hidden'
            whileInView='visible'
        >
            <ArticleImage>
              <img 
                src={imageAbout} 
                alt="" 
               />
            </ArticleImage>

            <ArticleAbout>
                <header>
                    <h2>Sobre</h2>
                </header>
                <p>
                Somos uma empresa jovem e dinâmica.
                Nosso foco está no desenvolvimento de sites e softwares de alta qualidade, 
                trazendo inovação e soluções digitais para os nossos clientes.
                Na nossa empresa, priorizamos o atendimento excepcional e a acessibilidade. 
                Entendemos que cada cliente é único e merece uma abordagem personalizada. Além disso, nos dedicamos a oferecer preços acessíveis, tornando nossos serviços disponível a todos. 
                Nosso objetivo é descomplicar a tecnologia para nossos clientes, 
                tornando o processo de criação digital uma experiência simples e gratificante.
                Combinando habilidades técnicas e criatividade, 
                estamos prontos para transformar suas ideias em realidade digital e impulsionar o sucesso do seu negócio.
                </p>
            </ArticleAbout>
        </AboutContainer>
    )
}