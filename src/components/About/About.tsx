import { AboutContainer, ArticleAbout, ArticleImage } from "./About.styled"
import imageAbout from '../../assets/ImageAbout.png'
import { motion } from "framer-motion"
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants"

export const About = () => {
    return (
        <AboutContainer id="sobre">
            <ArticleImage
            // as={motion.article}
            // variants={fadeInLeftVariant}
            // initial='hidden'
            // whileInView='visible'
            >
              <img src={imageAbout} alt="" />
            </ArticleImage>

            <ArticleAbout
                // as={motion.article}
                // variants={fadeInRightVariant}
                // initial='hidden'
                // whileInView='visible'
            >
                <header>
                    <h2>Sobre</h2>
                </header>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Blanditiis quas ad iure quod vero reprehenderit nihil 
                  voluptatibus esse temporibus natus consequuntur, 
                  modi fugit? Inventore fugit eaque id officiis non earum.
                  Blanditiis quas ad iure quod vero reprehenderit nihil 
                  voluptatibus esse temporibus natus consequuntur, 
                  Blanditiis quas ad iure quod vero reprehenderit nihil 
                  voluptatibus esse temporibus natus consequuntur, 
                  modi fugit? Inventore fugit eaque id officiis non earum.
                  Blanditiis quas ad iure quod vero reprehenderit nihil 
                  voluptatibus esse temporibus natus consequuntur, 
                </p>
            </ArticleAbout>
        </AboutContainer>
    )
}