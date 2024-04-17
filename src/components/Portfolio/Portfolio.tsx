import { motion } from "framer-motion"
import { Subtitle } from "../../styles/Global.styled"
import { SliderCarrossel } from "../SliderCarrossel/SliderCarrossel"
import { PortfolioContainer } from "./Portfolio.styled"
import { fadeInBottomVariant } from "../../utils/Variants"

export const Portfolio = () => {
    return (
        <PortfolioContainer id="portfolio">
            <motion.article
                 
                 variants={fadeInBottomVariant}
                 initial='hidden'
                 whileInView='visible'
            >
                <h2>Portfolio</h2>
                 <Subtitle>Conheça alguns dos sites mais recentes desenvolvidos pela RCode</Subtitle>
            </motion.article>
            <SliderCarrossel />
        </PortfolioContainer>
    )
}