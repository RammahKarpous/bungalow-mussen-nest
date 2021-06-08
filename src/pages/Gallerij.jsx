import TopNavigation from "../components/TopNavigation"
import { gallerijLinks } from '../components/links'

const Gallerij = ({ children, active }) => {
    return (
        <div className="col-start-1 lg:col-start-3 col-end-7 lg:col-end-9 xl:pl-0 lg:pl-20 relative mt-20">
            <div className="w-10/12 lg:w-full m-auto mb-3 mt-6">
                <h1>Gallerij</h1>
                <TopNavigation type={gallerijLinks} active={active} />
                {children}
            </div>
        </div>
    )
}

export default Gallerij
