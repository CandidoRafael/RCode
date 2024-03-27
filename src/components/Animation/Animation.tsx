import Lottie from "lottie-react"
import animationData from '../../utils/RcodeAnimation.json'
import { AnimationContainer } from "./Animation.styled"
import { fadeInRightVariant } from "../../utils/Variants"
import { motion } from "framer-motion"

export const Animation = () => {

    return (
    <AnimationContainer
        // as={motion.div}
        // variants={fadeInRightVariant}
        // initial='hidden'
        // whileInView='visible'
    >
        <Lottie animationData={animationData} autoplay loop />
    </AnimationContainer>
    )
}