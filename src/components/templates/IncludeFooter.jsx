import Footer from '../footer/Footer';

const IncludeFooter = ({children}) => {
    return (
        <div className="col-start-1 lg:col-start-2 col-end-7 lg:col-end-9 xl:pl-0 lg:pl-20 relative mt-20">
            {children}

            <Footer />
        </div>
    )
}

export default IncludeFooter
