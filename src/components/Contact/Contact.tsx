import { Button, Subtitle } from "../../styles/Global.styled"
import { ContactContainer, SectionContact } from "./Contact.styled"

export const Contact = () => {
    return (
       <ContactContainer id="contato">
        <header>
            <h1>Vamos trabalhar juntos.</h1>
            <Subtitle>Estamos disponiveis para trabalhar em seu projeto.</Subtitle>
        </header>

        <SectionContact>
            <h2>Contato</h2>
            <p>Fale sobre seu projeto ou sua ideia. Responderemos em até 12 horas</p>
            <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Assunto" />
            <textarea  placeholder="Mensagem...">

            </textarea>
                <Button>Enviar</Button>
            </form>
        </SectionContact>      
       </ContactContainer> 
    )
}