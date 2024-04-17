import imageBarber from '../assets/ProjetoBarbearia.png'
import project from '../assets/project.png'

type CarrosselProps = {
    id: number;
    image: string;
}

export const dataCarrossel: CarrosselProps[] = [
    {id: 1, image: project},
    {id: 2, image: imageBarber},
    
]