import TopNavigation from "../components/TopNavigation"
import { gallerijLinks } from '../components/links'

const Gallerij = ({ children, active }) => {
    return (
        <div className="col-start-1 lg:col-start-3 col-end-7 lg:col-end-9 xl:pl-0 lg:pl-20 relative mt-20">
            <h1 className="w-10/12 m-auto mb-3 mt-6">Gallerij</h1>
            <TopNavigation type={gallerijLinks} active={active} />
            {children}
        </div>
    )
}

export default Gallerij
