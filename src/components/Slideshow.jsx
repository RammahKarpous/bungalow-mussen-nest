import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper.scss'

const Slideshow = () => {
    return (
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}  
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}

export default Slideshow
