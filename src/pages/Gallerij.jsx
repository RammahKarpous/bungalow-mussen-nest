import TopNavigation from "../components/TopNavigation"
import { gallerijLinks } from '../components/links'

const Gallerij = ({ children, active }) => {
    return (
        <div>
            <div className="w-10/12 lg:w-full m-auto mb-3 mt-6">
                <h1>Gallerij</h1>
                <TopNavigation type={gallerijLinks} active={active} />
                {children}
            </div>
        </div>
    )
}

export default Gallerij
