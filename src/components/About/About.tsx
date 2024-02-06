import { AboutContainer, ArticleAbout, ArticleImage } from "./About.styled"
import imageAbout from '../../assets/ImageAbout.png'

export const About = () => {
    return (
        <AboutContainer id="sobre">
            <ArticleImage>
              <img src={imageAbout} alt="" />
            </ArticleImage>

            <ArticleAbout>
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