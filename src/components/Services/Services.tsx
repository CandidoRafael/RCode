import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { Subtitle } from "../../styles/Global.styled"
import { HeaderServices, SectionServices, ServicesContainer } from "./Services.styled"
import { FaCode } from "react-icons/fa"
import { MdDesignServices } from "react-icons/md"
import { fadeInBottomVariant } from "../../utils/Variants"
import { motion } from "framer-motion"


export const Services = () => {

    return (
        <ServicesContainer  id="servicos">
           <HeaderServices
            // as={motion.header}
            // variants={fadeInBottomVariant}
            // initial='hidden'
            // whileInView='visible'
            >
                <h1>Nossos Serviços</h1>
                <Subtitle>Confira alguns de nossos serviços para seu negócio.</Subtitle>
           </HeaderServices>

           <SectionServices
            // as={motion.section}
            // variants={fadeInBottomVariant}
            // initial='hidden'
            // whileInView='visible'
           >
                <article>
                    <HiOutlineComputerDesktop />
                    <div>
                        <h3>Criação de Sites</h3>
                        <Subtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Fuga perferendis harum explicat ladt fuigi adple
                        </Subtitle> 
                    </div>
                </article>
                <article>
                    <FaCode />
                    <div>
                        <h3>Desenvolvimento de Software</h3>
                        <Subtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Fuga perferendis harum explicat ladt fuigi adple
                        </Subtitle> 
                    </div>
                </article>
                <article>
                    <MdDesignServices />
                    <div>
                        <h3>UX/UI Web Design</h3>
                        <Subtitle>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Fuga perferendis harum explicat ladt fuigi adple
                        </Subtitle> 
                    </div>
                </article>
           </SectionServices>
        </ServicesContainer>
    )
}