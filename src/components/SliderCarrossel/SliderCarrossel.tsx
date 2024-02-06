import { SwiperSlide, Swiper } from "swiper/react"
import { dataCarrossel } from "../../utils/data"
import './SliderCarrossel.css'

export const SliderCarrossel = () => {
    return (
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className="swiperContainer"
            >
                {dataCarrossel.map((item) => (
                <SwiperSlide key={item.id}>
                    <img 
                    src={item.image}
                    alt="Imagem de um computador apresentando projetos" 
                    />    
                </SwiperSlide>
                ))}
            </Swiper>
        
   
    )
}