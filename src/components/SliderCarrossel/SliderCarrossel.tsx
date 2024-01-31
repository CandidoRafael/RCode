
import { SwiperSlide, Swiper } from "swiper/react"
import { dataCarrossel } from "../../utils/data"

const styleImage = {
    width: '100%',
    cursor: 'pointer'
}

export const SliderCarrossel = () => {
    return (
        <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
        >
            {dataCarrossel.map((item) => (
            <SwiperSlide key={item.id}>
                <img 
                src={item.image}
                style={styleImage}
                alt="Imagem de um computador apresentando projetos" 
                />    
            </SwiperSlide>
            ))}
        </Swiper>
    )
}