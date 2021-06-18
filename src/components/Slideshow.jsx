import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import { useRef } from 'react'

import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'
import { useState } from 'react';

SwiperCore.use([ Navigation, Pagination, Thumbs ])

const Slideshow = ({ images, visibleThumbs }) => {

    const prevRef = useRef()
    const nextRef = useRef()

    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div>
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
                thumbs={{ swiper: thumbsSwiper }}
            >
            
                {images.map((image, i) => (
                    <SwiperSlide tag="li" key={i}>
                        <img className="w-full" src={image.path} alt={image.name} />
                    </SwiperSlide>
                ))}

                <div className="absolute flex justify-between md:justify-end md:right-0 md:bottom-0 z-20 w-full top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-y-0 md:-translate-x-0 md:top-auto md:left-auto">
                    <div 
                        ref={prevRef} 
                        className="cursor-pointer text-white bg-green-100 hover:bg-green-200 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition">
                        
                        <img src={chevronLeft} alt="Previous slide" className="transform -translate-x-1" />
                    </div>

                    <div 
                        ref={nextRef} 
                        className="cursor-pointer text-white bg-green-100 hover:bg-green-200 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition">
                        
                        <img src={chevronRight} alt="Next slide" className="transform translate-x-1" />
                    </div>
                </div>
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                watchSlidesVisibility
                watchSlidesProgress
                slidesPerView={visibleThumbs}
                spaceBetween={20}
                className="mt-3">
                    {/* className={`${isActive ? 'opacity-30' : 'opacity-100'}`} */}

                    {images.map((image, i) => (
                        <SwiperSlide tag="li" key={i} className={`cursor-pointer`}>
                            <img className="w-full" src={image.path} alt={image.name} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}

Slideshow.defaultProps = {
    visibleThumbs: 4
}

export default Slideshow
