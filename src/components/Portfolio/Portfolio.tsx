import { Subtitle } from "../../styles/Global.styled"
import { SliderCarrossel } from "../SliderCarrossel/SliderCarrossel"
import { PortfolioContainer } from "./Portfolio.styled"

export const Portfolio = () => {
    return (
        <PortfolioContainer>
            <article>
                <h2>Portfolio</h2>
                 <Subtitle>Conheça alguns dos sites mais recentes desenvolvidos pela RCode</Subtitle>
            </article>
            <SliderCarrossel />
        </PortfolioContainer>
    )
}