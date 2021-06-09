import Footer from '../footer/Footer';

const IncludeFooter = ({children}) => {
    return (
        <div className="include-footer">
            {children}

            <Footer />
        </div>
    )
}

export default IncludeFooter
