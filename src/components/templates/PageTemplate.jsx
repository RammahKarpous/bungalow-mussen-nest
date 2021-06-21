import { motion } from 'framer-motion'

const PageTemplate = ({children, extraClassNames}) => {

    const transition = {
        duration: .5, 
        sease: [0.6, .01, -0.05, 0.9 ]
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            
            transition={transition}
            
            className={`page-template ${extraClassNames}`}>
            {children}
        </motion.div>
    )
}

export default PageTemplate
