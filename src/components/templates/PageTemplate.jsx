import { motion } from 'framer-motion'
import { defaultTransition } from '../animations/transitions'
import { fade } from '../animations/variants'

const PageTemplate = ({children, extraClassNames}) => {

    return (
        <motion.div 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fade}
            
            transition={defaultTransition}
            
            className={`page-template ${extraClassNames}`}>
            {children}
        </motion.div>
    )
}

export default PageTemplate
