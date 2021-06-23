import TopNavigation from "../components/TopNavigation"
import { gallerijLinks } from '../components/links'
import PageTemplate from "../components/templates/PageTemplate"

import { motion } from 'framer-motion'
import { defaultTransition } from './../components/animations/transitions';
import { fade } from './../components/animations/variants';

const Gallerij = ({ children, active }) => {
    return (
        <PageTemplate>
            <h1>Gallerij</h1>
            <TopNavigation type={gallerijLinks} active={active} />
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fade}
                
                transition={defaultTransition}>
                    
                {children}
            </motion.div>
        </PageTemplate>
    )
}

export default Gallerij

/*






*/ 
