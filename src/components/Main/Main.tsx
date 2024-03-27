import { IoIosSend } from "react-icons/io"
import { BlueText, Button, Subtitle } from "../../styles/Global.styled"
import { Animation } from "../Animation/Animation"
import { MainContainer, TextContainer, TitleMain } from "./Main.styled"
import { motion } from "framer-motion"
import { fadeInLeftVariant } from "../../utils/Variants"

export const Main = () => {
    return (
        <MainContainer  >
            <Animation />
            <TextContainer 
                // as={motion.div}
                // variants={fadeInLeftVariant}
                // initial='hidden'
                // whileInView='visible'
             >
            <TitleMain>
                Somos especialistas no desenvolvimento de softwares 
                e criação de <BlueText>sites.</BlueText>  
            </TitleMain>
            <Subtitle>
              Tenha presença no mundo digital.
              Transformamos ideias em novos negócios.</Subtitle>

              <Button>
                 Entre em contato
                 <IoIosSend />
              </Button>
            </TextContainer>
        </MainContainer>
    )
}