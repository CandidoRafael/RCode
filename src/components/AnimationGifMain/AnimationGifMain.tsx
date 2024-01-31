import Lottie from "lottie-react"
import animationData from '../../animations/RcodeAnimation.json'
import { AnimationContainer } from "./AnimationGifMain.styled"

export const AnimationGifMain = () => {


    return (
    <AnimationContainer>
        <Lottie animationData={animationData} autoplay loop />
    </AnimationContainer>
    )
}