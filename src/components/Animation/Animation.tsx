import Lottie from "lottie-react"
import animationData from '../../utils/RcodeAnimation.json'
import { AnimationContainer } from "./Animation.styled"

export const Animation = () => {

    return (
    <AnimationContainer>
        <Lottie animationData={animationData} autoplay loop />
    </AnimationContainer>
    )
}