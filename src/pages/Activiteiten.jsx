import TopNavigation from "../components/TopNavigation"
import PageTemplate from "../components/templates/PageTemplate"
import { activiteitenLinks } from './../components/links';

import { motion } from 'framer-motion'
import { defaultTransition } from './../components/animations/transitions';
import { fade } from './../components/animations/variants';

const Activiteiten = ({ children, active }) => {
    return (
        <PageTemplate extraClassNames="page-template col-start-1 col-end-9 md:col-start-2 md:col-end-8">
            <div className="w-10/12 m-auto md:w-full">
                <h1>Activiteiten</h1>
                <TopNavigation type={activiteitenLinks} active={active} change={500} />
            </div>
            
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

export default Activiteiten
