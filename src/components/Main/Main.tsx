import { IoIosSend } from "react-icons/io"
import { BlueText, Button, Subtitle } from "../../styles/Global.styled"
import { AnimationGifMain } from "../AnimationGifMain/AnimationGifMain"
import { MainContainer, TextContainer, TitleMain } from "./Main.styled"

export const Main = () => {
    return (
        <MainContainer>
            <AnimationGifMain />
            <TextContainer>
            <TitleMain>
                Somos especialistas no desenvolvimento de softwares 
                e criações de <BlueText>sites.</BlueText>  
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