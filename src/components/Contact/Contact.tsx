
import { Button, Subtitle } from "../../styles/Global.styled"
import { ContactContainer, SectionContact } from "./Contact.styled"
import { useHandleContact } from "./useHandleContact"

export const Contact = () => {

    const { 
      register, 
      errors, 
      handleForm, 
      handleSubmit,
      loading, 
   } = useHandleContact();
    

    return (
       <ContactContainer id="contato">
        <header>
            <h1>Vamos trabalhar juntos.</h1>
            <Subtitle>Estamos disponiveis para trabalhar em seu projeto.</Subtitle>
        </header>

        <SectionContact>
            <h2>Contato</h2>
            <p>Fale sobre seu projeto ou sua ideia. Responderemos em até 12 horas</p>
            <form onSubmit={handleSubmit(handleForm)}>
             <input 
                type="text"
                id="name"
                placeholder="Nome"
                {...register('name')}
             />
             {errors.name?.message && (<span>{errors.name.message}</span>)}
             <input 
                type="email"
                id="email"
                placeholder="E-mail" 
                {...register('email')} 
             />
             {errors.email?.message && (<span>{errors.email.message}</span>)}
             <input 
                type="text"
                id="subject"
                placeholder="Assunto" 
                {...register('subject')} 
              />
       
              <textarea
                id="message"
                placeholder="Mensagem..."
                {...register('message')}
                >
                  {errors.message?.message && (<span>{errors.message.message}</span>)}
               </textarea>
             <Button disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</Button>
            </form>
        </SectionContact>      
       </ContactContainer> 
    )
}