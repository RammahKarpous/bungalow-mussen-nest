import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'

import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import { useEffect, useRef, useState } from 'react'

import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

SwiperCore.use([ Navigation, Pagination, Thumbs ])

const Slideshow = ({ images, visibleThumbs }) => {

    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);

        //eslint-disable-next-line
    }, []);

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

                <div className="absolute flex justify-between md:justify-end md:right-0 md:bottom-0 z-20 -translate-y-0 -translate-x-0 bottom-0 right-0">
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
                slidesPerView={width < 420 ? 2 : width < 640 ? 3 : visibleThumbs}
                spaceBetween={20}
                className="mt-3"
                freeMode={true}
                >

                    {images.map((image, i) => (
                        <SwiperSlide tag="li" key={i} className={`cursor-pointer opacity-30 mySwiper`}>
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
