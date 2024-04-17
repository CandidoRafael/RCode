import { FaWhatsapp } from 'react-icons/fa'
import { WhatsButton } from './styles'

export const WhatsappButton = () => {
  return (
    <WhatsButton
      target='_blank' 
      href='https://wa.me/5562986246249'
       
    >
     <FaWhatsapp />
    </WhatsButton>
  )
}
