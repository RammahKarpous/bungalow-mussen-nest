import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import { useRef } from 'react'

import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

SwiperCore.use([ Navigation, Pagination ])

const Slideshow = ({ images }) => {

    const prevRef = useRef()
    const nextRef = useRef()

    return (
        <Swiper
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}

            tag="section"
            wrapperTag="ul"
            spaceBetween={0}
            slidesPerView={1}
            className="flex"
            loop
        >
        
            {images.map((image, i) => (
                <SwiperSlide tag="li" key={i}>
                    <img className="w-full" src={image.path} alt={image.name} />
                </SwiperSlide>
            ))}

            <div className="absolute flex right-0 bottom-0 z-20">
                <div 
                    ref={prevRef} 
                    className="cursor-pointer text-white bg-green-100 hover:bg-green-200 w-16 h-16 flex items-center justify-center">
                    
                    <img src={chevronLeft} alt="Previous slide" />
                </div>

                <div 
                    ref={nextRef} 
                    className="cursor-pointer text-white bg-green-100 hover:bg-green-200 w-16 h-16 flex items-center justify-center">
                    
                    <img src={chevronRight} alt="Next slide" />
                </div>
            </div>
        </Swiper>
    )
}

export default Slideshow