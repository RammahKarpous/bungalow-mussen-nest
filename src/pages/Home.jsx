import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import desktopBgImage from '../assets/images/home/home-bg-image.png'

import Button from "../components/Button"
import { fade } from '../components/animations/variants'

const transition = {
    duration: .8, 
    sease: [.75, 0, .25, 1 ]
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

    const stagger = {
        animate: {
            transition: {
                staggerChildren: .2
            }
        }
    }

    return (
        <motion.div 
            transition={stagger}
            className="col-start-1 -mt-20 col-end-9 relative h-screen">
            
            <motion.div

                transition={transition}
                
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                exit={{ width: '0%' }}

                className={`
                    absolute top-0 left-0 w-full h-full -z-1
                    ${ width < 640 && 'sm-bg-cover' }
                    ${ width > 640 && 'md-bg-cover' }
                    ${ width > 1024 && 'lg-bg-cover' }
                    ${ width > 1280 && 'xl-bg-cover' }
                `}
                
                style={{ background: `url(${desktopBgImage})` }}>    
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                
                transition={transition}
                variants={fade}

                className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent to-black">
                <div

                    className="flex flex-col justify-center items-center gap-2 w-72 absolute left-1/2 bottom-10 md:bottom-32 transform -translate-x-1/2 text-center">
                    
                    <h1 className="text-white">Welkom</h1>
                    <p className="text-white font-medium text-largeBodyText">Bij de mussen-nest voor de ideale vakantie voor twee</p>
                    <Button to="/gallerij/tuin" type="secondary" text="Bezoek de gallerij" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Home