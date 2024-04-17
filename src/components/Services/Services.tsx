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
            as={motion.header}
            variants={fadeInBottomVariant}
            initial='hidden'
            whileInView='visible'
            >
                <h1>Nossos Serviços</h1>
                <Subtitle>Confira alguns de nossos serviços para seu negócio.</Subtitle>
           </HeaderServices>

           <SectionServices>
                <motion.article
                      variants={fadeInBottomVariant}
                      initial='hidden'
                      whileInView='visible'
                >
                    <HiOutlineComputerDesktop />
                    <div>
                        <h3>Criação de Sites</h3>
                        <Subtitle>
                            Desenvolvemos sites de alto padrão 
                            com diversas tecnologias. 
                            Também atendemos sites em WordPress
                        </Subtitle> 
                    </div>
                </motion.article>
                <motion.article
                    variants={fadeInBottomVariant}
                    initial='hidden'
                    whileInView='visible'
                >
                    <FaCode />
                    <div>
                        <h3>Desenvolvimento de Software</h3>
                        <Subtitle>
                        Desenvolvemos softwares sob medida para potencializar 
                        sua empresa, proporcionando eficiência e inovação.
                        </Subtitle> 
                    </div>
                </motion.article>
                <motion.article
                    variants={fadeInBottomVariant}
                    initial='hidden'
                    whileInView='visible'
                >
                    <MdDesignServices />
                    <div>
                        <h3>UX/UI Web Design</h3>
                        <Subtitle>
                        Desenhamos experiências digitais intuitivas e envolventes, 
                        unindo forma e função para criar designs impactantes 
                        que cativam e encantam os usuários.
                        </Subtitle> 
                    </div>
                </motion.article>
           </SectionServices>
        </ServicesContainer>
    )
}