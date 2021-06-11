import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import desktopBgImage from '../assets/images/home/home-bg-image.png'

import Button from "../components/Button"

const transition = {
    duration: 1, 
    sease: [0.6, .01, -0.05, 0.9 ]
}

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);

        //eslint-disable-next-line
    }, []);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={transition}

            className="col-start-1 lg:col-start-2 col-end-7 lg:col-end-9 relative h-screen">
            <div className={`
                    absolute top-0 left-0 w-full h-full -z-1
                    ${ width < 640 && 'sm-bg-cover' }
                    ${ width > 640 && 'md-bg-cover' }
                    ${ width > 1024 && 'lg-bg-cover' }
                    ${ width > 1280 && 'xl-bg-cover' }
                `}
                
                style={{ background: `url(${desktopBgImage})` }}>    
            </div>

            <div
                className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black">
                <motion.div 
                    exit={{ opacity: 0 }}
                    transition={transition}

                    className="flex flex-col justify-center items-center gap-2 w-96 absolute left-1/2 bottom-10 md:bottom-32 transform -translate-x-1/2 text-center">
                    
                    <h1 className="text-white">Welkom</h1>
                    <p className="text-white font-medium text-largeBodyText">Bij de mussen-nest voor de ideale vakantie voor twee</p>
                    <Button to="/gallerij/tuin" type="secondary" text="Bezoek de gallerij" />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Home