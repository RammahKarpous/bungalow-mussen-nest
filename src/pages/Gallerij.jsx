import TopNavigation from "../components/TopNavigation"
import { gallerijLinks } from '../components/links'

const Gallerij = ({ children, active }) => {
    return (
        <div className="col-start-1 lg:col-start-3 col-end-7 lg:col-end-9 relative mt-20">
            <h1>Gallerij</h1>
            <TopNavigation type={ gallerijLinks } active={active} />
            {children}
        </div>
    )
}

export default Gallerij
